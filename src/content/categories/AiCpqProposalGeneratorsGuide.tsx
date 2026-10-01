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
  FileText, 
  Percent, 
  ShieldCheck, 
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
    question: "What is an AI CPQ and proposal generator and how does it accelerate deals?",
    answer: "An AI CPQ (Configure, Price, Quote) and proposal generator automates the creation of complex sales quotes, contracts, and pitch collateral. Using AI, it evaluates customer requirements, recommends optimal product SKU combinations, enforces discount governance boundaries, drafts customized scope-of-work clauses from CRM notes, and packages everything into an interactive, trackable web proposal with built-in e-signature capabilities."
  },
  {
    question: "What are the best AI CPQ and proposal generation platforms in 2026?",
    answer: "DealHub.io leads modern B2B SaaS with its unified DealRoom, combining CPQ, contract lifecycle management (CLM), and digital sales rooms. PandaDoc AI simplifies document creation with smart drafting, pricing tables, and automated contract variable insertion. Qwilr transforms static PDFs into interactive web pages with embedded ROI calculators and Stripe payment checkouts. Conga AI delivers enterprise-grade contract compliance for complex multi-entity enterprises."
  },
  {
    question: "How does AI prevent rogue discounting and enforce legal compliance?",
    answer: "AI CPQ tools implement automated approval workflows and guardrails. If a sales rep configures an unapproved discount exceeding gross margin thresholds, removes mandatory indemnity clauses, or bundles conflicting software modules, the platform automatically routes the proposal to Finance or Legal before the client link can be sent."
  },
  {
    question: "How do interactive web proposals outperform traditional static PDF quotes?",
    answer: "Web-based proposals allow buyers to toggle add-on modules, select user tier quantities, and watch pricing calculate dynamically without waiting for updated PDFs. Furthermore, reps receive second-by-second analytics showing which pages the decision-maker viewed, how long they studied the pricing table, and who they forwarded the link to internally."
  }
];

const useCases = [
  {
    title: "10-Minute Complex Enterprise Quote Generation",
    badge: "Deal Velocity",
    desc: "Generate error-free 40-page enterprise quotes with multi-tier pricing, international tax compliance, and customized SOW deliverables in minutes.",
    benefits: [
      "Replaces tedious multi-day spreadsheet and Word document assembly",
      "Auto-syncs product catalog SKUs and volume discount tiers from the CRM",
      "Eliminates billing errors that cause downstream invoicing disputes"
    ],
    highlight: "Reduced quote turnaround time from 72 hours down to 12 minutes"
  },
  {
    title: "Buyer Self-Service Tier Customization",
    badge: "Interactive Closing",
    desc: "Present clients with interactive digital proposal rooms where they can adjust seat counts, select optional onboarding modules, and sign electronically.",
    benefits: [
      "Accelerates signature cycle by removing back-and-forth revision emails",
      "Embeds interactive ROI calculators proving financial justification",
      "Integrated 1-click Stripe and ACH checkout for instant deposit collection"
    ],
    highlight: "Shortened average time-to-sign by 43% across 120 mid-market deals"
  },
  {
    title: "Real-Time Buyer Engagement Tracking & Alerting",
    badge: "Sales Timing",
    desc: "Receive instant notifications when key stakeholders open the proposal, see which sections they re-read, and follow up at the moment of peak interest.",
    benefits: [
      "Page-by-page heatmap analytics identifying pricing hesitations",
      "Alerts when proposals are forwarded to new C-level email addresses",
      "Empowers reps to call prospects precisely while they review the contract"
    ],
    highlight: "Achieved a 64% close rate on deals followed up within 15 minutes of proposal view"
  }
];

const glossaryTerms = [
  {
    term: "Configure, Price, Quote (CPQ)",
    definition: "Software that automates the complex calculation of customized product packages, volume tier discounts, and contract deliverables for sales teams."
  },
  {
    term: "Digital Sales Room (DSR)",
    definition: "A secure, personalized web portal where buyers and sellers collaborate on proposals, technical documentation, security reviews, and contracts in one place."
  },
  {
    term: "Discount Governance Matrix",
    definition: "Pre-configured approval rules that permit reps up to a certain discount threshold (e.g. 10%), automatically requiring VP or CFO approval for higher discounts."
  },
  {
    term: "Dynamic Contract Redlining",
    definition: "AI-assisted comparison of legal terms that highlights non-standard modifications and suggests pre-approved fallback clauses automatically."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiCpqProposalGeneratorsGuide() {
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
            AI CPQ & Digital Sales Proposals 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI CPQ & Proposal Generators: <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">Close Deals Faster with Interactive Quotes</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Static PDF proposals and clunky quote spreadsheets slow deals down. Discover how AI CPQ software and interactive digital sales rooms automate complex pricing, enforce legal governance, and shorten contract sign-off times.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Sales Proposal Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How interactive digital proposal rooms replaced static PDF contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Static PDF Black Hole</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Sales reps email static 20-page PDF proposals, having zero visibility into whether the client ever opened the file, what page they read, or why they went silent.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Spreadsheet Pricing Errors</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Manual quote calculations lead to broken Excel formula discounts, incompatible SKU bundles, and tedious multi-day approval lag across finance and legal.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Dynamic AI DealRooms</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              AI configures optimized quotes in seconds, presents buyers with interactive price toggles, tracks engagement heatmaps, and captures digital signatures instantly.
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
              Quote Velocity & Closing Impact Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Proposal Performance (40 Proposals/Mo)</h2>
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
              Manual Word/PDF Proposals
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI CPQ & Digital Rooms (DealHub/PandaDoc)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Proposal Generation Turnaround
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "4.5 Hours / Deal" : "15 Minutes / Deal"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Manually modifying old Word templates, formatting tables, and verifying prices" 
                : "Automated CPQ rules populate approved pricing and legal boilerplate in clicks"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Margin Protected from Unauthorized Discounts
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$0" : "$48,000 / Yr"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Reps offering unapproved discounts and custom concessions without oversight" 
                : "Automated governance blocks quotes exceeding pre-approved discount boundaries"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Average Days to Contract Signature
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "19 Days" : "6 Days"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Email chains revising static PDFs whenever buyer wants minor tier adjustments" 
                : "Interactive buyer toggles and immediate in-browser digital e-signature"}
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
            How Modern AI CPQ Engines Work
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl">
            A closed-loop engine moving from CRM opportunity details to legally binding digital signatures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Guided Selling Rules</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Reps answer 3 quick questions about the customer; the AI selects the optimal SKU packages, tier quantities, and complementary service modules.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Automated Governance</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Validates proposed pricing against margin rules. If special terms are requested, it routes notifications to finance and legal for instant Slack approval.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Digital Sales Room</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Assembles an interactive web proposal combining executive overview video, dynamic pricing tables, compliance docs, and client references.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Real-Time Telemetry</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Tracks buyer cursor movement, time spent on pricing sections, and forwarding events, alerting the account executive the instant the client reads.
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
            Top 3 AI CPQ & Proposal Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed head-to-head comparison of modern quote-to-close solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* DealHub */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 relative shadow-lg space-y-5">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              SaaS CPQ Leader
            </div>
            <div>
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Unified DealRoom Platform</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">DealHub.io</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The premier CPQ and DealRoom solution for high-growth tech companies. Combines guided selling, discount governance, CLM, and digital buyer rooms.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero-code guided selling questionnaire for reps</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Interactive buyer DealRoom with embedded e-signature</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Native 2-way Salesforce and HubSpot CPQ synchronization</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> B2B SaaS companies scaling beyond basic manual quoting.
            </div>
          </div>

          {/* PandaDoc AI */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Document Automation</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">PandaDoc AI</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Widely adopted proposal and contract platform offering AI drafting, smart interactive pricing tables, and automated CRM deal merges.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>AI text drafting for custom SOW scopes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Interactive optional pricing table checkboxes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Extensive template library for multiple industries</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Agencies, mid-market businesses, and service providers.
            </div>
          </div>

          {/* Qwilr */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Web-Native Visuals</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Qwilr</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Replaces static documents with stunning, responsive web pages containing dynamic ROI calculators, embedded demo videos, and direct Stripe payments.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Mobile-responsive, beautiful interactive web page format</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Interactive pricing sliders that buyers can adjust</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Direct Stripe integration for upfront deposit collection</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Modern tech startups wanting visually striking, interactive proposals.
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
            High-Impact Proposal Automation Deployments
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
            4 Steps to Deploying an AI CPQ Engine
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From product catalog standardization to rapid contract closing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 1</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Product Catalog & SKUs</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Import software tiers, professional services line items, and add-on modules from Salesforce or HubSpot. Set standard pricing baselines.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 2</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Discount & Approval Gates</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Establish automated rules: Reps can discount up to 10% autonomously; 11-20% requires Sales Director sign-off; &gt;20% routes to the CFO.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 3</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Interactive DealRoom Design</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Design a branded web proposal template containing your company story, embedded customer videos, security badges, and dynamic tier toggles.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 4</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Enable Real-Time Alerts</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Connect Slack notifications to trigger whenever a target buyer views the proposal, studies pricing, or shares the link with stakeholders.
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
            Interactive Digital DealRooms vs Static PDF Quotes
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why modern buying committees vastly prefer digital interactive proposal rooms.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-indigo-600 dark:text-indigo-400">Interactive Digital DealRoom (DealHub/Qwilr)</th>
                <th className="p-4 sm:p-5">Traditional Static PDF Proposal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Buyer Engagement Telemetry</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Page-by-page heatmap analytics and time spent per section</td>
                <td className="p-4 sm:p-5 text-slate-500">Zero visibility once email attachment is sent</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Pricing Flexibility</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Buyer toggles optional add-ons; price recalculates instantly</td>
                <td className="p-4 sm:p-5 text-slate-500">Requires 3-day turnaround to re-export a new PDF</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Discount & Legal Governance</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Automated approval workflows blocking non-standard terms</td>
                <td className="p-4 sm:p-5 text-slate-500">Prone to human error, typos, and rogue discounts</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Time to Contract Signature</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Average 4 to 6 business days (built-in e-sign)</td>
                <td className="p-4 sm:p-5 text-slate-500">Average 18 to 24 business days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. GLOSSARY TERMS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Key CPQ & Proposal Concepts</h2>
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
            Answers to common questions about adopting AI CPQ and digital proposal software.
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
            Accelerate Your Quote-to-Close Cycle
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Empower your sales reps with AI CPQ and turn static PDFs into interactive revenue-generating DealRooms.
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
