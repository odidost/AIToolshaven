import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategoryBySlug, getCategoryById, getAllCategories } from "@/lib/queries/categories";
import { siteConfig } from "@/lib/config/site";
import { getToolsByCategoryId } from "@/lib/data/tools-service";
import { getCategoryTheme } from "@/lib/data/categoryThemes";

import { CategoryCapsuleBar } from "@/components/shared/CategoryCapsuleBar";
import { ToolGridWithFilters } from "@/components/shared/ToolGridWithFilters";
import { CategoryHeroSpotlight } from "@/components/category/CategoryHeroSpotlight";
import { CategoryHero } from "@/components/category/CategoryHero";
import { CategoryFAQ } from "@/components/category/CategoryFAQ";
import { CategoryGuide } from "@/components/category/CategoryGuide";
import { CategoryRelatedGuides } from "@/components/category/CategoryRelatedGuides";
import { EEATFooter } from "@/components/category/EEATFooter";
import { InternalLinks } from "@/components/category/InternalLinks";
import { BackgroundPattern } from "@/components/shared/BackgroundPattern";
import { PageContainer } from "@/components/layout/PageContainer";
import { Metadata } from "next";
import { SocialLinks } from "@/components/shared/SocialLinks";

import { StructuredData } from "@/components/shared/StructuredData";
import { categoryGuides } from "@/content/categories";
import { guideFaqs } from "@/content/categories/guide-faqs";
import { getOptimizedCategoryTitle, getOptimizedCategoryDescription } from "@/lib/seo-titles";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 86400; // 24 hours

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.filter(c => c.slug).map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const category = await getCategoryBySlug(decodedSlug);

  if (!category) {
    notFound();
  }

  const categoryTools = await getToolsByCategoryId(category.id);
  const hasGuide = Boolean(categoryGuides[decodedSlug] || categoryGuides[category.slug]);
  const isNoIndex = category.indexable === false || (!hasGuide && categoryTools.length < 3);
  const theme = getCategoryTheme(category.slug);
  const title = getOptimizedCategoryTitle(category.name, categoryTools.length, category.slug);
  const description = getOptimizedCategoryDescription(category.name, categoryTools.length, theme?.heroDescription, category.slug);

  return {
    title: {
      absolute: title,
    },
    description,
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
      canonical: `${siteConfig.baseUrl}/category/${category.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${siteConfig.baseUrl}/category/${category.slug}`,
      images: [
        {
          url: siteConfig.ogImage,
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
      images: [siteConfig.ogImage],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const decodedSlug = decodeURIComponent(slug);
  const category = await getCategoryBySlug(decodedSlug);

  if (!category) {
    notFound();
  }

  const categoryTools = await getToolsByCategoryId(category.id);
  const theme = getCategoryTheme(decodedSlug);


  const hasGuide = Boolean(categoryGuides[decodedSlug] || categoryGuides[category.slug]);
  const activeFaqs = (hasGuide && (guideFaqs[decodedSlug] || guideFaqs[category.slug]))
    ? (guideFaqs[decodedSlug] || guideFaqs[category.slug])
    : theme?.faq;

  const faqSchema = activeFaqs && activeFaqs.length > 0 ? {
    "@type": "FAQPage",
    "@id": `${siteConfig.baseUrl}/category/${category.slug}#faq`,
    mainEntity: activeFaqs.map((item: { question: string; answer: string }) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.baseUrl}/category/${category.slug}#webpage`,
        url: `${siteConfig.baseUrl}/category/${category.slug}`,
        name: `Best ${category.name} AI Tools in 2026`,
        description: theme.heroDescription || category.description,
        dateModified: new Date().toISOString().split('T')[0],
        breadcrumb: {
          "@id": `${siteConfig.baseUrl}/category/${category.slug}#breadcrumb`
        },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: categoryTools.length,
          itemListElement: categoryTools.slice(0, 20).map((tool, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "SoftwareApplication",
              name: tool.name,
              url: `${siteConfig.baseUrl}/tool/${tool.slug}`,
              applicationCategory: category.name,
              operatingSystem: "Web-based",
              description: tool.tagline || tool.description,
              offers: {
                "@type": "Offer",
                price: tool.priceModel === "Free" ? "0" : (tool.price ? tool.price.replace(/[^0-9.]/g, '') || "0" : "0"),
                priceCurrency: "USD",
                category: tool.priceModel || "Freemium"
              },
              ...(tool.rating ? {
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: String(tool.rating),
                  bestRating: "5",
                  worstRating: "1",
                  ratingCount: String(tool.reviewCount || 12)
                }
              } : {})
            }
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.baseUrl}/category/${category.slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "AI Tools Directory",
            item: siteConfig.baseUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Categories",
            item: `${siteConfig.baseUrl}/categories`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: category.name,
            item: `${siteConfig.baseUrl}/category/${category.slug}`
          }
        ]
      },
      ...(faqSchema ? [faqSchema] : [])
    ]
  };

  const allCategories = await getAllCategories();
  const parentCategory = category.parentId ? await getCategoryById(category.parentId) : undefined;
  const parentBreadcrumb = parentCategory ? [{ label: parentCategory.name, href: `/category/${parentCategory.slug}` }] : [];
  const subcategories = allCategories.filter(c => (c.parentId === category.id || c.parentId === category.slug) && c.status !== 'Draft');
  const siblingSubcategories = category.parentId ? allCategories.filter(c => (c.parentId === category.parentId) && c.slug !== category.slug && c.status !== 'Draft') : [];

  return (
    <main className="relative min-h-screen bg-white">
      <StructuredData data={jsonLd} />

      {/* Full-Width Commercial Category Hero Banner */}
      <CategoryHero 
        category={category} 
        categoryTools={categoryTools} 
        theme={theme} 
        hasGuide={hasGuide} 
        parentBreadcrumb={parentBreadcrumb}
      />

      <PageContainer className="py-8 md:py-12 relative">
        {/* Specialized Subcategory Explorer */}
        {subcategories.length > 0 && (
          <section className="mb-10 p-5 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-white text-xs font-medium text-[#4B5563]">
                <span className="material-symbols-outlined text-[16px] text-[#E11D48]">hub</span>
                <span>Specialized {category.name} Workflows</span>
              </div>
              <span className="text-xs text-[#6B7280] font-mono font-medium hidden sm:inline-block">
                {subcategories.length} Specialized Hubs
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {subcategories.map(sub => (
                <Link
                  key={sub.id}
                  href={`/category/${sub.slug}`}
                  className="group flex items-center justify-between p-3 rounded-md bg-white border border-[#E5E7EB] hover:border-[#E11D48] transition-all hover:shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="flex items-center justify-center w-8 h-8 rounded-md bg-[#FFF1F2] border border-[#FECDD3] text-[#E11D48] shrink-0">
                      <span className="material-symbols-outlined text-[18px]">{sub.icon || "category"}</span>
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors truncate">
                        {sub.name}
                      </div>
                      <div className="text-[10px] font-mono text-[#6B7280] truncate">
                        {sub.count || 0} verified tools
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[15px] text-[#9CA3AF] group-hover:text-[#E11D48] group-hover:translate-x-0.5 transition-all">
                    arrow_forward
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

      {/* Category Top Editorial Spotlight */}
      <CategoryHeroSpotlight 
        categorySlug={category.slug}
        categoryName={category.name}
        topTools={categoryTools}
        theme={theme}
      />

      {/* Tools Grid */}
      <div id="tools-grid">
        <ToolGridWithFilters tools={categoryTools} theme={theme} />
      </div>

      {/* Sibling Subcategories Explorer (Hub: Related Parent Workflows) */}
      {siblingSubcategories.length > 0 && (
        <section className="mt-8 mb-6 p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB]">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-[#E5E7EB] bg-white text-xs font-medium text-[#4B5563] mb-3">
            <span className="material-symbols-outlined text-[15px] text-[#E11D48]">account_tree</span>
            <span>Related {parentCategory?.name || 'Workflows'}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {siblingSubcategories.map(sub => (
              <Link
                key={sub.id}
                href={`/category/${sub.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-white border border-[#E5E7EB] text-[#0A0A0A] hover:border-[#E11D48] hover:text-[#E11D48] hover:bg-[#FFF1F2] transition-colors shadow-xs"
              >
                <span className="material-symbols-outlined text-[14px] text-[#6B7280]">{sub.icon || "category"}</span>
                <span>{sub.name}</span>
                <span className="px-1.5 py-0.2 rounded-md text-[10px] font-mono bg-[#F9FAFB] border border-[#E5E7EB] text-[#6B7280]">
                  {sub.count || 0}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Category Navigation */}
      <section className={siblingSubcategories.length > 0 ? "mb-10" : "my-10"}>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
          <span className="material-symbols-outlined text-[16px] text-[#E11D48]">explore</span>
          <span>Directory Navigation</span>
        </div>
        <h3 className="font-heading font-black text-xl text-[#0A0A0A] mb-3">Explore Other AI Tool Categories</h3>
        <CategoryCapsuleBar activeSlug={category.slug} />
      </section>

      {/* Category Rich Content */}
      <div id="category-guide" className="category-deep-dive-content">
        <CategoryGuide theme={theme} />
      </div>
      {!hasGuide && <InternalLinks theme={theme} />}
      {!hasGuide && <CategoryFAQ theme={theme} />}

      {/* Cross-Silo Resource Hub: Commercial Guides, Comparisons & Workflows */}
      <CategoryRelatedGuides 
        categorySlug={category.slug}
        categoryName={category.name}
        theme={theme}
      />

      {/* Expert Editorial Process */}
      <EEATFooter />

      {/* Social CTA */}
      <section className="text-center flex flex-col items-center mt-10 pt-10 border-t border-[#E5E7EB]">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
          <span className="material-symbols-outlined text-[16px] text-[#E11D48]">rocket_launch</span>
          <span>Community &amp; Updates</span>
        </div>
        <h3 className="font-heading font-black text-2xl md:text-3xl tracking-tight mb-2 text-[#0A0A0A]">
          Keep Discovering AI
        </h3>
        <p className="font-sans text-sm text-[#4B5563] max-w-lg mx-auto mb-6">
          Follow AIToolsHaven for new AI tools, workflows and useful AI resources.
        </p>
        <SocialLinks variant="cta" />
      </section>

    </PageContainer>
    </main>
  );
}