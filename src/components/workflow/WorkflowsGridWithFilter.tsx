"use client";

import { useState, useMemo } from "react";
import { WorkflowCard } from "@/components/home/WorkflowCard";
import type { Workflow } from "@/lib/workflows";
import type { AITool } from "@/lib/types/tool";

interface WorkflowsGridWithFilterProps {
  workflows: Workflow[];
  allTools: AITool[];
  toolLogos: Record<string, string>;
}

type AudienceFilter = "all" | "creator" | "marketing" | "developer" | "founder";

export function WorkflowsGridWithFilter({
  workflows,
  allTools,
  toolLogos,
}: WorkflowsGridWithFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAudience, setActiveAudience] = useState<AudienceFilter>("all");

  const filteredWorkflows = useMemo(() => {
    return workflows.filter((w) => {
      // 1. Audience filter
      if (activeAudience !== "all") {
        const audLower = (w.audience || "").toLowerCase();
        const titleLower = w.title.toLowerCase();
        const descLower = w.description.toLowerCase();
        const combined = `${audLower} ${titleLower} ${descLower}`;

        if (activeAudience === "creator" && !combined.includes("creator") && !combined.includes("video") && !combined.includes("podcast") && !combined.includes("youtube")) {
          return false;
        }
        if (activeAudience === "marketing" && !combined.includes("market") && !combined.includes("seo") && !combined.includes("growth") && !combined.includes("social")) {
          return false;
        }
        if (activeAudience === "developer" && !combined.includes("dev") && !combined.includes("code") && !combined.includes("engineer") && !combined.includes("tech")) {
          return false;
        }
        if (activeAudience === "founder" && !combined.includes("founder") && !combined.includes("solopreneur") && !combined.includes("business") && !combined.includes("startup")) {
          return false;
        }
      }

      // 2. Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const titleMatch = w.title.toLowerCase().includes(q);
        const descMatch = w.description.toLowerCase().includes(q);
        const toolMatch = w.tools.some(t => t.toLowerCase().includes(q));
        const audMatch = w.audience?.toLowerCase().includes(q);
        return titleMatch || descMatch || toolMatch || audMatch;
      }

      return true;
    });
  }, [workflows, activeAudience, searchQuery]);

  return (
    <div className="space-y-8">
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
            placeholder="Search workflows (e.g. podcast, seo, code, video)..."
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
          Showing <span className="text-on-surface font-extrabold">{filteredWorkflows.length}</span> of {workflows.length} Blueprints
        </div>
      </div>

      {/* Audience Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setActiveAudience("all")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeAudience === "all"
              ? "bg-primary text-white shadow-xs scale-105"
              : "bg-surface border border-border text-on-surface-variant hover:text-on-surface hover:border-outline"
          }`}
        >
          All Blueprints ({workflows.length})
        </button>

        <button
          onClick={() => setActiveAudience("creator")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeAudience === "creator"
              ? "bg-primary text-white shadow-xs scale-105"
              : "bg-surface border border-border text-on-surface-variant hover:text-on-surface hover:border-outline"
          }`}
        >
          Creators &amp; Video
        </button>

        <button
          onClick={() => setActiveAudience("marketing")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeAudience === "marketing"
              ? "bg-primary text-white shadow-xs scale-105"
              : "bg-surface border border-border text-on-surface-variant hover:text-on-surface hover:border-outline"
          }`}
        >
          Marketing &amp; SEO
        </button>

        <button
          onClick={() => setActiveAudience("developer")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeAudience === "developer"
              ? "bg-primary text-white shadow-xs scale-105"
              : "bg-surface border border-border text-on-surface-variant hover:text-on-surface hover:border-outline"
          }`}
        >
          Developers &amp; Tech
        </button>

        <button
          onClick={() => setActiveAudience("founder")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeAudience === "founder"
              ? "bg-primary text-white shadow-xs scale-105"
              : "bg-surface border border-border text-on-surface-variant hover:text-on-surface hover:border-outline"
          }`}
        >
          Founders &amp; Solopreneurs
        </button>
      </div>

      {/* Workflows Grid */}
      {filteredWorkflows.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredWorkflows.map((workflow) => (
            <WorkflowCard
              key={workflow.slug}
              title={workflow.title}
              tools={workflow.tools.map((t) => {
                const fullTool = allTools.find(at => at.name.toLowerCase() === t.toLowerCase());
                return {
                  name: t,
                  logoUrl: toolLogos[t.toLowerCase()] || undefined,
                  slug: fullTool?.slug || t.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                  fullTool
                };
              })}
              icon={workflow.icon}
              slug={workflow.slug}
              description={workflow.description}
              audience={workflow.audience}
              meta={workflow.meta}
              color={workflow.color}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-surface border border-dashed border-outline rounded-3xl">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">
            search_off
          </span>
          <h3 className="text-lg font-bold text-on-surface mb-1">No matching workflows found</h3>
          <p className="text-sm text-on-surface-variant max-w-sm mx-auto mb-4">
            We couldn&apos;t find any workflows matching &ldquo;{searchQuery}&rdquo;. Try another keyword or reset filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveAudience("all");
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
