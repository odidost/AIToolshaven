"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Sparkles, 
  Maximize2, 
  Eye, 
  ShieldCheck, 
  Layers, 
  Award, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  Sliders, 
  CheckCircle2, 
  Camera, 
  Cpu, 
  DollarSign, 
  Printer, 
  Image as ImageIcon,
  History,
  Gamepad2
} from "lucide-react";

// ---- DATA STRUCTURES ---- //

const useCases = [
  {
    id: "ai-art-print",
    title: "Midjourney & Generative Art 8K Prints",
    icon: <Sparkles className="w-5 h-5 text-violet-500" />,
    content: "Raw generations from Midjourney, Stable Diffusion, or DALL-E 3 top out at 1024x1024 or 2048x2048 pixels. Modern neural upscalers allow digital artists to scale concept art up to 10,000x10,000 pixels at 300 DPI, hallucinating hyper-realistic micro-textures, paint strokes, and intricate lace patterns suitable for gallery canvas prints."
  },
  {
    id: "ecommerce-catalog",
    title: "E-Commerce & High-DPI Merchandising",
    icon: <Printer className="w-5 h-5 text-purple-500" />,
    content: "Marketplaces like Amazon, Shopify, and Etsy require crisp zoomable images where fabric weave and stitching are clearly visible. AI upscaling transforms low-res supplier catalog photos into razor-sharp 4K product hero shots, removing compression JPEG artifacts and moiré noise without requiring a reshoot."
  },
  {
    id: "archival-vintage",
    title: "Historical Archival & Vintage Photo Restoration",
    icon: <History className="w-5 h-5 text-fuchsia-500" />,
    content: "Family historians, documentary producers, and museums preserve faded 19th-century tintypes and blurry 1980s family polaroids. Specialized face-enhancement models (like Remini and Topaz) reconstruct individual eyelashes, skin pores, and authentic period clothing textures while removing film grain and scratches."
  },
  {
    id: "cgi-gaming",
    title: "CGI, VFX & Video Game Texture Remastering",
    icon: <Gamepad2 className="w-5 h-5 text-indigo-500" />,
    content: "Game developers remastering classic retro games or indie studios optimizing 3D assets use batch AI upscalers to upgrade 256x256 diffuse textures into 4K PBR-ready material maps, preserving specular highlights and normal map details with local GPU acceleration."
  }
];

const glossaryTerms = [
  {
    term: "Generative Latent Upscaling",
    def: "An advanced upscaling technique where a diffusion model 're-imagines' and paints realistic high-frequency micro-details into low-res inputs rather than mathematically stretching existing pixels."
  },
  {
    term: "Bicubic & Lanczos Interpolation",
    def: "Legacy algorithmic resizing methods that compute average color values between adjacent pixels, inherently resulting in blurry edges and muddy textures when enlarged past 150%."
  },
  {
    term: "Creativity & Hallucination Slider",
    def: "A crucial control parameter in engines like Magnific AI that dictates how much new detail the AI can invent—from conservative fidelity preservation to imaginative cinematic enhancement."
  },
  {
    term: "Super-Resolution GAN (SRGAN)",
    def: "A dual-network neural architecture where a generator creates high-resolution details and a discriminator verifies photorealism, virtually eliminating JPEG compression artifacts."
  },
  {
    term: "Subsurface Micro-Texture Synthesis",
    def: "Neural reconstruction of natural organic elements including facial pores, skin capillaries, fabric threads, and foliage leaves that traditional bicubic upscalers blur away."
  },
  {
    term: "300 DPI Print Density Standard",
    def: "The commercial offset printing benchmark (300 dots per inch). Upscaling an image to 8,000 pixels allows a razor-sharp 26-inch fine art print without any visible pixelation."
  }
];

const faqData = [
  {
    question: "What is the best AI image upscaler in 2026?",
    answer: "Magnific AI and Topaz Gigapixel AI dominate the professional sector. Magnific AI is the gold standard for creative hallucination and photographic micro-detail enhancement, while Topaz Gigapixel is the desktop workhorse for true optical fidelity, RAW camera file upscaling, and batch local GPU rendering."
  },
  {
    question: "What is the difference between traditional resizing and AI upscaling?",
    answer: "Traditional tools (Photoshop bicubic/bilinear) guess pixel averages, which makes blown-up photos look blurry and pixelated. AI upscalers use deep neural networks trained on millions of 8K images to synthesize brand-new high-frequency details—generating authentic skin pores, eyelashes, fabric fibers, and architectural brickwork."
  },
  {
    question: "Can an AI upscaler fix blurry, out-of-focus photos?",
    answer: "Yes. Advanced neural de-blurring models analyze optical lens blur and motion blur, mathematically reconstructing the sharp focal plane. Dedicated tools like Remini and Topaz Photo AI specialize in rescuing out-of-focus portraits and vintage family photos."
  },
  {
    question: "Are there free, open-source AI image upscalers?",
    answer: "Yes. Upscayl is the most popular free, open-source AI upscaler. It runs 100% locally on your macOS, Windows, or Linux GPU, requiring zero internet connection, zero subscription fees, and offering complete privacy for sensitive personal or client photos."
  },
  {
    question: "What does the 'Creativity' or 'Hallucination' slider do in Magnific AI?",
    answer: "The creativity slider controls how much novel detail the model is permitted to invent. Set to '0', it acts as a conservative sharpener preserving the exact input pixels. Set to 'High', it hallucinates complex cinematic textures, lifelike eyes, skin freckles, and intricate lighting reflections."
  },
  {
    question: "How large can I print an AI-upscaled image?",
    answer: "Upscaling a 1024x1024 Midjourney output by 8x yields an 8192x8192 pixel file. At the professional 300 DPI print standard, this translates to a razor-sharp 27x27 inch fine-art canvas. At standard viewing distances for posters (150 DPI), it can easily cover a 54x54 inch display."
  }
];

const alternatives = [
  { 
    name: "Magnific AI", 
    slug: "magnific-ai",
    score: "9.9", 
    price: "From $39/mo", 
    bestFor: "Best Overall for Creative Hallucination & Hyper-Detail", 
    highlight: "World-renowned generative upscaler capable of transforming concept art, portraits, and renders into breathtaking 10K cinematic masterpieces." 
  },
  { 
    name: "Topaz Gigapixel AI", 
    slug: "topaz-gigapixel",
    score: "9.8", 
    price: "$99 (Perpetual Desktop License)", 
    bestFor: "Studio Photographers, Archival Scans & Local Batch GPUs", 
    highlight: "Industry-standard desktop application featuring optical fidelity preservation, batch processing, and offline GPU acceleration." 
  },
  { 
    name: "Upscayl", 
    slug: "upscayl",
    score: "9.7", 
    price: "100% Free & Open Source", 
    bestFor: "Zero-Cost Local GPU Upscaling & Total Privacy", 
    highlight: "Cross-platform open-source desktop app that upscales unlimited images locally using Real-ESRGAN and Remacri neural models." 
  },
  { 
    name: "Krea AI Upscaler", 
    slug: "krea-ai-upscaler",
    score: "9.7", 
    price: "Freemium ($30/mo)", 
    bestFor: "Fast Cloud Upscaling & Real-Time Prompt Conditioning", 
    highlight: "Ultra-fast generative upscaler with negative prompt guidance, texture sliders, and seamless web interface for digital creators." 
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

export default function AiImageUpscalersGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-violet-500/20 shadow-xl shadow-violet-500/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/20 via-slate-900/60 to-slate-950/90 pointer-events-none" />
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs md:text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-md">
            <Maximize2 className="w-4 h-4" />
            2026 Architectural Evaluation & Super-Resolution Benchmark
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Next-Gen AI Image <br className="hidden md:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400">
              Upscalers & Enhancers
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-8">
            The comprehensive guide to generative latent upscaling, micro-texture hallucination, and 16X super-resolution for digital artists, commercial print houses, and e-commerce brands.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl pt-6 border-t border-slate-800">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-white">16X</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Max Optical Scaling Factor</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-violet-400">10,000 px</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Max Canvas Resolution</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-fuchsia-400">300 DPI</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Fine-Art Print Density</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-indigo-400">100%</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Artifact & Noise Removal</span>
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
          <h2 className="text-sm font-extrabold text-violet-500 uppercase tracking-[0.25em] mb-3">Definitive Overview</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Why Generative Hallucination Transformed Super-Resolution</h3>
        </div>

        <div className="space-y-10 md:space-y-12">
          {/* Bento Card 1 */}
          <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/30 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-500">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-on-surface tracking-tight">Pixel Averaging vs. Neural Latent Hallucination</h4>
              <p className={figtreeBodyClass}>
                For thirty years, digital imaging relied on mathematical interpolation (nearest-neighbor, bilinear, bicubic). When you stretched a 500-pixel portrait to 4,000 pixels, software simply calculated intermediate color values, creating muddy, smudged faces with unnatural blurry edges.
              </p>
              <p className={figtreeDarkBodyClass}>
                <strong>2026 Generative Upscalers (like Magnific and Krea) operate as intelligent digital painters.</strong> Guided by a latent diffusion model, the software recognizes human skin, iris refractions, wool sweater weaves, or weathered wood grains—and synthesizes brand-new, photorealistic high-frequency details that were never captured by the original camera sensor.
              </p>
            </div>
            <div className="md:w-1/2 w-full bg-slate-950 p-6 rounded-2xl border border-slate-800 text-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span>Super-Resolution Pipeline</span>
                <span className="text-violet-400">4X Latent Pass</span>
              </div>
              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Input Resolution</span>
                  <span className="text-white font-bold">1024 x 1024 (1.0 MP)</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Neural Latent Inpainting</span>
                  <span className="text-fuchsia-400 font-bold">Pore & Fiber Synthesis</span>
                </div>
                <div className="p-3 rounded-lg bg-violet-950/40 border border-violet-500/30 flex justify-between items-center">
                  <span className="text-slate-300">Output 8K Canvas</span>
                  <span className="text-violet-400 font-bold">8192 x 8192 (67.1 MP)</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-violet-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>300 DPI Fine-Art Print Ready (27.3" x 27.3")</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2 */}
          <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/30 flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-500">
                <Sliders className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-on-surface tracking-tight">The Power of the "Creativity" Slider</h4>
              <p className={figtreeBodyClass}>
                The greatest breakthrough in modern upscaling is granular hallucination control. When restoring a historical family heirloom or evidence document, you set the creativity parameter to 0% to strictly preserve every authentic original pixel without fabrication.
              </p>
              <p className={figtreeDarkBodyClass}>
                When creating a cinematic fantasy poster from a low-res Midjourney sketch, you dial creativity to 60%. The AI transforms flat digital brushwork into photographic skin pores, individual strands of glistening hair, and cinematic ambient lighting reflections.
              </p>
            </div>
            <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">Fidelity Mode (0% AI)</span>
                <span className="text-2xl font-extrabold text-indigo-300">Strict Optical</span>
                <p className="text-xs text-slate-400 mt-2">Zero hallucinations. Removes noise, deburs edges, and sharpens existing pixels. Ideal for text & documents.</p>
              </div>
              <div className="p-5 rounded-2xl bg-violet-950/20 border border-violet-500/20 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2">Generative Mode (60% AI)</span>
                <span className="text-2xl font-extrabold text-violet-300">Cinematic 8K</span>
                <p className="text-xs text-slate-400 mt-2">Paints realistic micro-textures, specular highlights, and natural organic materials from prompt context.</p>
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
          <h2 className="text-xs font-bold tracking-[0.2em] text-violet-400 uppercase mb-2">Commercial Production Economics</h2>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight">Studio Re-Shoots vs. 8K AI Latent Upscaling</h3>
          <p className="text-slate-400 mt-3 text-sm md:text-base">
            Quantify the cost, camera rental, and studio booking overhead of obtaining ultra-high-resolution billboard assets.
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
              Medium-Format Studio Re-Shoot
            </button>
            <button
              onClick={() => setRoiMode("ai")}
              className={`px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
                roiMode === "ai" 
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              2026 Neural Upscaler Stack
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Per-Campaign Cost</span>
              <div className="text-3xl md:text-4xl font-black text-white mt-2">
                {roiMode === "traditional" ? "$6,500" : "$39"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "100MP Hasselblad camera rental, commercial lighting crew, studio lease, and digital tech fees."
                : "A single monthly subscription to Magnific AI or a one-time perpetual license to Topaz Gigapixel."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Turnaround Time (50 Images)</span>
              <div className="text-3xl md:text-4xl font-black text-violet-400 mt-2">
                {roiMode === "traditional" ? "7 Days" : "15 Minutes"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "Physical re-booking, sample shipping, capture, and manual Photoshop retoucher hours."
                : "Batch upload low-res assets and let parallel GPU clusters render pristine 8K outputs instantly."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Historical Image Rescue</span>
              <div className="text-3xl md:text-4xl font-black text-fuchsia-400 mt-2">
                {roiMode === "traditional" ? "Impossible" : "Flawless"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "Deceased relatives or archival historical events cannot be re-photographed under any budget."
                : "Restores authentic skin pores and vintage textiles from scratched, blurry 19th-century scans."}
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
          <h2 className="text-sm font-extrabold text-violet-500 uppercase tracking-[0.25em] mb-3">Industry Solutions</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Super-Resolution for Every Production Pipeline</h3>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {useCases.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-violet-600 text-white shadow-md shadow-violet-500/20"
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
                  <div className="p-3 rounded-2xl bg-violet-500/10 text-violet-500">
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
          <h2 className="text-sm font-extrabold text-violet-500 uppercase tracking-[0.25em] mb-3">Architectural Comparison</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">AI Upscaling Suites Capabilities Matrix</h3>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-outline-variant/30 bg-surface-container-low">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-container border-b border-outline-variant/40 text-on-surface text-xs uppercase tracking-wider font-extrabold">
              <tr>
                <th className="p-4 md:p-5">Platform</th>
                <th className="p-4 md:p-5">Upscaling Engine</th>
                <th className="p-4 md:p-5">Max Scale Factor</th>
                <th className="p-4 md:p-5">Local / Cloud</th>
                <th className="p-4 md:p-5">Primary Strength</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 text-on-surface-variant font-medium">
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-500"></span>
                  Magnific AI
                </td>
                <td className="p-4 md:p-5">Generative Latent Diffusion</td>
                <td className="p-4 md:p-5 text-violet-500 font-bold">16X (10,000+ px)</td>
                <td className="p-4 md:p-5">Cloud GPU</td>
                <td className="p-4 md:p-5">Unrivaled cinematic micro-detail hallucination</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                  Topaz Gigapixel AI
                </td>
                <td className="p-4 md:p-5">Deep Optical Super-Resolution</td>
                <td className="p-4 md:p-5 text-violet-500 font-bold">6X</td>
                <td className="p-4 md:p-5 text-emerald-500 font-bold">100% Local GPU</td>
                <td className="p-4 md:p-5">Strict photographic fidelity & RAW camera workflow</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-500"></span>
                  Upscayl
                </td>
                <td className="p-4 md:p-5">Real-ESRGAN / Remacri Neural</td>
                <td className="p-4 md:p-5 text-violet-500 font-bold">8X</td>
                <td className="p-4 md:p-5 text-emerald-500 font-bold">100% Local GPU (Open Source)</td>
                <td className="p-4 md:p-5">Free, offline, unlimited private batch upscaling</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                  Krea AI Upscaler
                </td>
                <td className="p-4 md:p-5">Prompt-Guided Generative</td>
                <td className="p-4 md:p-5 text-violet-500 font-bold">16X</td>
                <td className="p-4 md:p-5">Cloud GPU</td>
                <td className="p-4 md:p-5">Real-time prompt conditioning & texture sliders</td>
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
          <h2 className="text-sm font-extrabold text-violet-500 uppercase tracking-[0.25em] mb-3">Buyer's Checklist</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">4 Must-Haves in an AI Image Upscaler</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center font-bold">1</div>
            <h4 className="text-xl font-bold text-on-surface">Creativity & Hallucination Modulation</h4>
            <p className={figtreeBodyClass}>
              Different tasks require different approaches. Ensure the software offers an adjustable creativity slider so you can switch between strict artifact cleaning (0% AI) and photorealistic generative hallucination (60%+ AI).
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">2</div>
            <h4 className="text-xl font-bold text-on-surface">Face & Identity Geometry Preservation</h4>
            <p className={figtreeBodyClass}>
              Low-tier upscalers warp facial features, turning familiar human subjects into alien strangers. Look for specialized face-restoration modules that lock eye pupil geometry, mouth shapes, and ear anatomy.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 text-fuchsia-500 flex items-center justify-center font-bold">3</div>
            <h4 className="text-xl font-bold text-on-surface">Local GPU Execution vs. Cloud Speed</h4>
            <p className={figtreeBodyClass}>
              If you handle confidential corporate imagery or client NDA photography, choose desktop solutions like Topaz or Upscayl that execute 100% locally on your NVIDIA/Apple Silicon GPU without transmitting pixels over the internet.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">4</div>
            <h4 className="text-xl font-bold text-on-surface">Automated JPEG De-Blocking & Denoise</h4>
            <p className={figtreeBodyClass}>
              Old web graphics suffer from ugly 8x8 pixel compression block artifacts. Premier upscalers execute a pre-pass neural denoise and de-blocking stage before upscaling, ensuring artifacts aren't accidentally magnified into distorted textures.
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
          <h2 className="text-sm font-extrabold text-violet-500 uppercase tracking-[0.25em] mb-3">Top Directory Picks</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">The Gold Standard AI Upscaling Engines</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alternatives.map((tool) => (
            <div 
              key={tool.slug}
              className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between hover:border-violet-500/40 transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h4 className="text-2xl font-black text-on-surface">{tool.name}</h4>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-500 font-extrabold text-sm">
                    ★ {tool.score}
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-400 mb-2">{tool.price}</div>
                <div className="text-xs font-semibold text-violet-500 mb-4">{tool.bestFor}</div>
                <p className={figtreeBodyClass}>
                  {tool.highlight}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                <Link 
                  href={`/tool/${tool.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-violet-500 hover:text-violet-400 transition-colors"
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
          <h2 className="text-sm font-extrabold text-violet-500 uppercase tracking-[0.25em] mb-3">Technical Lexicon</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Super-Resolution & Upscaling Vocabulary</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {glossaryTerms.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2"
            >
              <h4 className="text-base font-bold text-on-surface flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-500"></span>
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
          <h3 className="text-sm font-extrabold text-violet-500 uppercase tracking-[0.25em] mb-3">Frequently Asked Questions</h3>
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
                className="w-full text-left p-6 font-bold text-on-surface flex justify-between items-center gap-4 hover:text-violet-500 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-violet-500" : ""}`} />
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
