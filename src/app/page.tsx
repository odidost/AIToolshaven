import { comparisons } from "@/lib/comparisons";
import { articles } from "@/lib/articles";
import { SpotlightBanner } from "@/components/shared/SpotlightBanner";
import { ComparisonCard } from "@/components/home/ComparisonCard";
import { HomeAlternativesSection } from "@/components/home/HomeAlternativesSection";
import { HomeGoalsSection } from "@/components/home/HomeGoalsSection";
import { HomeToolDiscoverySection } from "@/components/home/HomeToolDiscoverySection";
import { HomeEditorialProcess } from "@/components/home/HomeEditorialProcess";
import { ArticleCard } from "@/components/home/ArticleCard";
import { HomepageStructuredData } from "@/components/home/HomepageStructuredData";
import { HomepageFAQ } from "@/components/home/HomepageFAQ";
import { SubmitToolCTA } from "@/components/home/SubmitToolCTA";

import { getToolsByNames } from "@/lib/data/tools-service";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Compare AI Tools for your next project | AIToolsHaven",
  },
  description:
    "Compare 1,200+ AI Tools. Side-by-side feature breakdowns, verified alternatives, and goal-driven recommendations to help you choose the right AI tools for your next project.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "compare ai tools",
    "ai tools directory",
    "ai tool alternatives",
    "best ai tools 2026",
    "compare ai tools side by side",
    "free ai tools directory",
    "chatgpt alternatives",
    "cursor alternatives",
    "ai tools by goal",
    "verified ai software",
  ],
  alternates: {
    canonical: siteConfig.baseUrl,
  },
  openGraph: {
    title: "Compare AI Tools for your next project | AIToolsHaven",
    description:
      "Compare 1,200+ AI Tools. Side-by-side feature breakdowns, verified alternatives, and goal-driven recommendations to help you choose the right AI tools for your next project.",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Compare AI Tools for your next project | AIToolsHaven",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare AI Tools for your next project | AIToolsHaven",
    description:
      "Compare 1,200+ AI Tools. Side-by-side feature breakdowns, verified alternatives, and goal-driven recommendations to help you choose the right AI tools for your next project.",
    images: [siteConfig.ogImage],
  },
};

export const revalidate = 21600; // 6 hours

export default async function Home() {
  // 1. Gather tool names for comparison cards and alternative previews
  const requiredToolNames = new Set<string>();

  // Up to six useful, current matchups
  const selectedComparisons = comparisons.slice(0, 6);
  selectedComparisons.forEach((c) => {
    requiredToolNames.add(c.tool1.name);
    requiredToolNames.add(c.tool2.name);
  });

  // Tools featured in alternatives section
  const featuredAltSlugs = [
    "claude",
    "perplexity",
    "phind",
    "github-copilot",
    "codeium",
    "sourcegraph-cody",
    "dall-e-3",
    "stable-diffusion",
    "krea",
    "magnific",
    "murf-ai",
    "replica-studios",
    "resemble-ai",
    "fliki",
    "cursor",
    "codium-ai",
    "heygen",
    "runway-gen2",
    "opus-clip",
    "chatgpt",
    "synthesia",
    "elevenlabs",
    "midjourney",
  ];
  featuredAltSlugs.forEach((s) => requiredToolNames.add(s));

  // 2. Fetch required tools for comparisons & alternatives
  const allTools = await getToolsByNames(Array.from(requiredToolNames));

  return (
    <div className="flex flex-col gap-6 md:gap-10 pb-20 relative bg-white min-h-screen">
      <HomepageStructuredData />

      {/* 1. Hero and search */}
      <SpotlightBanner />

      {/* 2. Selected AI tool comparisons (Up to 6 useful, current matchups) */}
      <section id="comparisons" className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#E5E7EB]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
              <span className="material-symbols-outlined text-[16px] text-[#E11D48]">compare_arrows</span>
              <span>Side-by-Side Breakdowns</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
              Compare AI Tools Side-by-Side
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#4B5563] max-w-xl">
              Objective side-by-side breakdowns across features, pricing tiers, and real-world workflows.
            </p>
          </div>
          <Link
            href="/compare-tools"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E11D48] hover:text-[#BE123C] transition-colors self-start sm:self-auto shrink-0"
          >
            All comparisons
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {selectedComparisons.map((comparison) => {
            const fullTool1 = allTools.find(
              (t) => t.name.toLowerCase() === comparison.tool1.name.toLowerCase()
            );
            const fullTool2 = allTools.find(
              (t) => t.name.toLowerCase() === comparison.tool2.name.toLowerCase()
            );

            return (
              <ComparisonCard
                key={comparison.slug}
                data={comparison}
                fullTool1={fullTool1}
                fullTool2={fullTool2}
              />
            );
          })}
        </div>

        <div className="mt-8 text-center flex justify-center">
          <Link
            href="/compare-tools"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg text-sm font-semibold text-[#0A0A0A] border border-[#E5E7EB] hover:bg-[#E11D48] hover:text-white hover:border-[#E11D48] shadow-xs hover:shadow-sm transition-all group"
          >
            <span>View All 13 Matchups</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 4. Alternatives to popular tools */}
      <HomeAlternativesSection allTools={allTools} />

      {/* 5. AI tools by goal */}
      <HomeGoalsSection />

      {/* 6. Compact category navigation */}
      <HomeToolDiscoverySection />

      {/* 7. Short explanation of the research/editorial process */}
      <HomeEditorialProcess />

      {/* 8. 4 useful guides (leave as it is) */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#E5E7EB]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
              <span className="material-symbols-outlined text-[16px] text-[#E11D48]">article</span>
              <span>Articles &amp; Tutorials</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
              Guides &amp; Insights
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#4B5563] max-w-xl">
              In-depth analysis, comparisons, and workflows to help you master AI tooling.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E11D48] hover:text-[#BE123C] transition-colors self-start sm:self-auto shrink-0"
          >
            All articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.slice(0, 4).map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              category={article.category}
              slug={article.slug}
              imageUrl={article.imageUrl}
              summary={article.summary}
            />
          ))}
        </div>

        <div className="mt-8 text-center flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg text-sm font-semibold text-[#0A0A0A] border border-[#E5E7EB] hover:bg-[#E11D48] hover:text-white hover:border-[#E11D48] shadow-xs hover:shadow-sm transition-all group"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Concise FAQ targeting keyword "compare ai tools" */}
      <HomepageFAQ />

      {/* 9. Submit/advertise CTA */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SubmitToolCTA />
      </div>
    </div>
  );
}
