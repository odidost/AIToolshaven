export function GoalVisualRoadmap() {
  return (
    <div className="my-12 p-8 sm:p-10 bg-surface border border-outline rounded-3xl shadow-xs">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
          The 3-Phase Monetization Framework
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-on-surface mt-1">
          From Concept to Predictable AI Revenue
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Phase 1 */}
        <div className="bg-surface-secondary/40 border border-border/80 rounded-2xl p-6 relative flex flex-col">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-sm mb-4">
            01
          </div>
          <h4 className="font-bold text-base text-on-surface mb-2">High-Margin Niche Discovery</h4>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Select a specific, underserved commercial outcome (e.g. faceless YouTube documentaries, B2B lead scraping, or micro-SaaS prototypes).
          </p>
        </div>

        {/* Phase 2 */}
        <div className="bg-surface-secondary/40 border border-border/80 rounded-2xl p-6 relative flex flex-col">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-sm mb-4">
            02
          </div>
          <h4 className="font-bold text-base text-on-surface mb-2">Multi-Model Pipeline Assembly</h4>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Chain specialized tools together: reasoning models for research, voice generators for audio, and video synthesis for final delivery.
          </p>
        </div>

        {/* Phase 3 */}
        <div className="bg-surface-secondary/40 border border-border/80 rounded-2xl p-6 relative flex flex-col">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-black text-sm mb-4">
            03
          </div>
          <h4 className="font-bold text-base text-on-surface mb-2">Client Retainers &amp; Passive MRR</h4>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Monetize your automated pipeline via client agency retainers, software subscriptions, YouTube AdSense, or digital info-products.
          </p>
        </div>
      </div>
    </div>
  );
}
