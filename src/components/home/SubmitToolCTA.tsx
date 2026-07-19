import Link from "next/link";

export function SubmitToolCTA() {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-rose-700 rounded-[2.5rem] md:rounded-[3rem] border border-white/20 shadow-2xl group">
      
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 h-[150%] w-[150%] -translate-y-1/4 translate-x-1/4 rounded-full bg-gradient-to-b from-rose-500/30 to-purple-500/0 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-full w-1/2 rounded-full bg-sky-500/20 blur-[150px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 pointer-events-none" />

      {/* Floating Orbital Tool Icons (Visual Storytelling) */}
      <div className="absolute top-[15%] left-[10%] w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce pointer-events-none" style={{ animationDuration: '4s' }}>
        <span className="material-symbols-outlined text-white/80 text-3xl">auto_awesome</span>
      </div>
      <div className="absolute top-[25%] right-[12%] w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce pointer-events-none" style={{ animationDuration: '5s', animationDelay: '1s' }}>
        <span className="material-symbols-outlined text-white/80 text-2xl">electric_bolt</span>
      </div>
      <div className="absolute bottom-[20%] left-[15%] w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce pointer-events-none" style={{ animationDuration: '6s', animationDelay: '2s' }}>
        <span className="material-symbols-outlined text-white/80 text-xl">smart_toy</span>
      </div>
      <div className="absolute bottom-[30%] right-[10%] w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl animate-bounce pointer-events-none" style={{ animationDuration: '7s', animationDelay: '0.5s' }}>
        <span className="material-symbols-outlined text-white/80 text-4xl">rocket_launch</span>
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-16 sm:py-20 md:py-24 flex flex-col items-center text-center">
        
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-rose-100 px-5 py-2 rounded-full mb-8 shadow-lg">
          <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
          <span className="text-[11px] font-black uppercase tracking-[0.2em]">Grow Your Tool</span>
        </div>
        
        {/* Headline */}
        <h2 className="text-fluid-h1 font-black text-white leading-tight mb-8">
          Put your AI tool in front of the{" "}
          <span className="relative whitespace-nowrap">
            <span className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-rose-400 blur opacity-40 mix-blend-screen group-hover:opacity-70 transition-opacity duration-1000"></span>
            <span className="relative bg-gradient-to-r from-amber-300 via-rose-300 to-amber-300 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              right
            </span>
          </span>{" "}
          audience.
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl text-rose-100/80 mb-12 max-w-2xl font-medium leading-relaxed">
          Get listed on the directory people actually use to find their next workflow stack. Build backlinks, drive traffic, and collect early feedback.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mb-16">
          <Link
            href="/submit"
            className="group relative inline-flex items-center justify-center rounded-full bg-white px-10 py-5 font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)]"
          >
            <span className="text-lg">Submit Your Tool Now</span>
            <span className="material-symbols-outlined ml-2 text-xl transition-transform duration-300 group-hover:translate-x-2">
              arrow_forward
            </span>
          </Link>
          <Link
            href="/advertising"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-10 py-5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 hover:border-white/50 text-lg shadow-lg"
          >
            View Sponsorships
          </Link>
        </div>

        {/* Glassmorphic Stats Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-4xl">
          
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 min-w-[180px] shadow-xl hover:-translate-y-1 transition-transform duration-300">
            <p className="text-3xl font-black text-white mb-1 drop-shadow-sm">2.5M+</p>
            <p className="text-[11px] font-bold text-rose-200 uppercase tracking-widest">Monthly Views</p>
          </div>
          
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 min-w-[180px] shadow-xl hover:-translate-y-1 transition-transform duration-300">
            <p className="text-3xl font-black text-white mb-1 drop-shadow-sm">45%</p>
            <p className="text-[11px] font-bold text-amber-200 uppercase tracking-widest">Conversion Rate</p>
          </div>
          
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 min-w-[180px] shadow-xl hover:-translate-y-1 transition-transform duration-300">
            <p className="text-3xl font-black text-white mb-1 drop-shadow-sm">#1</p>
            <p className="text-[11px] font-bold text-sky-200 uppercase tracking-widest">AI Directory</p>
          </div>

        </div>
      </div>
    </section>
  );
}
