"use client";

import type { SeoMetric } from '@/lib/data/analytics-data';

interface SeoAnalyticsSectionProps {
  seoMetrics: SeoMetric[];
  seoOverview: {
    totalIndexedPages: number;
    total404Errors: number;
    avgCtr: number;
    totalImpressions: number;
    error404Logs: Array<{ url: string; count: number; lastDetected: string }>;
  };
}

export function SeoAnalyticsSection({ seoMetrics, seoOverview }: SeoAnalyticsSectionProps) {
  return (
    <section id="sec-seo" className="scroll-mt-24 mb-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">manage_search</span>
              SEO Analytics & Google Search Console
            </h2>
            <p className="text-xs text-slate-500">
              Organic landing pages, search impressions, CTR %, average rank position, and 404 monitors
            </p>
          </div>
        </div>

        {/* SEO Overview Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Total Impressions</span>
            <span className="text-xl font-black text-slate-900">{seoOverview.totalImpressions.toLocaleString()}</span>
          </div>
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">Average CTR</span>
            <span className="text-xl font-black text-emerald-900">{seoOverview.avgCtr}%</span>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">Indexed Pages</span>
            <span className="text-xl font-black text-blue-900">{seoOverview.totalIndexedPages}</span>
          </div>
          <div className="bg-rose-50 p-4 rounded-xl border border-rose-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block">404 Errors Tracked</span>
            <span className="text-xl font-black text-rose-900">{seoOverview.total404Errors}</span>
          </div>
        </div>

        {/* Top Organic Landing Pages */}
        <div>
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Top Organic Search Landing Pages</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-y border-slate-200">
                <tr>
                  <th className="px-4 py-3">Landing Page URL</th>
                  <th className="px-4 py-3 text-right">Organic Visits</th>
                  <th className="px-4 py-3">Top Search Keyword</th>
                  <th className="px-4 py-3 text-right">Impressions</th>
                  <th className="px-4 py-3 text-right">CTR %</th>
                  <th className="px-4 py-3 text-right">Avg Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {seoMetrics.map((item) => (
                  <tr key={item.landingPage} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-4 py-3 font-mono font-semibold text-slate-900">{item.landingPage}</td>
                    <td className="px-4 py-3 text-right font-black text-slate-900">{item.organicVisits.toLocaleString()}</td>
                    <td className="px-4 py-3 text-slate-700 font-medium">{item.topKeyword}</td>
                    <td className="px-4 py-3 text-right text-slate-600 font-mono">{item.impressions.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right font-bold text-emerald-600">{item.ctr}%</td>
                    <td className="px-4 py-3 text-right font-bold text-primary">#{item.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 404 Pages Monitor Log */}
        <div className="bg-rose-50/50 rounded-xl p-4 border border-rose-200">
          <h3 className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-rose-600">error</span>
            404 Error Log Monitor
          </h3>
          <div className="space-y-2 text-xs">
            {seoOverview.error404Logs.map((log) => (
              <div key={log.url} className="flex items-center justify-between p-2 bg-white rounded-lg border border-rose-100">
                <span className="font-mono text-slate-800">{log.url}</span>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-rose-700">{log.count} hits</span>
                  <span className="text-[10px] text-slate-400 font-mono">{log.lastDetected}</span>
                  <button className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded hover:bg-primary/20">
                    Set Redirect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
