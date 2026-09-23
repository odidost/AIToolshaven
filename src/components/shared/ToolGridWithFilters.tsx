"use client";

import { useState, useMemo } from "react";
import type { AITool } from "@/lib/types/tool";
import { ToolCard } from "@/components/shared/ToolCard";
import type { CategoryTheme } from "@/lib/data/categoryThemes";

type SortOption = "popular" | "rating" | "newest";
type FilterOption = "all" | "Free" | "Freemium" | "Paid" | "Enterprise";

type ToolGridWithFiltersProps = {
  tools: AITool[];
  theme?: CategoryTheme;
};

const PAGE_SIZE = 12;

export function ToolGridWithFilters({ tools, theme }: ToolGridWithFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [pricingFilter, setPricingFilter] = useState<FilterOption>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAndSortedTools = useMemo(() => {
    let result = [...tools];

    // Search Query Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const qNorm = q.replace(/[^a-z0-9]/g, "");
      result = result.filter((tool) => {
        const name = (tool.name || "").toLowerCase();
        const nameNorm = name.replace(/[^a-z0-9]/g, "");
        const slug = (tool.slug || "").toLowerCase();
        const tagline = (tool.tagline || "").toLowerCase();
        const desc = (tool.description || "").toLowerCase();
        const tags = Array.isArray(tool.tags) ? tool.tags.join(" ").toLowerCase() : "";

        return (
          name.includes(q) ||
          nameNorm.includes(qNorm) ||
          slug.includes(q) ||
          tagline.includes(q) ||
          tags.includes(q) ||
          desc.includes(q)
        );
      });
    }

    // Pricing Filter
    if (pricingFilter !== "all") {
      result = result.filter((tool) => tool.priceModel === pricingFilter);
    }

    // Sort
    result.sort((a, b) => {
      // Premium Sponsored Check (Overrides all other sorting)
      if (a.isSponsored && !b.isSponsored) return -1;
      if (!a.isSponsored && b.isSponsored) return 1;

      switch (sortBy) {
        case "popular": {
          const popDiff = (b.popularity || 0) - (a.popularity || 0);
          if (popDiff !== 0) return popDiff;
          if (b.verified !== a.verified) return b.verified ? 1 : -1;
          const ratingDiff = (b.rating || 0) - (a.rating || 0);
          if (ratingDiff !== 0) return ratingDiff;
          return (b.reviewCount || 0) - (a.reviewCount || 0);
        }
        case "rating": {
          const ratingDiff = (b.rating || 0) - (a.rating || 0);
          if (ratingDiff !== 0) return ratingDiff;
          return (b.popularity || 0) - (a.popularity || 0);
        }
        case "newest": {
          // using launchYear, fallback to popularity if missing
          const yearA = a.stats?.launchYear || 0;
          const yearB = b.stats?.launchYear || 0;
          if (yearA !== yearB) {
            return yearB - yearA;
          }
          return (b.popularity || 0) - (a.popularity || 0);
        }
        default:
          return 0;
      }
    });

    return result;
  }, [tools, searchQuery, sortBy, pricingFilter]);

  const paginatedTools = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredAndSortedTools.slice(start, start + PAGE_SIZE);
  }, [filteredAndSortedTools, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedTools.length / PAGE_SIZE);

  const openGlobalSearch = () => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
  };

  return (
    <div>
      {/* Controls Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 mb-8 bg-card p-4 sm:p-5 rounded-2xl border border-border shadow-xs">
        {/* Search in this category */}
        <div className="relative flex-1 max-w-md">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground text-[18px]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search tools in this section..."
            className="w-full h-10 pl-10 pr-9 rounded-xl bg-surface border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5"
              aria-label="Clear search"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          )}
        </div>

        {/* Pricing Filter Buttons & Sort */}
        <div className="flex flex-wrap items-center justify-between lg:justify-end gap-3 flex-1">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
            {(["all", "Free", "Freemium", "Paid", "Enterprise"] as FilterOption[]).map((option) => (
              <button
                key={option}
                onClick={() => {
                  setPricingFilter(option);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-200 ${
                  pricingFilter === option
                    ? "bg-[rgb(var(--category-accent))] text-white shadow-xs"
                    : "bg-surface text-muted-foreground border border-border hover:bg-muted hover:text-foreground"
                }`}
              >
                {option === "all" ? "All" : option}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value as SortOption);
                setCurrentPage(1);
              }}
              className="bg-surface border border-border text-foreground text-xs font-semibold rounded-lg focus:ring-2 focus:ring-primary py-2 px-2.5 outline-none cursor-pointer transition-all"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results summary */}
      <div className="mb-6 flex items-center justify-between text-xs text-muted-foreground font-medium">
        <div>
          Showing <span className="font-bold text-foreground">{filteredAndSortedTools.length}</span> of {tools.length} tools
          {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
          {pricingFilter !== "all" && ` with ${pricingFilter} pricing`}
        </div>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-primary hover:underline font-semibold"
          >
            Clear search
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {paginatedTools.length > 0 ? (
          paginatedTools.map((tool, index) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              rank={sortBy === "popular" ? (currentPage - 1) * PAGE_SIZE + index + 1 : undefined}
            />
          ))
        ) : (
          <div className="col-span-full py-16 px-4 text-center bg-muted/30 rounded-3xl border border-dashed border-border">
            <span className={`material-symbols-outlined text-4xl mb-3 block ${theme ? theme.accentColors.iconText : 'text-muted-foreground/50'}`}>
              search_off
            </span>
            <p className="text-base font-bold text-foreground">
              {searchQuery ? `No tools matching "${searchQuery}" in this view` : (theme ? theme.emptyState.message : "No tools found")}
            </p>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
              {searchQuery
                ? "This tool might be in another category or vertical in our directory."
                : (theme ? theme.emptyState.subMessage : "Try adjusting your search or pricing filters.")}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {(searchQuery || pricingFilter !== "all") && (
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setPricingFilter("all");
                  }}
                  className="px-4 py-2 bg-surface border border-border rounded-xl text-xs font-bold hover:bg-muted text-foreground transition-colors"
                >
                  Reset Section Filters
                </button>
              )}
              <button
                onClick={openGlobalSearch}
                className="px-4 py-2 bg-primary text-white rounded-xl text-xs font-bold hover:bg-primary/90 transition-colors shadow-xs flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">search</span>
                Search All 1,000+ Tools (⌘K)
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-surface hover:bg-muted border border-border rounded-xl disabled:opacity-30 disabled:hover:bg-surface transition-colors font-medium text-[13px] flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span> Prev
          </button>
          
          <span className="text-[13px] font-medium text-muted-foreground">
            Page <span className="text-foreground">{currentPage}</span> of {totalPages}
          </span>
          
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-surface hover:bg-muted border border-border rounded-xl disabled:opacity-30 disabled:hover:bg-surface transition-colors font-medium text-[13px] flex items-center gap-1.5"
          >
            Next <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      )}
    </div>
  );
}
