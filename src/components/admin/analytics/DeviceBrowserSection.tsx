"use client";

import type { DeviceData, OsData, BrowserData } from '@/lib/data/analytics-data';

interface DeviceBrowserSectionProps {
  devices: DeviceData[];
  osList: OsData[];
  browsers: BrowserData[];
}

export function DeviceBrowserSection({ devices, osList, browsers }: DeviceBrowserSectionProps) {
  return (
    <section id="sec-devices" className="scroll-mt-24 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Device Categories Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">devices</span>
                Device Types
              </h3>
              <span className="text-xs font-medium text-slate-500">Hardware Type</span>
            </div>

            {/* Segmented Bar */}
            <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden flex mb-6">
              {devices.map((d, i) => (
                <div
                  key={d.device}
                  style={{ width: `${d.percentage}%` }}
                  className={`h-full transition-all ${
                    i === 0 ? 'bg-primary' : i === 1 ? 'bg-indigo-500' : 'bg-emerald-500'
                  }`}
                  title={`${d.device}: ${d.percentage}%`}
                />
              ))}
            </div>

            <div className="space-y-4">
              {devices.map((d, i) => (
                <div key={d.device} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold ${
                        i === 0 ? 'bg-primary' : i === 1 ? 'bg-indigo-500' : 'bg-emerald-500'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">{d.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-xs">{d.device}</p>
                      <span className="text-[11px] text-slate-500">
                        {d.visitors.toLocaleString()} visitors
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-black text-slate-900 block">{d.percentage}%</span>
                    <span className="text-[10px] text-slate-400 font-mono">Bounce {d.bounceRate}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Operating Systems Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">laptop_mac</span>
                Operating Systems
              </h3>
              <span className="text-xs font-medium text-slate-500">Platform OS</span>
            </div>

            <div className="space-y-3">
              {osList.map((item) => (
                <div key={item.os} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-slate-500">{item.icon}</span>
                      {item.os}
                    </span>
                    <span className="font-bold text-slate-900">
                      {item.percentage}% ({item.visitors.toLocaleString()})
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-slate-800 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Web Browsers Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">explore</span>
                Browser Telemetry
              </h3>
              <span className="text-xs font-medium text-slate-500">Browser Engines</span>
            </div>

            <div className="space-y-3">
              {browsers.map((b) => (
                <div key={b.browser} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[20px] text-primary">{b.icon}</span>
                    <div>
                      <p className="font-bold text-slate-900 text-xs">{b.browser}</p>
                      <span className="text-[10px] text-slate-400 font-mono">{b.version}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-900 block">{b.percentage}%</span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {b.visitors.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
