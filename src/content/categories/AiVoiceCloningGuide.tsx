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
  Mic2,
  Volume2,
  ShieldCheck,
  SlidersHorizontal,
  Headphones,
  Radio,
  FileAudio,
  Globe
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is the best AI voice cloning tool in 2026?",
    answer: "ElevenLabs and Resemble AI lead the voice synthesis sector. ElevenLabs is the gold standard for natural human prosody, emotional modulation, and cross-lingual voice cloning across 32+ languages. Resemble AI excels in enterprise-grade security, deepfake detection watermarking, and real-time low-latency game dialogue engines."
  },
  {
    question: "How much audio sample do I need to accurately clone a voice?",
    answer: "With modern Zero-Shot Voice Cloning models, an instant clone requires as little as 60 seconds of clean, dry microphone audio. For high-fidelity Professional Voice Cloning (PVC) capable of replicating intimate whispers, theatrical shouts, and complex emotional accents, platforms recommend 30 to 60 minutes of studio-grade WAV recordings."
  },
  {
    question: "Can I legally clone someone else's voice?",
    answer: "No. Commercial AI voice platforms strictly enforce biometric verification and voice consent agreements. You must provide a live spoken calibration phrase proving ownership of the voice. Unauthorized voice cloning for commercial impersonation violates copyright, right of publicity laws, and platform terms of service."
  }
];

const useCases = [
  {
    id: "audiobooks-podcasts",
    title: "Audiobooks & Narrative Podcasters",
    icon: <Headphones className="w-5 h-5" />,
    content: "Authors and audio publishers narrate entire 12-hour audiobooks in days rather than spending weeks in expensive soundproof recording booths. Updating mispronounced character names or retaking an audio chapter requires simply editing text in a browser script editor without re-booking voice talent."
  },
  {
    id: "game-animation",
    title: "Video Games & 3D Animation",
    icon: <Radio className="w-5 h-5" />,
    content: "Game developers build dynamic, non-player character (NPC) dialogue systems that respond to players in real time. Instead of pre-recording static dialogue trees, conversational AI engines generate voice-cloned character responses on the fly with synchronized emotional inflection."
  },
  {
    id: "enterprise-localization",
    title: "Global Enterprise & Multilingual Videos",
    icon: <Globe className="w-5 h-5" />,
    content: "Corporate executives and training departments produce global communications where a single leader speaks fluently in Spanish, Japanese, German, and French while preserving their distinct personal vocal identity, timbre, and authoritative cadence."
  },
  {
    id: "voice-banking",
    title: "Voice Banking & Medical Accessibility",
    icon: <Mic2 className="w-5 h-5" />,
    content: "Patients diagnosed with ALS, throat cancer, or degenerative speech disorders digitally preserve their vocal identity before losing speech. Synthesized personal voice models integrate directly into AAC assistive speech devices, allowing individuals to speak in their authentic voice forever."
  }
];

const glossaryTerms = [
  { term: "Zero-Shot Voice Cloning", def: "A deep neural speech technique that synthesizes an accurate vocal replica from an unseen speaker using only a brief 30- to 60-second reference sample without re-training model weights." },
  { term: "Acoustic Prosody & Cadence", def: "The melodic rhythm, pitch variation, stress patterns, and natural breathing pauses that transform robotic monotone text-to-speech into emotionally convincing human speech." },
  { term: "Formant Frequencies & Timbre", def: "The resonant spectral peaks produced by a person's unique vocal tract and larynx anatomy that give their voice its recognizable identity and warmth." },
  { term: "Neural Audio Watermarking", def: "Inaudible biometric cryptographic signals embedded into synthesized audio waveforms, allowing streaming platforms and detection algorithms to verify AI provenance." }
];

const alternatives = [
  { 
    name: "ElevenLabs", 
    slug: "elevenlabs",
    score: "9.9", 
    price: "From $5/mo", 
    bestFor: "Best Overall for Human Prosody & Emotion", 
    highlight: "Industry-defining voice synthesis model with deep emotional range, instant voice cloning, and multilingual dubbing." 
  },
  { 
    name: "Resemble AI", 
    slug: "resemble-ai",
    score: "9.8", 
    price: "From $29/mo", 
    bestFor: "Enterprise Game Dev & Deepfake Detection", 
    highlight: "Real-time speech synthesis API with granular emotion toggles, neural audio watermarking, and voice conversion." 
  },
  { 
    name: "PlayHT Studio", 
    slug: "playht-studio",
    score: "9.7", 
    price: "From $39/mo", 
    bestFor: "Low-Latency Conversational Voice Agents", 
    highlight: "Ultra-fast generative voice models engineered for real-time customer service agents, phone bots, and podcasts." 
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

export default function AiVoiceCloningGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-indigo-500/20 shadow-2xl shadow-indigo-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-purple-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-8 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-purple-400" /> 
            2026 Voice AI Deep Dive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.08]"
          >
            The Ultimate Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-sm">
              AI Voice Cloning & Speech Synthesis
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${figtreeDarkBodyClass} max-w-2xl mx-auto`}
          >
            From zero-shot instant vocal replication to dynamic emotional prosody control: a comprehensive guide to generative speech models, digital audio watermarking, and voice studio workflows.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Definitive Overview - Two Alternating Blocks */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-8 md:mb-12 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-indigo-500 uppercase tracking-[0.25em] mb-4">The Paradigm Shift</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">From Robotic Monotones to Emotional Human Prosody</h4>
        </motion.div>

        <div className="space-y-10 md:space-y-12">
          {/* Block 1 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-500 mb-8 shadow-sm">
                <Mic className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">The Erasure of the Uncanny Valley in Speech</h5>
              <p className={figtreeBodyClass}>
                Early text-to-speech tools sounded robotic, flat, and mechanically disjointed. Today&apos;s leading generative acoustic engines simulate authentic human vocal physiology: micro-intonations, realistic breath inhalations, vocal fry, and subtle pitch variations based on dramatic context. What previously required booking a voice artist in a soundproof studio now generates in seconds with near-zero acoustic artifacting.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-900/20 border border-indigo-200/50 dark:border-indigo-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-48 h-48 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 absolute" />
               <div className="w-full max-w-xs aspect-square rounded-3xl bg-slate-900/90 border border-white/20 p-6 flex flex-col justify-between relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-105">
                 <div className="flex justify-between items-center">
                   <div className="h-3 w-20 bg-indigo-500/60 rounded-full" />
                   <div className="h-6 w-14 rounded-full bg-purple-400/20 border border-purple-400/40 flex items-center justify-center text-[10px] text-purple-300 font-black">48 kHz</div>
                 </div>
                 <div className="space-y-3">
                   <div className="h-28 rounded-2xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-pink-500/30 border border-white/10 flex flex-col items-center justify-center p-4">
                     <div className="flex items-center gap-1.5 h-12 w-full justify-center">
                       <span className="w-1.5 h-8 bg-indigo-400 rounded-full animate-pulse" />
                       <span className="w-1.5 h-12 bg-purple-400 rounded-full animate-pulse" />
                       <span className="w-1.5 h-6 bg-pink-400 rounded-full animate-pulse" />
                       <span className="w-1.5 h-10 bg-indigo-300 rounded-full animate-pulse" />
                       <span className="w-1.5 h-4 bg-purple-300 rounded-full animate-pulse" />
                       <span className="w-1.5 h-11 bg-pink-300 rounded-full animate-pulse" />
                     </div>
                     <span className="text-[11px] font-mono text-purple-300/80 mt-2">Zero-Shot Latent Acoustic Diffusion</span>
                   </div>
                   <div className="h-2.5 w-3/4 bg-white/40 rounded-full" />
                   <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-900/20 border border-purple-200/50 dark:border-purple-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-full max-w-sm space-y-4 relative z-10 transition-transform duration-700 group-hover:scale-105">
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md flex items-center gap-3">
                   <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-500 flex items-center justify-center font-bold text-xs">AI</div>
                   <div className="h-3 w-2/3 bg-slate-300 dark:bg-slate-600 rounded-full" />
                 </div>
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md space-y-3">
                   <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                     <span>Emotional Prosody Slider</span>
                     <span className="text-purple-500 font-mono">Whisper → Excited</span>
                   </div>
                   <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                     <div className="h-full w-4/5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                   </div>
                   <div className="flex justify-between items-center pt-1 text-[11px] text-slate-400">
                     <span>Stability: 75%</span>
                     <span>Clarity: 88%</span>
                   </div>
                 </div>
               </div>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center text-purple-500 mb-8 shadow-sm">
                <SlidersHorizontal className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">Granular Emotional & Style Modulation</h5>
              <p className={figtreeBodyClass}>
                Professional audio creators no longer settle for a single static vocal delivery. Modern voice architectures allow directors to modulate emotional states dynamically: dial up theatrical urgency, add a conspiratorial whisper, or adjust vocal cadence sentence by sentence. This unlocks complete artistic control for gaming, film ADR, and dramatic storytelling.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2.5: Interactive ROI / Cost Savings Calculator */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex flex-col items-center text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Calculator className="w-8 h-8" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">Calculate Voice Studio ROI</h3>
            <p className={figtreeBodyClass + " max-w-xl"}>
              Quantify the exact recording budget and turnaround time saved by augmenting studio audio production with generative voice cloning pipelines.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full flex gap-2">
              <button 
                onClick={() => setRoiMode("traditional")}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${roiMode === "traditional" ? "bg-white dark:bg-slate-700 shadow-md text-on-surface" : "text-slate-400 hover:text-on-surface"}`}
              >
                Studio Voice Actor
              </button>
              <button 
                onClick={() => setRoiMode("ai")}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${roiMode === "ai" ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "text-slate-400 hover:text-on-surface"}`}
              >
                AI Voice Clone Pipeline
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-3xl">
              <Timer className={`w-8 h-8 mx-auto mb-4 ${roiMode === "ai" ? "text-success" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-2">Turnaround Time</div>
              <div className="text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "30 Seconds" : "1-2 Weeks"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-3xl">
              <DollarSign className={`w-8 h-8 mx-auto mb-4 ${roiMode === "ai" ? "text-success" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-2">Cost per Finished Hour</div>
              <div className="text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "$2.50" : "$850+"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-3xl">
              <LineChart className={`w-8 h-8 mx-auto mb-4 ${roiMode === "ai" ? "text-primary" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-2">Language Scalability</div>
              <div className="text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "32+ Languages" : "Multi-Casting"}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. Sponsor Spotlight - High-End Dark Card */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="relative rounded-[2.5rem] bg-slate-900 overflow-hidden shadow-2xl p-[2px] group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 blur-md group-hover:opacity-100 transition-opacity duration-700 z-0" />
          
          <div className="relative bg-slate-900/95 backdrop-blur-2xl rounded-[2.4rem] p-8 md:p-12 z-10 border border-white/10">
            <div className="flex flex-col md:flex-row gap-10 md:gap-14">
              <div className="md:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-bold uppercase tracking-widest border border-purple-500/20 shadow-inner">
                  <Crown className="w-4 h-4" /> Editor&apos;s Choice 2026
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                  Produce studio-grade narration with <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">ElevenLabs</span>
                </h3>
                
                <p className={figtreeDarkBodyClass}>
                  While basic TTS engines generate robotic speech, ElevenLabs delivers unparalleled human emotional realism. Clone your voice from a 1-minute sample, modulate stability and clarity in real time, and localize content across 32 languages with native fluency.
                </p>

                <a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-purple-50 hover:scale-105 hover:shadow-xl transition-all duration-300">
                  Try ElevenLabs Free
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                </a>
              </div>

              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="bg-slate-800/40 border border-white/5 rounded-[2rem] p-10 space-y-8 shadow-2xl backdrop-blur-sm">
                  <h4 className="text-white font-extrabold text-2xl tracking-tight">The ElevenLabs Advantage</h4>
                  {[
                    { title: "Instant & Professional Voice Cloning", desc: "Train on 1 minute for instant drafts or 30 minutes for broadcast masters." },
                    { title: "Granular Emotional Prosody Control", desc: "Fine-tune stability, clarity, and style exaggeration sliders." },
                    { title: "Multilingual Dubbing & Accent Match", desc: "Cross-lingual voice replication across 32+ global languages." },
                    { title: "Voice Actor Royalty Marketplace", desc: "Safely monetize your voice with built-in biometric IP protection." }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-5 group/feature">
                      <div className="mt-1 bg-indigo-500/10 p-2 rounded-xl h-fit border border-indigo-500/20 group-hover/feature:bg-indigo-500/30 group-hover/feature:scale-110 transition-all duration-300">
                        <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg tracking-tight">{feature.title}</div>
                        <div className="text-slate-400 font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] font-normal mt-1 leading-relaxed">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3.5: Top 3 Alternatives Matrix */}
      <motion.section 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h3 className="text-sm font-extrabold text-slate-500 uppercase tracking-[0.25em] mb-4">Market Landscape</h3>
          <h4 className="text-3xl font-black text-on-surface tracking-tighter">Top Alternatives</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {alternatives.map((alt, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <Link href={`/tool/${alt.slug}`} className="text-2xl font-black text-on-surface group-hover:text-primary transition-colors">
                    {alt.name}
                  </Link>
                  <div className="bg-success/10 text-success font-bold px-3 py-1 rounded-full text-sm">{alt.score}/10</div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <span className="text-slate-500">Starting Price</span>
                    <span className="font-bold text-on-surface">{alt.price}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <span className="text-slate-500">Best For</span>
                    <span className="font-bold text-on-surface">{alt.bestFor}</span>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pt-2">
                    <span className="font-bold text-on-surface">Highlight: </span>{alt.highlight}
                  </div>
                </div>
              </div>
              <Link 
                href={`/tool/${alt.slug}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-primary hover:text-white transition-colors"
              >
                View {alt.name} Profile <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Head-to-Head Comparison & Workflow Quick Bridges */}
        <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <Link
            href="/compare-tools/elevenlabs-vs-resemble-ai"
            className="group block p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/40 transition-all shadow-xs"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-500 mb-1">Top Ranking Comparison</div>
            <div className="text-sm font-extrabold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5">
              ElevenLabs vs Resemble AI Showdown →
            </div>
            <p className="text-xs text-on-surface-variant mt-1">
              Emotional creative storytelling vs enterprise security and real-time game engines.
            </p>
          </Link>

          <Link
            href="/workflows/audiobook-production"
            className="group block p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/40 transition-all shadow-xs"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-500 mb-1">Which Tools Work Best Together?</div>
            <div className="text-sm font-extrabold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5">
              AI Audiobook Production Stack →
            </div>
            <p className="text-xs text-on-surface-variant mt-1">
              Clone author voices with ElevenLabs, master audio with Descript, and export to Audible.
            </p>
          </Link>
        </motion.div>
      </motion.section>

      {/* 4. Buyer's Guide - Bento Box Layout (Asymmetric 01-04) */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 max-w-6xl mx-auto"
      >
        <motion.div variants={fadeUpVariant} className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-purple-500 uppercase tracking-[0.25em] mb-4">Evaluation Criteria</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">What to Demand from Pro Voice Engines</h4>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Big Card 1 */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-indigo-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Mic2 className="w-8 h-8" />
                </div>
                <span className="text-7xl font-black text-slate-100 dark:text-slate-800 group-hover:text-indigo-500/10 transition-colors duration-500">01</span>
              </div>
              <h4 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">Cross-Lingual Accent & Cadence Preservation</h4>
              <p className={figtreeBodyClass}>
                Elite voice synthesis engines analyze the acoustic formant structure of the original speaker, allowing the cloned voice model to speak foreign languages (e.g. Spanish, German, Japanese) without shifting into a generic accent. The model preserves the speaker's vocal resonance across all translated phonemes.
              </p>
            </div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div variants={fadeUpVariant} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-purple-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-extrabold text-on-surface mb-4 tracking-tight">Biometric Liveness Verification</h4>
              <p className={figtreeBodyClass}>
                Demanded by enterprise legal teams: verify that the software requires active voice consent and embeds cryptographic watermarks to prevent deepfake fraud.
              </p>
            </div>
          </motion.div>

          {/* Small Card 3 */}
          <motion.div variants={fadeUpVariant} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-pink-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-pink-500/10 text-pink-500 rounded-2xl flex items-center justify-center mb-8 border border-pink-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <SlidersHorizontal className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-extrabold text-on-surface mb-4 tracking-tight">Prosody & Emotion Sliders</h4>
              <p className={figtreeBodyClass}>
                Ensure the platform lets you modulate emotional states (whisper, excitement, sorrow) and vocal speed without introducing robotic warbling artifacts.
              </p>
            </div>
          </motion.div>

          {/* Big Card 4 */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-indigo-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <Volume2 className="w-8 h-8" />
                </div>
                <span className="text-7xl font-black text-slate-100 dark:text-slate-800 group-hover:text-indigo-500/10 transition-colors duration-500">04</span>
              </div>
              <h4 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">Low-Latency Real-Time Streaming APIs</h4>
              <p className={figtreeBodyClass}>
                For conversational AI agents, interactive video games, and phone bots, look for streaming text-to-speech architectures offering under 250ms time-to-first-audio chunk (TTFB) over WebSockets.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 4.5: Step-by-Step "How-To" Walkthrough */}
      <motion.section 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-white"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
        <div className="relative z-10">
          <h3 className="text-sm font-extrabold text-purple-400 uppercase tracking-[0.25em] mb-4">Implementation Guide</h3>
          <h4 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-10">How to Clone a Studio Voice in 4 Steps</h4>
          
          <div className="space-y-12">
            {[
              { title: "Calibrate Dry Acoustic Audio", text: "Never train on phone recordings in echoey rooms. Record a dry 60-second WAV sample on a cardioid condenser microphone in a treated room with zero background noise or reverberation." },
              { title: "Feed Phonetically Balanced Sentences", text: "Read a phonetically rich script containing all common diphthongs, sibilants, and plosives to teach the neural model your full anatomical vocal range." },
              { title: "Modulate Stability & Clarity Parameters", text: "In your generation dashboard, set stability to 70% to maintain recognizable identity while leaving enough flexibility for natural human emotion." },
              { title: "Export 48kHz Broadcast Masters", text: "Render speech in uncompressed 24-bit 48kHz WAV format, applying standard LUFS normalization (-16 LUFS for podcasts, -14 LUFS for YouTube) for immediate distribution." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="flex gap-6 md:gap-10">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl font-black text-purple-400">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h5 className="text-2xl font-bold text-white mb-3">{step.title}</h5>
                  <p className={figtreeDarkBodyClass}>{step.text}</p>
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
        className="mb-8 md:mb-12 max-w-5xl mx-auto bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2.5rem] p-6 md:p-10 shadow-xl"
      >
        <h3 className="text-4xl md:text-5xl font-black text-on-surface mb-16 text-center tracking-tighter">Who Benefits Most?</h3>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Tab Navigation */}
          <div className="md:w-1/3 space-y-4">
            {useCases.map((uc) => {
              const isActive = activeTab === uc.id;
              return (
                <button
                  key={uc.id}
                  onClick={() => setActiveTab(uc.id)}
                  className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-500 font-bold text-left border ${
                    isActive 
                      ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/20 translate-x-2 border-primary' 
                      : 'bg-white dark:bg-slate-800 text-on-surface-variant hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-on-surface border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className={`${isActive ? 'text-primary-foreground' : 'text-slate-400'} transition-colors duration-500`}>
                    {uc.icon}
                  </div>
                  {uc.title}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="md:w-2/3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden flex items-center shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8" />
                <h4 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">
                  {useCases.find(u => u.id === activeTab)?.title}
                </h4>
                <p className={figtreeBodyClass}>
                  {useCases.find(u => u.id === activeTab)?.content}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
          </div>
        </div>
      </motion.section>

      {/* 5.5: Topical Glossary */}
      <motion.section 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-primary uppercase tracking-[0.25em] mb-4">Technical Foundation</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">Core Terminology</h4>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {glossaryTerms.map((item, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="bg-surface border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
                <h5 className="text-xl font-bold text-on-surface">{item.term}</h5>
              </div>
              <p className={figtreeBodyClass}>{item.def}</p>
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
          <h3 className="text-4xl md:text-5xl font-black text-on-surface mb-4 tracking-tighter">Frequently Asked Questions</h3>
        </div>
        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-[2rem] overflow-hidden transition-all duration-500 ${isOpen ? 'bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border-indigo-500/30 shadow-xl shadow-indigo-500/5 scale-[1.02]' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-500/20 hover:shadow-md'}`}
              >
                <button 
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className="font-extrabold text-on-surface text-xl tracking-tight pr-8">{faq.question}</span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-primary text-primary-foreground shadow-md rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                    <ChevronDown className="w-5 h-5" />
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
