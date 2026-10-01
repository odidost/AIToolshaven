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
  Users, 
  Calendar, 
  Briefcase, 
  Target, 
  Workflow, 
  Sparkle,
  Cpu
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI Autonomous SDR and how does it work?",
    answer: "An AI Autonomous SDR (Sales Development Representative) is a digital agent that executes the entire top-of-funnel outbound sales workflow autonomously. Unlike basic email sequencers, an AI SDR autonomously discovers in-market B2B prospects, enriches corporate profiles with live web research, crafts bespoke value propositions, sends multi-channel touchpoints (Email + LinkedIn), handles prospect objections, and books qualified demos directly onto account executive calendars."
  },
  {
    question: "What is the best AI Autonomous SDR in 2026?",
    answer: "11x.ai (Alice) and Artisan AI (Ava) lead the digital worker market. 11x.ai's Alice is celebrated for fully automated multi-channel prospecting, multi-lingual outreach, and seamless enterprise CRM bidirectional sync. Artisan AI's Ava stands out for her consolidated platform with built-in 300M+ B2B contact data, warm-up tools, and hyper-personalized trigger-based campaign drafting."
  },
  {
    question: "Will AI SDRs replace human sales development representatives completely?",
    answer: "AI SDRs eliminate the repetitive, low-leverage tasks of list building, manual data entry, and boilerplate follow-ups. Instead of spending 80% of their week doing research and typing emails, human revenue teams transition into 'AI SDR managers' who refine messaging strategies, monitor pipeline quality, and focus human energy on conducting high-converting discovery calls and closing enterprise deals."
  },
  {
    question: "How do Autonomous SDRs handle complex prospect objections and pricing questions?",
    answer: "Modern AI SDR agents are trained on your company's product documentation, case studies, competitor battlecards, and FAQ sheets. When a prospect replies asking about enterprise security compliance or competitor differentiators, the agent reads the context, drafts an accurate, courteous response based on verified company data, and nudges the prospect toward booking a call."
  }
];

const useCases = [
  {
    id: "scaling-saas",
    label: "Scaling B2B SaaS",
    badge: "Predictable Pipeline",
    title: "Generate Consistent Inbound-Quality Demos Without Bloated SDR Overhead",
    description: "SaaS revenue leaders deploy digital SDRs to prospect thousands of target companies simultaneously. The agents identify key decision-makers across engineering, marketing, or finance, consistently filling account executive calendars with 20–40 qualified discovery calls every month.",
    highlight: "Saves $150k+ per year in junior SDR recruiting, base salary, and benefits",
    icon: Target
  },
  {
    id: "founder-sales",
    label: "Early-Stage Founders",
    badge: "0-to-1 Outbound",
    title: "Launch an Enterprise Outbound Engine on Day One as a Solo Founder",
    description: "Technical founders without dedicated sales staff activate AI SDRs to test market positioning and validate customer segments across multiple industries in parallel, securing early enterprise pilots while continuing to code product features.",
    highlight: "Book enterprise pilot meetings without sacrificing engineering time",
    icon: Bot
  },
  {
    id: "agency-owners",
    label: "B2B Agencies & Consultancies",
    badge: "High-Ticket Client Acquisition",
    title: "Target High-Value Retainers with Bespoke Deep-Research Pitches",
    description: "Digital agencies and management consultancies configure AI SDRs to audit target company websites, tech stacks, and job openings. The agent writes personalized audit emails highlighting exact strategic gaps, capturing C-suite attention.",
    highlight: "Average deal size increases 40% due to research-backed cold positioning",
    icon: Briefcase
  },
  {
    id: "account-execs",
    label: "Enterprise Sales Reps",
    badge: "Self-Sourced Pipeline",
    title: "Double Pipeline Generation by Pairing Every AE with a Digital SDR",
    description: "Enterprise Account Executives delegate target account territory mapping to personal AI SDR copilots, allowing closers to focus 100% of their active working hours on relationship building, product demos, and contract negotiations.",
    highlight: "Doubles quota attainment by maintaining full demo calendars",
    icon: Calendar
  }
];

const topAlternatives = [
  { 
    name: "11x.ai (Alice)", 
    slug: "11x-ai-alice",
    score: "9.9", 
    price: "Custom enterprise plans", 
    bestFor: "Full autonomous multi-channel outbound & Salesforce/HubSpot sync", 
    highlight: "The pioneer in AI digital workers, capable of operating as an end-to-end autonomous SDR across multiple languages and automated meeting bookings." 
  },
  { 
    name: "Artisan AI (Ava)", 
    slug: "artisan-ai-ava",
    score: "9.8", 
    price: "From $2,000/mo", 
    bestFor: "All-in-one outbound platform with built-in 300M+ B2B data & email warm-up", 
    highlight: "Consolidated outbound platform featuring Ava, an AI SDR that handles lead finding, email verification, warmup, and hyper-personalized copy generation." 
  },
  { 
    name: "Regie.ai", 
    slug: "regie-ai",
    score: "9.7", 
    price: "From $59/seat/mo", 
    bestFor: "Generative sales content & enterprise co-pilot sequences", 
    highlight: "Enterprise-grade generative AI platform that integrates with Outreach and Salesloft, auto-generating personalized sequence steps based on buyer persona." 
  }
];

// ---- ANIMATIONS & STYLES ---- //

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const figtreeBodyClass = "font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[18px] font-normal leading-[32.4px] text-[rgb(74,85,104)] dark:text-slate-300";
const figtreeDarkBodyClass = "font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[18px] font-normal leading-[32.4px] text-slate-300";

export default function AiAutonomousSdrsGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const [roiMode, setRoiMode] = useState<"traditional" | "ai">("ai");

  return (
    <article className="w-full max-w-6xl mx-auto py-6 md:py-10 font-sans overflow-hidden">
      
      {/* 1. Hero Header */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-emerald-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-8 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" /> 
            2026 Autonomous B2B Revenue Agents Deep Dive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.08]"
          >
            The Ultimate Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-300 drop-shadow-sm">
              AI Autonomous SDRs &amp; Lead Finders
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[18px] md:text-[20px] font-normal leading-[32.4px] text-slate-300 max-w-2xl mx-auto"
          >
            How agentic reasoning LLMs, autonomous account prospecting, and multi-channel conversational execution transformed sales development into 24/7 digital worker pipelines.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. The Paradigm Shift (Interactive Bento Blocks) */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <motion.div variants={fadeUpVariant} className="flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm tracking-widest uppercase">
            <Bot className="w-4 h-4" /> The Digital Workforce Leap
          </div>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            From High SDR Turnover to Tireless Autonomous Execution
          </h3>
          <p className={figtreeBodyClass}>
            Traditional sales development is plagued by high friction: hiring fresh graduates, spending 3 months training them on product pitch decks, and enduring 35%+ annual SDR turnover. Most of an SDR&apos;s day is spent manually copying data from LinkedIn to Salesforce rather than speaking to qualified buyers.
          </p>
          <p className={figtreeBodyClass}>
            In 2026, <strong>Autonomous AI SDRs</strong> act as tireless digital team members. They monitor 100+ intent signals (company earnings, hiring spikes, executive changes), craft context-rich 1-to-1 emails, respond intelligently to objections within 3 minutes, and book calls directly into your calendar without coffee breaks or quota fatigue.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              <span className="inline-block w-10 h-10 rounded-full bg-blue-500/20 border-2 border-white dark:border-slate-800 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center">24/7</span>
              <span className="inline-block w-10 h-10 rounded-full bg-teal-500/20 border-2 border-white dark:border-slate-800 text-teal-600 dark:text-teal-400 font-bold text-xs flex items-center justify-center">&lt;3m</span>
              <span className="inline-block w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-white dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center">4x</span>
            </div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Round-the-clock prospecting, rapid objection handling, and 4x higher meeting conversion rates.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="relative">
          <div className="rounded-[2.5rem] bg-gradient-to-tr from-blue-600 to-emerald-600 p-1 shadow-2xl">
            <div className="rounded-[2.4rem] bg-slate-950 p-6 md:p-8 text-white relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> ai-worker: alice-sdr-v5
                </div>
              </div>

              {/* SDR Workflow Preview UI */}
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                  <div className="text-xs text-blue-400 font-bold mb-1 flex items-center justify-between">
                    <span>ACCOUNT TARGET IDENTIFIED</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">Fit Score: 98/100</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    <strong>Datadog</strong> &bull; VP of Infrastructure &bull; Intent Signal: Actively hiring 12 Site Reliability Engineers
                  </p>
                </div>

                <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80 space-y-2.5 font-sans">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5"><Workflow className="w-3.5 h-3.5 text-teal-400" /> Autonomous Action Chain</span>
                    <span className="text-emerald-400 font-bold">Step 3 of 4</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                      <span className="text-slate-300 font-mono">1. Scraped GitHub commit volume</span>
                      <span className="text-emerald-400 font-semibold font-mono">Verified</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                      <span className="text-slate-300 font-mono">2. Sent customized pitch via email</span>
                      <span className="text-emerald-400 font-semibold font-mono">Opened (2m ago)</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                      <span className="text-slate-300 font-mono">3. Incoming prospect reply handled</span>
                      <span className="text-cyan-400 font-semibold font-mono">Objection Resolved</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-950 to-emerald-950 rounded-2xl p-4 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-sans">Demo Call Auto-Booked</div>
                      <div className="text-[11px] text-slate-400 font-mono">Thursday @ 2:00 PM EST (Synced to HubSpot)</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-sans">
                    Booked
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-900">
                <span>Active Territory: 450 Accounts</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% CRM Activity Logged
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* 2.5 Calculate SDR Workforce ROI */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-950 p-6 md:p-10 border border-slate-800 text-white shadow-xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs tracking-widest uppercase mb-2">
              <Calculator className="w-4 h-4" /> Headcount Economics
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Human SDR Team vs. Autonomous AI SDR Workforce ROI
            </h3>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-400 mt-1">
              Compare base salaries, training lag, turnover costs, and autonomous digital worker scalability.
            </p>
          </div>
          
          {/* Interactive Toggle */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 self-start md:self-auto">
            <button
              onClick={() => setRoiMode("traditional")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                roiMode === "traditional" 
                  ? "bg-slate-700 text-white shadow-md" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              2 Human SDRs
            </button>
            <button
              onClick={() => setRoiMode("ai")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                roiMode === "ai" 
                  ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-md shadow-blue-500/20" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              1 AI Autonomous SDR
            </button>
          </div>
        </div>

        {/* Dynamic Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <Timer className="w-4 h-4 text-blue-400" /> Onboarding &amp; Ramp Time
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              {roiMode === "traditional" ? "3 to 4 Months" : "< 48 Hours"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Interviews, background checks, equipment setup, product bootcamp training, and pipeline shadowing."
                : "Upload company case studies and battlecards, connect CRM and email credentials, and launch outreach in two days."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <DollarSign className="w-4 h-4 text-emerald-400" /> Annual Fully Burdened Cost
            </div>
            <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-2">
              {roiMode === "traditional" ? "$160,000 – $220,000" : "$12,000 – $24,000"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Two full-time SDR salaries, payroll taxes, health insurance, Salesforce licenses, and ZoomInfo seats."
                : "Annual software subscription with unlimited lead searches, multi-inbox deliverability, and automated enrichment."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <LineChart className="w-4 h-4 text-teal-400" /> Pipeline Attainment Consistency
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              {roiMode === "traditional" ? "High Variance (Turnover)" : "Predictable & Linear"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "SDR burnout, sick days, vacations, and frequent resignations cause feast-or-famine pipeline swings."
                : "Continuous 24/7 account discovery, objection handling, and steady calendar booking velocity."}
            </p>
          </div>
        </div>
      </motion.section>

      {/* 3.0 Sponsor / Editor's Choice Spotlight */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-gradient-to-r from-blue-950 via-slate-900 to-emerald-950 p-8 md:p-12 border border-blue-500/30 text-white shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
              <Crown className="w-3.5 h-3.5 text-blue-400" /> Editor&apos;s Benchmark Choice 2026
            </div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              11x.ai &amp; Artisan: The Pioneers of the Autonomous Sales Workforce
            </h3>
            <p className={figtreeDarkBodyClass}>
              <strong>11x.ai (Alice)</strong> is the industry standard for enterprise-grade autonomous prospecting, multi-lingual objection handling, and bi-directional CRM governance. <strong>Artisan AI (Ava)</strong> provides an all-in-one suite with integrated B2B contact data, domain warmup, and dynamic email personalization.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Autonomous lead research &amp; intent signal monitoring
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Multi-touch Email + LinkedIn personalized sequences
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Dynamic objection handling based on product battlecards
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Native bidirectional Salesforce &amp; HubSpot sync
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link 
              href="/tool/11x-ai-alice"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-600 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:opacity-95 transition-all hover:scale-[1.02]"
            >
              Explore 11x.ai (Alice) <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/tool/artisan-ai-ava"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all text-center"
            >
              View Artisan AI (Ava)
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 3.5 Top 3 Alternatives Matrix + Comparison Bridges */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 space-y-6"
      >
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Top 3 AI Autonomous SDRs Compared
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-600 dark:text-slate-400 mt-2">
            Selected by our sales engineering lab based on objection handling accuracy, CRM sync depth, and meeting conversion rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topAlternatives.map((alt) => (
            <div 
              key={alt.slug}
              className="rounded-3xl bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                    Score {alt.score}/10
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{alt.price}</span>
                </div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">{alt.name}</h4>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">{alt.bestFor}</p>
                <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {alt.highlight}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link 
                  href={`/tool/${alt.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  View Tool Profile <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Bridge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Bot className="w-5 h-5 text-blue-500" /> Fully Autonomous Digital Outbound Agents
            </h4>
            <p className={figtreeBodyClass}>
              For fast-growing organizations looking to scale outbound pipeline with zero hiring overhead, <em>11x.ai (Alice)</em> and <em>Artisan (Ava)</em> represent the future. They operate independently as autonomous revenue team members, handling everything from lead identification to booking discovery calls.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-500" /> Human-in-the-Loop SDR Co-Pilots
            </h4>
            <p className={figtreeBodyClass}>
              For mature enterprise revenue teams with established human SDR teams using Outreach or Salesloft, <em>Regie.ai</em> acts as an intelligent co-pilot. It drafts personalized copy and optimizes sequence steps while allowing human reps to maintain final review authority before messages dispatch.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 4.0 Buyer's Guide & Evaluation Criteria (Asymmetric Bento) */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 space-y-6"
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs tracking-widest uppercase mb-2">
            <BookOpen className="w-4 h-4" /> Technical Evaluation Criteria
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            How to Evaluate an AI Autonomous SDR in 2026
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-600 dark:text-slate-400 mt-1">
            Four mandatory architectural benchmarks when deploying digital sales representatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-blue-50 dark:group-hover:text-blue-900/10 transition-colors">
              01
            </span>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:rotate-6 transition-transform">
              <Sparkle className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Deep In-Market Intent Signal Extraction
            </h4>
            <p className={figtreeBodyClass}>
              Reaching out to random contact lists yields dismal response rates. Premier AI SDRs continuously monitor dynamic buying signals—such as job postings, leadership transitions, tech stack additions, and funding rounds—ensuring outreach is delivered at the exact moment a prospect is actively evaluating solutions.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-blue-50 dark:group-hover:text-blue-900/10 transition-colors">
              02
            </span>
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 group-hover:rotate-6 transition-transform">
              <Bot className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Grounded Objection Handling &amp; Battlecard Context
            </h4>
            <p className={figtreeBodyClass}>
              When a prospect replies with &quot;We currently use competitor X&quot; or &quot;Are you SOC2 compliant?&quot;, the AI must answer accurately using verified company data rather than hallucinating pricing or feature guarantees.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-blue-50 dark:group-hover:text-blue-900/10 transition-colors">
              03
            </span>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:rotate-6 transition-transform">
              <Workflow className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Bidirectional CRM Sync &amp; Deduplication
            </h4>
            <p className={figtreeBodyClass}>
              The digital worker must integrate natively with Salesforce and HubSpot. It must automatically respect existing open opportunities, do not contact lists, and customer suppression rules, preventing embarrassing accidental outreach to active accounts.
            </p>
          </div>

          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-blue-50 dark:group-hover:text-blue-900/10 transition-colors">
              04
            </span>
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:rotate-6 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Multi-Channel Touchpoints &amp; Native Meeting Scheduling
            </h4>
            <p className={figtreeBodyClass}>
              Top-performing revenue agents combine email with automated LinkedIn connection requests, profile views, and message follow-ups. When interest is confirmed, the AI dynamically coordinates timezone availability and books calls directly onto AE calendars without manual scheduling links.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 4.5 4-Step Implementation Guide */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-950 p-8 md:p-12 text-white border border-slate-800"
      >
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs tracking-widest uppercase mb-2">
            <Zap className="w-4 h-4" /> Deployment Protocol
          </div>
          <h3 className="text-3xl font-black tracking-tight text-white">
            4-Step Production Pipeline: Onboarding Your First AI SDR
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-400 mt-2">
            The standard organizational blueprint for deploying autonomous digital revenue agents.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center text-sm border border-blue-500/30">
              1
            </div>
            <h4 className="text-lg font-bold text-white">Define ICP &amp; Exclusions</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Specify ideal industry verticals, company employee sizes, target job titles, geographic boundaries, and strict negative exclusion criteria.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 font-bold flex items-center justify-center text-sm border border-teal-500/30">
              2
            </div>
            <h4 className="text-lg font-bold text-white">Upload Knowledge Base</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Feed the agent your product one-pagers, case studies, competitor comparison matrices, and common objection handling scripts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-500/30">
              3
            </div>
            <h4 className="text-lg font-bold text-white">Connect Channels &amp; CRM</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Provision secondary sending domains, authenticate LinkedIn accounts, and connect Salesforce or HubSpot with two-way activity logging.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-sm border border-indigo-500/30">
              4
            </div>
            <h4 className="text-lg font-bold text-white">Activate Autonomous Flow</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Switch the agent to autonomous mode. Watch as it researches prospects, conducts multi-channel outreach, and populates AE calendars with discovery calls.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 5.0 Who Benefits Most? (Dynamic Showcase) */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 space-y-6"
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs tracking-widest uppercase mb-2">
            <Users className="w-4 h-4" /> Targeted Organizations
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Who Scales Fastest with AI Autonomous SDRs?
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Vertical Buttons */}
          <div className="space-y-2">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              const isActive = activeTab === uc.id;
              return (
                <button
                  key={uc.id}
                  onClick={() => setActiveTab(uc.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all flex items-center justify-between border ${
                    isActive 
                      ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 translate-x-2" 
                      : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-blue-500"}`} />
                    <span className="font-bold text-sm">{uc.label}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${isActive ? "opacity-100" : "opacity-0"}`} />
                </button>
              );
            })}
          </div>

          {/* Active Card Showcase */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {useCases.map((uc) => {
                if (uc.id !== activeTab) return null;
                return (
                  <motion.div
                    key={uc.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold">
                      {uc.badge}
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                      {uc.title}
                    </h4>
                    <p className={figtreeBodyClass}>
                      {uc.description}
                    </p>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0" /> {uc.highlight}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* 5.5 Technical Foundation & Glossary */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
      >
        <div className="max-w-2xl mb-6">
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs tracking-widest uppercase mb-1">
            <BookOpen className="w-4 h-4" /> Technical Architecture
          </div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Key Architectural Concepts in AI SDR Automation
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">ReAct (Reasoning + Acting) Agent Framework</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              An architectural pattern where the LLM interleaves internal reasoning traces (&quot;Thought&quot;) with external API tool execution (&quot;Action: Search LinkedIn&quot;), observing the results before formulating the next strategic outbound step.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Intent Graph Traversal</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              The continuous evaluation of second-party and third-party data signals (G2 review visits, Job board postings, SEC filings) to score account purchasing propensity in real time before triggering outreach sequences.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Sentiment Classification Classifiers</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              Specialized fine-tuned classification models that parse incoming prospect responses, accurately distinguishing between hard unsubscribes, polite deferrals (&quot;Ping me next quarter&quot;), and enthusiastic demo requests.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Bi-directional CRM Webhooks</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              Real-time event streams linking the AI SDR to Salesforce or HubSpot, ensuring that lead stage transitions, email opens, and booked discovery calls reflect across your entire sales operations ecosystem without delay.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 6.0 SEO FAQ Accordion */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions: AI Autonomous SDRs
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] text-slate-600 dark:text-slate-400 mt-1">
            Expert answers regarding digital workers, objection handling, CRM synchronization, and meeting booking.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 dark:text-white flex items-center justify-between gap-4"
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-sm md:text-base text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3"
                    >
                      <p className={figtreeBodyClass}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>

    </article>
  );
}
