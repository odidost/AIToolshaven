import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

import { getToolBySlug, getToolsByCategoryId } from "@/lib/data/tools-service";
import { getCategoryById } from "@/lib/queries/categories";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageContainer } from "@/components/layout/PageContainer";

// Import all the new components
import { ComparisonHero } from "@/components/comparison/ComparisonHero";
import { ComparisonStickyNav } from "@/components/comparison/ComparisonStickyNav";
import { QuickVerdict } from "@/components/comparison/QuickVerdict";
import { ComparisonSummary } from "@/components/comparison/ComparisonSummary";
import { FeatureMatrix } from "@/components/comparison/FeatureMatrix";
import { WinnerGrid } from "@/components/comparison/WinnerGrid";
import { PerformanceAnalysis } from "@/components/comparison/PerformanceAnalysis";
import { PromptComparison } from "@/components/comparison/PromptComparison";
import { PricingComparison } from "@/components/comparison/PricingComparison";
import { WorkflowRecommendations } from "@/components/comparison/WorkflowRecommendations";
import { ProsCons } from "@/components/comparison/ProsCons";
import { AlternativesGrid } from "@/components/comparison/AlternativesGrid";
import { ExpertVerdict } from "@/components/comparison/ExpertVerdict";
import { ComparisonFAQ } from "@/components/comparison/ComparisonFAQ";
import { RelatedComparisons } from "@/components/comparison/RelatedComparisons";
import { ComparisonStructuredData } from "@/components/comparison/ComparisonStructuredData";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 604800; // 1 week

import { comparisons } from "@/lib/comparisons";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  let mainToolSlug = slug;
  let compareToolSlug = "";
  if (slug.includes("-vs-")) {
    [mainToolSlug, compareToolSlug] = slug.split("-vs-");
  }

  const mainTool = await getToolBySlug(mainToolSlug);

  if (!mainTool) {
    return { title: "Comparison Not Found | AIToolsHaven" };
  }

  let compareTool = null;
  if (compareToolSlug) {
    compareTool = await getToolBySlug(compareToolSlug);
  } else {
    const allTools = await getToolsByCategoryId(mainTool.category);
    const otherTools = allTools.filter(
      (t) => t.id !== mainTool.id
    );
    compareTool = otherTools[0] || null;
  }

  const canonicalSlug = compareTool
    ? [mainToolSlug, compareToolSlug].sort().join('-vs-')
    : slug;

  const curated = comparisons.find(c => c.slug === slug || c.slug === canonicalSlug || c.slug === `${compareToolSlug}-vs-${mainToolSlug}`);

  const title = compareTool
    ? `${mainTool.name} vs ${compareTool.name}: Side-by-Side AI Comparison | AIToolsHaven`
    : `${mainTool.name} Comparison | AIToolsHaven`;

  const description = curated?.description
    ? `Compare ${mainTool.name} and ${compareTool?.name}. ${curated.description} Detailed feature matrix, pricing, and pros & cons.`
    : compareTool
    ? `Compare ${mainTool.name} and ${compareTool.name} side-by-side. See verified pricing, core features, pros & cons, and workflow recommendations.`
    : `Compare ${mainTool.name} with other AI tools on AIToolsHaven.`;

  const previewImg = siteConfig.ogImage;

  return {
    title,
    description,
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
    alternates: {
      canonical: `${siteConfig.baseUrl}/compare-tools/${canonicalSlug}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${siteConfig.baseUrl}/compare-tools/${canonicalSlug}`,
      images: [
        {
          url: previewImg,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [previewImg],
    },
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let mainToolSlug = slug;
  let compareToolSlug = "";
  if (slug.includes("-vs-")) {
    [mainToolSlug, compareToolSlug] = slug.split("-vs-");
  }

  const mainTool = await getToolBySlug(mainToolSlug);

  if (!mainTool) {
    notFound();
  }

  const category = await getCategoryById(mainTool.category);

  let compareTool = null;
  if (compareToolSlug) {
    compareTool = await getToolBySlug(compareToolSlug) || null;
  }
  
  if (!compareTool) {
    const allTools = await getToolsByCategoryId(mainTool.category);
    const otherTools = allTools.filter(
      (t) => t.id !== mainTool.id
    );
    compareTool = otherTools.length > 0 ? otherTools[0] : null;
  }

  if (!compareTool) {
    return (
      <PageContainer className="py-8 md:py-12">
        <Breadcrumbs
          items={[{ label: "Compare" }, { label: mainTool.name }]}
        />

        <div className="text-center text-on-surface-variant py-20">
          <span className="material-symbols-outlined text-6xl mb-4 block opacity-40">
            compare_arrows
          </span>

          <h1 className="text-2xl font-bold text-on-surface mb-2">
            No Comparison Available
          </h1>

          <p>
            There are no other tools in the{" "}
            <strong>{category?.name}</strong> category to compare with.
          </p>

          <Link
            href={`/tool/${mainTool.slug}`}
            className="inline-block mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            Back to {mainTool.name}
          </Link>
        </div>
      </PageContainer>
    );
  }

  const allCatTools = await getToolsByCategoryId(mainTool.category);
  const alternativeTools = allCatTools
    .filter((t) => t.id !== mainTool.id && t.id !== compareTool?.id)
    .slice(0, 3);

  return (
    <>
      <ComparisonStructuredData mainTool={mainTool} compareTool={compareTool} />
      
      <ComparisonHero 
        mainTool={mainTool} 
        compareTool={compareTool} 
        categoryName={category?.name || "Category"}
        categorySlug={category?.slug || ""}
      />

      <ComparisonStickyNav />

      <PageContainer className="pb-10">
        <QuickVerdict mainTool={mainTool} compareTool={compareTool} />
        <ComparisonSummary mainTool={mainTool} compareTool={compareTool} categoryName={category?.name || "Category"} />
        <FeatureMatrix mainTool={mainTool} compareTool={compareTool} />
        <WinnerGrid mainTool={mainTool} compareTool={compareTool} />
        <PerformanceAnalysis mainTool={mainTool} compareTool={compareTool} />
        <PromptComparison mainTool={mainTool} compareTool={compareTool} />
        <PricingComparison mainTool={mainTool} compareTool={compareTool} />
        <WorkflowRecommendations mainTool={mainTool} compareTool={compareTool} />
        <ProsCons mainTool={mainTool} compareTool={compareTool} />
        <AlternativesGrid mainTool={mainTool} compareTool={compareTool} alternativeTools={alternativeTools} />
        <ExpertVerdict mainTool={mainTool} compareTool={compareTool} />
        <ComparisonFAQ mainTool={mainTool} compareTool={compareTool} />
        <RelatedComparisons mainTool={mainTool} compareTool={compareTool} />
      </PageContainer>
    </>
  );
}