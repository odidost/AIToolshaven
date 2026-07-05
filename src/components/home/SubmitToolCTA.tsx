import Link from "next/link";

export function SubmitToolCTA() {
  return (
    <section className="mb-24 relative overflow-hidden rounded-[40px] bg-slate-950 p-8 md:p-16 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
      
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 h-full w-1/2 rounded-full bg-primary/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-full w-1/2 rounded-full bg-secondary/15 blur-[150px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <div className="flex items-center gap-2 text-primary mb-4">
          <span className="material-symbols-outlined text-xl">rocket_launch</span>
          <span className="text-sm font-bold uppercase tracking-widest">Grow Your Tool</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
          Get your AI tool in front of{" "}
          <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">100,000+</span>{" "}
          early adopters.
        </h2>
        
        <p className="text-lg text-slate-400 mb-10 max-w-2xl">
          Join the fastest-growing AI directory on the internet. Gain high-quality backlinks, targeted traffic, and early feedback from power users.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/submit"
            className="group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <span>Submit Your Tool Now</span>
            <span className="material-symbols-outlined ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
          <Link
            href="/advertising"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          >
            View Sponsorships
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 border-t border-white/10 pt-8 w-full max-w-md">
          <div className="text-center">
            <p className="text-2xl font-black text-white">2.5M+</p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Monthly Views</p>
          </div>
          <div className="h-10 w-px bg-white/10"></div>
          <div className="text-center">
            <p className="text-2xl font-black text-white">45%</p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Conversion Rate</p>
          </div>
          <div className="h-10 w-px bg-white/10"></div>
          <div className="text-center">
            <p className="text-2xl font-black text-white">#1</p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">AI Directory</p>
          </div>
        </div>
      </div>
    </section>
  );
}
