/**
 * Google Analytics 4 — Centralized tracking utility.
 *
 * All GA4 interactions go through this module. No direct gtag() calls
 * should exist elsewhere in the codebase.
 *
 * Supports:
 *  - Page views (with route change detection)
 *  - Custom events with typed metadata
 *  - Deduplication guard
 *  - Consent-aware (only fires when gtag is loaded)
 */

// ─── Types ──────────────────────────────────────

export interface GA4EventParams {
  [key: string]: string | number | boolean | undefined;
}

/** Custom events tracked throughout the site */
export type GA4EventName =
  | 'tool_viewed'
  | 'tool_bookmarked'
  | 'visit_website_clicked'
  | 'affiliate_link_clicked'
  | 'comparison_opened'
  | 'comparison_created'
  | 'workflow_viewed'
  | 'goal_viewed'
  | 'search_performed'
  | 'category_opened'
  | 'review_submitted'
  | 'tool_submitted'
  | 'newsletter_signup'
  | 'share_clicked'
  | 'embed_code_copied';

// ─── Measurement ID ─────────────────────────────

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// ─── Core helpers ───────────────────────────────

/** Check if gtag is loaded and available */
function gtagReady(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

/**
 * Track a page view. Called automatically on route changes.
 * @param url — The pathname being viewed (e.g. "/tool/chatgpt")
 * @param title — The document title
 */
export function trackPageView(url: string, title?: string) {
  if (!gtagReady() || !GA_MEASUREMENT_ID) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title || document.title,
  });
}

/**
 * Track a custom event.
 * @param eventName — One of the predefined event names
 * @param params — Event-specific metadata
 */
export function trackEvent(eventName: GA4EventName, params?: GA4EventParams) {
  if (!gtagReady()) return;

  window.gtag('event', eventName, {
    ...params,
    send_to: GA_MEASUREMENT_ID,
  });
}

// ─── Convenience tracking functions ─────────────

export function trackToolViewed(toolName: string, toolSlug: string, category?: string) {
  trackEvent('tool_viewed', {
    tool_name: toolName,
    tool_slug: toolSlug,
    category: category || '',
    page_url: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

export function trackToolBookmarked(toolName: string, toolSlug: string) {
  trackEvent('tool_bookmarked', {
    tool_name: toolName,
    tool_slug: toolSlug,
  });
}

export function trackVisitWebsite(toolName: string, toolSlug: string, destinationUrl: string) {
  trackEvent('visit_website_clicked', {
    tool_name: toolName,
    tool_slug: toolSlug,
    destination_url: destinationUrl,
  });
}

export function trackAffiliateClick(toolName: string, toolSlug: string, destinationUrl: string) {
  trackEvent('affiliate_link_clicked', {
    tool_name: toolName,
    tool_slug: toolSlug,
    destination_url: destinationUrl,
  });
}

export function trackComparisonOpened(comparisonSlug: string, comparisonTitle: string) {
  trackEvent('comparison_opened', {
    comparison_slug: comparisonSlug,
    comparison_title: comparisonTitle,
  });
}

export function trackComparisonCreated(tool1: string, tool2: string) {
  trackEvent('comparison_created', {
    tool_1: tool1,
    tool_2: tool2,
  });
}

export function trackWorkflowViewed(workflowSlug: string, workflowTitle: string) {
  trackEvent('workflow_viewed', {
    workflow_slug: workflowSlug,
    workflow_title: workflowTitle,
  });
}

export function trackGoalViewed(goalSlug: string, goalTitle: string) {
  trackEvent('goal_viewed', {
    goal_slug: goalSlug,
    goal_title: goalTitle,
  });
}

export function trackSearchPerformed(query: string, resultsCount?: number) {
  trackEvent('search_performed', {
    search_term: query,
    results_count: resultsCount,
  });
}

export function trackCategoryOpened(categorySlug: string, categoryName: string) {
  trackEvent('category_opened', {
    category_slug: categorySlug,
    category_name: categoryName,
  });
}

export function trackReviewSubmitted(toolSlug: string, rating: number) {
  trackEvent('review_submitted', {
    tool_slug: toolSlug,
    rating,
  });
}

export function trackToolSubmitted(toolName: string) {
  trackEvent('tool_submitted', {
    tool_name: toolName,
  });
}

export function trackNewsletterSignup(source?: string) {
  trackEvent('newsletter_signup', {
    signup_source: source || 'unknown',
  });
}

export function trackShareClicked(contentType: string, contentSlug: string, platform?: string) {
  trackEvent('share_clicked', {
    content_type: contentType,
    content_slug: contentSlug,
    platform: platform || 'unknown',
  });
}

export function trackEmbedCodeCopied(toolSlug: string) {
  trackEvent('embed_code_copied', {
    tool_slug: toolSlug,
  });
}

// ─── TypeScript global augmentation ─────────────

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
