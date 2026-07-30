"use client";

import { useState, useEffect } from 'react';
import type { LiveVisitor } from '@/lib/data/analytics-data';
import { generateLiveVisitors } from '@/lib/data/analytics-data';

interface LiveVisitorsPanelProps {
  isLiveSync: boolean;
  isPrivacyMasked: boolean;
}

export function LiveVisitorsPanel({ isLiveSync, isPrivacyMasked }: LiveVisitorsPanelProps) {
  const [visitors, setVisitors] = useState<LiveVisitor[]>([]);

  useEffect(() => {
    setVisitors(generateLiveVisitors());
  }, []);

  // Update time on page every second & introduce new users periodically
  useEffect(() => {
    if (!isLiveSync) return;

    const timer = setInterval(() => {
      setVisitors((prev) => {
        return prev.map((v) => ({
          ...v,
          secondsOnPage: v.secondsOnPage + 1,
        }));
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isLiveSync]);

  const activeCount = visitors.length + 50; // Total active online users

  return (
    <section id="sec-live" className="scroll-mt-24 mb-8">
      <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden text-white">
        {/* Header Bar */}
        <div className="p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white" />
              </span>
              <span className="animate-ping absolute -top-0.5 -left-0.5 w-5 h-5 rounded-full bg-emerald-500 opacity-60" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Live Active Visitors Monitor
              </h2>
              <p className="text-xs text-slate-400">
                Real-time active user sessions streaming on site
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-2xl font-black text-emerald-400 tracking-tight">{activeCount}</span>
              <span className="text-xs text-slate-400 block font-medium">Online Right Now</span>
            </div>
            <button
              onClick={() => setVisitors(generateLiveVisitors())}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Refresh Stream"
            >
              <span className="material-symbols-outlined text-[18px]">refresh</span>
            </button>
          </div>
        </div>

        {/* Live Visitor Feed Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/80 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="px-6 py-3">Active Page</th>
                <th className="px-6 py-3">Location & IP</th>
                <th className="px-6 py-3">Device / Browser</th>
                <th className="px-6 py-3">Time on Page</th>
                <th className="px-6 py-3">User Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {visitors.map((visitor) => {
                const mins = Math.floor(visitor.secondsOnPage / 60);
                const secs = visitor.secondsOnPage % 60;
                const timeString = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

                return (
                  <tr key={visitor.id} className="hover:bg-slate-800/50 transition-colors">
                    {/* Active Page */}
                    <td className="px-6 py-3.5 max-w-xs">
                      <p className="font-semibold text-white truncate" title={visitor.pageTitle}>
                        {visitor.pageTitle}
                      </p>
                      <span className="text-[11px] text-slate-400 font-mono truncate block">
                        {visitor.url}
                      </span>
                    </td>

                    {/* Location & IP */}
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{visitor.flag}</span>
                        <div>
                          <p className="font-medium text-slate-200">{visitor.city}, {visitor.country}</p>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {isPrivacyMasked ? 'xxx.xxx.xxx.xxx' : visitor.ipMasked}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Device / Browser */}
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-2 text-slate-300">
                        <span className="material-symbols-outlined text-[16px] text-slate-400">
                          {visitor.device === 'Desktop' ? 'desktop_windows' : visitor.device === 'Mobile' ? 'smartphone' : 'tablet_mac'}
                        </span>
                        <span>{visitor.device}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400">{visitor.browser} ({visitor.os})</span>
                      </div>
                    </td>

                    {/* Time on Page */}
                    <td className="px-6 py-3.5">
                      <span className="inline-flex items-center gap-1 font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {timeString}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-3.5">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          visitor.status === 'Registered User'
                            ? 'bg-purple-950 text-purple-300 border border-purple-800/50'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {visitor.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
