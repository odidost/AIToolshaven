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
  PhoneCall, 
  Mic, 
  ShieldAlert, 
  Award, 
  Target, 
  TrendingUp, 
  Users,
  Compass,
  Layers
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is AI sales call intelligence and how does it work?",
    answer: "AI sales call intelligence software joins sales video calls (Zoom, Google Meet, Teams) or telephone lines to record, transcribe, and analyze conversations in real time. It uses specialized speech-to-text models and LLMs to identify prospect sentiment, track competitor mentions, detect buying objections, evaluate rep talk-to-listen ratios, and summarize agreed next steps directly into CRM records."
  },
  {
    question: "Which are the best AI sales call intelligence platforms in 2026?",
    answer: "Gong is the market-leading enterprise revenue intelligence platform known for deal risk forecasting and team-wide coaching benchmarks. Chorus by ZoomInfo offers deep integration with B2B contact data and relationship graphs. Clari Copilot (formerly Wingman) provides real-time battlecard cue cards during live calls. Otter.ai and Fathom provide lightweight, cost-effective options for startup founders and solo account executives."
  },
  {
    question: "Can AI conversation intelligence accurately predict deal slippage or win rates?",
    answer: "Yes. Advanced revenue intelligence engines analyze historical call patterns across thousands of closed-won and closed-lost deals. They identify leading risk indicators—such as absence of decision-makers on calls, declining prospect engagement scores, late-stage pricing hesitations, and missed follow-up deadlines—alerting sales managers weeks before quarterly forecasts slip."
  },
  {
    question: "How do these tools handle buyer privacy and two-party call recording consent?",
    answer: "Enterprise tools feature automated two-party consent workflows. When recording in strict jurisdictions (like California or Germany), bots announce recording via in-call audio disclaimers, in-meeting chat links, or opt-in screen prompts. They also provide automatic PII redacting, masking credit card details, passwords, and sensitive health information from transcripts."
  }
];

const useCases = [
  {
    title: "Real-Time In-Call Battlecards & Objection Handling",
    badge: "Live Coaching",
    desc: "Arm sales reps with instant talking points, pricing matrices, and competitor differentiation cards the second a prospect mentions an alternative vendor.",
    benefits: [
      "Zero-latency keyword detection triggering silent HUD battlecards",
      "Context-aware rebuttal prompts based on current deal stage",
      "Elimination of awkward 'let me get back to you on that' pauses"
    ],
    highlight: "Boosted first-call objection resolution rate from 34% to 78% across 45 AEs"
  },
  {
    title: "Automated CRM Deal Logging & MEDDIC Qualification",
    badge: "Revenue Ops",
    desc: "Automatically extract Pain Points, Economic Buyer, Decision Criteria, and Next Steps from call transcripts and map them into Salesforce or HubSpot fields.",
    benefits: [
      "Saves reps 45 minutes of manual CRM data entry after every discovery call",
      "Standardizes MEDDPICC and BANT framework compliance across sales orgs",
      "Generates hyper-specific recap emails ready for rep approval in 30 seconds"
    ],
    highlight: "Eliminated 12 hours per week of administrative overhead per account executive"
  },
  {
    title: "Data-Driven Sales Coaching & Rep Ramp Acceleration",
    badge: "Sales Leadership",
    desc: "Benchmark top-performing reps' talk-to-listen ratios, question velocity, and storytelling cadences to ramp new hires in half the historical time.",
    benefits: [
      "Automated scorecard generation rating rep discovery depth and closing clarity",
      "Searchable call snippet library of 'Gold Standard' demo moments",
      "Actionable manager coaching digests highlighting at-risk team members"
    ],
    highlight: "Cut new enterprise AE onboarding ramp time from 120 days down to 54 days"
  }
];

const glossaryTerms = [
  {
    term: "Talk-to-Listen Ratio",
    definition: "The proportion of total meeting time spent speaking by the sales rep versus the customer. High-performing reps average between 43% and 46% talk time."
  },
  {
    term: "MEDDPICC Extraction",
    definition: "Automated AI parsing of conversation transcripts to populate Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Pain, and Champions."
  },
  {
    term: "Real-Time Battlecard",
    definition: "An interactive, pop-up cue card displaying competitive counters and customer proof points the exact second a prospect mentions a competitor's name."
  },
  {
    term: "Deal Health Velocity Score",
    definition: "A predictive score calculated from prospect responsiveness, multi-threading engagement, sentiment changes, and competitor frequency throughout the sales cycle."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiSalesCallIntelligenceGuide() {
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
            Revenue Intelligence & Conversation Analytics 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Sales Call Intelligence Tools: <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">Turn Every Prospect Conversation into Closed Deals</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Never lose deal context or miss buying signals again. Discover how AI conversation intelligence platforms automatically record, transcribe, extract MEDDIC data, pop real-time battlecards, and coach sales reps to exceed quota.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Conversation Intelligence Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How autonomous audio-to-CRM intelligence solved sales pipeline blindness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Fragmented Notepad Scribing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Sales reps frantically type illegible notes during demos, missing subtle emotional cues, failing to listen actively, and forgetting key customer pain points hours later.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Passive Audio Transcription</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Generic transcript generators spit out 8,000 words of unindexed dialogue with zero deal context, forcing sales leaders to waste hours skimming raw text to find answers.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Proactive Revenue Intelligence</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Context-aware AI detects deal risks, auto-populates CRM opportunity stages, surfaces live objection battlecards, and forecasts pipeline health with quantified accuracy.
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
              Sales Productivity & Pipeline Acceleration Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Calculate Sales Team Efficiency (Team of 8 AEs)</h2>
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
              Manual Notes & Guesswork
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Call Intelligence (Gong/Chorus)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Post-Call CRM Logging Time
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "18 min / call" : "1 min / call"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Manual typing of summaries, creating tasks, logging next steps" 
                : "Instant AI draft summaries synced to Salesforce with 1-click approval"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Monthly Rep Capacity Recovered
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "0 hours" : "136 hours"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Productive selling time lost to administrative data entry" 
                : "Equivalent to adding 1.2 full-time quota-carrying sales reps"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Win Rate on Multi-Stage Deals
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "21.4%" : "34.8%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Frequent deal slippage due to unaddressed competitor objections" 
                : "Live objection battlecards and automated next-step accountability"}
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
            How AI Sales Call Intelligence Operates
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl">
            A continuous loop from real-time audio capture to actionable CRM revenue forecasting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Dual-Stream Ingestion</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Silently captures speaker audio channels independently, ensuring 99.2% speaker diarization accuracy even when participants speak simultaneously.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Semantic Intent Mapping</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Domain-tuned sales LLMs identify buying signals, hesitation phrases, budget approvals, timelines, and unmentioned competitor products.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">In-Call HUD Cue Cards</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Surfaces non-intrusive battlecards on the rep&apos;s second screen with feature comparisons, proof metrics, and compliance guidelines within 1.2 seconds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Bidirectional CRM Sync</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Maps call action items, decision-maker contacts, and deal stage velocity scores straight into Salesforce, HubSpot, or Clari pipeline boards.
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
            Top 3 AI Sales Call Intelligence Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed head-to-head comparison of the leading revenue intelligence suites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gong */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 relative shadow-lg space-y-5">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              Market Leader
            </div>
            <div>
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Enterprise Revenue Intelligence</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Gong.io</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The premier platform for mid-market and enterprise sales orgs needing predictive deal forecasting, team coaching metrics, and multi-channel email/call analytics.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Industry-leading deal risk forecasting AI</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Deep team benchmark coaching metrics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Integrated email & phone call intelligence</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> High-growth mid-market and enterprise sales teams (15+ reps).
            </div>
          </div>

          {/* Chorus */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">ZoomInfo Ecosystem</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Chorus by ZoomInfo</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Unrivaled B2B data enrichment tied directly into call transcripts, revealing hidden stakeholders and parent company organizational hierarchies automatically.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Native ZoomInfo company & contact data</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Stakeholder relationship graph mapping</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Automated CRM contact creation & enrichment</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Teams already utilizing ZoomInfo for outbound prospecting.
            </div>
          </div>

          {/* Clari Copilot */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Live Execution</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Clari Copilot</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Specializes in sub-second live call guidance, feeding reps battlecards and pricing answers while prospects are still speaking on the microphone.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero-latency real-time battlecards</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Direct Clari revenue cadence integration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Fast onboarding for fast-growing sales reps</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Competitive markets requiring instant real-time objection handling.
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
            High-Impact Sales Call Intelligence Deployments
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How modern revenue engines unlock hidden deal momentum across their sales cycle.
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
            Deployment Playbook
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4 Steps to Rolling Out AI Call Intelligence
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From pilot recording bot connection to organization-wide predictive revenue forecasting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 1</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Calendar & Bot Sync</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Connect Google Workspace or Office 365. Configure dual-consent recording notifications and auto-join parameters for external meetings.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 2</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Vocabulary & Battlecards</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Seed proprietary product names, competitor aliases, and discount policies into the model. Build triggered HUD cue cards for common rebuttals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 3</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">CRM Field Mapping</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Map MEDDPICC, pain points, next step deadlines, and contact roles straight into Salesforce or HubSpot fields without manual rep intervention.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 4</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Pipeline Review Reviews</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Shift weekly 1-on-1s from subjective rep opinions to objective conversation data: deal health velocity, unreturned next steps, and customer sentiment.
            </p>
          </div>
        </div>
      </section>

      {/* 7. COMPARISON BRIDGE: CALL INTELLIGENCE VS GENERAL TRANSCRIBERS */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Layers className="w-4 h-4" />
            Strategic Evaluation
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Sales Call Intelligence vs Generic Meeting Recorders
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why dedicated revenue intelligence engines outclass general consumer transcription utilities.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-indigo-600 dark:text-indigo-400">AI Sales Call Intelligence</th>
                <th className="p-4 sm:p-5">Generic Note Takers (Otter/Fireflies)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Deal Health & Slippage Prediction</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Predictive revenue modeling across historic deal stages</td>
                <td className="p-4 sm:p-5 text-slate-500">None (unaware of sales pipeline dynamics)</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">In-Call Real-Time Guidance</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Instant battlecards popped during objection keywords</td>
                <td className="p-4 sm:p-5 text-slate-500">Post-call static summary only</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">CRM Opportunity Synchronization</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Native 2-way sync with MEDDPICC field mapping</td>
                <td className="p-4 sm:p-5 text-slate-500">Basic transcript pasted into activity feed</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Enterprise Privacy & Compliance</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">SOC2 Type II, HIPAA, PCI-DSS redaction, geo-fenced consent</td>
                <td className="p-4 sm:p-5 text-slate-500">Standard consumer privacy controls</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. GLOSSARY TERMS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Key Revenue Intelligence Concepts</h2>
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
            Everything you need to know about adopting sales conversation intelligence tools.
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
            Stop Guessing Why Deals Slip
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Explore verified AI sales call intelligence platforms and turn every customer objection into revenue velocity.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/category/ai-sales-tools"
            className="px-6 py-3 rounded-xl bg-white text-indigo-900 font-semibold text-sm hover:bg-slate-100 transition-all flex items-center gap-2 shadow-sm"
          >
            Explore AI Sales Tools
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/category/marketing-sales"
            className="px-6 py-3 rounded-xl bg-indigo-800/60 hover:bg-indigo-700/60 text-white font-semibold text-sm border border-indigo-400/30 transition-all"
          >
            View Marketing & Sales Category
          </Link>
        </div>
      </section>

    </div>
  );
}
