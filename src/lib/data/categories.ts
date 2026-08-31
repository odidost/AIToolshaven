import type { ToolCategory } from "@/lib/types/category";
import categoriesData from "../../../data/categories.json";

const rawCategories = categoriesData as ToolCategory[];

export const getLocalCategories = (): ToolCategory[] => {
  return rawCategories;
};

export const categories: ToolCategory[] = rawCategories;

const aliases: Record<string, string> = {
  'text-generation': 'ai-writing-tools',
  'writing': 'ai-writing-tools',
  'image-generation': 'ai-image-generators',
  'image': 'ai-image-generators',
  'video-creation': 'ai-video-generators',
  'video': 'ai-video-generators',
  'audio': 'audio-voice',
  'voice': 'audio-voice',
  'coding': 'coding-assistants',
  'code': 'coding-assistants',
  'marketing': 'marketing-sales',
  'sales': 'marketing-sales',
  'ai-presentation-tools': 'ai-presentation-makers',
  'ai-education-tools': 'ai-research-tools',
  'ai-workflow-automation': 'productivity',
  'ai-social-media': 'ai-social-media-tools',
  'chatbots': 'ai-chatbots',
  'chatbot': 'ai-chatbots',
};

export function resolveCategory(rawCategory?: string): ToolCategory {
  if (!rawCategory) {
    return rawCategories.find(c => c.slug === 'productivity') || rawCategories[0];
  }
  const clean = String(rawCategory).trim();
  const lower = clean.toLowerCase();

  // 1. Direct ID match (e.g. "c1", "c2", "b9c74436-...")
  const byId = rawCategories.find(c => c.id.toLowerCase() === lower);
  if (byId) return byId;

  // 2. Direct slug match (e.g. "ai-image-generators")
  const bySlug = rawCategories.find(c => c.slug.toLowerCase() === lower);
  if (bySlug) return bySlug;

  // 3. Direct name match (e.g. "AI Image Generators")
  const byName = rawCategories.find(c => c.name.toLowerCase() === lower);
  if (byName) return byName;

  // 4. Normalized slug match
  const slugified = lower.replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const bySlugified = rawCategories.find(c => c.slug === slugified);
  if (bySlugified) return bySlugified;

  // 5. Aliases
  if (aliases[lower]) {
    const targetKey = aliases[lower];
    const aliased = rawCategories.find(c => c.slug === targetKey || c.id === targetKey);
    if (aliased) return aliased;
  }

  // Fallback to default
  return rawCategories.find(c => c.slug === 'productivity') || rawCategories[0];
}

export function getCategoryName(rawCategory?: string): string {
  return resolveCategory(rawCategory).name;
}

export function getCategorySlug(rawCategory?: string): string {
  return resolveCategory(rawCategory).slug;
}