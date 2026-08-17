/**
 * Safe URL Normalization Utility for AIToolsHaven
 * Normalizes official website URLs without altering canonical tool slugs or routes.
 */

export interface UrlNormalizationResult {
  original: string;
  normalized: string | null;
  isValid: boolean;
  needsReview: boolean;
  reason?: string;
}

export function normalizeOfficialUrl(rawUrl: string | undefined | null): UrlNormalizationResult {
  if (!rawUrl || typeof rawUrl !== 'string') {
    return {
      original: rawUrl || '',
      normalized: null,
      isValid: false,
      needsReview: true,
      reason: 'Empty or undefined URL',
    };
  }

  // 1. Normalize whitespace
  const trimmed = rawUrl.trim();
  if (!trimmed) {
    return {
      original: rawUrl,
      normalized: null,
      isValid: false,
      needsReview: true,
      reason: 'Whitespace-only URL',
    };
  }

  // 2. Handle protocol prefix
  let candidate = trimmed;
  if (!/^https?:\/\//i.test(candidate)) {
    // If it doesn't start with http:// or https://, prepend https://
    candidate = `https://${candidate}`;
  } else if (/^http:\/\//i.test(candidate)) {
    // Standardize http to https where safe
    candidate = candidate.replace(/^http:\/\//i, 'https://');
  }

  // 3. Validate with URL parser
  try {
    const parsed = new URL(candidate);
    
    // Validate hostname structure (must have a valid domain with TLD)
    if (!parsed.hostname || !parsed.hostname.includes('.') || parsed.hostname.endsWith('.')) {
      return {
        original: rawUrl,
        normalized: null,
        isValid: false,
        needsReview: true,
        reason: 'Malformed hostname or missing TLD',
      };
    }

    // Disallow invalid/placeholder hosts
    const invalidHosts = ['undefined', 'null', 'localhost', 'example.com', 'placeholder'];
    if (invalidHosts.includes(parsed.hostname.toLowerCase())) {
      return {
        original: rawUrl,
        normalized: null,
        isValid: false,
        needsReview: true,
        reason: 'Invalid placeholder hostname',
      };
    }

    // Preserve valid path, query, hash without trailing slash if pure root
    let finalUrl = parsed.toString();
    if (parsed.pathname === '/' && !parsed.search && !parsed.hash) {
      finalUrl = `${parsed.protocol}//${parsed.hostname}`;
    }

    return {
      original: rawUrl,
      normalized: finalUrl,
      isValid: true,
      needsReview: false,
    };
  } catch {
    return {
      original: rawUrl,
      normalized: null,
      isValid: false,
      needsReview: true,
      reason: 'Invalid URL syntax',
    };
  }
}
