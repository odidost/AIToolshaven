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
  Palette, 
  Layers, 
  TrendingUp, 
  Target, 
  MousePointerClick, 
  LayoutGrid, 
  Sparkle,
  BarChart3
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI ad creative generator and how does it work?",
    answer: "An AI ad creative generator is a specialized machine learning platform that automatically produces high-converting banner designs, social ad formats, and promotional copy across multiple aspect ratios (1:1, 9:16, 16:9). Unlike generic design suites, these platforms are trained on billions of historic ad impressions, click-through rates (CTR), and conversion events, allowing them to predictively score visual layouts, headline hooks, and call-to-actions before spending ad budget."
  },
  {
    question: "What is the best AI ad creative generator in 2026?",
    answer: "AdCreative.ai is widely recognized as the market leader for e-commerce brands and performance marketing agencies seeking conversion-scored multi-format assets in seconds. For multi-channel paid media teams requiring video generation and automated media buying, Pencil AI and Madgicx offer enterprise-tier creative intelligence and predictive scoring across Meta, TikTok, and Google Ads."
  },
  {
    question: "How do AI ad generators prevent creative fatigue in paid campaigns?",
    answer: "Creative fatigue occurs when target audiences repeatedly see identical banners, resulting in declining CTR and rising customer acquisition costs (CAC). AI generators resolve this by instantly producing dozens of creative variations—altering typography weights, background aesthetics, product staging, color contrast, and primary benefit hooks—enabling automated creative refresh rotations that keep paid algorithms optimized."
  },
  {
    question: "Can AI ad generators adhere strictly to brand identity guidelines?",
    answer: "Yes. Advanced platforms allow you to input brand kits containing primary/secondary hex color palettes, font pairings, logo assets with transparent backgrounds, and compliance guardrails. The AI dynamically injects your exact brand assets while adapting visual composition to meet Meta and Google Display advertising policies."
  }
];

const useCases = [
  {
    title: "Direct-to-Consumer (DTC) & E-Commerce",
    badge: "Scale & ROAS",
    desc: "Generate hundreds of multi-sku product catalog ads, seasonal discount banners, and TikTok UGC style variations to combat audience fatigue and scale Return on Ad Spend.",
    benefits: [
      "Instant background removal and lifestyle product compositing",
      "Dynamic pricing badges and urgency stickers",
      "Seamless Shopify & WooCommerce product feed synchronization"
    ],
    highlight: "Average 14.2x increase in weekly creative testing capacity"
  },
  {
    title: "Performance Marketing Agencies",
    badge: "Multi-Client Agility",
    desc: "Eliminate creative bottlenecks by delivering turnkey 40-variant testing matrices for dozens of client ad accounts within minutes rather than weeks.",
    benefits: [
      "White-label client presentation dashboards with predictive scores",
      "One-click multi-format resizing for Meta, TikTok, Pinterest, and Google",
      "Granular brand kit isolation across enterprise workspaces"
    ],
    highlight: "80% reduction in turnaround time from client brief to live campaign"
  },
  {
    title: "B2B SaaS & Enterprise Lead Gen",
    badge: "High-Intent CTR",
    desc: "Design authoritative, high-converting LinkedIn sponsored content, Google Display banners, and retargeting carousels that drive qualified software signups.",
    benefits: [
      "Data-driven value proposition headline testing",
      "Sleek UI mockup compositing and dashboard screenshots",
      "Strict compliance with corporate typography and enterprise branding"
    ],
    highlight: "Up to 38% higher click-to-lead conversion rates on retargeting"
  }
];

const glossaryTerms = [
  {
    term: "Predictive Performance Scoring",
    definition: "A machine learning mechanism that evaluates ad layouts against millions of historical ad data points to estimate conversion probabilities before spending media budget."
  },
  {
    term: "Creative Fatigue Detection",
    definition: "Automated monitoring that detects when frequency spikes cause CTR drops and CAC inflation, triggering the rollout of pre-generated variant batches."
  },
  {
    term: "Dynamic Creative Optimization (DCO)",
    definition: "Real-time assembly of ad components (headlines, background images, CTAs) tailored dynamically based on the viewer's demographic, device, and behavioral data."
  },
  {
    term: "Aspect Ratio Transmutation",
    definition: "Intelligent reformatting that redistributes visual hierarchy, text safe zones, and focal elements between Square (1:1), Story/Reels (9:16), and Landscape (16:9) formats."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiAdCreativeGeneratorsGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-indigo-950 text-white p-8 md:p-14 border border-indigo-500/20 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Performance Marketing & Conversion Intelligence 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Ad Creative Generators: <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Scale High-ROAS Banners & Social Ads</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Stop letting creative bottlenecks suffocate your paid acquisition. Discover the leading AI ad generators that produce conversion-tested banners, multi-format social graphics, and predictive copy to outsmart audience fatigue and slash customer acquisition costs.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Creative Production Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How autonomous design models and predictive scoring dismantled traditional agency retainer models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
              <Timer className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Traditional Agency Retainers</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Design agencies charge $5,000 to $15,000 monthly, requiring 7-14 business days to produce a single 5-variant testing pack. Iterations stall while CAC rises and campaign momentum fades.
            </p>
            <div className="pt-2 text-xs font-semibold text-rose-600 dark:rose-400">
              Turnaround: 10-14 Business Days
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900/40 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">AI Predictive Ad Engines</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Input your brand kit, product URL, and target audience. Generative models assemble 50+ conversion-optimized variations across all social ratios in 90 seconds, complete with AI compliance scoring.
            </p>
            <div className="pt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              Turnaround: Under 2 Minutes
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/40 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Predictive Conversion Scoring</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Rather than guessing which layout or hook resonates, algorithms benchmark color contrast, logo prominence, and headline typography against $1B+ in live media spend to predict winning variants.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Outcome: 30% to 150% Higher ROAS
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" /> Paid Media Cost & Velocity Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Agency Retainer vs. AI Creative Generation
            </h2>
          </div>

          {/* Toggle pill */}
          <div className="inline-flex rounded-xl bg-slate-800 p-1.5 border border-slate-700">
            <button
              onClick={() => setCalculatorMode("traditional")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                calculatorMode === "traditional"
                  ? "bg-slate-700 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Traditional Agency & Freelance
            </button>
            <button
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                calculatorMode === "ai"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AI Automated Creative Engine
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Turnaround Speed</span>
              <Timer className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "10 - 14 Days" : "90 Seconds"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Multiple client revisions, copy reviews, and manual aspect ratio resizing."
                : "Full 40-variant batch generated instantly in square, portrait, and horizontal."}
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Cost Per Creative Variant</span>
              <DollarSign className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "$120 - $250" : "$0.30 - $1.20"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Freelancer hourly billing, project management overhead, and licensing."
                : "Predictable SaaS flat monthly subscription with unlimited exports."}
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Weekly Testing Scalability</span>
              <LineChart className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {calculatorMode === "traditional" ? "3 - 8 Variations" : "150+ Variations"}
            </div>
            <p className="text-xs text-slate-400">
              {calculatorMode === "traditional"
                ? "Severely constrained by human designer bandwidth and manual export steps."
                : "Multivariate testing of backgrounds, benefit hooks, badges, and CTAs."}
            </p>
          </div>
        </div>
      </section>

      {/* 4. SPONSOR / EDITOR'S CHOICE SPOTLIGHT */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-2 border-indigo-500/40 p-8 sm:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-400" />
              Editor&apos;s Choice: Best Overall Ad Creative Engine (2026)
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              AdCreative.ai
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Trained on over 1 billion conversion-driven ad creatives, AdCreative.ai generates ready-to-run display ads, social media posts, and text headlines in seconds. With integrated scoring that predicts which creative will perform best, it delivers an unmatched combination of design aesthetics and high conversion rates for e-commerce and performance brands.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Predictive conversion score for every design</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Instant multi-ratio rendering (1:1, 9:16, 16:9)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Automated background removal & product staging</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct Meta, Google, and TikTok ad account sync</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <Link
              href="/tools/adcreative-ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold shadow-lg hover:shadow-indigo-500/25 transition-all text-center"
            >
              Explore AdCreative.ai Profile
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-xs text-center text-slate-400">
              Trusted by 100,000+ advertisers & agencies globally
            </span>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 ALTERNATIVES MATRIX + BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top Alternative AI Ad Creative Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Specialized solutions for predictive video ad creation, autonomous media management, and multi-channel copy generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Madgicx */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                  Omnichannel Suite
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.8 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">Madgicx</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                An all-in-one AI advertising powerhouse combining creative intelligence audits with autonomous ad bidding and predictive copy generation for Meta and Google Ads.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Scale Advertisers</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">From $29 / month</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/madgicx"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View Madgicx Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Pencil AI */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold">
                  Video & Static AI
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.7 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">Pencil AI</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Trained on over $1B in tracked media spend, Pencil automatically creates high-performing video and static ad concepts predictively rated before deployment.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Video Ad Automation</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">From $119 / month</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/pencil-ai"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View Pencil AI Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: QuickAds AI */}
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  Multi-Format Speed
                </span>
                <span className="text-xs font-extrabold text-amber-500 flex items-center gap-1">
                  ★ 4.6 / 5.0
                </span>
              </div>
              <h3 className="text-xl font-bold">QuickAds AI</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Build targeted ad variations across 30+ ad platforms with built-in multi-lingual copy generation, custom brand palettes, and ready-to-run layouts.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Best For:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Cross-Platform Rapid Testing</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Pricing:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Freemium / $19/mo</span>
                </div>
              </div>
            </div>
            <Link
              href="/tools/quickads-ai"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white text-xs font-bold transition-all"
            >
              View QuickAds AI Analysis
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="rounded-2xl p-6 bg-gradient-to-r from-indigo-900/10 to-transparent border border-indigo-200 dark:border-indigo-900/30 space-y-3">
            <h4 className="text-base font-bold flex items-center gap-2">
              <MousePointerClick className="w-4 h-4 text-indigo-500" />
              Static Banners vs. Video Ad Automation
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              While static banners like those generated by AdCreative.ai excel in lower-funnel retargeting and Google Display reach, video-oriented generators like Pencil AI convert superiorly on top-of-funnel TikTok and Instagram Reels by animating hooks, pricing callouts, and UGC testimonials.
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-r from-purple-900/10 to-transparent border border-purple-200 dark:border-purple-900/30 space-y-3">
            <h4 className="text-base font-bold flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-500" />
              Dynamic Product Ads (DPA) vs. Generative Creative
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Traditional Meta DPAs simply pull cold catalog photos onto plain white canvas. Generative ad engines overlay high-converting badge ribbons, star ratings, and seasonal campaign lifestyle aesthetics directly over your product inventory feeds automatically.
            </p>
          </div>
        </div>
      </section>

      {/* 6. BUYER'S GUIDE & EVALUATION CRITERIA */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            How to Evaluate an AI Ad Creative Platform
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Four non-negotiable criteria performance marketing teams should inspect before subscribing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              01
            </div>
            <div className="space-y-4 relative z-10 max-w-xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                <BarChart3 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Empirical Conversion Intelligence</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Ensure the platform doesn&apos;t just spit out generic visual templates. The model must be grounded in actual ad conversion data, evaluating typography weight, headline length, visual hierarchy, and CTA placement to deliver measurable CTR improvements.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              02
            </div>
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                <Palette className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Brand Kit Strictness</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Look for strict compliance controls that enforce exact corporate hex codes, custom web fonts, and logo safe-zones without accidental hallucinations or brand drift.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              03
            </div>
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                <LayoutGrid className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Multi-Format Transmutation</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The generator should automatically reposition text safe zones, badges, and focal elements when generating 1:1 feeds, 9:16 stories, and 1.91:1 horizontal display units in parallel.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-4 bottom-2 text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
              04
            </div>
            <div className="space-y-4 relative z-10 max-w-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                <Target className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl font-bold">Direct Ad Network Integration</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Top solutions offer native API connectors to Meta Ads Manager, Google Ads, TikTok Business Center, and Pinterest. This allows you to push winners directly into live campaigns without manually downloading zip files or retyping copy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            Execution Blueprint
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            4 Steps to Implement AI Creative Automation
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h4 className="text-base font-bold text-white">Upload Brand Assets</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Upload transparent PNG logos, primary/secondary hex color codes, approved font weights, and target audience personas into your brand hub.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h4 className="text-base font-bold text-white">Define Core Offer & Hooks</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Input product features, promotional discount codes, social proof statistics, and primary value proposition hooks for the AI copy engine.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h4 className="text-base font-bold text-white">Generate & Predict Scores</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Generate 40+ variations across feeds and reels. Review the predictive performance scores and filter out low-probability visual layouts.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-sm">
              4
            </div>
            <h4 className="text-base font-bold text-white">Deploy & Multivariate Test</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Push the top 5 scored creatives into dynamic creative ad sets on Meta or Google. Rotate in fresh batches every 10-14 days to beat fatigue.
            </p>
          </div>
        </div>
      </section>

      {/* 8. WHO BENEFITS MOST? (INTERACTIVE TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from AI Ad Creative Generators?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            See how specific marketing teams leverage automated creative engines to drive record performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            {useCases.map((uc, index) => (
              <button
                key={index}
                onClick={() => setActiveUseCase(index)}
                className={`w-full text-left p-4 rounded-xl border text-sm font-bold transition-all flex items-center justify-between ${
                  activeUseCase === index
                    ? "bg-indigo-500 text-white border-indigo-600 shadow-md translate-x-2"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
              >
                <span>{uc.title}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeUseCase === index ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                }`}>
                  {uc.badge}
                </span>
              </button>
            ))}
          </div>

          <div className="md:col-span-2 rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">
                {useCases[activeUseCase].badge}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {useCases[activeUseCase].title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {useCases[activeUseCase].desc}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Technical Capabilities:
              </h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 text-xs sm:text-sm font-semibold text-indigo-900 dark:text-indigo-200">
              💡 {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 9. TECHNICAL GLOSSARY */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-indigo-500 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" /> Technical Foundation
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            AI Ad Generation Glossary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Essential concepts powering automated creative generation and ad optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {glossaryTerms.map((term, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                {term.term}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {term.definition}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Everything you need to know about AI ad creative generators, compliance, and ROI.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 dark:text-white"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition-transform ${
                      isOpen ? "rotate-180 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
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
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
