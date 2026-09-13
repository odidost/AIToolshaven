import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { articles } from "@/lib/articles";
import { PageContainer } from "@/components/layout/PageContainer";
import { StructuredData } from "@/components/shared/StructuredData";
import { siteConfig } from "@/lib/config/site";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { FeaturedArticleTools } from "@/components/blog/FeaturedArticleTools";
import { ArticleHeroVisual } from "@/components/blog/ArticleHeroVisual";
import { ArticleFAQ } from "@/components/blog/ArticleFAQ";
import { ArticleArchetypeCallout } from "@/components/blog/ArticleArchetypeCallout";
import { ArticleTableOfContents } from "@/components/blog/ArticleTableOfContents";
import { ArticleTopicSilo } from "@/components/blog/ArticleTopicSilo";
import { getToolsBySlugs } from "@/lib/data/tools-service";
import { getBlogArticleFaqs } from "@/lib/blog-faqs";
import { getOptimizedBlogTitle, getOptimizedBlogDescription } from "@/lib/seo-titles";
import { processArticleHeadings, getArchetypeCalloutData, getTopicSiloData } from "@/lib/blog-archetypes";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return { title: "Article Not Found | AIToolsHaven" };
  }

  const base = (siteConfig.baseUrl || "https://aitoolshaven.com").replace(/\/$/, "");
  const ogImageUrl = article.imageUrl
    ? (article.imageUrl.startsWith("http")
        ? article.imageUrl
        : `${base}${article.imageUrl.startsWith("/") ? "" : "/"}${article.imageUrl}`)
    : `${base}${siteConfig.ogImage}`;

  const pageUrl = `${base}/blog/${article.slug}`;
  const title = getOptimizedBlogTitle(article.title, article.slug);
  const description = getOptimizedBlogDescription(article.summary);

  return {
    title: {
      absolute: title,
    },
    description,
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
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: pageUrl,
      siteName: siteConfig.name,
      publishedTime: new Date(article.date).toISOString(),
      authors: [article.author],
      images: [
        {
          url: ogImageUrl,
          secureUrl: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const sameCategory = articles.filter(
    (a) => a.slug !== slug && a.category.toLowerCase() === article.category.toLowerCase()
  );
  const otherCategory = articles.filter(
    (a) => a.slug !== slug && a.category.toLowerCase() !== article.category.toLowerCase()
  );
  const relatedArticles = [...sameCategory, ...otherCategory].slice(0, 4);

  // Extract all mentioned tool slugs from article.content
  const toolSlugMatches = Array.from(article.content.matchAll(/href="\/tool\/([a-zA-Z0-9_-]+)"/g));
  const mentionedToolSlugs = Array.from(new Set(toolSlugMatches.map((m) => m[1]))).slice(0, 6);
  
  let mentionedTools: any[] = [];
  if (mentionedToolSlugs.length > 0) {
    try {
      mentionedTools = await getToolsBySlugs(mentionedToolSlugs);
    } catch (e) {
      console.error("Error loading mentioned tools for article", e);
      mentionedTools = [];
    }
  }

  const articleUrl = `${siteConfig.baseUrl}/blog/${slug}`;
  const articleImageUrl = article.imageUrl.startsWith("http")
    ? article.imageUrl
    : `${siteConfig.baseUrl}${article.imageUrl}`;

  const { contentWithAnchors, tableOfContents } = processArticleHeadings(article.content);
  const archetypeCallout = getArchetypeCalloutData(article);
  const topicSilo = getTopicSiloData(article);

  const faqs = getBlogArticleFaqs(article);
  const faqSchema = faqs && faqs.length > 0 ? {
    "@type": "FAQPage",
    "@id": `${articleUrl}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  } : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${articleUrl}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        headline: article.title,
        description: article.summary,
        inLanguage: "en-US",
        mainEntityOfPage: articleUrl,
        datePublished: new Date(article.date).toISOString(),
        dateModified: new Date(article.date).toISOString(),
        isAccessibleForFree: true,
        about: {
          "@type": "Thing",
          name: topicSilo.categoryName,
          url: `${siteConfig.baseUrl}/category/${topicSilo.categorySlug}`,
        },
        author: {
          "@type": "Person",
          name: article.author,
          url: `${siteConfig.baseUrl}/about`,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.baseUrl,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.baseUrl}/assets/logo.png`,
          },
          sameAs: [
            siteConfig.socialLinks.x,
            siteConfig.socialLinks.facebook,
            siteConfig.socialLinks.youtube,
          ].filter(Boolean),
        },
        image: {
          "@type": "ImageObject",
          url: articleImageUrl,
          caption: article.title,
        },
        articleSection: article.category,
        keywords: [
          article.category,
          "AI Tools",
          "B2B Sales",
          "Artificial Intelligence",
          "Workflow Automation",
          "Tech Stack 2026",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "AI Tools Directory",
            item: siteConfig.baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog & Guides",
            item: `${siteConfig.baseUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: articleUrl,
          },
        ],
      },
      ...(faqSchema ? [faqSchema] : []),
    ],
  };

  return (
    <PageContainer as="main" className="py-12 md:py-16">
      <StructuredData data={jsonLd} />

      {/* Breadcrumbs */}
      <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
        <Link href="/" className="hover:text-primary transition-colors font-medium">
          AI Tools Directory
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary transition-colors font-medium">
          Blog &amp; Guides
        </Link>
        <span>/</span>
        <span className="text-on-surface font-semibold line-clamp-1 max-w-md">
          {article.title}
        </span>
      </nav>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
        {/* Main Content */}
        <article className="bg-surface-container border border-outline rounded-3xl p-6 sm:p-10 shadow-sm">
          {/* Header */}
          <header className="mb-8 border-b border-outline pb-8">
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-primary-container text-on-primary-container px-3 py-1.5 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-on-surface leading-tight tracking-tight mb-6">
              {article.title}
            </h1>
            
            {/* Featured Visual Banner */}
            <div className="relative w-full h-[220px] sm:h-[320px] md:h-[400px] rounded-3xl overflow-hidden mb-8 border border-outline bg-surface shadow-sm group">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="font-semibold text-on-surface">{article.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </header>

          {/* Mobile Table of Contents */}
          <ArticleTableOfContents items={tableOfContents} variant="inline" />

          {/* Archetype-Specific Executive Callout */}
          <ArticleArchetypeCallout data={archetypeCallout} />

          {/* Article Body */}
          <div 
            className="prose prose-lg prose-slate max-w-none text-on-surface-variant/90 leading-[1.9] space-y-7 mb-12 
              [&>p]:text-[17px] [&>p]:leading-[1.9] [&>p]:mb-6 [&>p]:font-normal
              [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-extrabold [&>h2]:text-on-surface [&>h2]:mt-14 [&>h2]:mb-6 [&>h2]:pt-6 [&>h2]:border-t [&>h2]:border-outline/50
              [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-bold [&>h3]:text-on-surface [&>h3]:mt-10 [&>h3]:mb-4
              [&>ul]:space-y-3 [&>ul]:my-6 [&>ul]:pl-6
              [&>ol]:space-y-3 [&>ol]:my-6 [&>ol]:pl-6
              [&>li]:text-[16.5px] [&>li]:leading-[1.8]
              [&_strong]:text-on-surface [&_strong]:font-bold
              [&_a]:text-primary [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary/80"
            dangerouslySetInnerHTML={{ __html: contentWithAnchors }}
          />

          {/* Topic Cluster Silo Bridge */}
          <ArticleTopicSilo data={topicSilo} variant="footer" />

          {/* Frequently Asked Questions */}
          <ArticleFAQ faqs={faqs} />

          {/* Featured Tools Mentioned in this Guide */}
          {mentionedTools.length > 0 && (
            <FeaturedArticleTools tools={mentionedTools} />
          )}

          {/* Social CTA */}
          <div className="mt-12 pt-8 border-t border-outline">
            <h3 className="text-xl font-bold text-on-surface mb-2">
              Follow AIToolsHaven
            </h3>
            <p className="text-sm text-on-surface-variant mb-4">
              Get more AI tool discoveries, comparisons, resources and updates.
            </p>
            <SocialLinks variant="cta" />
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8 lg:sticky lg:top-24">

          {/* Desktop Table of Contents */}
          <div className="hidden lg:block">
            <ArticleTableOfContents items={tableOfContents} variant="sidebar" />
          </div>

          {/* Topic Cluster & Directory Pillar Card */}
          <ArticleTopicSilo data={topicSilo} variant="sidebar" />

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="bg-surface-container border border-outline rounded-3xl p-6">
              <h3 className="text-lg font-bold text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-md">menu_book</span>
                Related Guides
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((rel) => (
                  <Link 
                    key={rel.slug} 
                    href={`/blog/${rel.slug}`}
                    className="block group"
                  >
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2 text-sm">
                      {rel.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to Homepage
          </Link>
        </aside>
      </div>
    </PageContainer>
  );
}
