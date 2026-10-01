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
  Cpu, 
  Bot, 
  Workflow, 
  Terminal, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  Layers,
  Compass
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an autonomous AI task agent and how does it execute complex goals?",
    answer: "An autonomous AI task agent is an intelligent system capable of breaking down high-level user goals into structured sub-tasks, selecting appropriate software tools, executing actions across web and desktop environments, reflecting on errors, and looping until the objective is accomplished. Unlike standard LLMs that only generate static text responses, autonomous agents interact dynamically with APIs, web browsers, and file systems."
  },
  {
    question: "What are the best autonomous task agents available in 2026?",
    answer: "MultiOn and SuperAGI lead the autonomous execution space. MultiOn is the premier personal web agent capable of taking over your browser to research flights, purchase items, and file forms autonomously. SuperAGI is an enterprise-grade framework enabling businesses to provision, monitor, and deploy infrastructure-connected autonomous worker agents with persistent memory and tool ecosystems."
  },
  {
    question: "How do autonomous agents recover when they encounter an error or broken webpage?",
    answer: "Modern task agents use 'Self-Reflective Reasoning' (e.g. ReAct and Reflexion frameworks). When an agent encounters an error—such as an unexpected pop-up, changed CSS selector, or rate-limited API—it analyzes the traceback, inspects visual DOM screenshots, generates an alternative action hypothesis, and re-executes the step without crashing or requiring manual human intervention."
  },
  {
    question: "What safety guardrails prevent autonomous agents from making accidental financial transactions?",
    answer: "Enterprise autonomous agents implement 'Human-in-the-Loop' (HITL) checkpoints. While agents handle research, form entry, and cart assembly independently, critical transactional actions—such as clicking 'Confirm Order', transferring funds, or executing irreversible database deletions—pause the execution loop and request explicit user confirmation."
  }
];

const useCases = [
  {
    title: "Executive Personal Assistance & Travel Logistics",
    badge: "Consumer Web Autopilot",
    desc: "Instruct the agent to book roundtrip flights, reserve dinner tables, and schedule meeting invitations across multiple fragmented websites in one command.",
    benefits: [
      "Autonomous multi-tab navigation comparing airline prices and schedules",
      "Direct calendar reconciliation preventing overlapping travel bookings",
      "Human-in-the-loop approval before final credit card authorization"
    ],
    highlight: "Completed 4-city multi-leg travel itinerary in 8 minutes with zero manual searching"
  },
  {
    title: "Market Research & Competitive Intelligence",
    badge: "Autonomous Deep Dives",
    desc: "Dispatch agents to monitor 50 competitor pricing pages, download earnings reports, and synthesize structured spreadsheets autonomously every Monday.",
    benefits: [
      "Automated navigation past CAPTCHAs and dynamic single-page applications",
      "Semantic table parsing transforming raw web tables into clean CSV formats",
      "Automated executive summaries delivered directly to Slack or email"
    ],
    highlight: "Saved analyst teams 16 hours weekly on manual competitive price auditing"
  },
  {
    title: "IT Operations & Cloud Infrastructure Remediation",
    badge: "DevOps Self-Healing",
    desc: "Autonomous worker agents that monitor cloud logs, diagnose disk space shortages, clean temporary caches, and restart failing Kubernetes pods.",
    benefits: [
      "Secure terminal execution sandboxed within Docker containers",
      "Detailed step-by-step audit logging of every shell command executed",
      "Instant Slack escalation with root-cause analysis when recovery fails"
    ],
    highlight: "Resolved 73% of level-1 cloud infrastructure alerts without waking on-call engineers"
  }
];

const glossaryTerms = [
  {
    term: "ReAct (Reason + Act) Loop",
    definition: "An agent architecture combining step-by-step reasoning thought chains with concrete tool execution, allowing the model to adapt actions dynamically."
  },
  {
    term: "Human-in-the-Loop (HITL)",
    definition: "A safety protocol requiring human approval before an autonomous agent executes high-stakes actions like financial payments or sensitive database edits."
  },
  {
    term: "Tool Selection & Function Calling",
    definition: "The capability of an LLM to evaluate an objective, choose the appropriate external API or calculator, format arguments correctly, and parse the output."
  },
  {
    term: "Speculative Sub-Task Planning",
    definition: "The process where an agent maps out a complete dependency tree of smaller tasks before execution to optimize order and detect blockers early."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiAutonomousTaskAgentsGuide() {
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
            Autonomous Execution, Tool Calling & Self-Healing 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Autonomous Task Agents: <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">From Natural Language Prompt to Complete Execution</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            AI is moving past passive chatting into active doing. Discover cutting-edge autonomous task agents that plan multi-step workflows, navigate web browsers, execute API actions, and solve complex goals without human hand-holding.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Autonomous Agency Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How autonomous action agents broke free from passive chat box constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Passive Text Generation</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Standard chatbots provide step-by-step instructions on how you can book a flight or research data, forcing you to do 100% of the manual clicking yourself.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Brittle Rigid Macros (RPA)</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Traditional robotic process automation scripts break the moment a webpage changes button layout or displays a cookie banner, requiring constant developer maintenance.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Self-Healing Task Agents</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Autonomous agents reason through blockers, inspect visual page layouts, adapt to UI changes, use APIs, and complete the full mission with built-in reflection loops.
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
              Task Execution & Labor Productivity Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Multi-Step Task Execution (50 Tasks/Mo)</h2>
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
              Manual Human Clicking & Entry
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Autonomous Task Agent (MultiOn/SuperAGI)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Human Time Required Per Task
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "45 Minutes" : "1.5 Minutes"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Searching websites, copying data, filling multi-page checkout forms" 
                : "Prompting goal and reviewing final HITL confirmation summary"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Monthly Labor Cost Equivalent
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$1,875" : "$39"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "37.5 hours of knowledge worker time at $50/hour" 
                : "Standard agent API subscription with unlimited executions"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Execution Error & Omission Rate
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "8.4%" : "<0.5%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Human copy-paste typos and skipped form fields" 
                : "Structured validation schemas and programmatic field verification"}
            </p>
          </div>
        </div>
      </section>

      {/* 3.0 EDITOR'S CHOICE SPOTLIGHT */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 md:p-12 border border-indigo-500/30 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-400" />
              Editor's Choice 2026: Benchmark Autonomous Web Agent
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              MultiOn — The Autonomous Browser Co-Pilot
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              MultiOn turns natural language goals into live browser actions. By integrating advanced vision-language models with low-level browser automation protocols, MultiOn can log into accounts, solve CAPTCHAs, book flights, manage social media postings, and order physical goods with human-grade adaptability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                Live Web Browser Autonomous Control
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                Self-Healing Navigation Past Dynamic Pop-Ups
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                Human-in-the-Loop Financial Checkpoints
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                Developer API & Chrome Extension Deployments
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-full lg:w-72 shrink-0 space-y-4 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400">Monthly Plan</div>
            <div className="text-4xl font-black text-white">$39 <span className="text-sm font-normal text-slate-400">/mo</span></div>
            <div className="text-xs text-indigo-300">Free starter tier • Includes API credits</div>
            <Link 
              href="/tools/multion"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors text-sm shadow-lg shadow-indigo-600/25"
            >
              Explore MultiOn
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 TOP 3 ALTERNATIVES MATRIX & BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 Autonomous Task Agents Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Evaluating tools on execution environment, self-healing capabilities, developer control, and price.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-4 sm:p-5">Platform</th>
                <th className="p-4 sm:p-5">Core Domain</th>
                <th className="p-4 sm:p-5">Execution Environment</th>
                <th className="p-4 sm:p-5">Self-Healing Logic</th>
                <th className="p-4 sm:p-5">HITL Safety</th>
                <th className="p-4 sm:p-5">Pricing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  MultiOn
                </td>
                <td className="p-4 sm:p-5">Consumer Web & Browser Tasks</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Chrome Extension & Cloud Browser</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Visual DOM Analysis</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Built-in Payment Gates</td>
                <td className="p-4 sm:p-5 font-medium">$39/mo</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  SuperAGI
                </td>
                <td className="p-4 sm:p-5">Enterprise Infrastructure & Workers</td>
                <td className="p-4 sm:p-5">Docker Container Sandbox</td>
                <td className="p-4 sm:p-5">Reflexion agent memory</td>
                <td className="p-4 sm:p-5">Permission policy rules</td>
                <td className="p-4 sm:p-5 font-medium">Open Source / Cloud</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                  AutoGPT
                </td>
                <td className="p-4 sm:p-5">Autonomous Goal Chaining & Research</td>
                <td className="p-4 sm:p-5">Local Python / Terminal</td>
                <td className="p-4 sm:p-5">ReAct loop</td>
                <td className="p-4 sm:p-5">Manual step approvals</td>
                <td className="p-4 sm:p-5 font-medium">Free (BYO API key)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-500" />
              MultiOn vs SuperAGI: Web Navigation vs Backend Workflows
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>MultiOn</strong> is tailored for live browser automation where visual layout understanding and human web navigation (clicking, scrolling, typing) are required. <strong>SuperAGI</strong> is an enterprise platform suited for spinning up persistent virtual employees with database access and CLI tool suites.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-500" />
              AutoGPT vs MultiOn: Open-Source Customization vs Plug-and-Play
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>AutoGPT</strong> provides total transparency for developers wishing to inspect the Python agent loop and experiment with custom architectures. <strong>MultiOn</strong> offers a polished, commercial cloud browser infrastructure that eliminates the headache of local headless Chrome configurations and anti-bot blocks.
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 BUYER'S GUIDE: ASYMMETRIC BENTO BLOCKS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Key Architecture Factors for Autonomous Task Agents
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            What to evaluate before giving an AI agent control of your browser or software stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">01</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Robust Tool Call Sandboxing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Autonomous execution must occur within isolated sandboxes (Docker containers or virtual browser profiles) with limited disk and network permissions to prevent unintended prompt injection exploits.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">02</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Loop Termination & Cost Limits</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Early agent frameworks sometimes got stuck in infinite loops, consuming hundreds of dollars in API credits. Ensure the platform implements hard step bounds (e.g., max 25 steps) and budget cap timeouts.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">03</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Multimodal Vision Inspection</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Text-only DOM parsers fail when websites render canvas elements, complex iframes, or obfuscated React classes. Leading agents capture visual screenshots to ground actions in physical coordinate space.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">04</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Stateful Long-Term Session Memory</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              If an agent learns how to navigate your complex internal dashboard once, it shouldn't have to stumble through trial-and-error next week. Look for agents that persist navigation macros and site-specific knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* 4.5 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4-Step Blueprint to Deploying Autonomous Task Agents
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How to transition from conversational prompts to reliable autonomous execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Define Objective Constraints</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Specify explicit goal criteria, target websites, expected output formats (CSV, JSON), and hard boundary constraints on what the agent should not touch.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Attach Required Tools & Auth</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Equip the agent with necessary credentials, web browser access, and specific API keys (e.g. Google Calendar, Slack, Stripe) through secure credential vaults.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Configure Safety Gates</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Set human-in-the-loop approval thresholds for external emails, form submissions, and purchases exceeding predefined monetary amounts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Review Execution Tracebacks</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Inspect step-by-step reasoning logs and DOM video recordings to verify efficiency and calibrate agent prompts for subsequent automated runs.
            </p>
          </div>
        </div>
      </section>

      {/* 5.0 WHO BENEFITS MOST (VERTICAL TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from Autonomous Task Agents?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Explore industry-tailored workflows and efficiency gains.
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
                    ? "bg-white dark:bg-slate-800 border-indigo-500/50 shadow-md text-slate-900 dark:text-white font-semibold"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider mb-1">
                  {uc.badge}
                </div>
                <div className="text-sm sm:text-base">{uc.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
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
                Key Task Capabilities:
              </h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200 font-medium">
              ⚡ <strong>Efficiency Proof:</strong> {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 TECHNICAL GLOSSARY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <BookOpen className="w-4 h-4" />
          Autonomous Agentic Architecture Lexicon
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
            Answers to common questions regarding autonomous AI task agents, tool calling, and execution safety.
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
