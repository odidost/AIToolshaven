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
  Radio, 
  Share2, 
  AlertTriangle, 
  Activity, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  Search,
  PieChart
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI social listening and analytics tool?",
    answer: "An AI social listening tool continuously monitors public web conversations across social networks (X, Reddit, TikTok, Instagram, YouTube, LinkedIn), podcasts, forums, and news blogs for mentions of your brand, competitors, or industry keywords. Powered by natural language processing (NLP), it analyzes sentiment (positive, neutral, negative), measures Share of Voice (SOV), flags emerging PR crises before they escalate, and uncovers high-intent buyer discussions in real time."
  },
  {
    question: "What are the best AI social listening and brand monitoring tools in 2026?",
    answer: "Brand24 and Keyhole lead the social listening and real-time intelligence sector. Brand24 is celebrated for its deep multi-channel coverage (spanning Reddit, TikTok, X, Twitch, podcasts, and news sites), proprietary AI Mentions Score, and automated PR crisis alerts. Keyhole specializes in real-time event tracking, campaign hashtag performance, and AI-driven influencer ROI auditing."
  },
  {
    question: "How does AI distinguish between genuine customer anger and sarcasm in sentiment analysis?",
    answer: "Traditional keyword tools falsely categorized sarcastic posts containing words like 'great' or 'love' (e.g., 'Another 3-hour flight delay, just great!') as positive sentiment. Modern transformer-based LLMs evaluate context, punctuation, emojis, and slang to decipher true semantic intent, providing 90%+ accurate sentiment classifications."
  },
  {
    question: "How does social listening generate direct sales pipeline?",
    answer: "By monitoring 'intent-to-buy' phrases (e.g. 'Can anyone recommend an alternative to X?' or 'Frustrated with Y, looking for a replacement'), AI listening tools alert your sales development reps the moment a prospective customer expresses dissatisfaction with a competitor, allowing proactive, contextual outreach."
  }
];

const useCases = [
  {
    title: "Brand Communications & PR Teams",
    badge: "Crisis Prevention & Sentiment",
    desc: "Detect negative mention spikes and customer grievances across Reddit and X before they spiral into widespread viral PR crises.",
    benefits: [
      "Instant Slack and SMS anomaly alerts when negative sentiment spikes by &gt;20%",
      "AI sentiment classification that weeds out false positives and spam bots",
      "Executive sentiment reporting showing net brand reputation month-over-month"
    ],
    highlight: "Prevented major brand damage by neutralizing a critical product bug discussion within 18 minutes"
  },
  {
    title: "Product Marketing & Competitive Intelligence",
    badge: "Share of Voice & Feature Gaps",
    desc: "Monitor customer complaints about competing software to uncover product roadmap opportunities and exploit competitor weaknesses.",
    benefits: [
      "Automated Share of Voice (SOV) tracking across all primary industry players",
      "Customer pain-point extraction identifying the most requested missing features",
      "Real-time benchmark alerts whenever competitors launch new marketing campaigns"
    ],
    highlight: "Repositioned core messaging to win 38% of customers churning from a legacy rival"
  },
  {
    title: "Social SDRs & Inbound Growth Teams",
    badge: "Social Selling & Buyer Intent",
    desc: "Identify and engage warm prospects actively searching for recommendations across Reddit threads, LinkedIn posts, and X conversations.",
    benefits: [
      "Boolean query alerts for phrases like 'recommend a tool for' and 'switching from'",
      "Automated lead scoring separating casual comments from verified decision-makers",
      "Direct integration into HubSpot and Salesforce CRM workflows"
    ],
    highlight: "Sourced $140,000 in qualified enterprise pipeline directly from Reddit and X conversations"
  }
];

const glossaryTerms = [
  {
    term: "Share of Voice (SOV)",
    definition: "The percentage of total public industry conversations, mentions, and media coverage earned by your brand compared to direct competitors."
  },
  {
    term: "Sentiment Polarity",
    definition: "An NLP metric evaluating whether user-generated mentions carry positive, neutral, or negative emotional resonance toward a brand."
  },
  {
    term: "Mention Volume Velocity",
    definition: "The rate of change in brand mentions over a specific hourly timeframe; sudden spikes typically indicate either a viral success or a looming PR crisis."
  },
  {
    term: "Boolean Query Monitoring",
    definition: "Advanced search syntax using AND, OR, NOT, and wildcard operators to isolate hyper-specific conversations while filtering out irrelevant brand name homonyms."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiSocialListeningAnalyticsGuide() {
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
            Brand Monitoring, Sentiment Analysis & Crisis Alerting 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Social Listening Tools: <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300 bg-clip-text text-transparent">Track Mentions, Sentiment & Competitor Share of Voice</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Customer conversations happen everywhere—not just on your company pages. Discover modern AI social listening suites that monitor millions of web sources, detect sentiment shifts, neutralize PR threats, and capture buyer intent before competitors do.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Brand Intelligence Evolution
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why manual Google Alerts and native notification tabs fail modern enterprise brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Blind Spot Vulnerability</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Relying on direct @mentions ignores 80% of brand chatter happening in untagged Reddit discussions, TikTok review comments, and tech forums.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Delayed Crisis Discovery</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Finding out about a major service outrage or viral backlash 24 hours late when the PR crisis has already reached tech media headlines.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Real-Time AI Radar</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Continuous multi-channel monitoring with sarcasm-aware sentiment detection, instant Slack crisis alerts, and competitor Share of Voice tracking.
            </p>
          </div>
        </div>
      </section>

      {/* 2.5 INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 md:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              <Calculator className="w-4 h-4" />
              Brand Protection & Intelligence Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Monitoring Effectiveness</h2>
          </div>
          
          {/* Toggle pill */}
          <div className="inline-flex p-1 bg-slate-200 dark:bg-slate-800 rounded-xl">
            <button 
              onClick={() => setCalculatorMode("traditional")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "traditional" 
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Manual Searches / Alerts
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Social Listening (Brand24/Keyhole)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Radio className="w-4 h-4 text-indigo-500" />
              Mention Detection Coverage
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "~18%" : "99.4%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Direct tagged notifications only; misses untagged forum and video mentions" 
                : "Scours Reddit, TikTok, X, podcasts, news, blogs, and review sites"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-emerald-500" />
              Mean Time to Crisis Detection
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "14.2 Hours" : "4.5 Minutes"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Discovered during routine morning manual social feed check" 
                : "Instant automated Slack/SMS alert triggered by negative velocity spike"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Target className="w-4 h-4 text-pink-500" />
              Competitor Switcher Leads / Month
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "0 Leads" : "45+ Warm Leads"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "No monitoring of competitor dissatisfaction conversations" 
                : "Automated intent alerts when users seek alternatives to rivals"}
            </p>
          </div>
        </div>
      </section>

      {/* 3.0 EDITOR'S CHOICE SPOTLIGHT */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 md:p-12 border border-indigo-500/30 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-400" />
              Editor's Choice 2026: Premier Social Listening Radar
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Brand24 — Comprehensive AI Brand & Competitor Radar
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Brand24 is trusted by over 4,000 businesses from high-growth startups to Fortune 500 enterprises. It tracks brand chatter across 25+ digital channels including Reddit, TikTok, X, YouTube, and podcasts, calculating live AI Sentiment, Influencer Authority Scores, and automated PR anomaly alerts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                Monitors Reddit, TikTok, X, YouTube, Podcasts & Web
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                Context-Aware AI Sentiment (Detects Sarcasm)
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                Automated PR Crisis Spike Alerts via Slack & SMS
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                Share of Voice & Competitor Intelligence Benchmarking
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-full lg:w-72 shrink-0 space-y-4 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400">Individual Tier</div>
            <div className="text-4xl font-black text-white">$99 <span className="text-sm font-normal text-slate-400">/mo</span></div>
            <div className="text-xs text-indigo-300">14-day free trial • No credit card required</div>
            <Link 
              href="/tools/brand24-ai"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors text-sm shadow-lg shadow-indigo-600/25"
            >
              Explore Brand24
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 TOP 3 ALTERNATIVES MATRIX & BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 Social Listening Platforms Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Evaluating top solutions by source breadth, sentiment accuracy, influencer metrics, and cost.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-4 sm:p-5">Platform</th>
                <th className="p-4 sm:p-5">Core Strength</th>
                <th className="p-4 sm:p-5">Channel Coverage</th>
                <th className="p-4 sm:p-5">Sentiment Engine</th>
                <th className="p-4 sm:p-5">Crisis Alerts</th>
                <th className="p-4 sm:p-5">Pricing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  Brand24
                </td>
                <td className="p-4 sm:p-5">Comprehensive Multichannel Intelligence</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">25+ (Reddit, TikTok, Podcasts, Web)</td>
                <td className="p-4 sm:p-5">Advanced NLP (Sarcasm-aware)</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Slack, Email, SMS</td>
                <td className="p-4 sm:p-5 font-medium">$99/mo</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  Keyhole
                </td>
                <td className="p-4 sm:p-5">Real-Time Event & Influencer Auditing</td>
                <td className="p-4 sm:p-5">X, Instagram, TikTok, YouTube</td>
                <td className="p-4 sm:p-5">Machine Learning Sentiment</td>
                <td className="p-4 sm:p-5">Email Digest</td>
                <td className="p-4 sm:p-5 font-medium">$89/mo</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  Agorapulse
                </td>
                <td className="p-4 sm:p-5">Social Inbox & Listening Hybrid</td>
                <td className="p-4 sm:p-5">Major Social Networks</td>
                <td className="p-4 sm:p-5">Rule-based categorization</td>
                <td className="p-4 sm:p-5">In-app notifications</td>
                <td className="p-4 sm:p-5 font-medium">$49/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-500" />
              Brand24 vs Keyhole: Web-Wide Radar vs Event Tracking
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Brand24</strong> is the superior choice for comprehensive brand reputation, monitoring untagged mentions across Reddit, blogs, and podcasts where candid discussions happen. <strong>Keyhole</strong> is best for marketing agencies running live hashtag campaigns, event tracking, and auditing influencer engagement authenticity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-500" />
              Agorapulse vs Brand24: Unified Inbox vs Pure Intelligence
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              If you want one tool to schedule posts and answer direct customer inquiries, <strong>Agorapulse</strong> combines social management with light listening. For dedicated PR risk management, deep competitor Share of Voice, and buyer intent alerts, <strong>Brand24</strong> provides unmatched depth.
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 BUYER'S GUIDE: ASYMMETRIC BENTO BLOCKS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Key Architecture Factors When Selecting a Social Listening Tool
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Essential criteria to look for before deploying listening across your brand keywords.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">01</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Reddit & Forum Crawling Capabilities</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Modern buyers share raw, unvarnished product reviews on Reddit, Quora, and niche community forums. If a listening tool only crawls Twitter and Instagram APIs, you miss the most commercially valuable buyer feedback on the internet.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">02</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contextual NLP Sentiment Precision</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Basic keyword matching classifies any sentence with words like "bad" or "problem" as negative, creating false alarms. Advanced AI understands idiomatic language, internet humor, and industry-specific context.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">03</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Real-Time Webhook & Slack Alerts</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When a negative story breaks, a 4-hour delay can turn an easily fixable complaint into a viral public relations crisis. Ensure the tool supports real-time Slack, Discord, and SMS webhooks for rapid escalation.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-indigo-500/30">04</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Boolean Query Filtering & Noise Reduction</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              If your brand name shares a common dictionary word (e.g. "Apple", "Notion", "Stripe"), you require advanced Boolean filters (NOT, AND, OR) to eliminate non-relevant mentions and maintain clean dataset analytics.
            </p>
          </div>
        </div>
      </section>

      {/* 4.5 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4-Step Blueprint to Social Listening Intelligence
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How to set up enterprise-grade brand monitoring and competitive intelligence in 30 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Configure Keyword Buckets</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Set up 3 distinct projects: Brand Mentions (brand name, executive names, product lines), Competitors (top 3 rivals), and Industry Problems (e.g., 'frustrated with [competitor]').
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Calibrate Sentiment & Filters</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Add negative keywords to filter out spam. Train the sentiment classifier on your first 100 mentions to ensure perfect alignment with your industry vernacular.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Route Real-Time Webhooks</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Connect high-priority alerts to your company's #customer-support and #pr-crisis Slack channels. Set threshold rules so teams only receive notifications for verified surges.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Automate Executive Reports</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Schedule monthly automated PDF reports detailing net sentiment shifts, Share of Voice trends, and top influencer advocates for presentation to executive leadership.
            </p>
          </div>
        </div>
      </section>

      {/* 5.0 WHO BENEFITS MOST (VERTICAL TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from AI Social Listening?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Select your organization focus to explore custom advantages and workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2">
            {useCases.map((uc, index) => (
              <button
                key={index}
                onClick={() => setActiveUseCase(index)}
                className={`text-left p-4 rounded-xl transition-all border ${
                  activeUseCase === index
                    ? "bg-white dark:bg-slate-800 border-indigo-500/50 shadow-md text-slate-900 dark:text-white font-semibold"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider mb-1">
                  {uc.badge}
                </div>
                <div className="text-sm sm:text-base">{uc.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {useCases[activeUseCase].badge}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {useCases[activeUseCase].title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {useCases[activeUseCase].desc}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Platform Capabilities:
              </h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200 font-medium">
              🛡️ <strong>Impact Metric:</strong> {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 TECHNICAL GLOSSARY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <BookOpen className="w-4 h-4" />
          Listening, Sentiment & Analytics Lexicon
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {glossaryTerms.map((term, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white text-sm">{term.term}</div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{term.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6.0 SEO FAQ ACCORDION */}
      <section className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Common questions regarding brand sentiment tracking, Reddit monitoring, and social intelligence.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index} 
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
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
