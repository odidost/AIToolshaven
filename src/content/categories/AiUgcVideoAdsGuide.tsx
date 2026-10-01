"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Sparkles, 
  ShoppingBag, 
  TrendingUp, 
  ShieldCheck, 
  Flame, 
  Award, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  Sliders, 
  CheckCircle2, 
  Video, 
  Play, 
  DollarSign, 
  Smartphone, 
  Store,
  Layers,
  Zap
} from "lucide-react";

// ---- DATA STRUCTURES ---- //

const useCases = [
  {
    id: "dtc-brands",
    title: "DTC Brands & E-Commerce Merchants",
    icon: <ShoppingBag className="w-5 h-5 text-amber-500" />,
    content: "Shopify and Amazon brands combating severe ad fatigue must test 20 to 50 fresh video ad variations weekly. By pasting a single product URL, AI UGC generators extract product benefits, photos, and customer reviews, instantly producing energetic TikTok-style unboxing and testimonial videos that lower customer acquisition costs (CAC) by 40%."
  },
  {
    id: "performance-agencies",
    title: "Performance Marketing Agencies",
    icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
    content: "Growth agencies managing multi-client ad budgets eliminate the weeks-long delays of mailing physical inventory to fickle TikTok creators. Media buyers generate dozens of multivariate hook tests—swapping opening 3-second statements, background music, and call-to-actions in minutes to find breakout winners on Meta and TikTok."
  },
  {
    id: "tiktok-shop",
    title: "TikTok Shop & Social Commerce Sellers",
    icon: <Flame className="w-5 h-5 text-red-500" />,
    content: "Social commerce merchants capitalize on fleeting viral trends before competitors can react. AI UGC tools generate relatable, casual selfie videos featuring diverse micro-influencer personas speaking directly to the camera with native TikTok font overlays and conversion-focused urgency stickers."
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps & SaaS User Acquisition",
    icon: <Smartphone className="w-5 h-5 text-yellow-500" />,
    content: "Mobile game and consumer app developers produce authentic 'Look what app I just found!' screen reaction ads. Synthetic actors display genuine excitement while interacting with the app interface on a mock smartphone screen, maximizing click-to-install conversion rates."
  }
];

const glossaryTerms = [
  {
    term: "Dynamic Creative Optimization (DCO)",
    def: "Algorithmic ad assembly where distinct hooks, visual demonstrations, voiceovers, and call-to-actions are mixed and matched programmatically to identify highest-converting ad combinations."
  },
  {
    term: "3-Second Hook Retention Rate",
    def: "The primary TikTok and Meta performance metric measuring the percentage of viewers who watch past the first 3 seconds of a sponsored video before swiping."
  },
  {
    term: "Synthetic Micro-Influencer Persona",
    def: "A photorealistic AI actor rendered in casual real-world settings (kitchen, car, bedroom) designed to resemble organic user-generated content rather than polished corporate commercials."
  },
  {
    term: "URL-to-Video Scraping Engine",
    def: "An automated crawler that extracts product imagery, key benefit bullets, pricing, customer review ratings, and brand hex codes directly from any product PDP link."
  },
  {
    term: "Ad Fatigue Creative Velocity",
    def: "The required output rate of new creative assets needed to prevent ad performance decay as target social media audiences tire of seeing identical video ads."
  },
  {
    term: "Native TikTok/Reels Font Emulation",
    def: "The dynamic rendering of native social UI typography, sticker badges, and high-contrast caption backgrounds that make sponsored ads blend seamlessly into the user feed."
  }
];

const faqData = [
  {
    question: "What is the best AI UGC video ad generator in 2026?",
    answer: "Creatify AI and Arcads AI dominate the performance marketing space. Creatify AI is the gold standard for rapid URL-to-video ad creation, automatically pulling product data from Shopify and Amazon links. Arcads AI leads for hyper-realistic AI UGC actors who look and speak exactly like real micro-influencers filmed on iPhone cameras."
  },
  {
    question: "Do AI UGC video ads perform as well as real human creators on TikTok and Meta?",
    answer: "In rigorous A/B tests across millions of dollars in ad spend, top-tier AI UGC ads match or exceed human creator ROAS (Return on Ad Spend). Because AI tools allow you to test 30 different hooks for the cost of a single human creator, you find winning, high-converting hooks significantly faster."
  },
  {
    question: "How long does it take to create a video ad from a product link?",
    answer: "Under two minutes. You paste your product URL, and the AI scrapes the product images, extracts top selling points, writes 5 high-converting ad scripts, pairs a synthetic UGC actor, and renders 10 formatted 9:16 vertical video variations in 60 to 90 seconds."
  },
  {
    question: "Can I customize the actors, scripts, and call-to-actions?",
    answer: "Yes, completely. You can choose from hundreds of diverse AI actors spanning different ages, ethnicities, and environments (car, kitchen, office, living room). You can edit any line in the script, upload your own video clips, change background music, and customize CTA buttons."
  },
  {
    question: "Are the background music tracks and sound effects commercially licensed for ads?",
    answer: "Yes. Premier tools provide built-in libraries of royalty-free, commercially cleared background audio, sound effects, and voiceover licenses, ensuring your ad accounts won't get flagged for copyright infringement on Meta, TikTok, or YouTube."
  },
  {
    question: "How much does AI UGC software cost compared to hiring real influencers?",
    answer: "A single UGC video from a freelance creator on platforms like Billo or Fiverr typically costs between $100 and $250 plus the cost of shipping products. An AI UGC subscription costs $39 to $99 per month and delivers 50 to 100 complete video ad variations with zero shipping overhead."
  }
];

const alternatives = [
  { 
    name: "Creatify AI", 
    slug: "creatify-ai",
    score: "9.9", 
    price: "Freemium ($39/mo)", 
    bestFor: "Best Overall for Instant Product URL-to-Video Ads", 
    highlight: "Drop any Amazon or Shopify link and generate 10+ high-converting TikTok & Meta video ads with AI actors and dynamic copywriting." 
  },
  { 
    name: "Arcads AI", 
    slug: "arcads-ai",
    score: "9.8", 
    price: "From $100/mo", 
    bestFor: "Hyper-Realistic Smartphone UGC Actors & Native Feeds", 
    highlight: "World-class synthetic micro-influencers filmed in realistic bedroom, car, and mirror environments designed to pass as organic user content." 
  },
  { 
    name: "Foreplay AI", 
    slug: "foreplay-ai",
    score: "9.7", 
    price: "From $49/mo", 
    bestFor: "Competitor Ad Research & Creative Strategy Workflow", 
    highlight: "Saves high-performing TikTok & Facebook ads into swipe files, analyzes hook strategies, and streamlines agency creative briefs." 
  },
  { 
    name: "Billo AI", 
    slug: "billo-ai",
    score: "9.6", 
    price: "From $59/mo", 
    bestFor: "Hybrid Real Creator & AI-Assisted Performance Ads", 
    highlight: "Combines a massive network of verified human creators with AI scriptwriting, automated video resizing, and performance analytics." 
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

export default function AiUgcVideoAdsGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-amber-500/20 shadow-xl shadow-amber-500/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-600/20 via-slate-900/60 to-slate-950/90 pointer-events-none" />
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs md:text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-md">
            <ShoppingBag className="w-4 h-4" />
            2026 E-Commerce & Performance Creative Benchmark
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Next-Gen AI Video Ad & <br className="hidden md:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-300 to-red-400">
              UGC Generators
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-8">
            The technical deep dive into autonomous URL-to-video ad creation, viral TikTok UGC actors, dynamic creative testing, and high-ROAS marketing workflows.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl pt-6 border-t border-slate-800">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-white">50+</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Weekly Ad Iterations</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-amber-400">3.2x</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Higher Click-Through Rate</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-orange-400">&lt; 60 Sec</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">URL-to-Ad Render</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-red-400">85%</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Lower Cost-Per-Acquisition</span>
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
          <h2 className="text-sm font-extrabold text-amber-500 uppercase tracking-[0.25em] mb-3">Definitive Overview</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">The Death of Creator Shipping Delays & Creative Fatigue</h3>
        </div>

        <div className="space-y-10 md:space-y-12">
          {/* Bento Card 1 */}
          <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/30 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Store className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-on-surface tracking-tight">Autonomous URL-to-Video Ad Creation</h4>
              <p className={figtreeBodyClass}>
                Performance marketers spend weeks coordinating with creators: mailing product samples, writing briefs, negotiating licensing fees, and waiting for revisions—only to find the ad fatigues within four days on Meta.
              </p>
              <p className={figtreeDarkBodyClass}>
                <strong>Next-gen AI UGC generators (like Creatify AI) solve this in 60 seconds.</strong> You paste your Shopify, Amazon, or TikTok Shop listing URL. The crawler extracts high-res photos, 5-star customer reviews, and pricing discounts, instantly generating 10 conversion-engineered video scripts voiced by natural AI actors.
              </p>
            </div>
            <div className="md:w-1/2 w-full bg-slate-950 p-6 rounded-2xl border border-slate-800 text-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span>Autonomous URL Scraping Pipeline</span>
                <span className="text-amber-400">Creatify Engine</span>
              </div>
              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Target Product URL</span>
                  <span className="text-white font-bold">shopify.com/products/lumiskin</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Pain Point & Hook Extracted</span>
                  <span className="text-amber-400 font-bold">"Say Goodbye to Dry Skin"</span>
                </div>
                <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 flex justify-between items-center">
                  <span className="text-slate-300">Generated Ad Variations</span>
                  <span className="text-white font-bold">12 Formatted 9:16 Ads</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-amber-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Ready for direct TikTok & Meta Ads Manager upload</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2 */}
          <div className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-outline-variant/30 flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-on-surface tracking-tight">Synthetic Micro-Influencers in Real-World Environments</h4>
              <p className={figtreeBodyClass}>
                Slick studio commercials fail on TikTok and Instagram Reels because users immediately recognize them as sponsored ads and swipe away. Consumers trust organic, low-fi selfie videos shot in bedrooms, cars, and home kitchens.
              </p>
              <p className={figtreeDarkBodyClass}>
                2026 AI UGC suites (like Arcads AI) provide hundreds of synthetic micro-influencers filmed with realistic iPhone camera grain, authentic background noise, and natural hand gestures, seamlessly blending into the social feed for maximum watch time.
              </p>
            </div>
            <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">Traditional Influencer Agency</span>
                <span className="text-2xl font-extrabold text-red-300">$200 / Video</span>
                <p className="text-xs text-slate-400 mt-2">Mailing inventory, 3-week delays, creator ghosting, and expensive single-hook bets.</p>
              </div>
              <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/20 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">2026 AI UGC Engine</span>
                <span className="text-2xl font-extrabold text-amber-300">$0.80 / Video</span>
                <p className="text-xs text-slate-400 mt-2">Instant generation, dozens of demographic actors, and 50 multivariate hook tests in minutes.</p>
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
          <h2 className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-2">Performance Marketing Economics</h2>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight">Freelance UGC Agency vs. AI Ad Creative Engine</h3>
          <p className="text-slate-400 mt-3 text-sm md:text-base">
            Analyze the cost and testing velocity of generating 40 video ads every month for TikTok and Meta ad accounts.
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
              UGC Creator Agency ($150/video)
            </button>
            <button
              onClick={() => setRoiMode("ai")}
              className={`px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
                roiMode === "ai" 
                  ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 font-black" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              2026 AI UGC Engine ($39/mo)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Monthly Creative Budget (40 Ads)</span>
              <div className="text-3xl md:text-4xl font-black text-white mt-2">
                {roiMode === "traditional" ? "$6,000" : "$39"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "40 creator videos billed at $150 each plus sample shipping and usage rights fees."
                : "A single monthly creator subscription providing unlimited URL scraping and 50+ video renders."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Testing Turnaround</span>
              <div className="text-3xl md:text-4xl font-black text-amber-400 mt-2">
                {roiMode === "traditional" ? "24 Days" : "15 Minutes"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "Mailing packages across the country, reviewing footage, and negotiating revision requests."
                : "Paste your product link, select 5 actor personas, and download all 40 ad variations today."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Multivariate Hook Testing</span>
              <div className="text-3xl md:text-4xl font-black text-orange-400 mt-2">
                {roiMode === "traditional" ? "Cost-Prohibitive" : "Automated"}
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {roiMode === "traditional" 
                ? "Asking human creators for 10 distinct opening hook variations doubles their fee."
                : "Generate 20 opening 3-second hook variations for a single script with a single click."}
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
          <h2 className="text-sm font-extrabold text-amber-500 uppercase tracking-[0.25em] mb-3">Industry Solutions</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">High-Converting Ads for Every Niche</h3>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {useCases.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20"
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
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
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
          <h2 className="text-sm font-extrabold text-amber-500 uppercase tracking-[0.25em] mb-3">Architectural Comparison</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">AI Video Ad Generator Capabilities Matrix</h3>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-outline-variant/30 bg-surface-container-low">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-container border-b border-outline-variant/40 text-on-surface text-xs uppercase tracking-wider font-extrabold">
              <tr>
                <th className="p-4 md:p-5">Platform</th>
                <th className="p-4 md:p-5">URL-to-Video Engine</th>
                <th className="p-4 md:p-5">AI Actor Authenticity</th>
                <th className="p-4 md:p-5">Multivariate Hook Testing</th>
                <th className="p-4 md:p-5">Primary Strength</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 text-on-surface-variant font-medium">
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  Creatify AI
                </td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">1-Click Full Scraper</td>
                <td className="p-4 md:p-5">High-Fidelity Casual</td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Batch Generation</td>
                <td className="p-4 md:p-5">Fastest Amazon & Shopify URL-to-video ad pipeline</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                  Arcads AI
                </td>
                <td className="p-4 md:p-5">Script Guided</td>
                <td className="p-4 md:p-5 text-amber-500 font-bold">Unmatched iPhone Realism</td>
                <td className="p-4 md:p-5">Manual / Batch</td>
                <td className="p-4 md:p-5">Most authentic organic-looking TikTok selfie actors</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  Foreplay AI
                </td>
                <td className="p-4 md:p-5">Competitor Swipe File</td>
                <td className="p-4 md:p-5">Creative Briefs</td>
                <td className="p-4 md:p-5">Strategy Analytics</td>
                <td className="p-4 md:p-5">Competitor ad spying, hook analytics, and storyboards</td>
              </tr>
              <tr className="hover:bg-surface-container/40 transition-colors">
                <td className="p-4 md:p-5 font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  Billo AI
                </td>
                <td className="p-4 md:p-5">Hybrid Marketplace</td>
                <td className="p-4 md:p-5">100% Real Human Creators</td>
                <td className="p-4 md:p-5">Creator Network</td>
                <td className="p-4 md:p-5">Real human unboxing videos paired with AI video editing</td>
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
          <h2 className="text-sm font-extrabold text-amber-500 uppercase tracking-[0.25em] mb-3">Buyer's Checklist</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">4 Must-Haves in an AI Video Ad Platform</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">1</div>
            <h4 className="text-xl font-bold text-on-surface">Realistic Low-Fi iPhone Aesthetic</h4>
            <p className={figtreeBodyClass}>
              Avoid tools that produce sterile green-screen actors with flat corporate lighting. Look for authentic casual lighting, realistic background clutter (kitchen counter, car steering wheel), and subtle camera shake that mimics real organic TikToks.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold">2</div>
            <h4 className="text-xl font-bold text-on-surface">Automated Product URL Ingestion</h4>
            <p className={figtreeBodyClass}>
              Manually typing script lines and downloading product images for 20 SKUs wastes hours. Quality ad generators scrape your product link, extract high-res media, and format USP bullet points automatically.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center font-bold">3</div>
            <h4 className="text-xl font-bold text-on-surface">Multivariate Hook & CTA Slicing</h4>
            <p className={figtreeBodyClass}>
              The first 3 seconds dictate 80% of ad ROAS. Ensure the software can generate 10 distinct psychological hooks (e.g., curiosity, negative constraint, social proof) for a single core product video.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold">4</div>
            <h4 className="text-xl font-bold text-on-surface">Commercially Cleared Soundtrack Library</h4>
            <p className={figtreeBodyClass}>
              TikTok and Meta aggressively mute video ads featuring unlicensed popular music. Ensure your tool includes a pre-cleared, high-converting commercial audio catalog with rhythmic trending beats.
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
          <h2 className="text-sm font-extrabold text-amber-500 uppercase tracking-[0.25em] mb-3">Top Directory Picks</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">The Gold Standard AI UGC Ad Engines</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alternatives.map((tool) => (
            <div 
              key={tool.slug}
              className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h4 className="text-2xl font-black text-on-surface">{tool.name}</h4>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 font-extrabold text-sm">
                    ★ {tool.score}
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-400 mb-2">{tool.price}</div>
                <div className="text-xs font-semibold text-amber-500 mb-4">{tool.bestFor}</div>
                <p className={figtreeBodyClass}>
                  {tool.highlight}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between">
                <Link 
                  href={`/tool/${tool.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-500 hover:text-amber-400 transition-colors"
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
          <h2 className="text-sm font-extrabold text-amber-500 uppercase tracking-[0.25em] mb-3">Technical Lexicon</h2>
          <h3 className="text-3xl md:text-4xl font-black text-on-surface tracking-tighter">UGC Video Advertising & Performance Terminology</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {glossaryTerms.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2"
            >
              <h4 className="text-base font-bold text-on-surface flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
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
          <h3 className="text-sm font-extrabold text-amber-500 uppercase tracking-[0.25em] mb-3">Frequently Asked Questions</h3>
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
                className="w-full text-left p-6 font-bold text-on-surface flex justify-between items-center gap-4 hover:text-amber-500 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-amber-500" : ""}`} />
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
