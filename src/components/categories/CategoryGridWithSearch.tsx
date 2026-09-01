"use client";

import { useState, useMemo } from "react";
import type { ToolCategory } from "@/lib/types/category";
import { CategoryCard } from "@/components/category/CategoryCard";

interface CategoryGridWithSearchProps {
  categories: ToolCategory[];
}

type FilterPill = "all" | "writing-seo" | "visual-video" | "audio-voice" | "code-agents" | "productivity-ops";

const filterClusters: Record<FilterPill, string[]> = {
  all: [],
  "writing-seo": [
    "ai-writing-tools",
    "ai-seo-tools",
    "ai-social-media-tools",
    "ai-email-productivity",
    "ai-note-taking-knowledge"
  ],
  "visual-video": [
    "ai-image-generators",
    "ai-video-generators",
    "logo-generators",
    "ai-presentation-makers"
  ],
  "audio-voice": [
    "audio-voice",
    "ai-voice-generators",
    "ai-transcription-tools",
    "ai-meeting-assistants"
  ],
  "code-agents": [
    "coding-assistants",
    "ai-agents",
    "ai-chatbots"
  ],
  "productivity-ops": [
    "productivity",
    "marketing-sales",
    "ai-sales-tools",
    "ai-research-tools",
    "ai-resume-builders",
    "ai-calendar-scheduling",
    "ai-project-management"
  ]
};

export function CategoryGridWithSearch({ categories }: CategoryGridWithSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterPill>("all");

  const filteredCategories = useMemo(() => {
    return categories.filter((category) => {
      // 1. Cluster Filter
      if (activeFilter !== "all") {
        const allowedSlugs = filterClusters[activeFilter] || [];
        if (!allowedSlugs.includes(category.slug)) {
          return false;
        }
      }

      // 2. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = category.name.toLowerCase().includes(q);
        const descMatch = category.description?.toLowerCase().includes(q);
        const slugMatch = category.slug.toLowerCase().includes(q);
        return nameMatch || descMatch || slugMatch;
      }

      return true;
    });
  }, [categories, activeFilter, searchQuery]);

  return (
    <div className="space-y-8 mb-16">
      {/* Search & Filter Controls Bar */}
      <div className="bg-surface border border-outline rounded-3xl p-4 sm:p-6 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Instant Search Box */}
        <div className="relative flex-1 max-w-md">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 25+ categories (e.g. video, writing, code)..."
            className="w-full h-11 pl-11 pr-10 rounded-2xl bg-surface-secondary/60 border border-border text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface p-1"
              aria-label="Clear search"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>

        {/* Live Matching Count */}
        <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5 self-start md:self-auto">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Showing <span className="text-on-surface font-extrabold">{filteredCategories.length}</span> of {categories.length} Categories
        </div>
      </div>

      {/* Filter Chips Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeFilter === "all"
              ? "bg-primary text-white shadow-xs scale-105"
              : "bg-surface border border-border text-on-surface-variant hover:text-on-surface hover:border-outline"
          }`}
        >
          All Categories ({categories.length})
        </button>

        <button
          onClick={() => setActiveFilter("writing-seo")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeFilter === "writing-seo"
              ? "bg-primary text-white shadow-xs scale-105"
              : "bg-surface border border-border text-on-surface-variant hover:text-on-surface hover:border-outline"
          }`}
        >
          Writing &amp; SEO
        </button>

        <button
          onClick={() => setActiveFilter("visual-video")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeFilter === "visual-video"
              ? "bg-primary text-white shadow-xs scale-105"
              : "bg-surface border border-border text-on-surface-variant hover:text-on-surface hover:border-outline"
          }`}
        >
          Visual &amp; Video
        </button>

        <button
          onClick={() => setActiveFilter("audio-voice")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeFilter === "audio-voice"
              ? "bg-primary text-white shadow-xs scale-105"
              : "bg-surface border border-border text-on-surface-variant hover:text-on-surface hover:border-outline"
          }`}
        >
          Audio &amp; Voice
        </button>

        <button
          onClick={() => setActiveFilter("code-agents")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeFilter === "code-agents"
              ? "bg-primary text-white shadow-xs scale-105"
              : "bg-surface border border-border text-on-surface-variant hover:text-on-surface hover:border-outline"
          }`}
        >
          Code &amp; Agents
        </button>

        <button
          onClick={() => setActiveFilter("productivity-ops")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeFilter === "productivity-ops"
              ? "bg-primary text-white shadow-xs scale-105"
              : "bg-surface border border-border text-on-surface-variant hover:text-on-surface hover:border-outline"
          }`}
        >
          Operations &amp; Sales
        </button>
      </div>

      {/* Categories Cards Grid */}
      {filteredCategories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-surface border border-dashed border-outline rounded-3xl">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">
            search_off
          </span>
          <h3 className="text-lg font-bold text-on-surface mb-1">No matching categories found</h3>
          <p className="text-sm text-on-surface-variant max-w-sm mx-auto mb-4">
            We couldn&apos;t find any categories matching &ldquo;{searchQuery}&rdquo;. Try a different keyword or reset your filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveFilter("all");
            }}
            className="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold hover:bg-primary/20 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
