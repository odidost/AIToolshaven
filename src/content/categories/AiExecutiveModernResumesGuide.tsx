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
  Award, 
  Target, 
  TrendingUp, 
  Users,
  Compass,
  Layers,
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What distinguishes an executive resume builder from standard resume tools?",
    answer: "An executive resume builder is specifically designed for Director, VP, and C-suite leaders. Instead of focusing on task-based job descriptions, it highlights P&L responsibility, organizational transformation, revenue growth milestones, board governance, and strategic vision. It utilizes sophisticated, modern typography and clean editorial layouts that convey executive gravitas to executive search firms and board search committees."
  },
  {
    question: "What are the best modern executive resume builders in 2026?",
    answer: "Enhancv is the premier platform for modern executive storytelling, allowing leaders to feature career timelines, core leadership philosophies, and quantified commercial achievements. Novoresume provides sleek, professional layouts optimized for senior corporate leaders. FlowCV offers pixel-perfect typography and margin controls with zero paywalls for formatting. Kickresume blends AI copywriting with curated templates tailored for global leadership roles."
  },
  {
    question: "Should an executive resume still be strictly one page?",
    answer: "No. For executives with 15+ years of leadership experience, a two-page or three-page resume is the accepted global standard among retained executive search firms (like Korn Ferry, Spencer Stuart, and Heidrick & Struggles). The key is front-loading Page 1 with an impactful Executive Career Summary and a quantified Career Highlights grid."
  },
  {
    question: "How do modern executive builders maintain ATS compliance while offering premium design?",
    answer: "Modern executive builders use structured semantic single-column and hybrid layouts. Behind the sleek visual design, the underlying PDF structure uses standard text streams, standard fonts (e.g. Garamond, Inter, Merriweather), and unambiguous section headings, allowing both automated ATS scanners and human executive recruiters to read the document flawlessly."
  }
];

const useCases = [
  {
    title: "C-Suite & VP Career Transition Narrative",
    badge: "Executive Leadership",
    desc: "Frame a 20-year career into a compelling strategic narrative highlighting P&L management, enterprise M&A, and cross-functional organizational growth.",
    benefits: [
      "Highlights enterprise EBITDA improvements and capital raise achievements",
      "Executive summary section positioning leadership competencies upfront",
      "Sophisticated editorial typography that commands attention on executive desks"
    ],
    highlight: "Helped over 1,800 VP and C-level candidates secure retained executive search interviews"
  },
  {
    title: "Board of Directors & Advisory CV Assembly",
    badge: "Board Governance",
    desc: "Create an authoritative 1-to-2 page Board Bio highlighting corporate governance experience, audit committee qualifications, and industry expertise.",
    benefits: [
      "Dedicated sections for Committee Assignments and Governance Leadership",
      "Streamlined layout focusing on advisory impact and strategic stewardship",
      "Designed specifically for nominating committees and executive recruiters"
    ],
    highlight: "Preferred format for corporate nominating committees and PE operating partner searches"
  },
  {
    title: "High-Growth Startup Tech Leadership Profiles",
    badge: "Tech Executives",
    desc: "Showcase scaling engineering organizations from Series A to IPO, highlighting system scalability, headcount growth, and cloud cost efficiency.",
    benefits: [
      "Visual timeline milestones highlighting company funding rounds and scale",
      "Technical leadership matrices pairing managerial oversight with tech vision",
      "Clean modern aesthetic preferred by venture-backed tech recruiters"
    ],
    highlight: "Secured multiple VP of Engineering and CTO offers at unicorn tech startups"
  }
];

const glossaryTerms = [
  {
    term: "Executive Summary Header",
    definition: "A high-impact introductory section summarizing an executive's total P&L scope, primary industry domain, and marquee career achievements in 3 to 4 sentences."
  },
  {
    term: "Core Competency Matrix",
    definition: "A clean 2-column or 3-column grid highlighting senior leadership capabilities such as M&A Integration, Strategic Planning, and Global Team Leadership."
  },
  {
    term: "Retained Executive Search",
    definition: "Specialized recruitment firms hired exclusively by corporate boards and CEOs to recruit senior vice presidents, presidents, and C-suite officers."
  },
  {
    term: "Editorial Typography",
    definition: "High-end typographic styling using professional font pairings (e.g. serif headings paired with clean sans-serif body text) that exude executive polish."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiExecutiveModernResumesGuide() {
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
            Executive Leadership & Board CVs 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Executive Resume Builders: <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">Command Authority with High-Impact Leadership CVs</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Senior leadership positions require more than bulleted task lists. Discover how modern executive resume platforms craft authoritative career narratives, highlight enterprise P&L impact, and capture the attention of executive search partners and boards.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Executive Resume Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How modern executive resumes evolved from dated chronologies into strategic leadership portfolios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Cluttered 5-Page Chronologies</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Executives list every individual job responsibility dating back to their 1998 internship, burying strategic triumphs beneath a mountain of irrelevant clerical details.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Over-Designed Creative Templates</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Templates with colorful skill progress bars, headshot photos, and complex sidebars break corporate ATS parsers and look amateurish to retained search committees.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Modern Editorial Leadership</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Enhancv and Novoresume combine crisp editorial typography, executive summary callouts, and quantified commercial milestones that exude leadership authority.
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
              Executive Job Search Velocity Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Executive Search Momentum ($250k+ Roles)</h2>
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
              Executive Writing Agency ($1,500+)
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Modern AI Executive Builder (Enhancv/Novoresume)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Turnaround Time to Final Executive CV
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "3 to 4 Weeks" : "45 Minutes"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Multiple lengthy interview intakes and slow multi-round agency drafts" 
                : "Interactive AI prompt refinement tailored to your career milestones"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Total Financial Cost
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$1,800 - $3,500" : "$19 - $25"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Expensive boutique executive resume writer fees" 
                : "Single month platform access with unlimited variations and exports"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Search Partner Callback Rate
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "18%" : "38%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Standard text-heavy agency templates that fail to stand out visually" 
                : "Polished editorial layout highlighting marquee P&L milestones instantly"}
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE ARCHITECTURE */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <BookOpen className="w-4 h-4" />
            Under the Hood
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Anatomy of an Executive Career Portfolio
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl">
            How modern executive builders structure leadership achievements for maximum recruiter impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Executive Value Hook</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              A 3-sentence summary establishing your leadership thesis, total revenue/headcount scope, and specialized industry domain authority.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Core Competency Matrix</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              A structured grid of executive capabilities (e.g. M&A Integration, Board Reporting, Global P&L) for instant recruiter scannability.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">P&L & Transformation Proof</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Quantified accomplishment bullets focused on EBITDA growth, market expansion, operational efficiency, and cultural transformation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Governance & Advisory</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Dedicated sections highlighting board committee appointments, advisory roles, keynotes, patents, and executive education.
            </p>
          </div>
        </div>
      </section>

      {/* 4. TOP 3 ALTERNATIVES MATRIX */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Award className="w-4 h-4" />
            Platform Benchmark
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 Modern Executive Resume Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed head-to-head comparison of premium leadership resume tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Enhancv */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 relative shadow-lg space-y-5">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              Executive Favorite
            </div>
            <div>
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Visual Leadership Storytelling</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Enhancv</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The premier platform for senior leadership storytelling. Offers modular timeline sections, philosophy callouts, and sophisticated editorial styling.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Executive career timeline & philosophy callout sections</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Editorial typography designed for high readability</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Integrated AI content enhancer suggesting impact metrics</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> VPs, C-suite officers, and startup tech executives.
            </div>
          </div>

          {/* Novoresume */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Clean Corporate Polish</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Novoresume</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Built for senior corporate leaders desiring timeless, understated elegance. Strict single-page or two-page constraints prevent formatting creep.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Strict page optimization optimizer that prevents spillover</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Clean traditional corporate styling favored by finance & legal</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Customizable executive summary & board advisory modules</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Managing directors in finance, consulting, and traditional enterprise.
            </div>
          </div>

          {/* FlowCV */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pixel-Perfect Control</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">FlowCV</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Offers unprecedented design customization without coding. Adjust line heights, letter spacing, margins, and column ratios with micro-precision.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Micro-control over line spacing, margins, and font weights</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>High-density layouts that fit 20 years into 2 clean pages</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Generous free tier with vector-quality PDF downloads</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Detail-oriented executives demanding exact visual layout control.
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE USE CASES TABBED */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Target className="w-4 h-4" />
            Field-Proven Workflows
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            High-Impact Executive Resume Strategies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How leaders position their career milestones for retained search firms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            {useCases.map((uc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveUseCase(idx)}
                className={`w-full text-left p-4 rounded-xl transition-all ${
                  activeUseCase === idx 
                    ? "bg-white dark:bg-slate-800 shadow-md border-l-4 border-indigo-600 dark:border-indigo-400 text-slate-900 dark:text-white"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800/40 text-slate-600 dark:text-slate-400"
                }`}
              >
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{uc.badge}</div>
                <div className="font-semibold text-sm sm:text-base">{uc.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                {useCases[activeUseCase].badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {useCases[activeUseCase].title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                {useCases[activeUseCase].desc}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Key Capabilities</h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <div className="text-xs sm:text-sm font-medium text-indigo-950 dark:text-indigo-200">
                {useCases[activeUseCase].highlight}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Compass className="w-4 h-4" />
            Leadership Playbook
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4 Steps to Crafting an Executive Resume
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From fragmented career history to a commanding executive portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 1</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Define Leadership Scope</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Quantify your total scope: P&L managed ($M), team size, global regions, and primary business transformation domain.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 2</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Build Page 1 Value Hub</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Place your Executive Summary, Core Competencies matrix, and Top 4 Career Highlights on Page 1 before job chronologies.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 3</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Refine Commercial Proof</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Rewrite job bullets to lead with commercial metrics: EBITDA growth, operating margin expansion, and enterprise valuation multiples.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 4</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Apply Editorial Polish</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Select premium typography pairings (e.g. Merriweather + Inter) and export a crisp vector PDF ready for board review.
            </p>
          </div>
        </div>
      </section>

      {/* 7. COMPARISON BRIDGE */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Layers className="w-4 h-4" />
            Strategic Evaluation
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Modern Executive Builders vs Boutique Resume Agencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why tech and enterprise executives increasingly build their own CVs with modern AI software.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-indigo-600 dark:text-indigo-400">Modern AI Executive Builder (Enhancv/Novoresume)</th>
                <th className="p-4 sm:p-5">Boutique Executive Resume Agency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Cost & Retainers</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">$19 - $30 / month</td>
                <td className="p-4 sm:p-5 text-slate-500">$2,000 - $4,500 upfront fee</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Turnaround Speed</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Under 1 hour to complete customized CV</td>
                <td className="p-4 sm:p-5 text-slate-500">3 to 4 weeks across intake calls & revisions</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Iteration Flexibility</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Instant 1-click tailoring for CEO, COO, or Board versions</td>
                <td className="p-4 sm:p-5 text-slate-500">Requires purchasing separate packages for alternate versions</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Design & Typography</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Award-winning editorial layouts with micro-margin controls</td>
                <td className="p-4 sm:p-5 text-slate-500">Often deliver outdated, plain Microsoft Word templates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. GLOSSARY TERMS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Key Executive Career Concepts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {glossaryTerms.map((term, i) => (
            <div key={i} className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <div className="font-semibold text-indigo-600 dark:text-indigo-400 text-sm">{term.term}</div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{term.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Everything you need to know about crafting senior leadership resumes.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div key={idx} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-indigo-600" : "text-slate-400"}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-100 dark:border-slate-800 px-4 sm:px-5 py-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-950 p-8 md:p-12 text-center text-white space-y-6 border border-indigo-500/20 shadow-xl">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Elevate Your Leadership Presence
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Build an authoritative, high-impact executive resume that commands attention in corporate boardrooms.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/category/ai-resume-builders"
            className="px-6 py-3 rounded-xl bg-white text-indigo-900 font-semibold text-sm hover:bg-slate-100 transition-all flex items-center gap-2 shadow-sm"
          >
            Explore AI Resume Builders
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/category/productivity"
            className="px-6 py-3 rounded-xl bg-indigo-800/60 hover:bg-indigo-700/60 text-white font-semibold text-sm border border-indigo-400/30 transition-all"
          >
            View Productivity Category
          </Link>
        </div>
      </section>

    </div>
  );
}
