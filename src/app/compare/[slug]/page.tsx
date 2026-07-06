import { notFound } from "next/navigation";
import Link from "next/link";

import { getToolBySlug, getToolsByCategoryId } from "@/lib/data/tools-service";
import { getCategoryById } from "@/lib/queries/categories";

import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 604800; // 1 week

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  let mainToolSlug = slug;
  let compareToolSlug = "";
  if (slug.includes("-vs-")) {
    [mainToolSlug, compareToolSlug] = slug.split("-vs-");
  }

  const mainTool = getToolBySlug(mainToolSlug);

  if (!mainTool) {
    return { title: "Comparison Not Found | AIToolsHaven" };
  }

  let compareTool = null;
  if (compareToolSlug) {
    compareTool = getToolBySlug(compareToolSlug);
  } else {
    const otherTools = getToolsByCategoryId(mainTool.category).filter(
      (t) => t.id !== mainTool.id
    );
    compareTool = otherTools[0] || null;
  }

  const title = compareTool
    ? `${mainTool.name} vs ${compareTool.name}: Full Comparison | AIToolsHaven`
    : `${mainTool.name} Comparison | AIToolsHaven`;

  const description = compareTool
    ? `Compare ${mainTool.name} and ${compareTool.name} side-by-side. See pricing, features, pros & cons, and decide which AI tool is right for you.`
    : `Compare ${mainTool.name} with other AI tools on AIToolsHaven.`;

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

  let mainToolSlug = slug;
  let compareToolSlug = "";
  if (slug.includes("-vs-")) {
    [mainToolSlug, compareToolSlug] = slug.split("-vs-");
  }

  const mainTool = getToolBySlug(mainToolSlug);

  if (!mainTool) {
    notFound();
  }

  const category = getCategoryById(mainTool.category);

  let compareTool = null;
  if (compareToolSlug) {
    compareTool = getToolBySlug(compareToolSlug) || null;
  }
  
  if (!compareTool) {
    const otherTools = getToolsByCategoryId(mainTool.category).filter(
      (t) => t.id !== mainTool.id
    );
    compareTool = otherTools.length > 0 ? otherTools[0] : null;
  }

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

  const allFeatureTitles = Array.from(
    new Set([...mainTool.features.map(f => f.title), ...compareTool.features.map(f => f.title)])
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
            <div className="p-4 font-bold bg-surface">Criteria</div>
            <div className="p-4 text-center font-bold border-l bg-surface">
              {mainTool.name}
            </div>
            <div className="p-4 text-center font-bold border-l bg-surface">
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
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">Feature Comparison</h2>

        <div className="border border-outline rounded-2xl overflow-hidden bg-surface-container">
          {allFeatureTitles.map((featureTitle, i) => {
            const hasA = mainTool.features.some(f => f.title === featureTitle);
            const hasB = compareTool.features.some(f => f.title === featureTitle);

            return (
              <div key={featureTitle} className={`grid grid-cols-3 ${i !== allFeatureTitles.length - 1 ? "border-b border-outline" : ""}`}>
                <div className="p-4">{featureTitle}</div>

                <div className="p-4 text-center border-l border-outline flex justify-center items-center">
                  {hasA ? (
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                  ) : (
                    <span className="material-symbols-outlined text-red-400 opacity-50">cancel</span>
                  )}
                </div>

                <div className="p-4 text-center border-l border-outline flex justify-center items-center">
                  {hasB ? (
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                  ) : (
                    <span className="material-symbols-outlined text-red-400 opacity-50">cancel</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pros & Cons */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">Pros & Cons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{mainTool.name}</h3>
            <div className="bg-surface-container rounded-2xl p-6 border border-outline shadow-sm">
              <h4 className="font-bold text-green-600 mb-2 flex items-center gap-2"><span className="material-symbols-outlined">add_circle</span> Pros</h4>
              <ul className="list-disc list-inside mb-4 text-on-surface-variant space-y-1">
                {mainTool.pros.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
              <h4 className="font-bold text-red-500 mb-2 flex items-center gap-2"><span className="material-symbols-outlined">do_not_disturb_on</span> Cons</h4>
              <ul className="list-disc list-inside text-on-surface-variant space-y-1">
                {mainTool.cons.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{compareTool.name}</h3>
            <div className="bg-surface-container rounded-2xl p-6 border border-outline shadow-sm">
              <h4 className="font-bold text-green-600 mb-2 flex items-center gap-2"><span className="material-symbols-outlined">add_circle</span> Pros</h4>
              <ul className="list-disc list-inside mb-4 text-on-surface-variant space-y-1">
                {compareTool.pros.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
              <h4 className="font-bold text-red-500 mb-2 flex items-center gap-2"><span className="material-symbols-outlined">do_not_disturb_on</span> Cons</h4>
              <ul className="list-disc list-inside text-on-surface-variant space-y-1">
                {compareTool.cons.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Best For */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">Best For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
            <h3 className="text-xl font-bold mb-3">{mainTool.name} is best for:</h3>
            <ul className="list-disc list-inside text-on-surface-variant space-y-2">
              {mainTool.bestFor.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
          <div className="bg-blue-500/5 rounded-2xl p-6 border border-blue-500/20">
            <h3 className="text-xl font-bold mb-3">{compareTool.name} is best for:</h3>
            <ul className="list-disc list-inside text-on-surface-variant space-y-2">
              {compareTool.bestFor.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Verdict */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-surface-container rounded-2xl p-8 border border-outline text-center shadow-md">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4">
            <span className="material-symbols-outlined text-2xl">gavel</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">The Verdict</h2>
          <p className="text-lg text-on-surface-variant">
            If you need <strong>{mainTool.bestFor[0]?.toLowerCase()}</strong>, then <strong>{mainTool.name}</strong> is the clear winner. 
            However, if you prioritize <strong>{compareTool.bestFor[0]?.toLowerCase()}</strong>, you will be better off choosing <strong>{compareTool.name}</strong>.
          </p>
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