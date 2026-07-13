import { createClient } from '@supabase/supabase-js';
import type { AITool } from "@/lib/types/tool";

// We use the standard supabase-js client here because these fetch public data and can be cached by Next.js
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function mapDatabaseRowToAITool(row: any): AITool {
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
  };
}

export async function getAllTools(): Promise<AITool[]> {
    const { data, error } = await supabase.from('tools').select('*').order('popularity', { ascending: false });
    if (error) {
        console.error("Error fetching all tools", error);
        return [];
    }
    return (data || []).map(mapDatabaseRowToAITool);
}

export async function getToolBySlug(slug: string): Promise<AITool | undefined> {
    const { data, error } = await supabase.from('tools').select('*').eq('slug', slug).single();
    if (error || !data) return undefined;
    return mapDatabaseRowToAITool(data);
}

export async function getFeaturedTools(limit?: number): Promise<AITool[]> {
    let query = supabase.from('tools').select('*').eq('featured', true).order('popularity', { ascending: false });
    if (limit) query = query.limit(limit);
    
    const { data } = await query;
    return (data || []).map(mapDatabaseRowToAITool);
}

export async function getTrendingTools(limit?: number): Promise<AITool[]> {
    let query = supabase.from('tools').select('*').order('popularity', { ascending: false });
    if (limit) query = query.limit(limit);
    
    const { data } = await query;
    return (data || []).map(mapDatabaseRowToAITool);
}

export async function getLatestTools(limit?: number): Promise<AITool[]> {
    let query = supabase.from('tools').select('*').order('created_at', { ascending: false });
    if (limit) query = query.limit(limit);
    
    const { data } = await query;
    return (data || []).map(mapDatabaseRowToAITool);
}

export async function getToolsByWorkflow(workflowSlug: string): Promise<AITool[]> {
    // This requires a join with tool_workflows
    const { data, error } = await supabase
        .from('tool_workflows')
        .select(`
            tools (*)
        `)
        .eq('workflow_id', workflowSlug);
        
    if (error || !data) return [];
    return data.map((row: any) => mapDatabaseRowToAITool(row.tools));
}

export async function getToolsByCollection(collectionSlug: string): Promise<AITool[]> {
    // Since we don't have a tool_collections table, we'll just return empty or 
    // maybe we meant goals? We'll fetch all and filter for now if it was an array on the tool
    // Currently, collections aren't in the schema natively, so return []
    return [];
}

export async function getToolsByRecommendationTag(tag: string): Promise<AITool[]> {
    const { data } = await supabase.from('tools').select('*').contains('tags', [tag]);
    return (data || []).map(mapDatabaseRowToAITool);
}

export async function getRecommendationsByPersona(role: string, goal: string): Promise<AITool[]> {
    // For now, fetch all and filter in memory since the logic is highly complex (boosting based on multiple conditions)
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
    const { data } = await supabase.from('tools').select('*').eq('category_id', categoryId);
    return (data || []).map(mapDatabaseRowToAITool);
}

export async function searchTools(query: string): Promise<AITool[]> {
    // Basic ilike search
    const { data } = await supabase
        .from('tools')
        .select('*')
        .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
        .order('popularity', { ascending: false });
        
    return (data || []).map(mapDatabaseRowToAITool);
}
