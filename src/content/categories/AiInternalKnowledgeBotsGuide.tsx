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
  Search, 
  FileText, 
  Database, 
  Lock, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  Building,
  Key
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI internal knowledge bot and how does it connect corporate data?",
    answer: "An AI internal knowledge bot is an enterprise search and intelligence layer that indexes all of your company's scattered digital repositories—including Google Workspace, Notion, Slack channels, Jira tickets, Confluence spaces, and GitHub codebases. Utilizing semantic vector embeddings and strict Access Control Lists (ACLs), it acts as a private ChatGPT for employees, answering complex company questions and citing exact internal files without exposing sensitive data to unauthorized staff."
  },
  {
    question: "What are the best AI internal knowledge bots in 2026?",
    answer: "Glean and Chatbase represent the gold standards. Glean is the premier enterprise knowledge assistant, connecting 100+ workplace SaaS tools with real-time permission mapping, company graph modeling, and personal work feeds. Chatbase and SiteGPT are agile favorites for startups and mid-market teams, allowing non-technical managers to ingest PDFs, Notion databases, and websites into conversational knowledge bots in minutes."
  },
  {
    question: "How do internal knowledge bots protect sensitive permissions and executive documents?",
    answer: "Leading tools mirror your organization's exact source Access Control Lists (ACLs) in real time. If an employee does not have permission to view an executive compensation spreadsheet in Google Drive or an unreleased M&A document in Confluence, the AI knowledge bot completely omits those documents from the employee's vector search index and answers, guaranteeing zero data leakage across organizational tiers."
  },
  {
    question: "Is proprietary company IP used to train public LLM models?",
    answer: "No. Enterprise knowledge platforms operate within dedicated enterprise tenant agreements with providers like Microsoft Azure OpenAI, Anthropic, or AWS Bedrock. Under these agreements, customer data is cryptographically isolated, encrypted in transit and at rest, and explicitly never retained or used to fine-tune public base models."
  }
];

const useCases = [
  {
    title: "Engineering & Technical Documentation",
    badge: "Codebase & Architecture Search",
    desc: "Empower engineers to query internal architecture RFCs, legacy deployment scripts, and resolved GitHub issues in natural language.",
    benefits: [
      "Natural language search across Git repositories, PRs, and Jira tickets",
      "Instant synthesis of debugging steps from past incident post-mortems",
      "Cut new developer ramp-up time from 3 months down to 3 weeks"
    ],
    highlight: "Saved engineering teams 4.2 hours per developer weekly on codebase archaeology"
  },
  {
    title: "People Ops & HR Self-Service",
    badge: "Policy & Benefits Onboarding",
    desc: "Eliminate repetitive HR inquiries regarding health benefits, parental leave, expense policies, and vacation requests.",
    benefits: [
      "24/7 Slack and Microsoft Teams bot answering employee handbook questions",
      "Automated new-hire onboarding checklists and department-specific guides",
      "Multi-region policy routing adapting answers based on employee office location"
    ],
    highlight: "Deflected 82% of routine internal HR tickets across 650 employees"
  },
  {
    title: "Sales & Solutions Engineering",
    badge: "RFP & Technical Diligence",
    desc: "Equip account executives to instantly locate security questionnaire answers, competitive battlecards, and legal contracts during live client deals.",
    benefits: [
      "Instant retrieval of SOC2 compliance answers and infosec policies",
      "Dynamic extraction of previous winning enterprise proposal terms",
      "Direct integration into Salesforce and Chrome extension workspaces"
    ],
    highlight: "Accelerated technical RFP completion from 6 days down to 4 hours"
  }
];

const glossaryTerms = [
  {
    term: "Access Control List (ACL) Mirroring",
    definition: "The automatic synchronization of file view and edit permissions from source platforms (Google Drive, Slack) into the AI vector database to prevent unauthorized access."
  },
  {
    term: "Enterprise Semantic Search",
    definition: "Search technology that understands user intent and contextual meanings across corporate acronyms and project code names rather than just matching exact keywords."
  },
  {
    term: "Company Knowledge Graph",
    definition: "A visual and mathematical map connecting people, projects, documents, Slack channels, and code repositories across an entire organization."
  },
  {
    term: "SOC2 Type II Isolation",
    definition: "An audited security standard ensuring customer company data is isolated within private sandboxes with strict encryption, audit logs, and zero retention."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiInternalKnowledgeBotsGuide() {
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
            Enterprise Search, Workspace AI & Permission Governance 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Internal Knowledge Bots: <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">Instant Answers Across Google Drive, Notion, Slack & Jira</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Knowledge workers spend up to 20% of their workweek hunting down buried documents. Discover enterprise AI knowledge bots that securely index your company's entire SaaS stack, answer questions with verifiable citations, and enforce strict permission controls.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Knowledge Discovery Transformation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Moving from fragmented document silos to a unified conversational company intelligence layer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Fragmented SaaS Silos</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Information scattered across 15 apps: Google Drive, Notion, Slack threads, Confluence, and Figma. Employees waste hours asking coworkers for links.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Brittle Keyword Search</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Native app search engines fail on synonyms, acronyms, and intent, returning hundreds of outdated file results that force employees to manually read each one.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Unified Conversational Brain</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              AI indexes every tool with permission-aware ACLs, providing synthesized answers with direct clickable file references inside Slack or browser tabs in 2 seconds.
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
              Employee Productivity & Search ROI Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Calculate Workplace Time Savings (100 Employees)</h2>
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
              Manual Searching & Asking Coworkers
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Knowledge Assistant (Glean / Chatbase)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Hours Spent Searching / Employee / Week
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "6.8 Hours" : "1.1 Hours"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Trawling Drive folders, digging through Slack, interrupting teammates" 
                : "Instant synthesized answers with exact source links and citations"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Annual Productive Value Recovered
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$0" : "$890,000"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Lost engineering and operations capacity to context switching" 
                : "Value of 5.7 hours/week reclaimed across 100 knowledge workers"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-sky-500" />
              New-Hire Ramp-Up Duration
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "12 Weeks" : "3.5 Weeks"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Dependent on buddy onboarding meetings and trial-and-error" 
                : "Self-serve answers to internal architecture and company procedures"}
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
              Editor's Choice 2026: Enterprise Work Assistant Benchmark
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Glean AI — The Unified Enterprise Knowledge Engine
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Glean is the undisputed industry standard for workplace AI. It connects across Google Workspace, Slack, Jira, Confluence, GitHub, Salesforce, and Figma, building a living semantic company graph. Glean delivers precise answers with strict permission mirroring, so employees only see what they have clearance to view.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                100+ Enterprise Connectors with Instant Sync
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                Real-Time ACL Permission Mirroring
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                Generative Answers with Clickable File Citations
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                SOC2 Type II, HIPAA & GDPR Certified Security
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-full lg:w-72 shrink-0 space-y-4 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400">Enterprise Pricing</div>
            <div className="text-3xl font-black text-white">Custom <span className="text-sm font-normal text-slate-400">/seat/mo</span></div>
            <div className="text-xs text-indigo-300">Free demo • Custom enterprise deployment</div>
            <Link 
              href="/tools/glean-ai"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors text-sm shadow-lg shadow-indigo-600/25"
            >
              Explore Glean AI
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 TOP 3 ALTERNATIVES MATRIX & BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 Internal Knowledge Platforms Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Evaluating options by connector breadth, permission controls, setup complexity, and price.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-4 sm:p-5">Platform</th>
                <th className="p-4 sm:p-5">Best For</th>
                <th className="p-4 sm:p-5">Integrations</th>
                <th className="p-4 sm:p-5">Permission ACLs</th>
                <th className="p-4 sm:p-5">Setup Time</th>
                <th className="p-4 sm:p-5">Starting Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  Glean AI
                </td>
                <td className="p-4 sm:p-5">Mid-Market & Enterprise Teams</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">100+ Workplace Apps</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Real-Time Strict ACL</td>
                <td className="p-4 sm:p-5">1 - 3 Days (Admin)</td>
                <td className="p-4 sm:p-5 font-medium">Enterprise Quote</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                  Chatbase
                </td>
                <td className="p-4 sm:p-5">Startups & Departmental Bots</td>
                <td className="p-4 sm:p-5">Notion, PDF, URL, Slack</td>
                <td className="p-4 sm:p-5">Workspace-level role</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">&lt;10 Minutes</td>
                <td className="p-4 sm:p-5 font-medium">$19/mo</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  CustomGPT.ai
                </td>
                <td className="p-4 sm:p-5">Anti-Hallucination Document QA</td>
                <td className="p-4 sm:p-5">1,400+ formats, sitemaps</td>
                <td className="p-4 sm:p-5">Role-based project keys</td>
                <td className="p-4 sm:p-5">15 Minutes</td>
                <td className="p-4 sm:p-5 font-medium">$49/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-500" />
              Glean vs Chatbase: Full Enterprise Mesh vs Department Bot
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Glean</strong> is an all-encompassing enterprise operating system that connects hundreds of SaaS tools with dynamic ACLs, making it suitable for companies with 100+ employees. <strong>Chatbase</strong> is an ultra-fast, affordable solution for individual teams or founders wanting a simple knowledge bot trained on specific PDFs and Notion pages.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-500" />
              CustomGPT vs Chatbase: Document Depth vs UI Speed
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>CustomGPT.ai</strong> excels at ingesting massive multimedia libraries, audio transcripts, and complex multi-thousand-page technical PDF manuals with absolute zero-hallucination guarantees. <strong>Chatbase</strong> provides a more modern UI and easier embedding inside Slack and web dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 BUYER'S GUIDE: ASYMMETRIC BENTO BLOCKS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Key Architecture Factors for Internal Knowledge Bots
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            What IT and engineering leaders must review before connecting company data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">01</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Strict Real-Time Permission Mirroring (ACLs)</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              If an employee asks about salary ranges or board slides, the AI bot must never expose data from private Google Drive folders or locked Slack channels. Verify the platform queries permissions at the exact millisecond of search execution.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">02</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Verifiable In-Text Source Citations</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Every sentence in an AI generated answer must feature a clickable citation pill linking directly to the underlying document, Slack message, or Jira ticket, enabling employees to verify context before acting on technical advice.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">03</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Continuous Webhook Delta Ingestion</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Nightly batch scraping results in outdated answers during fast-paced product releases. Ensure the bot supports real-time webhooks that update document embeddings within seconds of an employee editing a Confluence page or Notion database.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">04</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Enterprise Privacy & Non-Training Guarantees</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Demand contractual zero-retention and non-training guarantees. Ensure all communication is encrypted with TLS 1.3 in transit and AES-256 at rest, backed by SOC2 Type II certifications.
            </p>
          </div>
        </div>
      </section>

      {/* 4.5 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4-Step Blueprint to Enterprise Knowledge Intelligence
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How to index your organization's tools and launch an internal AI assistant safely.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Authorize Admin Connectors</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Connect Google Workspace, Slack, and Jira through OAuth admin credentials to initiate background indexing and permission mapping.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Audit Permission Bounds</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Run security simulations across executive and junior staff test accounts to verify that sensitive HR and financial documents are strictly shielded.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Deploy Native Workflows</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Install the AI bot directly into company Slack or Microsoft Teams channels, as well as an official Chrome extension for instant browser sidebar access.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Monitor Knowledge Gaps</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Review search query analytics to discover unanswered employee questions, revealing documentation gaps that team leaders can rapidly resolve.
            </p>
          </div>
        </div>
      </section>

      {/* 5.0 WHO BENEFITS MOST (VERTICAL TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from Internal Knowledge Bots?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Select your team function to see specific efficiency gains.
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
                Key Platform Capabilities:
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
              💡 <strong>Impact Benchmark:</strong> {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 TECHNICAL GLOSSARY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <BookOpen className="w-4 h-4" />
          Enterprise Search & Security Lexicon
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
            Answers to common questions regarding enterprise AI search, ACL permissions, and data privacy.
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
