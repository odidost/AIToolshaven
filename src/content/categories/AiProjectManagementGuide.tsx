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
  Briefcase,
  Layers,
  Users,
  ShieldCheck,
  Award,
  Filter,
  FileText,
  Kanban,
  GitBranch,
  CalendarCheck,
  TrendingUp,
  Sliders,
  Cpu,
  Target
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "How do AI project management tools differ from traditional tools like Jira or Trello?",
    answer: "Traditional project management tools are passive databases that require manual ticket creation, tedious status updates, and manual dependency linking. AI project management platforms (like ClickUp Brain, Motion Planner, and Asana Intelligence) act as active orchestrators: they autonomously generate subtasks from feature specs, predict delivery bottlenecks using velocity telemetry, reschedule tasks dynamically when blockers occur, and synthesize daily standup summaries automatically."
  },
  {
    question: "Can AI accurately forecast project delivery dates and sprint bottlenecks?",
    answer: "Yes. By analyzing historical commit velocity, PR merge latency, task estimation accuracy, and real-time team capacity, AI models calculate probabilistic completion curves (Monte Carlo simulations). Instead of a single static deadline, they alert engineering managers to 85% probability risk windows weeks before a milestone slips."
  },
  {
    question: "Is proprietary codebase and sprint data protected when using AI PM assistants?",
    answer: "Enterprise AI project platforms (ClickUp, Monday, Asana, Wrike) operate under strict SOC 2 Type II, ISO 27001, and GDPR compliance. Customer workspace tickets, user comments, and integrated Git commits are isolated in zero-retention enterprise tenant partitions and are never used to train public foundational AI models."
  },
  {
    question: "What is the typical ROI timeline when deploying AI project management across a 30-person team?",
    answer: "Most engineering and product organizations recoup their subscription investment within the first 30 days. By eliminating 3 to 5 hours of weekly manual ticket triage, status writing, and meeting prep per person, a 30-person squad recovers over 400 engineering hours per month—equating to tens of thousands in reclaimed payroll efficiency."
  }
];

const useCases = [
  {
    id: "engineering",
    title: "Software Engineering & Product Squads",
    icon: <GitBranch className="w-5 h-5" />,
    content: "Eliminate sprint planning drag. Product managers turn PRDs into fully decomposed user stories and subtasks in seconds with ClickUp Brain, while developers enjoy bi-directional GitHub/GitLab syncing where commit merges automatically close tickets and write release notes."
  },
  {
    id: "agencies",
    title: "Digital Agencies & Client Services",
    icon: <Briefcase className="w-5 h-5" />,
    content: "Balance client deliverables without burning out creative talent. Motion Planner automatically rearranges individual designer schedules when high-priority client revisions arrive, ensuring fixed retainer deadlines are never missed."
  },
  {
    id: "enterprise",
    title: "Enterprise PMOs & Operations Leaders",
    icon: <Users className="w-5 h-5" />,
    content: "Gain unified cross-department visibility across 50+ concurrent workstreams. Monday AI Assistant and Asana Intelligence synthesize portfolio-level health metrics, pinpoint cross-project dependency risks, and draft executive summaries with zero manual collation."
  }
];

const glossaryTerms = [
  { term: "Work Graph Orchestration", def: "A semantic network model that maps relationships between people, tasks, documents, commits, and milestones to automate workflow progression." },
  { term: "Probabilistic Critical Path", def: "Algorithmic forecasting that calculates likelihood of project completion by simulating task variations rather than assuming fixed linear durations." },
  { term: "Autonomous Ticket Decomposition", def: "Natural language processing capability that converts high-level project goals or PRDs into atomic, assignable subtasks with estimated story points." },
  { term: "Semantic Backlog Deduplication", def: "Vector embedding clustering that automatically flags duplicate feature requests, bug reports, and customer tickets across diverse workspaces." },
  { term: "Capacity Heuristics", def: "Real-time algorithmic workload balancing that prevents burnout by redistributing incoming tasks based on individual working hours and calendar load." }
];

const alternatives = [
  { 
    name: "ClickUp (ClickUp Brain)", 
    slug: "clickup",
    score: "9.9", 
    price: "Freemium / $7–$12/user/mo", 
    bestFor: "All-in-One Squad Productivity & AI Knowledge", 
    highlight: "The complete work operating system with ClickUp Brain—generates subtasks, summarizes comment threads, and queries company docs instantly." 
  },
  { 
    name: "Motion Planner", 
    slug: "motion-planner",
    score: "9.7", 
    price: "$19–$34/user/mo", 
    bestFor: "Autonomous Calendar Scheduling & Task Prioritization", 
    highlight: "AI calendar and task manager that dynamically builds your day, automatically rescheduling unfinished tasks around real-time meetings." 
  },
  { 
    name: "Monday AI Assistant", 
    slug: "monday-ai-assistant",
    score: "9.6", 
    price: "From $9/user/mo", 
    bestFor: "Cross-Functional Enterprise Workflows & Automation", 
    highlight: "Visual enterprise work platform enhanced with AI formulas, automated board generation, and instant project risk summaries." 
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

export default function AiProjectManagementGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  
  // Interactive Calculator State
  const [teamSize, setTeamSize] = useState<number>(15);
  const [weeklyAdminHours, setWeeklyAdminHours] = useState<number>(5);
  const [hourlyRate, setHourlyRate] = useState<number>(75);
  const [calcMode, setCalcMode] = useState<"ai" | "traditional">("ai");

  // Calculations
  const weeklyHoursSaved = Math.round(teamSize * weeklyAdminHours * (calcMode === "ai" ? 0.75 : 0.2));
  const annualSavings = Math.round(weeklyHoursSaved * hourlyRate * 48);
  const sprintEfficiencyGain = calcMode === "ai" ? 38 : 12;

  return (
    <article className="w-full max-w-6xl mx-auto py-24 font-sans overflow-hidden">
      
      {/* 1. Hero Header */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-32 md:my-48 relative rounded-[3rem] bg-slate-900 overflow-hidden border border-indigo-500/20 shadow-2xl shadow-indigo-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-violet-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-8 py-20 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-8 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" /> 
            2026 Autonomous Work Orchestration &amp; Agile Sprint Intelligence
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.05]"
          >
            The Definitive Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-300 drop-shadow-sm">
              AI Project Management &amp; Work Orchestration
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${figtreeDarkBodyClass} max-w-2xl mx-auto`}
          >
            From autonomous sprint ticket decomposition and real-time dependency risk forecasting to dynamic calendar rescheduling and automated executive standups: how elite engineering and ops teams deliver 3x faster.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Definitive Overview - Two Alternating Blocks */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="my-32 md:my-48 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <h3 className="text-sm font-extrabold text-indigo-500 uppercase tracking-[0.25em] mb-4">The Paradigm Shift</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">From Passive Ticket Tracking to Autonomous Execution</h4>
        </motion.div>

        <div className="space-y-24">
          {/* Block 1 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-500 mb-8 shadow-sm">
                <Kanban className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">Autonomous Spec Decomposition &amp; Unified Knowledge</h5>
              <p className={figtreeBodyClass}>
                Traditional PM software requires endless hours of manual ticketing, story point debates, and documentation formatting. With modern systems like <Link href="/tool/clickup" className="font-bold underline decoration-primary/40 underline-offset-4 hover:text-primary transition-colors">ClickUp Brain</Link>, managers feed in a raw PRD or executive brief, and the AI immediately generates nested subtasks, assigns owner tags based on past sprint velocity, and indexes project context across internal wikis and chats.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-indigo-50/50 to-cyan-50/50 dark:from-indigo-950/20 dark:to-cyan-900/20 border border-indigo-200/50 dark:border-indigo-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-48 h-48 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 absolute" />
               <div className="w-full max-w-xs aspect-square rounded-3xl bg-slate-900/95 border border-white/20 p-5 flex flex-col justify-between relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-105 font-mono text-xs">
                 <div className="flex items-center justify-between border-b border-white/10 pb-3">
                   <div className="flex items-center gap-2 text-indigo-400 font-bold">
                     <Cpu className="w-4 h-4" /> ClickUp Brain Orchestrator
                   </div>
                   <div className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold font-sans">100% Decomposed</div>
                 </div>
                 
                 <div className="space-y-2 text-slate-300 py-2">
                   <div className="text-slate-400 font-sans italic">&quot;Prompt: Breakdown Authentication Flow PRD into 4 sprint stories&quot;</div>
                   <div className="bg-slate-800 p-2.5 rounded-xl border border-white/10 text-[11px] text-slate-200 font-sans space-y-1">
                     <div className="flex items-center gap-1.5 text-indigo-300 font-bold">
                       <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Story 1: OAuth 2.0 PKCE Flow (3 SP)
                     </div>
                     <div className="flex items-center gap-1.5 text-slate-300">
                       <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Story 2: Session Refresh Middleware (2 SP)
                     </div>
                   </div>
                 </div>

                 <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-white/10 pt-2 font-mono">
                   <span>Cross-Wiki Indexed: <strong>14 Docs</strong></span>
                   <span className="text-emerald-400 font-bold">Auto-Assigned</span>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-violet-50/50 to-indigo-50/50 dark:from-violet-950/20 dark:to-indigo-900/20 border border-violet-200/50 dark:border-violet-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-full max-w-sm space-y-4 relative z-10 transition-transform duration-700 group-hover:scale-105">
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <div className="w-9 h-9 rounded-xl bg-violet-500/20 text-violet-500 flex items-center justify-center font-bold">
                       <CalendarCheck className="w-5 h-5" />
                     </div>
                     <div>
                       <div className="text-xs font-bold text-on-surface">Dynamic Re-Planning</div>
                       <div className="text-[10px] text-slate-400">Motion Planner Engine</div>
                     </div>
                   </div>
                   <span className="text-xs font-bold text-emerald-500 px-2 py-0.5 bg-emerald-500/10 rounded-full">0 Overlaps</span>
                 </div>

                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md space-y-2">
                   <div className="flex justify-between items-center text-xs font-bold">
                     <span className="text-slate-500">Cross-Project Health Monitor</span>
                     <span className="text-indigo-500 font-mono">Monday AI Assistant</span>
                   </div>
                   <div className="h-14 bg-gradient-to-r from-violet-400/20 to-indigo-400/20 rounded-xl border border-dashed border-indigo-400/40 flex items-center justify-center text-xs font-bold text-indigo-500">
                     Forecast: 94% On-Time Delivery Probability
                   </div>
                 </div>
               </div>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/20 flex items-center justify-center text-violet-500 mb-8 shadow-sm">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">Dynamic Capacity Balancing &amp; Bottleneck Forecasting</h5>
              <p className={figtreeBodyClass}>
                When urgent fire drills strike or team members take sick leave, static Gantt charts break immediately. AI engines like <Link href="/tool/motion-planner" className="font-bold underline decoration-primary/40 underline-offset-4 hover:text-primary transition-colors">Motion Planner</Link> dynamically recalculate individual calendars in real time, while platforms like <Link href="/tool/monday-ai-assistant" className="font-bold underline decoration-primary/40 underline-offset-4 hover:text-primary transition-colors">Monday AI Assistant</Link> and <Link href="/tool/asana-intelligence" className="font-bold underline decoration-primary/40 underline-offset-4 hover:text-primary transition-colors">Asana Intelligence</Link> alert leaders to cross-team blocking dependencies before deadlines are missed.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. Interactive ROI / Sprint Savings Calculator */}
      <motion.section 
        variants={fadeUpVariant} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        className="my-32 md:my-48 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white border border-indigo-500/20 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold mb-2">
                <Calculator className="w-3.5 h-3.5" /> Interactive ROI Model
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white">AI Project Management Velocity &amp; Cost Calculator</h3>
            </div>
            
            {/* Toggle Mode */}
            <div className="flex bg-slate-800 p-1 rounded-2xl border border-white/10">
              <button 
                onClick={() => setCalcMode("ai")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${calcMode === "ai" ? "bg-indigo-600 text-white shadow-md" : "text-slate-400 hover:text-white"}`}
              >
                AI Orchestrated
              </button>
              <button 
                onClick={() => setCalcMode("traditional")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${calcMode === "traditional" ? "bg-slate-700 text-white shadow-md" : "text-slate-400 hover:text-white"}`}
              >
                Traditional Manual PM
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-4">
            {/* Slider 1 */}
            <div className="space-y-3 bg-slate-800/60 p-5 rounded-2xl border border-white/5">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-slate-300 flex items-center gap-1.5"><Users className="w-4 h-4 text-indigo-400" /> Team Size</span>
                <span className="text-cyan-400 font-mono text-base">{teamSize} members</span>
              </div>
              <input 
                type="range" 
                min="3" 
                max="100" 
                value={teamSize} 
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <div className="text-[11px] text-slate-400">Total cross-functional engineers, designers &amp; PMs</div>
            </div>

            {/* Slider 2 */}
            <div className="space-y-3 bg-slate-800/60 p-5 rounded-2xl border border-white/5">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-slate-300 flex items-center gap-1.5"><Timer className="w-4 h-4 text-violet-400" /> Weekly Status &amp; Triage</span>
                <span className="text-violet-400 font-mono text-base">{weeklyAdminHours} hrs/person</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="15" 
                value={weeklyAdminHours} 
                onChange={(e) => setWeeklyAdminHours(Number(e.target.value))}
                className="w-full accent-violet-500 cursor-pointer"
              />
              <div className="text-[11px] text-slate-400">Hours spent writing standups, updating tickets &amp; in syncs</div>
            </div>

            {/* Slider 3 */}
            <div className="space-y-3 bg-slate-800/60 p-5 rounded-2xl border border-white/5">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-slate-300 flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-emerald-400" /> Blended Rate</span>
                <span className="text-emerald-400 font-mono text-base">${hourlyRate}/hr</span>
              </div>
              <input 
                type="range" 
                min="30" 
                max="200" 
                step="5"
                value={hourlyRate} 
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="text-[11px] text-slate-400">Average team hourly loaded compensation cost</div>
            </div>
          </div>

          {/* Results Summary Grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            <div className="p-6 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-center">
              <div className="text-xs uppercase font-bold tracking-widest text-indigo-300 mb-1">Weekly Engineering Reclaimed</div>
              <div className="text-4xl font-black text-white font-mono">+{weeklyHoursSaved} hrs</div>
              <div className="text-xs text-indigo-200 mt-2">Productive core building time saved</div>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center">
              <div className="text-xs uppercase font-bold tracking-widest text-emerald-300 mb-1">Annual Budget Efficiency</div>
              <div className="text-4xl font-black text-emerald-400 font-mono">${annualSavings.toLocaleString()}</div>
              <div className="text-xs text-emerald-200 mt-2">Reclaimed payroll from automated admin</div>
            </div>

            <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-center">
              <div className="text-xs uppercase font-bold tracking-widest text-cyan-300 mb-1">Sprint Velocity Acceleration</div>
              <div className="text-4xl font-black text-cyan-300 font-mono">+{sprintEfficiencyGain}%</div>
              <div className="text-xs text-cyan-200 mt-2">Faster milestone &amp; roadmap delivery</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. Sponsor Spotlight - ClickUp Brain */}
      <motion.section 
        variants={fadeUpVariant} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        className="my-32 md:my-48 relative rounded-[3rem] bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 text-white p-8 md:p-14 border border-indigo-500/30 shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Crown className="w-64 h-64 text-indigo-400" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-extrabold uppercase tracking-widest border border-indigo-500/30">
              <Award className="w-4 h-4 text-cyan-400" /> Editor&apos;s Choice: #1 AI Project Orchestrator
            </div>
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20">
              ★ 4.9/5 Rating (30,000+ Reviews)
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                ClickUp Brain: Neural Project Orchestration
              </h3>
              <p className={figtreeDarkBodyClass}>
                <Link href="/tool/clickup" className="text-indigo-400 font-bold underline underline-offset-4 hover:text-indigo-300">ClickUp</Link> sets the standard for modern work management with ClickUp Brain—a context-aware AI engine deeply embedded across tasks, docs, chat, and dashboards. It automates standups, generates detailed technical subtasks from user feedback, and instantly answers any operational query by indexing all team assets.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-3xl border border-white/10 space-y-4 shadow-xl backdrop-blur-md">
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Enterprise AI Specs</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-300">Task Decomposition</span>
                  <span className="text-cyan-400 font-bold">Sub-2s PRD to Subtasks</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-300">Knowledge Search</span>
                  <span className="text-cyan-400 font-bold">Docs, Wikis, Tasks</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-300">Git Integration</span>
                  <span className="text-cyan-400 font-bold">GitHub, GitLab, Bitbucket</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-300">Pricing</span>
                  <span className="text-emerald-400 font-bold">From $7/user/mo</span>
                </div>
              </div>
              <Link 
                href="/tool/clickup" 
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-bold text-sm shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02]"
              >
                Explore ClickUp Profile <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. Top 3 Alternatives Matrix */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="my-32 md:my-48 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <h3 className="text-sm font-extrabold text-indigo-500 uppercase tracking-[0.25em] mb-4">Comparative Benchmark</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">The Top AI Project Management Platforms</h4>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="grid md:grid-cols-3 gap-8">
          {alternatives.map((alt, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-[2.5rem] bg-surface-container-low border border-outline-variant hover:border-indigo-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black uppercase tracking-widest text-indigo-500 px-3 py-1 rounded-full bg-indigo-500/10">
                    Rank #0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1 text-sm font-black text-on-surface">
                    ★ <span className="font-mono">{alt.score}</span>
                  </div>
                </div>

                <h5 className="text-2xl font-black text-on-surface group-hover:text-indigo-600 transition-colors">
                  <Link href={`/tool/${alt.slug}`}>{alt.name}</Link>
                </h5>

                <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Best for: <span className="text-on-surface">{alt.bestFor}</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {alt.highlight}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-outline-variant flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-500">{alt.price}</span>
                <Link 
                  href={`/tool/${alt.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-500 hover:text-indigo-700 transition-colors"
                >
                  View Profile <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Honorable Mentions */}
        <motion.div variants={fadeUpVariant} className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
          Also evaluated: <Link href="/tool/asana-intelligence" className="font-semibold text-indigo-500 underline underline-offset-2">Asana Intelligence</Link>, <Link href="/tool/taskade" className="font-semibold text-indigo-500 underline underline-offset-2">Taskade</Link>, and <Link href="/tool/height-ai-tasks" className="font-semibold text-indigo-500 underline underline-offset-2">Height AI Tasks</Link>.
        </motion.div>
      </motion.section>

      {/* 6. Buyer's Guide - 4 Bento Box Cards */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="my-32 md:my-48 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <h3 className="text-sm font-extrabold text-indigo-500 uppercase tracking-[0.25em] mb-4">Buyer&apos;s Evaluation Framework</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">4 Core Pillars of Enterprise AI Project Tools</h4>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 01 */}
          <motion.div variants={fadeUpVariant} className="p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-50/40 to-slate-50/40 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/50 space-y-4">
            <span className="text-4xl font-black text-indigo-500/40 font-mono">01</span>
            <h5 className="text-2xl font-bold text-on-surface">Context-Aware Capacity &amp; Resource Balancing</h5>
            <p className={figtreeBodyClass}>
              Verify that the platform evaluates real calendar commitments, historical commit velocity, and out-of-office schedules. AI shouldn&apos;t just assign tasks linearly; it must prevent burnout by shifting deadlines before capacity limits trigger project failure.
            </p>
          </motion.div>

          {/* Card 02 */}
          <motion.div variants={fadeUpVariant} className="p-8 rounded-[2.5rem] bg-gradient-to-br from-cyan-50/40 to-slate-50/40 dark:from-slate-900 dark:to-cyan-950/40 border border-cyan-200/50 dark:border-cyan-800/50 space-y-4">
            <span className="text-4xl font-black text-cyan-500/40 font-mono">02</span>
            <h5 className="text-2xl font-bold text-on-surface">Bi-Directional Telemetry &amp; CI/CD Ingestion</h5>
            <p className={figtreeBodyClass}>
              The best AI tools connect directly to GitHub, GitLab, Jira, and Slack. When pull requests merge or incidents resolve, tickets should update status automatically, write changelog summaries, and notify stakeholders without developer intervention.
            </p>
          </motion.div>

          {/* Card 03 */}
          <motion.div variants={fadeUpVariant} className="p-8 rounded-[2.5rem] bg-gradient-to-br from-violet-50/40 to-slate-50/40 dark:from-slate-900 dark:to-violet-950/40 border border-violet-200/50 dark:border-violet-800/50 space-y-4">
            <span className="text-4xl font-black text-violet-500/40 font-mono">03</span>
            <h5 className="text-2xl font-bold text-on-surface">Natural Language Sprint Querying</h5>
            <p className={figtreeBodyClass}>
              Executive stakeholders shouldn&apos;t need to learn complicated JQL filters to find project progress. AI search engines like <Link href="/tool/clickup" className="font-bold underline decoration-primary/40 underline-offset-4 hover:text-primary">ClickUp Brain</Link> allow anyone to ask &quot;What are the top blockers for the Q3 iOS launch?&quot; and receive a cited summary in 2 seconds.
            </p>
          </motion.div>

          {/* Card 04 */}
          <motion.div variants={fadeUpVariant} className="p-8 rounded-[2.5rem] bg-gradient-to-br from-emerald-50/40 to-slate-50/40 dark:from-slate-900 dark:to-emerald-950/40 border border-emerald-200/50 dark:border-emerald-800/50 space-y-4">
            <span className="text-4xl font-black text-emerald-500/40 font-mono">04</span>
            <h5 className="text-2xl font-bold text-on-surface">SOC 2 Type II &amp; Zero-Retention Data Boundaries</h5>
            <p className={figtreeBodyClass}>
              Ensure model inference operates within isolated tenant silos with strict zero-data retention agreements. Private roadmaps, security vulnerabilities, and client contract discussions must never bleed into public LLM training datasets.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 7. Step-by-Step "How-To" Walkthrough */}
      <motion.section 
        variants={fadeUpVariant} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        className="my-32 md:my-48 p-8 md:p-14 rounded-[3rem] bg-slate-900 text-white border border-indigo-500/20 shadow-2xl relative overflow-hidden max-w-5xl mx-auto"
      >
        <div className="relative z-10 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold">
              <Sliders className="w-4 h-4" /> 5-Phase Implementation Blueprint
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white">How to Deploy AI Project Management in 5 Steps</h3>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold font-mono shrink-0 text-sm">
                01
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">Audit Backlog &amp; Connect Repository Integrations</h4>
                <p className={figtreeDarkBodyClass}>
                  Link your primary version control (GitHub, GitLab) and communication channels (Slack, Microsoft Teams) to establish continuous data feeds for real-time ticket statuses and merge telemetry.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold font-mono shrink-0 text-sm">
                02
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">Establish AI Ticket Decomposition Templates</h4>
                <p className={figtreeDarkBodyClass}>
                  Standardize PRD prompt structures in <Link href="/tool/clickup" className="text-indigo-400 underline font-bold">ClickUp Brain</Link> or <Link href="/tool/monday-ai-assistant" className="text-indigo-400 underline font-bold">Monday AI</Link> to convert feature specs into standardized stories complete with acceptance criteria, story point estimates, and test cases.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold font-mono shrink-0 text-sm">
                03
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">Configure Automated Asynchronous Standup Summaries</h4>
                <p className={figtreeDarkBodyClass}>
                  Replace 30-minute synchronous standup meetings with AI-generated asynchronous digests that extract yesterday&apos;s merged PRs, active in-progress tasks, and declared blockers automatically.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold font-mono shrink-0 text-sm">
                04
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">Implement Dynamic Capacity &amp; Dependency Guardrails</h4>
                <p className={figtreeDarkBodyClass}>
                  Enable smart scheduling in <Link href="/tool/motion-planner" className="text-indigo-400 underline font-bold">Motion Planner</Link> to dynamically redistribute tasks across engineers based on real working hours and critical path dependencies.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold font-mono shrink-0 text-sm">
                05
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">Activate Cross-Functional Executive Dashboards</h4>
                <p className={figtreeDarkBodyClass}>
                  Set up high-level portfolio health trackers that use generative AI to draft weekly executive progress reports and flag milestone delivery risks two weeks before release windows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 8. Who Benefits Most? - 3 Interactive Tabs */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="my-32 md:my-48 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-12">
          <h3 className="text-sm font-extrabold text-indigo-500 uppercase tracking-[0.25em] mb-4">Target Personas</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">Who Unlocks Maximum Impact?</h4>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(uc.id)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${
                activeTab === uc.id 
                  ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 scale-105" 
                  : "bg-surface-container-low text-on-surface hover:bg-surface-container"
              }`}
            >
              {uc.icon}
              {uc.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {useCases.map((uc) => uc.id === activeTab && (
            <motion.div
              key={uc.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12 rounded-[2.5rem] bg-surface-container border border-outline-variant text-center max-w-3xl mx-auto shadow-lg"
            >
              <h5 className="text-2xl font-bold text-on-surface mb-4">{uc.title}</h5>
              <p className={figtreeBodyClass}>{uc.content}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>

      {/* 9. Technical Foundation - Glossary */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="my-32 md:my-48 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <h3 className="text-sm font-extrabold text-indigo-500 uppercase tracking-[0.25em] mb-4">Technical Glossary</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">Core Concepts of AI Work Orchestration</h4>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {glossaryTerms.map((g, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="p-6 rounded-3xl bg-surface-container-low border border-outline-variant space-y-2">
              <div className="text-base font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> {g.term}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-['Figtree',sans-serif]">
                {g.def}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 10. SEO FAQ - Accordion */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="my-32 md:my-48 max-w-4xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <h3 className="text-sm font-extrabold text-indigo-500 uppercase tracking-[0.25em] mb-4">Frequently Asked Questions</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">Everything You Need to Know</h4>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index}
              variants={fadeUpVariant}
              className="rounded-2xl border border-outline-variant bg-surface-container-low overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-6 text-left font-bold text-lg text-on-surface flex justify-between items-center gap-4 hover:text-indigo-600 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-indigo-500 transition-transform duration-300 shrink-0 ${openFaq === index ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 border-t border-outline-variant/30 text-slate-600 dark:text-slate-300 leading-relaxed font-['Figtree',sans-serif]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </article>
  );
}
