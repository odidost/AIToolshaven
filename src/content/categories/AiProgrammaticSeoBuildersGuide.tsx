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
  Database, 
  FileSpreadsheet, 
  Layers, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  Workflow,
  Copy
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is programmatic SEO and how do AI builders automate it?",
    answer: "Programmatic SEO (pSEO) is the practice of systematically publishing hundreds or thousands of high-quality landing pages targeting long-tail keyword variations using a structured database and modular templates. Modern AI programmatic builders (like Byword.ai and SEOmatic) combine spreadsheet data (e.g., location names, software integrations, product specs) with generative prompt chains, dynamically creating unique research-backed articles, FAQs, metadata, and custom graphics at immense scale."
  },
  {
    question: "What is the best AI programmatic SEO builder in 2026?",
    answer: "Byword.ai and SEOmatic lead the programmatic market. Byword.ai is the top choice for mass content generation, allowing users to upload CSVs of 1,000+ target queries to automatically generate long-form, research-grounded articles with automated image sourcing and direct CMS sync. SEOmatic excels at template-based landing pages, custom formula generation, and seamless Webflow/WordPress directory architecture."
  },
  {
    question: "Does Google penalize programmatic SEO pages as duplicate or thin content?",
    answer: "Google only penalizes low-value, repetitive doorway pages that provide zero information gain. High-performing programmatic campaigns succeed by injecting proprietary data, localized statistics, custom comparison tables, and genuine value into every generated page. AI builders ensure high structural variety between pages, varying phrasing and arguments to satisfy Google's Helpful Content System."
  },
  {
    question: "How do you manage internal linking across thousands of programmatic pages?",
    answer: "Leading pSEO builders feature automated internal linking meshes. As pages are generated, the engine maps parent-child topic relationships, automatically inserting contextual breadcrumbs, category hub links, and related long-tail cross-links (e.g., 'Best CRM for Dentists' linking to 'Best CRM for Chiropractors')."
  }
];

const useCases = [
  {
    title: "B2B SaaS Integration & Comparison Hubs",
    badge: "High Intent",
    desc: "Generate thousands of 'Alternative to [Competitor]' and '[Tool A] vs [Tool B] Integration' landing pages that capture bottom-of-funnel software buyers ready to convert.",
    benefits: [
      "Dynamic feature comparison tables generated from live API data",
      "Automated extraction of pricing tiers and pros/cons across competitors",
      "Direct 1-click publishing to Webflow CMS collections and HubSpot"
    ],
    highlight: "Captured 120,000 monthly organic visits across 2,400 comparison search queries"
  },
  {
    title: "Marketplaces & Local Service Directories",
    badge: "Multi-City Scale",
    desc: "Spin up dedicated location landing pages across 500+ metropolitan regions (e.g. 'Emergency Plumbers in [City]') with localized zip codes, maps, and pricing ranges.",
    benefits: [
      "Dynamic city and demographic parameter injection with zero duplicate copy",
      "Automated LocalBusiness schema markup and geo-coordinates per page",
      "Custom dynamic open-graph social share cards generated per city"
    ],
    highlight: "Rank #1 across 400 municipal searches within 60 days of site launch"
  },
  {
    title: "Affiliate & Product Catalog Aggregators",
    badge: "Mass Long-Tail",
    desc: "Dominate thousands of hyper-specific buying queries (e.g. 'Best [Product] for [Specific Use Case]') by combining product specs with AI synthesis.",
    benefits: [
      "Bulk spreadsheet import from Amazon, Shopify, or custom CSV feeds",
      "Automated royalty-free image fetching and structured specification tables",
      "Custom prompt variables tailored to specific buyer pain points"
    ],
    highlight: "Published 1,500 review pages in 48 hours, scaling affiliate revenue by 340%"
  }
];

const glossaryTerms = [
  {
    term: "Programmatic SEO (pSEO)",
    definition: "An automated publishing architecture that generates landing pages at scale by merging structured database parameters with dynamic modular content templates."
  },
  {
    term: "Information Gain Score",
    definition: "A patented Google ranking mechanism that evaluates whether an article provides novel facts, original data, or unique perspectives not found in existing search results."
  },
  {
    term: "Variable Prompt Chaining",
    definition: "Sequencing multiple AI prompts that pull discrete database cell values to generate distinct page sections, preventing repetitive or monotonous sentence patterns."
  },
  {
    term: "Crawl Budget Allocation",
    definition: "The rate and volume of URLs Googlebot commits to crawling on a domain, which must be carefully managed through clean XML sitemaps during mass page launches."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiProgrammaticSeoBuildersGuide() {
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
            Programmatic SEO & Mass Publishing 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Programmatic SEO Builders: <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Scale 1,000+ Ranked Pages from Data</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Escape the slow grind of writing articles one by one. Explore the premier AI programmatic SEO platforms that transform spreadsheets into thousands of indexable, high-ranking comparison hubs, directory pages, and long-tail articles.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Content Scaling Revolution
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How data-driven programmatic publishing dismantled manual freelance copywriting backlogs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
              <Timer className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">One-by-One Manual Blogging</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Paying freelance writers $100 per post takes 3 years and $50,000 to publish 500 articles. Competitors capture thousands of long-tail search variations while your production crawls at 4 posts per week.
            </p>
            <div className="pt-2 text-xs font-semibold text-rose-600 dark:text-rose-400">
              Velocity: 15-20 Articles per Month
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900/40 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Programmatic Data Architecture</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Connect a CSV, Airtable, or SQL database containing your product features, integration pairs, or city metrics. AI engines assemble 1,000+ comprehensive, bespoke landing pages in under an hour.
            </p>
            <div className="pt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              Velocity: 1,000+ Pages in 60 Minutes
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/40 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">High Information Gain Defensibility</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              By merging proprietary database statistics with variable generative reasoning, every page delivers unique value, preventing Google thin-content penalties and ranking across hundreds of long-tail terms.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Quality: 100% Unique Data Points
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" /> Production Velocity & Scale Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Freelance Copywriting vs. AI Programmatic SEO
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
              Freelance Agency Writing
            </button>
            <button
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                calculatorMode === "ai"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AI Programmatic SEO Engine
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Time to Publish 500 Pages</span>
              <Timer className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "18 - 24 Months" : "2 Hours"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Brief writing, assigning freelance contracts, editing, and manual CMS uploading."
                : "Batch CSV generation with direct API webhook sync into Webflow, WordPress, or Next.js."}
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Total Cost for 500 Pages</span>
              <DollarSign className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "$40,000 - $75,000" : "$99 - $350"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Freelancer per-word rates ($80 - $150 per post) plus project manager overhead."
                : "Predictable flat software subscription with volume-based generation credits."}
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Long-Tail Keyword Surface Area</span>
              <LineChart className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "Limited Coverage" : "Massive Scale"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Only high-volume head terms justify manual freelance writing budgets."
                : "Economically viable to target low-volume 20-50 search/mo long-tail queries."}
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
              Editor&apos;s Choice: Best Mass Programmatic SEO Engine (2026)
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Byword.ai
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Byword is the state-of-the-art programmatic SEO platform designed for scale. By simply uploading a spreadsheet of thousands of target keywords or custom data schemas, Byword generates research-grounded, SEO-optimized articles complete with custom image styling, automated internal linking, and 1-click publishing to WordPress, Webflow, Shopify, and Ghost.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Upload CSVs of 1,000+ keywords for batch mass creation</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Automated contextually relevant image & chart insertion</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Automated internal linking mesh across generated batches</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct CMS sync: WordPress, Webflow, Shopify, & Ghost</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <Link
              href="/tools/byword-ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold shadow-lg hover:shadow-indigo-500/25 transition-all text-center"
            >
              Explore Byword.ai Profile
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-xs text-center text-slate-400">
              Generated over 5,000,000+ indexed SEO pages globally
            </span>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX + BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top Alternative Programmatic SEO Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Specialized platforms for no-code landing page templates, enterprise CMS workflows, and data-driven directories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: SEOmatic */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                  No-Code pSEO
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.8 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">SEOmatic</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Connect CSVs or Airtable bases to spin up high-converting programmatic landing pages without writing code, featuring dynamic formulas and spin-syntax guardrails.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">No-Code Marketers & Airtable</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">From $49 / month</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/seomatic"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View SEOmatic Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Letterdrop */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold">
                  Enterprise SEO Ops
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.8 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">Letterdrop</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                An enterprise content ops engine that turns product release notes, sales call snippets, and customer questions into programmatic SEO pages with automated internal linking.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">B2B SaaS Growth Teams</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">From $495 / month</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/letterdrop"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View Letterdrop Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: Outranking */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  Data-Driven SEO Briefs
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.6 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">Outranking</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Blends automated factual research, on-page SEO scoring, and programmatic article assembly to rank competitive commercial terms without content hallucinations.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Factual Content Operations</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">From $29 / month</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/outranking"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View Outranking Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="rounded-2xl p-6 bg-gradient-to-r from-indigo-900/10 to-transparent border border-indigo-200 dark:border-indigo-900/30 space-y-3">
            <h4 className="text-base font-bold flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-indigo-500" />
              Spreadsheet Databases vs. Pure AI Generation
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Generating 1,000 articles purely with AI prompts leads to repetitive hallucinated text. Programmatic SEO anchors the generation in verified spreadsheet rows (pricing, locations, compatibility data), ensuring 100% factual accuracy and unique value on every page.
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-r from-purple-900/10 to-transparent border border-purple-200 dark:border-purple-900/30 space-y-3">
            <h4 className="text-base font-bold flex items-center gap-2">
              <Workflow className="w-4 h-4 text-purple-500" />
              Automated CMS Publishing vs. Static HTML Files
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Managing 2,000 static files on FTP is a maintenance nightmare. Modern programmatic tools sync directly via Webflow CMS, WordPress REST API, or headless Next.js webhooks, allowing global design or CTA updates with a single template change.
            </p>
          </div>
        </div>
      </section>

      {/* 6. BUYER'S GUIDE & EVALUATION CRITERIA */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            How to Evaluate an AI Programmatic SEO Builder
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Four essential requirements to prevent Google thin content penalties while scaling mass pages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              01
            </div>
            <div className="space-y-4 relative z-10 max-w-xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                <Copy className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Dynamic Prompt Structure & Variety</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Ensure the platform doesn&apos;t just swap one keyword into an identical 800-word template. The engine must dynamically vary sentence syntax, section sequencing, and arguments to keep content original and compliant with Google&apos;s Helpful Content System.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              02
            </div>
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                <Database className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Multi-Column Dataset Ingestion</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The platform must accept complex datasets with 20+ columns (specs, pricing, pros/cons, reviews, addresses) and inject these variables logically into tables, bullet points, and paragraphs.
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
              <h3 className="text-xl font-bold">Automated Internal Mesh Linking</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Mass pages without inbound links will never be crawled. The tool must automatically insert contextual breadcrumbs, parent pillar links, and sibling links across the entire generated batch.
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
              <h3 className="text-xl font-bold">Indexation & Crawl Velocity Controls</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Publishing 10,000 pages overnight on a new domain can trigger spam flags. Look for builders that support staggered scheduling, automated sitemap segmentation, and IndexNow/Google Indexing API pings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            Scaling Playbook
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            4 Steps to Launch a Programmatic SEO Hub
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h4 className="text-base font-bold text-white">Curate Clean Dataset</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Assemble your spreadsheet or Airtable base with 500+ rows. Populate key parameters: names, feature lists, pricing, city data, or comparison metrics.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h4 className="text-base font-bold text-white">Architect Modular Template</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Define the page layout: hero headline formula, structured spec tables, dynamic FAQ accordions, and variable prompt sections for editorial analysis.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h4 className="text-base font-bold text-white">Generate Sample Batch</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Run a test batch of 10 pages. Audit for readability, data accuracy, metadata formatting, and mobile responsiveness before triggering full generation.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              4
            </div>
            <h4 className="text-base font-bold text-white">Publish & Submit Sitemaps</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Push the generated pages to your CMS collections, verify internal mesh cross-links, and submit segmented XML sitemaps to Google Search Console.
            </p>
          </div>
        </div>
      </section>

      {/* 8. WHO BENEFITS MOST? (INTERACTIVE TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from Programmatic SEO Builders?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            See how different digital business models capture massive organic search volume.
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
            Programmatic SEO Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Essential concepts powering data-driven content generation and large-scale indexation.
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
            Everything you need to know about AI programmatic SEO builders, Google indexation, and duplicate content.
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
