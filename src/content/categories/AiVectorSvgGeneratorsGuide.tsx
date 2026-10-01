"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  PenTool, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Maximize2, 
  Award, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  Sliders, 
  CheckCircle2, 
  Palette, 
  Cpu, 
  DollarSign, 
  Code2,
  FileCode2,
  Workflow,
  Sparkle
} from "lucide-react";

// ---- DATA STRUCTURES ---- //

const useCases = [
  {
    id: "ui-ux-web",
    title: "UI/UX & Web Designers",
    icon: <Code2 className="w-5 h-5 text-emerald-500" />,
    content: "Modern front-end developers and UI/UX designers demand clean, lightweight SVG icons, badges, and spot illustrations that embed directly into Next.js, React, or Tailwind projects. AI vector engines output pristine, semantic XML with minimal node counts, inline CSS styling, and zero raster artifacts."
  },
  {
    id: "pod-merch",
    title: "Print-on-Demand & Screen Printing",
    icon: <Palette className="w-5 h-5 text-teal-500" />,
    content: "Apparel printers, laser engravers, and vinyl cutters require strict vector path geometry without blurred edge halos. AI vectorizers automatically separate complex artwork into discrete spot-color layers (Pantone/CMYK) with clean cutlines ready for direct-to-garment (DTG) or automated vinyl plotters."
  },
  {
    id: "branding-identity",
    title: "Brand Identity & Mascot Design",
    icon: <Award className="w-5 h-5 text-cyan-500" />,
    content: "Startups and agencies crafting logos, corporate mascots, and marketing collateral need infinitely scalable assets. AI SVG engines generate crisp, mathematically defined Bézier curves that can scale from a 16px favicon up to a 50-foot highway billboard without losing a fraction of sharpness."
  },
  {
    id: "lottie-motion",
    title: "Motion Graphics & Lottie Animations",
    icon: <Workflow className="w-5 h-5 text-green-500" />,
    content: "Animators using After Effects or Rive need segmented vector assets organized into logical hierarchical groups. Advanced generative vector tools isolate characters, limbs, and background props into discrete SVG groups (<g>), allowing instant rigging and lightweight JSON Lottie export."
  }
];

const glossaryTerms = [
  {
    term: "Bézier Curve & Node Optimization",
    def: "The mathematical formula defining smooth curves via anchor points and tangent handles. Elite AI vectorizers minimize node count to ensure lightweight file sizes without sacrificing curvature fidelity."
  },
  {
    term: "Layered Group Hierarchy (<g>)",
    def: "The structured XML document organization where distinct shapes, shadows, and highlights are nested in accessible SVG groups, enabling easy color remapping and web animation."
  },
  {
    term: "Neural Raster-to-Vector (V2V)",
    def: "Machine learning architectures that analyze pixel-based PNG/JPEG images, predict underlying geometric intent, and construct clean mathematical paths instead of noisy edge tracing."
  },
  {
    term: "Compound Paths & Boolean Ops",
    def: "Vector path combinations using union, subtraction, and intersection rules, ensuring that holes (like the counter inside the letter 'O') render transparently rather than as solid white fills."
  },
  {
    term: "Lossless Resolution Independence",
    def: "The fundamental property of vector graphics where shapes are rendered from coordinate calculations, remaining mathematically razor-sharp at any zoom level, PPI, or display dimensions."
  },
  {
    term: "Inline DOM-Embeddable SVG",
    def: "Raw XML vector code that can be embedded directly into HTML documents, enabling CSS hover transitions, JavaScript path manipulation, and instant zero-latency loading."
  }
];

const faqData = [
  {
    question: "What is the best AI vector and SVG generator in 2026?",
    answer: "Recraft and Vectorizer.ai are the undisputed industry leaders. Recraft functions as a full-fledged generative vector studio that creates native SVG illustrations, icons, and 3D vector art from text prompts. Vectorizer.ai dominates for converting existing raster PNG/JPEGs into clean, production-ready Bézier curves."
  },
  {
    question: "What is the difference between an AI vector generator and Midjourney?",
    answer: "Midjourney and DALL-E 3 generate raster pixel grids (PNG/JPG). When you zoom in, the image becomes pixelated and blurry. AI vector generators (like Recraft or Kittl) output mathematical coordinates and Bézier paths (SVG/EPS), meaning the artwork can be scaled infinitely without any loss of quality."
  },
  {
    question: "Can AI vectorizers convert low-resolution pixel logos into clean SVGs?",
    answer: "Yes. Advanced neural vectorizers use deep learning models trained on millions of vector shapes. Rather than traditional algorithmic thresholding (which creates thousands of jagged micro-nodes), neural vectorizers reconstruct smooth curves, sharp corners, and straight lines matching the original designer's intent."
  },
  {
    question: "Are AI-generated SVGs compatible with Adobe Illustrator, Figma, and Canva?",
    answer: "Yes, 100%. Generative vector tools export standard W3C-compliant .SVG files, as well as .EPS and .PDF formats. You can drag and drop them directly into Figma, ungroup paths in Adobe Illustrator, adjust stroke weights, or import them into Canva brand kits."
  },
  {
    question: "Can I use AI-generated vector graphics for commercial merchandise and client projects?",
    answer: "Yes. Premium tiers of Recraft, Kittl, and Vectorizer.ai provide full commercial ownership of generated and converted SVG files. You can use them for commercial client logos, t-shirts, physical merchandise, web templates, and mobile applications."
  },
  {
    question: "Why do some AI vector tools produce massive, laggy SVG files?",
    answer: "Basic tools perform simple pixel-color tracing, placing thousands of tiny polygon shards that bloat the file to 15MB and crash web browsers. Quality AI vector tools use algorithmic node simplification and curve fitting, producing featherlight 20KB-80KB SVGs that load instantly."
  }
];

const alternatives = [
  { 
    name: "Recraft", 
    slug: "recraft-ai",
    score: "9.9", 
    price: "Freemium ($20/mo)", 
    bestFor: "Best Overall Generative Vector Studio & Brand Kits", 
    highlight: "Generates native editable vector illustrations, icons, and 3D graphics with custom color palettes and direct SVG/Lottie export." 
  },
  { 
    name: "Vectorizer.ai", 
    slug: "vectorizer-ai",
    score: "9.8", 
    price: "Pay-As-You-Go ($0.20/image)", 
    bestFor: "Flawless Raster-to-Bézier Vector Conversion", 
    highlight: "Deep learning engine that converts messy PNGs and JPEGs into clean, production-grade vector paths with zero jagged artifacts." 
  },
  { 
    name: "Kittl AI", 
    slug: "kittl-ai",
    score: "9.7", 
    price: "Freemium ($15/mo)", 
    bestFor: "T-Shirt Graphics & Vintage Merch Typography", 
    highlight: "All-in-one graphic design platform with AI vector generation, curved text warp engines, and commercial apparel mockups." 
  },
  { 
    name: "Illustroke", 
    slug: "illustroke",
    score: "9.6", 
    price: "From $6 (Token-based)", 
    bestFor: "Minimalist Web Icons & Isometric Spot Illustrations", 
    highlight: "Specialized text-to-SVG prompt generator offering 40+ artistic styles including doodle, corporate flat, and cyberpunk vector art." 
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

export default function AiVectorSvgGeneratorsGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-emerald-500/20 shadow-xl shadow-emerald-500/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-600/20 via-slate-900/60 to-slate-950/90 pointer-events-none" />
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-md">
            <PenTool className="w-4 h-4" />
            2026 Architectural Evaluation & Production Blueprint
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Next-Gen AI Vector & <br className="hidden md:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              SVG Graphic Generators
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-8">
            The definitive technical guide to generative Bézier path synthesis, neural raster-to-vector tracing, and resolution-independent SVG graphic assets for web design, apparel, and branding.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl pt-6 border-t border-slate-800">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-white">0%</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Pixelation at Any Scale</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-emerald-400">&lt; 35 KB</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Average Clean SVG Size</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-teal-400">95%</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Node Count Reduction</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-cyan-400">100%</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Illustrator & Figma Ready</span>
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
          <h2 className="text-sm font-extrabold text-emerald-500 uppercase tracking-[0.25em] mb-3">Definitive Overview</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">The Death of Manual Pen-Tool Vector Tracing</h3>
        </div>

        <div className="space-y-10 md:space-y-12">
          {/* Bento Card 1 */}
          <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/30 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Maximize2 className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-on-surface tracking-tight">Mathematical Bézier Curves vs. Static Raster Grids</h4>
              <p className={figtreeBodyClass}>
                Standard generative AI models like Midjourney and Stable Diffusion produce raster grids—millions of fixed-color pixels. The moment you zoom in, print a billboard, or resize an asset for retina screens, artifacts and blur occur. <strong>AI vector generators fundamentally rethink image synthesis</strong> by predicting mathematical geometry: coordinate anchors, tangent curvature angles, and layered stroke fills.
              </p>
              <p className={figtreeDarkBodyClass}>
                Instead of producing a 10MB raster PNG, the output is semantic XML that renders dynamically in the browser DOM with zero latency, zero blurring, and complete CSS/JS hover programmability.
              </p>
            </div>
            <div className="md:w-1/2 w-full bg-slate-950 p-6 rounded-2xl border border-slate-800 text-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span>output.svg (Clean XML)</span>
                <span className="text-emerald-400">22.4 KB • 18 Nodes</span>
              </div>
              <pre className="mt-4 text-xs font-mono leading-relaxed text-slate-300 overflow-x-auto p-2 bg-slate-900/80 rounded-lg border border-slate-800">
                <code>{`<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%">
      <stop offset="0%" stop-color="#10B981" />
      <stop offset="100%" stop-color="#06B6D4" />
    </linearGradient>
  </defs>
  <g id="brand-emblem" fill="url(#neonGlow)">
    <path d="M250,50 C360,50 450,140 450,250 
             C450,360 360,450 250,450 
             C140,450 50,360 50,250 Z" />
  </g>
</svg>`}</code>
              </pre>
              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Production-ready XML with zero polygon bloat</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2 */}
          <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/30 flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-on-surface tracking-tight">Neural Deep Learning Vectorization vs. Old-School Tracing</h4>
              <p className={figtreeBodyClass}>
                For decades, graphic artists relied on Adobe Illustrator's native "Image Trace" tool. The algorithm simply detected pixel brightness thresholds, yielding messy, jagged paths with tens of thousands of redundant anchor points that froze vector software and ruined laser cutters.
              </p>
              <p className={figtreeDarkBodyClass}>
                Next-generation neural vectorizers (such as <strong>Vectorizer.ai</strong>) understand <em>artistic intent</em>. They recognize when a pixel cluster is meant to be a perfect 90° corner, a continuous circular arc, or a clean linear gradient, automatically fitting ideal Bézier curves with surgical precision.
              </p>
            </div>
            <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">Legacy Auto-Trace</span>
                <span className="text-2xl font-extrabold text-red-300">4,820 Nodes</span>
                <p className="text-xs text-slate-400 mt-2">Bloated file sizes, jagged wobbly edges, unseparated color layers, and impossible manual cleanup.</p>
              </div>
              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">2026 Neural AI Vector</span>
                <span className="text-2xl font-extrabold text-emerald-300">142 Nodes</span>
                <p className="text-xs text-slate-400 mt-2">Silky-smooth curvature, grouped color paths, featherlight file size, and one-click SVG/Figma export.</p>
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
          <h2 className="text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-2">Efficiency & Economic Benchmark</h2>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight">Manual Vectorization vs. AI Vector Workflow</h3>
          <p className="text-slate-400 mt-3 text-sm md:text-base">
            Compare the time, agency costs, and iteration velocity of converting 100 raster logos or illustrations into clean vector files.
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
              Traditional Graphic Agency
            </button>
            <button
              onClick={() => setRoiMode("ai")}
              className={`px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
                roiMode === "ai" 
                  ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              2026 AI Vector Stack
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Turnaround Time (100 Assets)</span>
              <div className="text-3xl md:text-4xl font-black text-white mt-2">
                {roiMode === "traditional" ? "120 Hours" : "8 Minutes"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "Freelancers or junior designers manually drawing paths with pen tools across several weeks."
                : "Batch upload full image directories with neural GPU vectorization processing in parallel."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Direct Production Cost</span>
              <div className="text-3xl md:text-4xl font-black text-emerald-400 mt-2">
                {roiMode === "traditional" ? "$4,500" : "$20"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "Billed at standard $35–$65/hour design contractor rates with revision overhead."
                : "A single monthly subscription or a few pay-as-you-go credits for unlimited vector downloads."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Editability & Path Purity</span>
              <div className="text-3xl md:text-4xl font-black text-teal-400 mt-2">
                {roiMode === "traditional" ? "Variable" : "Algorithmic"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "Disjointed path conventions depending on which freelancer traced which image."
                : "Consistent mathematical Bézier curves, automated node minimization, and clean SVG groupings."}
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
          <h2 className="text-sm font-extrabold text-emerald-500 uppercase tracking-[0.25em] mb-3">Industry Solutions</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Engineered for Modern Visual Workflows</h3>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {useCases.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
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
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500">
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
          <h2 className="text-sm font-extrabold text-emerald-500 uppercase tracking-[0.25em] mb-3">Architectural Comparison</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Vector Generator Capabilities Matrix</h3>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-outline-variant/30 bg-surface-container-low">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-container border-b border-outline-variant/40 text-on-surface text-xs uppercase tracking-wider font-extrabold">
              <tr>
                <th className="p-4 md:p-5">Platform</th>
                <th className="p-4 md:p-5">Generation Mode</th>
                <th className="p-4 md:p-5">Bézier Smoothness</th>
                <th className="p-4 md:p-5">Layer Grouping</th>
                <th className="p-4 md:p-5">Primary Strength</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 text-on-surface-variant font-medium">
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  Recraft
                </td>
                <td className="p-4 md:p-5">Native Generative Vector & V2V</td>
                <td className="p-4 md:p-5 text-emerald-500 font-bold">Ultra-Refined</td>
                <td className="p-4 md:p-5 text-emerald-500 font-bold">Full XML Hierarchy</td>
                <td className="p-4 md:p-5">Original vector illustrations from text</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                  Vectorizer.ai
                </td>
                <td className="p-4 md:p-5">Deep Learning Raster-to-Vector</td>
                <td className="p-4 md:p-5 text-emerald-500 font-bold">Sub-Pixel Geometric</td>
                <td className="p-4 md:p-5">Automatic by Color</td>
                <td className="p-4 md:p-5">Flawless conversion of logos & sketches</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                  Kittl AI
                </td>
                <td className="p-4 md:p-5">Prompt-to-Vector & Graphic Design</td>
                <td className="p-4 md:p-5">Smooth Stylized</td>
                <td className="p-4 md:p-5">Apparel Layer Stacks</td>
                <td className="p-4 md:p-5">Print-on-demand t-shirts & vintage badges</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  Illustroke
                </td>
                <td className="p-4 md:p-5">Text-to-SVG Styled Illustrations</td>
                <td className="p-4 md:p-5">Clean Minimalist</td>
                <td className="p-4 md:p-5">Standard Grouped</td>
                <td className="p-4 md:p-5">Website hero spot illustrations & icons</td>
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
          <h2 className="text-sm font-extrabold text-emerald-500 uppercase tracking-[0.25em] mb-3">Buyer's Checklist</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">4 Must-Haves in an AI Vector Generator</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">1</div>
            <h4 className="text-xl font-bold text-on-surface">Geometric Node Simplification</h4>
            <p className={figtreeBodyClass}>
              Cheap vectorizers trace every pixel edge, creating files with 10,000 anchor points that cause Figma and web browsers to crawl. Look for software that executes intelligent path reduction, keeping node counts low while preserving exact curvature.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center font-bold">2</div>
            <h4 className="text-xl font-bold text-on-surface">True Multi-Color Layer Separation</h4>
            <p className={figtreeBodyClass}>
              If you plan to screen print t-shirts, cut vinyl, or animate assets in After Effects, paths must be cleanly separated into distinct color layers rather than flattened overlapping polygon shards.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold">3</div>
            <h4 className="text-xl font-bold text-on-surface">True Mathematical Vectors vs. Faux SVG Embeds</h4>
            <p className={figtreeBodyClass}>
              Watch out for dishonest tools that simply base64-encode a raster PNG inside an SVG wrapper (`&lt;image href="data:image/png..."&gt;`). A genuine vector file contains path coordinate tags (`&lt;path d="..."&gt;`) with mathematical Bézier calculations.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center font-bold">4</div>
            <h4 className="text-xl font-bold text-on-surface">Curated Palette & Brand Consistency</h4>
            <p className={figtreeBodyClass}>
              Generating icons for an enterprise dashboard requires identical line weights and harmonious color schemes. Premier platforms like Recraft let you lock hex palettes, stroke thicknesses, and artistic style presets across hundreds of generated vectors.
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
          <h2 className="text-sm font-extrabold text-emerald-500 uppercase tracking-[0.25em] mb-3">Top Directory Picks</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">The Gold Standard AI Vector Suites</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alternatives.map((tool) => (
            <div 
              key={tool.slug}
              className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h4 className="text-2xl font-black text-on-surface">{tool.name}</h4>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-extrabold text-sm">
                    ★ {tool.score}
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-400 mb-2">{tool.price}</div>
                <div className="text-xs font-semibold text-emerald-500 mb-4">{tool.bestFor}</div>
                <p className={figtreeBodyClass}>
                  {tool.highlight}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                <Link 
                  href={`/tool/${tool.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-500 hover:text-emerald-400 transition-colors"
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
          <h2 className="text-sm font-extrabold text-emerald-500 uppercase tracking-[0.25em] mb-3">Technical Lexicon</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Vector Engineering & SVG Terminology</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {glossaryTerms.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2"
            >
              <h4 className="text-base font-bold text-on-surface flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
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
          <h3 className="text-sm font-extrabold text-emerald-500 uppercase tracking-[0.25em] mb-3">Frequently Asked Questions</h3>
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
                className="w-full text-left p-6 font-bold text-on-surface flex justify-between items-center gap-4 hover:text-emerald-500 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-emerald-500" : ""}`} />
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
