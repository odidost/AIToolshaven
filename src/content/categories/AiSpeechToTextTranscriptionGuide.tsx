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
  Mic, 
  FileText, 
  AudioWaveform, 
  Globe, 
  Target, 
  TrendingUp, 
  Users, 
  Compass, 
  Layers, 
  Search, 
  Check,
  ShieldCheck,
  FileCode
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI speech-to-text transcriber and how accurate is it in 2026?",
    answer: "An AI speech-to-text transcriber is an automatic speech recognition (ASR) system powered by deep neural networks (like OpenAI Whisper, Deepgram Nova-2, and Conformer architectures). In 2026, leading models achieve Word Error Rates (WER) below 2–3% on clean English audio—effectively matching or outperforming human stenographers while delivering transcriptions in seconds rather than days."
  },
  {
    question: "What are the best AI speech-to-text transcription engines in 2026?",
    answer: "Deepgram Nova-2 is the fastest and most cost-effective enterprise ASR API, transcribing 1 hour of audio in under 12 seconds with industry-leading punctuation. OpenAI Whisper v3 provides exceptional multi-language robustness and open-source accessibility. Sonix offers the top web-based transcription editor with automated translation and multi-speaker diarization. Rev AI combines frontier automated speech recognition with optional human-in-the-loop review."
  },
  {
    question: "What is the difference between real-time streaming and batch transcription?",
    answer: "Batch transcription processes pre-recorded audio or video files (e.g., MP3, WAV, MP4) with maximum contextual accuracy, using bi-directional acoustic models that analyze the entire sentence structure before outputting text. Real-time streaming transcription processes incoming microphone audio chunk-by-chunk with sub-second latency (under 300ms), making it ideal for live event captions, voice bots, and real-time translation."
  },
  {
    question: "Can AI speech-to-text engines handle heavy regional accents and background noise?",
    answer: "Modern frontier models are trained on hundreds of thousands of hours of diverse global audio. They utilize integrated neural noise-filtering algorithms to suppress background acoustic clutter (air conditioners, traffic, room echo) and generalize across diverse global English dialects (e.g. Scottish, Indian, Australian, Southern US) without degradation in comprehension."
  }
];

const useCases = [
  {
    title: "Legal & Courtroom Deposition Transcription",
    badge: "High Precision",
    desc: "Convert multi-hour legal depositions, witness testimonies, and arbitration hearings into verbatim transcripts with timestamped audit trails.",
    benefits: [
      "Achieves 99%+ verbatim transcription accuracy on legal proceedings",
      "Separates cross-examining attorneys and witnesses with biometric diarization",
      "Exports standardized legal format transcripts with line-numbered pages"
    ],
    highlight: "Cut legal transcription costs by 78% while accelerating transcript delivery from 5 days to 20 minutes"
  },
  {
    title: "Media Production & Documentary Archiving",
    badge: "Media Workflow",
    desc: "Ingest hundreds of hours of raw documentary B-roll and interview footage into searchable, text-indexed video libraries.",
    benefits: [
      "Search entire footage repositories by keyword: 'show me when the mayor mentions bridge funding'",
      "Exports frame-accurate SMPTE timecodes directly into Adobe Premiere and DaVinci Resolve",
      "Transcribes foreign-language interview subjects with automated dual-language subtitles"
    ],
    highlight: "Saved documentary editing teams 120+ hours of manual logging per production"
  },
  {
    title: "Enterprise Contact Center QA & Compliance Auditing",
    badge: "Voice Analytics",
    desc: "Transcribe 100% of customer support and inbound sales calls to verify regulatory compliance, detect customer sentiment, and flag escalations.",
    benefits: [
      "Processes millions of call minutes monthly with low-cost batch speech APIs",
      "Automatically redacts PII, credit card numbers, and SSNs from transcripts",
      "Flags compliance script deviations and aggressive customer sentiment spikes"
    ],
    highlight: "Audited 100% of incoming calls (up from 3% manual sampling) for a national insurer"
  }
];

const glossaryTerms = [
  {
    term: "Word Error Rate (WER)",
    definition: "The standard metric used to measure speech recognition accuracy; calculated as (Substitutions + Deletions + Insertions) divided by Total Words Spoken."
  },
  {
    term: "Acoustic Model vs Language Model",
    definition: "Acoustic models translate sound waveforms into phonetic syllables, while language models interpret contextual grammar and predict words from phonemes."
  },
  {
    term: "Time-Aligned Word Tokens",
    definition: "Metadata assigning millisecond start and end timestamps to each individual word, enabling interactive playback highlighting."
  },
  {
    term: "Automatic Punctuation & Capitalization",
    definition: "Post-processing neural models that restore commas, periods, question marks, and proper noun capitalization to raw phonetic text."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiSpeechToTextTranscriptionGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-center space-y-6 pt-6 md:pt-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Category Deep-Dive: AI Speech-to-Text Transcription</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
          Turn Spoken Audio Into Verbatim Text In Seconds With <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-teal-500 to-blue-500">AI Speech-to-Text</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Manual transcription is officially dead. Explore how deep neural ASR models transcribe audio and video files with 99%+ accuracy, automatic punctuation, multi-speaker diarization, and multi-format exports at a fraction of human cost.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg shadow-cyan-500/25 transition-all duration-200"
          >
            <span>Explore Transcription Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200"
          >
            <span>ASR Architecture</span>
          </a>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Speech Recognition Shift: From Days to Milliseconds
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How foundational transformer models have democratized high-fidelity voice-to-text processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-cyan-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Sub-3% Word Error Rates
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Older rule-based speech recognition was notorious for bizarre phonetic errors. Frontier deep learning models leverage massive multilingual language context to correctly transcribe domain-specific jargon, technical acronyms, and homophones accurately.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Lightning Fast API Processing
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Human transcription agencies require 24 to 72 hours of turnaround for a 60-minute interview. Modern GPU-accelerated speech engines transcribe that same 60-minute recording in under 15 seconds, enabling instantaneous downstream editing.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              95%+ Cost Reduction
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Human transcription typically costs between $1.25 and $2.00 per audio minute ($75–$120 per hour). AI transcription costs under $0.004 per minute ($0.25 per hour)—a massive cost reduction that makes universal transcription affordable for every business.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE IMPACT / ROI CALCULATOR */}
      <section className="p-6 md:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Production Economics Modeler</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Transcription Turnaround &amp; Cost Savings
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Calculate the production cost and turnaround time savings of switching from human stenography to automated AI transcription.
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
                Human Agency Transcription
              </button>
              <button
                onClick={() => setCalculatorMode("ai")}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  calculatorMode === "ai"
                    ? "bg-cyan-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                AI Speech-to-Text Engine
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <DollarSign className="w-5 h-5 text-cyan-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "$90.00" : "$0.26"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Cost Per Audio Hour
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "$1.50/min human rate" : "$0.0043/min API cost"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <Timer className="w-5 h-5 text-teal-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "24–48 hrs" : "18 seconds"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Delivery Turnaround
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Agency queue bottleneck" : "Instant GPU transcription"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <AudioWaveform className="w-5 h-5 text-blue-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {calculatorMode === "traditional" ? "98.5%" : "99.1%"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Word Error Rate Baseline
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Subject to human fatigue" : "Consistent neural accuracy"}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
              <TrendingUp className="w-5 h-5 text-cyan-400 mx-auto" />
              <div className="text-2xl md:text-3xl font-extrabold text-cyan-400">
                {calculatorMode === "traditional" ? "Baseline" : "346x Savings"}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Economic Advantage
              </p>
              <p className="text-xs text-slate-500">
                {calculatorMode === "traditional" ? "Restricted to VIP files" : "Transcribe 100% of all audio"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE ARCHITECTURE */}
      <section id="architecture" className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Deep Dive</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Stage Architecture of Modern ASR Engines
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How raw audio frequencies are decomposed, tokenized, and transformed into formatted text.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Acoustic Spectrogram
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Audio is converted into log-mel spectrograms, isolating vocal harmonics while dampening environmental hums and transient noise.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Transformer Encoder
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Encoder layers process acoustic feature frames, predicting phoneme sequences and mapping sound patterns across time steps.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Language Decoder
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Autoregressive decoders leverage contextual vocabulary models to predict correct words, resolve homophones, and add punctuation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Alignment &amp; Diarization
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Attaches millisecond-level word timestamps and partitions speech by unique vocal timbre to label Speaker 1 vs Speaker 2.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Top 3 AI Speech-to-Text Engines Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Evaluating leading platforms on speed, vocabulary customization, language support, and pricing models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-cyan-500/30 dark:border-cyan-500/20 shadow-md space-y-6 relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              <Crown className="w-3.5 h-3.5" />
              <span>Fastest Enterprise ASR API</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Deepgram Nova-2</h3>
              <p className="text-xs text-slate-500 mt-1">Ultra-low latency streaming &amp; batch transcription</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>Transcribes 1 hour of audio in under 12 seconds with sub-300ms live streaming</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>Unbeatable pricing: $0.0043 per minute ($0.26 per hour)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span>Custom keyword boosting for proprietary medical and tech terms</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Developers, telephony platforms, and high-volume enterprise pipelines</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Best Multi-Language Model</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">OpenAI Whisper v3</h3>
              <p className="text-xs text-slate-500 mt-1">Open-weights frontier model with 98-language support</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>Zero-shot translation and transcription across 98 spoken languages</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>Can run self-hosted locally on private GPUs with zero cloud data sharing</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>Available via cloud API at $0.006 per minute</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Privacy-critical legal setups and multi-language global translation</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <FileText className="w-3.5 h-3.5" />
              <span>Best Web Editor &amp; Review Hub</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Sonix AI</h3>
              <p className="text-xs text-slate-500 mt-1">Interactive browser editor, multi-speaker sync &amp; SRT</p>
            </div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Interactive text editor synchronized with audio playback cursor</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Automated multi-speaker identification and confidence score alerts</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Export directly to Word, PDF, SRT, VTT, and Avid Pro Tools</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-semibold text-slate-500">Best for: </span>
              <span className="text-xs text-slate-700 dark:text-slate-300">Journalists, media teams, and researchers needing a GUI review editor</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TABBED USE CASES */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Transforming Industry Workflows With Voice AI
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            See how accurate automated transcription accelerates legal discovery, media logging, and contact centers.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {useCases.map((uc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveUseCase(idx)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeUseCase === idx
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-500/20"
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
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs md:text-sm text-cyan-700 dark:text-cyan-300 font-medium">
            <strong>Demonstrated Metric: </strong> {useCases[activeUseCase].highlight}
          </div>
        </div>
      </section>

      {/* 7. IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            4-Step Production Implementation Roadmap
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            How engineering and media teams integrate enterprise speech-to-text pipelines into existing stacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Step 01</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Audio Normalization</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Standardize incoming audio feeds: convert dual-channel streams to 16kHz mono WAV or compressed AAC for optimal ASR ingestion.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Step 02</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Custom Vocabulary</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Inject custom terminology lists, brand names, medical codes, and proprietary acronyms into the ASR prompt lexicon.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Step 03</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Diarization Alignment</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Configure speaker diarization parameters: set expected speaker counts and calibrate voice timbre embeddings.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Step 04</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Downstream Webhooks</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Deliver completed JSON transcripts with word-level timestamps directly to your search database, CMS, or video editing suite.
            </p>
          </div>
        </div>
      </section>

      {/* 8. COMPARISON BRIDGE TABLE */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Feature Matrix: AI Speech-to-Text Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Detailed breakdown of transcription latency, custom vocabulary, local self-hosting, and pricing rates.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                <th className="p-4">Platform</th>
                <th className="p-4">Latency (Real-Time)</th>
                <th className="p-4">Custom Lexicon</th>
                <th className="p-4">Self-Hosting</th>
                <th className="p-4">Languages</th>
                <th className="p-4">API Price Per Min</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Deepgram Nova-2</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">&lt; 300ms streaming</td>
                <td className="p-4">Yes (Keyword boost)</td>
                <td className="p-4">Enterprise on-prem</td>
                <td className="p-4">36+ Languages</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">$0.0043/min</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">OpenAI Whisper v3</td>
                <td className="p-4 text-slate-400">Batch (~15-30s)</td>
                <td className="p-4">Prompt conditioning</td>
                <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">100% Open Weights</td>
                <td className="p-4">98 Languages</td>
                <td className="p-4">$0.0060/min</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Sonix AI</td>
                <td className="p-4 text-slate-400">Batch (GUI Editor)</td>
                <td className="p-4">Custom dictionary</td>
                <td className="p-4">Cloud only</td>
                <td className="p-4">40+ Languages</td>
                <td className="p-4">$10/hour ($0.16/min)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Rev AI</td>
                <td className="p-4">Streaming available</td>
                <td className="p-4">Custom vocabulary</td>
                <td className="p-4">Cloud only</td>
                <td className="p-4">31+ Languages</td>
                <td className="p-4">$0.0200/min</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. GLOSSARY */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Domain Terminology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Essential Speech Recognition Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Key technical terms defining the science of automatic speech recognition and acoustic modeling.
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
            Common questions regarding speech accuracy, formatting exports, and privacy compliance.
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
                      isOpen ? "rotate-180 text-cyan-500" : ""
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
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to Transcribe Millions of Spoken Words Instantly?
            </h2>
            <p className="text-cyan-100 text-sm md:text-base">
              Browse our directory of top-rated speech-to-text platforms, compare API rates, and power your audio workflow today.
            </p>
            <div className="pt-2">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-cyan-700 hover:bg-slate-100 shadow-lg transition-all duration-200"
              >
                <span>Browse All Transcription Tools</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
