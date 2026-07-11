/**
 * Validates and exposes required environment variables.
 * Fails fast if required variables are missing.
 */

// We require NEXT_PUBLIC_BASE_URL to be set in all environments,
// as it is the single source of truth for canonical URLs, metadata, etc.
if (!process.env.NEXT_PUBLIC_BASE_URL) {
  throw new Error(
    "❌ FATAL ERROR: NEXT_PUBLIC_BASE_URL environment variable is missing. " +
    "This must be set in your .env file or Vercel environment variables (e.g. 'https://aitoolshaven.com' or 'http://localhost:3000')."
  );
}

// Ensure it doesn't end with a trailing slash to prevent double slashes in generated URLs
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "");

export const env = {
  NEXT_PUBLIC_BASE_URL: baseUrl,
  // Add other required env vars here as the project grows (e.g. Supabase URLs, analytics IDs)
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || "",
  NEXT_PUBLIC_CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID || "",
} as const;
