import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  ArrowRight,
  TrendingDown,
  Coins,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Target,
  Zap,
} from 'lucide-react';

export function FounderLaunchStorySection() {
  return (
    <section className="py-20 px-4 bg-slate-50/70 dark:bg-slate-900/50 border-y border-black/5 dark:border-slate-800">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary dark:text-rose-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            The Founder&apos;s Distribution Playbook
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            The $12,000 Paid Ad Trap: Why Top AI Founders Win With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              Evergreen Directory Distribution
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            A real-world breakdown of what happens after launch day in 2026—and the single customer acquisition channel that actually compounds.
          </p>
        </div>

        {/* The 3 Story Chapters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Chapter 1 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 shadow-sm space-y-4 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-primary uppercase tracking-widest">
                Chapter 1
              </span>
              <span className="p-2 rounded-xl bg-rose-500/10 text-rose-500">
                <TrendingDown className="w-4 h-4" />
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              The 24-Hour Launch Hangover
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
              You spend three intense weeks building teasers, asking friends for upvotes, and launching on Product Hunt. On Day 1, you hit the top 5! You get 2,500 visits, a rush of trial signups, and pop the champagne. But by Day 3, your traffic crashes by 95%. The majority were indie makers collecting free tiers who churned immediately. You are right back to zero inbound.
            </p>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
              <strong className="text-slate-700 dark:text-slate-300">The Hard Truth:</strong> One-off launch spikes do not create a repeatable acquisition pipeline.
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 shadow-sm space-y-4 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-amber-500 uppercase tracking-widest">
                Chapter 2
              </span>
              <span className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                <Coins className="w-4 h-4" />
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              The $12/Click PPC Money Pit
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
              Next, you set up Google Search &amp; LinkedIn Ads for high-intent keywords like <em>&quot;AI code generator&quot;</em> or <em>&quot;AI copywriting software&quot;</em>. You quickly realize venture-backed giants are bidding $9.00 to $16.00 per single click. A $2,000 test budget burns through in days, resulting in tire-kickers with high acquisition costs. The second you pause campaigns, lead flow halts completely.
            </p>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
              <strong className="text-slate-700 dark:text-slate-300">The Hard Truth:</strong> Paid ads in the AI category have become an unsustainable cash incinerator for bootstrapped teams.
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="bg-white dark:bg-slate-900 border border-primary/30 dark:border-primary/40 rounded-2xl p-6 sm:p-7 shadow-md space-y-4 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between relative z-10">
              <span className="text-xs font-black text-emerald-500 uppercase tracking-widest">
                Chapter 3
              </span>
              <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                <TrendingUp className="w-4 h-4" />
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white relative z-10">
              The Permanent Inbound Flywheel
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow relative z-10">
              Then you realize how enterprise buyers and serious creators actually choose tools: when they need software, they search <em>&quot;best AI tools for [use-case]&quot;</em> and consult trusted directories and side-by-side comparison matrixes. By securing a verified permanent listing on AIToolsHaven, your software is indexed in category hubs, recommended across workflows, and put in front of 50,000+ active buyers every single month.
            </p>

            <div className="p-3 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-800 dark:text-emerald-300 relative z-10">
              <strong className="font-bold">The Solution:</strong> One-time listing fee ($0–$150) &rarr; permanent evergreen organic discovery forever.
            </div>
          </div>
        </div>

        {/* The 3 Core Growth Levers Built Into AIToolsHaven */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              The 3 Compounding Growth Levers You Unlock Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              Every approved listing on AIToolsHaven is engineered to maximize your product&apos;s search engine authority and conversion velocity:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Target className="w-4 h-4" />
                <span>1. Point-of-Purchase Intent</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Directory visitors aren&apos;t casual scrollers. They are actively comparing features, models, and pricing with corporate credit cards ready to subscribe.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>2. High-Authority Backlink</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                A permanent, contextual profile passes critical domain rating signals directly to your domain, accelerating your own Google ranking velocity.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-500 font-bold text-sm">
                <Zap className="w-4 h-4" />
                <span>3. Versus Arena Intercept</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Qualify for our automated head-to-head comparison pages, directly intercepting search traffic from users researching your legacy competitors.
              </p>
            </div>
          </div>

          {/* Quick Action Trigger Box */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Ready to turn organic discovery into your #1 growth engine?
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Join 1,000+ AI startups and tools featured across our directory.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href="/submit/form?plan=growth"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-rose-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-primary/20 hover:shadow-primary/35 whitespace-nowrap group"
              >
                <span>Launch on Growth Plan ($100)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
