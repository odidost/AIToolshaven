"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { curatedAlternatives } from "@/lib/data/alternatives";
import type { AITool } from "@/lib/types/tool";
import { ToolImage } from "@/components/shared/ToolImage";

type Props = {
  allTools?: AITool[];
};

type ToolCategoryFilter = "all" | "chatbots" | "coding" | "media" | "audio";

// 6 primary benchmark tools with curated alternative hubs
const FEATURED_TOOLS: { slug: string; category: ToolCategoryFilter; categoryLabel: string }[] = [
  { slug: "chatgpt", category: "chatbots", categoryLabel: "Chatbots & LLMs" },
  { slug: "cursor", category: "coding", categoryLabel: "Coding Assistants" },
  { slug: "midjourney", category: "media", categoryLabel: "Image Generation" },
  { slug: "elevenlabs", category: "audio", categoryLabel: "Voice & Speech" },
  { slug: "github-copilot", category: "coding", categoryLabel: "Coding Assistants" },
  { slug: "synthesia", category: "media", categoryLabel: "Video & Avatars" },
];

export function HomeAlternativesSection({ allTools = [] }: Props) {
  const [selectedFilter, setSelectedFilter] = useState<ToolCategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Helper to find tool metadata (logos, slug, etc.)
  const getToolMeta = (slug: string) => {
    const found = allTools.find((t) => t.slug?.toLowerCase() === slug.toLowerCase());
    return {
      name: found?.name || slug,
      slug: found?.slug || slug,
      logoUrl: found?.logoUrl,
    };
  };

  const filterTabs: { id: ToolCategoryFilter; label: string }[] = [
    { id: "all", label: "All Replacements" },
    { id: "chatbots", label: "Chatbots & LLMs" },
    { id: "coding", label: "Code & IDEs" },
    { id: "media", label: "Image & Video" },
    { id: "audio", label: "Voice & Audio" },
  ];

  const filteredItems = useMemo(() => {
    return FEATURED_TOOLS.filter((item) => {
      const page = curatedAlternatives[item.slug];
      if (!page) return false;

      // Category filter
      if (selectedFilter !== "all" && item.category !== selectedFilter) {
        return false;
      }

      // Optional text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTarget = page.toolName.toLowerCase().includes(q);
        const matchesAlt = page.alternatives.some((alt) =>
          alt.name.toLowerCase().includes(q) || alt.badge.toLowerCase().includes(q)
        );
        return matchesTarget || matchesAlt;
      }

      return true;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <section
      id="alternatives"
      className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#E5E7EB] scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
            <span className="material-symbols-outlined text-[16px] text-blue-600">swap_horiz</span>
            <span>Verified Alternatives</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
            Alternatives to Popular AI Tools
          </h2>
          <p className="mt-1 text-sm sm:text-base text-[#4B5563] max-w-xl">
            Compare proven alternatives based on specific advantages like larger context windows, live citations, open-source privacy, or free allowances.
          </p>
        </div>

        <Link
          href="/alternatives"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E11D48] hover:text-[#BE123C] transition-colors self-start sm:self-auto shrink-0"
        >
          All alternative guides
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Filter and Quick Search Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors border ${
                  isActive
                    ? "bg-[#0A0A0A] text-white border-[#0A0A0A]"
                    : "bg-white text-[#4B5563] border-[#E5E7EB] hover:border-gray-400 hover:text-[#0A0A0A]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search within alternatives */}
        <div className="relative w-full sm:w-64 shrink-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by tool name..."
            className="w-full text-xs bg-white border border-[#E5E7EB] rounded-md px-3 py-1.5 text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#E11D48] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#9CA3AF] hover:text-[#0A0A0A]"
            >
              &times;
            </button>
          )}
        </div>
      </div>

      {/* Direct Swap Cards Grid (The Multi-Hub Matrix) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map(({ slug }) => {
          const page = curatedAlternatives[slug];
          if (!page) return null;

          const targetToolMeta = getToolMeta(slug);
          // Highlight why users switch (first reason)
          const primaryDilemma = page.whySeekAlternative[0] || page.intro;

          return (
            <div
              key={slug}
              className="flex flex-col justify-between bg-white rounded-lg border border-[#E5E7EB] hover:border-gray-400 transition-all p-5 shadow-none"
            >
              <div>
                {/* Target Tool Header */}
                <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-[#F3F4F6] mb-3.5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-9 h-9 rounded-md border border-[#E5E7EB] bg-[#FAFAFA] p-1 flex items-center justify-center shrink-0">
                      <ToolImage tool={targetToolMeta} type="logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF] block leading-none mb-1">
                        Looking beyond
                      </span>
                      <h3 className="font-heading text-base font-bold text-[#0A0A0A] truncate">
                        {page.toolName}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                    {page.alternatives.length} alternatives
                  </span>
                </div>

                {/* Common Switching Trigger */}
                <div className="bg-[#F9FAFB] rounded-md border border-[#E5E7EB] p-2.5 mb-4 text-[11px] text-[#4B5563] leading-relaxed">
                  <span className="font-semibold text-[#0A0A0A] block mb-0.5 text-[10px] uppercase tracking-wider">
                    Common Switch Reason:
                  </span>
                  <span className="line-clamp-2">{primaryDilemma}</span>
                </div>

                {/* Top 3 Alternatives List */}
                <div className="space-y-2 mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4B5563] block">
                    Top Verified Competitors:
                  </span>

                  {page.alternatives.slice(0, 3).map((alt) => {
                    const altMeta = getToolMeta(alt.slug);
                    return (
                      <Link
                        key={alt.slug}
                        href={`/tool/${alt.slug}`}
                        className="group flex items-center justify-between gap-2.5 p-2 rounded-md border border-[#E5E7EB] bg-white hover:border-[#E11D48]/40 hover:bg-[#FFF1F2]/20 transition-all"
                      >
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <div className="w-6 h-6 rounded border border-[#E5E7EB] bg-white p-0.5 flex items-center justify-center shrink-0 group-hover:border-[#FECDD3]">
                            <ToolImage tool={altMeta} type="logo" className="w-full h-full object-contain" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <span className="font-semibold text-xs text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors truncate">
                                {alt.name}
                              </span>
                            </div>
                            <span className="text-[10px] text-[#6B7280] block truncate">
                              {alt.badge}
                            </span>
                          </div>
                        </div>

                        <span className="text-xs text-[#9CA3AF] group-hover:text-[#E11D48] group-hover:translate-x-0.5 transition-all shrink-0">
                          &rarr;
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer: Link to full guide */}
              <div className="pt-3 border-t border-[#F3F4F6]">
                <Link
                  href={`/alternatives/${page.slug}`}
                  className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#E11D48] hover:text-[#BE123C] transition-colors group/link"
                >
                  <span>Compare all {page.toolName} alternatives</span>
                  <ArrowRight className="w-3.5 h-3.5 group-link-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State if search matches nothing */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-[#E5E7EB]">
          <p className="text-sm text-[#4B5563] mb-3">
            No alternatives found matching &quot;{searchQuery}&quot;.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedFilter("all");
            }}
            className="text-xs font-semibold text-[#E11D48] hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Bottom Hub CTA */}
      <div className="mt-10 text-center flex justify-center">
        <Link
          href="/alternatives"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg text-sm font-semibold text-[#0A0A0A] border border-[#E5E7EB] hover:bg-[#E11D48] hover:text-white hover:border-[#E11D48] shadow-xs hover:shadow-sm transition-all group"
        >
          <span>Browse All 11 Verified Alternative Hubs</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
