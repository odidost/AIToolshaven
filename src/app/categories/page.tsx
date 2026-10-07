import { Metadata } from "next";
import { getAllCategories } from "@/lib/queries/categories";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageContainer } from "@/components/layout/PageContainer";
import { CategoryGridWithSearch } from "@/components/categories/CategoryGridWithSearch";
import { StructuredData } from "@/components/shared/StructuredData";
import { siteConfig } from "@/lib/config/site";
import { CategoryClusterRoadmap } from "@/components/categories/CategoryClusterRoadmap";
import { CategoriesEditorialGuide } from "@/components/categories/CategoriesEditorialGuide";
import { CategoriesFAQ } from "@/components/categories/CategoriesFAQ";
import { defaultCategoriesFaqs } from "@/lib/data/categoriesFaqsData";

import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Compare AI Tools by Category (2026) — 100+ Categories & Comparisons | AIToolsHaven",
  },
  description:
    "Compare AI tools across 100+ verified categories for 2026. Find, evaluate, and compare the best artificial intelligence software side-by-side by pricing, benchmarks, features, and user ratings.",
  keywords: [
    "compare ai tools",
    "compare AI tools by category",
    "AI tools comparison",
    "best AI tools 2026",
    "compare AI software",
    "side-by-side AI comparison",
    "free vs paid AI tools",
    "AI software directory",
  ],
  alternates: {
    canonical: `${siteConfig.baseUrl}/categories`,
  },
  openGraph: {
    title: "Compare AI Tools by Category (2026) — 100+ Categories & Comparisons | AIToolsHaven",
    description:
      "Compare AI tools across 100+ verified categories for 2026. Evaluate pricing, benchmarks, and feature matrices side-by-side.",
    url: `${siteConfig.baseUrl}/categories`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Compare AI Tools by Category — AIToolsHaven",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare AI Tools by Category (2026) — 100+ Categories & Comparisons",
    description: "Compare AI tools across 100+ verified categories for 2026.",
    images: [siteConfig.ogImage],
  },
};

export const revalidate = 86400; // 24 hours

export default async function CategoriesIndexPage() {
  const categories = await getAllCategories();

  const cleanBase = (siteConfig.baseUrl || "https://aitoolshaven.com").replace(/\/$/, "");
  const currentDate = new Date().toISOString().split("T")[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${cleanBase}/categories#webpage`,
        url: `${cleanBase}/categories`,
        name: "Compare AI Tools Across 100+ Categories (2026) | AIToolsHaven",
        description:
          "Compare 1,200+ verified AI tools side-by-side across 100+ specialized categories. Evaluate pricing models, performance benchmarks, and features.",
        dateModified: currentDate,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: categories.length,
          itemListElement: categories.map((cat, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: cat.name,
            url: `${cleanBase}/category/${cat.slug}`,
            description: cat.description || `Compare top-rated ${cat.name} tools, pricing models, and feature benchmarks.`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${cleanBase}/categories#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "AI Tools Directory",
            item: cleanBase,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Categories",
            item: `${cleanBase}/categories`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${cleanBase}/categories#faq`,
        mainEntity: defaultCategoriesFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <PageContainer className="py-8 md:py-12 bg-white min-h-screen">
      <StructuredData data={jsonLd} />
      <Breadcrumbs items={[{ label: "Categories" }]} />

      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-10 mt-2 flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-4">
          <span className="material-symbols-outlined text-[16px] text-[#E11D48]">compare_arrows</span>
          <span>AI Tool Comparison Directory &amp; Taxonomy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#0A0A0A] tracking-tight leading-[1.12]">
          Compare AI Tools Across 100+ Categories (2026)
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
          Compare 1,200+ verified AI tools side-by-side across 100+ specialized categories. Evaluate pricing tiers, feature matrices, performance benchmarks, and user ratings to choose the best software for your stack.
        </p>

        {/* Live Directory Signals & Quick Comparison Link */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs font-medium text-[#4B5563]">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F9FAFB] border border-[#E5E7EB]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>101 Comparison Categories</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F9FAFB] border border-[#E5E7EB]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48]" />
            <span>1,200+ Side-by-Side Tool Benchmarks</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F9FAFB] border border-[#E5E7EB]">
            <span className="material-symbols-outlined text-[14px] text-amber-500">verified</span>
            <span>Audited Free &amp; Freemium Tiers</span>
          </span>
          <Link
            href="/compare-tools"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFF1F2] border border-[#FECDD3] text-[#E11D48] hover:bg-[#FFE4E6] transition-colors font-semibold"
          >
            <span className="material-symbols-outlined text-[14px]">compare</span>
            <span>Launch Side-by-Side Comparison Engine &rarr;</span>
          </Link>
        </div>
      </div>

      {/* Categories Grid with Instant Search, Popular Hubs Bar, Domain Clusters & View Toggle */}
      <CategoryGridWithSearch categories={categories} />

      {/* Engaging Domain Clusters & Category Roadmaps */}
      <CategoryClusterRoadmap />

      {/* Detailed Keyword-Rich Selection Guide */}
      <CategoriesEditorialGuide totalCategories={categories.length} />

      {/* 6-Item Category FAQ Accordion with FAQPage Schema */}
      <CategoriesFAQ faqs={defaultCategoriesFaqs} />
    </PageContainer>
  );
}
