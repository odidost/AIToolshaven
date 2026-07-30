"use client";

export function IntegrationsSection() {
  const integrations = [
    { name: 'Google Analytics 4', status: 'Connected', id: 'GA4-389140-A', color: 'bg-amber-500', icon: 'analytics' },
    { name: 'Google Search Console', status: 'Connected', id: 'aitoolshaven.com', color: 'bg-blue-500', icon: 'search' },
    { name: 'Microsoft Clarity', status: 'Active', id: 'clarity_project_991', color: 'bg-purple-500', icon: 'view_in_ar' },
    { name: 'Supabase Database', status: 'Connected', id: 'db.aitoolshaven.supabase.co', color: 'bg-emerald-500', icon: 'database' },
    { name: 'Vercel Web Analytics', status: 'Connected', id: 'prj_aitoolshaven_prod', color: 'bg-slate-900', icon: 'cloud' },
  ];

  return (
    <section id="sec-integrations" className="scroll-mt-24 mb-12">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">hub</span>
              Integrations & Telemetry Connectors
            </h2>
            <p className="text-xs text-slate-500">
              Native API connections pulling external analytics metrics directly into Editorial OS
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {integrations.map((item) => (
            <div key={item.name} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {item.status}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-xs mb-1">{item.name}</h3>
                <span className="text-[10px] text-slate-400 font-mono block truncate">{item.id}</span>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-slate-500">Sync Status: OK</span>
                <button className="text-[10px] font-bold text-primary hover:underline">
                  Configure
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
