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
  Calendar, 
  Share2, 
  Clock, 
  Layers, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  Smartphone,
  Repeat
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI social media scheduler and how is it different from traditional schedulers?",
    answer: "Traditional schedulers merely hold a static queue of posts and push them out at pre-set calendar slots. Modern AI social media schedulers dynamically calculate optimal posting times based on live follower activity heatmaps, automatically reformat single drafts to suit specific network restrictions (e.g. hashtags for Instagram, thread unrolls for X, PDF carousels for LinkedIn), auto-generate contextual captions, and recycle top-performing evergreen assets automatically."
  },
  {
    question: "What are the best AI social media scheduling tools in 2026?",
    answer: "Buffer, Metricool, and Publer lead the field. Buffer remains the gold standard for clean, reliable multi-platform distribution and intuitive team collaboration. Metricool is the data-driven favorite for multi-client agencies, offering all-in-one analytics and ad tracking across 9+ platforms. Publer stands out for its deep AI assistant that generates complete post variations and visual watermarks directly inside the calendar view."
  },
  {
    question: "Does scheduling posts through third-party tools lower social media reach?",
    answer: "No. Official API integrations (via Meta Graph API, LinkedIn Community API, TikTok Content Posting API, and X API v2) receive identical algorithmic evaluation to direct in-app posts. Lower reach only occurs if creators blindly post identical generic copy with no platform adaptation across all networks—which AI schedulers actively prevent by tailoring aspect ratios and copy styles per channel."
  },
  {
    question: "How do AI tools determine the 'best time to post'?",
    answer: "Rather than relying on generic industry benchmarks (like 'post at 12 PM on Tuesdays'), AI schedulers continuously ingest your actual audience's historical activity patterns. They calculate hourly engagement velocity across likes, comments, and shares to dynamically place queued posts into micro-windows of peak active audience density."
  }
];

const useCases = [
  {
    title: "Digital Marketing Agencies & Freelancers",
    badge: "Multi-Client Management",
    desc: "Manage 15+ brand accounts across Instagram, TikTok, LinkedIn, and X without logging in and out of native apps or missing client review deadlines.",
    benefits: [
      "White-label client approval portals with interactive calendar previews",
      "Bulk AI scheduling from spreadsheets and blog RSS feeds",
      "Unified cross-channel PDF reports generated automatically every month"
    ],
    highlight: "Allowed single account manager to scale from handling 4 to 12 active brand retainers"
  },
  {
    title: "DTC E-Commerce & Retail Brands",
    badge: "Visual Commerce Scheduling",
    desc: "Coordinate product drops, user-generated content, and seasonal flash sales across visual platforms with shoppable links and auto-first comments.",
    benefits: [
      "Visual Instagram grid planner with auto-reordering and story scheduling",
      "Auto-first comment hashtag insertion to maintain clean caption aesthetics",
      "TikTok and YouTube Shorts auto-publishing with sound library pairing"
    ],
    highlight: "Boosted organic referral traffic to Shopify storefront by 64%"
  },
  {
    title: "SaaS & High-Growth Startups",
    badge: "Omnichannel Distribution",
    desc: "Repurpose product releases, founder thoughts, and customer testimonials across all social channels in one synchronized workflow.",
    benefits: [
      "One master draft tailored into 5 platform-optimized formats in seconds",
      "Evergreen recycling queue that resurfaces top posts periodically",
      "Team permission tiers for writers, reviewers, and executive sign-off"
    ],
    highlight: "Quadrupled total social output while cutting weekly scheduling time to 2 hours"
  }
];

const glossaryTerms = [
  {
    term: "Dynamic Heatmap Scheduling",
    definition: "An algorithmic system that schedules content at fluctuating times based on when the specific account's followers are currently active online."
  },
  {
    term: "Omnichannel Adaptation",
    definition: "The automatic tailoring of a single message to fit each target platform's media aspect ratio, character count, hashtag etiquette, and link placement rules."
  },
  {
    term: "Evergreen Recycling Queue",
    definition: "A library of timeless, high-performing posts that an AI scheduler automatically injects into empty calendar slots to maintain consistent account presence."
  },
  {
    term: "First Comment Automation",
    definition: "A feature that automatically places hashtags, source links, or coupon codes into the first reply immediately upon publication to keep captions clutter-free."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiSocialMediaSchedulersGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-emerald-950 text-white p-8 md:p-14 border border-emerald-500/20 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Omnichannel Publishing, Heatmaps & Queue Automation 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Social Media Schedulers: <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">Publish Everywhere at Peak Engagement Windows</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Managing multiple social channels manually is an operational trap. Discover the next generation of AI social media schedulers that customize copy per platform, pinpoint your exact peak engagement windows, and automate cross-network publishing effortlessly.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Publishing Operational Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why manual copy-pasting across social apps is being replaced by unified AI orchestration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Manual App Juggling</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Logging into 5 separate native apps on mobile, resizing images individually, re-typing hashtags, and guessing when followers are scrolling.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Static Clock Schedulers</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Blasting identical copy everywhere at fixed times without adapting to video formats, character limits, or shifting audience timezones.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Intelligent AI Autopilot</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Write one core message; AI tailors it for 8 platforms, crops media aspect ratios, schedules for peak audience heatmaps, and recycles top content.
            </p>
          </div>
        </div>
      </section>

      {/* 2.5 INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 md:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Calculator className="w-4 h-4" />
              Social Media Operational Efficiency Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Calculate Time & Cost Savings</h2>
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
              Manual App Publishing
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-emerald-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Unified Scheduler (Buffer/Metricool)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-emerald-500" />
              Hours Spent Scheduling Weekly
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "18.5 Hours" : "2.5 Hours"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Manually tailoring captions and alarms across 5 platforms" 
                : "One-click omnichannel reformatting & bulk queue"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-blue-500" />
              Average Engagement Lift
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "Baseline (1x)" : "+43% Engagement"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Random posting times during off-peak hours" 
                : "Dynamic audience heatmap scheduling for maximum initial velocity"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-teal-500" />
              Monthly Labor Cost Equivalent
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$2,400 /mo" : "$18 /mo"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Junior social media manager hours allocated to repetitive scheduling" 
                : "Software subscription cost with team approval stages"}
            </p>
          </div>
        </div>
      </section>

      {/* 3.0 EDITOR'S CHOICE SPOTLIGHT */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-8 md:p-12 border border-emerald-500/30 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-400" />
              Editor's Choice 2026: Multi-Platform Publishing Standard
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Buffer — Clean, Reliable AI Multi-Channel Publishing
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Buffer continues to set the benchmark for modern social teams. Its built-in AI Assistant transforms core concepts into network-specific posts, optimizes publishing times per channel, offers intuitive landing page builders, and integrates seamlessly across 10+ social platforms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Publishes to Instagram, TikTok, LinkedIn, X, Threads, Bluesky
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                AI Assistant Rewrites for Each Network's Tone
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                First Comment Automation & Tagging
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Visual Grid Preview & Team Approval Workflows
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-full lg:w-72 shrink-0 space-y-4 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400">Starting Price</div>
            <div className="text-4xl font-black text-white">$6 <span className="text-sm font-normal text-slate-400">/channel/mo</span></div>
            <div className="text-xs text-emerald-300">Generous free tier available for up to 3 channels</div>
            <Link 
              href="/tools/buffer"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors text-sm shadow-lg shadow-emerald-600/25"
            >
              Explore Buffer
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 TOP 3 ALTERNATIVES MATRIX & BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 Social Media Schedulers Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Evaluating leading platforms on multi-network support, analytics, team features, and value.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-4 sm:p-5">Platform</th>
                <th className="p-4 sm:p-5">Best For</th>
                <th className="p-4 sm:p-5">Supported Networks</th>
                <th className="p-4 sm:p-5">AI Assistant</th>
                <th className="p-4 sm:p-5">Ad Tracking</th>
                <th className="p-4 sm:p-5">Pricing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Buffer
                </td>
                <td className="p-4 sm:p-5">Creators & Small Teams</td>
                <td className="p-4 sm:p-5">10+ (IG, TikTok, X, LI, Threads, Bluesky)</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Included in all plans</td>
                <td className="p-4 sm:p-5 text-slate-500">Organic only</td>
                <td className="p-4 sm:p-5 font-medium">$6/channel/mo</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Metricool
                </td>
                <td className="p-4 sm:p-5">Agencies & Performance Marketers</td>
                <td className="p-4 sm:p-5">9+ (IG, TikTok, YouTube, Twitch, Ads)</td>
                <td className="p-4 sm:p-5 font-semibold">AI copy generator</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Meta & Google Ads</td>
                <td className="p-4 sm:p-5 font-medium">$18/mo (5 brands)</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                  Publer
                </td>
                <td className="p-4 sm:p-5">Affordable Automation & Watermarking</td>
                <td className="p-4 sm:p-5">8+ Networks</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Spintax & AI generator</td>
                <td className="p-4 sm:p-5 text-slate-500">Organic only</td>
                <td className="p-4 sm:p-5 font-medium">$12/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-500" />
              Buffer vs Metricool: Simplicity vs Deep Agency Analytics
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Buffer</strong> provides the slickest, most intuitive publishing flow with top-tier mobile apps for creators who want clean scheduling. <strong>Metricool</strong> is superior for agencies who manage paid campaigns alongside organic content and require client white-label reports.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-teal-500" />
              Publer vs Buffer: Cost Scaling for Multi-Account Ops
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              If you operate 15+ social channels, Buffer's per-channel pricing can add up ($90/mo). <strong>Publer</strong> offers an economical flat-rate structure with built-in photo watermarking, RSS automation, and recurring post recycling.
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 BUYER'S GUIDE: ASYMMETRIC BENTO BLOCKS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Key Architecture Factors When Selecting an AI Scheduler
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            What to evaluate before trusting your multi-platform brand presence to automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-emerald-500/30">01</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Direct Auto-Publishing vs Push Notifications</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Confirm the tool supports 100% direct automated publishing for Instagram Reels, Carousels, and TikTok. Schedulers that require phone push notifications to manually complete the post destroy the efficiency benefits of automation.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-emerald-500/30">02</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Dynamic Follower Heatmaps</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Fixed queue times (e.g. always 9:00 AM) lose efficacy over time. Elite schedulers recalculate weekly when your actual followers are online, slotting posts into dynamic peaks for instant engagement velocity.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-emerald-500/30">03</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Granular Platform Customization</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Publishing the identical caption everywhere hurts your brand. Your tool must allow you to edit the base post into distinct variations per network (removing hashtags on LinkedIn, adding mentions on X) without leaving the composition modal.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-emerald-500/30">04</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Collaborative Approvals & Client Workspaces</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              For teams and agencies, post mistakes can be catastrophic. Look for role-based access control, draft approval chains, and external preview links that let stakeholders approve posts without requiring a login account.
            </p>
          </div>
        </div>
      </section>

      {/* 4.5 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4-Step Setup for Unified Omnichannel Publishing
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How to configure an automated multi-channel queue in under 30 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Connect Official APIs</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Authenticate your social accounts via official business API protocols to ensure 100% compliant, direct publishing without password sharing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Sync Follower Heatmaps</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Allow the platform to ingest 30 days of audience data to generate dynamic posting time slots for each specific social channel.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Batch Create & AI Adapt</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Draft weekly core assets. Use the integrated AI assistant to auto-adapt copy length, tone, and media cropping for each individual destination.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Queue & Recycle Evergreen</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Lock in your publishing schedule. Tag high-performing evergreen posts for automated recycling to maintain feed freshness without extra work.
            </p>
          </div>
        </div>
      </section>

      {/* 5.0 WHO BENEFITS MOST (VERTICAL TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from AI Social Schedulers?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Select your operational role to see custom features and time-saving metrics.
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
                    ? "bg-white dark:bg-slate-800 border-emerald-500/50 shadow-md text-slate-900 dark:text-white font-semibold"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider mb-1">
                  {uc.badge}
                </div>
                <div className="text-sm sm:text-base">{uc.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
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
                Key Platform Capabilities:
              </h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 font-medium">
              🚀 <strong>Outcome Highlight:</strong> {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 TECHNICAL GLOSSARY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <BookOpen className="w-4 h-4" />
          Publishing & Scheduling Lexicon
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
            Answers to common questions regarding multi-network scheduling and AI queue management.
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
