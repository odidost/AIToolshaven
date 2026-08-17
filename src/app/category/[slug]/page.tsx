import { notFound } from "next/navigation";
import { getCategoryBySlug, getCategoryById } from "@/lib/queries/categories";
import { siteConfig } from "@/lib/config/site";
import { getToolsByCategoryId } from "@/lib/data/tools-service";
import { getCategoryTheme } from "@/lib/data/categoryThemes";

import { CategoryCapsuleBar } from "@/components/shared/CategoryCapsuleBar";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolGridWithFilters } from "@/components/shared/ToolGridWithFilters";
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

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600; // 1 hour

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
  const isNoIndex = category.indexable === false || categoryTools.length < 5;
  const countPrefix = categoryTools.length > 0 ? `${categoryTools.length} ` : "";

  const theme = getCategoryTheme(category.slug);
  const title = `${countPrefix}${category.name} AI Tools | Verified Directory & Comparison | AIToolsHaven`;
  const description = theme?.heroDescription || `Explore verified ${category.name} AI tools to enhance your workflow, streamline tasks, and compare pricing plans.`;

  return {
    title,
    description,
    robots: {
      index: !isNoIndex,
      follow: true,
    },
    alternates: {
      canonical: `${siteConfig.baseUrl}/category/${category.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${siteConfig.baseUrl}/category/${category.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.baseUrl}/category/${category.slug}#webpage`,
        url: `${siteConfig.baseUrl}/category/${category.slug}`,
        name: `Best ${category.name} AI Tools in 2026`,
        description: theme.heroDescription || category.description,
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
            name: "Home",
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
      }
    ]
  };

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
            ...(category.parentId ? await (async () => {
              const parent = await getCategoryById(category.parentId!);
              return parent ? [{ label: parent.name, href: `/category/${parent.slug}` }] : [];
            })() : []),
            { label: category.name },
          ]}
        />
      </nav>

      {/* Premium Hero Section */}
      <section className={`relative overflow-hidden rounded-[32px] border ${theme.accentColors.borderAccent} bg-gradient-to-br ${theme.accentColors.heroGradient} bg-surface-elevated p-8 md:p-12 mb-12 shadow-md backdrop-blur-md`}>
        <CategoryBackground slug={category.slug} />
        
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between relative z-10">
          <div className="max-w-3xl">
            <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${theme.accentColors.iconBg} mb-6 border ${theme.accentColors.borderAccent} shadow-sm backdrop-blur-md`}>
              <span className={`material-symbols-outlined text-4xl ${theme.accentColors.iconText}`}>
                {category.icon}
              </span>
            </div>

            <h1 className="text-fluid-h1 font-bold text-on-surface tracking-tight mb-4">
              {theme.heroHeadline}
            </h1>

            <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mb-6">
              {theme.heroDescription}
            </p>

            <AuthorAttribution />
          </div>

          {/* Stats Widget */}
          <div className="w-full lg:w-72 bg-surface/80 backdrop-blur-md rounded-2xl border border-border/50 p-6 shadow-xs flex flex-col gap-4 shrink-0 mt-4 lg:mt-0 transition-all hover:shadow-sm">
            <div className="flex justify-between items-center border-b border-border/50 pb-3">
              <span className="text-[13px] font-medium text-on-surface-variant flex items-center gap-1.5">
                <span className={`material-symbols-outlined text-[16px] ${theme.accentColors.iconText}`}>grid_view</span> {theme.statsLabels.listed}
              </span>
              <span className="font-semibold text-on-surface">{categoryTools.length}</span>
            </div>
            <div className="flex justify-between items-center border-b border-border/50 pb-3">
              <span className="text-[13px] font-medium text-on-surface-variant flex items-center gap-1.5">
                <span className={`material-symbols-outlined text-[16px] ${theme.accentColors.iconText}`}>reviews</span> Total Reviews
              </span>
              <span className="font-semibold text-on-surface">{totalReviews.toLocaleString()}+</span>
            </div>
            <div className="flex justify-between items-center border-b border-border/50 pb-3">
              <span className="text-[13px] font-medium text-on-surface-variant flex items-center gap-1.5">
                <span className={`material-symbols-outlined text-[16px] ${theme.accentColors.iconText}`}>star</span> Avg Rating
              </span>
              <span className="font-semibold text-on-surface">{avgRating} / 5.0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[13px] font-medium text-on-surface-variant flex items-center gap-1.5">
                <span className={`material-symbols-outlined text-[16px] ${theme.accentColors.iconText}`}>verified</span> Verified Tools
              </span>
              <span className="font-semibold text-on-surface">{verifiedCount}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="mb-12">
        <h3 className="text-[13px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-4">Explore other categories</h3>
        <CategoryCapsuleBar activeSlug={category.slug} />
      </section>

      {/* Tools Grid */}
      <ToolGridWithFilters tools={categoryTools} theme={theme} />

      {/* Category Rich Content */}
      <InternalLinks theme={theme} />
      <CategoryFAQ theme={theme} />
      <CategoryGuide theme={theme} />
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