import { opportunities } from "@/lib/opportunities";
import { workflows } from "@/lib/workflows";
import { comparisons } from "@/lib/comparisons";
import { articles } from "@/lib/articles";

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

export default function Home() {
  const featuredTools = getFeaturedTools(8);
  const trendingTools = getTrendingTools(8);
  const latestTools = getLatestTools(8);

  return (
    <div className="container mx-auto px-4 py-8">

      {/* 1. Hero Section */}
      <section className="mb-8">
        <SpotlightBanner />
      </section>

      {/* 1b. Featured Tools */}
      {featuredTools.length > 0 && (
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-500 mb-2">
                <span className="material-symbols-outlined text-xl">star</span>
                <span className="text-sm font-bold uppercase tracking-widest">Premium Picks</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Featured Tools
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      )}

      {/* 2. Trust Layer */}
      <TrustedByMarquee />

      {/* 3. AI Recommendation Engine */}
      <RecommendationEngine />

      {/* 4. Featured Categories */}
      <section className="mb-24 mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Explore Categories
          </h2>
        </div>
        <CategoryCapsuleBar />
      </section>

      {/* 5. Trending AI Tools */}
      <section className="mb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-accent mb-2">
              <span className="material-symbols-outlined text-xl">local_fire_department</span>
              <span className="text-sm font-bold uppercase tracking-widest">Trending Now</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Most Popular Tools
            </h2>
          </div>
          <Link href="/category/all" className="text-sm font-bold text-primary hover:text-primary-foreground transition-colors flex items-center gap-1">
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
      </section>

      {/* 6. Compare Popular AI Tools */}
      <section className="mb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-violet-500 mb-2">
              <span className="material-symbols-outlined text-xl">compare_arrows</span>
              <span className="text-sm font-bold uppercase tracking-widest">Versus Battles</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Compare Top AI Tools
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
      </section>

      {/* 7. AI Workflows */}
      <section className="mb-24 bg-slate-50 -mx-4 px-4 py-16 md:mx-0 md:px-12 md:rounded-[32px] border border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-500 mb-2">
              <span className="material-symbols-outlined text-xl">account_tree</span>
              <span className="text-sm font-bold uppercase tracking-widest">Learn & Apply</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Popular AI Workflows
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((workflow) => (
            <WorkflowCard
              key={workflow.title}
              title={workflow.title}
              tools={workflow.tools}
              icon={workflow.icon}
            />
          ))}
        </div>
      </section>

      {/* 8. New AI Tools */}
      <section className="mb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-sky-500 mb-2">
              <span className="material-symbols-outlined text-xl">new_releases</span>
              <span className="text-sm font-bold uppercase tracking-widest">Fresh Drops</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Latest Additions
            </h2>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {latestTools.map((tool) => (
            <div key={tool.id} className="min-w-[300px] md:min-w-0 snap-start">
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      </section>

      {/* 9. AI Collections (Goals & Opportunities combined into one large section idea) */}
      <section className="mb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-pink-500 mb-2">
              <span className="material-symbols-outlined text-xl">interests</span>
              <span className="text-sm font-bold uppercase tracking-widest">Curated</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Browse by Goal
            </h2>
          </div>
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

        <h3 className="text-2xl font-bold text-slate-900 mb-6">Trending Opportunities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((item) => (
            <OpportunityCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </section>

      {/* 10. Community Reviews */}
      <CommunityReviews />

      {/* 11. Latest AI News */}
      <section className="mb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-slate-500 mb-2">
              <span className="material-symbols-outlined text-xl">article</span>
              <span className="text-sm font-bold uppercase tracking-widest">Resources</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Latest Guides & News
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
      </section>

      {/* 12. Submit Your Tool */}
      <SubmitToolCTA />

      {/* 13. Newsletter CTA */}
      <NewsletterCTA />
    </div>
  );
}