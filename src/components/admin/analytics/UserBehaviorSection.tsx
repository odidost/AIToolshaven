"use client";

import { useState } from 'react';
import type { JourneyStep } from '@/lib/data/analytics-data';

interface UserBehaviorSectionProps {
  userJourney: JourneyStep[];
  scrollDepth: Array<{ depth: string; percentage: number }>;
  sessionDurations: Array<{ range: string; count: number; percentage: number }>;
}

export function UserBehaviorSection({ userJourney, scrollDepth, sessionDurations }: UserBehaviorSectionProps) {
  const [activeHeatmap, setActiveHeatmap] = useState<'click' | 'scroll'>('click');

  return (
    <section id="sec-journey" className="scroll-mt-24 mb-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">alt_route</span>
            User Journey & Behavioral Analytics
          </h2>
          <p className="text-xs text-slate-500">
            Conversion funnel paths, session duration buckets, scroll depth distribution, and heatmap intelligence
          </p>
        </div>

        {/* 1. User Journey Funnel Flow */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">account_tree</span>
            Most Common User Journey Funnel
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {userJourney.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Step {idx + 1}
                  </span>
                  <h4 className="font-extrabold text-slate-900 text-xs mb-1">{step.step.replace(/^\d+\.\s*/, '')}</h4>
                  <p className="text-[11px] text-slate-500 mb-3">{step.description}</p>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-base font-black text-slate-900">{step.count.toLocaleString()}</span>
                    {step.dropoffRate > 0 && (
                      <span className="text-[10px] font-bold text-rose-600">
                        -{step.dropoffRate}% dropoff
                      </span>
                    )}
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${Math.max(15, 100 - idx * 18)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Scroll Depth & Session Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Scroll Depth */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[18px]">unfold_more</span>
              Page Scroll Depth Distribution
            </h3>
            <div className="space-y-3">
              {scrollDepth.map((item) => (
                <div key={item.depth} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-700">{item.depth}</span>
                    <span className="text-slate-900 font-bold">{item.percentage}% of readers</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Session Duration Histogram */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[18px]">timer</span>
              Session Duration Distribution
            </h3>
            <div className="space-y-3">
              {sessionDurations.map((item) => (
                <div key={item.range} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-700 font-mono">{item.range}</span>
                    <span className="text-slate-900 font-bold">
                      {item.percentage}% ({item.count.toLocaleString()} sessions)
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 rounded-full"
                      style={{ width: `${item.percentage * 2.5}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Heatmap Integration Preview */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-400 text-[18px]">view_in_ar</span>
                Microsoft Clarity & Heatmap Integration
              </h3>
              <p className="text-xs text-slate-400">
                Visual click density & scroll position telemetry overlay
              </p>
            </div>

            <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg">
              <button
                onClick={() => setActiveHeatmap('click')}
                className={`px-3 py-1 text-xs font-semibold rounded ${
                  activeHeatmap === 'click' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                Click Heatmap
              </button>
              <button
                onClick={() => setActiveHeatmap('scroll')}
                className={`px-3 py-1 text-xs font-semibold rounded ${
                  activeHeatmap === 'scroll' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                Scroll Heatmap
              </button>
            </div>
          </div>

          <div className="relative h-44 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center p-6 text-center overflow-hidden">
            {/* Heatmap visual glow dots */}
            <span className="absolute top-1/4 left-1/3 w-20 h-20 bg-rose-500/40 rounded-full blur-xl animate-pulse" />
            <span className="absolute top-1/2 left-1/2 w-32 h-32 bg-amber-500/40 rounded-full blur-2xl animate-pulse" />
            <span className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-blue-500/30 rounded-full blur-xl" />

            <div className="relative z-10 space-y-2">
              <span className="material-symbols-outlined text-3xl text-amber-400">touch_app</span>
              <p className="text-xs font-semibold text-slate-200">
                Highest Click Intensity Zone: <span className="text-amber-300 font-bold">"Try Cursor AI" Affiliate CTA Button</span>
              </p>
              <p className="text-[11px] text-slate-400">
                84.2% of users interact with the top tool comparison table before clicking outbound affiliate links.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
