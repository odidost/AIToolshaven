import Link from "next/link";
import { HeroVisual } from "@/components/home/hero/HeroVisual";

export function SpotlightBanner() {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-slate-950 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
      
      {/* Background ambient glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[120px] mix-blend-screen pointer-events-none" />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative z-10 grid items-center gap-12 px-8 py-16 md:px-12 lg:min-h-[700px] lg:grid-cols-2">

        {/* ================= LEFT ================= */}
        <div className="flex flex-col justify-center">

          {/* Pulse Badge */}
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
            </span>
            <span className="tracking-wide uppercase">AI OS 2.0 Is Live</span>
          </div>

          <h1 className="mt-8 max-w-2xl text-5xl font-black leading-[1.1] tracking-tight lg:text-7xl">
            <span className="text-white">Discover the </span>
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-primary bg-clip-text text-transparent">Next Gen</span>
            <br />
            <span className="text-white">of AI Tools.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Your centralized operating system for artificial intelligence. Explore carefully curated tools to write, design, automate, and build faster.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/category/text-generation"
              className="group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <span>Explore Platform</span>
              <span className="material-symbols-outlined ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>

            <Link
              href="/submit"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            >
              Submit a Tool
            </Link>
          </div>

          {/* Trust Signals & Stats */}
          <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
            
            {/* Avatars */}
            <div className="flex flex-col gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-slate-950 bg-slate-800">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=transparent`} 
                      alt="User avatar" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <div className="flex gap-1 text-accent">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <span>from 10,000+ creators</span>
              </div>
            </div>

            <div className="hidden h-12 w-px bg-white/10 sm:block"></div>

            {/* Quick Stats */}
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">5K+</span>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">AI Tools</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">40+</span>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Categories</span>
              </div>
            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="hidden lg:flex justify-end relative h-full">
          <HeroVisual />
        </div>

      </div>

    </section>
  );
}