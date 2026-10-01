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
  Music,
  Music2,
  Volume2,
  ShieldCheck,
  SlidersHorizontal,
  Headphones,
  Radio,
  FileAudio,
  Disc3,
  Layers,
  Sparkle
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is the best AI music and song generator in 2026?",
    answer: "Suno and Udio are the two defining foundation models in generative music. Suno is celebrated for full-length multi-minute song generation with radio-ready vocals across pop, rock, EDM, and hip-hop. Udio excels in musical nuance, complex jazz and classical instrumentation, and surgical audio inpainting."
  },
  {
    question: "Can I monetize AI-generated music on Spotify, Apple Music, and YouTube?",
    answer: "Yes. On paid subscription plans of platforms like Suno, Udio, and Soundraw, you own commercial rights to the generated songs. Thousands of independent producers distribute AI-assisted tracks to DSPs (Digital Streaming Providers) and earn streaming royalties, provided the generated lyrics and melodies do not infringe on copyrighted human works."
  },
  {
    question: "Can I download individual instrument stems (vocals, drums, bass) for my DAW?",
    answer: "Yes. Premier platforms allow users to export isolated WAV stems (vocal acapella, drum beat, bassline, and instrumental backing). Producers can drag these stems directly into Ableton Live, Logic Pro, or FL Studio for professional mixing, audio effects processing, and human collaboration."
  }
];

const useCases = [
  {
    id: "content-creators",
    title: "YouTube & TikTok Video Creators",
    icon: <Headphones className="w-5 h-5" />,
    content: "Video editors eliminate YouTube Content ID copyright strikes and exorbitant licensing fees. Instead of hunting through generic stock libraries for the same overused ukulele tracks, creators prompt custom cinematic soundtracks that perfectly match video pacing, comedic beats, and emotional climax moments."
  },
  {
    id: "indie-gamedev",
    title: "Indie Game Developers & Animators",
    icon: <Radio className="w-5 h-5" />,
    content: "Game studios build expansive dynamic soundtracks for fantasy RPGs, cyberpunk shooters, and retro arcade titles. AI music engines generate looping ambient dungeon soundscapes, combat themes, and emotional cutscene scores without requiring a $50,000 orchestral budget."
  },
  {
    id: "producers-songwriters",
    title: "Music Producers & Songwriters",
    icon: <Disc3 className="w-5 h-5" />,
    content: "Beatmakers and recording artists cure writer's block by generating melodic hooks, complex chord progressions, and vocal toplines. By separating stems into Ableton or Logic, producers chop up AI vocal samples and synthesizer riffs into chart-ready human records."
  },
  {
    id: "commercial-agencies",
    title: "Ad Agencies & Commercial Brands",
    icon: <Zap className="w-5 h-5" />,
    content: "Marketing teams produce tailor-made jingles and sonic brand identities in minutes. Whether crafting a 15-second upbeat retail promo or a moody luxury perfume score, brands maintain full commercial ownership with zero recurring royalty obligations."
  }
];

const glossaryTerms = [
  { term: "Acoustic Audio Diffusion", def: "A generative machine learning architecture that synthesizes raw 48kHz audio waveforms from text descriptions, modeling frequency, timbre, and musical harmony simultaneously." },
  { term: "Stem Separation (Demucs / Spleeter)", def: "Neural network algorithms that isolate a mixed stereo song into four discrete audio stems: isolated lead vocals, drums, bass, and other backing instruments." },
  { term: "Prompt Metatags ([Verse], [Chorus])", def: "Structural structural bracket prompts fed to musical LLMs to dictate song architecture, indicating when to transition into a bridge, drop, guitar solo, or fade-out." },
  { term: "Sync Licensing & Mechanical Rights", def: "The legal framework permitting synchronization of music with visual media (video ads, games, films) without paying recurring royalties to performance rights organizations." }
];

const alternatives = [
  { 
    name: "Suno", 
    slug: "suno",
    score: "9.9", 
    price: "Freemium ($10/mo)", 
    bestFor: "Best Overall for Radio-Ready Vocals & Full Songs", 
    highlight: "Generates complete 4-minute songs with vocals, lyrics, and instrumentals across any musical genre from simple prompts." 
  },
  { 
    name: "Udio AI", 
    slug: "udio-ai",
    score: "9.8", 
    price: "Freemium ($10/mo)", 
    bestFor: "Artistic Nuance, Jazz, Classical & Audio Inpainting", 
    highlight: "State-of-the-art musical fidelity with granular prompt conditioning, section extension, and acoustic lyric alignment." 
  },
  { 
    name: "Soundraw Music", 
    slug: "soundraw-music",
    score: "9.7", 
    price: "From $16.99/mo", 
    bestFor: "Royalty-Free Video Background Music & Custom BPM", 
    highlight: "Interactive music generator where creators customize song structure, energy levels, and instrument arrangements." 
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

export default function AiMusicSongGeneratorsGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-fuchsia-500/20 shadow-2xl shadow-fuchsia-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/40 via-pink-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-8 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-pink-400" /> 
            2026 Generative Audio Deep Dive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.08]"
          >
            The Ultimate Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 drop-shadow-sm">
              AI Music & Song Producers
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${figtreeDarkBodyClass} max-w-2xl mx-auto`}
          >
            From single-sentence prompts to full radio-ready songs with soulful human vocals, multi-track stem exports, and commercial streaming monetization.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Definitive Overview - Two Alternating Blocks */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-8 md:mb-12 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-fuchsia-500 uppercase tracking-[0.25em] mb-4">The Paradigm Shift</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">From 8-Bar Loops to Full Radio-Ready Symphonies</h4>
        </motion.div>

        <div className="space-y-10 md:space-y-12">
          {/* Block 1 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-pink-500/20 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-500 mb-8 shadow-sm">
                <Music className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">The Death of Repetitive Stock Jingle Libraries</h5>
              <p className={figtreeBodyClass}>
                Content creators and game developers endured decades of listening to cheesy, repetitive stock music libraries with exorbitant licensing restrictions. <strong>Generative AI foundation models (like Suno and Udio) fundamentally transform music production.</strong> Instead of stitching together pre-recorded royalty-free loops, neural models synthesize original musical compositions from scratch—pairing complex chord cadences with soulful human vocal performances in any genre imaginable.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-fuchsia-50/50 to-pink-50/50 dark:from-fuchsia-950/20 dark:to-pink-900/20 border border-fuchsia-200/50 dark:border-fuchsia-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-48 h-48 bg-gradient-to-tr from-fuchsia-500 to-pink-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 absolute" />
               <div className="w-full max-w-xs aspect-square rounded-3xl bg-slate-900/90 border border-white/20 p-6 flex flex-col justify-between relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-105">
                 <div className="flex justify-between items-center">
                   <div className="h-3 w-20 bg-fuchsia-500/60 rounded-full" />
                   <div className="h-6 w-20 rounded-full bg-pink-400/20 border border-pink-400/40 flex items-center justify-center text-[10px] text-pink-300 font-black">Full Track</div>
                 </div>
                 <div className="space-y-3">
                   <div className="h-28 rounded-2xl bg-gradient-to-tr from-fuchsia-500/30 via-pink-500/20 to-rose-500/30 border border-white/10 flex flex-col items-center justify-center p-4">
                     <div className="text-xs font-mono text-pink-300 font-bold mb-2">4-Minute Arrangement</div>
                     <div className="flex items-center gap-1.5 h-10 w-full justify-center">
                       <span className="w-1.5 h-6 bg-fuchsia-400 rounded-full animate-pulse" />
                       <span className="w-1.5 h-10 bg-pink-400 rounded-full animate-pulse" />
                       <span className="w-1.5 h-4 bg-rose-400 rounded-full animate-pulse" />
                       <span className="w-1.5 h-8 bg-fuchsia-300 rounded-full animate-pulse" />
                       <span className="w-1.5 h-12 bg-pink-300 rounded-full animate-pulse" />
                       <span className="w-1.5 h-7 bg-rose-300 rounded-full animate-pulse" />
                     </div>
                     <span className="text-[10px] text-slate-400 mt-2 font-mono">[Verse] → [Chorus] → [Drop]</span>
                   </div>
                   <div className="h-2.5 w-3/4 bg-white/40 rounded-full" />
                   <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-pink-50/50 to-rose-50/50 dark:from-pink-950/20 dark:to-rose-900/20 border border-pink-200/50 dark:border-pink-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-full max-w-sm space-y-4 relative z-10 transition-transform duration-700 group-hover:scale-105">
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md flex items-center gap-3">
                   <div className="w-8 h-8 rounded-xl bg-pink-500/20 text-pink-500 flex items-center justify-center font-bold text-xs">AI</div>
                   <div className="h-3 w-2/3 bg-slate-300 dark:bg-slate-600 rounded-full" />
                 </div>
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md space-y-3">
                   <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                     <span>Isolated Stem Export</span>
                     <span className="text-pink-500 font-mono">4 Discrete Tracks</span>
                   </div>
                   <div className="space-y-1.5 font-mono text-[11px] text-slate-400">
                     <div className="flex justify-between p-1.5 rounded bg-slate-100 dark:bg-slate-700/50">
                       <span>Vocals (Acapella)</span>
                       <span className="text-success font-bold">WAV 24-bit</span>
                     </div>
                     <div className="flex justify-between p-1.5 rounded bg-slate-100 dark:bg-slate-700/50">
                       <span>Drums & Percussion</span>
                       <span className="text-success font-bold">WAV 24-bit</span>
                     </div>
                     <div className="flex justify-between p-1.5 rounded bg-slate-100 dark:bg-slate-700/50">
                       <span>Bass & Synthesizers</span>
                       <span className="text-success font-bold">WAV 24-bit</span>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/20 flex items-center justify-center text-pink-500 mb-8 shadow-sm">
                <Layers className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">Isolated Stem Separation & DAW Integration</h5>
              <p className={figtreeBodyClass}>
                Professional music producers don&apos;t keep songs trapped in a browser. Leading AI audio platforms allow one-click stem separation, breaking apart a rendered track into isolated lead vocals, drums, basslines, and backing instruments. Producers import these audio stems directly into Ableton Live or Logic Pro for human post-production, vocal tuning, and mixing.
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
            <h3 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">Calculate Music Studio ROI</h3>
            <p className={figtreeBodyClass + " max-w-xl"}>
              Compare production overhead and licensing turnaround between hiring session musicians and leveraging generative AI music engines.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full flex gap-2">
              <button 
                onClick={() => setRoiMode("traditional")}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${roiMode === "traditional" ? "bg-white dark:bg-slate-700 shadow-md text-on-surface" : "text-slate-400 hover:text-on-surface"}`}
              >
                Session Musicians & Studio
              </button>
              <button 
                onClick={() => setRoiMode("ai")}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${roiMode === "ai" ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "text-slate-400 hover:text-on-surface"}`}
              >
                Generative Music Engine ($10/mo)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-3xl">
              <Timer className={`w-8 h-8 mx-auto mb-4 ${roiMode === "ai" ? "text-success" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-2">Turnaround Time</div>
              <div className="text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "30 Seconds" : "2-4 Weeks"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-3xl">
              <DollarSign className={`w-8 h-8 mx-auto mb-4 ${roiMode === "ai" ? "text-success" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-2">Cost per Song</div>
              <div className="text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "$0.10" : "$1,500+"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-3xl">
              <LineChart className={`w-8 h-8 mx-auto mb-4 ${roiMode === "ai" ? "text-primary" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-2">Commercial Ownership</div>
              <div className="text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "100% Retained" : "Splits & Royalties"}
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
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 opacity-50 blur-md group-hover:opacity-100 transition-opacity duration-700 z-0" />
          
          <div className="relative bg-slate-900/95 backdrop-blur-2xl rounded-[2.4rem] p-8 md:p-12 z-10 border border-white/10">
            <div className="flex flex-col md:flex-row gap-10 md:gap-14">
              <div className="md:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-400 text-sm font-bold uppercase tracking-widest border border-pink-500/20 shadow-inner">
                  <Crown className="w-4 h-4" /> Editor&apos;s Choice 2026
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                  Generate broadcast-ready songs with <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">Suno</span>
                </h3>
                
                <p className={figtreeDarkBodyClass}>
                  While basic tools only create short loops, Suno is a complete musical composer. Turn simple ideas or poems into radio-ready pop hits, acoustic ballads, or cinematic EDM anthems with hyper-expressive vocals in seconds.
                </p>

                <a href="https://suno.com" target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-pink-50 hover:scale-105 hover:shadow-xl transition-all duration-300">
                  Try Suno Free
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                </a>
              </div>

              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="bg-slate-800/40 border border-white/5 rounded-[2rem] p-10 space-y-8 shadow-2xl backdrop-blur-sm">
                  <h4 className="text-white font-extrabold text-2xl tracking-tight">The Suno Advantage</h4>
                  {[
                    { title: "Full Multi-Minute Song Generation", desc: "Craft complete song structures from intro to chorus to outro." },
                    { title: "Hyper-Expressive Human Vocals", desc: "Synthesizes authentic emotion, vocal vibrato, and breath dynamics." },
                    { title: "Genre-Bending Acoustic Range", desc: "Mastery over 1,000+ musical styles, tempos, and regional instruments." },
                    { title: "Commercial DSP Monetization", desc: "Distribute generated songs to Spotify, Apple Music, and YouTube." }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-5 group/feature">
                      <div className="mt-1 bg-fuchsia-500/10 p-2 rounded-xl h-fit border border-fuchsia-500/20 group-hover/feature:bg-fuchsia-500/30 group-hover/feature:scale-110 transition-all duration-300">
                        <CheckCircle2 className="w-5 h-5 text-fuchsia-400" />
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
            href="/compare-tools/suno-vs-udio"
            className="group block p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/40 transition-all shadow-xs"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-fuchsia-500 mb-1">Top Ranking Comparison</div>
            <div className="text-sm font-extrabold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5">
              Suno vs Udio Showdown →
            </div>
            <p className="text-xs text-on-surface-variant mt-1">
              Catchy full pop songs vs complex musical inpainting and artistic audio nuance.
            </p>
          </Link>

          <Link
            href="/workflows/ai-music-production"
            className="group block p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/40 transition-all shadow-xs"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-500 mb-1">Which Tools Work Best Together?</div>
            <div className="text-sm font-extrabold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1.5">
              AI Music Producer Stack →
            </div>
            <p className="text-xs text-on-surface-variant mt-1">
              Generate songs on Suno, extract stems with Lalal.ai, and arrange in Ableton Live.
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
          <h3 className="text-sm font-extrabold text-pink-500 uppercase tracking-[0.25em] mb-4">Evaluation Criteria</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">What to Demand from AI Music Studios</h4>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Big Card 1 */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-fuchsia-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl group-hover:bg-fuchsia-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-fuchsia-500/10 text-fuchsia-500 rounded-2xl flex items-center justify-center border border-fuchsia-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Music2 className="w-8 h-8" />
                </div>
                <span className="text-7xl font-black text-slate-100 dark:text-slate-800 group-hover:text-fuchsia-500/10 transition-colors duration-500">01</span>
              </div>
              <h4 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">Vocal Realism & Organic Musicality</h4>
              <p className={figtreeBodyClass}>
                Listen closely to generated vocals: do they exhibit natural vibrato, breath pauses, and soulful tonal shifts, or do they sound like a synthesized vocoder? Superior generative models replicate authentic vocal acoustics, harmony layering, and instrument separation.
              </p>
            </div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div variants={fadeUpVariant} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-pink-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-pink-500/10 text-pink-500 rounded-2xl flex items-center justify-center mb-8 border border-pink-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-extrabold text-on-surface mb-4 tracking-tight">Commercial Streaming Rights</h4>
              <p className={figtreeBodyClass}>
                Ensure the platform grants you 100% commercial ownership to distribute generated music to Spotify and YouTube with indemnity protections.
              </p>
            </div>
          </motion.div>

          {/* Small Card 3 */}
          <motion.div variants={fadeUpVariant} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-rose-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-rose-500/5 rounded-full blur-2xl group-hover:bg-rose-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-rose-500/10 text-rose-500 rounded-2xl flex items-center justify-center mb-8 border border-rose-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <SlidersHorizontal className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-extrabold text-on-surface mb-4 tracking-tight">Song Extension & Inpainting</h4>
              <p className={figtreeBodyClass}>
                Top tools allow you to extend songs seamlessly from any timestamp or inpaint specific bars to swap out lyrics and solos.
              </p>
            </div>
          </motion.div>

          {/* Big Card 4 */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-fuchsia-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl group-hover:bg-fuchsia-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-fuchsia-500/10 text-fuchsia-500 rounded-2xl flex items-center justify-center border border-fuchsia-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <Disc3 className="w-8 h-8" />
                </div>
                <span className="text-7xl font-black text-slate-100 dark:text-slate-800 group-hover:text-fuchsia-500/10 transition-colors duration-500">04</span>
              </div>
              <h4 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">Multi-Track Stem Isolation for DAWs</h4>
              <p className={figtreeBodyClass}>
                Avoid platforms that only export flattened MP3 files. Professional music production requires downloading separate WAV tracks (vocals, drums, bass, synths) to mix and master inside Ableton Live, FL Studio, or Logic Pro.
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
          <h3 className="text-sm font-extrabold text-pink-400 uppercase tracking-[0.25em] mb-4">Implementation Guide</h3>
          <h4 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-10">How to Produce a Complete Song in 4 Steps</h4>
          
          <div className="space-y-12">
            {[
              { title: "Define Genre, Tempo & Mood Descriptors", text: "Start with evocative acoustic tags: '80s synthwave, driving analog bassline, lush retro synthesizers, 120 BPM, nostalgic energetic mood'." },
              { title: "Structure Lyrics with Verse & Chorus Metatags", text: "Format lyrics with bracketed tags ([Verse 1], [Chorus], [Guitar Solo], [Outro]) to guide the neural model through intentional harmonic transitions." },
              { title: "Inpaint & Extend Promising Takes", text: "When an initial generation delivers an unforgettable chorus, use song extension to generate following verses and an anthemic bridge from that exact timestamp." },
              { title: "Export Stems & Master in DAW", text: "Download the uncompressed WAV stems (vocals, drums, bass, synths), balance levels in your digital audio workstation, and master for streaming." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="flex gap-6 md:gap-10">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl font-black text-pink-400">
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
                <div className="w-16 h-1.5 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full mb-8" />
                <h4 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">
                  {useCases.find(u => u.id === activeTab)?.title}
                </h4>
                <p className={figtreeBodyClass}>
                  {useCases.find(u => u.id === activeTab)?.content}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-[80px] pointer-events-none" />
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
                className={`border rounded-[2rem] overflow-hidden transition-all duration-500 ${isOpen ? 'bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border-fuchsia-500/30 shadow-xl shadow-fuchsia-500/5 scale-[1.02]' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-fuchsia-500/20 hover:shadow-md'}`}
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
