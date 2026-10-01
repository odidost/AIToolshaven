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
  BookOpen, 
  FileText, 
  PenTool, 
  ShieldCheck, 
  Check, 
  HelpCircle, 
  ExternalLink,
  Target,
  TrendingUp,
  Layers,
  Search,
  Users,
  Feather
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI academic essay polisher and how does it differ from general writing tools like Grammarly?",
    answer: "Unlike general consumer grammar checkers that push writing toward informal or conversational styles, AI academic essay polishers are trained on millions of peer-reviewed journal articles across biomedical, technical, and humanities disciplines. They elevate academic vocabulary, optimize passive vs active voice conventions, ensure non-native English (ESL) phrasing sounds idiomatic to native peer reviewers, and verify adherence to COPE (Committee on Publication Ethics) guidelines."
  },
  {
    question: "What are the best AI academic essay polishers in 2026?",
    answer: "Paperpal is widely regarded as the gold standard for journal manuscript preparation, trained on 20+ years of scholarly publishing data and integrated with major academic publishers. Jenni AI excels at citation-guided academic co-writing and literature-grounded paragraph expansion. Trinka AI specializes in complex medical, STEM, and technical grammar conventions. Writefull provides deep structural feedback tailored to Springer, Elsevier, and Wiley submission standards."
  },
  {
    question: "Will using an AI academic polisher trigger AI content detectors or violate journal editorial policies?",
    answer: "Ethical academic polishers focus on language refinement, sentence restructuring, and grammar polishing rather than generating unverified scientific claims from scratch. Leading journals (including Nature, Science, and Elsevier) explicitly permit AI tools for language editing and readability improvements, provided authors retain full responsibility for scientific accuracy and disclose AI editing assistance where required by journal guidelines."
  },
  {
    question: "Can academic AI polishers preserve my personal scholarly voice and discipline-specific jargon?",
    answer: "Yes. Advanced academic polishers allow you to select your specific scientific domain (e.g., Molecular Biology, Macroeconomics, Analytical Chemistry, or Postcolonial Literature). This ensures discipline-specific terminology, specialized nomenclature, mathematical symbols, and Latin terms (e.g., 'in vivo', 'ceteris paribus') are preserved without improper colloquial substitutions."
  }
];

const useCases = [
  {
    title: "Non-Native English (ESL) Scholar Journal Readiness",
    badge: "ESL Publishing",
    desc: "Transform non-native research drafts into natural, native-sounding academic English that passes editorial desk review.",
    benefits: [
      "Replaces awkward literal translations with standard scholarly idioms and transitions",
      "Corrects subtle prepositions and discipline-specific phrasing nuances",
      "Eliminates reviewer complaints regarding English language proficiency"
    ],
    highlight: "Decreased peer review language revisions by 83% across international research cohorts"
  },
  {
    title: "Doctoral Dissertation Chapters & Thesis Polishing",
    badge: "Thesis Mastery",
    desc: "Polish 200+ page dissertations for tonal consistency, logical flow, and academic elegance across multiple committee members.",
    benefits: [
      "Unifies stylistic tone and authorial voice across chapters written over several years",
      "Prunes redundant prose, nominalizations, and repetitive academic filler phrases",
      "Ensures rigorous formatting compliance with university graduate school style guides"
    ],
    highlight: "Helped doctoral candidates complete final thesis defense revisions in days instead of weeks"
  },
  {
    title: "Fast-Turnaround Journal Rebuttals & Revisions",
    badge: "Rapid Response",
    desc: "Draft rigorous, courteous point-by-point author rebuttal letters addressing critical peer review comments under tight deadlines.",
    benefits: [
      "Calibrates respectful yet authoritative tone when disputing reviewer misunderstandings",
      "Rapidly rewrites questioned manuscript sections with improved clarity and empirical precision",
      "Validates that all reviewer concerns have been thoroughly and diplomatically addressed"
    ],
    highlight: "Accelerated revised manuscript resubmission cycle by an average of 6 days"
  }
];

const glossaryTerms = [
  {
    term: "COPE Compliance",
    definition: "Adherence to standards set by the Committee on Publication Ethics governing author attribution, transparency, and AI-assisted drafting."
  },
  {
    term: "Hedging Calibration",
    definition: "The deliberate academic modulation of claims using cautious language ('suggests', 'indicates') to avoid unverified overgeneralizations."
  },
  {
    term: "Nominalization Reduction",
    definition: "The transformation of wordy noun phrases back into active, engaging scientific verbs (e.g., 'performed an analysis of' &rarr; 'analyzed')."
  },
  {
    term: "Journal Submission Readiness Score",
    definition: "An algorithmic assessment auditing grammar, structural conventions, citation density, and abstract word counts before submission."
  }
];

export default function AiAcademicEssayPolishersGuide() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Calculator State
  const [papersPerYear, setPapersPerYear] = useState(4);
  const [editingCostPerPaper, setEditingCostPerPaper] = useState(450);

  // Calculation formulas
  // Professional human academic editing: $350 - $800 per paper, takes 5-7 days
  // AI Polish: $15/mo subscription ($180/yr) + instant turnaround
  const annualHumanCost = papersPerYear * editingCostPerPaper;
  const annualAiCost = 180;
  const annualDollarsSaved = Math.max(0, annualHumanCost - annualAiCost);
  const daysSavedPerYear = papersPerYear * 6; // 6 days turnaround saved per paper

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
            <span>Manuscript Polishing &amp; Journal Readiness</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            AI Academic Essay Polishers: <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Elevate Prose, Ensure Rigor &amp; Pass Peer Review
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
            Refine scholarly manuscripts, doctoral theses, and research papers with domain-trained AI editors. Optimize academic tone, polish ESL phrasing, and eliminate language-based journal rejections.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="#matrix"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/25 hover:shadow-purple-500/35"
            >
              Compare Essay Polishers
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-sm transition-all"
            >
              <Calculator className="w-4 h-4 text-purple-400" />
              Calculate Proofreading Savings
            </Link>
          </div>
        </motion.section>

        {/* 1. PARADIGM SHIFT BENTO GRID (01/02/03) */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">The Academic Polishing Paradigm Shift</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Why generic grammar tools fail in peer-reviewed scientific publishing—and how academic AI solves it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1 */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors" />
              <div className="text-4xl font-black text-purple-500/20 mb-3">01</div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Feather className="w-5 h-5 text-purple-400" />
                Domain-Trained Vocabulary
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Trained on millions of published peer-reviewed papers across 300+ fields. Understands nuanced scientific terminology without vulgarizing complex technical arguments.
              </p>
            </div>

            {/* Bento Card 2 */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors" />
              <div className="text-4xl font-black text-indigo-500/20 mb-3">02</div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
                Ethical COPE Compliance
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Refines rhetoric and eliminates awkward phrasing while preserving authentic author voice. Meets strict editorial standards of Nature, Elsevier, and Springer without hallucination.
              </p>
            </div>

            {/* Bento Card 3 */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
              <div className="text-4xl font-black text-cyan-500/20 mb-3">03</div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <PenTool className="w-5 h-5 text-cyan-400" />
                Native Academic Idiomatic Flow
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Identifies non-native sentence structures and converts them into natural academic prose, protecting international authors from language-biased desk rejections.
              </p>
            </div>
          </div>
        </section>

        {/* 2. INTERACTIVE IMPACT / ROI CALCULATOR */}
        <section id="calculator" className="p-6 md:p-10 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-purple-500/20 shadow-xl space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              Academic Proofreading Savings Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Compare Human Proofreading Fees vs AI Polishers</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Calculate your annual savings across human copyediting service bills and submission turnaround delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center text-sm font-medium text-slate-300 mb-2">
                  <span>Manuscripts / Grant Proposals Drafted Annually:</span>
                  <span className="text-purple-400 font-bold text-base">{papersPerYear} papers</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={papersPerYear}
                  onChange={(e) => setPapersPerYear(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1 (PhD Defense)</span>
                  <span>4 (Active Researcher)</span>
                  <span>12 (Prolific Lab Core)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-sm font-medium text-slate-300 mb-2">
                  <span>Average Professional Proofreading Fee Per Paper:</span>
                  <span className="text-purple-400 font-bold text-base">${editingCostPerPaper}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="900"
                  step="25"
                  value={editingCostPerPaper}
                  onChange={(e) => setEditingCostPerPaper(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>$200 (Basic Grammar)</span>
                  <span>$450 (Standard Academic Edit)</span>
                  <span>$900 (High-Impact Medical Edit)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-6 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <Timer className="w-5 h-5 text-purple-400 mx-auto mb-1.5" />
                <div className="text-2xl sm:text-3xl font-black text-white">{daysSavedPerYear} days</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Turnaround Time Saved</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <DollarSign className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">${annualDollarsSaved.toLocaleString()}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Net Financial Savings</div>
              </div>
              <div className="col-span-2 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                <span className="font-semibold text-purple-200">Velocity Dividend:</span> Submit revised papers within hours of peer review feedback, accelerating publication cycles by weeks.
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE ARCHITECTURE (4 STEPS) */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">4-Step Manuscript Refinement Pipeline</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              How dedicated academic polishers systematically elevate scientific prose from draft to submission readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 font-bold flex items-center justify-center text-sm border border-purple-500/20">
                1
              </div>
              <h3 className="font-semibold text-white text-base">Discipline Calibration</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Select your academic subfield to prime the AI with domain vocabulary, style guides, and notation conventions.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 font-bold flex items-center justify-center text-sm border border-indigo-500/20">
                2
              </div>
              <h3 className="font-semibold text-white text-base">Rhetorical Polishing</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Prunes passive nominalizations, refines sentence transitions, and eliminates repetitive filler phrases.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold flex items-center justify-center text-sm border border-cyan-500/20">
                3
              </div>
              <h3 className="font-semibold text-white text-base">Hedging &amp; Claim Audit</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Ensures empirical claims are appropriately hedged to satisfy rigorous peer reviewer skepticism.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-500/20">
                4
              </div>
              <h3 className="font-semibold text-white text-base">Editorial Compliance Check</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Scans for abstract length limits, structured headings, journal formatting rules, and disclosure notes.
              </p>
            </div>
          </div>
        </section>

        {/* 4. TOP 3 ALTERNATIVES MATRIX */}
        <section id="matrix" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Top 3 AI Academic Essay Polishers</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Comparing leading platforms specialized in scholarly manuscript refinement, academic tone, and journal compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Paperpal */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/90 border-2 border-purple-500/40 relative space-y-4 shadow-xl shadow-purple-500/5">
              <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-bold tracking-wide flex items-center gap-1">
                <Crown className="w-3.5 h-3.5" />
                ACADEMIC GOLD STANDARD
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Paperpal</h3>
                <p className="text-xs text-purple-400 font-medium mt-0.5">Publisher-Integrated Journal Polisher</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Trained on millions of peer-reviewed articles from major publishers. Delivers in-depth manuscript language checks and automated journal submission readiness scores.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Microsoft Word &amp; web manuscript integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Automated journal readiness audit &amp; compliance report</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>300+ discipline vocabularies (Biomed, STEM, Humanities)</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">Best for:</span> Peer-reviewed journal authors, ESL researchers, and doctoral manuscript submissions.
              </div>
            </div>

            {/* Jenni AI */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white">Jenni AI</h3>
                <p className="text-xs text-indigo-400 font-medium mt-0.5">Citation-Guided Academic Co-Writer</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Combines sentence-level academic polishing with real-time scholarly citation suggestions, literature expansion, and counter-argument drafting.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>In-line academic citation lookups &amp; auto-formatting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Tonal adjustments (persuasive, academic, objective)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Interactive Socratic research assistant chat</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">Best for:</span> Graduate students, literature review drafting, and thesis essay development.
              </div>
            </div>

            {/* Trinka AI */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white">Trinka AI</h3>
                <p className="text-xs text-cyan-400 font-medium mt-0.5">Technical &amp; Medical Grammar Engine</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Specialized in technical, medical, and scientific writing, correcting complex subject-verb agreements, AMA/APA guidelines, and scientific phrasing.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Medical and clinical terminology error correction</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Publication check against journal technical guidelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Automated citation and reference cross-check</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">Best for:</span> Medical researchers, clinical scribes, and engineering journal contributors.
              </div>
            </div>
          </div>
        </section>

        {/* 5. TABBED USE CASES */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Scholarly Author Use Cases</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              How researchers across institutions utilize AI academic polishers to streamline publishing.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white">4-Step Manuscript Polishing Workflow</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              How to polish your draft manuscript and verify submission compliance before sending to peer review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative">
              <div className="text-3xl font-black text-purple-500/20">STEP 1</div>
              <h3 className="font-bold text-white text-base">Complete First Draft</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Assemble your empirical results, citations, and core arguments without worrying about stylistic perfection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative">
              <div className="text-3xl font-black text-indigo-500/20">STEP 2</div>
              <h3 className="font-bold text-white text-base">Run Paperpal / Trinka</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Scan through Microsoft Word add-in or web editor to resolve passive nominalizations and awkward phrases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative">
              <div className="text-3xl font-black text-cyan-500/20">STEP 3</div>
              <h3 className="font-bold text-white text-base">Tone &amp; Hedging Audit</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Ensure controversial conclusions are appropriately nuanced with proper hedging language to satisfy skeptical reviewers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative">
              <div className="text-3xl font-black text-emerald-500/20">STEP 4</div>
              <h3 className="font-bold text-white text-base">Export Readiness Report</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Generate the automated journal readiness audit, verify word counts, and confirm ethical compliance disclosure statements.
              </p>
            </div>
          </div>
        </section>

        {/* 7. COMPARISON BRIDGE TABLE */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Feature Matrix: General Grammar vs Academic Polishers</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Why specialized academic AI tools surpass standard consumer grammar engines for research manuscripts.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-300 font-semibold">
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5 text-slate-400">General Grammar Tools (Grammarly)</th>
                  <th className="p-4 sm:p-5 text-purple-400 font-bold">Academic Polishers (Paperpal, Trinka)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Target Writing Style</td>
                  <td className="p-4 sm:p-5 text-slate-400">General business, consumer, and casual prose</td>
                  <td className="p-4 sm:p-5 text-purple-300 font-medium">Formal scholarly literature across 300+ subfields</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Scientific Jargon Handling</td>
                  <td className="p-4 sm:p-5 text-slate-400">Flags valid technical terms as misspellings or wordy</td>
                  <td className="p-4 sm:p-5 text-purple-300 font-medium">Accurately identifies discipline nomenclature and symbols</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Academic Hedging</td>
                  <td className="p-4 sm:p-5 text-slate-400">Suggests removing cautious words to sound &quot;confident&quot;</td>
                  <td className="p-4 sm:p-5 text-purple-300 font-medium">Recommends appropriate scientific hedging and modesty</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Journal Readiness Audit</td>
                  <td className="p-4 sm:p-5 text-slate-400">None (general readability score only)</td>
                  <td className="p-4 sm:p-5 text-purple-300 font-medium">Audits abstract limits, references, and COPE compliance</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">ESL Scholarly Idioms</td>
                  <td className="p-4 sm:p-5 text-slate-400">Basic syntax correction only</td>
                  <td className="p-4 sm:p-5 text-purple-300 font-medium">Translates non-native rhetorical flow into native peer style</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 8. GLOSSARY (4 TERMS) */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Key Academic Writing &amp; Publishing Terms</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Essential concepts governing scholarly prose refinement and journal editorial compliance.
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
              Practical answers on using AI academic essay polishers effectively and ethically in academic research.
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
              Publish Your Research with Confidence
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our verified selection of AI academic essay polishers. Ensure your manuscript meets international peer-review standards and avoids language desk rejections.
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
