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
  Bookmark, 
  AlertTriangle, 
  Check, 
  HelpCircle, 
  ShieldCheck, 
  ExternalLink,
  Target,
  TrendingUp,
  Layers,
  Search,
  Users
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI citation and reference manager and how does it prevent academic retractions?",
    answer: "An AI citation and reference manager combines automated bibliography generation with deep semantic citation intelligence. Beyond storing PDFs and outputting APA or BibTeX citations, it analyzes how a study is cited across the scholarly literature. It classifies citation context (mentioning, supporting, or contrasting), flags retracted papers in your library in real time, and identifies conflicting evidence so you never build arguments on invalidated claims."
  },
  {
    question: "What are the best AI citation and reference management tools in 2026?",
    answer: "Scite.ai leads the category with its proprietary Smart Citations database, analyzing over 1.2 billion citation contexts to reveal whether subsequent studies replicated or refuted claims. Zotero (paired with AI plugins and retraction watch integration) provides the gold standard open-source research workspace. Paperpile offers flawless Google Docs and Chrome integration for multidisciplinary teams. Mendeley integrates closely with Elsevier repositories and algorithmic literature recommendations."
  },
  {
    question: "How does Scite.ai Smart Citations differ from traditional citation counts in Google Scholar or Web of Science?",
    answer: "Traditional citation counts treat every citation identically, counting a scathing refutation the same as a successful replication. Scite.ai uses natural language processing to extract the exact sentence where a paper is cited, classifying it into 'Supporting', 'Contrasting', or 'Mentioning'. This allows researchers to immediately evaluate whether a foundational paper's empirical findings have stood up to subsequent independent scrutiny."
  },
  {
    question: "Can AI reference managers automatically format bibliographies for multiple journal styles?",
    answer: "Yes. Modern reference managers support over 10,000 citation styles (including APA 7th edition, MLA 9th, Chicago/Turabian, IEEE, Harvard, and Nature format). AI assistants automatically detect missing DOI metadata, fill in incomplete author or volume fields, and reformat entire 300-reference bibliographies in a single click when pivoting submissions from one journal to another."
  }
];

const useCases = [
  {
    title: "PhD Dissertation & Systematic Review Bibliographies",
    badge: "Doctoral Rigor",
    desc: "Manage and verify 300+ sources across a multi-year dissertation without duplicate references or formatting inconsistencies.",
    benefits: [
      "Automatically extracts complete DOI, volume, issue, and page numbers from unindexed PDFs",
      "Flags retracted papers and corrections across your thesis bibliography in real time",
      "Seamlessly synchronizes bibliographies across LaTeX (BibTeX/Overleaf) and Microsoft Word"
    ],
    highlight: "Saved an average of 42 hours in final thesis bibliography formatting and auditing"
  },
  {
    title: "Peer-Reviewed Journal Submission & Rapid Style Pivots",
    badge: "Publishing Agility",
    desc: "Reformat complex in-text citations and reference lists instantly when adapting manuscripts to new publisher guidelines.",
    benefits: [
      "One-click switching between numeric (Nature, IEEE) and author-date (APA, Harvard) systems",
      "Detects malformed URLs, broken DOIs, and mismatched author initial conventions",
      "Generates clean, validated .bib files with zero manual punctuation correction"
    ],
    highlight: "Eliminated desk rejections caused by citation style and bibliographic formatting non-compliance"
  },
  {
    title: "Grant Application Citation Auditing & Claim Verification",
    badge: "Funding Integrity",
    desc: "Verify that all preliminary data citations in multimillion-dollar grant applications are supported by reproducible peer literature.",
    benefits: [
      "Uses Scite.ai Smart Citations to identify contrasting studies before reviewers do",
      "Confirms that supporting papers have not been placed on Retraction Watch lists",
      "Exports clean, condensed reference summaries fitting strict grant character limits"
    ],
    highlight: "Protected lab reputation by catching 14 retracted paper citations prior to NIH submission"
  }
];

const glossaryTerms = [
  {
    term: "Smart Citations",
    definition: "An AI classification showing not just who cited a paper, but the exact quote and whether it supported, mentioned, or contrasted the claim."
  },
  {
    term: "Retraction Watch Integration",
    definition: "Automated database cross-referencing that alerts scholars when a paper in their active reference collection has been recalled or flagged for misconduct."
  },
  {
    term: "BibTeX Normalization",
    definition: "Algorithmic standardization of citation keys, special character escaping, and journal abbreviation title casing for error-free LaTeX rendering."
  },
  {
    term: "Citation Sentiment Analysis",
    definition: "NLP evaluation determining whether academic peers describe an empirical study positively, skeptically, or critically in subsequent literature."
  }
];

export default function AiCitationReferenceManagersGuide() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Calculator State
  const [weeklyCitations, setWeeklyCitations] = useState(40);
  const [hourlyRate, setHourlyRate] = useState(65);

  // Calculation formulas
  // Manual time: checking DOIs, formatting in-text citations, verifying retractions ~ 0.25 hrs (15 min) per citation
  // AI time: 0.03 hrs per citation (automated metadata fetching & style formatting)
  const manualHoursPerWeek = Math.round((weeklyCitations * 0.25) * 10) / 10;
  const aiHoursPerWeek = Math.round((weeklyCitations * 0.03) * 10) / 10;
  const hoursSavedWeekly = Math.max(0, Math.round((manualHoursPerWeek - aiHoursPerWeek) * 10) / 10);
  const annualDollarsSaved = Math.round(hoursSavedWeekly * hourlyRate * 48);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500/30 selection:text-purple-200">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 space-y-12 md:space-y-16">
        
        {/* HERO SECTION */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative text-center space-y-4 md:space-y-6 pt-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-medium">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>Citation Intelligence &amp; Bibliographic Integrity</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            AI Citation &amp; Reference Managers: <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Smart Citations &amp; Flawless Bibliographies
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
            Eliminate hours of manual bibliographic formatting, uncover whether subsequent research confirmed or refuted key claims, and shield your manuscripts from retracted citations with next-generation AI reference assistants.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="#matrix"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/25 hover:shadow-purple-500/35"
            >
              Compare Reference Managers
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-sm transition-all"
            >
              <Calculator className="w-4 h-4 text-purple-400" />
              Calculate Time Saved
            </Link>
          </div>
        </motion.section>

        {/* 1. PARADIGM SHIFT BENTO GRID (01/02/03) */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">The Citation Paradigm Shift</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              How AI transforms reference management from static folder filing to dynamic semantic claim validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1 */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors" />
              <div className="text-4xl font-black text-purple-500/20 mb-3">01</div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Search className="w-5 h-5 text-purple-400" />
                Smart Citation Context
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Traditional citation metrics count raw volume. AI reference engines inspect the citation sentence, labeling whether the citing author confirmed, cited in passing, or refuted the original paper.
              </p>
            </div>

            {/* Bento Card 2 */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors" />
              <div className="text-4xl font-black text-indigo-500/20 mb-3">02</div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-indigo-400" />
                Automated Retraction Defense
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Over 5,000 papers are retracted annually. Modern reference tools continuously scan your personal library against global retraction databases, alerting you before you cite discredited research.
              </p>
            </div>

            {/* Bento Card 3 */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
              <div className="text-4xl font-black text-cyan-500/20 mb-3">03</div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-cyan-400" />
                Multi-Style Instant Formatting
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Switch instantly between APA 7th, MLA 9th, Chicago, IEEE, and Nature styles without breaking in-text parentheticals or numbering. Missing DOI and journal metadata are resolved autonomously.
              </p>
            </div>
          </div>
        </section>

        {/* 2. INTERACTIVE IMPACT / ROI CALCULATOR */}
        <section id="calculator" className="p-6 md:p-10 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-purple-500/20 shadow-xl space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              Bibliographic Productivity Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Estimate Your Citation &amp; Audit Savings</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Calculate how many hours of manual reference formatting, DOI lookups, and retraction checks you can eliminate every week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center text-sm font-medium text-slate-300 mb-2">
                  <span>Weekly Citations &amp; Papers Managed:</span>
                  <span className="text-purple-400 font-bold text-base">{weeklyCitations} references</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="150"
                  step="5"
                  value={weeklyCitations}
                  onChange={(e) => setWeeklyCitations(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>10 refs (Single Essay)</span>
                  <span>75 refs (Journal Paper)</span>
                  <span>150+ refs (Thesis / Lab)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-sm font-medium text-slate-300 mb-2">
                  <span>Estimated Hourly Value of Academic Time:</span>
                  <span className="text-purple-400 font-bold text-base">${hourlyRate}/hr</span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="150"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>$25/hr (Grad Student)</span>
                  <span>$65/hr (Postdoc / Fellow)</span>
                  <span>$150/hr (PI / Senior Faculty)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-6 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <Timer className="w-5 h-5 text-purple-400 mx-auto mb-1.5" />
                <div className="text-2xl sm:text-3xl font-black text-white">{hoursSavedWeekly} hrs</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Weekly Time Saved</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <DollarSign className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">${annualDollarsSaved.toLocaleString()}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Annual Value Unlocked</div>
              </div>
              <div className="col-span-2 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                <span className="font-semibold text-purple-200">Integrity Dividend:</span> Protects research reputation by autonomously screening out retracted literature and disputed statistical proofs.
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE ARCHITECTURE (4 STEPS) */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">4-Step Citation Intelligence Pipeline</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              How AI engines capture, resolve, verify, and format scholarly citations across complex manuscripts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 font-bold flex items-center justify-center text-sm border border-purple-500/20">
                1
              </div>
              <h3 className="font-semibold text-white text-base">Metadata Ingestion</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Captures DOIs, arXiv IDs, and PubMed records with browser extensions or drag-and-drop PDF parsing.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 font-bold flex items-center justify-center text-sm border border-indigo-500/20">
                2
              </div>
              <h3 className="font-semibold text-white text-base">Semantic Context Analysis</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Evaluates millions of citation statements to label whether subsequent studies support, contrast, or mention claims.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold flex items-center justify-center text-sm border border-cyan-500/20">
                3
              </div>
              <h3 className="font-semibold text-white text-base">Retraction Screening</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Continuously queries Crossref, PubMed, and Retraction Watch to flag recalled papers, errata, or expressions of concern.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-500/20">
                4
              </div>
              <h3 className="font-semibold text-white text-base">Autonomic Formatting</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Compiles error-free bibliographies and in-text parentheticals across 10,000+ journal styles and BibTeX definitions.
              </p>
            </div>
          </div>
        </section>

        {/* 4. TOP 3 ALTERNATIVES MATRIX */}
        <section id="matrix" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Top 3 AI Citation &amp; Reference Platforms</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Comparing the premier academic platforms for citation context, bibliography generation, and collaborative syncing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Scite.ai */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/90 border-2 border-purple-500/40 relative space-y-4 shadow-xl shadow-purple-500/5">
              <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-bold tracking-wide flex items-center gap-1">
                <Crown className="w-3.5 h-3.5" />
                SMART CITATION LEADER
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Scite.ai</h3>
                <p className="text-xs text-purple-400 font-medium mt-0.5">Semantic Claim Validation</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                The premier citation intelligence platform. Analyzes over 1.2 billion citation contexts to reveal whether studies replicate or challenge underlying claims.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Smart Citations (supporting/contrasting)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Interactive reference graph &amp; network visualizer</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Browser extension for PubMed, Nature &amp; arXiv</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">Best for:</span> Peer-reviewed researchers, grant writers, and dissertation authors verifying empirical claims.
              </div>
            </div>

            {/* Zotero + AI */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white">Zotero + AI Ecosystem</h3>
                <p className="text-xs text-indigo-400 font-medium mt-0.5">Open-Source Research Hub</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                The open-source gold standard. Enhanced with Retraction Watch feeds, Better BibTeX for LaTeX/Overleaf, and LLM plugins for literature queries.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Native Retraction Watch database integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Better BibTeX live sync with Overleaf</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Free open-source storage &amp; community plugins</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">Best for:</span> LaTeX authors, STEM graduate students, and budget-conscious academic labs.
              </div>
            </div>

            {/* Paperpile */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white">Paperpile</h3>
                <p className="text-xs text-cyan-400 font-medium mt-0.5">Cloud Collaboration &amp; Google Docs</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Sleek, cloud-first reference manager built for seamless integration with Google Docs, Google Drive, and Chrome with automated PDF metadata fetching.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Flawless real-time Google Docs collaborative citations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>1-click Chrome extension with instant PDF parsing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Automated cloud backup to Google Drive</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">Best for:</span> Biomedical teams, multi-author co-writing, and Google Workspace researchers.
              </div>
            </div>
          </div>
        </section>

        {/* 5. TABBED USE CASES */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Real-World Academic Workflows</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              How graduate researchers, senior principal investigators, and publishing authors leverage AI citation managers.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 border-b border-slate-800 pb-3">
            {useCases.map((uc, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === index 
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/20" 
                    : "bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                {uc.badge}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-white">{useCases[activeTab].title}</h3>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold self-start sm:self-auto">
                {useCases[activeTab].badge}
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {useCases[activeTab].desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {useCases[activeTab].benefits.map((b, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-purple-300">
              <Zap className="w-4 h-4 text-purple-400 shrink-0" />
              <span>{useCases[activeTab].highlight}</span>
            </div>
          </div>
        </section>

        {/* 6. 4-STEP IMPLEMENTATION ROADMAP */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">4-Step Citation Modernization Roadmap</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Step-by-step guidance for transitioning your lab or research team to intelligent citation management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative">
              <div className="text-3xl font-black text-purple-500/20">STEP 1</div>
              <h3 className="font-bold text-white text-base">Consolidate Legacy Libraries</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Export existing references from EndNote, Mendeley, or legacy folders into unified RIS or BibTeX formats without losing notes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative">
              <div className="text-3xl font-black text-indigo-500/20">STEP 2</div>
              <h3 className="font-bold text-white text-base">Run Retraction Audit</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Connect your library to Retraction Watch or Scite.ai to flag any previously recalled manuscripts in your reference list.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative">
              <div className="text-3xl font-black text-cyan-500/20">STEP 3</div>
              <h3 className="font-bold text-white text-base">Connect Word &amp; Overleaf</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Install direct writing integrations into Microsoft Word, Google Docs, or Overleaf for seamless real-time citation insertion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative">
              <div className="text-3xl font-black text-emerald-500/20">STEP 4</div>
              <h3 className="font-bold text-white text-base">Verify Claim Support</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Perform Smart Citation checks on your 10 most crucial supporting arguments to confirm replicating studies outnumber contrasting ones.
              </p>
            </div>
          </div>
        </section>

        {/* 7. COMPARISON BRIDGE TABLE */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Feature Matrix: Traditional vs AI Reference Managers</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              How traditional reference managers compare to AI-powered citation intelligence engines.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-300 font-semibold">
                  <th className="p-4 sm:p-5">Capability</th>
                  <th className="p-4 sm:p-5 text-slate-400">Legacy Reference Managers</th>
                  <th className="p-4 sm:p-5 text-purple-400 font-bold">AI Citation Engines</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Citation Analysis</td>
                  <td className="p-4 sm:p-5 text-slate-400">Basic numerical citation counter (no context)</td>
                  <td className="p-4 sm:p-5 text-purple-300 font-medium">Smart Citations: Supporting, Contrasting, Mentioning</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Retraction Detection</td>
                  <td className="p-4 sm:p-5 text-slate-400">Manual review or delayed periodic sync</td>
                  <td className="p-4 sm:p-5 text-purple-300 font-medium">Real-time alerts against Retraction Watch &amp; Crossref</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Metadata Resolution</td>
                  <td className="p-4 sm:p-5 text-slate-400">Fails on obscure PDFs; manual entry required</td>
                  <td className="p-4 sm:p-5 text-purple-300 font-medium">Multimodal AI extracts DOIs, volume, and authors autonomously</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Journal Style Switching</td>
                  <td className="p-4 sm:p-5 text-slate-400">Style change frequently breaks custom fields</td>
                  <td className="p-4 sm:p-5 text-purple-300 font-medium">Instant conversion across 10,000+ CSL styles</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Overleaf &amp; LaTeX Sync</td>
                  <td className="p-4 sm:p-5 text-slate-400">Requires manual .bib file export/import</td>
                  <td className="p-4 sm:p-5 text-purple-300 font-medium">Continuous live BibTeX API synchronization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 8. GLOSSARY (4 TERMS) */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Key Academic Citation Terminology</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Essential concepts powering AI bibliographic intelligence and academic integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {glossaryTerms.map((g, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <h3 className="text-base font-bold text-purple-300 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-400 shrink-0" />
                  {g.term}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {g.definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. FAQ ACCORDION */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Clear answers to the most common questions regarding AI citation tools and bibliographic integrity.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-800 bg-slate-900/70 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 text-white hover:text-purple-300 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-purple-400 shrink-0 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-800/60 bg-slate-950/40 p-4 sm:p-5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* 10. CONVERSION CTA */}
        <section className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-slate-900 border border-purple-500/30 text-center space-y-6 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Upgrade Your Academic Reference Workflow
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our verified directory of top AI citation and reference managers. Protect your manuscripts from retractions and automate bibliography generation today.
            </p>
            <div className="pt-2">
              <Link
                href="/category/ai-research-tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-purple-600/30 hover:scale-[1.02]"
              >
                Browse All AI Research Tools
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
