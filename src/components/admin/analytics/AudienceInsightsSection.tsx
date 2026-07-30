"use client";

interface AudienceInsightsSectionProps {
  audience: {
    ageBrackets: Array<{ age: string; percentage: number }>;
    languages: Array<{ language: string; code: string; percentage: number }>;
    timezones: Array<{ zone: string; percentage: number }>;
    screenResolutions: Array<{ res: string; percentage: number }>;
    themePreference: { dark: number; light: number; system: number };
    networkTypes: Array<{ type: string; percentage: number }>;
  };
}

export function AudienceInsightsSection({ audience }: AudienceInsightsSectionProps) {
  return (
    <section id="sec-audience" className="scroll-mt-24 mb-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">psychology</span>
            Audience Demographics & Technical Preferences
          </h2>
          <p className="text-xs text-slate-500">
            Age breakdown, language locales, timezones, theme modes, screen resolutions, and connection speeds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Age Brackets */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Age Demographics</h3>
            <div className="space-y-2">
              {audience.ageBrackets.map((item) => (
                <div key={item.age} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-700">{item.age} years</span>
                    <span className="text-slate-900 font-bold">{item.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${item.percentage * 2}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Theme Preference (Dark vs Light) */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Theme Mode Preference</h3>
              <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden flex mb-4">
                <div style={{ width: `${audience.themePreference.dark}%` }} className="bg-slate-900 h-full" title="Dark Mode" />
                <div style={{ width: `${audience.themePreference.light}%` }} className="bg-amber-400 h-full" title="Light Mode" />
                <div style={{ width: `${audience.themePreference.system}%` }} className="bg-indigo-500 h-full" title="System Auto" />
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-900" /> Dark Mode
                  </span>
                  <span className="font-black text-slate-900">{audience.themePreference.dark}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Light Mode
                  </span>
                  <span className="font-black text-slate-900">{audience.themePreference.light}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> System Theme
                  </span>
                  <span className="font-black text-slate-900">{audience.themePreference.system}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Screen Resolutions */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Display Resolutions</h3>
            <div className="space-y-2 text-xs">
              {audience.screenResolutions.map((res) => (
                <div key={res.res} className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="font-mono text-slate-700">{res.res}</span>
                  <span className="font-bold text-slate-900">{res.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
