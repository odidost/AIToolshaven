"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Sparkles, 
  Video, 
  TrendingUp, 
  Tv, 
  Award, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  Sliders, 
  CheckCircle2, 
  Mic, 
  Play, 
  DollarSign, 
  Film, 
  HelpCircle,
  Zap,
  BookOpen
} from "lucide-react";

// ---- DATA STRUCTURES ---- //

const useCases = [
  {
    id: "history-mystery",
    title: "History, Mystery & Crime Documentaries",
    icon: <BookOpen className="w-5 h-5 text-sky-500" />,
    content: "Documentary creators produce engaging 10-minute long-form YouTube investigations into ancient Roman battles, Cold War espionage, or unsolved mysteries. Generative faceless engines draft script chapters, source archival B-roll, generate realistic AI imagery of historical figures, and narrate in deep, dramatic voiceovers."
  },
  {
    id: "reddit-confessions",
    title: "Reddit Stories & Viral Confessions",
    icon: <Zap className="w-5 h-5 text-blue-500" />,
    content: "TikTok and YouTube Shorts creators generate viral drama clips from r/AskReddit, r/AITA, and horror confession boards. Modern tools automatically pair hypnotic background gameplay (like Minecraft parkour or Subway Surfers) with conversational text-to-speech and sync dynamic, high-contrast captions."
  },
  {
    id: "motivation-stoicism",
    title: "Stoicism, Mindset & Financial Literacy",
    icon: <TrendingUp className="w-5 h-5 text-indigo-500" />,
    content: "Personal finance and motivational channels post daily quotes, Marcus Aurelius meditations, and wealth habits. AI engines assemble moody cinematic black-and-white stock clips, layer deep ambient bass soundtracks, and render bold kinetic typography that commands viewer focus."
  },
  {
    id: "trivia-quizzes",
    title: "Daily Trivia, Quizzes & Interactive Riddles",
    icon: <HelpCircle className="w-5 h-5 text-cyan-500" />,
    content: "Interactive quiz accounts achieve viral engagement on TikTok by challenging audiences with 3-second timers. Faceless AI video makers generate split-screen trivia templates with multiple-choice overlays, sound effects (ticking clock, correct bell), and instant answer reveals."
  }
];

const glossaryTerms = [
  {
    term: "Prompt-to-Video Engine",
    def: "An end-to-end generative pipeline that turns a simple text prompt into a complete edited video with scripted narration, stock clips, voiceover, and background music in a single render."
  },
  {
    term: "YouTube Reused Content Policy",
    def: "YouTube monetization guidelines requiring meaningful editorial commentary or original value, preventing demonetization of mass-produced robotic content."
  },
  {
    term: "Dynamic Ken Burns Pacing",
    def: "Automated slow camera push-ins, pans, and scale transitions applied to still imagery and stock video to maintain visual momentum and prevent viewer drop-off."
  },
  {
    term: "Contextual B-Roll Entity Matching",
    def: "Computer vision and NLP tagging that analyzes script nouns (e.g., '1929 stock market crash') to automatically query and license relevant archival and commercial stock footage."
  },
  {
    term: "Speech-to-Timeline Lip Sync & Audio Ducking",
    def: "Automated alignment of voiceover tracks with background orchestral soundtracks, dynamically lowering music volume when speech occurs and elevating it during dramatic pauses."
  },
  {
    term: "Automated Cash-Cow Channel Architecture",
    def: "A content business model where creators manage multiple profitable faceless channels across YouTube, TikTok, and Facebook without appearing on camera or recording voiceovers."
  }
];

const faqData = [
  {
    question: "What is the best AI faceless video generator in 2026?",
    answer: "InVideo AI and Crayo AI lead the industry. InVideo AI is the gold standard for full-length 10-minute YouTube documentaries, featuring prompt-guided text-to-video scripting, human-sounding voiceovers, and access to over 16 million premium iStock clips. Crayo AI dominates for viral short-form TikTok/Reels content like Reddit clips and split-screen gameplay."
  },
  {
    question: "Can faceless AI YouTube channels get monetized with the YouTube Partner Program (YPP)?",
    answer: "Yes. YouTube explicitly permits AI-assisted content as long as it provides original educational, entertaining, or storytelling value. Channels get demonetized for 'Reused Content' only when they lazily re-upload unedited clips or use monotonous robotic voices without original scripting or commentary."
  },
  {
    question: "How long does it take an AI tool to create a complete faceless video?",
    answer: "For a 60-second TikTok or Short, modern tools take between 60 and 90 seconds. For a comprehensive 8-to-10 minute YouTube video with hundreds of B-roll cutaways and subtitles, generation typically completes in 5 to 8 minutes."
  },
  {
    question: "Do I have to pay extra for stock footage and background music?",
    answer: "No. Top-tier tools like InVideo AI, Fliki, and Pictory include commercial licensing rights for millions of premium stock video clips (from Storyblocks, Shutterstock, and iStock) and royalty-free music libraries inside their monthly subscription."
  },
  {
    question: "Can I edit the script or replace specific video clips after the AI generates them?",
    answer: "Yes, 100%. Quality faceless video makers provide interactive canvas editors. You can type conversational edit prompts (e.g., 'Make the voice sound more dramatic' or 'Replace scene 3 with a clip of Wall Street'), or manually swap out clips and adjust subtitle positions."
  },
  {
    question: "What is the difference between InVideo AI and Fliki?",
    answer: "InVideo AI operates primarily as a prompt-to-video director: you give it a theme or topic, and it writes the script, selects cinematic stock footage, and handles complex pacing. Fliki is tailored for blog-to-video and audio-focused narration, offering over 2,000 hyper-realistic multilingual voice clones and podcast conversion tools."
  }
];

const alternatives = [
  { 
    name: "InVideo AI", 
    slug: "invideo-ai",
    score: "9.9", 
    price: "Freemium ($25/mo)", 
    bestFor: "Best Overall for Long-Form YouTube Documentaries", 
    highlight: "Type any prompt and generate complete 10-minute YouTube videos with professional scriptwriting, voiceover, and 16M+ iStock media." 
  },
  { 
    name: "Crayo AI", 
    slug: "crayo-ai",
    score: "9.8", 
    price: "Freemium ($19/mo)", 
    bestFor: "Fastest TikTok Clips, Reddit Stories & Split Gameplay", 
    highlight: "Built specifically for viral short-form video creation with automated caption presets, Reddit story scrapers, and background gameplay loops." 
  },
  { 
    name: "Fliki", 
    slug: "fliki",
    score: "9.7", 
    price: "Freemium ($28/mo)", 
    bestFor: "Multilingual Voiceovers & Blog-to-Video Pipelines", 
    highlight: "Combines 2,000+ lifelike AI voices in 75+ languages with rich media libraries to transform articles, scripts, and ideas into engaging videos." 
  },
  { 
    name: "Pictory", 
    slug: "pictory",
    score: "9.6", 
    price: "From $19/mo", 
    bestFor: "Script-to-Video & Long Webinar Summaries", 
    highlight: "Effortlessly transforms long text articles and video recordings into short, branded shareable clips with automated captions and stock assets." 
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

export default function AiFacelessVideoMakersGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const [roiMode, setRoiMode] = useState<"traditional" | "ai">("ai");

  return (
    <article className="w-full max-w-6xl mx-auto py-6 md:py-10 font-sans overflow-hidden">
      
      {/* 1. HERO HEADER CONTAINER */}
      <motion.header 
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-sky-500/20 shadow-xl shadow-sky-500/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-600/20 via-slate-900/60 to-slate-950/90 pointer-events-none" />
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs md:text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-md">
            <Play className="w-4 h-4 fill-sky-400" />
            2026 YouTube Automation & Channel Scale Blueprint
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Next-Gen AI Faceless <br className="hidden md:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-400">
              Video Generators
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-8">
            The definitive guide to autonomous prompt-to-video pipelines, neural voiceover sync, dynamic stock B-roll selection, and monetizable cash-cow channel automation.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl pt-6 border-t border-slate-800">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-white">100%</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Autonomous Pipeline</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-sky-400">&lt; 90 Sec</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Script-to-Render Velocity</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-blue-400">100+</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Neural Voice Accents</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-indigo-400">4K HDR</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Commercial Export Quality</span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* 2. DEFINITIVE OVERVIEW / BENTO CONTAINER */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-sm font-extrabold text-sky-500 uppercase tracking-[0.25em] mb-3">Definitive Overview</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">The Death of Manual Video Production Bottlenecks</h3>
        </div>

        <div className="space-y-10 md:space-y-12">
          {/* Bento Card 1 */}
          <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/30 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500">
                <Film className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-on-surface tracking-tight">Prompt-to-Render Autonomous Storytelling vs. Multi-App Fragmentation</h4>
              <p className={figtreeBodyClass}>
                Building a faceless YouTube or TikTok channel previously meant juggling five separate subscriptions: an AI writer for the script, ElevenLabs for voiceover, Storyblocks for stock clips, Premiere Pro for cutting, and CapCut for captions. <strong>AI faceless video generators unite this entire chain into a single cohesive pipeline.</strong>
              </p>
              <p className={figtreeDarkBodyClass}>
                A creator simply inputs: <em>"Create an 8-minute documentary on the mysterious disappearance of the Roman Ninth Legion with dramatic pacing."</em> The system researches historical facts, generates a chaptered script, pairs cinematic B-roll, narrates with emotional cadence, and renders complete with subtitles.
              </p>
            </div>
            <div className="md:w-1/2 w-full bg-slate-950 p-6 rounded-2xl border border-slate-800 text-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span>Autonomous Generation Stream</span>
                <span className="text-sky-400">InVideo AI v3.0</span>
              </div>
              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Step 1: Script & Beat Sheet</span>
                  <span className="text-emerald-400 font-bold">Generated (1,450 words)</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Step 2: Neural Voice Synthesis</span>
                  <span className="text-sky-400 font-bold">Deep British Narrator</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Step 3: B-Roll Entity Matching</span>
                  <span className="text-blue-400 font-bold">48 iStock 4K Clips</span>
                </div>
                <div className="p-3 rounded-lg bg-sky-950/40 border border-sky-500/30 flex justify-between items-center">
                  <span className="text-slate-300">Final Render Output</span>
                  <span className="text-white font-bold">08:14 Complete Video</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-sky-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Monetizable original storyline with 100% licensed media</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2 */}
          <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/30 flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Sliders className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-on-surface tracking-tight">Emotional Vocal Inflection & Dynamic Pacing</h4>
              <p className={figtreeBodyClass}>
                Early text-to-video tools failed because monotonous robotic voices put viewers to sleep, causing retention to crater within 10 seconds. Today's neural voice engines analyze script punctuation and emotional subtext, inserting natural breath pauses, whispered suspense, and emphatic tonal shifts.
              </p>
              <p className={figtreeDarkBodyClass}>
                Coupled with dynamic Ken Burns zoom transitions, automated sound design, and beat-matched background music, faceless AI videos now hold average percentage viewed (APV) metrics that rival top human video editors.
              </p>
            </div>
            <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">Old Slideshow Generators</span>
                <span className="text-2xl font-extrabold text-red-300">12% APV</span>
                <p className="text-xs text-slate-400 mt-2">Robotic Siri voices, static stock photos, zero audio ducking, and rapid viewer drop-off.</p>
              </div>
              <div className="p-5 rounded-2xl bg-sky-950/20 border border-sky-500/20 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">2026 AI Video Directors</span>
                <span className="text-2xl font-extrabold text-sky-300">68% APV</span>
                <p className="text-xs text-slate-400 mt-2">Cinematic 4K B-roll, expressive vocal modulation, audio ducking, and dynamic subtitles.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. INTERACTIVE ROI / COST-SAVINGS CALCULATOR */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-8 md:mb-12 max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 md:p-12 border border-slate-800 text-white shadow-xl"
      >
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-xs font-bold tracking-[0.2em] text-sky-400 uppercase mb-2">Channel Scale Economics</h2>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight">Outsourced Production Team vs. AI Video Engine</h3>
          <p className="text-slate-400 mt-3 text-sm md:text-base">
            Analyze the real costs of producing 12 high-retention 8-minute YouTube documentary videos every month.
          </p>

          <div className="inline-flex p-1 rounded-xl bg-slate-800 border border-slate-700 mt-6">
            <button
              onClick={() => setRoiMode("traditional")}
              className={`px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
                roiMode === "traditional" 
                  ? "bg-slate-700 text-white shadow" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Freelance Team (Script + Voice + Editor)
            </button>
            <button
              onClick={() => setRoiMode("ai")}
              className={`px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
                roiMode === "ai" 
                  ? "bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/25 font-black" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              2026 AI Video Stack ($25/mo)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Monthly Production Cost</span>
              <div className="text-3xl md:text-4xl font-black text-white mt-2">
                {roiMode === "traditional" ? "$1,800" : "$25"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "12 videos billed at $150 each ($40 script + $30 voice + $80 editing)."
                : "A single monthly InVideo AI or Fliki creator plan with full commercial media licensing."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Turnaround Time (12 Videos)</span>
              <div className="text-3xl md:text-4xl font-black text-sky-400 mt-2">
                {roiMode === "traditional" ? "21 Days" : "90 Minutes"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "Waiting on three different freelancers across time zones with multiple revision rounds."
                : "Generate, preview, adjust with conversational prompts, and export in a single afternoon."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Multi-Channel Scalability</span>
              <div className="text-3xl md:text-4xl font-black text-indigo-400 mt-2">
                {roiMode === "traditional" ? "Limited" : "Infinite"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "Managing 4 channels requires hiring an entire agency of 10+ contractors."
                : "One creator can operate 5 distinct niche cash-cow channels across YouTube and TikTok simultaneously."}
            </p>
          </div>
        </div>
      </motion.section>

      {/* 4. USE CASE MATRIX / PERSONA TABS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-sm font-extrabold text-sky-500 uppercase tracking-[0.25em] mb-3">Industry Solutions</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Automated Storytelling for Every Niche</h3>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {useCases.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-sky-500 text-slate-950 font-black shadow-md shadow-sky-500/20"
                  : "bg-surface-container-low text-on-surface hover:bg-surface-container"
              }`}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/30">
          {useCases.map((tab) => {
            if (tab.id !== activeTab) return null;
            return (
              <div key={tab.id} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-500">
                    {tab.icon}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-on-surface">{tab.title}</h4>
                </div>
                <p className={figtreeBodyClass}>
                  {tab.content}
                </p>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* 5. ARCHITECTURAL EVALUATION / COMPARISON TABLE */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-sm font-extrabold text-sky-500 uppercase tracking-[0.25em] mb-3">Architectural Comparison</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Faceless Video Maker Capabilities Matrix</h3>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-outline-variant/30 bg-surface-container-low">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-container border-b border-outline-variant/40 text-on-surface text-xs uppercase tracking-wider font-extrabold">
              <tr>
                <th className="p-4 md:p-5">Platform</th>
                <th className="p-4 md:p-5">Pipeline Mode</th>
                <th className="p-4 md:p-5">Stock Library</th>
                <th className="p-4 md:p-5">Voiceover Quality</th>
                <th className="p-4 md:p-5">Primary Strength</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 text-on-surface-variant font-medium">
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                  InVideo AI
                </td>
                <td className="p-4 md:p-5">Full Prompt-to-Video</td>
                <td className="p-4 md:p-5 text-sky-500 font-bold">16M+ iStock Premium</td>
                <td className="p-4 md:p-5 text-sky-500 font-bold">Ultra-Realistic Neural</td>
                <td className="p-4 md:p-5">Long-form 10-minute YouTube documentaries</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  Crayo AI
                </td>
                <td className="p-4 md:p-5">Viral Short-Form & Reddit</td>
                <td className="p-4 md:p-5">Gameplay Loops & GIFs</td>
                <td className="p-4 md:p-5">Punchy Conversational</td>
                <td className="p-4 md:p-5">TikTok & Shorts split-screen storytelling</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                  Fliki
                </td>
                <td className="p-4 md:p-5">Blog/Script-to-Video</td>
                <td className="p-4 md:p-5">Standard Curated Stock</td>
                <td className="p-4 md:p-5 text-sky-500 font-bold">2,000+ Multilingual</td>
                <td className="p-4 md:p-5">Multilingual channel localization in 75+ languages</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                  Pictory
                </td>
                <td className="p-4 md:p-5">Article & Webinar Re-cutter</td>
                <td className="p-4 md:p-5">Getty & Storyblocks</td>
                <td className="p-4 md:p-5">ElevenLabs Integrated</td>
                <td className="p-4 md:p-5">Repurposing blog articles and Zoom recordings</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* 6. KEY EVALUATION CRITERIA / BUYER CHECKLIST */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-sm font-extrabold text-sky-500 uppercase tracking-[0.25em] mb-3">Buyer's Checklist</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">4 Must-Haves in an AI Faceless Video Maker</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold">1</div>
            <h4 className="text-xl font-bold text-on-surface">YouTube Monetization & Fair Use Compliance</h4>
            <p className={figtreeBodyClass}>
              To qualify for the YouTube Partner Program, content must offer original value. Ensure your generator writes unique narrative scripts and provides an interactive editor to tweak lines and add custom commentary.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">2</div>
            <h4 className="text-xl font-bold text-on-surface">Licensed Commercial Media Libraries</h4>
            <p className={figtreeBodyClass}>
              Never use tools that scrape uncredited internet clips. Look for built-in commercial licenses with major agencies (iStock, Shutterstock, Storyblocks) to guarantee zero copyright strikes on YouTube or TikTok.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">3</div>
            <h4 className="text-xl font-bold text-on-surface">Conversational Canvas Prompt Editing</h4>
            <p className={figtreeBodyClass}>
              The AI won't get every single scene 100% right on the first try. You need conversational iterative editing (e.g., 'Change scene 4 to a slow-motion rain shot' or 'Make the voiceover faster in the intro') without starting from scratch.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold">4</div>
            <h4 className="text-xl font-bold text-on-surface">Automated Whisper Subtitle Synchronization</h4>
            <p className={figtreeBodyClass}>
              Over 70% of short-form mobile viewers watch with the audio turned off. Your generator must produce frame-perfect word-level subtitles with customizable colors, bold fonts, and automatic emoji integration.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 7. CURATED TOOL SHOWCASE */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-sm font-extrabold text-sky-500 uppercase tracking-[0.25em] mb-3">Top Directory Picks</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">The Gold Standard Faceless Video Platforms</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alternatives.map((tool) => (
            <div 
              key={tool.slug}
              className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between hover:border-sky-500/40 transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h4 className="text-2xl font-black text-on-surface">{tool.name}</h4>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 font-extrabold text-sm">
                    ★ {tool.score}
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-400 mb-2">{tool.price}</div>
                <div className="text-xs font-semibold text-sky-500 mb-4">{tool.bestFor}</div>
                <p className={figtreeBodyClass}>
                  {tool.highlight}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                <Link 
                  href={`/tool/${tool.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-sky-500 hover:text-sky-400 transition-colors"
                >
                  View Directory Profile <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 8. TECHNICAL GLOSSARY */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-sm font-extrabold text-sky-500 uppercase tracking-[0.25em] mb-3">Technical Lexicon</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">YouTube Automation & Faceless Terminology</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {glossaryTerms.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2"
            >
              <h4 className="text-base font-bold text-on-surface flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                {item.term}
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {item.def}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 9. INTERACTIVE FAQ ACCORDION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-8 md:mb-12 max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-sky-500 uppercase tracking-[0.25em] mb-3">Frequently Asked Questions</h3>
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
                className="w-full text-left p-6 font-bold text-on-surface flex justify-between items-center gap-4 hover:text-sky-500 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-sky-500" : ""}`} />
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
