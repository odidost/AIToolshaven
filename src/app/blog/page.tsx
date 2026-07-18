import { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { PageContainer } from "@/components/layout/PageContainer";
import { ArticleCard } from "@/components/home/ArticleCard";

export const metadata: Metadata = {
  title: "AI Guides, Insights & Resources | AIToolsHaven Blog",
  description: "Read the latest guides, tutorials, and insights on YouTube automation, vibe coding, virtual influencers, and workflows on AIToolsHaven.",
};

export default function BlogIndexPage() {
  return (
    <PageContainer as="main" className="py-12 md:py-16">
      {/* Breadcrumbs */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-on-surface-variant">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-on-surface font-semibold">Blog</span>
      </nav>

      {/* Header */}
      <div className="mb-12 border-b border-outline pb-8">
        <div className="flex items-center gap-2 text-primary mb-3">
          <span className="material-symbols-outlined text-2xl">article</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Guides & Insights</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-on-surface tracking-tight mb-4">
          AIToolsHaven Blog
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl">
          Deep dives, tutorials, and practical playbooks to help you build virtual influencers, automate workflows, and code with AI.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            title={article.title}
            category={article.category}
            slug={article.slug}
            imageUrl={article.imageUrl}
            summary={article.summary}
          />
        ))}
      </div>

      {/* Back to Home CTA */}
      <div className="text-center border-t border-outline pt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-surface-container dark:border dark:border-outline"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Back to Homepage
        </Link>
      </div>
    </PageContainer>
  );
}
