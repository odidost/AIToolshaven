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
  FileSearch, 
  Sigma, 
  Table, 
  Target, 
  TrendingUp, 
  Users, 
  Compass, 
  Layers, 
  Search, 
  Check,
  HelpCircle
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI research paper PDF summarizer and how does it decode dense documents?",
    answer: "An AI paper and PDF summarizer is a document intelligence engine that ingests complex academic manuscripts, clinical whitepapers, and technical reports. Using retrieval-augmented generation (RAG) and multimodal OCR, it parses multi-column layouts, explains mathematical equations in plain English, extracts data tables, and allows researchers to ask conversational questions directly to the document with exact page citations."
  },
  {
    question: "What are the best AI research paper and PDF summarizers in 2026?",
    answer: "SciSpace (formerly Typeset) is the premier academic research platform, featuring Copilot to explain math formulas, summarize complex tables, and link cross-references across papers. Scholarcy is the pioneer in automated research flashcards and modular executive summaries. ChatPDF provides instant conversational chat across any PDF document with zero setup. Humata AI specializes in multi-file synthesis across thousands of technical pages simultaneously."
  },
  {
    question: "How do AI PDF summarizers handle complex mathematical formulas and technical tables?",
    answer: "Advanced academic summarizers use specialized LaTeX OCR engines. When a user highlights a complex mathematical equation (such as a matrix differential or statistical proof), the AI parses the notation into symbolic logic and provides an interactive step-by-step plain-language explanation of each variable, coefficient, and underlying scientific assumption."
  },
  {
    question: "Can I query multiple research PDFs at the same time to synthesize cross-study findings?",
    answer: "Yes. Multi-document platforms like Humata AI and SciSpace let you upload folders of 20 to 50 related papers. You can pose holistic questions ('Compare the neural network architectures and validation accuracies across all uploaded papers'), and the AI extracts answers while citing exact page numbers from each source manuscript."
  }
];

const useCases = [
  {
    title: "STEM Graduate & Postdoctoral Paper Deconstruction",
    badge: "Technical Synthesis",
    desc: "Deconstruct 40-page physics, computer science, and engineering papers featuring dense math proofs and multi-variable equations.",
    benefits: [
      "Highlights mathematical formulas to receive plain-English variable explanations",
      "Summarizes research methodology and hardware benchmark setups in 60 seconds",
      "Answers questions on hyperparameter tuning and model training constraints"
    ],
    highlight: "Reduced average paper comprehension time from 2 hours to 20 minutes"
  },
  {
    title: "Clinical Trial Protocol & Whitepaper Analysis",
    badge: "Medical Intelligence",
    desc: "Extract key pharmacokinetics, inclusion/exclusion criteria, and safety endpoints from dense 80-page FDA briefing documents and trial reports.",
    benefits: [
      "Instantly isolates primary vs secondary efficacy endpoints from dense tables",
      "Verifies adverse reaction rates and statistical significance intervals",
      "Generates structured clinical summaries ready for medical team presentation"
    ],
    highlight: "Accelerated pharmaceutical protocol reviews by 4.5x across clinical teams"
  },
  {
    title: "Undergraduate & Graduate Coursework Reading",
    badge: "Student Mastery",
    desc: "Master weekly assigned academic readings, generate study flashcards, and test comprehension with automated Socratic questioning.",
    benefits: [
      "Converts dense academic PDFs into modular, digestible summary cards (Scholarcy style)",
      "Generates practice quiz questions to test retention before seminar discussions",
      "Explains complex philosophical and sociological terminology in accessible language"
    ],
    highlight: "Helped over 10,000 university students double their weekly reading comprehension"
  }
];

const glossaryTerms = [
  {
    term: "Retrieval-Augmented Generation (RAG)",
    definition: "An AI architecture that retrieves exact text snippets from an uploaded PDF to ground LLM answers, preventing hallucinations and citing page numbers."
  },
  {
    term: "LaTeX Formula Parsing",
    definition: "Optical recognition that translates rendered mathematical symbols into symbolic markup, allowing LLMs to reason through equations."
  },
  {
    term: "Modular Summary Flashcard",
    definition: "A structured breakdown separating a paper into: Key Findings, Methodology, Limitations, and Future Work for rapid scanning."
  },
  {
    term: "Multi-Document Vector Space",
    definition: "An indexed collection of multiple PDFs enabling cross-study queries, comparative analysis, and synthesized consensus matrices."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiPaperPdfSummarizersGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-center space-y-6 pt-6 md:pt-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Category Deep-Dive: AI Paper &amp; PDF Summarizers</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
          Read Dense Academic Papers In Minutes With <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">AI PDF Summarizers</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Stop getting stuck on dense 50-page scientific PDFs and impenetrable math proofs. Discover how AI paper assistants decode equations, extract tables, generate modular flashcards, and answer complex technical questions with exact page citations.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all duration-200"
          >
            <span>Explore PDF AI Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200"
          >
            <span>PDF AI Architecture</span>
          </a>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Reading Revolution: Interactive Document Dialogue
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How conversational document RAG transforms static, intimidating PDFs into interactive research assistants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Instant Mathematical Deconstruction
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When encountering complex multivariate equations, researchers previously had to search through textbooks to identify unfamiliar notations. AI PDF assistants allow you to highlight any formula to receive an immediate plain-language breakdown of each term.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Verifiable Page-Level Attributions
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Every answer provided by academic PDF copilots is anchored by clickable source badges. Clicking a citation highlights the exact paragraph, chart, or data cell in the original PDF, eliminating hallucination fears for scholarly citation.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-cyan-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Multi-Study Cross-Syntheses
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Instead of reading one paper in isolation, researchers upload entire collections of 30+ papers. The AI compares competing conclusions, contrasting sample demographics and algorithmic benchmarks across the entire collection simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE IMPACT / ROI CALCULATOR */}
      <section className="p-6 md:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10 pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Research Efficiency Modeler</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Reading Time Reclaimed &amp; Comprehension Uplift
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Calculate annual researcher hours saved and reading capacity multiplied by deploying AI PDF summarizers across your research workflow.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex p-1 rounded-xl bg-slate-800 border border-slate-700">
              <button
                onClick={() => setCalculatorMode("traditional")}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  calculatorMode === "traditional"
                    ? "bg-slate-700 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Linear PDF Reading
              </button>
              <button
                onClick={() => setCalculatorMode("ai")}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  calculatorMode === "ai"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                AI PDF Copilot &amp; Summarizer
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Timer className="w-5 h-5 text-blue-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "90–120 min" : "15 minutes"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Time Per Complex Manuscript
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "End-to-end reading & note-taking" : "Interactive Q&amp;A + flashcard recap"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Table className="w-5 h-5 text-indigo-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "4–5 papers" : "25+ papers"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Weekly Paper Ingestion Capacity
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Mental exhaustion bottleneck" : "Skim key findings in parallel"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <DollarSign className="w-5 h-5 text-blue-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "$12,000" : "$120"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Annual Time Value (Per Researcher)
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Hours lost deciphering formatting" : "Software subscription rate"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <TrendingUp className="w-5 h-5 text-cyan-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-blue-400">
                {calculatorMode === "traditional" ? "Baseline" : "6.2x Speed"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Literature Assimilation
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Unread PDF graveyard on desktop" : "100% of literature digested"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE ARCHITECTURE */}
      <section id="architecture" className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Deep Dive</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Stage Architecture of AI Paper PDF Summarizers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            From raw multi-column PDF bytes to interactive grounded conversational intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Layout-Aware OCR
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Detects dual-column flows, header/footer boilerplate, figure captions, and tabular data boundaries without scrambling reading order.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Semantic Chunking
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Partitions the document into hierarchical sections (Abstract, Methodology, Results, Discussion) and embeds them into vector stores.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Mathematical Reranking
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Uses specialized LaTeX encoders to pair mathematical equations with the surrounding text explaining their physical meaning.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Interactive Grounded Chat
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Answers user questions using retrieved chunks, linking every assertion to exact page coordinates with visual highlight overlays.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Top 3 AI Research Paper PDF Summarizers Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Evaluating leading platforms on math equation decoding, flashcard modularity, and multi-file synthesis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-blue-500/30 dark:border-blue-500/20 shadow-md space-y-6 relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Crown className="w-3.5 h-3.5" />
              <span>Best for Scientific &amp; Math Papers</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">SciSpace (Typeset)</h3>
              <p className="text-xs text-slate-500 mt-1">Interactive Copilot for math formulas, tables &amp; literature</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Highlight any math equation or complex table for instant plain-text breakdown</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Connected repository of 200M+ research papers with citation discovery</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Chrome extension allows interactive chat on any web journal paper</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">STEM researchers, engineering postdocs, and data scientists</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Best for Modular Flashcards</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Scholarcy</h3>
              <p className="text-xs text-slate-500 mt-1">Generates structured summary cards, key concepts &amp; tables</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Creates interactive summary cards separating findings, limits, and contributions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Extracts tables, charts, and figures directly into downloadable Excel sheets</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Syncs summary cards to Notion, Roam Research, and Obsidian</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Students and researchers managing heavy weekly reading loads</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              <FileSearch className="w-3.5 h-3.5" />
              <span>Best Multi-File Synthesis Hub</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Humata AI</h3>
              <p className="text-xs text-slate-500 mt-1">Query across hundreds of complex technical PDFs simultaneously</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>Multi-document synthesis allows querying across 50+ papers in one prompt</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>Exact clickable citation badges highlight source pages instantly</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>Enterprise encryption with private team workspace sharing</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Corporate R&amp;D teams, patent attorneys, and policy analysts</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TABBED USE CASES */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Practical Applications for Document Intelligence
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            See how graduate researchers, clinical analysts, and university students digest technical manuscripts.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {useCases.map((uc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveUseCase(idx)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeUseCase === idx
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {uc.badge}
            </button>
          ))}
        </div>

        <div className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              {useCases[activeUseCase].title}
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {useCases[activeUseCase].desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {useCases[activeUseCase].benefits.map((benefit, i) => (
              <div key={i} className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs md:text-sm text-blue-700 dark:text-blue-300 font-medium">
            <strong>Demonstrated Metric: </strong> {useCases[activeUseCase].highlight}
          </div>
        </div>
      </section>

      {/* 7. IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Step Workflow for Academic PDF Deconstruction
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How to read, analyze, and extract findings from complex research papers in record time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Step 01</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Upload PDF File</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Drag and drop an academic PDF or paste a DOI. The layout-aware OCR extracts sections and builds an indexed vector store.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Step 02</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Modular Flashcards</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Review the automated executive summary separating Core Findings, Methodology, Statistical Outcomes, and Critical Limitations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Step 03</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Equation Explanations</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Highlight complex formulas or charts. The AI provides step-by-step plain-English explanations of all mathematical variables.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Step 04</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Synthesis &amp; Export</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Export answers with clickable page citation tags directly to your personal research notes in Notion, Obsidian, or Zotero.
            </p>
          </div>
        </div>
      </section>

      {/* 8. COMPARISON BRIDGE TABLE */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Feature Comparison: AI Research Paper &amp; PDF Summarizers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Detailed breakdown of math formula decoding, table extraction, multi-PDF chat, and pricing tiers.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                <th className="p-4">Platform</th>
                <th className="p-4">Math Formula Decoder</th>
                <th className="p-4">Table &amp; Figure OCR</th>
                <th className="p-4">Multi-PDF Querying</th>
                <th className="p-4">Citation Precision</th>
                <th className="p-4">Free Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">SciSpace (Typeset)</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (Interactive tool)</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (Full table OCR)</td>
                <td className="p-4">Yes (Collection chat)</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Exact page + line</td>
                <td className="p-4">Generous free tier</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Scholarcy</td>
                <td className="p-4">Summary cards</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (Excel export)</td>
                <td className="p-4 text-slate-400">N/A (Single doc)</td>
                <td className="p-4">Key section tags</td>
                <td className="p-4">Free trial</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Humata AI</td>
                <td className="p-4 text-slate-400">Basic text</td>
                <td className="p-4">Text in tables</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (100+ files)</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Clickable page badges</td>
                <td className="p-4">Free up to 60 pages</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">ChatPDF</td>
                <td className="p-4 text-slate-400">Basic text</td>
                <td className="p-4">Basic OCR</td>
                <td className="p-4">Folder chat</td>
                <td className="p-4">Page references</td>
                <td className="p-4">2 PDFs/day free</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. GLOSSARY */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Domain Terminology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Essential Document Intelligence Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Key vocabulary defining academic document parsing, RAG architectures, and mathematical OCR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {glossaryTerms.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {item.term}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ ACCORDION & CONVERSION CTA */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Answers to common questions regarding multi-column parsing, equation explanations, and citation validity.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                >
                  <span className="font-semibold text-slate-900 dark:text-white text-sm md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-blue-500" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to Master Complex Research Papers Faster?
            </h2>
            <p className="text-blue-100 text-sm md:text-base">
              Browse our directory of top-rated AI paper and PDF summarizers, compare mathematical copilot features, and elevate your research today.
            </p>
            <div className="pt-2">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-blue-700 hover:bg-slate-100 shadow-lg transition-all duration-200"
              >
                <span>Browse All PDF AI Tools</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
