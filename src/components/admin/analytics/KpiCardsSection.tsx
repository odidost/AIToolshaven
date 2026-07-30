"use client";

import type { KpiMetric } from '@/lib/data/analytics-data';

interface KpiCardsSectionProps {
  kpis: KpiMetric[];
}

function MiniSparkline({ data, isGood }: { data: number[]; isGood: boolean }) {
  if (!data || data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data
    .map((val, idx) => {
      const x = (idx / (data.length - 1)) * 96 + 2;
      const y = 28 - ((val - min) / range) * 22;
      return `${x},${y}`;
    })
    .join(' ');

  const colorClass = isGood ? '#10B981' : '#EF4444';

  return (
    <svg className="w-24 h-7 shrink-0 overflow-visible" viewBox="0 0 100 30">
      <polyline
        fill="none"
        stroke={colorClass}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}

export function KpiCardsSection({ kpis }: KpiCardsSectionProps) {
  return (
    <section id="sec-overview" className="scroll-mt-24 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[22px]">analytics</span>
          Executive KPI Summary
        </h2>
        <span className="text-xs text-slate-500 font-medium">10 Core Performance Indicators</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {kpis.map((metric) => {
          const isPos = metric.changePercent >= 0;
          const isGood = metric.isPositiveGood ? isPos : !isPos;

          return (
            <div
              key={metric.key}
              className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-slate-500 line-clamp-1">{metric.title}</span>
                  {metric.key === 'active_now' ? (
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                  ) : null}
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-black text-slate-900 tracking-tight">{metric.value}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-2 pt-2 border-t border-slate-100">
                  <span
                    className={`inline-flex items-center gap-0.5 text-xs font-bold px-1.5 py-0.5 rounded ${
                      isGood
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-rose-50 text-rose-700'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {isPos ? 'arrow_drop_up' : 'arrow_drop_down'}
                    </span>
                    {Math.abs(metric.changePercent)}%
                  </span>

                  <MiniSparkline data={metric.sparkline} isGood={isGood} />
                </div>

                <p className="text-[11px] text-slate-400 font-medium truncate">
                  vs prev period ({metric.prevPeriodValue})
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
