import { AITool } from "@/lib/types/tool";
import fs from 'fs';
import path from 'path';

let _cachedTools: AITool[] | null = null;
let _slugIndex: Map<string, AITool> | null = null;
let _categoryIndex: Map<string, AITool[]> | null = null;
let _publishedTools: AITool[] | null = null;
let _publishedSlugs: string[] | null = null;

function loadLocalTools(): AITool[] {
  if (_cachedTools) return _cachedTools;
  try {
    const filePath = path.join(process.cwd(), 'data', 'tools.json');
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8');
      const toolsJson = JSON.parse(raw);
      _cachedTools = (toolsJson as any[])
        .map(doc => {
          const isPublished = doc.status === "published" || doc.status === "Published" || (doc.publishedData && doc.status !== "draft" && doc.status !== "Draft");
          if (isPublished) {
            const data = doc.publishedData || doc;
            return {
              ...data,
              id: doc.id || data.id,
              status: "Published"
            } as AITool;
          }
          
          // If it's a draft tool, include it with status Draft
          const data = doc.draftData || doc;
          if (data.name && data.slug) {
            return {
              ...data,
              id: doc.id || data.id,
              status: "Draft"
            } as AITool;
          }
          return null;
        })
        .filter(Boolean) as AITool[];
      return _cachedTools;
    }
  } catch (e) {
    console.error("Failed to load local tools.json:", e);
  }
  return [];
}

function ensureIndexes(): void {
  if (_slugIndex && _categoryIndex && _publishedTools && _publishedSlugs) return;
  const all = loadLocalTools();
  _slugIndex = new Map();
  _categoryIndex = new Map();
  _publishedTools = [];
  _publishedSlugs = [];

  for (const t of all) {
    const isPub = t.status === "Published" || t.status === "published";
    if (isPub) {
      _publishedTools.push(t);
      if (t.slug) _publishedSlugs.push(t.slug);
    }
    if (t.slug) _slugIndex.set(t.slug.toLowerCase(), t);
    if (t.id) _slugIndex.set(t.id.toLowerCase(), t);
    if (t.category) {
      const catKey = t.category.toLowerCase();
      const existing = _categoryIndex.get(catKey) || [];
      existing.push(t);
      _categoryIndex.set(catKey, existing);
    }
  }
}

export const getLocalTools = (): AITool[] => {
  return loadLocalTools();
};

export const getLocalToolBySlug = (slug: string): AITool | undefined => {
  ensureIndexes();
  return _slugIndex?.get(slug.toLowerCase());
};

export const getLocalPublishedTools = (): AITool[] => {
  ensureIndexes();
  return _publishedTools || [];
};

export const getLocalPublishedSlugs = (): string[] => {
  ensureIndexes();
  return _publishedSlugs || [];
};

export const getLocalToolsByCategory = (categoryId: string): AITool[] => {
  ensureIndexes();
  return _categoryIndex?.get(categoryId.toLowerCase()) || [];
};

// Lazy getter proxy for backwards compatibility without eager module evaluation
export const tools: AITool[] = new Proxy([] as AITool[], {
  get(target, prop, receiver) {
    const loaded = loadLocalTools();
    return Reflect.get(loaded, prop, receiver);
  }
});