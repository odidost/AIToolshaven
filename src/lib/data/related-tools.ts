import type { AITool } from "@/lib/types/tool";

/**
 * Deterministic related tools scoring model:
 * - Primary Category Match: 40 points (40%)
 * - Additional / Subcategory Match: 20 points (20%)
 * - Tag Overlap: up to 15 points (15%)
 * - Use-Case Relevance: up to 10 points (10%)
 * - Popularity Signal: up to 10 points (10%) based on verified reviews/ratings
 * - Price-Tier Match: 5 points (5%)
 * - Duplicate / Self Penalty: -100 points (Disqualified)
 */
export function calculateRelatedScore(target: AITool, candidate: AITool): number {
  // 1. Duplicate / Self exclusion
  if (!candidate || !candidate.id || candidate.id === target.id || candidate.slug === target.slug) {
    return -100;
  }

  // Ensure published status
  if (candidate.status && candidate.status !== "Published" && candidate.status !== "published") {
    return -100;
  }

  let score = 0;

  // 2. Primary Category Match (40 pts)
  const targetCategory = typeof target.category === 'string' ? target.category : (typeof (target as any).category_id === 'string' ? (target as any).category_id : "");
  const candidateCategory = typeof candidate.category === 'string' ? candidate.category : (typeof (candidate as any).category_id === 'string' ? (candidate as any).category_id : "");
  if (targetCategory && candidateCategory && targetCategory.toLowerCase() === candidateCategory.toLowerCase()) {
    score += 40;
  }

  // 3. Additional / Subcategory / Parent Category Match (20 pts)
  const targetSubcat = (target as any).subcategories || (target as any).secondaryCategories || target.additionalCategories || [];
  const candidateSubcat = (candidate as any).subcategories || (candidate as any).secondaryCategories || candidate.additionalCategories || [];
  if (Array.isArray(targetSubcat) && Array.isArray(candidateSubcat) && targetSubcat.length > 0 && candidateSubcat.length > 0) {
    const hasSubcatOverlap = targetSubcat.some((sc: any) => typeof sc === 'string' && candidateSubcat.includes(sc));
    if (hasSubcatOverlap) {
      score += 20;
    }
  }

  // 4. Tag Overlap (up to 15 pts)
  const targetTags = Array.isArray(target.tags) 
    ? target.tags.filter((t): t is string => typeof t === 'string').map((t: string) => t.toLowerCase()) 
    : [];
  const candidateTags = Array.isArray(candidate.tags) 
    ? candidate.tags.filter((t): t is string => typeof t === 'string').map((t: string) => t.toLowerCase()) 
    : [];
  if (targetTags.length > 0 && candidateTags.length > 0) {
    const commonTags = targetTags.filter((t: string) => candidateTags.includes(t));
    const tagScore = Math.min(15, commonTags.length * 5);
    score += tagScore;
  }

  // 5. Use-Case Relevance (up to 10 pts)
  const targetUseCases = Array.isArray(target.useCases)
    ? target.useCases.map((u: any) => (typeof u === 'string' ? u : (u && typeof u.title === 'string' ? u.title : '')).toLowerCase()).filter(Boolean)
    : [];
  const candidateUseCases = Array.isArray(candidate.useCases)
    ? candidate.useCases.map((u: any) => (typeof u === 'string' ? u : (u && typeof u.title === 'string' ? u.title : '')).toLowerCase()).filter(Boolean)
    : [];
  if (targetUseCases.length > 0 && candidateUseCases.length > 0) {
    const hasUseCaseOverlap = targetUseCases.some((tu: string) =>
      candidateUseCases.some((cu: string) => tu.includes(cu) || cu.includes(tu))
    );
    if (hasUseCaseOverlap) {
      score += 10;
    }
  }

  // 6. Popularity Signal (up to 10 pts)
  const reviews = typeof candidate.reviewCount === 'number' ? candidate.reviewCount : 0;
  const rating = typeof candidate.rating === 'number' ? candidate.rating : 0;
  let popScore = 0;
  if (reviews >= 50) popScore += 6;
  else if (reviews >= 10) popScore += 4;
  else if (reviews > 0) popScore += 2;

  if (rating >= 4.5) popScore += 4;
  else if (rating >= 4.0) popScore += 2;
  score += Math.min(10, popScore);

  // 7. Price-Tier Match (5 pts)
  const extractPriceModel = (t: any): string => {
    if (typeof t.priceModel === 'string') return t.priceModel;
    if (typeof t.pricing === 'string') return t.pricing;
    if (typeof t.pricingType === 'string') return t.pricingType;
    return '';
  };
  const targetPricing = extractPriceModel(target);
  const candidatePricing = extractPriceModel(candidate);
  if (targetPricing && candidatePricing && targetPricing.toLowerCase() === candidatePricing.toLowerCase()) {
    score += 5;
  }

  return score;
}

/**
 * Returns deterministic scored and ranked related tools.
 */
export function getDeterministicRelatedTools(
  targetTool: AITool,
  candidatePool: AITool[],
  limit: number = 4
): AITool[] {
  if (!targetTool || !Array.isArray(candidatePool)) {
    return [];
  }

  const scored = candidatePool
    .filter(Boolean)
    .map((candidate) => ({
      tool: candidate,
      score: calculateRelatedScore(targetTool, candidate)
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      // Deterministic sort: higher score first, fallback to slug alphabetical
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return (a.tool.slug || "").localeCompare(b.tool.slug || "");
    });

  return scored.slice(0, limit).map((item) => item.tool);
}
