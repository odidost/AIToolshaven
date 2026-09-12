import React from "react";
import {
  Users,
  Compass,
  Briefcase,
  MapPin,
  Flame,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export function AudienceDemographicsCard() {
  return (
    <section className="py-20 px-4 bg-slate-50/60 dark:bg-slate-900/40 border-y border-black/5 dark:border-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            Audience &amp; Buyer Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Who Discovers Software on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              AIToolsHaven?
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Our platform connects your software with verified decision-makers actively looking to replace legacy tools and automate team workflows.
          </p>
        </div>

        {/* 4 Demographics Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Metric 1: Roles */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <Briefcase className="w-4 h-4" />
              <span>By Professional Role</span>
            </div>
            <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center justify-between font-semibold text-slate-900 dark:text-white">
                <span>Tech Leads &amp; Developers</span>
                <span className="text-primary font-bold">44%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: "44%" }} />
              </div>

              <div className="flex items-center justify-between font-semibold text-slate-900 dark:text-white pt-1">
                <span>Marketing &amp; Growth Leads</span>
                <span className="text-primary font-bold">28%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: "28%" }} />
              </div>

              <div className="flex items-center justify-between font-semibold text-slate-900 dark:text-white pt-1">
                <span>Founders &amp; Executives</span>
                <span className="text-primary font-bold">18%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: "18%" }} />
              </div>

              <div className="flex items-center justify-between font-semibold text-slate-900 dark:text-white pt-1">
                <span>Enterprise Ops &amp; Creative</span>
                <span className="text-primary font-bold">10%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: "10%" }} />
              </div>
            </div>
          </div>

          {/* Metric 2: Primary Intent */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
              <Compass className="w-4 h-4" />
              <span>Purchase Intent</span>
            </div>
            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="p-3 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800/80">
                <span className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 block mb-1">
                  78%
                </span>
                <p className="text-[11px] leading-tight text-slate-700 dark:text-slate-300">
                  Actively evaluating software to purchase or replace existing tools.
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="text-xl font-extrabold text-slate-900 dark:text-white block mb-1">
                  22%
                </span>
                <p className="text-[11px] leading-tight text-slate-600 dark:text-slate-400">
                  Benchmarking models and testing workflows for team adoption.
                </p>
              </div>
            </div>
          </div>

          {/* Metric 3: Geographies */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-blue-500 font-bold text-sm">
              <MapPin className="w-4 h-4" />
              <span>Geographic Reach</span>
            </div>
            <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                <span>United States</span>
                <span className="font-bold text-slate-900 dark:text-white">48%</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                <span>European Union</span>
                <span className="font-bold text-slate-900 dark:text-white">18%</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                <span>United Kingdom</span>
                <span className="font-bold text-slate-900 dark:text-white">14%</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                <span>Canada &amp; Australia</span>
                <span className="font-bold text-slate-900 dark:text-white">12%</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Rest of World</span>
                <span className="font-bold text-slate-900 dark:text-white">8%</span>
              </div>
            </div>
          </div>

          {/* Metric 4: Compounding Value */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
              <Flame className="w-4 h-4" />
              <span>Dwell &amp; Engagement</span>
            </div>
            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="text-xl font-extrabold text-slate-900 dark:text-white block mb-1">
                  3m 42s
                </span>
                <p className="text-[11px] leading-tight text-slate-600 dark:text-slate-400">
                  Average session duration across comparison and review pages.
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="text-xl font-extrabold text-slate-900 dark:text-white block mb-1">
                  4.2 Pages
                </span>
                <p className="text-[11px] leading-tight text-slate-600 dark:text-slate-400">
                  Average pages viewed per session by active software buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
