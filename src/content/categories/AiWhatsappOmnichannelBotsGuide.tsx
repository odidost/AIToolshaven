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
  Smartphone, 
  Share2, 
  MessageCircle, 
  Layers, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  Send,
  Workflow
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI WhatsApp & omnichannel bot and how does it drive sales?",
    answer: "An AI WhatsApp and omnichannel bot connects official messaging APIs (WhatsApp Cloud API, Instagram DM, Facebook Messenger, Telegram, and website chat) into a single intelligent conversation engine. Unlike rigid static menus, modern AI bots understand freeform customer language, answer product questions, send dynamic image carousels, verify user details, and process automated checkout links or calendar appointments directly within the chat window."
  },
  {
    question: "What are the best AI tools for WhatsApp and omnichannel chat in 2026?",
    answer: "ManyChat and Botpress dominate the omnichannel automation landscape. ManyChat is the undisputed champion for e-commerce and creator marketing, offering native WhatsApp and Instagram DM automation with proven lead-generation funnels and Meta compliance. Botpress and Voiceflow provide unmatched visual drag-and-drop power for developers building complex logic, custom webhooks, and enterprise CRM integrations."
  },
  {
    question: "What is the Meta 24-hour customer service window on WhatsApp?",
    answer: "Meta enforces a 24-hour service window: when a customer messages your business on WhatsApp, you have 24 hours to respond freely with freeform messages. Once that 24-hour window expires, businesses can only initiate contact using pre-approved paid Template Messages (utility, marketing, or authentication). AI bots solve this by replying within seconds, keeping the 24-hour active session perpetually refreshed during conversations."
  },
  {
    question: "Can an AI bot collect payments and book calendar appointments inside WhatsApp?",
    answer: "Yes. Leading platforms integrate with Stripe, Razorpay, Calendly, and custom Shopify checkouts. The AI bot collects user details, confirms availability, and sends native WhatsApp payment links or interactive appointment confirmation buttons without forcing the customer to leave their messaging app."
  }
];

const useCases = [
  {
    title: "Global DTC & Retail Brands",
    badge: "Conversational Commerce",
    desc: "Drive direct sales via WhatsApp and Instagram DMs by recommending personalized products, offering instant discount codes, and recovering abandoned checkouts.",
    benefits: [
      "Automated Instagram Story reply-to-DM triggers capturing warm leads",
      "Interactive WhatsApp product catalogs with 1-click cart generation",
      "Automated order confirmation and live shipping updates via WhatsApp templates"
    ],
    highlight: "Achieved 92% open rates and 38% conversion on WhatsApp flash sale campaigns"
  },
  {
    title: "Real Estate & High-Ticket Services",
    badge: "Speed-to-Lead Qualification",
    desc: "Engage prospective property buyers within 5 seconds of an ad click, pre-qualifying budget and location before booking agent consultations.",
    benefits: [
      "Click-to-WhatsApp Meta Ads routing directly into automated AI intake flows",
      "Instant calendar scheduling syncing directly to agent Google/Outlook calendars",
      "Automated document collection and PDF property brochure delivery"
    ],
    highlight: "Lifted lead-to-showing conversion rate by 3.4x by slashing speed-to-lead under 10 seconds"
  },
  {
    title: "Healthcare & Appointment Clinics",
    badge: "Patient Self-Service Scheduling",
    desc: "Allow patients to book, reschedule, and receive automated appointment reminders on WhatsApp, reducing no-show rates without front-desk telephone bottlenecks.",
    benefits: [
      "Interactive date/time picker buttons natively inside WhatsApp chat",
      "Automated SMS/WhatsApp reminder sequences 24 hours before appointments",
      "Secure intake questionnaires triaging symptoms before consultations"
    ],
    highlight: "Decreased clinic appointment no-shows from 24% down to 4.8%"
  }
];

const glossaryTerms = [
  {
    term: "Click-to-WhatsApp (CTWA) Ads",
    definition: "Meta ad units on Facebook and Instagram that open a pre-filled direct WhatsApp chat conversation when clicked, converting ad traffic into verified phone leads."
  },
  {
    term: "24-Hour Customer Service Window",
    definition: "The rolling 24-hour timeframe established by Meta where businesses can exchange unlimited freeform messages with a customer following an inbound inquiry."
  },
  {
    term: "WhatsApp Business Solution Provider (BSP)",
    definition: "An officially accredited Meta technology partner authorized to provision Cloud API phone numbers and process WhatsApp business messaging traffic."
  },
  {
    term: "Interactive Action Buttons",
    definition: "Tappable quick-reply buttons and list menus embedded directly inside WhatsApp messages that simplify mobile user decision-making."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiWhatsappOmnichannelBotsGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-emerald-950 text-white p-8 md:p-14 border border-emerald-500/20 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            WhatsApp Cloud API, Instagram DM & Omnichannel Funnels 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI WhatsApp & Omnichannel Bots: <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">Instant Speed-to-Lead with 90%+ Open Rates</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Email open rates hover below 20%, but WhatsApp and Instagram DMs command over 90% engagement. Explore elite AI omnichannel bots that qualify leads, answer product questions, and close transactions 24/7 across every messaging app.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Conversational Sales Revolution
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why traditional web forms and delayed email sequences are losing to real-time messaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Static Web Forms</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Forcing mobile ad clicks onto clunky 7-field forms where 80% bounce, followed by an email reply hours later that lands in the customer's spam folder.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Human WhatsApp Bottlenecks</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Sales reps manually typing on WhatsApp Web, missing night-time inquiries, losing track of conversations, and violating Meta's 24-hour service policies.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">AI Omnichannel Automation</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Instant sub-second replies across WhatsApp, Instagram, and web chat. AI qualifies buyers, sends product carousels, and books consultations autonomously.
            </p>
          </div>
        </div>
      </section>

      {/* 2.5 INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 md:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Calculator className="w-4 h-4" />
              Speed-to-Lead & Conversion Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Inbound Lead Conversion (1,000 Ad Clicks)</h2>
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
              Web Form & Email Follow-up
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-emerald-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Click-to-WhatsApp AI Bot (ManyChat)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-emerald-500" />
              Median Speed-to-Lead Response
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "3.5 Hours" : "2.4 Seconds"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Leads go cold before a sales rep manually reaches out" 
                : "Instant conversation opens while buyer interest is at its absolute peak"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-blue-500" />
              Message Open / Engagement Rate
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "18.2%" : "91.8%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Low email open rates and spam filter attrition" 
                : "Direct phone push notifications with near-instant read rates"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-teal-500" />
              Qualified Booked Deals
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "14 Deals" : "68 Deals"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Friction in form fills and back-and-forth scheduling emails" 
                : "Automated qualification and direct in-chat appointment booking"}
            </p>
          </div>
        </div>
      </section>

      {/* 3.0 EDITOR'S CHOICE SPOTLIGHT */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-8 md:p-12 border border-emerald-500/30 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-400" />
              Editor's Choice 2026: Benchmark Omnichannel Marketing Suite
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              ManyChat AI — The Conversion Machine for WhatsApp & Instagram
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              ManyChat powers conversational growth for over 1 million brands worldwide. As an official Meta Business Partner, ManyChat provides seamless Click-to-WhatsApp and Instagram Story automation, paired with an AI Step builder that understands freeform inquiries and guides prospects to checkout effortlessly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Official Meta Partner (WhatsApp, Instagram, Messenger)
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                AI Step Engine Handling Freeform Product Questions
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Automated Story Mention & Comment-to-DM Triggers
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Stripe & Shopify Dynamic Checkout Link Generation
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-full lg:w-72 shrink-0 space-y-4 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400">Pro Tier Starting</div>
            <div className="text-4xl font-black text-white">$15 <span className="text-sm font-normal text-slate-400">/mo</span></div>
            <div className="text-xs text-emerald-300">Free tier up to 1,000 contacts • Meta compliant</div>
            <Link 
              href="/tools/manychat-ai"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors text-sm shadow-lg shadow-emerald-600/25"
            >
              Explore ManyChat AI
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 TOP 3 ALTERNATIVES MATRIX & BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 WhatsApp & Omnichannel Platforms Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Evaluating leading platforms by supported channels, visual flow capabilities, API depth, and price.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-4 sm:p-5">Platform</th>
                <th className="p-4 sm:p-5">Core Strength</th>
                <th className="p-4 sm:p-5">Omnichannel Breadth</th>
                <th className="p-4 sm:p-5">Custom Code & APIs</th>
                <th className="p-4 sm:p-5">Meta Official Partner</th>
                <th className="p-4 sm:p-5">Pricing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  ManyChat
                </td>
                <td className="p-4 sm:p-5">E-Commerce & Social Media Funnels</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">WhatsApp, IG, FB, SMS, Telegram</td>
                <td className="p-4 sm:p-5">Webhooks & Zapier/Make</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Premier Partner</td>
                <td className="p-4 sm:p-5 font-medium">$15/mo</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Botpress
                </td>
                <td className="p-4 sm:p-5">Developer-First Logic & Autonomous Agents</td>
                <td className="p-4 sm:p-5">WhatsApp, Web, Slack, Teams, Discord</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Full JavaScript / API execution</td>
                <td className="p-4 sm:p-5">Via Twilio / Cloud API</td>
                <td className="p-4 sm:p-5 font-medium">Free tier + pay-as-you-go</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  Landbot
                </td>
                <td className="p-4 sm:p-5">No-Code Conversational Forms & Web UI</td>
                <td className="p-4 sm:p-5">WhatsApp & Web Chat widgets</td>
                <td className="p-4 sm:p-5">Light webhooks & native CRM</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Official BSP</td>
                <td className="p-4 sm:p-5 font-medium">$40/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-500" />
              ManyChat vs Botpress: Marketing Funnels vs Custom Engineering
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>ManyChat</strong> is purpose-built for marketers, creators, and online retailers who want quick Instagram comment-to-DM triggers and Click-to-WhatsApp ad conversions without writing code. <strong>Botpress</strong> is designed for engineers needing complex multi-step state machines and deep database integrations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-500" />
              Landbot vs ManyChat: Visual Web Chat vs Omnichannel Reach
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Landbot</strong> excels at converting website traffic through full-page conversational landing pages that feel like interactive mobile chats. However, for true omnichannel social automation across Instagram DMs and WhatsApp campaigns, <strong>ManyChat</strong> provides vastly superior distribution capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 BUYER'S GUIDE: ASYMMETRIC BENTO BLOCKS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Key Architecture Factors for WhatsApp & Omnichannel Bots
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            What to evaluate before connecting your brand's official phone numbers and social handles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-emerald-500/30">01</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Official Meta Cloud API Authorization</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Never use unofficial browser scraping tools or non-compliant QR code scanners for WhatsApp marketing. These tools will get your business phone number permanently banned within days. Always verify official Meta Business Solution Provider status.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-emerald-500/30">02</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Hybrid LLM + Deterministic Flow Controls</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Pure AI bots can sometimes wander off script, while pure button menus feel rigid. The ideal platform offers a hybrid model: deterministic quick-reply buttons for compliance and pricing, combined with an LLM fallback for handling conversational nuances.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-emerald-500/30">03</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">24-Hour Window Automation & Template Messaging</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Your platform must track customer session countdowns in real time. It should alert human reps before a 24-hour service window expires and allow seamless scheduling of approved Meta Utility Templates to re-open inactive customer conversations.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-emerald-500/30">04</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Native In-Chat Payments & Catalog Sync</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The highest conversion rates occur when users complete purchases without leaving WhatsApp. Ensure the tool syncs with Facebook Commerce Manager catalogs and supports integrated payment links via Stripe or regional gateways.
            </p>
          </div>
        </div>
      </section>

      {/* 4.5 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4-Step Blueprint to Omnichannel WhatsApp Automation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How to launch an automated WhatsApp and Instagram sales engine in under an hour.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Register Meta Cloud API</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Provision a clean business phone number through Meta Business Manager and complete official WhatsApp verification to unlock high-volume messaging limits.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Design Inbound Funnel</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Build a qualification flow: welcome greeting, 2 qualifying choice buttons, and an AI step to resolve specific product inquiries with catalog images.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Launch Click-to-WhatsApp Ads</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Set up Meta ad campaigns with the 'Send WhatsApp Message' CTA. Route ad clicks directly into your pre-programmed AI qualification sequence.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Automate CRM Sync & Handoff</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Sync qualified contact info to HubSpot or Shopify. Configure live chat notifications so human sales reps can jump into conversations when buyers request a closing call.
            </p>
          </div>
        </div>
      </section>

      {/* 5.0 WHO BENEFITS MOST (VERTICAL TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from WhatsApp & Omnichannel Bots?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Select your industry sector to see specialized conversational funnels.
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
                    ? "bg-white dark:bg-slate-800 border-emerald-500/50 shadow-md text-slate-900 dark:text-white font-semibold"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider mb-1">
                  {uc.badge}
                </div>
                <div className="text-sm sm:text-base">{uc.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
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
                Core Advantages:
              </h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 font-medium">
              📱 <strong>Performance Metric:</strong> {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 TECHNICAL GLOSSARY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <BookOpen className="w-4 h-4" />
          WhatsApp & Omnichannel Messaging Lexicon
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
            Answers to common questions regarding WhatsApp Business API, Instagram DM automation, and compliance.
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
