import { comparisons, ComparisonData } from "./comparisons";
import { articles, Article } from "./articles";
import { workflows, Workflow } from "./workflows";

export interface CategoryResourceBundle {
  comparisons: ComparisonData[];
  guides: Article[];
  workflows: Workflow[];
  commercialHighlights: {
    badge: string;
    description: string;
  };
}

// Canonical category slug mapping to ensure subcategories and aliases resolve properly
const CATEGORY_MAP: Record<string, string> = {
  "text-generation": "ai-writing-tools",
  "writing": "ai-writing-tools",
  "ai-writing-tools": "ai-writing-tools",
  "image-generation": "ai-image-generators",
  "image": "ai-image-generators",
  "ai-image-generators": "ai-image-generators",
  "video-creation": "ai-video-generators",
  "video": "ai-video-generators",
  "ai-video-generators": "ai-video-generators",
  "audio": "audio-voice",
  "voice": "audio-voice",
  "audio-voice": "audio-voice",
  "ai-voice-generators": "audio-voice",
  "coding": "coding-assistants",
  "code": "coding-assistants",
  "coding-assistants": "coding-assistants",
  "marketing": "marketing-sales",
  "sales": "marketing-sales",
  "marketing-sales": "marketing-sales",
  "ai-marketing-tools": "marketing-sales",
  "ai-sales-tools": "marketing-sales",
  "productivity": "productivity",
  "ai-productivity-tools": "productivity",
  "task-management": "productivity",
  "ai-seo-tools": "ai-seo-tools",
  "seo-tools": "ai-seo-tools",
  "ai-social-media": "ai-social-media-tools",
  "ai-social-media-tools": "ai-social-media-tools",
  "ai-chatbots": "ai-chatbots",
  "chatbots": "ai-chatbots",
  "ai-agents": "ai-agents",
  "ai-presentation-makers": "ai-presentation-makers",
  "presentation-makers": "ai-presentation-makers",
  "ai-resume-builders": "ai-resume-builders",
  "ai-meeting-assistants": "ai-meeting-assistants",
  "ai-transcription-tools": "ai-transcription-tools",
  "ai-research-tools": "ai-research-tools",
  "ai-calendar-scheduling": "productivity",
  "ai-note-taking-knowledge": "productivity",
  "ai-email-productivity": "productivity",
  "ai-project-management": "productivity",
  "logo-generators": "ai-image-generators",
};

// Hand-curated primary comparison slugs per category
const CATEGORY_COMPARISON_SLUGS: Record<string, string[]> = {
  "ai-video-generators": ["heygen-vs-synthesia", "fliki-vs-opus-clip"],
  "coding-assistants": ["cursor-vs-github-copilot", "codeium-vs-cursor"],
  "ai-writing-tools": ["chatgpt-vs-claude", "jasper-vs-writesonic"],
  "ai-image-generators": ["dall-e-3-vs-midjourney", "midjourney-vs-flux"],
  "audio-voice": ["elevenlabs-vs-murf-ai"],
  "marketing-sales": ["apollo-vs-instantly", "jasper-vs-writesonic"],
  "ai-meeting-assistants": ["fathom-video-vs-tldv"],
  "ai-transcription-tools": ["fathom-video-vs-tldv"],
  "ai-chatbots": ["chatgpt-vs-claude"],
  "productivity": ["fathom-video-vs-tldv", "apollo-vs-instantly"],
};

// Hand-curated primary article slugs per category
const CATEGORY_ARTICLE_SLUGS: Record<string, string[]> = {
  "ai-video-generators": [
    "best-ai-short-form-video-repurposing-tools",
    "how-to-launch-faceless-youtube-channel-ai-stack-2026",
    "best-ai-video-generators-2026",
  ],
  "coding-assistants": [
    "cursor-vs-windsurf-vs-copilot-best-ai-code-editors",
    "best-ai-subscriptions-for-developers-2026",
    "best-model-context-protocol-mcp-servers-2026",
    "how-to-build-saas-with-lovable-supabase-cursor-2026",
  ],
  "ai-writing-tools": [
    "is-chatgpt-plus-worth-it-2026",
    "chatgpt-plus-vs-claude-pro-vs-gemini-advanced-perplexity-pro-2026",
    "ai-reasoning-models-showdown-claude-o3-deepseek-gemini-2026",
  ],
  "ai-image-generators": [
    "best-free-ai-image-generators-unlimited-prompts-2026",
    "the-non-technical-founders-guide-to-vibe-coding-2026",
  ],
  "audio-voice": [
    "best-free-ai-voice-audio-generators-2026",
    "how-to-launch-faceless-youtube-channel-ai-stack-2026",
  ],
  "ai-presentation-makers": [
    "top-ai-presentation-tools-for-sales-teams-2026",
    "how-to-convert-pdf-to-powerpoint-with-ai-2026",
    "prompt-engineering-guide-ai-presentations-2026",
  ],
  "ai-agents": [
    "autonomous-ai-software-engineers-swe-agents-2026",
    "prompt-engineering-guide-ai-app-builders-2026",
    "best-model-context-protocol-mcp-servers-2026",
  ],
  "ai-chatbots": [
    "is-chatgpt-plus-worth-it-2026",
    "chatgpt-plus-vs-claude-pro-vs-gemini-advanced-perplexity-pro-2026",
    "ai-reasoning-models-showdown-claude-o3-deepseek-gemini-2026",
  ],
  "productivity": [
    "the-non-technical-founders-guide-to-vibe-coding-2026",
    "best-ai-subscriptions-for-developers-2026",
  ],
};

// Hand-curated primary workflow slugs per category
const CATEGORY_WORKFLOW_SLUGS: Record<string, string[]> = {
  "ai-video-generators": ["faceless-youtube"],
  "audio-voice": ["faceless-youtube"],
  "coding-assistants": ["automated-code-refactoring"],
  "ai-writing-tools": ["seo-content-engine"],
  "ai-seo-tools": ["seo-content-engine"],
  "marketing-sales": ["seo-content-engine", "faceless-youtube"],
  "productivity": ["faceless-youtube"],
};

/**
 * Retrieves the high-commercial resource bundle (comparisons, buying guides, workflows)
 * associated with a category for topic-cluster SEO and user decision-making.
 */
export function getCategoryResourceBundle(rawSlug: string): CategoryResourceBundle {
  const normalizedSlug = CATEGORY_MAP[rawSlug] || rawSlug;

  // 1. Resolve Comparisons
  const targetCompSlugs = CATEGORY_COMPARISON_SLUGS[normalizedSlug] || [];
  const foundComparisons = comparisons.filter((c) => targetCompSlugs.includes(c.slug));
  const fallbackComparisons = comparisons.slice(0, 2);
  const selectedComparisons = foundComparisons.length > 0 ? foundComparisons : fallbackComparisons;

  // 2. Resolve Articles / Buyer's Guides
  const targetArticleSlugs = CATEGORY_ARTICLE_SLUGS[normalizedSlug] || [];
  const foundArticles = articles.filter((a) => targetArticleSlugs.includes(a.slug));
  // If none explicitly mapped, find articles matching category string
  const categoryMatchedArticles = articles.filter(
    (a) => a.category?.toLowerCase().includes(normalizedSlug.replace("ai-", "").replace("-tools", ""))
  );
  const selectedArticles =
    foundArticles.length > 0
      ? foundArticles
      : categoryMatchedArticles.length > 0
      ? categoryMatchedArticles.slice(0, 3)
      : articles.slice(0, 3);

  // 3. Resolve Workflows
  const targetWorkflowSlugs = CATEGORY_WORKFLOW_SLUGS[normalizedSlug] || [];
  const foundWorkflows = workflows.filter((w) => targetWorkflowSlugs.includes(w.slug));
  const selectedWorkflows = foundWorkflows.length > 0 ? foundWorkflows : workflows.slice(0, 2);

  return {
    comparisons: selectedComparisons,
    guides: selectedArticles,
    workflows: selectedWorkflows,
    commercialHighlights: {
      badge: "2026 Buying Intent",
      description: "Tested against real-world production benchmarks with verified pricing and free tier audits.",
    },
  };
}
