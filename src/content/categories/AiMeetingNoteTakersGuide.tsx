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
  Headphones, 
  Mic, 
  Video, 
  Target, 
  TrendingUp, 
  Users,
  Compass,
  Layers,
  Search,
  Check
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI meeting note taker and how does it transcribe calls?",
    answer: "An AI meeting note taker is an automated intelligence agent that integrates directly into virtual conference platforms (Zoom, Google Meet, Microsoft Teams) or captures local system audio. It uses automatic speech recognition (ASR) paired with speaker diarization to generate real-time, speaker-attributed transcripts, extract executive bullet summaries, and tag assignees with explicit action items and deadlines."
  },
  {
    question: "What are the best AI meeting note takers in 2026?",
    answer: "Fathom is the top-rated AI meeting assistant for individuals and small teams, offering 100% free unlimited recording and AI summaries with seamless HubSpot and Salesforce sync. Fireflies.ai provides the deepest enterprise workspace repository with multi-language transcription and custom prompt templates. Otter.ai excels in real-time collaborative note-taking and live Q&A during calls. tl;dv is the industry standard for customer-facing teams with video snippet clipping and timestamped takeaways."
  },
  {
    question: "Do AI meeting note takers require a bot to visibly join the meeting?",
    answer: "Most cloud platforms deploy a visible bot (e.g., 'Fathom Notetaker' or 'Fireflies AI') to record video and capture cloud audio streams. However, next-generation client-side tools (like Granola, Krisp, and Supernormal desktop apps) record audio locally through virtual audio drivers and system microphones, allowing completely bot-free note taking."
  },
  {
    question: "How do AI note takers protect enterprise data privacy and comply with GDPR?",
    answer: "Top-tier AI note takers are SOC 2 Type II, GDPR, and HIPAA compliant. They offer automated chat disclosures notifying attendees of recording, data residency controls, and cryptographic end-to-end encryption (TLS 1.3 in transit, AES-256 at rest). Furthermore, enterprise agreements strictly prevent client meeting recordings from being used to train foundation LLMs."
  }
];

const useCases = [
  {
    title: "Executive Leadership & Board Governance",
    badge: "Strategic Oversight",
    desc: "Capture multi-stakeholder board meetings and strategic syncs with concise decision matrices, risk flags, and formal action delegations.",
    benefits: [
      "Distills 90-minute executive discussions into 2-minute decision briefs",
      "Assigns clear deliverables with deadlines directly to executive owners",
      "Maintains an immutable, searchable archive of board governance decisions"
    ],
    highlight: "Saved 6.5 hours of manual executive assistant transcription per week per executive"
  },
  {
    title: "Engineering Sprint Reviews & Architecture Syncs",
    badge: "Technical Precision",
    desc: "Record complex engineering debates, technical trade-offs, and architectural RFC discussions without losing crucial technical specifics.",
    benefits: [
      "Captures exact API endpoints, bug repros, and architectural decisions",
      "Pushes meeting action items directly into Jira, Linear, and Notion",
      "Enables absent engineers to catch up on 45-minute syncs in 180 seconds"
    ],
    highlight: "Reduced post-meeting alignment syncs by 42% across 35 distributed engineering teams"
  },
  {
    title: "User Experience & Customer Discovery Research",
    badge: "Customer Intelligence",
    desc: "Transform qualitative customer interviews into searchable insight libraries with timestamped video soundbites and sentiment shifts.",
    benefits: [
      "Generates thematic tag clouds of user pain points and feature requests",
      "Creates 15-second video highlight reels to share with product managers in Slack",
      "Transcribes user responses across 30+ languages with contextual jargon recognition"
    ],
    highlight: "Accelerated UX synthesis turnarounds from 4 days to under 30 minutes"
  }
];

const glossaryTerms = [
  {
    term: "Speaker Diarization",
    definition: "The algorithmic process of partitioning an audio stream into homogeneous segments according to individual speaker identity ('Who spoke when')."
  },
  {
    term: "Local Audio Driver Capture",
    definition: "Recording meeting audio directly from the operating system sound card, allowing AI transcription without sending an invitee bot into the call."
  },
  {
    term: "Semantic Action Item Extraction",
    definition: "LLM-driven recognition that detects commitments, tasks, and deadlines within conversational speech and formats them into structured tickets."
  },
  {
    term: "Meeting RAG Archive",
    definition: "A vector database indexing team transcripts, enabling employees to query past discussions using natural language across months of meetings."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiMeetingNoteTakersGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-center space-y-6 pt-6 md:pt-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Category Deep-Dive: AI Meeting Note Takers</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
          Turn Every Conversation Into Actionable Intelligence With <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500">AI Meeting Note Takers</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Stop scrambling to type handwritten notes while missing critical dialogue. Discover how modern AI meeting assistants join Zoom, Meet, and Teams calls to transcribe discussions, extract executive summaries, and automate post-meeting workflows with zero human effort.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/25 transition-all duration-200"
          >
            <span>Explore 60+ Meeting AI Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200"
          >
            <span>How Transcription Works</span>
          </a>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Meeting Paradigm Shift: Why Note-Taking Is Automated
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How autonomous transcription and contextual summarization are eliminating post-meeting administrative drag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              100% Active Conversational Listening
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When meeting participants furiously type notes, their cognitive capacity for deep critical thinking and empathetic rapport drops by over 60%. AI note takers shoulder the recording burden completely, allowing humans to engage authentically.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Zero Action Item Slippage
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Verbal commitments made during meetings often vanish into thin air. Modern note takers identify semantic promises (&quot;I will send the revised forecast by Thursday&quot;), assign owners, and export them directly to task trackers like Jira, Asana, or Slack.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-cyan-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Institutional Knowledge Persistence
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Traditional meetings lock critical insights inside the heads of attendees. AI note takers transform verbal discussions into an indexed, searchable company intelligence brain that colleagues can search months later with natural language queries.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE IMPACT / ROI CALCULATOR */}
      <section className="p-6 md:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10 pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Executive Efficiency Modeler</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Meeting Administrative Cost &amp; Time Reclaimed
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Calculate annual employee hours and organizational payroll saved by automating meeting recaps and action item workflows.
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
                Manual Note Taking
              </button>
              <button
                onClick={() => setCalculatorMode("ai")}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  calculatorMode === "ai"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                AI Autonomous Notetaker
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Timer className="w-5 h-5 text-emerald-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "20-30 min" : "15 seconds"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Post-Call Summary Time
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Re-reading notes & typing emails" : "Instant bullet recap generated"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <CheckCircle2 className="w-5 h-5 text-teal-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "62%" : "99.2%"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Action Item Capture Rate
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Key verbal tasks routinely missed" : "Zero dropped commitments"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <DollarSign className="w-5 h-5 text-emerald-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "$12,400" : "$850"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Annual Cost Per Employee
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Based on 5 weekly syncs @ $65/hr" : "Software license cost only"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <TrendingUp className="w-5 h-5 text-cyan-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-emerald-400">
                {calculatorMode === "traditional" ? "Baseline" : "14.6x ROI"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Efficiency Multiplier
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Standard administrative drag" : "Reclaimed deep-work hours"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE ARCHITECTURE */}
      <section id="architecture" className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Deep Dive</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Stage Architecture of Modern AI Meeting Note Takers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            From raw audio frequency ingestion to structured CRM and Slack synchronization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Acoustic Stream Ingestion
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Captures stereo audio feeds via Zoom/Meet cloud bots or local virtual audio drivers, filtering background acoustic noise and latency spikes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Diarized Speech-to-Text
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Runs speech through Whisper-class ASR models paired with biometric voice embeddings, attributing spoken words to the correct participant with 99%+ accuracy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              LLM Synthesis &amp; Tagging
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Extracts high-level executive summaries, key decisions, and explicit action items while filtering repetitive banter and conversational filler words.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Ecosystem Webhook Sync
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Dispatches formatted meeting recaps to team Slack channels, syncs notes to Notion/Confluence, and logs prospect updates directly into CRM pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Top 3 AI Meeting Note Takers Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Evaluating leading platforms across transcription accuracy, free-tier value, CRM sync, and enterprise compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-emerald-500/30 dark:border-emerald-500/20 shadow-md space-y-6 relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Crown className="w-3.5 h-3.5" />
              <span>Editor&apos;s Pick for Individuals &amp; Sales</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Fathom</h3>
              <p className="text-xs text-slate-500 mt-1">Best-in-class free tier &amp; instant summaries</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>100% Free Unlimited</strong> recording, transcription, and AI summary generation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Instant summary generation ready within 30 seconds of call end</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Native 1-click sync to HubSpot, Salesforce, and Close CRM</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Account Executives, consultants, and lean teams</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Best Enterprise Workspace Hub</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Fireflies.ai</h3>
              <p className="text-xs text-slate-500 mt-1">Universal audio upload &amp; prompt customizer</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>Transcribes 60+ languages with custom vocabulary glossaries</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>Custom AI Apps to extract specialized clinical or legal bullet rubrics</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>AskFred AI conversational search across your entire meeting history</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Global organizations needing multi-language voice archives</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              <Video className="w-3.5 h-3.5" />
              <span>Best for Video Snippets &amp; Product Teams</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">tl;dv</h3>
              <p className="text-xs text-slate-500 mt-1">Video clip bookmarks &amp; customer research</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>1-click video timestamp clipping to share customer pain points</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>Automated multi-meeting synthesis of customer feature feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>Lightweight browser extension or automated Zoom/Meet bot</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Product managers, UX researchers, and customer success reps</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TABBED USE CASES */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Real-World Impact Across Organizational Functions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            See how different team departments leverage automated meeting note takers to eliminate alignment bottlenecks.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {useCases.map((uc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveUseCase(idx)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeUseCase === idx
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
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
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs md:text-sm text-emerald-700 dark:text-emerald-300 font-medium">
            <strong>Demonstrated Metric: </strong> {useCases[activeUseCase].highlight}
          </div>
        </div>
      </section>

      {/* 7. IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Step Deployment Roadmap for Enterprise Meeting AI
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How to roll out automated note taking company-wide while guaranteeing attendee consent and security compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Step 01</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Calendar Integration</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Connect Google Workspace or Microsoft 365 calendar. Configure auto-join rules for internal vs external client calls.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Step 02</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Consent Governance</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Set automated chat messages notifying participants of recording to maintain compliance with two-party consent laws.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Step 03</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Custom Prompt Rubrics</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Tailor summary outputs per meeting type: BANT frameworks for sales, sprint task formats for engineering, and decision logs for executives.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Step 04</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Downstream Webhooks</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Route action items to Slack, Notion, Jira, and CRM systems automatically, closing the loop between verbal commitment and execution.
            </p>
          </div>
        </div>
      </section>

      {/* 8. COMPARISON BRIDGE TABLE */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Feature Comparison: Top AI Meeting Note Taking Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Detailed breakdown of key capabilities, pricing tiers, and integration ecosystems.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                <th className="p-4">Platform</th>
                <th className="p-4">Free Tier Allowance</th>
                <th className="p-4">Bot-Free Mode</th>
                <th className="p-4">CRM Integrations</th>
                <th className="p-4">Multi-Language</th>
                <th className="p-4">Starting Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Fathom</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">100% Unlimited</td>
                <td className="p-4">Zoom native client</td>
                <td className="p-4">Salesforce, HubSpot, Close</td>
                <td className="p-4">28+ Languages</td>
                <td className="p-4">$15/user/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Fireflies.ai</td>
                <td className="p-4">800 min storage</td>
                <td className="p-4">Audio file upload</td>
                <td className="p-4">Salesforce, HubSpot, Pipedrive</td>
                <td className="p-4">60+ Languages</td>
                <td className="p-4">$10/user/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">tl;dv</td>
                <td className="p-4">Unlimited recordings</td>
                <td className="p-4">Chrome extension</td>
                <td className="p-4">HubSpot, Salesforce</td>
                <td className="p-4">30+ Languages</td>
                <td className="p-4">$20/user/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Otter.ai</td>
                <td className="p-4">300 min/mo</td>
                <td className="p-4">Mobile &amp; desktop mic</td>
                <td className="p-4">Salesforce (Enterprise)</td>
                <td className="p-4">English, French, Spanish</td>
                <td className="p-4">$10/user/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. GLOSSARY */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Domain Terminology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Essential Meeting Intelligence Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Key technical terms defining the state of the art in automated speech recognition and conversation intelligence.
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
            Everything you need to know about transcription accuracy, bot etiquette, and enterprise privacy.
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
                      isOpen ? "rotate-180 text-emerald-500" : ""
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
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to Reclaim 5+ Hours of Meeting Drag Every Week?
            </h2>
            <p className="text-emerald-100 text-sm md:text-base">
              Browse our curated directory of top-rated AI meeting note takers, compare free tiers, and upgrade your team workflow today.
            </p>
            <div className="pt-2">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-emerald-700 hover:bg-slate-100 shadow-lg transition-all duration-200"
              >
                <span>Browse All Meeting AI Tools</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
