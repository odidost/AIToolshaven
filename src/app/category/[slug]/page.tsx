import { notFound } from "next/navigation";
import { getCategoryBySlug, getCategoryById, getAllCategories } from "@/lib/queries/categories";
import { siteConfig } from "@/lib/config/site";
import { getToolsByCategoryId } from "@/lib/data/tools-service";
import { getCategoryTheme } from "@/lib/data/categoryThemes";

import { CategoryCapsuleBar } from "@/components/shared/CategoryCapsuleBar";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolGridWithFilters } from "@/components/shared/ToolGridWithFilters";
import { CategoryHeroSpotlight } from "@/components/category/CategoryHeroSpotlight";
import { CategoryHero } from "@/components/category/CategoryHero";
import { CategoryBackground } from "@/components/category/CategoryBackground";
import { CategoryFAQ } from "@/components/category/CategoryFAQ";
import { CategoryGuide } from "@/components/category/CategoryGuide";
import { EEATFooter } from "@/components/category/EEATFooter";
import { InternalLinks } from "@/components/category/InternalLinks";
import { BackgroundPattern } from "@/components/shared/BackgroundPattern";
import { AuthorAttribution } from "@/components/shared/AuthorAttribution";
import { PageContainer } from "@/components/layout/PageContainer";
import { Metadata } from "next";
import { SocialLinks } from "@/components/shared/SocialLinks";

import { StructuredData } from "@/components/shared/StructuredData";
import { categoryGuides } from "@/content/categories";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600; // 1 hour

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
    return {
      title: "Category Not Found | AIToolsHaven",
    };
  }

  const categoryTools = await getToolsByCategoryId(category.id);
  const hasGuide = Boolean(categoryGuides[decodedSlug] || categoryGuides[category.slug]);
  const isNoIndex = category.indexable === false || (!hasGuide && categoryTools.length < 3);
  const countPrefix = categoryTools.length > 0 ? `${categoryTools.length} ` : "";

  const theme = getCategoryTheme(category.slug);
  const title = `${countPrefix}${category.name} AI Tools (2026) — Compare Best Software | AIToolsHaven`;
  const description = theme?.heroDescription || `Explore verified ${category.name} AI tools to enhance your workflow, streamline tasks, and compare pricing plans.`;

  return {
    title,
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
          alt: `${category.name} AI Tools Directory`,
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

  // Calculate some dynamic stats for the premium header
  const totalReviews = categoryTools.reduce((acc, tool) => acc + (tool.reviewCount || 0), 0);
  const avgRating = categoryTools.length 
    ? (categoryTools.reduce((acc, tool) => acc + (tool.rating || 0), 0) / categoryTools.length).toFixed(1) 
    : "N/A";
  const verifiedCount = categoryTools.filter(t => t.verified).length;
  const faqSchema = theme?.faq && theme.faq.length > 0 ? {
    "@type": "FAQPage",
    "@id": `${siteConfig.baseUrl}/category/${category.slug}#faq`,
    mainEntity: theme.faq.map((item: any) => ({
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
              description: tool.tagline || tool.description
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

  const parentCategory = category.parentId ? await getCategoryById(category.parentId) : undefined;
  const parentBreadcrumb = parentCategory ? [{ label: parentCategory.name, href: `/category/${parentCategory.slug}` }] : [];

  return (
    <PageContainer
      as="main"
      className="py-12 md:py-16 relative"
      style={{ '--category-accent': theme.accentColors.cssVar } as React.CSSProperties}
    >
      <StructuredData data={jsonLd} />
      {/* Dynamic Category Page Background */}
      {['coding-assistants', 'productivity'].includes(slug) && <BackgroundPattern type="workflow" opacity={0.02} className="fixed inset-0 text-[rgb(var(--category-accent))]" />}
      {['image-generation', 'video-creation', 'audio-voice'].includes(slug) && <BackgroundPattern type="sparkles" opacity={0.02} className="fixed inset-0 text-[rgb(var(--category-accent))]" />}
      {['text-generation', 'marketing-sales'].includes(slug) && <BackgroundPattern type="dots" opacity={0.02} className="fixed inset-0 text-[rgb(var(--category-accent))]" />}
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Breadcrumbs
          items={[
            { label: "Categories", href: "/categories" },
            ...parentBreadcrumb,
            { label: category.name },
          ]}
        />
      </nav>

      {/* Modernized Glowing Category Hero */}
      <CategoryHero 
        category={category} 
        categoryTools={categoryTools} 
        theme={theme} 
        hasGuide={Boolean(categoryGuides[decodedSlug] || categoryGuides[category.slug])} 
      />

      {/* Category Navigation */}
      <section className="mb-12">
        <h3 className="text-[13px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-4">Explore other categories</h3>
        <CategoryCapsuleBar activeSlug={category.slug} />
      </section>

      {/* Category Top Editorial Spotlight */}
      <CategoryHeroSpotlight 
        categorySlug={category.slug}
        categoryName={category.name}
        topTools={categoryTools}
      />

      {/* Tools Grid */}
      <div id="tools-grid">
        <ToolGridWithFilters tools={categoryTools} theme={theme} />
      </div>

      {/* Category Rich Content */}
      {!categoryGuides[category.slug] && <InternalLinks theme={theme} />}
      {!categoryGuides[category.slug] && <CategoryFAQ theme={theme} />}
      <div id="category-guide">
        <CategoryGuide theme={theme} />
      </div>
      <EEATFooter />

      {/* Social CTA */}
      <section className="text-center flex flex-col items-center mt-12 pt-12 border-t border-border/50">
        <h3 className="text-fluid-h3 font-bold tracking-tight mb-3 text-on-surface">
          Keep Discovering AI
        </h3>
        <p className="text-on-surface-variant max-w-lg mx-auto mb-6">
          Follow AIToolsHaven for new AI tools, workflows and useful AI resources.
        </p>
        <SocialLinks variant="cta" />
      </section>

    </PageContainer>
  );
}