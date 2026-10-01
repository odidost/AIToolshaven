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
  Presentation, 
  Layers, 
  Compass, 
  Award, 
  Target, 
  TrendingUp, 
  Users,
  ShieldCheck,
  FileText
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI copilot for PowerPoint and Google Slides?",
    answer: "An AI presentation copilot is an in-app assistant or add-in that lives directly inside Microsoft PowerPoint or Google Slides. Instead of requiring you to adopt a third-party design tool, it allows you to generate new slides from prompts, convert Word documents or Google Docs into complete presentations, reformat existing bullet points into visual cards, and summarize long decks without leaving your familiar enterprise workspace."
  },
  {
    question: "What are the best PowerPoint and Google Slides AI copilots in 2026?",
    answer: "Microsoft 365 Copilot is the premier enterprise solution for PowerPoint, transforming Word documents, Excel workbooks, and meeting notes into native PPTX decks. Gemini for Google Workspace delivers native slide generation and styling inside Google Slides. Plus AI is the top third-party add-in for both PowerPoint and Google Slides, renowned for its custom enterprise template matching and consistent typography styling."
  },
  {
    question: "Can an AI copilot transform a 20-page Word document into an executive summary deck?",
    answer: "Yes. Microsoft 365 Copilot allows you to prompt 'Create a 10-slide executive summary presentation from quarterly-report.docx'. The model analyzes document headings, extracts key quantitative takeaways, structures a logical narrative progression, and populates speaker notes for each slide."
  },
  {
    question: "Do AI slide copilots work with custom corporate PowerPoint templates?",
    answer: "Yes. Both Microsoft 365 Copilot and Plus AI allow corporate administrators to upload customized `.potx` presentation templates. The AI will strictly adhere to master layout slides, corporate font hierarchies, designated color palettes, and header placements, guaranteeing brand compliance."
  }
];

const useCases = [
  {
    title: "Document-to-Deck Instant Executive Synthesis",
    badge: "Enterprise Productivity",
    desc: "Transform dense 30-page project specifications or research memos into a crisp, ready-to-present 10-slide executive deck in seconds.",
    benefits: [
      "Extracts core strategic initiatives and key quantitative findings",
      "Drafts comprehensive speaker notes for the presenter on every slide",
      "Eliminates hours of manual copy-pasting from Word to PowerPoint"
    ],
    highlight: "Reduced executive briefing preparation time from 4 hours to 10 minutes"
  },
  {
    title: "1-Click Slide Reformatting & Bullet De-Cluttering",
    badge: "Visual Redesign",
    desc: "Highlight cluttered, wall-of-text slides and prompt the copilot to convert the bullets into a 3-column comparative card layout.",
    benefits: [
      "Instantly converts unreadable text lists into modern graphic layouts",
      "Auto-generates relevant icons and data callout boxes",
      "Maintains slide content while elevating professional aesthetics"
    ],
    highlight: "Transformed over 5,000 legacy company slides into modern card layouts"
  },
  {
    title: "Native Google Workspace & Office 365 Collaboration",
    badge: "Zero App Switching",
    desc: "Empower cross-functional teams to brainstorm and refine slides natively inside Google Slides or PowerPoint without learning new design tools.",
    benefits: [
      "Preserves familiar real-time co-authoring and commenting features",
      "Complies with corporate security, data loss prevention, and access policies",
      "Supports native exports and backwards compatibility with all versions"
    ],
    highlight: "Achieved 92% enterprise employee adoption across 1,200 knowledge workers"
  }
];

const glossaryTerms = [
  {
    term: "In-App Add-In Architecture",
    definition: "Software integrations running inside Microsoft Office or Google Workspace via taskpane add-ins, accessing native presentation APIs directly."
  },
  {
    term: "Document-to-Presentation (Doc2Deck)",
    definition: "An AI capability that parses document structure (H1, H2, tables) and summarizes the semantic narrative into corresponding slide chapters."
  },
  {
    term: "Master Layout Inheritance",
    definition: "The automatic alignment of AI-generated slide elements with pre-existing corporate template master layouts, color palettes, and font pairings."
  },
  {
    term: "Speaker Note Synthesis",
    definition: "The automatic generation of talking points and background context in the presenter notes field beneath each AI-generated slide."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiPowerpointGoogleSlidesCopilotsGuide() {
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
            Native Office 365 & Google Workspace AI 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Copilots for PowerPoint & Google Slides: <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">Build Presentations Inside the Tools You Already Use</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            You don&apos;t need to migrate to a new presentation app to get generative AI power. Discover the top AI copilots and add-ins for PowerPoint and Google Slides that turn documents into decks, redesign bullets, and enforce corporate templates natively.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Office Copilot Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How native workplace copilots eliminated third-party presentation tool fragmentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Manual Document Translation</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Knowledge workers spend hours copying paragraphs from Word memos into PowerPoint, splitting text into bullet points and searching for icons.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Third-Party Tool Silos</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Teams try new presentation startups, only to find colleagues and enterprise IT departments demand final files in standard .pptx or Google Slides formats.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Native In-App Copilots</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Copilots inside PowerPoint and Google Slides generate complete decks, reformat slides, and apply company master templates with zero tool switching.
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
              Enterprise Slide Productivity Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Calculate Enterprise Time Savings (Team of 15 Managers)</h2>
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
              Manual PowerPoint Formatting
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              In-App AI Copilot (M365 Copilot / Plus AI)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Time Spent Building Weekly Status Decks
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "3.5 Hours / Mgr" : "20 Minutes / Mgr"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Manually compiling bullets from notes, aligning boxes, and resizing text" 
                : "Prompts copilot to summarize project docs directly into template slides"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Annual Value of Management Time Saved
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$0" : "$145,000"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Expensive manager hours spent acting as clerical presentation formatters" 
                : "2,400+ hours redirected toward team coaching and project execution"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Corporate Brand Compliance Rate
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "54%" : "99%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Rampant font mismatched slides and off-brand color schemes" 
                : "AI natively inherits corporate master template styles and palettes"}
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
            How Native Slide Copilots Function
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl">
            In-app AI extensions that transform workplace documents into beautifully structured presentations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Context Parsing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Analyzes referenced Word docs, Google Docs, or text prompts, mapping sections to clear slide chapters and slide objectives.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Master Template Binding</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Inspects your active presentation&apos;s master layouts, selecting matching card, comparison, timeline, and stat slide templates.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Visual Card Formatting</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Populates concise titles, bullet summaries, stat numbers, and contextual icons directly into native vector shapes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Speaker Notes Synthesis</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Writes detailed narrative talking points and transition cues into the speaker notes pane for effortless presentation delivery.
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
            Top 3 PowerPoint & Google Slides Copilots
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed head-to-head comparison of in-app presentation assistants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Microsoft 365 Copilot */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 relative shadow-lg space-y-5">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              Office 365 Standard
            </div>
            <div>
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Native PowerPoint AI</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Microsoft 365 Copilot</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The flagship enterprise copilot embedded directly into PowerPoint. Effortlessly creates presentations from Word documents, OneDrive files, and company emails.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>One-click Word-to-PowerPoint deck generation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Enterprise Microsoft Graph security & data governance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Natural language slide restructuring & summarization</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Enterprises fully standardized on Microsoft 365 and OneDrive.
            </div>
          </div>

          {/* Plus AI */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cross-Platform Add-In</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Plus AI</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The top-rated third-party add-in for both Google Slides and PowerPoint. Renowned for its clean card designs, template matching, and bullet rewriting.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Works identically in Google Slides & PowerPoint</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Transforms text blocks into polished visual cards</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Custom team template and font styling controls</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Teams operating across both Google Slides and Microsoft PowerPoint.
            </div>
          </div>

          {/* Gemini for Google Slides */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Google Workspace Native</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Gemini for Google Slides</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Google&apos;s native intelligence sidepanel in Slides. Generates custom illustrations, summarizes linked Google Drive documents, and rewrites slide content.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Generates custom AI images directly onto slides</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Deep integration with Google Docs and Google Drive</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Seamless real-time Google Workspace collaboration</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Companies standardizing on Google Workspace.
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
            High-Impact In-App Copilot Workflows
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How corporate professionals accelerate slide deck delivery inside their everyday suite.
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
            Deployment Playbook
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4 Steps to Rolling Out Slide Copilots
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From administrator template provisioning to team-wide adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 1</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Admin Add-In Deployment</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Deploy Microsoft 365 Copilot licenses or install the Plus AI add-in centrally via the Microsoft Admin Center or Google Workspace Marketplace.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 2</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Upload Brand Templates</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Upload your company&apos;s master `.potx` presentation theme to ensure generated decks automatically inherit corporate layouts and fonts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 3</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Doc-to-Deck Prompting</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Train managers to prompt with document references (e.g. &quot;/create deck from strategy.docx with 8 slides focusing on Q3 roadmap&quot;).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 4</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Iterative Polish</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Use in-line copilot commands to reformat specific text blocks into multi-column cards, add icons, and generate presenter talking points.
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
            In-App Copilots vs Standalone Presentation Apps
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why corporate environments favor in-app copilots over third-party presentation web tools.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-indigo-600 dark:text-indigo-400">In-App Copilot (M365 Copilot / Plus AI)</th>
                <th className="p-4 sm:p-5">Standalone Presentation Web Apps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Workflow Continuity</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Lives inside PowerPoint & Google Slides (zero context switching)</td>
                <td className="p-4 sm:p-5 text-slate-500">Requires learning a new interface and importing/exporting files</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">File Compatibility</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">100% native .pptx and Google Slides vector format</td>
                <td className="p-4 sm:p-5 text-slate-500">Exported files frequently suffer broken layouts and font shifts</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Enterprise Security</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Inherits Microsoft/Google enterprise compliance & DLP boundaries</td>
                <td className="p-4 sm:p-5 text-slate-500">Requires separate SOC2 security review and vendor vetting</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Document Ingestion</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Direct access to Word docs, Excel charts, and Google Drive files</td>
                <td className="p-4 sm:p-5 text-slate-500">Manual copy-pasting of text required</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. GLOSSARY TERMS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Key In-App Copilot Concepts</h2>
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
            Everything you need to know about implementing in-app presentation copilots.
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
            Supercharge Your Everyday Slide Workflow
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Generate presentation decks straight from Word and Docs inside Microsoft PowerPoint and Google Slides.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/category/ai-presentation-makers"
            className="px-6 py-3 rounded-xl bg-white text-indigo-900 font-semibold text-sm hover:bg-slate-100 transition-all flex items-center gap-2 shadow-sm"
          >
            Explore AI Presentation Makers
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
