"use server";

import { getNormalizedLocalTools } from "@/lib/data/tools-service";
import type { AITool } from "@/lib/types/tool";

export async function fetchBookmarkedToolsAction(toolIds: string[]): Promise<AITool[]> {
  if (!toolIds || toolIds.length === 0) return [];
  try {
    const idSet = new Set(toolIds.map(id => id.toLowerCase()));
    const all = getNormalizedLocalTools();
    return all.filter(t => idSet.has(t.id?.toLowerCase() || '') || idSet.has(t.slug?.toLowerCase() || ''));
  } catch (err) {
    console.error("Error in fetchBookmarkedToolsAction:", err);
    return [];
  }
}
