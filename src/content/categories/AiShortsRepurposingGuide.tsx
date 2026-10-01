"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Sparkles, 
  Scissors, 
  Smartphone, 
  Flame, 
  TrendingUp, 
  Award, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  Sliders, 
  CheckCircle2, 
  Video, 
  Play, 
  DollarSign, 
  Share2, 
  Mic2,
  Tv,
  Subtitles
} from "lucide-react";

// ---- DATA STRUCTURES ---- //

const useCases = [
  {
    id: "podcasters-interviews",
    title: "Video Podcasters & Talk Shows",
    icon: <Mic2 className="w-5 h-5 text-rose-500" />,
    content: "Podcasters with 1- to 2-hour multi-guest interviews can automatically extract 10-15 viral moments with zero manual timestamping. Advanced face-tracking detects active speakers in real time, automatically generating split-screen or dynamic camera switches formatted perfectly for TikTok and YouTube Shorts."
  },
  {
    id: "b2b-webinars",
    title: "B2B Marketers & Keynote Speakers",
    icon: <Tv className="w-5 h-5 text-amber-500" />,
    content: "Enterprise teams hosting customer webinars, Zoom town halls, and virtual summit keynotes convert dense technical presentations into bite-sized executive takeaways. Branded intros, corporate color palettes, and LinkedIn-optimized aspect ratios maximize lead generation without agency fees."
  },
  {
    id: "streamers-creators",
    title: "Twitch Streamers & Gaming Creators",
    icon: <Flame className="w-5 h-5 text-orange-500" />,
    content: "Live streamers broadcast for 6 hours daily and lack the energy to comb through footage. AI audio inflection and chat-reaction algorithms identify climax moments—such as intense clutch wins, funny reactions, and rage quits—instantly packaging them into high-energy vertical clips."
  },
  {
    id: "course-educators",
    title: "Educators & Online Course Creators",
    icon: <Share2 className="w-5 h-5 text-red-500" />,
    content: "Online instructors and coaching businesses repurpose lecture modules into high-retention social teasers. Highlight generators automatically insert relevant stock B-roll, emphasize keywords with kinetic captions, and drive prospective students from Instagram Reels into paid course funnels."
  }
];

const glossaryTerms = [
  {
    term: "Kinetic Caption Rendering",
    def: "Dynamic, word-by-word highlighted subtitles (popularized by Alex Hormozi) with auto-generated emojis and color emphasis that keep viewer eyes glued to the screen."
  },
  {
    term: "Active Speaker Tracking (Re-framing)",
    def: "Computer vision algorithms that detect speaker faces in 16:9 widescreen footage and automatically pan-and-crop into a centered 9:16 vertical canvas without edge warping."
  },
  {
    term: "Semantic Virality Scoring (Hook Ratio)",
    def: "An NLP and engagement model that rates video segments from 1 to 99 based on opening hook strength, narrative arc completion, and emotional vocal pitch escalation."
  },
  {
    term: "Contextual B-Roll Injection",
    def: "Automated analysis of transcript nouns that inserts matching royalty-free video clips or generative animations directly over pauses or explanatory monologues."
  },
  {
    term: "Audio Ducking & Sound FX Triggers",
    def: "Automatic lowering of background music whenever speech is detected, paired with subtle sound effects (whooshes, pops, cash registers) on emphasized keywords."
  },
  {
    term: "Multi-Platform Safe-Zone Transcoding",
    def: "Framing presets that ensure captions, logos, and guest faces do not get obscured by TikTok, Reels, or Shorts UI overlays (like like buttons, descriptions, and sound discs)."
  }
];

const faqData = [
  {
    question: "What is the best AI tool for repurposing long videos into shorts in 2026?",
    answer: "Opus Clip and Munch AI are the two top-rated tools in the industry. Opus Clip excels in quantitative Virality Scores, automatic split-screen speaker reframing, and Hormozi-style kinetic captions. Munch AI stands out for predictive social keyword analysis and trend matching across TikTok and Instagram."
  },
  {
    question: "How does the AI know which moments in a 60-minute video will go viral?",
    answer: "The AI parses the audio transcript using Large Language Models to detect high-retention narrative structures: provocative opening hooks, controversial statements, insightful punchlines, and emotional vocal climaxes. It compares these moments against millions of top-performing short-form videos to assign a predictive Virality Score."
  },
  {
    question: "Can AI tools reframe horizontal 16:9 videos into 9:16 without looking awkward?",
    answer: "Yes. Leading platforms use intelligent computer vision to track faces and gestures. If two people are talking in a wide shot, the AI creates an elegant split-screen layout with one speaker stacked above the other, automatically cutting or panning as the conversation flows."
  },
  {
    question: "Do AI-generated shorts get monetized on YouTube, TikTok, and Instagram?",
    answer: "Yes. As long as you own the rights to the original source content (your own podcast, webinar, or tutorial), AI-repurposed clips are 100% eligible for YouTube Shorts Ad Revenue sharing, TikTok Creator Rewards, and Instagram Reels bonuses."
  },
  {
    question: "How long does it take to turn a 1-hour podcast into 10 shorts?",
    answer: "Between 3 and 7 minutes. Cloud GPU pipelines transcribe the audio, calculate virality scores, crop active speakers into 9:16, overlay kinetic animated captions, and generate 10 to 15 export-ready clips simultaneously."
  },
  {
    question: "What is the difference between CapCut and dedicated AI repurposers like Opus Clip?",
    answer: "CapCut is a manual timeline video editor with some AI features where you still need to find timestamps, crop frames, and trim footage yourself. Dedicated repurposers like Opus Clip or Klap are fully autonomous: you drop in a YouTube URL, and the software automatically outputs 10 edited, captioned, and ranked clips with zero manual timeline editing."
  }
];

const alternatives = [
  { 
    name: "Opus Clip", 
    slug: "opus-clip",
    score: "9.9", 
    price: "Freemium ($19/mo)", 
    bestFor: "Best Overall for Viral Hook Scoring & Dynamic Split-Screen", 
    highlight: "Autonomous repurposing platform that extracts 10+ viral clips from any long video with AI virality scores and multi-speaker tracking." 
  },
  { 
    name: "Munch AI", 
    slug: "munch-ai",
    score: "9.8", 
    price: "From $49/mo", 
    bestFor: "Trend-Aligned Topic Extraction & Multi-Platform SEO", 
    highlight: "Extracts high-performing clips matched against live social media trending keywords, complete with platform-specific hashtags and titles." 
  },
  { 
    name: "Submagic", 
    slug: "submagic",
    score: "9.7", 
    price: "From $20/mo", 
    bestFor: "Premier Kinetic Captions, Sound Effects & B-Roll Overlays", 
    highlight: "Produces hyper-engaging short-form videos with custom caption animations, auto-emojis, magic b-rolls, and cinematic sound effects." 
  },
  { 
    name: "Klap AI", 
    slug: "klap-ai",
    score: "9.6", 
    price: "From $29/mo", 
    bestFor: "Fastest Autonomous One-Click URL-to-Shorts Pipeline", 
    highlight: "Paste any YouTube link and receive ready-to-publish TikToks and Reels with face detection and smart cropping in under 3 minutes." 
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

export default function AiShortsRepurposingGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-rose-500/20 shadow-xl shadow-rose-500/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-600/20 via-slate-900/60 to-slate-950/90 pointer-events-none" />
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs md:text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-md">
            <Flame className="w-4 h-4" />
            2026 Viral Hook Detection & Repurposing Benchmark
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Next-Gen AI Shorts & <br className="hidden md:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-amber-300 to-orange-400">
              Reels Repurposers
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-8">
            The technical guide to turning long-form podcasts, webinars, and YouTube videos into high-converting 9:16 vertical clips with dynamic kinetic captions and speaker tracking.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl pt-6 border-t border-slate-800">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-white">10x</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Content Output Velocity</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-rose-400">85%+</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Hook Score Retention</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-amber-400">9:16</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Active Speaker Tracking</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-orange-400">100%</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Autonomous Clip Assembly</span>
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
          <h2 className="text-sm font-extrabold text-rose-500 uppercase tracking-[0.25em] mb-3">Definitive Overview</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">The Death of Manual Video Scrubbing & Trimming</h3>
        </div>

        <div className="space-y-10 md:space-y-12">
          {/* Bento Card 1 */}
          <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/30 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                <Scissors className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-on-surface tracking-tight">Semantic Viral Hook Detection vs. Random Timestamp Slicing</h4>
              <p className={figtreeBodyClass}>
                Manual video editing requires a creator to scrub through two hours of raw footage, pinpointing where a joke landed or where an insight peaked. <strong>Next-generation AI repurposers employ neural transcript comprehension.</strong> Large Language Models inspect the transcribed text, measuring sentiment escalation, punchline closure, and opening curiosity hooks.
              </p>
              <p className={figtreeDarkBodyClass}>
                Instead of mindless 30-second intervals, the software extracts self-contained stories with a compelling 3-second hook, structured body, and satisfying conclusion rated on a 1-to-99 virality score.
              </p>
            </div>
            <div className="md:w-1/2 w-full bg-slate-950 p-6 rounded-2xl border border-slate-800 text-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span>AI Transcript Analysis</span>
                <span className="text-rose-400">Opus Clip Neural Pipeline</span>
              </div>
              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Hook Sentence Identified</span>
                  <span className="text-amber-400 font-bold">00:14:22 - 00:14:26</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Curiosity Ratio Score</span>
                  <span className="text-rose-400 font-bold">96 / 100 (Viral)</span>
                </div>
                <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 flex justify-between items-center">
                  <span className="text-slate-300">Auto-Generated Output</span>
                  <span className="text-white font-bold">42s Vertical 9:16 Clip</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-rose-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Ready-to-publish TikTok with kinetic animated subtitles</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2 */}
          <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/30 flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Subtitles className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-on-surface tracking-tight">Active Speaker Re-Framing & Kinetic Subtitles</h4>
              <p className={figtreeBodyClass}>
                Cropping a 16:9 landscape interview into a 9:16 vertical smartphone frame used to cause severe headaches—if the host and guest sat at opposite sides, someone was always cut off. Modern AI vision tracks facial landmarks at 60 FPS, automatically switching cameras or stacking speakers in a clean dual-box layout.
              </p>
              <p className={figtreeDarkBodyClass}>
                Simultaneously, the engine syncs word-by-word kinetic captions with automatic emoji reactions, keyword color highlights, and contextual B-roll popups, quadrupling viewer retention during silent mobile scrolling.
              </p>
            </div>
            <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">Manual Premiere Workflow</span>
                <span className="text-2xl font-extrabold text-red-300">4 Hours / Short</span>
                <p className="text-xs text-slate-400 mt-2">Manual keyframe panning, typing captions, aligning timestamps, and cutting dead pauses by hand.</p>
              </div>
              <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">2026 AI Clip Repurposer</span>
                <span className="text-2xl font-extrabold text-rose-300">30 Seconds / Short</span>
                <p className="text-xs text-slate-400 mt-2">Autonomous face tracking, auto-animated captions, auto-B-roll, and bulk export directly to social APIs.</p>
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
          <h2 className="text-xs font-bold tracking-[0.2em] text-rose-400 uppercase mb-2">Social Production Economics</h2>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight">Freelance Video Editor vs. AI Repurposing Stack</h3>
          <p className="text-slate-400 mt-3 text-sm md:text-base">
            Compare monthly expenses and production turnaround for generating 30 high-converting vertical shorts every month.
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
              Freelance Video Editor ($35/short)
            </button>
            <button
              onClick={() => setRoiMode("ai")}
              className={`px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
                roiMode === "ai" 
                  ? "bg-rose-600 text-white shadow-lg shadow-rose-500/25" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              2026 AI Repurposer ($29/mo)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Monthly Production Cost</span>
              <div className="text-3xl md:text-4xl font-black text-white mt-2">
                {roiMode === "traditional" ? "$1,050" : "$29"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "30 shorts billed at standard freelance editing rates ($35-$50 per vertical video)."
                : "A single monthly creator subscription providing 200+ processing minutes with unlimited exports."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Turnaround Time (30 Shorts)</span>
              <div className="text-3xl md:text-4xl font-black text-rose-400 mt-2">
                {roiMode === "traditional" ? "10 Days" : "15 Minutes"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "Waiting on human editor revision queues, Dropbox link sharing, and subtitle corrections."
                : "Drop the YouTube URL and download all 30 ranked clips before your coffee finishes brewing."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Virality Intelligence</span>
              <div className="text-3xl md:text-4xl font-black text-amber-400 mt-2">
                {roiMode === "traditional" ? "Subjective" : "Data-Driven"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "Dependent on the personal intuition and mood of a freelance contractor."
                : "Scored against algorithmic engagement patterns trained on over 10 million trending TikToks."}
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
          <h2 className="text-sm font-extrabold text-rose-500 uppercase tracking-[0.25em] mb-3">Industry Solutions</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Automated Repurposing Across Content Categories</h3>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {useCases.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-rose-600 text-white shadow-md shadow-rose-500/20"
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
                  <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-500">
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
          <h2 className="text-sm font-extrabold text-rose-500 uppercase tracking-[0.25em] mb-3">Architectural Comparison</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Shorts Repurposer Capabilities Matrix</h3>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-outline-variant/30 bg-surface-container-low">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-container border-b border-outline-variant/40 text-on-surface text-xs uppercase tracking-wider font-extrabold">
              <tr>
                <th className="p-4 md:p-5">Platform</th>
                <th className="p-4 md:p-5">Virality Scoring</th>
                <th className="p-4 md:p-5">Speaker Re-Framing</th>
                <th className="p-4 md:p-5">B-Roll & Captions</th>
                <th className="p-4 md:p-5">Primary Strength</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 text-on-surface-variant font-medium">
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  Opus Clip
                </td>
                <td className="p-4 md:p-5 text-rose-500 font-bold">Predictive 1-99 Score</td>
                <td className="p-4 md:p-5 text-rose-500 font-bold">Multi-Speaker Split</td>
                <td className="p-4 md:p-5">Dynamic Hormozi Captions</td>
                <td className="p-4 md:p-5">Best overall for long podcasts & interviews</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  Munch AI
                </td>
                <td className="p-4 md:p-5">Social Trend Aligned</td>
                <td className="p-4 md:p-5">Smart Centering</td>
                <td className="p-4 md:p-5">Custom Brand Stacks</td>
                <td className="p-4 md:p-5">Cross-platform trending topic analysis</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                  Submagic
                </td>
                <td className="p-4 md:p-5">Timeline Highlight</td>
                <td className="p-4 md:p-5">Auto-Zoom & Cut</td>
                <td className="p-4 md:p-5 text-rose-500 font-bold">Cinematic SFX & B-Roll</td>
                <td className="p-4 md:p-5">Ultra-engaging captions and sound design</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  Klap AI
                </td>
                <td className="p-4 md:p-5">Auto-Curated</td>
                <td className="p-4 md:p-5">Face Tracking 9:16</td>
                <td className="p-4 md:p-5">Automated Presets</td>
                <td className="p-4 md:p-5">Fastest one-click YouTube URL generation</td>
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
          <h2 className="text-sm font-extrabold text-rose-500 uppercase tracking-[0.25em] mb-3">Buyer's Checklist</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">4 Must-Haves in an AI Shorts Repurposer</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">1</div>
            <h4 className="text-xl font-bold text-on-surface">Data-Driven Virality Scoring</h4>
            <p className={figtreeBodyClass}>
              Avoid tools that just cut at fixed intervals. Quality platforms inspect transcript hooks and score clips quantitatively, saving you from watching dozens of dull, low-converting video fragments.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">2</div>
            <h4 className="text-xl font-bold text-on-surface">Multi-Guest Speaker Re-Framing</h4>
            <p className={figtreeBodyClass}>
              If your video features two or three people, the software must provide intelligent dynamic camera switching or vertical split-screen framing so no speaker is ever cut out of the frame.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold">3</div>
            <h4 className="text-xl font-bold text-on-surface">Custom Typography & Brand Kit Support</h4>
            <p className={figtreeBodyClass}>
              Generic default subtitles look amateurish. Top suites allow you to upload proprietary brand fonts, specify primary/secondary highlight colors, and insert your logo watermark automatically.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center font-bold">4</div>
            <h4 className="text-xl font-bold text-on-surface">Automated B-Roll & Sound Effects</h4>
            <p className={figtreeBodyClass}>
              Talking-head videos suffer from retention drop-offs after 5 seconds. Premier tools automatically overlay context-aware B-roll footage and subtle sound design (swooshes, pops) to reset viewer attention spans.
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
          <h2 className="text-sm font-extrabold text-rose-500 uppercase tracking-[0.25em] mb-3">Top Directory Picks</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">The Gold Standard AI Repurposing Engines</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alternatives.map((tool) => (
            <div 
              key={tool.slug}
              className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between hover:border-rose-500/40 transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h4 className="text-2xl font-black text-on-surface">{tool.name}</h4>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-sm">
                    ★ {tool.score}
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-400 mb-2">{tool.price}</div>
                <div className="text-xs font-semibold text-rose-500 mb-4">{tool.bestFor}</div>
                <p className={figtreeBodyClass}>
                  {tool.highlight}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                <Link 
                  href={`/tool/${tool.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-rose-500 hover:text-rose-400 transition-colors"
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
          <h2 className="text-sm font-extrabold text-rose-500 uppercase tracking-[0.25em] mb-3">Technical Lexicon</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Short-Form Video & Repurposing Vocabulary</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {glossaryTerms.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2"
            >
              <h4 className="text-base font-bold text-on-surface flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
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
          <h3 className="text-sm font-extrabold text-rose-500 uppercase tracking-[0.25em] mb-3">Frequently Asked Questions</h3>
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
                className="w-full text-left p-6 font-bold text-on-surface flex justify-between items-center gap-4 hover:text-rose-500 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-rose-500" : ""}`} />
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
