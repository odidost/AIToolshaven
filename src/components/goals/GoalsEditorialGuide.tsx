import Link from "next/link";

export function GoalsEditorialGuide() {
  return (
    <section className="my-16 md:my-28 max-w-4xl mx-auto">
      {/* Centered Editorial Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <span className="material-symbols-outlined text-[16px]">verified</span>
          Strategic Framework
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight mb-4">
          Goal-First Software Selection: The Practitioner&apos;s Framework
        </h2>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Why organizing AI tools around tangible business outcomes eliminates subscription waste and accelerates monetization.
        </p>
      </div>

      {/* Readable Narrative Prose with Generous Line Breaks & Spacing */}
      <div className="bg-surface border border-outline rounded-3xl p-8 sm:p-12 md:p-14 shadow-sm space-y-16">
        
        {/* Pillar 1 */}
        <article className="space-y-6">
          <div className="flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-wider">
            <span className="material-symbols-outlined text-[20px]">target</span>
            <span>Pillar 1: Eliminating Tool Hoarding</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
            Outcome Architecture vs. Random Subscription Stacking
          </h3>

          <p className="text-base sm:text-lg text-on-surface font-medium leading-relaxed">
            The most common mistake new operators make is subscribing to disjointed AI tools without an established commercial objective.
          </p>

          <div className="space-y-4 text-[15px] sm:text-[16px] text-on-surface-variant leading-[28px]">
            <p>
              Paying for three different AI writers, an isolated video generator, and an image app rarely produces revenue unless those tools form an interconnected production line.
            </p>

            <p>
              Our goal-driven directory reverses this trap. When you select an objective like{" "}
              <Link 
                href="/goals/faceless-youtube" 
                className="font-bold text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
              >
                Starting a Faceless YouTube Channel
              </Link>{" "}
              or{" "}
              <Link 
                href="/goals/ai-for-marketing-agencies" 
                className="font-bold text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
              >
                Scaling a Marketing Agency
              </Link>
              , you receive a curated stack where every application feeds data seamlessly into the next.
            </p>

            <p>
              This outcome-first structure guarantees that every subscription dollar maps directly to an active deliverable or customer conversion.
            </p>
          </div>
        </article>

        <hr className="border-border/60" />

        {/* Pillar 2 */}
        <article className="space-y-6">
          <div className="flex items-center gap-3 text-emerald-500 font-bold text-xs uppercase tracking-wider">
            <span className="material-symbols-outlined text-[20px]">layers</span>
            <span>Pillar 2: Execution Architecture</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
            The 3-Tier Monetization Stack: Idea to Distribution
          </h3>

          <p className="text-base sm:text-lg text-on-surface font-medium leading-relaxed">
            Every profitable online business model built with AI follows a standardized three-tier execution hierarchy.
          </p>

          <div className="space-y-4 text-[15px] sm:text-[16px] text-on-surface-variant leading-[28px]">
            <p>
              <strong>Tier 1: Research &amp; Ideation:</strong> Utilizing reasoning models and research platforms to identify underserved search demand, high-margin client niches, and competitor content gaps.
            </p>

            <p>
              <strong>Tier 2: Automated Media Production:</strong> Chaining{" "}
              <Link 
                href="/category/ai-voice-generators" 
                className="font-bold text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
              >
                AI voice generators
              </Link>
              , cinematic{" "}
              <Link 
                href="/category/ai-video-generators" 
                className="font-bold text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
              >
                AI video generators
              </Link>
              , and long-form{" "}
              <Link 
                href="/category/ai-writing-tools" 
                className="font-bold text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
              >
                AI writing tools
              </Link>{" "}
              into automated assembly lines that produce studio-quality deliverables in minutes.
            </p>

            <p>
              <strong>Tier 3: Distribution &amp; Pipeline Conversion:</strong> Deploying{" "}
              <Link 
                href="/category/marketing-sales" 
                className="font-bold text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
              >
                marketing &amp; sales automation
              </Link>{" "}
              engines and social scheduling systems to ensure your generated assets reach paying buyers consistently.
            </p>

            <p>
              To see these three tiers converted into clickable technical playbooks, check out our production{" "}
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
            <span className="material-symbols-outlined text-[20px]">savings</span>
            <span>Pillar 3: Zero-Risk Validation</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
            Validating on Freemium Before Committing Capital
          </h3>

          <p className="text-base sm:text-lg text-on-surface font-medium leading-relaxed">
            You should never spend money on premium software licenses before your business model proves initial traction.
          </p>

          <div className="space-y-4 text-[15px] sm:text-[16px] text-on-surface-variant leading-[28px]">
            <p>
              Each goal roadmap featured on AIToolsHaven highlights 100% free and generous freemium tools. You can draft scripts, clone test voices, and render pilot video clips without inputting a credit card.
            </p>

            <p>
              Once your first client signs an agreement or your social channel generates its initial audience milestone, reinvesting revenue into commercial tiers removes watermarks and unlocks priority rendering queues.
            </p>

            <p>
              For a breakdown of all individual free and paid plans by functional use case, explore our complete{" "}
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
            <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
            <span>Pillar 4: Developer &amp; Creator Speed</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
            Full-Stack Prototypes via Autonomous Coding Assistants
          </h3>

          <p className="text-base sm:text-lg text-on-surface font-medium leading-relaxed">
            The barrier between having a software idea and deploying a live web application has effectively vanished.
          </p>

          <div className="space-y-4 text-[15px] sm:text-[16px] text-on-surface-variant leading-[28px]">
            <p>
              With the rise of{" "}
              <Link 
                href="/goals/vibe-coding" 
                className="font-bold text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
              >
                Vibe Coding
              </Link>
              , non-technical founders can generate full-stack Next.js apps, database migrations, and responsive landing pages using conversational{" "}
              <Link 
                href="/category/coding-assistants" 
                className="font-bold text-primary underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors"
              >
                coding assistants
              </Link>{" "}
              and autonomous agent frameworks.
            </p>

            <p>
              By combining AI code reasoning with rapid UI components, solo developers are shipping micro-SaaS products in days that previously required teams of four engineers months to build.
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}
