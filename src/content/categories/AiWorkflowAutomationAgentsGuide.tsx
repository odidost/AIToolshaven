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
  Workflow, 
  Layers, 
  GitMerge, 
  Sliders, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  Bot,
  Cpu
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI workflow automation agent and how does it surpass traditional tools like Zapier?",
    answer: "Traditional automation tools (like Zapier or Make) rely on rigid linear triggers and actions: if Event A occurs, blindly copy Field B to App C. If the data format changes or human judgment is required, the automation breaks. An AI workflow automation agent incorporates intelligent reasoning nodes: it can read messy emails, make contextual classifications, loop over thousands of records, cross-reference external databases, and adjust actions dynamically without custom Python code."
  },
  {
    question: "What are the best AI workflow automation platforms in 2026?",
    answer: "Relevance AI and Gumloop represent the cutting edge of agentic workflow automation. Relevance AI enables companies to build and manage full 'B2B AI Workforces' (virtual SDRs, operations analysts, customer success reps) with enterprise collaboration and auditing. Gumloop provides a visual, drag-and-drop canvas for chaining LLMs, web scrapers, and python scripts that non-technical operators can master in hours."
  },
  {
    question: "Can AI workflow agents execute operations over massive CSV or database datasets?",
    answer: "Yes. Platforms like Gumloop and Relevance AI feature native batch looping. You can upload a 10,000-row CSV or connect a Postgres database, and the agentic workflow will run parallel LLM enrichment, website research, and decision logic across every row in minutes, writing structured results back to your database."
  },
  {
    question: "How do teams govern and debug multi-step AI workflows?",
    answer: "Modern agentic workflow platforms provide visual step-by-step execution graphs with cached node outputs. If step 4 of an 8-step pipeline needs fine-tuning, you can modify that single prompt and re-run only downstream nodes without reprocessing the entire workflow, saving substantial time and API token costs."
  }
];

const useCases = [
  {
    title: "B2B Sales & GTM Account Enrichment",
    badge: "Automated Prospect Research",
    desc: "Ingest inbound leads, research prospect websites and LinkedIn profiles with AI scrapers, generate personalized outreach drafts, and sync scores into Salesforce.",
    benefits: [
      "Parallel batch enrichment evaluating 500+ accounts simultaneously",
      "Dynamic personalization referencing recent company funding and executive quotes",
      "Automated routing alerting account executives via Slack for Tier-1 accounts"
    ],
    highlight: "Boosted cold outbound reply rates from 3.2% to 14.8% through deep account personalization"
  },
  {
    title: "Operations & Back-Office Document Triage",
    badge: "Autonomous Invoice & Claims Processing",
    desc: "Extract data from messy vendor PDF invoices, match line items against internal ERP purchase orders, and flag pricing discrepancies autonomously.",
    benefits: [
      "Multimodal OCR understanding scanned receipts, tables, and handwritten notes",
      "Conditional approval branching routing disputed amounts over $1,000 to finance leads",
      "Direct API integration updating NetSuite and QuickBooks records"
    ],
    highlight: "Slashed invoice reconciliation turnaround from 5 business days to 3 minutes"
  },
  {
    title: "Recruiting & Talent Acquisition",
    badge: "Candidate Screening & Matching",
    desc: "Screen incoming applicant resumes against engineering role requirements, rank candidates, and draft customized technical screening questions.",
    benefits: [
      "Objective evaluation based strictly on demonstrable project competencies",
      "Automatic synchronization with Greenhouse, Lever, and Ashby ATS platforms",
      "Instant rejection or interview scheduling emails drafted in company brand voice"
    ],
    highlight: "Shortened technical hiring time-to-interview by 65% across 40 open requisitions"
  }
];

const glossaryTerms = [
  {
    term: "Agentic Loop Operations",
    definition: "The capability of an automation flow to iterate across thousands of items in parallel, executing dynamic AI research and decision logic for each record."
  },
  {
    term: "Node Output Caching",
    definition: "Storing intermediate execution data at each workflow step so developers can modify subsequent prompts without re-running earlier steps."
  },
  {
    term: "Virtual AI Workforce",
    definition: "A team of autonomous, role-specific AI agents assigned ongoing operational responsibilities (e.g. daily lead triage, weekly competitor reporting)."
  },
  {
    term: "Multi-Model Fallback",
    definition: "An architectural safety feature that automatically routes requests to alternative LLM providers if the primary model encounters rate limits or downtime."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiWorkflowAutomationAgentsGuide() {
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
            No-Code Workflows, AI Workforces & Batch Processing 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Workflow Automation Agents: <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Scale Operations with Autonomous AI Workforces</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Linear if-this-then-that automations are obsolete. Discover modern AI workflow builders that allow non-technical operators to build complex reasoning pipelines, enrich massive datasets in parallel, and deploy autonomous virtual workforces.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Enterprise Automation Evolution
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why rigid linear triggers are being replaced by adaptive, reasoning agent workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Rigid Linear Zaps</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Old automation tools blindly move data from A to B. If a customer formats their email unexpectedly or an invoice layout shifts, the workflow fails completely.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Manual Human Bottlenecks</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Operations teams spend hundreds of hours manually reviewing PDFs, researching prospect websites, and re-typing spreadsheet data that linear tools cannot parse.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Intelligent AI Workforces</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Visual agentic pipelines that extract unstructured data, browse the live web, evaluate conditional logic, loop over datasets, and execute complex business operations autonomously.
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
              Operational Throughput & Labor Savings Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Linear Automation vs AI Workflow Agents (5,000 Operations/Mo)</h2>
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
              Manual Staff + Basic Zapier
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Workflow Platform (Relevance / Gumloop)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Processing Time Per 100 Records
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "8.5 Hours" : "3.5 Minutes"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Manual human review of exceptions and web lookups" 
                : "Parallel async agent loops querying web search and APIs"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Monthly Operational Overhead
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$4,500" : "$199"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Junior operational staff hours spent on routine verification" 
                : "All-in subscription with visual debugging and batch execution"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Operational Scalability Factor
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "1x (Linear)" : "50x (Elastic)"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Adding volume requires hiring additional full-time headcount" 
                : "Scale to 50,000 operations instantly with cloud concurrency"}
            </p>
          </div>
        </div>
      </section>

      {/* 3.0 EDITOR'S CHOICE SPOTLIGHT */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 md:p-12 border border-indigo-500/30 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-400" />
              Editor's Choice 2026: Benchmark Enterprise AI Workforce Suite
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Relevance AI — Build & Deploy Autonomous B2B AI Teams
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Relevance AI is built specifically for high-growth companies scaling operations without headcounts. It provides a visual builder for creating autonomous AI agents (B2B SDRs, market researchers, data analysts) that work together seamlessly, execute parallel batch jobs across databases, and integrate with your CRM and Slack.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                Visual No-Code Agent & Tool Builder
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                Parallel Batch Execution over Datasets & CSVs
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                Multi-Agent Delegation with Manager Oversight
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                Enterprise Security, SOC2 & Full Audit Logs
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-full lg:w-72 shrink-0 space-y-4 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400">Team Plan</div>
            <div className="text-4xl font-black text-white">$199 <span className="text-sm font-normal text-slate-400">/mo</span></div>
            <div className="text-xs text-indigo-300">Free starter tier available • Includes credits</div>
            <Link 
              href="/tools/relevance-ai"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors text-sm shadow-lg shadow-indigo-600/25"
            >
              Explore Relevance AI
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 TOP 3 ALTERNATIVES MATRIX & BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 AI Workflow Platforms Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Evaluating tools by builder flexibility, batch capabilities, developer power, and pricing.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-4 sm:p-5">Platform</th>
                <th className="p-4 sm:p-5">Core Philosophy</th>
                <th className="p-4 sm:p-5">Batch Processing</th>
                <th className="p-4 sm:p-5">Web Scraping Nodes</th>
                <th className="p-4 sm:p-5">Target User</th>
                <th className="p-4 sm:p-5">Pricing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  Relevance AI
                </td>
                <td className="p-4 sm:p-5">Autonomous B2B AI Workforce</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Native Big Data Tables</td>
                <td className="p-4 sm:p-5">Built-in headless search</td>
                <td className="p-4 sm:p-5">Growth & Ops Teams</td>
                <td className="p-4 sm:p-5 font-medium">$199/mo (Free tier)</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  Gumloop
                </td>
                <td className="p-4 sm:p-5">Visual AI Automation Canvas</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">1-Click CSV Loops</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Native Headless Chrome</td>
                <td className="p-4 sm:p-5">Non-technical Builders</td>
                <td className="p-4 sm:p-5 font-medium">$37/mo (Free tier)</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  Dify.ai
                </td>
                <td className="p-4 sm:p-5">Open-Source LLM App & Workflow Hub</td>
                <td className="p-4 sm:p-5">Iteration node support</td>
                <td className="p-4 sm:p-5">Via tool plugins</td>
                <td className="p-4 sm:p-5">Developers & Enterprises</td>
                <td className="p-4 sm:p-5 font-medium">Free / Open-Source</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-500" />
              Relevance AI vs Gumloop: Workforce Management vs Flow Canvas
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Relevance AI</strong> is designed around permanent digital workers (B2B AI agents that live in Slack, manage sub-teams, and execute ongoing roles). <strong>Gumloop</strong> is a fast, flexible flow canvas that excels at ad-hoc batch processing, taking messy CSVs or URLs and transforming them into structured output.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-500" />
              Dify.ai vs Gumloop: Open-Source Self-Hosting vs SaaS Simplicity
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Dify.ai</strong> is the open-source community favorite for enterprises that must host all workflow infrastructure on private AWS/Azure clouds due to compliance. <strong>Gumloop</strong> provides an ultra-slick hosted experience with pre-built web scraping and Python nodes that require zero server setup.
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 BUYER'S GUIDE: ASYMMETRIC BENTO BLOCKS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Key Architecture Factors for AI Workflow Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            What to evaluate before trusting your core business operations to workflow automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">01</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Native Batch Looping Capabilities</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Running a workflow on a single lead is easy; processing 5,000 records requires asynchronous queue management, rate limit backoff, and robust error handling so one failed row doesn't abort the entire batch.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">02</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Node-Level Output Caching</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Debugging complex 10-step flows can consume substantial tokens if you must re-run web scrapers and expensive reasoning nodes for every test. Look for visual builders with cached outputs for rapid testing.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">03</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Custom Python & JavaScript Execution</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              While LLMs handle reasoning, deterministic data transformations (calculating dates, regex string manipulation, currency conversions) are faster and cheaper in code. Ensure the platform supports inline Python/JS nodes.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">04</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Multi-Model Agnostic Switching</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Never build a mission-critical workflow tied to a single model provider. Look for platforms that allow you to route easy classification tasks to fast lightweight models while reserving frontier reasoning models for complex steps.
            </p>
          </div>
        </div>
      </section>

      {/* 4.5 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4-Step Blueprint to Launching Autonomous Agent Workflows
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How to configure and automate an enterprise workflow in under 30 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Select Inbound Trigger</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Configure how the workflow begins: an incoming webhook from your app, a scheduled cron job, a new Google Sheets row, or an uploaded CSV file.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Chain Reasoning & Scraper Nodes</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Drop in pre-built nodes to search Google, scrape target company websites, summarize documents, and extract structured JSON matching your schema.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Add Decision Branching</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Implement conditional logic: if a prospect is high-intent, send a customized Slack alert and draft an email; if low-intent, tag as nurture in CRM.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Test & Deploy Live Webhook</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Verify test run outputs, inspect step tracebacks, and publish the flow as a persistent live webhook or scheduled background workforce agent.
            </p>
          </div>
        </div>
      </section>

      {/* 5.0 WHO BENEFITS MOST (VERTICAL TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from AI Workflow Automation?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Select your team function to see specific operational efficiency gains.
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
                    ? "bg-white dark:bg-slate-800 border-indigo-500/50 shadow-md text-slate-900 dark:text-white font-semibold"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider mb-1">
                  {uc.badge}
                </div>
                <div className="text-sm sm:text-base">{uc.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
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
                Key Workflow Capabilities:
              </h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200 font-medium">
              📈 <strong>Quantified Impact:</strong> {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 TECHNICAL GLOSSARY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <BookOpen className="w-4 h-4" />
          AI Workflow Automation Lexicon
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
            Answers to common questions regarding AI workflow builders, batch processing, and workforce automation.
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
