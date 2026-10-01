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
  Presentation, 
  Layers, 
  Compass, 
  Award, 
  Target, 
  TrendingUp, 
  Users,
  ShieldCheck,
  FileSpreadsheet
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI pitch deck generator and how does it create investor-ready slides?",
    answer: "An AI pitch deck generator converts raw founder notes, executive summaries, or business model URLs into complete, beautifully designed 10 to 15 slide venture pitch decks. It structures the narrative following classic venture capital frameworks (Problem, Solution, Market Size, Traction, Business Model, Team, Ask), generates custom diagrams and financial infographics, and formats cohesive typography and color schemes automatically."
  },
  {
    question: "What are the best AI pitch deck tools in 2026?",
    answer: "Gamma App is the runaway favorite for founders creating fluid, interactive web-native presentations with AI generation. Beautiful.ai utilizes smart design constraints that automatically adjust layout elements as you type without breaking alignment. Tome blends generative storytelling with AI image generation. Pitch.com provides enterprise-grade team collaboration and investor link analytics."
  },
  {
    question: "Can AI generate accurate TAM / SAM / SOM market size diagrams and financial projections?",
    answer: "Yes. Advanced pitch deck platforms can ingest revenue figures and industry sectors to calculate bottom-up and top-down Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM) visuals. However, founders must always audit the underlying market assumptions and verify historical figures before sharing with institutional investors."
  },
  {
    question: "Can I export AI-generated pitch decks to PowerPoint (.pptx) or PDF formats?",
    answer: "Yes. Leading tools like Gamma, Beautiful.ai, and Pitch offer seamless 1-click exports to vector-rendered PDFs and editable Microsoft PowerPoint (.pptx) files, while also providing trackable web links with real-time slide viewing telemetry for investor meetings."
  }
];

const useCases = [
  {
    title: "Pre-Seed & Seed Fundraising Deck Assembly",
    badge: "Startup Capital",
    desc: "Transform bulleted founder ideas and MVP screenshots into a polished 12-slide Y-Combinator-style pitch deck in under 30 minutes.",
    benefits: [
      "Structured narrative flow adhering to proven VC investment frameworks",
      "Instant generation of competitive matrix tables and market opportunity visuals",
      "Saves early-stage founders thousands of dollars in design agency fees"
    ],
    highlight: "Helped over 4,200 early-stage startups create fundable decks in under 1 hour"
  },
  {
    title: "Investor Update & Monthly Board Presentations",
    badge: "Executive Reporting",
    desc: "Paste monthly MRR growth, churn rates, and hiring milestones to generate clean, recurring board decks with automated chart visualizations.",
    benefits: [
      "Connects to spreadsheet data to populate recurring monthly KPIs",
      "Maintains strict corporate brand typography and palette consistency",
      "Generates concise bullet summaries highlighting wins, risks, and runway"
    ],
    highlight: "Cut monthly board deck preparation time from 8 hours down to 45 minutes"
  },
  {
    title: "Venture Competition & Demo Day Slides",
    badge: "High-Impact Stage",
    desc: "Create visually cinematic, high-contrast slides designed for 3-minute stage pitches with zero text clutter and bold graphic emphasis.",
    benefits: [
      "Optimized for high-contrast auditorium projectors and live streaming",
      "Minimalist design rules preventing cluttered, unreadable bullet lists",
      "Presenter view notes with automated rehearsal timing cues"
    ],
    highlight: "Boosted investor callback rates by 38% at multi-accelerator demo days"
  }
];

const glossaryTerms = [
  {
    term: "TAM / SAM / SOM Visualizer",
    definition: "An automated infographic representing Total Addressable Market, Serviceable Addressable Market, and Serviceable Obtainable Market nested circles."
  },
  {
    term: "Smart Layout Constraints",
    definition: "Design automation algorithms (pioneered by Beautiful.ai) that automatically reposition, resize, and rebalance slide elements when content is added."
  },
  {
    term: "Deck Telemetry Analytics",
    definition: "Tracking technology that reveals how many seconds an investor spent on each slide, which slides they skipped, and who they forwarded the deck to."
  },
  {
    term: "Fluid Card Format",
    definition: "A responsive, web-native presentation style (used by Gamma) that blends document depth with slide presentation aesthetics across desktop and mobile screens."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiPitchDeckGeneratorsGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-indigo-950 text-white p-8 md:p-14 border border-indigo-500/20 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Venture Capital & Pitch Deck Generation 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Pitch Deck Generators: <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">From Startup Idea to Investor-Ready Deck in Minutes</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Fundraising is hard enough without wrestling with slide formatting for 40 hours. Discover how AI pitch deck generators structure winning venture narratives, generate custom market diagrams, and impress angel and institutional investors.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Pitch Deck Creation Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How generative slide engines replaced multi-thousand dollar presentation design agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Blank PowerPoint Paralysis</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Founders spend 40 to 60 hours manually nudging text boxes, aligning icons, and searching for royalty-free stock imagery instead of speaking with potential customers.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Expensive Design Agencies</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Specialized pitch deck agencies charge $5,000 to $15,000 with 3-week turnaround cycles, draining vital pre-seed cash reserves before the product even ships.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Generative Pitch Engines</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Gamma and Beautiful.ai ingest your business model and generate cohesive, venture-standard slide decks with smart responsive layouts and investor tracking links in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* 2.5 INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 md:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              <Calculator className="w-4 h-4" />
              Startup Resource & Deck Creation Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Pitch Deck Creation Costs (15-Slide Deck)</h2>
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
              Design Agency / Freelancer
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Pitch Deck Generator (Gamma/Beautiful.ai)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Turnaround Time to First Complete Draft
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "14 to 21 Days" : "15 Minutes"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Multiple briefing calls, wireframes, and back-and-forth design revisions" 
                : "Prompt the business model and receive complete slides ready for fine-tuning"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Total Cash Outlay
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$4,500 - $8,000" : "$16 - $20"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Hefty retainer paid to presentation designers before raising a single dime" 
                : "Single month software subscription with unlimited deck generations"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Iteration & Pivot Agility
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "3 Days / Change" : "30 Seconds"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Incur additional freelancer hourly fees whenever metrics or narrative shift" 
                : "Prompt the AI to reframe the business model or add new traction metrics"}
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE ARCHITECTURE */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <BookOpen className="w-4 h-4" />
            Under the Hood
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            How AI Pitch Deck Generators Function
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl">
            Transforming unstructured founder ideas into investor-optimized slide decks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">VC Narrative Blueprinting</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Maps inputs across the classic 12-slide sequence: Problem &rarr; Solution &rarr; Market &rarr; Product &rarr; Traction &rarr; Business Model &rarr; Team.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Smart Responsive Layout</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Applies automated design constraints, automatically balancing whitespace, typography hierarchy, and icon grids without manual dragging.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Visual Data Infographics</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Converts raw bullet metrics into sleek visual components: TAM circle charts, competitor 2x2 grids, and milestone roadmaps.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Investor Link Telemetry</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Generates password-protected web viewing links that track slide-by-slide view times, alerting founders the moment a VC opens the deck.
            </p>
          </div>
        </div>
      </section>

      {/* 4. TOP 3 ALTERNATIVES MATRIX */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Award className="w-4 h-4" />
            Platform Benchmark
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 AI Pitch Deck Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed head-to-head comparison of modern generative presentation suites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gamma App */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 relative shadow-lg space-y-5">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              Founder Favorite
            </div>
            <div>
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Fluid Web Presentations</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Gamma App</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The modern breakout tool for AI deck creation. Replaces rigid slide boxes with flexible cards that look stunning on mobile, tablet, and widescreen monitors.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>One-click AI deck generation from simple text prompts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Responsive card layout optimized for mobile investors</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Export directly to PowerPoint (.pptx) and vector PDF</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Early-stage founders wanting fast, modern web-native pitch decks.
            </div>
          </div>

          {/* Beautiful.ai */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Design Guardrails</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Beautiful.ai</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Pioneered intelligent design rules. Slide elements automatically adapt in real-time as content is typed, making it impossible to create an ugly or misaligned slide.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Smart Slides that reformat instantly as you edit</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Extensive venture capital pitch deck template library</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>DesignerBot generative AI prompt assistance</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Founders who want classic 16:9 widescreen presentation perfection.
            </div>
          </div>

          {/* Pitch.com */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Team Collaboration</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Pitch.com</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Collaborative presentation platform combining AI-generated starter decks with real-time multiplayer co-editing and detailed investor link viewing analytics.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Real-time co-editing for co-founders & advisors</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Granular investor engagement and slide duration analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Custom team branding kits and asset repositories</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Co-founding teams collaborating closely with angel advisors.
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE USE CASES TABBED */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Target className="w-4 h-4" />
            Field-Proven Workflows
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            High-Impact Pitch Deck Deployments
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How startup founders utilize AI to raise millions across multiple venture rounds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            {useCases.map((uc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveUseCase(idx)}
                className={`w-full text-left p-4 rounded-xl transition-all ${
                  activeUseCase === idx 
                    ? "bg-white dark:bg-slate-800 shadow-md border-l-4 border-indigo-600 dark:border-indigo-400 text-slate-900 dark:text-white"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800/40 text-slate-600 dark:text-slate-400"
                }`}
              >
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{uc.badge}</div>
                <div className="font-semibold text-sm sm:text-base">{uc.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                {useCases[activeUseCase].badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {useCases[activeUseCase].title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                {useCases[activeUseCase].desc}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Key Capabilities</h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <div className="text-xs sm:text-sm font-medium text-indigo-950 dark:text-indigo-200">
                {useCases[activeUseCase].highlight}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Compass className="w-4 h-4" />
            Founder Playbook
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4 Steps to Crafting a Winning Pitch Deck with AI
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From raw founder notes to closed investment rounds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 1</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Draft Narrative Points</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Jot down 3 bullets for: Problem, Secret Weapon, Traction Metrics, and Founder Background in a raw text file or prompt.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 2</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Run AI Slide Generation</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Select your color palette and typography theme. Let the AI generate the 12-slide structure with automated infographics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 3</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Audit & Refine Metrics</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Replace placeholder figures with verified revenue, retention rates, customer quotes, and realistic bottom-up market sizing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 4</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Deploy Trackable Links</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Generate unique, trackable viewing links for each VC firm to monitor slide drop-off rates and follow up with strategic precision.
            </p>
          </div>
        </div>
      </section>

      {/* 7. COMPARISON BRIDGE */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Layers className="w-4 h-4" />
            Strategic Evaluation
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            AI Pitch Deck Generators vs Manual PowerPoint Design
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why high-velocity venture founders have moved beyond legacy desktop presentation software.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-indigo-600 dark:text-indigo-400">AI Pitch Deck Generator (Gamma/Beautiful.ai)</th>
                <th className="p-4 sm:p-5">Traditional PowerPoint / Keynote</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Creation Time</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Under 20 minutes from text prompt to deck</td>
                <td className="p-4 sm:p-5 text-slate-500">20 to 50 hours of manual layout tweaking</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Design Consistency</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Algorithmic alignment and smart design rules prevent errors</td>
                <td className="p-4 sm:p-5 text-slate-500">Prone to misaligned margins, font mismatch, and text overflow</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Investor Telemetry</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Real-time alerts and slide-by-slide viewing duration tracking</td>
                <td className="p-4 sm:p-5 text-slate-500">Zero data once emailed as a PDF attachment</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Mobile Responsiveness</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Responsive fluid card view (Gamma) readable on any phone</td>
                <td className="p-4 sm:p-5 text-slate-500">Shrinks to unreadable tiny text requiring manual zoom</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. GLOSSARY TERMS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Key Pitch Deck Terminology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {glossaryTerms.map((term, i) => (
            <div key={i} className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <div className="font-semibold text-indigo-600 dark:text-indigo-400 text-sm">{term.term}</div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{term.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Everything you need to know about generating pitch decks with generative AI.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div key={idx} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-indigo-600" : "text-slate-400"}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-100 dark:border-slate-800 px-4 sm:px-5 py-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-950 p-8 md:p-12 text-center text-white space-y-6 border border-indigo-500/20 shadow-xl">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Impress Investors?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Explore verified AI pitch deck tools and turn your startup vision into a compelling, fundable narrative today.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/category/ai-presentation-makers"
            className="px-6 py-3 rounded-xl bg-white text-indigo-900 font-semibold text-sm hover:bg-slate-100 transition-all flex items-center gap-2 shadow-sm"
          >
            Explore AI Presentation Makers
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/category/productivity"
            className="px-6 py-3 rounded-xl bg-indigo-800/60 hover:bg-indigo-700/60 text-white font-semibold text-sm border border-indigo-400/30 transition-all"
          >
            View Productivity Category
          </Link>
        </div>
      </section>

    </div>
  );
}
