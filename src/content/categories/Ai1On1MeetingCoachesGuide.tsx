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
  HeartHandshake, 
  MessageSquare, 
  Smile, 
  Target, 
  TrendingUp, 
  Users, 
  Compass, 
  Layers, 
  Search, 
  Check,
  Award,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI 1-on-1 meeting coach and how does it improve management conversations?",
    answer: "An AI 1-on-1 meeting coach is an intelligent communication assistant that operates during and after manager-employee check-ins. It analyzes audio and conversational dynamics in real time—monitoring talk-to-listen ratios, pace, interrupting patterns, and sentiment cues—while suggesting structured agenda prompts, capturing mutual commitments, and tracking employee career development goals across quarters."
  },
  {
    question: "What are the best AI 1-on-1 and meeting coaching tools in 2026?",
    answer: "Poised is the leading real-time speech and confidence coach that provides private on-screen feedback on clarity, filler words, and empathy without other attendees seeing. Fellow is the gold standard for team 1-on-1 meeting management, blending collaborative recurring agendas with AI action item extraction. Yoodli provides comprehensive AI speech coaching and presentation roleplay. Hypercontext organizes continuous feedback loops and goal alignment between managers and direct reports."
  },
  {
    question: "Is AI feedback during 1-on-1s visible to both participants?",
    answer: "No. Leading coaching assistants like Poised operate on a strictly private, client-side basis. The real-time HUD (heads-up display)—which displays live talk time percentages, filler word counts, and facial engagement indicators—is visible only to you on your desktop monitor. Neither your direct report nor other call participants can see or hear the coaching prompts."
  },
  {
    question: "How do 1-on-1 meeting coaches protect personal employee privacy and HR sensitivity?",
    answer: "1-on-1 discussions often involve sensitive topics like compensation, personal health, and career anxiety. Dedicated coaching platforms prioritize zero-data-retention options, local audio analysis, and SOC 2 Type II compliance. Transcripts can be marked private to the manager and report, preventing company-wide search indexation or exposure to unauthorized internal staff."
  }
];

const useCases = [
  {
    title: "Manager Empathy & Active Listening Coaching",
    badge: "Leadership Development",
    desc: "Help newly promoted team leads and engineering managers transition from problem-solving monologues to active coaching and listening.",
    benefits: [
      "Alerts managers when their talk ratio exceeds 50% during direct report 1-on-1s",
      "Prompts open-ended coaching questions: 'What can I do to unblock you this week?'",
      "Tracks conversational tone and sentiment shifts to identify early burnout signals"
    ],
    highlight: "Decreased manager talk ratio from 68% to 39%, boosting direct report psychological safety"
  },
  {
    title: "Continuous Goal & Career Development Tracking",
    badge: "Talent Retention",
    desc: "Maintain multi-quarter continuity on long-term professional development goals, performance milestones, and promotion criteria.",
    benefits: [
      "Carries forward unresolved career growth action items to future meeting agendas",
      "Auto-generates structured performance review inputs from 6 months of 1-on-1s",
      "Eliminates the 'recency bias' common in annual corporate performance reviews"
    ],
    highlight: "Increased direct report annual retention by 23% across high-growth engineering teams"
  },
  {
    title: "Executive Presence & Public Speaking Coaching",
    badge: "Communication Polish",
    desc: "Refine speech cadence, eliminate distracting filler words, and master conversational confidence during high-stakes presentations and board reviews.",
    benefits: [
      "Tracks speech velocity (words per minute) to ensure optimal audience comprehension",
      "Flags repetitive crutch phrases ('you know', 'basically', 'kind of')",
      "Measures facial engagement, eye contact alignment, and vocal energy"
    ],
    highlight: "Reduced filler word frequency by 64% within 4 weeks of consistent coaching"
  }
];

const glossaryTerms = [
  {
    term: "Psychological Safety Score",
    definition: "An aggregate measurement of conversational turn-taking equality, non-defensive language, and employee willingness to voice vulnerability."
  },
  {
    term: "Heads-Up Display (HUD) Coaching",
    definition: "Private, real-time desktop visual widgets offering immediate discreet guidance on speech pace, talk time, and filler words."
  },
  {
    term: "Conversational Turn-Taking",
    definition: "The rhythmic back-and-forth interchange between two speakers, serving as an indicator of mutual respect and balanced engagement."
  },
  {
    term: "Cumulative 1-on-1 Ledger",
    definition: "A chronological historical record linking recurring agendas, agreed action commitments, and performance goals over an employee&apos;s tenure."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Ai1On1MeetingCoachesGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-center space-y-6 pt-6 md:pt-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Category Deep-Dive: AI 1-on-1 &amp; Meeting Coaching</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
          Elevate Leadership &amp; Master 1-on-1s With <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-pink-500 to-purple-500">AI Meeting Coaches</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Great leaders aren&apos;t born—they are coached. Discover how AI meeting assistants provide private, real-time feedback on talk-to-listen ratios, eliminate verbal crutches, structure recurring 1-on-1 agendas, and build high-trust engineering cultures.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-500/25 transition-all duration-200"
          >
            <span>Explore Meeting Coaching Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200"
          >
            <span>Coaching Architecture</span>
          </a>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Leadership Shift: Objective Communication Feedback
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Why forward-thinking managers use real-time AI guidance to build empathetic, high-retention teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-rose-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Private Real-Time Self-Correction
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Most managers dominate 1-on-1s without realizing it. A discreet on-screen nudge (&quot;You have spoken for 4 consecutive minutes&quot;) allows immediate conversational rebalancing, prompting the manager to ask an open-ended question instead.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-pink-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              No More Dropped Career Commitments
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When a manager verbally promises to explore conference sponsorship or a title promotion, manual notes often get forgotten. AI tracks ongoing commitments across months of 1-on-1 agendas, ensuring promises are honored.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Evidence-Based Performance Reviews
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Traditional annual reviews suffer from recency bias—judging an entire year on the last 3 weeks of work. AI coaching tools synthesize six months of 1-on-1 notes, achievements, and blockers into an objective performance dossier.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE IMPACT / ROI CALCULATOR */}
      <section className="p-6 md:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-transparent to-pink-500/10 pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Retention &amp; Leadership Modeler</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Team Retention &amp; Coaching Impact ROI
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Calculate the retention and engagement dividends gained by coaching managers to hold structured, high-empathy 1-on-1s.
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
                Unstructured 1-on-1s
              </button>
              <button
                onClick={() => setCalculatorMode("ai")}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  calculatorMode === "ai"
                    ? "bg-rose-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                AI-Coached 1-on-1 System
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <MessageSquare className="w-5 h-5 text-rose-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "71% Manager" : "42% Manager"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Talk-to-Listen Ratio
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Manager talks over report" : "Active listening & inquiry"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Smile className="w-5 h-5 text-pink-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "32%" : "89%"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Goal Follow-Through Rate
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Action items forgotten" : "Tracked across quarterly agendas"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <DollarSign className="w-5 h-5 text-rose-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "$150,000" : "$0"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Turnover Replacement Cost
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "1-2 preventable resignations/yr" : "Retained high-impact talent"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <TrendingUp className="w-5 h-5 text-purple-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-rose-400">
                {calculatorMode === "traditional" ? "Baseline" : "21.6x ROI"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Organizational Value
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Disengaged team morale" : "Coaching software vs retention"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE ARCHITECTURE */}
      <section id="architecture" className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Deep Dive</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Stage Architecture of AI 1-on-1 Meeting Coaches
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How real-time speech processing and agenda tracking elevate managerial communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Client-Side Audio Ingestion
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Captures desktop microphone and speaker audio locally without routing unencrypted voice streams to public servers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Conversational Dynamics
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Tracks talk-to-listen ratios, speech cadence (words per minute), filler words (&apos;um&apos;, &apos;like&apos;), and interruption overlaps in real time.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Discreet HUD Prompting
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Displays private on-screen coaching tips to the manager (&quot;Ask about project blockers&quot;) to keep the dialogue balanced.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Goal &amp; Agenda Ledger
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Syncs agreed commitments into ongoing shared agendas (Fellow, Notion), carrying forward open action items to the next sync.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Top 3 AI 1-on-1 Meeting Coaches Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Benchmarking leading platforms across real-time coaching, agenda management, and speech analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-rose-500/30 dark:border-rose-500/20 shadow-md space-y-6 relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400">
              <Crown className="w-3.5 h-3.5" />
              <span>Best Real-Time HUD Coach</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Poised</h3>
              <p className="text-xs text-slate-500 mt-1">Discreet real-time speech HUD, clarity &amp; empathy coaching</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>100% private desktop HUD visible only to you during calls</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Tracks filler words, pace, energy, and talk time balance live</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Comprehensive weekly improvement trends and personalized drills</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Managers, executives, and presenters wanting live speech feedback</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-600 dark:text-pink-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Best for Team 1-on-1 Agendas</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Fellow.app</h3>
              <p className="text-xs text-slate-500 mt-1">Collaborative recurring agendas, AI action items &amp; OKRs</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>Library of 500+ curated 1-on-1 and performance review templates</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>AI Copilot auto-records and syncs action items to Jira &amp; Asana</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>Carries forward unresolved talking points automatically</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Engineering managers, People Ops, and departmental team leads</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Award className="w-3.5 h-3.5" />
              <span>Best for Roleplay &amp; Practice</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Yoodli</h3>
              <p className="text-xs text-slate-500 mt-1">AI communication coach &amp; interactive practice roleplay</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>Simulate difficult 1-on-1 conversations with interactive AI avatars</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>Detailed metrics on conciseness, non-inclusive words, and filler</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>Gamified speech drills to practice concise executive messaging</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Emerging managers and corporate executives rehearsing tough feedback</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TABBED USE CASES */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Practical Applications for Management Excellence
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            See how AI coaching elevates direct report relationships, executive presence, and career reviews.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {useCases.map((uc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveUseCase(idx)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeUseCase === idx
                  ? "bg-rose-600 text-white shadow-md shadow-rose-500/20"
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
                <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs md:text-sm text-rose-700 dark:text-rose-300 font-medium">
            <strong>Demonstrated Metric: </strong> {useCases[activeUseCase].highlight}
          </div>
        </div>
      </section>

      {/* 7. IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Step Implementation Roadmap for 1-on-1 AI Coaching
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How managers adopt conversational coaching tools while maintaining absolute employee trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Step 01</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Privacy Configuration</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Enable client-side HUD mode. Ensure recordings are private to you and not shared with company-wide search indexers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Step 02</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Talk Ratio Target</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Set a personal HUD ceiling of 40% talk time for direct report 1-on-1s. Let the report drive 60%+ of the discussion.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Step 03</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Shared Agenda Sync</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Link tools like Fellow or Notion so both manager and report can add agenda topics asynchronously throughout the week.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Step 04</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Quarterly Retros</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Review cumulative 1-on-1 commitments every 90 days to verify career milestone progress and eliminate evaluation surprises.
            </p>
          </div>
        </div>
      </section>

      {/* 8. COMPARISON BRIDGE TABLE */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Feature Comparison: AI Meeting Coaching Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Detailed breakdown of real-time HUD metrics, recurring agenda tools, and AI roleplay capabilities.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                <th className="p-4">Platform</th>
                <th className="p-4">Live Discreet HUD</th>
                <th className="p-4">Agenda Templates</th>
                <th className="p-4">AI Practice Roleplay</th>
                <th className="p-4">Privacy Level</th>
                <th className="p-4">Pricing Model</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Poised</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (Full HUD)</td>
                <td className="p-4">Basic notes</td>
                <td className="p-4">Speech drills</td>
                <td className="p-4">100% Client-side private</td>
                <td className="p-4">$13/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Fellow.app</td>
                <td className="p-4 text-slate-400">Post-call stats</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">500+ Curated templates</td>
                <td className="p-4">N/A</td>
                <td className="p-4">Workspace permissioned</td>
                <td className="p-4">$7/user/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Yoodli</td>
                <td className="p-4 text-slate-400">Post-call analysis</td>
                <td className="p-4">Interview rubrics</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Interactive AI avatars</td>
                <td className="p-4">Private to user</td>
                <td className="p-4">Free tier available</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Hypercontext</td>
                <td className="p-4 text-slate-400">Post-call pulse</td>
                <td className="p-4 font-semibold text-rose-600 dark:text-rose-400">OKR &amp; 1-on-1 sync</td>
                <td className="p-4">N/A</td>
                <td className="p-4">Team shared</td>
                <td className="p-4">$5.60/user/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. GLOSSARY */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Domain Terminology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Essential Meeting Coaching &amp; Leadership Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Key terminology defining conversational analytics, management psychology, and executive coaching.
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
            Everything you need to know about coaching privacy, talk time ratios, and leadership development.
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
                      isOpen ? "rotate-180 text-rose-500" : ""
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
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to Become a More Empathetic, Effective Leader?
            </h2>
            <p className="text-rose-100 text-sm md:text-base">
              Browse our directory of top-rated AI 1-on-1 meeting coaches, compare speech analytics features, and unlock leadership excellence today.
            </p>
            <div className="pt-2">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-rose-700 hover:bg-slate-100 shadow-lg transition-all duration-200"
              >
                <span>Browse All Meeting Coaches</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
