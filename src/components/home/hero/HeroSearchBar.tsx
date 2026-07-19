"use client";

export function HeroSearchBar() {
  const triggerCommandPalette = () => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 relative group">
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
      
      {/* Search Bar Container */}
      <button 
        onClick={triggerCommandPalette}
        className="relative w-full flex items-center justify-between bg-white/60 backdrop-blur-3xl border border-black/5 hover:border-black/10 rounded-[2rem] p-3 pl-6 pr-3 shadow-xl transition-all duration-300 group-hover:-translate-y-1 text-left"
      >
        <div className="flex items-center gap-4 text-on-surface-variant group-hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-[28px] text-primary">search</span>
          <span className="text-lg font-medium opacity-70">What do you want to build today?</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-black/5 rounded-xl border border-black/5 shadow-inner">
            <span className="text-xs font-mono font-bold text-on-surface-variant">⌘</span>
            <span className="text-xs font-mono font-bold text-on-surface-variant">K</span>
          </div>
          <div className="bg-primary text-white rounded-xl px-6 py-3 font-bold shadow-glow text-sm tracking-wide transition-transform group-hover:scale-105">
            Search
          </div>
        </div>
      </button>
    </div>
  );
}
