import Link from "next/link";

export function BlogEditorialGuide() {
  return (
    <section className="my-16 md:my-28 max-w-4xl mx-auto">
      {/* Centered Editorial Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <span className="material-symbols-outlined text-[16px]">biotech</span>
          Research &amp; Benchmark Standards
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight mb-4">
          The AIToolsHaven Research &amp; Evaluation Methodology
        </h2>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          How our editorial lab tests foundation models, benchmarks autonomous agents, and stress-tests commercial workflows to provide unbiased technical intelligence.
        </p>
      </div>

      {/* Readable Narrative Prose with Generous Line Breaks & Spacing */}
      <div className="bg-surface border border-outline rounded-3xl p-8 sm:p-12 md:p-14 shadow-sm space-y-16">
        
        {/* Pillar 1 */}
        <article className="space-y-6">
          <div className="flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-wider">
            <span className="material-symbols-outlined text-[20px]">science</span>
            <span>Pillar 1: Production Workload Stress-Testing</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
            Hands-On Production Benchmarking vs. Synthetic Vendor Claims
          </h3>

          <p className="text-base sm:text-lg text-on-surface font-medium leading-relaxed">
            Theoretical benchmark scores rarely reflect how software performs during deadline-driven client deliverables.
          </p>

          <div className="space-y-4 text-[15px] sm:text-[16px] text-on-surface-variant leading-[28px]">
            <p>
              When evaluating{" "}
              <Link 
                href="/category/coding-assistants" 
                className="font-bold text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
              >
                coding assistants
              </Link>
              , we do not rely on generic synthetic benchmarks. Instead, we run real-world multi-file refactoring tasks across large TypeScript repositories, testing how tools handle complex dependency graphs and project context windows.
            </p>

            <p>
              Similarly, when reviewing{" "}
              <Link 
                href="/category/ai-video-generators" 
                className="font-bold text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
              >
                AI video generators
              </Link>
              , our team renders high-motion cinematic sequences to test temporal consistency, camera angle adherence, and artifact distortion under heavy GPU rendering loads.
            </p>

            <p>
              This hands-on methodology guarantees that our comparative ratings reflect real practitioner value rather than vendor marketing brochures.
            </p>
          </div>
        </article>

        <hr className="border-border/60" />

        {/* Pillar 2 */}
        <article className="space-y-6">
          <div className="flex items-center gap-3 text-emerald-500 font-bold text-xs uppercase tracking-wider">
            <span className="material-symbols-outlined text-[20px]">speed</span>
            <span>Pillar 2: Latency &amp; Token Economics</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
            Real-World API Latency, Token Economics &amp; Hardware Limits
          </h3>

          <p className="text-base sm:text-lg text-on-surface font-medium leading-relaxed">
            The best AI software balances high-reasoning intelligence with predictable operational costs and low time-to-first-token.
          </p>

          <div className="space-y-4 text-[15px] sm:text-[16px] text-on-surface-variant leading-[28px]">
            <p>
              A reasoning model with brilliant outputs is impractical for production pipelines if it requires 45 seconds to generate a simple JSON response or exhausts API budgets within hours.
            </p>

            <p>
              Our deep dives analyze token consumption rates, streaming latency, and cache reuse across leading foundation models (including Claude 3.7 Sonnet, GPT-4.5, and Gemini 2.0 Flash).
            </p>

            <p>
              To see these models integrated into complete multi-step automation pipelines, explore our production{" "}
              <Link 
                href="/workflows" 
                className="font-bold text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
              >
                AI Workflows Library
              </Link>
              .
            </p>
          </div>
        </article>

        <hr className="border-border/60" />

        {/* Pillar 3 */}
        <article className="space-y-6">
          <div className="flex items-center gap-3 text-amber-500 font-bold text-xs uppercase tracking-wider">
            <span className="material-symbols-outlined text-[20px]">verified_user</span>
            <span>Pillar 3: Pricing Transparency</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
            Freemium Longevity: Separating True Free Tiers from Credit Traps
          </h3>

          <p className="text-base sm:text-lg text-on-surface font-medium leading-relaxed">
            Nothing disrupts a workflow faster than hitting an opaque paywall after investing hours into onboarding.
          </p>

          <div className="space-y-4 text-[15px] sm:text-[16px] text-on-surface-variant leading-[28px]">
            <p>
              We rigorously test the free tiers of every featured tool, clearly distinguishing between recurring monthly allowances, perpetual open-source repositories, and one-time trial credits that expire in 48 hours.
            </p>

            <p>
              When a software tool requires credits for high-resolution exports or advanced neural voices, we explicitly document the unit economics in our comparison tables.
            </p>

            <p>
              For a full catalog of verified free and freemium platforms across all software categories, browse our complete{" "}
              <Link 
                href="/categories" 
                className="font-bold text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
              >
                Directory of AI Categories
              </Link>
              .
            </p>
          </div>
        </article>

        <hr className="border-border/60" />

        {/* Pillar 4 */}
        <article className="space-y-6">
          <div className="flex items-center gap-3 text-violet-500 font-bold text-xs uppercase tracking-wider">
            <span className="material-symbols-outlined text-[20px]">code_blocks</span>
            <span>Pillar 4: Paradigm Shifts</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
            Model Drift, SWE-bench &amp; The Architecture of AI Coding Agents
          </h3>

          <p className="text-base sm:text-lg text-on-surface font-medium leading-relaxed">
            The software development lifecycle has evolved from predictive autocomplete to autonomous, multi-agent sandbox execution.
          </p>

          <div className="space-y-4 text-[15px] sm:text-[16px] text-on-surface-variant leading-[28px]">
            <p>
              Through protocols like Model Context Protocol (MCP) and agentic frameworks, developer tools can now inspect local filesystems, execute shell commands, and autonomously fix failed test suites.
            </p>

            <p>
              We actively monitor SWE-bench verified performance and track how non-technical operators are building micro-SaaS businesses through{" "}
              <Link 
                href="/goals/vibe-coding" 
                className="font-bold text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
              >
                Vibe Coding
              </Link>
              .
            </p>

            <p>
              Our research team regularly publishes updated head-to-head comparisons to ensure you always know which autonomous coding editor or agent framework leads the market.
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}
