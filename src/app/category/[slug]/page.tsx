import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/lib/queries/categories";
import { getToolsByCategoryId } from "@/lib/data/tools-service";

import { CategoryCapsuleBar } from "@/components/shared/CategoryCapsuleBar";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ToolGridWithFilters } from "@/components/shared/ToolGridWithFilters";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600; // 1 hour

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found | AIToolsHaven",
    };
  }

  return {
    title: `Best ${category.name} AI Tools in 2026 | AIToolsHaven`,
    description: `Explore the top ${category.name} AI tools to enhance your workflow and productivity.`,
    openGraph: {
      title: `${category.name} AI Tools | AIToolsHaven`,
      description: `Explore the top ${category.name} AI tools to enhance your workflow and productivity.`,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryTools = getToolsByCategoryId(category.id);

  // Calculate some dynamic stats for the premium header
  const totalReviews = categoryTools.reduce((acc, tool) => acc + (tool.reviewCount || 0), 0);
  const avgRating = categoryTools.length 
    ? (categoryTools.reduce((acc, tool) => acc + (tool.rating || 0), 0) / categoryTools.length).toFixed(1) 
    : "N/A";
  const verifiedCount = categoryTools.filter(t => t.verified).length;

  return (
    <main className="container mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Breadcrumbs
          items={[
            { label: "Categories" },
            { label: category.name },
          ]}
        />
      </nav>

      {/* Premium Hero Section */}
      <section className="relative overflow-hidden rounded-[32px] border border-border/50 bg-gradient-to-br from-surface-secondary/50 to-surface p-8 md:p-12 mb-12 shadow-sm">
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(124,58,237,0.08)_0%,transparent_70%)] rounded-full pointer-events-none -z-10" />
        
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between relative z-10">
          <div className="max-w-3xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
              <span className="material-symbols-outlined text-4xl text-primary">
                {category.icon}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-4">
              Best {category.name} AI Tools
            </h1>

            <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              Explore the top {categoryTools.length} {category.name} solutions. Compare features, pricing, and reviews to find the perfect addition to your workflow.
            </p>
          </div>

          {/* Stats Widget */}
          <div className="w-full lg:w-72 bg-surface rounded-2xl border border-border/50 p-6 shadow-xs flex flex-col gap-4 shrink-0 mt-4 lg:mt-0 transition-all hover:shadow-sm">
            <div className="flex justify-between items-center border-b border-border/50 pb-3">
              <span className="text-[13px] font-medium text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">grid_view</span> Tools Listed
              </span>
              <span className="font-semibold text-on-surface">{categoryTools.length}</span>
            </div>
            <div className="flex justify-between items-center border-b border-border/50 pb-3">
              <span className="text-[13px] font-medium text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">reviews</span> Total Reviews
              </span>
              <span className="font-semibold text-on-surface">{totalReviews.toLocaleString()}+</span>
            </div>
            <div className="flex justify-between items-center border-b border-border/50 pb-3">
              <span className="text-[13px] font-medium text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">star</span> Avg Rating
              </span>
              <span className="font-semibold text-on-surface">{avgRating} / 5.0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[13px] font-medium text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">verified</span> Verified Tools
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
      <ToolGridWithFilters tools={categoryTools} />
    </main>
  );
}