"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  Crown, 
  CheckCircle2, 
  ChevronDown,
  ArrowRight,
  Zap,
  MonitorSmartphone,
  Calculator,
  Timer,
  DollarSign,
  LineChart,
  BookOpen,
  ExternalLink,
  Camera,
  Layers,
  Maximize2,
  SlidersHorizontal,
  ShieldCheck,
  Palette,
  Eye,
  Brush
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "Can I legally use AI-generated images for commercial projects?",
    answer: "Yes, on paid subscription plans with major platforms (such as Midjourney, Leonardo.ai, and OpenAI's DALL-E 3), you receive full commercial rights to use the generated imagery for advertising, merchandise, book covers, and client deliverables."
  },
  {
    question: "How do I achieve consistent character faces across multiple scenes?",
    answer: "Modern tools solve this using fixed seed parameters, Character Reference flags (like Midjourney's --cref), or fine-tuned LoRAs (Low-Rank Adaptations). You upload 5-10 reference images of your subject, and the model maintains identical facial geometry, hairstyle, and outfit across distinct camera angles."
  },
  {
    question: "What is the difference between Midjourney, DALL-E 3, and Flux?",
    answer: "Midjourney specializes in unparalleled cinematic lighting, photorealism, and artistic textures. DALL-E 3 excels at hyper-accurate prompt comprehension and legible in-image text rendering. Flux (and Stable Diffusion) offers complete local control, open-source customization, and surgical precision via ControlNet."
  }
];

const useCases = [
  {
    id: "ecommerce",
    title: "E-Commerce & Brands",
    icon: <Camera className="w-5 h-5" />,
    content: "Eliminate five-figure studio photography budgets. E-commerce founders place clean product CAD files or photos into AI generators to instantly produce photorealistic lifestyle imagery—such as a watch resting on an Icelandic volcanic rock during golden hour—in under 60 seconds."
  },
  {
    id: "agencies",
    title: "Performance Ad Agencies",
    icon: <Zap className="w-5 h-5" />,
    content: "Digital agencies creating high-converting Meta and Google ads require constant visual iteration. Generative image models allow growth teams to spin up 50 distinct aesthetic hooks, seasonal themes, and localized cultural backgrounds per campaign without hiring photography crews."
  },
  {
    id: "concept-artists",
    title: "Concept Artists & Game Devs",
    icon: <Brush className="w-5 h-5" />,
    content: "Creative directors and game developers compress pre-production moodboarding from months to days. Rapidly visualizing environment turnarounds, sci-fi vehicles, and atmospheric lighting builds immediate alignment between studio executives and 3D modeling pipelines."
  }
];

const glossaryTerms = [
  { term: "Latent Diffusion Model (LDM)", def: "The core neural architecture that progressively removes noise from a compressed latent mathematical space to synthesize hyper-detailed images from text." },
  { term: "LoRA (Low-Rank Adaptation)", def: "A lightweight fine-tuning checkpoint that trains a foundation model on a specific character, corporate branding, or architectural art style." },
  { term: "Inpainting & Outpainting", def: "Inpainting selectively redraws a masked section of an existing image (e.g. changing an expression); outpainting seamlessly expands the canvas beyond its original borders." },
  { term: "CFG Scale (Guidance)", def: "Classifier-Free Guidance; a slider that dictates how rigidly the model must obey your text prompt versus taking creative and stylistic liberties." }
];

const alternatives = [
  { name: "Midjourney v6", score: "9.7", price: "From $10/mo", bestFor: "Photorealism", highlight: "The gold standard for cinematic textures & lighting." },
  { name: "Flux.1 (Black Forest)", score: "9.5", price: "Open Source / $0.03", bestFor: "Typography & Anatomy", highlight: "State-of-the-art prompt fidelity and realistic hands." },
  { name: "DALL-E 3 (OpenAI)", score: "9.2", price: "$20/mo (ChatGPT Plus)", bestFor: "Prompt Logic", highlight: "Flawless comprehension of intricate scene layouts." }
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

export default function AiImageGeneratorsGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const [roiMode, setRoiMode] = useState<"traditional" | "ai">("ai");

  return (
    <article className="w-full max-w-6xl mx-auto py-24 font-sans overflow-hidden">
      
      {/* 1. Hero Header */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-32 md:my-48 relative rounded-[3rem] bg-slate-900 overflow-hidden border border-rose-500/20 shadow-2xl shadow-rose-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/40 via-amber-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-8 py-20 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-8 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-orange-400" /> 
            2026 Visual AI Deep Dive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.05]"
          >
            The Ultimate Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 drop-shadow-sm">
              AI Image Generators
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${figtreeDarkBodyClass} max-w-2xl mx-auto`}
          >
            From prompt-to-pixel photorealism to real-time diffusion canvases: a master breakdown of visual AI, diffusion architectures, and commercial production workflows.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Definitive Overview - Two Alternating Blocks */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="my-32 md:my-48 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <h3 className="text-sm font-extrabold text-rose-500 uppercase tracking-[0.25em] mb-4">The Paradigm Shift</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">From Novelty Pixels to Commercial Assets</h4>
        </motion.div>

        <div className="space-y-24">
          {/* Block 1 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-amber-500/20 border border-rose-500/20 flex items-center justify-center text-rose-500 mb-8 shadow-sm">
                <Camera className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">The Erasure of the Uncanny Valley</h5>
              <p className={figtreeBodyClass}>
                Early text-to-image models were plagued by warped hands, plastic skin tones, and unreadable gibberish text. Today&apos;s leading generative engines simulate actual optical physical mechanics: camera aperture, volumetric rim lighting, sub-surface skin scattering, and crisp typographic rendering. What used to take a 10-person photography crew and weeks of retouching now renders in 8 seconds.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-rose-50/50 to-amber-50/50 dark:from-rose-950/20 dark:to-amber-900/20 border border-rose-200/50 dark:border-rose-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-48 h-48 bg-gradient-to-tr from-rose-500 to-amber-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 absolute" />
               <div className="w-full max-w-xs aspect-square rounded-3xl bg-slate-900/90 border border-white/20 p-6 flex flex-col justify-between relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-105">
                 <div className="flex justify-between items-center">
                   <div className="h-3 w-20 bg-rose-500/60 rounded-full" />
                   <div className="h-6 w-6 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-[10px] text-amber-300 font-black">4K</div>
                 </div>
                 <div className="space-y-2">
                   <div className="h-32 rounded-2xl bg-gradient-to-tr from-rose-500/30 via-orange-500/20 to-amber-500/30 border border-white/10 flex items-center justify-center">
                     <Eye className="w-10 h-10 text-orange-300/60" />
                   </div>
                   <div className="h-2.5 w-3/4 bg-white/40 rounded-full" />
                   <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-900/20 border border-orange-200/50 dark:border-orange-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-full max-w-sm space-y-4 relative z-10 transition-transform duration-700 group-hover:scale-105">
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md flex items-center gap-3">
                   <div className="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold text-xs">AI</div>
                   <div className="h-3 w-2/3 bg-slate-300 dark:bg-slate-600 rounded-full" />
                 </div>
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md space-y-2">
                   <div className="flex justify-between items-center">
                     <div className="text-xs font-bold text-slate-500">Spatial Inpainting</div>
                     <div className="h-2 w-12 bg-success/60 rounded-full" />
                   </div>
                   <div className="h-20 bg-gradient-to-r from-orange-400/20 to-rose-400/20 rounded-xl border border-dashed border-rose-400/40 flex items-center justify-center">
                     <Brush className="w-6 h-6 text-rose-400 animate-pulse" />
                   </div>
                 </div>
               </div>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-8 shadow-sm">
                <Layers className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">The Shift to Real-Time Spatial Canvases</h5>
              <p className={figtreeBodyClass}>
                Professional creatives no longer rely solely on a single text box and a prayer. Modern workflows pair foundation models with real-time latent canvases, layered inpainting masks, and ControlNet wireframes. This grants creators granular, director-level control over object placement, character poses, depth maps, and background extensions.
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
        className="my-32 md:my-48 max-w-5xl mx-auto"
      >
        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex flex-col items-center text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Calculator className="w-8 h-8" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">Calculate Studio ROI</h3>
            <p className={figtreeBodyClass + " max-w-xl"}>
              See the exact production capital and turnaround time saved by augmenting commercial art workflows with generative image pipelines.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full flex gap-2">
              <button 
                onClick={() => setRoiMode("traditional")}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${roiMode === "traditional" ? "bg-white dark:bg-slate-700 shadow-md text-on-surface" : "text-slate-400 hover:text-on-surface"}`}
              >
                Commercial Photoshoot
              </button>
              <button 
                onClick={() => setRoiMode("ai")}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${roiMode === "ai" ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "text-slate-400 hover:text-on-surface"}`}
              >
                Generative AI Studio
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-3xl">
              <Timer className={`w-8 h-8 mx-auto mb-4 ${roiMode === "ai" ? "text-success" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-2">Turnaround Time</div>
              <div className="text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "30 Seconds" : "2-3 Weeks"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-3xl">
              <DollarSign className={`w-8 h-8 mx-auto mb-4 ${roiMode === "ai" ? "text-success" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-2">Cost per Asset</div>
              <div className="text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "$0.04" : "$850+"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-3xl">
              <LineChart className={`w-8 h-8 mx-auto mb-4 ${roiMode === "ai" ? "text-primary" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-2">Iteration Speed</div>
              <div className="text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "Instant" : "Reshoot Req."}
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
        className="my-32 md:my-48 max-w-5xl mx-auto"
      >
        <div className="relative rounded-[3rem] bg-slate-900 overflow-hidden shadow-2xl p-[2px] group">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 opacity-50 blur-md group-hover:opacity-100 transition-opacity duration-700 z-0" />
          
          <div className="relative bg-slate-900/95 backdrop-blur-2xl rounded-[2.85rem] p-10 md:p-16 z-10 border border-white/10">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-bold uppercase tracking-widest border border-amber-500/20 shadow-inner">
                  <Crown className="w-4 h-4" /> Editor&apos;s Choice 2026
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                  Design production-ready visual assets with <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400">Leonardo.ai</span>
                </h3>
                
                <p className={figtreeDarkBodyClass}>
                  While simple generators lock you into single prompt outputs, Leonardo.ai is built for production art directors. Train custom style models in 15 minutes, utilize real-time canvas inpainting, and upscale textures to 8K with zero artifacting.
                </p>

                <a href="https://leonardo.ai" target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-rose-50 hover:scale-105 hover:shadow-xl transition-all duration-300">
                  Try Leonardo.ai Free
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                </a>
              </div>

              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="bg-slate-800/40 border border-white/5 rounded-[2rem] p-10 space-y-8 shadow-2xl backdrop-blur-sm">
                  <h4 className="text-white font-extrabold text-2xl tracking-tight">The Leonardo Advantage</h4>
                  {[
                    { title: "Custom LoRA Training", desc: "Train on your brand's specific aesthetic in minutes." },
                    { title: "Universal AI Upscaler", desc: "Sharpen macro textures up to 8K print resolution." },
                    { title: "Real-Time Canvas Editor", desc: "Live inpainting and outpainting with instant feedback." },
                    { title: "Full Commercial Ownership", desc: "Full copyright protection for commercial monetization." }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-5 group/feature">
                      <div className="mt-1 bg-rose-500/10 p-2 rounded-xl h-fit border border-rose-500/20 group-hover/feature:bg-rose-500/30 group-hover/feature:scale-110 transition-all duration-300">
                        <CheckCircle2 className="w-5 h-5 text-rose-400" />
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
        className="my-32 md:my-48 max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h3 className="text-sm font-extrabold text-slate-500 uppercase tracking-[0.25em] mb-4">Market Landscape</h3>
          <h4 className="text-3xl font-black text-on-surface tracking-tighter">Top Alternatives</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {alternatives.map((alt, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <h5 className="text-2xl font-black text-on-surface">{alt.name}</h5>
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
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-primary hover:text-white transition-colors">
                View Details <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 4. Buyer's Guide - Bento Box Layout */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="my-32 md:my-48 max-w-6xl mx-auto"
      >
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <h3 className="text-sm font-extrabold text-orange-500 uppercase tracking-[0.25em] mb-4">Evaluation Criteria</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">What to Demand from Pro Generators</h4>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Big Card 1 */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-red-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center border border-red-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Maximize2 className="w-8 h-8" />
                </div>
                <span className="text-7xl font-black text-slate-100 dark:text-slate-800 group-hover:text-red-500/10 transition-colors duration-500">01</span>
              </div>
              <h4 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">High-Resolution Detail Upscaling</h4>
              <p className={figtreeBodyClass}>
                Standard diffusion outputs cap out around 1024x1024 pixels. Commercial grade production requires integrated secondary upscaling engines that hallucinate realistic micro-textures (pores, fabric weave, reflections) to achieve true 4K and 8K print-ready fidelity.
              </p>
            </div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div variants={fadeUpVariant} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-amber-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-8 border border-amber-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-extrabold text-on-surface mb-4 tracking-tight">Character Consistency</h4>
              <p className={figtreeBodyClass}>
                Ensure the platform supports Seed locking, image-to-image prompts, or LoRA weights so your characters look identical across storyboards.
              </p>
            </div>
          </motion.div>

          {/* Small Card 3 */}
          <motion.div variants={fadeUpVariant} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-orange-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mb-8 border border-orange-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <SlidersHorizontal className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-extrabold text-on-surface mb-4 tracking-tight">Negative Prompt Control</h4>
              <p className={figtreeBodyClass}>
                Professional generators allow negative weighting (e.g. &apos;--no oversaturation, text, blurry&apos;) to eliminate unwanted artifacts surgically.
              </p>
            </div>
          </motion.div>

          {/* Big Card 4 */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-rose-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl group-hover:bg-rose-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-rose-500/10 text-rose-500 rounded-2xl flex items-center justify-center border border-rose-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <Palette className="w-8 h-8" />
                </div>
                <span className="text-7xl font-black text-slate-100 dark:text-slate-800 group-hover:text-rose-500/10 transition-colors duration-500">04</span>
              </div>
              <h4 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">Enterprise Commercial Licensing</h4>
              <p className={figtreeBodyClass}>
                Always verify that your plan transfers full commercial rights with indemnification clauses if deploying images for international ad campaigns, packaging, or broadcast entertainment.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 4.5: Step-by-Step "How-To" Walkthrough */}
      <motion.section 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="my-32 md:my-48 max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-white"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
        <div className="relative z-10">
          <h3 className="text-sm font-extrabold text-amber-400 uppercase tracking-[0.25em] mb-4">Implementation Guide</h3>
          <h4 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-16">How to Generate Commercial Visuals in 4 Steps</h4>
          
          <div className="space-y-12">
            {[
              { title: "Anchor the Medium & Lens", text: "Never start with vague descriptions. Anchor the AI with photographic physics: 'Medium close-up portrait, shot on 85mm f/1.4 lens, 35mm film grain, Hasselblad natural color solution'." },
              { title: "Dictate Volumetric Lighting", text: "Lighting dictates 90% of image realism. Specify light angles: 'Soft cinematic diffused side lighting, subtle warm rim light, dark moody studio background, ray-traced shadows'." },
              { title: "Surgically Inpaint Flaws", text: "If an initial render is 95% perfect but has a distorted hand or unwanted background object, mask that single area and prompt the inpainter rather than re-rolling from scratch." },
              { title: "Pass Through AI Detail Upscalers", text: "Export the finalized composition and pass it through a secondary AI detail upscaler (like Magnific or Topaz Gigapixel) to add pores, textile textures, and crisp 4K sharpness." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="flex gap-6 md:gap-10">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl font-black text-amber-400">
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
        className="my-32 md:my-48 max-w-5xl mx-auto bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[3rem] p-8 md:p-16 shadow-xl"
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
          <div className="md:w-2/3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden flex items-center shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="w-16 h-1.5 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full mb-8" />
                <h4 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">
                  {useCases.find(u => u.id === activeTab)?.title}
                </h4>
                <p className={figtreeBodyClass}>
                  {useCases.find(u => u.id === activeTab)?.content}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-rose-500/5 rounded-full blur-[80px] pointer-events-none" />
          </div>
        </div>
      </motion.section>

      {/* 5.5: Topical Glossary */}
      <motion.section 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="my-32 md:my-48 max-w-5xl mx-auto"
      >
        <div className="text-center mb-16">
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
        className="my-32 md:my-48 max-w-3xl mx-auto"
      >
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black text-on-surface mb-4 tracking-tighter">Frequently Asked Questions</h3>
        </div>
        <div className="space-y-6">
          {faqData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-[2rem] overflow-hidden transition-all duration-500 ${isOpen ? 'bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border-rose-500/30 shadow-xl shadow-rose-500/5 scale-[1.02]' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-rose-500/20 hover:shadow-md'}`}
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
