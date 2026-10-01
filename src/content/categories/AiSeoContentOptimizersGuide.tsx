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
  Search, 
  Layers, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  BarChart2,
  PenTool
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI SEO content optimizer and how does it work?",
    answer: "An AI SEO content optimizer is an advanced semantic writing editor that reverse-engineers Google's top-ranking pages for a target query. Rather than focusing on obsolete keyword density percentages, these platforms use Natural Language Processing (NLP) to identify the specific entities, LSI concepts, heading structures, and semantic terms Google associates with high-ranking content, providing real-time optimization scores as you write."
  },
  {
    question: "What is the best AI SEO content optimizer in 2026?",
    answer: "Surfer SEO and Clearscope lead the enterprise market. Surfer SEO is celebrated for its precise 0-100 Content Score, granular SERP competitor audits, and native integrations with Google Docs, WordPress, and Jasper. Clearscope is the gold standard for high-end editorial and enterprise marketing teams, offering pristine Google Natural Language API alignment and exceptional readability heuristics."
  },
  {
    question: "Can using AI content optimization tools trigger Google penalties?",
    answer: "No. When used properly, AI content optimizers ensure you cover all necessary topic angles and answer search intent comprehensively. Google penalizes unedited spam and repetitive keyword stuffing. Modern tools include term frequency safeguards and upper-bound limits to prevent over-optimization and unnatural repetition."
  },
  {
    question: "How do NLP entities differ from traditional keywords?",
    answer: "Traditional keywords are literal strings of text (e.g., 'best running shoes'). NLP entities are semantic concepts recognized by Google's Knowledge Graph (e.g., 'arch support', 'midsole foam', 'overpronation', 'rubber outsole'). Including these entities signals true subject matter depth and helps Google understand the contextual relationships within your article."
  }
];

const useCases = [
  {
    title: "Enterprise Content Marketing Teams",
    badge: "Scale & Quality",
    desc: "Standardize content quality across dozens of in-house writers and freelance contributors with quantifiable Content Scores and clear optimization guidelines.",
    benefits: [
      "Custom organization-wide Content Score benchmarks (e.g., minimum 80/100)",
      "Real-time integrations inside Google Docs, WordPress Gutenberg, and Webflow",
      "Automated internal linking recommendations and competitor heading audits"
    ],
    highlight: "Average 68% increase in first-page rankings within 90 days of content refresh"
  },
  {
    title: "Affiliate & Niche Publishers",
    badge: "Cost Efficiency",
    desc: "Maximize organic traffic and affiliate conversions by optimizing buying guides and product reviews to outrank legacy authority sites on commercial intent keywords.",
    benefits: [
      "Affordable alternatives like NeuronWriter offering lifetime and high-volume limits",
      "Competitor gap analysis identifying omitted product comparisons and specs",
      "Automated FAQ generation answering high-volume 'People Also Ask' queries"
    ],
    highlight: "Double organic impressions on legacy articles with a single 15-minute optimization pass"
  },
  {
    title: "Freelance SEO Copywriters & Agencies",
    badge: "Client Approvals",
    desc: "Deliver client deliverables with objective proof of SEO readiness, justifying premium copywriting retainers with verifiable data-backed optimization grades.",
    benefits: [
      "Shareable read-only optimization links for client sign-offs",
      "Turnkey content brief generation including headings, word counts, and entities",
      "Built-in plagiarism and factual consistency checks"
    ],
    highlight: "Eliminate subjective client editorial revisions with objective SERP benchmarks"
  }
];

const glossaryTerms = [
  {
    term: "NLP Entities",
    definition: "Distinct concepts, people, places, or attributes recognized by search engine machine learning models and knowledge graphs beyond literal keyword strings."
  },
  {
    term: "Content Score / Grade",
    definition: "A composite 0-100 numerical score measuring how thoroughly a document covers the semantic entities, heading structures, and word counts present in top 10 SERPs."
  },
  {
    term: "Term Frequency-Inverse Document Frequency (TF-IDF)",
    definition: "A statistical heuristic that reflects how important a word or entity is to a document in relation to a large collection of search result documents."
  },
  {
    term: "Semantic Salience",
    definition: "Google Natural Language metric determining the relative prominence and central importance of an entity within the context of a given text passage."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiSeoContentOptimizersGuide() {
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
            Semantic NLP & SERP Intelligence 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI SEO Content Optimizers: <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Engineer First-Page Rankings with NLP</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Never publish blind content again. Explore the premier AI SEO content optimizers that reverse-engineer Google&apos;s top 10 SERPs, calculate real-time semantic entity coverage, and guide your articles straight to the top of search rankings.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Content Optimization Evolution
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How reverse-engineered NLP entity modeling replaced obsolete keyword stuffing and intuition-driven copywriting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
              <Timer className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Intuition & Keyword Guessing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Writers repeat a target keyword 15 times and hope for the best. Missing crucial sub-entities and semantic concepts causes Google to dismiss the article as superficial, languishing on Page 4.
            </p>
            <div className="pt-2 text-xs font-semibold text-rose-600 dark:text-rose-400">
              Outcome: 85% of Articles Never Rank
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900/40 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Real-Time SERP Reverse-Engineering</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The AI scrapes and analyzes the current top 10 ranking pages. It extracts optimal word counts, heading hierarchies, image quantities, and mandatory NLP entities to score your draft live as you write.
            </p>
            <div className="pt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              Benchmark: Quantifiable 0-100 Score
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/40 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Over-Optimization Protection</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Smart density meters flag when a term is used too frequently, preventing algorithmic spam penalties and keeping your writing natural, engaging, and compliant with Google E-E-A-T guidelines.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Protection: Safe NLP Upper Bounds
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" /> Content Performance Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Unoptimized Writing vs. AI Content Optimization
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
              Manual Intuition Writing
            </button>
            <button
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                calculatorMode === "ai"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AI Content Optimizer Engine
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>First-Page Ranking Hit Rate</span>
              <Target className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "12% - 18%" : "64% - 78%"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Articles miss critical semantic context required by Google rank algorithms."
                : "Exact entity parity and structural alignment with top-performing competitors."}
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Time Spent on Content Audits</span>
              <Timer className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "4 - 6 Hours" : "15 Minutes"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Manually checking top 5 competitors, counting words, and guessing missing angles."
                : "Automated instant audit highlighting exact missing entities and heading gaps."}
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Organic Traffic Retention</span>
              <LineChart className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "Decays in 6 Mos" : "Consistent Leader"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Thin articles easily surpassed when competitors publish deeper content."
                : "High topical depth creates durable authority moats that resist core updates."}
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
              Editor&apos;s Choice: Best Overall SEO Content Optimizer (2026)
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Surfer SEO
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Surfer is the benchmark content optimization platform trusted by over 150,000 businesses and agencies. Combining live SERP reverse-engineering with Google NLP entity intelligence, Surfer provides actionable 0-100 Content Scores, automated heading recommendations, and seamless real-time writing extensions directly inside Google Docs and WordPress.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Live 0-100 Content Score calibrated to top 10 competitors</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Google NLP entity extraction and safe frequency bounds</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Native extensions for Google Docs, WordPress, & Webflow</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Automated internal linking audits and SERP analyzer tool</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <Link
              href="/tools/surfer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold shadow-lg hover:shadow-indigo-500/25 transition-all text-center"
            >
              Explore Surfer SEO Profile
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-xs text-center text-slate-400">
              Used by FedEx, Shopify, Square, and ClickUp
            </span>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX + BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top Alternative AI Content Optimizers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Specialized solutions for budget-friendly lifetime access, high-end enterprise editorial depth, and AI-driven brief creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: NeuronWriter */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                  Best Value & Lifetime
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.8 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">NeuronWriter</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                A powerhouse NLP content optimization suite with advanced Google SERP analysis, competitor heading extraction, and built-in generative AI drafting at a fraction of enterprise costs.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Affiliate Sites & Budget Teams</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">From $23 / month</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/neuronwriter"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View NeuronWriter Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Clearscope */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold">
                  Enterprise Editorial Gold
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.9 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">Clearscope</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                The premier content optimization platform for top-tier editorial departments. Celebrated for its intuitive letter grades (A++ to F) and pristine Google Natural Language alignment.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Enterprise Publishers & SaaS</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">From $189 / month</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/clearscope"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View Clearscope Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: Frase */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  Briefs & Research Speed
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.7 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">Frase</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Accelerates pre-writing research by compiling comprehensive SERP outlines, top competitor statistics, and 'People Also Ask' questions into complete content briefs in 2 minutes.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Fast Outline Generation</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">From $15 / month</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/frase"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View Frase Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="rounded-2xl p-6 bg-gradient-to-r from-indigo-900/10 to-transparent border border-indigo-200 dark:border-indigo-900/30 space-y-3">
            <h4 className="text-base font-bold flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-indigo-500" />
              Numerical Scores (Surfer) vs. Letter Grades (Clearscope)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Surfer provides an exact, granular 0-100 score factoring word count, images, and headings, which performance marketers love. Clearscope uses letter grades (A++ to B) that emphasize organic readability, preventing writers from mechanically gaming term counters.
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-r from-purple-900/10 to-transparent border border-purple-200 dark:border-purple-900/30 space-y-3">
            <h4 className="text-base font-bold flex items-center gap-2">
              <PenTool className="w-4 h-4 text-purple-500" />
              Pre-Writing Brief Automation vs. Real-Time Post Optimization
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Tools like Frase specialize in the architecture phase—gathering competitor statistics and FAQs before writing begins. Tools like Surfer and Clearscope excel during and after drafting by grading sentence-level entity inclusion.
            </p>
          </div>
        </div>
      </section>

      {/* 6. BUYER'S GUIDE & EVALUATION CRITERIA */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            How to Evaluate an AI SEO Content Optimizer
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Four mandatory criteria to consider before deploying a semantic optimization suite across your content team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              01
            </div>
            <div className="space-y-4 relative z-10 max-w-xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                <Search className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Dynamic Competitor Selection</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The platform must let you select and unselect specific ranking URLs. If Amazon, Pinterest, or YouTube occupy positions 1-3, you must be able to exclude them so your content model calibrates against true editorial articles.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              02
            </div>
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Google NLP API Alignment</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Ensure the platform uses Google&apos;s actual Natural Language API to identify true named entities and sentiment rather than simple n-gram frequency counts.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              03
            </div>
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">CMS & Editor Integrations</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Copy-pasting between external tools creates friction. Look for native extensions that display live scores directly inside Google Docs, Microsoft Word, WordPress, and Notion.
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
              <h3 className="text-xl font-bold">Over-Optimization Thresholds</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                A good optimizer must enforce upper limits. If you repeat an entity too many times, the indicator should turn red and warn you of potential search engine spam triggers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            Writing Workflow
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            4 Steps to Optimize Content for First-Page Rankings
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h4 className="text-base font-bold text-white">Run SERP Query Query</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Input your primary target keyword and target location. Deselect irrelevant e-commerce or video ranking URLs to establish your editorial baseline.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h4 className="text-base font-bold text-white">Build Heading Blueprint</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Incorporate suggested H2 and H3 topics, FAQs from &apos;People Also Ask&apos;, and competitor subtopics into your initial article outline.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h4 className="text-base font-bold text-white">Write & Incorporate Entities</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Draft your article while watching your live Content Score climb. Naturally integrate the highlighted NLP concepts and technical terminology.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              4
            </div>
            <h4 className="text-base font-bold text-white">Publish at Green Threshold</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Once your draft hits the recommended green score zone (e.g. 75+ on Surfer or A on Clearscope), publish and connect internal link equity.
            </p>
          </div>
        </div>
      </section>

      {/* 8. WHO BENEFITS MOST? (INTERACTIVE TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from AI Content Optimizers?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Discover how different content organizations leverage semantic editors to secure top search rankings.
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
            SEO Content Optimization Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Essential concepts powering semantic content optimization and Google NLP parsing.
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
            Everything you need to know about AI SEO content optimizers, NLP entities, and rankings.
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
