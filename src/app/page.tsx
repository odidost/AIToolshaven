import { opportunities } from '@/lib/opportunities';
import { workflows } from '@/lib/workflows';
import { comparisons } from '@/lib/comparisons';
import { articles } from '@/lib/articles';

import { SpotlightBanner } from '@/components/shared/SpotlightBanner';
import { CategoryCapsuleBar } from '@/components/shared/CategoryCapsuleBar';
import { WorkflowCard } from "@/components/home/WorkflowCard";
import { OpportunityCard } from "@/components/home/OpportunityCard";
import { ComparisonCard } from "@/components/home/ComparisonCard";
import { ArticleCard } from "@/components/home/ArticleCard";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";
import { ToolCard } from '@/components/shared/ToolCard';
import { GoalCard } from '@/components/home/GoalCard';

import { tools, getFeaturedTools } from '@/lib/mock-data';
import { goals } from '@/lib/goals';

export default function Home() {
  const featuredTools = getFeaturedTools();

  // Latest tools are the non-featured tools
  const latestTools = tools.filter(t => !t.featured);

  return (
    <div className="container mx-auto px-4 py-8">

      {/* Hero Section */}
      <section className="mb-12">
        <SpotlightBanner />
      </section>

      {/* Browse by Goal */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-primary">
            explore
          </span>
          <h2 className="text-2xl font-bold text-on-surface">
            Browse by Goal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </section>

      {/* Browse by opportunities */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-primary">
            trending_up
          </span>

          <h2 className="text-2xl font-bold text-on-surface">
            Trending AI Opportunities
          </h2>
        </div>

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

      {/* Browse Popular AI Workflows */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-primary">
            account_tree
          </span>
          <h2 className="text-2xl font-bold text-on-surface">
            Popular AI Workflows
          </h2>
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

      {/* Popular Comparisons Section */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-primary">
            compare_arrows
          </span>
          <h2 className="text-2xl font-bold text-on-surface">
            Popular Comparisons
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {comparisons.map((comparison) => (
            <ComparisonCard
              key={comparison.slug}
              title={comparison.title}
              slug={comparison.slug}
            />
          ))}
        </div>
      </section>
      {/* Browse Categories */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-on-surface mb-4">
          Browse Categories
        </h2>

        <CategoryCapsuleBar />
      </section>

      {/* Trending Tools */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-accent">
              local_fire_department
            </span>
            Trending Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredTools.map(tool => (
            <ToolCard
              key={tool.id}
              tool={tool}
            />
          ))}
        </div>
      </section>

      {/* Latest Guides & Articles */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-primary">
            article
          </span>

          <h2 className="text-2xl font-bold text-on-surface">
            Latest Guides & Articles
          </h2>
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

      {/* Latest Additions */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              new_releases
            </span>
            Latest Additions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {latestTools.map(tool => (
            <ToolCard
              key={tool.id}
              tool={tool}
            />
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <NewsletterCTA />
    </div>
  );
}