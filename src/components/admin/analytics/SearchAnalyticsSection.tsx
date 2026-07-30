"use client";

import type { SearchQueryItem } from '@/lib/data/analytics-data';

interface SearchAnalyticsSectionProps {
  searchAnalytics: SearchQueryItem[];
}

export function SearchAnalyticsSection({ searchAnalytics }: SearchAnalyticsSectionProps) {
  const successfulSearches = searchAnalytics.filter((s) => s.hasResults);
  const zeroResultSearches = searchAnalytics.filter((s) => !s.hasResults);

  return (
    <section id="sec-search" className="scroll-mt-24 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Most Searched Keywords Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">search</span>
                Most Searched Keywords
              </h2>
              <p className="text-xs text-slate-500">Highest volume internal site queries</p>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
              High Intent
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-y border-slate-200">
                <tr>
                  <th className="px-3 py-2.5">Search Query</th>
                  <th className="px-3 py-2.5 text-right">Searches</th>
                  <th className="px-3 py-2.5 text-right">Click CTR</th>
                  <th className="px-3 py-2.5">Top Result Clicked</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {successfulSearches.map((item) => (
                  <tr key={item.query} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-3 py-2.5 font-bold text-slate-900">{item.query}</td>
                    <td className="px-3 py-2.5 text-right font-semibold text-slate-800">
                      {item.searches.toLocaleString()}
                    </td>
                    <td className="px-3 py-2.5 text-right font-mono text-emerald-600 font-bold">
                      {item.ctr}%
                    </td>
                    <td className="px-3 py-2.5 text-slate-600 font-medium truncate max-w-[150px]">
                      {item.topResultClicked}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Searches with 0 Results (Opportunity Detector!) */}
        <div className="bg-white rounded-2xl border border-rose-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-rose-600 text-[20px]">find_in_page</span>
                Searches with 0 Results
              </h2>
              <p className="text-xs text-slate-500">Content & AI Tool addition opportunities</p>
            </div>
            <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
              Opportunity Gap
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-rose-50/60 text-slate-600 uppercase tracking-wider text-[10px] border-y border-rose-200">
                <tr>
                  <th className="px-3 py-2.5">Unsatisfied Query</th>
                  <th className="px-3 py-2.5 text-right">Search Volume</th>
                  <th className="px-3 py-2.5 text-right">Growth Rate</th>
                  <th className="px-3 py-2.5 text-right">Action Needed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {zeroResultSearches.map((item) => (
                  <tr key={item.query} className="hover:bg-rose-50/30 transition-colors">
                    <td className="px-3 py-2.5 font-bold text-rose-950 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-rose-500">warning</span>
                      {item.query}
                    </td>
                    <td className="px-3 py-2.5 text-right font-bold text-slate-900">
                      {item.searches.toLocaleString()}
                    </td>
                    <td className="px-3 py-2.5 text-right font-semibold text-emerald-600">
                      +{item.growth}%
                    </td>
                    <td className="px-3 py-2.5 text-right">
                      <button className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary text-white hover:bg-primary/90 transition-colors">
                        Add Tool / Article
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
