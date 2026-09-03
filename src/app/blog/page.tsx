import { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { PageContainer } from "@/components/layout/PageContainer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { StructuredData } from "@/components/shared/StructuredData";
import { siteConfig } from "@/lib/config/site";
import { BlogGridWithFilter } from "@/components/blog/BlogGridWithFilter";
import { BlogEditorialGuide } from "@/components/blog/BlogEditorialGuide";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { defaultBlogFaqs } from "@/lib/data/blogFaqsData";

export const metadata: Metadata = {
  title: "AI Software Strategy, Tutorials & Industry Insights (2026)",
  description: "In-depth technical guides, tutorials, and benchmarks on vibe coding, autonomous AI agents, video generators, and multi-app workflows on AIToolsHaven.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/blog`,
  },
  openGraph: {
    title: "AI Software Strategy, Tutorials & Playbooks (2026) — AIToolsHaven",
    description: "In-depth technical guides, tutorials, and benchmarks on vibe coding, autonomous AI agents, video generators, and multi-app workflows.",
    url: `${siteConfig.baseUrl}/blog`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AIToolsHaven AI Blog & Technical Guides",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Software Strategy, Tutorials & Playbooks (2026) — AIToolsHaven",
    description: "In-depth technical guides, tutorials, and benchmarks on vibe coding, autonomous AI agents, and video generators.",
    images: [siteConfig.ogImage],
  },
};

export default function BlogIndexPage() {
  const cleanBase = (siteConfig.baseUrl || "https://aitoolshaven.com").replace(/\/$/, "");
  const currentDate = new Date().toISOString().split('T')[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${cleanBase}/blog#webpage`,
        url: `${cleanBase}/blog`,
        name: "AI Software Strategy, Tutorials & Playbooks (2026) | AIToolsHaven",
        description: "In-depth technical guides, tutorials, and benchmarks on vibe coding, autonomous AI agents, video generators, and multi-app workflows.",
        dateModified: currentDate,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: articles.length,
          itemListElement: articles.map((art, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: art.title,
            url: `${cleanBase}/blog/${art.slug}`,
            description: art.summary,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${cleanBase}/blog#breadcrumb`,
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
            name: "Blog & Guides",
            item: `${cleanBase}/blog`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${cleanBase}/blog#faq`,
        mainEntity: defaultBlogFaqs.map((faq) => ({
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
      <Breadcrumbs items={[{ label: "Blog & Guides" }]} />

      {/* Header Section */}
      <div className="max-w-3xl mb-10 mt-4">
        <div className="flex items-center gap-2 text-primary mb-2">
          <span className="material-symbols-outlined text-xl">article</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Curated Research &amp; Deep Dives</span>
        </div>
        <h1 className="text-fluid-h1 font-bold text-on-surface tracking-tight mb-4">
          AI Software Strategy, Tutorials &amp; Playbooks (2026)
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed">
          In-depth technical guides, head-to-head model benchmarks, and production playbooks to help you build virtual influencers, master vibe coding, and automate business workflows.
        </p>
      </div>

      {/* Interactive Blog Grid with Semantic H2 */}
      <section className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[16px]">tune</span>
              Interactive Library
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
              Curated AI Guides, Frameworks &amp; Technical Analysis (2026)
            </h2>
          </div>
        </div>

        <BlogGridWithFilter articles={articles} />
      </section>

      {/* Readable Editorial Research & Benchmark Guide */}
      <BlogEditorialGuide />

      {/* Cross-Silo Workflow & Category Bridge */}
      <div className="my-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-surface to-secondary/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Execution Blueprints</span>
          <h3 className="text-2xl font-black text-on-surface">Explore Technical Workflows &amp; Tool Categories</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Ready to turn these insights into production systems? Follow our step-by-step multi-app workflow guides or explore our full category directory.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link 
            href="/workflows" 
            className="px-6 py-3 rounded-full bg-primary text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-sm"
          >
            Browse AI Workflows →
          </Link>
          <Link 
            href="/categories" 
            className="px-6 py-3 rounded-full bg-surface border border-outline font-bold text-sm text-on-surface hover:bg-surface-secondary transition-colors"
          >
            Browse All Categories
          </Link>
        </div>
      </div>

      {/* 6-Item Blog FAQ Accordion */}
      <BlogFAQ faqs={defaultBlogFaqs} />
    </PageContainer>
  );
}
