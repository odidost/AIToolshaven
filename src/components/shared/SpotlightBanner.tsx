import Link from "next/link";
import { HeroVisual } from "@/components/home/hero/HeroVisual";

export function SpotlightBanner() {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-surface-secondary border border-border/50 shadow-md">
      
      {/* Aurora Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.05),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.05),transparent_50%)] pointer-events-none" />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative z-10 grid items-center gap-12 px-8 py-16 md:px-12 lg:min-h-[700px] lg:grid-cols-2">

        {/* ================= LEFT ================= */}
        <div className="flex flex-col justify-center">

          {/* Pulse Badge */}
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-primary shadow-sm transition-colors hover:bg-surface-secondary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="tracking-wide uppercase">AI OS 2.0 Is Live</span>
          </div>

          <h1 className="mt-8 max-w-2xl text-5xl font-black leading-[1.1] tracking-tight lg:text-6xl text-on-surface">
            <span>Discover the </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Next Gen</span>
            <br />
            <span>of AI Tools.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant">
            Your centralized operating system for artificial intelligence. Explore carefully curated tools to write, design, automate, and build faster.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/category/text-generation"
              className="group relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-secondary px-8 py-4 font-bold text-white shadow-glow transition-all duration-300 hover:-translate-y-[0.5px] hover:shadow-glow-primary"
            >
              <span>Explore Platform</span>
              <span className="material-symbols-outlined ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>

            <Link
              href="/submit"
              className="inline-flex items-center justify-center rounded-2xl border border-outline bg-surface px-8 py-4 font-bold text-on-surface shadow-xs transition-all duration-300 hover:bg-surface-secondary hover:border-border hover:-translate-y-[0.5px]"
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
                  <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-surface bg-surface">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=transparent`} 
                      alt="User avatar" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                <div className="flex gap-1 text-warning">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <span>from 10,000+ creators</span>
              </div>
            </div>

            <div className="hidden h-12 w-px bg-border sm:block"></div>

            {/* Quick Stats */}
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-on-surface">5K+</span>
                <span className="text-[10px] font-bold tracking-widest text-on-surface-variant/70 uppercase">AI Tools</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-on-surface">40+</span>
                <span className="text-[10px] font-bold tracking-widest text-on-surface-variant/70 uppercase">Categories</span>
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