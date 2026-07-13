import { Metadata } from "next";
import { getAllCategories } from "@/lib/queries/categories";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageContainer } from "@/components/layout/PageContainer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All AI Tool Categories | AIToolsHaven",
  description: "Browse all AI tool categories. Find the best artificial intelligence tools organized by use case, from text generation to video creation.",
};

export default async function CategoriesIndexPage() {
  const categories = await getAllCategories();

  return (
    <PageContainer className="py-8 md:py-12">
      <Breadcrumbs items={[{ label: "Categories" }]} />

      <div className="max-w-3xl mb-12 mt-4">
        <div className="flex items-center gap-2 text-primary mb-2">
          <span className="material-symbols-outlined text-xl">category</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Explore</span>
        </div>
        <h1 className="text-fluid-h1 font-bold text-on-surface tracking-tight mb-4">
          All AI Categories
        </h1>
        <p className="text-xl text-on-surface-variant">
          Browse our complete directory of AI tools organized by category to find exactly what you need.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="group block h-full"
          >
            <div className="h-full bg-card border border-border rounded-[20px] p-5 hover:border-primary/30 shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150 pointer-events-none" />

                <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white shrink-0">
                        <span className="material-symbols-outlined text-[24px]">
                            {category.icon || "category"}
                        </span>
                    </div>
                    
                    <h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                        {category.name}
                    </h3>
                </div>

                <div className="mt-auto border-t border-border/50 pt-4 relative z-10">
                    <p className="text-sm font-medium text-primary flex items-center gap-2">
                        Explore Category <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </p>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
