/**
 * Workflow Cross-Silo Relations & Smart Tool Resolution (2026)
 *
 * Bridges Tier 5 Workflows with:
 * 1. Tier 2 Category Hubs (/category/[slug])
 * 2. Tier 3 Freemium & Free Hub (/freemium-ai-tools)
 * 3. Tier 4 Blog Blueprints (/blog/[slug])
 * 4. Tool Directory Review Pages (/tool/[slug])
 */

// Normalizes tool names from workflows to exact directory slugs in data/tools.json
const TOOL_SLUG_ALIASES: Record<string, string> = {
  "chatgpt": "chatgpt",
  "chatgpt (free)": "chatgpt",
  "chatgpt plus": "chatgpt",
  "elevenlabs": "elevenlabs",
  "elevenlabs (creator plan)": "elevenlabs",
  "capcut": "capcut",
  "capcut desktop (free)": "capcut",
  "tubebuddy": "tubebuddy",
  "vidiq": "vidiq",
  "vidiq pro": "vidiq",
  "midjourney": "midjourney",
  "runway gen-2": "runway-gen2",
  "runway gen-3": "runway-gen-3",
  "runway": "runway-gen2",
  "canva": "canva",
  "canva pro": "canva",
  "claude": "claude",
  "claude 3": "claude",
  "claude 3.5 sonnet": "claude",
  "cursor": "cursor",
  "github copilot": "github-copilot",
  "v0": "v0",
  "v0 by vercel": "v0",
  "opus clip": "opus-clip",
  "buffer": "buffer",
  "notion ai": "notion-ai",
  "zapier central": "zapier-central",
  "clickup": "clickup",
  "framer": "framer",
  "stripe": "stripe",
  "apollo.io": "apollo",
  "apollo": "apollo",
  "clay": "clay-ai",
  "instantly": "instantly",
  "gemini": "gemini",
  "murf ai": "murf-ai",
  "playht": "playht",
  "premiere pro": "premiere-pro",
  "davinci resolve": "davinci-resolve",
  "make": "make",
  "n8n": "n8n",
  "airtable": "airtable",
};

/**
 * Resolves a workflow step or budget tool name to a valid directory slug.
 */
export function resolveToolSlug(toolName: string): string {
  const normalized = toolName.toLowerCase().trim();
  if (TOOL_SLUG_ALIASES[normalized]) {
    return TOOL_SLUG_ALIASES[normalized];
  }
  // Try clean slug conversion
  return normalized
    .replace(/\s*\([^)]*\)/g, "") // remove parenthetical like (Free)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export type WorkflowRelatedGuide = {
  slug: string;
  title: string;
  archetype: "shootout" | "roundup" | "blueprint";
  badge: string;
};

export type WorkflowSiloData = {
  primaryCategory: {
    name: string;
    slug: string;
    description: string;
  };
  relatedGuides: WorkflowRelatedGuide[];
  freemiumCallout: {
    title: string;
    description: string;
    linkText: string;
    href: string;
  };
};

const WORKFLOW_SILO_REGISTRY: Record<string, WorkflowSiloData> = {
  "faceless-youtube": {
    primaryCategory: {
      name: "AI Video Generators",
      slug: "ai-video-generators",
      description: "Compare text-to-video models, upscalers, and auto-captioning tools.",
    },
    relatedGuides: [
      {
        slug: "how-to-launch-faceless-youtube-channel-ai-stack-2026",
        title: "How to Launch a Profitable Faceless YouTube Channel in 2026",
        archetype: "blueprint",
        badge: "In-Depth Blueprint",
      },
      {
        slug: "best-ai-short-form-video-repurposing-tools",
        title: "Best AI Short-Form Video Repurposing Tools (2026)",
        archetype: "roundup",
        badge: "Repurposing Stack",
      },
      {
        slug: "best-free-ai-voice-audio-generators-2026",
        title: "8 Best Free AI Voice & Audio Generators (2026)",
        archetype: "roundup",
        badge: "Free Voiceover Tools",
      },
    ],
    freemiumCallout: {
      title: "Build This Channel for $0 Upfront",
      description: "You don't need expensive subscriptions to start. Use our verified 100% free voice clones, desktop editors, and free-tier LLMs.",
      linkText: "Explore 15 Best Free AI Tools (No Credit Card)",
      href: "/freemium-ai-tools",
    },
  },
  "faceless-youtube-channel": {
    primaryCategory: {
      name: "AI Video Generators",
      slug: "ai-video-generators",
      description: "Compare text-to-video models, upscalers, and auto-captioning tools.",
    },
    relatedGuides: [
      {
        slug: "how-to-launch-faceless-youtube-channel-ai-stack-2026",
        title: "How to Launch a Profitable Faceless YouTube Channel in 2026",
        archetype: "blueprint",
        badge: "In-Depth Blueprint",
      },
      {
        slug: "best-ai-short-form-video-repurposing-tools",
        title: "Best AI Short-Form Video Repurposing Tools (2026)",
        archetype: "roundup",
        badge: "Repurposing Stack",
      },
      {
        slug: "best-free-ai-voice-audio-generators-2026",
        title: "8 Best Free AI Voice & Audio Generators (2026)",
        archetype: "roundup",
        badge: "Free Voiceover Tools",
      },
    ],
    freemiumCallout: {
      title: "Run This Video Pipeline for $0",
      description: "Test your niche with free-tier tools before committing to creator plans. See our tested $0 stack.",
      linkText: "Browse Free AI Voice & Video Tools",
      href: "/freemium-ai-tools",
    },
  },
  "vibe-coding": {
    primaryCategory: {
      name: "AI Coding Assistants",
      slug: "coding-assistants",
      description: "Compare AI code editors, autonomous software engineers, and CLI agents.",
    },
    relatedGuides: [
      {
        slug: "the-non-technical-founders-guide-to-vibe-coding-2026",
        title: "The Non-Technical Founder's Guide to Vibe Coding in 2026",
        archetype: "blueprint",
        badge: "Founder Guide",
      },
      {
        slug: "vibe-coding-tools-bolt-lovable-v0",
        title: "Vibe Coding in 2026: Bolt.new vs Lovable vs v0 Generative UI Stack",
        archetype: "shootout",
        badge: "UI Builders Compared",
      },
      {
        slug: "how-to-build-saas-with-lovable-supabase-cursor-2026",
        title: "How to Build a Production SaaS with Lovable, Supabase & Cursor",
        archetype: "blueprint",
        badge: "Production Blueprint",
      },
    ],
    freemiumCallout: {
      title: "Start Vibe Coding with Zero Upfront Cost",
      description: "Generative UI tools offer generous free credits. Pair them with free GitHub Copilot alternatives and open-source models.",
      linkText: "View 8 Best Free AI Coding Assistants & IDEs",
      href: "/freemium-ai-tools",
    },
  },
  "ai-influencer": {
    primaryCategory: {
      name: "AI Video Generators",
      slug: "ai-video-generators",
      description: "Compare text-to-video models, upscalers, and auto-captioning tools.",
    },
    relatedGuides: [
      {
        slug: "best-ai-avatar-video-generators",
        title: "The Top AI Avatar & Talking Head Generators in 2026",
        archetype: "roundup",
        badge: "Avatar Generators",
      },
      {
        slug: "best-ai-video-generators-2026",
        title: "The 7 Best AI Video Generators in 2026: Hollywood Models",
        archetype: "shootout",
        badge: "Video Benchmark",
      },
      {
        slug: "best-free-ai-image-generators-unlimited-prompts-2026",
        title: "7 Best Free AI Image Generators in 2026 (Unlimited Prompts)",
        archetype: "roundup",
        badge: "Free Image Models",
      },
    ],
    freemiumCallout: {
      title: "Generate Character Faces for Free",
      description: "Use unlimited free AI image generators and open-source Flux pipelines to test character consistency before paying for subscriptions.",
      linkText: "See 7 Best Free AI Image Generators ($0)",
      href: "/freemium-ai-tools",
    },
  },
  "content-creator": {
    primaryCategory: {
      name: "AI Copywriting",
      slug: "copywriting",
      description: "Compare AI blog writers, social media generators, and editorial assistants.",
    },
    relatedGuides: [
      {
        slug: "best-ai-short-form-video-repurposing-tools",
        title: "Best AI Short-Form Video Repurposing Tools in 2026",
        archetype: "roundup",
        badge: "Social Repurposing",
      },
      {
        slug: "best-free-ai-writing-copywriting-tools-2026",
        title: "10 Best Free AI Writing & Copywriting Tools in 2026",
        archetype: "roundup",
        badge: "Free Writing Stack",
      },
      {
        slug: "prompt-engineering-guide-ai-presentations-2026",
        title: "Prompt Engineering Guide for Presentations & Content in 2026",
        archetype: "blueprint",
        badge: "Content Blueprint",
      },
    ],
    freemiumCallout: {
      title: "Scale Your Content Stack on Free Tiers",
      description: "Compare the 10 best free copywriting tools and social automation tools that require no credit card to start publishing.",
      linkText: "Discover Free Writing & Copywriting Tools",
      href: "/freemium-ai-tools",
    },
  },
  "agency": {
    primaryCategory: {
      name: "AI Productivity Tools",
      slug: "productivity",
      description: "Compare AI task managers, autonomous agents, and document processors.",
    },
    relatedGuides: [
      {
        slug: "autonomous-ai-software-engineers-swe-agents-2026",
        title: "Autonomous AI Software Engineers in 2026: Devin vs Cursor vs Claude Code",
        archetype: "shootout",
        badge: "Agent Architecture",
      },
      {
        slug: "best-ai-subscriptions-for-developers-2026",
        title: "Best AI Subscriptions for Developers & Technical Teams in 2026",
        archetype: "roundup",
        badge: "Subscription ROI",
      },
      {
        slug: "top-ai-presentation-tools-for-sales-teams-2026",
        title: "The Top 7 AI Presentation Tools for Sales Teams & Client Proposals",
        archetype: "roundup",
        badge: "Client Deliverables",
      },
    ],
    freemiumCallout: {
      title: "Evaluate Agency Stacks Without High Commitments",
      description: "Test multi-agent operational stacks and productivity apps on free and freemium plans before onboarding team seats.",
      linkText: "Explore 15 Verified Free AI Work Tools",
      href: "/freemium-ai-tools",
    },
  },
  "solopreneur": {
    primaryCategory: {
      name: "AI Productivity Tools",
      slug: "productivity",
      description: "Compare AI task managers, autonomous agents, and document processors.",
    },
    relatedGuides: [
      {
        slug: "the-non-technical-founders-guide-to-vibe-coding-2026",
        title: "The Non-Technical Founder's Guide to Vibe Coding in 2026",
        archetype: "blueprint",
        badge: "Micro-SaaS Blueprint",
      },
      {
        slug: "how-to-build-saas-with-lovable-supabase-cursor-2026",
        title: "How to Build a Production SaaS with Lovable, Supabase & Cursor",
        archetype: "blueprint",
        badge: "Production Setup",
      },
      {
        slug: "best-completely-free-ai-tools-no-credit-card-2026",
        title: "15 Best Completely Free AI Tools in 2026 (No Credit Card)",
        archetype: "roundup",
        badge: "Bootstrap Stack",
      },
    ],
    freemiumCallout: {
      title: "Bootstrap Your Business on $0 Software",
      description: "Solopreneurs don't need $300/mo SaaS overhead. Assemble your entire tech stack using verified free tiers.",
      linkText: "Check Out the $0 Free AI Software Hub",
      href: "/freemium-ai-tools",
    },
  },
  "automated-lead-enrichment": {
    primaryCategory: {
      name: "AI Productivity Tools",
      slug: "productivity",
      description: "Compare AI task managers, autonomous agents, and document processors.",
    },
    relatedGuides: [
      {
        slug: "top-ai-presentation-tools-for-sales-teams-2026",
        title: "The Top 7 AI Presentation Tools for Sales Teams & Client Proposals",
        archetype: "roundup",
        badge: "Sales Enablement",
      },
      {
        slug: "storydoc-vs-pitch-which-is-better-2026",
        title: "Storydoc vs Pitch: Which AI Sales Platform is Better in 2026?",
        archetype: "shootout",
        badge: "Sales Pitch Stack",
      },
      {
        slug: "prompt-engineering-guide-ai-presentations-2026",
        title: "The Ultimate Prompt Engineering Guide for AI Presentations in 2026",
        archetype: "blueprint",
        badge: "Prompt Engineering",
      },
    ],
    freemiumCallout: {
      title: "Test Outbound Sequences with Free Credits",
      description: "Enrich your first 100 leads and draft personalized pitches without entering a credit card.",
      linkText: "Browse Free & Freemium AI Tools",
      href: "/freemium-ai-tools",
    },
  },
};

/**
 * Returns topic silo data for a given workflow slug.
 */
export function getWorkflowSiloData(workflowSlug: string): WorkflowSiloData {
  if (WORKFLOW_SILO_REGISTRY[workflowSlug]) {
    return WORKFLOW_SILO_REGISTRY[workflowSlug];
  }

  // Sensible default fallback
  return {
    primaryCategory: {
      name: "AI Tools Directory",
      slug: "all",
      description: "Explore 25+ functional categories of verified AI software.",
    },
    relatedGuides: [
      {
        slug: "best-completely-free-ai-tools-no-credit-card-2026",
        title: "15 Best Completely Free AI Tools in 2026 (No Credit Card)",
        archetype: "roundup",
        badge: "Free AI Hub",
      },
      {
        slug: "chatgpt-plus-vs-claude-pro-vs-gemini-advanced-perplexity-pro-2026",
        title: "The Definitive 2026 AI Subscription Showdown",
        archetype: "shootout",
        badge: "Model Shootout",
      },
    ],
    freemiumCallout: {
      title: "Looking for 100% Free AI Alternatives?",
      description: "Compare verified free-tier tools with zero credit card requirements and no hidden fees.",
      linkText: "Explore 15 Best Free AI Tools (2026)",
      href: "/freemium-ai-tools",
    },
  };
}
