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
  FileText,
  Users,
  Target,
  TrendingUp,
  Sparkle,
  ShieldCheck,
  Briefcase,
  Layers
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI LinkedIn post generator and how does it drive personal branding?",
    answer: "An AI LinkedIn post generator is a specialized B2B content intelligence platform designed to create high-performing status updates, carousels, and articles tailored specifically to LinkedIn's algorithmic nuances. Unlike generic LLMs, these platforms understand B2B hook psychology, mobile formatting constraints, dwell-time mechanics, and professional brand governance—allowing founders, executives, and marketers to consistently publish thought leadership that generates high-intent enterprise pipeline."
  },
  {
    question: "What are the best AI tools for LinkedIn post generation in 2026?",
    answer: "Taplio and AuthoredUp are the two premier solutions in the market. Taplio provides end-to-end growth automation, combining a database of 4M+ viral B2B posts, AI voice imitation, automated carousel creation, scheduling, and integrated lead generation. AuthoredUp focuses on content perfection and analytics, offering real-time multi-device post previews, draft version control, and granular engagement audits."
  },
  {
    question: "How does the LinkedIn algorithm measure content quality in 2026?",
    answer: "LinkedIn prioritizes 'dwell time' (the amount of time a reader spends consuming your post before scrolling), meaningful comments from industry peers, and document carousel completion rates. The algorithm actively suppresses external links placed directly in the main body, repetitive hashtags, and artificial engagement pods, while heavily rewarding structured storytelling and actionable professional insights."
  },
  {
    question: "Can AI-generated LinkedIn posts damage executive credibility?",
    answer: "Only if using low-effort, cliché-ridden AI copy filled with robotic buzzwords ('humbled to announce', 'game-changing paradigm'). Professional tools utilize few-shot learning on your previous writing, resume, and strategic opinions to produce authentic first-person drafts that sound like genuine executive perspectives."
  }
];

const useCases = [
  {
    title: "B2B Founders & Tech CEOs",
    badge: "Executive Thought Leadership",
    desc: "Establish category authority and generate high-ticket enterprise inbound without spending 10 hours a week writing.",
    benefits: [
      "AI ghostwriter trained on your podcasts, keynotes, and founder philosophy",
      "Automatic conversion of internal engineering memos into polished public lessons",
      "Lead generation workflows that identify profile visitors and high-value commenters"
    ],
    highlight: "Generated 34 enterprise discovery calls directly from executive LinkedIn thought leadership"
  },
  {
    title: "B2B Marketing & Demand Gen Teams",
    badge: "Employee Advocacy & Distribution",
    desc: "Scale corporate narrative and product announcements through the personal profiles of 20+ internal team members.",
    benefits: [
      "Shared company idea banks with customizable 1-click post variations",
      "PDF carousel generator transforming case studies into multi-slide visual decks",
      "Unified performance dashboard tracking total employee advocacy reach and clicks"
    ],
    highlight: "Surpassed 1.2M organic impressions across team profiles with $0 in ad spend"
  },
  {
    title: "Consultants, Coaches & Agency Owners",
    badge: "Client Acquisition Pipeline",
    desc: "Attract qualified inbound inquiries and retainer clients by sharing deep tactical breakdowns and client transformation stories.",
    benefits: [
      "Viral hook templates optimized to spark debates and thoughtful commentary",
      "Auto-DM triggers that deliver case study PDFs when prospects engage",
      "Calendar scheduling that paces posts to capture early morning business reading hours"
    ],
    highlight: "Filled 6-month consulting roster entirely through consistent weekly carousel frameworks"
  }
];

const glossaryTerms = [
  {
    term: "Dwell Time",
    definition: "The amount of time a user pauses to view, read, or expand a LinkedIn post; the single strongest algorithmic signal for broad feed distribution."
  },
  {
    term: "PDF Carousel",
    definition: "A multi-slide document uploaded as a PDF that users swipe through horizontally on LinkedIn, generating exceptionally high dwell time and engagement."
  },
  {
    term: "Mobile Line Break Pacing",
    definition: "The deliberate formatting of text using 1-2 sentence paragraphs and visual whitespace to optimize readability and 'see more' click-throughs on mobile screens."
  },
  {
    term: "First-Hour Velocity",
    definition: "The volume of thoughtful comments and reactions received within 60 minutes of publishing, which determines whether the post reaches second- and third-degree networks."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiLinkedinPostGeneratorsGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white p-8 md:p-14 border border-blue-500/20 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Executive Branding, PDF Carousels & Inbound Pipeline 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI LinkedIn Post Generators: <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Turn Thought Leadership into Inbound B2B Pipeline</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            LinkedIn is the undisputed B2B powerhouse for dealmaking and professional authority. Explore premier AI tools engineered to craft high-dwell status updates, stunning visual carousels, and authentic executive narratives that convert followers into clients.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The LinkedIn Thought Leadership Transformation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Moving from sporadic, robotic corporate updates to an automated executive brand engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Corporate Jargon & Silence</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Sharing sterile company press releases and generic congratulations once a month, yielding zero reach and no commercial traction.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Expensive Ghostwriters</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Paying $3,000–$6,000/month to external ghostwriters who lack deep industry context and require hours of tedious briefing and rewrites.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-950 to-slate-900 text-white border border-blue-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">AI Executive Ghostwriter</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Trained on your real expertise, creating viral hooks, formatting for mobile dwell-time, auto-generating PDF carousels, and scheduling at optimal reach windows.
            </p>
          </div>
        </div>
      </section>

      {/* 2.5 INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 md:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Calculator className="w-4 h-4" />
              Executive Brand ROI & Pipeline Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare LinkedIn Creation Economics</h2>
          </div>

          {/* Toggle pill */}
          <div className="inline-flex p-1 bg-slate-200 dark:bg-slate-800 rounded-xl">
            <button
              onClick={() => setCalculatorMode("traditional")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${calculatorMode === "traditional"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
            >
              Manual / Agency Ghostwriter
            </button>
            <button
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${calculatorMode === "ai"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
            >
              AI LinkedIn Stack (Taplio/AuthoredUp)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Monthly Content Production Cost
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$3,500 /mo" : "$65 /mo"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional"
                ? "B2B agency ghostwriting retainer & graphic designer fees"
                : "Full AI generation suite + carousel builder subscription"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-blue-500" />
              Executive Time Required / Week
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "8.0 Hours" : "1.5 Hours"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional"
                ? "Writing drafts, back-and-forth edits, and manual formatting"
                : "Reviewing AI voice drafts & 1-click carousel approvals"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Briefcase className="w-4 h-4 text-indigo-500" />
              Qualified Inbound Inquiries / Quarter
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "3 - 5 Deals" : "24 - 40 Deals"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional"
                ? "Low frequency due to bottlenecks and high cost per post"
                : "Daily consistency, viral carousel reach, and auto-comment lead funnels"}
            </p>
          </div>
        </div>
      </section>

      {/* 3.0 EDITOR'S CHOICE SPOTLIGHT */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 md:p-12 border border-blue-500/30 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-400" />
              Editor's Choice 2026: Premier LinkedIn Growth Platform
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Taplio — The All-In-One LinkedIn AI Powerhouse
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Taplio is trusted by over 60,000 professionals, founders, and agency leaders. It merges an enormous viral post inspiration database with an advanced LLM tailored to personal branding, automated multi-page carousel styling, queue management, and contact enrichment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                4M+ Curated Viral LinkedIn Post Library
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                Instant PDF Carousel Generator from Text or URLs
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                AI Voice Persona Matching Your Expertise
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                Prospect Relationship CRM & Auto-DMs
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-full lg:w-72 shrink-0 space-y-4 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400">Monthly Plan</div>
            <div className="text-4xl font-black text-white">$65 <span className="text-sm font-normal text-slate-400">/mo</span></div>
            <div className="text-xs text-blue-300">Free 7-day trial • Cancel anytime</div>
            <Link
              href="/tools/taplio"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors text-sm shadow-lg shadow-blue-600/25"
            >
              Explore Taplio
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 TOP 3 ALTERNATIVES MATRIX & BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 AI LinkedIn Tools Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed evaluation of content generation, visual carousels, analytics, and price.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-4 sm:p-5">Platform</th>
                <th className="p-4 sm:p-5">Primary Strength</th>
                <th className="p-4 sm:p-5">Carousel Maker</th>
                <th className="p-4 sm:p-5">Lead Gen / CRM</th>
                <th className="p-4 sm:p-5">Post Preview</th>
                <th className="p-4 sm:p-5">Pricing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Taplio
                </td>
                <td className="p-4 sm:p-5">Complete Inbound Growth & Auto-DMs</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">1-Click AI Carousels</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Integrated Prospecting</td>
                <td className="p-4 sm:p-5">Desktop & Mobile</td>
                <td className="p-4 sm:p-5 font-medium">$65/mo</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  AuthoredUp
                </td>
                <td className="p-4 sm:p-5">Writing Environment & Analytics</td>
                <td className="p-4 sm:p-5 text-slate-500">Formatting only</td>
                <td className="p-4 sm:p-5 text-slate-500">Analytics only</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Real-Time Exact Preview</td>
                <td className="p-4 sm:p-5 font-medium">$19.95/mo</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  Salesflow
                </td>
                <td className="p-4 sm:p-5">Outbound Messaging & Automation</td>
                <td className="p-4 sm:p-5 text-slate-500">None</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Multi-Campaign Outbound</td>
                <td className="p-4 sm:p-5">Basic Message Preview</td>
                <td className="p-4 sm:p-5 font-medium">$99/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-500" />
              Taplio vs AuthoredUp: Content Hub vs Editor
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Taplio</strong> is an autonomous thought leadership system that finds viral ideas, drafts posts, generates multi-slide PDF carousels, and sends automated DMs. <strong>AuthoredUp</strong> is a precision drafting tool ideal for writers who write their own copy and want flawless typography, formatting checks, and historical post analytics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-500" />
              Content-Led Inbound vs Cold Outbound
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              While outbound tools like <strong>Salesflow</strong> blast cold InMails, inbound platforms like <strong>Taplio</strong> generate organic trust. Prospects who discover you through insightful feed content and carousels arrive pre-sold, converting at 3x higher closing rates than cold outbound.
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 BUYER'S GUIDE: ASYMMETRIC BENTO BLOCKS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Key Evaluation Factors for LinkedIn AI Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            What separates elite B2B brand accelerators from low-rent spam generators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">01</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Native PDF Carousel Generation</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Carousels consistently yield the highest organic reach and bookmark rates on LinkedIn. Look for tools that convert text outlines or blog URLs into branded, visually compelling PDF slides with custom fonts and colors.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">02</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Strict 'See More' Hook Optimization</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              On mobile devices, LinkedIn truncates posts after the first 3 lines. Your tool must show exact cutoff previews and generate opening lines that compel senior executives to click '...see more' to reveal the full breakdown.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">03</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Safety & Account Governance</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              LinkedIn strictly monitors automated account behavior. Choose platforms with built-in randomized spacing, cloud scheduling, and zero aggressive bot activities (e.g., auto-liking thousands of feeds) that trigger account verification checkpoints.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">04</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Comment-to-Pipeline Funnels</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The highest ROI tactic on LinkedIn is the 'Comment RESOURCE to receive the template' strategy. Ensure the tool automatically detects keyword comments, sends the asset via DM, and adds the contact to your CRM.
            </p>
          </div>
        </div>
      </section>

      {/* 4.5 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4-Step Blueprint to LinkedIn Authority
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From zero post ideas to a high-converting weekly content routine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Train Your Voice Persona</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Import 10 of your best historical posts, bio, and company mission into the AI model so it adopts your authentic tone, sentence length, and vocabulary.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Build a 3-Pillar Weekly Calendar</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Structure posts across 3 pillars: Tactical How-To (Carousels), Contrarian Industry Opinions (Text status), and Behind-the-Scenes Wins/Failures (Personal story).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Batch Create in 90 Minutes</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Generate 5 drafts every Monday. Fine-tune the opening hook, verify formatting in the mobile preview simulator, and queue for 8:00 AM delivery in your target timezone.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Engage in the Golden Hour</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Spend the first 30–60 minutes after publishing replying to every thoughtful comment. This signals active conversation to the algorithm and doubles feed impression velocity.
            </p>
          </div>
        </div>
      </section>

      {/* 5.0 WHO BENEFITS MOST (VERTICAL TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from LinkedIn AI Generators?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Tailored applications for leaders driving organic growth on LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2">
            {useCases.map((uc, index) => (
              <button
                key={index}
                onClick={() => setActiveUseCase(index)}
                className={`text-left p-4 rounded-xl transition-all border ${activeUseCase === index
                    ? "bg-white dark:bg-slate-800 border-blue-500/50 shadow-md text-slate-900 dark:text-white font-semibold"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                  }`}
              >
                <div className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider mb-1">
                  {uc.badge}
                </div>
                <div className="text-sm sm:text-base">{uc.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
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
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-xs sm:text-sm text-blue-900 dark:text-blue-200 font-medium">
              💼 <strong>Measurable Result:</strong> {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 TECHNICAL GLOSSARY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <BookOpen className="w-4 h-4" />
          LinkedIn Algorithm & Content Glossary
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
            Common questions regarding AI-assisted personal branding and LinkedIn content creation.
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
