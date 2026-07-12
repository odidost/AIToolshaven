import { tools } from "@/lib/data/tools";
import type { AITool } from "@/lib/types/tool";

export function getAllTools(): AITool[] {
    return tools;
}

export function getToolBySlug(slug: string): AITool | undefined {
    return tools.find(t => t.slug === slug);
}

export function getFeaturedTools(limit?: number): AITool[] {
    const featured = tools.filter(t => t.featured);
    return limit ? featured.slice(0, limit) : featured;
}

export function getTrendingTools(limit?: number): AITool[] {
    const sorted = [...tools].sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    return limit ? sorted.slice(0, limit) : sorted;
}

export function getLatestTools(limit?: number): AITool[] {
    // Sort by lastUpdated string or fallback to ID string sort for stability if missing
    const sorted = [...tools].sort((a, b) => {
        if (a.lastUpdated && b.lastUpdated) {
            return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        }
        return (b.stats?.launchYear || 0) - (a.stats?.launchYear || 0);
    });
    return limit ? sorted.slice(0, limit) : sorted;
}

export function getToolsByWorkflow(workflowSlug: string): AITool[] {
    return tools.filter(t => t.workflows?.includes(workflowSlug));
}

export function getToolsByCollection(collectionSlug: string): AITool[] {
    return tools.filter(t => t.collections?.includes(collectionSlug));
}

export function getToolsByRecommendationTag(tag: string): AITool[] {
    return tools.filter(t => t.recommendationTags?.includes(tag));
}

export function getRecommendationsByPersona(role: string, goal: string): AITool[] {
    const roleLower = role.toLowerCase();
    const goalLower = goal.toLowerCase();

    return tools.filter(t => {
        const matchesRole = t.bestFor?.some(b => b.toLowerCase().includes(roleLower));
        
        const matchesGoal = 
            t.useCases?.some(u => u.toLowerCase().includes(goalLower) || goalLower.includes(u.toLowerCase())) ||
            t.goals?.some(g => g.toLowerCase().replace(/-/g, ' ').includes(goalLower) || goalLower.includes(g.toLowerCase().replace(/-/g, ' '))) ||
            t.tags?.some(tag => tag.toLowerCase().includes(goalLower) || goalLower.includes(tag.toLowerCase()));
        
        return matchesRole && matchesGoal;
    }).sort((a, b) => {
        // Boost if it matches both role AND goal
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

export function getToolsByCategoryId(categoryId: string): AITool[] {
    return tools.filter(t => t.category === categoryId);
}

export function searchTools(query: string): AITool[] {
    const q = query.toLowerCase();
    return tools.filter(t => 
        t.name.toLowerCase().includes(q) || 
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        (t.tags && t.tags.some(tag => tag.toLowerCase().includes(q)))
    ).sort((a, b) => {
        // Boost featured and trending
        const aBoost = (a.featured ? 100 : 0) + (a.popularity || 0);
        const bBoost = (b.featured ? 100 : 0) + (b.popularity || 0);
        return bBoost - aBoost;
    });
}
