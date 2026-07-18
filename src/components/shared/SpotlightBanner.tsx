import Image from 'next/image';
import Link from "next/link";
import { HeroVisual } from "@/components/home/hero/HeroVisual";
import { BackgroundPattern } from "@/components/shared/BackgroundPattern";

export function SpotlightBanner() {
  return (
    <section className="relative w-full border-b border-border bg-surface shadow-xs overflow-hidden">
      
      {/* Aurora Mesh Background */}
      <BackgroundPattern type="aurora" opacity={1} />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 grid items-start gap-12 pt-12 sm:pt-16 md:pt-20 pb-0 lg:min-h-[600px] lg:grid-cols-2">

        {/* ================= LEFT ================= */}
        <div className="flex flex-col justify-start">

          {/* Pulse Badge */}
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-primary shadow-sm transition-colors hover:bg-surface-secondary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="tracking-wide uppercase">AI OS 2.0 Is Live</span>
          </div>

          <h1 className="mt-8 w-full text-fluid-h1 font-black tracking-tight text-on-surface">
            <span>Discover the </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Next Gen</span>
            <br />
            <span>of AI Tools.</span>
          </h1>

          <p className="mt-6 w-full text-base sm:text-lg leading-relaxed text-on-surface-variant">
            Your centralized operating system for artificial intelligence. Explore carefully curated tools to write, design, automate, and build faster.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/category/text-generation"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-secondary px-8 py-4 font-bold text-white shadow-glow transition-all duration-300 hover:-translate-y-[0.5px] hover:shadow-glow-primary"
            >
              <span>Explore Platform</span>
              <span className="material-symbols-outlined ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>

            <Link
              href="/submit"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl border border-outline bg-surface px-8 py-4 font-bold text-on-surface shadow-xs transition-all duration-300 hover:bg-surface-secondary hover:border-border hover:-translate-y-[0.5px]"
            >
              Submit a Tool
            </Link>
          </div>

          {/* Trust Signals & Stats */}
          <div className="mt-12 flex flex-wrap items-center gap-6 lg:gap-8">
            
            {/* Avatars & Rating */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-6 w-6 sm:h-8 sm:w-8 overflow-hidden rounded-full border-2 border-surface bg-surface">
                    <Image width={100} height={100} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=transparent`} 
                      alt="User avatar" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-0.5 text-xs font-medium text-on-surface-variant">
                <div className="flex gap-0.5 text-warning">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <span>from 10,000+ creators</span>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-border sm:block"></div>

            {/* Quick Stats */}
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-0.5">
                <span className="text-xl font-black leading-none text-on-surface">5K+</span>
                <span className="text-[10px] font-bold tracking-widest text-on-surface-variant/70 uppercase">AI Tools</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xl font-black leading-none text-on-surface">40+</span>
                <span className="text-[10px] font-bold tracking-widest text-on-surface-variant/70 uppercase">Categories</span>
              </div>
            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="hidden lg:flex justify-end relative h-full -mt-16 xl:-mt-24 pointer-events-none">
          <HeroVisual />
        </div>

      </div>

    </section>
  );
}