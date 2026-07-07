"use client";

import { useState, useMemo } from "react";
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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-card p-4 rounded-xl border border-border shadow-xs">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <span className="text-[13px] font-medium text-muted-foreground flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">filter_list</span>
            Pricing:
          </span>
          <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide flex-1 md:flex-none">
            {(["all", "Free", "Freemium", "Paid", "Enterprise"] as FilterOption[]).map((option) => (
              <button
                key={option}
                onClick={() => {
                  setPricingFilter(option);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 text-[13px] font-medium rounded-lg whitespace-nowrap transition-all duration-200 ${
                  pricingFilter === option
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-surface text-muted-foreground border border-border hover:bg-muted hover:text-foreground hover:shadow-xs"
                }`}
              >
                {option === "all" ? "All Models" : option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto border-t md:border-t-0 border-border pt-4 md:pt-0">
          <span className="text-[13px] font-medium text-muted-foreground flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">sort</span>
            Sort by:
          </span>
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value as SortOption);
              setCurrentPage(1);
            }}
            className="bg-surface border border-border text-foreground text-[13px] font-medium rounded-lg focus:ring-2 focus:ring-ring focus:border-ring block py-2 px-3 outline-none cursor-pointer flex-1 md:flex-none transition-all"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Results summary */}
      <div className="mb-6 text-[13px] text-muted-foreground font-medium">
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
          <div className="col-span-full py-16 text-center bg-muted/30 rounded-2xl border border-dashed border-border">
            <span className="material-symbols-outlined text-4xl text-muted-foreground/50 mb-3 block">
              search_off
            </span>
            <p className="text-[15px] font-medium text-foreground">No tools found</p>
            <p className="text-[13px] text-muted-foreground mt-1">Try adjusting your filters.</p>
            <button 
              onClick={() => {
                setPricingFilter("all");
              }}
              className="mt-4 px-4 py-2 bg-surface border border-border rounded-xl text-[13px] font-medium hover:bg-muted hover:text-foreground transition-colors"
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
