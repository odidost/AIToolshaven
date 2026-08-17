"use server";

import { getRecommendationsByPersona } from "@/lib/data/tools-service";
import type { AITool } from "@/lib/types/tool";

export async function fetchRecommendationsAction(role: string, goal: string): Promise<AITool[]> {
  try {
    const results = await getRecommendationsByPersona(role, goal);
    return results.slice(0, 3);
  } catch (err) {
    console.error("Error in fetchRecommendationsAction:", err);
    return [];
  }
}
