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
  Target, 
  TrendingUp, 
  Users, 
  Compass, 
  Layers, 
  Search, 
  Check,
  ShieldCheck,
  Award,
  BarChart3
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI sales meeting recorder and how does it drive revenue?",
    answer: "An AI sales meeting recorder is a conversation intelligence platform that captures, transcribes, and analyzes prospect sales calls across Zoom, Microsoft Teams, and Google Meet. It detects buyer intent signals, tags recurring pricing and feature objections, monitors competitor mentions, and maps discussion points directly into B2B sales methodologies (like MEDDIC or BANT) to accelerate deal velocity and improve pipeline forecasting."
  },
  {
    question: "What are the best AI sales call and meeting recorders in 2026?",
    answer: "Gong is the enterprise gold standard for revenue intelligence, deal risk prediction, and pipeline visibility. Chorus (by ZoomInfo) delivers deep integration with go-to-market data and rep behavior coaching. Avoma offers an agile, all-in-one meeting workspace blending automated CRM logging with customer conversation intelligence. Grain provides lightweight, intuitive video highlight sharing for fast-moving sales and customer success teams."
  },
  {
    question: "How do AI sales recorders populate CRM fields like Salesforce and HubSpot?",
    answer: "Using LLM entity extraction and API webhooks, sales recorders parse spoken commitments into structured CRM fields. If a prospect mentions their budget is $75k, target rollout is Q3, and the final decision maker is the VP of Engineering, the AI automatically populates Opportunity fields, logs call recordings, and creates follow-up tasks without requiring reps to touch the CRM manually."
  },
  {
    question: "Can AI sales call intelligence help managers coach underperforming reps?",
    answer: "Yes. Revenue intelligence platforms automatically compare rep metrics against top-performing benchmark averages. Managers receive automated alerts on talk-to-listen ratios (optimal is typically 43% talk, 57% listen), frequency of open-ended discovery questions, handling of pricing objections, and competitor battlecard adherence, allowing data-driven 1-on-1 coaching."
  }
];

const useCases = [
  {
    title: "Enterprise Deal Risk & Health Tracking",
    badge: "Revenue Intelligence",
    desc: "Scan conversations across high-stakes enterprise sales pipelines to identify deal risks, stalled prospect momentum, and missing decision makers.",
    benefits: [
      "Flags deals where no economic buyer or executive sponsor has attended calls",
      "Detects waning prospect sentiment or sudden competitor vendor mentions",
      "Generates weekly AI forecast summaries for VP of Sales pipeline reviews"
    ],
    highlight: "Improved sales forecast predictability by 38% across Fortune 500 tech teams"
  },
  {
    title: "Automated MEDDIC & CRM Hygiene",
    badge: "CRM Automation",
    desc: "Eliminate rep administrative fatigue by automatically populating MEDDIC, BANT, or SPICED qualification fields directly from verbal call transcripts.",
    benefits: [
      "Auto-extracts Metrics, Economic Buyer, Decision Criteria, and Paper Process",
      "Pushes structured bullet summaries and next steps to Salesforce and HubSpot",
      "Saves sales reps 45 minutes of manual data entry per deal cycle"
    ],
    highlight: "Boosted CRM field completion rates from 44% to 98.4% within 60 days"
  },
  {
    title: "Rep Onboarding & Playbook Acceleration",
    badge: "Sales Enablement",
    desc: "Curate libraries of winning sales calls to train new business development representatives (BDRs) and account executives on objection handling.",
    benefits: [
      "Creates searchable playlists of top performers handling tough pricing pushback",
      "Reduces ramp time for newly hired account executives by up to 50%",
      "Provides automated AI scoring on rep discovery question depth and active listening"
    ],
    highlight: "Shortened new hire rep ramp time from 4.5 months to 8 weeks"
  }
];

const glossaryTerms = [
  {
    term: "Talk-to-Listen Ratio",
    definition: "The percentage of time a sales rep speaks compared to the prospect; top-performing discovery calls typically maintain a 40:60 to 45:55 balance."
  },
  {
    term: "Competitor Battlecard Alert",
    definition: "Automated real-time notification triggered when a prospect mentions a competing vendor, prompting the rep with winning differentiators."
  },
  {
    term: "MEDDIC Auto-Population",
    definition: "AI parsing of spoken sales dialogues to fill out enterprise qualification criteria: Metrics, Economic Buyer, Decision Criteria, and Pain Points."
  },
  {
    term: "Deal Velocity Score",
    definition: "An algorithmic composite measuring participant engagement, email reply speeds, multi-threading depth, and scheduled next steps."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiSalesMeetingRecordersGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-center space-y-6 pt-6 md:pt-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Category Deep-Dive: AI Sales Meeting Recorders</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
          Win More Deals &amp; Master Deal Intelligence With <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500">AI Sales Call Recorders</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Transform raw sales conversations into predictable revenue. Discover how AI conversation intelligence records discovery demos, tags buyer objections, populates CRM deals automatically, and coaches reps to close high-value contracts.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all duration-200"
          >
            <span>Explore Sales Intelligence Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200"
          >
            <span>Revenue Architecture</span>
          </a>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Revenue Shift: Why Modern Sales Orgs Record Every Call
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Moving from subjective rep intuition and empty CRM pipelines to data-driven conversation science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Zero Manual CRM Admin
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Sales reps spend upwards of 28% of their working day manually typing notes, updating contact records, and scheduling follow-ups in Salesforce or HubSpot. AI recorders capture and map every detail automatically, keeping reps focused on selling.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Objective Deal Risk Detection
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Sales leaders no longer have to rely on optimistic rep self-reporting. AI algorithms objectively audit buyer engagement, sentiment drop-offs, pricing pushback, and missing decision makers to forecast pipeline outcomes with surgical precision.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Scalable Peer Learning &amp; Playbooks
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When your top rep discovers a brilliant rebuttal to an aggressive competitor or pricing objection, the AI clips and shares the moment across the entire sales team, turning tribal knowledge into standardized company-wide execution.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE IMPACT / ROI CALCULATOR */}
      <section className="p-6 md:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10 pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Sales Pipeline ROI Modeler</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Sales Velocity &amp; Win Rate Elevation
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Estimate annual revenue gains and pipeline acceleration unlocked by implementing conversation intelligence across sales reps.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex p-1 rounded-xl bg-slate-800 border border-slate-700">
              <button
                onClick={() => setCalculatorMode("traditional")}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  calculatorMode === "traditional"
                    ? "bg-slate-700 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Manual Sales Workflow
              </button>
              <button
                onClick={() => setCalculatorMode("ai")}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  calculatorMode === "ai"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                AI Conversation Intelligence
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <BarChart3 className="w-5 h-5 text-blue-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "21.4%" : "31.8%"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Opportunity Win Rate
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Standard tech benchmark" : "+10.4% through objection tracking"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Timer className="w-5 h-5 text-indigo-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "68 days" : "49 days"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Average Sales Cycle
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Lagging multi-week follow-ups" : "Instant next-step execution"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <DollarSign className="w-5 h-5 text-blue-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "$48,000" : "$192,000"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Incremental ARR Per Rep
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Unassisted pipeline revenue" : "Additional closed-won contracts"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <TrendingUp className="w-5 h-5 text-purple-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-blue-400">
                {calculatorMode === "traditional" ? "Baseline" : "18.2x ROI"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Revenue Multiplier
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "High deal leakage" : "Software cost vs ARR won"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE ARCHITECTURE */}
      <section id="architecture" className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Deep Dive</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Stage Architecture of AI Sales Meeting Recorders
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How conversation intelligence tools turn live audio into structured revenue signals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Call Stream Capture
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Joins dialer or video conference calls via SIP or WebRTC, capturing high-fidelity dual-channel audio for clear rep vs prospect separation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Speech Diarization &amp; ASR
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Transcribes dialogue in real time while tracking talk-to-listen ratios, silence durations, question cadence, and conversational interruptions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Revenue Entity Recognition
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Detects commercial intent signals: budget discussions, timeline commitments, competitor brand mentions, and technical blockers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              CRM Sync &amp; Deal Score
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Updates Salesforce/HubSpot opportunities, pushes follow-up email drafts to the rep&apos;s inbox, and recalibrates quarterly deal forecast health.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Top 3 AI Sales Meeting Recorders Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Benchmarking leading conversation intelligence platforms for enterprise and mid-market revenue organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-blue-500/30 dark:border-blue-500/20 shadow-md space-y-6 relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Crown className="w-3.5 h-3.5" />
              <span>Enterprise Market Leader</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Gong.io</h3>
              <p className="text-xs text-slate-500 mt-1">Deepest revenue intelligence &amp; deal forecasting</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Patented deal health modeling predicting contract slip probability</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Extensive rep performance scorecards and behavior coaching</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Deep bi-directional sync with Salesforce, Clari, and Salesloft</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Enterprise sales orgs with 50+ quota-carrying reps</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Best All-In-One Workspace</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Avoma</h3>
              <p className="text-xs text-slate-500 mt-1">Meeting lifecycle, scheduling &amp; conversation AI</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Pre-meeting scheduling and agenda templates linked to transcripts</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Automated CRM notes categorizing pain points and competitors</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Transparent pricing accessible to mid-market and SMB teams</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Fast-growing mid-market B2B teams wanting end-to-end tooling</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Best for Video Clips &amp; Customer Handoffs</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Grain</h3>
              <p className="text-xs text-slate-500 mt-1">Lightweight call highlights &amp; sales-to-CS handoffs</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>Instant 20-second video clips to share key prospect requests in Slack</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>Frictionless sales-to-customer success onboarding handoffs</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>Automated HubSpot and Salesforce opportunity logging</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Modern tech startups and cross-functional revenue squads</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TABBED USE CASES */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Transforming the Sales Pipeline at Every Stage
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Explore how conversation intelligence impacts sales leadership, account executives, and enablement teams.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {useCases.map((uc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveUseCase(idx)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeUseCase === idx
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {uc.badge}
            </button>
          ))}
        </div>

        <div className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              {useCases[activeUseCase].title}
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {useCases[activeUseCase].desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {useCases[activeUseCase].benefits.map((benefit, i) => (
              <div key={i} className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs md:text-sm text-blue-700 dark:text-blue-300 font-medium">
            <strong>Demonstrated Metric: </strong> {useCases[activeUseCase].highlight}
          </div>
        </div>
      </section>

      {/* 7. IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Step Implementation Roadmap for Sales Intelligence
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How to roll out conversation recording across sales teams and establish automated revenue coaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Step 01</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Dialer &amp; Video Sync</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Connect Zoom, Microsoft Teams, and telephony dialers (Salesloft, Outreach, Aircall) to ensure all calls are automatically routed.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Step 02</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Competitor Trackers</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Configure keyword trackers for competitor company names, top alternative products, and common pricing resistance phrases.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Step 03</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">CRM Field Mapping</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Map LLM extracted outputs to your exact Salesforce or HubSpot custom properties (Next Steps, Budget, Target Go-Live, MEDDIC notes).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Step 04</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Coaching Playlists</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Build automated playlists of model discovery calls and high-difficulty negotiations to accelerate new rep onboarding.
            </p>
          </div>
        </div>
      </section>

      {/* 8. COMPARISON BRIDGE TABLE */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Feature Matrix: AI Sales Meeting Intelligence Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Comparing platform depth, CRM compatibility, coaching capabilities, and pricing models.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                <th className="p-4">Platform</th>
                <th className="p-4">Deal Risk Forecast</th>
                <th className="p-4">CRM Bi-Directional</th>
                <th className="p-4">Dialer Support</th>
                <th className="p-4">Rep Scorecards</th>
                <th className="p-4">Target Team Size</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Gong.io</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Proprietary AI</td>
                <td className="p-4">Salesforce, HubSpot</td>
                <td className="p-4">Native + 20+ dialers</td>
                <td className="p-4">Comprehensive AI</td>
                <td className="p-4">50+ Reps (Enterprise)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Chorus (ZoomInfo)</td>
                <td className="p-4 font-semibold text-blue-600 dark:text-blue-400">Included</td>
                <td className="p-4">Salesforce, Microsoft Dynamics</td>
                <td className="p-4">ZoomInfo, Outreach, Salesloft</td>
                <td className="p-4">Automated rubrics</td>
                <td className="p-4">30+ Reps (Mid/Enterprise)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Avoma</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">Basic pipeline health</td>
                <td className="p-4">HubSpot, Salesforce, Pipedrive</td>
                <td className="p-4">Aircall, RingCentral</td>
                <td className="p-4">Talk time &amp; fillers</td>
                <td className="p-4">5-50 Reps (SMB/Mid-Market)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Grain</td>
                <td className="p-4 text-slate-400">N/A</td>
                <td className="p-4">HubSpot, Salesforce</td>
                <td className="p-4">Zoom, Meet, Teams</td>
                <td className="p-4">Clip-based coaching</td>
                <td className="p-4">1-25 Reps (Startups/Agencies)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. GLOSSARY */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Domain Terminology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Essential Sales Intelligence Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Key terminology used by sales leaders, RevOps managers, and conversation intelligence architects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {glossaryTerms.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {item.term}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ ACCORDION & CONVERSION CTA */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Answers to common questions regarding buyer privacy, CRM field mapping, and rep adoption.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                >
                  <span className="font-semibold text-slate-900 dark:text-white text-sm md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-blue-500" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to Turn Every Discovery Call Into Closed Revenue?
            </h2>
            <p className="text-blue-100 text-sm md:text-base">
              Explore our comprehensive directory of AI sales call recorders, compare CRM integration capabilities, and empower your sales team today.
            </p>
            <div className="pt-2">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-blue-700 hover:bg-slate-100 shadow-lg transition-all duration-200"
              >
                <span>Browse All Sales Recorders</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
