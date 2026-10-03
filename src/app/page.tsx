import { opportunities } from "@/lib/opportunities";
import { workflows } from "@/lib/workflows";
import { comparisons } from "@/lib/comparisons";
import { articles } from "@/lib/articles";
import { SpotlightBanner } from "@/components/shared/SpotlightBanner";
import { TrustedByMarquee } from "@/components/home/TrustedByMarquee";
import { RecommendationEngine } from "@/components/home/RecommendationEngine";
import { EditorialRankingsSection } from "@/components/home/EditorialRankingsSection";
import { HomepageCategories } from "@/components/home/HomepageCategories";
import { WorkflowCard } from "@/components/home/WorkflowCard";
import { OpportunityCard } from "@/components/home/OpportunityCard";
import { ComparisonCard } from "@/components/home/ComparisonCard";
import { ArticleCard } from "@/components/home/ArticleCard";
import { SocialLinks } from "@/components/shared/SocialLinks";

import { getToolsByNames } from "@/lib/data/tools-service";
import Link from "next/link";

import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { HomepageStructuredData } from "@/components/home/HomepageStructuredData";
import { HomepageEditorialGuide } from "@/components/home/HomepageEditorialGuide";
import { HomepageFAQ } from "@/components/home/HomepageFAQ";
import { SubmitToolCTA } from "@/components/home/SubmitToolCTA";

export const metadata: Metadata = {
  title: {
    absolute: "AIToolsHaven — Find, Compare & Chain the Best AI Tools (2026)",
  },
  description: "Discover, compare, and chain 900+ verified AI tools. Explore freemium AI software, head-to-head comparisons, and proven multi-tool workflows for developers and creators.",
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
    "ai tools directory",
    "best ai tools 2026",
    "freemium ai tools",
    "free ai tools directory",
    "which ai tools work best together",
    "ai coding assistants 2026",
    "ai video generators 2026",
    "compare ai tools side by side",
    "ai workflows",
    "verified ai software",
  ],
  alternates: {
    canonical: siteConfig.baseUrl,
  },
  openGraph: {
    title: "AIToolsHaven — Find, Compare & Chain the Best AI Tools (2026)",
    description: "Discover, compare, and chain 900+ verified AI tools. Explore freemium AI software, head-to-head comparisons, and proven multi-tool workflows for developers and creators.",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AIToolsHaven — Find, Compare & Chain the Best AI Tools (2026)",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIToolsHaven — Find, Compare & Chain the Best AI Tools (2026)",
    description: "Discover, compare, and chain 900+ verified AI tools. Explore freemium AI software and multi-app automation workflows.",
    images: [siteConfig.ogImage],
  },
};

export const revalidate = 21600; // 6 hours

export default async function Home() {
  // Extract only the tool names we actually need for the homepage widgets
  const requiredToolNames = new Set<string>();
  
  workflows.slice(0, 6).forEach(w => w.tools.forEach(t => requiredToolNames.add(t)));
  comparisons.slice(0, 9).forEach(c => {
    requiredToolNames.add(c.tool1.name);
    requiredToolNames.add(c.tool2.name);
  });

  const allTools = await getToolsByNames(Array.from(requiredToolNames));

  const toolLogos = allTools.reduce((acc, tool) => {
    if (tool.name && tool.logoUrl) {
      acc[tool.name.toLowerCase()] = tool.logoUrl;
    }
    return acc;
  }, {} as Record<string, string>);

  return (
    <div className="flex flex-col gap-6 md:gap-10 pb-24 relative bg-white min-h-screen">
      <HomepageStructuredData />

      {/* 1. Hero Section - Rendered immediately for optimal LCP */}
      <SpotlightBanner />

      {/* 2. Editorial Rankings */}
      <EditorialRankingsSection />

      {/* 3. High-Intent Quick Discovery Links */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 py-3 px-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-lg text-xs sm:text-sm text-[#4B5563]">
          <span className="font-medium text-[#0A0A0A] flex items-center gap-1.5 mr-1">
            <span className="material-symbols-outlined text-[16px] text-[#E11D48]">trending_up</span>
            Popular:
          </span>
          <Link href="/freemium-ai-tools" className="px-2.5 py-1 rounded-md bg-white hover:bg-[#FFF1F2] hover:text-[#E11D48] hover:border-[#FECDD3] transition-colors font-medium border border-[#E5E7EB]">
            Freemium AI Tools
          </Link>
          <Link href="/category/ai-video-generators" className="px-2.5 py-1 rounded-md bg-white hover:bg-[#FFF1F2] hover:text-[#E11D48] hover:border-[#FECDD3] transition-colors font-medium border border-[#E5E7EB]">
            AI Video Generators
          </Link>
          <Link href="/category/coding-assistants" className="px-2.5 py-1 rounded-md bg-white hover:bg-[#FFF1F2] hover:text-[#E11D48] hover:border-[#FECDD3] transition-colors font-medium border border-[#E5E7EB]">
            AI Coding Assistants
          </Link>
          <Link href="/category/ai-writing-tools" className="px-2.5 py-1 rounded-md bg-white hover:bg-[#FFF1F2] hover:text-[#E11D48] hover:border-[#FECDD3] transition-colors font-medium border border-[#E5E7EB]">
            AI Writing Tools
          </Link>
          <Link href="/compare-tools/chatgpt-vs-claude" className="px-2.5 py-1 rounded-md bg-white hover:bg-[#FFF1F2] hover:text-[#E11D48] hover:border-[#FECDD3] transition-colors font-medium border border-[#E5E7EB]">
            ChatGPT vs Claude
          </Link>
          <Link href="/workflows" className="px-2.5 py-1 rounded-md bg-white hover:bg-[#FFF1F2] hover:text-[#E11D48] hover:border-[#FECDD3] transition-colors font-medium border border-[#E5E7EB]">
            AI Workflows
          </Link>
        </div>
      </div>

      {/* 4. Trust Layer */}
      <section className="w-full bg-[#FAFAFA] border-y border-[#E5E7EB] py-8 sm:py-12">
        <TrustedByMarquee />
      </section>

      {/* 5. AI Recommendation Engine */}
      <RecommendationEngine />

      {/* 6. Featured Categories */}
      <HomepageCategories />

      {/* 7. Compare Popular AI Tools (The Versus Arena) */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#E5E7EB]">
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
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {comparisons.slice(0, 9).map((comparison) => {
            const fullTool1 = allTools.find(t => t.name.toLowerCase() === comparison.tool1.name.toLowerCase());
            const fullTool2 = allTools.find(t => t.name.toLowerCase() === comparison.tool2.name.toLowerCase());
            
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
            <span>View All Matchups</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* 8. AI Workflows */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#E5E7EB]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
              <span className="material-symbols-outlined text-[16px] text-[#E11D48]">account_tree</span>
              <span>Proven Stacks</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
              Curated AI Workflows: Automate Real Tasks
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#4B5563] max-w-xl">
              Step-by-step tool stacks designed by creators, developers, and operators.
            </p>
          </div>
          <Link 
            href="/workflows" 
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E11D48] hover:text-[#BE123C] transition-colors self-start sm:self-auto shrink-0"
          >
            All workflows
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {workflows.slice(0, 6).map((workflow) => (
            <WorkflowCard
              key={workflow.slug}
              title={workflow.title}
              tools={workflow.tools.map(t => {
                const fullTool = allTools.find(at => at.name.toLowerCase() === t.toLowerCase());
                return {
                  name: t,
                  logoUrl: toolLogos[t.toLowerCase()] || undefined,
                  slug: fullTool?.slug || t.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                  fullTool
                };
              })}
              icon={workflow.icon}
              slug={workflow.slug}
              description={workflow.description}
              audience={workflow.audience}
              meta={workflow.meta}
              color={workflow.color}
            />
          ))}
        </div>

        <div className="mt-8 text-center flex justify-center">
          <Link 
            href="/workflows" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg text-sm font-semibold text-[#0A0A0A] border border-[#E5E7EB] hover:bg-[#E11D48] hover:text-white hover:border-[#E11D48] shadow-xs hover:shadow-sm transition-all group"
          >
            <span>View All Workflows</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* 9. Trending Opportunities */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#E5E7EB]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
              <span className="material-symbols-outlined text-[16px] text-[#E11D48]">lightbulb</span>
              <span>Monetization Playbooks</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
              Business Missions: How to Monetize AI Tools in 2026
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#4B5563] max-w-xl">
              Actionable business models and high-leverage monetization blueprints powered by AI.
            </p>
          </div>
          <Link 
            href="/goals" 
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E11D48] hover:text-[#BE123C] transition-colors self-start sm:self-auto shrink-0"
          >
            All missions
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {opportunities.map((item) => (
            <OpportunityCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              slug={item.slug}
              difficulty={item.difficulty}
              roi={item.roi}
              color={item.color}
            />
          ))}
        </div>

        <div className="mt-8 text-center flex justify-center">
          <Link 
            href="/goals" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg text-sm font-semibold text-[#0A0A0A] border border-[#E5E7EB] hover:bg-[#E11D48] hover:text-white hover:border-[#E11D48] shadow-xs hover:shadow-sm transition-all group"
          >
            <span>View All Missions</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* 10. Latest AI News & Guides */}
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
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
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
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* 11. Comprehensive SEO Editorial Content Pillar */}
      <HomepageEditorialGuide />

      {/* 12. High-Intent Frequently Asked Questions Accordion & Schema */}
      <HomepageFAQ />

      {/* 13. Submit Your Tool */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SubmitToolCTA />
      </div>

      {/* 14. Social CTA */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center flex flex-col items-center">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] tracking-tight mb-2">
          Follow AIToolsHaven
        </h3>
        <p className="text-sm text-[#4B5563] max-w-md mx-auto mb-5">
          Discover new AI tools, useful comparisons, and the latest AI workflow updates.
        </p>
        <SocialLinks variant="cta" />
      </div>
    </div>
  );
}
