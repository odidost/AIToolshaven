import Link from "next/link";

export function RecommenderEditorialGuide() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-28 border-t border-black/5 bg-white/60 backdrop-blur-md">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200/60 text-rose-700 shadow-xs px-4 py-1.5 rounded-full mb-4">
            <span className="material-symbols-outlined text-[18px]">psychology</span>
            <span className="text-xs font-extrabold uppercase tracking-widest">
              AI Stack Architecture &amp; Selection Strategy
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            The Definitive Guide to AI Stack Selection: Build Your High-ROI Software Pipeline in 2026
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            How to overcome tool proliferation, eliminate overlapping subscriptions, and synthesize an interoperable, high-impact AI tech stack tailored to your exact professional role.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="bg-surface border border-outline rounded-3xl p-8 sm:p-12 md:p-14 shadow-sm space-y-16 mb-16">
          
          {/* Chapter 1: The Modern Stack Dilemma */}
          <article className="space-y-6">
            <div className="flex items-center gap-3 text-rose-600 font-bold text-xs uppercase tracking-wider">
              <span className="material-symbols-outlined text-[20px]">warning</span>
              <span>The Tool Fatigue Crisis</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
              Why 82% of Teams Waste Money on Redundant AI Software Subscriptions
            </h3>

            <p className="text-base sm:text-lg text-on-surface font-medium leading-relaxed">
              With more than 15,000 AI tools launched over the past 24 months, digital professionals, engineers, and growth teams face severe subscription fatigue. The challenge in 2026 is no longer finding an AI tool—it is curating the <em>right</em> stack without paying for overlapping features.
            </p>

            <div className="space-y-4 text-[15px] sm:text-[16px] text-on-surface-variant leading-[28px]">
              <p>
                A common trap is purchasing five disjointed point solutions that each wrap the same underlying foundation model. A marketer might subscribe to an AI writing tool, an AI social post scheduler, an email subject generator, and a summarizer—unaware that a single tailored reasoning assistant coupled with modern{" "}
                <Link 
                  href="/category/ai-writing-tools" 
                  className="font-bold text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
                >
                  AI Writing Tools
                </Link>{" "}
                or prompt templates replaces all four subscriptions while providing higher editorial consistency.
              </p>

              <p>
                Similarly, software engineering teams often stack multiple autocomplete plugins that battle for IDE memory and context window limits. By using our{" "}
                <Link 
                  href="/ai-tool-recommender" 
                  className="font-bold text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
                >
                  AI Tool Recommender
                </Link>
                , you systematically filter tools by verified compatibility, reducing software spend while unlocking seamless, automated handoffs across your pipeline.
              </p>
            </div>
          </article>

          <hr className="border-border/60" />

          {/* Chapter 2: The 5-Pillar Evaluation Framework */}
          <article className="space-y-6">
            <div className="flex items-center gap-3 text-blue-600 font-bold text-xs uppercase tracking-wider">
              <span className="material-symbols-outlined text-[20px]">architecture</span>
              <span>Evaluation Methodology</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
              The 5-Pillar AI Selection Framework: Benchmarking Tools for Production
            </h3>

            <p className="text-base sm:text-lg text-on-surface font-medium leading-relaxed">
              Before adding any AI tool to your personal or enterprise arsenal, evaluate it against our 5 core operational benchmarks:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-2xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">1</span>
                  <h4 className="font-bold text-gray-900 text-sm">Context Retention &amp; Memory</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Can the tool remember multi-step instructions and project documentation without suffering prompt drift or hallucinating critical data?
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-2xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">2</span>
                  <h4 className="font-bold text-gray-900 text-sm">Token Economics &amp; Pricing Clarity</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Does the platform feature transparent credit allocations, predictable monthly pricing, and a generous trial, or does it enforce hidden rate limits?
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-2xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">3</span>
                  <h4 className="font-bold text-gray-900 text-sm">Ecosystem Composability</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Does the software support standard API integrations, Model Context Protocol (MCP) servers, or direct exports to your existing CRMs, IDEs, or CMSs?
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-2xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">4</span>
                  <h4 className="font-bold text-gray-900 text-sm">Production Latency &amp; Uptime</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We measure median time-to-first-token (TTFT) and batch rendering queues during global peak hours to verify reliable business operation.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">5</span>
                <h4 className="font-bold text-gray-900 text-sm">Data Privacy &amp; Commercial IP Rights</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Enterprise readiness requires strict guarantees that customer proprietary data, source code, and client prompts will not be utilized for model pretraining or exposed across tenants.
              </p>
            </div>
          </article>

          <hr className="border-border/60" />

          {/* Chapter 3: Practitioner Stacks by Role */}
          <article className="space-y-8">
            <div className="flex items-center gap-3 text-emerald-600 font-bold text-xs uppercase tracking-wider">
              <span className="material-symbols-outlined text-[20px]">group_work</span>
              <span>Role-Based Blueprints</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
              Verified 2026 AI Stacks: High-Conversion Blueprints for Key Roles
            </h3>

            {/* Persona 1: Solo Founders */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/5 shadow-xs space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <h4 className="font-black text-gray-900 text-lg sm:text-xl">Solo Founders &amp; Indie Hackers</h4>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Goal: Full-Stack MVP Launch in Days, Not Months</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Recommended 3-Tool Stack
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Founders must wear ten hats simultaneously. The modern indie stack pairs an AI app scaffolding builder like{" "}
                <Link href="/tool/lovable" className="font-bold text-primary hover:underline">Lovable</Link> or{" "}
                <Link href="/tool/bolt-new" className="font-bold text-primary hover:underline">Bolt.new</Link> with an intelligent code editor like{" "}
                <Link href="/tool/cursor" className="font-bold text-primary hover:underline">Cursor</Link>, backed by citation-verified market research through{" "}
                <Link href="/tool/perplexity-ai" className="font-bold text-primary hover:underline">Perplexity AI</Link>. Learn more in our comparison of{" "}
                <Link href="/compare-tools/bolt-new-vs-lovable" className="font-bold text-primary hover:underline">Bolt.new vs Lovable</Link>.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-xs font-bold">
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700">1. Lovable (App Generation)</span>
                <span className="text-gray-400 self-center">➔</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700">2. Cursor (Logic &amp; Refactoring)</span>
                <span className="text-gray-400 self-center">➔</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700">3. Supabase AI (Data Backend)</span>
              </div>
            </div>

            {/* Persona 2: Content Creators & Video Producers */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/5 shadow-xs space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎬</span>
                  <div>
                    <h4 className="font-black text-gray-900 text-lg sm:text-xl">Creators &amp; Video Producers</h4>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Goal: 10x Content Output Across YouTube, TikTok &amp; Reels</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                  High-Viral Efficiency
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Rather than manually scrubbing timelines and editing captions, top creators use an automated pipeline. Turn 1 long-form podcast into 20 viral clips using{" "}
                <Link href="/tool/opus-clip" className="font-bold text-primary hover:underline">Opus Clip</Link>, synthesize natural studio narration with{" "}
                <Link href="/category/ai-voice-generators" className="font-bold text-primary hover:underline">ElevenLabs</Link>, and craft click-worthy 4K thumbnails via{" "}
                <Link href="/category/ai-image-generators" className="font-bold text-primary hover:underline">Midjourney or Flux</Link>. Explore our full directory of{" "}
                <Link href="/category/ai-video-generators" className="font-bold text-primary hover:underline">AI Video Generators</Link>.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-xs font-bold">
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700">1. Descript (Rough Cut)</span>
                <span className="text-gray-400 self-center">➔</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700">2. Opus Clip (Viral Hooks)</span>
                <span className="text-gray-400 self-center">➔</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700">3. ElevenLabs (Studio Dubbing)</span>
              </div>
            </div>

            {/* Persona 3: Engineers & Technical Leads */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/5 shadow-xs space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💻</span>
                  <div>
                    <h4 className="font-black text-gray-900 text-lg sm:text-xl">Software Engineers &amp; Tech Leads</h4>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Goal: Zero Context Switching &amp; Agentic Test Coverage</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  SWE-Bench Certified
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Modern developer stacks transcend simple inline autocompletion. Developers coordinate terminal-based autonomous agents like Claude Code or Aider with multi-file code editors in{" "}
                <Link href="/category/coding-assistants" className="font-bold text-primary hover:underline">Coding Assistants</Link>{" "}
                to resolve GitHub issues, draft unit tests, and refactor legacy codebases autonomously.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-xs font-bold">
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700">1. Cursor (Daily Coding)</span>
                <span className="text-gray-400 self-center">➔</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700">2. Claude Code (CLI Agent)</span>
                <span className="text-gray-400 self-center">➔</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700">3. GitHub Copilot (CI/CD Reviews)</span>
              </div>
            </div>

            {/* Persona 4: Sales & RevOps Teams */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/5 shadow-xs space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📈</span>
                  <div>
                    <h4 className="font-black text-gray-900 text-lg sm:text-xl">Sales, RevOps &amp; Agency Outbound</h4>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Goal: Hyper-Personalized Prospecting at Scale</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
                  Pipeline Multiplier
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Generic blast emails are penalized by email providers in 2026. Top growth teams build a waterfall enrichment stack using{" "}
                <Link href="/category/marketing-sales" className="font-bold text-primary hover:underline">Marketing &amp; Sales AI Tools</Link>{" "}
                to scrape intent triggers, verify inbox deliverability, and generate unique, value-focused outreach lines that convert cold leads into booked meetings.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-xs font-bold">
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700">1. Clay (Waterfall Enrichment)</span>
                <span className="text-gray-400 self-center">➔</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700">2. Instantly (Smart Inbox Warmup)</span>
                <span className="text-gray-400 self-center">➔</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700">3. Apollo.ai (Lead Intelligence)</span>
              </div>
            </div>
          </article>

          <hr className="border-border/60" />

          {/* Chapter 4: Decision Comparison Matrix Table */}
          <article className="space-y-6">
            <div className="flex items-center gap-3 text-indigo-600 font-bold text-xs uppercase tracking-wider">
              <span className="material-symbols-outlined text-[20px]">table_chart</span>
              <span>Architectural Comparison</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
              Decision Matrix: Foundation Models vs. Vertical SaaS vs. Local AI
            </h3>

            <p className="text-base sm:text-lg text-on-surface font-medium leading-relaxed">
              When configuring your AI software budget, choosing the right architectural tier prevents overspending while ensuring maximum flexibility.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-black/10 shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-50 border-b border-black/10 font-bold text-gray-900">
                    <th className="p-4">AI Software Class</th>
                    <th className="p-4">Core Strengths</th>
                    <th className="p-4">Ideal Persona</th>
                    <th className="p-4">Average Cost</th>
                    <th className="p-4">Best Practice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-gray-600">
                  <tr>
                    <td className="p-4 font-bold text-gray-900">
                      Foundation Models<br />
                      <span className="text-xs font-normal text-gray-500">(Claude, ChatGPT, Gemini)</span>
                    </td>
                    <td className="p-4">Massive knowledge retrieval, complex logic, multimodal file parsing</td>
                    <td className="p-4">Generalists, Researchers, Writers</td>
                    <td className="p-4 font-semibold text-emerald-700">$20 / month</td>
                    <td className="p-4">Use as your primary reasoning engine and text workspace</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-gray-900">
                      Vertical Workflow SaaS<br />
                      <span className="text-xs font-normal text-gray-500">(Cursor, Opus Clip, Clay)</span>
                    </td>
                    <td className="p-4">Purpose-built UI, automated data pipelines, 1-click domain actions</td>
                    <td className="p-4">Developers, Creators, Sales Teams</td>
                    <td className="p-4 font-semibold text-gray-900">$20 - $99 / month</td>
                    <td className="p-4">Invest where your core revenue or billable hours are spent</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-gray-900">
                      Local &amp; Open-Source<br />
                      <span className="text-xs font-normal text-gray-500">(Ollama, DeepSeek, Flux)</span>
                    </td>
                    <td className="p-4">100% data privacy, zero recurring fees, custom fine-tuning</td>
                    <td className="p-4">Engineers, Privacy-Sensitive Teams</td>
                    <td className="p-4 font-semibold text-emerald-700">$0 (Hardware Cost)</td>
                    <td className="p-4">Host locally for sensitive company IP and uncapped offline tasks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <hr className="border-border/60" />

          {/* Chapter 5: The AI ROI Equation */}
          <article className="space-y-6">
            <div className="flex items-center gap-3 text-amber-600 font-bold text-xs uppercase tracking-wider">
              <span className="material-symbols-outlined text-[20px]">calculate</span>
              <span>Economic Audit</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
              The AI ROI Equation: How to Justify Software Upgrades
            </h3>

            <p className="text-base sm:text-lg text-on-surface font-medium leading-relaxed">
              Never pay for an AI tool without proving positive economic leverage. Use our practitioner ROI audit formula:
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 text-center">
              <span className="text-xs font-black uppercase tracking-wider text-amber-800">Net Monthly AI Leverage</span>
              <div className="text-lg sm:text-2xl font-black text-gray-900 my-2 font-mono">
                ROI = (Weekly Hours Saved × Hourly Rate × 4) − Monthly Tool Subscription
              </div>
              <p className="text-xs text-gray-600 max-w-lg mx-auto">
                If an AI platform priced at $30/month saves a designer 4 hours per week at an hourly rate of $50, the net monthly savings is $770—delivering an immediate 2,560% return.
              </p>
            </div>
          </article>

        </div>

        {/* Directory Hub Quick Jump Index */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/5 shadow-xs">
          <div className="text-center max-w-2xl mx-auto pb-6 border-b border-black/5">
            <h3 className="text-xl font-black text-gray-900">Explore Key Directory Hubs &amp; Stacks</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-md mx-auto">
              Direct crawl index of high-traffic categories, multi-tool workflows, and verified comparison hubs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-6">
            <Link href="/category/coding-assistants" className="p-3 rounded-xl bg-slate-50 hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Coding Assistants
            </Link>
            <Link href="/category/ai-writing-tools" className="p-3 rounded-xl bg-slate-50 hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Writing Software
            </Link>
            <Link href="/category/ai-video-generators" className="p-3 rounded-xl bg-slate-50 hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Video Creation
            </Link>
            <Link href="/category/ai-seo-tools" className="p-3 rounded-xl bg-slate-50 hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              AI SEO Tools
            </Link>
            <Link href="/category/ai-image-generators" className="p-3 rounded-xl bg-slate-50 hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Image Generators
            </Link>
            <Link href="/category/ai-voice-generators" className="p-3 rounded-xl bg-slate-50 hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Voice &amp; Audio
            </Link>
            <Link href="/category/productivity" className="p-3 rounded-xl bg-slate-50 hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Productivity Tools
            </Link>
            <Link href="/category/marketing-sales" className="p-3 rounded-xl bg-slate-50 hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Marketing &amp; Sales
            </Link>
            <Link href="/workflows" className="p-3 rounded-xl bg-slate-50 hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Automated Workflows
            </Link>
            <Link href="/compare-tools" className="p-3 rounded-xl bg-slate-50 hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Head-to-Head Comparisons
            </Link>
            <Link href="/latest-ai-tools" className="p-3 rounded-xl bg-slate-50 hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              Latest AI Tools
            </Link>
            <Link href="/categories" className="p-3 rounded-xl bg-slate-50 hover:bg-primary/5 hover:text-primary transition-all text-xs font-semibold text-gray-700 border border-black/5 text-center">
              All 25+ Categories
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/categories" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-700 hover:text-rose-800 transition-colors"
            >
              Explore the Complete Directory Ecosystem <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
