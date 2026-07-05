export function HeroDashboard() {
  return (
    <div className="relative z-20 w-[460px] shadow-2xl transition duration-500 hover:-translate-y-2">
      
      {/* Background glow for the dashboard itself */}
      <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-white/20 to-transparent opacity-20 blur-lg"></div>

      {/* Main Container */}
      <div className="relative rounded-[28px] border border-white/10 bg-[#0F172A]/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
        
        {/* Window Chrome / Header */}
        <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-6 py-4">
          <div className="flex items-center gap-2">
            {/* macOS style dots */}
            <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
              Command Center
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Optimal</span>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="p-6">
          
          {/* Active Process / Graph Mockup */}
          <div className="mb-6 rounded-2xl border border-white/5 bg-slate-900/50 p-4 shadow-inner">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <span className="material-symbols-outlined text-lg">
                    model_training
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Neural Engine</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Processing 12M+ queries</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-white">99.9%</p>
                <p className="text-[10px] text-emerald-400 uppercase tracking-wider">Uptime</p>
              </div>
            </div>

            {/* Mock Chart Lines */}
            <div className="flex h-12 items-end justify-between gap-1 mt-2">
              {[40, 70, 45, 90, 65, 85, 50, 95, 60, 80, 55, 75].map((height, i) => (
                <div 
                  key={i} 
                  className="w-full rounded-t-sm bg-gradient-to-t from-primary/30 to-primary/80 animate-pulse"
                  style={{ height: `${height}%`, animationDelay: `${i * 100}ms` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Recent Activity List */}
          <div className="space-y-2">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Activity</span>
              <span className="text-[10px] text-slate-500">Real-time</span>
            </div>

            {[
              { icon: 'edit_document', color: 'text-sky-400', bg: 'bg-sky-400/10', title: 'Content generated', subtitle: 'Jasper AI', time: '2s ago' },
              { icon: 'code', color: 'text-indigo-400', bg: 'bg-indigo-400/10', title: 'Code refactored', subtitle: 'GitHub Copilot', time: '12s ago' },
              { icon: 'image', color: 'text-fuchsia-400', bg: 'bg-fuchsia-400/10', title: 'Image rendered', subtitle: 'Midjourney', time: '24s ago' }
            ].map((item, idx) => (
              <div key={idx} className="group flex items-center justify-between rounded-xl border border-transparent p-2.5 transition-all hover:border-white/5 hover:bg-white/5">
                <div className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${item.bg} ${item.color} shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]`}>
                    <span className="material-symbols-outlined text-[16px]">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200">{item.title}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
                <span className="text-[10px] font-medium text-slate-500 transition-colors group-hover:text-slate-300">{item.time}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}