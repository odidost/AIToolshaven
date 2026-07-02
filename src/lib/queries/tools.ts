import { tools } from "@/lib/data/tools";
import type { AITool } from "@/lib/types/tool";

export function getAllTools(): AITool[] {
    return tools;
}

export function getToolBySlug(slug: string): AITool | undefined {
    console.log("Slug:", slug);
    console.log("Tools count:", tools.length);
    console.log("Tools:", tools.map(t => ({
        id: t.id,
        slug: t.slug,
        name: t.name,
    })));

    return tools.find((tool) => tool.slug === slug);
}

export function getToolById(id: string): AITool | undefined {
    return tools.find((tool) => tool.id === id);
}

export function getFeaturedTools(): AITool[] {
    return tools.filter((tool) => tool.featured);
}

export function getPopularTools(limit = 10): AITool[] {
    return [...tools]
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, limit);
}

export function getToolsByCategory(categoryId: string): AITool[] {
    return tools.filter((tool) => tool.category === categoryId);
}