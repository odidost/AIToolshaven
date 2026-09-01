"use client";

import { useState, useMemo } from "react";
import { GoalCard } from "@/components/home/GoalCard";

export interface GoalItem {
  title: string;
  slug: string;
  icon: string;
  count: number;
  description: string;
}

interface GoalsGridWithFilterProps {
  goals: GoalItem[];
}

type MissionFilter = "all" | "media" | "tech" | "business" | "monetization";

const filterClusters: Record<MissionFilter, string[]> = {
  all: [],
  media: ["faceless-youtube", "ai-influencers"],
  tech: ["vibe-coding", "ai-workflows"],
  business: ["business-growth", "ai-for-marketing-agencies"],
  monetization: ["make-money-online", "ai-for-academic-research"]
};

export function GoalsGridWithFilter({ goals }: GoalsGridWithFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<MissionFilter>("all");

  const filteredGoals = useMemo(() => {
    return goals.filter((g) => {
      // 1. Cluster Filter
      if (activeFilter !== "all") {
        const allowed = filterClusters[activeFilter] || [];
        if (!allowed.includes(g.slug)) {
          return false;
        }
      }

      // 2. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const titleMatch = g.title.toLowerCase().includes(q);
        const descMatch = g.description.toLowerCase().includes(q);
        const slugMatch = g.slug.toLowerCase().includes(q);
        return titleMatch || descMatch || slugMatch;
      }

      return true;
    });
  }, [goals, activeFilter, searchQuery]);

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
            placeholder="Search goals (e.g. youtube, code, money, agency)..."
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
          Showing <span className="text-on-surface font-extrabold">{filteredGoals.length}</span> of {goals.length} Missions
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
          All Missions ({goals.length})
        </button>

        <button
          onClick={() => setActiveFilter("media")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeFilter === "media"
              ? "bg-primary text-white shadow-xs scale-105"
              : "bg-surface border border-border text-on-surface-variant hover:text-on-surface hover:border-outline"
          }`}
        >
          Media &amp; Creators
        </button>

        <button
          onClick={() => setActiveFilter("tech")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeFilter === "tech"
              ? "bg-primary text-white shadow-xs scale-105"
              : "bg-surface border border-border text-on-surface-variant hover:text-on-surface hover:border-outline"
          }`}
        >
          Coding &amp; Workflows
        </button>

        <button
          onClick={() => setActiveFilter("business")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeFilter === "business"
              ? "bg-primary text-white shadow-xs scale-105"
              : "bg-surface border border-border text-on-surface-variant hover:text-on-surface hover:border-outline"
          }`}
        >
          Business &amp; Agency
        </button>

        <button
          onClick={() => setActiveFilter("monetization")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeFilter === "monetization"
              ? "bg-primary text-white shadow-xs scale-105"
              : "bg-surface border border-border text-on-surface-variant hover:text-on-surface hover:border-outline"
          }`}
        >
          Solo Monetization
        </button>
      </div>

      {/* Goals Grid */}
      {filteredGoals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGoals.map((goal, index) => (
            <GoalCard
              key={goal.slug}
              title={goal.title}
              icon={goal.icon}
              count={goal.count}
              slug={goal.slug}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-surface border border-dashed border-outline rounded-3xl">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">
            search_off
          </span>
          <h3 className="text-lg font-bold text-on-surface mb-1">No matching goals found</h3>
          <p className="text-sm text-on-surface-variant max-w-sm mx-auto mb-4">
            We couldn&apos;t find any goals matching &ldquo;{searchQuery}&rdquo;. Try another keyword or reset your filter.
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
