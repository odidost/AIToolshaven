"use client";

interface ConversionAnalyticsSectionProps {
  conversions: Array<{ goal: string; count: number; value: string; change: number }>;
}

export function ConversionAnalyticsSection({ conversions }: ConversionAnalyticsSectionProps) {
  return (
    <section id="sec-conversions" className="scroll-mt-24 mb-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">ads_click</span>
              Conversion & Key Event Analytics
            </h2>
            <p className="text-xs text-slate-500">
              Outbound affiliate referrals, lead signups, bookmark additions, and platform feature actions
            </p>
          </div>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            6 Tracked Goals
          </span>
        </div>

        {/* Goal Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {conversions.map((item) => (
            <div
              key={item.goal}
              className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-700">{item.goal}</span>
                  <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                    +{item.change}%
                  </span>
                </div>
                <div className="text-2xl font-black text-slate-900 mb-1">{item.count.toLocaleString()}</div>
              </div>

              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-500">Business Value:</span>
                <span className="font-bold text-primary">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
