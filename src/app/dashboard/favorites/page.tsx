import { getUserLibraryTools } from '@/lib/mock-data';
import { ToolCard } from '@/components/shared/ToolCard';

export default function FavoritesPage() {
  // Reuse library tools as mock favorites for now
  const favoritedTools = getUserLibraryTools().slice(0, 3);

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-on-surface mb-1 flex items-center gap-2">
          <span className="material-symbols-outlined text-red-500">favorite</span>
          Upvoted Tools
        </h1>
        <p className="text-on-surface-variant text-sm">
          Tools you&apos;ve upvoted. {favoritedTools.length} tool{favoritedTools.length !== 1 ? 's' : ''} upvoted.
        </p>
      </div>

      {/* Tools Grid */}
      {favoritedTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {favoritedTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant opacity-30 mb-4 block">favorite_border</span>
          <h2 className="text-xl font-bold text-on-surface mb-2">No upvoted tools yet</h2>
          <p className="text-on-surface-variant text-sm mb-6">
            Upvote tools you love to help them get discovered!
          </p>
          <a href="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity text-sm">
            <span className="material-symbols-outlined text-sm">explore</span>
            Explore Tools
          </a>
        </div>
      )}
    </div>
  );
}
