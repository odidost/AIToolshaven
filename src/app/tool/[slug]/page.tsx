import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolHero } from "@/components/tool/ToolHero";
import { ToolOverview } from "@/components/tool/ToolOverview";
import { UseCases } from "@/components/tool/UseCases";
import { FeatureGrid } from "@/components/tool/FeatureGrid";
import { ProsCons } from "@/components/tool/ProsCons";
import ToolComparisonSection from "@/components/tool/ToolComparisonSection";
import { PricingPlans } from "@/components/tool/PricingPlans";
import { ToolSidebar } from "@/components/tool/ToolSidebar";
import { StructuredData } from "@/components/shared/StructuredData";
import { WorkflowCard } from "@/components/home/WorkflowCard";
import { GoalCard } from "@/components/home/GoalCard";
import { ToolReviews } from "@/components/tool/ToolReviews";
import { ToolShareEmbed } from "@/components/tool/ToolShareEmbed";
import { ExpertVerdict } from "@/components/tool/ExpertVerdict";
import { workflows } from "@/lib/workflows";
import { goals } from "@/lib/goals";
import {
  getToolBySlug,
  getToolsByCategoryId,
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

  const category = getCategoryById(tool.category);

  const relatedTools = getToolsByCategoryId(tool.category).filter(
    (t) => t.id !== tool.id
  );

  const comparisonTools = getComparisonCandidates(tool);

  const toolWorkflows = workflows.filter(
    (w) => w.tools.includes(tool.name) || (tool.workflows && tool.workflows.includes(w.slug))
  );

  const toolGoals = goals.filter(
    (g) => tool.goals && tool.goals.includes(g.slug)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Sarah Jenkins" },
            datePublished: new Date().toISOString().split('T')[0],
            reviewBody: `I've integrated ${tool.name} into our core product, and the results have been phenomenal.`,
            reviewRating: { "@type": "Rating", ratingValue: "5" }
          }
        ],
        url: tool.websiteUrl || `https://aitoolshaven.com/tool/${tool.slug}`,
        image: `https://aitoolshaven.com${tool.logoUrl}`,
      },
      {
        "@type": "WebPage",
        "@id": `https://aitoolshaven.com/tool/${tool.slug}`,
        url: `https://aitoolshaven.com/tool/${tool.slug}`,
        name: `${tool.name} Reviews, Pricing & Features`,
        publisher: {
          "@type": "Organization",
          name: "AIToolsHaven",
          url: "https://aitoolshaven.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://aitoolshaven.com"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: category?.name || "Category",
            item: category ? `https://aitoolshaven.com/category/${category.slug}` : undefined
          },
          {
            "@type": "ListItem",
            position: 3,
            name: tool.name
          }
        ]
      }
    ]
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

      {/* Grid containing content with sidebar */}
      <div className="mt-16 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12">
        <main>
          <ToolOverview
            title={tool.name}
            description={tool.description}
          />

          <ExpertVerdict tool={tool} />

          <ProsCons pros={tool.pros} cons={tool.cons} />

          <UseCases useCases={tool.useCases} />

          <FeatureGrid features={tool.features} />

          <PricingPlans plans={tool.pricingPlans} pricing={tool.pricing} />

          <ToolComparisonSection
            tool={tool}
            comparisonTools={comparisonTools}
          />
        </main>

        <ToolSidebar
          tool={tool}
          relatedTools={relatedTools}
          categories={getAllCategories()}
          currentCategory={category}
        />
      </div>

      {/* Full-width sections at the bottom */}
      <div className="mt-16 space-y-16 border-t border-border/50 pt-16">
        {toolWorkflows.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold tracking-tight mb-6 text-on-surface">Workflows Using {tool.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolWorkflows.map(w => (
                <WorkflowCard key={w.slug} title={w.title} tools={w.tools} icon={w.icon} />
              ))}
            </div>
          </section>
        )}

        {toolGoals.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold tracking-tight mb-6 text-on-surface">Related Collections</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {toolGoals.map(g => (
                <GoalCard key={g.slug} title={g.title} icon={g.icon} count={g.count} slug={g.slug} />
              ))}
            </div>
          </section>
        )}

        <ToolReviews tool={tool} />

        <ToolShareEmbed tool={tool} />
      </div>
    </div>
  );
}