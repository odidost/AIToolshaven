"use server";

import { searchTools, getFeaturedTools, getTrendingTools } from "@/lib/data/tools-service";
import type { AITool } from "@/lib/types/tool";

export type CommandPaletteItem = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  category: string;
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
  const results = await searchTools(query.trim());
  return results.slice(0, 8).map(mapToPaletteItem);
}

export async function getInitialCommandPaletteSuggestionsAction(): Promise<CommandPaletteItem[]> {
  const featured = await getFeaturedTools(8);
  return featured.map(mapToPaletteItem);
}
