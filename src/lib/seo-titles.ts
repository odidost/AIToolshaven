/**
 * High-CTR Title & Description SEO Optimization Engine (2026)
 *
 * Implements Google SERP best practices:
 * 1. Front-loads primary search keyword within the first 30 characters.
 * 2. Capps length at 50-60 characters to eliminate SERP snippet truncation.
 * 3. Incorporates tested 2026 power triggers: [Ranked & Tested], [Comparison], [Tested], (2026).
 * 4. Strips clunky redundancies ("AI Writing Tools AI Tools" -> "AI Writing Tools").
 */

// Specific overrides for long or complex blog titles to guarantee optimal SERP display
const BLOG_TITLE_OVERRIDES: Record<string, string> = {
  "cursor-vs-windsurf-vs-copilot-best-ai-code-editors":
    "Cursor vs Windsurf vs Copilot (2026 AI Code Editors)",
  "chatgpt-plus-vs-claude-pro-vs-gemini-advanced-perplexity-pro-2026": 
    "ChatGPT vs Claude vs Gemini vs Perplexity (2026 Shootout)",
  "is-chatgpt-plus-worth-it-2026": 
    "Is ChatGPT Plus Still Worth It? (2026 Honest Review)",
  "ai-reasoning-models-showdown-claude-o3-deepseek-gemini-2026":
    "Claude vs o3 vs DeepSeek vs Gemini (2026 Benchmark)",
  "model-context-protocol-mcp-guide-best-servers-2026": 
    "Model Context Protocol (MCP) Guide (2026 Best Servers)",
  "best-model-context-protocol-mcp-servers-2026": 
    "10 Best MCP Servers for Developers (2026 Ranked)",
  "how-to-build-custom-mcp-server-guide-2026": 
    "Build a Custom MCP Server in TS & Python (2026 Guide)",
  "how-to-convert-pdf-to-powerpoint-with-ai-2026": 
    "Convert PDF to PowerPoint with AI (2026 Step-by-Step)",
  "top-ai-presentation-tools-for-sales-teams-2026": 
    "7 Best AI Presentation Tools for Sales (2026 Ranked)",
  "how-to-build-saas-with-lovable-supabase-cursor-2026": 
    "Build Production SaaS with Lovable & Cursor (2026)",
  "prompt-engineering-guide-ai-app-builders-2026": 
    "Prompt Engineering for AI App Builders (2026 Blueprint)",
  "prompt-engineering-guide-ai-presentations-2026": 
    "Prompt Engineering for AI Presentations (2026 Guide)",
  "best-ai-subscriptions-for-developers-2026": 
    "Best AI Subscriptions for Developers (2026 Comparison)",
  "how-to-generate-startup-pitch-deck-with-ai-2026": 
    "Build a Startup Pitch Deck with AI in 15 Mins (2026)",
  "the-non-technical-founders-guide-to-vibe-coding-2026": 
    "Non-Technical Guide to Vibe Coding (2026 Blueprint)",
  "how-to-launch-faceless-youtube-channel-ai-stack-2026": 
    "Launch a Faceless YouTube Channel with AI (2026 Blueprint)",
  "how-to-run-deepseek-local-llms-guide-2026": 
    "Run DeepSeek V4-Pro & Open LLMs Locally (2026 Guide)",
  "best-completely-free-ai-tools-no-credit-card-2026":
    "15 Best Free & Freemium AI Tools (2026) [No Credit Card]",
  "open-source-ai-stack-run-local-models-laptop-2026":
    "Run Open-Source AI on Your Laptop (2026 Blueprint)",
  "best-free-ai-image-generators-unlimited-prompts-2026":
    "7 Best Free AI Image Generators (2026) [Unlimited]",
  "best-free-ai-writing-copywriting-tools-2026":
    "10 Best Free AI Writing Tools (2026) [No Credit Card]",
  "best-free-ai-coding-assistants-ides-2026":
    "8 Best Free AI Coding Assistants & IDEs (2026)",
  "best-free-ai-voice-audio-generators-2026":
    "8 Best Free AI Voice Generators (2026) [Tested]",
  "best-free-ai-presentation-makers-2026":
    "Best Free AI Presentation Makers (2026) [$0 Cost]",
};

/**
 * Normalizes category names to avoid "AI Writing Tools AI Tools" or awkward grammar.
 */
export function formatCategoryBase(rawName: string): string {
  let clean = rawName.trim();
  const startsWithAi = /^ai\b/i.test(clean);
  const hasPluralToolNoun = /(?:tools|generators|assistants|chatbots|agents|makers|builders|platforms|software)$/i.test(clean);

  if (!startsWithAi) {
    clean = `AI ${clean}`;
  }
  if (!hasPluralToolNoun) {
    clean = `${clean} Tools`;
  }
  return clean;
}

/**
 * Generates a high-CTR, 50-60 character title for Category Hub pages.
 * Example: "34 Best AI Writing Tools (2026) [Ranked & Tested]"
 */
export function getOptimizedCategoryTitle(categoryName: string, toolCount?: number): string {
  const base = formatCategoryBase(categoryName);
  
  if (toolCount && toolCount >= 3) {
    const full = `${toolCount} Best ${base} (2026) [Ranked & Tested]`;
    if (full.length <= 60) return full;
    
    const compact = `${toolCount} Best ${base} (2026) [Ranked]`;
    if (compact.length <= 60) return compact;
    
    return `${toolCount} Best ${base} in 2026`;
  }

  const standard = `Best ${base} (2026) [Ranked & Tested]`;
  if (standard.length <= 60) return standard;

  const compact = `Best ${base} (2026) [Ranked]`;
  if (compact.length <= 60) return compact;

  return `Best ${base} in 2026`;
}

/**
 * Generates an actionable, click-enticing meta description for Category Hubs.
 */
export function getOptimizedCategoryDescription(categoryName: string, toolCount?: number, heroDesc?: string): string {
  const base = formatCategoryBase(categoryName);
  const countStr = toolCount && toolCount > 0 ? `${toolCount} ` : "";
  
  if (heroDesc && heroDesc.length >= 110 && heroDesc.length <= 158) {
    return heroDesc;
  }

  return `Compare ${countStr}top-rated ${base} for 2026. Real user ratings, free pricing tiers, feature matrices, and verified pros/cons to choose your ideal stack.`;
}

/**
 * Generates a high-CTR, 50-60 character title for Blog Articles.
 * Example: "Cursor vs Windsurf vs Copilot (2026 Comparison)"
 * Example: "Best AI Short-Form Video Repurposing Tools (2026 Tested)"
 */
export function getOptimizedBlogTitle(rawTitle: string, slug?: string): string {
  if (slug && BLOG_TITLE_OVERRIDES[slug]) {
    return BLOG_TITLE_OVERRIDES[slug];
  }

  // 1. Remove parenthetical descriptions
  let clean = rawTitle.replace(/\([^)]*(?:credit card|paywall|alternative|unlimited|zero cost|hidden|zero-loss)[^)]*\)/gi, '');
  
  // 2. Remove redundant 'in 2026', '(2026)', '(2026 Practical Guide)', etc.
  clean = clean
    .replace(/\s*(?:in\s*)?\(?2026\)?(?:\s*Practical\s*Guide)?/gi, '')
    .replace(/:\s*$/, '')
    .trim();

  // 3. Handle subtitles after ':'
  let mainTitle = clean;
  if (clean.includes(':')) {
    const parts = clean.split(':');
    if (clean.length > 48) {
      mainTitle = parts[0].trim();
    }
  }

  let result = '';
  if (/\bvs\b/i.test(mainTitle)) {
    if (mainTitle.length <= 42) {
      result = `${mainTitle} (2026 Comparison)`;
    } else {
      result = `${mainTitle} [2026 Comparison]`;
    }
  } else if (/^(?:the\s+)?\d+\s+best/i.test(mainTitle)) {
    result = `${mainTitle} (2026) [Ranked]`;
  } else if (mainTitle.length <= 36) {
    result = `${mainTitle} (2026) [Ranked & Tested]`;
  } else if (mainTitle.length <= 44) {
    result = `${mainTitle} (2026 Tested)`;
  } else {
    result = `${mainTitle} (2026 Guide)`;
  }

  // Fallback trim if exceeding 60 characters
  if (result.length > 60) {
    result = `${mainTitle} (2026)`;
  }
  if (result.length > 60) {
    result = result.slice(0, 57).trim() + '...';
  }

  return result;
}

/**
 * Optimizes the meta description for blog articles to stay within 130-155 characters.
 */
export function getOptimizedBlogDescription(rawSummary: string): string {
  const clean = rawSummary.replace(/\s+/g, ' ').trim();
  if (clean.length <= 155) {
    return clean;
  }
  // Trim to nearest sentence or word boundary under 155 chars
  const sub = clean.slice(0, 152);
  const lastSpace = sub.lastIndexOf(' ');
  return (lastSpace > 110 ? sub.slice(0, lastSpace) : sub).trim() + '...';
}

// Specific overrides for workflow titles to guarantee 50-60 character high-CTR SERP display
const WORKFLOW_TITLE_OVERRIDES: Record<string, string> = {
  "faceless-youtube": "Faceless YouTube AI Workflow (2026 Step-by-Step)",
  "ai-influencer": "AI Influencer Creation Workflow (2026 Persona Blueprint)",
  "vibe-coding": "Vibe Coding AI Workflow (2026 Full-Stack Blueprint)",
  "content-creator": "Content Creator AI Workflow (2026 Multi-Platform Stack)",
  "agency": "AI Agency Operations Workflow (2026 Automation Stack)",
  "solopreneur": "Solopreneur AI Business Workflow (2026 Solo Founder Stack)",
  "faceless-youtube-channel": "Faceless YouTube Channel AI Workflow (2026 Automation)",
  "automated-lead-enrichment": "B2B Lead Enrichment AI Workflow (2026 Outbound Stack)",
};

/**
 * Generates a high-CTR, 50-60 character title for Workflows & Playbooks.
 * Example: "Faceless YouTube AI Workflow (2026 Step-by-Step)"
 */
export function getOptimizedWorkflowTitle(rawTitle: string, slug?: string): string {
  if (slug && WORKFLOW_TITLE_OVERRIDES[slug]) {
    return WORKFLOW_TITLE_OVERRIDES[slug];
  }

  let clean = rawTitle
    .replace(/\s*(?:in\s*)?\(?2026\)?(?:\s*Blueprint|\s*Workflow|\s*Playbook)?/gi, '')
    .trim();

  let candidate = `${clean} AI Workflow (2026 Blueprint)`;
  if (candidate.length <= 60) return candidate;

  candidate = `${clean} AI Workflow (2026)`;
  if (candidate.length <= 60) return candidate;

  return candidate.slice(0, 57).trim() + '...';
}

/**
 * Optimizes the meta description for workflow playbooks within 135-155 characters.
 */
export function getOptimizedWorkflowDescription(rawDesc: string, workflow?: any): string {
  if (workflow?.meta?.outcome) {
    const combined = `Step-by-step 2026 AI workflow: ${workflow.description.replace(/\.$/, '')}. Deliverable: ${workflow.meta.outcome.replace(/\.$/, '')}. Complete tool stack & budget.`;
    if (combined.length <= 158 && combined.length >= 120) {
      return combined;
    }
  }

  const clean = rawDesc.replace(/\s+/g, ' ').trim();
  if (clean.length >= 120 && clean.length <= 158) {
    return clean;
  }
  const full = `Step-by-step 2026 AI blueprint: ${clean} Compare budget vs premium toolchains, execution times, and expert best practices.`;
  if (full.length <= 158) {
    return full;
  }
  const sub = full.slice(0, 155);
  const lastSpace = sub.lastIndexOf(' ');
  return (lastSpace > 120 ? sub.slice(0, lastSpace) : sub).trim() + '...';
}

