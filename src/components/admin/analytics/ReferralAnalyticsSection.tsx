"use client";

import type { ReferralItem } from '@/lib/data/analytics-data';

interface ReferralAnalyticsSectionProps {
  referrals: ReferralItem[];
}

export function ReferralAnalyticsSection({ referrals }: ReferralAnalyticsSectionProps) {
  return (
    <section id="sec-referrals" className="scroll-mt-24 mb-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">link</span>
              Referring Domains & Inbound Traffic
            </h2>
            <p className="text-xs text-slate-500">
              External platforms, social media, and search engines driving inbound referrals
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-y border-slate-200">
              <tr>
                <th className="px-4 py-3">Referring Domain</th>
                <th className="px-4 py-3 text-right">Visitors</th>
                <th className="px-4 py-3 text-right">Sessions</th>
                <th className="px-4 py-3 text-right">Affiliate Conversions</th>
                <th className="px-4 py-3 text-right">Conv. Rate</th>
                <th className="px-4 py-3">Top Landing Page</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {referrals.map((item) => (
                <tr key={item.domain} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-4 py-3 font-bold text-slate-900 font-mono">{item.domain}</td>
                  <td className="px-4 py-3 text-right font-black text-slate-900">
                    {item.visitors.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right text-slate-600">
                    {item.sessions.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-emerald-600">
                    {item.conversions.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-primary">
                    {item.conversionRate}%
                  </td>
                  <td className="px-4 py-3 font-mono text-[11px] text-slate-500 truncate max-w-[200px]">
                    {item.topLandingPage}
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
