"use client";

import type { CoreWebVitals } from '@/lib/data/analytics-data';

interface PerformanceAnalyticsSectionProps {
  webVitals: CoreWebVitals;
}

export function PerformanceAnalyticsSection({ webVitals }: PerformanceAnalyticsSectionProps) {
  const vitalsList = [
    { key: 'lcp', title: 'LCP', data: webVitals.lcp },
    { key: 'cls', title: 'CLS', data: webVitals.cls },
    { key: 'inp', title: 'INP', data: webVitals.inp },
    { key: 'ttfb', title: 'TTFB', data: webVitals.ttfb },
  ];

  return (
    <section id="sec-performance" className="scroll-mt-24 mb-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">speed</span>
              Performance Analytics & Core Web Vitals
            </h2>
            <p className="text-xs text-slate-500">
              Site speed, loading performance, visual stability, and responsiveness telemetry
            </p>
          </div>
          <div className="text-right">
            <span className="text-xl font-black text-emerald-600 block font-mono">{webVitals.avgLoadTime}</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Avg Load Time</span>
          </div>
        </div>

        {/* Core Web Vitals Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {vitalsList.map((item) => (
            <div key={item.key} className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-slate-900 uppercase">{item.title}</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    PASSING
                  </span>
                </div>
                <div className="text-2xl font-black text-slate-900 mb-1 font-mono">{item.data.value}</div>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 font-medium">{item.data.label}</p>
            </div>
          ))}
        </div>

        {/* Fastest vs Slowest Pages Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fastest Pages */}
          <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-200">
            <h3 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">bolt</span>
              Fastest Loaded Pages
            </h3>
            <div className="space-y-2 text-xs">
              {webVitals.fastestPages.map((page) => (
                <div key={page.url} className="flex justify-between p-2 bg-white rounded-lg border border-emerald-100">
                  <span className="font-mono text-slate-800">{page.url}</span>
                  <span className="font-bold text-emerald-700 font-mono">{page.speed}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Slowest Pages & Issues */}
          <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200">
            <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-amber-600">hourglass_bottom</span>
              Slowest Pages & Bottlenecks
            </h3>
            <div className="space-y-2 text-xs">
              {webVitals.slowestPages.map((page) => (
                <div key={page.url} className="p-2 bg-white rounded-lg border border-amber-100 space-y-1">
                  <div className="flex justify-between">
                    <span className="font-mono font-bold text-slate-800">{page.url}</span>
                    <span className="font-bold text-amber-700 font-mono">{page.speed}</span>
                  </div>
                  <p className="text-[10px] text-slate-500">{page.issue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
