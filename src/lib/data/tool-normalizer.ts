import type { AITool, ToolFeature, PricingPlan, ToolEditorial } from "@/lib/types/tool";
import { resolveCategory } from "@/lib/data/categories";

/**
 * Universal JSON/Primitive parser helper.
 * Handles strings, JSON strings, pre-parsed objects/arrays, nulls, and undefined.
 */
export function safeParseJson<T = any>(value: any, fallback: T): T {
  if (value === null || value === undefined) {
    return fallback;
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if ((trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'))) {
      try {
        return JSON.parse(trimmed);
      } catch {
        return fallback;
      }
    }
  }
  return value as T;
}

/**
 * Normalizes string arrays (tags, bestFor, goals, workflows, etc.)
 */
export function normalizeStringArray(input: any): string[] {
  const parsed = safeParseJson<any[]>(input, []);
  if (!Array.isArray(parsed)) return [];
  return parsed
    .map((item: any) => (typeof item === 'string' ? item.trim() : (item && typeof item.name === 'string' ? item.name.trim() : '')))
    .filter(Boolean);
}

/**
 * Normalizes features array into structured ToolFeature objects.
 */
export function normalizeFeatures(input: any): ToolFeature[] {
  const parsed = safeParseJson<any[]>(input, []);
  if (!Array.isArray(parsed)) return [];
  return parsed.map((item: any, idx: number): ToolFeature => {
    const parsedItem = safeParseJson<any>(item, item);
    if (typeof parsedItem === 'string') {
      return {
        title: parsedItem.trim(),
        description: '',
        icon: 'done_all'
      };
    }
    if (typeof parsedItem === 'object' && parsedItem !== null) {
      return {
        title: typeof parsedItem.title === 'string' ? parsedItem.title.trim() : `Feature ${idx + 1}`,
        description: typeof parsedItem.description === 'string' ? parsedItem.description.trim() : '',
        icon: typeof parsedItem.icon === 'string' && parsedItem.icon.trim() ? parsedItem.icon.trim() : 'done_all'
      };
    }
    return {
      title: `Feature ${idx + 1}`,
      description: '',
      icon: 'done_all'
    };
  }).filter((f: ToolFeature) => f.title.length > 0);
}

/**
 * Normalizes pros/cons/useCases into structured { title: string; description: string } objects.
 */
export function normalizeTitledList(input: any, defaultTitlePrefix = 'Item'): { title: string; description: string }[] {
  const parsed = safeParseJson<any[]>(input, []);
  if (!Array.isArray(parsed)) return [];
  return parsed.map((item: any, idx: number) => {
    const parsedItem = safeParseJson<any>(item, item);
    if (typeof parsedItem === 'string') {
      return {
        title: parsedItem.trim(),
        description: ''
      };
    }
    if (typeof parsedItem === 'object' && parsedItem !== null) {
      return {
        title: typeof parsedItem.title === 'string' ? parsedItem.title.trim() : `${defaultTitlePrefix} ${idx + 1}`,
        description: typeof parsedItem.description === 'string' ? parsedItem.description.trim() : ''
      };
    }
    return {
      title: `${defaultTitlePrefix} ${idx + 1}`,
      description: ''
    };
  }).filter((item: { title: string; description: string }) => item.title.length > 0);
}

/**
 * Normalizes pricing plans.
 */
export function normalizePricingPlans(input: any): PricingPlan[] {
  const parsed = safeParseJson<any[]>(input, []);
  if (!Array.isArray(parsed)) return [];
  const results: PricingPlan[] = [];
  for (let idx = 0; idx < parsed.length; idx++) {
    const item = safeParseJson<any>(parsed[idx], parsed[idx]);
    if (typeof item === 'object' && item !== null) {
      const rawFeatures = item.features || [];
      const features = Array.isArray(rawFeatures)
        ? rawFeatures.map((f: any) => typeof f === 'string' ? f.trim() : String(f)).filter(Boolean)
        : [];

      results.push({
        name: typeof item.name === 'string' ? item.name.trim() : `Plan ${idx + 1}`,
        price: typeof item.price === 'string' ? item.price : (typeof item.price === 'number' ? `$${item.price}` : 'Free'),
        description: typeof item.description === 'string' ? item.description : '',
        features,
        recommended: Boolean(item.recommended)
      });
    }
  }
  return results;
}

/**
 * Normalizes legacy pricing array.
 */
export function normalizeLegacyPricing(input: any): { planName: string; price: number | string; period: string }[] | undefined {
  const parsed = safeParseJson<any[] | undefined>(input, undefined);
  if (!Array.isArray(parsed) || parsed.length === 0) return undefined;
  const cleaned = parsed.map((item: any) => {
    const obj = safeParseJson<any>(item, item);
    if (typeof obj === 'object' && obj !== null) {
      return {
        planName: typeof obj.planName === 'string' ? obj.planName : (typeof obj.name === 'string' ? obj.name : 'Plan'),
        price: obj.price !== undefined ? obj.price : 0,
        period: typeof obj.period === 'string' ? obj.period : 'month'
      };
    }
    return null;
  }).filter((x): x is { planName: string; price: number | string; period: string } => x !== null);
  return cleaned.length > 0 ? cleaned : undefined;
}

/**
 * Normalizes editorial section.
 */
export function normalizeEditorial(input: any): ToolEditorial | undefined {
  const parsed = safeParseJson<any>(input, undefined);
  if (!parsed || typeof parsed !== 'object') return undefined;

  let faqs: { question: string; answer: string }[] = [];
  if (Array.isArray(parsed.faqs)) {
    faqs = parsed.faqs.map((faq: any) => {
      const parsedFaq = safeParseJson<any>(faq, faq);
      if (typeof parsedFaq === 'object' && parsedFaq !== null) {
        return {
          question: typeof parsedFaq.question === 'string' ? parsedFaq.question.trim() : '',
          answer: typeof parsedFaq.answer === 'string' ? parsedFaq.answer.trim() : ''
        };
      }
      return null;
    }).filter((f: any): f is { question: string; answer: string } => f !== null && f.question.length > 0);
  }

  const hasAnyEditorial = Boolean(
    parsed.overview || parsed.verdict || parsed.pricing || parsed.comparison || parsed.useCaseFocus || faqs.length > 0 || parsed.compareWithBreakdown
  );

  if (!hasAnyEditorial) return undefined;

  return {
    overview: typeof parsed.overview === 'string' ? parsed.overview : undefined,
    verdict: typeof parsed.verdict === 'string' ? parsed.verdict : undefined,
    pricing: typeof parsed.pricing === 'string' ? parsed.pricing : undefined,
    comparison: typeof parsed.comparison === 'string' ? parsed.comparison : undefined,
    useCaseFocus: typeof parsed.useCaseFocus === 'string' ? parsed.useCaseFocus : undefined,
    compareWithBreakdown: typeof parsed.compareWithBreakdown === 'object' && parsed.compareWithBreakdown !== null ? parsed.compareWithBreakdown : undefined,
    faqs: faqs.length > 0 ? faqs : undefined
  };
}

/**
 * Central tool normalizer: Converts any raw input from Supabase, JSON, or external source
 * into a guaranteed, contract-compliant AITool object.
 */
export function normalizeTool(raw: any, localFallback?: any): AITool {
  if (!raw && !localFallback) {
    return {} as AITool;
  }

  const data = raw || {};
  const local = localFallback || {};

  // Extract core string properties
  const id = String(data.id || local.id || '');
  const name = String(data.name || local.name || 'AI Tool').trim();
  const slug = String(data.slug || local.slug || '').trim();
  const company = data.company || local.company || undefined;
  const tagline = String(data.tagline || local.tagline || '').trim();
  const description = String(data.description || local.description || tagline).trim();
  const rawCat = String(data.category_id || data.category || local.category_id || local.category || '').trim();
  const resolvedCat = resolveCategory(rawCat);
  const category = resolvedCat.name;
  const category_id = resolvedCat.id;
  const categoryName = resolvedCat.name;
  const categorySlug = resolvedCat.slug;

  // Price model
  const rawPriceModel = data.price_model || data.priceModel || data.pricingType || local.priceModel || local.price_model || 'Freemium';
  let priceModel: "Free" | "Freemium" | "Paid" | "Enterprise" = "Freemium";
  if (typeof rawPriceModel === 'string') {
    const lower = rawPriceModel.toLowerCase();
    if (lower.includes('free') && !lower.includes('freemium')) priceModel = "Free";
    else if (lower.includes('paid')) priceModel = "Paid";
    else if (lower.includes('enterprise')) priceModel = "Enterprise";
    else priceModel = "Freemium";
  }

  const price = typeof data.price === 'string' ? data.price : (typeof local.price === 'string' ? local.price : undefined);

  // Ratings and popularity
  const rating = typeof data.rating === 'number' && !isNaN(data.rating) ? data.rating : (typeof local.rating === 'number' && !isNaN(local.rating) ? local.rating : 4.8);
  const reviewCount = typeof data.review_count === 'number' && !isNaN(data.review_count) ? data.review_count : (typeof data.reviewCount === 'number' && !isNaN(data.reviewCount) ? data.reviewCount : (typeof local.reviewCount === 'number' && !isNaN(local.reviewCount) ? local.reviewCount : 0));
  const popularity = typeof data.popularity === 'number' && !isNaN(data.popularity) ? data.popularity : (typeof local.popularity === 'number' && !isNaN(local.popularity) ? local.popularity : 50);

  // Scores
  const easeOfUse = typeof data.easeOfUse === 'number' && !isNaN(data.easeOfUse) ? data.easeOfUse : (typeof local.easeOfUse === 'number' && !isNaN(local.easeOfUse) ? local.easeOfUse : 4.6);
  const featureRating = typeof data.featureRating === 'number' && !isNaN(data.featureRating) ? data.featureRating : (typeof local.featureRating === 'number' && !isNaN(local.featureRating) ? local.featureRating : 4.4);
  const valueForMoney = typeof data.valueForMoney === 'number' && !isNaN(data.valueForMoney) ? data.valueForMoney : (typeof local.valueForMoney === 'number' && !isNaN(local.valueForMoney) ? local.valueForMoney : 4.2);
  const performance = typeof data.performance === 'number' && !isNaN(data.performance) ? data.performance : (typeof local.performance === 'number' && !isNaN(local.performance) ? local.performance : 4.7);
  const support = typeof data.support === 'number' && !isNaN(data.support) ? data.support : (typeof local.support === 'number' && !isNaN(local.support) ? local.support : 4.0);

  // URLs and assets
  const logoUrl = String(data.logo_url || data.logoUrl || local.logoUrl || local.logo_url || '');
  const imageUrl = String(data.image_url || data.imageUrl || local.imageUrl || local.image_url || logoUrl);
  const screenshotUrl = data.screenshot_url || data.screenshotUrl || local.screenshotUrl || local.screenshot_url || undefined;
  const websiteUrl = data.website_url || data.websiteUrl || data.url || local.websiteUrl || local.url || undefined;

  // Normalized Arrays
  const tags = normalizeStringArray(data.tags || local.tags);
  const bestFor = normalizeStringArray(data.best_for || data.bestFor || local.bestFor || local.best_for);
  const goals = normalizeStringArray(data.goals || local.goals);
  const workflows = normalizeStringArray(data.workflows || local.workflows);
  const additionalCategories = normalizeStringArray(data.additionalCategories || data.secondaryCategories || local.additionalCategories);
  const compareWith = normalizeStringArray(data.compareWith || local.compareWith);
  const relatedTools = normalizeStringArray(data.relatedTools || local.relatedTools);
  const similarTools = normalizeStringArray(data.similarTools || local.similarTools);
  const collections = normalizeStringArray(data.collections || local.collections);
  const recommendationTags = normalizeStringArray(data.recommendationTags || local.recommendationTags);
  const audiences = normalizeStringArray(data.audiences || local.audiences);

  // Normalized Structured Sections
  const features = normalizeFeatures(data.features || local.features);
  const pros = normalizeTitledList(data.pros || local.pros, 'Advantage');
  const cons = normalizeTitledList(data.cons || local.cons, 'Limitation');
  const useCases = normalizeTitledList(data.use_cases || data.useCases || local.useCases || local.use_cases, 'Use Case');
  const pricingPlans = normalizePricingPlans(data.pricing_plans || data.pricingPlans || local.pricingPlans);
  const pricing = normalizeLegacyPricing(data.pricing || local.pricing);
  const editorial = normalizeEditorial(data.editorial || local.editorial);

  // Status
  const status = data.status || local.status || 'Published';

  return {
    id,
    name,
    slug,
    company,
    tagline,
    description,
    category,
    category_id,
    categoryName,
    categorySlug,
    additionalCategories,
    priceModel,
    price,
    rating,
    reviewCount,
    easeOfUse,
    featureRating,
    valueForMoney,
    performance,
    support,
    logoUrl,
    imageUrl,
    screenshotUrl,
    websiteUrl,
    url: websiteUrl,
    tags,
    features,
    pricingPlans: pricingPlans.length > 0 ? pricingPlans : undefined,
    pricing,
    verified: Boolean(data.verified ?? local.verified),
    featured: Boolean(data.featured ?? local.featured),
    isSponsored: Boolean(data.isSponsored ?? data.is_sponsored ?? local.isSponsored ?? local.is_sponsored),
    popularity,
    pros,
    cons,
    bestFor,
    useCases,
    goals,
    workflows,
    collections,
    recommendationTags,
    relatedTools,
    similarTools,
    compareWith,
    audiences,
    editorial,
    platform: data.platform || local.platform || undefined,
    api: data.api !== undefined ? Boolean(data.api) : (local.api !== undefined ? Boolean(local.api) : undefined),
    mobileApp: data.mobile_app !== undefined ? Boolean(data.mobile_app) : (local.mobileApp !== undefined ? Boolean(local.mobileApp) : undefined),
    openSource: data.open_source !== undefined ? Boolean(data.open_source) : (local.openSource !== undefined ? Boolean(local.openSource) : undefined),
    freeTrial: data.free_trial !== undefined ? Boolean(data.free_trial) : (local.freeTrial !== undefined ? Boolean(local.freeTrial) : undefined),
    socials: data.socials || local.socials || undefined,
    stats: data.stats || local.stats || undefined,
    promptExamples: data.promptExamples || local.promptExamples || undefined,
    lastUpdated: data.updated_at || data.lastUpdated || local.lastUpdated,
    status
  };
}
