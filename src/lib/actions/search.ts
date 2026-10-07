"use server";

import { searchTools, getFeaturedTools } from "@/lib/data/tools-service";
import { categories as localCategories } from "@/lib/data/categories";
import type { AITool } from "@/lib/types/tool";

export type CommandPaletteItem = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  category: string;
  type?: "tool" | "category" | "comparison" | "goal";
  url?: string;
  icon?: string;
  logoUrl?: string;
  priceModel?: string;
  featured?: boolean;
  popularity?: number;
};

import { comparisons } from "@/lib/comparisons";
import { goals } from "@/lib/goals";

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

  // 1. Search Comparisons
  const matchedComparisons: CommandPaletteItem[] = comparisons
    .filter((c) => {
      const titleLower = (c.title || "").toLowerCase();
      const slugLower = (c.slug || "").toLowerCase();
      const t1 = (c.tool1?.name || "").toLowerCase();
      const t2 = (c.tool2?.name || "").toLowerCase();
      return (
        titleLower.includes(cleanQuery) ||
        slugLower.includes(cleanQuery) ||
        t1.includes(cleanQuery) ||
        t2.includes(cleanQuery) ||
        (queryTokens.length > 1 && queryTokens.every(token => titleLower.includes(token) || t1.includes(token) || t2.includes(token)))
      );
    })
    .slice(0, 2)
    .map((c) => ({
      id: `comp-${c.slug}`,
      name: `${c.title} (Comparison)`,
      slug: c.slug,
      tagline: c.description || `Side-by-side comparison between ${c.tool1?.name} and ${c.tool2?.name}.`,
      category: "Side-by-Side Comparison",
      type: "comparison" as const,
      url: `/compare-tools/${c.slug}`,
      icon: "compare_arrows",
    }));

  // 2. Search Goals
  const matchedGoals: CommandPaletteItem[] = goals
    .filter((g) => {
      const titleLower = (g.title || "").toLowerCase();
      const slugLower = (g.slug || "").toLowerCase();
      const descLower = (g.description || "").toLowerCase();
      return (
        titleLower.includes(cleanQuery) ||
        slugLower.includes(cleanQuery) ||
        descLower.includes(cleanQuery) ||
        queryTokens.some(token => token.length > 2 && (titleLower.includes(token) || slugLower.includes(token)))
      );
    })
    .slice(0, 2)
    .map((g) => ({
      id: `goal-${g.slug}`,
      name: `${g.title} (Goal)`,
      slug: g.slug,
      tagline: g.description,
      category: "AI Tools by Goal",
      type: "goal" as const,
      url: `/goals/${g.slug}`,
      icon: g.icon || "explore",
    }));

  // 3. Search Category Guides
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

  // 4. Search Tools with token-based relevance scoring
  const toolResults = await searchTools(cleanQuery);
  const mappedTools = toolResults.map(mapToPaletteItem);

  // Return comparisons, goals, categories, and top tools
  return [...matchedComparisons, ...matchedGoals, ...matchedCategories, ...mappedTools].slice(0, 14);
}

export async function getInitialCommandPaletteSuggestionsAction(): Promise<CommandPaletteItem[]> {
  const featured = await getFeaturedTools(8);
  return featured.map(mapToPaletteItem);
}

