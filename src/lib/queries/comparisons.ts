import { tools } from "@/lib/data/tools";
import type { AITool } from "@/lib/types/tool";

export function getComparisonCandidates(
    currentTool: AITool,
    limit = 3
): AITool[] {

    let candidates: AITool[] = [];

    // 1. Manual overrides
    if (currentTool.compareWith?.length) {
        candidates = currentTool.compareWith
            .map(slug => tools.find(tool => tool.slug === slug))
            .filter(Boolean) as AITool[];
    }

    // 2. Fill remaining slots with automatic recommendations
    if (candidates.length < limit) {
        const autoRecs = tools
            .filter(tool => tool.id !== currentTool.id)
            .filter(tool => !candidates.some(c => c.id === tool.id))
            .filter(tool => tool.category === currentTool.category)
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, limit - candidates.length);
        
        candidates = [...candidates, ...autoRecs];
    }

    return candidates.slice(0, limit);
}