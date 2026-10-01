"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Crown, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight, 
  Zap, 
  Calculator, 
  Timer, 
  DollarSign, 
  LineChart, 
  BookOpen, 
  Share2, 
  Repeat, 
  MessageSquare, 
  Flame, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  Send,
  Users
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI Twitter / X growth tool and how does it work?",
    answer: "An AI Twitter/X growth tool combines large language models with real-time algorithm analytics to ideate, write, format, schedule, and automate high-engagement posts and threads. By analyzing millions of viral tweets across niches, these engines generate compelling hooks, structure unrolls, optimize posting cadences for the X recommendation algorithm, and execute automated DM funnels when followers interact."
  },
  {
    question: "What are the best AI tools for Twitter/X growth in 2026?",
    answer: "TweetHunter and Typefully stand as the industry leaders. TweetHunter excels at monetization, offering a massive searchable library of 3M+ viral tweets, AI ghostwriting modeled on your specific voice, and automated sales DMs. Typefully is revered for its pristine distraction-free editor, collaboration workflows, multi-platform cross-posting (to LinkedIn and Threads), and deep audience analytics."
  },
  {
    question: "Can AI-generated tweets get your X account shadowbanned or penalized?",
    answer: "Only if you use low-quality spam bots that blast identical automated replies or generic platitudes at high velocity. High-end growth platforms like TweetHunter and Typefully function as drafting co-pilots and smart schedulers. They randomize post spacing, adhere strictly to the official X API v2 rate limits, and craft authentic, contextual thoughts that pass algorithm safety checks."
  },
  {
    question: "How do auto-DM funnels work on X without violating anti-spam policies?",
    answer: "Auto-DM funnels trigger only when a user explicitly opts in—such as commenting a specific keyword (e.g., 'send', 'guide', 'notion') on a value-packed post. The tool validates that the commenter follows your account, creates a slight randomized human delay, and delivers the requested resource directly to their inbox, turning viral reach into verified email subscribers."
  }
];

const useCases = [
  {
    title: "Founders & Solopreneurs (Building in Public)",
    badge: "Audience Monetization",
    desc: "Transform weekly development milestones, MRR updates, and product launches into compelling viral threads that drive qualified waitlist signups and investor interest.",
    benefits: [
      "AI thread formatting with scroll-stopping hooks and cliffhanger transitions",
      "Automated reply-to-DM triggers converting engagement into email list subscribers",
      "Analytics heatmaps revealing optimal posting times for tech-forward audiences"
    ],
    highlight: "Scaled founder personal brand from 1,200 to 48,000 followers and generated $34K in ARR"
  },
  {
    title: "Content Creators & Niche Curators",
    badge: "Daily Publishing Volume",
    desc: "Maintain an aggressive 3-5 post daily cadence without burnout by synthesizing podcasts, articles, and industry news into punchy, insightful snippets.",
    benefits: [
      "Searchable library of 3M+ viral tweets filtered by niche and engagement metrics",
      "AI voice cloning that mimics your unique sentence rhythm and humor style",
      "Auto-retweet recycling to re-expose your top evergreen posts across timezones"
    ],
    highlight: "Saved 18 hours per week while doubling monthly impression counts past 2.4M"
  },
  {
    title: "B2B SaaS Growth & Marketing Teams",
    badge: "Pipeline & Inbound",
    desc: "Establish category authority by distributing research reports, teardowns, and engineering insights directly to decision-makers on X.",
    benefits: [
      "Team collaboration workspaces with draft approval stages and client previews",
      "Multi-account management with unified scheduling queues and engagement desks",
      "Synchronized cross-posting to LinkedIn and Threads with platform-specific formatting"
    ],
    highlight: "Achieved 310% increase in inbound enterprise discovery calls via X thought leadership"
  }
];

const glossaryTerms = [
  {
    term: "Hook Rate",
    definition: "The percentage of users who see the first tweet in a thread and click to expand the full thread; the primary metric determining algorithmic amplification on X."
  },
  {
    term: "Auto-DM Funnel",
    definition: "An automated workflow that sends a customized private message containing a lead magnet or link whenever a verified user comments a specified trigger keyword."
  },
  {
    term: "For You Tab Algorithm Pacing",
    definition: "The optimal spacing between published posts to prevent consecutive tweets from cannibalizing internal impressions within the algorithmic timeline."
  },
  {
    term: "Unroll Formatting",
    definition: "Structuring thread tweets with clean paragraph breaks, bold key points, numbered bullets, and visual separators optimized for mobile skimming and bookmarking."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiTwitterXGrowthGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-sky-950 text-white p-8 md:p-14 border border-sky-500/20 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-sky-400" />
            Audience Building, Viral Threads & Auto-DMs 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Twitter / X Growth Tools: <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Scale Impressions & Convert Followers</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Cracking the X algorithm in 2026 requires more than random musings. Discover elite AI growth suites that analyze viral hook formulas, craft high-converting threads in your authentic voice, and turn passive impressions into qualified pipeline via automated DMs.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Twitter / X Creator Evolution
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How autonomous content intelligence and conversion funnels outperform manual tweeting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Manual Writer's Block</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Staring at a blank 280-character box, guessing hook styles, and agonizing over formatting while posts get buried in algorithmic noise with 12 impressions.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Disconnected Schedulers</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Using basic social media buffers that queue static posts without thread support, missing out on algorithmic timing, bookmark prompts, and live engagement replies.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-sky-950 to-slate-900 text-white border border-sky-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Autonomous Growth Engine</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              AI mines your best ideas, simulates engagement hooks against 3M+ viral patterns, auto-splits threads, paces algorithmic delivery, and captures leads with instant auto-DMs.
            </p>
          </div>
        </div>
      </section>

      {/* 2.5 INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 md:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              <Calculator className="w-4 h-4" />
              Audience Growth Velocity Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Measure Your X Growth ROI</h2>
          </div>
          
          {/* Toggle pill */}
          <div className="inline-flex p-1 bg-slate-200 dark:bg-slate-800 rounded-xl">
            <button 
              onClick={() => setCalculatorMode("traditional")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "traditional" 
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Manual Tweeting
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-sky-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Growth Stack (TweetHunter/Typefully)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-sky-500" />
              Weekly Time on Ideation & Formatting
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "14.5 Hours" : "2.2 Hours"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Drafting hooks, fighting unrolls, and manual scheduling" 
                : "Curated idea bank, instant hook variants & bulk scheduling"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-emerald-500" />
              Average Monthly Impressions
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "45,000" : "480,000+"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Inconsistent posting rhythm and low algorithmic hook conversion" 
                : "Optimized cadence, auto-retweets, and viral pattern scoring"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-indigo-500" />
              Email Leads Generated / Month
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "~15 Leads" : "340+ Leads"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Bio link clicks only with zero automated follow-up" 
                : "High-converting reply-to-DM automated lead magnet triggers"}
            </p>
          </div>
        </div>
      </section>

      {/* 3.0 EDITOR'S CHOICE SPOTLIGHT */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white p-8 md:p-12 border border-sky-500/30 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-400" />
              Editor's Choice 2026: Premier Twitter/X Growth Suite
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              TweetHunter — The Monetization & Viral Ghostwriting Engine
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              TweetHunter is built specifically for creators, founders, and consultants seeking tangible business pipeline from X. It pairs an archive of over 3 million proven viral tweets with an AI engine trained to emulate your distinct writing style, paired with frictionless auto-DM lead capture.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                3M+ Searchable Viral Tweet Database
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                Automated Reply-to-DM Lead Funnels
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                AI Voice Persona Trained on Your History
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                Auto-Retweet & Evergreen Queue Recycling
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-full lg:w-72 shrink-0 space-y-4 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400">Monthly Investment</div>
            <div className="text-4xl font-black text-white">$49 <span className="text-sm font-normal text-slate-400">/mo</span></div>
            <div className="text-xs text-sky-300">Free 7-day trial • Includes X API integration</div>
            <Link 
              href="/tools/tweethunter"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-colors text-sm shadow-lg shadow-sky-500/25"
            >
              Explore TweetHunter
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 TOP 3 ALTERNATIVES MATRIX & BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 AI Twitter / X Growth Alternatives Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Evaluating the premier tools based on hook intelligence, UI experience, pricing, and automation capability.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-4 sm:p-5">Platform</th>
                <th className="p-4 sm:p-5">Core Strength</th>
                <th className="p-4 sm:p-5">AI Capabilities</th>
                <th className="p-4 sm:p-5">Auto-DMs</th>
                <th className="p-4 sm:p-5">Cross-Posting</th>
                <th className="p-4 sm:p-5">Starting Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                  TweetHunter
                </td>
                <td className="p-4 sm:p-5">Viral Inspiration & Monetization</td>
                <td className="p-4 sm:p-5">3M+ Viral library, voice clone, hook generator</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Native & Robust</td>
                <td className="p-4 sm:p-5 text-slate-500">X-focused (LinkedIn export)</td>
                <td className="p-4 sm:p-5 font-medium">$49/mo</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  Typefully
                </td>
                <td className="p-4 sm:p-5">Distraction-Free UI & Analytics</td>
                <td className="p-4 sm:p-5">AI rewrite, engagement simulation, hook generator</td>
                <td className="p-4 sm:p-5 text-amber-600 dark:text-amber-400">Comment replies only</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">X, LinkedIn, Threads, Bluesky</td>
                <td className="p-4 sm:p-5 font-medium">$12.50/mo</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  Postwise
                </td>
                <td className="p-4 sm:p-5">Viral Thread Automation</td>
                <td className="p-4 sm:p-5">Ghostwriter mode, viral score predictor</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Native Auto-DM</td>
                <td className="p-4 sm:p-5">X & LinkedIn</td>
                <td className="p-4 sm:p-5 font-medium">$29/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-sky-500" />
              TweetHunter vs Typefully: Which Fits Your Growth Strategy?
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Choose <strong>TweetHunter</strong> if you treat X as a business acquisition engine and want automated DMs to collect email subscribers from viral threads. Choose <strong>Typefully</strong> if you prioritize a minimalist writing environment, team editing workflows, and simultaneous cross-publishing to LinkedIn and Threads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-500" />
              Postwise vs TweetHunter: Budget vs Depth
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Postwise</strong> provides an accessible, budget-friendly entry point for creators wanting AI thread generation and auto-DMs at $29/month. However, <strong>TweetHunter</strong> offers a vastly superior 3M+ searchable tweet research vault and CRM contact tagging that makes the $49/month tier pay for itself.
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 BUYER'S GUIDE: ASYMMETRIC BENTO BLOCKS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Key Architecture Factors When Selecting an X Growth Suite
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Avoid getting suspended or sounding robotic by auditing tools against these four criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-sky-500/30">01</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">API Compliance & Anti-Shadowban Pacing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Ensure the software integrates through the official X API v2. Tools using browser scraping extensions carry extreme risk of temporary or permanent account restrictions. Verify the platform includes automated delay intervals and randomized queues.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-sky-500/30">02</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Personal Voice Modeling & Few-Shot Learning</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Generic ChatGPT prompts produce obvious AI cliches ("In today's fast-paced digital world..."). Superior growth engines ingest your previous top 100 published tweets to mimic your phrasing, sarcasm, vocabulary, and paragraph spacing.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-sky-500/30">03</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Reply-to-DM Lead Magnet Infrastructure</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Viral posts with 500K impressions are worthless if you don't capture the audience. Automated DM funnels that dispatch download links or coupon codes when users reply with a designated keyword transform passive readers into permanent newsletter subscribers.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-sky-500/30">04</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Multi-Platform Repurposing & Formatting</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              What succeeds on X can readily drive engagement on LinkedIn and Threads. The best tools automatically adapt character constraints, remove unneeded hashtag bloat, and reformat thread carousels for cross-channel reach in one click.
            </p>
          </div>
        </div>
      </section>

      {/* 4.5 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4-Step Implementation Roadmap to 100K Impressions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            The proven tactical workflow to scale an audience and monetize engagement on X.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Mine High-Performing Hooks</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Search viral libraries by your industry keyword. Bookmark the top 20 opening hooks that achieved &gt;5,000 likes and convert their underlying psychological structure into templates.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Draft & AI Voice Refine</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Feed raw bullet points of personal experiences or case studies into your AI assistant. Polish the output to retain authentic opinions, data points, and concise formatting.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Set Algorithmic Cadence</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Queue 3-4 standalone insights per day spaced 3+ hours apart, plus 1 long-form thread weekly during your audience's peak geographic activity window.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Deploy Auto-DM Funnels</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Add a call-to-action on high-value threads: "Want my complete swipe file? Follow & comment 'SCALE' below." Turn viral spikes into hundreds of email subscribers automatically.
            </p>
          </div>
        </div>
      </section>

      {/* 5.0 WHO BENEFITS MOST (VERTICAL TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from AI Twitter / X Growth Tools?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Select your creator profile to see tailored workflows and tangible outcome metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2">
            {useCases.map((uc, index) => (
              <button
                key={index}
                onClick={() => setActiveUseCase(index)}
                className={`text-left p-4 rounded-xl transition-all border ${
                  activeUseCase === index
                    ? "bg-white dark:bg-slate-800 border-sky-500/50 shadow-md text-slate-900 dark:text-white font-semibold"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                <div className="text-xs text-sky-600 dark:text-sky-400 font-bold uppercase tracking-wider mb-1">
                  {uc.badge}
                </div>
                <div className="text-sm sm:text-base">{uc.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                {useCases[activeUseCase].badge}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {useCases[activeUseCase].title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {useCases[activeUseCase].desc}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Workflow Capabilities:
              </h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 text-xs sm:text-sm text-sky-900 dark:text-sky-200 font-medium">
              💡 <strong>Proven Milestone:</strong> {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 TECHNICAL GLOSSARY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <BookOpen className="w-4 h-4" />
          X Growth & Algorithmic Lexicon
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {glossaryTerms.map((term, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white text-sm">{term.term}</div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{term.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6.0 SEO FAQ ACCORDION */}
      <section className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Everything you need to know about growing organically on X using modern AI automation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index} 
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
