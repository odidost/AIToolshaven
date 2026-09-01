import Link from "next/link";

export function HomepageEditorialGuide() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-t border-black/5 bg-white/40 backdrop-blur-md">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary shadow-xs px-4 py-1.5 rounded-full mb-4">
            <span className="material-symbols-outlined text-[18px]">menu_book</span>
            <span className="text-xs font-bold uppercase tracking-widest">
              Editorial Guide &amp; Insights
            </span>
          </div>
          <h2 className="text-fluid-h2 font-black tracking-tight text-gray-900 leading-tight">
            The Human-Curated Guide to Choosing &amp; Scaling with AI Tools in 2026
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            With thousands of artificial intelligence tools launching every month, finding software that delivers measurable ROI rather than shallow gimmicks is harder than ever. Here is how our editorial team benchmarks software, tests free tiers, and designs automated workflows.
          </p>
        </div>

        {/* 3 Core Editorial Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 font-black text-xl">
              01
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">
              The 2026 Shift: From Wrappers to Autonomous Pipelines
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              In 2024–2025, the market was flooded with single-prompt ChatGPT wrappers. Today, leading creators and enterprises demand autonomous pipelines. Disconnected standalone apps are being replaced by <Link href="/workflows" className="text-primary font-bold hover:underline">multi-tool AI workflows</Link> that chain research, generation, editing, and deployment into unified systems.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 font-black text-xl">
              02
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">
              How We Evaluate AI Software: Our 5 Verification Pillars
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every tool listed in our directory is evaluated against 5 criteria: <strong>Output Fidelity &amp; Reasoning</strong>, <strong>API &amp; Developer Mobility</strong>, <strong>Real-World Latency</strong>, <strong>Pricing Transparency</strong> (flagging hidden credit traps), and <strong>Commercial Data Privacy</strong> (whether user inputs train public models).
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6 font-black text-xl">
              03
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">
              Free vs. Paid Software: Navigating True Free Tiers
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Over 40% of our catalog offers completely free tiers or recurring monthly allowances that do not require entering credit card details. We also index open-source, locally runnable models (e.g., Flux, Whisper, Ollama) that let you operate high-performance AI infrastructure at zero SaaS subscription cost.
            </p>
          </div>

        </div>

        {/* Role-Specific Curation Breakdown */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white to-slate-50/80 border border-black/5 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Tailored Stacks</span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
              Curated AI Stacks for Creators, Freelancers &amp; Developers
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
              Explore specialized tool clusters engineered for your specific business deliverables:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Role 1 */}
            <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
              <span className="material-symbols-outlined text-2xl text-primary mb-3">movie</span>
              <h4 className="font-bold text-gray-900 text-base mb-2">Content Creators</h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Automate short-form video repurposing, voiceovers, and YouTube hook detection.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Link href="/category/ai-video-generators" className="text-[11px] font-semibold text-primary hover:underline">
                  AI Video Tools &rarr;
                </Link>
                <span className="text-gray-300">&bull;</span>
                <Link href="/category/ai-voice-generators" className="text-[11px] font-semibold text-primary hover:underline">
                  Voice Generators &rarr;
                </Link>
              </div>
            </div>

            {/* Role 2 */}
            <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
              <span className="material-symbols-outlined text-2xl text-amber-500 mb-3">trending_up</span>
              <h4 className="font-bold text-gray-900 text-base mb-2">Freelancers &amp; Agencies</h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Deliver automated client SEO audits, copy generation, and multi-channel outreach.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Link href="/category/ai-seo-tools" className="text-[11px] font-semibold text-primary hover:underline">
                  AI SEO Tools &rarr;
                </Link>
                <span className="text-gray-300">&bull;</span>
                <Link href="/category/ai-writing-tools" className="text-[11px] font-semibold text-primary hover:underline">
                  AI Writing Software &rarr;
                </Link>
              </div>
            </div>

            {/* Role 3 */}
            <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
              <span className="material-symbols-outlined text-2xl text-blue-500 mb-3">terminal</span>
              <h4 className="font-bold text-gray-900 text-base mb-2">Software Developers</h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Accelerate code generation, terminal agent workflows, and automated refactoring.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Link href="/category/ai-coding-tools" className="text-[11px] font-semibold text-primary hover:underline">
                  Coding Assistants &rarr;
                </Link>
                <span className="text-gray-300">&bull;</span>
                <Link href="/category/ai-developer-tools" className="text-[11px] font-semibold text-primary hover:underline">
                  Developer Tools &rarr;
                </Link>
              </div>
            </div>

            {/* Role 4 */}
            <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
              <span className="material-symbols-outlined text-2xl text-emerald-500 mb-3">monetization_on</span>
              <h4 className="font-bold text-gray-900 text-base mb-2">Solopreneurs</h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Launch automated business blueprints, newsletters, and digital product assets.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Link href="/goals" className="text-[11px] font-semibold text-primary hover:underline">
                  Business Missions &rarr;
                </Link>
                <span className="text-gray-300">&bull;</span>
                <Link href="/compare-tools" className="text-[11px] font-semibold text-primary hover:underline">
                  Compare Software &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Directory Hub Quick Jump Index */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/5 shadow-xs">
          <div className="text-center max-w-2xl mx-auto pb-6 border-b border-black/5">
            <h3 className="text-xl font-black text-gray-900">Explore Key Directory Hubs</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-md mx-auto">
              Direct crawl index of high-traffic categories and curated platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-6">
            <Link href="/category/ai-video-generators" className="p-3 rounded-xl bg-surface hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Video Generators
            </Link>
            <Link href="/category/ai-coding-tools" className="p-3 rounded-xl bg-surface hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Coding Assistants
            </Link>
            <Link href="/category/ai-writing-tools" className="p-3 rounded-xl bg-surface hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Writing Software
            </Link>
            <Link href="/category/ai-image-generators" className="p-3 rounded-xl bg-surface hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Image Generators
            </Link>
            <Link href="/category/ai-seo-tools" className="p-3 rounded-xl bg-surface hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              AI SEO Platforms
            </Link>
            <Link href="/category/ai-voice-generators" className="p-3 rounded-xl bg-surface hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Voice Generators
            </Link>
            <Link href="/workflows" className="p-3 rounded-xl bg-surface hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Automated Workflows
            </Link>
            <Link href="/goals" className="p-3 rounded-xl bg-surface hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Monetization Missions
            </Link>
            <Link href="/compare-tools" className="p-3 rounded-xl bg-surface hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Head-to-Head Matchups
            </Link>
            <Link href="/ai-tool-recommender" className="p-3 rounded-xl bg-surface hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              AI Tool Recommender
            </Link>
            <Link href="/latest-ai-tools" className="p-3 rounded-xl bg-surface hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Latest AI Tools
            </Link>
            <Link href="/popular-ai-tools" className="p-3 rounded-xl bg-surface hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Popular AI Software
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/categories" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Browse All 25+ Directory Categories <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
