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
  Code2, 
  Terminal, 
  Cpu, 
  Layers, 
  Database, 
  GitBranch, 
  Rocket, 
  Laptop, 
  Sparkle,
  Workflow
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is 'Vibe Coding' and how do AI full-stack app builders work?",
    answer: "'Vibe coding' is a modern software development paradigm where developers and non-technical founders guide software creation entirely through conversational intent, high-level requirements, and real-time visual feedback rather than writing manual syntax line-by-line. Generative coding agents inspect whole-codebase ASTs, plan multi-file architectures, scaffold databases, and execute terminal commands autonomously."
  },
  {
    question: "What is the best AI full-stack app builder in 2026?",
    answer: "Cursor and Lovable lead the market for distinct workflows. Cursor is the premier choice for experienced software engineers needing deep local repository control, multi-file agentic refactoring, and VS Code extension compatibility. Lovable and Bolt.new dominate for rapid zero-to-one full-stack app creation, scaffolding production-ready Next.js, Tailwind, and Supabase apps directly in the browser from plain English prompts."
  },
  {
    question: "Do AI app builders generate clean, production-grade code or messy prototypes?",
    answer: "Modern vibe-coding engines output idiomatic TypeScript, structured React/Next.js components, typed database schemas (Prisma/Drizzle), and clean REST/tRPC routes. Because you can connect your existing GitHub repositories, you retain 100% ownership of the clean source code with zero proprietary framework lock-in."
  },
  {
    question: "Can I connect custom databases, authentication, and Stripe payments?",
    answer: "Yes. Premier tools like Lovable, Bolt.new, and Marblism feature native integrations with Supabase, Clerk, and Stripe. The AI agent automatically provisions database tables with Row Level Security (RLS), configures OAuth authentication flows, and writes webhook handlers for payment processing."
  }
];

const useCases = [
  {
    id: "solo-founders",
    label: "Indie Hackers & Founders",
    badge: "0-to-1 MVP Speed",
    title: "Ship Validated Full-Stack SaaS Products in Days, Not Quarters",
    description: "Solo founders build complete MVPs—including user authentication, database persistence, payment billing, and customer dashboards—without hiring $150k/yr engineering teams or giving up startup equity to technical co-founders.",
    highlight: "Average time from prompt specification to live paying customer: 72 hours",
    icon: Rocket
  },
  {
    id: "product-managers",
    label: "Product Managers & Teams",
    badge: "Interactive Prototyping",
    title: "Replace Static Wireframes with Functional, Data-Backed Web Apps",
    description: "Product managers transform user feedback and feature specs into living Next.js prototypes connected to real APIs. Stakeholders test actual working UX instead of clicking through unclickable Figma mockups.",
    highlight: "10x faster stakeholder consensus and accelerated engineering handoffs",
    icon: Laptop
  },
  {
    id: "senior-devs",
    label: "Full-Stack Engineers",
    badge: "10x Productivity",
    title: "Eliminate Boilerplate Scaffolding and Orchestrate Complex Refactors",
    description: "Senior engineers leverage AI agents like Cursor to automate repetitive CRUD endpoints, unit test suites, and schema migrations, reserving their cognitive energy for core system design and domain logic.",
    highlight: "Saves 15–20 hours per sprint on boilerplate plumbing and migrations",
    icon: Code2
  },
  {
    id: "growth-agencies",
    label: "Agencies & Consultancies",
    badge: "Client Turnaround",
    title: "Deliver Custom Web Portals and Client Dashboards at Record Margins",
    description: "Digital agencies deliver custom internal portals, CRM integrations, and marketing calculators for enterprise clients at 80% lower development costs, dramatically increasing project margins and delivery velocity.",
    highlight: "Deploy client-ready custom web portals in under 5 business days",
    icon: Workflow
  }
];

const topAlternatives = [
  { 
    name: "Cursor AI", 
    slug: "cursor",
    score: "9.9", 
    price: "Free tier / From $20/mo", 
    bestFor: "Professional developers seeking local VS Code agentic power", 
    highlight: "The gold standard AI code editor with multi-file Composer edits, whole-codebase semantic indexing, and surgical diff previews." 
  },
  { 
    name: "Lovable", 
    slug: "lovable-dev",
    score: "9.8", 
    price: "Free tier / From $20/mo", 
    bestFor: "Instant full-stack web apps from natural language with Supabase", 
    highlight: "Autonomous software engineer in your browser that drafts full React/Next.js architectures, provisions databases, and deploys live apps." 
  },
  { 
    name: "Bolt.new", 
    slug: "bolt-new",
    score: "9.7", 
    price: "Free tier / Pro plans", 
    bestFor: "In-browser WebContainer development with full Node.js execution", 
    highlight: "Revolutionary in-browser IDE executing live NPM packages, terminal processes, and instant Docker-like container environments." 
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

export default function AiAppBuildersVibeCodingGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/40 via-cyan-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-8 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" /> 
            2026 Vibe Coding &amp; App Architecture Deep Dive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.08]"
          >
            The Ultimate Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 drop-shadow-sm">
              AI Full-Stack App Builders &amp; Vibe Coding
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[18px] md:text-[20px] font-normal leading-[32.4px] text-slate-300 max-w-2xl mx-auto"
          >
            How autonomous code agents, multi-file AST context windows, and in-browser Node runtimes shifted software creation from manual syntax drafting to natural language orchestration.
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
          <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm tracking-widest uppercase">
            <Cpu className="w-4 h-4" /> The Vibe Coding Revolution
          </div>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            From Tedious Syntax Debugging to Natural Language Architecture
          </h3>
          <p className={figtreeBodyClass}>
            Traditional software engineering demanded dozens of hours configuring bundlers, writing boilerplate CRUD routes, debugging React re-renders, and wrestling with database schema migrations. A simple product idea was delayed by weeks of configuration before a single customer saw it.
          </p>
          <p className={figtreeBodyClass}>
            In 2026, <strong>vibe-coding app builders</strong> combine frontier reasoning LLMs with full-stack agentic tool calling. By articulating high-level business logic, the AI handles multi-file imports, state management, Prisma schemas, and live container deployment, empowering you to iterate on product vision at the speed of thought.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              <span className="inline-block w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-white dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center">10x</span>
              <span className="inline-block w-10 h-10 rounded-full bg-cyan-500/20 border-2 border-white dark:border-slate-800 text-cyan-600 dark:text-cyan-400 font-bold text-xs flex items-center justify-center">100%</span>
              <span className="inline-block w-10 h-10 rounded-full bg-teal-500/20 border-2 border-white dark:border-slate-800 text-teal-600 dark:text-teal-400 font-bold text-xs flex items-center justify-center">&lt;1hr</span>
            </div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Velocity acceleration, full TypeScript source ownership, and sub-hour production deployments.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="relative">
          <div className="rounded-[2.5rem] bg-gradient-to-tr from-emerald-600 to-cyan-600 p-1 shadow-2xl">
            <div className="rounded-[2.4rem] bg-slate-950 p-6 md:p-8 text-white relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> vibe-agent: composer-v3.8
                </div>
              </div>

              {/* IDE Agent Preview UI */}
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                  <div className="text-xs text-emerald-400 font-bold mb-1 flex items-center justify-between">
                    <span>NATURAL LANGUAGE SPEC</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">Target: SaaS Dashboard</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans italic">
                    &quot;Build a team analytics dashboard with Supabase Auth, real-time Stripe subscription metrics, interactive Recharts graphs, and a dark mode toggle.&quot;
                  </p>
                </div>

                <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5"><GitBranch className="w-3.5 h-3.5 text-cyan-400" /> Multi-File Execution Plan</span>
                    <span className="text-emerald-400 font-mono">4 files modified</span>
                  </div>
                  <div className="space-y-1.5 font-mono text-[11px]">
                    <div className="flex items-center justify-between text-slate-300 bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                      <span className="text-cyan-300">src/app/dashboard/page.tsx</span>
                      <span className="text-emerald-400 font-bold">+184 lines</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300 bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                      <span className="text-cyan-300">src/lib/supabase/client.ts</span>
                      <span className="text-emerald-400 font-bold">+36 lines</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300 bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                      <span className="text-cyan-300">prisma/schema.prisma</span>
                      <span className="text-emerald-400 font-bold">+28 lines</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-950 to-teal-950 rounded-2xl p-4 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-sans">Live WebContainer Sandbox</div>
                      <div className="text-[11px] text-slate-400 font-mono">Running Next.js 15.2 on port 3000</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Compiled in 1.4s
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-900">
                <span>AST Context: 128k Tokens</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Zero Linter &amp; Type Errors
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* 2.5 Calculate Software Development ROI */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-950 p-6 md:p-10 border border-slate-800 text-white shadow-xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2">
              <Calculator className="w-4 h-4" /> Engineering Economics
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Traditional Software Agency vs. AI Vibe Coding ROI
            </h3>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-400 mt-1">
              Compare agency contracts, engineering sprint cycles, and autonomous AI app builders.
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
              Outsourced Agency
            </button>
            <button
              onClick={() => setRoiMode("ai")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                roiMode === "ai" 
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/20" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AI Vibe Coding
            </button>
          </div>
        </div>

        {/* Dynamic Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <Timer className="w-4 h-4 text-emerald-400" /> MVP Delivery Speed
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              {roiMode === "traditional" ? "8 to 14 Weeks" : "< 48 Hours"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Multiple kickoff meetings, sprint planning meetings, design signoffs, and endless QA revision rounds."
                : "Converse directly with an autonomous coding agent, test live interactive previews, and deploy in hours."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <DollarSign className="w-4 h-4 text-emerald-400" /> Upfront Development Cost
            </div>
            <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-2">
              {roiMode === "traditional" ? "$25,000 – $75,000" : "$20 – $40/mo"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Senior software architect billable hours, project managers, frontend developers, and backend engineers."
                : "Standard subscription to frontier AI coding tools with unlimited prompts and instant source code export."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <LineChart className="w-4 h-4 text-teal-400" /> Iteration &amp; Pivot Agility
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              {roiMode === "traditional" ? "Costly Change Orders" : "Instant Regens"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Changing product requirements requires formal change requests, renegotiated contracts, and delayed launches."
                : "Prompt the agent with new user feedback to refactor database models and UI layouts in under two minutes."}
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-gradient-to-r from-emerald-950 via-slate-900 to-cyan-950 p-8 md:p-12 border border-emerald-500/30 text-white shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Crown className="w-3.5 h-3.5 text-emerald-400" /> Editor&apos;s Benchmark Choice 2026
            </div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              Cursor &amp; Lovable: The Frontier Leaders of Generative Software
            </h3>
            <p className={figtreeDarkBodyClass}>
              <strong>Cursor</strong> is the undisputed champion for software engineers, offering unmatched semantic codebase indexing and multi-file composer intelligence. <strong>Lovable</strong> leads the in-browser vibe-coding paradigm, turning conversational requirements into full-stack Next.js and Supabase applications in real time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Full repository AST semantic indexing
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Autonomous multi-file edits &amp; git diffs
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Instant Supabase schema &amp; auth wiring
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Clean TypeScript export with zero vendor lock-in
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link 
              href="/tool/cursor"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-base shadow-lg shadow-emerald-500/25 hover:opacity-95 transition-all hover:scale-[1.02]"
            >
              Explore Cursor <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/tool/lovable-dev"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all text-center"
            >
              View Lovable
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
            Top 3 AI App Builders &amp; Vibe Coding Tools
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-600 dark:text-slate-400 mt-2">
            Selected by our developer evaluation lab based on architecture reasoning, multi-file coherence, and code export cleanliness.
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
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                    Score {alt.score}/10
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{alt.price}</span>
                </div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">{alt.name}</h4>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">{alt.bestFor}</p>
                <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {alt.highlight}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link 
                  href={`/tool/${alt.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
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
              <Laptop className="w-5 h-5 text-emerald-500" /> In-Browser WebContainer Prototyping
            </h4>
            <p className={figtreeBodyClass}>
              Platforms like <em>Bolt.new</em> and <em>Lovable</em> execute Node.js runtimes entirely inside the browser using WebAssembly. This allows non-technical creators to install NPM packages, run Vite dev servers, and preview live working apps with zero local environment setup.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-cyan-500" /> Local IDE Workflows &amp; Enterprise Monorepos
            </h4>
            <p className={figtreeBodyClass}>
              For established production codebases and high-security enterprise teams, <em>Cursor</em> and <em>Windsurf</em> remain unmatched. They operate locally on your files, integrating with your existing terminal, Git branches, and Docker microservices without uploading sensitive proprietary code to third-party hosting clouds.
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
          <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2">
            <BookOpen className="w-4 h-4" /> Technical Evaluation Criteria
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            How to Evaluate an AI App Builder in 2026
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-600 dark:text-slate-400 mt-1">
            Four non-negotiable architectural benchmarks when selecting a vibe-coding platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-emerald-50 dark:group-hover:text-emerald-900/10 transition-colors">
              01
            </span>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:rotate-6 transition-transform">
              <Sparkle className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Multi-File AST Context &amp; Semantic Indexing
            </h4>
            <p className={figtreeBodyClass}>
              Basic code autocomplete tools only look at the currently open file. Premier vibe-coding builders parse your entire repository into an <strong>Abstract Syntax Tree (AST)</strong> with vector embeddings. When you request a new API route, the agent understands your existing database models, authentication helpers, and UI component standards across hundreds of files simultaneously.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-emerald-50 dark:group-hover:text-emerald-900/10 transition-colors">
              02
            </span>
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 group-hover:rotate-6 transition-transform">
              <Database className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Database &amp; Auth Auto-Provisioning
            </h4>
            <p className={figtreeBodyClass}>
              A full-stack app requires more than pretty HTML. Verify that your builder can automatically provision PostgreSQL schemas, configure Row Level Security (RLS) policies, and connect OAuth providers (Google, GitHub, email magic links) via integrations with Supabase or Neon.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-emerald-50 dark:group-hover:text-emerald-900/10 transition-colors">
              03
            </span>
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:rotate-6 transition-transform">
              <GitBranch className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Code Exportability &amp; Zero Vendor Lock-In
            </h4>
            <p className={figtreeBodyClass}>
              Avoid proprietary low-code traps. Ensure you can connect your own GitHub repository with two-way sync, download the unminified Next.js/Vite project, and deploy it to any standard hosting provider (Vercel, AWS, Cloudflare) without hidden runtime license fees.
            </p>
          </div>

          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-emerald-50 dark:group-hover:text-emerald-900/10 transition-colors">
              04
            </span>
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:rotate-6 transition-transform">
              <Terminal className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Agentic Terminal Tool Use &amp; Self-Healing Debugging
            </h4>
            <p className={figtreeBodyClass}>
              When a compilation or TypeScript error occurs, state-of-the-art tools don&apos;t leave you stranded. The coding agent reads terminal stack traces, detects missing dependencies, executes <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">npm install</code>, and automatically patches the syntax error before you even report it.
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
          <div className="inline-flex items-center gap-2 text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2">
            <Zap className="w-4 h-4" /> Production Blueprint
          </div>
          <h3 className="text-3xl font-black tracking-tight text-white">
            4-Step Vibe-Coding Blueprint: From Prompt to Deployed App
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-400 mt-2">
            The proven sequence for building full-stack applications with conversational AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-500/30">
              1
            </div>
            <h4 className="text-lg font-bold text-white">Define Architecture Spec</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Draft a clear specification detailing the target users, core database entities, external APIs, and user authentication flows.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 font-bold flex items-center justify-center text-sm border border-teal-500/30">
              2
            </div>
            <h4 className="text-lg font-bold text-white">Scaffold UI &amp; Mock Data</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Let the agent generate responsive React/Tailwind layouts with realistic mock states, verifying navigation, modals, and design responsiveness.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-sm border border-cyan-500/30">
              3
            </div>
            <h4 className="text-lg font-bold text-white">Wire Database &amp; Auth</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Connect Supabase or Neon credentials, generate typed SQL migrations, and configure real-time subscriptions and protected route middlewares.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-sm border border-indigo-500/30">
              4
            </div>
            <h4 className="text-lg font-bold text-white">One-Click Production Deploy</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Sync code directly to your GitHub repository and link to Vercel or Cloudflare Pages for instant automated CI/CD builds with SSL domains.
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
          <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2">
            <Rocket className="w-4 h-4" /> Strategic Audiences
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Who Wins Big with AI Full-Stack App Builders?
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
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/20 translate-x-2" 
                      : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-emerald-500"}`} />
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
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
          <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs tracking-widest uppercase mb-1">
            <BookOpen className="w-4 h-4" /> Technical Architecture
          </div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Key Architectural Concepts in AI Full-Stack App Builders
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">WebContainers (WASM Node Runtimes)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              A breakthrough browser technology that runs a complete Node.js operating system inside a WebAssembly sandbox. This allows tools like Bolt.new to install NPM modules, compile Vite bundles, and run live servers inside your browser tab without external cloud virtual machines.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Model Context Protocol (MCP)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              An open standard enabling AI coding agents to securely access external development resources, inspect database schemas, read documentation APIs, and query Git version history through standardized interfaces.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Semantic AST Reranking</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              Instead of passing massive 100k token codebases to LLMs blindly, tools build structural AST maps to identify exact interface declarations, type definitions, and imported utilities, optimizing context relevance and eliminating hallucinated variables.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Spec-Driven Development (SDD)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              The practice of maintaining a single high-level specification markdown file that the agent treats as the source of truth, preventing codebase bloat and drift across complex conversational feature iterations.
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
            Frequently Asked Questions: AI Full-Stack App Builders
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] text-slate-600 dark:text-slate-400 mt-1">
            Expert answers regarding vibe coding, code quality, database wiring, and production deployments.
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
