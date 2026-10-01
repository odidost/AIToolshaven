import type { AITool } from "@/lib/types/tool";
import type { SitemapToolItem } from "@/lib/data/tools-service";

/**
 * Proven high-performing tools that have active Google Search Console ranking/impression signals.
 * These are prioritized for immediate indexation provided they meet baseline content completeness.
 */
export const PROVEN_SEARCH_SIGNAL_TOOL_SLUGS = new Set([
  "cursor",
  "capcut",
  "pi",
  "github-copilot",
  "windsurf",
  "cline",
  "opus-clip",
  "elevenlabs",
  "midjourney",
  "dall-e-3",
  "gamma",
  "slidespilot-ai",
  "luma-dream-machine",
]);

/**
 * Evaluates whether an individual tool profile is eligible for Google indexation.
 *
 * Strategy:
 * - Published status is strictly mandatory.
 * - Proven GSC high-signal tools with complete basic information are indexed.
 * - Other tools must satisfy strict quality gates (Tier A or comprehensive editorial,
 *   substantive description >= 120 chars, >= 3 features, verified pricing model, and visuals)
 *   to avoid crawl-budget exhaustion on thin/unreviewed pages.
 * - Low-quality / unreviewed tools remain noindex.
 */
export function shouldIndexTool(tool: AITool | SitemapToolItem | Partial<AITool> | null | undefined): boolean {
  if (!tool) return false;

  // 1. Must be strictly Published
  const isPublished =
    tool.status === "Published" ||
    tool.status === "published" ||
    !tool.status;
  if (!isPublished) return false;

  // 2. High-signal verified candidates with established search volume
  if (tool.slug && PROVEN_SEARCH_SIGNAL_TOOL_SLUGS.has(tool.slug)) {
    const hasMinContent = Boolean(tool.description && tool.description.length >= 50);
    const hasIdentity = Boolean(tool.name && tool.slug);
    return hasMinContent && hasIdentity;
  }

  // 3. Strict quality gate for other tools to prevent crawl budget waste:
  // Must have comprehensive editorial analysis, verified status, features, and pricing
  const hasEditorial = Boolean(
    (tool as any).editorialQualityScore === "Tier A" ||
    (tool.editorial && tool.editorial.overview && tool.editorial.verdict)
  );
  const hasSubstantialDescription = Boolean(
    tool.description && tool.description.length >= 120
  );
  const hasFeatures = Array.isArray(tool.features) && tool.features.length >= 3;
  const hasPricing = Boolean(
    tool.priceModel &&
    ((tool.pricingPlans && tool.pricingPlans.length > 0) || (tool as any).price)
  );
  const hasVisuals = Boolean(tool.logoUrl || tool.screenshotUrl || tool.imageUrl);

  return (
    hasEditorial &&
    hasSubstantialDescription &&
    hasFeatures &&
    hasPricing &&
    hasVisuals &&
    Boolean(tool.verified)
  );
}
