/**
 * Validates and exposes required environment variables with safe production fallbacks.
 */

const rawBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
  (process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://aitoolshaven.com');

// Ensure it doesn't end with a trailing slash to prevent double slashes in generated URLs
const baseUrl = rawBaseUrl.replace(/\/$/, "");

export const env = {
  NEXT_PUBLIC_BASE_URL: baseUrl,
  // Google Analytics 4
  NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  // Microsoft Clarity
  NEXT_PUBLIC_CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID || "",
} as const;
