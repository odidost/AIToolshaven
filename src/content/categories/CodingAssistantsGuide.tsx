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
  Terminal,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  GitBranch,
  FileCode2,
  Laptop,
  Users,
  FolderGit2,
  Check
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "Will AI coding assistants replace software engineers in 2026?",
    answer: "No, but engineers who master AI agents are rapidly replacing those who don't. Modern coding assistants shift a developer's role from writing repetitive syntax to acting as a high-level systems architect, verifying edge cases, and directing autonomous agentic coding loops."
  },
  {
    question: "Is it safe to connect proprietary enterprise codebases to AI coding tools?",
    answer: "Yes, provided you choose enterprise-grade platforms (like Windsurf, Cline, or GitHub Copilot Enterprise) with explicit Zero Data Retention (ZDR) agreements ensuring your proprietary intellectual property is never used to train global frontier models."
  },
  {
    question: "What is the difference between an AI autocomplete extension and an autonomous agent?",
    answer: "Autocomplete extensions (like standard Copilot) predict the next line or block of code as you type. Autonomous agents (like Cline or Windsurf's Cascade) read entire multi-directory repositories, execute terminal commands, run compiler typechecks, inspect browser console errors, and iteratively resolve bugs independently."
  }
];

const useCases = [
  {
    id: "founders",
    title: "Solo Founders & Indie Hackers",
    icon: <Zap className="w-5 h-5" />,
    content: "Ship complete full-stack SaaS applications in days rather than quarters. Solo developers use agentic tools like Cline and v0 by Vercel to handle end-to-end database schemas, authentication middleware, and frontend UI without hiring an external engineering agency."
  },
  {
    id: "enterprise",
    title: "Enterprise Engineering Teams",
    icon: <Users className="w-5 h-5" />,
    content: "Accelerate legacy framework migrations and eliminate technical debt. Senior engineering teams automate test suite creation, refactor outdated monoliths, and compress developer onboarding times from months to hours using repository-wide context indexing."
  },
  {
    id: "frontend",
    title: "Frontend & UI Specialists",
    icon: <Laptop className="w-5 h-5" />,
    content: "Eliminate repetitive component styling. Frontend developers prompt generative UI engines to construct accessible, fully typed React and Tailwind CSS components in seconds, focusing their energy on complex state management and seamless UX animations."
  }
];

const glossaryTerms = [
  { term: "Agentic Loop (ReAct Framework)", def: "An autonomous cycle where an AI model reasons through a task, executes a tool (like running a Bash command or reading a file), inspects the result, and iterates until the goal is achieved." },
  { term: "AST (Abstract Syntax Tree) Indexing", def: "Parsing code into mathematical tree structures, allowing the AI to understand dependencies, class hierarchies, and symbol references across thousands of files simultaneously." },
  { term: "Human-in-the-Loop (HITL)", def: "A security framework where the AI must request explicit user authorization before writing to disk, executing terminal scripts, or staging git commits." },
  { term: "Context Window Compaction", def: "Algorithmic summarization techniques that keep 200k+ token workspaces within an LLM's active reasoning memory without losing critical architectural rules." }
];

const alternatives = [
  { 
    name: "Cursor", 
    slug: "cursor",
    score: "9.9", 
    price: "Freemium / $20/mo", 
    bestFor: "Agentic Multi-File Flow & Composer", 
    highlight: "The premier AI-native fork of VS Code. Features surgical multi-file diffs, terminal execution, and whole-codebase AST indexing." 
  },
  { 
    name: "GitHub Copilot", 
    slug: "github-copilot",
    score: "9.7", 
    price: "From $10/mo", 
    bestFor: "Enterprise Tab-Complete & PR Reviews", 
    highlight: "Enterprise industry benchmark with native GitHub ecosystem hooks, automated PR summaries, and multi-IDE extension support." 
  },
  { 
    name: "Cline", 
    slug: "cline",
    score: "9.8", 
    price: "Free & Open Source", 
    bestFor: "Autonomous CLI & Browser Loops", 
    highlight: "Autonomous agent for VS Code with terminal shell execution, browser console inspection, and flexible multi-model API routing." 
  },
  { 
    name: "Windsurf", 
    slug: "windsurf",
    score: "9.6", 
    price: "Freemium / $15/mo", 
    bestFor: "Deep Context & Cascade Reasoning", 
    highlight: "Next-gen AI IDE by Codeium powered by Cascade real-time multi-file understanding and super-fast autocomplete." 
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

export default function CodingAssistantsGuide() {
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
        className="preserve-dark mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-rose-500/20 shadow-2xl shadow-rose-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/40 via-amber-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-8 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-orange-400" /> 
            <span>2026 Developer AI &amp; Agentic Coding Architecture</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.1]"
          >
            Evaluation &amp; Architecture Blueprint: <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 drop-shadow-sm">
              AI Coding Assistants, IDEs &amp; Autonomous Agents
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${figtreeDarkBodyClass} max-w-2xl mx-auto`}
          >
            From single-line tab autocomplete to whole-codebase reasoning, multi-file diffs, and autonomous terminal debugging loops. How modern engineering teams select their AI stack.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Definitive Overview - Two Alternating Blocks */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-8 md:mb-12 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-rose-500 uppercase tracking-[0.25em] mb-4">The Paradigm Shift</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">From Copilots to Autonomous Software Agents</h4>
        </motion.div>

        <div className="space-y-10 md:space-y-12">
          {/* Block 1 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-amber-500/20 border border-rose-500/20 flex items-center justify-center text-rose-500 mb-8 shadow-sm">
                <Terminal className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">The Leap to Terminal-Executing Agents</h5>
              <p className={figtreeBodyClass}>
                Early AI coding tools were passive autocomplete widgets. Today, agentic assistants like <Link href="/tool/cline" className="font-bold underline decoration-primary/40 underline-offset-4 hover:text-primary transition-colors">Cline</Link> operate as autonomous team members. They analyze entire folder trees, execute shell commands (e.g. running <code className="text-sm bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">npm run build</code>), diagnose compiler stack traces, and self-correct code across dozens of files simultaneously until tests pass.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-rose-50/50 to-amber-50/50 dark:from-rose-950/20 dark:to-amber-900/20 border border-rose-200/50 dark:border-rose-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-48 h-48 bg-gradient-to-tr from-rose-500 to-amber-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 absolute" />
               <div className="w-full max-w-xs aspect-square rounded-3xl bg-slate-900/95 border border-white/20 p-5 flex flex-col justify-between relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-105 font-mono text-xs">
                 <div className="flex items-center justify-between border-b border-white/10 pb-3">
                   <div className="flex items-center gap-2 text-rose-400 font-bold">
                     <Terminal className="w-4 h-4" /> agent.bash
                   </div>
                   <div className="w-2 h-2 rounded-full bg-success animate-ping" />
                 </div>
                 
                 <div className="space-y-2 text-slate-300 py-2">
                   <div className="text-emerald-400 font-bold">$ npx tsc --noEmit</div>
                   <div className="text-slate-400">Found 2 type errors in auth.ts</div>
                   <div className="text-amber-400">$ auto-fixing type definition...</div>
                   <div className="text-emerald-400 font-bold">✓ Build passed (0 errors)</div>
                 </div>

                 <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-white/10 pt-2">
                   <span>Human Approval: <strong className="text-white">Granted</strong></span>
                   <span className="text-success font-bold">100% Verified</span>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-900/20 border border-orange-200/50 dark:border-orange-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-full max-w-sm space-y-4 relative z-10 transition-transform duration-700 group-hover:scale-105">
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold">
                       <Cpu className="w-5 h-5" />
                     </div>
                     <div>
                       <div className="text-xs font-bold text-on-surface">Whole-Repo Indexing</div>
                       <div className="text-[10px] text-slate-400">148 Files • AST Dependency Graph</div>
                     </div>
                   </div>
                   <span className="text-xs font-bold text-success px-2 py-0.5 bg-success/10 rounded-full">Active</span>
                 </div>

                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md space-y-2">
                   <div className="flex justify-between items-center text-xs font-bold">
                     <span className="text-slate-500">Generative UI Render</span>
                     <span className="text-orange-500 font-mono">v0.dev / Next.js</span>
                   </div>
                   <div className="h-16 bg-gradient-to-r from-orange-400/20 to-rose-400/20 rounded-xl border border-dashed border-rose-400/40 flex items-center justify-center text-xs font-bold text-rose-500">
                     &lt;DashboardLayout with Tailwind /&gt;
                   </div>
                 </div>
               </div>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-8 shadow-sm">
                <Code2 className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">AI-Native IDEs & Generative Component Canvases</h5>
              <p className={figtreeBodyClass}>
                Software environments have evolved from static text editors into intelligent development companions. AI-native IDEs like <Link href="/tool/windsurf" className="font-bold underline decoration-primary/40 underline-offset-4 hover:text-primary transition-colors">Windsurf</Link> predict developer intent across multiple files, while generative UI systems like <Link href="/tool/v0-dev" className="font-bold underline decoration-primary/40 underline-offset-4 hover:text-primary transition-colors">v0 by Vercel</Link> convert natural language prompts into accessible, fully typed React components in real time.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2.5: Interactive ROI / Velocity Calculator */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="bg-gradient-to-br from-[#FFF9F7] via-[#FFFBF9] to-[#FFF5F2] border border-[#F3E8E2] rounded-[2.5rem] p-8 md:p-12 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center mb-10">
            <div className="w-14 h-14 bg-white border border-[#F3E8E2] text-[#E11D48] rounded-2xl flex items-center justify-center mb-4 shadow-2xs">
              <Calculator className="w-7 h-7" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#0A0A0A] tracking-tight mb-3">Calculate Developer Velocity ROI</h3>
            <p className="font-sans text-xs sm:text-sm text-[#4B5563] max-w-xl leading-relaxed">
              See the exact sprint hours, boilerplate reduction, and engineering capital saved by empowering engineers with agentic coding environments.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="bg-white border border-[#E5E7EB] p-1.5 rounded-full flex gap-1.5 shadow-2xs">
              <button 
                onClick={() => setRoiMode("traditional")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${roiMode === "traditional" ? "bg-[#0A0A0A] text-white shadow-xs" : "text-[#6B7280] hover:text-[#0A0A0A]"}`}
              >
                Manual Engineering
              </button>
              <button 
                onClick={() => setRoiMode("ai")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${roiMode === "ai" ? "bg-[#E11D48] text-white shadow-xs" : "text-[#6B7280] hover:text-[#0A0A0A]"}`}
              >
                AI-Augmented Team
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center relative z-10">
            <div className="bg-white border border-[#E5E7EB] p-6 md:p-8 rounded-2xl shadow-xs">
              <Timer className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-emerald-600" : "text-slate-400"}`} />
              <div className="text-xs font-mono font-medium text-[#6B7280] uppercase tracking-wider mb-2">Feature Sprint Time</div>
              <div className="text-3xl font-heading font-black text-[#0A0A0A] tracking-tight">
                {roiMode === "ai" ? "1.5 Days" : "2 Weeks"}
              </div>
            </div>
            <div className="bg-white border border-[#E5E7EB] p-6 md:p-8 rounded-2xl shadow-xs">
              <DollarSign className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-emerald-600" : "text-slate-400"}`} />
              <div className="text-xs font-mono font-medium text-[#6B7280] uppercase tracking-wider mb-2">Boilerplate &amp; Test Setup</div>
              <div className="text-3xl font-heading font-black text-[#0A0A0A] tracking-tight">
                {roiMode === "ai" ? "10 Mins" : "8+ Hours"}
              </div>
            </div>
            <div className="bg-white border border-[#E5E7EB] p-6 md:p-8 rounded-2xl shadow-xs">
              <LineChart className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-[#E11D48]" : "text-slate-400"}`} />
              <div className="text-xs font-mono font-medium text-[#6B7280] uppercase tracking-wider mb-2">Debugging Velocity</div>
              <div className="text-3xl font-heading font-black text-[#0A0A0A] tracking-tight">
                {roiMode === "ai" ? "Instant Tracing" : "Context Switch"}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. Sponsor Spotlight - Soft Warm Card */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#FFF9F7] via-[#FFFBF9] to-[#FFF5F2] overflow-hidden border border-[#F3E8E2] shadow-xs p-6 md:p-10 group">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white text-amber-700 text-xs font-semibold uppercase tracking-wider border border-[#F3E8E2] shadow-2xs">
                <Crown className="w-3.5 h-3.5 text-amber-500" />
                <span>Editor&apos;s Choice 2026</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#0A0A0A] leading-[1.15] tracking-tight">
                Supercharge your engineering workflow with <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600">Cline</span>
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                <Link href="/tool/cline" className="text-[#0A0A0A] underline font-bold hover:text-[#E11D48] transition-colors">Cline</Link> is the open-source autonomous coding agent that integrates directly into VS Code. It can inspect entire project repositories, run shell scripts, analyze browser console output, and self-heal build errors while keeping you in total control with explicit human approvals.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/tool/cline" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white hover:bg-[#262626] rounded-md font-medium text-xs transition-colors shadow-xs"
                >
                  <span>Read Our Cline Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 space-y-4 shadow-xs">
                <h4 className="text-[#0A0A0A] font-heading font-bold text-lg tracking-tight pb-3 border-b border-[#E5E7EB]">
                  The Cline Advantage
                </h4>
                {[
                  { title: "Terminal & CLI Execution", desc: "Autonomously executes tests, package installs, and builds." },
                  { title: "Browser Automation & Debugging", desc: "Launches local browsers to inspect real runtime console errors." },
                  { title: "Human-in-the-Loop Safety", desc: "Explicit approvals before editing files or running terminal actions." },
                  { title: "Multi-Model Flexibility", desc: "Route tasks between Claude 3.5 Sonnet, GPT-4o, and DeepSeek." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="mt-0.5 bg-[#FFF1F2] p-1.5 rounded-md border border-[#FECDD3] text-[#E11D48] shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0A0A0A]">{feature.title}</div>
                      <div className="text-[11px] text-[#4B5563] mt-0.5 leading-relaxed">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3.5: Market Landscape Spotlight & Contenders Matrix */}
      <motion.section 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
            <span className="material-symbols-outlined text-[15px] text-[#E11D48]">award_star</span>
            <span>Market Landscape</span>
          </div>
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#0A0A0A] tracking-tight">
            Top Coding Assistants &amp; AI IDEs
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[#4B5563] max-w-2xl mx-auto mt-2 leading-relaxed">
            Our editorial benchmark ranks the highest-performing AI IDEs and autonomous coding agents for modern engineering teams.
          </p>
        </div>
        
        {/* 1 Winner Spotlight + 3 Runners-Up Container */}
        <motion.div variants={fadeUpVariant} className="flex flex-col lg:flex-row gap-6 items-stretch mb-8">
          
          {/* Left Column: #1 Winner Spotlight (Cursor) */}
          <div className="flex-1 bg-white border border-[#E5E7EB] hover:border-[#E11D48]/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs transition-colors group">
            <div>
              {/* Badge Row */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-[#FFF1F2] text-[#E11D48] border border-[#FECDD3] px-2.5 py-0.5 rounded-md text-xs font-semibold">
                  <span className="material-symbols-outlined text-[14px]">workspace_premium</span>
                  <span>#1 Benchmark Winner</span>
                </span>
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-md text-[11px] font-mono font-medium">
                  {alternatives[0].price}
                </span>
                <span className="inline-flex items-center gap-1 bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] px-2 py-0.5 rounded-md text-[11px] font-mono">
                  ★ {alternatives[0].score}/10 Overall Score
                </span>
              </div>

              {/* Title & Role */}
              <div className="mb-3">
                <div className="text-[11px] font-mono text-[#6B7280] uppercase tracking-wider mb-1">
                  {alternatives[0].bestFor}
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#0A0A0A] tracking-tight group-hover:text-[#E11D48] transition-colors">
                  <Link href={`/tool/${alternatives[0].slug}`}>
                    {alternatives[0].name}
                  </Link>
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-5">
                {alternatives[0].highlight}
              </p>

              {/* Key Capabilities Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-[#374151]">
                <div className="flex items-center gap-2 p-2.5 rounded-md bg-[#F9FAFB] border border-[#E5E7EB]">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Surgical Multi-File Composer</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-md bg-[#F9FAFB] border border-[#E5E7EB]">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Whole-Codebase AST Indexing</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-md bg-[#F9FAFB] border border-[#E5E7EB]">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Claude 3.5 Sonnet Integration</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-md bg-[#F9FAFB] border border-[#E5E7EB]">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Autonomous Terminal Execution</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E5E7EB]">
              <Link 
                href={`/tool/${alternatives[0].slug}`}
                className="inline-flex items-center gap-2 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-medium px-5 py-2.5 rounded-md transition-colors shadow-xs"
              >
                <span>Read Our {alternatives[0].name} Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/compare-tools/cursor-vs-github-copilot"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4B5563] hover:text-[#E11D48] px-3 py-2 rounded-md hover:bg-[#F9FAFB] transition-colors"
              >
                <span>Compare vs Copilot →</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Contenders & Runners-Up */}
          <div className="w-full lg:w-80 xl:w-96 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-5 md:p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5E7EB]">
                <span className="text-xs font-semibold text-[#0A0A0A] uppercase tracking-wider">
                  Top Contenders &amp; Runners-Up
                </span>
                <span className="text-[10px] font-mono text-[#6B7280]">#2 – #4 Ranked</span>
              </div>

              <div className="space-y-2.5">
                {[
                  alternatives.find(a => a.slug === "cline") || alternatives[2],
                  alternatives.find(a => a.slug === "github-copilot") || alternatives[1],
                  alternatives.find(a => a.slug === "windsurf") || alternatives[3]
                ].map((tool, idx) => (
                  <Link
                    key={tool.slug}
                    href={`/tool/${tool.slug}`}
                    className="group/item block p-3 rounded-lg bg-white border border-[#E5E7EB] hover:border-[#E11D48] transition-all hover:shadow-xs"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-5 h-5 rounded-md bg-[#FFF1F2] border border-[#FECDD3] text-[#E11D48] flex items-center justify-center text-[10px] font-mono font-bold shrink-0">
                          #{idx + 2}
                        </span>
                        <span className="text-xs font-bold text-[#0A0A0A] group-hover/item:text-[#E11D48] transition-colors truncate">
                          {tool.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                        ★ {tool.score}
                      </span>
                    </div>

                    <div className="text-[11px] font-medium text-[#6B7280] mb-1 truncate pl-7">
                      {tool.bestFor}
                    </div>

                    <p className="text-[11px] text-[#4B5563] line-clamp-2 leading-relaxed mb-2 pl-7">
                      {tool.highlight}
                    </p>

                    <div className="flex items-center justify-between pt-1.5 border-t border-[#F3F4F6] text-[10px] font-mono text-[#6B7280] pl-7">
                      <span>{tool.price}</span>
                      <span className="text-[#E11D48] font-sans font-medium flex items-center gap-0.5 group-hover/item:translate-x-0.5 transition-transform">
                        Specs &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E5E7EB] text-center">
              <a
                href="#tools-grid"
                className="text-[11px] font-medium text-[#6B7280] hover:text-[#E11D48] transition-colors"
              >
                Compare all models in directory below &darr;
              </a>
            </div>
          </div>

        </motion.div>

        {/* Head-to-Head Comparison & Workflow Quick Bridges */}
        <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#FFF9F7] border border-[#F3E8E2]">
          <Link
            href="/compare-tools/cursor-vs-github-copilot"
            className="group block p-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#E11D48]/50 transition-all shadow-2xs"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-rose-600 mb-1">Top Ranking Comparison</div>
            <div className="text-sm font-extrabold text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors flex items-center gap-1.5">
              Cursor vs GitHub Copilot →
            </div>
            <p className="text-xs text-[#4B5563] mt-1 leading-relaxed">
              Autonomous IDE with Composer vs Enterprise tab-completion ecosystem.
            </p>
          </Link>

          <Link
            href="/compare-tools/codeium-vs-cursor"
            className="group block p-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#E11D48]/50 transition-all shadow-2xs"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1">Free Tier Showdown</div>
            <div className="text-sm font-extrabold text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors flex items-center gap-1.5">
              Codeium vs Cursor →
            </div>
            <p className="text-xs text-[#4B5563] mt-1 leading-relaxed">
              Unlimited free completions vs cutting-edge AI reasoning models.
            </p>
          </Link>

          <Link
            href="/workflows/vibe-coding"
            className="group block p-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#E11D48]/50 transition-all shadow-2xs"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 mb-1">Which Tools Work Best Together?</div>
            <div className="text-sm font-extrabold text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors flex items-center gap-1.5">
              Vibe Coding Production Stack →
            </div>
            <p className="text-xs text-[#4B5563] mt-1 leading-relaxed">
              Step-by-step workflow chaining Claude 3.5 Sonnet, Cursor, Copilot &amp; v0.
            </p>
          </Link>
        </motion.div>
      </motion.section>

      {/* 4. Buyer's Guide - Bento Box Layout */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 max-w-6xl mx-auto"
      >
        <motion.div variants={fadeUpVariant} className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-orange-500 uppercase tracking-[0.25em] mb-4">Evaluation Criteria</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">What to Demand from Pro Coding Tools</h4>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Big Card 1 */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-gradient-to-br from-[#FFF9F7] via-[#FFFBF9] to-[#FFF5F2] border border-[#F3E8E2] rounded-[2.5rem] p-8 md:p-10 hover:shadow-sm hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-white border border-[#F3E8E2] text-red-600 rounded-2xl flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <GitBranch className="w-7 h-7" />
                </div>
                <span className="text-6xl md:text-7xl font-black text-rose-200/50 group-hover:text-red-500/20 transition-colors">01</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0A0A0A] mb-4 tracking-tight">Whole-Repository Context &amp; AST Indexing</h4>
              <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Single-file autocomplete is obsolete. A professional coding assistant must build an Abstract Syntax Tree (AST) of your entire repository, accurately tracing imports, database models, and interface contracts across hundreds of files simultaneously.
              </p>
            </div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div variants={fadeUpVariant} className="bg-gradient-to-br from-[#FFF9F7] via-[#FFFBF9] to-[#FFF5F2] border border-[#F3E8E2] rounded-[2.5rem] p-8 md:p-10 hover:shadow-sm hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-white border border-[#F3E8E2] text-amber-600 rounded-2xl flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Terminal className="w-7 h-7" />
                </div>
                <span className="text-6xl md:text-7xl font-black text-amber-200/50 group-hover:text-amber-500/20 transition-colors">02</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0A0A0A] mb-3 tracking-tight">Terminal &amp; Build Tooling</h4>
              <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Ensure the agent can run linters, compiler checks, and unit tests directly in your shell to verify code before asking for your review.
              </p>
            </div>
          </motion.div>

          {/* Small Card 3 */}
          <motion.div variants={fadeUpVariant} className="bg-gradient-to-br from-[#FFF9F7] via-[#FFFBF9] to-[#FFF5F2] border border-[#F3E8E2] rounded-[2.5rem] p-8 md:p-10 hover:shadow-sm hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-white border border-[#F3E8E2] text-orange-600 rounded-2xl flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <span className="text-6xl md:text-7xl font-black text-orange-200/50 group-hover:text-orange-500/20 transition-colors">03</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0A0A0A] mb-3 tracking-tight">Zero Data Retention (ZDR)</h4>
              <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Demand strict enterprise privacy guarantees stating that proprietary source code is never cached or used for global foundation model training.
              </p>
            </div>
          </motion.div>

          {/* Big Card 4 */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-gradient-to-br from-[#FFF9F7] via-[#FFFBF9] to-[#FFF5F2] border border-[#F3E8E2] rounded-[2.5rem] p-8 md:p-10 hover:shadow-sm hover:border-rose-500/40 hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-white border border-[#F3E8E2] text-rose-600 rounded-2xl flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <FileCode2 className="w-7 h-7" />
                </div>
                <span className="text-6xl md:text-7xl font-black text-rose-200/50 group-hover:text-rose-500/20 transition-colors">04</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0A0A0A] mb-4 tracking-tight">Surgical Multi-File Diff Reviews</h4>
              <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Autonomous agents must present clean, side-by-side git diffs before modifying your files. You should be able to accept, reject, or comment on individual line hunks rather than blindingly overwriting codebase files.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 4.5: Step-by-Step "How-To" Walkthrough */}
      <motion.section 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto bg-gradient-to-br from-[#FFF9F7] via-[#FFFBF9] to-[#FFF5F2] border border-[#F3E8E2] rounded-[2.5rem] p-8 md:p-12 shadow-xs text-[#0A0A0A]"
      >
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#F3E8E2] bg-white text-xs font-semibold text-[#E11D48] mb-3">
            <span className="material-symbols-outlined text-[15px]">checklist</span>
            <span>Implementation Guide</span>
          </div>
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#0A0A0A] tracking-tight mb-8">
            How to Build Full-Stack Features with AI in 4 Steps
          </h4>
          
          <div className="space-y-8">
            {[
              { title: "Define Architecture Rules First", text: "Create an AGENTS.md or .cursorrules file in your project root documenting your stack conventions (e.g., 'Use Tailwind v3, App Router, and server actions'). This anchors the agent." },
              { title: "Request a Multi-Step Plan Before Code", text: "Never ask the agent to build a whole feature in one shot. Instruct it: 'Analyze our repository and write an implementation plan with verification steps first.' Review the design." },
              { title: "Let the Agent Verify with Terminal Loops", text: "Allow the agent to execute compiler checks (e.g. npx tsc --noEmit) and test suites automatically to catch type mismatches and syntax errors before presenting changes to you." },
              { title: "Review Git Diffs Surgically", text: "Inspect the final git diff line-by-line. Confirm business logic, ensure no secret keys were exposed, and stage clean commits with automated descriptive messages." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="flex gap-4 md:gap-6 items-start">
                <div className="shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-sm md:text-base font-black text-[#E11D48] shadow-2xs">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h5 className="text-base sm:text-lg font-bold text-[#0A0A0A] mb-1.5">{step.title}</h5>
                  <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. Use Cases - Interactive Tabs */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto bg-gradient-to-br from-[#FFF9F7] via-[#FFFBF9] to-[#FFF5F2] border border-[#F3E8E2] rounded-[2.5rem] p-6 md:p-10 shadow-xs"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#F3E8E2] bg-white text-xs font-semibold text-[#E11D48] mb-3">
            <span className="material-symbols-outlined text-[15px]">group</span>
            <span>Target Profiles</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#0A0A0A] tracking-tight">
            Who Benefits Most?
          </h3>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Tab Navigation */}
          <div className="w-full md:w-1/3 space-y-2.5">
            {useCases.map((uc) => {
              const isActive = activeTab === uc.id;
              return (
                <button
                  key={uc.id}
                  onClick={() => setActiveTab(uc.id)}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl font-medium text-xs sm:text-sm text-left border transition-all ${
                    isActive 
                      ? 'bg-[#E11D48] text-white shadow-xs border-[#E11D48]' 
                      : 'bg-white text-[#4B5563] hover:text-[#0A0A0A] hover:bg-[#FFF9F7] border-[#E5E7EB]'
                  }`}
                >
                  <div className={`${isActive ? 'text-white' : 'text-[#6B7280]'} shrink-0`}>
                    {uc.icon}
                  </div>
                  <span className="font-semibold">{uc.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="w-full md:w-2/3 bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-xs">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="w-12 h-1 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full mb-6" />
                <h4 className="text-xl sm:text-2xl font-heading font-bold text-[#0A0A0A] mb-3 tracking-tight">
                  {useCases.find(u => u.id === activeTab)?.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {useCases.find(u => u.id === activeTab)?.content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* 5.5: Topical Glossary */}
      <motion.section 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
            <span className="material-symbols-outlined text-[15px] text-[#E11D48]">menu_book</span>
            <span>Technical Foundation</span>
          </div>
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#0A0A0A] tracking-tight">
            Core Terminology
          </h4>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {glossaryTerms.map((item, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="bg-[#FFF9F7] border border-[#F3E8E2] p-5 md:p-6 rounded-2xl shadow-2xs">
              <div className="flex items-center gap-2.5 mb-2.5">
                <BookOpen className="w-5 h-5 text-[#E11D48]" />
                <h5 className="text-sm font-bold text-[#0A0A0A]">{item.term}</h5>
              </div>
              <p className="font-sans text-xs text-[#4B5563] leading-relaxed">{item.def}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 6. SEO FAQ */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-8 md:mb-12 max-w-3xl mx-auto"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] text-xs font-medium text-[#4B5563] mb-3">
            <span className="material-symbols-outlined text-[15px] text-[#E11D48]">help</span>
            <span>Common Questions</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#0A0A0A] tracking-tight">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="space-y-3">
          {faqData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-all ${isOpen ? 'bg-[#FFF9F7] border-[#FECDD3] shadow-xs' : 'bg-white border-[#E5E7EB] hover:border-[#E11D48]/40'}`}
              >
                <button 
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <span className="font-heading font-bold text-[#0A0A0A] text-base sm:text-lg tracking-tight pr-6">{faq.question}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#E11D48] text-white rotate-180' : 'bg-[#F9FAFB] text-[#6B7280]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className={`px-8 pb-8 ${figtreeBodyClass}`}>
                        {faq.answer}
                      </div>
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
