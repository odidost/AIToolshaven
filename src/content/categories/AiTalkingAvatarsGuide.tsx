"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Sparkles, 
  UserCheck, 
  Languages, 
  ShieldCheck, 
  Presentation, 
  Award, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  Sliders, 
  CheckCircle2, 
  Video, 
  Play, 
  DollarSign, 
  GraduationCap, 
  Briefcase,
  Smile,
  Mic2
} from "lucide-react";

// ---- DATA STRUCTURES ---- //

const useCases = [
  {
    id: "enterprise-training",
    title: "Corporate L&D & Employee Onboarding",
    icon: <Briefcase className="w-5 h-5 text-cyan-500" />,
    content: "Global multinational corporations produce hundreds of compliance, cybersecurity, and HR policy videos annually. Using AI talking avatars, enterprises deploy photorealistic trainers that present complex policies in 40+ languages with synchronized regional accents, cutting production timelines from six months to three days."
  },
  {
    id: "saas-sales",
    title: "B2B SaaS Demos & Hyper-Personalized Outreach",
    icon: <Presentation className="w-5 h-5 text-teal-500" />,
    content: "Sales development representatives (SDRs) and customer success teams generate thousands of individualized video emails. By plugging prospective client names and company metrics into API-driven digital twins, outreach achieves 3.8x higher response rates than generic plain-text emails."
  },
  {
    id: "global-elearning",
    title: "Online Universities & Scaled E-Learning",
    icon: <GraduationCap className="w-5 h-5 text-blue-500" />,
    content: "Professors and masterclass instructors create extensive 40-hour lecture catalogs without physical studio exhaustion. Course modules can be updated dynamically: when tax laws or software versions change, updating a single sentence in the script re-renders the professor's avatar instantly without re-shooting."
  },
  {
    id: "customer-support",
    title: "Interactive Virtual Agents & FAQ Guides",
    icon: <Smile className="w-5 h-5 text-indigo-500" />,
    content: "Healthcare networks and financial institutions deploy empathetic virtual assistants to explain complex insurance claims, loan applications, and patient discharge instructions, providing a reassuring human face 24/7 without placing burden on clinical staff."
  }
];

const glossaryTerms = [
  {
    term: "Neural Viseme-to-Phoneme Lip Sync",
    def: "Machine learning models that map exact acoustic vocal sounds (phonemes) to anatomical mouth shapes (visemes), ensuring frame-perfect lip movement across any spoken language."
  },
  {
    term: "Eye Saccade & Micro-Expression Synthesis",
    def: "Subtle, non-repetitive micro-movements—including natural eye blinks, gaze shifts, eyebrow raises, and head tilts—that eliminate the eerie 'uncanny valley' effect."
  },
  {
    term: "Instant Webcam Digital Twin Calibration",
    def: "The process of training an avatar from a 2-minute webcam recording and consent video, generating a private photorealistic presenter clone complete with voice timbre."
  },
  {
    term: "Biometric Liveness Verification",
    def: "Rigorous security compliance protocols requiring explicit real-time video consent from the person being cloned to prevent malicious deepfake impersonation."
  },
  {
    term: "Neural Audio Inpainting & Dubbing",
    def: "The seamless replacement of dialogue in existing video footage where the speaker's mouth movements are modified to match newly translated foreign audio."
  },
  {
    term: "Zero-Latency Real-Time Avatar API",
    def: "Streaming infrastructure capable of rendering conversational interactive 3D/2D avatars with under 500ms latency for live web customer support and Zoom integrations."
  }
];

const faqData = [
  {
    question: "What is the best AI talking avatar generator in 2026?",
    answer: "HeyGen and Synthesia lead the global industry for professional presenter videos. HeyGen is renowned for instantaneous webcam avatar calibration, hyper-expressive facial dynamics, and flawless multilingual translation. Synthesia is the gold standard for enterprise Fortune 100 teams requiring deep SCORM compliance and enterprise SSO."
  },
  {
    question: "Can people tell that an AI avatar is not a real human presenter?",
    answer: "With 2026 foundation models, it is almost impossible for an untrained eye to detect the difference on standard displays. Modern engines synthesize authentic subsurface skin scattering, light reflections in the pupils, natural breathing pauses, and subtle head tilts that completely transcend the uncanny valley."
  },
  {
    question: "How do I create a digital twin avatar of myself?",
    answer: "Most platforms allow you to record a simple 2-minute calibration script in front of a standard 1080p or 4K webcam with good lighting. You read an explicit legal consent agreement, and within 1 to 2 hours, your private digital clone and cloned voice are ready to deliver any future script."
  },
  {
    question: "Can one AI avatar speak multiple languages fluently?",
    answer: "Yes. Once your digital twin or a stock presenter is selected, the platform can voice your script in over 40 to 120 languages and dialects (including Mandarin, Spanish, Arabic, German, and Japanese). The avatar's mouth movements automatically adjust to the unique phonetics of each language."
  },
  {
    question: "Are AI talking avatar videos secure from unauthorized deepfakes?",
    answer: "Enterprise-grade platforms enforce strict biometric verification. Users cannot upload photos or videos of celebrities, politicians, or colleagues without verified live video consent and legal identity validation, preventing malicious impersonation and fraud."
  },
  {
    question: "What is the difference between D-ID and HeyGen?",
    answer: "D-ID specializes in lightweight, low-latency conversational agents from single still photos and real-time streaming APIs for live chat. HeyGen focuses on broadcast-quality 4K corporate video production, multi-scene presentation canvases, screen recording integration, and custom digital twins."
  }
];

const alternatives = [
  { 
    name: "HeyGen", 
    slug: "heygen",
    score: "9.9", 
    price: "From $29/mo", 
    bestFor: "Best Overall for Photorealism & Instant Digital Twins", 
    highlight: "Industry-leading digital presenter platform featuring studio-grade avatars, 120+ languages, rapid webcam cloning, and video translation." 
  },
  { 
    name: "Synthesia", 
    slug: "synthesia",
    score: "9.8", 
    price: "From $22/mo", 
    bestFor: "Enterprise Corporate Training & Multilingual Compliance", 
    highlight: "Fortune 500 benchmark for global L&D training with 140+ diverse stock avatars, collaborative workspaces, and SCORM e-learning exports." 
  },
  { 
    name: "D-ID", 
    slug: "d-id",
    score: "9.7", 
    price: "From $16/mo", 
    bestFor: "Interactive Live Agents & Photo-to-Video Streaming", 
    highlight: "Pioneering creative reality studio that animates any portrait photo into a talking avatar with real-time low-latency API integration." 
  },
  { 
    name: "Colossyan Creator", 
    slug: "colossyan-creator",
    score: "9.6", 
    price: "From $19/mo", 
    bestFor: "Workplace Learning & Multi-Avatar Conversations", 
    highlight: "Specialized training video creator allowing up to 4 avatars to converse in a single scene with automated branching quiz questions." 
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

export default function AiTalkingAvatarsGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-cyan-500/20 shadow-xl shadow-cyan-500/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-600/20 via-slate-900/60 to-slate-950/90 pointer-events-none" />
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-md">
            <UserCheck className="w-4 h-4" />
            2026 Digital Twins & Hyper-Realistic Video Benchmark
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Next-Gen AI Talking <br className="hidden md:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
              Avatar Generators
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-8">
            The technical deep dive into photorealistic digital twins, multilingual audio-driven facial performance, and automated studio-grade presenter video synthesis.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl pt-6 border-t border-slate-800">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-white">40+</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Fluent Languages</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-cyan-400">4K HDR</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Photorealistic Rendering</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-teal-400">&lt; 0.05s</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Lip-Audio Sync Delay</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-blue-400">90%</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Studio Cost Reduction</span>
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
          <h2 className="text-sm font-extrabold text-cyan-500 uppercase tracking-[0.25em] mb-3">Definitive Overview</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Beyond the Uncanny Valley</h3>
        </div>

        <div className="space-y-10 md:space-y-12">
          {/* Bento Card 1 */}
          <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/30 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                <Smile className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-on-surface tracking-tight">Audio-Driven Viseme Synthesis vs. Rigid Keyframing</h4>
              <p className={figtreeBodyClass}>
                Early avatar tools pasted a moving 2D mouth overlay onto a motionless torso. Viewers immediately spotted the artificiality: the eyes were vacant, shoulders didn't rise with inhalations, and mouth shapes felt like disjointed cartoons.
              </p>
              <p className={figtreeDarkBodyClass}>
                <strong>2026 Generative Avatar Models (like HeyGen and Synthesia) operate on neural radiance fields and volumetric diffusion.</strong> The audio waveform directly drives the entire facial muscular anatomy—causing cheeks to elevate during a smile, pupils to dilate, and natural eye saccades to occur naturally as thoughts are expressed.
              </p>
            </div>
            <div className="md:w-1/2 w-full bg-slate-950 p-6 rounded-2xl border border-slate-800 text-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span>Volumetric Avatar Pipeline</span>
                <span className="text-cyan-400">HeyGen 4.0 Neural Core</span>
              </div>
              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Audio Ingestion</span>
                  <span className="text-emerald-400 font-bold">48kHz Voice Sample</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Viseme & Saccade Prediction</span>
                  <span className="text-cyan-400 font-bold">60 FPS Muscular Mesh</span>
                </div>
                <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex justify-between items-center">
                  <span className="text-slate-300">Volumetric Render</span>
                  <span className="text-white font-bold">4K Photorealistic Video</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-cyan-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero uncanny valley with authentic eye contact & breathing</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2 */}
          <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/30 flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500">
                <Languages className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-on-surface tracking-tight">One Presenter, 40 Global Languages</h4>
              <p className={figtreeBodyClass}>
                Producing a global product announcement previously required flying executives to international studios or hiring dozens of voice dubbers whose lips never matched the video.
              </p>
              <p className={figtreeDarkBodyClass}>
                With AI avatar translation, your CEO records an English presentation once. The neural engine translates the script into Mandarin, Spanish, French, and Arabic—cloning their exact vocal timbre and re-rendering their lips so they appear to be native speakers in every market.
              </p>
            </div>
            <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">Traditional Studio Dubbing</span>
                <span className="text-2xl font-extrabold text-red-300">Desynchronized</span>
                <p className="text-xs text-slate-400 mt-2">Foreign voices speaking over mismatched English lip movements with awkward pauses.</p>
              </div>
              <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">2026 AI Neural Lip Dub</span>
                <span className="text-2xl font-extrabold text-cyan-300">Native Realism</span>
                <p className="text-xs text-slate-400 mt-2">Mouth geometry dynamically morphs to match foreign phonetics with cloned personal voice.</p>
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
          <h2 className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase mb-2">Corporate Production Economics</h2>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight">Studio Production vs. Enterprise AI Presenters</h3>
          <p className="text-slate-400 mt-3 text-sm md:text-base">
            Benchmark the annual cost of producing 50 corporate training and executive communication videos.
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
              Physical Studio Shoots ($3,500/video)
            </button>
            <button
              onClick={() => setRoiMode("ai")}
              className={`px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
                roiMode === "ai" 
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 font-black" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              2026 AI Avatar Suite ($89/mo)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Annual Video Budget (50 Videos)</span>
              <div className="text-3xl md:text-4xl font-black text-white mt-2">
                {roiMode === "traditional" ? "$175,000" : "$1,068"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "Studio rental, lighting gaffers, teleprompter techs, sound engineers, and professional actors."
                : "An annual enterprise subscription with unlimited rendering minutes and custom digital twin."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Policy Update Turnaround</span>
              <div className="text-3xl md:text-4xl font-black text-cyan-400 mt-2">
                {roiMode === "traditional" ? "3 Weeks" : "4 Minutes"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "Re-booking actors, renting studio time, and setting up cameras just to change a 10-second clause."
                : "Edit the text in your browser, hit re-render, and publish the updated video across LMS portals."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Multilingual Reach</span>
              <div className="text-3xl md:text-4xl font-black text-teal-400 mt-2">
                {roiMode === "traditional" ? "1-2 Languages" : "40+ Languages"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "Hiring foreign voice actors and translation coordinators costs an additional $1,200 per language."
                : "Instant automatic multilingual translation with synchronized viseme matching included."}
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
          <h2 className="text-sm font-extrabold text-cyan-500 uppercase tracking-[0.25em] mb-3">Industry Solutions</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Digital Presenters for Every Enterprise Touchpoint</h3>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {useCases.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-cyan-500 text-slate-950 font-black shadow-md shadow-cyan-500/20"
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
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-500">
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
          <h2 className="text-sm font-extrabold text-cyan-500 uppercase tracking-[0.25em] mb-3">Architectural Comparison</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Talking Avatar Capabilities Matrix</h3>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-outline-variant/30 bg-surface-container-low">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-container border-b border-outline-variant/40 text-on-surface text-xs uppercase tracking-wider font-extrabold">
              <tr>
                <th className="p-4 md:p-5">Platform</th>
                <th className="p-4 md:p-5">Avatar Realism</th>
                <th className="p-4 md:p-5">Digital Twin Calibration</th>
                <th className="p-4 md:p-5">Multilingual Lip Sync</th>
                <th className="p-4 md:p-5">Primary Strength</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 text-on-surface-variant font-medium">
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                  HeyGen
                </td>
                <td className="p-4 md:p-5 text-cyan-500 font-bold">Unparalleled 4K</td>
                <td className="p-4 md:p-5 text-cyan-500 font-bold">2-Min Instant Webcam</td>
                <td className="p-4 md:p-5 text-cyan-500 font-bold">Dynamic Viseme Match</td>
                <td className="p-4 md:p-5">Hyper-realistic custom avatars and viral video translation</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                  Synthesia
                </td>
                <td className="p-4 md:p-5">Executive Studio Grade</td>
                <td className="p-4 md:p-5">Custom Studio + Express</td>
                <td className="p-4 md:p-5">140+ Languages</td>
                <td className="p-4 md:p-5">Global enterprise training, SCORM, and LMS integrations</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  D-ID
                </td>
                <td className="p-4 md:p-5">High-Fidelity Expressive</td>
                <td className="p-4 md:p-5">Single Still Photo</td>
                <td className="p-4 md:p-5">Fast Phoneme Sync</td>
                <td className="p-4 md:p-5">Low-latency live streaming agents and photo animation</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                  Colossyan Creator
                </td>
                <td className="p-4 md:p-5">Realistic Corporate</td>
                <td className="p-4 md:p-5">Webcam / Studio</td>
                <td className="p-4 md:p-5">70+ Languages</td>
                <td className="p-4 md:p-5">Multi-avatar dialogue and interactive training quizzes</td>
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
          <h2 className="text-sm font-extrabold text-cyan-500 uppercase tracking-[0.25em] mb-3">Buyer's Checklist</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">4 Must-Haves in an AI Avatar Platform</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold">1</div>
            <h4 className="text-xl font-bold text-on-surface">Subsurface Skin Scattering & Natural Saccades</h4>
            <p className={figtreeBodyClass}>
              Avatars that stare unblinkingly into the camera immediately trigger the uncanny valley. Ensure the platform implements authentic eye saccades, natural breathing rhythms, and dynamic head tilts.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center font-bold">2</div>
            <h4 className="text-xl font-bold text-on-surface">Biometric Consent & Anti-Impersonation Protection</h4>
            <p className={figtreeBodyClass}>
              Enterprise security demands stringent safeguards. The software must mandate live video consent agreements before allowing anyone to clone a personal voice or facial identity.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">3</div>
            <h4 className="text-xl font-bold text-on-surface">Integrated Presentation Canvas & Screen Recording</h4>
            <p className={figtreeBodyClass}>
              A talking head by itself is boring. The platform should offer a complete video editing canvas that lets you position the avatar as a circular bubble beside software screen recordings, slide decks, and kinetic text cards.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">4</div>
            <h4 className="text-xl font-bold text-on-surface">Automated Multilingual Voice Cloning</h4>
            <p className={figtreeBodyClass}>
              When creating global communications, your digital twin shouldn't switch to a generic robot voice in German or Spanish. Premier suites preserve your personal vocal timbre and accent across all foreign translations.
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
          <h2 className="text-sm font-extrabold text-cyan-500 uppercase tracking-[0.25em] mb-3">Top Directory Picks</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">The Gold Standard AI Presenter Platforms</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alternatives.map((tool) => (
            <div 
              key={tool.slug}
              className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h4 className="text-2xl font-black text-on-surface">{tool.name}</h4>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 font-extrabold text-sm">
                    ★ {tool.score}
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-400 mb-2">{tool.price}</div>
                <div className="text-xs font-semibold text-cyan-500 mb-4">{tool.bestFor}</div>
                <p className={figtreeBodyClass}>
                  {tool.highlight}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                <Link 
                  href={`/tool/${tool.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-500 hover:text-cyan-400 transition-colors"
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
          <h2 className="text-sm font-extrabold text-cyan-500 uppercase tracking-[0.25em] mb-3">Technical Lexicon</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Digital Twin & Avatar Terminology</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {glossaryTerms.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2"
            >
              <h4 className="text-base font-bold text-on-surface flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
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
          <h3 className="text-sm font-extrabold text-cyan-500 uppercase tracking-[0.25em] mb-3">Frequently Asked Questions</h3>
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
                className="w-full text-left p-6 font-bold text-on-surface flex justify-between items-center gap-4 hover:text-cyan-500 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-cyan-500" : ""}`} />
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
