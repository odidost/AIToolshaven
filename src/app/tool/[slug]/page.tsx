import { notFound, redirect } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolHero } from "@/components/tool/ToolHero";
import { ToolOverview } from "@/components/tool/ToolOverview";
import { UseCases } from "@/components/tool/UseCases";
import { FeatureGrid } from "@/components/tool/FeatureGrid";
import { ProsCons } from "@/components/tool/ProsCons";
import ToolComparisonSection from "@/components/tool/ToolComparisonSection";
import { PricingPlans } from "@/components/tool/PricingPlans";
import { ToolSidebar } from "@/components/tool/ToolSidebar";
import { StructuredData } from "@/components/shared/StructuredData";
import { WorkflowCard } from "@/components/home/WorkflowCard";
import { GoalCard } from "@/components/home/GoalCard";
import { ToolReviews } from "@/components/tool/ToolReviews";
import { ToolFAQ } from "@/components/tool/ToolFAQ";
import { ToolShareEmbed } from "@/components/tool/ToolShareEmbed";
import { ExpertVerdict } from "@/components/tool/ExpertVerdict";
import { HandsOnExperience } from "@/components/tool/HandsOnExperience";
import { RecentlyViewedTracker } from "@/components/tool/ToolCommunityFeatures";
import { workflows } from "@/lib/workflows";
import { goals } from "@/lib/goals";
import {
  getToolBySlug,
  getAllTools,
  getRelatedCandidatesPool,
  getToolReviews,
} from "@/lib/data/tools-service";
import { getDeterministicRelatedTools } from "@/lib/data/related-tools";
import {
  getAllCategories,
  getCategoryById,
} from "@/lib/queries/categories";
import { getComparisonCandidates } from "@/lib/queries/comparisons";
import { siteConfig } from "@/lib/config/site";
import { PageContainer } from "@/components/layout/PageContainer";
import { Metadata } from "next";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { logToolSectionError } from "@/lib/observability/logger";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 86400; // 24 hours

export async function generateStaticParams() {
  const tools = await getAllTools(false);
  return tools.filter(t => t.slug).map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);

  const isPublished = tool && (tool.status === "Published" || tool.status === "published" || !tool.status);
  if (!tool || !isPublished) {
    return {
      title: `Tool Not Found | ${siteConfig.name}`,
    };
  }

  const pageTitle = (tool as any).seoTitle
    ? (tool as any).seoTitle.replace(` | ${siteConfig.name}`, '')
    : `${tool.name} Review, Pricing & Features (2026)`;
  const desc = (tool as any).metaDescription || tool.description || tool.tagline || `Learn more about ${tool.name} on ${siteConfig.name}.`;
  const previewImg = tool.screenshotUrl || tool.logoUrl || siteConfig.ogImage;

  return {
    title: pageTitle,
    description: desc,
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
    openGraph: {
      title: `${tool.name} | ${siteConfig.name}`,
      description: desc,
      type: "website",
      url: `${siteConfig.baseUrl}/tool/${tool.slug}`,
      images: [
        {
          url: previewImg,
          width: 1200,
          height: 630,
          alt: `${tool.name} AI Tool Overview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} | ${siteConfig.name}`,
      description: desc,
      images: [previewImg],
    },
    alternates: {
      canonical: `${siteConfig.baseUrl}/tool/${tool.slug}`,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  let tool = await getToolBySlug(slug);

  // If not found by exact slug, check if a tool exists with alias, prefix, or name match
  if (!tool) {
    const all = await getAllTools(true);
    const candidate = all.find(t => 
      t.slug.toLowerCase() === slug.toLowerCase() ||
      t.slug.toLowerCase().startsWith(`${slug.toLowerCase()}-`) ||
      slug.toLowerCase().startsWith(`${t.slug.toLowerCase()}-`) ||
      t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug.toLowerCase()
    );
    if (candidate && candidate.slug && candidate.slug !== slug) {
      redirect(`/tool/${candidate.slug}`);
    }
  }

  // Critical identity / draft protection guard
  const isPublished = tool && (tool.status === "Published" || tool.status === "published" || !tool.status);
  if (!tool || !isPublished) {
    notFound();
  }

  // 1. Safe Category Resolution
  let category = null;
  if (tool.category) {
    try {
      category = await getCategoryById(tool.category);
    } catch (err) {
      logToolSectionError(tool.slug, 'category', err);
      category = null;
    }
  }

  // 2. Safe Categories List
  let categories: any[] = [];
  try {
    categories = await getAllCategories();
  } catch (err) {
    logToolSectionError(tool.slug, 'categories_list', err);
    categories = [];
  }

  // 3. Safe Bounded Related Tools Resolution (Optimized Query)
  let relatedTools: any[] = [];
  try {
    const candidatePool = await getRelatedCandidatesPool(tool);
    relatedTools = getDeterministicRelatedTools(tool, candidatePool, 4);
  } catch (err) {
    logToolSectionError(tool.slug, 'related_tools', err);
    relatedTools = [];
  }

  // 4. Safe Comparisons Resolution
  let comparisonTools: any[] = [];
  try {
    comparisonTools = getComparisonCandidates(tool);
  } catch (err) {
    logToolSectionError(tool.slug, 'comparisons', err);
    comparisonTools = [];
  }

  // 5. Safe Workflows Resolution
  let toolWorkflows: any[] = [];
  try {
    toolWorkflows = workflows.filter(
      (w) => w.tools.includes(tool.name) || (tool.workflows && tool.workflows.includes(w.slug))
    );
  } catch (err) {
    logToolSectionError(tool.slug, 'workflows', err);
    toolWorkflows = [];
  }

  // 6. Safe Goals Resolution
  let toolGoals: any[] = [];
  try {
    toolGoals = goals.filter(
      (g) => tool.goals && tool.goals.includes(g.slug)
    );
  } catch (err) {
    logToolSectionError(tool.slug, 'goals', err);
    toolGoals = [];
  }

  // 7. Safe Server-Side Reviews Resolution
  let jsonLdReviews: any[] = [];
  try {
    const reviews = await getToolReviews(tool.slug);
    if (Array.isArray(reviews) && reviews.length > 0) {
      jsonLdReviews = reviews.map((review: any) => ({
        "@type": "Review",
        author: { "@type": "Person", name: review.profiles?.username || "Anonymous" },
        datePublished: review.created_at ? new Date(review.created_at).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
        reviewBody: review.content || "",
        reviewRating: { "@type": "Rating", ratingValue: (review.rating || 5).toString() }
      }));
    }
  } catch (err) {
    logToolSectionError(tool.slug, 'reviews', err);
    jsonLdReviews = [];
  }

  const rawPrice = typeof tool.price === 'string' ? tool.price : '';
  const priceValue = rawPrice === "From $0" || rawPrice.toLowerCase().includes("free") ? "0.00" : rawPrice.replace(/[^0-9.]/g, "") || "0.00";

  const toolFaqSchema = tool.editorial?.faqs && tool.editorial.faqs.length > 0 ? {
    "@type": "FAQPage",
    "@id": `${siteConfig.baseUrl}/tool/${tool.slug}#faq`,
    mainEntity: tool.editorial.faqs.map((f: any) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  } : null;

  // 8. Safe Structured Data Generation
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: tool.name,
        description: tool.description || tool.tagline || "",
        applicationCategory: category?.name || "BusinessApplication",
        operatingSystem: tool.platform || "Web-based",
        offers: {
          "@type": "Offer",
          price: priceValue,
          priceCurrency: "USD",
        },
        aggregateRating: (tool.reviewCount && tool.reviewCount > 0 && tool.rating) ? {
          "@type": "AggregateRating",
          ratingValue: tool.rating.toString(),
          ratingCount: tool.reviewCount.toString(),
        } : undefined,
        review: jsonLdReviews.length > 0 ? jsonLdReviews : undefined,
        url: tool.websiteUrl || `${siteConfig.baseUrl}/tool/${tool.slug}`,
        image: tool.logoUrl ? `${siteConfig.baseUrl}${tool.logoUrl}` : undefined,
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.baseUrl}/tool/${tool.slug}`,
        url: `${siteConfig.baseUrl}/tool/${tool.slug}`,
        name: `${tool.name} Reviews, Pricing & Features`,
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.baseUrl,
          sameAs: [
            siteConfig.socialLinks.x,
            siteConfig.socialLinks.facebook,
            siteConfig.socialLinks.youtube
          ].filter(Boolean)
        }
      },
      {
        "@type": "BreadcrumbList",
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
            name: category?.name || "Categories",
            item: category ? `${siteConfig.baseUrl}/category/${category.slug}` : `${siteConfig.baseUrl}/categories`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: tool.name
          }
        ]
      },
      ...(toolFaqSchema ? [toolFaqSchema] : [])
    ]
  };

  return (
    <PageContainer className="py-8 md:py-12">
      <RecentlyViewedTracker toolSlug={tool.slug} />
      <StructuredData data={jsonLd} />
      <div>
        <Breadcrumbs
          items={[
            {
              label: category?.name || "Categories",
              href: category ? `/category/${category.slug}` : "/categories",
            },
            { label: tool.name },
          ]}
        />
      </div>

      <ToolHero tool={tool} />

      {/* Grid containing content with sidebar */}
      <div className="mt-16 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-10">
        <main className="min-w-0">
          <ToolOverview
            tool={tool}
          />

          <ExpertVerdict tool={tool} />

          <HandsOnExperience tool={tool} />

          <ProsCons pros={tool.pros} cons={tool.cons} />

          <UseCases tool={tool} useCases={tool.useCases} />

          <FeatureGrid features={tool.features} />

          <PricingPlans tool={tool} plans={tool.pricingPlans} pricing={tool.pricing} />

          {comparisonTools.length > 0 && (
            <ToolComparisonSection
              tool={tool}
              comparisonTools={comparisonTools}
            />
          )}
        </main>

        <div className="min-w-0">
          <ToolSidebar
            tool={tool}
            relatedTools={relatedTools}
            categories={categories}
            currentCategory={category || undefined}
          />
        </div>
      </div>

      {/* Full-width sections at the bottom */}
      <div className="mt-16 space-y-16 border-t border-border/50 pt-16">
        {toolWorkflows.length > 0 && (
          <section>
            <h3 className="text-fluid-h3 font-bold tracking-tight mb-6 text-on-surface">Workflows Using {tool.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolWorkflows.map(w => (
                <WorkflowCard 
                  key={w.slug} 
                  title={w.title} 
                  tools={w.tools.map((t: any) => ({
                    name: typeof t === 'string' ? t : t?.name || 'AI Tool',
                    logoUrl: undefined,
                    slug: typeof t === 'string' ? t.toLowerCase().replace(/[^a-z0-9]+/g, '-') : (t?.slug || 'ai-tool')
                  }))} 
                  icon={w.icon} 
                  slug={w.slug} 
                  description={w.description}
                  audience={w.audience}
                  meta={w.meta}
                  color={w.color}
                />
              ))}
            </div>
          </section>
        )}

        {toolGoals.length > 0 && (
          <section>
            <h3 className="text-fluid-h3 font-bold tracking-tight mb-6 text-on-surface">Related Goals & Use Cases</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {toolGoals.map(g => (
                <GoalCard key={g.slug} title={g.title} icon={g.icon} count={g.count} slug={g.slug} />
              ))}
            </div>
          </section>
        )}

        <ToolFAQ tool={tool} />

        <ToolReviews tool={tool} />

        <ToolShareEmbed tool={tool} />

        {/* Social CTA */}
        <section className="text-center flex flex-col items-center pt-8 border-t border-border/50">
          <h3 className="text-fluid-h3 font-bold tracking-tight mb-3 text-on-surface">
            Discover More AI Tools
          </h3>
          <p className="text-on-surface-variant max-w-lg mx-auto mb-6">
            Follow AIToolsHaven for new AI tools, reviews, comparisons and resources.
          </p>
          <SocialLinks variant="cta" />
        </section>
      </div>
    </PageContainer>
  );
}