import { ShieldCheck, Brain, Zap, DollarSign, Database } from "lucide-react";

export function ComparisonsEditorialGuide() {
  return (
    <article className="w-full my-20 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary dark:text-rose-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-primary/20">
            <ShieldCheck className="w-4 h-4" />
            E-E-A-T Editorial Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            How We Test &amp; Benchmark AI Tools: Our 5-Pillar Methodology
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-3 max-w-2xl mx-auto">
            Software marketing pages make identical claims. At AIToolsHaven, our editorial team runs hands-on, reproducible stress tests across 5 core technical dimensions to deliver unbiased verdicts.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white dark:bg-slate-800/80 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-black mb-5">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              1. Prompt Obedience &amp; Reasoning Depth
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We subject competing models to structured edge-case benchmarks, measuring compliance with negative constraints, multi-variable logic trees, and complex multi-step reasoning. We score hallucination rates and verify whether the tool adheres to format specifications (JSON schemas, markdown hierarchy, or character limits) without drift.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-black mb-5">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              2. Streaming Latency &amp; Time to First Token (TTFT)
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Synthetic performance matters in interactive software. We test Time to First Token (TTFT), sustained token generation throughput (tokens/sec), and WebSocket latency for audio and video tools. A model with high reasoning that takes 15 seconds to return the first token receives penalty scores for interactive coding and customer support workflows.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-black mb-5">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              3. True Total Cost of Ownership (TCO)
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Headline subscription fees hide credit burn rates, hidden token multipliers, and aggressive tier limits. We calculate realistic monthly expenditures for individual creators versus high-volume enterprise teams, benchmarking cost-per-generation, seat licensing fees, and overage pricing transparency.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-black mb-5">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              4. Context Retention &amp; Retrieval Accuracy
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Large context claims (e.g. 200k to 2M tokens) frequently suffer from the &ldquo;needle in a haystack&rdquo; degradation phenomenon. We evaluate whether models recall subtle nuances in 80,000-word manuscripts or multi-file repositories when the target information is buried in the middle 50% of the input context window.
            </p>
          </div>
        </div>

        {/* Deep Dive Article Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed space-y-6">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            How to Choose the Right AI Tool for Your Production Pipeline
          </h3>
          <p>
            When choosing between top-tier AI platforms—such as deciding between Claude 3.7 Sonnet versus ChatGPT-4.5 for technical documentation, or Cursor versus GitHub Copilot for engineering squads—your primary deciding factor should rarely be nominal benchmark rankings alone. Instead, evaluate the following operational criteria:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-slate-900 dark:text-white">Workflow Integration:</strong> Does the tool embed seamlessly into your existing tech stack (e.g. VS Code, Slack, Notion, GitHub Enterprise) or does it require context-switching to an external browser tab?
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Data Privacy and Model Training:</strong> Can enterprise admins opt out of model training? Are customer data and proprietary source code zero-data-retention (ZDR) compliant under SOC 2 Type II and GDPR?
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Vendor Lock-In vs. Model Agnosticism:</strong> Does the platform allow you to switch underlying foundation models (e.g. toggling between Anthropic, OpenAI, and DeepSeek) or are you locked into a single provider&apos;s proprietary ecosystem?
            </li>
          </ul>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight pt-4">
            Our Strict Editorial Independence Guarantee
          </h3>
          <p>
            AIToolsHaven operates under strict editorial separation. While tool developers may submit their software for catalog consideration, <strong>inclusion in head-to-head comparisons, feature score ratings, and winner badges cannot be purchased or influenced by commercial sponsorships</strong>. All benchmark trials are conducted with retail or standard enterprise accounts without preferential API allowances.
          </p>
        </div>
      </div>
    </article>
  );
}
