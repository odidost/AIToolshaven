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

export const metadata: Metadata = {
  title: "All 25+ AI Tool Categories (2026) — Directory by Use Case",
  description: "Browse 25+ verified AI tool categories for 2026. Compare the best artificial intelligence software for writing, video, coding, SEO, voice, and workflows.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/categories`,
  },
  openGraph: {
    title: "All 25+ AI Tool Categories (2026) — Directory by Use Case",
    description: "Browse 25+ verified AI tool categories for 2026. Compare the best artificial intelligence software.",
    url: `${siteConfig.baseUrl}/categories`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "All AI Tool Categories — AIToolsHaven",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All 25+ AI Tool Categories (2026) — Directory by Use Case",
    description: "Browse 25+ verified AI tool categories for 2026.",
    images: [siteConfig.ogImage],
  },
};

export default async function CategoriesIndexPage() {
  const categories = await getAllCategories();

  const cleanBase = (siteConfig.baseUrl || "https://aitoolshaven.com").replace(/\/$/, "");
  const currentDate = new Date().toISOString().split('T')[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${cleanBase}/categories#webpage`,
        url: `${cleanBase}/categories`,
        name: "All 25+ AI Tool Categories (2026) — Directory by Use Case | AIToolsHaven",
        description: "Browse 25+ human-verified AI tool categories. Find, filter, and compare the best artificial intelligence software.",
        dateModified: currentDate,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: categories.length,
          itemListElement: categories.map((cat, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: cat.name,
            url: `${cleanBase}/category/${cat.slug}`,
            description: cat.description || `Browse and compare top-rated ${cat.name} software.`,
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
    <PageContainer className="py-8 md:py-12">
      <StructuredData data={jsonLd} />
      <Breadcrumbs items={[{ label: "Categories" }]} />

      {/* Hero Header */}
      <div className="max-w-3xl mb-10 mt-4">
        <div className="flex items-center gap-2 text-primary mb-2">
          <span className="material-symbols-outlined text-xl">category</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Directory Index</span>
        </div>
        <h1 className="text-fluid-h1 font-bold text-on-surface tracking-tight mb-4">
          Browse All AI Tool Categories (2026)
        </h1>
        <p className="text-xl text-on-surface-variant">
          Explore our complete human-verified directory of 1,000+ AI tools organized across 25+ functional categories.
        </p>
      </div>

      {/* Categories Grid with Instant Search & Intent Filter Chips (Top Position Preserved) */}
      <CategoryGridWithSearch categories={categories} />

      {/* Engaging Domain Clusters & Category Roadmaps (Leading to Specific Categories) */}
      <CategoryClusterRoadmap />

      {/* Detailed Keyword-Rich Selection Guide */}
      <CategoriesEditorialGuide totalCategories={categories.length} />

      {/* 6-Item Category FAQ Accordion with FAQPage Schema */}
      <CategoriesFAQ faqs={defaultCategoriesFaqs} />
    </PageContainer>
  );
}
