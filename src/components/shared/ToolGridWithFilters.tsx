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
      {/* Controls Bar with Editorial Pick Background Style */}
      <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-3.5 mb-6 bg-[#F9F9F6] p-3.5 sm:p-4 rounded-2xl border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
        {/* Search in this category */}
        <div className="relative flex-1 max-w-md">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#78716C] text-[16px]">
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
            className="w-full h-9 pl-9 pr-8 rounded-full bg-white border border-black/[0.07] text-sm text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#E11D48] transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#78716C] hover:text-[#0A0A0A] p-0.5"
              aria-label="Clear search"
            >
              <span className="material-symbols-outlined text-[15px]">close</span>
            </button>
          )}
        </div>

        {/* Pricing Filter Buttons & Sort */}
        <div className="flex flex-wrap items-center justify-between lg:justify-end gap-2.5 flex-1">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
            {(["all", "Free", "Freemium", "Paid", "Enterprise"] as FilterOption[]).map((option) => (
              <button
                key={option}
                onClick={() => {
                  setPricingFilter(option);
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-all shadow-2xs ${
                  pricingFilter === option
                    ? "bg-[#E11D48] text-white shadow-xs font-semibold"
                    : "bg-white text-[#57534E] border border-black/[0.07] hover:border-[#FECDD3] hover:text-[#E11D48] hover:bg-[#FFF1F2]"
                }`}
              >
                {option === "all" ? "All" : option}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[#78716C] hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value as SortOption);
                setCurrentPage(1);
              }}
              className="bg-white border border-black/[0.07] text-[#0A0A0A] text-xs font-medium rounded-full py-1.5 px-3 outline-none cursor-pointer focus:border-[#E11D48] transition-colors shadow-2xs"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results summary */}
      <div className="mb-4 flex items-center justify-between text-xs text-[#78716C] font-serif">
        <div>
          Showing <span className="font-semibold text-[#0A0A0A]">{filteredAndSortedTools.length}</span> of {tools.length} tools
          {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
          {pricingFilter !== "all" && ` with ${pricingFilter} pricing`}
        </div>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-[#E11D48] hover:underline font-medium"
          >
            Clear search
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-10">
        {paginatedTools.length > 0 ? (
          paginatedTools.map((tool, index) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              rank={sortBy === "popular" ? (currentPage - 1) * PAGE_SIZE + index + 1 : undefined}
            />
          ))
        ) : (
          <div className="col-span-full py-14 px-4 text-center bg-[#F9F9F7] rounded-2xl border border-dashed border-black/[0.1]">
            <span className="material-symbols-outlined text-3xl mb-2 block text-[#A8A29E]">
              search_off
            </span>
            <p className="text-sm font-semibold text-[#0A0A0A] font-serif">
              {searchQuery ? `No tools matching "${searchQuery}" in this view` : (theme ? theme.emptyState.message : "No tools found")}
            </p>
            <p className="text-xs text-[#78716C] mt-1 max-w-sm mx-auto font-serif">
              {searchQuery
                ? "This tool might be in another category or vertical in our directory."
                : (theme ? theme.emptyState.subMessage : "Try adjusting your search or pricing filters.")}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
              {(searchQuery || pricingFilter !== "all") && (
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setPricingFilter("all");
                  }}
                  className="px-4 py-2 bg-white border border-black/[0.08] rounded-full text-xs font-medium hover:border-[#FECDD3] hover:text-[#E11D48] hover:bg-[#FFF1F2] text-[#44403C] transition-colors shadow-2xs"
                >
                  Reset Section Filters
                </button>
              )}
              <button
                onClick={openGlobalSearch}
                className="px-4 py-2 bg-[#E11D48] text-white rounded-full text-xs font-semibold hover:bg-[#BE123C] transition-all shadow-xs flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[14px]">search</span>
                Search All 1,000+ Tools (⌘K)
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-6">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white hover:bg-[#FFF1F2] hover:border-[#FECDD3] hover:text-[#E11D48] border border-black/[0.08] rounded-full disabled:opacity-30 disabled:hover:bg-white disabled:hover:border-black/[0.08] disabled:hover:text-inherit transition-all font-medium text-xs flex items-center gap-1.5 shadow-2xs"
          >
            <span className="material-symbols-outlined text-[15px]">arrow_back</span> Prev
          </button>
          
          <span className="text-xs font-mono text-[#78716C]">
            Page <span className="font-semibold text-[#0A0A0A]">{currentPage}</span> of {totalPages}
          </span>
          
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-white hover:bg-[#FFF1F2] hover:border-[#FECDD3] hover:text-[#E11D48] border border-black/[0.08] rounded-full disabled:opacity-30 disabled:hover:bg-white disabled:hover:border-black/[0.08] disabled:hover:text-inherit transition-all font-medium text-xs flex items-center gap-1.5 shadow-2xs"
          >
            Next <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>
        </div>
      )}
    </div>
  );
}
