import { opportunities } from "@/lib/opportunities";
import { workflows } from "@/lib/workflows";
import { comparisons } from "@/lib/comparisons";
import { articles } from "@/lib/articles";
import { BackgroundPattern } from "@/components/shared/BackgroundPattern";

import { SpotlightBanner } from "@/components/shared/SpotlightBanner";
import { TrustedByMarquee } from "@/components/home/TrustedByMarquee";
import { RecommendationEngine } from "@/components/home/RecommendationEngine";
import { EditorialRankingsSection } from "@/components/home/EditorialRankingsSection";
import { HomepageCategories } from "@/components/home/HomepageCategories";
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

export default async function Home() {
  const featuredTools = await getFeaturedTools(8);
  const trendingTools = await getTrendingTools(8);
  const latestTools = await getLatestTools(8);

  return (
    <>
      {/* 1. Hero Section */}
      <SpotlightBanner />

      {/* 1b. Featured Tools */}
      {featuredTools.length > 0 && (
        <section className="py-12 md:py-16 bg-background">
          <PageContainer>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="flex items-center gap-2 text-accent mb-2">
                  <span className="material-symbols-outlined text-xl">star</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">Editor's Choice</span>
                </div>
                <h2 className="text-fluid-h2 font-bold text-foreground tracking-tight">
                  Featured Tools
                </h2>
              </div>
              <Link href="/categories" className="text-[13px] font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                View All Categories <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </PageContainer>
        </section>
      )}

      {/* 3b. Editorial Rankings */}
      <EditorialRankingsSection />

      {/* 2. Trust Layer */}
      <TrustedByMarquee />

      {/* 3. AI Recommendation Engine */}
      <RecommendationEngine />

      {/* 4. Featured Categories */}
      <HomepageCategories />

      {/* 6. Compare Popular AI Tools */}
      <section className="relative overflow-hidden bg-surface-section border-y border-border py-12 md:py-20 w-full">
        <BackgroundPattern type="grid" opacity={0.03} />
        <PageContainer className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-primary mb-2">
                <span className="material-symbols-outlined text-xl">compare_arrows</span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">Head-to-Head</span>
              </div>
              <h2 className="text-fluid-h2 font-bold text-foreground tracking-tight">
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
        </PageContainer>
      </section>

      {/* 7. AI Workflows */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-section to-background border-b border-border w-full py-12 md:py-20 shadow-xs">
        {/* Workflow Nodes Background */}
        <BackgroundPattern type="workflow" opacity={0.03} className="text-primary" />
        <PageContainer className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-accent mb-2">
                <span className="material-symbols-outlined text-xl">account_tree</span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">Learn & Apply</span>
              </div>
              <h2 className="text-fluid-h2 font-bold text-foreground tracking-tight">
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
                key={workflow.slug}
                title={workflow.title}
                tools={workflow.tools}
                icon={workflow.icon}
                slug={workflow.slug}
              />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 9. AI Collections (Goals & Opportunities combined into one large section idea) */}
      <section className="py-12 md:py-20 bg-background">
        <PageContainer>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
            <h3 className="text-fluid-h3 font-bold text-foreground tracking-tight">Trending Opportunities</h3>
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
        </PageContainer>
      </section>

      {/* 10. Community Reviews */}
      <PageContainer className="py-12 md:py-20 bg-background">
        <CommunityReviews />
      </PageContainer>

      {/* 11. Latest AI News */}
      <section className="py-12 md:py-20 bg-background">
        <PageContainer>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <span className="material-symbols-outlined text-xl">article</span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">Resources</span>
              </div>
              <h2 className="text-fluid-h2 font-bold text-foreground tracking-tight">
                Guides & Insights
              </h2>
            </div>
            <Link href="/blog" className="text-[13px] font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
              View All Articles <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </PageContainer>
      </section>

      {/* 12. Submit Your Tool */}
      <SubmitToolCTA />

      {/* 13. Newsletter CTA */}
      <NewsletterCTA />
    </>
  );
}
