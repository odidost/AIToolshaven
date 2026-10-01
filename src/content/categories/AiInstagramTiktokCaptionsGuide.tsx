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
  Hash, 
  Flame, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  Video,
  Eye
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI caption and hook generator for Instagram & TikTok?",
    answer: "An AI Instagram and TikTok caption generator is a specialized short-form video copywriting tool engineered to solve the retention problem. By analyzing high-retention video formulas, it generates 3-second curiosity hooks that stop rapid scrolling, structures punchy captions that boost comment velocity, suggests ranked hashtag clusters, and automatically produces calls-to-action that trigger profile visits and link taps."
  },
  {
    question: "What are the best AI tools for Reels and TikTok captions in 2026?",
    answer: "Predis.ai and Flick dominate the short-form caption landscape. Predis.ai is an end-to-end social AI suite that not only writes video captions and hashtags but also generates full video reels, carousels, and voiceovers from simple product links. Flick is the premier hashtag and caption intelligence tool, featuring a robust AI assistant that turns loose brain dumps into viral short-form copy with proven hashtag competition scoring."
  },
  {
    question: "Do hashtags still matter for Instagram Reels and TikTok algorithms in 2026?",
    answer: "Yes, but their role has shifted from spammy discovery tags to precise semantic categorization. The algorithm uses hashtags alongside spoken audio transcripts and on-screen text to index your content in TikTok Search and the Instagram Explore tab. High-performing creators use 3–5 highly specific niche tags rather than 30 generic tags, which AI tools cluster based on current competition volume."
  },
  {
    question: "How do 3-second hooks affect short-form video algorithmic distribution?",
    answer: "Short-form recommendation algorithms (TikTok FYP and Instagram Reels) rely heavily on 3-second completion rate and average watch time. If more than 60% of viewers scroll away within the first 3 seconds, the video's distribution is immediately throttled. AI hook generators test psychologically proven opening lines—such as pattern interrupts, negative framing, and high-stakes curiosity—to maximize early retention."
  }
];

const useCases = [
  {
    title: "E-Commerce & DTC Brands",
    badge: "Shoppable Socials",
    desc: "Generate viral Reels and TikTok product demonstrations with persuasive captions and compelling discount code CTAs in minutes.",
    benefits: [
      "1-click conversion of Shopify product pages into video reels and caption copy",
      "Dynamic hashtag clusters targeting high-intent shopping search queries",
      "Automated first-comment coupon codes that boost checkout conversions"
    ],
    highlight: "Increased organic TikTok shop sales revenue by 185% in 60 days"
  },
  {
    title: "Short-Form Video Creators & Influencers",
    badge: "Retention & Hook Velocity",
    desc: "Overcome creative fatigue by producing 20+ viral hook variations for every raw talking-head clip or video tutorial.",
    benefits: [
      "AI audio transcription that isolates the most compelling soundbite as the opening hook",
      "Emotional sentiment scoring to ensure copy resonates with target demographics",
      "Caption line-breaking optimized for mobile screen readability and engagement"
    ],
    highlight: "Elevated average 3-second view retention from 28% to 64% across 50 Reels"
  },
  {
    title: "Social Media Agencies & Managers",
    badge: "Client Scale & Hashtag Intelligence",
    desc: "Batch-generate 100+ caption drafts with verified low-competition hashtags across varied client niches (fitness, beauty, B2B, food).",
    benefits: [
      "Hashtag health checker flagging banned or flagged tags in real-time",
      "Brand voice presets for switching instantly between different brand tones",
      "Direct integration into social media scheduling platforms"
    ],
    highlight: "Cut monthly content drafting time from 35 hours down to 6 hours per client"
  }
];

const glossaryTerms = [
  {
    term: "Pattern Interrupt",
    definition: "A visual or verbal hook in the first 2 seconds of a video that breaks a viewer's passive scrolling trance and demands immediate focused attention."
  },
  {
    term: "Semantic Categorization",
    definition: "How Instagram and TikTok AI crawlers index video topics by analyzing spoken audio transcripts, on-screen text overlays, and caption keywords."
  },
  {
    term: "Hashtag Competition Tiering",
    definition: "Grouping hashtags into high, medium, and low post-volume tiers to ensure your content ranks in top search results rather than getting drowned out."
  },
  {
    term: "Loop Retention",
    definition: "Structuring the final sentence of a video caption or script so it transitions seamlessly back into the opening hook, encouraging viewers to watch the video twice."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiInstagramTiktokCaptionsGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-pink-950 text-white p-8 md:p-14 border border-pink-500/20 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-400/30 text-pink-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-pink-400" />
            Viral 3-Second Hooks, Video Retention & Hashtags 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Instagram & TikTok Caption Generators: <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">Stop the Scroll & Boost Algorithm Retention</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Short-form video success is won or lost in the first three seconds. Discover the leading AI caption and hook engines engineered to halt scrolling thumbs, optimize semantic keyword rankings, and transform casual viewers into committed followers.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Short-Form Copywriting Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why lazy one-line captions and random hashtags kill video reach in 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Weak 3-Second Openers</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Starting videos with "Hey guys, so today..." causes 70% of viewers to swipe away instantly, destroying algorithmic reach before the message even begins.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Hashtag Blindness</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Copy-pasting identical blocks of 30 generic tags (#fyp, #viral) that algorithms ignore or classify as engagement spam.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-pink-950 to-slate-900 text-white border border-pink-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Psychological Hook Engines</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              AI crafts pattern interrupts, negative curiosity hooks, semantic keyword clusters, and clear comment triggers that lift watch time past 80%.
            </p>
          </div>
        </div>
      </section>

      {/* 2.5 INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 md:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pink-600 dark:text-pink-400">
              <Calculator className="w-4 h-4" />
              Short-Form Retention & Production Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Measure Hook & Caption Impact</h2>
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
              Manual Brainstorming
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-pink-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Hook & Caption Engine (Predis/Flick)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Eye className="w-4 h-4 text-pink-500" />
              3-Second Retention Rate
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "29.4%" : "68.2%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Conventional introductions lead to fast swiping" 
                : "Curiosity gap & pattern interrupt hooks lock viewers in"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-rose-500" />
              Time Spent on Copy & Hashtags / Reel
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "25 Mins" : "2 Mins"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Writer's block and searching Instagram tag volumes manually" 
                : "Instant 5 hook variants, caption draft & categorized tags"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <TrendingUp className="w-4 h-4 text-amber-500" />
              Average Reel / Video Reach
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "2,400 Views" : "18,500+ Views"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Low watch time signals algorithm to stop distribution" 
                : "High retention and comment triggers multiply FYP impressions"}
            </p>
          </div>
        </div>
      </section>

      {/* 3.0 EDITOR'S CHOICE SPOTLIGHT */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-pink-950 to-slate-900 text-white p-8 md:p-12 border border-pink-500/30 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-400" />
              Editor's Choice 2026: Premier Short-Form AI Suite
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Predis.ai — Complete Visual, Reel & Caption AI Engine
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Predis.ai isn't just a text generator; it's a comprehensive creative director for Instagram and TikTok. Input a simple prompt or product URL, and Predis creates ready-to-publish video Reels with voiceovers, carousels, engaging captions, and smart hashtag recommendations in seconds.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                Creates Video Reels & Carousels from Text Prompts
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                AI Voiceover & Trending Audio Matching
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                Contextual Caption & Call-to-Action Generation
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                Hashtag Performance & Competitor Content Analysis
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-full lg:w-72 shrink-0 space-y-4 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400">Starter Plan</div>
            <div className="text-4xl font-black text-white">$27 <span className="text-sm font-normal text-slate-400">/mo</span></div>
            <div className="text-xs text-pink-300">Free plan available • Includes video generator</div>
            <Link 
              href="/tools/predis-ai"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-semibold transition-colors text-sm shadow-lg shadow-pink-600/25"
            >
              Explore Predis.ai
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 TOP 3 ALTERNATIVES MATRIX & BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 Short-Form Caption & Hook Tools Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Evaluating leading platforms on hook psychology, hashtag tools, media creation, and cost.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-4 sm:p-5">Platform</th>
                <th className="p-4 sm:p-5">Core Focus</th>
                <th className="p-4 sm:p-5">Media Generation</th>
                <th className="p-4 sm:p-5">Hashtag Intelligence</th>
                <th className="p-4 sm:p-5">Pricing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                  Predis.ai
                </td>
                <td className="p-4 sm:p-5">Full Video Reels, Carousels & Copy</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Native Video & Images</td>
                <td className="p-4 sm:p-5">AI Hashtags & Keywords</td>
                <td className="p-4 sm:p-5 font-medium">$27/mo</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  Flick
                </td>
                <td className="p-4 sm:p-5">Hashtag Clustering & Caption AI</td>
                <td className="p-4 sm:p-5 text-slate-500">None (Copy & Tags only)</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Tiered Search & Banned Tag Filter</td>
                <td className="p-4 sm:p-5 font-medium">$14/mo</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Ocoya
                </td>
                <td className="p-4 sm:p-5">E-Commerce Social Graphics & Copy</td>
                <td className="p-4 sm:p-5 font-semibold">Canva-like graphic editor</td>
                <td className="p-4 sm:p-5">Smart tag suggestions</td>
                <td className="p-4 sm:p-5 font-medium">$19/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-pink-500" />
              Predis.ai vs Flick: Visual Production vs Tag Precision
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Choose <strong>Predis.ai</strong> if you need complete video assets created automatically from text outlines or e-commerce products. Choose <strong>Flick</strong> if you already produce your own raw video content and specifically want an elite AI copywriting co-pilot with deep hashtag competition audits.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-500" />
              Ocoya vs Predis.ai: E-Commerce Graphics vs Video
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Ocoya</strong> shines for brands focusing primarily on single-image product banners and Canva-style static graphics. However, <strong>Predis.ai</strong> is substantially more versatile in 2026 due to its dynamic short-form video Reel generator and automatic animated carousel formatting.
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 BUYER'S GUIDE: ASYMMETRIC BENTO BLOCKS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Key Architecture Factors for Caption & Hook Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            What to evaluate to ensure your content wins the 3-second retention battle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-pink-500/30">01</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Pattern-Interrupt Hook Generation</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The tool must specialize in short-form opening lines (under 8 words) that provoke curiosity, challenge common beliefs, or present unexpected dilemmas that stop immediate scrolling.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-pink-500/30">02</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Banned Hashtag Detection</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Accidentally including a single temporarily banned hashtag can instantly hide your post from the Explore page. Ensure your tool continuously audits tags against live platform restriction lists.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-pink-500/30">03</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">SEO Keyword Natural Insertion</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              TikTok and Instagram are heavily utilized as search engines by younger demographics. The AI must naturally weave target search keywords into the caption body without sounding artificial.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-pink-500/30">04</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Comment-Spurring Call-to-Actions</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Videos with high comment-to-view ratios receive exponential distribution. The AI should generate open-ended polarizing questions or micro-quizzes that encourage viewers to leave their opinions.
            </p>
          </div>
        </div>
      </section>

      {/* 4.5 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4-Step Blueprint to Viral Short-Form Video Retention
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How to craft short-form hooks and captions that crack algorithm thresholds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Select Hook Formula</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Generate 5 hook variants using formulas like 'The Secret X Won't Tell You' or 'Stop Doing X If You Want Y'. Choose the punchiest line for your on-screen title.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Structure Micro-Story Caption</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Craft a 3-part caption: an intriguing second hook, 3 concise bullet points expanding on the video, and an engaging question prompting comments.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Apply Tiered Hashtags</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Add 3–5 targeted niche tags with 50K–500K historical posts to capture topical explore rank without drowning in millions of competitor posts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Engage Immediate Commenters</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Reply to every comment within the first 45 minutes using follow-up questions to multiply comment counts and trigger extended algorithmic distribution.
            </p>
          </div>
        </div>
      </section>

      {/* 5.0 WHO BENEFITS MOST (VERTICAL TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from Short-Form Caption AI?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Explore how different content creators maximize retention and conversion.
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
                    ? "bg-white dark:bg-slate-800 border-pink-500/50 shadow-md text-slate-900 dark:text-white font-semibold"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                <div className="text-xs text-pink-600 dark:text-pink-400 font-bold uppercase tracking-wider mb-1">
                  {uc.badge}
                </div>
                <div className="text-sm sm:text-base">{uc.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
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
                Core Advantages:
              </h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800/60 text-xs sm:text-sm text-pink-900 dark:text-pink-200 font-medium">
              📈 <strong>Growth Highlight:</strong> {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 TECHNICAL GLOSSARY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
          <BookOpen className="w-4 h-4" />
          Short-Form Video & Algorithm Terminology
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
            Expert guidance on maximizing retention and reach across Instagram Reels and TikTok.
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
