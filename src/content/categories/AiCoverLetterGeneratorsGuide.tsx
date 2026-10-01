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
  Mail, 
  ShieldCheck, 
  Award, 
  Target, 
  TrendingUp, 
  Users,
  Compass,
  Layers,
  HeartHandshake
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "Do hiring managers still read cover letters in 2026?",
    answer: "While recruiters reviewing 500+ generic applicants rarely read boilerplates, hiring managers and department heads consistently read cover letters when deciding between the top 3 to 5 final candidates. A personalized, narrative cover letter explains career transitions, connects your personal values to the company mission, and provides context that bullet points alone cannot convey."
  },
  {
    question: "What are the best AI cover letter generators in 2026?",
    answer: "CoverDoc.ai is the top platform for personalized cover letters, integrating recent Google News announcements and company mission statements into your letter. Teal provides a fast, integrated letter generator linked directly to your saved resume history. Kickresume blends cover letter writing with matching visual resume header templates. Rezi creates clean, ATS-formatted letters focused on keyword alignment."
  },
  {
    question: "How do AI cover letter generators avoid sounding like generic ChatGPT output?",
    answer: "Generic LLM prompts produce robotic clichés like 'I am writing to express my enthusiastic interest in the position...'. Purpose-built AI cover letter tools ingest your actual resume achievements, cross-reference the hiring company's recent blog posts and press releases, and structure a genuine three-part hook: The Connection Hook, The Proof Paragraph, and The Value Proposition."
  },
  {
    question: "What is the optimal length and format for a modern cover letter?",
    answer: "The optimal modern cover letter is between 250 and 350 words, fitting comfortably on a single page with ample white space. It should never exceed three or four concise paragraphs: an opening connection hook, a body paragraph detailing 1 or 2 relevant accomplishments with metrics, and a forward-looking closing proposing a brief discussion."
  }
];

const useCases = [
  {
    title: "Company News & Mission-Driven Personalization",
    badge: "Authentic Outreach",
    desc: "Ingest recent press releases, product launches, or podcast interviews from the CEO to demonstrate deep genuine research in the opening hook.",
    benefits: [
      "Instantly proves you didn't blast 100 generic applications",
      "Connects personal motivation with the company's 12-month vision",
      "Dramatically increases hiring manager callback warmth and rapport"
    ],
    highlight: "Helped candidates secure senior interviews with top tech and non-profit leaders"
  },
  {
    title: "Explaining Career Pivots & Industry Transitions",
    badge: "Narrative Bridge",
    desc: "Frame non-linear career paths and industry pivots by translating transferable skills into the exact terminology required by the target domain.",
    benefits: [
      "Bridges the gap between previous industries and the new target role",
      "Frames career breaks or startup endeavors as high-growth learning accelerators",
      "Reassures hiring teams of rapid onboarding and role adaptability"
    ],
    highlight: "Enabled successful career transitions for over 3,400 pivot applicants"
  },
  {
    title: "1-Click Matching Visual Header Templates",
    badge: "Visual Harmony",
    desc: "Export cover letters that share the exact typography, color scheme, and header margin styles as your resume for a unified executive package.",
    benefits: [
      "Delivers a cohesive, professional two-document application dossier",
      "Matches fonts, margins, and contact icons seamlessly",
      "Exports in clean, vector-rendered ATS-friendly PDF format"
    ],
    highlight: "Preferred format among corporate HR directors and agency headhunters"
  }
];

const glossaryTerms = [
  {
    term: "The Connection Hook",
    definition: "The crucial opening sentence of a cover letter that cites a specific company milestone, product admiration, or shared mission to banish generic templates."
  },
  {
    term: "Transferable Skill Translation",
    definition: "The process of converting experience from one sector (e.g. military, education) into commercial business terminology (e.g. operations management, enablement)."
  },
  {
    term: "Application Dossier",
    definition: "A matched pair of job search documents—resume and cover letter—sharing identical typographic hierarchies, contact headers, and visual styling."
  },
  {
    term: "AI Cliché Filter",
    definition: "An algorithmic check that flags and removes overused LLM phrases like 'thrilled to apply', 'testament to', and 'tapestry of experience'."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiCoverLetterGeneratorsGuide() {
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
            Cover Letter Personalization & Storytelling 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Cover Letter Generators: <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">Stand Out with Tailored, Story-Driven Applications</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Generic cover letter templates get ignored. Discover how AI cover letter tools research target companies, incorporate recent corporate announcements, and weave your real career achievements into compelling narratives that captivate hiring managers.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Cover Letter Writing Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How authentic, company-researched letters replaced lazy boilerplate templates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Generic Boilerplate Templates</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Job seekers copy the same 2005 template, swapping only the company name. Recruiters spot these within 2 seconds and immediately discard them.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Robotic ChatGPT Clichés</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Unprompted ChatGPT outputs produce pompous vocabulary like &quot;I am elated to proffer my candidature&quot;, signaling laziness and artificial generation.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Targeted Storytelling AI</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              CoverDoc.ai and Teal research the hiring company&apos;s recent news, connecting your specific quantified accomplishments to their strategic 12-month goals.
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
              Application Personalization & Velocity Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Custom Letter Drafting (30 Applications)</h2>
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
              Manual Writing from Scratch
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Researched Letter (CoverDoc/Teal)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Time Per Tailored Cover Letter
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "45 Minutes" : "2 Minutes"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Researching company, staring at blank document, rewording paragraphs" 
                : "AI pulls company news, matches your resume bullets, drafts complete letter"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Total Hours Invested Across 30 Roles
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "22.5 Hours" : "1.0 Hour"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Exhausting manual effort leading to application fatigue and burnout" 
                : "Effortless application velocity allowing 5x more targeted submissions"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Hiring Manager Interview Invite Rate
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "9.0%" : "28.5%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Hiring managers sense lack of enthusiasm or generic blast tactics" 
                : "Compelling connection hook establishes instant mutual chemistry"}
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
            How Purpose-Built Cover Letter AI Works
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl">
            A three-tier research and synthesis pipeline that produces authentic executive letters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Company Intel Ingestion</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Pulls target company website copy, mission statements, recent funding announcements, and leadership names to form the opening hook.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Achievement Matching</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Cross-references job requirements with your resume, selecting the top 2 quantified accomplishments that prove domain mastery.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Cliché Elimination</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Filters out robotic AI tropes and stiff business formalisms, ensuring a natural, confident, and professional conversational tone.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Visual Dossier Match</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Formats the letter with matching margins, fonts, and header styling to align seamlessly with your submitted resume.
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
            Top 3 AI Cover Letter Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed head-to-head comparison of specialized cover letter writing tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CoverDoc.ai */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 relative shadow-lg space-y-5">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              Research Leader
            </div>
            <div>
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Company News Integration</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">CoverDoc.ai</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The premier tool for highly personalized letters. Automatically searches Google News and company press releases to construct authentic connection hooks.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Automated real-time company news research integration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Customizable tone slider (e.g. startup casual vs executive)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Provides interview prep talking points alongside letter</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Applying to high-interest dream companies where generic letters fail.
            </div>
          </div>

          {/* Teal */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">All-in-One Career Hub</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Teal Career Hub</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Integrated cover letter generator linked directly to your saved resume bullets and job tracker, matching required skills in seconds.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>One-click generation from tracked job postings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Deep alignment with saved resume work history</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Centralized application status tracker & follow-up reminders</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Job seekers organizing an active multi-application pipeline.
            </div>
          </div>

          {/* Kickresume */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Visual Dossier Design</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Kickresume AI</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Renowned for beautiful matching resume and cover letter visual templates, ensuring typography, headers, and color schemes match perfectly.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>40+ designer cover letter templates matching resume styles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>GPT-4 powered contextual paragraph generator</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>High-resolution vector PDF export with digital signature line</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Candidates wanting visually matched, aesthetically striking application packages.
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
            High-Impact Cover Letter Deployments
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How job seekers leverage personalized letters to bypass recruiter gatekeepers.
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
            4 Steps to an Unforgettable Cover Letter
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From company research to a compelling, signed 1-page letter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 1</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Identify the Hook</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Find 1 recent company milestone: a new product release, series B round, or podcast quote from the hiring VP to anchor paragraph one.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 2</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Select Proof Metric</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Select 1 marquee achievement from your resume that directly solves the core challenge outlined in the job description.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 3</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Run AI Draft Generator</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Prompt the tool with your hook and proof metric. Set tone to &quot;confident & conversational&quot; and limit output to 300 words.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 4</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Human Polish & Send</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Read aloud to verify natural voice. Export with a matching visual header that mirrors your resume layout and submit.
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
            AI Researched Letters vs Generic ChatGPT Prompts
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why dedicated career tools deliver superior narrative connection compared to raw LLM chat boxes.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-indigo-600 dark:text-indigo-400">Dedicated AI Cover Letter Tool (CoverDoc/Teal)</th>
                <th className="p-4 sm:p-5">Standard Raw ChatGPT Prompt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Company Context Ingestion</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Auto-scrapes current news, product updates, and executive names</td>
                <td className="p-4 sm:p-5 text-slate-500">Relies only on training data (hallucinates recent events)</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Writing Tone & Authenticity</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Conversational, punchy, and free of overused buzzwords</td>
                <td className="p-4 sm:p-5 text-slate-500">Stiff, robotic, pompous vocabulary easily spotted by recruiters</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Resume Data Binding</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Selects your best matching metrics and binds them naturally</td>
                <td className="p-4 sm:p-5 text-slate-500">Requires manual copy-pasting of long resume chunks into prompt</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Visual Dossier Export</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Export matching PDF with identical header and fonts as resume</td>
                <td className="p-4 sm:p-5 text-slate-500">Plain text block requiring manual formatting in Word</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. GLOSSARY TERMS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Key Application Concepts</h2>
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
            Everything you need to know about generating compelling, tailored cover letters.
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
            Never Send a Generic Letter Again
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Generate company-researched, story-driven cover letters in seconds and make an unforgettable first impression.
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
