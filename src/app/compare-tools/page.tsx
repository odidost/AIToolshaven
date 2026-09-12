import { Metadata } from "next";
import { comparisons } from "@/lib/comparisons";
import { PageContainer } from "@/components/layout/PageContainer";
import { getToolsByNames, getFeaturedTools } from "@/lib/data/tools-service";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { StructuredData } from "@/components/shared/StructuredData";
import { ComparisonCustomMatchup } from "@/components/comparison/ComparisonCustomMatchup";
import { ComparisonsGridWithFilter } from "@/components/comparison/ComparisonsGridWithFilter";
import { ComparisonsSummaryMatrix } from "@/components/comparison/ComparisonsSummaryMatrix";
import { ComparisonsEditorialGuide } from "@/components/comparison/ComparisonsEditorialGuide";
import { ComparisonsArchiveFAQ } from "@/components/comparison/ComparisonsArchiveFAQ";
import { VendorComparisonCTA } from "@/components/comparison/VendorComparisonCTA";
import { ComparisonBuyerGuideAndVendorDesk } from "@/components/comparison/ComparisonBuyerGuideAndVendorDesk";
import { defaultComparisonsFaqs } from "@/lib/data/comparisonsFaqsData";
import { ArrowLeftRight, ShieldCheck, RefreshCw, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Compare AI Tools (2026): Head-to-Head Benchmarks, Pricing & Verdicts | AIToolsHaven",
  description:
    "Compare the world's leading AI tools head-to-head. Objective side-by-side breakdowns across reasoning, latency, true pricing, and workflows. Find the right software for your stack.",
  keywords: [
    "compare ai tools",
    "ai tool comparisons",
    "best ai tools side by side",
    "chatgpt vs claude",
    "cursor vs copilot",
    "midjourney vs flux",
    "elevenlabs vs murf",
    "head to head ai software reviews 2026",
    "ai software comparison matrix",
  ],
  alternates: {
    canonical: `${siteConfig.baseUrl}/compare-tools`,
  },
  openGraph: {
    title: "Compare AI Tools (2026): Head-to-Head Benchmarks & Reviews — AIToolsHaven",
    description:
      "Objective side-by-side breakdowns of top AI tools across reasoning, latency, true pricing, and workflows. Find the right AI software for your stack.",
    url: `${siteConfig.baseUrl}/compare-tools`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Compare AI Tools Side-by-Side — AIToolsHaven",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare AI Tools (2026): Head-to-Head Benchmarks — AIToolsHaven",
    description:
      "Objective side-by-side breakdowns of top AI tools across reasoning, latency, true pricing, and workflows.",
    images: [siteConfig.ogImage],
  },
};

export default async function CompareArchivePage() {
  // Extract required tool names for all comparisons
  const requiredToolNames = new Set<string>();
  comparisons.forEach((c) => {
    requiredToolNames.add(c.tool1.name);
    requiredToolNames.add(c.tool2.name);
  });
  // Add database aliases
  requiredToolNames.add("Black Forest Labs FLUX");
  requiredToolNames.add("Cursor AI");

  // Fetch comparison tools and featured tools in parallel
  const [comparisonTools, featuredTools] = await Promise.all([
    getToolsByNames(Array.from(requiredToolNames)),
    getFeaturedTools(20),
  ]);

  // Combine unique tools for the custom comparison dropdown
  const toolsMap = new Map<string, { name: string; slug: string; logoUrl?: string }>();
  [...comparisonTools, ...featuredTools].forEach((t) => {
    if (t.name && t.slug && !toolsMap.has(t.slug)) {
      toolsMap.set(t.slug, {
        name: t.name,
        slug: t.slug,
        logoUrl: t.logoUrl,
      });
    }
  });

  const availableDropdownTools = Array.from(toolsMap.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const cleanBase = (siteConfig.baseUrl || "https://aitoolshaven.com").replace(/\/$/, "");
  const currentDate = new Date().toISOString().split("T")[0];
  const currentMonthYear = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date());

  // Schema.org Structured Data Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${cleanBase}/compare-tools#webpage`,
        url: `${cleanBase}/compare-tools`,
        name: "Compare AI Tools (2026): Head-to-Head Benchmarks, Pricing & Verdicts | AIToolsHaven",
        description:
          "Objective side-by-side breakdowns of top AI tools across features, latency, true pricing, and workflows.",
        dateModified: currentDate,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: comparisons.length,
          itemListElement: comparisons.map((c, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: `${c.title} Comparison`,
            url: `${cleanBase}/compare-tools/${c.slug}`,
            description: c.description,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${cleanBase}/compare-tools#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "AI Tools Directory",
            item: cleanBase,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Compare AI Tools",
            item: `${cleanBase}/compare-tools`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${cleanBase}/compare-tools#faq`,
        mainEntity: defaultComparisonsFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <PageContainer>
      <StructuredData data={jsonLd} />
      <div className="pt-20 pb-16 md:pt-28 md:pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-4xl mx-auto mb-8">
          <Breadcrumbs items={[{ label: "Compare AI Tools" }]} />
        </div>

        {/* Hero Header */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 text-rose-700 dark:text-rose-400 px-5 py-2 rounded-full mb-6 shadow-sm border border-black/5 dark:border-slate-800">
            <ArrowLeftRight className="w-4 h-4 text-primary dark:text-rose-400" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">The Versus Arena</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
            Head-to-Head <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">AI Tool Comparisons</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
            We pit the world&apos;s most powerful AI tools against each other across speed, reasoning accuracy, and pricing. Read our definitive verdicts to pick the exact software for your stack.
          </p>

          {/* Trust Metric Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-bold text-slate-700 dark:text-slate-300">
            <div className="inline-flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>100% Independent Benchmarks</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-2xs">
              <RefreshCw className="w-4 h-4 text-blue-500" />
              <span>Updated for {currentMonthYear}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-2xs">
              <DollarSign className="w-4 h-4 text-purple-500" />
              <span>Verified Pricing &amp; True TCO</span>
            </div>
          </div>
        </header>

        <div className="max-w-[1280px] mx-auto">
          {/* Interactive Custom Matchup Picker */}
          <ComparisonCustomMatchup availableTools={availableDropdownTools} />

          {/* Filterable Comparison Cards Grid */}
          <ComparisonsGridWithFilter comparisons={comparisons} allTools={comparisonTools} />

          {/* Summary Matrix Table */}
          <ComparisonsSummaryMatrix />

          {/* B2B Vendor Inbound CTA (Get Listed & Benchmarked) */}
          <VendorComparisonCTA />

          {/* E-E-A-T Editorial Methodology Guide */}
          <ComparisonsEditorialGuide />

          {/* Keyword-Rich 5-Pillar Architectural Framework & Vendor Desk */}
          <ComparisonBuyerGuideAndVendorDesk />

          {/* Schema-Backed FAQ Accordion */}
          <ComparisonsArchiveFAQ />
        </div>
      </div>
    </PageContainer>
  );
}
