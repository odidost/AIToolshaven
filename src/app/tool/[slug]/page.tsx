import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolHero } from "@/components/tool/ToolHero";
import { ToolOverview } from "@/components/tool/ToolOverview";
import { UseCases } from "@/components/tool/UseCases";
import { FeatureGrid } from "@/components/tool/FeatureGrid";
import { QuickFacts } from "@/components/tool/QuickFacts";
import { ProsCons } from "@/components/tool/ProsCons";
import ToolComparisonSection from "@/components/tool/ToolComparisonSection";
import { PricingPlans } from "@/components/tool/PricingPlans";
import { RatingBreakdown } from "@/components/tool/RatingBreakdown";
import { ToolSidebar } from "@/components/tool/ToolSidebar";
import { StructuredData } from "@/components/shared/StructuredData";
import { WorkflowCard } from "@/components/home/WorkflowCard";
import { GoalCard } from "@/components/home/GoalCard";
import { workflows } from "@/lib/workflows";
import { goals } from "@/lib/goals";
import {
  getToolBySlug,
  getToolsByCategoryId,
  getFeaturedTools,
} from "@/lib/data/tools-service";

import {
  getAllCategories,
  getCategoryById,
} from "@/lib/queries/categories";

import { getComparisonCandidates } from "@/lib/queries/comparisons";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 86400; // 24 hours

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool Not Found | AIToolsHaven",
    };
  }

  return {
    title: `${tool.name} Reviews, Pricing & Features | AIToolsHaven`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} | AIToolsHaven`,
      description: tool.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} | AIToolsHaven`,
      description: tool.description,
    },
    alternates: {
      canonical: `https://aitoolshaven.com/tool/${tool.slug}`,
    },
  };
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  // category FIX (this was missing)
  const category = getCategoryById(tool.category);

  // related tools FIX (this was missing)
  const relatedTools = getToolsByCategoryId(tool.category).filter(
    (t) => t.id !== tool.id
  );

  // comparisons (keep as-is)
  const comparisonTools = getComparisonCandidates(tool);

  const toolWorkflows = workflows.filter(
    (w) => w.tools.includes(tool.name) || (tool.workflows && tool.workflows.includes(w.slug))
  );

  const toolGoals = goals.filter(
    (g) => tool.goals && tool.goals.includes(g.slug)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: tool.platform,
    offers: {
      "@type": "Offer",
      price: tool.price === "From $0" ? "0.00" : tool.price?.replace(/[^0-9.]/g, "") || "0.00",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tool.rating.toString(),
      ratingCount: tool.reviewCount.toString(),
    },
    url: tool.websiteUrl,
    image: `https://aitoolshaven.com${tool.logoUrl}`,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <StructuredData data={jsonLd} />
      <Breadcrumbs
        items={[
          {
            label: category?.name || "Category",
            href: category ? `/category/${category.slug}` : undefined,
          },
          { label: tool.name },
        ]}
      />



      <ToolHero tool={tool} />

      <div className="mt-16 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12">
        <main>
          <ToolOverview
            title={tool.name}
            description={tool.description}
          />

          <UseCases useCases={tool.useCases} />

          <FeatureGrid features={tool.features} />

          <QuickFacts tool={tool} />

          <ProsCons pros={tool.pros} cons={tool.cons} />

          <ToolComparisonSection
            tool={tool}
            comparisonTools={comparisonTools}
          />

          <PricingPlans plans={tool.pricingPlans} pricing={tool.pricing} />

          {/* Workflows containing this tool */}
          {toolWorkflows.length > 0 && (
            <section className="mt-16">
              <h3 className="text-xl font-bold tracking-tight mb-6">Workflows Using {tool.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {toolWorkflows.map(w => (
                  <WorkflowCard key={w.slug} title={w.title} tools={w.tools} icon={w.icon} />
                ))}
              </div>
            </section>
          )}

          {/* Goals/Collections containing this tool */}
          {toolGoals.length > 0 && (
            <section className="mt-16">
              <h3 className="text-xl font-bold tracking-tight mb-6">Related Collections</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {toolGoals.map(g => (
                  <GoalCard key={g.slug} title={g.title} icon={g.icon} count={g.count} slug={g.slug} />
                ))}
              </div>
            </section>
          )}

          <RatingBreakdown tool={tool} />
        </main>

        <ToolSidebar
          featuredTool={getFeaturedTools()[0]}
          relatedTools={relatedTools}
          categories={getAllCategories()}
          currentCategory={category}
        />
      </div>
    </div>
  );
}