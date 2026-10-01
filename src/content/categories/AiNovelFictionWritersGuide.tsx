"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  BookOpen, 
  Feather, 
  Sparkles, 
  Compass, 
  Users, 
  Scroll, 
  CheckCircle2, 
  Award, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  Layers, 
  Flame, 
  Sliders, 
  DollarSign, 
  AlertTriangle,
  Lightbulb,
  Palette
} from "lucide-react";

// ---- DATA STRUCTURES ---- //

const useCases = [
  {
    id: "fantasy-worldbuilding",
    title: "Epic Fantasy & Sci-Fi Worldbuilders",
    icon: <Compass className="w-5 h-5 text-purple-500" />,
    content: "Massive fictional universes collapse when character lore, magic systems, and generational timelines contradict themselves across 100,000 words. Dedicated novel studios maintain persistent series codexes (lorebooks), ensuring the AI remembers every royal lineage, planetary gravity rule, and ancient relic across multiple books."
  },
  {
    id: "romance-serials",
    title: "Romance & Rapid-Release Serials",
    icon: <Flame className="w-5 h-5 text-rose-500" />,
    content: "Commercial romance and Kindle Unlimited authors thrive on releasing full-length novels every 6 to 8 weeks. Specialized fiction engines accelerate scene generation, track emotional tension arcs, and draft natural banter and dual-POV internal monologues while keeping heat levels precisely tailored."
  },
  {
    id: "thriller-mystery",
    title: "Mystery, Crime & Thriller Plotters",
    icon: <Scroll className="w-5 h-5 text-amber-500" />,
    content: "Intricate whodunits require airtight clue placement, red herrings, and alibi tracking. AI plotting tools structure 3-act and 4-act beat sheets (such as Save the Cat and the Hero's Journey), analyzing pacing bottlenecks to ensure twists hit with maximum psychological impact."
  },
  {
    id: "webnovel-litrpg",
    title: "Webnovel & LitRPG Authors",
    icon: <Sparkles className="w-5 h-5 text-violet-500" />,
    content: "Serial web fiction platforms (Royal Road, Webnovel, Wattpad) require daily chapter releases. Narrative outliners manage character stat sheets, skill progression trees, and cliffhanger endings designed to maximize Patreon subscriber retention."
  }
];

const glossaryTerms = [
  {
    term: "Series Codex (Lorebook)",
    def: "A persistent semantic database storing character sheets, faction politics, magic rules, and setting descriptions that the AI automatically injects into context when mentioned."
  },
  {
    term: "Beat Sheet",
    def: "A chronological structural breakdown of major plot points (e.g., Inciting Incident, Midpoint Twist, Dark Night of the Soul) guiding novel momentum."
  },
  {
    term: "Sensory Expansion (Show, Don't Tell)",
    def: "An AI prose rewriting feature that converts abstract emotional statements into visceral tactile, olfactory, visual, and auditory imagery."
  },
  {
    term: "Context Window Memory",
    def: "The token memory threshold (ranging from 8k to 200k+ tokens) determining how many prior chapters the AI can analyze simultaneously without forgetting previous plot events."
  },
  {
    term: "Save the Cat! Structure",
    def: "A popular 15-beat storytelling framework widely used across screenwriting and modern commercial fiction to balance pacing and reader empathy."
  },
  {
    term: "Prose Voice Mimicry",
    def: "The algorithmic calibration of sentence variance, vocabulary richness, and figurative metaphor to emulate an author's unique literary voice."
  }
];

const faqData = [
  {
    question: "What is the best AI tool for writing a novel in 2026?",
    answer: "Sudowrite and NovelCrafter Studio are the clear industry leaders for serious novelists. NovelCrafter excels for structural plotters with deep series codexes and custom API connections, while Sudowrite dominates for intuitive sensory prose expansion, scene brainstorming, and character dialogue."
  },
  {
    question: "Can an AI write an entire 80,000-word novel automatically?",
    answer: "While push-button generators claim to write full books in minutes, the results are repetitive and lack authentic emotional resonance. The industry-standard approach uses AI as a collaborative co-writer: the author designs the plot beat sheet, outlines character motivations, and directs the AI scene-by-scene while editing the prose."
  },
  {
    question: "Can I copyright a novel written with the assistance of AI?",
    answer: "Yes. Under current US Copyright Office and international guidance, human authors who direct the creative expression, plot architecture, character arcs, and significant text editing maintain full copyright ownership over their finished manuscripts."
  },
  {
    question: "How do AI novel writers handle consistent character voices and worldbuilding?",
    answer: "Dedicated fiction platforms use persistent Lorebooks (Codexes). When you mention a character like 'Eldrin', the software automatically feeds Eldrin's backstory, physical traits, vocal mannerisms, and relationships into the model's memory for that specific scene."
  },
  {
    question: "What is the difference between ChatGPT and dedicated fiction software like Sudowrite?",
    answer: "ChatGPT is tuned for corporate brevity and factual answers; it resists writing dark fiction, loses character consistency after a few thousand words, and writes bland exposition. Specialized novel software is trained on literary pacing, incorporates sensory details, provides side-by-side beat outlines, and supports uncensored creative storytelling."
  },
  {
    question: "Can AI novel outliners help overcome writer's block in the 'Murky Middle'?",
    answer: "Yes. Fiction tools feature specific 'Twist', 'What If?', and 'Conflict Escalation' generators designed specifically for chapters 12 through 20 (the murky middle), generating multiple plausible story forks that test character flaws and escalate narrative stakes."
  }
];

const alternatives = [
  { 
    name: "Sudowrite", 
    slug: "sudowrite",
    score: "9.9", 
    price: "From $10/mo", 
    bestFor: "Best Overall for Fiction Authors & Prose Polish", 
    highlight: "Purpose-built for fiction with sensory 'Show, Not Tell' expansion, Canvas plot board, and character dialogue generators." 
  },
  { 
    name: "NovelCrafter Studio", 
    slug: "novelcrafter-studio",
    score: "9.8", 
    price: "Freemium / $8/mo", 
    bestFor: "Series Worldbuilding & Deep Codex Lore", 
    highlight: "Modular novel-writing workbench connecting your own AI models with unified codex databases, timeline beats, and scene planning." 
  },
  { 
    name: "NovelAI", 
    slug: "novelai",
    score: "9.7", 
    price: "From $10/mo", 
    bestFor: "Uncensored Storytelling & Custom Prose Models", 
    highlight: "Proprietary models fine-tuned on classic and genre fiction with total creative freedom, lorebook memory, and anime character illustration." 
  },
  { 
    name: "Plottr AI Studio", 
    slug: "plottr-ai-studio",
    score: "9.6", 
    price: "From $39/yr", 
    bestFor: "Visual Beat Sheet Plotting & Timeline Planning", 
    highlight: "Visual timeline matrix with pre-built story structure templates (Hero's Journey, Romancing the Beat, Dan Harmon Story Circle)." 
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

export default function AiNovelFictionWritersGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-purple-500/20 shadow-xl shadow-purple-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-violet-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/30 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-6 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <Feather className="w-4 h-4 text-purple-400" /> 
            2026 Narrative Architecture & Creative Fiction Deep Dive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.08]"
          >
            The Definitive Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-amber-300 drop-shadow-sm">
              AI Novel & Fiction Outliners
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${figtreeDarkBodyClass} max-w-2xl mx-auto`}
          >
            How character lorebooks, dynamic beat sheets, and sensory prose engines empower authors to shatter writer&apos;s block and draft publish-ready manuscripts in record time.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Definitive Overview - Two Alternating Container Blocks */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-8 md:mb-12 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-purple-500 uppercase tracking-[0.25em] mb-3">The Author&apos;s Struggle</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Why 85% of Started Novels Die in the &apos;Murky Middle&apos;</h4>
        </motion.div>

        <div className="space-y-10 md:space-y-12">
          {/* Block 1: The Murky Middle & Plot Collapse */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-500/20 flex items-center justify-center text-purple-500 mb-8 shadow-sm">
                <BookOpen className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">The Trap of Plot Holes & Blank Pages</h5>
              <p className={figtreeBodyClass}>
                Every novelist knows the exhilaration of chapters 1 through 5, followed by the agonizing paralysis of the &quot;murky middle.&quot; Without a structured narrative skeleton, character motivations wander, pacing sags, and subplots contradict earlier events. Traditional pantser writing leads to months of abandoned drafts and debilitating creative burnout.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-purple-50/50 to-violet-50/50 dark:from-purple-950/20 dark:to-violet-900/20 border border-purple-200/50 dark:border-purple-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-48 h-48 bg-gradient-to-tr from-purple-500 to-violet-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 absolute" />
               <div className="w-full max-w-xs rounded-2xl bg-slate-900/90 border border-white/20 p-6 flex flex-col justify-between relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-105">
                 <div className="flex justify-between items-center mb-4">
                   <div className="flex items-center gap-2">
                     <AlertTriangle className="w-4 h-4 text-amber-400" />
                     <div className="text-[12px] text-white/90 font-mono font-bold">Unstructured Manuscript</div>
                   </div>
                   <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[11px] font-bold">Stalled at Ch. 14</span>
                 </div>
                 <div className="space-y-2 mb-4">
                   <div className="h-2 w-full bg-red-400/50 rounded-full" />
                   <div className="h-2 w-3/4 bg-red-400/30 rounded-full" />
                   <div className="h-2 w-1/4 bg-red-400/20 rounded-full" />
                 </div>
                 <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[11px] text-slate-400">
                   <span>Character Lore Contradiction</span>
                   <span className="text-red-400 font-bold">Writer&apos;s Block</span>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Block 2: Beat Sheets & Persistent Lorebooks */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-violet-50/50 to-amber-50/50 dark:from-violet-950/20 dark:to-amber-900/20 border border-violet-200/50 dark:border-violet-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-full max-w-sm space-y-4 relative z-10 transition-transform duration-700 group-hover:scale-105">
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-4 shadow-md flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center font-bold">
                     <CheckCircle2 className="w-6 h-6" />
                   </div>
                   <div className="space-y-1.5 flex-1">
                     <div className="flex justify-between items-center">
                       <span className="text-xs font-bold text-on-surface">Beat Sheet Structured</span>
                       <span className="text-[11px] font-extrabold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">30 Chapters Planned</span>
                     </div>
                     <div className="h-2 w-full bg-emerald-500/30 rounded-full" />
                   </div>
                 </div>
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <Compass className="w-4 h-4 text-purple-500" />
                     <span className="text-xs font-bold text-on-surface">Codex Lore Synced</span>
                   </div>
                   <span className="text-xs font-bold text-purple-500 px-2 py-0.5 bg-purple-500/10 rounded-full">Zero Continuity Errors</span>
                 </div>
               </div>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-amber-500/20 border border-violet-500/20 flex items-center justify-center text-violet-500 mb-8 shadow-sm">
                <Sliders className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">Dynamic Beat Sheets & Sensory Prose</h5>
              <p className={figtreeBodyClass}>
                Modern fiction AI tools don&apos;t spit out generic summaries. They operate like a master writing coach: structuring 15-beat narrative arcs, tracking character arcs in persistent codex vaults, and expanding dialogue into visceral, sensory scenes that capture your authentic voice.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. Interactive ROI & Manuscript Velocity Calculator Container */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mb-5">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">Calculate Author Publishing Velocity</h3>
            <p className={figtreeBodyClass + " max-w-xl"}>
              Compare traditional solitary drafting timelines against AI-assisted fiction architecture for full-length 80,000-word novels.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full flex gap-2">
              <button 
                onClick={() => setRoiMode("traditional")}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${roiMode === "traditional" ? "bg-white dark:bg-slate-700 shadow-md text-on-surface" : "text-slate-400 hover:text-on-surface"}`}
              >
                Solitary Drafting
              </button>
              <button 
                onClick={() => setRoiMode("ai")}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${roiMode === "ai" ? "bg-purple-600 text-white shadow-md shadow-purple-600/20" : "text-slate-400 hover:text-on-surface"}`}
              >
                AI Fiction Co-Writer
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center relative z-10">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <Clock className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-purple-500" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-1 text-sm">Time to Complete First Draft</div>
              <div className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "6-8 Weeks" : "12-18 Months"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <Feather className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-purple-500" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-1 text-sm">Daily Drafting Output</div>
              <div className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "2,500+ Words" : "500-800 Words"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <Award className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-purple-500" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-1 text-sm">Annual Novels Published</div>
              <div className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "4-6 Books" : "0-1 Books"}
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
          <h3 className="text-sm font-extrabold text-purple-500 uppercase tracking-[0.25em] mb-3">Storyteller Genres</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Who Uses AI Novel & Fiction Studios?</h4>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(uc.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === uc.id 
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/25 scale-105" 
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
                <span className="p-2 rounded-xl bg-purple-500/10 text-purple-500">{uc.icon}</span>
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
          <h3 className="text-sm font-extrabold text-purple-500 uppercase tracking-[0.25em] mb-3">Benchmark Matrix</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Fiction Writing Software Comparison</h4>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                <th className="p-4 md:p-5 font-black text-on-surface">Platform Type</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Character Lorebook</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Sensory Expansion</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Uncensored Creative Modes</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Full Manuscript Fit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  Raw Chatbot (ChatGPT / Claude)
                </td>
                <td className="p-4 md:p-5 text-red-500 font-bold">None (Forgets Past Ch. 3)</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">Bland Exposition</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">Heavily Filtered</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">Poor (Fragmented)</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <Feather className="w-4 h-4 text-amber-500" />
                  Generic Copy AI (Jasper / Rytr)
                </td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Keyword Tags Only</td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Marketing Phrasing</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">Corporate Filters</td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Short Stories Only</td>
              </tr>
              <tr className="bg-purple-50/40 dark:bg-purple-950/20 font-semibold">
                <td className="p-4 md:p-5 font-extrabold text-purple-600 dark:text-purple-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  Dedicated Fiction Studio (Sudowrite, NovelCrafter)
                </td>
                <td className="p-4 md:p-5 text-purple-600 dark:text-purple-400 font-extrabold">Persistent Lore Database</td>
                <td className="p-4 md:p-5 text-purple-600 dark:text-purple-400 font-extrabold">Visceral 5-Sense Rewrite</td>
                <td className="p-4 md:p-5 text-purple-600 dark:text-purple-400 font-extrabold">Full Creative Autonomy</td>
                <td className="p-4 md:p-5 text-purple-600 dark:text-purple-400 font-extrabold">120,000+ Words Cohesive</td>
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
          <h3 className="text-sm font-extrabold text-purple-500 uppercase tracking-[0.25em] mb-3">Author Checklist</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">What Makes a Legit AI Novel Writer in 2026?</h4>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Dynamic Series Lorebooks & Character Codices</h5>
            <p className={figtreeBodyClass}>
              The software must automatically recognize character names, locations, and magical artifacts, seamlessly retrieving traits and motivations into the model&apos;s working memory without manual prompt repasting.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center mb-4">
              <Sliders className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Granular Beat Sheet & Scene Outliners</h5>
            <p className={figtreeBodyClass}>
              Look for tools that break your premise down into actionable scene beats (e.g., Save the Cat, 3-Act Structure, Hero&apos;s Journey), allowing you to review and edit bullet points before generating full prose.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
              <Palette className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Sensory & &apos;Show, Don&apos;t Tell&apos; Prose Polish</h5>
            <p className={figtreeBodyClass}>
              Top fiction studios provide dedicated highlight tools to expand sentences through all five human senses: sight, sound, smell, taste, and physical touch.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-4">
              <Flame className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Creative Freedom & Flexible AI Model Selection</h5>
            <p className={figtreeBodyClass}>
              Mature platforms (like NovelCrafter and NovelAI) give you full control over model endpoints (Claude 3.5 Sonnet, Llama 3, Mistral, NovelAI Kayra) without corporate censorship of romance, suspense, or dark fantasy themes.
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
          <h3 className="text-sm font-extrabold text-purple-500 uppercase tracking-[0.25em] mb-3">Top Ranked Software</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Best AI Novel & Fiction Outliners</h4>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {alternatives.map((alt) => (
            <div key={alt.slug} className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md hover:border-purple-500/50 transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h5 className="text-2xl font-black text-on-surface">{alt.name}</h5>
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full">
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
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-purple-600 hover:text-purple-500 dark:text-purple-400 group"
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
          <h3 className="text-sm font-extrabold text-purple-500 uppercase tracking-[0.25em] mb-3">Technical Glossary</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Key Fiction Writing Terminology</h4>
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
          <h3 className="text-sm font-extrabold text-purple-500 uppercase tracking-[0.25em] mb-3">Frequently Asked Questions</h3>
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
                className="w-full text-left p-6 font-bold text-on-surface flex justify-between items-center gap-4 hover:text-purple-500 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-purple-500" : ""}`} />
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
