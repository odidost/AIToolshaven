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
  Headphones, 
  MessageSquare, 
  ShieldAlert, 
  Award, 
  Target, 
  TrendingUp, 
  Users,
  Compass,
  Layers
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI sales objection coach and how does roleplay simulation work?",
    answer: "An AI sales objection coach is an interactive voice-driven training platform where sales reps practice pitch delivery, cold calling, and objection handling against realistic AI-simulated buyer personas. Using ultra-low-latency conversational speech synthesis, the AI simulates skeptical CFOs, impatient technical directors, or resistant procurement officers, throwing realistic curveballs and evaluating the rep's rebuttal technique, pacing, and confidence."
  },
  {
    question: "What are the best AI sales roleplay and coaching tools in 2026?",
    answer: "Hyperbound is the top-ranked AI cold calling and outbound roleplay platform, letting reps drill simulated prospects tuned to real ICP criteria. Second Nature AI provides enterprise sales roleplay certifications and Jenny, an interactive AI avatar buyer. Quantified specializes in behavioral coaching, facial expression analysis, and executive communication. Yoodli offers private, judgement-free speech coaching for presentation clarity."
  },
  {
    question: "How do AI coaches evaluate rep performance compared to human sales managers?",
    answer: "AI coaches grade sales reps objectively against custom scoring rubrics (e.g., MEDDPICC discovery depth, empathy validation, concise rebuttal delivery, filler word frequency, and talk-to-listen ratios). Unlike busy human managers who can only shadow 1 or 2 live calls a month, AI coaches can run 50 roleplay simulations per week with instant, detailed scorecards."
  },
  {
    question: "Can AI roleplay simulations be customized with our company's proprietary pricing and competitor battlecards?",
    answer: "Yes. Enterprise platforms allow revenue enablement teams to upload battlecards, product documentation, competitor kill sheets, and call recordings of top reps. The AI buyer persona then actively incorporates specific vendor names, feature comparisons, and real-world budget constraints during simulations."
  }
];

const useCases = [
  {
    title: "New Rep Onboarding & Cold Call Certification",
    badge: "Sales Enablement",
    desc: "Ramp new BDRs and AEs safely by having them complete 40 simulated cold calls and discovery drills before dialing live prospect leads.",
    benefits: [
      "Eliminates the fear of burning valuable target accounts during training",
      "Standardizes certified qualification benchmarks across global cohorts",
      "Cuts ramp time to first booked meeting by over 50%"
    ],
    highlight: "Trained 35 new BDRs to quota readiness in 14 days instead of 6 weeks"
  },
  {
    title: "High-Stakes Enterprise Procurement Drill",
    badge: "Deal Strategy",
    desc: "Roleplay against an AI Chief Information Security Officer (CISO) and Procurement Director to prepare for intense pricing and compliance grilling.",
    benefits: [
      "Simulates aggressive discount demands and SOC2 compliance inquiries",
      "Tests rep ability to defend pricing integrity without immediate concessions",
      "Surfaces weak talking points before live multi-million dollar pitch meetings"
    ],
    highlight: "Preserved an estimated 14% higher average contract value across 20 enterprise deals"
  },
  {
    title: "Competitive Takeout Objection Practice",
    badge: "Win-Rate Defense",
    desc: "Train reps on newly launched competitor features with targeted rebuttal drills testing instant recall of counter-differentiation proof points.",
    benefits: [
      "Rapidly deploys updated sales battlecards across remote teams",
      "Instant feedback on phrasing that de-escalates competitor praise",
      "Automated leaderboard highlighting reps with mastery of counter-narratives"
    ],
    highlight: "Increased competitive deal win rates from 26% to 41% within two quarters"
  }
];

const glossaryTerms = [
  {
    term: "Voice Latency in AI Roleplay",
    definition: "The roundtrip response time between the rep finishing a spoken sentence and the AI buyer answering. State-of-the-art systems achieve under 600ms latency for natural conversational flow."
  },
  {
    term: "Empathy-First Rebuttal",
    definition: "A proven objection handling technique where the rep first acknowledges and validates the buyer's concern before pivoting into counter-evidence or clarifying questions."
  },
  {
    term: "Simulated Buyer Persona",
    definition: "A tuned conversational AI agent initialized with specific personality traits, risk tolerances, budget limitations, and industry knowledge representing target buyers."
  },
  {
    term: "Ramp-to-Productivity",
    definition: "The number of days required for a newly hired sales representative to reach full monthly quota performance from their initial start date."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiSalesObjectionCoachesGuide() {
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
            AI Roleplay & Voice Sales Coaching 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Sales Objection Coaches: <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">Master Buyer Rebuttals with Realistic Voice Roleplay</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Never let reps practice on real revenue opportunities again. Discover conversational AI roleplay coaches that simulate demanding CFOs and skeptical buyers, sharpening your team&apos;s objection handling before live calls.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Sales Coaching Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From awkward peer roleplays to continuous, on-demand AI buyer simulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Practicing on Real Leads</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              New sales reps burn through hundreds of expensive enterprise inbound leads while stumbling over pricing questions and failing basic competitor objections.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Unrealistic Peer Roleplays</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Colleagues pretend to be prospects in awkward 15-minute drills, either going too easy on each other or failing to replicate real customer skepticism and nuance.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Hyper-Realistic AI Roleplay</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Reps dial conversational AI buyers programmed with specific pain points, receiving objective scorecard feedback and tailored drill repetitions on demand.
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
              Sales Enablement & Ramp ROI Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Calculate Sales Ramp Acceleration (Cohort of 6 New Hires)</h2>
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
              Manager 1-on-1 Roleplay
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Voice Roleplay (Hyperbound/Second Nature)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Practice Repetitions Before Live Dialing
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "3 Roleplays" : "45 Roleplays"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Constrained by sales manager calendar availability and meeting fatigue" 
                : "Unlimited 24/7 on-demand AI voice drills across all target objection scenarios"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Pipeline Lost to Ramp Mistakes
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$180,000" : "$22,000"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Burnt high-value enterprise inbound demo leads during initial learning curve" 
                : "Reps make their rookie mistakes safely against synthetic AI buyers"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Days to Full Quota Productivity
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "92 Days" : "38 Days"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Slow, gradual confidence accumulation over months of sporadic feedback" 
                : "Rapid muscle memory mastery of objection rebuttals within first 3 weeks"}
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
            How AI Sales Roleplay Simulation Works
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl">
            Low-latency conversational voice technology coupled with rigorous sales enablement rubrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Persona Prompt Tuning</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Initializes an AI buyer persona with explicit industry context, budget constraints, incumbent vendor loyalties, and personality temperaments.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Sub-600ms Voice Loop</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Streamed speech-to-text and ultra-fast audio synthesis allow interruptions, pauses, and back-and-forth cadence that mirror real phone conversations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Curveball Objection Injection</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The AI dynamically challenges the rep with pricing hesitations, competitor comparisons, and timing pushbacks based on how the conversation progresses.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Algorithmic Scorecard</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Generates an instant post-call breakdown: Discovery Depth, Value Articulation, Rebuttal Crispness, and specific recommended phrasing improvements.
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
            Top 3 AI Sales Objection Coaching Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed head-to-head comparison of voice-driven roleplay systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hyperbound */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 relative shadow-lg space-y-5">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              Cold Call Leader
            </div>
            <div>
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Simulated Outbound Phone Calls</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Hyperbound</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The premier AI sales roleplay platform for outbound BDRs and SDRs. Simulates phone calls with dynamic buyer personas and instant cold call grading.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Simulates phone dialing with real background noises</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Custom ICP persona builder with bespoke objections</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Granular tone, pacing, and rebuttal effectiveness scores</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Outbound sales development teams wanting high cold-call repetition.
            </div>
          </div>

          {/* Second Nature AI */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Enterprise Certification</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Second Nature AI</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Enterprise sales enablement platform featuring interactive avatar buyer Jenny. Built for rigorous sales pitch certifications and global compliance rollouts.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Lifelike conversational avatar buyers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Automated pitch certification and grading badges</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Multi-language sales roleplay simulations</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Enterprise revenue enablement teams rolling out formal product certifications.
            </div>
          </div>

          {/* Quantified */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Executive Presence</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Quantified</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              AI behavioral simulation platform that evaluates vocal inflection, confidence, executive presence, and non-verbal body language for high-stakes enterprise sales.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Deep behavioral and communication psychology scoring</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Vocal tone, eye contact, and fidgeting analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Executive presentation rehearsal for C-level pitches</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Enterprise account executives selling 6-figure and 7-figure deals.
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
            High-Impact AI Sales Roleplay Deployments
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How forward-thinking sales leaders build unbreakable rep confidence.
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
            4 Steps to Rolling Out AI Sales Roleplay Coaching
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From objection cataloging to team-wide certification leaderboards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 1</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Catalog Objections</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Extract the top 10 most frequent prospect objections from lost Gong/Chorus calls (e.g. &quot;budget freeze&quot;, &quot;we use competitor X&quot;, &quot;call me in Q4&quot;).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 2</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Configure AI Personas</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Create personas: &quot;Impatient VP of Sales&quot;, &quot;Detail-Oriented Security Architect&quot;, and &quot;Frugal CFO&quot; with customized skepticism levels.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 3</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Mandatory Drill Cadence</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Incorporate 3 daily 5-minute roleplay warm-ups before SDR outbound dialing blocks and AE enterprise demo calls.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 4</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Leaderboards & Badges</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Gamify skill mastery by rewarding reps who achieve 90%+ passing scores on competitive takeout certifications.
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
            AI Voice Roleplay vs Human Manager Coaching
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why leading revenue organizations combine human strategy with AI repetition drills.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-indigo-600 dark:text-indigo-400">AI Voice Roleplay (Hyperbound/Second Nature)</th>
                <th className="p-4 sm:p-5">Traditional Sales Manager Roleplay</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Availability & Repetitions</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Unlimited 24/7 on-demand (50+ drills/week)</td>
                <td className="p-4 sm:p-5 text-slate-500">1 to 2 times per month (bottlenecked by manager time)</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Grading Objectivity</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Standardized scoring rubric measuring exact phrasing and latency</td>
                <td className="p-4 sm:p-5 text-slate-500">Subjective impressions and emotional mood bias</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Judgement-Free Environment</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Safe space to fail repeatedly without performance review anxiety</td>
                <td className="p-4 sm:p-5 text-slate-500">High anxiety; reps fear looking incompetent in front of superiors</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Persona Diversity</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Simulates any persona: C-suite, IT, Procurement, angry buyers</td>
                <td className="p-4 sm:p-5 text-slate-500">Limited to the manager&apos;s own communication style</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. GLOSSARY TERMS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Key Sales Coaching Concepts</h2>
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
            Answers to common questions about rolling out AI objection coaching.
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
            Build Unshakeable Sales Confidence
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Let your reps practice tough objections with conversational AI and turn hesitation into closed deals.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/category/ai-sales-tools"
            className="px-6 py-3 rounded-xl bg-white text-indigo-900 font-semibold text-sm hover:bg-slate-100 transition-all flex items-center gap-2 shadow-sm"
          >
            Explore AI Sales Tools
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/category/marketing-sales"
            className="px-6 py-3 rounded-xl bg-indigo-800/60 hover:bg-indigo-700/60 text-white font-semibold text-sm border border-indigo-400/30 transition-all"
          >
            View Marketing & Sales Category
          </Link>
        </div>
      </section>

    </div>
  );
}
