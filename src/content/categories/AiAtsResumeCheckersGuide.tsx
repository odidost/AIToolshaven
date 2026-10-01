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
  FileCheck, 
  FileText, 
  ShieldAlert, 
  Award, 
  Target, 
  TrendingUp, 
  Users,
  Compass,
  Layers,
  Search
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI ATS resume checker and how does it screen applications?",
    answer: "An AI ATS (Applicant Tracking System) resume checker simulates the parsing algorithms used by corporate recruiting software (like Greenhouse, Lever, Workday, and Taleo). It analyzes your resume against a target job description, identifying missing hard skills, evaluating semantic keyword density, checking section formatting readability, and providing a quantified match rate score to ensure your application passes automated recruiter screening filters."
  },
  {
    question: "What are the best AI ATS resume checkers in 2026?",
    answer: "Jobscan is the industry standard for side-by-side resume vs job description comparison and keyword matching. Resume Worded provides instant line-by-line feedback on impact, metrics, and bullet verb strength. Rezi offers an ATS-native resume builder with built-in AI keyword optimization and zero-formatting-error guarantees. Teal provides a comprehensive career hub with real-time resume keyword matching and job tracking."
  },
  {
    question: "What formatting mistakes commonly cause ATS parsers to reject resumes?",
    answer: "The most common ATS parsing errors include placing vital contact information inside page headers/footers, using multi-column tables or text boxes that scramble reading order, inserting graphics or progress bars to represent skills, and using non-standard section headings (e.g., using 'My Journey' instead of 'Work Experience')."
  },
  {
    question: "Should I submit my resume as a PDF or Microsoft Word (.docx) file for ATS systems?",
    answer: "In 2026, modern ATS systems parse clean PDFs without issue. However, if a job portal explicitly requests a .docx file or uses legacy Taleo architecture, submitting an unformatted .docx file guarantees 100% text extraction accuracy without font rendering glitches."
  }
];

const useCases = [
  {
    title: "Targeted Job Description Keyword Optimization",
    badge: "ATS Optimization",
    desc: "Paste the exact job description of your dream role. The AI scans both texts, highlighting missing technical skills and recommending high-impact insertions.",
    benefits: [
      "Identifies exact hard skills and acronyms required by the employer",
      "Calculates a real-time 0-100% ATS match score before you submit",
      "Suggests natural phrasing to integrate keywords without awkward stuffing"
    ],
    highlight: "Increased interview callback rates from 6% to 28% across 1,200 tech applicants"
  },
  {
    title: "Formatting & Parsing Readability Audit",
    badge: "Error Prevention",
    desc: "Verify that complex layouts, bullet points, dates, and job titles parse cleanly into recruiter database fields without scrambled text.",
    benefits: [
      "Simulates Workday and Greenhouse text extraction previews",
      "Detects unreadable tables, columns, and embedded graphic errors",
      "Ensures contact emails and LinkedIn URLs parse into correct CRM fields"
    ],
    highlight: "Eliminated 100% of auto-rejection parsing errors for senior engineering roles"
  },
  {
    title: "Executive Bullet Impact & Metrics Scoring",
    badge: "Content Elevation",
    desc: "Analyze resume bullets for action-oriented verbs, quantified business impact, and leadership competencies using executive scoring rubrics.",
    benefits: [
      "Flags passive voice phrases like 'responsible for' or 'assisted with'",
      "Recommends XYZ formula rewrites: Accomplished [X], measured by [Y], by doing [Z]",
      "Scores bullet brevity, punchiness, and readability for busy recruiters"
    ],
    highlight: "Transformed 4,500 bland job duty bullets into quantified commercial accomplishments"
  }
];

const glossaryTerms = [
  {
    term: "Applicant Tracking System (ATS)",
    definition: "Recruitment software that collects, sorts, parses, and ranks job applications, filtering out resumes that fail basic keyword or formatting benchmarks."
  },
  {
    term: "Hard Skill Keyword Density",
    definition: "The frequency and prominence of specific technical tools, methodologies, and certifications (e.g. Python, SOC2, PMP) requested in the job post."
  },
  {
    term: "Parsing Text Preview",
    definition: "A plain-text representation of how an ATS interprets a resume after stripping away visual styles, fonts, columns, and graphics."
  },
  {
    term: "XYZ Bullet Formula",
    definition: "Google's recommended resume writing framework: 'Accomplished [X] as measured by [Y] by doing [Z]', emphasizing quantified results over duties."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiAtsResumeCheckersGuide() {
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
            ATS Optimization & Recruiter Screening 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI ATS Resume Checkers: <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">Beat the Screening Bots & Land More Interviews</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Over 75% of resumes are rejected by applicant tracking systems before a human recruiter ever sees them. Discover how AI ATS resume checkers audit keyword match rates, fix hidden parsing errors, and optimize your bullets for maximum interview callbacks.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Job Application Screening Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How algorithmic resume optimization defeated the black hole of job applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">The ATS Black Hole</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Job seekers send the same generic PDF to 100 companies, getting auto-rejected in minutes because automated ATS filters fail to match required keywords.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Manual Keyword Guessing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Applicants spend hours reading job descriptions, trying to guess which acronyms matter, often stuffing keywords unnaturally and getting flagged by recruiters.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Algorithmic Match Scoring</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Jobscan and Rezi simulate enterprise ATS parsers, providing quantified 0-100% match scores, fixing parsing glitches, and rewording bullets to guarantee human review.
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
              Job Search Efficiency & Interview Rate Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Application Callback Rates (50 Applications)</h2>
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
              Unoptimized Generic Resume
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI ATS-Optimized Resume (Jobscan/Rezi)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Interview Screening Pass Rate
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "6.2%" : "34.5%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Most applications auto-rejected by ATS algorithms for missing hard skills" 
                : "Passes initial 80%+ match threshold and lands directly in human recruiter queue"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              First-Round Interviews Secured
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "3 Interviews" : "17 Interviews"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Low callback volume leads to job search fatigue and prolonged unemployment" 
                : "Creates competing job offers and higher compensation negotiation leverage"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Weeks to Signed Offer
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "22 Weeks" : "7 Weeks"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Painful multi-month cycles waiting for callbacks that never arrive" 
                : "Rapid momentum with multiple hiring managers reaching out simultaneously"}
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
            How AI ATS Checkers Reverse-Engineer Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl">
            A comprehensive four-tier scan that mirrors the exact filtering logic of Workday, Taleo, and Greenhouse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Text Parsing Emulation</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Converts PDF/Word files into raw text, verifying that dates, company names, and contact emails parse into proper database columns.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">NLP Entity Extraction</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Compares job description requirements against resume text, identifying matching hard skills, soft skills, and industry certifications.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Format Hygiene Audit</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Checks for problematic tables, text boxes, non-standard section headers, multi-columns, and missing contact information.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Quantified Match Score</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Delivers an overall match percentage score alongside exact line-by-line recommendations for bullet improvements.
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
            Top 3 AI ATS Resume Checkers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed head-to-head comparison of modern resume screening software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Jobscan */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 relative shadow-lg space-y-5">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              ATS Gold Standard
            </div>
            <div>
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Side-by-Side Match Engine</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Jobscan</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The original and most comprehensive ATS simulator. Compares your resume against target job descriptions with exact keyword frequency and formatting feedback.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Simulates exact Workday, Taleo, & Greenhouse ATS algorithms</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Side-by-side hard skill & soft skill missing keyword checklist</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>LinkedIn profile optimization score & recommendations</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Serious job seekers targeting competitive corporate & tech roles.
            </div>
          </div>

          {/* Rezi */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">ATS-Native Builder</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Rezi AI</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              End-to-end resume builder designed from the ground up to guarantee 100% ATS readability, featuring real-time AI bullet writing and keyword optimization.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Guaranteed zero-error ATS formatting templates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>AI bullet generator that writes quantified accomplishments</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Targeted job description keyword integration tool</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Job seekers building a new resume from scratch with guaranteed ATS compliance.
            </div>
          </div>

          {/* Resume Worded */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Line-by-Line Feedback</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Resume Worded</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Designed by top Silicon Valley recruiters. Provides detailed line-by-line feedback on impact verbs, quantifiable metrics, style repetition, and executive presence.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Instant bullet-by-bullet impact & brevity scoring</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Identifies weak verbs and passive voice phrasing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Executive scorecards benchmarked against top 10% resumes</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Mid-to-senior professionals refining existing resume content.
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
            High-Impact Resume Optimization Strategies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How job seekers leverage AI checkers to consistently land first-round recruiter interviews.
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
            Applicant Playbook
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4 Steps to an 85%+ ATS Match Score
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From raw resume upload to confident job portal submission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 1</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Upload & Parse Check</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Upload your current resume. Check the raw text preview to confirm dates, job titles, and contact information extract cleanly.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 2</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Paste Target Job Post</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Copy and paste the exact job description. Review the missing hard skills, software tools, and domain keywords highlighted in red.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 3</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Integrate Missing Skills</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Weave missing hard skills naturally into work experience bullets and technical skills sections until your match score exceeds 80%.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 4</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Export Clean PDF</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Export the optimized resume in a single-column, ATS-verified format and submit with confidence knowing your resume will be seen.
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
            AI ATS Checkers vs Manual Resume Tailoring
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why algorithmic optimization outperforms manual guesswork every time.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-indigo-600 dark:text-indigo-400">AI ATS Checker (Jobscan/Rezi)</th>
                <th className="p-4 sm:p-5">Manual Keyword Guessing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Keyword Accuracy</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Exact NLP term extraction matching recruiter search queries</td>
                <td className="p-4 sm:p-5 text-slate-500">Subjective guessing; frequently misses vital industry acronyms</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Parsing Error Detection</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Simulates Workday/Greenhouse parsers to flag unreadable tables</td>
                <td className="p-4 sm:p-5 text-slate-500">Zero visibility into whether your PDF is corrupted or unreadable</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Optimization Speed</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Under 3 minutes per job description</td>
                <td className="p-4 sm:p-5 text-slate-500">45 to 60 minutes of manual cross-referencing per application</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Quantified Benchmarking</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Clear 0-100% match score giving confidence before submission</td>
                <td className="p-4 sm:p-5 text-slate-500">Uncertainty whether your application will pass the filter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. GLOSSARY TERMS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Key ATS Screening Terminology</h2>
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
            Everything you need to know about optimizing your resume for applicant tracking systems.
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
            Stop Getting Auto-Rejected
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Audit your resume with verified AI ATS checkers and land the interviews your experience deserves.
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
