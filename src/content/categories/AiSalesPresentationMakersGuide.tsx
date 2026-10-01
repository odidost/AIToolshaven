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
  Video
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI sales presentation maker and how does it differ from a pitch deck tool?",
    answer: "While pitch deck tools focus on fundraising venture narratives, an AI sales presentation maker creates customer-facing B2B sales decks, product demo collateral, and commercial proposals. These platforms automatically pull prospect logos, case studies relevant to the prospect's vertical, interactive ROI calculators, and embedded demo videos to turn static sales slides into high-converting interactive experiences."
  },
  {
    question: "What are the best AI sales presentation platforms in 2026?",
    answer: "Storydoc is the leader in interactive, web-based sales decks with embedded ROI calculators, calendars, and reader analytics. Beautiful.ai empowers sales teams with locked corporate brand kits and smart layouts that ensure reps never send off-brand slides. Decktopus offers frictionless sales lead-generation presentations with built-in form capture. Gamma enables account executives to generate tailored client decks in seconds."
  },
  {
    question: "Can these tools automatically personalize slides with prospect company names and logos?",
    answer: "Yes. By integrating with CRMs like HubSpot or Salesforce, modern sales presentation tools can dynamically populate the prospect's company name, logo, industry pain points, and account executive contact info across the entire deck with zero manual editing."
  },
  {
    question: "How do sales presentations with built-in telemetry increase win rates?",
    answer: "Telemetry tells the sales rep exactly when the buyer opens the deck, which slides they lingered on (e.g. pricing vs case study), and whether the presentation was forwarded to additional executive decision-makers, allowing reps to time their follow-up calls when buyer interest is at its absolute peak."
  }
];

const useCases = [
  {
    title: "1-Click Hyper-Personalized Prospect Decks",
    badge: "Account-Based Sales",
    desc: "Generate custom sales presentations for enterprise target accounts containing their logo, industry stats, and relevant customer case studies.",
    benefits: [
      "Eliminates 90 minutes of manual slide tweaking per sales demo",
      "Pulls verified client logos and brand colors from public domain data",
      "Matches customer industry with exact peer case study proof points"
    ],
    highlight: "Boosted discovery-to-proposal conversion rate by 31% across 25 AEs"
  },
  {
    title: "Interactive Web-Based Sales Decks with ROI Sliders",
    badge: "Buyer Engagement",
    desc: "Send buyers an interactive web deck where they can toggle headcount, calculate anticipated cost savings, and book next steps directly.",
    benefits: [
      "Replaces static PDF attachments that get lost in crowded email inboxes",
      "Embedded meeting scheduler allowing buyers to book directly on the last slide",
      "Interactive sliders prove business value tailored to buyer inputs"
    ],
    highlight: "Doubled buyer average engagement time from 1.4 minutes to 4.2 minutes"
  },
  {
    title: "Enforced Brand Governance Across Global Sales Orgs",
    badge: "Brand Marketing",
    desc: "Lock master slide templates, fonts, and compliant pricing disclosures so 200+ sales reps can only edit designated text fields.",
    benefits: [
      "Stops rogue reps from using outdated logos or unapproved discount rates",
      "Centralized master asset library updated instantly across all active decks",
      "Ensures regulatory compliance and legal disclaimer consistency"
    ],
    highlight: "Maintained 100% brand guideline adherence across 15 global regional offices"
  }
];

const glossaryTerms = [
  {
    term: "Interactive Sales Deck",
    definition: "A web-native presentation that includes clickable navigation, embedded video messages, dynamic calculators, and integrated calendar booking links."
  },
  {
    term: "Brand Lock Governance",
    definition: "Administrative controls that restrict which slide elements (fonts, colors, logos, disclaimers) sales reps can edit while granting flexibility over prospect details."
  },
  {
    term: "Slide Engagement Heatmap",
    definition: "A visual reporting dashboard showing the precise duration and scroll depth prospects spend on every individual slide in a sales presentation."
  },
  {
    term: "Dynamic Variable Insertion",
    definition: "The automated replacement of placeholder tags (e.g. {{Company_Name}}, {{Logo}}) with CRM deal data when generating personalized client collateral."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiSalesPresentationMakersGuide() {
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
            B2B Commercial Decks & Buyer Engagement 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Sales Presentation Makers: <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">Close More Deals with Interactive Commercial Decks</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Static PowerPoint decks bore prospects and stall deals. Discover how AI sales presentation makers create personalized, interactive web decks with embedded ROI calculators, customer video proof, and real-time viewing telemetry.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Sales Presentation Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How dynamic web presentations eclipsed boring desktop slide attachments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Generic Boilerplate PDFs</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Sales reps recycle generic 30-slide PDF decks with irrelevant customer logos, losing prospect attention within the first 3 slides.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Rogue Off-Brand Decks</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Reps alter company slides on their local laptops, distorting corporate branding, using outdated pricing tables, and deleting legal disclosures.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Interactive Living Decks</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Storydoc and Beautiful.ai deliver interactive web presentations personalized to each buyer, capturing analytics and accelerating sign-off.
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
              Sales Acceleration & Deal Velocity Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Calculate Sales Team Performance (Team of 8 Reps)</h2>
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
              Static PowerPoint Decks
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Interactive Sales Decks (Storydoc/Beautiful.ai)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Customization Time Per Prospect
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "65 Minutes" : "5 Minutes"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Manually swapping logos, updating pricing, and reformatting text" 
                : "AI dynamic variable insertion linking CRM account data automatically"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Annual Rep Capacity Recovered
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "0 Hours" : "800 Hours"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Productive selling time squandered on repetitive slide design" 
                : "Equivalent to 100 extra commercial sales calls per representative"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Deal Close Rate from Demo
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "19.5%" : "32.0%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Static slides fail to re-engage absent economic decision-makers" 
                : "Interactive ROI sliders and telemetry alerts prompt timely executive closes"}
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
            How AI Sales Presentation Platforms Work
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl">
            A continuous loop from CRM prospect ingestion to real-time buyer engagement tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">CRM Data Binding</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Connects to Salesforce or HubSpot, auto-extracting company domain, pain tags, and AE details to populate presentation fields.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Dynamic Asset Assembly</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The AI selects matching vertical case studies, relevant security badges, and video testimonial clips tailored to the prospect&apos;s tier.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Interactive Web Delivery</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Renders a responsive web presentation with interactive financial calculators, video pop-outs, and direct meeting booking widgets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Buyer Telemetry Trigger</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Dispatches instant notifications to Slack when the buyer opens the deck, tracking time on pricing and internal forward chains.
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
            Top 3 AI Sales Presentation Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed head-to-head comparison of modern commercial presentation software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Storydoc */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 relative shadow-lg space-y-5">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              Interactive Leader
            </div>
            <div>
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Web-Based Sales Decks</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Storydoc</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The premier interactive presentation builder for B2B sales teams. Turns standard decks into scannable, mobile-responsive web experiences with embedded widgets.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Embedded interactive ROI calculators & calendar widgets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Full CRM dynamic personalization automation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Second-by-second buyer telemetry & Slack alerts</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> High-ticket B2B sales teams closing complex mid-market & enterprise deals.
            </div>
          </div>

          {/* Beautiful.ai */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Brand Governance</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Beautiful.ai Teams</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Guarantees strict brand guideline compliance across large sales forces with smart design rules, locked templates, and centralized asset libraries.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Locked corporate themes and compliant pricing templates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Smart slide formatting that prevents text overlap</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Export directly to PowerPoint (.pptx) format</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Enterprise marketing teams managing slide consistency across 50+ sales reps.
            </div>
          </div>

          {/* Decktopus */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Fast Lead Capture</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Decktopus AI</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Fast, guided presentation generation with embedded lead capture forms and automated voice narration, ideal for asynchronous sales pitches.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Embedded lead capture forms directly in slides</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Instant AI voiceover narration generation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Ultra-fast 2-minute deck assembly for sales outreach</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Async sales pitches, agency proposals, and outbound sales collateral.
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
            High-Impact Sales Deck Deployments
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How high-performing commercial revenue teams leverage presentation intelligence.
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
            Enablement Playbook
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4 Steps to Modernizing Your Sales Presentations
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From fragmented rep slide files to centralized, interactive sales experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 1</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Audit Core Assets</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Consolidate your top 5 customer case studies, standard pricing tiers, ROI models, and security compliance certificates into a master library.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 2</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Lock Brand Governance</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Establish strict brand boundaries: lock fonts, logos, and disclaimer text while keeping client pain and pricing customization flexible.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 3</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Connect CRM Variables</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Link Salesforce or HubSpot to auto-populate company name, prospect logo, and deal size directly into presentation placeholders.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 4</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Set Telemetry SLAs</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Automate Slack alerts when buyers spend more than 90 seconds on pricing slides, prompting reps to make timely closing calls.
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
            Interactive AI Sales Decks vs Static PDF Attachments
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why modern buying committees respond dramatically better to interactive web presentations.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-indigo-600 dark:text-indigo-400">Interactive AI Sales Deck (Storydoc/Beautiful.ai)</th>
                <th className="p-4 sm:p-5">Static PDF / PPTX Email Attachment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Viewer Engagement Telemetry</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Page-by-page duration, clicks, and forward tracking</td>
                <td className="p-4 sm:p-5 text-slate-500">Zero data once attached and sent</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">ROI Demonstration</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Interactive calculators where buyers input their own metrics</td>
                <td className="p-4 sm:p-5 text-slate-500">Static bullet claims that lack credibility</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Next Step Conversion</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Embedded calendar booking directly on the final slide</td>
                <td className="p-4 sm:p-5 text-slate-500">Requires separate email replies and scheduling links</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Brand Governance</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Centrally locked master templates and compliant disclaimers</td>
                <td className="p-4 sm:p-5 text-slate-500">Rogue reps edit and distort slides locally</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. GLOSSARY TERMS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Key Commercial Presentation Terms</h2>
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
            Everything you need to know about adopting AI-driven sales presentations.
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
            Stop Sending Boring Sales Decks
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Empower your sales reps with interactive AI presentations and turn demo meetings into closed revenue.
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
