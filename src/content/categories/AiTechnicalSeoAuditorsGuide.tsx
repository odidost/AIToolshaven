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
  Cpu, 
  Code2, 
  Layers, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  Globe,
  Sliders
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI technical SEO auditor and how does it work?",
    answer: "An AI technical SEO auditor is an autonomous site health and edge-optimization platform that continuously crawls your domain to detect and automatically deploy code-level SEO fixes. Unlike traditional crawlers that merely export error spreadsheets for developers, modern AI auditors (like Alli AI) deploy changes directly via edge JavaScript or Cloudflare workers—remediating broken canonicals, missing schema markup, internal redirects, and page speed bottlenecks in seconds without engineering backlogs."
  },
  {
    question: "What is the best AI technical SEO auditor in 2026?",
    answer: "Alli AI and Morningscore lead the autonomous technical SEO sector. Alli AI is celebrated for its revolutionary 'Live Editor' and Edge deployment snippet that automatically fixes on-page tags, schema, and internal links across millions of pages in bulk. Morningscore stands out for gamified SEO health tracking, actionable task monetization, and intuitive health diagnostics tailored to small-to-midsize businesses."
  },
  {
    question: "Can AI technical SEO tools break my website or cause rendering errors?",
    answer: "Leading platforms operate with staging previews and safe fallback sandboxes. Edits made via edge snippets modify DOM elements on the client or edge layer before HTML delivery without altering primary database records or core application source code. Any automated optimization can be instantly rolled back with a single click."
  },
  {
    question: "How does AI automate structured data and schema markup?",
    answer: "Advanced technical platforms like WordLift and Alli AI analyze page content using natural language understanding, identify key entities (products, authors, events, FAQs, software specs), and dynamically synthesize valid JSON-LD schema graphs. This ensures Google accurately registers rich snippets, star ratings, and knowledge panel associations without manual coding."
  }
];

const useCases = [
  {
    title: "Large E-Commerce Platforms (10,000+ SKUs)",
    badge: "Scale & Speed",
    desc: "Fix duplicate meta descriptions, missing schema properties, and canonical chain loops across tens of thousands of dynamic product URLs automatically.",
    benefits: [
      "Bulk automated Product, Review, and Offer JSON-LD schema injection",
      "Dynamic rule-based optimization for category and pagination tags",
      "Edge caching and image payload optimization to improve Core Web Vitals"
    ],
    highlight: "Deploy 50,000 technical SEO fixes across an enterprise catalog in 10 minutes"
  },
  {
    title: "Digital Agencies with Engineering Bottlenecks",
    badge: "Zero-Dev Deployment",
    desc: "Implement technical audit recommendations for clients without waiting 6 months for their overworked IT department or third-party web agencies.",
    benefits: [
      "1-line JavaScript snippet installation allows immediate change deployment",
      "Live visual point-and-click editor for instant on-page tag changes",
      "Automated client health scorecards demonstrating audit ROI"
    ],
    highlight: "Reduce client technical implementation backlog from 90 days to 24 hours"
  },
  {
    title: "High-Growth B2B SaaS & Media Publishers",
    badge: "Continuous Health",
    desc: "Maintain pristine site health through daily automated crawling that catches broken redirects, indexability regressions, and orphan URLs immediately after code deployments.",
    benefits: [
      "Automated Slack and webhook alerts for sudden 404 spikes or noindex tags",
      "Core Web Vitals telemetry tracking LCP, INP, and CLS across templates",
      "Automated internal linking mesh optimization to preserve PageRank flow"
    ],
    highlight: "Detect and resolve catastrophic indexing regressions before rankings drop"
  }
];

const glossaryTerms = [
  {
    term: "Edge SEO Injection",
    definition: "The practice of implementing technical SEO changes (headers, meta tags, schema, redirects) at the CDN edge server layer (Cloudflare, Fastly) without altering the origin codebase."
  },
  {
    term: "JSON-LD Knowledge Graph",
    definition: "Linked structured data script embedded in HTML that explicitly defines relationships between entities, people, organizations, and products for Google search engines."
  },
  {
    term: "Interaction to Next Paint (INP)",
    definition: "Google Core Web Vitals metric evaluating page responsiveness by measuring the latency of every user interaction throughout the entire page lifecycle."
  },
  {
    term: "Canonical Loop Remediation",
    definition: "Algorithmic detection and automatic resolution of conflicting canonical tags that prevent search engine crawlers from indexing the primary version of a URL."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiTechnicalSeoAuditorsGuide() {
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
            Autonomous Site Health & Edge SEO 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Technical SEO Auditors: <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Automate Code-Level Fixes at the Edge</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Never let developer backlogs stall your organic growth. Discover the leading AI technical SEO auditors that continuously diagnose website health, build rich schema graphs, and deploy code-level fixes autonomously at the CDN edge.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Technical SEO Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How autonomous edge deployment replaced unfulfilled Jira tickets and stagnant error spreadsheets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
              <Timer className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">The Developer Ticket Graveyard</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Traditional SEO audit tools export CSVs with 12,000 errors. SEOs submit Jira tickets that get backlogged for 9 months behind product features, leaving critical crawl budget leaks unresolved.
            </p>
            <div className="pt-2 text-xs font-semibold text-rose-600 dark:text-rose-400">
              Fix Velocity: 6 to 9 Month Lag
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900/40 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Automated Edge SEO Deployment</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Using 1-line script tags or Cloudflare integration, AI technical engines rewrite meta descriptions, redirect loops, and schema structures on the fly at the edge—bypassing engineering queues completely.
            </p>
            <div className="pt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              Fix Velocity: 1-Click Instant Deployment
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/40 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Continuous Autonomous Health</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Instead of periodic quarterly audits, AI systems crawl staging and production environments 24/7. When a release breaks canonical tags or Core Web Vitals, the engine flags and auto-remediates instantly.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Uptime: 99.9% Health Score Retention
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" /> Technical Efficiency Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Manual Dev Sprints vs. AI Edge Automation
            </h2>
          </div>

          {/* Toggle pill */}
          <div className="inline-flex rounded-xl bg-slate-800 p-1.5 border border-slate-700">
            <button
              onClick={() => setCalculatorMode("traditional")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                calculatorMode === "traditional"
                  ? "bg-slate-700 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Manual Dev Sprints
            </button>
            <button
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                calculatorMode === "ai"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AI Autonomous Edge SEO
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Time to Deploy Technical Fixes</span>
              <Timer className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "3 - 8 Months" : "Under 5 Minutes"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Prioritizing sprints, sprint planning, staging QA, and code releases."
                : "Approve bulk AI recommendations and deploy immediately via edge CDN snippet."}
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Engineering Hours Consumed</span>
              <DollarSign className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "60 - 120 Hrs / mo" : "0 Hours"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Dev billable rates, pull request reviews, and regression testing."
                : "Engineers focus on core product while marketing manages technical SEO independently."}
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>JSON-LD Schema Coverage</span>
              <LineChart className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "20% - 35%" : "99.8%+"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Manual template hardcoding that frequently breaks when designs change."
                : "Dynamic entity recognition builds interconnected rich snippet graphs sitewide."}
            </p>
          </div>
        </div>
      </section>

      {/* 4. SPONSOR / EDITOR'S CHOICE SPOTLIGHT */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-2 border-indigo-500/40 p-8 sm:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-400" />
              Editor&apos;s Choice: Best Autonomous Edge SEO Platform (2026)
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Alli AI
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Alli AI is the industry pioneer in automated technical SEO deployment. With a single line of JavaScript, Alli AI crawls your site, generates code-level optimizations, and lets you approve and deploy technical fixes across thousands of pages in bulk—without writing code or asking developers for help.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Instant Edge deployment via 1-line script tag</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Live On-Page Visual Editor to edit text and tags live</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Automated bulk internal link distribution</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Automated schema markup and rich snippet injection</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <Link
              href="/tools/alli-ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold shadow-lg hover:shadow-indigo-500/25 transition-all text-center"
            >
              Explore Alli AI Profile
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-xs text-center text-slate-400">
              Trusted by 10,000+ agencies and enterprise websites
            </span>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX + BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top Alternative Technical SEO Auditors
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Specialized solutions for gamified health tracking, knowledge graph modeling, and continuous crawl monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Morningscore */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                  Gamified Health
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.8 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">Morningscore</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Gamifies SEO health and technical audits by assigning monetary values to fixes and health improvements, turning complex site audits into clear missions for teams.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">SMBs & Visual Teams</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">From $65 / month</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/morningscore-seo-platform"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View Morningscore Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: WordLift */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold">
                  Knowledge Graph AI
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.7 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">WordLift</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Uses AI to build bespoke knowledge graphs and structured data schema for your domain, turning unstructured articles into machine-readable entities for Google and AI search engines.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Entity & Schema Architecture</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">From $59 / month</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/wordlift"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View WordLift Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: Scalenut */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  All-In-One SEO Suite
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.6 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">Scalenut</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Combines keyword research, AI content creation, and technical SEO page audits into a unified ecosystem with actionable health checklists.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Content & Technical Synergy</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">From $39 / month</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/scalenut"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View Scalenut Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="rounded-2xl p-6 bg-gradient-to-r from-indigo-900/10 to-transparent border border-indigo-200 dark:border-indigo-900/30 space-y-3">
            <h4 className="text-base font-bold flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-500" />
              Edge JavaScript Snippets vs. CMS Plugins
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              CMS plugins (like WordPress extensions) can bloat database queries and cause server latency. Edge SEO tools like Alli AI execute modifications on CDN servers closest to the user, improving Core Web Vitals while preserving origin server speed.
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-r from-purple-900/10 to-transparent border border-purple-200 dark:border-purple-900/30 space-y-3">
            <h4 className="text-base font-bold flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-500" />
              Static Health Audits vs. Continuous Event Monitoring
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              One-off audits only snapshot historical errors. Continuous AI monitors watch staging branch commits and production sitemaps in real time, alerting teams to rogue noindex directives or broken canonical tags before Google drops organic traffic.
            </p>
          </div>
        </div>
      </section>

      {/* 6. BUYER'S GUIDE & EVALUATION CRITERIA */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            How to Evaluate an AI Technical SEO Auditor
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Four key capabilities to inspect before selecting an autonomous site health platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              01
            </div>
            <div className="space-y-4 relative z-10 max-w-xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                <Sliders className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Autonomous vs. Advisory Execution</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Determine whether you need an advisory tool that flags issues (like Screaming Frog or Ahrefs) or an autonomous platform (like Alli AI) that can deploy fixes directly via edge scripts with 1-click approvals.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              02
            </div>
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Core Web Vitals Telemetry</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The auditor should track Google&apos;s real-user Core Web Vitals (LCP, INP, CLS) and provide automated recommendations for image compression, script deferral, and layout shift stabilization.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              03
            </div>
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Schema & Entity Graph Construction</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Ensure the platform generates valid, interconnected JSON-LD schema (Article, Organization, Product, FAQ) that ties directly into Google&apos;s Knowledge Graph.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              04
            </div>
            <div className="space-y-4 relative z-10 max-w-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Rollback Safety & Audit Trails</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Any automated edge platform must include complete audit logs and 1-click rollback capabilities to ensure site stability and eliminate risk during high-traffic campaign windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            Deployment Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            4 Steps to Deploy Autonomous Technical SEO
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h4 className="text-base font-bold text-white">Install Edge Snippet</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Add a single line of JavaScript into your site header or connect via Cloudflare App/Worker integration in under 2 minutes.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h4 className="text-base font-bold text-white">Run Deep Health Crawl</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              The AI crawls your entire URL footprint, auditing redirect chains, canonical anomalies, Core Web Vitals, and missing schema.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h4 className="text-base font-bold text-white">Review & Bulk Approve</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Review AI recommendations grouped by impact. Bulk-approve high-priority fixes for instant live deployment at the CDN edge.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              4
            </div>
            <h4 className="text-base font-bold text-white">Enable Continuous Guard</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Turn on automated anomaly alerts to intercept technical SEO regressions before they damage organic rankings or traffic.
            </p>
          </div>
        </div>
      </section>

      {/* 8. WHO BENEFITS MOST? (INTERACTIVE TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from AI Technical SEO Auditors?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            See how different digital teams eliminate developer bottlenecks and safeguard domain equity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            {useCases.map((uc, index) => (
              <button
                key={index}
                onClick={() => setActiveUseCase(index)}
                className={`w-full text-left p-4 rounded-xl border text-sm font-bold transition-all flex items-center justify-between ${
                  activeUseCase === index
                    ? "bg-indigo-500 text-white border-indigo-600 shadow-md translate-x-2"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
              >
                <span>{uc.title}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeUseCase === index ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                }`}>
                  {uc.badge}
                </span>
              </button>
            ))}
          </div>

          <div className="md:col-span-2 rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">
                {useCases[activeUseCase].badge}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {useCases[activeUseCase].title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {useCases[activeUseCase].desc}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Technical Capabilities:
              </h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 text-xs sm:text-sm font-semibold text-indigo-900 dark:text-indigo-200">
              💡 {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 9. TECHNICAL GLOSSARY */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-indigo-500 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" /> Technical Foundation
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Technical SEO Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Essential terminology in autonomous edge SEO, schema modeling, and web health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {glossaryTerms.map((term, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                {term.term}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {term.definition}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Everything you need to know about AI technical SEO auditors, Edge deployment, and schema.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 dark:text-white"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition-transform ${
                      isOpen ? "rotate-180 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800">
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
