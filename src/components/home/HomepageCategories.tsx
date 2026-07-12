import Link from 'next/link';
import { categories } from '@/lib/data/categories';

const pillColors = [
  'bg-purple-600 text-white border-purple-400/30 hover:bg-purple-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]',
  'bg-blue-600 text-white border-blue-400/30 hover:bg-blue-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]',
  'bg-emerald-600 text-white border-emerald-400/30 hover:bg-emerald-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(5,150,105,0.4)]',
  'bg-orange-600 text-white border-orange-400/30 hover:bg-orange-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(234,88,12,0.4)]',
  'bg-pink-600 text-white border-pink-400/30 hover:bg-pink-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(219,39,119,0.4)]',
  'bg-cyan-600 text-white border-cyan-400/30 hover:bg-cyan-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(8,145,178,0.4)]',
  'bg-indigo-600 text-white border-indigo-400/30 hover:bg-indigo-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]',
  'bg-rose-600 text-white border-rose-400/30 hover:bg-rose-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]',
];

export function HomepageCategories() {
  const validCategories = categories.filter((c) => !c.name.includes("Untitled"));
  
  // Split into two rows
  const midPoint = Math.ceil(validCategories.length / 2);
  const topCategories = validCategories.slice(0, midPoint);
  const bottomCategories = validCategories.slice(midPoint);

  // Duplicate heavily for infinite marquee effect so it never runs out
  const topMarquee = [...topCategories, ...topCategories, ...topCategories, ...topCategories, ...topCategories];
  const bottomMarquee = [...bottomCategories, ...bottomCategories, ...bottomCategories, ...bottomCategories, ...bottomCategories];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-[#05050A] border-y border-border/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
      
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Deep mesh grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <defs>
            <pattern id="premium-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#premium-grid)" />
        </svg>

        {/* Ambient Glowing Orbs */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 dark:bg-primary/10 blur-[120px]" />
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-secondary/20 dark:bg-secondary/10 blur-[120px]" />
        <div className="absolute top-[20%] left-[40%] w-[30%] h-[30%] rounded-full bg-accent/20 dark:bg-accent/10 blur-[100px]" />
      </div>

      {/* Dynamic Edge Light */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="relative z-10 w-full max-w-[1920px] 2xl:max-w-[2560px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 px-5 sm:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 backdrop-blur-md">
             <span className="material-symbols-outlined text-sm text-primary">explore</span>
             <span className="text-[11px] font-bold tracking-widest text-primary uppercase">Discover The Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            Explore Categories
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative flex flex-col gap-6 overflow-hidden py-6">
          
          {/* Gradient Masks for smooth fade on the edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-64 bg-gradient-to-r from-slate-50 dark:from-[#05050A] to-transparent z-20"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-64 bg-gradient-to-l from-slate-50 dark:from-[#05050A] to-transparent z-20"></div>

          {/* Top Row (Moving Right to Left) */}
          <div className="flex overflow-hidden group">
            <div className="flex animate-marquee items-center gap-5 w-max shrink-0 pr-5">
              {topMarquee.map((category, idx) => {
                const colorClass = pillColors[idx % pillColors.length];
                return (
                  <Link
                    key={`top1-${category.id}-${idx}`}
                    href={`/category/${category.slug}`}
                    className={`group flex items-center gap-3 px-7 py-4 rounded-full border transition-all duration-300 hover:-translate-y-[2px] whitespace-nowrap flex-shrink-0 backdrop-blur-sm ${colorClass}`}
                  >
                    <span className="material-symbols-outlined text-[22px] leading-none transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">
                      {category.icon}
                    </span>
                    <span className="font-bold text-[15px] tracking-wide drop-shadow-sm">
                      {category.name}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="flex animate-marquee items-center gap-5 w-max shrink-0 pr-5" aria-hidden="true">
              {topMarquee.map((category, idx) => {
                const colorClass = pillColors[idx % pillColors.length];
                return (
                  <Link
                    key={`top2-${category.id}-${idx}`}
                    href={`/category/${category.slug}`}
                    className={`group flex items-center gap-3 px-7 py-4 rounded-full border transition-all duration-300 hover:-translate-y-[2px] whitespace-nowrap flex-shrink-0 backdrop-blur-sm ${colorClass}`}
                    tabIndex={-1}
                  >
                    <span className="material-symbols-outlined text-[22px] leading-none transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">
                      {category.icon}
                    </span>
                    <span className="font-bold text-[15px] tracking-wide drop-shadow-sm">
                      {category.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Row (Moving Left to Right) */}
          <div className="flex overflow-hidden group">
            <div className="flex animate-marquee-reverse items-center gap-5 w-max shrink-0 pr-5">
              {bottomMarquee.map((category, idx) => {
                const colorClass = pillColors[(idx + 3) % pillColors.length];
                return (
                  <Link
                    key={`bottom1-${category.id}-${idx}`}
                    href={`/category/${category.slug}`}
                    className={`group flex items-center gap-3 px-7 py-4 rounded-full border transition-all duration-300 hover:-translate-y-[2px] whitespace-nowrap flex-shrink-0 backdrop-blur-sm ${colorClass}`}
                  >
                    <span className="material-symbols-outlined text-[22px] leading-none transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">
                      {category.icon}
                    </span>
                    <span className="font-bold text-[15px] tracking-wide drop-shadow-sm">
                      {category.name}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="flex animate-marquee-reverse items-center gap-5 w-max shrink-0 pr-5" aria-hidden="true">
              {bottomMarquee.map((category, idx) => {
                const colorClass = pillColors[(idx + 3) % pillColors.length];
                return (
                  <Link
                    key={`bottom2-${category.id}-${idx}`}
                    href={`/category/${category.slug}`}
                    className={`group flex items-center gap-3 px-7 py-4 rounded-full border transition-all duration-300 hover:-translate-y-[2px] whitespace-nowrap flex-shrink-0 backdrop-blur-sm ${colorClass}`}
                    tabIndex={-1}
                  >
                    <span className="material-symbols-outlined text-[22px] leading-none transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">
                      {category.icon}
                    </span>
                    <span className="font-bold text-[15px] tracking-wide drop-shadow-sm">
                      {category.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
