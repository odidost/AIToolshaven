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
  Video, 
  Scissors, 
  Clock, 
  Globe, 
  Target, 
  TrendingUp, 
  Users, 
  Compass, 
  Layers, 
  Search, 
  Check,
  PlaySquare
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI async video meeting tool and how does it replace live calls?",
    answer: "An AI asynchronous video meeting tool allows distributed teams to record high-resolution screen, webcam, and microphone presentations on their own time. Integrated AI models automatically trim awkward pauses and filler words ('um', 'ah'), generate timecoded chapters, draft executive bullet summaries, and produce instant multi-language transcripts, allowing colleagues to consume 30-minute meeting content in 3 minutes across different time zones."
  },
  {
    question: "What are the best AI async video meeting platforms in 2026?",
    answer: "Loom AI is the market leader for fast, frictionless screen recording, automated title generation, and instant task summaries. Claap AI combines async screen video with collaborative workspace features like video-based commenting and meeting notes. Tella delivers studio-grade multi-layout video editing tailored for product demos and creator marketing. Vidyard AI specializes in video messaging for sales teams with deep CRM tracking."
  },
  {
    question: "How does AI filler word removal and pause trimming work?",
    answer: "Using acoustic waveform analysis and speech-to-text alignment, the AI identifies disfluencies (such as 'ums', 'uhs', stuttered syllables, and dead silence exceeding 1.5 seconds). It surgically splices out those audio frames and uses smooth video frame blending to eliminate jump cuts, resulting in a tight, professional presentation without requiring manual timeline video editing."
  },
  {
    question: "How do teams handle feedback and discussions on async video meetings?",
    answer: "Modern async video platforms feature interactive timestamped commenting and emoji reactions. Instead of scheduling a 45-minute follow-up call, viewers drop comments directly onto the video progress bar at exact seconds. Team members can reply with text, attach files, or record a quick 20-second async video response."
  }
];

const useCases = [
  {
    title: "Global Time-Zone Engineering & Product Hand-Offs",
    badge: "Distributed Operations",
    desc: "Eliminate late-night or early-morning syncs across US, European, and Asian offices by recording high-context technical walkthroughs.",
    benefits: [
      "Replaces 60-minute sprint kickoffs with 8-minute async video walkthroughs",
      "Auto-generates table of contents chapters so devs jump straight to API demos",
      "Allows engineers to review complex PR walk-throughs at 1.5x speed"
    ],
    highlight: "Eliminated 14 recurring weekly cross-timezone status syncs for a team of 40"
  },
  {
    title: "Product Feature Demos & Customer Onboarding",
    badge: "Customer Success",
    desc: "Send personalized, high-production async product onboarding videos to enterprise customers without spending hours on live screenshares.",
    benefits: [
      "Tracks viewer analytics: see exactly which sections customers watched or skipped",
      "Auto-generates clean action summaries and link checklists below the video",
      "Maintains a centralized library of reusable product capability answers"
    ],
    highlight: "Reduced customer onboarding ticket resolution time by 52%"
  },
  {
    title: "Executive All-Hands & Strategic Company Updates",
    badge: "Internal Communications",
    desc: "Broadcast leadership memos and company quarterly metrics with engaging webcam and slide overlays that team members can consume on their schedule.",
    benefits: [
      "Provides AI-crafted TL;DR bullet points alongside the full executive recording",
      "Enables employees to ask anonymous or tagged questions at exact video timestamps",
      "Ensures 100% message consistency across remote, hybrid, and in-office staff"
    ],
    highlight: "Increased company-wide leadership update viewership from 34% to 91%"
  }
];

const glossaryTerms = [
  {
    term: "Asynchronous Communication",
    definition: "Exchange of information and collaboration that does not require participants to be present at the same time or location."
  },
  {
    term: "Disfluency Auto-Trimming",
    definition: "Acoustic AI algorithms that detect and excise filler words ('um', 'like', 'ah') and unnatural silent pauses from video timelines."
  },
  {
    term: "Timestamped Threaded Feedback",
    definition: "Interactive commentary pinned to specific video seconds, enabling contextual feedback directly on UI elements or slide bullets."
  },
  {
    term: "Video Engagement Heatmap",
    definition: "Analytics visualizing which segments of an async presentation were watched repeatedly, skimmed through, or abandoned by viewers."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiAsyncVideoMeetingsGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-center space-y-6 pt-6 md:pt-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Category Deep-Dive: AI Async Video Meetings</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
          Kill Meeting Fatigue &amp; Work Across Time Zones With <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500">AI Async Video Meetings</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Why waste an hour on a live call when a 4-minute polished video will do? Explore how AI asynchronous video tools auto-cut filler words, generate chapters, summarize decisions, and liberate teams from back-to-back calendar traps.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/25 transition-all duration-200"
          >
            <span>Explore Async Video Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200"
          >
            <span>How Async AI Works</span>
          </a>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Async Revolution: Replacing Live Calendar Gridlock
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Why high-growth distributed organizations are ditching live syncs in favor of AI-enhanced screen videos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-violet-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Calendar Sovereignty &amp; Deep Work
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Fragmented calendar schedules featuring 30-minute syncs scattered throughout the day destroy cognitive focus. Async video protects 4+ hour blocks of uninterrupted deep work by shifting non-urgent discussions to on-demand video.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Instant Studio-Quality Polish
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Recording an unscripted screen share used to require multiple re-takes. Modern async AI automatically trims awkward pauses, silences coughing, deletes verbal hesitation, and adds custom titles, delivering a flawless presentation in one take.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-pink-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Time-Shifted Multi-Language Reach
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Global teams across 12 time zones can digest the exact same high-fidelity message. AI models automatically translate captions, subtitle videos, and synthesize translated voice tracks into Japanese, German, Spanish, and 40+ other languages.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE IMPACT / ROI CALCULATOR */}
      <section className="p-6 md:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-pink-500/10 pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Time Reclaim Modeler</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Synchronous Meeting Elimination &amp; Focus ROI
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Calculate the total team hours saved per week by replacing routine 30-minute status meetings with AI-edited async video clips.
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
                Live Zoom Status Meetings
              </button>
              <button
                onClick={() => setCalculatorMode("ai")}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  calculatorMode === "ai"
                    ? "bg-violet-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                AI Async Video Messaging
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Clock className="w-5 h-5 text-violet-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "30.0 min" : "4.2 min"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Average Duration Per Topic
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Small talk + calendar scheduling" : "Tight, trimmed async recording"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Users className="w-5 h-5 text-purple-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "6 people" : "1 recorder"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Real-Time Attendance Locked
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Everyone&apos;s afternoon interrupted" : "Consumed asynchronously"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <DollarSign className="w-5 h-5 text-pink-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "$180.00" : "$12.50"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Payroll Cost Per Discussion
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "6 engineers &times; $60/hr wage" : "Single sender &times; 10 min record"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <TrendingUp className="w-5 h-5 text-violet-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-violet-400">
                {calculatorMode === "traditional" ? "Baseline" : "14.4x Savings"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Productivity Multiplier
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Constant schedule context switching" : "Unbroken afternoon maker time"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE ARCHITECTURE */}
      <section id="architecture" className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Deep Dive</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Stage Architecture of AI Async Video Meetings
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            From desktop video screen capture to AI-edited, chapterized, and distributed presentations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Dual-Stream Recording
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Captures separate high-framerate 4K display tracks and 1080p webcam camera streams with studio microphone noise suppression.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Disfluency Pruning
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Acoustic neural networks identify spoken filler sounds (&apos;um&apos;, &apos;uh&apos;, &apos;like&apos;) and silent voids, splicing them out while blending visual frames.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Chapter &amp; Task Synthesis
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              LLMs structure the video timeline into clickable chapter markers, draft an executive summary, and generate a checklist of callouts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Interactive Webhook Hub
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Embeds the recording in Slack, Notion, or Jira with inline previews, allowing viewers to comment and emoji react at exact second timestamps.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Top 3 AI Async Video Meeting Platforms Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Evaluating platforms on AI polish, editing flexibility, collaboration features, and enterprise security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-violet-500/30 dark:border-violet-500/20 shadow-md space-y-6 relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400">
              <Crown className="w-3.5 h-3.5" />
              <span>Global Industry Standard</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Loom AI</h3>
              <p className="text-xs text-slate-500 mt-1">Instant sharing, automated summaries &amp; filler trimming</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                <span>Auto-removes &apos;ums&apos;, &apos;ahs&apos;, and silent pauses with a single toggle</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                <span>Instantly drafts video titles, chapters, and summary bullet points</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                <span>Native Atlassian, Slack, Notion, and Gmail interactive embeds</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Fast-moving remote teams, product managers, and developers</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Best Collaboration Hub</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Claap AI</h3>
              <p className="text-xs text-slate-500 mt-1">Collaborative video workspace with meeting notes &amp; polls</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>Combines screen video messaging with team meeting notes repository</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>Inline contextual video comments and decision polls</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>Searchable video wiki with automated transcription in 90+ languages</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Designers, marketing squads, and distributed product teams</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-600 dark:text-pink-400">
              <PlaySquare className="w-3.5 h-3.5" />
              <span>Best for Custom Layouts &amp; Demos</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Tella</h3>
              <p className="text-xs text-slate-500 mt-1">Studio-grade multi-scene layouts &amp; creator editing</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>Modular multi-clip recording with split-screen, zoom, and crop</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>Dynamic background styles, custom branded watermarks, and 4K export</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>AI auto-captions with custom font typography and styling</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Sales demos, customer education courses, and marketing walkthroughs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TABBED USE CASES */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            How High-Performing Organizations Use Async Video
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Explore async meeting workflows across engineering, customer success, and executive leadership.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {useCases.map((uc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveUseCase(idx)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeUseCase === idx
                  ? "bg-violet-600 text-white shadow-md shadow-violet-500/20"
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
                <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 text-xs md:text-sm text-violet-700 dark:text-violet-300 font-medium">
            <strong>Demonstrated Metric: </strong> {useCases[activeUseCase].highlight}
          </div>
        </div>
      </section>

      {/* 7. IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Step Transition From Live Meetings to Async Video
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How to establish an asynchronous-first culture and train teams to record concise presentations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">Step 01</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Identify Status Syncs</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Audit team calendars for recurring one-way status updates, product walk-throughs, and multi-person announcement meetings.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">Step 02</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">5-Minute Rule</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Set a firm culture guideline: all async videos should aim for under 5 minutes. Let AI trim pauses and produce bullet summaries.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">Step 03</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Channel Embeds</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Post video links directly inside relevant Slack channels or Jira tickets, encouraging colleagues to comment directly on timestamps.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">Step 04</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Archive &amp; Search</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Centralize recordings in an indexed video library, enabling new hires to search past architecture demos and strategic memos instantly.
            </p>
          </div>
        </div>
      </section>

      {/* 8. COMPARISON BRIDGE TABLE */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Feature Comparison: AI Async Video Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Detailed breakdown of video trimming, chapter generation, layout editing, and pricing tiers.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                <th className="p-4">Platform</th>
                <th className="p-4">Filler Word Removal</th>
                <th className="p-4">AI Chapters &amp; Recap</th>
                <th className="p-4">Max Resolution</th>
                <th className="p-4">Viewer Analytics</th>
                <th className="p-4">Free Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Loom AI</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">1-Click Automated</td>
                <td className="p-4">Auto-generated</td>
                <td className="p-4">4K UHD</td>
                <td className="p-4">Detailed heatmaps</td>
                <td className="p-4">Up to 25 videos (5 min max)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Claap AI</td>
                <td className="p-4 font-semibold text-violet-600 dark:text-violet-400">Included</td>
                <td className="p-4">Auto notes + tasks</td>
                <td className="p-4">1080p HD</td>
                <td className="p-4">View rates &amp; polls</td>
                <td className="p-4">10 free claaps</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Tella</td>
                <td className="p-4 text-slate-500">Timeline trimmer</td>
                <td className="p-4">Captions only</td>
                <td className="p-4">4K 60FPS</td>
                <td className="p-4">Basic view counts</td>
                <td className="p-4">7-day free trial</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Vidyard AI</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">Basic trimming</td>
                <td className="p-4">Script generator</td>
                <td className="p-4">1080p HD</td>
                <td className="p-4">CRM integration alerts</td>
                <td className="p-4">25 free videos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. GLOSSARY */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Domain Terminology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Essential Asynchronous Video Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Key terminology defining the shift toward asynchronous screen messaging and video collaboration.
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
            Everything you need to know about replacing live meetings, audio trimming, and collaborative video feedback.
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
                      isOpen ? "rotate-180 text-violet-500" : ""
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
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to Reclaim Your Calendar With Async Video?
            </h2>
            <p className="text-violet-100 text-sm md:text-base">
              Browse our directory of top-rated AI asynchronous screen recorders, compare features, and free your team from meeting fatigue.
            </p>
            <div className="pt-2">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-violet-700 hover:bg-slate-100 shadow-lg transition-all duration-200"
              >
                <span>Browse All Async Video Tools</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
