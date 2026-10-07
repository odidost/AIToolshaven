import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CategoriesEditorialGuide({ totalCategories = 101 }: { totalCategories?: number }) {
  return (
    <section className="mt-16 mb-20 pt-12 border-t border-[#E5E7EB]">
      {/* Centered Editorial Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
          <span className="material-symbols-outlined text-[16px] text-[#E11D48]">compare</span>
          <span>AI Tool Comparison &amp; Evaluation Framework</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A0A0A] tracking-tight">
          How to Compare AI Tools in 2026: The Buyer&apos;s Decision Framework
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#4B5563] leading-relaxed">
          Choosing the right software requires comparing alternatives across critical operational axes. 
          Use this 4-step framework to compare AI tools by architecture, true cost of ownership, workflow integrations, and enterprise safety.
        </p>
      </div>

      {/* 4 Architecture & Decision Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
        {/* Pillar 1 */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#E11D48]/40 hover:shadow-xs transition-all group">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#FFF1F2] border border-[#FECDD3] text-[#E11D48] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px]">psychology</span>
            </div>
            <h3 className="text-lg font-bold font-heading text-[#0A0A0A] mb-2 tracking-tight group-hover:text-[#E11D48] transition-colors">
              1. Compare Model Architecture &amp; Autonomy
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-4">
              When you compare AI tools, distinguish between prompt-response assistive copilots (like basic AI writing tools or image generators that require continuous human prompting) and full-scale autonomous agent frameworks. Compare how each tool handles context windows, multi-step tool execution, browser automation, and latency before committing your stack.
            </p>
          </div>
          <Link
            href="/category/ai-agents"
            className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between text-xs font-semibold text-[#E11D48] group-hover:translate-x-0.5 transition-transform"
          >
            <span>Compare Agents &amp; Autonomous Copilots</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-xs transition-all group">
          <div>
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px]">price_check</span>
            </div>
            <h3 className="text-lg font-bold font-heading text-[#0A0A0A] mb-2 tracking-tight group-hover:text-emerald-600 transition-colors">
              2. Compare Total Cost of Ownership &amp; Pricing Tiers
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-4">
              Superficial pricing pages can be deceiving. When comparing AI software, calculate true total cost of ownership: base monthly subscriptions versus per-generation credit meters, token markups, speed concurrency limits, and watermarking policies. Look for transparent flat-rate tools or generous free tiers that don&apos;t lock critical deliverables behind sudden paywalls.
            </p>
          </div>
          <Link
            href="/freemium-ai-tools"
            className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between text-xs font-semibold text-emerald-600 group-hover:translate-x-0.5 transition-transform"
          >
            <span>Compare Free &amp; Freemium AI Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-purple-500/40 hover:shadow-xs transition-all group">
          <div>
            <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px]">hub</span>
            </div>
            <h3 className="text-lg font-bold font-heading text-[#0A0A0A] mb-2 tracking-tight group-hover:text-purple-600 transition-colors">
              3. Compare Tool Chaining &amp; Ecosystem Integration
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-4">
              Single-task AI tools quickly turn into operational silos. Compare AI tools on how easily they interconnect into automated pipelines via native webhooks, Zapier, Make, or open REST APIs. The highest ROI comes from chaining specialized tools—passing research summaries into copy generators, voice synthesizers, and automated video pipelines.
            </p>
          </div>
          <Link
            href="/workflows"
            className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between text-xs font-semibold text-purple-600 group-hover:translate-x-0.5 transition-transform"
          >
            <span>Compare Pre-Built AI Workflows</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Pillar 4 */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/40 hover:shadow-xs transition-all group">
          <div>
            <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px]">verified_user</span>
            </div>
            <h3 className="text-lg font-bold font-heading text-[#0A0A0A] mb-2 tracking-tight group-hover:text-amber-600 transition-colors">
              4. Compare Commercial Rights, Security &amp; Privacy
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-4">
              Before deploying any AI tool for client deliverables or sensitive business operations, compare data governance policies. Verify zero data retention, strict shielding from public foundation model training, copyright indemnification clauses, and unrestricted commercial usage rights on all generated assets.
            </p>
          </div>
          <Link
            href="/editorial-policy"
            className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between text-xs font-semibold text-amber-600 group-hover:translate-x-0.5 transition-transform"
          >
            <span>Our Verified AI Evaluation Standards</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Direct Side-by-Side Comparison Matrix CTA Banner */}
      <div className="bg-[#0A0A0A] text-white rounded-xl p-6 sm:p-10 border border-zinc-800 shadow-sm relative overflow-hidden">
        {/* Subtle decorative glow to enhance visual depth */}
        <div 
          aria-hidden="true" 
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#E11D48]/15 blur-3xl pointer-events-none"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 border border-white/20 text-white text-xs font-semibold mb-3.5 shadow-2xs">
              <span className="material-symbols-outlined text-[16px] text-[#E11D48]">compare</span>
              <span className="text-white font-medium">Side-by-Side Comparison Engine</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading tracking-tight mb-2.5 text-white">
              Compare Any Two AI Tools Head-to-Head
            </h3>
            
            <p className="text-sm sm:text-base text-zinc-100 font-normal leading-relaxed max-w-xl">
              Want to see how specific software stacks up? Put leading tools head-to-head in our interactive comparison engine to evaluate features, pricing tiers, benchmarks, and community pros &amp; cons side-by-side.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/compare-tools"
              className="inline-flex items-center gap-2 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-xs"
            >
              <span className="text-white font-semibold">Compare AI Tools Side-by-Side</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
            <Link
              href="/workflows"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg border border-white/25 hover:border-white/40 transition-colors"
            >
              <span className="text-white font-medium">Explore Multi-Tool Workflows</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
