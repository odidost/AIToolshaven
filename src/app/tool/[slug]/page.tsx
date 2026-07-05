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

import {
  getToolBySlug,
  getToolsByCategory,
  getFeaturedTools,
} from "@/lib/queries/tools";

import {
  getAllCategories,
  getCategoryById,
} from "@/lib/queries/categories";

import { getComparisonCandidates } from "@/lib/queries/comparisons";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool Not Found | AETHER",
    };
  }

  return {
    title: `${tool.name} Reviews, Pricing & Features | AETHER`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} | AETHER`,
      description: tool.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} | AETHER`,
      description: tool.description,
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
  const relatedTools = getToolsByCategory(tool.category).filter(
    (t) => t.id !== tool.id
  );

  // comparisons (keep as-is)
  const comparisonTools = getComparisonCandidates(tool);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          {
            label: category?.name || "Category",
            href: category ? `/category/${category.slug}` : undefined,
          },
          { label: tool.name },
        ]}
      />

      {/* JSON-LD Structured Data for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: tool.name,
            description: tool.description,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: tool.priceModel === "Free" ? "0" : undefined,
              priceCurrency: "USD",
              availability: "https://schema.org/OnlineOnly",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: tool.rating,
              reviewCount: tool.reviewCount,
              bestRating: 5,
              worstRating: 1,
            },
            url: `https://aitoolshaven.com/tool/${tool.slug}`,
          }),
        }}
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

          <PricingPlans plans={tool.pricingPlans} />

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