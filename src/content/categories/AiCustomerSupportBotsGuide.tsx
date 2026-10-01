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
  Bot, 
  MessageSquare, 
  ShieldCheck, 
  Headphones, 
  Target, 
  TrendingUp, 
  Sparkle,
  Layers,
  HeartHandshake
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI customer support bot and how does it achieve high resolution rates?",
    answer: "An AI customer support bot is an autonomous conversational agent integrated directly into your help desk (such as Intercom, Zendesk, or Gorgias) and internal APIs. Unlike legacy rule-based chatbots that fail when users deviate from predetermined paths, modern LLM-powered support bots read your real-time knowledge base, verify customer identity, query database records (e.g. order tracking or subscription status), and execute actions like issuing refunds or re-routing shipments with zero human intervention."
  },
  {
    question: "What are the best AI customer support bots in 2026?",
    answer: "Fin by Intercom and Lyro by Tidio represent the apex of customer service AI. Fin by Intercom sets the enterprise standard with an exceptional 50%+ resolution rate, conversational clarification questions, and verifiable source citations. Lyro by Tidio is the premier choice for SMBs and e-commerce, deploying in under 10 minutes without code and guaranteeing zero hallucinations by strictly confining answers to provided FAQs."
  },
  {
    question: "How do modern AI support bots prevent hallucinations and false information?",
    answer: "Enterprise support engines implement strict Retrieval-Augmented Generation (RAG) guardrails. The AI cannot make wild guesses; it is algorithmically restricted to referencing verified internal documentation. If the confidence score drops below 95% or relevant documentation is missing, the system gracefully transfers the conversation to a human specialist along with a drafted summary."
  },
  {
    question: "What is the typical cost per resolution for an AI support bot compared to human agents?",
    answer: "A human support tier-1 agent costs between $5.00 and $8.00 per resolved ticket when factoring in salary, benefits, and software licenses. Leading AI support bots like Fin charge approximately $0.99 per successful resolution (and $0 for unresolved tickets), slashing support expenditures by up to 85% while providing instant 24/7 coverage."
  }
];

const useCases = [
  {
    title: "High-Volume DTC E-Commerce",
    badge: "Order Resolution & Deflection",
    desc: "Automate 60%+ of repetitive customer inquiries regarding WISMO ('Where Is My Order?'), returns, size exchanges, and discount code issues.",
    benefits: [
      "Direct Shopify and BigCommerce API integration for instant order lookups",
      "Automated return label generation and address change processing",
      "Instant 24/7 response time preventing abandoned carts during weekend sales"
    ],
    highlight: "Deflected 68% of holiday order status tickets and boosted customer CSAT to 94%"
  },
  {
    title: "B2B SaaS & Tech Platforms",
    badge: "Technical Triage & Account Ops",
    desc: "Deliver instant, accurate troubleshooting instructions and execute routine account management tasks directly inside web and mobile apps.",
    benefits: [
      "Deep indexing of technical developer documentation and API guides",
      "Automated user role upgrades, billing receipt lookups, and plan downgrades",
      "Smart sentiment escalation alerting dedicated account managers for VIP churn risks"
    ],
    highlight: "Slashed median first-response time from 42 minutes to 8 seconds"
  },
  {
    title: "Fintech & Subscription Services",
    badge: "Secure Verification & High Compliance",
    desc: "Handle sensitive inquiries around card replacements, subscription cancellations, and KYC verifications with bank-grade security protocols.",
    benefits: [
      "SOC2 Type II, GDPR, and HIPAA compliant conversation sandboxing",
      "Zero training on customer PII (Personally Identifiable Information)",
      "Strict citation validation providing clickable sources for every policy answer"
    ],
    highlight: "Scaled customer volume by 3x without increasing headcount on the customer operations team"
  }
];

const glossaryTerms = [
  {
    term: "Autonomous Resolution Rate",
    definition: "The percentage of incoming customer tickets completely resolved by the AI bot without requiring any human agent intervention or follow-up."
  },
  {
    term: "RAG Guardrails",
    definition: "Retrieval-Augmented Generation constraints that force the AI to derive answers exclusively from authenticated internal help docs, preventing fictitious answers."
  },
  {
    term: "Cost Per Resolution (CPR)",
    definition: "The pricing model popularized by Intercom where companies are billed only when the AI successfully answers a question without human escalation."
  },
  {
    term: "Graceful Handoff",
    definition: "A frictionless transition where the AI detects user frustration or low confidence and routes the ticket to a human agent along with a synthesized context brief."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiCustomerSupportBotsGuide() {
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
            Autonomous Ticket Resolution & Help Desk AI 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Customer Support Bots: <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Deflect 50%+ of Tickets with Zero Hallucinations</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Customer expectations have shifted to instant, 24/7 precision answers. Explore enterprise-ready AI customer service bots that integrate directly into your knowledge base, execute live API actions, and resolve tickets at a fraction of human cost.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Support Operation Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How autonomous resolution agents replaced rigid legacy decision trees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frustrating Rule Trees</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Old chatbots trapped users in endless "Press 1 for Sales" loops, failing completely on compound sentences and forcing customers to demand a human rep.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Overwhelmed Support Teams</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Human reps burned out answering the same 10 repetitive WISMO and password reset inquiries, causing long ticket queues and plummeting CSAT scores.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-950 to-slate-900 text-white border border-blue-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Autonomous Action Agents</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Modern AI understands nuance, queries live database systems, executes transactions like refunds, and resolves over 50% of inquiries in seconds.
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
              Support Cost & Deflection Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Support Economics (5,000 Tickets/Mo)</h2>
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
              100% Human Agent Team
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-blue-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Deflection (Fin / Lyro AI)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Cost Per Resolved Ticket
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$6.50" : "$0.99"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Full-time support rep wages, benefits, and shift management" 
                : "Intercom Fin / Lyro pay-only-for-successful-resolutions model"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-blue-500" />
              Average First Response Time
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "38 Minutes" : "Instant (<5s)"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Queue delays during peak hours and outside business hours" 
                : "Immediate 24/7/365 multilingual answers in native languages"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-indigo-500" />
              Total Monthly Support Budget
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$32,500" : "$7,800"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Requires 5+ full-time agents for 24/7 weekend coverage" 
                : "AI resolves 55% autonomously; 2 human reps handle complex escalations"}
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
              Editor's Choice 2026: Benchmark Customer AI Agent
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Fin by Intercom — Autonomous Resolution with Zero Fluff
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Fin has set the gold standard in customer support AI. Built on advanced LLMs with strict RAG guardrails, Fin asks clarifying questions, reads your help docs, and integrates with internal webhooks to execute live actions. With over 50% average resolution rates, you pay only when customers are satisfied.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                Industry-Leading 50%+ Deflection & Resolution
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                Clickable Source Citations for Every Answer
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                Only $0.99 Per Resolved Ticket (Pay for Performance)
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                Seamless Human Handoff with AI Conversation Summary
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-full lg:w-72 shrink-0 space-y-4 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400">Pricing Model</div>
            <div className="text-4xl font-black text-white">$0.99 <span className="text-sm font-normal text-slate-400">/resolution</span></div>
            <div className="text-xs text-blue-300">No charge for unresolved or escalated tickets</div>
            <Link 
              href="/tools/fin-by-intercom"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors text-sm shadow-lg shadow-blue-600/25"
            >
              Explore Fin by Intercom
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 TOP 3 ALTERNATIVES MATRIX & BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 AI Customer Support Bots Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Evaluating leading support bots by resolution rate, integrations, setup time, and pricing.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-4 sm:p-5">Platform</th>
                <th className="p-4 sm:p-5">Primary Strength</th>
                <th className="p-4 sm:p-5">Resolution Rate</th>
                <th className="p-4 sm:p-5">Setup Time</th>
                <th className="p-4 sm:p-5">API Actions</th>
                <th className="p-4 sm:p-5">Pricing Model</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Fin (Intercom)
                </td>
                <td className="p-4 sm:p-5">Enterprise Omnichannel & Clarification</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">50% - 65%</td>
                <td className="p-4 sm:p-5">15 Minutes</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Webhooks & Custom Actions</td>
                <td className="p-4 sm:p-5 font-medium">$0.99 / resolution</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  Lyro (Tidio)
                </td>
                <td className="p-4 sm:p-5">SMB & E-Commerce Plug & Play</td>
                <td className="p-4 sm:p-5">40% - 55%</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">&lt;5 Minutes</td>
                <td className="p-4 sm:p-5">Shopify & Pre-built connectors</td>
                <td className="p-4 sm:p-5 font-medium">$39/mo (50 chats)</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  Gorgias AI Agent
                </td>
                <td className="p-4 sm:p-5">Shopify Store Revenue & Returns</td>
                <td className="p-4 sm:p-5">45% - 60%</td>
                <td className="p-4 sm:p-5">20 Minutes</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Native Shopify Refunds/Exchanges</td>
                <td className="p-4 sm:p-5 font-medium">$50/mo + ticket volume</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-500" />
              Fin vs Lyro: Enterprise Complexity vs SMB Simplicity
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Fin by Intercom</strong> is the premier pick for complex multi-product companies requiring custom API integrations, conditional workflows, and pay-per-resolution pricing. <strong>Lyro by Tidio</strong> is ideal for smaller direct-to-consumer stores wanting instant setup with predictable tiered monthly billing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-500" />
              Gorgias AI vs Fin: Pure E-Commerce Specialization
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              If your entire business operates on Shopify, <strong>Gorgias AI Agent</strong> offers unmatched out-of-the-box depth for handling returns, tracking carrier delays, and offering personalized discount incentives. For general B2B SaaS and cross-platform apps, <strong>Fin</strong> remains the stronger all-around engine.
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 BUYER'S GUIDE: ASYMMETRIC BENTO BLOCKS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Key Architecture Factors for AI Support Bots
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            What to evaluate to ensure high CSAT and protect customer trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">01</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Strict Hallucination Proofing & Citations</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Never deploy a raw general-purpose LLM to customer support without strict RAG retrieval barriers. The system must cite exact URL documentation for each claim and confess "I don't have that information" whenever data is missing.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">02</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Live API Webhooks & Action Execution</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              A support bot that can only recite text answers only solves half the problem. Look for agents that can call external webhooks to cancel subscriptions, look up order statuses, update shipping addresses, and unlock user accounts securely.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">03</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frictionless Human Handoff with Summary</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When an inquiry exceeds the AI's capabilities, it must immediately transfer to a live human rep without making the user repeat themselves. The bot should synthesize a concise 3-bullet briefing for the incoming agent.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">04</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Security & PII Masking Standards</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Ensure the tool incorporates automated tokenization to scrub credit cards, social security numbers, and passwords from logs. Verify SOC2 Type II compliance and that the vendor does not use customer data to train public foundation models.
            </p>
          </div>
        </div>
      </section>

      {/* 4.5 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4-Step Implementation Roadmap to 50% Deflection
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How to deploy an enterprise-grade AI customer support bot in under 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Ingest Knowledge Base</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Sync your public help center, internal Confluence docs, and product manuals. Review the automated content health audit to update conflicting or outdated policies.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Run Historical Backtesting</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Simulate the AI bot across your past 1,000 closed customer tickets in sandbox mode. Verify its answers against your top human agents' responses before going live.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Gradual Canary Rollout</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Activate the bot for 20% of off-peak or weekend chat volume. Monitor CSAT scores and transfer requests closely, refining answers that trigger frequent escalations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Connect Dynamic Webhooks</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Expand from informational answers to transactional actions: enable automated refund processing, order tracking lookups, and account resets via secure webhooks.
            </p>
          </div>
        </div>
      </section>

      {/* 5.0 WHO BENEFITS MOST (VERTICAL TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from AI Customer Support Bots?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Explore industry-tailored workflows and quantifiable operational impacts.
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
                Key Support Capabilities:
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
              🎯 <strong>Demonstrated Result:</strong> {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 TECHNICAL GLOSSARY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <BookOpen className="w-4 h-4" />
          Customer Support AI Lexicon
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
            Answers to key questions regarding AI customer service bots, deflection metrics, and safety.
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
