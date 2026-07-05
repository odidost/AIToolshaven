import { notFound } from "next/navigation";
import Link from "next/link";

import { getToolBySlug } from "@/lib/queries/tools";
import { getCategoryById } from "@/lib/queries/categories";
import { getToolsByCategory } from "@/lib/queries/tools";

import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mainTool = getToolBySlug(slug);

  if (!mainTool) {
    return { title: "Comparison Not Found | AETHER" };
  }

  const otherTools = getToolsByCategory(mainTool.category).filter(
    (t) => t.id !== mainTool.id
  );
  const compareTool = otherTools[0];

  const title = compareTool
    ? `${mainTool.name} vs ${compareTool.name}: Full Comparison | AETHER`
    : `${mainTool.name} Comparison | AETHER`;

  const description = compareTool
    ? `Compare ${mainTool.name} and ${compareTool.name} side-by-side. See pricing, features, pros & cons, and decide which AI tool is right for you.`
    : `Compare ${mainTool.name} with other AI tools on AETHER.`;

  return {
    title,
    description,
    openGraph: { title, description, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const mainTool = getToolBySlug(slug);

  if (!mainTool) {
    notFound();
  }

  const category = getCategoryById(mainTool.category);

  const otherTools = getToolsByCategory(mainTool.category).filter(
    (t) => t.id !== mainTool.id
  );

  const compareTool = otherTools.length > 0 ? otherTools[0] : null;

  if (!compareTool) {
    return (
      <div className="container mx-auto px-4 py-8">
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
      </div>
    );
  }

  const comparisonRows = [
    {
      label: "Pricing Model",
      icon: "payments",
      toolA: `${mainTool.priceModel}${mainTool.price ? ` • ${mainTool.price}` : ""
        }`,
      toolB: `${compareTool.priceModel}${compareTool.price ? ` • ${compareTool.price}` : ""
        }`,
    },
    {
      label: "User Rating",
      icon: "star",
      toolA: `${mainTool.rating} / 5.0`,
      toolB: `${compareTool.rating} / 5.0`,
    },
    {
      label: "Total Reviews",
      icon: "reviews",
      toolA: `${mainTool.reviewCount.toLocaleString()} reviews`,
      toolB: `${compareTool.reviewCount.toLocaleString()} reviews`,
    },
    {
      label: "Verified",
      icon: "verified",
      toolA: mainTool.verified ? "Yes" : "No",
      toolB: compareTool.verified ? "Yes" : "No",
    },
  ];

  const allFeatures = Array.from(
    new Set([...mainTool.features, ...compareTool.features])
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          {
            label: category?.name || "Category",
            href: category ? `/category/${category.slug}` : undefined,
          },
          { label: `${mainTool.name} vs ${compareTool.name}` },
        ]}
      />

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-3">
          Tool Comparison
        </h1>

        <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
          See how <strong>{mainTool.name}</strong> and{" "}
          <strong>{compareTool.name}</strong> stack up against each other.
        </p>
      </div>

      {/* Tool cards */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-center mb-10 max-w-4xl mx-auto">
        {/* A */}
        <div className="bg-surface-container rounded-2xl p-6 border border-outline shadow-sm text-center">
          <img
            src={mainTool.imageUrl}
            alt={mainTool.name}
            className="w-20 h-20 rounded-2xl mx-auto mb-4 object-cover"
          />

          <h2 className="text-xl font-bold">{mainTool.name}</h2>

          <p className="text-sm text-on-surface-variant mb-3">
            {mainTool.tagline}
          </p>

          <div className="text-sm mb-3">
            ★ {mainTool.rating} ({mainTool.reviewCount})
          </div>

          <span className="px-3 py-1 rounded-lg text-xs bg-primary-container">
            {mainTool.priceModel}
          </span>
        </div>

        {/* VS */}
        <div className="flex justify-center">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold">
            VS
          </div>
        </div>

        {/* B */}
        <div className="bg-surface-container rounded-2xl p-6 border border-outline shadow-sm text-center">
          <img
            src={compareTool.imageUrl}
            alt={compareTool.name}
            className="w-20 h-20 rounded-2xl mx-auto mb-4 object-cover"
          />

          <h2 className="text-xl font-bold">{compareTool.name}</h2>

          <p className="text-sm text-on-surface-variant mb-3">
            {compareTool.tagline}
          </p>

          <div className="text-sm mb-3">
            ★ {compareTool.rating} ({compareTool.reviewCount})
          </div>

          <span className="px-3 py-1 rounded-lg text-xs bg-primary-container">
            {compareTool.priceModel}
          </span>
        </div>
      </div>

      {/* Comparison table */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-surface-container rounded-2xl border border-outline overflow-hidden">
          <div className="grid grid-cols-3 border-b border-outline">
            <div className="p-4 font-bold">Criteria</div>
            <div className="p-4 text-center font-bold border-l">
              {mainTool.name}
            </div>
            <div className="p-4 text-center font-bold border-l">
              {compareTool.name}
            </div>
          </div>

          {comparisonRows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-3 border-b border-outline"
            >
              <div className="p-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  {row.icon}
                </span>
                {row.label}
              </div>

              <div className="p-4 text-center border-l">{row.toolA}</div>
              <div className="p-4 text-center border-l">{row.toolB}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6">Feature Comparison</h2>

        <div className="border rounded-2xl overflow-hidden">
          {allFeatures.map((feature, i) => {
            const hasA = mainTool.features.includes(feature);
            const hasB = compareTool.features.includes(feature);

            return (
              <div key={feature} className="grid grid-cols-3 border-b">
                <div className="p-4">{feature}</div>

                <div className="p-4 text-center border-l">
                  {hasA ? "✔" : "✖"}
                </div>

                <div className="p-4 text-center border-l">
                  {hasB ? "✔" : "✖"}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-primary-container rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Ready to decide?</h2>

          <div className="flex gap-4 justify-center">
            <Link
              href={`/tool/${mainTool.slug}`}
              className="bg-primary text-white px-6 py-3 rounded-xl"
            >
              Explore {mainTool.name}
            </Link>

            <Link
              href={`/tool/${compareTool.slug}`}
              className="border px-6 py-3 rounded-xl"
            >
              Explore {compareTool.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}