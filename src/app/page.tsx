import { SpotlightBanner } from '@/components/shared/SpotlightBanner';
import { CategoryCapsuleBar } from '@/components/shared/CategoryCapsuleBar';
import { ToolCard } from '@/components/shared/ToolCard';
import { tools, getFeaturedTools } from '@/lib/mock-data';

export default function Home() {
  const featuredTools = getFeaturedTools();
  // For the "Latest Tools" section, we'll just use the remaining tools that aren't featured
  const latestTools = tools.filter(t => !t.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Spotlight Banner */}
      <section className="mb-12">
        <SpotlightBanner />
      </section>

      {/* Category Capsule Bar */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-on-surface mb-4">Browse Categories</h2>
        <CategoryCapsuleBar />
      </section>

      {/* Trending/Featured Tools */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-accent">local_fire_department</span>
            Trending Tools
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Latest Additions */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">new_releases</span>
            Latest Additions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {latestTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>
    </div>
  );
}
