export type CuratedCollectionTool = {
  slug: string;
  rank: number;
  highlightBadge: string;
  editorialReason: string;
  bestForAudience: string;
};

export type CuratedCollection = {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  targetAudience: string;
  selectionMethodology: string;
  rankingCriteria: string[];
  tools: CuratedCollectionTool[];
  faqs: { question: string; answer: string }[];
  relatedCategorySlug: string;
  relatedComparisons: { title: string; href: string }[];
};

// Collections layer intentionally emptied for clean architectural reset
export const curatedCollections: Record<string, CuratedCollection> = {};

export function getCuratedCollection(slug: string): CuratedCollection | undefined {
  return undefined;
}

export function getAllCuratedCollections(): CuratedCollection[] {
  return [];
}
