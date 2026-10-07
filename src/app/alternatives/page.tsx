import { Metadata } from "next";
import Link from "next/link";
import { getAllCuratedAlternatives } from "@/lib/data/alternatives";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageContainer } from "@/components/layout/PageContainer";
import { StructuredData } from "@/components/shared/StructuredData";
import { ArrowRight, Replace, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Compare AI Tool Alternatives & Competitors (2026) | AIToolsHaven",
  description:
    "Find verified alternatives to popular AI tools like ChatGPT, Cursor, Midjourney, and ElevenLabs. Objective breakdowns based on pricing, context windows, and real workflows.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/alternatives`,
  },
  openGraph: {
    title: "Compare AI Tool Alternatives & Competitors (2026) — AIToolsHaven",
    description:
      "Find verified alternatives to popular AI tools. Objective breakdowns based on pricing, context windows, and real workflows.",
    url: `${siteConfig.baseUrl}/alternatives`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Compare AI Tool Alternatives — AIToolsHaven",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare AI Tool Alternatives & Competitors (2026) — AIToolsHaven",
    description:
      "Find verified alternatives to popular AI tools based on pricing, context windows, and real workflows.",
    images: [siteConfig.ogImage],
  },
};

export const revalidate = 86400; // 24 hours

export default function AlternativesArchivePage() {
  const curatedPages = getAllCuratedAlternatives();
  const cleanBase = (siteConfig.baseUrl || "https://aitoolshaven.com").replace(/\/$/, "");
  const currentDate = new Date().toISOString().split("T")[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${cleanBase}/alternatives#webpage`,
        url: `${cleanBase}/alternatives`,
        name: "Compare AI Tool Alternatives & Competitors | AIToolsHaven",
        description:
          "Find verified alternatives to popular AI tools based on pricing, context windows, and real workflows.",
        dateModified: currentDate,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: curatedPages.length,
          itemListElement: curatedPages.map((alt, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: `${alt.toolName} Alternatives`,
            url: `${cleanBase}/alternatives/${alt.slug}`,
            description: alt.metaDescription,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${cleanBase}/alternatives#breadcrumb`,
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
            name: "Alternatives",
            item: `${cleanBase}/alternatives`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <StructuredData data={jsonLd} />
      
      <PageContainer className="pt-6 sm:pt-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Alternatives" },
          ]}
        />

        {/* Hero Section */}
        <div className="py-8 sm:py-12 border-b border-[#E5E7EB] mb-10">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1 text-xs font-medium text-[#4B5563] mb-4">
            <Replace className="w-3.5 h-3.5 text-blue-600" />
            <span>Curated Software Replacements</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] font-heading leading-tight">
            Find the Best Alternatives to Popular AI Tools
          </h1>

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-[#4B5563] leading-relaxed">
            Looking beyond ChatGPT, Cursor, Midjourney, or ElevenLabs? Explore verified competitor breakdowns based on context limits, pricing models, privacy, and specialized workflows.
          </p>
        </div>

        {/* Alternatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curatedPages.map((page) => (
            <div
              key={page.slug}
              className="flex flex-col justify-between bg-white rounded-lg border border-[#E5E7EB] p-6 hover:border-gray-400 hover:shadow-xs transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h2 className="text-lg font-bold text-[#0A0A0A] font-heading">
                    {page.toolName} Alternatives
                  </h2>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    {page.alternatives.length} verified
                  </span>
                </div>

                <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                  {page.metaDescription}
                </p>

                <div className="space-y-1.5 mb-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4B5563] block">
                    Top featured competitors:
                  </span>
                  {page.alternatives.slice(0, 3).map((alt) => (
                    <div key={alt.slug} className="flex items-center gap-1.5 text-xs text-[#0A0A0A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-medium">{alt.name}</span>
                      <span className="text-[#4B5563] text-[11px]">({alt.badge})</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB]">
                <Link
                  href={`/alternatives/${page.slug}`}
                  className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#E11D48] hover:text-[#BE123C] transition-colors"
                >
                  <span>Compare all {page.toolName} alternatives</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
