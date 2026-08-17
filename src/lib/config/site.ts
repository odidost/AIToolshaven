import { env } from "@/lib/env";

/**
 * Global site configuration.
 * Serves as the single source of truth for metadata, canonical URLs, and branding.
 */
export const siteConfig = {
  name: "AIToolsHaven",
  description: "The human-curated AI tools directory. Discover, compare, and choose from 1,000+ verified AI tools across writing, coding, image generation, and more.",
  
  // The base URL of the site (e.g. "https://aitoolshaven.com" or "http://localhost:3000")
  baseUrl: env.NEXT_PUBLIC_BASE_URL,
  
  // Default Open Graph image
  ogImage: "/opengraph-image",

  // Social handles
  socialLinks: {
    x: "https://x.com/aitoolshaven",
    facebook: "https://web.facebook.com/AIToolsHaven",
    youtube: "https://www.youtube.com/@Aitoolshaven",
  },
  
  // Organization Info
  organization: {
    name: "AIToolsHaven",
    email: "aitoolshaven@gmail.com",
  },
  
  // Site author for metadata
  author: {
    name: "AIToolsHaven Editorial Team",
    url: env.NEXT_PUBLIC_BASE_URL,
  },
};

export type SiteConfig = typeof siteConfig;
