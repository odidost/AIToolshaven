import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getToolBySlug, getToolsByCategory, getCategoryById } from '@/lib/mock-data';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mainTool = getToolBySlug(slug);
  
  if (!mainTool) {
    notFound();
  }

  const otherTools = getToolsByCategory(mainTool.category).filter(t => t.id !== mainTool.id);
  const compareTool = otherTools.length > 0 ? otherTools[0] : null;
  const category = getCategoryById(mainTool.category);

  if (!compareTool) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Compare' }, { label: mainTool.name }]} />
        <div className="text-center text-on-surface-variant py-20">
          <span className="material-symbols-outlined text-6xl mb-4 block opacity-40">compare_arrows</span>
          <h1 className="text-2xl font-bold text-on-surface mb-2">No Comparison Available</h1>
          <p>There are no other tools in the <strong>{category?.name}</strong> category to compare with.</p>
          <Link href={`/tool/${mainTool.slug}`} className="inline-block mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
            Back to {mainTool.name}
          </Link>
        </div>
      </div>
    );
  }

  const comparisonRows: { label: string; icon: string; toolA: string; toolB: string }[] = [
    { label: "Pricing Model", icon: "payments", toolA: `${mainTool.priceModel}${mainTool.price ? ` • ${mainTool.price}` : ''}`, toolB: `${compareTool.priceModel}${compareTool.price ? ` • ${compareTool.price}` : ''}` },
    { label: "User Rating", icon: "star", toolA: `${mainTool.rating} / 5.0`, toolB: `${compareTool.rating} / 5.0` },
    { label: "Total Reviews", icon: "reviews", toolA: `${mainTool.reviewCount.toLocaleString()} reviews`, toolB: `${compareTool.reviewCount.toLocaleString()} reviews` },
    { label: "Verified", icon: "verified", toolA: mainTool.verified ? "Yes" : "No", toolB: compareTool.verified ? "Yes" : "No" },
  ];

  // Merge all unique features from both tools
  const allFeatures = Array.from(new Set([...mainTool.features, ...compareTool.features]));

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { label: category?.name || 'Category', href: category ? `/category/${category.slug}` : undefined },
        { label: `${mainTool.name} vs ${compareTool.name}` }
      ]} />

      {/* Comparison Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-3">
          Tool Comparison
        </h1>
        <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
          See how <strong>{mainTool.name}</strong> and <strong>{compareTool.name}</strong> stack up against each other.
        </p>
      </div>

      {/* Tool Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-center mb-10 max-w-4xl mx-auto">
        {/* Tool A */}
        <div className="bg-surface-container rounded-2xl p-6 border border-outline shadow-sm text-center">
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-outline mx-auto mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mainTool.imageUrl} alt={mainTool.name} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-bold text-on-surface mb-1">{mainTool.name}</h2>
          <p className="text-sm text-on-surface-variant mb-3">{mainTool.tagline}</p>
          <div className="flex items-center justify-center gap-1 text-accent mb-3">
            <span className="material-symbols-outlined text-sm">star</span>
            <span className="font-bold text-on-surface">{mainTool.rating}</span>
            <span className="text-xs text-on-surface-variant">({mainTool.reviewCount})</span>
          </div>
          <span className="inline-block bg-primary-container text-on-primary-container font-semibold px-3 py-1 rounded-lg text-xs">
            {mainTool.priceModel}
          </span>
        </div>

        {/* VS Divider */}
        <div className="flex items-center justify-center md:px-6">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-primary-foreground font-bold text-lg">VS</span>
          </div>
        </div>

        {/* Tool B */}
        <div className="bg-surface-container rounded-2xl p-6 border border-outline shadow-sm text-center">
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-outline mx-auto mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={compareTool.imageUrl} alt={compareTool.name} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-bold text-on-surface mb-1">{compareTool.name}</h2>
          <p className="text-sm text-on-surface-variant mb-3">{compareTool.tagline}</p>
          <div className="flex items-center justify-center gap-1 text-accent mb-3">
            <span className="material-symbols-outlined text-sm">star</span>
            <span className="font-bold text-on-surface">{compareTool.rating}</span>
            <span className="text-xs text-on-surface-variant">({compareTool.reviewCount})</span>
          </div>
          <span className="inline-block bg-primary-container text-on-primary-container font-semibold px-3 py-1 rounded-lg text-xs">
            {compareTool.priceModel}
          </span>
        </div>
      </div>

      {/* Comparison Matrix Table */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-surface-container rounded-2xl border border-outline overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-surface-container border-b border-outline">
            <div className="p-4 font-bold text-on-surface text-sm uppercase tracking-wider">Criteria</div>
            <div className="p-4 font-bold text-on-surface text-sm text-center border-l border-outline">{mainTool.name}</div>
            <div className="p-4 font-bold text-on-surface text-sm text-center border-l border-outline">{compareTool.name}</div>
          </div>

          {/* Comparison Rows */}
          {comparisonRows.map((row, index) => (
            <div key={row.label} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-surface' : 'bg-surface-container'} ${index < comparisonRows.length - 1 ? 'border-b border-outline' : ''}`}>
              <div className="p-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">{row.icon}</span>
                <span className="font-medium text-on-surface text-sm">{row.label}</span>
              </div>
              <div className="p-4 text-center text-on-surface-variant text-sm border-l border-outline flex items-center justify-center">
                {row.toolA}
              </div>
              <div className="p-4 text-center text-on-surface-variant text-sm border-l border-outline flex items-center justify-center">
                {row.toolB}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Comparison */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">checklist</span>
          Feature Comparison
        </h2>
        <div className="bg-surface-container rounded-2xl border border-outline overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-outline">
            <div className="p-4 font-bold text-on-surface text-sm uppercase tracking-wider">Feature</div>
            <div className="p-4 font-bold text-on-surface text-sm text-center border-l border-outline">{mainTool.name}</div>
            <div className="p-4 font-bold text-on-surface text-sm text-center border-l border-outline">{compareTool.name}</div>
          </div>

          {allFeatures.map((feature, index) => {
            const hasA = mainTool.features.includes(feature);
            const hasB = compareTool.features.includes(feature);
            return (
              <div key={feature} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-surface' : 'bg-surface-container'} ${index < allFeatures.length - 1 ? 'border-b border-outline' : ''}`}>
                <div className="p-4 text-sm text-on-surface font-medium">{feature}</div>
                <div className="p-4 text-center border-l border-outline">
                  {hasA ? (
                    <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                  ) : (
                    <span className="material-symbols-outlined text-on-surface-variant opacity-30 text-xl">cancel</span>
                  )}
                </div>
                <div className="p-4 text-center border-l border-outline">
                  {hasB ? (
                    <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                  ) : (
                    <span className="material-symbols-outlined text-on-surface-variant opacity-30 text-xl">cancel</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Verdict / CTA */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-primary-container rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-on-surface mb-3">Ready to decide?</h2>
          <p className="text-on-surface-variant mb-6 max-w-md mx-auto">
            Explore each tool in depth to find the perfect fit for your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/tool/${mainTool.slug}`}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              Explore {mainTool.name}
            </Link>
            <Link
              href={`/tool/${compareTool.slug}`}
              className="bg-surface border border-outline text-on-surface px-8 py-3 rounded-xl font-bold hover:border-primary transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              Explore {compareTool.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
