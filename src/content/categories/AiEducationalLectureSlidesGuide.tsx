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
  GraduationCap,
  Sparkle
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI educational lecture slides generator and how does it help teachers?",
    answer: "An AI educational lecture slides generator allows teachers, professors, and instructional designers to create engaging, curriculum-aligned lesson decks in seconds. By inputting a grade level, academic standard (like Common Core or NGSS), or textbook topic, the AI structures instructional slides, adds age-appropriate illustrations, generates discussion prompts, and embeds formative assessment activities like drawing prompts and poll checks."
  },
  {
    question: "What are the best AI lecture and lesson slide tools in 2026?",
    answer: "Curipod is the top platform for interactive classroom lessons, embedding real-time student drawing, word clouds, and AI feedback directly into slides. Gamma for Education provides fast, beautiful multimedia lecture decks. Quizizz AI blends slide presentations with gamified student comprehension checks. Canva Magic Presentations delivers thousands of vibrant, customizable educational templates."
  },
  {
    question: "Can AI align lecture presentations with state educational standards and grade levels?",
    answer: "Yes. Dedicated education platforms like Curipod and Quizizz prompt educators for the target grade level (K-12 or Higher Ed) and specific learning standards. The AI adapts the reading level, vocabulary complexity, and scaffolded discussion questions to ensure age appropriateness and pedagogical rigor."
  },
  {
    question: "How do interactive student response features work during class?",
    answer: "Students join the teacher's lesson presentation on their Chromebooks, tablets, or phones by entering a simple room code. As the teacher advances slides, interactive prompts appear on student screens allowing them to draw diagrams, type short answers, and receive instant, personalized AI encouragement."
  }
];

const useCases = [
  {
    title: "Instant Curriculum-Aligned Lesson Deck Creation",
    badge: "Teacher Time Recovery",
    desc: "Generate complete 15-slide lesson decks covering specific topics (e.g. 'Photosynthesis for 7th Grade Biology') in under 2 minutes.",
    benefits: [
      "Structures clear learning objectives, vocabulary definitions, and summaries",
      "Generates age-appropriate diagrams and visual explanatory analogies",
      "Saves teachers 5 to 10 hours of lesson preparation every weekend"
    ],
    highlight: "Saved educators an estimated 350 hours per school year on slide design"
  },
  {
    title: "Formative Assessment & Student Drawing Prompts",
    badge: "Interactive Learning",
    desc: "Insert interactive drawing slides where students sketch math fractions, label cell anatomy, or write short essays on their own screens.",
    benefits: [
      "Every single student participates simultaneously rather than 1 student at the board",
      "Teacher sees a live grid of all student answers in real time",
      "Provides AI-assisted feedback badges highlighting student creativity"
    ],
    highlight: "Achieved 100% active classroom participation across diverse student abilities"
  },
  {
    title: "Differentiated Instruction & Multilingual ESL Translation",
    badge: "Accessibility & Equity",
    desc: "Instantly translate lecture slides into Spanish, Mandarin, or French and generate simplified reading-level versions for ELL students.",
    benefits: [
      "Supports English Language Learners with dual-language glossaries",
      "Adapts vocabulary complexity for differentiated learning tracks",
      "Ensures equitable classroom comprehension across all backgrounds"
    ],
    highlight: "Improved reading comprehension scores by 28% for multilingual learners"
  }
];

const glossaryTerms = [
  {
    term: "Formative Assessment Slide",
    definition: "An interactive presentation slide designed to check student comprehension mid-lesson via quick quizzes, drawings, or open-ended reflections."
  },
  {
    term: "Scaffolded Instruction",
    definition: "A pedagogical method where lecture slides progressively transition from teacher explanation to guided practice and independent student discovery."
  },
  {
    term: "Interactive Canvas / Student Drawing",
    definition: "A slide element enabling students to draw, circle, or annotate diagrams directly from their personal classroom devices."
  },
  {
    term: "Pedagogical Prompt Tuning",
    definition: "AI prompt engineering tailored to generate educational content strictly adhering to Bloom&apos;s Taxonomy and specific grade-level standards."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiEducationalLectureSlidesGuide() {
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
            EdTech & Classroom Lesson Generation 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Educational Lecture Slides: <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">Create Inspiring, Interactive Lessons in Minutes</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Teachers work too hard to spend weekends formatting slides. Discover how AI lesson presentation generators create curriculum-aligned slides, interactive student drawing activities, and formative check-ins automatically.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Classroom Presentation Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How interactive educational AI replaced tired, static classroom slides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Weekend Lesson Prep Burnout</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Educators sacrifice their personal evenings searching for royalty-free diagrams, formatting text bullet points, and writing quiz questions by hand.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Disengaged Students in the Back</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Lecturing through 30 dense text slides results in students tuning out, checking personal phones, or passively copying notes without understanding.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Interactive Living Lessons</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Curipod and Quizizz turn lesson decks into active participation hubs where students draw, vote, and reflect from their own Chromebooks in real time.
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
              Teacher Time & Classroom Engagement Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Calculate Weekly Teacher Prep Savings (5 Lessons/Wk)</h2>
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
              Manual Slide Formatting
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Lesson Deck Generator (Curipod/Quizizz)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Weekly Slide Prep Time
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "8.5 Hours" : "45 Minutes"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Searching online for graphics, formatting layouts, typing quiz items" 
                : "Prompts standard curriculum topics and receives complete interactive decks"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Annual Personal Time Reclaimed
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "0 Hours" : "280 Hours"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Evenings and weekends consumed by clerical presentation tasks" 
                : "Precious personal recharge time returned directly to teachers"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Active Student Participation
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "14%" : "96%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "The same 3 eager students raise hands while the rest stay silent" 
                : "Every student interacts directly via drawing and polling on their device"}
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
            How AI Educational Lesson Generators Work
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl">
            Combining instructional design best practices with real-time student response tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Standard Alignment</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Ingests academic standards, target grade levels, and learning goals to structure appropriate vocabulary, concepts, and pacing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Formative Interaction</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Automatically inserts student response slides: open-ended reflection prompts, multiple-choice polls, and interactive drawing canvases.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Student Device Sync</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Students enter a room pin from Chromebooks or tablets, receiving interactive activities synchronized with teacher presentation pacing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">AI Feedback Badges</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Generates instant, encouraging feedback badges for student submissions, highlighting creative effort and conceptual understanding.
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
            Top 3 AI Educational Lesson Slide Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed head-to-head comparison of classroom presentation suites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Curipod */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 relative shadow-lg space-y-5">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              Classroom Favorite
            </div>
            <div>
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Interactive Lessons</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Curipod</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The premier interactive AI lesson presentation platform. Generates complete lessons with embedded drawing prompts, open questions, and student AI feedback.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Interactive drawing canvases for student tablets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>AI-generated feedback highlighting student ideas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Curriculum-aligned lesson standards generator</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> K-12 teachers wanting 100% active student participation.
            </div>
          </div>

          {/* Quizizz AI */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Gamified Assessment</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Quizizz AI</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Combines structured instructional slide decks with gamified review challenges, automatic question generation, and LMS gradebook syncing.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Instant quiz and slide creation from YouTube URLs or PDFs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Gamified student leaderboards and power-ups</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Google Classroom and Canvas LMS integration</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Teachers blending direct instruction with gamified review.
            </div>
          </div>

          {/* Canva Magic Presentations for Education */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Visual Arts & Design</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Canva for Education</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Free for certified educators, offering thousands of professionally illustrated classroom templates, AI copywriting, and collaborative student project decks.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% free Canva Pro access for verified K-12 teachers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Massive library of educational graphics & stickers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Magic Design generates starter decks from short prompts</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Visual educators wanting stunning, creative classroom aesthetics.
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
            High-Impact Educational Deployments
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How educators transform routine lessons into memorable learning milestones.
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
            Teacher Playbook
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4 Steps to Delivering an AI-Powered Lesson
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From textbook topic prompt to real-time student mastery data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 1</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Prompt Learning Goal</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Enter target grade level and learning objective (e.g. &quot;6th Grade Science: Rock Cycle with 3 check-in questions and drawing prompt&quot;).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 2</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Review & Scaffold</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Review AI-generated slides. Ensure vocabulary definitions are accurate and interactive drawing canvases match student skill levels.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 3</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Launch Pin Code</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Display the 5-digit room pin on the projector. Students join from 1:1 Chromebooks or tablets in under 30 seconds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 4</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Assess in Real Time</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              View the live teacher dashboard to spot misconceptions immediately, giving praise and targeted interventions before class ends.
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
            AI Interactive Lesson Decks vs Static Lecture Slides
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why modern classrooms achieve higher learning gains through active participation software.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-indigo-600 dark:text-indigo-400">AI Interactive Lesson Deck (Curipod/Quizizz)</th>
                <th className="p-4 sm:p-5">Traditional PowerPoint / Google Slides</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Lesson Preparation Time</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Under 10 minutes from academic standard prompt</td>
                <td className="p-4 sm:p-5 text-slate-500">2 to 3 hours of manual formatting per lesson</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Student Participation</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">100% of students draw, vote, and submit responses</td>
                <td className="p-4 sm:p-5 text-slate-500">Only 2 or 3 students raise hands verbally</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Formative Comprehension Checks</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Real-time teacher grid reveals student understanding instantly</td>
                <td className="p-4 sm:p-5 text-slate-500">Teacher only discovers misunderstandings on next week&apos;s exam</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Student Voice & Equity</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Empowers shy and introverted students to share their thinking</td>
                <td className="p-4 sm:p-5 text-slate-500">Quiet students remain invisible and unassessed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. GLOSSARY TERMS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Key Educational Presentation Concepts</h2>
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
            Everything teachers need to know about generating classroom lesson slides with AI.
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
            Take Your Weekends Back
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Create curriculum-aligned, interactive classroom lessons in minutes with AI educational presentation tools.
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
