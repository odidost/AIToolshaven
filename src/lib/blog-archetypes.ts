import type { Article } from "./articles";

export type ArticleArchetype = "shootout" | "roundup" | "blueprint";

export interface TableOfContentsItem {
  id: string;
  title: string;
}

export interface ArchetypeCalloutData {
  archetype: ArticleArchetype;
  badge: string;
  title: string;
  summary: string;
  metrics?: { label: string; value: string; icon: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export interface TopicSiloData {
  categorySlug: string;
  categoryName: string;
  categoryCountStr: string;
  workflowSlug?: string;
  workflowTitle?: string;
  freemiumUrl: string;
}

const CATEGORY_MAP: Record<string, { slug: string; name: string; count: string }> = {
  video: { slug: "ai-video-generators", name: "AI Video Generators", count: "42+" },
  coding: { slug: "coding-assistants", name: "AI Coding Assistants", count: "58+" },
  productivity: { slug: "productivity", name: "AI Productivity Tools", count: "112+" },
  design: { slug: "ai-image-generators", name: "AI Image Generators", count: "86+" },
  writing: { slug: "ai-writing-tools", name: "AI Writing Tools", count: "124+" },
  audio: { slug: "audio-voice", name: "Audio & Voice AI", count: "35+" },
  research: { slug: "ai-research-tools", name: "AI Research Tools", count: "20+" },
};

const WORKFLOW_MAP: Record<string, { slug: string; title: string }> = {
  video: { slug: "faceless-youtube", title: "Faceless YouTube Automation" },
  audio: { slug: "faceless-youtube", title: "Faceless YouTube Automation" },
  coding: { slug: "automated-code-refactoring", title: "Automated Code Refactoring" },
  writing: { slug: "seo-content-engine", title: "SEO Content Engine" },
  productivity: { slug: "meeting-action-items", title: "Meeting-to-Action Blueprint" },
};

/**
 * Determines the search archetype of a blog article.
 */
export function getArticleArchetype(article: Article): ArticleArchetype {
  const lowerTitle = article.title.toLowerCase();
  const lowerSlug = article.slug.toLowerCase();

  // 1. Shootout / Comparison archetype
  if (
    lowerTitle.includes(" vs ") ||
    lowerSlug.includes("-vs-") ||
    lowerTitle.includes("still worth it") ||
    lowerTitle.includes("benchmark")
  ) {
    return "shootout";
  }

  // 2. Blueprint / Step-by-Step Tutorial archetype
  if (
    lowerTitle.startsWith("how to") ||
    lowerTitle.includes("step-by-step") ||
    lowerSlug.includes("how-to") ||
    lowerTitle.includes("stack: how to") ||
    lowerTitle.includes("blueprint") ||
    lowerTitle.includes("prompt engineering guide")
  ) {
    return "blueprint";
  }

  // 3. Default to Roundup / "Best of" archetype
  return "roundup";
}

/**
 * Parses article HTML content, injects clean anchor IDs onto all <h2> elements,
 * and extracts a structured Table of Contents for navigation.
 */
export function processArticleHeadings(content: string): {
  contentWithAnchors: string;
  tableOfContents: TableOfContentsItem[];
} {
  const tableOfContents: TableOfContentsItem[] = [];
  let index = 0;

  const contentWithAnchors = content.replace(
    /<h2([^>]*)>(.*?)<\/h2>/gis,
    (match, attrs, headingText) => {
      index++;
      // Strip HTML tags from headingText to generate a clean title & slug
      const cleanText = headingText.replace(/<[^>]+>/g, "").trim();
      const slugId =
        cleanText
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") || `section-${index}`;

      tableOfContents.push({
        id: slugId,
        title: cleanText,
      });

      // Retain existing attributes while ensuring id and scroll-mt-24 are applied
      const existingClass = attrs.match(/class="([^"]*)"/i);
      let newAttrs = attrs;

      if (existingClass) {
        newAttrs = attrs.replace(
          /class="([^"]*)"/i,
          `class="$1 scroll-mt-24" id="${slugId}"`
        );
      } else {
        newAttrs = `${attrs} class="scroll-mt-24" id="${slugId}"`;
      }

      return `<h2${newAttrs}>${headingText}</h2>`;
    }
  );

  return { contentWithAnchors, tableOfContents };
}

/**
 * Builds high-intent callout data tailored to the specific article archetype.
 */
export function getArchetypeCalloutData(article: Article): ArchetypeCalloutData {
  const archetype = getArticleArchetype(article);
  const catKey = article.category.toLowerCase();
  const catData = CATEGORY_MAP[catKey] || { slug: "categories", name: "AI Directory", count: "900+" };

  if (archetype === "shootout") {
    return {
      archetype: "shootout",
      badge: "Head-to-Head Shootout & Verdict",
      title: "Executive Verdict & Decision Framework",
      summary:
        "Our editorial benchmarks test latency, accuracy, context limits, and real-world costs so you can select the right tool without vendor lock-in.",
      metrics: [
        { label: "Benchmark Cycle", value: "2026 Tested", icon: "verified" },
        { label: "Evaluation Criteria", value: "Speed, Quality & Cost", icon: "speed" },
        { label: "Target Audience", value: "Engineers & Power Users", icon: "group" },
      ],
      primaryCta: {
        label: `Compare in ${catData.name} Hub`,
        href: `/category/${catData.slug}`,
      },
      secondaryCta: {
        label: "Explore All Comparisons",
        href: "/compare-tools",
      },
    };
  }

  if (archetype === "blueprint") {
    return {
      archetype: "blueprint",
      badge: "Production Blueprint",
      title: "Implementation Overview & Architecture",
      summary:
        "A field-tested, multi-app roadmap designed for rapid execution with zero wasted iterations and maximum automation efficiency.",
      metrics: [
        { label: "Estimated Time", value: "30–60 Minutes", icon: "schedule" },
        { label: "Software Cost", value: "Free / $0 Entry", icon: "payments" },
        { label: "Skill Level", value: "Beginner to Pro", icon: "signal_cellular_alt" },
      ],
      primaryCta: {
        label: "Explore Multi-App Workflows",
        href: "/workflows",
      },
      secondaryCta: {
        label: "Browse Freemium Software",
        href: "/freemium-ai-tools",
      },
    };
  }

  // Roundup archetype
  return {
    archetype: "roundup",
    badge: "Curated 2026 Roundup",
    title: "Verified Buying & Curation Standards",
    summary:
      "Evaluated across 250+ candidates. Every tool listed below maintains transparent pricing, authentic recurring allowances, and zero deceptive trial paywalls.",
    metrics: [
      { label: "Directory Index", value: `${catData.count} Tools`, icon: "layers" },
      { label: "Trial Security", value: "No Credit Card Trap", icon: "shield_check" },
      { label: "Pricing Verified", value: "100% Monitored", icon: "price_check" },
    ],
    primaryCta: {
      label: `Browse ${catData.name} (${catData.count})`,
      href: `/category/${catData.slug}`,
    },
    secondaryCta: {
      label: "View All Freemium AI",
      href: "/freemium-ai-tools",
    },
  };
}

/**
 * Returns topic cluster linkage data for an article.
 */
export function getTopicSiloData(article: Article): TopicSiloData {
  const catKey = article.category.toLowerCase();
  const catInfo = CATEGORY_MAP[catKey] || { slug: "categories", name: "AI Directory", count: "900+" };
  const wfInfo = WORKFLOW_MAP[catKey];

  return {
    categorySlug: catInfo.slug,
    categoryName: catInfo.name,
    categoryCountStr: catInfo.count,
    workflowSlug: wfInfo?.slug,
    workflowTitle: wfInfo?.title,
    freemiumUrl: "/freemium-ai-tools",
  };
}
