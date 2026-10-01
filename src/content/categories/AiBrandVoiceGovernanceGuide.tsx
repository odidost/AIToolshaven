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
  ShieldCheck, 
  Layers, 
  Scale, 
  Building2, 
  FileCheck2, 
  Sparkle,
  Lock,
  Workflow
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is AI brand voice governance and how does it work?",
    answer: "AI brand voice governance is an enterprise software platform that standardizes and enforces brand guidelines, approved terminology, regulatory compliance, and stylistic tone across all company communications. By analyzing incoming text against your customized style guides, banned word lexicons, and approved exemplar content, the platform automatically flags off-brand language, legal liabilities, and tone inconsistencies in real time directly within Google Docs, Microsoft Word, Chrome, and Figma."
  },
  {
    question: "What is the best AI brand voice governance platform in 2026?",
    answer: "Writer.com and Jasper Brand Voice dominate the corporate market. Writer.com is the gold standard for Fortune 500 enterprises, offering proprietary Palmyra LLMs, zero data retention security guarantees, custom styleguide rules, and automated regulatory claim checking. Jasper Brand Voice is the top choice for growth-stage marketing teams wanting tone-of-voice memory embedded directly into generative blog, email, and social copy workflows."
  },
  {
    question: "How does AI brand governance prevent regulatory fines and legal risks?",
    answer: "In heavily regulated sectors like fintech, healthcare, and insurance, marketing teams cannot make unsubstantiated product claims or use prohibited terms. AI governance engines utilize deterministic compliance rules that catch regulatory red flags (such as FTC disclosure omissions, FDA compliance breaches, or non-compliant financial return guarantees) before content is published or shared externally."
  },
  {
    question: "Can AI brand voice tools adapt to different channels and buyer personas?",
    answer: "Yes. Leading platforms allow organizations to define contextual voice variations. For example, your brand can maintain an authoritative, technical tone for enterprise whitepapers and investor decks, while dynamically shifting to an engaging, witty persona for Twitter/X threads and LinkedIn carousels—all while strictly adhering to core vocabulary rules and trademark guidelines."
  }
];

const useCases = [
  {
    title: "Regulated Enterprise (Fintech, Health, Insurance)",
    badge: "Compliance & Risk",
    desc: "Automate mandatory disclaimer verification and terminology compliance across thousands of outbound marketing materials, customer emails, and product docs.",
    benefits: [
      "Deterministic scanning for SEC, FTC, and HIPAA compliance keywords",
      "Automated legal approval routing and audit-trail logging",
      "Zero customer data retention and SOC 2 Type II certified infrastructure"
    ],
    highlight: "Zero compliance violations and 70% faster legal sign-off times"
  },
  {
    title: "Global Distributed Marketing Teams",
    badge: "Unified Voice",
    desc: "Ensure hundreds of remote employees, regional marketing leads, and external contractors speak with one coherent, unmistakable corporate brand identity.",
    benefits: [
      "Real-time style corrections in Chrome, Figma, Word, and Google Docs",
      "Dynamic tone-of-voice scoring on every drafted campaign",
      "Automated terminology translation and global localization checks"
    ],
    highlight: "94% stylistic consistency across 12 international marketing hubs"
  },
  {
    title: "Multi-Client Content & PR Agencies",
    badge: "Multi-Brand Memory",
    desc: "Switch between 20+ distinct client brand personas instantly without accidental voice bleed or cross-client terminology confusion.",
    benefits: [
      "Isolated workspace brand hubs with dedicated custom LLM fine-tuning",
      "One-click client style guide ingestion from existing PDFs or URLs",
      "Automated client-facing brand alignment scorecards on deliverables"
    ],
    highlight: "Eliminates brand voice onboarding friction for new agency copywriters"
  }
];

const glossaryTerms = [
  {
    term: "Lexical Constraint Filtering",
    definition: "An algorithmic mechanism that strictly forbids large language models from generating blacklisted words, unapproved competitor names, or non-compliant product claims."
  },
  {
    term: "Semantic Style Vector",
    definition: "A high-dimensional mathematical representation of a company's unique writing voice—capturing sentence length, humor levels, jargon density, and reading level."
  },
  {
    term: "Retrieval-Augmented Governance (RAG)",
    definition: "A verification architecture that cross-references all AI-generated assertions against a verified internal repository of product specs, legal disclaimers, and company FAQs."
  },
  {
    term: "Deterministic Compliance Scoring",
    definition: "A rule-based evaluation framework that scores drafts against explicit legal checklists and style manuals, assigning clear pass/fail grades prior to publication."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiBrandVoiceGovernanceGuide() {
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
            Enterprise Compliance & Voice Alignment 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Brand Voice Governance: <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Scale Cohesive Tone & Eliminate Legal Risks</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Protect your brand equity and eliminate costly compliance mistakes. Discover the leading AI brand voice and governance platforms that enforce unified editorial guidelines, verified claims, and regulatory safety across every employee and AI generation.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Content Governance Transformation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How autonomous brand guardrails replaced manual proofreading queues and fragmented PDF style guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
              <Timer className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Static 80-Page Style Manuals</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Companies bury editorial guidelines inside massive PDF documents that nobody reads. Writers guess tone, sales reps make unvetted claims, and legal teams spend hours doing manual redlines.
            </p>
            <div className="pt-2 text-xs font-semibold text-rose-600 dark:text-rose-400">
              Review Cycle: 3 to 7 Days per Draft
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900/40 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">In-Line Real-Time Governance</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              AI extensions embed directly in Chrome, Figma, Word, and Google Docs. The system flags banned terms, suggests on-brand phrases, and ensures correct trademark capitalization in real time.
            </p>
            <div className="pt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              Review Cycle: Instant As-You-Type
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/40 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Automated Legal & Claim Verification</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Unsubstantiated product claims or missing legal disclaimers are caught deterministically by custom RAG models before publication, eliminating costly regulatory fines and reputational damages.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Risk: 99.8% Compliance Accuracy
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" /> Operational Compliance & Velocity Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Manual Editorial Review vs. AI Brand Governance
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
              Manual Copy & Legal Reviews
            </button>
            <button
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                calculatorMode === "ai"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AI Brand Voice Governance
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Review Turnaround Time</span>
              <Timer className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "3 - 5 Business Days" : "Real-Time (0s)"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Back-and-forth email attachments, legal ticketing queues, and proofreading backlog."
                : "Live inline recommendations while writers draft across all workplace applications."}
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Cost Per 50,000 Words Polished</span>
              <DollarSign className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "$3,200 - $6,000" : "$18 - $45"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Senior editor hourly fees, external legal counsel retainer hours, and delay penalties."
                : "Predictable enterprise SaaS per-seat pricing with unlimited word verification."}
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Brand Consistency Rate</span>
              <LineChart className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "62% - 74%" : "98.5%+"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Disparate writing habits across departments, rogue outsourced contractors, and turnover."
                : "Automated scoring prevents publication of any asset failing mandatory thresholds."}
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
              Editor&apos;s Choice: Best Enterprise Brand Governance Engine (2026)
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Writer.com
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Writer is the industry-leading full-stack generative AI platform designed specifically for the enterprise. Powered by its custom Palmyra family of large language models, Writer enforces brand guidelines, banned terminology, factual accuracy, and industry regulatory compliance across your entire organization with enterprise-grade data privacy and zero data retention.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Custom Palmyra LLM tailored to company knowledge</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero Data Retention & SOC 2 / HIPAA certified</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Native extensions in Chrome, Figma, Word, & Docs</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Automated claim verification & hallucination checks</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <Link
              href="/tools/writer-com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold shadow-lg hover:shadow-indigo-500/25 transition-all text-center"
            >
              Explore Writer.com Profile
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-xs text-center text-slate-400">
              Trusted by Accenture, Uber, Spotify, and Intuit
            </span>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX + BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top Alternative AI Brand Voice Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Leading solutions for marketing copy memory, predictive performance copy, and enterprise multi-channel design systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Jasper Brand Voice */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                  Marketing Voice
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.8 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">Jasper Brand Voice</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Ingests your company assets, blog archives, and tone guidelines to create persistent brand voice memories that power all AI generative marketing workflows.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Marketing Teams & Copywriters</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">From $49 / month</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/jasper"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View Jasper Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Anyword */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold">
                  Predictive Performance
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.7 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">Anyword</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Combines strict brand voice guidelines and target audience personas with predictive performance scoring to optimize copy for conversions across email, ads, and web.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Performance Copywriters</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">From $39 / month</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/anyword"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View Anyword Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: Typeface AI */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  Multimodal Enterprise
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.7 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">Typeface AI</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                An enterprise-grade multimodal generative platform that aligns both brand voice copy and visual brand assets within unified, compliant marketing campaigns.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Enterprise Multimodal Marketing</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Custom Enterprise</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/typeface-ai"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View Typeface Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="rounded-2xl p-6 bg-gradient-to-r from-indigo-900/10 to-transparent border border-indigo-200 dark:border-indigo-900/30 space-y-3">
            <h4 className="text-base font-bold flex items-center gap-2">
              <Scale className="w-4 h-4 text-indigo-500" />
              Enterprise Governance vs. Basic AI Prompting
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Telling ChatGPT to &quot;sound witty and professional&quot; fails at scale because individual employees interpret prompts differently. Enterprise governance suites enforce programmatic rules that physically prevent unapproved claims and off-brand jargon from ever reaching customers.
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-r from-purple-900/10 to-transparent border border-purple-200 dark:border-purple-900/30 space-y-3">
            <h4 className="text-base font-bold flex items-center gap-2">
              <Workflow className="w-4 h-4 text-purple-500" />
              Omnichannel Extension vs. Siloed Web Interfaces
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              True brand alignment happens where employees work. Rather than forcing staff to copy-paste between browser tabs, platforms like Writer.com embed directly into Gmail, Zendesk, Salesforce, and Figma to govern every touchpoint naturally.
            </p>
          </div>
        </div>
      </section>

      {/* 6. BUYER'S GUIDE & EVALUATION CRITERIA */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            How to Evaluate an AI Brand Voice Platform
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Four mandatory requirements for selecting an enterprise-ready brand governance solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              01
            </div>
            <div className="space-y-4 relative z-10 max-w-xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                <FileCheck2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Granular Style & Lexicon Configuration</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The platform must support multi-layered rules: banned words, preferred synonyms, trademark guidelines, grammatical conventions, acronym expansions, and tone spectrum controls (e.g. formal vs. casual).
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              02
            </div>
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                <Lock className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Zero Data Retention (ZDR)</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Ensure enterprise data is never used to train public foundation models. Look for explicit SOC 2 Type II, ISO 27001, HIPAA, and GDPR compliance certifications with dedicated tenant isolation.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              03
            </div>
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Multi-Workspace Role Permissions</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Large corporations require distinct workspaces for different business units, product lines, or client accounts, allowing brand admins to update central rules while empowering regional teams.
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
              <h3 className="text-xl font-bold">Automated Fact & Claim Verification</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The AI must cross-reference product metrics, pricing claims, and customer statistics against your verified internal knowledge base, flagging factual hallucinations before content gets reviewed by leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            Enterprise Rollout Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            4 Steps to Deploy AI Brand Voice Governance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h4 className="text-base font-bold text-white">Ingest Brand & Tone Guides</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Upload existing editorial style manuals, brand guidelines, and 10-20 top-performing exemplar content pieces to establish your baseline voice vector.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h4 className="text-base font-bold text-white">Configure Rules & Lexicons</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Specify mandatory product terminologies, banned slang, trademark capitalization, and legal regulatory claims required for advertising compliance.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h4 className="text-base font-bold text-white">Deploy Workspace Extensions</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Roll out Chrome, Google Docs, Word, and Figma extensions across marketing, sales, and support teams via central IT device management.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              4
            </div>
            <h4 className="text-base font-bold text-white">Monitor Brand Analytics</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Track real-time brand alignment scorecards, identify recurring team errors, and continuously refine rule sets through central analytics dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* 8. WHO BENEFITS MOST? (INTERACTIVE TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from AI Brand Voice Governance?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            See how forward-thinking enterprises safeguard brand equity and accelerate content operations.
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
            AI Brand Governance Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Essential concepts powering enterprise linguistic alignment and automated compliance.
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
            Everything you need to know about AI brand voice governance, enterprise security, and multi-workspace deployment.
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
