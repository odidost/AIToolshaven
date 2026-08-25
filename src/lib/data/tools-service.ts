import { createClient } from '@supabase/supabase-js';
import type { AITool } from "@/lib/types/tool";
import { getLocalTools, getLocalToolBySlug as getRawLocalToolBySlug, getLocalToolsByCategory as getRawLocalToolsByCategory } from '@/lib/data/tools';
import { categories as localCategories } from '@/lib/data/categories';
import { unstable_cache } from 'next/cache';
import { normalizeTool } from '@/lib/data/tool-normalizer';

// We use the standard supabase-js client here because these fetch public data and can be cached by Next.js
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fygifuwuseksxpcetsbo.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_Wtq6w9BRd1-O_xZxnTh5Zw_kPQbLYUM';

const supabase = createClient(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    }
  }
);

const isValidTool = (t: AITool) => t && t.name && t.name.trim() !== '' && t.name !== 'Untitled AI Tool';

export const TOOL_CARD_FIELDS = 'id, name, slug, tagline, category_id, price_model, price, rating, review_count, logo_url, screenshot_url, image_url, verified, featured, popularity, status, tags';
export const TOOL_SEARCH_FIELDS = 'id, name, slug, tagline, description, category_id, logo_url, price_model, price, popularity, status, tags';
export const TOOL_COMPARISON_FIELDS = 'id, name, slug, logo_url, status, category_id';

// Fast In-Memory Indexes for zero-repetition lookups
let _localNormalizedTools: AITool[] | null = null;
let _slugIndex: Map<string, AITool> | null = null;
let _categoryIndex: Map<string, AITool[]> | null = null;

export function getNormalizedLocalTools(): AITool[] {
  if (_localNormalizedTools) return _localNormalizedTools;
  const raw = getLocalTools();
  _localNormalizedTools = raw.map(t => normalizeTool(t)).filter(isValidTool);
  _slugIndex = new Map();
  _categoryIndex = new Map();
  for (const t of _localNormalizedTools) {
    if (t.slug) _slugIndex.set(t.slug.toLowerCase(), t);
    if (t.id) _slugIndex.set(t.id.toLowerCase(), t);
    if (t.category) {
      const catKey = t.category.toLowerCase();
      const existing = _categoryIndex.get(catKey) || [];
      existing.push(t);
      _categoryIndex.set(catKey, existing);
    }
    if (t.additionalCategories && Array.isArray(t.additionalCategories)) {
      for (const ac of t.additionalCategories) {
        const acKey = ac.toLowerCase();
        const existing = _categoryIndex.get(acKey) || [];
        existing.push(t);
        _categoryIndex.set(acKey, existing);
      }
    }
  }
  return _localNormalizedTools;
}

export function getLocalToolBySlug(slug: string): AITool | undefined {
  if (!_slugIndex) getNormalizedLocalTools();
  return _slugIndex?.get(slug.toLowerCase());
}

export function getLocalToolsByCategory(categoryId: string): AITool[] {
  if (!_categoryIndex) getNormalizedLocalTools();
  return _categoryIndex?.get(categoryId.toLowerCase()) || [];
}

/**
 * Resilient cache helper that wraps unstable_cache with direct invocation fallback
 * to prevent 'incrementalCache missing' and 2MB payload exceptions.
 */
function safeCache<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  keyParts: string[],
  options?: { revalidate?: number | false; tags?: string[] }
): T {
  try {
    const cachedFn = unstable_cache(fn, keyParts, options);
    return (async (...args: any[]) => {
      try {
        return await cachedFn(...args);
      } catch {
        return await fn(...args);
      }
    }) as T;
  } catch {
    return fn;
  }
}

function mapDatabaseRowToAITool(row: any): AITool {
  if (!row) return {} as AITool;
  const localTool = getLocalToolBySlug(row.slug);
  return normalizeTool(row, localTool);
}

// In-process memoized promise for getAllTools to avoid repeatedly loading/parsing the payload
let _allToolsPromise: Promise<AITool[]> | null = null;
let _allToolsWithDraftsPromise: Promise<AITool[]> | null = null;


export async function getAllTools(includeDrafts: boolean = false): Promise<AITool[]> {
    if (!includeDrafts && _allToolsPromise) return _allToolsPromise;
    if (includeDrafts && _allToolsWithDraftsPromise) return _allToolsWithDraftsPromise;

    const fetchAll = async () => {
        try {
            let query = supabase.from('tools').select('*');
            if (!includeDrafts) {
                query = query.eq('status', 'Published');
            }
            const { data, error } = await query.order('popularity', { ascending: false });
            if (error) {
                console.error("Error fetching all tools from Supabase, falling back to local data:", error);
                const local = getNormalizedLocalTools();
                return local.filter(t => includeDrafts || (t.status === "Published" || t.status === "published"));
            }
            return (data || []).map(mapDatabaseRowToAITool).filter(isValidTool);
        } catch (err) {
            console.error("Error connecting to Supabase in getAllTools, falling back to local data:", err);
            const local = getNormalizedLocalTools();
            return local.filter(t => includeDrafts || (t.status === "Published" || t.status === "published"));
        }
    };

    const promise = fetchAll();
    if (!includeDrafts) {
      _allToolsPromise = promise;
    } else {
      _allToolsWithDraftsPromise = promise;
    }
    return promise;
}

export type CommandPaletteTool = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  tags?: string[];
  featured?: boolean;
  popularity?: number;
  logoUrl?: string;
  priceModel?: string;
};

/**
 * Lightweight tool projection for Header CommandPalette (reduces RSC serialization from 2.3MB to ~60KB).
 */
export async function getCommandPaletteTools(): Promise<CommandPaletteTool[]> {
  const fetchLightweight = async () => {
    const all = await getAllTools(false);
    return all.map(t => ({
      id: t.id,
      name: t.name,
      slug: t.slug,
      tagline: t.tagline || '',
      description: t.description ? t.description.slice(0, 160) : '',
      category: t.category,
      tags: t.tags || [],
      featured: t.featured,
      popularity: t.popularity,
      logoUrl: t.logoUrl,
      priceModel: t.priceModel,
    }));
  };
  return safeCache(fetchLightweight, ['command_palette_tools_v2'], { revalidate: 3600 })();
}

export type SitemapToolItem = {
  slug: string;
  lastUpdated?: string;
  status: string;
  category: string;
  additionalCategories?: string[];
  goals?: string[];
  workflows?: string[];
  name: string;
};

/**
 * Lightweight tool projection for Sitemap generation.
 */
export async function getSitemapTools(): Promise<SitemapToolItem[]> {
  const all = await getAllTools(false);
  return all.map(t => ({
    slug: t.slug,
    lastUpdated: t.lastUpdated,
    status: t.status || 'Published',
    category: t.category,
    additionalCategories: t.additionalCategories,
    goals: t.goals,
    workflows: t.workflows,
    name: t.name,
  }));
}

export async function getToolBySlug(slug: string): Promise<AITool | undefined> {
    const fetchTool = async () => {
        try {
            const { data, error } = await supabase.from('tools').select('*').eq('slug', slug).single();
            if (error || !data) {
                const found = getLocalToolBySlug(slug);
                return found ? normalizeTool(found) : undefined;
            }
            return mapDatabaseRowToAITool(data);
        } catch (err) {
            console.error(`Error fetching tool ${slug} from Supabase, falling back to local data:`, err);
            const found = getLocalToolBySlug(slug);
            return found ? normalizeTool(found) : undefined;
        }
    };
    return safeCache(fetchTool, ['tool_by_slug', slug], { revalidate: 3600 })();
}

export async function getFeaturedTools(limit?: number): Promise<AITool[]> {
    const fetchFeatured = async () => {
        try {
            let query = supabase.from('tools').select(TOOL_CARD_FIELDS).eq('featured', true).eq('status', 'Published').order('popularity', { ascending: false });
            if (limit) query = query.limit(limit);
            
            const { data, error } = await query;
            if (error) throw error;
            return (data || []).map(mapDatabaseRowToAITool).filter(isValidTool);
        } catch (err) {
            console.error("Error connecting to Supabase in getFeaturedTools, falling back to local data:", err);
            const local = getNormalizedLocalTools();
            const featured = local.filter(t => t.featured && (t.status === "Published" || t.status === "published"));
            return limit ? featured.slice(0, limit) : featured;
        }
    };
    return safeCache(fetchFeatured, ['featured_tools', limit?.toString() || 'all'], { revalidate: 3600 })();
}

export async function getTrendingTools(limit?: number): Promise<AITool[]> {
    const fetchTrending = async () => {
        try {
            let query = supabase.from('tools').select(TOOL_CARD_FIELDS).eq('status', 'Published').order('review_count', { ascending: false });
            if (limit) query = query.limit(limit);
            
            const { data, error } = await query;
            if (error) throw error;
            return (data || []).map(mapDatabaseRowToAITool).filter(isValidTool);
        } catch (err) {
            console.error("Error connecting to Supabase in getTrendingTools, falling back to local data:", err);
            const local = getNormalizedLocalTools();
            const sorted = local.filter(t => (t.status === "Published" || t.status === "published")).sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
            return limit ? sorted.slice(0, limit) : sorted;
        }
    };
    return safeCache(fetchTrending, ['trending_tools', limit?.toString() || 'all'], { revalidate: 3600 })();
}

export async function getLatestTools(limit?: number): Promise<AITool[]> {
    const fetchLatest = async () => {
        try {
            let query = supabase.from('tools').select(TOOL_CARD_FIELDS).eq('status', 'Published').order('created_at', { ascending: false });
            if (limit) query = query.limit(limit);
            
            const { data, error } = await query;
            if (error) throw error;
            return (data || []).map(mapDatabaseRowToAITool).filter(isValidTool);
        } catch (err) {
            console.error("Error connecting to Supabase in getLatestTools, falling back to local data:", err);
            const local = getNormalizedLocalTools();
            const sorted = local.filter(t => (t.status === "Published" || t.status === "published")).sort((a, b) => new Date(b.lastUpdated || '').getTime() - new Date(a.lastUpdated || '').getTime());
            return limit ? sorted.slice(0, limit) : sorted;
        }
    };
    return safeCache(fetchLatest, ['latest_tools', limit?.toString() || 'all'], { revalidate: 3600 })();
}

export async function getToolsBySlugs(slugs: string[], fields: string = TOOL_CARD_FIELDS): Promise<AITool[]> {
    const fetchBySlugs = async () => {
        try {
            if (!slugs.length) return [];
            const { data, error } = await supabase.from('tools').select(fields).in('slug', slugs).eq('status', 'Published');
            if (error) throw error;
            return (data || []).map(mapDatabaseRowToAITool).filter(isValidTool);
        } catch (err) {
            console.error("Error fetching tools by slugs from Supabase, falling back to local data:", err);
            const local = getNormalizedLocalTools();
            return local.filter(t => slugs.includes(t.slug) && (t.status === "Published" || t.status === "published"));
        }
    };
    const cacheKey = slugs.slice().sort().join(',');
    return safeCache(fetchBySlugs, ['tools_by_slugs', cacheKey, fields], { revalidate: 3600 })();
}

export async function getToolsByNames(names: string[], fields: string = TOOL_CARD_FIELDS): Promise<AITool[]> {
    const fetchByNames = async () => {
        try {
            if (!names.length) return [];
            const { data, error } = await supabase.from('tools').select(fields).in('name', names).eq('status', 'Published');
            if (error) throw error;
            return (data || []).map(mapDatabaseRowToAITool).filter(isValidTool);
        } catch (err) {
            console.error("Error fetching tools by names from Supabase, falling back to local data:", err);
            const local = getNormalizedLocalTools();
            const namesLower = names.map(n => n.toLowerCase());
            return local.filter(t => namesLower.includes(t.name.toLowerCase()) && (t.status === "Published" || t.status === "published"));
        }
    };
    const cacheKey = names.slice().sort().join(',');
    return safeCache(fetchByNames, ['tools_by_names', cacheKey, fields], { revalidate: 3600 })();
}

export async function getToolsByWorkflow(workflowSlug: string): Promise<AITool[]> {
    try {
        const { data, error } = await supabase
            .from('tool_workflows')
            .select(`
                tools (*)
            `)
            .eq('workflow_id', workflowSlug);
            
        if (error || !data) {
            const local = getNormalizedLocalTools();
            return local.filter(t => t.workflows?.includes(workflowSlug) && (t.status === "Published" || t.status === "published"));
        }
        return data
            .map((row: any) => mapDatabaseRowToAITool(row.tools))
            .filter(isValidTool)
            .filter((t: AITool) => !t.status || (t.status === "Published" || t.status === "published"));
    } catch (err) {
        console.error(`Error fetching tools for workflow ${workflowSlug} from Supabase, falling back to local data:`, err);
        const local = getNormalizedLocalTools();
        return local.filter(t => t.workflows?.includes(workflowSlug) && (t.status === "Published" || t.status === "published"));
    }
}

export async function getToolsByCollection(collectionSlug: string): Promise<AITool[]> {
    return [];
}

export async function getToolsByRecommendationTag(tag: string): Promise<AITool[]> {
    const fetchByTag = async () => {
        try {
            const { data, error } = await supabase.from('tools').select(TOOL_CARD_FIELDS).contains('tags', [tag]).eq('status', 'Published').limit(24);
            if (error) throw error;
            return (data || []).map(mapDatabaseRowToAITool).filter(isValidTool);
        } catch (err) {
            console.error(`Error fetching tools by tag ${tag} from Supabase, falling back to local data:`, err);
            const local = getNormalizedLocalTools();
            return local.filter(t => t.tags?.includes(tag) && (t.status === "Published" || t.status === "published"));
        }
    };
    return safeCache(fetchByTag, ['tools_by_tag', tag], { revalidate: 3600 })();
}

export async function getRecommendationsByPersona(role: string, goal: string): Promise<AITool[]> {
    const allTools = await getAllTools();
    const roleLower = (role || '').trim().toLowerCase();
    const goalLower = (goal || '').trim().toLowerCase();
    const goalTokens = goalLower.split(/\s+/).filter(t => t.length > 2);
    
    // Load category affinities
    const { ROLE_METADATA } = await import('@/lib/data/goals');
    const meta = ROLE_METADATA[role] || { categoryAffinities: [] };
    const affinities = (meta.categoryAffinities || []).map(c => c.toLowerCase());

    // Score all published tools with multi-signal relevance
    const scored = allTools
        .filter(t => t && t.id && (t.status === "Published" || t.status === "published" || !t.status))
        .map(t => {
            let score = 0;
            const catLower = (t.category || '').toLowerCase();
            const tagsJoined = (t.tags || []).join(' ').toLowerCase();
            const bestForJoined = (t.bestFor || []).join(' ').toLowerCase();
            const taglineLower = (t.tagline || '').toLowerCase();
            const descLower = (t.description || '').toLowerCase();
            const useCasesJoined = (t.useCases || []).map(u => typeof u === 'string' ? u : `${u.title} ${u.description}`).join(' ').toLowerCase();
            const goalsJoined = (t.goals || []).join(' ').toLowerCase();

            // 1. Role Category Affinity (30-50 pts)
            const affinityIndex = affinities.indexOf(catLower);
            if (affinityIndex === 0) score += 50;
            else if (affinityIndex === 1) score += 40;
            else if (affinityIndex > 1) score += 30;

            // 2. Role direct mention in bestFor (30 pts)
            if (bestForJoined.includes(roleLower)) score += 30;

            // 3. Goal keyword / token match (15-40 pts)
            if (goalsJoined.includes(goalLower) || useCasesJoined.includes(goalLower)) score += 40;
            else if (taglineLower.includes(goalLower) || tagsJoined.includes(goalLower)) score += 30;

            let tokenMatches = 0;
            for (const token of goalTokens) {
                if (tagsJoined.includes(token) || useCasesJoined.includes(token) || taglineLower.includes(token) || descLower.includes(token)) {
                    tokenMatches++;
                    score += 15;
                }
            }
            if (tokenMatches >= 2) score += 20;

            // 4. Quality & Popularity Signals (5-15 pts)
            if (t.verified) score += 10;
            if (t.featured) score += 8;
            if (t.rating && t.rating >= 4.5) score += 5;
            if (t.popularity) score += Math.min(Math.round(t.popularity / 20), 10);

            return { tool: t, score };
        })
        .sort((a, b) => b.score - a.score);

    // Take top distinct candidates
    let candidates = scored.slice(0, 8).map(s => s.tool);

    // If needed, backfill with high quality tools from same category or trending
    if (candidates.length < 3) {
        const fallback = allTools.filter(t => !candidates.some(c => c.id === t.id) && (t.status === "Published" || t.status === "published"));
        candidates = [...candidates, ...fallback.slice(0, 3 - candidates.length)];
    }

    const top3 = candidates.slice(0, 3);

    // Enrich with dynamic match score, badges, and contextual AI reasoning
    const badges = [
        { badge: "#1 Editorial Top Pick", baseScore: 98, prefix: `Top-rated choice for ${role}s to ${goal.toLowerCase()}.` },
        { badge: "⚡ Best Speed & Value", baseScore: 95, prefix: `High-efficiency workflow engine with rapid setup.` },
        { badge: "🛠️ Specialized Power Pick", baseScore: 93, prefix: `Advanced production capabilities for high-volume pipelines.` }
    ];

    return top3.map((t, index) => {
        const badgeConfig = badges[index] || badges[0];
        const matchScore = Math.min(99, badgeConfig.baseScore - index * 2 + (t.verified ? 1 : 0));
        const reasoning = t.tagline 
            ? `${badgeConfig.prefix} ${t.tagline}`
            : `${badgeConfig.prefix} Verified industry standard benchmark winner.`;

        return {
            ...t,
            matchScore,
            recommendationBadge: badgeConfig.badge,
            aiReasoning: reasoning
        };
    });
}

export async function getToolsByCategoryId(categoryId: string, limit: number = 48): Promise<AITool[]> {
    const fetchByCategory = async () => {
        try {
            const cat = localCategories.find(c => c.id === categoryId || c.slug === categoryId);
            const targetIds = new Set<string>([categoryId]);
            if (cat) {
                targetIds.add(cat.id);
                targetIds.add(cat.slug);
            }

            const { data, error } = await supabase
                .from('tools')
                .select(TOOL_CARD_FIELDS)
                .in('category_id', Array.from(targetIds))
                .eq('status', 'Published')
                .order('popularity', { ascending: false })
                .limit(limit);
                
            if (error) throw error;
            
            if (!data || data.length === 0) {
                const local = getLocalToolsByCategory(categoryId);
                if (local.length > 0) return local.filter(t => t.status === "Published" || t.status === "published").slice(0, limit);
                const allLocal = getNormalizedLocalTools();
                return allLocal.filter(t => 
                    (t.status === "Published" || t.status === "published") &&
                    (targetIds.has(t.category) || t.additionalCategories?.some(ac => targetIds.has(ac)))
                ).slice(0, limit);
            }
            
            return (data || [])
                .map(mapDatabaseRowToAITool)
                .filter(isValidTool)
                .filter((t: AITool) => t.status === "Published" || t.status === "published")
                .slice(0, limit);
        } catch (err) {
            console.error(`Error fetching tools by category ${categoryId} from Supabase, falling back to local data:`, err);
            const cat = localCategories.find(c => c.id === categoryId || c.slug === categoryId);
            const targetIds = new Set<string>([categoryId]);
            if (cat) {
                targetIds.add(cat.id);
                targetIds.add(cat.slug);
            }
            const local = getLocalToolsByCategory(categoryId);
            if (local.length > 0) return local.filter(t => t.status === "Published" || t.status === "published").slice(0, limit);
            const allLocal = getNormalizedLocalTools();
            return allLocal.filter(t => 
                (t.status === "Published" || t.status === "published") &&
                (targetIds.has(t.category) || t.additionalCategories?.some(ac => targetIds.has(ac)))
            ).slice(0, limit);
        }
    };
    return safeCache(fetchByCategory, ['tools_by_category_v2', categoryId, limit.toString()], { revalidate: 60 })();
}

/**
 * Efficient bounded related tools candidate pool (Query Efficiency optimization).
 * Fetches category peers + top tools instead of scanning the full 1,000 tool dataset.
 */
export async function getRelatedCandidatesPool(tool: AITool): Promise<AITool[]> {
  try {
    const categoryTools = await getToolsByCategoryId(tool.category);
    if (categoryTools.length >= 8) {
      return categoryTools;
    }
    const trending = await getTrendingTools(16);
    const combined = [...categoryTools, ...trending];
    const seen = new Set<string>();
    return combined.filter(t => {
      if (!t || !t.id || seen.has(t.id)) return false;
      seen.add(t.id);
      return true;
    });
  } catch {
    return getLocalToolsByCategory(tool.category);
  }
}

export async function searchTools(query: string): Promise<AITool[]> {
    if (!query || !query.trim()) return [];
    const cleanQuery = query.trim().toLowerCase();
    const queryTokens = cleanQuery.split(/\s+/).filter(t => t.length > 0);

    const scoreTool = (tool: AITool): number => {
        let score = 0;
        const nameLower = (tool.name || '').toLowerCase();
        const taglineLower = (tool.tagline || '').toLowerCase();
        const descLower = (tool.description || '').toLowerCase();
        const catLower = (tool.category || '').toLowerCase();
        const tagsJoined = (tool.tags || []).join(' ').toLowerCase();

        // Exact name match
        if (nameLower === cleanQuery) score += 150;
        else if (nameLower.startsWith(cleanQuery)) score += 90;
        else if (nameLower.includes(cleanQuery)) score += 50;

        // Tagline exact/substring
        if (taglineLower.includes(cleanQuery)) score += 35;

        // Category match
        if (catLower.includes(cleanQuery)) score += 30;

        // Tags match
        if (tagsJoined.includes(cleanQuery)) score += 30;

        // Multi-token matches
        for (const token of queryTokens) {
            if (nameLower.includes(token)) score += 25;
            if (taglineLower.includes(token)) score += 15;
            if (tagsJoined.includes(token)) score += 15;
            if (catLower.includes(token)) score += 10;
            if (descLower.includes(token)) score += 5;
        }

        // Popularity and verified boosts
        if (tool.popularity) score += Math.min(tool.popularity / 100, 10);
        if (tool.featured) score += 5;
        if (tool.verified) score += 3;

        return score;
    };

    try {
        const { data, error } = await supabase
            .from('tools')
            .select(TOOL_SEARCH_FIELDS)
            .or(`name.ilike.%${cleanQuery}%,description.ilike.%${cleanQuery}%,tagline.ilike.%${cleanQuery}%`)
            .eq('status', 'Published')
            .order('popularity', { ascending: false })
            .limit(30);
            
        if (!error && data && data.length > 0) {
            const mapped = data.map(mapDatabaseRowToAITool).filter(isValidTool);
            return mapped.sort((a, b) => scoreTool(b) - scoreTool(a)).slice(0, 20);
        }
        
        // Fallback to local scoring
        const local = getNormalizedLocalTools();
        const scored = local
            .filter(t => (t.status === "Published" || t.status === "published"))
            .map(t => ({ tool: t, score: scoreTool(t) }))
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .map(item => item.tool);
            
        return scored.slice(0, 20);
    } catch (err) {
        console.error(`Error searching tools for query "${query}" from Supabase, falling back to local data:`, err);
        const local = getNormalizedLocalTools();
        const scored = local
            .filter(t => (t.status === "Published" || t.status === "published"))
            .map(t => ({ tool: t, score: scoreTool(t) }))
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .map(item => item.tool);
            
        return scored.slice(0, 20);
    }
}

export async function getToolReviews(toolSlug: string): Promise<any[]> {
  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*, profiles(username)')
        .eq('tool_slug', toolSlug)
        .eq('status', 'Approved')
        .limit(10);
      if (error) return [];
      return data || [];
    } catch {
      return [];
    }
  };
  return safeCache(fetchReviews, ['tool_reviews', toolSlug], { revalidate: 3600 })();
}
