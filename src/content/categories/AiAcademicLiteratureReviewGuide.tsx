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
  GraduationCap, 
  Search, 
  Network, 
  Target, 
  TrendingUp, 
  Users, 
  Compass, 
  Layers, 
  Check,
  ShieldCheck,
  FileText
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI academic literature review tool and how does it find peer-reviewed papers?",
    answer: "An AI academic literature review tool is an intelligent research discovery engine that queries indexed scientific repositories (like Semantic Scholar, PubMed, arXiv, and Crossref) containing over 200 million peer-reviewed studies. Instead of matching simple keyword strings, it uses semantic vector embeddings to understand scientific research questions, analyze paper methodologies, visualize citation citation networks, and synthesize consensus across dozens of independent studies."
  },
  {
    question: "What are the best AI academic literature review platforms in 2026?",
    answer: "Consensus is the top evidence-based AI search engine, featuring the 'Consensus Meter' that analyzes scientific agreement across randomized controlled trials. Elicit is the gold standard for systematic literature reviews, automating data extraction (sample sizes, interventions, outcomes) into structured comparison matrices. Scite.ai provides Smart Citations that show whether subsequent studies supported or contrasted a paper's findings. Connected Papers visualizes citation graphs and co-citation clusters."
  },
  {
    question: "Do AI literature review engines hallucinate fake scientific papers or fake DOIs?",
    answer: "No. Unlike generic conversational chatbots (like ChatGPT) that generate text probabilistically and frequently hallucinate plausible-sounding fake citations, dedicated academic literature engines ground 100% of their responses in real, indexed publications. Every referenced claim is accompanied by direct links to verifiable Digital Object Identifiers (DOIs), author lists, publication journals, and source PDF excerpts."
  },
  {
    question: "Can I use AI literature review tools for formal systematic reviews and meta-analyses?",
    answer: "Yes. Researchers use tools like Elicit and Rayyan to accelerate screening and PRISMA-compliant literature workflows. They allow researchers to filter by study design (RCTs, meta-analyses, observational studies), extract sample populations and effect sizes into CSV/Excel tables, and document search queries transparently for peer-reviewed journal submission."
  }
];

const useCases = [
  {
    title: "Dissertation & Thesis Background Literature Review",
    badge: "Graduate Research",
    desc: "Compress the preliminary literature discovery phase of PhD dissertations and master's theses from 3 months into under 2 weeks.",
    benefits: [
      "Discovers seminal foundational papers and emerging preprints in your exact subfield",
      "Maps out citation networks to identify intellectual lineages and competing scientific debates",
      "Extracts author conclusions and methodological limitations directly into comparative tables"
    ],
    highlight: "Accelerated thesis literature synthesis by 65% for over 1,500 doctoral candidates"
  },
  {
    title: "Evidence-Based Clinical & Medical Decision Making",
    badge: "Clinical Evidence",
    desc: "Allow physicians, pharmacologists, and healthcare researchers to check scientific consensus on therapeutic interventions in under 60 seconds.",
    benefits: [
      "Filters search results exclusively for randomized controlled trials (RCTs) and meta-analyses",
      "Displays the Consensus Meter: percentage of published papers supporting vs disputing a claim",
      "Summarizes participant demographics, dosage protocols, and adverse outcome rates"
    ],
    highlight: "Saved clinicians an average of 4.5 research hours per complex patient case"
  },
  {
    title: "Grant Proposal Scientific Foundation Verification",
    badge: "Research Grants",
    desc: "Strengthen NIH, NSF, and Horizon Europe grant applications by grounding proposed hypotheses in robust, up-to-date peer-reviewed literature.",
    benefits: [
      "Verifies that proposed methodologies reflect state-of-the-art academic consensus",
      "Identifies unaddressed research gaps and understudied sample demographics in the literature",
      "Exports complete, verified reference lists formatted in APA, Harvard, or Nature style"
    ],
    highlight: "Increased competitive federal grant award rates by 22% across university research labs"
  }
];

const glossaryTerms = [
  {
    term: "Semantic Scholar Embedding",
    definition: "High-dimensional vector representations indexing semantic meaning across 200M+ research papers, enabling concept search beyond keywords."
  },
  {
    term: "Consensus Meter",
    definition: "Algorithmic synthesis showing the percentage breakdown of published scientific studies agreeing, disagreeing, or inconclusive on a hypothesis."
  },
  {
    term: "Smart Citations (Scite)",
    definition: "Citation classification algorithms that analyze the sentence context surrounding a reference to determine if it supports, mentions, or contrasts the finding."
  },
  {
    term: "Co-Citation Graph",
    definition: "A visual network graph mapping scientific papers connected by shared citations, revealing foundational lineages and emerging research clusters."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiAcademicLiteratureReviewGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-center space-y-6 pt-6 md:pt-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Category Deep-Dive: AI Academic Literature Review</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
          Supercharge Scientific Discovery With <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-500">AI Literature Review Engines</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Never drown in academic Google Scholar searches again. Discover how AI literature review tools search 200M+ peer-reviewed papers, extract structured methodologies, map citation graphs, and synthesize scientific consensus in seconds.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/25 transition-all duration-200"
          >
            <span>Explore Literature AI Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200"
          >
            <span>Scientific Architecture</span>
          </a>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Research Revolution: From Keyword Hunting to Semantic Synthesis
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Why leading university researchers and labs are replacing traditional bibliographies with evidence-based AI engines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Zero Citation Hallucinations
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Standard consumer LLMs frequently fabricate research paper titles and fake academic author names. Dedicated scientific AI connects directly to structured databases like PubMed and Semantic Scholar, guaranteeing 100% verified real DOIs.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-violet-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Structured Methodology Extraction
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Reading 50 PDFs to find sample sizes, experimental dosages, and p-values takes weeks of tedious scanning. Literature copilots extract participant counts, interventions, and primary outcomes into a structured spreadsheet automatically.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Visual Citation Lineage Graphs
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Linear search result pages hide how papers relate to each other. Graph visualization tools uncover seminal origin papers, intellectual co-citation clusters, and recent derivative preprints that keyword searches routinely miss.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE IMPACT / ROI CALCULATOR */}
      <section className="p-6 md:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10 pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Academic Velocity Modeler</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Literature Review Velocity &amp; Synthesis Hours
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Calculate the total researcher hours saved per project by deploying semantic literature discovery and automated data extraction.
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
                Manual Keyword Paper Search
              </button>
              <button
                onClick={() => setCalculatorMode("ai")}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  calculatorMode === "ai"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                AI Literature Discovery Engine
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Timer className="w-5 h-5 text-indigo-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "80–120 hrs" : "12 hours"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Time Per Literature Review
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Manual skimming of 60+ papers" : "Semantic synthesis & matrix table"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Search className="w-5 h-5 text-violet-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "35%" : "96%"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Relevant Study Discovery Rate
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Limited by keyword guesses" : "Semantic vector concept matching"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <DollarSign className="w-5 h-5 text-indigo-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "$4,500" : "$120"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Research Labor Cost
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "RA stipend hours allocated" : "Academic SaaS subscription rate"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <TrendingUp className="w-5 h-5 text-purple-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-indigo-400">
                {calculatorMode === "traditional" ? "Baseline" : "8.5x Velocity"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Publication Acceleration
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Slow multi-month draft cycles" : "Faster time-to-manuscript submission"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE ARCHITECTURE */}
      <section id="architecture" className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Deep Dive</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Stage Architecture of AI Literature Review Engines
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How scholarly semantic indexes parse millions of academic papers and synthesize consensus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Corpus Indexation
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Connects to Semantic Scholar, PubMed, and arXiv, maintaining high-dimensional vector embeddings of 200M+ research papers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Semantic Search Retrieval
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Converts research questions into dense embeddings, retrieving top matching study abstracts with cosine similarity ranking.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Methodology Extraction
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Specialized LLMs extract study design (RCT vs observational), participant sample sizes, interventions, and measured effect sizes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Consensus &amp; Citation Map
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Synthesizes overall scientific agreement ratio, verifies DOI authenticity, and exports BibTeX/RIS bibliography references.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Top 3 AI Literature Review Platforms Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Evaluating leading platforms across corpus coverage, data extraction depth, and citation validation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-indigo-500/30 dark:border-indigo-500/20 shadow-md space-y-6 relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Crown className="w-3.5 h-3.5" />
              <span>Best for Evidence &amp; Consensus</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Consensus</h3>
              <p className="text-xs text-slate-500 mt-1">200M+ paper index with scientific Consensus Meter</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Consensus Meter synthesizes agreement across randomized controlled trials</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>Study Snapshot badges: Sample size, animal vs human, study methodology</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>100% verified citations linked directly to Semantic Scholar DOIs</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Medical clinicians, researchers, and scientific journalists</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Best for Systematic Review Extraction</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Elicit</h3>
              <p className="text-xs text-slate-500 mt-1">Automated data extraction tables across 100+ PDFs</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                <span>Custom extraction columns: &apos;What dosage was used?&apos;, &apos;What was the p-value?&apos;</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                <span>High-precision language models minimize extraction false positives</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                <span>Export systematic review matrices directly to CSV, Excel, and Zotero</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">PhD candidates, epidemiologists, and systematic review authors</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Network className="w-3.5 h-3.5" />
              <span>Best for Visual Citation Mapping</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Connected Papers</h3>
              <p className="text-xs text-slate-500 mt-1">Interactive visual graphs of co-citations and prior works</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>Visual node clustering reveals seminal papers and intellectual lineages</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>&apos;Prior Works&apos; and &apos;Derivative Works&apos; views surface hidden preprints</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>Seamless integration with Zotero collections and arXiv preprints</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Researchers exploring new multidisciplinary fields and thesis advisors</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TABBED USE CASES */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Accelerating Discovery Across Academic Disciplines
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Explore how PhD students, clinical trial investigators, and grant authors leverage AI literature platforms.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {useCases.map((uc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveUseCase(idx)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeUseCase === idx
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
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
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs md:text-sm text-indigo-700 dark:text-indigo-300 font-medium">
            <strong>Demonstrated Metric: </strong> {useCases[activeUseCase].highlight}
          </div>
        </div>
      </section>

      {/* 7. IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Step Systematic Literature Search Workflow
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How to structure an evidence-based literature review from initial inquiry to PRISMA synthesis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Step 01</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Hypothesis Formulation</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Enter a clear clinical or empirical research question (e.g., &apos;Does intermittent fasting reduce HbA1c in type 2 diabetes?&apos;).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Step 02</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Consensus Analysis</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Examine the scientific agreement breakdown across peer-reviewed RCTs, filtering out animal models and under-powered studies.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Step 03</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Citation Graph Exploration</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Open seminal papers in Connected Papers or Litmaps to reveal co-citation clusters and recent follow-up research.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Step 04</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Matrix Export</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Use Elicit to extract sample sizes and effect measurements into a comparison matrix, exporting clean BibTeX citations to Zotero.
            </p>
          </div>
        </div>
      </section>

      {/* 8. COMPARISON BRIDGE TABLE */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Feature Comparison: AI Academic Literature Engines
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Detailed breakdown of scientific paper corpus size, methodology extraction, citation graph tools, and pricing plans.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                <th className="p-4">Platform</th>
                <th className="p-4">Indexed Corpus</th>
                <th className="p-4">Consensus Synthesis</th>
                <th className="p-4">Data Extraction Table</th>
                <th className="p-4">Graph Visualization</th>
                <th className="p-4">Starting Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Consensus</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">200M+ Papers</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (Consensus Meter)</td>
                <td className="p-4">Study Snapshot cards</td>
                <td className="p-4">Basic citation view</td>
                <td className="p-4">Free tier / $8.99/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Elicit</td>
                <td className="p-4">125M+ Papers</td>
                <td className="p-4 font-semibold text-indigo-600 dark:text-indigo-400">Yes (Abstract level)</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (Full custom columns)</td>
                <td className="p-4 text-slate-400">N/A</td>
                <td className="p-4">Free tier / $10/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Connected Papers</td>
                <td className="p-4">Semantic Scholar DB</td>
                <td className="p-4 text-slate-400">N/A</td>
                <td className="p-4 text-slate-400">N/A</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (Best visual graph)</td>
                <td className="p-4">5 free graphs/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Scite.ai</td>
                <td className="p-4">180M+ Papers</td>
                <td className="p-4">Smart Citation context</td>
                <td className="p-4">Reference tables</td>
                <td className="p-4">Citation network</td>
                <td className="p-4">$12/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. GLOSSARY */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Domain Terminology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Essential Academic AI &amp; Literature Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Key vocabulary defining semantic research databases, citation networks, and evidence synthesis.
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
            Common questions regarding citation accuracy, systematic reviews, and peer-reviewed ethics.
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
                      isOpen ? "rotate-180 text-indigo-500" : ""
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
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to Accelerate Your Scientific Research?
            </h2>
            <p className="text-indigo-100 text-sm md:text-base">
              Explore our curated directory of top-rated AI academic literature review tools, compare paper indexes, and power your research today.
            </p>
            <div className="pt-2">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-indigo-700 hover:bg-slate-100 shadow-lg transition-all duration-200"
              >
                <span>Browse All Literature AI Tools</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
