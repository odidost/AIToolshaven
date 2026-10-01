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
  Headphones, 
  Radio, 
  Scissors, 
  Share2, 
  Target, 
  TrendingUp, 
  Users, 
  Compass, 
  Layers, 
  Search, 
  Check,
  FileText
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI podcast transcriber and how does it generate show notes?",
    answer: "An AI podcast transcriber is a creator workflow engine that ingests raw podcast audio or video recordings and converts speech into clean, speaker-labeled text. Leveraging multimodal LLMs, it automatically extracts timecoded episode chapters, drafts engaging SEO-optimized show notes, curates viral pull quotes, and generates promotional social media copy for LinkedIn, X (Twitter), and email newsletters."
  },
  {
    question: "What are the best AI podcast and interview transcription tools in 2026?",
    answer: "Descript is the industry pioneer for text-based audio/video editing, AI voice cloning, and filler word elimination. Castmagic is the premier content repurposing engine, turning raw audio into 30+ promotional assets (newsletters, show notes, quote carousels). Riverside.fm combines lossless 4K local recording with built-in AI transcription and magic clip generation. Podcastle provides an all-in-one studio with remote recording, AI audio polish, and instant transcripts."
  },
  {
    question: "What is text-based audio editing and why is it faster than waveform editing?",
    answer: "Text-based editing links the transcript directly to the underlying audio and video timeline. Rather than manually hunting for silent gaps and misspoken sentences on complex multitrack audio waveforms in Audacity or Pro Tools, you simply highlight and delete the text like editing a Google Doc. The software instantly splices out the matching audio frames seamlessly."
  },
  {
    question: "Can AI podcast transcribers identify and label different interview guests?",
    answer: "Yes. Using advanced acoustic speaker diarization, platforms recognize when the podcast host stops speaking and a guest begins. Modern platforms even allow creators to pre-assign voice profiles, automatically labeling 'Host' vs 'Guest Name' throughout the entire 90-minute episode without manual line-by-line attribution."
  }
];

const useCases = [
  {
    title: "Instant Episode Show Notes & Timecoded Chapters",
    badge: "Publishing Automation",
    desc: "Transform 60-minute long-form interviews into structured, SEO-friendly episode descriptions with clickable Spotify and Apple Podcasts timestamps.",
    benefits: [
      "Generates episode executive summaries, guest bio blurbs, and key discussion takeaways",
      "Calculates accurate chapter markers: '04:12 - Scaling from Seed to Series A'",
      "Extracts all referenced book recommendations, SaaS tools, and guest hyperlinks"
    ],
    highlight: "Reduced post-production show notes drafting time from 2 hours to 90 seconds"
  },
  {
    title: "Multi-Platform Social Content Repurposing",
    badge: "Content Multiplication",
    desc: "Extract viral insights from podcast transcripts to create weekly newsletters, LinkedIn thought leadership carousels, and viral Twitter threads.",
    benefits: [
      "Turns a single episode into 15+ ready-to-publish social media copy variants",
      "Identifies the top 3 most engaging soundbites for short-form video clipping",
      "Adapts transcript tone from casual conversational speech to polished editorial prose"
    ],
    highlight: "10x'd social media reach for independent podcasters without hiring extra ghostwriters"
  },
  {
    title: "Verbatim Journalistic Interview Archives",
    badge: "Editorial Accuracy",
    desc: "Provide investigative journalists and media researchers with searchable, quote-verified transcripts of long investigative interview recordings.",
    benefits: [
      "Enables instant keyword searching across dozens of taped investigative interviews",
      "Exports time-aligned pull quotes for legal verification and fact-checking",
      "Syncs directly with local audio so reporters can re-listen to critical quotes in 1 click"
    ],
    highlight: "Eliminated misattribution risk across 500+ newsroom interview hours"
  }
];

const glossaryTerms = [
  {
    term: "Text-Based Audio Editing",
    definition: "An editing paradigm where altering the transcribed text document automatically cuts and restructures the corresponding audio/video waveform."
  },
  {
    term: "Timecoded Chapter Markers",
    definition: "Standardized timestamp headings (HH:MM:SS) recognized by YouTube, Apple Podcasts, and Spotify for interactive listener navigation."
  },
  {
    term: "Transcript Repurposing Prompt",
    definition: "Structured LLM instructions that ingest raw interview transcripts to generate derivative assets: newsletters, quote cards, and blogs."
  },
  {
    term: "Studio Sound Regeneration",
    definition: "Neural audio enhancement that removes background room echo, hiss, and hum while synthesizing studio-quality vocal presence."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiPodcastInterviewTranscribersGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-center space-y-6 pt-6 md:pt-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Category Deep-Dive: AI Podcast &amp; Interview Transcribers</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
          Turn Raw Podcast Recordings Into Viral Content With <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-500 to-red-500">AI Podcast Transcribers</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Stop spending entire weekends editing audio waveforms and writing show notes. Discover how AI podcast transcription tools edit audio via text, generate chapters, auto-draft newsletters, and turn 1 episode into 20+ viral assets instantly.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-500/25 transition-all duration-200"
          >
            <span>Explore Podcast AI Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200"
          >
            <span>Podcast Workflow Architecture</span>
          </a>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Podcasting Shift: From Waveform Slicing to Prompt Publishing
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How modern creators produce 10x more content by treating spoken transcripts as the master creative asset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-orange-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Edit Audio Like a Text Document
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Traditional audio editing in Audacity or Logic requires squinting at sound waveforms to identify where a sentence went off the rails. Modern podcast AI lets you backspace words in text to cut audio seamlessly, saving 80% of editing time.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-amber-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Autonomous Show Notes &amp; Timestamps
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Listening to a 75-minute episode a second time just to write down timestamps and summary bullets is grueling. AI transcribers listen once, summarize the conversational arc, and output formatted Markdown ready for Apple Podcasts and Spotify.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-red-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Instant Social Content Multiplication
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Top podcasters don&apos;t just post an audio link—they publish newsletters, LinkedIn thought pieces, and TikTok reels. AI transcribers extract the most provocative quote moments, drafting full multi-channel distribution campaigns in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE IMPACT / ROI CALCULATOR */}
      <section className="p-6 md:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-red-500/10 pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-300 border border-orange-500/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Podcast Studio Modeler</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Post-Production Time &amp; Cost Reclaimed
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Calculate the production hours and editing contractor costs saved per episode by automating transcription and show note generation.
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
                Manual Podcast Production
              </button>
              <button
                onClick={() => setCalculatorMode("ai")}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  calculatorMode === "ai"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                AI Podcast Transcriber
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Timer className="w-5 h-5 text-orange-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "4.5 hours" : "30 minutes"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Post-Production Per Episode
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Editing waveforms + writing notes" : "Text edit + AI show notes"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Share2 className="w-5 h-5 text-amber-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "1-2 posts" : "18+ assets"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Promotional Content Output
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Bare link tweet" : "Newsletters, threads, carousels"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <DollarSign className="w-5 h-5 text-orange-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "$250" : "$19"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Cost Per Published Episode
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Freelance editor & copywriter" : "SaaS subscription cost"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <TrendingUp className="w-5 h-5 text-red-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-orange-400">
                {calculatorMode === "traditional" ? "Baseline" : "13.1x Value"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Creator ROI Multiplier
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Exhausting weekly cadence" : "Sustainable solo creator scale"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE ARCHITECTURE */}
      <section id="architecture" className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Deep Dive</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Stage Architecture of AI Podcast Transcribers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How raw podcast recordings are transcribed, synced to video, and synthesized into multi-channel marketing campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Dual-Track Ingestion
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Ingests separate uncompressed host and guest audio tracks, applying neural Studio Sound leveling to eliminate room echo.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Biometric Diarization
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Attributes spoken words to Host vs Guest with millisecond precision, highlighting crosstalk and identifying speaker handoffs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Text-To-Waveform Sync
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Maps every text character to corresponding audio samples, allowing creators to delete filler words (&apos;um&apos;, &apos;uh&apos;) directly in the script.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Multimodal Synthesis
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              LLMs extract timestamps, structure SEO show notes, generate newsletter drafts, and select high-virality soundbites for social reels.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Top 3 AI Podcast Transcription Tools Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Evaluating leading platforms on text editing flexibility, content repurposing capabilities, and studio audio tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-orange-500/30 dark:border-orange-500/20 shadow-md space-y-6 relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <Crown className="w-3.5 h-3.5" />
              <span>Industry Standard Audio Editor</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Descript</h3>
              <p className="text-xs text-slate-500 mt-1">Text-based audio/video editing, AI voice cloning &amp; Studio Sound</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Delete filler words and edit multi-track video like a text document</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Studio Sound regenerates phone mic audio to sound like a Shure SM7B</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Overdub AI voice cloning fixes mispronounced words without re-recording</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Podcasters, video creators, and narrative interview producers</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Best Content Repurposing Engine</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Castmagic</h3>
              <p className="text-xs text-slate-500 mt-1">Turns raw audio into 30+ ready-to-publish social marketing assets</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Auto-drafts show notes, timestamps, newsletters, and LinkedIn posts</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Custom Community Prompts for specialized niche podcast formats</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Magic Chat lets you interview your own podcast transcript directly</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">B2B podcasters, media agencies, and solo content creators</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400">
              <Headphones className="w-3.5 h-3.5" />
              <span>Best Recording Studio &amp; Clips</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Riverside.fm</h3>
              <p className="text-xs text-slate-500 mt-1">Lossless local 4K video recording with integrated AI transcription</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Records local uncompressed WAV audio on each guest&apos;s machine</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Magic Clips AI automatically generates vertical reels with burned captions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Text-based video editing with automated filler word removal</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Remote interview shows, YouTube video podcasts, and broadcast studios</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TABBED USE CASES */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Unlocking Maximum Value From Every Spoken Word
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            See how podcasters, media agencies, and journalists utilize AI transcription engines.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {useCases.map((uc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveUseCase(idx)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeUseCase === idx
                  ? "bg-orange-600 text-white shadow-md shadow-orange-500/20"
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
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs md:text-sm text-orange-700 dark:text-orange-300 font-medium">
            <strong>Demonstrated Metric: </strong> {useCases[activeUseCase].highlight}
          </div>
        </div>
      </section>

      {/* 7. IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Step Production Workflow for Modern Podcasters
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How top creators record, transcribe, edit, and repurpose high-impact podcast episodes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">Step 01</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Lossless Recording</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Record separate local tracks via Riverside or SquadCast to eliminate internet audio dropouts and glitches.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">Step 02</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Text-Based Editing</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Import audio into Descript. Click &apos;Remove Filler Words&apos; and delete awkward tangents directly in the text editor.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">Step 03</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Show Note Generation</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Send the clean transcript to Castmagic to produce clickable Spotify chapters, guest bios, and SEO-optimized summaries.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">Step 04</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Multi-Platform Blast</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Deploy AI-selected vertical clips to TikTok and YouTube Shorts while scheduling the episode newsletter on Substack.
            </p>
          </div>
        </div>
      </section>

      {/* 8. COMPARISON BRIDGE TABLE */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Feature Comparison: AI Podcast Transcribers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Detailed breakdown of text-based editing, show note generation, audio regeneration, and pricing tiers.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                <th className="p-4">Platform</th>
                <th className="p-4">Text-Based Editing</th>
                <th className="p-4">Show Notes Generator</th>
                <th className="p-4">Studio Sound AI</th>
                <th className="p-4">Magic Social Clips</th>
                <th className="p-4">Starting Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Descript</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Yes (Pioneer)</td>
                <td className="p-4">AI Actions &amp; summary</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Industry leading</td>
                <td className="p-4">Template-driven</td>
                <td className="p-4">$12/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Castmagic</td>
                <td className="p-4 text-slate-400">Repurposing only</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Best-in-class (30+ assets)</td>
                <td className="p-4 text-slate-400">N/A</td>
                <td className="p-4">Quote cards &amp; scripts</td>
                <td className="p-4">$23/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Riverside.fm</td>
                <td className="p-4 font-semibold text-orange-600 dark:text-orange-400">Yes (Built-in)</td>
                <td className="p-4">Auto-generated</td>
                <td className="p-4">Magic Audio clean</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">Auto Magic Clips</td>
                <td className="p-4">$15/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Podcastle</td>
                <td className="p-4 font-semibold text-orange-600 dark:text-orange-400">Yes</td>
                <td className="p-4">Basic summaries</td>
                <td className="p-4">Magic Dust AI</td>
                <td className="p-4">Basic export</td>
                <td className="p-4">$11.99/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. GLOSSARY */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Domain Terminology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Essential Podcast Transcription Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Key terminology defining the intersection of podcast engineering, audio processing, and content marketing.
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
            Everything you need to know about text-based editing, multi-track diarization, and content repurposing.
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
                      isOpen ? "rotate-180 text-orange-500" : ""
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
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to Produce 10x More Content From Every Episode?
            </h2>
            <p className="text-orange-100 text-sm md:text-base">
              Explore our curated directory of top-rated AI podcast transcription tools, compare text-based editing suites, and supercharge your show today.
            </p>
            <div className="pt-2">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-orange-700 hover:bg-slate-100 shadow-lg transition-all duration-200"
              >
                <span>Browse All Podcast AI Tools</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
