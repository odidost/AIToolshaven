"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllTools } from '@/lib/data/tools-service';
import { ToolCard } from '@/components/shared/ToolCard';
import { useBookmarks } from '@/lib/contexts/BookmarksContext';

export default function LibraryPage() {
  const { bookmarkedToolIds } = useBookmarks();
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount to render localStorage items
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const savedTools = (() => {
    if (!mounted) return [];
    
    const allTools = getAllTools();
    let filtered = allTools.filter(tool => bookmarkedToolIds.includes(tool.id));
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(q) || 
        tool.description.toLowerCase().includes(q)
      );
    }
    
    return filtered;
  })();

  if (!mounted) {
    return <div className="min-h-[400px] flex items-center justify-center">Loading your library...</div>;
  }

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-on-surface mb-1 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">collections_bookmark</span>
          My Library
        </h1>
        <p className="text-on-surface-variant text-sm">
          Tools you&apos;ve bookmarked for quick access. {bookmarkedToolIds.length} tool{bookmarkedToolIds.length !== 1 ? 's' : ''} saved.
        </p>
      </div>

      {/* Search / Filter bar */}
      {bookmarkedToolIds.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your saved tools..."
              className="w-full h-10 pl-10 pr-4 rounded-xl border border-outline bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            />
          </div>
        </div>
      )}

      {/* Tools Grid */}
      {savedTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {savedTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : bookmarkedToolIds.length > 0 ? (
        <div className="text-center py-20">
          <p className="text-on-surface-variant text-sm mb-6">
            No saved tools match your search query.
          </p>
          <button 
            onClick={() => setSearchQuery("")}
            className="text-primary hover:underline"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-outline rounded-3xl bg-surface-container">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant opacity-30 mb-4 block">bookmark_border</span>
          <h2 className="text-xl font-bold text-on-surface mb-2">No saved tools yet</h2>
          <p className="text-on-surface-variant text-sm mb-6">
            Start exploring and bookmark the tools you love!
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity text-sm">
            <span className="material-symbols-outlined text-sm">explore</span>
            Explore Tools
          </Link>
        </div>
      )}
    </div>
  );
}
