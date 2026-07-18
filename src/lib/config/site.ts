import { env } from "@/lib/env";

/**
 * Global site configuration.
 * Serves as the single source of truth for metadata, canonical URLs, and branding.
 */
export const siteConfig = {
  name: "AIToolsHaven",
  description: "Discover, compare, and review the best AI tools of 2026. AIToolsHaven is the #1 directory for AI software across writing, coding, image generation, and more.",
  
  // The base URL of the site (e.g. "https://aitoolshaven.com" or "http://localhost:3000")
  baseUrl: env.NEXT_PUBLIC_BASE_URL,
  
  // Default Open Graph image
  ogImage: "/opengraph-image",

  // Social handles
  socialLinks: {
    twitter: "https://twitter.com/aitoolshaven",
    github: "https://github.com/aitoolshaven",
    linkedin: "https://linkedin.com/company/aitoolshaven",
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
