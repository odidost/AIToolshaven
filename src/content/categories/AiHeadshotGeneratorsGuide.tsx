"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  UserCheck, 
  Camera, 
  Sparkles, 
  ShieldCheck, 
  Briefcase, 
  Award, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  Sliders, 
  CheckCircle2, 
  Building2, 
  Users, 
  DollarSign, 
  AlertTriangle,
  Smile,
  Layers,
  Palette
} from "lucide-react";

// ---- DATA STRUCTURES ---- //

const useCases = [
  {
    id: "executives-linkedin",
    title: "Corporate Executives & Jobseekers",
    icon: <Briefcase className="w-5 h-5 text-blue-500" />,
    content: "Job seekers and senior executives updating LinkedIn profiles need authoritative, warm, and professional portraits without booking an expensive studio photographer. AI engines generate 100+ tailored looks spanning navy blazers, crisp button-downs, and modern architectural backdrops tailored for executive presence."
  },
  {
    id: "remote-teams",
    title: "Distributed & Remote Corporate Teams",
    icon: <Users className="w-5 h-5 text-indigo-500" />,
    content: "Companies with employees scattered across 15 time zones struggle with disjointed team page aesthetics. Enterprise AI headshot suites enforce uniform lighting, identical corporate color palettes, and matching framing angles by having remote staff upload 10 casual phone selfies from their kitchen table."
  },
  {
    id: "realtors-consultants",
    title: "Real Estate Agents & Advisors",
    icon: <Building2 className="w-5 h-5 text-amber-500" />,
    content: "Client-facing professionals depend on high-trust visual branding for billboards, business cards, and social ads. Specialized portrait tools render natural smiles, outdoor luxury architectural backgrounds, and tailored suits that communicate high competence and approachable warmth."
  },
  {
    id: "medical-residency",
    title: "Medical & Academic Residency (ERAS)",
    icon: <Award className="w-5 h-5 text-cyan-500" />,
    content: "Medical students and university fellows submitting ERAS residency applications face strict standardized photo guidelines. The AI formats traditional grey studio backgrounds, dark formal attire, and compliant 2.5x3.5 inch dimensions guaranteed to pass admissions committee checks."
  }
];

const glossaryTerms = [
  {
    term: "Facial LoRA (Low-Rank Adaptation)",
    def: "A lightweight neural fine-tuning adapter trained on 8-15 user selfies that locks in your exact bone structure, eye shape, and smile geometry across dozens of new backgrounds."
  },
  {
    term: "Iris Catchlight Physics",
    def: "The natural reflection of ambient studio light in the pupils. Without accurate catchlights, AI-generated portraits suffer from the 'dead eye' look common in amateur avatars."
  },
  {
    term: "Sub-Dermal Skin Texture (Subsurface Scattering)",
    def: "The subtle penetration and diffusion of light through human skin layers. 2026 engines preserve real pores, freckles, and micro-blemishes to avoid the waxy, airbrushed 'plastic skin' artifact."
  },
  {
    term: "Wardrobe & Collar Inpainting",
    def: "The neural compositing of tailored corporate suits, cashmere sweaters, and silk blouses around your neckline with accurate fabric fold physics and seam stitching."
  },
  {
    term: "Biometric Auto-Deletion Guarantee",
    def: "An enterprise security compliance measure guaranteeing that your uploaded personal selfies and trained facial weights are permanently destroyed within 30 days of generation."
  },
  {
    term: "ERAS / LinkedIn Aspect Ratio Presets",
    def: "Pre-calibrated export dimensions tailored for professional networks (400x400 circle crop), website team grids, and medical residency application portals."
  }
];

const faqData = [
  {
    question: "What is the best AI headshot generator in 2026?",
    answer: "HeadshotPro and The Multiverse AI currently lead the professional headshot industry for photorealism and natural skin texture. HeadshotPro is unrivaled for remote company teams with centralized admin controls, while The Multiverse AI and Aragon AI excel for solo professionals needing fast, high-converting LinkedIn portraits."
  },
  {
    question: "Do AI headshots look like fake computer avatars or obvious deepfakes?",
    answer: "Early 2023 apps produced over-smoothed, 'plastic' faces. 2026 models utilize high-resolution LoRA fine-tuning with subsurface skin scattering and micro-pore retention. When you upload diverse, well-lit selfies, the resulting headshots are indistinguishable from a $400 commercial studio session."
  },
  {
    question: "Can I use an AI headshot on my official resume and LinkedIn profile?",
    answer: "Yes, absolutely. Over 80% of recruiters cannot distinguish modern AI headshots from traditional photographer portraits. As long as the photo accurately represents your current age, hairstyle, and professional appearance, it is standard practice across Fortune 500 companies and tech startups."
  },
  {
    question: "How many selfies do I need to upload, and what kind work best?",
    answer: "Most platforms require between 8 and 15 photos. The best results come from natural window lighting, varying angles (front, slight turn), different everyday clothing, natural facial expressions (smiling and neutral), and clear close-ups without sunglasses, hats, or heavy filters."
  },
  {
    question: "Are my uploaded personal selfies kept private and secure?",
    answer: "Reputable platforms (such as HeadshotPro, Aragon, and The Multiverse AI) employ bank-grade encryption and an automated data deletion policy. Your original selfies and private facial weights are deleted from cloud GPU servers within 7 to 30 days and are never used to train public models."
  },
  {
    question: "What is the difference between a mobile avatar filter (Lensa) and a professional AI headshot studio?",
    answer: "Consumer avatar apps generate stylized, fantasy, or glamour art suitable for gaming or casual avatars. Professional AI headshot studios specifically restrict lighting to commercial strobe setups, generate tailored business attire, eliminate cartoon smoothing, and optimize for recruiter impression trust."
  }
];

const alternatives = [
  { 
    name: "HeadshotPro", 
    slug: "headshotpro",
    score: "9.9", 
    price: "From $29 / shoot", 
    bestFor: "Best Overall for Teams & Enterprise Portfolios", 
    highlight: "Generates 120+ photos per shoot with 4K resolution, real photographer lighting setups, and automated corporate team management." 
  },
  { 
    name: "The Multiverse AI", 
    slug: "themultiverse-ai",
    score: "9.8", 
    price: "From $29 / shoot", 
    bestFor: "Fastest Turnaround & Natural Skin Texture", 
    highlight: "Curated algorithm specifically calibrated to eliminate the waxy AI look, delivering 100 stunning corporate portraits in under 2 hours." 
  },
  { 
    name: "Aragon AI", 
    slug: "aragon-ai",
    score: "9.7", 
    price: "From $35 / shoot", 
    bestFor: "High-Volume Wardrobe & Backdrop Diversity", 
    highlight: "Trained on thousands of top LinkedIn executive portraits with custom eye color correction and dozens of outdoor architectural settings." 
  },
  { 
    name: "BetterPic", 
    slug: "betterpic-ai",
    score: "9.6", 
    price: "From $25 / shoot", 
    bestFor: "Interactive Retouching & Human Studio Review", 
    highlight: "Pairs AI portrait generation with human retouching guarantees to adjust clothing fit, remove stray hairs, and perfect lighting." 
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

export default function AiHeadshotGeneratorsGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-blue-500/20 shadow-xl shadow-blue-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-indigo-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/30 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-6 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <UserCheck className="w-4 h-4 text-blue-400" /> 
            2026 Executive Portrait & Biometric Diffusion Architecture
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.08]"
          >
            The Definitive Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300 drop-shadow-sm">
              AI Headshot & Portrait Makers
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${figtreeDarkBodyClass} max-w-2xl mx-auto`}
          >
            How facial LoRA fine-tuning, sub-dermal skin pore rendering, and neural wardrobe inpainting produce executive studio portraits from simple smartphone selfies.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Definitive Overview - Two Alternating Container Blocks */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-8 md:mb-12 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-blue-500 uppercase tracking-[0.25em] mb-3">The Portrait Dilemma</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Why Physical Photo Sessions Paralyze Modern Teams</h4>
        </motion.div>

        <div className="space-y-10 md:space-y-12">
          {/* Block 1: The Scheduling & Cost Nightmare */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-8 shadow-sm">
                <DollarSign className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">The $350 Studio Session Hurdle</h5>
              <p className={figtreeBodyClass}>
                Booking a commercial portrait session requires hiring a photographer, traveling across town to an unfamiliar studio, coordinating outfits, and waiting up to two weeks for proofs. For distributed corporate teams with remote staff in 20 cities, organizing unified physical headshots is an administrative impossibility, leaving company directories populated by cropped wedding photos and dark webcam snapshots.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-900/20 border border-blue-200/50 dark:border-blue-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-48 h-48 bg-gradient-to-tr from-blue-500 to-indigo-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 absolute" />
               <div className="w-full max-w-xs rounded-2xl bg-slate-900/90 border border-white/20 p-6 flex flex-col justify-between relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-105">
                 <div className="flex justify-between items-center mb-4">
                   <div className="flex items-center gap-2">
                     <AlertTriangle className="w-4 h-4 text-amber-400" />
                     <div className="text-[12px] text-white/90 font-mono font-bold">Studio Session Cost</div>
                   </div>
                   <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[11px] font-bold">$350 / Person</span>
                 </div>
                 <div className="space-y-2 mb-4">
                   <div className="h-2 w-full bg-red-400/50 rounded-full" />
                   <div className="h-2 w-4/5 bg-red-400/30 rounded-full" />
                   <div className="h-2 w-3/5 bg-red-400/20 rounded-full" />
                 </div>
                 <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[11px] text-slate-400">
                   <span>14 Days Proof Delivery</span>
                   <span className="text-red-400 font-bold">Single Location Only</span>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Block 2: Sub-Dermal Skin & LoRA Facial Locking */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-indigo-50/50 to-amber-50/50 dark:from-indigo-950/20 dark:to-amber-900/20 border border-indigo-200/50 dark:border-indigo-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-full max-w-sm space-y-4 relative z-10 transition-transform duration-700 group-hover:scale-105">
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-4 shadow-md flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold">
                     <CheckCircle2 className="w-6 h-6" />
                   </div>
                   <div className="space-y-1.5 flex-1">
                     <div className="flex justify-between items-center">
                       <span className="text-xs font-bold text-on-surface">Pore Texture &amp; Catchlight Active</span>
                       <span className="text-[11px] font-extrabold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">100% Photoreal</span>
                     </div>
                     <div className="h-2 w-full bg-emerald-500/30 rounded-full" />
                   </div>
                 </div>
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <Smile className="w-4 h-4 text-blue-500" />
                     <span className="text-xs font-bold text-on-surface">LoRA Identity Lock</span>
                   </div>
                   <span className="text-xs font-bold text-blue-500 px-2 py-0.5 bg-blue-500/10 rounded-full">Zero Plastic Blur</span>
                 </div>
               </div>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-amber-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-500 mb-8 shadow-sm">
                <Sliders className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">Facial LoRAs & Natural Skin Texture</h5>
              <p className={figtreeBodyClass}>
                2026 AI headshot engines eliminate the waxy &quot;airbrushed avatar&quot; look entirely. By training a temporary low-rank adaptation (LoRA) on your casual selfies, the neural model memorizes your authentic bone contours, asymmetrical dimples, and eye shape while synthesizing natural sub-surface skin scattering, natural eye catchlights, and sharp wardrobe seams.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. Interactive ROI & Studio Economics Calculator Container */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-8 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-5">
              <DollarSign className="w-7 h-7" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">Calculate Team Headshot Budget & Time</h3>
            <p className={figtreeBodyClass + " max-w-xl"}>
              Compare physical photography studio bookings against AI portrait suites for solo professionals and corporate teams of 25 employees.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full flex gap-2">
              <button 
                onClick={() => setRoiMode("traditional")}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${roiMode === "traditional" ? "bg-white dark:bg-slate-700 shadow-md text-on-surface" : "text-slate-400 hover:text-on-surface"}`}
              >
                Physical Photo Studio
              </button>
              <button 
                onClick={() => setRoiMode("ai")}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${roiMode === "ai" ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : "text-slate-400 hover:text-on-surface"}`}
              >
                AI Portrait Studio
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center relative z-10">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <DollarSign className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-blue-500" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-1 text-sm">Cost per Person</div>
              <div className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "$25 - $29" : "$250 - $400"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <Clock className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-blue-500" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-1 text-sm">Turnaround Time</div>
              <div className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "60 Minutes" : "14 Business Days"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <Camera className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-blue-500" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-1 text-sm">Portraits Delivered</div>
              <div className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "100+ Options" : "3-5 Proofs"}
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
          <h3 className="text-sm font-extrabold text-blue-500 uppercase tracking-[0.25em] mb-3">Professional Sectors</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Who Uses AI Professional Headshot Generators?</h4>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(uc.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === uc.id 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105" 
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
                <span className="p-2 rounded-xl bg-blue-500/10 text-blue-500">{uc.icon}</span>
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
          <h3 className="text-sm font-extrabold text-blue-500 uppercase tracking-[0.25em] mb-3">Benchmark Matrix</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Portrait Solution Comparison</h4>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                <th className="p-4 md:p-5 font-black text-on-surface">Solution Type</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Skin Texture &amp; Pores</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Facial Identity Match</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Corporate Wardrobe</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Turnaround Speed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <Camera className="w-4 h-4 text-slate-400" />
                  Studio Photographer
                </td>
                <td className="p-4 md:p-5 text-emerald-500 font-bold">100% Real Skin</td>
                <td className="p-4 md:p-5 text-emerald-500 font-bold">100% Exact</td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Manual Outfit Change</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">10-14 Days</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <Palette className="w-4 h-4 text-amber-500" />
                  Consumer Avatar Apps (Lensa)
                </td>
                <td className="p-4 md:p-5 text-red-500 font-bold">Over-Smoothed &quot;Plastic&quot;</td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Resembles You (50-70%)</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">Fantasy / Casual</td>
                <td className="p-4 md:p-5 text-emerald-500 font-bold">15 Minutes</td>
              </tr>
              <tr className="bg-blue-50/40 dark:bg-blue-950/20 font-semibold">
                <td className="p-4 md:p-5 font-extrabold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-blue-500" />
                  Specialized AI Headshot Studio (HeadshotPro)
                </td>
                <td className="p-4 md:p-5 text-blue-600 dark:text-blue-400 font-extrabold">Subsurface Pore Physics</td>
                <td className="p-4 md:p-5 text-blue-600 dark:text-blue-400 font-extrabold">LoRA Locked (95%+)</td>
                <td className="p-4 md:p-5 text-blue-600 dark:text-blue-400 font-extrabold">40+ Tailored Business Looks</td>
                <td className="p-4 md:p-5 text-blue-600 dark:text-blue-400 font-extrabold">60-120 Minutes</td>
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
          <h3 className="text-sm font-extrabold text-blue-500 uppercase tracking-[0.25em] mb-3">Buyer Checklist</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">What Makes a Legit AI Headshot Studio in 2026?</h4>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
              <Smile className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Micro-Pore & Natural Skin Texture Retention</h5>
            <p className={figtreeBodyClass}>
              The tool must not airbrush skin into a flat plastic finish. Top portrait models simulate realistic facial pores, natural smile crinkles, and accurate subsurface skin scattering that survives close recruiter scrutiny.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Automated Biometric Deletion Within 30 Days</h5>
            <p className={figtreeBodyClass}>
              Your face is sensitive biometric personal data. Verify that the provider operates under strict GDPR/SOC 2 privacy protocols and permanently purges your source selfies and trained AI weights after delivery.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Tailored Business Wardrobe & Backdrop Variety</h5>
            <p className={figtreeBodyClass}>
              Demand diverse options spanning formal blazers, modern startup smart-casual, and outdoor terrace settings, ensuring you find the exact visual posture appropriate for your specific industry.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Centralized Corporate Team Management</h5>
            <p className={figtreeBodyClass}>
              If hiring for a company, choose suites that provide team invite links, standardized company backdrop enforcement, centralized billing, and HR administrative approval dashboards.
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
          <h3 className="text-sm font-extrabold text-blue-500 uppercase tracking-[0.25em] mb-3">Top Ranked Software</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Best AI Headshot & Portrait Makers</h4>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {alternatives.map((alt) => (
            <div key={alt.slug} className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md hover:border-blue-500/50 transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h5 className="text-2xl font-black text-on-surface">{alt.name}</h5>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full">
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
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-500 dark:text-blue-400 group"
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
          <h3 className="text-sm font-extrabold text-blue-500 uppercase tracking-[0.25em] mb-3">Technical Glossary</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Key Portrait Imaging Terminology</h4>
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
          <h3 className="text-sm font-extrabold text-blue-500 uppercase tracking-[0.25em] mb-3">Frequently Asked Questions</h3>
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
                className="w-full text-left p-6 font-bold text-on-surface flex justify-between items-center gap-4 hover:text-blue-500 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-blue-500" : ""}`} />
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
