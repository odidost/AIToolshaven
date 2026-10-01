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
  PhoneCall, 
  PhoneForwarded, 
  Mic, 
  Headphones, 
  Target, 
  TrendingUp, 
  Sparkle,
  ShieldCheck,
  Building,
  Volume2
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI voice receptionist and how does it handle live telephone calls?",
    answer: "An AI voice receptionist is an autonomous conversational telephony agent capable of conducting real-time phone calls with human-like speed and natural inflection. Combining low-latency speech-to-text (STT), fine-tuned conversational LLMs, and neural voice synthesis (TTS) over standard SIP and Twilio phone trunks, it answers inbound customer calls in under 800 milliseconds, triages inquiries, schedules appointments, and transfers complex calls to human staff."
  },
  {
    question: "What are the best AI voice receptionist platforms in 2026?",
    answer: "Bland AI and Retell AI lead the conversational telephony industry. Bland AI is the enterprise powerhouse capable of scaling to millions of concurrent calls, executing complex API webhooks mid-call, and automating outbound dispatch. Retell AI and Vapi provide developers and SMBs with sub-600ms latency, deep Twilio/SIP trunk compatibility, and seamless appointment booking integrations."
  },
  {
    question: "How do AI voice agents achieve natural, low-latency conversations without awkward pauses?",
    answer: "Legacy voice bots suffered from 2–3 second latency delays that felt robotic. Modern platforms achieve sub-800ms full-duplex conversational latency by streaming audio packets continuously, using custom speculative speech models, and implementing intelligent interruption detection (turn-taking) so callers can speak naturally without waiting for the bot to finish every sentence."
  },
  {
    question: "Can an AI phone agent transfer callers to a real person during a live call?",
    answer: "Yes. Using SIP REFER and Webhook Call Transfer protocols, the AI detects caller frustration or specific escalation triggers (e.g. 'I need to speak to an attorney immediately') and instantly bridges the call to a live human operator or emergency on-call team without disconnecting the line."
  }
];

const useCases = [
  {
    title: "Medical & Dental Practices",
    badge: "Patient Intake & Scheduling",
    desc: "Answer 100% of inbound patient phone calls 24/7, booking routine checkups, verifying insurance details, and routing emergencies without front-desk hold music.",
    benefits: [
      "HIPAA-compliant telephony infrastructure with encrypted patient audio streams",
      "Direct electronic health records (EHR) calendar synchronization for appointments",
      "Instant triage for after-hours prescription refills and urgent clinical routing"
    ],
    highlight: "Eliminated missed patient calls completely and captured 48 new patient bookings every month"
  },
  {
    title: "Home Services & Local Trades (HVAC, Plumbing, Roofing)",
    badge: "24/7 Emergency Dispatch",
    desc: "Capture high-value emergency job inquiries even during nights and weekends when prospective clients call competitors if no one answers.",
    benefits: [
      "Zero missed calls during peak emergency weather events and freeze warnings",
      "Immediate qualification of job scope, zip code, and dispatch urgency",
      "Instant SMS and push notification dispatch to on-call field technicians"
    ],
    highlight: "Generated $84,000 in additional emergency HVAC repair revenue in the first 90 days"
  },
  {
    title: "Law Firms & Financial Advisory",
    badge: "Confidential Client Screening",
    desc: "Screen inbound prospective clients, qualify case parameters against firm criteria, and schedule preliminary consultations with partners.",
    benefits: [
      "Consistent, professional greeting adhering strictly to legal intake scripts",
      "Structured data extraction delivering parsed case briefs directly into Clio / Salesforce",
      "Live cold/warm call transfer when high-value enterprise cases are identified"
    ],
    highlight: "Reduced intake screening labor by 70% while improving speed-to-consultation from 2 days to 15 minutes"
  }
];

const glossaryTerms = [
  {
    term: "Full-Duplex Conversational Latency",
    definition: "The end-to-end roundtrip duration (sub-800ms) from when a caller finishes speaking to when the AI audio stream begins playing, enabling natural conversation."
  },
  {
    term: "Interruption Handling (Turn-Taking)",
    definition: "The ability of an AI phone agent to immediately halt speech the microsecond a human caller speaks, mimicking real human telephone conversational etiquette."
  },
  {
    term: "SIP Trunking Integration",
    definition: "The telecommunications protocol connecting AI voice software to existing corporate phone lines, PBX systems, and carrier networks like Twilio or Vonage."
  },
  {
    term: "Warm Transfer with Context Brief",
    definition: "Transferring a live phone call to a human agent while whispering a synthesized summary of the caller's issue to the agent before bridging the audio."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiVoiceReceptionistsGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [calculatorMode, setCalculatorMode] = useState<"traditional" | "ai">("ai");

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24 text-slate-800 dark:text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white p-8 md:p-14 border border-blue-500/20 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Conversational Telephony, Sub-800ms Voice & Dispatch 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Voice Receptionists: <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Never Miss a Business Phone Call Again</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Over 60% of callers who reach a voicemail hang up and call a competitor. Explore next-generation conversational AI voice receptionists that answer inbound phone lines 24/7, book appointments into your calendar, and transfer urgent callers in real time.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Front-Desk Telephony Transformation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Moving from voicemail graveyards and expensive call centers to intelligent autonomous voice agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Voicemail Abandonment</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Callers reaching a generic answering machine during lunch breaks or after-hours immediately hang up. Up to 40% of potential inbound customer revenue is lost forever.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Costly Answering Services</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Paying $2,500–$4,000/month for third-party call centers that mispronounce business names, follow rigid scripts poorly, and cannot access scheduling calendars.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-950 to-slate-900 text-white border border-blue-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Sub-800ms AI Phone Agents</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Answers on ring 1, speaks with hyper-realistic human voice inflection, handles conversational interruptions, books appointments into CRM, and transfers emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* 2.5 INTERACTIVE ROI CALCULATOR */}
      <section className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 md:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Calculator className="w-4 h-4" />
              Telephony Operational Economics Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Front-Desk Calling Costs (500 Inbound Calls/Mo)</h2>
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
              Full-Time Receptionist Team
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-blue-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Voice Receptionist (Bland / Retell AI)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Monthly Telephony Labor Cost
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$4,200 /mo" : "$149 /mo"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Full-time receptionist wage, benefits, and call management software" 
                : "Usage-based per-minute billing (~$0.09–$0.15/minute of call time)"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <PhoneForwarded className="w-4 h-4 text-blue-500" />
              Inbound Call Answer Rate
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "64.5%" : "100.0%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Misses calls when lines are busy, during lunch, and after 5:00 PM" 
                : "Instant pick-up on ring 1, handling infinite simultaneous incoming calls"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-indigo-500" />
              Direct New Revenue Captured
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "Baseline" : "+$28,500 /mo"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Voicemails result in customer churn to faster local competitors" 
                : "Captures weekend & evening high-ticket appointments on the spot"}
            </p>
          </div>
        </div>
      </section>

      {/* 3.0 EDITOR'S CHOICE SPOTLIGHT */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 md:p-12 border border-blue-500/30 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-400" />
              Editor's Choice 2026: Benchmark Telephony Voice Engine
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Bland AI — Enterprise-Scale Phone Agents & Live Dispatch
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Bland AI is built specifically for high-reliability conversational phone calls. It scales seamlessly from small local practices to enterprise call centers handling hundreds of thousands of concurrent phone calls. Featuring sub-800ms latency, custom fine-tuned voices, and mid-call API integrations, Bland executes complex telephone workflows with ease.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                Ultra-Low Sub-800ms Conversational Latency
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                Live Mid-Call API Webhooks & Calendar Booking
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                Intelligent Interruption & Turn-Taking Handling
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                SIP & Twilio Phone Trunk Native Compatibility
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 w-full lg:w-72 shrink-0 space-y-4 text-center">
            <div className="text-xs uppercase font-semibold text-slate-400">Pay As You Go</div>
            <div className="text-4xl font-black text-white">$0.09 <span className="text-sm font-normal text-slate-400">/minute</span></div>
            <div className="text-xs text-blue-300">Free developer credits • No monthly minimums</div>
            <Link 
              href="/tools/bland-ai-phone-agents"
              className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors text-sm shadow-lg shadow-blue-600/25"
            >
              Explore Bland AI
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 TOP 3 ALTERNATIVES MATRIX & BRIDGES */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 AI Voice Receptionist Platforms Compared
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Evaluating options by response latency, telephony protocol support, voice realism, and cost.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800 text-xs uppercase font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-4 sm:p-5">Platform</th>
                <th className="p-4 sm:p-5">Core Strength</th>
                <th className="p-4 sm:p-5">Latency Target</th>
                <th className="p-4 sm:p-5">Call Transfer Support</th>
                <th className="p-4 sm:p-5">Calendar Sync</th>
                <th className="p-4 sm:p-5">Pricing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Bland AI
                </td>
                <td className="p-4 sm:p-5">Enterprise Scalability & Custom Actions</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">&lt;800ms</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">SIP REFER & Warm Transfer</td>
                <td className="p-4 sm:p-5">Full API Integration</td>
                <td className="p-4 sm:p-5 font-medium">$0.09/min</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  Retell AI
                </td>
                <td className="p-4 sm:p-5">Ultra-Low Latency & Natural Voices</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">&lt;600ms</td>
                <td className="p-4 sm:p-5">Twilio native bridging</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">Cal.com & Google Calendar</td>
                <td className="p-4 sm:p-5 font-medium">$0.10/min</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  Vapi
                </td>
                <td className="p-4 sm:p-5">Developer Voice Orchestration API</td>
                <td className="p-4 sm:p-5">&lt;700ms</td>
                <td className="p-4 sm:p-5">SIP forwarding</td>
                <td className="p-4 sm:p-5">Custom Webhooks</td>
                <td className="p-4 sm:p-5 font-medium">$0.05/min + provider</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison Bridges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-500" />
              Bland AI vs Retell AI: Scale & Outbound vs Inbound Latency
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Bland AI</strong> is unmatched for enterprises requiring large-scale outbound call campaigns, dynamic CRM database modifications, and complex enterprise compliance. <strong>Retell AI</strong> is renowned for having slightly faster latency (&lt;600ms) and out-of-the-box calendar booking tools tailored for local small businesses.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-500" />
              Vapi vs Bland AI: Bring-Your-Own-LLM Flexibility
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Vapi</strong> acts as a pure developer orchestration layer, allowing you to swap between OpenAI, Deepgram, ElevenLabs, and custom LLM servers directly. <strong>Bland AI</strong> provides a more vertically integrated, turnkey telephony ecosystem with built-in voice models and simplified dashboard management.
            </p>
          </div>
        </div>
      </section>

      {/* 4.0 BUYER'S GUIDE: ASYMMETRIC BENTO BLOCKS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Key Architecture Factors for AI Voice Receptionists
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            What to evaluate before deploying an AI telephone agent on your business phone line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">01</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Sub-800 Millisecond Turn-Taking Latency</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Human telephone callers subconsciously perceive any response pause greater than 1,000 milliseconds as awkward or broken. Ensure the platform tests below 800ms end-to-end latency across standard cell phone carrier networks.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">02</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Background Noise & Accent Resiliency</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Real callers phone while driving on highways, standing on noisy construction sites, or walking through windy streets. Verify the speech-to-text layer includes neural noise suppression and handles diverse global accents without transcription failure.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">03</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Live Warm Call Transfer Protocols</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When an urgent emergency or high-value VIP client calls, the bot must be able to transfer the call to your mobile phone or on-call staff instantly. Look for warm transfer support that provides an audio context summary before connecting the customer.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <span className="text-4xl font-black text-blue-500/30">04</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Calendar & CRM Two-Way Sync</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              An answering bot that only takes notes fails to solve front-desk bottlenecks. The agent must query live availability, offer open time slots, book appointments into your calendar, and text confirmation links via SMS during the call.
            </p>
          </div>
        </div>
      </section>

      {/* 4.5 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4-Step Blueprint to Launching an AI Voice Receptionist
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How to configure and test a 24/7 autonomous phone agent in under 45 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Acquire Phone Number or Forward</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Provision a new local phone number or set up unconditional/conditional call forwarding from your existing business phone provider (RingCentral, Grasshopper, etc.).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Craft Persona & Knowledge Script</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Define the receptionist's name, friendly professional tone, service pricing ranges, business hours, and standard qualification questions for incoming callers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Connect Calendar & Transfer Numbers</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Integrate Google Calendar or Calendly for direct appointment booking, and configure your emergency mobile phone number for live call escalation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 relative">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">Perform Live Dial Tests</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Call the number from mobile devices. Test interruptions, difficult accents, and complex booking scenarios to verify sub-800ms latency before routing live public callers.
            </p>
          </div>
        </div>
      </section>

      {/* 5.0 WHO BENEFITS MOST (VERTICAL TABS) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Who Benefits Most from AI Voice Receptionists?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Select your industry sector to see specialized phone workflows.
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
                    ? "bg-white dark:bg-slate-800 border-blue-500/50 shadow-md text-slate-900 dark:text-white font-semibold"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                <div className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider mb-1">
                  {uc.badge}
                </div>
                <div className="text-sm sm:text-base">{uc.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
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
                Key Telephony Capabilities:
              </h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-xs sm:text-sm text-blue-900 dark:text-blue-200 font-medium">
              📞 <strong>Proven Business Impact:</strong> {useCases[activeUseCase].highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 TECHNICAL GLOSSARY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <BookOpen className="w-4 h-4" />
          Conversational Telephony Lexicon
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
            Answers to common questions regarding AI voice receptionists, latency metrics, and phone call transfers.
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
