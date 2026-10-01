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
  Video, 
  Subtitles, 
  Globe, 
  Type, 
  Target, 
  TrendingUp, 
  Users, 
  Compass, 
  Layers, 
  Search, 
  Check,
  Eye
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI subtitle and video caption generator and how does it boost watch time?",
    answer: "An AI subtitle and video caption generator automatically transcribes spoken dialogue in video files, synchronizes word-by-word timestamps, and renders dynamic, animated on-screen captions (e.g., Alex Hormozi or MrBeast style). Because over 80% of mobile users browse TikTok, Instagram Reels, and LinkedIn with sound muted, dynamic visual subtitles increase average video watch time and completion rates by 40% to 70%."
  },
  {
    question: "What are the best AI multilingual subtitle and caption tools in 2026?",
    answer: "Submagic is the viral video standard for auto-generated kinetic captions, animated emojis, sound effects, and auto-b-roll insertions. Captions.ai delivers an end-to-end studio with AI eye contact correction, 3D animated text styles, and multilingual voice dubbing. Opus Clip repurposes long-form videos into viral vertical clips with virality scores and auto-captions. VEED.io offers a comprehensive cloud video editor with 98.5% accurate auto-subtitles and SRT export."
  },
  {
    question: "What is the difference between burned-in (open) captions and closed captions (SRT/VTT)?",
    answer: "Burned-in (open) captions are rendered directly into the video pixels themselves. They cannot be turned off by the viewer, ensuring animated styling, custom fonts, brand colors, and emojis render identically across all devices and social feeds. Closed captions (like .SRT or .VTT files) are separate text files uploaded to platforms like YouTube or Netflix, allowing the viewer to toggle captions on or off and choose their preferred language."
  },
  {
    question: "Can AI caption generators translate videos into foreign languages with synchronized timing?",
    answer: "Yes. Leading subtitle tools transcribe the original spoken language (e.g. English) and use neural machine translation models to translate the text into Spanish, Japanese, German, or 40+ other languages. The AI automatically recalibrates word durations and line lengths, preventing rapid text flickering while maintaining natural reading speed."
  }
];

const useCases = [
  {
    title: "Viral TikTok, Reels & Shorts Kinetic Captions",
    badge: "Social Virality",
    desc: "Hook mobile viewers instantly with word-by-word color highlights, dynamic emoji triggers, and kinetic typography that keeps retention curves high.",
    benefits: [
      "Applies trending Hormozi-style animated text styling with a single click",
      "Auto-detects high-emotion keywords and inserts relevant animated emojis",
      "Increases 3-second hook retention and full video completion rates by up to 65%"
    ],
    highlight: "Boosted TikTok engagement by 58% across 200+ creator accounts"
  },
  {
    title: "Global Video Localization & Translated Subtitles",
    badge: "International Reach",
    desc: "Expand English-language corporate videos, training materials, and product ads into 40+ global languages with synchronized subtitle tracks.",
    benefits: [
      "Generates multi-language .SRT and .VTT files for YouTube and enterprise video portals",
      "Adapts idiom phrasing and cultural references rather than literal word-for-word translation",
      "Allows international audiences to watch content with native-language closed captions"
    ],
    highlight: "Unlocked 4.2x organic international viewership across non-English speaking markets"
  },
  {
    title: "Accessibility & WCAG Compliance for EdTech & Corporate",
    badge: "Regulatory Compliance",
    desc: "Ensure enterprise video libraries, university lectures, and public sector webinars comply with ADA and WCAG 2.1 accessibility standards.",
    benefits: [
      "Delivers 99%+ verbatim transcription for deaf and hard-of-hearing viewers",
      "Ensures optimal color contrast ratios between caption background and video frames",
      "Provides downloadable plain-text transcripts for screen readers and LMS portals"
    ],
    highlight: "Achieved 100% WCAG accessibility compliance across 2,500 course video modules"
  }
];

const glossaryTerms = [
  {
    term: "Kinetic Video Captions",
    definition: "Dynamic, word-by-word animated subtitles that pop, bounce, and change color in sync with spoken syllables to maximize viewer visual focus."
  },
  {
    term: "Burned-In (Open) Captions",
    definition: "Subtitles permanently encoded into the video frame pixels, guaranteeing consistent typography and emoji styling across all mobile social apps."
  },
  {
    term: "SRT & VTT Files",
    definition: "Plain-text timecoded subtitle formats (SubRip and WebVTT) that define sequential start and end times for lines of dialogue."
  },
  {
    term: "Sound-Off Viewing Phenomenon",
    definition: "The mobile user behavioral pattern where 80%+ of social video feeds are consumed on silent, making captions essential for message transmission."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiMultilingualSubtitlesCaptionsGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-center space-y-6 pt-6 md:pt-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Category Deep-Dive: AI Multilingual Subtitles &amp; Captions</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
          Skyrocket Video Retention &amp; Global Reach With <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500">AI Subtitle Generators</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          More than 80% of social media video is consumed on mute. Discover how AI caption generators auto-sync kinetic viral captions, insert animated emojis, translate speech into 40+ languages, and maximize video completion rates with zero manual typing.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/25 transition-all duration-200"
          >
            <span>Explore Caption AI Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200"
          >
            <span>Caption Architecture</span>
          </a>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Captioning Shift: From Accessibility To Viral Retention
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How subtitles evolved from dry regulatory text files into the primary driver of modern social video engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Conquering The Mute Feed
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Users scrolling on public transit, in office lobbies, or late in bed rarely turn sound on. Without dynamic captions, uncaptioned videos lose 70% of viewers within the first 3 seconds. AI subtitles capture silent attention instantaneously.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Kinetic Eye-Tracking Retention
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Modern viral short-form videos use rapid word-by-word highlights and colorful typography to pull the viewer&apos;s eye across the screen. What once required hours of Adobe After Effects keyframing is now applied in 1 click.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-cyan-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Frictionless Multi-Language Reach
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Translating video content historically required expensive foreign localization agencies. AI subtitle generators automatically translate and re-time subtitle lines into 40+ languages, enabling instant global content distribution.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE IMPACT / ROI CALCULATOR */}
      <section className="p-6 md:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Audience Growth Modeler</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Video Completion Rate &amp; Editing Savings
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Calculate the retention uplift and video editing hours saved per week by automating kinetic video captions and subtitles.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex p-1 rounded-xl bg-slate-800 border border-slate-700">
              <button
                onClick={() => setCalculatorMode("traditional")}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  calculatorMode === "traditional"
                    ? "bg-slate-700 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Manual Keyframe Captioning
              </button>
              <button
                onClick={() => setCalculatorMode("ai")}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  calculatorMode === "ai"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                AI Kinetic Subtitle Generator
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Timer className="w-5 h-5 text-emerald-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "60–90 min" : "45 seconds"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Captioning Time Per Reel
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Manual typing & timing keyframes" : "Auto-synced with emojis"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Eye className="w-5 h-5 text-teal-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "28.4%" : "64.8%"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Average Watch Time / Completion
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Uncaptioned sound-off dropoff" : "+36.4% viewer retention"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <DollarSign className="w-5 h-5 text-emerald-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "$1,200/mo" : "$20/mo"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Video Editor Contractor Cost
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Outsourced freelance subtitle fee" : "SaaS subscription rate"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <TrendingUp className="w-5 h-5 text-cyan-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-emerald-400">
                {calculatorMode === "traditional" ? "Baseline" : "18.5x Output"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Content Velocity Multiplier
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "1-2 reels per week limit" : "Daily multi-channel publishing"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE ARCHITECTURE */}
      <section id="architecture" className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Deep Dive</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Stage Architecture of AI Video Caption Generators
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How audio waveforms are transformed into frame-synchronized kinetic video subtitles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Phoneme Alignment
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Whisper-class ASR extracts dialogue and generates millisecond-accurate start and end timestamps for every individual word.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Semantic Pacing
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Breaks long spoken sentences into digestible 2-to-4 word visual chunks, preventing screen crowding and optimizing reading cadence.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Kinetic Styling &amp; Emojis
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Applies animated bounce transitions, keyword color highlights, and auto-detects concepts (e.g. &apos;money&apos; &rarr; 💰) to trigger emojis.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Hardware Video Burn-In
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              GPU shaders render captions directly onto video frames or exports compliant .SRT and .VTT subtitle files with perfect sync.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Top 3 AI Subtitle &amp; Caption Generators Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Benchmarking leading platforms across viral caption templates, translation accuracy, and social video workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-emerald-500/30 dark:border-emerald-500/20 shadow-md space-y-6 relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Crown className="w-3.5 h-3.5" />
              <span>Viral Social Media Standard</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Submagic</h3>
              <p className="text-xs text-slate-500 mt-1">Hormozi captions, animated emojis &amp; auto b-roll clips</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Popular creator presets (Hormozi, MrBeast, Iman Gadzhi styling)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Auto-generates contextual sound effects (whoosh, pop, ding) and emojis</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Inserts AI stock b-roll footage automatically over speech</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Short-form video creators, TikTokers, and social media agencies</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Best Multi-Feature Mobile/Web Studio</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Captions.ai</h3>
              <p className="text-xs text-slate-500 mt-1">AI Eye Contact, 3D text styling &amp; dubbing</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>AI Eye Contact correction keeps your gaze focused directly on camera</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>Studio sound voice enhancement with automatic background noise clean</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>Multilingual AI voice dubbing paired with synchronized subtitles</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Mobile creators wanting all-in-one camera recording and captioning</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              <Globe className="w-3.5 h-3.5" />
              <span>Best Long-Form Video Clipper</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Opus Clip</h3>
              <p className="text-xs text-slate-500 mt-1">Repurposes long podcasts into virality-scored short clips</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>Automatically finds the most viral moments from 1-hour YouTube videos</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>Auto-frames active speaker faces into vertical 9:16 aspect ratios</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>Auto-generates animated captions with customizable font styles</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Podcasters and YouTube creators converting long videos to shorts</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TABBED USE CASES */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Captions Driving Engagement Across Modern Video Formats
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            See how social creators, global enterprises, and educators leverage automated video subtitles.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {useCases.map((uc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveUseCase(idx)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeUseCase === idx
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {uc.badge}
            </button>
          ))}
        </div>

        <div className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              {useCases[activeUseCase].title}
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {useCases[activeUseCase].desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {useCases[activeUseCase].benefits.map((benefit, i) => (
              <div key={i} className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs md:text-sm text-emerald-700 dark:text-emerald-300 font-medium">
            <strong>Demonstrated Metric: </strong> {useCases[activeUseCase].highlight}
          </div>
        </div>
      </section>

      {/* 7. IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Step Production Workflow for Viral Captions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How content creators import raw clips, style dynamic text, and publish multi-platform videos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Step 01</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Video Upload</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Upload raw MP4/MOV vertical footage. The AI transcribes spoken dialogue and aligns words to exact video frames.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Step 02</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Style Template Selection</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Choose your caption archetype: Hormozi yellow, Clean Minimalist, High-Energy Neon, or Comic Pop with custom brand fonts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Step 03</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">B-Roll &amp; Emojis</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Enable auto-emojis and sound effects. Review and tweak any highlighted keywords or insert cutaway stock b-roll clips.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Step 04</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">4K Export &amp; SRT</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Export in 1080p/4K 60FPS with burned-in subtitles, or download sidecar .SRT files for native YouTube and LinkedIn uploads.
            </p>
          </div>
        </div>
      </section>

      {/* 8. COMPARISON BRIDGE TABLE */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Feature Comparison: Top AI Subtitle Generators
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Detailed breakdown of animated text styles, auto-emojis, translation support, and pricing plans.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                <th className="p-4">Platform</th>
                <th className="p-4">Kinetic Styling</th>
                <th className="p-4">Auto-Emojis &amp; SFX</th>
                <th className="p-4">Translation</th>
                <th className="p-4">Auto B-Roll</th>
                <th className="p-4">Starting Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Submagic</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (50+ presets)</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (Automated)</td>
                <td className="p-4">50+ Languages</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (Storyblocks sync)</td>
                <td className="p-4">$16/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Captions.ai</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (3D text)</td>
                <td className="p-4 font-semibold text-teal-600 dark:text-teal-400">Yes</td>
                <td className="p-4">Voice dubbing + text</td>
                <td className="p-4">Manual selection</td>
                <td className="p-4">$10/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Opus Clip</td>
                <td className="p-4 font-semibold text-cyan-600 dark:text-cyan-400">Yes (Auto-fit)</td>
                <td className="p-4 font-semibold text-cyan-600 dark:text-cyan-400">Yes</td>
                <td className="p-4">20+ Languages</td>
                <td className="p-4">Auto face crop</td>
                <td className="p-4">$9/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">VEED.io</td>
                <td className="p-4">Clean &amp; custom</td>
                <td className="p-4 text-slate-400">Manual stickers</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">100+ Languages</td>
                <td className="p-4">Stock library</td>
                <td className="p-4">$18/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. GLOSSARY */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Domain Terminology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Essential Video Subtitling &amp; Captioning Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Key vocabulary defining modern video typography, subtitle formats, and engagement optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {glossaryTerms.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {item.term}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ ACCORDION & CONVERSION CTA */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Common questions regarding burned-in subtitles, multi-language exports, and social video engagement.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                >
                  <span className="font-semibold text-slate-900 dark:text-white text-sm md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-emerald-500" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to Maximize Watch Time On Every Video You Publish?
            </h2>
            <p className="text-emerald-100 text-sm md:text-base">
              Browse our curated directory of top-rated AI caption and subtitle generators, compare kinetic templates, and scale your audience today.
            </p>
            <div className="pt-2">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-emerald-700 hover:bg-slate-100 shadow-lg transition-all duration-200"
              >
                <span>Browse All Caption AI Tools</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
