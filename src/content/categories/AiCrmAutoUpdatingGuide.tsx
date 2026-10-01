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
  RefreshCw, 
  Database, 
  CheckSquare, 
  Award, 
  Target, 
  TrendingUp, 
  ShieldCheck,
  Compass,
  Layers
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is AI CRM auto-updating and how does it save sales reps time?",
    answer: "AI CRM auto-updating software monitors sales reps' email threads, calendar invites, and call transcripts to automatically log contacts, update deal stages, log meeting notes, and sync MEDDPICC fields in Salesforce or HubSpot without manual data entry. Instead of forcing reps to spend hours manually typing notes into clunky CRM forms, AI extracts the relevant pipeline data in real time and asks for 1-click confirmation."
  },
  {
    question: "What are the best AI CRM auto-updating tools in 2026?",
    answer: "Scratchpad is beloved by account executives for fast spreadsheet-style CRM updates and automated note syncing. Attention.tech uses native voice intelligence to extract MEDDIC fields and update CRMs post-call automatically. Dooly provides real-time sales enablement templates linked directly to Salesforce. Salesforce Einstein 1 and HubSpot Breeze Intelligence offer native autonomous CRM hygiene agents that eliminate manual contact creation and stage logging."
  },
  {
    question: "How does AI detect deal slippage and ghosting before quarterly forecasting calls?",
    answer: "CRM auto-updating engines track activity velocity across all opportunities. If an enterprise prospect stops responding to emails, cancels a calendar event without rescheduling, or if the primary economic buyer has not attended a meeting in 14 days, the AI automatically degrades the deal health score and flags the opportunity for sales leadership review."
  },
  {
    question: "Does automated CRM updating overwrite existing custom fields or proprietary notes?",
    answer: "No. Enterprise auto-updating tools respect custom field validation rules, role-based access permissions, and governance safeguards. They typically draft updates into a staging queue or append timestamped notes rather than overwriting historical log entries, giving reps or RevOps admins review control."
  }
];

const useCases = [
  {
    title: "Zero-Click Post-Call CRM Synchronization",
    badge: "Rep Productivity",
    desc: "Immediately after a Zoom demo, AI analyzes the conversation and populates Next Steps, Close Date, Stage, and Competitors into Salesforce.",
    benefits: [
      "Eliminates 5 to 8 hours of Friday CRM administration per account executive",
      "Ensures 100% data completeness for sales operations and finance modeling",
      "Syncs customized MEDDPICC and BANT fields automatically"
    ],
    highlight: "Increased CRM field compliance from 41% to 96% across a 60-person sales org"
  },
  {
    title: "Automated Contact Multi-Threading & Role Creation",
    badge: "Pipeline Governance",
    desc: "When new stakeholders join email chains or calendar invites, AI automatically provisions CRM contact records, deduces job titles, and links them to the opportunity.",
    benefits: [
      "Prevents single-threaded deal failure by tracking all involved decision-makers",
      "Auto-enriches stakeholder LinkedIn profiles and direct dial numbers",
      "Maintains clean, deduplicated contact databases without RevOps intervention"
    ],
    highlight: "Discovered an average of 3.2 additional decision-makers per enterprise opportunity"
  },
  {
    title: "Predictive Forecast Hygiene & Stale Deal Purging",
    badge: "RevOps Forecasting",
    desc: "AI identifies deals with past-due close dates, zero prospect engagement for 21 days, or unconfirmed champions, prompting reps to push or close-lost the deal.",
    benefits: [
      "Cleans bloated pipeline bloat that distorts quarterly executive forecasts",
      "Automated Slack alerts prompting reps with 1-click date extensions",
      "Increases forecast accuracy within +/- 3% of actual quarter-end revenue"
    ],
    highlight: "Improved quarterly revenue forecast accuracy from 71% to 94%"
  }
];

const glossaryTerms = [
  {
    term: "Multi-Threading",
    definition: "The sales practice of building relationships with multiple stakeholders across different departments in a target account, reducing deal risk if one contact departs."
  },
  {
    term: "Zero-Click Sync",
    definition: "Automated background synchronization that extracts sales conversation milestones and populates CRM database fields without requiring user clicks."
  },
  {
    term: "Pipeline Velocity",
    definition: "A metric measuring the speed at which qualified opportunities move through sales stages toward closed-won revenue, calculated as (Deals &times; Win Rate &times; Deal Size) &divide; Cycle Length."
  },
  {
    term: "Ghosting Risk Alert",
    definition: "An automated warning triggered when a prospect fails to respond to multiple follow-ups, attend scheduled meetings, or open proposal documents within expected SLAs."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiCrmAutoUpdatingGuide() {
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
            CRM Automation & Pipeline Hygiene 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI CRM Auto-Updating Tools: <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">Eliminate Sales Admin & Keep Pipeline 100% Accurate</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Give sales reps their selling hours back. Discover how AI CRM automation platforms capture emails, sync meeting notes, populate MEDDPICC fields, and alert reps to slipping deals without manual data entry.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The CRM Hygiene Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How autonomous pipeline synchronization ended the CRM data entry nightmare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Friday CRM Scramble</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Sales reps spend their Friday afternoons frantically updating stale Salesforce records from memory, guessing deal stages and pasting incomplete bullet notes.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Blind Pipeline Forecasting</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              RevOps and CROs rely on inaccurate data, missing economic buyers, and overdue close dates, leading to disastrous quarterly revenue forecast misses.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Autonomous Zero-Click Hygiene</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              AI monitors every meeting, email, and proposal interaction, parsing MEDDIC criteria and auto-updating CRM fields with 1-click rep validation.
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
              Sales Time Recovery & Pipeline Value Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Calculate Rep Time Savings (Team of 10 Reps)</h2>
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
              Manual CRM Form Filling
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI CRM Auto-Updating (Scratchpad/Attention)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Hours Spent on CRM Admin / Week
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "5.5 Hours / Rep" : "0.5 Hours / Rep"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Manually opening multiple tabs, updating opportunity stages and contacts" 
                : "Automated background sync with rapid inline 1-click approvals"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Annual Selling Time Value Recovered
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$0" : "$130,000"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "High-paid AE capacity squandered on clerical data entry" 
                : "2,600 hours redirected directly toward revenue-generating customer calls"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Pipeline Data Accuracy Rate
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "42.0%" : "96.4%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Overdue close dates and missing MEDDPICC stakeholder entries" 
                : "Continuous real-time audit logging from email, calendar, and Zoom"}
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
            How Autonomous CRM Auto-Updating Works
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl">
            A seamless bridge capturing communications and synchronizing database records without user friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Multi-Source Listening</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Monitors connected Gmail, Outlook, Zoom, Google Meet, and proposal view notifications for active opportunity threads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Entity & MEDDIC Extraction</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              LLMs identify stakeholders, next step dates, budget amounts, decision criteria, and competitor mentions from dialogue.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Staging & Validation</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Validates proposed field updates against CRM business rules, picklist constraints, and custom validation scripts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Slack/Chrome 1-Click Sync</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Presents reps with a clean confirmation card in Slack or Chrome extension: 1 click writes all fields directly to Salesforce or HubSpot.
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
            Top 3 AI CRM Auto-Updating Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed head-to-head comparison of modern pipeline hygiene software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Scratchpad */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 relative shadow-lg space-y-5">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              AE Favorite
            </div>
            <div>
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Fast Pipeline Workspace</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Scratchpad</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Lightning-fast spreadsheet view of Salesforce, combining note-taking, pipeline kanban, task management, and automated field syncing in one UI.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Instant grid-based pipeline editing with zero page loads</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>AI note-to-field parsing and automated tile alerts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Seamless Chrome extension & keyboard shortcuts</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> High-velocity B2B sales teams wanting frictionless rep adoption.
            </div>
          </div>

          {/* Attention.tech */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Voice-to-CRM Intelligence</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Attention.tech</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Purpose-built conversational AI that transcribes sales calls, maps dialogue to custom CRM fields, and writes complete MEDDPICC updates autonomously.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Full automated CRM field population from live calls</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Pre-built MEDDIC, BANT, and SPICED framework templates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Automated tailored follow-up emails drafted instantly</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Sales leaders prioritizing strict qualification framework adherence.
            </div>
          </div>

          {/* Salesforce Einstein 1 */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Native Enterprise Suite</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Salesforce Einstein 1</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Native autonomous agents within Salesforce that capture email and calendar activity, suggest next best actions, and update opportunity scores.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero third-party integrations needed (native security)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Deep predictive opportunity scoring algorithms</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Autonomous Einstein Sales Agents handling routine outreach</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Large regulated enterprises strictly confined to native Salesforce architectures.
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
            High-Impact CRM Automation Workflows
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How revenue teams turn administrative drag into predictable pipeline execution.
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
            4 Steps to Rolling Out AI CRM Auto-Updating
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From connected email inboxes to automated executive forecast governance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 1</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Permission & OAuth Setup</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Connect Google Workspace or Office 365 alongside your CRM admin account. Configure exclusion domains to ignore internal team emails.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 2</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Map Custom Fields</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Align MEDDPICC criteria, key pain tags, next step dates, and competitor dropdowns with your Salesforce or HubSpot schema.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 3</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Deploy Rep Chrome Extension</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Install the extension or Slack bot. Reps receive post-call summary cards with pre-filled CRM fields ready for 1-click submission.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 4</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Establish Hygiene SLAs</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Configure automatic Slack alerts when opportunities have past-due close dates or zero multi-threading engagement over 14 days.
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
            AI Auto-Updating vs Manual CRM Entry
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why modern sales organizations can no longer afford manual clerical processes.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-indigo-600 dark:text-indigo-400">AI CRM Auto-Updating (Scratchpad/Attention)</th>
                <th className="p-4 sm:p-5">Manual Salesforce / HubSpot Entry</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Time Spent on Data Entry</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Under 2 minutes per day (1-click approvals)</td>
                <td className="p-4 sm:p-5 text-slate-500">4 to 6 hours weekly per quota-carrying rep</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">MEDDPICC Field Completeness</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">95%+ (extracted directly from Zoom/Teams transcripts)</td>
                <td className="p-4 sm:p-5 text-slate-500">Under 40% (reps skip mandatory fields)</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Pipeline Slip Detection</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Proactive notifications the moment communication stalls</td>
                <td className="p-4 sm:p-5 text-slate-500">Discovered on the last week of the quarter</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Rep Job Satisfaction</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">High (focuses on closing deals and building relationships)</td>
                <td className="p-4 sm:p-5 text-slate-500">Frustrated by repetitive administrative busywork</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. GLOSSARY TERMS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Key CRM Automation Terms</h2>
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
            Everything you need to know about implementing zero-click CRM auto-updating.
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
            End the CRM Admin Nightmare
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Equip your sales team with automated CRM updating and achieve flawless pipeline forecasting today.
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
