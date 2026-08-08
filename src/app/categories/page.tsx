import { Metadata } from "next";
import { getAllCategories } from "@/lib/queries/categories";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageContainer } from "@/components/layout/PageContainer";
import Link from "next/link";

import { CategoryCard } from "@/components/category/CategoryCard";

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
        {categories.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </PageContainer>
  );
}
