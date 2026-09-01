import { Metadata } from "next";
import Link from "next/link";
import { goals } from "@/lib/goals";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageContainer } from "@/components/layout/PageContainer";
import { StructuredData } from "@/components/shared/StructuredData";
import { siteConfig } from "@/lib/config/site";
import { GoalsGridWithFilter } from "@/components/goals/GoalsGridWithFilter";
import { GoalVisualRoadmap } from "@/components/goals/GoalVisualRoadmap";
import { GoalComparisonMatrix } from "@/components/goals/GoalComparisonMatrix";
import { GoalsEditorialGuide } from "@/components/goals/GoalsEditorialGuide";
import { GoalsFAQ } from "@/components/goals/GoalsFAQ";
import { defaultGoalsFaqs } from "@/lib/data/goalsFaqsData";

export const metadata: Metadata = {
  title: "Best AI Tools by Goal & Monetization Roadmap (2026)",
  description: "Discover curated AI tools and workflows organized by commercial objective. Learn how to launch faceless YouTube channels, vibe code software, and grow revenue.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/goals`,
  },
  openGraph: {
    title: "Best AI Tools by Goal & Monetization Roadmap (2026) — AIToolsHaven",
    description: "Discover curated AI tools and workflows organized by commercial objective. Learn how to launch faceless YouTube channels, vibe code software, and grow revenue.",
    url: `${siteConfig.baseUrl}/goals`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Best AI Tools by Goal — AIToolsHaven",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Tools by Goal & Monetization Roadmap (2026) — AIToolsHaven",
    description: "Discover curated AI tools and workflows organized by commercial objective.",
    images: [siteConfig.ogImage],
  },
};

export default function GoalsIndexPage() {
  const cleanBase = (siteConfig.baseUrl || "https://aitoolshaven.com").replace(/\/$/, "");
  const currentDate = new Date().toISOString().split('T')[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${cleanBase}/goals#webpage`,
        url: `${cleanBase}/goals`,
        name: "Best AI Tools by Goal & Monetization Roadmap (2026) | AIToolsHaven",
        description: "Discover curated AI tools and workflows organized by commercial objective.",
        dateModified: currentDate,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: goals.length,
          itemListElement: goals.map((g, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: `${g.title} AI Tools`,
            url: `${cleanBase}/goals/${g.slug}`,
            description: g.description,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${cleanBase}/goals#breadcrumb`,
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
            name: "Goals & Missions",
            item: `${cleanBase}/goals`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${cleanBase}/goals#faq`,
        mainEntity: defaultGoalsFaqs.map((faq) => ({
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
    <PageContainer className="py-8 md:py-12">
      <StructuredData data={jsonLd} />
      <Breadcrumbs items={[{ label: "Goals & Missions" }]} />

      {/* Header Section */}
      <div className="max-w-3xl mb-10 mt-4">
        <div className="flex items-center gap-2 text-primary mb-2">
          <span className="material-symbols-outlined text-xl">flag</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Curated Monetization Missions</span>
        </div>
        <h1 className="text-fluid-h1 font-bold text-on-surface tracking-tight mb-4">
          AI Tools &amp; Workflows by Goal (2026)
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed">
          Discover the perfect combination of AI tools and automated pipelines tailored to your specific commercial objective.
        </p>
      </div>

      {/* 3-Phase Monetization Visual Infographic */}
      <GoalVisualRoadmap />

      {/* Interactive Goals Grid with Semantic H2 */}
      <section className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[16px]">tune</span>
              Interactive Directory
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
              Curated AI Monetization Missions &amp; Objectives (2026)
            </h2>
          </div>
        </div>

        <GoalsGridWithFilter goals={goals} />
      </section>

      {/* Monetization & Business Model Matrix (Google Position 0 Table Snippet) */}
      <GoalComparisonMatrix />

      {/* Readable Goal-First Selection Guide */}
      <GoalsEditorialGuide />

      {/* Cross-Silo Workflow & Category Bridge */}
      <div className="my-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-surface to-secondary/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Execution Blueprints</span>
          <h3 className="text-2xl font-black text-on-surface">Explore Technical Workflows &amp; Categories</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Ready to execute your goal? Follow our step-by-step multi-app workflow guides or explore our full category index.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link 
            href="/workflows" 
            className="px-6 py-3 rounded-full bg-primary text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-sm"
          >
            Browse AI Workflows →
          </Link>
          <Link 
            href="/categories" 
            className="px-6 py-3 rounded-full bg-surface border border-outline font-bold text-sm text-on-surface hover:bg-surface-secondary transition-colors"
          >
            Browse All Categories
          </Link>
        </div>
      </div>

      {/* 6-Item Goal FAQ Accordion */}
      <GoalsFAQ faqs={defaultGoalsFaqs} />
    </PageContainer>
  );
}
