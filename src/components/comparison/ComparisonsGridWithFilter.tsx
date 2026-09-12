"use client";

import { useState, useMemo } from "react";
import { ComparisonCard } from "@/components/home/ComparisonCard";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import type { ComparisonData } from "@/lib/comparisons";
import type { AITool } from "@/lib/types/tool";
import {
  Search,
  X,
  SearchX,
  LayoutGrid,
  Terminal,
  FileText,
  Palette,
  Video,
  Megaphone,
  Mic,
} from "lucide-react";

interface ComparisonsGridWithFilterProps {
  comparisons: ComparisonData[];
  allTools: AITool[];
}

type CategoryFilter = "all" | "coding" | "writing" | "image" | "video" | "sales" | "meetings";

const CATEGORY_TABS: { id: CategoryFilter; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "all", label: "All Matchups", icon: LayoutGrid },
  { id: "coding", label: "Coding & Dev", icon: Terminal },
  { id: "writing", label: "Writing & Reasoning", icon: FileText },
  { id: "image", label: "Image & Art", icon: Palette },
  { id: "video", label: "Video & Audio", icon: Video },
  { id: "sales", label: "Sales & Outreach", icon: Megaphone },
  { id: "meetings", label: "Meetings & Notes", icon: Mic },
];

export function ComparisonsGridWithFilter({ comparisons, allTools }: ComparisonsGridWithFilterProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const findTool = (compTool: { name: string }): AITool | undefined => {
    const norm = compTool.name.toLowerCase();
    return allTools.find(
      (t) =>
        t.name.toLowerCase() === norm ||
        t.slug.toLowerCase() === norm.replace(/[^a-z0-9]+/g, "-") ||
        (norm.includes("flux") && (t.slug.includes("flux") || t.name.toLowerCase().includes("flux"))) ||
        (norm.includes("cursor") && (t.slug.includes("cursor") || t.name.toLowerCase().includes("cursor")))
    );
  };

  const getMatchupCategory = (slug: string): CategoryFilter => {
    switch (slug) {
      case "cursor-vs-github-copilot":
      case "codeium-vs-cursor":
        return "coding";
      case "chatgpt-vs-claude":
      case "jasper-vs-writesonic":
        return "writing";
      case "dall-e-3-vs-midjourney":
      case "midjourney-vs-flux":
        return "image";
      case "heygen-vs-synthesia":
      case "elevenlabs-vs-murf-ai":
      case "fliki-vs-opus-clip":
        return "video";
      case "apollo-vs-instantly":
        return "sales";
      case "fathom-video-vs-tldv":
        return "meetings";
      default:
        return "all";
    }
  };

  const filteredComparisons = useMemo(() => {
    return comparisons.filter((c) => {
      // 1. Category filter
      if (activeCategory !== "all") {
        const cat = getMatchupCategory(c.slug);
        if (cat !== activeCategory) return false;
      }

      // 2. Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const titleMatch = c.title.toLowerCase().includes(q);
        const descMatch = c.description.toLowerCase().includes(q);
        const tool1Match = c.tool1.name.toLowerCase().includes(q);
        const tool2Match = c.tool2.name.toLowerCase().includes(q);
        return titleMatch || descMatch || tool1Match || tool2Match;
      }

      return true;
    });
  }, [comparisons, activeCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Search and Category Filter Toolbar */}
      <div className="mb-10 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search matchups (e.g., Claude, Cursor, Video, Voice)..."
              className="w-full pl-10 pr-10 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Counter badge */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Showing <strong className="text-slate-900 dark:text-white">{filteredComparisons.length}</strong> of {comparisons.length} verified matchups
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                  isActive
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-primary/30 hover:text-primary dark:hover:text-primary shadow-2xs"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Matchups */}
      {filteredComparisons.length > 0 ? (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerChildren={0.08}>
          {filteredComparisons.map((comparison) => {
            const fullTool1 = findTool(comparison.tool1);
            const fullTool2 = findTool(comparison.tool2);

            return (
              <StaggerItem key={comparison.slug} direction="up">
                <ComparisonCard
                  data={comparison}
                  fullTool1={fullTool1}
                  fullTool2={fullTool2}
                />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4 text-slate-400">
            <SearchX className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No matching comparisons found</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
            We couldn&apos;t find any head-to-head reviews matching &ldquo;{searchQuery}&rdquo;. Try adjusting your filters or use our custom matchup selector above.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs rounded-xl hover:opacity-90 transition-opacity"
          >
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}
