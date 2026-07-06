"use client";

import { useState, useMemo, useEffect } from "react";
import type { AITool } from "@/lib/types/tool";
import { ToolCard } from "@/components/shared/ToolCard";

type SortOption = "popular" | "rating" | "newest";
type FilterOption = "all" | "Free" | "Freemium" | "Paid" | "Enterprise";

type ToolGridWithFiltersProps = {
  tools: AITool[];
};

const PAGE_SIZE = 12;

export function ToolGridWithFilters({ tools }: ToolGridWithFiltersProps) {
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [pricingFilter, setPricingFilter] = useState<FilterOption>("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, pricingFilter]);

  const filteredAndSortedTools = useMemo(() => {
    let result = [...tools];

    // Filter
    if (pricingFilter !== "all") {
      result = result.filter((tool) => tool.priceModel === pricingFilter);
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return (b.popularity || 0) - (a.popularity || 0);
        case "rating":
          return b.rating - a.rating;
        case "newest":
          // using launchYear, fallback to popularity if missing
          const yearA = a.stats?.launchYear || 0;
          const yearB = b.stats?.launchYear || 0;
          if (yearA !== yearB) {
            return yearB - yearA;
          }
          return (b.popularity || 0) - (a.popularity || 0);
        default:
          return 0;
      }
    });

    return result;
  }, [tools, sortBy, pricingFilter]);

  const paginatedTools = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredAndSortedTools.slice(start, start + PAGE_SIZE);
  }, [filteredAndSortedTools, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedTools.length / PAGE_SIZE);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-surface-container p-4 rounded-2xl border border-outline shadow-sm">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <span className="text-sm font-medium text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Pricing:
          </span>
          <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide flex-1 md:flex-none">
            {(["all", "Free", "Freemium", "Paid", "Enterprise"] as FilterOption[]).map((option) => (
              <button
                key={option}
                onClick={() => setPricingFilter(option)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                  pricingFilter === option
                    ? "bg-primary text-primary-foreground"
                    : "bg-surface text-on-surface-variant border border-outline hover:border-primary/50 hover:text-primary"
                }`}
              >
                {option === "all" ? "All Models" : option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto border-t md:border-t-0 border-outline pt-4 md:pt-0">
          <span className="text-sm font-medium text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">sort</span>
            Sort by:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-surface border border-outline text-on-surface text-sm rounded-lg focus:ring-primary focus:border-primary block p-2 outline-none cursor-pointer flex-1 md:flex-none"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Results summary */}
      <div className="mb-6 text-sm text-on-surface-variant font-medium">
        Showing {filteredAndSortedTools.length} {filteredAndSortedTools.length === 1 ? 'tool' : 'tools'}
        {pricingFilter !== "all" && ` with ${pricingFilter} pricing`}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {paginatedTools.length > 0 ? (
          paginatedTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))
        ) : (
          <div className="col-span-full py-16 text-center bg-surface-container rounded-2xl border border-dashed border-outline">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant/50 mb-3 block">
              search_off
            </span>
            <p className="text-lg font-medium text-on-surface">No tools found</p>
            <p className="text-on-surface-variant">Try adjusting your filters.</p>
            <button 
              onClick={() => {
                setPricingFilter("all");
              }}
              className="mt-4 px-4 py-2 bg-surface border border-outline rounded-xl text-sm font-medium hover:bg-surface-container hover:text-primary transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-surface hover:bg-surface-container border border-outline rounded-xl disabled:opacity-30 disabled:hover:bg-surface transition-colors font-semibold text-sm flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span> Prev
          </button>
          
          <span className="text-sm font-semibold text-on-surface-variant">
            Page <span className="text-on-surface">{currentPage}</span> of {totalPages}
          </span>
          
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-surface hover:bg-surface-container border border-outline rounded-xl disabled:opacity-30 disabled:hover:bg-surface transition-colors font-semibold text-sm flex items-center gap-1"
          >
            Next <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      )}
    </div>
  );
}
