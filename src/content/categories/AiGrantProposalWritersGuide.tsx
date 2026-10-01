"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  FileCheck2, 
  Landmark, 
  ShieldCheck, 
  DollarSign, 
  Award, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Building2, 
  Coins, 
  FileSpreadsheet, 
  AlertTriangle,
  Layers,
  Sparkles,
  Search,
  BookOpen,
  Sliders
} from "lucide-react";

// ---- DATA STRUCTURES ---- //

const useCases = [
  {
    id: "nonprofits",
    title: "501(c)(3) Nonprofits & Charities",
    icon: <Building2 className="w-5 h-5 text-blue-500" />,
    content: "Resource-constrained nonprofit development teams spend 200+ hours annually researching and drafting foundation applications. AI grant tools store institutional impact data, past 990 forms, and donor testimonials in a private retrieval database, instantly generating tailored narratives that align directly with specific foundation mission statements."
  },
  {
    id: "academic-research",
    title: "University & NIH/NSF Researchers",
    icon: <Landmark className="w-5 h-5 text-indigo-500" />,
    content: "Academic researchers competing for federal NIH, NSF, and Horizon Europe grants face unforgiving technical formatting guidelines. AI grant engines cross-reference literature citations, format methodologies to strict rubric scoring models, and draft scientific impact justifications that survive rigorous peer review."
  },
  {
    id: "b2b-rfp",
    title: "B2B Enterprise RFP & Tender Teams",
    icon: <FileSpreadsheet className="w-5 h-5 text-cyan-500" />,
    content: "Enterprise sales operations manage hundreds of repetitive security, technical, and commercial RFP questionnaires. Intelligent proposal platforms ingest historical winning bids, auto-populate vendor assessment questionnaires, and produce cohesive executive summaries in minutes instead of weeks."
  },
  {
    id: "sbir-startups",
    title: "SBIR & STTR Deep-Tech Startups",
    icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
    content: "Early-stage founders applying for non-dilutive Small Business Innovation Research (SBIR) capital must prove commercial feasibility and technical merit simultaneously. Specialized grant AI formats Phase I & II work plans, milestone timetables, and intellectual property defense arguments."
  }
];

const glossaryTerms = [
  {
    term: "NOFO (Notice of Funding Opportunity)",
    def: "The official federal or foundation announcement outlining grant eligibility, total funding pool, technical criteria, and submission deadlines."
  },
  {
    term: "RAG (Retrieval-Augmented Generation)",
    def: "An AI architecture that grounds generated proposals exclusively in verified source documents (such as your past winning grants, audited financials, and impact metrics) to eliminate hallucinations."
  },
  {
    term: "Theory of Change",
    def: "A structured methodology illustrating how specific project inputs and activities produce immediate outputs, intermediate outcomes, and long-term systemic impact."
  },
  {
    term: "Budget Narrative (Justification)",
    def: "The line-item explanation defending every requested dollar, linking staffing hours, travel expenses, and equipment directly to grant objectives."
  },
  {
    term: "Rubric Scoring Alignment",
    def: "The practice of mirroring exact evaluation terminology and criteria weights used by peer reviewers to maximize point allocations on competitive awards."
  },
  {
    term: "SMART Objectives",
    def: "Specific, Measurable, Achievable, Relevant, and Time-bound milestones required by institutional and government grant panels."
  }
];

const faqData = [
  {
    question: "What is the best AI tool for grant writing in 2026?",
    answer: "Grantable and OpenGrants lead the nonprofit and civic grant sector for document memory and foundation alignment, while AutoRFP.ai and Loopio dominate corporate B2B RFP workflows. Unlike generic chatbots, these platforms utilize private RAG knowledge bases to cite your organization's exact historical metrics without hallucinating."
  },
  {
    question: "Do grant review committees penalize or reject AI-written proposals?",
    answer: "Major funders (including the NIH, NSF, and private foundations) judge proposals on feasibility, institutional track record, and methodological rigor, not whether drafting software was used. However, generic copy-pasted AI prose lacking verified data or specific community impact metrics will score poorly on reviewer rubrics."
  },
  {
    question: "How do AI grant writers handle budget justifications and line items?",
    answer: "Advanced grant tools feature mathematical alignment checking. When you enter personnel salaries, fringe rates, and indirect costs, the AI generates corresponding narrative text explaining the operational necessity of each line item, ensuring the budget narrative exactly matches the uploaded financial spreadsheet."
  },
  {
    question: "Is sensitive organizational and financial data secure with AI proposal software?",
    answer: "Dedicated enterprise platforms (like Grantable, Loopio, and Submittable) adhere to SOC 2 Type II, HIPAA, and GDPR standards. Your uploaded historical grants, staff resumes, and proprietary financials are siloed in encrypted enterprise partitions and never used to train public commercial AI models."
  },
  {
    question: "Can AI help find matching grant opportunities, or does it only write?",
    answer: "Many platforms (such as OpenGrants and GrantAssistant) combine generative writing with automated funding discovery. They crawl 990 filings, Grants.gov, and state databases to match your organization's mission and geographic focus with open funding notices."
  },
  {
    question: "What is the difference between ChatGPT and specialized AI grant writers?",
    answer: "ChatGPT has no persistent memory of your previous 50 grants, cannot auto-fill multi-tabbed RFP spreadsheets, and frequently hallucinates statistics. Specialized grant AI uses document grounding to extract exact past answers, adheres to funder character count restrictions, and formats rubric-compliant section headers."
  }
];

const alternatives = [
  { 
    name: "Grantable", 
    slug: "grantable",
    score: "9.9", 
    price: "Freemium / $20/mo", 
    bestFor: "Best Overall for Nonprofits & Small Teams", 
    highlight: "Intuitive document memory assistant that organizes previous proposals and drafts answers tailored to funder character limits." 
  },
  { 
    name: "AutoRFP.ai", 
    slug: "autorfp-ai",
    score: "9.8", 
    price: "Custom / B2B", 
    bestFor: "Automated Enterprise RFP & Security Tenders", 
    highlight: "Deep learning response engine that populates complex spreadsheets and vendor questionnaires directly from past bids." 
  },
  { 
    name: "Loopio AI", 
    slug: "loopio",
    score: "9.7", 
    price: "Enterprise", 
    bestFor: "Mid-Market & Large Enterprise Sales Ops", 
    highlight: "Industry-standard RFP response software with unified content libraries, automated question answering, and team collaboration." 
  },
  { 
    name: "OpenGrants AI", 
    slug: "opengrants",
    score: "9.6", 
    price: "Freemium / $29/mo", 
    bestFor: "Grant Discovery & Non-Dilutive Capital Search", 
    highlight: "Pairs automated grant writing with comprehensive public, private, and corporate grant databases across North America." 
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

export default function AiGrantProposalWritersGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const [roiMode, setRoiMode] = useState<"traditional" | "ai">("ai");

  return (
    <article className="w-full max-w-6xl mx-auto py-6 md:py-10 font-sans overflow-hidden">
      
      {/* 1. Hero Header Container */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-blue-500/20 shadow-xl shadow-blue-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-indigo-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/30 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-6 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <FileCheck2 className="w-4 h-4 text-blue-400" /> 
            2026 Institutional Funding & Proposal Architecture
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.08]"
          >
            The Definitive Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 drop-shadow-sm">
              AI Grant & Proposal Writers
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${figtreeDarkBodyClass} max-w-2xl mx-auto`}
          >
            How retrieval-augmented generation (RAG), rubric scoring alignment, and automated RFP questionnaire filling are unlocking millions in non-dilutive capital and commercial contract awards.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Definitive Overview - Two Alternating Container Blocks */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-8 md:mb-12 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-blue-500 uppercase tracking-[0.25em] mb-3">The Funding Dilemma</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Why 70% of Grant Applications Fail on Compliance</h4>
        </motion.div>

        <div className="space-y-10 md:space-y-12">
          {/* Block 1: The Administrative Chokehold */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-8 shadow-sm">
                <Landmark className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">The Manual Proposal Chokehold</h5>
              <p className={figtreeBodyClass}>
                Institutional funding committees judge submissions with mathematical strictness. Over 70% of disqualified applications fail not on technical merit, but because of administrative non-compliance: missing a mandatory rubric objective, exceeding character limits, or misaligning budget line items with stated deliverables. Traditional grant writing requires 30 to 50 hours of tedious manual drafting per submission.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-900/20 border border-blue-200/50 dark:border-blue-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-48 h-48 bg-gradient-to-tr from-blue-500 to-indigo-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 absolute" />
               <div className="w-full max-w-xs rounded-2xl bg-slate-900/90 border border-white/20 p-6 flex flex-col justify-between relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-105">
                 <div className="flex justify-between items-center mb-4">
                   <div className="flex items-center gap-2">
                     <AlertTriangle className="w-4 h-4 text-amber-400" />
                     <div className="text-[12px] text-white/90 font-mono font-bold">Manual Review Score</div>
                   </div>
                   <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[11px] font-bold">64/100 Pts</span>
                 </div>
                 <div className="space-y-2 mb-4">
                   <div className="h-2 w-full bg-red-400/50 rounded-full" />
                   <div className="h-2 w-2/3 bg-red-400/30 rounded-full" />
                   <div className="h-2 w-1/2 bg-red-400/20 rounded-full" />
                 </div>
                 <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[11px] text-slate-400">
                   <span>Budget Variance Error</span>
                   <span className="text-red-400 font-bold">Rejected by Panel</span>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Block 2: Grounded RAG & Rubric Alignment */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-indigo-50/50 to-emerald-50/50 dark:from-indigo-950/20 dark:to-emerald-900/20 border border-indigo-200/50 dark:border-indigo-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-full max-w-sm space-y-4 relative z-10 transition-transform duration-700 group-hover:scale-105">
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-4 shadow-md flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold">
                     <CheckCircle2 className="w-6 h-6" />
                   </div>
                   <div className="space-y-1.5 flex-1">
                     <div className="flex justify-between items-center">
                       <span className="text-xs font-bold text-on-surface">Rubric Criteria Matched</span>
                       <span className="text-[11px] font-extrabold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">98/100 Pts</span>
                     </div>
                     <div className="h-2 w-full bg-emerald-500/30 rounded-full" />
                   </div>
                 </div>
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <ShieldCheck className="w-4 h-4 text-emerald-500" />
                     <span className="text-xs font-bold text-on-surface">Verified RAG Citations</span>
                   </div>
                   <span className="text-xs font-bold text-emerald-500 px-2 py-0.5 bg-emerald-500/10 rounded-full">Zero Hallucinations</span>
                 </div>
               </div>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-500 mb-8 shadow-sm">
                <Sliders className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">Grounded Document Intelligence & RAG</h5>
              <p className={figtreeBodyClass}>
                Purpose-built AI grant writers do not write from generic web memory. They index your organization&apos;s previous winning proposals, audited balance sheets, IRS determinations, and program impact spreadsheets in an encrypted vault. The model mirrors the funder&apos;s scoring rubric sentence-by-sentence, producing bulletproof proposals in a fraction of the time.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. Interactive ROI & Win-Rate Calculator Container */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-5">
              <Coins className="w-7 h-7" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">Calculate Grantwriting Capacity & Cost Savings</h3>
            <p className={figtreeBodyClass + " max-w-xl"}>
              Compare traditional external grant consultants against AI-assisted proposal workflows for annual funding cycles.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full flex gap-2">
              <button 
                onClick={() => setRoiMode("traditional")}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${roiMode === "traditional" ? "bg-white dark:bg-slate-700 shadow-md text-on-surface" : "text-slate-400 hover:text-on-surface"}`}
              >
                Traditional Consultant
              </button>
              <button 
                onClick={() => setRoiMode("ai")}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${roiMode === "ai" ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : "text-slate-400 hover:text-on-surface"}`}
              >
                AI Grant Intelligence
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center relative z-10">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <Clock className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-blue-500" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-1 text-sm">Drafting Time per Proposal</div>
              <div className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "3.5 Hours" : "38 Hours"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <FileCheck2 className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-blue-500" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-1 text-sm">Annual Submission Volume</div>
              <div className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "24+ Grants" : "4-6 Grants"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <DollarSign className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-blue-500" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-1 text-sm">Cost per Completed Bid</div>
              <div className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "< $45" : "$3,500+"}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. Use Case Matrix / Persona Tabs Container */}
      <motion.section 
        variants={staggerContainer} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-blue-500 uppercase tracking-[0.25em] mb-3">Applicant Sectors</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Who Benefits from AI Proposal Automation?</h4>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(uc.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === uc.id 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {uc.icon}
              {uc.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {useCases.map((uc) => uc.id === activeTab && (
            <motion.div
              key={uc.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-10 shadow-lg"
            >
              <h5 className="text-2xl font-black text-on-surface mb-3 flex items-center gap-3">
                <span className="p-2 rounded-xl bg-blue-500/10 text-blue-500">{uc.icon}</span>
                {uc.title}
              </h5>
              <p className={figtreeBodyClass}>
                {uc.content}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>

      {/* 5. Architectural Evaluation / Comparison Table Container */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-blue-500 uppercase tracking-[0.25em] mb-3">Benchmark Matrix</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Proposal Software Capability Matrix</h4>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                <th className="p-4 md:p-5 font-black text-on-surface">Platform Type</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Data Grounding (RAG)</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Rubric Scoring Check</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Budget Table Sync</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Award Win Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  Raw Chatbot (ChatGPT / Claude)
                </td>
                <td className="p-4 md:p-5 text-red-500 font-bold">None (High Hallucinations)</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">No Rubric Awareness</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">Disconnected Math</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">Low (12-15%)</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-500" />
                  Generic Document AI (Jasper / Copy.ai)
                </td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Basic Text Upload</td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Keyword Ingestion</td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Text Only</td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Average (22-28%)</td>
              </tr>
              <tr className="bg-blue-50/40 dark:bg-blue-950/20 font-semibold">
                <td className="p-4 md:p-5 font-extrabold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-blue-500" />
                  Specialized Grant AI (Grantable, AutoRFP)
                </td>
                <td className="p-4 md:p-5 text-blue-600 dark:text-blue-400 font-extrabold">Full Institutional RAG</td>
                <td className="p-4 md:p-5 text-blue-600 dark:text-blue-400 font-extrabold">Point-by-Point Rubric Sync</td>
                <td className="p-4 md:p-5 text-blue-600 dark:text-blue-400 font-extrabold">Spreadsheet Parity</td>
                <td className="p-4 md:p-5 text-blue-600 dark:text-blue-400 font-extrabold">High (48-62% Win Rate)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* 6. Key Evaluation Criteria Container */}
      <motion.section 
        variants={staggerContainer} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-blue-500 uppercase tracking-[0.25em] mb-3">Buyer Checklist</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">What Makes a Legit AI Grant Writer in 2026?</h4>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">SOC 2 Type II & Zero-Training Privacy</h5>
            <p className={figtreeBodyClass}>
              Grant applications contain confidential organizational salary data, proprietary technology blueprints, and donor details. Ensure the vendor guarantees that customer inputs are never retained or used to train commercial foundation models.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Multi-Document RAG Knowledge Vault</h5>
            <p className={figtreeBodyClass}>
              The tool must ingest PDFs, audited balance sheets, mission bylaws, and historical winning grants, retrieving specific metrics on demand without generating fictional statistics.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Character Count & Format Constraint Enforcement</h5>
            <p className={figtreeBodyClass}>
              Funders strictly enforce limits (e.g., &quot;Maximum 500 characters including spaces&quot;). Top grant tools automatically calibrate output lengths so submissions are never clipped or disqualified upon upload.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Live Funding Search & Opportunity Matching</h5>
            <p className={figtreeBodyClass}>
              Look for software that scans Grants.gov, foundation directories, and municipal notices to proactively alert your team to high-probability awards that fit your specific geography and demographics.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 7. Curated Tool Showcase Container */}
      <motion.section 
        variants={staggerContainer} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-blue-500 uppercase tracking-[0.25em] mb-3">Top Ranked Software</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Best AI Grant & Proposal Writers</h4>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {alternatives.map((alt) => (
            <div key={alt.slug} className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md hover:border-blue-500/50 transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h5 className="text-2xl font-black text-on-surface">{alt.name}</h5>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full">
                      {alt.bestFor}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full font-bold text-sm">
                    <Award className="w-4 h-4" />
                    {alt.score}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                  {alt.highlight}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                <span className="text-xs font-bold text-slate-500">{alt.price}</span>
                <Link 
                  href={`/tool/${alt.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-500 dark:text-blue-400 group"
                >
                  Explore Tool Specs
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 8. Technical Glossary Container */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-blue-500 uppercase tracking-[0.25em] mb-3">Technical Glossary</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Key Funding Terminology</h4>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {glossaryTerms.map((term, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
              <h5 className="text-lg font-bold text-on-surface mb-2">{term.term}</h5>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{term.def}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 9. Interactive FAQ Accordion Container */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-blue-500 uppercase tracking-[0.25em] mb-3">Frequently Asked Questions</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Everything You Need to Know</h4>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full text-left p-6 font-bold text-on-surface flex justify-between items-center gap-4 hover:text-blue-500 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-blue-500" : ""}`} />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

    </article>
  );
}
