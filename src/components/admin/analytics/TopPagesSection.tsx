"use client";

import { useState } from 'react';
import type { PagePerformance } from '@/lib/data/analytics-data';

interface TopPagesSectionProps {
  topPages: PagePerformance[];
}

export function TopPagesSection({ topPages }: TopPagesSectionProps) {
  const [activeTab, setActiveTab] = useState<
    'views' | 'engagement' | 'conversions' | 'exit' | 'bookmarks' | 'shares' | 'compares'
  >('views');

  const sortedPages = [...topPages].sort((a, b) => {
    if (activeTab === 'views') return b.views - a.views;
    if (activeTab === 'engagement') return b.uniqueViews - a.uniqueViews;
    if (activeTab === 'conversions') return b.conversions - a.conversions;
    if (activeTab === 'exit') return b.exitRate - a.exitRate;
    if (activeTab === 'bookmarks') return b.bookmarks - a.bookmarks;
    if (activeTab === 'shares') return b.shares - a.shares;
    if (activeTab === 'compares') return b.compares - a.compares;
    return 0;
  });

  const tabLabels = [
    { id: 'views', label: 'Most Visited' },
    { id: 'engagement', label: 'Highest Engagement' },
    { id: 'conversions', label: 'Highest Conversions' },
    { id: 'exit', label: 'Highest Exit Rate' },
    { id: 'bookmarks', label: 'Most Bookmarked' },
    { id: 'shares', label: 'Most Shared' },
    { id: 'compares', label: 'Most Compared' },
  ];

  return (
    <section id="sec-top-pages" className="scroll-mt-24 mb-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">article</span>
              Top Pages & Content Performance
            </h2>
            <p className="text-xs text-slate-500">
              Page-level telemetry across traffic, user engagement, bounce rate, exit rate, and affiliate conversions
            </p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl overflow-x-auto mb-6 scrollbar-none">
          {tabLabels.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Top Pages Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-y border-slate-200">
              <tr>
                <th className="px-4 py-3">Page Title & Path</th>
                <th className="px-4 py-3 text-right">Total Views</th>
                <th className="px-4 py-3 text-right">Unique Visitors</th>
                <th className="px-4 py-3 text-right">Avg Duration</th>
                <th className="px-4 py-3 text-right">Bounce Rate</th>
                <th className="px-4 py-3 text-right">Exit Rate</th>
                <th className="px-4 py-3 text-right">Conversions</th>
                <th className="px-4 py-3 text-right">Interactions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sortedPages.map((page, idx) => (
                <tr key={page.url} className="hover:bg-slate-50/80 transition-colors">
                  {/* Title & URL */}
                  <td className="px-4 py-3.5 max-w-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="font-bold text-slate-900 truncate" title={page.title}>
                          {page.title}
                        </p>
                        <span className="text-[11px] text-slate-400 font-mono truncate block">
                          {page.url}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Views */}
                  <td className="px-4 py-3.5 text-right font-black text-slate-900">
                    {page.views.toLocaleString()}
                  </td>

                  {/* Unique Views */}
                  <td className="px-4 py-3.5 text-right text-slate-600 font-medium">
                    {page.uniqueViews.toLocaleString()}
                  </td>

                  {/* Avg Duration */}
                  <td className="px-4 py-3.5 text-right font-mono text-slate-700">
                    {page.avgTime}
                  </td>

                  {/* Bounce Rate */}
                  <td className="px-4 py-3.5 text-right font-mono text-slate-600">
                    {page.bounceRate}%
                  </td>

                  {/* Exit Rate */}
                  <td className="px-4 py-3.5 text-right font-mono text-slate-600">
                    {page.exitRate}%
                  </td>

                  {/* Conversions */}
                  <td className="px-4 py-3.5 text-right">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-700">
                      {page.conversions.toLocaleString()}
                    </span>
                  </td>

                  {/* Interactions (Bookmarks / Shares / Comparisons) */}
                  <td className="px-4 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-2 text-[11px] text-slate-500 font-medium">
                      <span title="Bookmarks">🔖 {page.bookmarks}</span>
                      <span title="Shares">🔗 {page.shares}</span>
                      <span title="Comparisons">⚖️ {page.compares}</span>
                    </div>
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
