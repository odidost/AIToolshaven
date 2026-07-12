import { opportunities } from "@/lib/opportunities";
import { workflows } from "@/lib/workflows";
import { comparisons } from "@/lib/comparisons";
import { articles } from "@/lib/articles";
import { BackgroundPattern } from "@/components/shared/BackgroundPattern";

import { SpotlightBanner } from "@/components/shared/SpotlightBanner";
import { TrustedByMarquee } from "@/components/home/TrustedByMarquee";
import { RecommendationEngine } from "@/components/home/RecommendationEngine";
import { CategoryCapsuleBar } from "@/components/shared/CategoryCapsuleBar";
import { WorkflowCard } from "@/components/home/WorkflowCard";
import { OpportunityCard } from "@/components/home/OpportunityCard";
import { ComparisonCard } from "@/components/home/ComparisonCard";
import { ArticleCard } from "@/components/home/ArticleCard";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { ToolCard } from "@/components/shared/ToolCard";
import { GoalCard } from "@/components/home/GoalCard";

import { getFeaturedTools, getLatestTools, getTrendingTools } from "@/lib/data/tools-service";
import { goals } from "@/lib/goals";
import Link from "next/link";

import { CommunityReviews } from "@/components/home/CommunityReviews";
import { SubmitToolCTA } from "@/components/home/SubmitToolCTA";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionContainer } from "@/components/layout/SectionContainer";

export default function Home() {
  const featuredTools = getFeaturedTools(8);
  const trendingTools = getTrendingTools(8);
  const latestTools = getLatestTools(8);

  return (
    <PageContainer className="max-w-[1920px] 2xl:max-w-[2560px] pt-2 pb-8 md:pt-4 md:pb-12">

      {/* 1. Hero Section */}
      <section className="mb-12 md:mb-20">
        <SpotlightBanner />
      </section>

      {/* 1b. Featured Tools */}
      {featuredTools.length > 0 && (
        <SectionContainer className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-accent mb-2">
                <span className="material-symbols-outlined text-xl">star</span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">Editor's Choice</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                Featured Tools
              </h2>
            </div>
            <Link href="/category/all" className="text-[13px] font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
              View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </SectionContainer>
      )}

      {/* 2. Trust Layer */}
      <TrustedByMarquee />

      {/* 3. AI Recommendation Engine */}
      <RecommendationEngine />

      {/* 4. Featured Categories */}
      <SectionContainer className="relative overflow-hidden bg-surface-section rounded-[32px] p-8 md:p-12 border border-border">
        <BackgroundPattern type="sparkles" opacity={0.02} />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex flex-wrap justify-around items-center overflow-hidden">
           <span className="material-symbols-outlined text-[120px] text-primary rotate-12">terminal</span>
           <span className="material-symbols-outlined text-[160px] text-secondary -rotate-12">edit_document</span>
           <span className="material-symbols-outlined text-[140px] text-accent rotate-45">palette</span>
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Explore Categories
            </h2>
          </div>
          <CategoryCapsuleBar />
        </div>
      </SectionContainer>

      {/* 5. Trending AI Tools */}
      <SectionContainer>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-accent mb-2">
              <span className="material-symbols-outlined text-xl">local_fire_department</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Trending Now</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Most Popular Tools
            </h2>
          </div>
          <Link href="/category/all" className="text-[13px] font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
            View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        {/* Swipeable on mobile, Grid on desktop */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {trendingTools.map((tool) => (
            <div key={tool.id} className="min-w-[300px] md:min-w-0 snap-start">
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* 6. Compare Popular AI Tools */}
      <SectionContainer className="relative overflow-hidden bg-surface-section rounded-[32px] p-8 md:p-12 border border-border">
        <BackgroundPattern type="grid" opacity={0.03} />
        
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
              <span className="material-symbols-outlined text-xl">compare_arrows</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Head-to-Head</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Compare Alternatives
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((comparison) => (
            <ComparisonCard
              key={comparison.slug}
              title={comparison.title}
              slug={comparison.slug}
            />
          ))}
        </div>
      </SectionContainer>

      {/* 7. AI Workflows */}
      <SectionContainer className="relative overflow-hidden bg-gradient-to-b from-surface-section to-background -mx-4 px-4 py-16 md:mx-0 md:px-12 md:rounded-[32px] border border-border shadow-sm">
        {/* Workflow Nodes Background */}
        <BackgroundPattern type="workflow" opacity={0.03} className="text-primary" />
        
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-accent mb-2">
              <span className="material-symbols-outlined text-xl">account_tree</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Learn & Apply</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Popular AI Workflows
            </h2>
          </div>
          <Link href="/workflows" className="text-[13px] font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
            View All Workflows <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((workflow) => (
            <WorkflowCard
              key={workflow.title}
              title={workflow.title}
              tools={workflow.tools}
              icon={workflow.icon}
              slug={workflow.slug}
            />
          ))}
        </div>
      </SectionContainer>

      {/* 8. New AI Tools */}
      <SectionContainer>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-accent mb-2">
              <span className="material-symbols-outlined text-xl">new_releases</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">New Arrivals</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Just Added
            </h2>
          </div>
          <Link href="/category/all" className="text-[13px] font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
            View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {latestTools.map((tool) => (
            <div key={tool.id} className="min-w-[300px] md:min-w-0 snap-start">
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* 9. AI Collections (Goals & Opportunities combined into one large section idea) */}
      <SectionContainer>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-accent mb-2">
              <span className="material-symbols-outlined text-xl">interests</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Curated Paths</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Browse by Goal
            </h2>
          </div>
          <Link href="/goals" className="text-[13px] font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
            View All Goals <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {goals.map((goal) => (
            <GoalCard
              key={goal.slug}
              title={goal.title}
              icon={goal.icon}
              count={goal.count}
              slug={goal.slug}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
          <h3 className="text-2xl font-bold text-foreground tracking-tight">Trending Opportunities</h3>
          <Link href="/goals" className="text-[13px] font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
            View All Opportunities <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((item) => (
            <OpportunityCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              slug={item.slug}
            />
          ))}
        </div>
      </SectionContainer>

      {/* 10. Community Reviews */}
      <CommunityReviews />

      {/* 11. Latest AI News */}
      <SectionContainer>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <span className="material-symbols-outlined text-xl">article</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Resources</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Guides & Insights
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              category={article.category}
              slug={article.slug}
            />
          ))}
        </div>
      </SectionContainer>

      {/* 12. Submit Your Tool */}
      <SubmitToolCTA />

      {/* 13. Newsletter CTA */}
      <SectionContainer>
        <NewsletterCTA />
      </SectionContainer>
    </PageContainer>
  );
}