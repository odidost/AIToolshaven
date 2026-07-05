import { notFound } from "next/navigation";

import { getCategoryBySlug } from "@/lib/queries/categories";
import { getToolsByCategory } from "@/lib/queries/tools";

import { ToolCard } from "@/components/shared/ToolCard";
import { CategoryCapsuleBar } from "@/components/shared/CategoryCapsuleBar";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found | AETHER",
    };
  }

  return {
    title: `Best ${category.name} AI Tools in 2026 | AETHER`,
    description: `Explore the top ${category.name} AI tools to enhance your workflow and productivity.`,
    openGraph: {
      title: `${category.name} AI Tools | AETHER`,
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

  const categoryTools = getToolsByCategory(category.id);

  return (
    <div className="container mx-auto px-4 py-8">

      <Breadcrumbs
        items={[
          { label: "Categories" },
          { label: category.name },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-2 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-4xl">
            {category.icon}
          </span>
          {category.name}
        </h1>

        <p className="text-on-surface-variant text-lg">
          Explore {category.count} tools in the {category.name} category to
          enhance your workflow.
        </p>
      </div>

      <section className="mb-10">
        <CategoryCapsuleBar activeSlug={category.slug} />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryTools.length > 0 ? (
          categoryTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-on-surface-variant">
            No tools found in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}