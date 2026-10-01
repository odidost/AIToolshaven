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
  Network, 
  Search, 
  Layers, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  FolderTree,
  GitFork
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is AI keyword research and topic clustering, and how does it work?",
    answer: "AI keyword research and topic clustering is an algorithmic methodology that groups thousands of related search queries into semantic topic clusters based on Google SERP overlap. Rather than targeting single isolated keywords, AI engines analyze live search result pages to determine when Google considers different search queries to share identical search intent, allowing you to rank a single comprehensive pillar page for hundreds of long-tail variations without keyword cannibalization."
  },
  {
    question: "What is the best AI keyword clustering and research tool in 2026?",
    answer: "Semrush AI and LowFruits lead the keyword intelligence sector. Semrush AI excels in enterprise-scale competitive intelligence, intent scoring, and automated topical authority mapping across millions of global search databases. LowFruits is the gold standard for niche site builders, affiliate publishers, and content creators looking to uncover low-competition, weak-SERP keywords dominated by forums and Reddit."
  },
  {
    question: "How does AI topic clustering prevent keyword cannibalization?",
    answer: "Keyword cannibalization happens when multiple pages on your website target identical or overlapping search queries, splitting organic link equity and confusing Google ranking algorithms. AI clustering tools test SERP similarity between keywords: if 3 or more URLs rank in common for two distinct queries, the AI groups them together, instructing you to target both keywords on a single comprehensive article."
  },
  {
    question: "What is topical authority and how do AI clusters build it?",
    answer: "Topical authority is Google's evaluation of how thoroughly and authoritatively a website covers an entire subject domain. By systematically mapping out and publishing content for every subtopic, FAQ, and related entity within an AI-generated topic cluster, you demonstrate deep subject mastery, allowing newer articles to index and rank dramatically faster."
  }
];

const useCases = [
  {
    title: "Niche Publishers & Affiliate Marketers",
    badge: "Low Competition",
    desc: "Uncover high-intent, low-difficulty keyword gems dominated by unoptimized forum threads and Quora answers to drive fast organic traffic without massive backlink budgets.",
    benefits: [
      "Automated Weak Spot SERP extraction (identifies Reddit and forum rankings)",
      "Keyword Golden Ratio (KGR) calculation across thousands of queries",
      "One-click topic cluster mapping into clear editorial content calendars"
    ],
    highlight: "Rank on Google Page 1 within weeks using low-competition cluster gaps"
  },
  {
    title: "B2B SaaS Growth & SEO Teams",
    badge: "Topical Authority",
    desc: "Build comprehensive product-led SEO topic clusters that educate enterprise buyers, intercept software comparison queries, and capture bottom-of-funnel pipeline.",
    benefits: [
      "Competitor search intent gap analysis and reverse ASIN/domain indexing",
      "Commercial vs. Informational search intent algorithmic tagging",
      "Seamless integration with Surfer, Clearscope, and HubSpot CMS pipelines"
    ],
    highlight: "Systematically capture 10x organic pipeline across category searches"
  },
  {
    title: "SEO Agencies & Content Consultancies",
    badge: "Mass Clustering",
    desc: "Process raw exports of 50,000+ keywords for new client onboarding into structured topical silo architectures within minutes rather than spending days on manual spreadsheets.",
    benefits: [
      "SERP similarity matrix clustering with customizable overlap thresholds (3-6 URLs)",
      "White-label client topical authority roadmaps and interactive visual graphs",
      "Cannibalization risk audit on existing client URL footprints"
    ],
    highlight: "Reduce client content roadmap planning from 2 weeks to 4 hours"
  }
];

const glossaryTerms = [
  {
    term: "SERP Overlap Clustering",
    definition: "An algorithmic technique that groups two or more keywords into a single content cluster if a specified threshold of URLs (typically 3 to 5) appear in the top 10 search results for both queries."
  },
  {
    term: "Search Intent Classification",
    definition: "Machine learning categorization of queries into Informational, Navigational, Commercial, or Transactional intent to ensure content matches Google user expectations."
  },
  {
    term: "Keyword Cannibalization",
    definition: "A technical SEO flaw where multiple pages on the same domain compete for identical search queries, weakening aggregate ranking power and confusing search crawlers."
  },
  {
    term: "Topical Authority Vector",
    definition: "A mathematical score representing the completeness of a site's content coverage across all entities, parent topics, and subtopics within an industry niche."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiKeywordResearchClusteringGuide() {
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
            Topical Authority & Semantic SEO 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Keyword Research & Topic Clustering: <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Dominate Search Intent & SERP Overlap</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Stop targeting one keyword at a time on endless unranked blog posts. Discover the top AI keyword clustering and research tools that analyze SERP overlap, eliminate keyword cannibalization, and architect bulletproof topical authority roadmaps.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Keyword Architecture Revolution
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How SERP-driven semantic clustering replaced manual keyword spreadsheets and intuition-based blogging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
              <Timer className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Manual Keyword Spreadsheets</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              SEOs download 10,000 raw keywords into Excel, sorting manually for weeks. Content writers publish separate articles for near-identical terms, triggering severe cannibalization penalties.
            </p>
            <div className="pt-2 text-xs font-semibold text-rose-600 dark:text-rose-400">
              Process: 40+ Hours of Manual Triage
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900/40 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Automated SERP Clustering</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              AI pulls live Google SERPs for thousands of queries simultaneously. Algorithms group keywords sharing 3+ ranking URLs into clean, deduplicated topic silos with defined parent pillar pages.
            </p>
            <div className="pt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              Process: Under 3 Minutes for 10k Keywords
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/40 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Predictive Topical Authority</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              By covering all clustered subtopics systematically, Google recognizes your domain as an authoritative entity on the topic, lifting rankings across every article simultaneously.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Outcome: 3x - 8x Faster Organic Indexing
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" /> Keyword Architecture Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Manual Keyword Sorting vs. AI Topic Clustering
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
              Manual Excel Triaging
            </button>
            <button
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                calculatorMode === "ai"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AI SERP Clustering Engine
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Time to Cluster 5,000 Keywords</span>
              <Timer className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "25 - 35 Hours" : "90 Seconds"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Manually Googling queries, cross-checking search intent, and grouping rows."
                : "Real-time SERP correlation algorithms automatically assemble topic clusters."}
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Keyword Cannibalization Risk</span>
              <DollarSign className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "35% - 50%" : "< 1.5%"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Wasted writing budgets on overlapping articles that cannibalize each other."
                : "Exact SERP overlap thresholds guarantee one authoritative page per unique intent."}
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Content ROI & Velocity</span>
              <LineChart className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "Unpredictable" : "3.8x ROI Lift"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Disjointed blog calendar with slow indexing and stagnant domain authority."
                : "Topical silo architecture triggers faster Google crawling and multi-keyword ranks."}
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
              Editor&apos;s Choice: Best Enterprise Keyword & Topic Intelligence (2026)
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Semrush AI
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Semrush AI is the enterprise standard for keyword intelligence and topical authority modeling. Harnessing a massive global database of over 25 billion keywords and live SERP telemetry, Semrush automatically groups keywords by intent, flags cannibalization risks, and builds complete topic cluster roadmaps to dominate competitive search landscapes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>25B+ global keyword database with live intent tagging</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Automated topic clustering based on live SERP overlap</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Competitor keyword gap analysis & topical authority scoring</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct integration with on-page content optimization tools</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <Link
              href="/tools/semrush-ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold shadow-lg hover:shadow-indigo-500/25 transition-all text-center"
            >
              Explore Semrush AI Profile
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-xs text-center text-slate-400">
              Trusted by 10,000,000+ digital marketers worldwide
            </span>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX + BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top Alternative AI Keyword Clustering Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Leading solutions for uncovering low-competition gems, automated content briefs, and multi-search engine telemetry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: LowFruits */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                  Low-Competition Gem Finder
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.9 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">LowFruits</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                The ultimate keyword tool for finding easy-to-rank search terms. LowFruits scans SERPs for weak spots like forums, Quora, and Reddit, clustering long-tail opportunities into high-converting silos.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Niche Sites & Affiliates</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Pay-as-you-go / From $25</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/lowfruits"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View LowFruits Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: RankIQ */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold">
                  Blogger Specialist
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.8 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">RankIQ</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Engineered specifically for bloggers and content creators. Features a hand-curated library of high-traffic, low-competition keywords paired with AI content briefs that guide fast page 1 rankings.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Bloggers & Content Writers</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">From $49 / month</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/rankiq"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View RankIQ Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: SE Ranking Copilot */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  Agency Clustering Suite
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.7 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">SE Ranking Copilot</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                An all-in-one SEO platform with automated SERP-based keyword grouping, ranking tracking across all major engines, and comprehensive competitor intelligence.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Agencies & In-House Teams</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">From $55 / month</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/se-ranking-copilot"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View SE Ranking Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="rounded-2xl p-6 bg-gradient-to-r from-indigo-900/10 to-transparent border border-indigo-200 dark:border-indigo-900/30 space-y-3">
            <h4 className="text-base font-bold flex items-center gap-2">
              <Network className="w-4 h-4 text-indigo-500" />
              Linguistic Lemmatization vs. SERP-Based Clustering
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Old clustering tools relied on basic word matching (grouping queries containing &quot;running shoes&quot;). Modern AI tools like Semrush examine live Google search results: even if two phrases share zero words in common, if Google ranks the same 4 websites, the AI knows they share identical search intent.
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-r from-purple-900/10 to-transparent border border-purple-200 dark:border-purple-900/30 space-y-3">
            <h4 className="text-base font-bold flex items-center gap-2">
              <GitFork className="w-4 h-4 text-purple-500" />
              Search Volume Vanity vs. Topic Cluster Coverage
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Targeting a single 20,000/mo search volume keyword is high risk and slow. By targeting an AI cluster containing 40 long-tail variations totaling 18,000 monthly volume, you face 80% less competition while ranking for hundreds of query variations simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* 6. BUYER'S GUIDE & EVALUATION CRITERIA */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            How to Choose an AI Keyword Clustering Tool
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Four non-negotiable criteria when evaluating keyword clustering and research intelligence platforms.
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
              <h3 className="text-xl font-bold">Live SERP Overlap Verification</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Ensure the platform clusters based on live, localized Google search result overlap (not just keyword syntax). Look for tools with customizable overlap sensitivity (e.g. 3, 4, or 5 shared URLs) to calibrate cluster depth.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              02
            </div>
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                <Target className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Search Intent Classification</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The platform must automatically label keywords as Informational, Commercial, Transactional, or Navigational, preventing you from writing a blog post when Google expects a software pricing page.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              03
            </div>
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                <FolderTree className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Pillar & Subtopic Hierarchy Mapping</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The software should automatically designate the primary pillar URL and organize subsidiary child keywords into logical H2/H3 subheadings or supporting spoke articles.
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
              <h3 className="text-xl font-bold">Weak Spot & Forum Extraction</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                For newer websites, the ability to filter clusters where Reddit, Quora, or low-authority sites rank on Page 1 is crucial for guaranteeing rapid organic traffic wins without heavy backlink building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            Execution Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            4 Steps to Build a Winning Topic Cluster
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h4 className="text-base font-bold text-white">Extract Seed Queries</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Input 5-10 core niche seed terms. Export 3,000+ related queries, question variations, and competitor ranking keywords into the tool.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h4 className="text-base font-bold text-white">Run SERP Clustering</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Execute live SERP overlap analysis with a 3-URL similarity threshold to group identical search intent queries into structured clusters.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h4 className="text-base font-bold text-white">Identify Quick-Win Gems</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Filter clusters by low KD or weak spots (forums/Quora ranking). Prioritize these for immediate publication to capture initial traffic.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              4
            </div>
            <h4 className="text-base font-bold text-white">Publish Silo Architecture</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Publish the comprehensive pillar article and supporting spoke guides. Cross-link child pages back to the parent to solidify topical authority.
            </p>
          </div>
        </div>
      </section>

      {/* 8. WHO BENEFITS MOST? (INTERACTIVE TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from AI Keyword Clustering?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            See how different growth teams leverage topic clustering to scale organic visibility.
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
            Keyword Intelligence Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Essential concepts in modern semantic SEO, topic clustering, and search intent.
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
            Everything you need to know about AI keyword clustering, topical authority, and cannibalization prevention.
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
