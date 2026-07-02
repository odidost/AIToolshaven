import { tools } from '@/lib/data/tools';
import { ToolCard } from '@/components/shared/ToolCard';

const getUserLibraryTools = () => tools.slice(0, 6);
import { ToolCard } from '@/components/shared/ToolCard';

export default function LibraryPage() {
  const savedTools = getUserLibraryTools();

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-on-surface mb-1 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">collections_bookmark</span>
          My Library
        </h1>
        <p className="text-on-surface-variant text-sm">
          Tools you&apos;ve bookmarked for quick access. {savedTools.length} tool{savedTools.length !== 1 ? 's' : ''} saved.
        </p>
      </div>

      {/* Search / Filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
          <input
            type="text"
            placeholder="Search your saved tools..."
            className="w-full h-10 pl-10 pr-4 rounded-xl border border-outline bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
          />
        </div>
        <select className="h-10 px-4 rounded-xl border border-outline bg-surface text-sm text-on-surface appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary">
          <option>All Categories</option>
          <option>Text Generation</option>
          <option>Image Generation</option>
          <option>Coding Assistants</option>
        </select>
      </div>

      {/* Tools Grid */}
      {savedTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {savedTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant opacity-30 mb-4 block">bookmark_border</span>
          <h2 className="text-xl font-bold text-on-surface mb-2">No saved tools yet</h2>
          <p className="text-on-surface-variant text-sm mb-6">
            Start exploring and bookmark the tools you love!
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
