import { tools } from "@/lib/data/tools";
import type { AITool } from "@/lib/types/tool";

export function getComparisonCandidates(
    currentTool: AITool,
    limit = 3
): AITool[] {

    // 1. Manual overrides
    if (currentTool.compareWith?.length) {

        return currentTool.compareWith
            .map(slug => tools.find(tool => tool.slug === slug))
            .filter(Boolean)
            .slice(0, limit) as AITool[];
    }

    // 2. Automatic recommendations
    return tools
        .filter(tool => tool.id !== currentTool.id)
        .filter(tool => tool.category === currentTool.category)
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, limit);
}