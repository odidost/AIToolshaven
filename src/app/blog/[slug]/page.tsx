import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { articles } from "@/lib/articles";
import { PageContainer } from "@/components/layout/PageContainer";
import { StructuredData } from "@/components/shared/StructuredData";

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

  return {
    title: `${article.title} | AIToolsHaven Blog`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: new Date(article.date).toISOString(),
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.summary,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "AIToolsHaven",
      logo: {
        "@type": "ImageObject",
        url: "https://aitoolshaven.com/assets/logo.png"
      }
    },
    datePublished: new Date(article.date).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aitoolshaven.com/blog/${slug}`
    }
  };

  return (
    <PageContainer as="main" className="py-12 md:py-16">
      <StructuredData data={jsonLd} />

      {/* Breadcrumbs */}
      <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-on-surface-variant">Blog</span>
        <span>/</span>
        <span className="text-on-surface font-semibold truncate max-w-[200px] sm:max-w-none">
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
            
            {/* Featured Image */}
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[380px] rounded-2xl overflow-hidden mb-8 border border-outline bg-surface shadow-sm">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-full object-cover"
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

          {/* Article Body */}
          <div 
            className="prose prose-purple max-w-none text-on-surface-variant leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* Sidebar */}
        <aside className="space-y-8 lg:sticky lg:top-24">
          {/* Newsletter Box */}
          <div className="bg-primary-container/20 border border-primary/20 rounded-3xl p-6 md:p-8">
            <span className="material-symbols-outlined text-4xl text-primary mb-4 block">mail</span>
            <h3 className="text-xl font-bold text-on-surface mb-2">Subscribe to Roundup</h3>
            <p className="text-sm text-on-surface-variant mb-6">
              Get the best new AI tools and automated workflows sent to your inbox weekly.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 px-4 rounded-xl border border-outline bg-surface text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button 
                type="submit"
                className="w-full h-12 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </form>
          </div>

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
