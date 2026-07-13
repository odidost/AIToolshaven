"use server";

import { searchTools } from "@/lib/queries/tools";
import type { AITool } from "@/lib/types/tool";

export async function globalSearch(query: string): Promise<AITool[]> {
  if (!query || query.length < 2) return [];
  // Use the existing searchTools function from tools-service
  const results = await searchTools(query);
  return results;
}
