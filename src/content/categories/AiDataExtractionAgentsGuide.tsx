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
  FileCode, 
  Search, 
  Code2, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  Cpu,
  Layers
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI data extraction agent and how is it different from traditional scrapers?",
    answer: "Traditional web scrapers download raw HTML filled with bloated navigation menus, cookie banners, tracking scripts, and tangled div tags—requiring complex regex and BeautifulSoup scripts. An AI data extraction agent crawls websites, renders client-side JavaScript, strips away non-content noise, and outputs clean, LLM-ready Markdown or strongly-typed JSON matching your exact Pydantic schema in a single API call."
  },
  {
    question: "What are the best AI data extraction tools in 2026?",
    answer: "Firecrawl and ScrapingBee lead the AI data extraction ecosystem. Firecrawl is the open-source sensation built specifically for LLM pipelines and RAG architectures, turning entire websites into clean Markdown via simple /crawl and /scrape endpoints. ScrapingBee specializes in rotating proxy infrastructure, headless Chrome rendering, and zero-code visual CSS extraction."
  },
  {
    question: "Why is clean Markdown output critical for RAG and AI applications?",
    answer: "Raw HTML consumes 5x to 10x more LLM context tokens than clean Markdown and introduces formatting artifacts that cause vector embeddings to hallucinate. AI extraction tools strip headers, footers, and scripts, retaining only headings, tables, clean text, and image links—maximizing token efficiency and retrieval accuracy inside vector databases."
  },
  {
    question: "Can data extraction agents extract structured JSON directly from unstructured pages?",
    answer: "Yes. By providing a JSON schema (e.g. { product_name: string, price: number, in_stock: boolean }), tools like Firecrawl use LLM extraction engines to parse unstructured human text into guaranteed, validated JSON structures matching your data model without manual parsing."
  }
];

const useCases = [
  {
    title: "AI Developers & RAG Pipeline Builders",
    badge: "LLM Data Ingestion",
    desc: "Ingest entire technical documentation portals and knowledge bases into clean Markdown chunks for vector embeddings in seconds.",
    benefits: [
      "Automated sitemap discovery and recursive subpage crawling",
      "Strips HTML clutter to reduce vector embedding token costs by 80%",
      "Seamless integration with LangChain, LlamaIndex, and Pinecone"
    ],
    highlight: "Indexed 1,200 documentation pages into a production RAG vector store in 6 minutes"
  },
  {
    title: "Market Intelligence & Competitor Price Tracking",
    badge: "Structured E-Commerce Scraping",
    desc: "Continuously extract product titles, SKU pricing, discount badges, and review counts across hundreds of e-commerce brands.",
    benefits: [
      "Guaranteed JSON schema output enforcing numerical price formatting",
      "Automatic handling of JavaScript infinite scroll and currency selectors",
      "Scheduled webhook triggers pushing updates directly into cloud databases"
    ],
    highlight: "Automated daily catalog monitoring across 450,000 SKUs with zero parser breaks"
  },
  {
    title: "Financial Analysts & Investment Research",
    badge: "SEC & Earnings Extraction",
    desc: "Extract financial tables, earnings call transcripts, and executive quotes into structured spreadsheets without manual copy-pasting.",
    benefits: [
      "Flawless table parsing maintaining row and column numerical relationships",
      "PDF and dynamic HTML conversion into structured CSV/JSON",
      "Built-in citation tracking linking extracted numbers back to source paragraphs"
    ],
    highlight: "Saved investment analysts 18 hours per quarterly earnings season on data entry"
  }
];

const glossaryTerms = [
  {
    term: "LLM-Ready Markdown",
    definition: "Web content stripped of HTML tags, scripts, and navigation clutter, formatted cleanly with Markdown syntax to maximize token efficiency for AI models."
  },
  {
    term: "JSON Schema Extraction",
    definition: "Passing a defined data structure to an AI agent to guarantee that extracted unstructured web data strictly conforms to required field types."
  },
  {
    term: "Recursive Sitemap Crawling",
    definition: "The capability of an extraction engine to discover an XML sitemap or parent URL and systematically index all linked subpages automatically."
  },
  {
    term: "Client-Side Hydration Rendering",
    definition: "Executing modern JavaScript frameworks (React, Next.js, Vue) in a headless environment so dynamic data rendered after initial page load is fully captured."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiDataExtractionAgentsGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-emerald-950 text-white p-8 md:p-14 border border-emerald-500/20 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            LLM-Ready Markdown, Schema Extraction & Web Scraping 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Data Extraction Agents: <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">Turn Any Website into Clean Markdown & Structured JSON</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Raw HTML is toxic for AI context windows. Explore premier AI data extraction agents that crawl websites, render dynamic JavaScript, eliminate boilerplate noise, and output clean Markdown and validated JSON in a single API call.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Web Extraction Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why messy raw HTML scrapers are being replaced by AI-native extraction engines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Messy Raw HTML Bloat</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Downloading megabytes of tangled div tags, cookie banners, tracking pixels, and CSS stylesheets that consume 85% of your LLM context tokens with zero value.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Brittle Regex Parsers</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Writing hundreds of lines of custom Beautiful Soup or Cheerio parsers that break whenever the target site changes its class names or page layout.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">LLM-Native Extraction</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              One API call crawls subpages, renders React apps, strips clutter, and outputs clean Markdown or typed JSON matching your exact Pydantic schema.
            </p>
          </div>
        </div>
      </section>

      {/* 2.5 INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 md:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Calculator className="w-4 h-4" />
              Data Pipeline & Token Economics Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Raw HTML Scraping vs AI Extraction (10,000 Pages)</h2>
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
              Raw HTML Scraping + Manual Cleaners
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-emerald-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Extraction Engine (Firecrawl / ScrapingBee)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <FileCode className="w-4 h-4 text-emerald-500" />
              LLM Tokens Consumed / 10K Pages
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "85,000,000" : "12,500,000"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "HTML bloat, inline styles, navigation markup, and scripts" 
                : "Pure semantic Markdown retaining only essential content"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-teal-500" />
              LLM API Ingestion Cost
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$425.00" : "$62.50"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Overpaying 6.8x for vector embedding and LLM input token waste" 
                : "Compressed, information-dense Markdown chunks"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-blue-500" />
              Developer Setup & Maintenance
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "3 Weeks" : "15 Minutes"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Writing custom scrapers, proxies, and regex cleaners" 
                : "Single SDK function: `await firecrawl.crawlUrl(url)`"}
            </p>
          </div>
        </div>
      </section>

      {/* 3.0 EDITOR'S CHOICE SPOTLIGHT */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-8 md:p-12 border border-emerald-500/30 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-400" />
              Editor's Choice 2026: Benchmark LLM Data Extraction Engine
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Firecrawl — Turn Entire Websites into Clean Markdown & JSON
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Firecrawl is the premier data extraction API purpose-built for the AI era. It crawls any URL (including JS-rendered apps and complex subdomains), bypasses anti-bot defenses, and delivers pristine Markdown or structured JSON matching your schema. Trusted by thousands of AI developers and top Y Combinator startups.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Single-Call /crawl and /scrape API Endpoints
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Direct LLM-Ready Markdown & Structured JSON Output
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Automatic Anti-Bot Bypassing & JS Rendering
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Open-Source Core with Scalable Cloud API
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-full lg:w-72 shrink-0 space-y-4 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400">Starter Plan</div>
            <div className="text-4xl font-black text-white">$16 <span className="text-sm font-normal text-slate-400">/mo</span></div>
            <div className="text-xs text-emerald-300">Free tier: 500 credits • Open-source self-hostable</div>
            <Link 
              href="/tools/firecrawl"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors text-sm shadow-lg shadow-emerald-600/25"
            >
              Explore Firecrawl
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 TOP 3 ALTERNATIVES MATRIX & BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 AI Data Extraction Tools Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Evaluating tools by output formats, crawling capabilities, developer experience, and cost.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-4 sm:p-5">Platform</th>
                <th className="p-4 sm:p-5">Core Strength</th>
                <th className="p-4 sm:p-5">Native Markdown</th>
                <th className="p-4 sm:p-5">Schema Extraction</th>
                <th className="p-4 sm:p-5">Self-Hostable</th>
                <th className="p-4 sm:p-5">Pricing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Firecrawl
                </td>
                <td className="p-4 sm:p-5">AI & RAG Pipeline Web Ingestion</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Pristine LLM-Ready</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Native via LLM Extract</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (Open Source)</td>
                <td className="p-4 sm:p-5 font-medium">$16/mo (Free tier)</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  ScrapingBee
                </td>
                <td className="p-4 sm:p-5">Proxy Management & Headless Chrome</td>
                <td className="p-4 sm:p-5">HTML to Text</td>
                <td className="p-4 sm:p-5">CSS Selector Rules</td>
                <td className="p-4 sm:p-5 text-slate-500">Cloud API only</td>
                <td className="p-4 sm:p-5 font-medium">$49/mo</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Browse AI
                </td>
                <td className="p-4 sm:p-5">No-Code Point-and-Click Robots</td>
                <td className="p-4 sm:p-5">Spreadsheet tabular</td>
                <td className="p-4 sm:p-5">Visual table selection</td>
                <td className="p-4 sm:p-5 text-slate-500">Cloud SaaS</td>
                <td className="p-4 sm:p-5 font-medium">$48.75/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-500" />
              Firecrawl vs ScrapingBee: AI-Native vs Proxy-Centric
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Firecrawl</strong> is built from the ground up for LLMs, delivering clean Markdown and handling full-site recursive crawling out-of-the-box. <strong>ScrapingBee</strong> is an infrastructure-heavy proxy API suited for traditional scraping where you still want raw HTML or custom CSS selector extraction.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-500" />
              Browse AI vs Firecrawl: No-Code Visual vs Developer API
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Browse AI</strong> allows non-technical business analysts to train visual scraping robots by recording their clicks in a Chrome extension. <strong>Firecrawl</strong> is an API-first tool for software engineers building automated data pipelines and AI applications.
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 BUYER'S GUIDE: ASYMMETRIC BENTO BLOCKS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Key Architecture Factors for AI Data Extraction
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            What to evaluate before piping web data into your production AI models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-emerald-500/30">01</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Semantic Markdown Formatting</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Ensure the extraction engine accurately translates headers (h1, h2, h3), code blocks, and complex multi-column tables into proper Markdown syntax rather than flattening everything into a single unstructured wall of text.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-emerald-500/30">02</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Dynamic Single-Page Application (SPA) Support</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Modern web apps built with Next.js, React, or Angular render data dynamically on the client side. The extraction tool must execute JavaScript and wait for network idle states before capturing content.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-emerald-500/30">03</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Strict JSON Schema Validation</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When extracting data into an automated database, missing fields cause application crashes. Look for engines that support Pydantic/Zod schema enforcement with automatic retries if a required field is missing.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-emerald-500/30">04</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Asynchronous Crawling Webhooks</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Crawling a 10,000-page website takes time. Ensure the platform supports asynchronous jobs with webhooks that notify your backend when data chunks are ready, avoiding HTTP request timeout errors.
            </p>
          </div>
        </div>
      </section>

      {/* 4.5 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4-Step Blueprint to Automated AI Web Ingestion
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How to configure a resilient web-to-Markdown data ingestion pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Define Target URLs or Sitemap</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Supply the root domain or sitemap XML URL. Set crawl depth, path inclusion/exclusion patterns, and subpage limits.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Select Output Format</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Choose clean Markdown for RAG embedding workflows, or attach a JSON schema to extract structured product/pricing records.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Trigger Extraction via SDK</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Execute extraction through Python or TypeScript SDKs. The service handles proxy rotation, anti-bot defenses, and DOM cleaning automatically.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Stream into Vector Database</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Pass the delivered Markdown directly into your chunking and embedding pipeline (Pinecone, Weaviate, pgvector) with zero manual post-processing.
            </p>
          </div>
        </div>
      </section>

      {/* 5.0 WHO BENEFITS MOST (VERTICAL TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from AI Data Extraction?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Select your technical discipline to explore custom advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2">
            {useCases.map((uc, index) => (
              <button
                key={index}
                onClick={() => setActiveUseCase(index)}
                className={`text-left p-4 rounded-xl transition-all border ${
                  activeUseCase === index
                    ? "bg-white dark:bg-slate-800 border-emerald-500/50 shadow-md text-slate-900 dark:text-white font-semibold"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider mb-1">
                  {uc.badge}
                </div>
                <div className="text-sm sm:text-base">{uc.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                {useCases[activeUseCase].badge}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {useCases[activeUseCase].title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {useCases[activeUseCase].desc}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Pipeline Capabilities:
              </h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 font-medium">
              📊 <strong>Extraction Proof:</strong> {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 TECHNICAL GLOSSARY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <BookOpen className="w-4 h-4" />
          Web Scraping & Data Extraction Lexicon
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {glossaryTerms.map((term, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white text-sm">{term.term}</div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{term.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6.0 SEO FAQ ACCORDION */}
      <section className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Answers to common questions regarding AI data extraction, Markdown generation, and anti-bot handling.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index} 
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
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
