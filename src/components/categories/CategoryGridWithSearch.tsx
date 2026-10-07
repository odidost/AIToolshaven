"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { ToolCategory } from "@/lib/types/category";
import { CategoryCard } from "@/components/category/CategoryCard";

interface CategoryGridWithSearchProps {
  categories: ToolCategory[];
}

export type DomainClusterId =
  | "all"
  | "code-agents"
  | "visual-media"
  | "writing-content"
  | "audio-voice"
  | "productivity-ops"
  | "marketing-sales"
  | "research-careers";

export interface DomainMeta {
  id: DomainClusterId;
  label: string;
  icon: string;
  description: string;
}

export const DOMAIN_METAS: DomainMeta[] = [
  {
    id: "all",
    label: "All Categories",
    icon: "grid_view",
    description: "Browse the complete directory taxonomy of verified AI software across every use-case.",
  },
  {
    id: "code-agents",
    label: "Code & Agents",
    icon: "terminal",
    description: "AI coding assistants, vibe coding environments, autonomous agents, and LLM chat interfaces.",
  },
  {
    id: "visual-media",
    label: "Creative & Visual Media",
    icon: "movie",
    description: "Generative image engines, video creators, talking avatars, upscalers, and brand design.",
  },
  {
    id: "writing-content",
    label: "Writing, Content & SEO",
    icon: "edit_note",
    description: "Long-form writing assistants, SEO research suites, script writers, and AI humanizers.",
  },
  {
    id: "audio-voice",
    label: "Audio, Voice & Speech",
    icon: "mic",
    description: "Voice synthesizers, automated transcription, speech translation, and audio editors.",
  },
  {
    id: "productivity-ops",
    label: "Productivity & Operations",
    icon: "bolt",
    description: "Meeting assistants, second brains, automated scheduling, smart email, and presentation decks.",
  },
  {
    id: "marketing-sales",
    label: "Marketing & Sales",
    icon: "campaign",
    description: "B2B sales automation, multi-channel marketing, social media managers, and ad creatives.",
  },
  {
    id: "research-careers",
    label: "Research & Careers",
    icon: "science",
    description: "Academic research engines, paper summarizers, resume builders, and job search assistants.",
  },
];

const DOMAIN_PARENT_MAP: Record<string, DomainClusterId> = {
  // Code & Agents
  c5: "code-agents",
  "ai-agents": "code-agents",
  "b9c74436-f00a-41e0-aee9-6ab15d90d3ec": "code-agents",

  // Visual Media
  c2: "visual-media",
  c3: "visual-media",

  // Writing & SEO
  c1: "writing-content",
  "ai-seo-tools": "writing-content",

  // Audio & Voice
  c4: "audio-voice",
  "ai-voice-generators": "audio-voice",
  "cat-transcription": "audio-voice",

  // Productivity & Ops
  c7: "productivity-ops",
  "cat-meeting": "productivity-ops",
  "cat-presentation": "productivity-ops",

  // Marketing & Sales
  c6: "marketing-sales",
  "ai-sales-tools": "marketing-sales",
  "ai-social-media": "marketing-sales",

  // Research & Careers
  "cat-research": "research-careers",
  "cat-resume": "research-careers",
};

function getCategoryDomain(cat: ToolCategory): DomainClusterId {
  const key = cat.parentId || cat.id;
  return DOMAIN_PARENT_MAP[key] || "productivity-ops";
}

const POPULAR_PILLS = [
  { name: "Coding Assistants", slug: "coding-assistants", icon: "code", colorClass: "bg-[#18181B] text-white border-zinc-700 hover:bg-zinc-800" },
  { name: "Video Generators", slug: "ai-video-generators", icon: "videocam", colorClass: "bg-[#9F1239] text-white border-[#881337] hover:bg-[#881337]" },
  { name: "Writing Tools", slug: "ai-writing-tools", icon: "edit_note", colorClass: "bg-[#701A75] text-white border-[#581C87] hover:bg-[#581C87]" },
  { name: "Image Generators", slug: "ai-image-generators", icon: "image", colorClass: "bg-[#E11D48] text-white border-[#BE123C] hover:bg-[#BE123C]" },
  { name: "AI Chatbots & LLMs", slug: "ai-chatbots", icon: "forum", colorClass: "bg-[#BE123C] text-white border-[#9F1239] hover:bg-[#9F1239]" },
  { name: "Voice & Speech", slug: "ai-voice-generators", icon: "mic", colorClass: "bg-[#831843] text-white border-[#701A75] hover:bg-[#701A75]" },
  { name: "AI SEO Tools", slug: "ai-seo-tools", icon: "search", colorClass: "bg-[#881337] text-white border-[#701A75] hover:bg-[#701A75]" },
  { name: "AI Agents", slug: "ai-agents", icon: "smart_toy", colorClass: "bg-[#581C87] text-white border-[#4C1D95] hover:bg-[#4C1D95]" },
  { name: "Vibe Coding", slug: "ai-app-builders-vibe-coding", icon: "terminal", colorClass: "bg-[#0F172A] text-white border-slate-700 hover:bg-slate-800" },
  { name: "Productivity", slug: "productivity", icon: "bolt", colorClass: "bg-[#4C0519] text-white border-[#881337] hover:bg-[#881337]" },
  { name: "Marketing & Sales", slug: "marketing-sales", icon: "campaign", colorClass: "bg-[#991B1B] text-white border-[#7F1D1D] hover:bg-[#7F1D1D]" },
  { name: "Research Tools", slug: "ai-research-tools", icon: "science", colorClass: "bg-[#312E81] text-white border-[#1E1B4B] hover:bg-[#1E1B4B]" },
  { name: "Freemium Tools", href: "/freemium-ai-tools", icon: "savings", colorClass: "bg-[#E11D48] text-white border-[#BE123C] hover:bg-[#BE123C]" },
];

export function CategoryGridWithSearch({ categories }: CategoryGridWithSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDomain, setActiveDomain] = useState<DomainClusterId>("all");

  // Filter categories by search query and active domain
  const filteredCategories = useMemo(() => {
    return categories.filter((cat) => {
      // 1. Domain Filter
      if (activeDomain !== "all") {
        const catDomain = getCategoryDomain(cat);
        if (catDomain !== activeDomain) return false;
      }

      // 2. Search Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = cat.name.toLowerCase().includes(q);
        const descMatch = cat.description?.toLowerCase().includes(q);
        const slugMatch = cat.slug.toLowerCase().includes(q);
        return nameMatch || descMatch || slugMatch;
      }

      return true;
    });
  }, [categories, activeDomain, searchQuery]);

  // Categories grouped by domain for the grouped view
  const groupedCategories = useMemo(() => {
    const map = new Map<DomainClusterId, ToolCategory[]>();

    DOMAIN_METAS.filter((d) => d.id !== "all").forEach((d) => {
      map.set(d.id, []);
    });

    filteredCategories.forEach((cat) => {
      const dom = getCategoryDomain(cat);
      const list = map.get(dom);
      if (list) {
        list.push(cat);
      }
    });

    return map;
  }, [filteredCategories]);

  // Count per domain for badges
  const domainCounts = useMemo(() => {
    const counts: Record<string, number> = { all: categories.length };
    categories.forEach((cat) => {
      const dom = getCategoryDomain(cat);
      counts[dom] = (counts[dom] || 0) + 1;
    });
    return counts;
  }, [categories]);

  return (
    <div className="space-y-8 mb-16">
      {/* 1. Quick-Jump Popular Category Hubs Bar */}
      <div className="bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider block">
            Popular Comparison Hubs:
          </span>
          <span className="text-[11px] text-[#6B7280] hidden sm:inline">
            Compare top-rated software across high-demand workflows
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {POPULAR_PILLS.map((pill) => {
            const href = pill.href || `/category/${pill.slug}`;
            return (
              <Link
                key={pill.name}
                href={href}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium shadow-2xs transition-all ${pill.colorClass}`}
              >
                <span className="material-symbols-outlined text-[15px] opacity-90">{pill.icon}</span>
                <span>{pill.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 2. Interactive Search & View Controls */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-lg">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-[20px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search & compare 100+ categories (e.g. video, code, chatbots, SEO)..."
              className="w-full h-10 pl-10 pr-9 rounded-lg bg-white border border-[#E5E7EB] text-sm text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#E11D48] focus:ring-1 focus:ring-[#E11D48] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#0A0A0A] p-1"
                aria-label="Clear search"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>

          {/* Result Count */}
          <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
            <div className="text-xs font-semibold text-[#4B5563]">
              Showing <span className="text-[#0A0A0A] font-bold">{filteredCategories.length}</span> of{" "}
              {categories.length} categories to compare
            </div>
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {DOMAIN_METAS.map((domain) => {
            const isActive = activeDomain === domain.id;
            const count = domainCounts[domain.id] ?? 0;
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setActiveDomain(domain.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors border ${
                  isActive
                    ? "bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-xs"
                    : "bg-white border-[#E5E7EB] text-[#4B5563] hover:border-gray-400 hover:text-[#0A0A0A]"
                }`}
              >
                <span className={`material-symbols-outlined text-[15px] ${isActive ? "text-[#E11D48]" : "text-[#6B7280]"}`}>
                  {domain.icon}
                </span>
                <span>{domain.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isActive ? "bg-white/20 text-white" : "bg-[#F3F4F6] text-[#4B5563]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Categories Content Area */}
      {filteredCategories.length === 0 ? (
        <div className="text-center py-16 bg-[#FAFAFA] border border-dashed border-[#E5E7EB] rounded-xl p-8">
          <span className="material-symbols-outlined text-4xl text-[#9CA3AF] mb-2 block">search_off</span>
          <h3 className="text-lg font-bold text-[#0A0A0A] mb-1 font-heading">No matching categories found</h3>
          <p className="text-sm text-[#4B5563] max-w-sm mx-auto mb-5">
            We couldn&apos;t find any categories matching &ldquo;{searchQuery}&rdquo;. Try clearing your search or filters.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveDomain("all");
              }}
              className="px-4 py-2 rounded-lg bg-white border border-[#E5E7EB] text-[#0A0A0A] text-xs font-semibold hover:border-gray-400 transition-colors shadow-xs"
            >
              Reset Filters
            </button>
            <Link
              href="/compare-tools"
              className="px-4 py-2 rounded-lg bg-[#E11D48] text-white text-xs font-semibold hover:bg-[#BE123C] transition-colors shadow-xs"
            >
              Explore Side-by-Side Comparisons
            </Link>
          </div>
        </div>
      ) : (
        /* Grouped Domain View */
        <div className="space-y-12">
          {DOMAIN_METAS.filter((d) => d.id !== "all").map((domain) => {
            const domainCats = groupedCategories.get(domain.id) || [];
            if (domainCats.length === 0) return null;

            return (
              <section
                key={domain.id}
                className="pt-8 border-t border-[#E5E7EB] first:border-0 first:pt-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-md bg-[#FFF1F2] border border-[#FECDD3] flex items-center justify-center text-[#E11D48]">
                        <span className="material-symbols-outlined text-[16px]">{domain.icon}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0A0A0A] tracking-tight">
                        {domain.label}
                      </h2>
                      <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563]">
                        {domainCats.length} Categories
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4B5563] max-w-xl">
                      {domain.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 sm:gap-3">
                  {domainCats.map((category) => (
                    <CategoryCard key={category.id || category.slug} category={category} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
