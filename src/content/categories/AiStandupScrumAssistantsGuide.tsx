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
  Kanban, 
  AlertTriangle, 
  GitPullRequest, 
  Target, 
  TrendingUp, 
  Users, 
  Compass, 
  Layers, 
  Search, 
  Check,
  CheckSquare
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI standup and scrum assistant and how does it automate agile syncs?",
    answer: "An AI standup and scrum assistant is an agile workflow copilot that automates daily engineering check-ins, sprint planning summaries, and retrospective documentation. Operating through Slack, Microsoft Teams, or live meeting audio, it collects progress updates ('What did you do yesterday? What are you doing today? What is blocking you?'), correlates them with GitHub pull requests and Jira/Linear tickets, and flags delivery blockers before they derail a sprint."
  },
  {
    question: "What are the best AI standup and scrum assistants in 2026?",
    answer: "Spinach.ai is the premier AI Scrum Master that joins live standups on Zoom or Google Meet, auto-drafts Jira tickets, and updates sprint boards in real time. Geekbot is the industry standard for asynchronous Slack and Teams standups, surveys, and retrospectives. Standuply excels in multi-timezone agile project management with automated Scrum metrics. DailyBot provides workflow check-ins, mental well-being tracking, and automated sprint recaps."
  },
  {
    question: "Can an AI standup assistant automatically update tickets in Jira and Linear?",
    answer: "Yes. Advanced copilots like Spinach.ai listen to engineers discussing bug fixes or feature branches during standups. The AI automatically creates new bug tickets, updates status columns (e.g. In Progress &rarr; Done), logs story points, and assigns owners directly in Jira, Linear, or ClickUp without requiring scrum masters to manually manage the board."
  },
  {
    question: "How do async AI standup bots resolve time zone friction for distributed engineering teams?",
    answer: "Async standup bots prompt developers inside their local working hours (e.g. 9:00 AM local time). Engineers submit quick text or audio snippets. The AI aggregates all team responses into a cohesive, prioritized morning digest for engineering managers, highlighting critical blockers and cross-team dependencies without forcing anyone into a midnight video call."
  }
];

const useCases = [
  {
    title: "Autonomous Live Standup Scribing & Ticket Generation",
    badge: "Agile Automation",
    desc: "Deploy an AI copilot into daily 15-minute engineering standups to capture action items, create tickets, and update sprint boards automatically.",
    benefits: [
      "Listens to verbal updates and creates formatted Jira or Linear issues instantly",
      "Assigns subtasks and updates ticket status without human scrum master friction",
      "Compresses 15-minute rambles into a tight 60-second Slack action summary"
    ],
    highlight: "Saved 2.5 hours of manual Jira board administrative updates per sprint"
  },
  {
    title: "Sprint Blocker & Dependency Early Warning System",
    badge: "Risk Mitigation",
    desc: "Automatically detect unresolved pull requests, waiting code reviews, and cross-team API dependencies before they impact sprint velocity.",
    benefits: [
      "Flags dependencies where Frontend is blocked waiting on Backend staging deploys",
      "Pings reviewers when PRs have languished in code review for over 24 hours",
      "Alerts engineering managers to recurring technical debt complaints"
    ],
    highlight: "Reduced sprint delivery slippage by 34% across 18 distributed agile squads"
  },
  {
    title: "AI-Powered Sprint Retrospectives & Sentiment",
    badge: "Continuous Improvement",
    desc: "Gather anonymous sprint feedback, cluster recurring pain points into thematic groups, and draft actionable retrospective experiment items.",
    benefits: [
      "Clusters team retros into 'What went well', 'What broke', and 'Action ideas'",
      "Tracks team morale and burnout signals over consecutive sprint cycles",
      "Provides quantifiable data for engineering managers during quarterly reviews"
    ],
    highlight: "Increased retrospective action item completion rates from 28% to 84%"
  }
];

const glossaryTerms = [
  {
    term: "Asynchronous Standup",
    definition: "Daily agile status check-in conducted via Slack or Teams text prompts rather than a live synchronous video conference."
  },
  {
    term: "Blocker Clustering",
    definition: "LLM grouping of individual developer roadblocks into core architectural, third-party API, or dependency bottlenecks."
  },
  {
    term: "Agile Ticket Auto-Drafting",
    definition: "Synthesizing conversational bug descriptions during standups into structured Jira/Linear user stories with acceptance criteria."
  },
  {
    term: "Sprint Velocity Hygiene",
    definition: "Maintaining accurate story points, completed tickets, and burndown charts in project management tools with zero manual overhead."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiStandupScrumAssistantsGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-center space-y-6 pt-6 md:pt-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Category Deep-Dive: AI Standup &amp; Scrum Assistants</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
          Supercharge Engineering Agility With <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-red-500">AI Standup &amp; Scrum Copilots</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Stop wasting developer hours on repetitive status syncs and manual Jira updates. Discover how AI scrum assistants automate daily standups, auto-create tickets from verbal check-ins, detect sprint blockers, and keep agile squads aligned effortlessly.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-500/25 transition-all duration-200"
          >
            <span>Explore Scrum AI Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200"
          >
            <span>Scrum Architecture</span>
          </a>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Agile Evolution: Autonomous Standups &amp; Board Hygiene
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Why high-velocity software engineering organizations are modernizing daily standups with generative AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-amber-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Zero Standup Context Fragmentation
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Traditional standups force 8 engineers to wait while individuals monologue for 5 minutes each. AI async check-ins collect updates in parallel, allowing developers to read updates in 45 seconds when it fits their schedule.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-orange-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Instant Jira &amp; Linear Synchronization
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Engineers hate manual ticket maintenance. AI scrum copilots listen to verbal commits during standups or read GitHub PR merges, updating sprint boards and moving cards across columns with zero manual ticketing chore.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-red-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Predictive Blocker Triage
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When a junior dev mentions they are stuck on an unmerged database migration, the AI flags the dependency in the manager&apos;s Slack view immediately, preventing a 3-day delivery bottleneck from going unnoticed until the end of the sprint.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE IMPACT / ROI CALCULATOR */}
      <section className="p-6 md:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10 pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Sprint Efficiency Modeler</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Engineering Velocity &amp; Standup Time Reclaimed
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Calculate developer engineering hours and annual salary dollars reclaimed by automating daily standups and sprint board upkeep.
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
                Manual Daily Zoom Standup
              </button>
              <button
                onClick={() => setCalculatorMode("ai")}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  calculatorMode === "ai"
                    ? "bg-amber-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                AI Scrum Assistant
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Timer className="w-5 h-5 text-amber-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "20-25 min" : "2 minutes"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Daily Dev Time Spent
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Synchronous call + waiting turn" : "Quick async check-in"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <CheckSquare className="w-5 h-5 text-orange-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "54%" : "99.1%"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Jira Board Accuracy
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Outdated tickets & columns" : "Auto-synced from commits & standups"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <DollarSign className="w-5 h-5 text-amber-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "$31,200" : "$1,800"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Annual Standup Cost (Team of 8)
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Developer hourly payroll" : "SaaS subscription cost"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <TrendingUp className="w-5 h-5 text-red-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-amber-400">
                {calculatorMode === "traditional" ? "Baseline" : "17.3x ROI"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Agile Multiplier
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Frequent sprint delays" : "Sprint velocity acceleration"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE ARCHITECTURE */}
      <section id="architecture" className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Deep Dive</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Stage Architecture of AI Standup &amp; Scrum Copilots
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How autonomous scrum tools orchestrate check-ins, resolve blockers, and keep project trackers in sync.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Multi-Channel Ingestion
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Collects updates via conversational Slack/Teams bots or listens in on live Zoom audio, extracting developer progress statements.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              VCS &amp; PR Correlation
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Cross-references spoken developer updates with GitHub/GitLab pull requests, commit branches, and CI/CD deployment pipelines.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Blocker NLP Parsing
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Detects explicit and implicit roadblocks, tags the blocking team (DevOps, QA, Design), and pings relevant engineers to clear blockers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Jira/Linear Auto-Sync
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Updates sprint board card statuses, writes ticket descriptions with acceptance criteria, and generates team burndown digests.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Top 3 AI Standup &amp; Scrum Assistants Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Evaluating leading platforms on live vs async execution, ticket generation, and team integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-amber-500/30 dark:border-amber-500/20 shadow-md space-y-6 relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Crown className="w-3.5 h-3.5" />
              <span>Best for Live Meeting Scrum</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Spinach.ai</h3>
              <p className="text-xs text-slate-500 mt-1">Autonomous AI Scrum Master for live meetings &amp; ticketing</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Joins Zoom/Google Meet and writes structured tickets into Jira &amp; Linear</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Facilitates sprint planning, retrospectives, and backlog refinement</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Posts concise action summaries directly to team Slack channels</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Agile engineering teams running synchronous daily standups</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Best for Async Slack/Teams</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Geekbot</h3>
              <p className="text-xs text-slate-500 mt-1">Asynchronous check-ins, NLP sentiment &amp; retros</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Prompts developers in their local time zone via Slack &amp; MS Teams</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>AI sentiment analysis tracking team engagement and burnout risks</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Deep integrations with GitHub, Jira, and Google Sheets</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Globally distributed software teams wanting zero video meetings</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400">
              <Kanban className="w-3.5 h-3.5" />
              <span>Best Multi-Timezone Agile Hub</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Standuply</h3>
              <p className="text-xs text-slate-500 mt-1">Agile project bot with audio/video check-ins</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Supports voice, video snippet, and text async standup answers</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Automated agile sprint charts and backlog grooming reminders</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Internal team Q&amp;A knowledge base with mentor routing</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Agile coaches and engineering leaders managing multi-team divisions</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TABBED USE CASES */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Transforming Agile Execution Across the Sprint Lifecycle
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            See how AI scrum copilots accelerate daily check-ins, sprint planning, and retrospective feedback.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {useCases.map((uc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveUseCase(idx)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeUseCase === idx
                  ? "bg-amber-600 text-white shadow-md shadow-amber-500/20"
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
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs md:text-sm text-amber-700 dark:text-amber-300 font-medium">
            <strong>Demonstrated Metric: </strong> {useCases[activeUseCase].highlight}
          </div>
        </div>
      </section>

      {/* 7. IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Step Agile Rollout Roadmap for AI Standup Bots
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How engineering organizations implement automated standup workflows and connect issue trackers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Step 01</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Channel Integration</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Install the bot in your engineering Slack/Teams workspace and select your dedicated squad channels (#team-core-standup).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Step 02</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Timezone Schedules</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Configure personalized morning check-in prompts based on each developer&apos;s local working hours and sprint cadences.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Step 03</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Jira/Linear Webhook</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Authorize bi-directional ticket syncing to auto-move issues to &apos;In Progress&apos; or &apos;Blocked&apos; based on standup mentions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Step 04</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Blocker Escalations</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Set automated alert thresholds so persistent blockers trigger instant manager alerts if unresolved for more than 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* 8. COMPARISON BRIDGE TABLE */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Feature Comparison: AI Standup &amp; Scrum Assistants
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Detailed breakdown of real-time audio scribing, async check-in modes, and project management sync.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                <th className="p-4">Platform</th>
                <th className="p-4">Live Video Standup Bot</th>
                <th className="p-4">Async Slack/Teams</th>
                <th className="p-4">Ticket Generation</th>
                <th className="p-4">Retro Support</th>
                <th className="p-4">Free Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Spinach.ai</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (Zoom &amp; Meet)</td>
                <td className="p-4">Slack summary digests</td>
                <td className="p-4">Jira, Linear, ClickUp</td>
                <td className="p-4">Comprehensive AI</td>
                <td className="p-4">Free trial available</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Geekbot</td>
                <td className="p-4 text-slate-400">No (Async only)</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (Industry leader)</td>
                <td className="p-4">Jira integration</td>
                <td className="p-4">Automated surveys</td>
                <td className="p-4">Free for up to 10 users</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Standuply</td>
                <td className="p-4 text-slate-400">No (Audio/video async)</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (Slack &amp; Teams)</td>
                <td className="p-4">Jira, Trello, Asana</td>
                <td className="p-4">Full retro polls</td>
                <td className="p-4">Free for up to 3 users</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">DailyBot</td>
                <td className="p-4 text-slate-400">No (Async only)</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (Multi-chat)</td>
                <td className="p-4">Jira, Linear, Trello</td>
                <td className="p-4">Kudos &amp; mood tracking</td>
                <td className="p-4">Free basic plan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. GLOSSARY */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Domain Terminology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Essential Agile &amp; Standup Intelligence Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Key vocabulary defining automated standups, sprint retrospectives, and agile issue management.
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
            Answers to common questions regarding ticket automation, time zone scheduling, and scrum adoption.
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
                      isOpen ? "rotate-180 text-amber-500" : ""
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
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to Accelerate Your Sprint Velocity?
            </h2>
            <p className="text-amber-100 text-sm md:text-base">
              Browse our curated directory of top-rated AI standup and scrum tools, compare ticketing features, and upgrade your agile team today.
            </p>
            <div className="pt-2">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-amber-700 hover:bg-slate-100 shadow-lg transition-all duration-200"
              >
                <span>Browse All Scrum AI Tools</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
