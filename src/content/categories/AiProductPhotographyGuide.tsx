"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Camera, 
  ShoppingBag, 
  Sparkles, 
  Sun, 
  Layers, 
  DollarSign, 
  CheckCircle2, 
  Award, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  Sliders, 
  Package, 
  Maximize2, 
  AlertTriangle,
  Eye,
  Store,
  Palette
} from "lucide-react";

// ---- DATA STRUCTURES ---- //

const useCases = [
  {
    id: "cosmetics-beauty",
    title: "Cosmetics & Skincare Brands",
    icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
    content: "Beauty brands require pristine water splash effects, natural botanical ingredients, and marble podium backdrops. Dedicated AI engines simulate glass refraction, fluid dynamics, and soft diffused ring lighting around cosmetic bottles without requiring high-speed studio strobes or liquid rigging."
  },
  {
    id: "apparel-fashion",
    title: "Apparel & Virtual On-Model Fitting",
    icon: <ShoppingBag className="w-5 h-5 text-teal-500" />,
    content: "Ghost mannequin and flat-lay photos convert poorly compared to live models. Modern fashion AI tools drape garments onto diverse virtual models of varying ethnicities, body shapes, and poses, preserving fabric wrinkles, hem drape, and logo placement accurately."
  },
  {
    id: "amazon-marketplace",
    title: "Amazon, Shopify & Marketplace Sellers",
    icon: <Store className="w-5 h-5 text-amber-500" />,
    content: "Marketplace listings demand a 100% pure white main hero shot followed by 6 contextual lifestyle infographics. AI tools batch-process entire product catalogs in one click, generating Amazon-compliant pure white cutouts alongside kitchen, gym, and outdoor lifestyle scenes."
  },
  {
    id: "luxury-jewelry",
    title: "Jewelry & High-End Accessories",
    icon: <Award className="w-5 h-5 text-cyan-500" />,
    content: "Metallic surfaces and gemstones create harsh glare that challenges traditional photographers. AI product studios calculate real-time raytraced caustic reflections, ground contact shadows, and micro-faceted diamond sparkles for rings, watches, and precious metals."
  }
];

const glossaryTerms = [
  {
    term: "Contact Shadow (Ambient Occlusion)",
    def: "The natural dark gradient created where a physical product touches a surface. Without accurate contact shadows, AI products appear to 'float' unnaturally in the scene."
  },
  {
    term: "Specular Highlight Refraction",
    def: "The realistic simulation of light bouncing off shiny surfaces (such as polished glass, glossy plastics, or polished gold) consistent with background environmental light sources."
  },
  {
    term: "Sub-Pixel Alpha Matting",
    def: "Advanced background removal that preserves semi-transparent edges, fur, hair, and translucent glass borders without leaving blurry fringes or halo artifacts."
  },
  {
    term: "Perspective & Horizon Matching",
    def: "The automated calibration ensuring that the camera angle, focal length, and vanishing point of the background match the exact perspective of the original product photograph."
  },
  {
    term: "Batch Catalog Compositing",
    def: "The capability to upload 50 to 500 product SKUs simultaneously and render them into uniform brand scene templates with identical lighting and camera elevation."
  },
  {
    term: "Pure White (RGB 255,255,255) Isolation",
    def: "The strict e-commerce marketplace standard requiring main hero product images to sit on an uncompressed pure white canvas without gray shadows or color cast."
  }
];

const faqData = [
  {
    question: "What is the best AI tool for e-commerce product photography in 2026?",
    answer: "Photoroom and Flair AI lead for commercial product imagery. Photoroom is unrivaled for rapid mobile cutouts, batch processing, and marketplace templates, while Flair AI excels for high-end studio staging, custom 3D lighting, and props for luxury cosmetics and beverage brands."
  },
  {
    question: "Do AI-generated product photos look fake or obviously artificial?",
    answer: "Early AI tools made products look like stickers pasted onto random backgrounds. 2026 engines utilize neural physics modeling that generates true raytraced contact shadows, environmental color bouncing (radiosity), and accurate perspective matching, making the final photos indistinguishable from $5,000 commercial studio shoots."
  },
  {
    question: "Are AI product photos approved for Amazon, Etsy, and Shopify listings?",
    answer: "Yes. Major e-commerce platforms evaluate images based on clarity, resolution, and compliance with white background rules. As long as your main image accurately represents the physical product dimensions and features without deceptive alterations, AI-generated listing photos fully comply."
  },
  {
    question: "Can I generate photos with human models wearing my apparel without a photoshoot?",
    answer: "Yes. Virtual on-model AI tools (such as Booth.ai, CreatorKit, and Caspa AI) allow merchants to upload simple flat-lay or mannequin shirt and dress photos and render them onto photorealistic virtual models in studio or street environments."
  },
  {
    question: "What image quality and camera do I need to start with?",
    answer: "A standard modern smartphone (iPhone or Android) in decent natural window light is sufficient. The AI automatically isolates the product, enhances edge micro-contrast, balances white balance, upscales resolution to 4K, and adds professional studio strobes and backdrops."
  },
  {
    question: "What is the difference between Midjourney and dedicated product photo tools?",
    answer: "Midjourney generates beautiful fictional products from text, but it cannot preserve your real-world label text, packaging dimensions, or exact branding logos without distortion. Dedicated e-commerce tools preserve 100% of your physical product's pixels and only generate the surrounding set, lighting, and props."
  }
];

const alternatives = [
  { 
    name: "Photoroom", 
    slug: "photoroom",
    score: "9.9", 
    price: "Freemium / $9.99/mo", 
    bestFor: "Best Overall for Mobile Sellers & Batch Processing", 
    highlight: "Industry standard with instant sub-pixel cutout accuracy, automatic shadow physics, and 1-click Amazon marketplace templates." 
  },
  { 
    name: "Flair AI", 
    slug: "flair-ai",
    score: "9.8", 
    price: "Freemium / $10/mo", 
    bestFor: "Luxury Studio Staging & Custom Prop Styling", 
    highlight: "Drag-and-drop 3D canvas allowing creators to position bottles, props, camera angles, and lighting bounces with precision." 
  },
  { 
    name: "Pebblely", 
    slug: "pebblely",
    score: "9.7", 
    price: "Freemium / $19/mo", 
    bestFor: "Social Media Lifestyle & Theme Variations", 
    highlight: "Generates seasonal holiday, beach, kitchen, and bathroom themes in seconds with consistent lighting and natural reflections." 
  },
  { 
    name: "Claid.ai", 
    slug: "claid-ai",
    score: "9.6", 
    price: "From $19/mo", 
    bestFor: "Enterprise E-Commerce & Automated Catalog Upscaling", 
    highlight: "API-first platform designed for high-volume retailers needing automated background replacement, color correction, and 4K upscaling." 
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

export default function AiProductPhotographyGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-emerald-500/20 shadow-xl shadow-emerald-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-teal-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/30 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-6 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <Camera className="w-4 h-4 text-emerald-400" /> 
            2026 Commercial E-Commerce Photography Architecture
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.08]"
          >
            The Definitive Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 drop-shadow-sm">
              AI Product Photography
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${figtreeDarkBodyClass} max-w-2xl mx-auto`}
          >
            How neural contact shadows, raytraced reflection physics, and automated catalog staging empower brands to turn phone snapshots into studio-grade commercial assets in seconds.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Definitive Overview - Two Alternating Container Blocks */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-8 md:mb-12 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-8">
          <h3 className="text-sm font-extrabold text-emerald-500 uppercase tracking-[0.25em] mb-3">The Retail Bottleneck</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Why Physical Product Photoshoots Paralyze E-Commerce</h4>
        </motion.div>

        <div className="space-y-10 md:space-y-12">
          {/* Block 1: The Studio Cost Chasm */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-8 shadow-sm">
                <DollarSign className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">The $250-per-SKU Studio Trap</h5>
              <p className={figtreeBodyClass}>
                Traditional commercial product photography is slow and expensive. Hiring a studio, lighting technician, set stylist, and retoucher costs between $150 and $300 per product SKU, with a 3-week waiting period for delivery. When a brand launches 20 seasonal variants or seasonal colorways, photoshoot expenses quickly eat up gross margin before the first sale is made.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-900/20 border border-emerald-200/50 dark:border-emerald-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-48 h-48 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 absolute" />
               <div className="w-full max-w-xs rounded-2xl bg-slate-900/90 border border-white/20 p-6 flex flex-col justify-between relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-105">
                 <div className="flex justify-between items-center mb-4">
                   <div className="flex items-center gap-2">
                     <AlertTriangle className="w-4 h-4 text-amber-400" />
                     <div className="text-[12px] text-white/90 font-mono font-bold">Traditional Studio Invoice</div>
                   </div>
                   <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[11px] font-bold">$2,850 Total</span>
                 </div>
                 <div className="space-y-2 mb-4">
                   <div className="h-2 w-full bg-red-400/50 rounded-full" />
                   <div className="h-2 w-4/5 bg-red-400/30 rounded-full" />
                   <div className="h-2 w-2/5 bg-red-400/20 rounded-full" />
                 </div>
                 <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[11px] text-slate-400">
                   <span>21 Days Delivery Latency</span>
                   <span className="text-red-400 font-bold">10 SKUs Only</span>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Block 2: Physics-Grounded Shadow & Lighting Engine */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-teal-50/50 to-amber-50/50 dark:from-teal-950/20 dark:to-amber-900/20 border border-teal-200/50 dark:border-teal-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-full max-w-sm space-y-4 relative z-10 transition-transform duration-700 group-hover:scale-105">
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-4 shadow-md flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold">
                     <CheckCircle2 className="w-6 h-6" />
                   </div>
                   <div className="space-y-1.5 flex-1">
                     <div className="flex justify-between items-center">
                       <span className="text-xs font-bold text-on-surface">Neural Lighting &amp; Occlusion</span>
                       <span className="text-[11px] font-extrabold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">100% Photoreal</span>
                     </div>
                     <div className="h-2 w-full bg-emerald-500/30 rounded-full" />
                   </div>
                 </div>
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <Sun className="w-4 h-4 text-emerald-500" />
                     <span className="text-xs font-bold text-on-surface">Sub-Pixel Matting Active</span>
                   </div>
                   <span className="text-xs font-bold text-emerald-500 px-2 py-0.5 bg-emerald-500/10 rounded-full">4K Studio Render</span>
                 </div>
               </div>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-amber-500/20 border border-teal-500/20 flex items-center justify-center text-teal-500 mb-8 shadow-sm">
                <Sliders className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">Physics-Grounded Contact Shadows & Reflections</h5>
              <p className={figtreeBodyClass}>
                Unlike primitive background erasers that produce flat, pasted-on graphics, 2026 AI product photography engines comprehend 3D spatial geometry. The AI calculates the exact ground contact plane, rendering natural ambient occlusion shadows, environmental color bounce, and specular surface reflections that blend physical products seamlessly into any scene.
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-5">
              <DollarSign className="w-7 h-7" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">Calculate Catalog Photoshoot Cost & Speed</h3>
            <p className={figtreeBodyClass + " max-w-xl"}>
              Compare physical photography studio rentals against automated AI product staging engines for monthly e-commerce catalogs.
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
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${roiMode === "ai" ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20" : "text-slate-400 hover:text-on-surface"}`}
              >
                AI Product Studio
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center relative z-10">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <DollarSign className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-emerald-500" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-1 text-sm">Cost per 20 Product SKUs</div>
              <div className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "$15 - $29" : "$3,200+"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <Clock className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-emerald-500" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-1 text-sm">Turnaround Time to Live</div>
              <div className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "12 Minutes" : "18 Business Days"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <ShoppingBag className={`w-7 h-7 mx-auto mb-3 ${roiMode === "ai" ? "text-emerald-500" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-1 text-sm">Listing Conversion Rate Lift</div>
              <div className="text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "+27% Sales" : "Baseline"}
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
          <h3 className="text-sm font-extrabold text-emerald-500 uppercase tracking-[0.25em] mb-3">Merchant Sectors</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Who Relies on AI Product Photography?</h4>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(uc.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === uc.id 
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-105" 
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
                <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">{uc.icon}</span>
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
          <h3 className="text-sm font-extrabold text-emerald-500 uppercase tracking-[0.25em] mb-3">Benchmark Matrix</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Product Staging Technology Comparison</h4>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                <th className="p-4 md:p-5 font-black text-on-surface">Solution Type</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Contact Shadow Physics</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Logo & Label Fidelity</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Batch Processing</th>
                <th className="p-4 md:p-5 font-black text-on-surface">Cost per SKU</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <Camera className="w-4 h-4 text-slate-400" />
                  Physical Commercial Studio
                </td>
                <td className="p-4 md:p-5 text-emerald-500 font-bold">100% Optical</td>
                <td className="p-4 md:p-5 text-emerald-500 font-bold">100% Exact</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">Manual (Slow)</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">$150 - $300</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <Palette className="w-4 h-4 text-amber-500" />
                  Raw Text-to-Image (Midjourney)
                </td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Varies (Artistic)</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">Distorts Text / Fictional</td>
                <td className="p-4 md:p-5 text-red-500 font-bold">No Catalog Pipeline</td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Subscription</td>
              </tr>
              <tr className="bg-emerald-50/40 dark:bg-emerald-950/20 font-semibold">
                <td className="p-4 md:p-5 font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  Dedicated AI Product Studio (Photoroom, Flair)
                </td>
                <td className="p-4 md:p-5 text-emerald-600 dark:text-emerald-400 font-extrabold">Neural Raytraced</td>
                <td className="p-4 md:p-5 text-emerald-600 dark:text-emerald-400 font-extrabold">100% Unaltered Product</td>
                <td className="p-4 md:p-5 text-emerald-600 dark:text-emerald-400 font-extrabold">Instant 500+ SKUs</td>
                <td className="p-4 md:p-5 text-emerald-600 dark:text-emerald-400 font-extrabold">&lt; $0.10</td>
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
          <h3 className="text-sm font-extrabold text-emerald-500 uppercase tracking-[0.25em] mb-3">Merchant Checklist</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">What Makes a Legit AI Product Studio in 2026?</h4>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
              <Sun className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Directional Lighting & Shadow Controls</h5>
            <p className={figtreeBodyClass}>
              The tool must allow you to specify the light source angle (top-left, back-lit, direct strobe) so your product casts accurate directional shadows that match the background environment.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Zero-Distortion Label & Logo Preservation</h5>
            <p className={figtreeBodyClass}>
              Verify that the AI locks the product&apos;s physical bounding box and surface pixels, guaranteeing that ingredient labels, barcodes, brand typography, and textures remain uncorrupted.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-4">
              <Maximize2 className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">4K Upscaling & Marketplace Canvas Presets</h5>
            <p className={figtreeBodyClass}>
              Ensure the software exports high-DPI assets formatted for Amazon (2000x2000 zoomable), Shopify square, Instagram 4:5 ads, and TikTok 9:16 story formats with 1-click resizing.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
              <Package className="w-6 h-6" />
            </div>
            <h5 className="text-xl font-bold text-on-surface mb-2">Multi-Angle Brand Consistency</h5>
            <p className={figtreeBodyClass}>
              Top engines allow you to place your product from front, angled, and top-down perspectives into the same thematic background setting while maintaining identical lighting and surface reflections.
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
          <h3 className="text-sm font-extrabold text-emerald-500 uppercase tracking-[0.25em] mb-3">Top Ranked Software</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Best AI Product Photography Tools</h4>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {alternatives.map((alt) => (
            <div key={alt.slug} className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md hover:border-emerald-500/50 transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h5 className="text-2xl font-black text-on-surface">{alt.name}</h5>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
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
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 group"
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
          <h3 className="text-sm font-extrabold text-emerald-500 uppercase tracking-[0.25em] mb-3">Technical Glossary</h3>
          <h4 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">Key Commercial Imaging Terminology</h4>
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
