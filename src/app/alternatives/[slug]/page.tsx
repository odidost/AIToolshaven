import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getCuratedAlternative, getAllCuratedAlternatives } from "@/lib/data/alternatives";
import { getCategoryBySlug } from "@/lib/queries/categories";
import { getToolsByCategoryId, getToolBySlug } from "@/lib/data/tools-service";
import { getCategoryTheme } from "@/lib/data/categoryThemes";
import { siteConfig } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolGridWithFilters } from "@/components/shared/ToolGridWithFilters";
import { EEATFooter } from "@/components/category/EEATFooter";
import { PageContainer } from "@/components/layout/PageContainer";
import { StructuredData } from "@/components/shared/StructuredData";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

export async function generateStaticParams() {
  const alternatives = getAllCuratedAlternatives();
  return alternatives.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const curated = getCuratedAlternative(decodedSlug);

  const previewImg = siteConfig.ogImage;

  if (curated) {
    return {
      title: curated.title,
      description: curated.metaDescription,
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
        canonical: `${siteConfig.baseUrl}/alternatives/${decodedSlug}`,
      },
      openGraph: {
        title: curated.title,
        description: curated.metaDescription,
        type: "article",
        url: `${siteConfig.baseUrl}/alternatives/${decodedSlug}`,
        images: [
          {
            url: previewImg,
            width: 1200,
            height: 630,
            alt: curated.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: curated.title,
        description: curated.metaDescription,
        images: [previewImg],
      },
    };
  }

  // Fallback for category-based alternatives
  const alt = await getCategoryBySlug(decodedSlug);
  if (!alt) {
    return { title: "Alternatives Not Found | AIToolsHaven" };
  }

  const altTools = await getToolsByCategoryId(alt.id);
  const isNoIndex = alt.indexable === false || altTools.length < 3;
  const altTitle = `Best ${alt.name} Alternatives in 2026 | AIToolsHaven`;
  const altDesc = `Discover the top competitors and alternatives to ${alt.name}.`;

  return {
    title: altTitle,
    description: altDesc,
    robots: {
      index: !isNoIndex,
      follow: true,
      googleBot: {
        index: !isNoIndex,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.baseUrl}/alternatives/${decodedSlug}`,
    },
    openGraph: {
      title: altTitle,
      description: altDesc,
      type: "website",
      url: `${siteConfig.baseUrl}/alternatives/${decodedSlug}`,
      images: [
        {
          url: previewImg,
          width: 1200,
          height: 630,
          alt: altTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: altTitle,
      description: altDesc,
      images: [previewImg],
    },
  };
}

export default async function AlternativesPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const curated = getCuratedAlternative(decodedSlug);

  if (curated) {
    const mainTool = await getToolBySlug(curated.slug);

    // Resolve full tool objects for alternatives
    const altDetails = await Promise.all(
      curated.alternatives.map(async (item) => {
        const tool = await getToolBySlug(item.slug);
        return {
          ...item,
          tool,
        };
      })
    );

    const validAlts = altDetails.filter((a) => a.tool !== null);

    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${siteConfig.baseUrl}/alternatives/${curated.slug}#webpage`,
          url: `${siteConfig.baseUrl}/alternatives/${curated.slug}`,
          name: curated.h1,
          description: curated.metaDescription,
          breadcrumb: {
            "@id": `${siteConfig.baseUrl}/alternatives/${curated.slug}#breadcrumb`,
          },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: validAlts.length,
            itemListElement: validAlts.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "SoftwareApplication",
                name: item.name,
                url: `${siteConfig.baseUrl}/tool/${item.slug}`,
                description: item.keyDifference,
                applicationCategory: mainTool?.category || "AI Tools",
                operatingSystem: "Web-based",
              },
            })),
          },
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${siteConfig.baseUrl}/alternatives/${curated.slug}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteConfig.baseUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Alternatives",
              item: `${siteConfig.baseUrl}/categories`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: curated.h1,
              item: `${siteConfig.baseUrl}/alternatives/${curated.slug}`,
            },
          ],
        },
        ...(curated.faqs && curated.faqs.length > 0
          ? [
              {
                "@type": "FAQPage",
                mainEntity: curated.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              },
            ]
          : []),
      ],
    };

    return (
      <PageContainer as="main" className="py-12 md:py-16">
        <StructuredData data={jsonLd} />

        <nav className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Alternatives", href: "/categories" },
              ...(mainTool ? [{ label: mainTool.name, href: `/tool/${mainTool.slug}` }] : []),
              { label: curated.h1 },
            ]}
          />
        </nav>

        {/* Hero Section */}
        <section className="mb-12 rounded-3xl border border-border/70 bg-surface-elevated p-8 md:p-12 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-sm">compare_arrows</span>
            Competitor & Alternative Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-on-surface mb-6">
            {curated.h1}
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-8 max-w-4xl">
            {curated.intro}
          </p>

          <div className="p-6 rounded-2xl bg-surface/60 border border-border/50">
            <h2 className="text-base font-bold text-on-surface mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-500">lightbulb</span>
              Why Users Seek Alternatives to {curated.toolName}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {curated.whySeekAlternative.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-sm shrink-0 mt-1">arrow_right</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Alternatives Cards */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-8">
            Top {curated.toolName} Competitors & Alternatives
          </h2>

          <div className="space-y-6">
            {validAlts.map(({ slug, name, badge, keyDifference, bestFor, tool }, idx) => {
              if (!tool) return null;
              return (
                <div
                  key={tool.id}
                  className="rounded-2xl border border-border/80 bg-surface-elevated p-6 md:p-8 shadow-xs hover:border-primary/40 transition-all flex flex-col md:flex-row gap-6 items-start justify-between"
                >
                  <div className="flex gap-4 items-start flex-1">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 font-bold text-lg">
                      #{idx + 1}
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <Link
                          href={`/tool/${tool.slug}`}
                          className="text-xl md:text-2xl font-bold text-on-surface hover:text-primary transition-colors"
                        >
                          {tool.name}
                        </Link>
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          {badge}
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant font-medium">
                        {tool.tagline}
                      </p>
                      <p className="text-sm text-on-surface-variant/90 leading-relaxed pt-1">
                        <strong className="text-on-surface font-semibold">Key Advantage over {curated.toolName}:</strong> {keyDifference}
                      </p>
                      <div className="text-xs text-on-surface-variant/80 pt-1">
                        <span className="font-semibold text-on-surface">Best for:</span> {bestFor}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 w-full md:w-48 shrink-0">
                    <Link
                      href={`/tool/${tool.slug}`}
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
                    >
                      Read Full Review
                    </Link>
                    <Link
                      href={`/compare-tools/${[curated.slug, tool.slug].sort().join("-vs-")}`}
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-surface border border-border text-on-surface font-medium text-sm hover:bg-surface-elevated transition-colors"
                    >
                      Compare vs {curated.toolName}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQs */}
        {curated.faqs && curated.faqs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-on-surface mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {curated.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-border/70 bg-surface-elevated">
                  <h3 className="text-base font-semibold text-on-surface mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Category Links */}
        <section className="mb-12 p-8 rounded-3xl border border-border/70 bg-surface-elevated">
          <h2 className="text-lg font-bold text-on-surface mb-4">
            Explore Related AI Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/category/${curated.relatedCategorySlug}`}
              className="px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              Browse Full {curated.relatedCategorySlug.replace(/-/g, " ")} Category →
            </Link>
            {mainTool && (
              <Link
                href={`/tool/${mainTool.slug}`}
                className="px-4 py-2 rounded-xl bg-surface border border-border text-on-surface text-sm font-medium hover:border-primary/40 transition-colors"
              >
                {mainTool.name} Review & Pricing →
              </Link>
            )}
          </div>
        </section>

        <EEATFooter />
      </PageContainer>
    );
  }

  // Fallback for category-based alternatives
  const alt = await getCategoryBySlug(decodedSlug);
  if (!alt) {
    notFound();
  }

  const altTools = await getToolsByCategoryId(alt.id);
  const theme = getCategoryTheme(decodedSlug);

  return (
    <PageContainer as="main" className="py-12 md:py-16">
      <nav className="mb-8">
        <Breadcrumbs
          items={[
            { label: "Alternatives", href: "/categories" },
            { label: `${alt.name} Alternatives` },
          ]}
        />
      </nav>

      <section className="mb-12 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 mb-6">
          <span className="material-symbols-outlined text-3xl">
            compare_arrows
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Best {alt.name} Alternatives
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Compare the top competitors and find the perfect alternative to {alt.name}.
        </p>
      </section>

      <ToolGridWithFilters tools={altTools} theme={theme} />
      
      <EEATFooter />
    </PageContainer>
  );
}
