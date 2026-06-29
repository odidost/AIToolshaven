import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getToolBySlug, getCategoryBySlug, getToolsByCategory } from '@/lib/mock-data';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { ToolCard } from '@/components/shared/ToolCard';

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

      <div className="bg-surface-container rounded-3xl p-6 md:p-10 border border-outline mb-12 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Logo & Basic Info */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-outline">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tool.imageUrl} alt={tool.name} className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Details */}
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-on-surface flex items-center gap-2 mb-2">
                  {tool.name}
                  {tool.verified && (
                    <span className="material-symbols-outlined text-primary text-2xl" title="Verified">verified</span>
                  )}
                </h1>
                <p className="text-xl text-on-surface-variant">
                  {tool.tagline}
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2">
                <div className="bg-primary-container text-on-primary-container font-semibold px-4 py-2 rounded-lg text-sm">
                  {tool.priceModel} {tool.price && <span className="opacity-75 font-normal ml-1">• {tool.price}</span>}
                </div>
                <div className="flex items-center gap-1 text-accent">
                  <span className="material-symbols-outlined">star</span>
                  <span className="font-semibold text-on-surface text-lg">{tool.rating}</span>
                  <span className="text-sm text-on-surface-variant">({tool.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-on-surface leading-relaxed mb-6">
              {tool.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {tool.tags.map(tag => (
                <span key={tag} className="bg-surface px-3 py-1 rounded-full text-sm text-on-surface-variant border border-outline">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href={tool.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover:bg-primary-foreground hover:text-primary border border-primary transition-colors flex items-center gap-2"
              >
                Visit Website
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
              <Link 
                href={`/compare/${tool.slug}`}
                className="bg-surface border border-outline text-on-surface px-8 py-3 rounded-xl font-bold hover:bg-surface-container hover:border-primary transition-colors flex items-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-sm">compare_arrows</span>
                Compare
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-on-surface mb-6">Key Features</h2>
          <ul className="space-y-3">
            {tool.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
