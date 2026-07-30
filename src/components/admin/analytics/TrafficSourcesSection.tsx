"use client";

import type { TrafficSource } from '@/lib/data/analytics-data';

interface TrafficSourcesSectionProps {
  trafficSources: TrafficSource[];
}

export function TrafficSourcesSection({ trafficSources }: TrafficSourcesSectionProps) {
  const totalVisitors = trafficSources.reduce((sum, s) => sum + s.visitors, 0);

  return (
    <section id="sec-traffic" className="scroll-mt-24 mb-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">traffic</span>
              Traffic Sources & Acquisition Channels
            </h2>
            <p className="text-xs text-slate-500">
              Acquisition channels driving high-intent visitors and affiliate conversions
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
            10 Acquisition Channels
          </span>
        </div>

        {/* Visual Channel Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Top 3 Channels Cards */}
          {trafficSources.slice(0, 3).map((source) => (
            <div
              key={source.source}
              className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: source.color }}
                  >
                    <span className="material-symbols-outlined text-[18px]">{source.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{source.source}</h3>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {source.percentage}% of total traffic
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Visitors:</span>
                  <span className="font-bold text-slate-900">{source.visitors.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Affiliate Clicks:</span>
                  <span className="font-bold text-emerald-600">{source.affiliateClicks.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Conversion Rate:</span>
                  <span className="font-bold text-primary">{source.conversionRate}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Channels Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-y border-slate-200">
              <tr>
                <th className="px-4 py-3">Source Channel</th>
                <th className="px-4 py-3 text-right">Visitors</th>
                <th className="px-4 py-3 text-right">Sessions</th>
                <th className="px-4 py-3">Traffic Share</th>
                <th className="px-4 py-3 text-right">Bounce Rate</th>
                <th className="px-4 py-3 text-right">Avg Duration</th>
                <th className="px-4 py-3 text-right">Affiliate Clicks</th>
                <th className="px-4 py-3 text-right">Conv. Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {trafficSources.map((item) => (
                <tr key={item.source} className="hover:bg-slate-50/80 transition-colors">
                  {/* Channel Name */}
                  <td className="px-4 py-3 font-semibold text-slate-900 flex items-center gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.source}</span>
                  </td>

                  {/* Visitors */}
                  <td className="px-4 py-3 text-right font-bold text-slate-900">
                    {item.visitors.toLocaleString()}
                  </td>

                  {/* Sessions */}
                  <td className="px-4 py-3 text-right text-slate-600">
                    {item.sessions.toLocaleString()}
                  </td>

                  {/* Share % Progress */}
                  <td className="px-4 py-3 min-w-[130px]">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${Math.min(100, item.percentage * 2)}%`,
                            backgroundColor: item.color,
                          }}
                        />
                      </div>
                      <span className="font-semibold text-slate-700 text-[11px] shrink-0">
                        {item.percentage}%
                      </span>
                    </div>
                  </td>

                  {/* Bounce Rate */}
                  <td className="px-4 py-3 text-right text-slate-600 font-mono">
                    {item.bounceRate}%
                  </td>

                  {/* Avg Duration */}
                  <td className="px-4 py-3 text-right text-slate-600 font-mono">
                    {item.avgDuration}
                  </td>

                  {/* Affiliate Clicks */}
                  <td className="px-4 py-3 text-right font-bold text-emerald-600">
                    {item.affiliateClicks.toLocaleString()}
                  </td>

                  {/* Conversion Rate */}
                  <td className="px-4 py-3 text-right">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-primary/10 text-primary">
                      {item.conversionRate}%
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
