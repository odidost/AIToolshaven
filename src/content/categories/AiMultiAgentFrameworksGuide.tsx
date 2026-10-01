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
  Network, 
  GitBranch, 
  Layers, 
  Users, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  Workflow,
  Share2
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is a multi-agent AI framework and why is it superior to single LLM prompts?",
    answer: "A multi-agent AI framework orchestrates multiple specialized AI agents—each equipped with distinct system personas, memory, tools, and evaluation responsibilities—collaborating to solve complex problems. Single LLMs quickly degrade in quality when asked to perform research, synthesis, writing, and code validation in a single pass. Multi-agent systems divide labor (e.g. Researcher -> Writer -> Critic -> QA Tester), mimicking high-performing human engineering teams to achieve exponentially higher output quality."
  },
  {
    question: "What are the best multi-agent frameworks in 2026?",
    answer: "CrewAI and LangGraph dominate modern multi-agent development. CrewAI is celebrated for its intuitive role-based abstractions ('Crew', 'Agent', 'Task'), enterprise team coordination, and swift production setup. LangGraph (by LangChain) is the engineer's choice for complex, stateful cyclical architectures, providing low-level graph primitives, persistent human-in-the-loop checkpoints, and deterministic flow branching."
  },
  {
    question: "What is the difference between hierarchical and peer-to-peer (swarm) agent architectures?",
    answer: "In a hierarchical architecture (e.g. CrewAI Manager), a designated Manager Agent receives the high-level objective, delegates sub-tasks to specialized worker agents, evaluates their deliverables, and iterates until satisfied. In a swarm or peer-to-peer architecture (e.g. AutoGen / Swarm), agents pass context directly between each other based on emergent conversational handoffs without centralized top-down supervision."
  },
  {
    question: "How do multi-agent systems prevent token bloat and runaway API bills?",
    answer: "Leading frameworks prevent token bloat through scoped memory isolation and state pruning. Instead of passing the entire raw conversation history to every single agent in the network, frameworks like LangGraph pass only relevant state variables and succinct task summaries between nodes, keeping context windows lightweight and reducing API token expenditure by up to 65%."
  }
];

const useCases = [
  {
    title: "Autonomous Software Engineering Teams",
    badge: "Code Generation & Peer Review",
    desc: "Simulate a complete virtual software dev agency where a Product Manager writes specs, an Architect designs schema, a Developer codes, and a QA Agent writes and runs unit tests.",
    benefits: [
      "Automated code review loops rejecting insecure or failing code before commit",
      "Dynamic test generation verifying runtime execution in sandboxed environments",
      "Cut feature development cycles from 2 weeks down to 45 minutes"
    ],
    highlight: "Delivered 100% test-passing microservices autonomously with zero developer intervention"
  },
  {
    title: "Deep Financial & Investment Due Diligence",
    badge: "Multi-Source Research Swarms",
    desc: "Deploy a swarm of research agents: one pulls SEC 10-K filings, another scrapes analyst sentiment, a third audits balance sheet anomalies, and an Executive Editor drafts the final investment memo.",
    benefits: [
      "Parallel data retrieval cutting multi-source research time by 80%",
      "Adversarial debate between Bull and Bear agents identifying hidden valuation risks",
      "Standardized institutional PDF deliverable formatting with verified citations"
    ],
    highlight: "Synthesized 200-page institutional M&A diligence report in under 20 minutes"
  },
  {
    title: "Content Marketing & Editorial Desks",
    badge: "Editorial Pipeline Automation",
    desc: "Coordinate SEO Strategist, Investigative Journalist, Copywriter, and Fact-Checking agents to publish deeply researched, original thought leadership at scale.",
    benefits: [
      "Rigorous internal fact-checking agent verifying every claim against trusted sources",
      "Topical authority clustering ensuring comprehensive semantic coverage",
      "Automated voice governance matching enterprise editorial brand guidelines"
    ],
    highlight: "Scaled publication velocity by 5x while elevating editorial engagement and dwell time"
  }
];

const glossaryTerms = [
  {
    term: "Cyclical State Graph",
    definition: "An agent architecture (pioneered by LangGraph) that supports cyclic loops (e.g., Code -> Test -> Fail -> Edit -> Re-test) rather than rigid linear DAG pipelines."
  },
  {
    term: "Role-Based Specialization",
    definition: "Configuring individual AI agents with hyper-focused system prompts, dedicated tools, and strict output schemas to prevent cognitive overload."
  },
  {
    term: "Adversarial Critique Loop",
    definition: "A workflow where a 'Critic' or 'Judge' agent independently evaluates the output of a 'Creator' agent, forcing revisions until predefined quality metrics are satisfied."
  },
  {
    term: "Deterministic Graph Branching",
    definition: "Conditional routing within an agent network that sends execution down different code paths based on programmatic checks or LLM classification scores."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiMultiAgentFrameworksGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white p-8 md:p-14 border border-blue-500/20 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Agent Orchestration, State Graphs & Swarm Systems 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Multi-Agent Frameworks: <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Orchestrate Swarms for Complex Software & Research</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Single prompt engineering has reached its architectural limits. Discover the premier multi-agent frameworks that orchestrate collaborative swarms of specialized agents with state graphs, peer review loops, and autonomous task delegation.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Agent Architecture Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why monolithic megagigantic prompts are being replaced by modular agent swarms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Monolithic Megaprompt Degradation</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Shoving research instructions, coding logic, and formatting rules into a single 4,000-word prompt leads to hallucinated data, missed constraints, and shallow answers.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Linear Chain Fragility</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Basic sequential chains (Step 1 &rarr; Step 2 &rarr; Step 3) break permanently if Step 2 returns an error, possessing zero ability to loop back, reflect, or self-correct.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-950 to-slate-900 text-white border border-blue-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Specialized Multi-Agent Swarms</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Agents with designated roles (Manager, Analyst, Coder, Critic) collaborate over cyclic state graphs, cross-validating each other's deliverables until objective perfection.
            </p>
          </div>
        </div>
      </section>

      {/* 2.5 INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 md:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Calculator className="w-4 h-4" />
              Complex Engineering & Research Economics Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Single LLM vs Multi-Agent Swarm</h2>
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
              Single Monolithic LLM Prompt
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-blue-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Multi-Agent Orchestration (CrewAI / LangGraph)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Complex Task Success Rate
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "34.2%" : "91.6%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Fails on edge cases, missing citations, or syntactic bugs" 
                : "Peer review and QA agents catch and correct errors before delivery"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-blue-500" />
              Human Rework & Debugging Time
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "3.5 Hours" : "12 Minutes"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Engineers manually refactor broken code and verify facts" 
                : "Self-healing test loops resolve syntax and unit test failures autonomously"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-indigo-500" />
              Total Engineering Value Delivered
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$120 /task" : "$1,450 /task"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Simple text generation requiring heavy post-processing" 
                : "Production-ready code modules with test suites and documentation"}
            </p>
          </div>
        </div>
      </section>

      {/* 3.0 EDITOR'S CHOICE SPOTLIGHT */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 md:p-12 border border-blue-500/30 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-400" />
              Editor's Choice 2026: Benchmark Multi-Agent Framework
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              CrewAI — Production-Ready Collaborative AI Teams
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              CrewAI has rapidly become the premier multi-agent orchestration framework for enterprise developers. With clean, human-like abstractions (Agents, Tasks, Crews, Processes), built-in delegation mechanisms, and native LangChain tool compatibility, CrewAI makes building autonomous engineering and research teams straightforward and robust.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                Role-Based Autonomous Delegation & Management
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                Sequential, Hierarchical & Consensual Execution
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                Native Integration with 100+ LangChain Tools & Webhooks
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                CrewAI Enterprise Platform for Deployment & Telemetry
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-full lg:w-72 shrink-0 space-y-4 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400">Open-Source Core</div>
            <div className="text-4xl font-black text-white">Free <span className="text-sm font-normal text-slate-400">/MIT</span></div>
            <div className="text-xs text-blue-300">Enterprise cloud control plane available</div>
            <Link 
              href="/tools/crewai"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors text-sm shadow-lg shadow-blue-600/25"
            >
              Explore CrewAI
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 TOP 3 ALTERNATIVES MATRIX & BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 Multi-Agent Frameworks Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Evaluating frameworks by orchestration style, developer control, ecosystem maturity, and ease of use.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-4 sm:p-5">Framework</th>
                <th className="p-4 sm:p-5">Core Philosophy</th>
                <th className="p-4 sm:p-5">State Control</th>
                <th className="p-4 sm:p-5">Cyclic Execution</th>
                <th className="p-4 sm:p-5">Learning Curve</th>
                <th className="p-4 sm:p-5">License</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  CrewAI
                </td>
                <td className="p-4 sm:p-5">Role-Based Team Collaboration</td>
                <td className="p-4 sm:p-5">Hierarchical Context Passing</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Reflective Review Loops</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Beginner to Intermediate</td>
                <td className="p-4 sm:p-5 font-medium">MIT Open Source</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  LangGraph
                </td>
                <td className="p-4 sm:p-5">Stateful Low-Level Cyclic Graphs</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Full Typed Reducer State Machine</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Native Cyclic Graphs</td>
                <td className="p-4 sm:p-5">Advanced / Architectural</td>
                <td className="p-4 sm:p-5 font-medium">MIT Open Source</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  AutoGen (Microsoft)
                </td>
                <td className="p-4 sm:p-5">Conversational Multi-Agent Swarms</td>
                <td className="p-4 sm:p-5">Group Chat Conversation Threads</td>
                <td className="p-4 sm:p-5">Conversational turn-taking</td>
                <td className="p-4 sm:p-5">Intermediate</td>
                <td className="p-4 sm:p-5 font-medium">Creative Commons / MIT</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-500" />
              CrewAI vs LangGraph: Team Abstraction vs State Machine
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>CrewAI</strong> provides a high-level, human-intuitive framework where you define agents like "Senior Python Engineer" and "Product Manager" who collaborate automatically. <strong>LangGraph</strong> provides low-level graph mechanics (Nodes, Edges, State Reducers), making it ideal for engineers requiring micro-level state control and custom branching logic.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-500" />
              AutoGen vs CrewAI: Chat Swarm vs Structured Tasks
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>AutoGen</strong> relies on open-ended multi-agent conversation rooms where agents speak back and forth until a solution emerges. <strong>CrewAI</strong> is more structured and deterministic, executing explicit task specifications with assigned deliverables and strict manager evaluation gates.
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 BUYER'S GUIDE: ASYMMETRIC BENTO BLOCKS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Key Architecture Factors for Multi-Agent Systems
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            What technical architects must evaluate before deploying multi-agent swarms into production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">01</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Cyclic State Management</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Real engineering problems require loops: coding &rarr; automated testing &rarr; compilation error &rarr; code revision &rarr; re-testing. Your framework must natively support cyclic graphs without getting trapped in infinite recursion.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">02</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Context Isolation & Token Pruning</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              If an agent swarm passes complete raw transcripts across 6 agents, context limits are quickly exceeded and API costs explode. Ensure the framework allows per-agent scoped memory that passes only distilled state variables.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">03</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Persistent Checkpointing & Time Travel</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When an agent fails on step 8 of a 10-step pipeline, you shouldn't have to re-run steps 1 through 7. Look for frameworks with state persistence that let you rewind state, tweak a prompt, and resume execution mid-stream.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">04</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Telemetry & Execution Tracing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Debugging 5 interacting agents in terminal logs is nearly impossible without visual trace tooling. Ensure compatibility with OpenTelemetry, LangSmith, or dedicated agent inspection dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* 4.5 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4-Step Blueprint to Building a Production Multi-Agent Swarm
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How to architect, test, and deploy a multi-agent system from scratch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Decompose Roles & Tools</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Define 3–4 specific agents with non-overlapping responsibilities (e.g. Scraper, Analyst, QA). Equip each agent exclusively with the tools required for its role.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Define State Schema</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Establish a strongly-typed Pydantic state model defining what data is passed between agents, avoiding unstructured freeform text handoffs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Implement Critic Reflection</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Add an evaluation node that tests deliverables against strict criteria (e.g. unit tests pass or factual claims cited). Loop back to the creator agent upon failure.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Set Budget Limits & Deploy</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Configure maximum recursion limits (e.g. max 5 critique loops) and token quotas before wrapping the agent swarm behind a production FastAPI endpoint.
            </p>
          </div>
        </div>
      </section>

      {/* 5.0 WHO BENEFITS MOST (VERTICAL TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from Multi-Agent Frameworks?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Select your technical discipline to see tailored architectural workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2">
            {useCases.map((uc, index) => (
              <button
                key={index}
                onClick={() => setActiveUseCase(index)}
                className={`text-left p-4 rounded-xl transition-all border ${
                  activeUseCase === index
                    ? "bg-white dark:bg-slate-800 border-blue-500/50 shadow-md text-slate-900 dark:text-white font-semibold"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                <div className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider mb-1">
                  {uc.badge}
                </div>
                <div className="text-sm sm:text-base">{uc.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {useCases[activeUseCase].badge}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {useCases[activeUseCase].title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {useCases[activeUseCase].desc}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Orchestration Capabilities:
              </h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-xs sm:text-sm text-blue-900 dark:text-blue-200 font-medium">
              🤖 <strong>Engineering Proof:</strong> {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 TECHNICAL GLOSSARY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <BookOpen className="w-4 h-4" />
          Multi-Agent Systems & State Graph Lexicon
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {glossaryTerms.map((term, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white text-sm">{term.term}</div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{term.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6.0 SEO FAQ ACCORDION */}
      <section className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Answers to common questions regarding multi-agent architectures, state management, and framework selection.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index} 
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
