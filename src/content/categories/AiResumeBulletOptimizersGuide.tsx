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
  ListOrdered, 
  ShieldCheck, 
  Award, 
  Target, 
  TrendingUp, 
  Users,
  Compass,
  Layers,
  Edit3
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI resume bullet optimizer and how does it improve my work history?",
    answer: "An AI resume bullet optimizer is a specialized writing assistant that transforms passive, task-oriented job duty bullets into high-impact, quantified accomplishments. Instead of generic phrases like 'responsible for managing team projects', the AI rewrites the line using Google's proven XYZ formula: 'Spearheaded 5 cross-functional engineering initiatives, accelerating product delivery velocity by 34% and cutting cloud infrastructure spend by $120k annually.'"
  },
  {
    question: "What are the best AI resume bullet optimizer tools in 2026?",
    answer: "Resume Worded is the industry leader for bullet impact scoring and verb strength analysis. Rezi AI offers instant bullet generation based on specific job titles and desired seniority. Teal AI provides an inline bullet improver with real-time keyword alignment. Wonsulting AI (ResumAI) is renowned for turning minimal student or early-career notes into polished corporate accomplishments."
  },
  {
    question: "How does the Google XYZ bullet formula work?",
    answer: "The XYZ formula was established by Google recruiting leadership: 'Accomplished [X] as measured by [Y] by doing [Z]'. [X] represents the outcome or goal achieved; [Y] represents the quantitative metric or baseline comparison; [Z] represents the specific tools, methodologies, or actions you executed to achieve the result."
  },
  {
    question: "How do I quantify my resume bullets if I don't have exact metrics or revenue numbers?",
    answer: "AI bullet optimizers help you estimate credible impact through proxies: time saved (e.g. 'reduced reporting turnaround from 5 days to 2 hours'), scale (e.g. 'audited codebase across 45 repositories'), frequency (e.g. 'resolved 80+ customer escalations weekly'), or percentage improvements in efficiency or user satisfaction."
  }
];

const useCases = [
  {
    title: "Rewriting Passive Job Duties into Quantified Achievements",
    badge: "Impact Elevation",
    desc: "Transform boring list-of-duties bullets into commercial accomplishments with clear business metrics, active power verbs, and concise phrasing.",
    benefits: [
      "Eliminates passive clichés like 'responsible for' and 'assisted with'",
      "Injects high-impact action verbs (e.g. Orchestrated, Engineered, Scaled)",
      "Applies Google's XYZ formula to provide concrete evidence of capability"
    ],
    highlight: "Elevated average resume bullet strength scores from 42/100 to 91/100"
  },
  {
    title: "Domain Keyword Weaving for Target Job Applications",
    badge: "ATS Alignment",
    desc: "Naturally weave required technical skills, software tools, and domain keywords into historical bullets without clumsy keyword stuffing.",
    benefits: [
      "Identifies contextually appropriate places to insert missing hard skills",
      "Ensures keywords demonstrate practical application rather than static lists",
      "Increases ATS semantic relevance scores across competitive recruiter filters"
    ],
    highlight: "Increased keyword relevance scores by 46% while maintaining natural flow"
  },
  {
    title: "Bullet Length Trimming & Visual White Space Balance",
    badge: "Recruiter Readability",
    desc: "Trim multi-line run-on sentences into crisp 1-to-2 line bullets that busy recruiters can scan in the initial 6-second resume review.",
    benefits: [
      "Removes conversational fluff words and unnecessary adverbs",
      "Prevents orphaned single words spilling onto awkward extra lines",
      "Improves overall page readability and executive visual balance"
    ],
    highlight: "Compressed 3 bloated pages into 2 crisp, high-density executive pages"
  }
];

const glossaryTerms = [
  {
    term: "Google XYZ Formula",
    definition: "A proven bullet structuring framework: 'Accomplished [X] as measured by [Y] by doing [Z]', demonstrating clear cause-and-effect commercial impact."
  },
  {
    term: "Active Power Verb",
    definition: "Dynamic action verbs (e.g., Spearheaded, Formulated, Overhauled) that replace weak, passive phrases like 'was tasked with' or 'worked on'."
  },
  {
    term: "Orphaned Line (Typographic Rag)",
    definition: "A formatting flaw where a single word spills onto a second line, wasting precious vertical resume space without adding substance."
  },
  {
    term: "6-Second Scan Test",
    definition: "The industry reality where human recruiters spend an average of 6 to 7.4 seconds initially scanning resume bullet headings and bolded metrics."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiResumeBulletOptimizersGuide() {
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
            Resume Copywriting & Bullet Scoring 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Resume Bullet Optimizers: <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">Transform Job Duties into Quantified Accomplishments</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Recruiters don&apos;t care what your job duties were—they care what you achieved. Discover how AI resume bullet optimizers use Google&apos;s XYZ formula to replace passive task lists with quantified, metric-driven accomplishments that win interviews.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Resume Copywriting Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How metric-focused accomplishment bullets replaced passive job duty descriptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Passive Job Duty Lists</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Applicants write &quot;Responsible for answering client inquiries and organizing weekly team meetings&quot;, telling recruiters what was assigned rather than what was achieved.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Vague Fluffy Buzzwords</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Bullets stuffed with empty adjectives like &quot;detail-oriented team player with excellent communication skills&quot; provide zero tangible proof of business value.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Quantified XYZ Proof</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              AI optimizers rewrite every bullet into concrete accomplishment metrics: &quot;Accelerated customer resolution speed by 42% through Zendesk workflow automation.&quot;
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
              Resume Impact & Recruiter Engagement Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Resume Screening Impact (20 Bullets Evaluated)</h2>
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
              Unoptimized Duty Bullets
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI XYZ-Optimized Accomplishments
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Recruiter Attention Duration
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "6.4 Seconds" : "45.0 Seconds"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Recruiters quickly scan and discard text walls with zero standout metrics" 
                : "Bold percentages and metrics anchor eyes, compelling full resume reading"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Quantified Accomplishments Included
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "2 of 20 Bullets" : "18 of 20 Bullets"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Most bullet points lack numbers, leaving business contributions unproven" 
                : "Every milestone backed by time saved, revenue increased, or scale achieved"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Hiring Manager Callback Rate
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "8.5%" : "36.2%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Passes initial glance but fails to excite engineering or sales leaders" 
                : "Commands immediate authority and fast-tracks applicant to phone screens"}
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
            How AI Rewrites Bullets for Maximum Impact
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl">
            A 4-step transformation turning vague responsibilities into undeniable commercial proof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Verb Power Upgrade</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Detects weak verbs (&quot;helped&quot;, &quot;managed&quot;) and replaces them with active leadership verbs (&quot;Architected&quot;, &quot;Negotiated&quot;, &quot;Overhauled&quot;).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Quantification Prompting</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The AI asks targeted follow-ups: &quot;How much time did this save? How many people used this? What was the budget?&quot; to discover metrics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">XYZ Synthesizing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Reassembles the components into Google&apos;s formula: Action Verb + Quantified Business Impact + Strategic Execution Methodology.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Brevity & Rag Auditing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Trims excess adverbs and tightens line wraps to ensure bullets fit cleanly within 1 or 2 lines without dangling orphan words.
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
            Top 3 AI Resume Bullet Optimizers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed head-to-head comparison of bullet rewriting and scoring tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Resume Worded */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 relative shadow-lg space-y-5">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              Scoring Gold Standard
            </div>
            <div>
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Impact & Metric Scoring</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Resume Worded</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Designed by top tech recruiters to score individual bullets on action verb strength, quantifiable results, repetition, and readability.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Instant bullet-by-bullet 0-100 impact score</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Flags repeated verbs and passive duty phrasing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Provides 250+ pre-approved executive action verbs</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Candidates wanting rigorous objective scoring on existing bullets.
            </div>
          </div>

          {/* Rezi AI */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Automated Generation</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Rezi AI Writer</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Generates complete, high-impact XYZ accomplishment bullets from scratch based on your job title, industry domain, and target seniority level.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>One-click AI bullet generation from job titles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Automated Google XYZ formula compliance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Seamless integration with Rezi&apos;s ATS-native builder</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Writing fresh accomplishment bullets from scratch with zero writer&apos;s block.
            </div>
          </div>

          {/* Teal AI */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Contextual Job Matching</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Teal Resume AI</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Inline bullet rewriting tool that analyzes target job descriptions in real time, rewording existing bullets to incorporate required keywords naturally.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Inline 1-click bullet improvement options</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Directly weaves missing job description keywords</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Integrated career hub & job application tracker</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Tailoring bullets to specific job postings inside an active job search tracker.
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
            High-Impact Bullet Optimization Deployments
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How job seekers transform weak task descriptions into interview magnets.
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
            Writer Playbook
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4 Steps to Rewriting Resume Bullets with AI
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From boring responsibilities to undeniable interview-winning proof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 1</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Audit Action Verbs</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Scan your existing bullets. Highlight every instance of &quot;assisted&quot;, &quot;managed&quot;, or &quot;responsible for&quot; and replace with active verbs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 2</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Quantify Business Results</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Estimate concrete metrics: dollars earned, hours saved, percentage efficiency gains, team members mentored, or system uptime achieved.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 3</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Run XYZ AI Rewriter</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Prompt the AI with your raw metrics. Generate 3 alternate bullet variations following the Google XYZ formula: Action &rarr; Result &rarr; Method.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 4</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Eliminate Overhangs</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Fine-tune character count so bullets fill 1 or 2 complete lines, eliminating single trailing words and maximizing vertical page economy.
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
            Before vs After: AI Resume Bullet Transformation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            See how AI bullet optimization transforms mundane responsibilities into powerful commercial achievements.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="p-4 sm:p-5">Role Domain</th>
                <th className="p-4 sm:p-5 text-rose-600 dark:text-rose-400">Before: Weak Duty Bullet</th>
                <th className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400">After: AI XYZ Accomplishment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Software Engineer</td>
                <td className="p-4 sm:p-5 text-slate-500">&quot;Responsible for writing backend APIs and fixing bug tickets in Jira.&quot;</td>
                <td className="p-4 sm:p-5 text-slate-900 dark:text-white font-medium">Architected 12 microservice REST APIs in Go, cutting p99 query latency by 45% across 2.4M daily active users.</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Product Marketing</td>
                <td className="p-4 sm:p-5 text-slate-500">&quot;Managed product launches and wrote blog posts and email newsletters.&quot;</td>
                <td className="p-4 sm:p-5 text-slate-900 dark:text-white font-medium">Spearheaded GTM launch for enterprise tier, driving 1,400+ qualified leads and generating $340k ARR in Q1.</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Customer Success</td>
                <td className="p-4 sm:p-5 text-slate-500">&quot;Answered customer support emails and helped with onboarding calls.&quot;</td>
                <td className="p-4 sm:p-5 text-slate-900 dark:text-white font-medium">Onboarded 65 enterprise accounts, maintaining a 98.4% CSAT score and slashing net revenue churn by 18%.</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Financial Analyst</td>
                <td className="p-4 sm:p-5 text-slate-500">&quot;Created quarterly financial models and monthly expense reports in Excel.&quot;</td>
                <td className="p-4 sm:p-5 text-slate-900 dark:text-white font-medium">Engineered automated three-statement DCF models, isolating $1.2M in OPEX redundancies across 4 subsidiaries.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. GLOSSARY TERMS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Key Resume Writing Terminology</h2>
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
            Everything you need to know about optimizing resume bullets with AI.
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
            Turn Duties into High-Impact Accomplishments
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Apply Google&apos;s XYZ formula to every bullet on your resume and start getting calls from top tech and corporate recruiters.
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
