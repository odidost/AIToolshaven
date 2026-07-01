import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getToolBySlug, getCategoryBySlug, getToolsByCategory } from '@/lib/mock-data';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { ToolCard } from '@/components/shared/ToolCard';
import { QuickFacts } from "@/components/tool/QuickFacts";
import { ProsCons } from "@/components/tool/ProsCons";
import { ToolHero } from "@/components/tool/ToolHero";
import { BestFor } from "@/components/tool/BestFor";

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const category = getCategoryBySlug(tool.category);
  const relatedTools = getToolsByCategory(tool.category).filter(t => t.id !== tool.id).slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { label: category?.name || 'Category', href: category ? `/category/${category.slug}` : undefined },
        { label: tool.name }
      ]} />

      <ToolHero tool={tool} />

      {/* Features section */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-on-surface mb-6">
            Key Features
          </h2>

          <ul className="space-y-3">
            {tool.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3"
              >
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <QuickFacts
          platform={tool.platform}
          api={tool.api}
          mobileApp={tool.mobileApp}
          openSource={tool.openSource}
          freeTrial={tool.freeTrial}
          priceModel={tool.priceModel}
        />
      </section>
      <ProsCons
        pros={tool.pros}
        cons={tool.cons}
      />
      <BestFor
        users={tool.bestFor}
      />
      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-on-surface mb-6">Similar Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedTools.map(t => (
              <ToolCard key={t.id} tool={t} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
