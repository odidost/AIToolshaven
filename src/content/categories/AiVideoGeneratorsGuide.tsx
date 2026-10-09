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
  Film,
  PlayCircle,
  Clapperboard,
  Sliders,
  ShieldCheck,
  Globe,
  Mic,
  Smile,
  Users
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "How long can AI-generated videos be in 2026?",
    answer: "Pure text-to-video foundation models (like Runway Gen-3 and Sora) typically generate 5 to 10-second continuous cinematic clips per generation, which can be extended or chained seamlessly using keyframing. Digital avatar platforms (like HeyGen), however, can generate complete 30-minute training lectures and presentations in a single render."
  },
  {
    question: "Can I train a photorealistic AI avatar of myself?",
    answer: "Yes. Enterprise platforms allow you to record a 2-minute calibration video in front of your webcam. The AI synthesizes a 4K digital twin with your exact facial expressions, vocal inflection, and body language that can read any text script in over 40 languages."
  },
  {
    question: "What is the difference between Text-to-Video and Video Repurposing?",
    answer: "Text-to-Video (Runway, Pika, Luma) generates brand new raw visual footage from scratch using neural diffusion. Video Repurposing tools (Opus Clip, Munch) analyze existing long-form video podcasts, automatically finding viral moments, cropping subjects into 9:16 vertical format, and adding dynamic captions."
  }
];

const useCases = [
  {
    id: "marketing",
    title: "Growth Marketers & DTC",
    icon: <Zap className="w-5 h-5" />,
    content: "Scale paid acquisition without hiring actors or studio spaces. Performance teams create dozens of UGC-style hook variations, product demo animations, and seasonal ad creatives in minutes, testing 10x more creative variants to lower customer acquisition costs."
  },
  {
    id: "corporate",
    title: "Corporate L&D & HR",
    icon: <Users className="w-5 h-5" />,
    content: "Eliminate outdated employee onboarding PDFs. Corporate teams convert compliance handbooks into high-engagement training videos presented by photorealistic AI avatars, automatically translated into 40+ native languages for global workforces."
  },
  {
    id: "filmmakers",
    title: "Indie Filmmakers & VFX",
    icon: <Film className="w-5 h-5" />,
    content: "Compress pre-visualization and cinematic B-roll production. Independent directors generate hyper-detailed sci-fi establishing shots, atmospheric weather VFX, and complex drone flyovers that would otherwise require million-dollar Hollywood visual effects budgets."
  }
];

const glossaryTerms = [
  { term: "Temporal Consistency", def: "The ability of a generative video model to maintain object permanence, lighting, and anatomy without warping or morphing between frames." },
  { term: "Image-to-Video (I2V)", def: "Feeding a high-resolution still image as the initial anchor frame to guide the diffusion model's motion while preserving exact visual identity." },
  { term: "Neural Lip-Sync", def: "AI algorithms that analyze an audio track and reshape a digital human's mouth, jaw, and facial muscles in real-time to match foreign language phonemes." },
  { term: "Motion Brush / Motion Vectors", def: "A creative directing tool that lets you paint specific regions of a video to dictate exact directional movement (e.g. rushing water, blowing hair)." }
];

const alternatives = [
  { 
    name: "CapCut", 
    slug: "capcut",
    score: "9.8", 
    price: "Free / Freemium", 
    bestFor: "Short-Form Social Video & Auto-Captions", 
    highlight: "All-in-one cloud video creator with auto-subtitles, viral transitions, and instant social exports." 
  },
  { 
    name: "Opus Clip", 
    slug: "opus-clip",
    score: "9.7", 
    price: "Freemium / $9/mo", 
    bestFor: "Long-to-Shorts AI Repurposing", 
    highlight: "Automated clipping engine that detects hooks, reframes speakers, and scores virality for TikTok & Shorts." 
  },
  { 
    name: "Luma Dream Machine", 
    slug: "luma-dream-machine",
    score: "9.5", 
    price: "Freemium", 
    bestFor: "Cinematic Text-to-Video & Camera VFX", 
    highlight: "Next-gen foundation video model producing fluid 3D physical motion, camera pans, and photorealistic dynamics." 
  },
  { 
    name: "HeyGen", 
    slug: "heygen",
    score: "9.6", 
    price: "From $24/mo", 
    bestFor: "Studio AI Avatars & Voice Cloning", 
    highlight: "Industry-standard photorealistic avatar generation with 40+ language translation and natural lip-sync." 
  }
];

// ---- ANIMATIONS & STYLES ---- //

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const editorialSerifClass = "font-serif text-sm sm:text-base text-[#44403C] leading-relaxed";

export default function AiVideoGeneratorsGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const [roiMode, setRoiMode] = useState<"traditional" | "ai">("ai");

  return (
    <article className="w-full max-w-6xl mx-auto py-8 font-sans overflow-hidden">
      
      {/* 1. Hero Header */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-10 md:mb-14 relative rounded-2xl md:rounded-[2.5rem] bg-[#18181B] overflow-hidden border border-white/10 shadow-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/35 via-orange-500/10 to-transparent z-0" />
        <div className="absolute -top-36 -right-36 w-96 h-96 bg-orange-500/30 blur-[100px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-36 -left-36 w-96 h-96 bg-[#E11D48]/30 blur-[100px] rounded-full z-0 pointer-events-none" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/95 text-xs font-semibold tracking-wide mb-6 border border-white/20 backdrop-blur-md shadow-2xs">
            <Sparkles className="w-4 h-4 text-amber-300" /> 
            <span>2026 Generative Video Deep Dive</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight leading-[1.1]">
            The Ultimate Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-orange-300 to-amber-200">
              AI Video Generators
            </span>
          </h2>

          <p className="font-serif text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
            From temporal diffusion models and cinematic camera physics to digital avatar presenters and automated localization: how artificial intelligence is redefining video production economics.
          </p>
        </div>
      </motion.section>

      {/* 2. Definitive Overview - Two Alternating Blocks */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-12 md:mb-16 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/[0.07] bg-white text-xs font-semibold text-[#E11D48] shadow-2xs mb-2.5">
            <span>The Paradigm Shift</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-heading font-black text-[#0A0A0A] tracking-tight">
            From Production Sets to Neural Diffusion
          </h3>
        </motion.div>

        <div className="space-y-12">
          {/* Block 1 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] flex items-center justify-center text-[#E11D48] shadow-2xs">
                <Film className="w-6 h-6" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-heading font-bold text-[#0A0A0A] tracking-tight">
                The Death of Physical Production Bottlenecks
              </h4>
              <p className={editorialSerifClass}>
                Historically, creating commercial video required five-figure camera rentals, studio lighting grips, location permits, and multi-week post-production color grading. Modern generative video models comprehend real-world optical physics: focal depth, fluid dynamics, lighting bounce, and temporal consistency. A solo creator can prompt a sweeping 4K aerial flyover in seconds.
              </p>
            </div>
            
            <div className="order-1 md:order-2 bg-[#F9F9F6] border border-black/[0.08] rounded-2xl md:rounded-3xl aspect-video md:aspect-square p-6 md:p-8 relative overflow-hidden flex items-center justify-center shadow-2xs group">
               <div className="w-48 h-48 bg-gradient-to-tr from-[#E11D48]/20 to-amber-500/20 rounded-full blur-2xl absolute pointer-events-none" />
               <div className="w-full max-w-xs aspect-video rounded-xl bg-[#18181B] border border-white/20 p-4 flex flex-col justify-between relative z-10 shadow-xl transition-transform duration-500 group-hover:scale-105">
                 <div className="flex justify-between items-center">
                   <div className="flex items-center gap-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                     <div className="text-xs text-white font-mono font-semibold">REC 00:04:12</div>
                   </div>
                   <div className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-mono font-bold">60 FPS</div>
                 </div>
                 <div className="flex items-center justify-center my-2">
                   <PlayCircle className="w-10 h-10 text-white/90 drop-shadow-md" />
                 </div>
                 <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                   <div className="h-full w-2/3 bg-gradient-to-r from-[#E11D48] to-amber-400" />
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-[#F9F9F6] border border-black/[0.08] rounded-2xl md:rounded-3xl aspect-video md:aspect-square p-6 md:p-8 relative overflow-hidden flex items-center justify-center shadow-2xs group">
               <div className="w-48 h-48 bg-gradient-to-tr from-orange-500/20 to-[#E11D48]/20 rounded-full blur-2xl absolute pointer-events-none" />
               <div className="w-full max-w-sm space-y-3 relative z-10 transition-transform duration-500 group-hover:scale-105">
                 <div className="bg-white rounded-xl p-4 shadow-2xs border border-black/[0.08] flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] text-[#E11D48] flex items-center justify-center font-bold shrink-0">
                     <Smile className="w-5 h-5" />
                   </div>
                   <div className="space-y-1.5 flex-1">
                     <div className="h-2.5 w-2/3 bg-black/[0.08] rounded-full" />
                     <div className="h-2 w-1/2 bg-black/[0.04] rounded-full" />
                   </div>
                 </div>
                 <div className="bg-white rounded-xl p-3.5 shadow-2xs border border-black/[0.08] flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <Globe className="w-4 h-4 text-[#E11D48]" />
                     <span className="text-xs font-bold text-[#0A0A0A]">Auto Lip-Sync</span>
                   </div>
                   <span className="text-xs font-semibold text-emerald-700 px-2.5 py-0.5 bg-emerald-50 border border-emerald-200 rounded-full font-mono">
                     40+ Languages
                   </span>
                 </div>
               </div>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] flex items-center justify-center text-[#E11D48] shadow-2xs">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-heading font-bold text-[#0A0A0A] tracking-tight">
                Photorealistic Avatars &amp; Multilingual Scale
              </h4>
              <p className={editorialSerifClass}>
                Video is no longer bound by human scheduling or spoken language. Modern avatar engines clone real executives, spokespeople, or digital presenters with sub-millimeter facial tracking. A single English video script can be instantly translated and rendered in Spanish, Mandarin, German, and Japanese with flawless neural lip-syncing.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2.5: Interactive ROI / Cost Savings Calculator */}
      <motion.section 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16 max-w-5xl mx-auto"
      >
        <div className="relative bg-[#F9F9F6] border border-black/[0.08] rounded-2xl md:rounded-3xl p-6 sm:p-10 shadow-2xs overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#FED7AA]/35 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#FDA4AF]/25 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center mb-8">
            <div className="w-12 h-12 bg-[#FFF1F2] border border-[#FECDD3] text-[#E11D48] rounded-xl flex items-center justify-center mb-4 shadow-2xs">
              <Calculator className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-4xl font-heading font-black text-[#0A0A0A] tracking-tight mb-3">
              Calculate Video Production ROI
            </h3>
            <p className="font-serif text-sm sm:text-base text-[#57534E] max-w-xl">
              See the exact production capital, studio fees, and turnaround hours saved by automating commercial video with generative AI pipelines.
            </p>
          </div>

          <div className="flex justify-center mb-8 relative z-10">
            <div className="bg-white p-1 rounded-full border border-black/[0.08] shadow-2xs flex gap-1.5">
              <button 
                onClick={() => setRoiMode("traditional")}
                className={`px-5 py-2 rounded-full font-bold text-xs transition-all ${
                  roiMode === "traditional" 
                    ? "bg-[#0A0A0A] text-white shadow-xs" 
                    : "text-[#57534E] hover:text-[#0A0A0A]"
                }`}
              >
                Production Studio
              </button>
              <button 
                onClick={() => setRoiMode("ai")}
                className={`px-5 py-2 rounded-full font-bold text-xs transition-all ${
                  roiMode === "ai" 
                    ? "bg-[#E11D48] text-white shadow-xs" 
                    : "text-[#57534E] hover:text-[#0A0A0A]"
                }`}
              >
                AI Video Engine
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 text-center relative z-10">
            <div className="bg-white border border-black/[0.06] p-6 rounded-2xl shadow-2xs hover:border-[#E11D48]/30 transition-all">
              <Timer className={`w-6 h-6 mx-auto mb-2 ${roiMode === "ai" ? "text-emerald-600" : "text-[#78716C]"}`} />
              <div className="text-xs font-serif text-[#78716C] mb-1">Turnaround Time</div>
              <div className="text-2xl sm:text-3xl font-heading font-black text-[#0A0A0A] tracking-tight">
                {roiMode === "ai" ? "5 Minutes" : "3-4 Weeks"}
              </div>
            </div>
            <div className="bg-white border border-black/[0.06] p-6 rounded-2xl shadow-2xs hover:border-[#E11D48]/30 transition-all">
              <DollarSign className={`w-6 h-6 mx-auto mb-2 ${roiMode === "ai" ? "text-emerald-600" : "text-[#78716C]"}`} />
              <div className="text-xs font-serif text-[#78716C] mb-1">Cost per Video</div>
              <div className="text-2xl sm:text-3xl font-heading font-black text-[#0A0A0A] tracking-tight">
                {roiMode === "ai" ? "$12.00" : "$4,500+"}
              </div>
            </div>
            <div className="bg-white border border-black/[0.06] p-6 rounded-2xl shadow-2xs hover:border-[#E11D48]/30 transition-all">
              <LineChart className={`w-6 h-6 mx-auto mb-2 ${roiMode === "ai" ? "text-[#E11D48]" : "text-[#78716C]"}`} />
              <div className="text-xs font-serif text-[#78716C] mb-1">Language Localization</div>
              <div className="text-2xl sm:text-3xl font-heading font-black text-[#0A0A0A] tracking-tight">
                {roiMode === "ai" ? "40+ Dialects" : "1 ($$$ Extra)"}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. Sponsor Spotlight - High-End Dark Card */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-12 md:mb-16 max-w-5xl mx-auto"
      >
        <div className="relative rounded-2xl md:rounded-[2.5rem] bg-[#18181B] overflow-hidden shadow-xl border border-white/10 p-8 md:p-12 text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E11D48]/20 via-orange-500/10 to-amber-500/10 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-1/2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-400/20 shadow-inner">
                <Crown className="w-3.5 h-3.5" /> 
                <span>Editor&apos;s Choice 2026</span>
              </div>
              
              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight tracking-tight">
                Scale your video operations globally with <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-orange-300 to-amber-200">
                  HeyGen
                </span>
              </h3>
              
              <p className="font-serif text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                Traditional video cameras and dubbing studios cannot keep pace with digital commerce. HeyGen allows enterprises to produce studio-grade avatar videos from text scripts, complete with custom cloned digital twins, flawless lip-syncing, and native translation into 40+ languages.
              </p>

              <a 
                href="https://www.heygen.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#0A0A0A] hover:bg-[#FFF1F2] hover:text-[#E11D48] rounded-full font-bold text-sm transition-all shadow-xs hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Try HeyGen Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 space-y-4 backdrop-blur-md">
                <h4 className="text-white font-bold text-base tracking-tight mb-2">The HeyGen Advantage</h4>
                {[
                  { title: "Instant Custom Avatar Twin", desc: "Create a 4K digital twin from a 2-minute webcam recording." },
                  { title: "40+ Language Video Translation", desc: "Translate existing videos with authentic voice cloning & lip-sync." },
                  { title: "Interactive Streaming Avatars", desc: "Embed real-time conversational AI video agents into your app." },
                  { title: "Enterprise SOC 2 Compliance", desc: "Your proprietary video data is fully protected and private." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-0.5 bg-[#E11D48]/20 border border-[#E11D48]/40 p-1 rounded-lg h-fit text-[#FDA4AF] shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-xs sm:text-sm">{feature.title}</div>
                      <div className="font-serif text-xs text-white/70 leading-relaxed mt-0.5">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3.5: Top 3 Alternatives Matrix */}
      <motion.section 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-12 md:mb-16 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/[0.07] bg-white text-xs font-semibold text-[#E11D48] shadow-2xs mb-2.5">
            <span>Market Landscape</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#0A0A0A] tracking-tight">
            Top Alternative Platforms
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {alternatives.map((alt, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUpVariant} 
              className="bg-white border border-black/[0.08] p-5 rounded-2xl hover:shadow-xs hover:border-[#E11D48]/40 hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <Link href={`/tool/${alt.slug}`} className="text-base font-bold font-heading text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors truncate">
                    {alt.name}
                  </Link>
                  <div className="bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 font-bold px-2 py-0.5 rounded-full text-[11px] font-mono shrink-0">
                    {alt.score}/10
                  </div>
                </div>
                <div className="space-y-1.5 mb-4 text-xs font-serif">
                  <div className="flex justify-between border-b border-black/[0.06] pb-1">
                    <span className="text-[#78716C]">Starting Price</span>
                    <span className="font-semibold text-[#0A0A0A] font-sans">{alt.price}</span>
                  </div>
                  <div className="flex justify-between border-b border-black/[0.06] pb-1">
                    <span className="text-[#78716C]">Best For</span>
                    <span className="font-semibold text-[#0A0A0A] font-sans truncate ml-2">{alt.bestFor}</span>
                  </div>
                  <div className="text-[#57534E] text-[11px] leading-relaxed pt-1 font-serif line-clamp-2">
                    <span className="font-semibold text-[#0A0A0A]">Highlight: </span>{alt.highlight}
                  </div>
                </div>
              </div>
              <Link 
                href={`/tool/${alt.slug}`}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 bg-[#F9F9F6] hover:bg-[#FFF1F2] border border-black/[0.06] hover:border-[#FECDD3] text-[#44403C] hover:text-[#E11D48] font-semibold text-xs rounded-full transition-colors"
              >
                <span>View Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Head-to-Head Comparison Quick Bridges */}
        <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F9F9F6] border border-black/[0.08]">
          <Link
            href="/compare-tools/opus-clip-vs-capcut"
            className="group block p-3.5 rounded-xl bg-white border border-black/[0.06] hover:border-[#E11D48]/40 hover:-translate-y-0.5 transition-all shadow-2xs"
          >
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E11D48] mb-1">Top Ranking Comparison</div>
            <div className="text-xs font-bold text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors flex items-center gap-1">
              Opus Clip vs CapCut →
            </div>
            <p className="font-serif text-[11px] text-[#78716C] mt-1 line-clamp-1">
              Automated AI clipping vs full-timeline creator editing suite.
            </p>
          </Link>

          <Link
            href="/tool/luma-dream-machine"
            className="group block p-3.5 rounded-xl bg-white border border-black/[0.06] hover:border-[#E11D48]/40 hover:-translate-y-0.5 transition-all shadow-2xs"
          >
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 mb-1">Generative Video Model</div>
            <div className="text-xs font-bold text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors flex items-center gap-1">
              Luma Dream Machine Profile →
            </div>
            <p className="font-serif text-[11px] text-[#78716C] mt-1 line-clamp-1">
              Realistic physical motion simulation and fluid camera movements.
            </p>
          </Link>

          <Link
            href="/workflows/faceless-youtube"
            className="group block p-3.5 rounded-xl bg-white border border-black/[0.06] hover:border-[#E11D48]/40 hover:-translate-y-0.5 transition-all shadow-2xs"
          >
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 mb-1">Workflow Stack</div>
            <div className="text-xs font-bold text-[#0A0A0A] group-hover:text-[#E11D48] transition-colors flex items-center gap-1">
              Faceless YouTube Video Stack →
            </div>
            <p className="font-serif text-[11px] text-[#78716C] mt-1 line-clamp-1">
              Script, voice, edit, and optimize with ChatGPT, ElevenLabs &amp; CapCut.
            </p>
          </Link>
        </motion.div>
      </motion.section>

      {/* 4. Buyer's Guide - Bento Box Layout */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 md:mb-16 max-w-6xl mx-auto"
      >
        <motion.div variants={fadeUpVariant} className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/[0.07] bg-white text-xs font-semibold text-[#E11D48] shadow-2xs mb-2.5">
            <span>Evaluation Criteria</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-heading font-black text-[#0A0A0A] tracking-tight">
            What to Demand from Pro Video Tools
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Big Card 1 */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-white border border-black/[0.08] rounded-2xl p-6 md:p-8 hover:shadow-xs hover:border-[#E11D48]/40 transition-all duration-300 group overflow-hidden relative shadow-2xs">
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#FFF1F2] text-[#E11D48] rounded-xl flex items-center justify-center border border-[#FECDD3] shadow-2xs">
                  <Clapperboard className="w-6 h-6" />
                </div>
                <span className="text-5xl font-black font-heading text-black/[0.05] group-hover:text-[#E11D48]/10 transition-colors">01</span>
              </div>
              <h4 className="text-xl font-bold font-heading text-[#0A0A0A] mb-2 tracking-tight">
                Temporal Consistency &amp; Physics
              </h4>
              <p className={editorialSerifClass}>
                The single biggest differentiator between amateur and professional AI video is temporal stability. Ensure the engine does not warp limbs, glitch background geometry, or flicker lighting across generation frames. Top-tier tools understand 3D spatial permanence.
              </p>
            </div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div variants={fadeUpVariant} className="bg-white border border-black/[0.08] rounded-2xl p-6 md:p-8 hover:shadow-xs hover:border-[#E11D48]/40 transition-all duration-300 group overflow-hidden relative shadow-2xs">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#FFF1F2] text-[#E11D48] rounded-xl flex items-center justify-center mb-4 border border-[#FECDD3] shadow-2xs">
                <Sliders className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-heading text-[#0A0A0A] mb-2 tracking-tight">
                Camera Motion Controls
              </h4>
              <p className={editorialSerifClass}>
                Look for explicit cinematic camera directing sliders: pan, tilt, zoom, pedestal, and orbital drone paths.
              </p>
            </div>
          </motion.div>

          {/* Small Card 3 */}
          <motion.div variants={fadeUpVariant} className="bg-white border border-black/[0.08] rounded-2xl p-6 md:p-8 hover:shadow-xs hover:border-[#E11D48]/40 transition-all duration-300 group overflow-hidden relative shadow-2xs">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#FFF1F2] text-[#E11D48] rounded-xl flex items-center justify-center mb-4 border border-[#FECDD3] shadow-2xs">
                <Mic className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-heading text-[#0A0A0A] mb-2 tracking-tight">
                Audio &amp; Lip-Sync
              </h4>
              <p className={editorialSerifClass}>
                If generating talking head videos, demand sub-pixel neural lip-sync and integrated expressive voice cloning.
              </p>
            </div>
          </motion.div>

          {/* Big Card 4 */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-white border border-black/[0.08] rounded-2xl p-6 md:p-8 hover:shadow-xs hover:border-[#E11D48]/40 transition-all duration-300 group overflow-hidden relative shadow-2xs">
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#FFF1F2] text-[#E11D48] rounded-xl flex items-center justify-center border border-[#FECDD3] shadow-2xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-5xl font-black font-heading text-black/[0.05] group-hover:text-[#E11D48]/10 transition-colors">04</span>
              </div>
              <h4 className="text-xl font-bold font-heading text-[#0A0A0A] mb-2 tracking-tight">
                Ethical Training &amp; Commercial Indemnity
              </h4>
              <p className={editorialSerifClass}>
                Enterprise media demands ethical peace of mind. Ensure the provider trains on licensed stock datasets or proprietary video corpuses, shielding your brand from copyright infringement claims and likeness theft liabilities.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 4.5: Step-by-Step "How-To" Walkthrough */}
      <motion.section 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-12 md:mb-16 max-w-5xl mx-auto bg-[#18181B] rounded-2xl md:rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-white border border-white/10 shadow-xl"
      >
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-amber-300 text-xs font-semibold mb-3">
            <span>Implementation Guide</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight mb-8">
            How to Generate Cinematic Video in 4 Steps
          </h3>
          
          <div className="space-y-6">
            {[
              { title: "Anchor Keyframes with Image-to-Video", text: "Never generate blind text-to-video if you need specific character or product branding. Render a pristine 4K still image first and pass it as the starting keyframe." },
              { title: "Prompt Explicit Temporal Motion", text: "Describe movement chronologically: 'Slow steady forward dolly zoom, subject turns head toward camera at second 2, golden hour lens flare reflects on glass'." },
              { title: "Use Motion Brushes for Micro-Control", text: "If only one element should move (such as river rapids while mountains stay static), paint a motion mask over the water to isolate the animation." },
              { title: "Extend & Chain Scene Blocks", text: "Generate in 4 to 8-second increments. Use the final frame of clip 1 as the anchor of clip 2 to construct cohesive multi-shot cinematic sequences." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="flex gap-4 sm:gap-6 items-start">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-black font-mono text-amber-300 shadow-inner">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">{step.title}</h4>
                  <p className="font-serif text-xs sm:text-sm text-white/80 leading-relaxed font-normal">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. Use Cases - Interactive Tabs */}
      <motion.section 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16 max-w-5xl mx-auto bg-[#F9F9F6] border border-black/[0.08] rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xs relative overflow-hidden"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/[0.07] bg-white text-xs font-semibold text-[#E11D48] shadow-2xs mb-2.5">
            <span>Workflow Verticals</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#0A0A0A] tracking-tight">
            Who Benefits Most?
          </h3>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Tab Navigation */}
          <div className="md:w-1/3 space-y-2.5">
            {useCases.map((uc) => {
              const isActive = activeTab === uc.id;
              return (
                <button
                  key={uc.id}
                  onClick={() => setActiveTab(uc.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-left border text-xs sm:text-sm ${
                    isActive 
                      ? 'bg-[#E11D48] text-white border-[#E11D48] shadow-xs translate-x-0.5' 
                      : 'bg-white text-[#57534E] hover:border-[#FECDD3] hover:text-[#E11D48] hover:bg-[#FFF1F2] border-black/[0.07] shadow-2xs'
                  }`}
                >
                  <div className={`${isActive ? 'text-white' : 'text-[#78716C]'} transition-colors`}>
                    {uc.icon}
                  </div>
                  <span>{uc.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="md:w-2/3 bg-white border border-black/[0.07] rounded-2xl p-6 sm:p-8 shadow-2xs relative overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="w-10 h-1 bg-[#E11D48] rounded-full mb-4" />
                <h4 className="text-xl font-bold font-heading text-[#0A0A0A] mb-3 tracking-tight">
                  {useCases.find(u => u.id === activeTab)?.title}
                </h4>
                <p className={editorialSerifClass}>
                  {useCases.find(u => u.id === activeTab)?.content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* 5.5: Topical Glossary */}
      <motion.section 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="mb-12 md:mb-16 max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/[0.07] bg-white text-xs font-semibold text-[#E11D48] shadow-2xs mb-2.5">
            <span>Technical Foundation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#0A0A0A] tracking-tight">
            Core Terminology &amp; Metrics
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {glossaryTerms.map((item, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="bg-white border border-black/[0.08] p-5 sm:p-6 rounded-2xl shadow-2xs hover:shadow-xs hover:border-[#E11D48]/30 transition-all">
              <div className="flex items-center gap-2.5 mb-2">
                <BookOpen className="w-4 h-4 text-[#E11D48]" />
                <h4 className="text-base font-bold font-heading text-[#0A0A0A]">{item.term}</h4>
              </div>
              <p className="font-serif text-xs sm:text-sm text-[#57534E] leading-relaxed">{item.def}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 6. SEO FAQ */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-3xl mx-auto"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/[0.07] bg-white text-xs font-semibold text-[#E11D48] shadow-2xs mb-2.5">
            <span>Clear Answers</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#0A0A0A] tracking-tight">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="space-y-3">
          {faqData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen 
                    ? 'bg-gradient-to-br from-white to-[#FFF1F2]/20 border-[#FECDD3] shadow-xs' 
                    : 'bg-white border-black/[0.08] hover:border-[#FECDD3] shadow-2xs'
                }`}
              >
                <button 
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="font-bold font-heading text-[#0A0A0A] text-sm sm:text-base tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    isOpen 
                      ? 'bg-[#E11D48] text-white shadow-xs rotate-180' 
                      : 'bg-[#F9F9F6] border border-black/[0.06] text-[#78716C]'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm font-serif text-[#57534E] leading-relaxed">
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
