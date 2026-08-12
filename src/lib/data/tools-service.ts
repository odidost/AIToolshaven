import { createClient } from '@supabase/supabase-js';
import type { AITool } from "@/lib/types/tool";
import { tools as localTools } from '@/lib/data/tools';
import { unstable_cache } from 'next/cache';

// We use the standard supabase-js client here because these fetch public data and can be cached by Next.js
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    }
  }
);

const isValidTool = (t: AITool) => t && t.name && t.name.trim() !== '' && t.name !== 'Untitled AI Tool';

export const TOOL_CARD_FIELDS = 'id, name, slug, tagline, category_id, price_model, rating, review_count, logo_url, verified, featured, popularity, status, tags';
export const TOOL_SEARCH_FIELDS = 'id, name, slug, description, category_id, logo_url, popularity, status';
export const TOOL_COMPARISON_FIELDS = 'id, name, slug, logo_url, color, letter, status';

function mapDatabaseRowToAITool(row: any): AITool {
  if (!row) return {} as AITool;

  const localTool = localTools.find(t => t.id === row.id || t.slug === row.slug);

  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    company: row.company || undefined,
    tagline: row.tagline,
    description: row.description,
    category: row.category_id,
    priceModel: row.price_model,
    price: row.price || undefined,
    rating: row.rating,
    reviewCount: row.review_count,
    logoUrl: row.logo_url,
    imageUrl: row.image_url,
    screenshotUrl: row.screenshot_url || undefined,
    websiteUrl: row.website_url || undefined,
    url: row.url || undefined,
    tags: row.tags || [],
    features: row.features || [],
    pricingPlans: row.pricing_plans || undefined,
    pricing: row.pricing || undefined,
    verified: row.verified,
    featured: row.featured,
    popularity: row.popularity,
    pros: row.pros || [],
    cons: row.cons || [],
    bestFor: row.best_for || [],
    useCases: row.use_cases || [],
    platform: row.platform || undefined,
    api: row.api,
    mobileApp: row.mobile_app,
    openSource: row.open_source,
    freeTrial: row.free_trial,
    socials: row.socials || undefined,
    stats: row.stats || undefined,
    editorial: row.editorial || localTool?.editorial,
    promptExamples: row.prompt_examples || localTool?.promptExamples,
    lastUpdated: row.updated_at || localTool?.lastUpdated,
    status: row.status || localTool?.status,
    
    // Arrays not in Supabase schema but in local JSON
    compareWith: localTool?.compareWith || [],
    similarTools: localTool?.similarTools || [],
    relatedTools: localTool?.relatedTools || [],
    recommendationTags: localTool?.recommendationTags || [],
    collections: localTool?.collections || [],
    audiences: localTool?.audiences || [],
    workflows: localTool?.workflows || [],
    goals: localTool?.goals || [],
  };
}

export async function getAllTools(includeDrafts: boolean = false): Promise<AITool[]> {
    const fetchAll = async () => {
        try {
            let query = supabase.from('tools').select('*');
            if (!includeDrafts) {
                query = query.eq('status', 'Published');
            }
            const { data, error } = await query.order('popularity', { ascending: false });
            if (error) {
                console.error("Error fetching all tools from Supabase, falling back to local data:", error);
                return localTools.filter(t => isValidTool(t) && (includeDrafts || (t.status === "Published" || t.status === "published")));
            }
            return (data || []).map(mapDatabaseRowToAITool).filter(isValidTool);
        } catch (err) {
            console.error("Error connecting to Supabase in getAllTools, falling back to local data:", err);
            return localTools.filter(t => isValidTool(t) && (includeDrafts || (t.status === "Published" || t.status === "published")));
        }
    };
    return unstable_cache(fetchAll, ['all_tools_fetch', includeDrafts.toString()], { revalidate: 3600 })();
}

export async function getToolBySlug(slug: string): Promise<AITool | undefined> {
    const fetchTool = async () => {
        try {
            const { data, error } = await supabase.from('tools').select('*').eq('slug', slug).single();
            if (error || !data) {
                if (typeof window === 'undefined') {
                    try {
                        const fs = require('fs');
                        const path = require('path');
                        const filePath = path.join(process.cwd(), 'data', 'tools.json');
                        if (fs.existsSync(filePath)) {
                            const toolsJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                            const doc = toolsJson.find((d: any) => 
                                (d.publishedData?.slug === slug) || (d.draftData?.slug === slug)
                            );
                            if (doc) return doc.publishedData || doc.draftData;
                        }
                    } catch (e) {
                        console.error("Local file read fallback failed in getToolBySlug", e);
                    }
                }
                return localTools.find(t => t.slug === slug);
            }
            return mapDatabaseRowToAITool(data);
        } catch (err) {
            console.error(`Error fetching tool ${slug} from Supabase, falling back to local data:`, err);
            if (typeof window === 'undefined') {
                try {
                    const fs = require('fs');
                    const path = require('path');
                    const filePath = path.join(process.cwd(), 'data', 'tools.json');
                    if (fs.existsSync(filePath)) {
                        const toolsJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                        const doc = toolsJson.find((d: any) => 
                            (d.publishedData?.slug === slug) || (d.draftData?.slug === slug)
                        );
                        if (doc) return doc.publishedData || doc.draftData;
                    }
                } catch (e) {
                    console.error("Local file read fallback failed in getToolBySlug catch block", e);
                }
            }
            return localTools.find(t => t.slug === slug);
        }
    };
    return unstable_cache(fetchTool, ['tool_by_slug', slug], { revalidate: 3600 })();
}

export async function getFeaturedTools(limit?: number): Promise<AITool[]> {
    const fetchFeatured = async () => {
        try {
            let query = supabase.from('tools').select(TOOL_CARD_FIELDS).eq('featured', true).eq('status', 'Published').order('popularity', { ascending: false });
            if (limit) query = query.limit(limit);
            
            const { data, error } = await query;
            if (error) throw error;
            return (data || []).map(mapDatabaseRowToAITool);
        } catch (err) {
            console.error("Error connecting to Supabase in getFeaturedTools, falling back to local data:", err);
            const featured = localTools.filter(t => t.featured && (t.status === "Published" || t.status === "published"));
            return limit ? featured.slice(0, limit) : featured;
        }
    };
    return unstable_cache(fetchFeatured, ['featured_tools', limit?.toString() || 'all'], { revalidate: 3600 })();
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
            const sorted = [...localTools].filter(t => isValidTool(t) && (t.status === "Published" || t.status === "published")).sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
            return limit ? sorted.slice(0, limit) : sorted;
        }
    };
    return unstable_cache(fetchTrending, ['trending_tools', limit?.toString() || 'all'], { revalidate: 3600 })();
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
            const sorted = [...localTools].filter(t => isValidTool(t) && (t.status === "Published" || t.status === "published")).sort((a, b) => new Date(b.lastUpdated || '').getTime() - new Date(a.lastUpdated || '').getTime());
            return limit ? sorted.slice(0, limit) : sorted;
        }
    };
    return unstable_cache(fetchLatest, ['latest_tools', limit?.toString() || 'all'], { revalidate: 3600 })();
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
            return localTools.filter(t => slugs.includes(t.slug) && (t.status === "Published" || t.status === "published"));
        }
    };
    // Cache key based on sorted slugs to maximize cache hits
    const cacheKey = slugs.slice().sort().join(',');
    return unstable_cache(fetchBySlugs, ['tools_by_slugs', cacheKey, fields], { revalidate: 3600 })();
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
            const namesLower = names.map(n => n.toLowerCase());
            return localTools.filter(t => namesLower.includes(t.name.toLowerCase()) && (t.status === "Published" || t.status === "published"));
        }
    };
    const cacheKey = names.slice().sort().join(',');
    return unstable_cache(fetchByNames, ['tools_by_names', cacheKey, fields], { revalidate: 3600 })();
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
            return localTools.filter(t => t.workflows?.includes(workflowSlug) && (t.status === "Published" || t.status === "published"));
        }
        return data
            .map((row: any) => mapDatabaseRowToAITool(row.tools))
            .filter((t: AITool) => !t.status || (t.status === "Published" || t.status === "published"));
    } catch (err) {
        console.error(`Error fetching tools for workflow ${workflowSlug} from Supabase, falling back to local data:`, err);
        return localTools.filter(t => t.workflows?.includes(workflowSlug) && (t.status === "Published" || t.status === "published"));
    }
}

export async function getToolsByCollection(collectionSlug: string): Promise<AITool[]> {
    return [];
}

export async function getToolsByRecommendationTag(tag: string): Promise<AITool[]> {
    const fetchByTag = async () => {
        try {
            // Using a limit of 24 for recommendation tags rather than returning unbounded results
            const { data, error } = await supabase.from('tools').select(TOOL_CARD_FIELDS).contains('tags', [tag]).eq('status', 'Published').limit(24);
            if (error) throw error;
            return (data || []).map(mapDatabaseRowToAITool);
        } catch (err) {
            console.error(`Error fetching tools by tag ${tag} from Supabase, falling back to local data:`, err);
            return localTools.filter(t => t.tags?.includes(tag) && (t.status === "Published" || t.status === "published"));
        }
    };
    return unstable_cache(fetchByTag, ['tools_by_tag', tag], { revalidate: 3600 })();
}

export async function getRecommendationsByPersona(role: string, goal: string): Promise<AITool[]> {
    const allTools = await getAllTools();
    const roleLower = role.toLowerCase();
    const goalLower = goal.toLowerCase();

    return allTools.filter(t => {
        const matchesRole = t.bestFor?.some(b => b.toLowerCase().includes(roleLower));
        
        const matchesGoal = 
            t.useCases?.some(u => { const val = typeof u === 'string' ? u : u.title; return val.toLowerCase().includes(goalLower) || goalLower.includes(val.toLowerCase()); }) ||
            t.goals?.some(g => g.toLowerCase().replace(/-/g, ' ').includes(goalLower) || goalLower.includes(g.toLowerCase().replace(/-/g, ' '))) ||
            t.tags?.some(tag => tag.toLowerCase().includes(goalLower) || goalLower.includes(tag.toLowerCase()));
        
        return matchesRole && matchesGoal;
    }).sort((a, b) => {
        const aMatchesRole = a.bestFor?.some(b => b.toLowerCase().includes(roleLower));
        const aMatchesGoal = a.useCases?.some(u => { const val = typeof u === 'string' ? u : u.title; return val.toLowerCase().includes(goalLower) || goalLower.includes(val.toLowerCase()); }) ||
            a.goals?.some(g => g.toLowerCase().replace(/-/g, ' ').includes(goalLower) || goalLower.includes(g.toLowerCase().replace(/-/g, ' '))) ||
            a.tags?.some(tag => tag.toLowerCase().includes(goalLower) || goalLower.includes(tag.toLowerCase()));
            
        const bMatchesRole = b.bestFor?.some(b => b.toLowerCase().includes(roleLower));
        const bMatchesGoal = b.useCases?.some(u => { const val = typeof u === 'string' ? u : u.title; return val.toLowerCase().includes(goalLower) || goalLower.includes(val.toLowerCase()); }) ||
            b.goals?.some(g => g.toLowerCase().replace(/-/g, ' ').includes(goalLower) || goalLower.includes(g.toLowerCase().replace(/-/g, ' '))) ||
            b.tags?.some(tag => tag.toLowerCase().includes(goalLower) || goalLower.includes(tag.toLowerCase()));

        const aMatchesBoth = (aMatchesRole && aMatchesGoal) ? 1 : 0;
        const bMatchesBoth = (bMatchesRole && bMatchesGoal) ? 1 : 0;

        if (aMatchesBoth !== bMatchesBoth) {
            return bMatchesBoth - aMatchesBoth;
        }

        return (b.popularity || 0) - (a.popularity || 0);
    });
}

export async function getToolsByCategoryId(categoryId: string): Promise<AITool[]> {
    const fetchByCategory = async () => {
        try {
            // Unbounded limits are unsafe, using a safe upper bound or pagination if this is a directory page
            const { data, error } = await supabase.from('tools').select(TOOL_CARD_FIELDS).eq('category_id', categoryId).eq('status', 'Published').limit(48);
            if (error) throw error;
            
            if (!data || data.length === 0) {
                return localTools.filter(t => t.category === categoryId && (t.status === "Published" || t.status === "published"));
            }
            
            return (data || []).map(mapDatabaseRowToAITool);
        } catch (err) {
            console.error(`Error fetching tools by category ${categoryId} from Supabase, falling back to local data:`, err);
            return localTools.filter(t => t.category === categoryId && (t.status === "Published" || t.status === "published"));
        }
    };
    return unstable_cache(fetchByCategory, ['tools_by_category', categoryId], { revalidate: 3600 })();
}

export async function searchTools(query: string): Promise<AITool[]> {
    try {
        const { data, error } = await supabase
            .from('tools')
            .select(TOOL_SEARCH_FIELDS)
            .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
            .eq('status', 'Published')
            .order('popularity', { ascending: false })
            .limit(20);
            
        if (error) throw error;
        return (data || []).map(mapDatabaseRowToAITool);
    } catch (err) {
        console.error(`Error searching tools for query "${query}" from Supabase, falling back to local data:`, err);
        const queryLower = query.toLowerCase();
        return localTools.filter(t => 
            (t.name.toLowerCase().includes(queryLower) || 
            t.description.toLowerCase().includes(queryLower)) && (t.status === "Published" || t.status === "published")
        ).slice(0, 20);
    }
}
