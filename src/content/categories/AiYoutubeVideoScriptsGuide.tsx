"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  PlaySquare, 
  Sparkles, 
  Clock, 
  TrendingUp, 
  Video, 
  Film, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Award, 
  Zap, 
  BarChart3, 
  Target, 
  Users, 
  Scissors,
  Layers,
  FileText,
  Sliders,
  DollarSign,
  AlertTriangle
} from "lucide-react";

// ---- DATA STRUCTURES ---- //

const useCases = [
  {
    id: "faceless",
    title: "Faceless Automation Channels",
    icon: <Film className="w-5 h-5 text-red-500" />,
    content: "Faceless documentary, finance, and true crime channels rely on high-frequency publishing. Specialized AI script engines output structured 2,500-word narratives segmented into 15-second beats, complete with exact B-roll search queries, archival image prompts, and sound design markers designed for text-to-speech voiceovers."
  },
  {
    id: "solo-creators",
    title: "Solo Creators & Vloggers",
    icon: <Users className="w-5 h-5 text-rose-500" />,
    content: "Solo talking-head creators struggle with scripting conversational authenticity without rambling. AI script generators analyze previous transcript uploads to mirror cadence, sentence rhythm, and personal catchphrases while formatting teleprompter-ready talking points with natural breath pauses."
  },
  {
    id: "shorts-reels",
    title: "YouTube Shorts & TikTok Reels",
    icon: <Scissors className="w-5 h-5 text-amber-500" />,
    content: "Short-form video algorithms punish hesitation within the first 1.5 seconds. Dedicated short-form script generators craft high-dopamine micro-hooks, tension build-ups, and loop closures that reset viewers' attention spans every 4 to 6 seconds to maximize completion percentage."
  },
  {
    id: "saas-brand",
    title: "SaaS Walkthroughs & Brand Demos",
    icon: <Target className="w-5 h-5 text-orange-500" />,
    content: "Product marketing teams turn technical changelogs and onboarding guides into engaging tutorial scripts. The AI extracts customer pain points, structures feature reveals around tangible benefits, and inserts explicit screen recording directives and call-to-value timestamps."
  }
];

const glossaryTerms = [
  {
    term: "Average View Duration (AVD)",
    def: "The total watch time divided by the total number of video plays. YouTube's primary ranking signal for recommending videos to broader browse audiences."
  },
  {
    term: "Pattern Interrupt",
    def: "A deliberate visual, auditory, or pacing disruption inserted every 15-30 seconds to re-engage viewer cognitive focus and prevent drop-offs."
  },
  {
    term: "Curiosity Gap (Open Loop)",
    def: "A narrative technique introducing an unanswered question or high-stakes premise early in the script, delaying the resolution until later in the video."
  },
  {
    term: "B-Roll Directing Markup",
    def: "Formatted script bracket tags (e.g., [B-ROLL: Rapid zoom onto stock chart]) instructing video editors exactly what supplementary footage to overlay."
  },
  {
    term: "Hook Pacing Ratio",
    def: "The psychological formula allocating 15-25% of energy into the first 10 seconds to validate the thumbnail promise before entering core exposition."
  },
  {
    term: "Call to Value (CTV)",
    def: "A conversion-optimized conclusion seamlessly tying viewer takeaways into channel subscriptions or lead magnets without triggering abrupt click-aways."
  }
];

const faqData = [
  {
    question: "What is the best AI tool for writing YouTube scripts in 2026?",
    answer: "Syllaby and TubeSpanner currently lead for complete YouTube script architecture and workflow scheduling, while VidIQ AI excels for keyword-driven viral outlines. Unlike general-purpose chatbots, these dedicated tools automatically include timestamped beats, B-roll cues, and psychological hook variations."
  },
  {
    question: "Can AI generate full YouTube scripts with B-roll visual directions?",
    answer: "Yes. Premium YouTube script engines produce multi-column or bracketed markdown scripts containing spoken narration alongside corresponding visual directions (such as [ON SCREEN: Animated graph], [B-ROLL: City skyline time-lapse], and [SFX: Whoosh transition])."
  },
  {
    question: "How do AI YouTube script writers improve viewer retention and watch time?",
    answer: "Retention-optimized AI models structure scripts around established psychological pacing curves: a 3-second thumbnail validation hook, early open loops, pattern interrupts every 20-30 seconds, and seamless narrative bridges that eliminate the flat drop-offs common in amateur scripts."
  },
  {
    question: "Are AI-generated video scripts safe for YouTube monetization?",
    answer: "Yes, 100%. YouTube monetizes videos based on viewer engagement, original presentation, and advertiser suitability. Writing a script with AI does not trigger copyright strikes or demonetization, provided your final video incorporates transformative visuals, voiceover, and human value."
  },
  {
    question: "How do I adapt an AI YouTube script for Shorts, TikTok, and Instagram Reels?",
    answer: "Modern video script tools include one-click short-form reformatting. They condense an 8-minute long-form script into 3 to 5 standalone 45-second micro-scripts, each engineered with a rapid opening question, visual pattern interrupts, and seamless looping endpoints."
  },
  {
    question: "What is the difference between ChatGPT and specialized YouTube script generators?",
    answer: "ChatGPT generates written prose that often sounds like an essay or blog post when read aloud. Dedicated YouTube script tools write phonetically for spoken audio, calculate teleprompter reading speeds (WPM), insert visual directing instructions, and integrate live YouTube search volume analytics."
  }
];

const alternatives = [
  { 
    name: "Syllaby", 
    slug: "syllaby",
    score: "9.8", 
    price: "From $49/mo", 
    bestFor: "Best for Service Businesses & Content Calendars", 
    highlight: "Generates topic clusters, customer inquiry scripts, and teleprompter-ready video outlines with integrated scheduling." 
  },
  { 
    name: "TubeSpanner", 
    slug: "tubespanner",
    score: "9.7", 
    price: "Freemium / $12/mo", 
    bestFor: "Complete YouTube Studio & Script Architecture", 
    highlight: "Purpose-built YouTube scripting workspace with visual notes, thumbnail coordination, and direct CMS integration." 
  },
  { 
    name: "VidIQ AI", 
    slug: "vidiq-ai",
    score: "9.6", 
    price: "Freemium / $39/mo", 
    bestFor: "Keyword-Driven SEO Scripts & Viral Outlines", 
    highlight: "Combines proprietary YouTube search competition metrics with AI script prompts tailored to outrank trending competitors." 
  },
  { 
    name: "ScriptMonkey", 
    slug: "scriptmonkey",
    score: "9.5", 
    price: "Freemium / $19/mo", 
    bestFor: "Storyboarding & Narrative Visual Cues", 
    highlight: "Outputs synchronized narration with side-by-side B-roll footage prompts and teleprompter speed estimators." 
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

export default function AiYoutubeVideoScriptsGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-red-500/20 shadow-xl shadow-red-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-rose-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/30 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-6 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <PlaySquare className="w-4 h-4 text-red-400" /> 
            2026 YouTube Scripting & Retention Architecture
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.08]"
          >
            The Definitive Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-400 drop-shadow-sm">
              AI YouTube & Video Script Generators
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${figtreeDarkBodyClass} max-w-2xl mx-auto`}
          >
            How algorithmic hook structuring, cognitive pacing loops, and automated B-roll directives transform raw ideas into high-retention video scripts that dominate browse feeds and search rankings.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Definitive Overview - Two Alternating Container Blocks */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-8 md:mb-12 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-red-500 uppercase tracking-[0.25em] mb-3">The Algorithm Blueprint</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Why Generic Chatbot Scripts Collapse on YouTube</h4>
        </motion.div>

        <div className="space-y-10 md:space-y-12">
          {/* Block 1: The 30-Second Retention Chasm */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-rose-500/20 border border-red-500/20 flex items-center justify-center text-red-500 mb-8 shadow-sm">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">The 30-Second Retention Chasm</h5>
              <p className={figtreeBodyClass}>
                YouTube&apos;s recommendation engine cares about one metric above all: <strong>Average View Duration (AVD)</strong>. When creators use generic LLMs like standard ChatGPT, the output is structured like a college essay—stiff formal introductions, predictable linear transitions, and no visual cues. Viewers drop off within the first 15 seconds, signaling to the algorithm that the video failed to deliver on its thumbnail promise.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-red-50/50 to-rose-50/50 dark:from-red-950/20 dark:to-rose-900/20 border border-red-200/50 dark:border-red-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-48 h-48 bg-gradient-to-tr from-red-500 to-rose-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 absolute" />
               <div className="w-full max-w-xs rounded-2xl bg-slate-900/90 border border-white/20 p-6 flex flex-col justify-between relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-105">
                 <div className="flex justify-between items-center mb-4">
                   <div className="flex items-center gap-2">
                     <AlertTriangle className="w-4 h-4 text-amber-400" />
                     <div className="text-[12px] text-white/90 font-mono font-bold">Generic Essay Script</div>
                   </div>
                   <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[11px] font-bold">22% AVD</span>
                 </div>
                 <div className="space-y-2 mb-4">
                   <div className="h-2 w-full bg-red-400/50 rounded-full" />
                   <div className="h-2 w-1/3 bg-red-400/30 rounded-full" />
                   <div className="h-2 w-1/6 bg-red-400/20 rounded-full" />
                 </div>
                 <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[11px] text-slate-400">
                   <span>Drop-off at 0:14</span>
                   <span className="text-red-400 font-bold">Buried in Feed</span>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Block 2: Retention Hooks & Visual Direction */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-rose-50/50 to-amber-50/50 dark:from-rose-950/20 dark:to-amber-900/20 border border-rose-200/50 dark:border-rose-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-full max-w-sm space-y-4 relative z-10 transition-transform duration-700 group-hover:scale-105">
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-red-500/30 rounded-2xl p-4 shadow-md flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold">
                     <CheckCircle2 className="w-6 h-6" />
                   </div>
                   <div className="space-y-1.5 flex-1">
                     <div className="flex justify-between items-center">
                       <span className="text-xs font-bold text-on-surface">3-Sec Hook Validated</span>
                       <span className="text-[11px] font-extrabold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">64% AVD Lift</span>
                     </div>
                     <div className="h-2 w-full bg-emerald-500/30 rounded-full" />
                   </div>
                 </div>
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <Layers className="w-4 h-4 text-red-500" />
                     <span className="text-xs font-bold text-on-surface">B-Roll & Sound FX Cues</span>
                   </div>
                   <span className="text-xs font-bold text-red-500 px-2 py-0.5 bg-red-500/10 rounded-full">Pacing Anchors Active</span>
                 </div>
               </div>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-amber-500/20 border border-rose-500/20 flex items-center justify-center text-rose-500 mb-8 shadow-sm">
                <Sliders className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">Cognitive Pacing & Teleprompter Cadence</h5>
              <p className={figtreeBodyClass}>
                Dedicated YouTube script engines write phonetically for vocal delivery rather than silent reading. They weave <strong>pattern interrupts</strong> every 25 seconds, insert explicit visual directives for the editor, and structure curiosity gaps (open loops) that keep viewers watching past mid-roll ad markers.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. Interactive ROI & Time-Savings Calculator Container */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-5">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">Calculate Scriptwriting ROI & Production Speed</h3>
            <p className={figtreeBodyClass + " max-w-xl"}>
              Compare manual scripting workflows against dedicated AI YouTube script generation engines for creator studios and media channels.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full flex gap-2">
              <button 
                onClick={() => setRoiMode("traditional")}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${roiMode === "traditional" ? "bg-white dark:bg-slate-700 shadow-md text-on-surface" : "text-slate-400 hover:text-on-surface"}`}
              >
                Manual Scriptwriting
              </button>
              <button 
                onClick={() => setRoiMode("ai")}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${roiMode === "ai" ? "bg-red-600 text-white shadow-md shadow-red-600/20" : "text-slate-400 hover:text-on-surface"}`}
              >
                AI YouTube Script Engine
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center relative z-10">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <Clock className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-red-500" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-1 text-sm">Time per 10-Min Video Script</div>
              <div className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "90 Seconds" : "4.5 Hours"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <BarChart3 className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-red-500" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-1 text-sm">Hook Retention Lift</div>
              <div className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "+38% AVD" : "Baseline"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <DollarSign className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-red-500" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-1 text-sm">Monthly Scripting Cost</div>
              <div className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "< $20 / mo" : "$1,200+ (Ghostwriter)"}
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
          <h3 className="text-sm font-extrabold text-red-500 uppercase tracking-[0.25em] mb-3">Channel Formats</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Who Uses AI YouTube Script Generators?</h4>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(uc.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === uc.id 
                  ? "bg-red-600 text-white shadow-md shadow-red-600/25 scale-105" 
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
                <span className="p-2 rounded-xl bg-red-500/10 text-red-500">{uc.icon}</span>
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
          <h3 className="text-sm font-extrabold text-red-500 uppercase tracking-[0.25em] mb-3">Benchmark Matrix</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Script Generator Architecture Comparison</h4>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                <th className="p-4 md:p-5 font-black text-on-surface">Generator Type</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Hook Engineering</th>
                <th className="p-4 md:p-5 font-black text-on-surface">B-Roll & Visual Markup</th>
                <th className="p-4 md:p-5 font-black text-on-surface">WPM Teleprompter Sync</th>
                <th className="p-4 md:p-5 font-black text-on-surface">AVD Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-400" />
                  Raw Chatbot (ChatGPT / Claude)
                </td>
                <td className="p-4 md:p-5 text-red-500 font-bold">Essay Style (Low Retention)</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">None (Manual Prompting)</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">No Timing Metrics</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">20-30% Retention</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  Generic Copywriter (Copy.ai / Rytr)
                </td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Marketing Slogans</td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Basic Scene Headers</td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Approximate Words</td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">35-45% Retention</td>
              </tr>
              <tr className="bg-red-50/40 dark:bg-red-950/20 font-semibold">
                <td className="p-4 md:p-5 font-extrabold text-red-600 dark:text-red-400 flex items-center gap-2">
                  <PlaySquare className="w-4 h-4 text-red-500" />
                  Dedicated YouTube Script AI (Syllaby, TubeSpanner)
                </td>
                <td className="p-4 md:p-5 text-red-600 dark:text-red-400 font-extrabold">3-Sec Micro-Hooks</td>
                <td className="p-4 md:p-5 text-red-600 dark:text-red-400 font-extrabold">Full Bracketed Cues</td>
                <td className="p-4 md:p-5 text-red-600 dark:text-red-400 font-extrabold">Exact Teleprompter Sync</td>
                <td className="p-4 md:p-5 text-red-600 dark:text-red-400 font-extrabold">55-70%+ Retention</td>
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
          <h3 className="text-sm font-extrabold text-red-500 uppercase tracking-[0.25em] mb-3">Creator Checklist</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">What Makes a Legit YouTube Script Generator in 2026?</h4>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-4">
              <Film className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Automated Visual & B-Roll Directives</h5>
            <p className={figtreeBodyClass}>
              The best script generators don&apos;t just generate voiceover words; they write for your editor. Look for tools that insert clear timestamps, camera framing notes, and specific B-roll search queries in bracketed tags.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Multi-Variation Hook Generation</h5>
            <p className={figtreeBodyClass}>
              The first 5 seconds dictate 80% of video success. Top platforms provide 5 distinct opening hook options—ranging from controversial statements to shocking statistics and high-stakes questions.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Pacing & Speaking Rate Sync (WPM)</h5>
            <p className={figtreeBodyClass}>
              Ensure the tool calculates exact speaking duration based on target Words Per Minute (typically 130-150 WPM for tutorials and 160 WPM for high-energy entertainment).
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Integrated SEO & Thumbnail Alignment</h5>
            <p className={figtreeBodyClass}>
              Top tools integrate search volume analysis to verify that the script naturally answers search queries while aligning with the thumbnail title promise.
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
          <h3 className="text-sm font-extrabold text-red-500 uppercase tracking-[0.25em] mb-3">Top Ranked Software</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Best AI YouTube & Video Script Generators</h4>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {alternatives.map((alt) => (
            <div key={alt.slug} className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md hover:border-red-500/50 transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h5 className="text-2xl font-black text-on-surface">{alt.name}</h5>
                    <span className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">
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
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-red-600 hover:text-red-500 dark:text-red-400 group"
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
          <h3 className="text-sm font-extrabold text-red-500 uppercase tracking-[0.25em] mb-3">Technical Glossary</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Key Video Scripting Terminology</h4>
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
          <h3 className="text-sm font-extrabold text-red-500 uppercase tracking-[0.25em] mb-3">Frequently Asked Questions</h3>
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
                className="w-full text-left p-6 font-bold text-on-surface flex justify-between items-center gap-4 hover:text-red-500 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-red-500" : ""}`} />
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
