import Link from "next/link";

export function CategoriesEditorialGuide({ totalCategories = 25 }: { totalCategories?: number }) {
  return (
    <section className="mt-16 mb-20">
      {/* Centered Editorial Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <span className="material-symbols-outlined text-[16px]">verified</span>
          Buyer Evaluation Framework
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight mb-4">
          Directory Selection Guide: How to Evaluate AI Software in 2026
        </h2>
        <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
          With thousands of specialized models launching monthly, selecting software by functional use-case 
          prevents subscription overlap, lowers token waste, and accelerates tangible execution across your team.
        </p>
      </div>

      {/* 4 Architecture & Decision Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
        {/* Pillar 1 */}
        <div className="bg-surface border border-outline rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-primary/40 hover:shadow-xl transition-all group">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[28px]">psychology</span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-3 tracking-tight">
              1. Generative Assistants vs. Autonomous Agents
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
              Distinguish between prompt-response generative software (such as AI writing assistants or image generators that require human co-piloting) and emerging autonomous agent frameworks that independently query APIs, browse live websites, and execute multi-step business objectives with minimal oversight.
            </p>
          </div>
          <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
            <span>Explore Agent &amp; Workflow Categories</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="bg-surface border border-outline rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-xl transition-all group">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[28px]">price_check</span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-3 tracking-tight">
              2. Freemium Allowances &amp; True Pricing Tiers
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
              Evaluate software beyond superficial monthly fees. Look closely at per-generation credit consumption, concurrency speed caps, API token markups, and watermark policies. True value lies in platforms offering predictable flat rates or generous free tiers that don&apos;t lock key deliverables behind abrupt paywalls.
            </p>
          </div>
          <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-emerald-600">
            <span>Filter by 100% Free &amp; Freemium Tools</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="bg-surface border border-outline rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-violet-500/40 hover:shadow-xl transition-all group">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-violet-500/10 text-violet-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[28px]">hub</span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-3 tracking-tight">
              3. Cross-Category Chaining &amp; Automation
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
              Maximum productivity happens when you interconnect specialized category leaders into automated pipelines. For example, chaining an AI research tool with an AI copywriter, passing drafts to voice synthesis, and rendering short-form video generates 10x leverage compared to using disconnected apps.
            </p>
          </div>
          <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-violet-600">
            <span>Discover Pre-Built AI Workflows</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="bg-surface border border-outline rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-amber-500/40 hover:shadow-xl transition-all group">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[28px]">verified_user</span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-3 tracking-tight">
              4. Commercial Rights, Privacy &amp; Model Governance
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
              Before deploying any AI tool for client work or proprietary business intelligence, verify its commercial licensing terms, copyright indemnification, and zero-data-retention policy. Enterprise-grade tools explicitly guarantee your proprietary prompts and customer data will never be used to train public models.
            </p>
          </div>
          <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-amber-600">
            <span>Verified Commercial Licensing Guaranteed</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </div>
        </div>
      </div>

      {/* Cross-Silo Interconnection Hub Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none -mr-24 -mt-24" />
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-wider mb-3.5">
              <span className="material-symbols-outlined text-[16px]">all_inclusive</span>
              Complete AI Ecosystem
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
              Connect Categories into High-Performance Workflows
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Don&apos;t settle for isolated single-task tools. Browse our curated multi-app stacks and monetization missions 
              to turn functional categories into automated revenue-generating systems.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/workflows"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-4 rounded-full transition-all shadow-lg active:scale-95"
            >
              Browse AI Workflows
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <Link
              href="/goals"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-4 rounded-full border border-white/15 transition-all active:scale-95"
            >
              Explore Missions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
