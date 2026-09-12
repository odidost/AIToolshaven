import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Cpu,
  Gauge,
  Coins,
  ShieldAlert,
  Send,
  Sparkles,
  ArrowRight,
  FileCheck2,
  Layers,
  Mail,
} from "lucide-react";

export function ComparisonBuyerGuideAndVendorDesk() {
  return (
    <section className="my-20 space-y-12">
      {/* Editorial Content: The Definitive Evaluation Framework */}
      <article className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm">
        <header className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary dark:text-rose-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            2026 AI Evaluation Blueprint
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
            How to Compare AI Tools: The 5-Pillar Architectural Framework
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-3 leading-relaxed">
            With thousands of new artificial intelligence models and wrapper applications launching each month, choosing between two competing AI solutions requires looking beyond marketing promises. At AIToolsHaven, our testing lab evaluates every head-to-head matchup across five objective pillars.
          </p>
        </header>

        {/* 5 Evaluation Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              1. Reasoning Depth &amp; Task Accuracy
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We test multi-step chain-of-thought accuracy, mathematical reliability, and codebase context retention. Real-world tasks (e.g. debugging full repositories or analyzing 100-page financial PDFs) reveal model hallucination rates that synthetic tests overlook.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
              <Gauge className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              2. TTFT &amp; Generation Throughput
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Latency makes or breaks interactive agentic workflows. We measure <strong>Time to First Token (TTFT)</strong> and sustained output tokens per second (TPS) across peak global business hours to determine operational snappiness.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
              <Coins className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              3. True Cost of Ownership (TCO)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              A $20/month flat fee rarely tells the full story. We audit hidden credit burn multipliers, token usage tier overages, per-seat licensing caps, and API routing charges to compute your actual monthly spend at scale.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              4. Context Retrieval &amp; Needle Recall
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Large 1M+ token context windows are only useful if recall remains perfect. We verify whether key instructions placed deep inside documents suffer from &quot;lost-in-the-middle&quot; degradation or maintain full fidelity.
            </p>
          </div>

          {/* Pillar 5 */}
          <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              5. Data Privacy &amp; Zero-Training
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              For teams working with proprietary intellectual property or customer records, we audit zero-data-retention (ZDR) clauses, SOC2 Type II compliance, and whether your inputs are used to train subsequent foundation models.
            </p>
          </div>

          {/* Pillar 6: Integration Ecosystem */}
          <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              6. Workflow Integration &amp; Tool Calling
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Top AI software must integrate directly into your daily IDE, browser, or CRM. We benchmark native MCP (Model Context Protocol) connectors, browser extension stability, and external API webhook latency.
            </p>
          </div>
        </div>

        {/* High-Intent Keyword Hub: Why Comparison Pages Drive Buying Decisions */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Why Head-to-Head Comparisons Decide Enterprise Software Purchases
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                When software buyers search for <em>&quot;Tool A vs Tool B&quot;</em>, they have completed the awareness phase and are actively holding a company credit card. Rather than browsing 50 tools in a generic directory, buyers rely on direct comparison matrixes to make a final procurement choice.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Cuts research time from weeks of demos down to a 3-minute verified matrix review.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Uncovers exact pricing gotchas and seat minimums before signing annual contracts.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Evaluates real-world speed benchmarks instead of vendor marketing benchmarks.</span>
                </li>
              </ul>
            </div>

            {/* Inbound Direct Desk Box for AI Founders & CMOs */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                <Send className="w-4 h-4" />
                <span>Vendor Listing &amp; Benchmark Desk</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Are You Building an AI Product?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                If your tool is ready to compete against the leading products in your vertical, get in touch with our editorial benchmark lab. We publish new head-to-head reviews weekly.
              </p>
              <div className="space-y-2.5 pt-1">
                <Link
                  href="/submit"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-rose-600 text-white font-bold text-xs transition-all shadow-md group text-center"
                >
                  <span>Submit Your Tool for Matchup Audit</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs transition-colors border border-slate-700 text-center"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Direct Inquiry: Contact Editorial Lab</span>
                </Link>
              </div>
              <p className="text-[11px] text-slate-400 text-center">
                Guaranteed editorial review with verified badge upon testing.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
