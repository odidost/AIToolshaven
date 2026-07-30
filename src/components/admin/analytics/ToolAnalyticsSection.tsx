"use client";

import { useState } from 'react';
import type { ToolPerformance } from '@/lib/data/analytics-data';

interface ToolAnalyticsSectionProps {
  toolsPerformance: ToolPerformance[];
}

export function ToolAnalyticsSection({ toolsPerformance }: ToolAnalyticsSectionProps) {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'views' | 'affiliateClicks' | 'bookmarks' | 'compares' | 'rating' | 'growth'>('affiliateClicks');

  const categories = ['All', 'Coding', 'LLMs & Chat', 'Image Generation', 'Search & Research', 'Voice & Audio', 'Video Creation', 'Productivity', 'UI Code Gen'];

  const filteredTools = toolsPerformance
    .filter((t) => filterCategory === 'All' || t.category === filterCategory)
    .sort((a, b) => {
      if (sortBy === 'views') return b.views - a.views;
      if (sortBy === 'affiliateClicks') return b.affiliateClicks - a.affiliateClicks;
      if (sortBy === 'bookmarks') return b.bookmarks - a.bookmarks;
      if (sortBy === 'compares') return b.compares - a.compares;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'growth') return b.growthPercent - a.growthPercent;
      return 0;
    });

  return (
    <section id="sec-tools" className="scroll-mt-24 mb-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">smart_toy</span>
              AI Tool Performance & Affiliate Intelligence
            </h2>
            <p className="text-xs text-slate-500">
              Tracking views, affiliate link clicks, bookmarks, side-by-side comparisons, and rating velocity across AI tools
            </p>
          </div>

          {/* Filters & Sorting */}
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium focus:outline-none"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  Category: {c}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 text-xs bg-slate-900 text-white font-semibold rounded-lg focus:outline-none"
            >
              <option value="affiliateClicks">Sort: Most Affiliate Clicks</option>
              <option value="views">Sort: Most Viewed Tools</option>
              <option value="bookmarks">Sort: Most Bookmarked</option>
              <option value="compares">Sort: Most Compared</option>
              <option value="rating">Sort: Highest Rated</option>
              <option value="growth">Sort: Fastest Growing</option>
            </select>
          </div>
        </div>

        {/* Top 3 Trending Tools Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {toolsPerformance.slice(0, 3).map((tool) => (
            <div key={tool.id} className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-4 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {tool.category}
                  </span>
                  {tool.isTrending && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                      🔥 Trending +{tool.growthPercent}%
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-black text-white mb-1">{tool.name}</h3>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-bold mb-4">
                  <span>★ {tool.rating}</span>
                  <span className="text-slate-400 font-normal">• {tool.views.toLocaleString()} views</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 text-[10px] block">Affiliate Clicks</span>
                  <span className="font-bold text-emerald-400 text-sm">{tool.affiliateClicks.toLocaleString()}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 text-[10px] block">Bookmarks</span>
                  <span className="font-bold text-slate-200 text-sm">{tool.bookmarks.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Performance Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-y border-slate-200">
              <tr>
                <th className="px-4 py-3">AI Tool</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3 text-right">Detail Views</th>
                <th className="px-4 py-3 text-right">Affiliate Clicks</th>
                <th className="px-4 py-3 text-right">Bookmarks</th>
                <th className="px-4 py-3 text-right">Comparisons</th>
                <th className="px-4 py-3 text-right">User Rating</th>
                <th className="px-4 py-3 text-right">Growth Velocity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTools.map((tool) => (
                <tr key={tool.id} className="hover:bg-slate-50/80 transition-colors">
                  {/* Tool Name */}
                  <td className="px-4 py-3.5 font-bold text-slate-900 flex items-center gap-2">
                    <span>{tool.name}</span>
                    {tool.isTrending && (
                      <span className="text-[10px] px-1.5 py-0.2 bg-amber-50 text-amber-700 font-bold rounded">
                        HOT
                      </span>
                    )}
                  </td>

                  {/* Category */}
                  <td className="px-4 py-3.5 text-slate-600 font-medium">{tool.category}</td>

                  {/* Views */}
                  <td className="px-4 py-3.5 text-right font-semibold text-slate-900">
                    {tool.views.toLocaleString()}
                  </td>

                  {/* Affiliate Clicks */}
                  <td className="px-4 py-3.5 text-right font-black text-emerald-600">
                    {tool.affiliateClicks.toLocaleString()}
                  </td>

                  {/* Bookmarks */}
                  <td className="px-4 py-3.5 text-right text-slate-700">
                    {tool.bookmarks.toLocaleString()}
                  </td>

                  {/* Comparisons */}
                  <td className="px-4 py-3.5 text-right text-slate-700">
                    {tool.compares.toLocaleString()}
                  </td>

                  {/* Rating */}
                  <td className="px-4 py-3.5 text-right font-bold text-amber-600">
                    ★ {tool.rating}
                  </td>

                  {/* Growth Velocity */}
                  <td className="px-4 py-3.5 text-right">
                    <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      +{tool.growthPercent}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
