import { createClient } from '@supabase/supabase-js';
import type { AITool } from "@/lib/types/tool";
import { tools as localTools } from '@/lib/data/tools';

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

function mapDatabaseRowToAITool(row: any): AITool {
  if (!row) return {} as AITool;
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
    editorial: row.editorial || undefined,
    promptExamples: row.prompt_examples || undefined,
    lastUpdated: row.updated_at,
    status: row.status,
  };
}

export async function getAllTools(includeDrafts: boolean = false): Promise<AITool[]> {
    try {
        let query = supabase.from('tools').select('*');
        if (!includeDrafts) {
            query = query.eq('status', 'Published');
        }
        const { data, error } = await query.order('popularity', { ascending: false });
        if (error) {
            console.error("Error fetching all tools from Supabase, falling back to local data:", error);
            return localTools;
        }
        return (data || []).map(mapDatabaseRowToAITool);
    } catch (err) {
        console.error("Error connecting to Supabase in getAllTools, falling back to local data:", err);
        return localTools;
    }
}

export async function getToolBySlug(slug: string): Promise<AITool | undefined> {
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
}

export async function getFeaturedTools(limit?: number): Promise<AITool[]> {
    try {
        let query = supabase.from('tools').select('*').eq('featured', true).eq('status', 'Published').order('popularity', { ascending: false });
        if (limit) query = query.limit(limit);
        
        const { data, error } = await query;
        if (error) {
            console.error("Error fetching featured tools from Supabase, falling back to local data:", error);
            const featured = localTools.filter(t => t.featured);
            return limit ? featured.slice(0, limit) : featured;
        }
        return (data || []).map(mapDatabaseRowToAITool);
    } catch (err) {
        console.error("Error connecting to Supabase in getFeaturedTools, falling back to local data:", err);
        const featured = localTools.filter(t => t.featured);
        return limit ? featured.slice(0, limit) : featured;
    }
}

export async function getTrendingTools(limit?: number): Promise<AITool[]> {
    try {
        let query = supabase.from('tools').select('*').eq('status', 'Published').order('popularity', { ascending: false });
        if (limit) query = query.limit(limit);
        
        const { data, error } = await query;
        if (error) {
            console.error("Error fetching trending tools from Supabase, falling back to local data:", error);
            const sorted = [...localTools].sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
            return limit ? sorted.slice(0, limit) : sorted;
        }
        return (data || []).map(mapDatabaseRowToAITool);
    } catch (err) {
        console.error("Error connecting to Supabase in getTrendingTools, falling back to local data:", err);
        const sorted = [...localTools].sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
        return limit ? sorted.slice(0, limit) : sorted;
    }
}

export async function getLatestTools(limit?: number): Promise<AITool[]> {
    try {
        let query = supabase.from('tools').select('*').eq('status', 'Published').order('created_at', { ascending: false });
        if (limit) query = query.limit(limit);
        
        const { data, error } = await query;
        if (error) {
            console.error("Error fetching latest tools from Supabase, falling back to local data:", error);
            const sorted = [...localTools].sort((a, b) => new Date(b.lastUpdated || '').getTime() - new Date(a.lastUpdated || '').getTime());
            return limit ? sorted.slice(0, limit) : sorted;
        }
        return (data || []).map(mapDatabaseRowToAITool);
    } catch (err) {
        console.error("Error connecting to Supabase in getLatestTools, falling back to local data:", err);
        const sorted = [...localTools].sort((a, b) => new Date(b.lastUpdated || '').getTime() - new Date(a.lastUpdated || '').getTime());
        return limit ? sorted.slice(0, limit) : sorted;
    }
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
            return localTools.filter(t => t.workflows?.includes(workflowSlug));
        }
        return data
            .map((row: any) => mapDatabaseRowToAITool(row.tools))
            .filter((t: AITool) => !t.status || t.status === 'Published');
    } catch (err) {
        console.error(`Error fetching tools for workflow ${workflowSlug} from Supabase, falling back to local data:`, err);
        return localTools.filter(t => t.workflows?.includes(workflowSlug));
    }
}

export async function getToolsByCollection(collectionSlug: string): Promise<AITool[]> {
    return [];
}

export async function getToolsByRecommendationTag(tag: string): Promise<AITool[]> {
    try {
        const { data, error } = await supabase.from('tools').select('*').contains('tags', [tag]).eq('status', 'Published');
        if (error) {
            console.error(`Error fetching tools by tag ${tag} from Supabase, falling back to local data:`, error);
            return localTools.filter(t => t.tags?.includes(tag));
        }
        return (data || []).map(mapDatabaseRowToAITool);
    } catch (err) {
        console.error(`Error fetching tools by tag ${tag} from Supabase, falling back to local data:`, err);
        return localTools.filter(t => t.tags?.includes(tag));
    }
}

export async function getRecommendationsByPersona(role: string, goal: string): Promise<AITool[]> {
    const allTools = await getAllTools();
    const roleLower = role.toLowerCase();
    const goalLower = goal.toLowerCase();

    return allTools.filter(t => {
        const matchesRole = t.bestFor?.some(b => b.toLowerCase().includes(roleLower));
        
        const matchesGoal = 
            t.useCases?.some(u => u.toLowerCase().includes(goalLower) || goalLower.includes(u.toLowerCase())) ||
            t.goals?.some(g => g.toLowerCase().replace(/-/g, ' ').includes(goalLower) || goalLower.includes(g.toLowerCase().replace(/-/g, ' '))) ||
            t.tags?.some(tag => tag.toLowerCase().includes(goalLower) || goalLower.includes(tag.toLowerCase()));
        
        return matchesRole && matchesGoal;
    }).sort((a, b) => {
        const aMatchesRole = a.bestFor?.some(b => b.toLowerCase().includes(roleLower));
        const aMatchesGoal = a.useCases?.some(u => u.toLowerCase().includes(goalLower) || goalLower.includes(u.toLowerCase())) ||
            a.goals?.some(g => g.toLowerCase().replace(/-/g, ' ').includes(goalLower) || goalLower.includes(g.toLowerCase().replace(/-/g, ' '))) ||
            a.tags?.some(tag => tag.toLowerCase().includes(goalLower) || goalLower.includes(tag.toLowerCase()));
            
        const bMatchesRole = b.bestFor?.some(b => b.toLowerCase().includes(roleLower));
        const bMatchesGoal = b.useCases?.some(u => u.toLowerCase().includes(goalLower) || goalLower.includes(u.toLowerCase())) ||
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
    try {
        const { data, error } = await supabase.from('tools').select('*').eq('category_id', categoryId).eq('status', 'Published');
        if (error) {
            console.error(`Error fetching tools by category ${categoryId} from Supabase, falling back to local data:`, error);
            return localTools.filter(t => t.category === categoryId);
        }
        return (data || []).map(mapDatabaseRowToAITool);
    } catch (err) {
        console.error(`Error fetching tools by category ${categoryId} from Supabase, falling back to local data:`, err);
        return localTools.filter(t => t.category === categoryId);
    }
}

export async function searchTools(query: string): Promise<AITool[]> {
    try {
        const { data, error } = await supabase
            .from('tools')
            .select('*')
            .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
            .eq('status', 'Published')
            .order('popularity', { ascending: false });
            
        if (error) {
            console.error(`Error searching tools for query "${query}" from Supabase, falling back to local data:`, error);
            const queryLower = query.toLowerCase();
            return localTools.filter(t => 
                t.name.toLowerCase().includes(queryLower) || 
                t.description.toLowerCase().includes(queryLower)
            );
        }
        return (data || []).map(mapDatabaseRowToAITool);
    } catch (err) {
        console.error(`Error searching tools for query "${query}" from Supabase, falling back to local data:`, err);
        const queryLower = query.toLowerCase();
        return localTools.filter(t => 
            t.name.toLowerCase().includes(queryLower) || 
            t.description.toLowerCase().includes(queryLower)
        );
    }
}
