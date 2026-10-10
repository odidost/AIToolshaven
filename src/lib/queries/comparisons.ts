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
            .map(slug => tools.find(tool => tool.slug === slug && (tool.status === 'Published' || tool.status === 'published')))
            .filter(Boolean) as AITool[];
    }

    // 2. Guaranteed inclusion for sponsored partner in matching category
    const cat = (currentTool.category || "").toLowerCase();
    const catId = ((currentTool as any).category_id || "").toLowerCase();
    const addCats = Array.isArray(currentTool.additionalCategories)
        ? currentTool.additionalCategories.map((c) => c.toLowerCase())
        : [];
    const tags = Array.isArray(currentTool.tags)
        ? currentTool.tags.map((t) => (typeof t === "string" ? t.toLowerCase() : ""))
        : [];

    const isLogoCategory =
        cat === "logo generators" ||
        cat === "logo-generators" ||
        catId === "logo-generators" ||
        catId === "category-1783781229083" ||
        addCats.includes("logo-generators") ||
        addCats.includes("category-1783781229083") ||
        tags.some((t) => t.includes("logo maker") || t.includes("logo generator"));

    if (isLogoCategory && currentTool.slug !== 'design-com') {
        const designComTool = tools.find(tool => tool.slug === 'design-com' && (tool.status === 'Published' || tool.status === 'published'));
        if (designComTool && !candidates.some(c => c.id === designComTool.id)) {
            candidates = [designComTool, ...candidates];
        }
    }

    // 3. Fill remaining slots with automatic recommendations
    if (candidates.length < limit) {
        const autoRecs = tools
            .filter(tool => tool.id !== currentTool.id)
            .filter(tool => tool.name && tool.name.trim() !== '' && tool.name !== 'Untitled AI Tool')
            .filter(tool => !candidates.some(c => c.id === tool.id))
            .filter(tool => tool.category === currentTool.category)
            .filter(tool => tool.status === 'Published' || tool.status === 'published')
            .sort((a, b) => {
                if (a.isSponsored && !b.isSponsored) return -1;
                if (!a.isSponsored && b.isSponsored) return 1;
                return b.popularity - a.popularity;
            })
            .slice(0, limit - candidates.length);
        
        candidates = [...candidates, ...autoRecs];
    }

    // Prioritize sponsored partner at the top of the comparison deck
    candidates.sort((a, b) => {
        if (a.isSponsored && !b.isSponsored) return -1;
        if (!a.isSponsored && b.isSponsored) return 1;
        return 0;
    });

    return candidates.slice(0, limit);
}