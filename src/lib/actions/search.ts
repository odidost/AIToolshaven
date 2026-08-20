"use server";

import { searchTools, getFeaturedTools, getTrendingTools } from "@/lib/data/tools-service";
import { categories as localCategories } from "@/lib/data/categories";
import type { AITool } from "@/lib/types/tool";

export type CommandPaletteItem = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  category: string;
  type?: "tool" | "category";
  url?: string;
  icon?: string;
  logoUrl?: string;
  priceModel?: string;
  featured?: boolean;
  popularity?: number;
};

function mapToPaletteItem(t: AITool): CommandPaletteItem {
  return {
    id: t.id,
    name: t.name,
    slug: t.slug,
    tagline: t.tagline || '',
    category: t.category,
    type: "tool",
    url: `/tool/${t.slug}`,
    logoUrl: t.logoUrl,
    priceModel: t.priceModel,
    featured: t.featured,
    popularity: t.popularity
  };
}

export async function globalSearch(query: string): Promise<AITool[]> {
  if (!query || query.length < 2) return [];
  return searchTools(query);
}

export async function searchCommandPaletteAction(query: string): Promise<CommandPaletteItem[]> {
  if (!query || !query.trim()) {
    const featured = await getFeaturedTools(8);
    return featured.map(mapToPaletteItem);
  }

  const cleanQuery = query.trim().toLowerCase();
  const queryTokens = cleanQuery.split(/\s+/).filter(t => t.length > 0);

  // 1. Search Category Guides
  const matchedCategories: CommandPaletteItem[] = localCategories
    .filter(c => (c.status === "Published" || !c.status) && c.indexable !== false)
    .map(cat => {
      let score = 0;
      const nameLower = (cat.name || '').toLowerCase();
      const slugLower = (cat.slug || '').toLowerCase();
      const descLower = (cat.description || '').toLowerCase();

      if (nameLower === cleanQuery || slugLower === cleanQuery) score += 100;
      else if (nameLower.startsWith(cleanQuery)) score += 60;
      else if (nameLower.includes(cleanQuery) || slugLower.includes(cleanQuery)) score += 40;
      else if (descLower.includes(cleanQuery)) score += 20;

      for (const token of queryTokens) {
        if (token.length > 2) {
          if (nameLower.includes(token)) score += 20;
          if (slugLower.includes(token)) score += 15;
          if (descLower.includes(token)) score += 10;
        }
      }

      return { cat, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map(({ cat }) => ({
      id: `cat-${cat.id || cat.slug}`,
      name: `${cat.name} (Guide & Directory)`,
      slug: cat.slug,
      tagline: cat.description || `Comprehensive guide, ROI calculator, and verified tools for ${cat.name}.`,
      category: "Category Guide",
      type: "category" as const,
      url: `/category/${cat.slug}`,
      icon: cat.icon || "category",
    }));

  // 2. Search Tools with token-based relevance scoring
  const toolResults = await searchTools(cleanQuery);
  const mappedTools = toolResults.map(mapToPaletteItem);

  // Return categories at the top followed by top ranked tools
  return [...matchedCategories, ...mappedTools].slice(0, 8);
}

export async function getInitialCommandPaletteSuggestionsAction(): Promise<CommandPaletteItem[]> {
  const featured = await getFeaturedTools(8);
  return featured.map(mapToPaletteItem);
}

