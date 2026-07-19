import Image from 'next/image';
import Link from "next/link";
import { BackgroundPattern } from "@/components/shared/BackgroundPattern";
import { HeroTypingText } from "@/components/home/hero/HeroTypingText";
import { HeroSearchBar } from "@/components/home/hero/HeroSearchBar";
import { HeroFloatingLogos } from "@/components/home/hero/HeroFloatingLogos";
import { HeroAura } from "@/components/home/hero/HeroAura";

export function SpotlightBanner() {
  return (
    <section className="relative w-full overflow-hidden pb-0">
      
      {/* Interactive Mouse Aura */}
      <HeroAura />

      {/* Floating Background Logos */}
      <HeroFloatingLogos />

      {/* Aurora Mesh Background */}
      <BackgroundPattern type="aurora" opacity={1} />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />

      <div className="w-full max-w-[900px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center text-center pt-12 sm:pt-16 md:pt-20 pb-0 lg:min-h-[500px]">

        {/* Pulse Badge */}
        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary shadow-sm transition-colors hover:bg-primary/20 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          <span className="tracking-wide uppercase">AI OS 2.0 Is Live</span>
        </div>

        <h1 className="mt-8 text-fluid-h1 font-black tracking-tight text-on-surface">
          <span>Discover the Next Gen of </span>
          <br />
          <HeroTypingText />
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-on-surface-variant">
          Your centralized operating system for artificial intelligence. Explore carefully curated tools to write, design, automate, and build faster.
        </p>

        <HeroSearchBar />

          {/* Trust Signals & Stats */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 lg:gap-8 w-full border-t border-black/5 pt-8">
            
            {/* Avatars & Rating */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-6 w-6 sm:h-8 sm:w-8 overflow-hidden rounded-full border-2 border-white bg-surface shadow-sm">
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

            <div className="hidden h-6 w-px bg-black/10 sm:block"></div>

            {/* Live Social Ticker */}
            <div className="flex items-center gap-2 bg-black/5 border border-black/10 rounded-full px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <div className="text-xs font-medium text-on-surface-variant overflow-hidden h-4 relative w-[220px]">
                <div className="absolute top-0 left-0 animate-[float-up_10s_infinite]">
                  <div className="h-4 flex items-center">Just added: Claude 3.5 Sonnet</div>
                  <div className="h-4 flex items-center">15 new tools updated today</div>
                  <div className="h-4 flex items-center">Trending: Cursor AI Editor</div>
                </div>
              </div>
            </div>

            <div className="hidden h-6 w-px bg-black/10 sm:block"></div>

            {/* Quick Stats */}
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-0.5 text-left">
                <span className="text-lg font-black leading-none text-gray-900">5K+</span>
                <span className="text-[9px] font-bold tracking-widest text-on-surface-variant uppercase">AI Tools</span>
              </div>
              <div className="flex flex-col gap-0.5 text-left">
                <span className="text-lg font-black leading-none text-gray-900">40+</span>
                <span className="text-[9px] font-bold tracking-widest text-on-surface-variant uppercase">Categories</span>
              </div>
            </div>

          </div>

      </div>

    </section>
  );
}