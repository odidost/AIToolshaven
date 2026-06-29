import Link from 'next/link';

export function SpotlightBanner() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-surface-container relative overflow-hidden shadow-lg">
      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-1 bg-surface-container/20 text-surface-container text-xs font-semibold px-3 py-1 rounded-full mb-6 backdrop-blur-sm">
          <span className="material-symbols-outlined text-sm">local_fire_department</span>
          Trending
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Discover the Next Generation of AI Tools</h2>
        <p className="text-surface-container/90 text-lg mb-8 max-w-xl">
          Explore our curated collection of over 500+ artificial intelligence tools to supercharge your workflow and boost productivity.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/category/text-generation" className="bg-surface-container text-primary font-bold px-6 py-3 rounded-full hover:bg-surface transition-colors shadow-sm hover:shadow-md">
            Explore Categories
          </Link>
          <Link href="/submit" className="bg-transparent border border-surface-container/50 hover:border-surface-container text-surface-container font-bold px-6 py-3 rounded-full hover:bg-surface-container/10 transition-colors">
            Submit a Tool
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none hidden md:block">
        {/* Using a placeholder for background pattern */}
        <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' }}></div>
      </div>
    </div>
  );
}
