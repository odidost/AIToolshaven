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
  Presentation, 
  Layers, 
  Compass, 
  Award, 
  Target, 
  TrendingUp, 
  Users,
  ShieldCheck,
  Vote,
  QrCode
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an interactive audience presentation and how does AI enhance engagement?",
    answer: "An interactive audience presentation software engages viewers in real time through smartphone participation. Audience members scan an onscreen QR code to vote in live polls, submit upvoted Q&A questions, contribute to dynamic word clouds, and participate in gamified quizzes. AI enhances this by generating contextual quiz questions, categorizing and clustering audience feedback, and moderating toxic or off-topic questions in real time."
  },
  {
    question: "What are the best AI interactive audience presentation platforms in 2026?",
    answer: "Mentimeter leads the market for enterprise and educational workshops with AI question generation and animated visual polls. Slido is the gold standard for large conferences and town halls, integrating natively with Zoom, Webex, and Microsoft Teams. AhaSlides offers flexible gamified trivia and quiz formats with budget-friendly plans. Kahoot! AI delivers high-energy competitive gamification for corporate training and classrooms."
  },
  {
    question: "Can attendees participate without downloading a separate mobile app?",
    answer: "Yes. All modern interactive presentation tools require zero app downloads. Attendees simply open their smartphone camera, scan the slide's QR code, and are instantly connected via their mobile browser to vote and submit questions anonymously or with their name."
  },
  {
    question: "How does AI handle content moderation during live unfiltered Q&A sessions?",
    answer: "AI moderation filters monitor incoming audience questions in real time. They automatically flag profanity, hate speech, spam, and duplicate queries, clustering similar questions together so presenters can address the core theme without reading 20 variations of the same inquiry."
  }
];

const useCases = [
  {
    title: "Company All-Hands & Executive Town Halls",
    badge: "Internal Communications",
    desc: "Collect honest, anonymous employee questions and run live sentiment temperature checks during quarterly executive all-hands meetings.",
    benefits: [
      "AI clusters hundreds of questions into 5 primary discussion topics",
      "Live upvoting brings the most critical employee concerns to the top",
      "Increases psychological safety and candid leadership feedback"
    ],
    highlight: "Increased all-hands participation from 18% to 84% across 800 employees"
  },
  {
    title: "Interactive Corporate Training & Compliance Workshops",
    badge: "Employee Learning",
    desc: "Transform dry compliance training into an engaging live competition with AI-generated quizzes and instant knowledge retention checks.",
    benefits: [
      "AI generates 10 quiz questions instantly from compliance documentation",
      "Real-time leaderboard motivates employee attention and engagement",
      "Provides HR with immediate analytics on misunderstood policy points"
    ],
    highlight: "Boosted post-training compliance quiz pass rates from 62% to 94%"
  },
  {
    title: "Conference Keynotes & Industry Panels",
    badge: "Keynote Speaking",
    desc: "Engage ballroom audiences of thousands by crowdsourcing real-time word clouds and audience survey benchmarks live on the main stage.",
    benefits: [
      "Zero friction participation via instant QR code mobile camera scanning",
      "Dynamic animated word clouds visualize collective audience thoughts",
      "Creates viral social sharing moments for conference organizers"
    ],
    highlight: "Engaged over 2,500 simultaneous keynote attendees with zero server latency"
  }
];

const glossaryTerms = [
  {
    term: "Live Word Cloud",
    definition: "A dynamic slide visual where audience members submit single-word answers via their phones, with frequently repeated terms expanding dynamically in real time."
  },
  {
    term: "Semantic Q&A Clustering",
    definition: "An AI algorithm that groups semantically similar audience questions together, highlighting the primary underlying sentiment for the speaker."
  },
  {
    term: "QR-Based Instant Join",
    definition: "A friction-free mechanism allowing attendees to participate in polls without installing apps or creating accounts by scanning a displayed QR code."
  },
  {
    term: "Pulse Check Polling",
    definition: "Short, quick-fire 1-question polls inserted periodically throughout a presentation to measure audience sentiment and maintain alertness."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiInteractiveAudiencePresentationsGuide() {
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
            Audience Engagement & Live Polling 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI Interactive Audience Presentations: <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">Turn Passive Listeners into Active Participants</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Stop speaking to silent, disengaged rooms. Discover how AI-powered audience presentation tools use live QR code polling, real-time Q&A clustering, and gamified quizzes to transform any lecture, all-hands, or conference into an interactive event.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Audience Engagement Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How smartphone-connected presentations revived the one-way lecture format.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Passive Monologue Boredom</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Presenters talk at audiences for 45 minutes straight while attendees browse social media, check Slack, and quietly disconnect from the message.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Awkward Mic-Passing Q&A</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The speaker asks &quot;Any questions?&quot; followed by painful silence, or one attendee monopolizes the microphone with a rambling, off-topic speech.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">Live AI-Driven Interaction</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Mentimeter and Slido invite hundreds of attendees to vote via QR code, visualizing collective opinions and clustering questions with AI moderation.
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
              Audience Engagement & Retention Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Event Engagement (250 Attendees)</h2>
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
              Standard Passive Slides
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Interactive AI Polling (Mentimeter/Slido)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Active Audience Participation
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "8% of Room" : "79% of Room"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "A tiny handful of extroverted participants raising hands" 
                : "Hundreds of simultaneous phone votes and anonymous submissions"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Feedback Response Volume
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "4 Questions" : "165 Responses"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Time-limited verbal Q&A dominated by single individuals" 
                : "Comprehensive sentiment data and upvoted executive inquiries"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Information Retention Rate
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "22%" : "68%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Passive listening decays rapidly within 24 hours of the presentation" 
                : "Active retrieval practice through gamified quizzes cements key facts"}
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE ARCHITECTURE */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <BookOpen className="w-4 h-4" />
            Under the Hood
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            How AI-Driven Interactive Presentations Work
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl">
            A frictionless real-time bridge connecting attendee smartphones to live presenter slides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">AI Poll Generation</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The presenter pastes a topic or lecture document; the AI drafts multiple-choice polls, word cloud prompts, and trivia quizzes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Instant QR Onboarding</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Attendees point their phone camera at the screen QR code, opening a fast web app with zero app store installs or logins.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Live Data Visualization</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Votes animate on the main presentation display in sub-second real time, generating colorful bar charts, scales, and growing word clouds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">AI Moderation & Clustering</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              LLMs group similar audience questions, filter out profanity, and highlight top themes for the speaker to address with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* 4. TOP 3 ALTERNATIVES MATRIX */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Award className="w-4 h-4" />
            Platform Benchmark
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Top 3 Interactive Audience Presentation Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed head-to-head comparison of live audience engagement software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mentimeter */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 relative shadow-lg space-y-5">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              Market Leader
            </div>
            <div>
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Visual Engagement Suite</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Mentimeter</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The gold standard for interactive presentations. Combines complete slide design with dynamic word clouds, scales, 2x2 grids, and AI question writing.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Stunning animated word clouds & 2x2 matrix polls</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Menti AI generates complete interactive quiz decks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Direct PowerPoint and Zoom integrations</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Corporate workshops, executive all-hands, and interactive lectures.
            </div>
          </div>

          {/* Slido */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Enterprise Town Halls</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Slido (by Cisco)</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The premier platform for high-scale enterprise Q&A and live polling. Exceptional integration with Webex, Microsoft Teams, and Zoom.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Enterprise Q&A upvoting & AI question moderation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Seamless native Microsoft Teams & Webex sidebars</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Scales reliably to 10,000+ simultaneous attendees</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Global enterprise all-hands meetings and large-scale virtual summits.
            </div>
          </div>

          {/* AhaSlides */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Gamified Trivia & Quizzes</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">AhaSlides</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Cost-effective, highly engaging platform featuring spinner wheels, live emoji reactions, competitive trivia games, and AI quiz creation.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Custom spinner wheels and sound effects</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>AI quiz generator from any text prompt or document</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Extremely accessible pricing plans for educators & SMBs</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Community meetups, team social events, and university classrooms.
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE USE CASES TABBED */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Target className="w-4 h-4" />
            Field-Proven Workflows
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            High-Impact Audience Engagement Deployments
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How organizations use live polling to boost retention and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            {useCases.map((uc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveUseCase(idx)}
                className={`w-full text-left p-4 rounded-xl transition-all ${
                  activeUseCase === idx 
                    ? "bg-white dark:bg-slate-800 shadow-md border-l-4 border-indigo-600 dark:border-indigo-400 text-slate-900 dark:text-white"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800/40 text-slate-600 dark:text-slate-400"
                }`}
              >
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{uc.badge}</div>
                <div className="font-semibold text-sm sm:text-base">{uc.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                {useCases[activeUseCase].badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {useCases[activeUseCase].title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                {useCases[activeUseCase].desc}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Key Capabilities</h4>
              <ul className="space-y-2">
                {useCases[activeUseCase].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <div className="text-xs sm:text-sm font-medium text-indigo-950 dark:text-indigo-200">
                {useCases[activeUseCase].highlight}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4-STEP IMPLEMENTATION ROADMAP */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Compass className="w-4 h-4" />
            Presenter Playbook
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4 Steps to Running an Interactive Presentation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From automated poll drafting to post-event engagement analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 1</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">AI Poll Design</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Input your presentation outline; prompt the AI to insert 1 icebreaker word cloud, 2 pulse check polls, and 1 final feedback rating slide.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 2</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">QR Code Icebreaker</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Open the presentation with an interactive QR code slide asking a fun question (e.g. &quot;Where are you joining from?&quot;) to get everyone connected early.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 3</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Live AI Moderation</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Enable real-time Q&A. Let AI group similar questions and highlight the top 3 upvoted topics so you can answer what the audience truly cares about.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 4</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Export Insight Reports</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Download post-presentation participation analytics, exported voting CSVs, and unanswered audience questions for follow-up documentation.
            </p>
          </div>
        </div>
      </section>

      {/* 7. COMPARISON BRIDGE */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Layers className="w-4 h-4" />
            Strategic Evaluation
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Interactive AI Presentations vs Standard Slide Decks
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why dynamic two-way audience interaction delivers superior attendee satisfaction.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-indigo-600 dark:text-indigo-400">Interactive AI Presentation (Mentimeter/Slido)</th>
                <th className="p-4 sm:p-5">Standard Static Slide Deck</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Audience Participation</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">75% - 90% active engagement via smartphones</td>
                <td className="p-4 sm:p-5 text-slate-500">Under 10% (limited to verbal hand raisers)</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Q&A Efficiency</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Upvoted question feeds and AI topic clustering</td>
                <td className="p-4 sm:p-5 text-slate-500">Awkward silence or rambling single attendees</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Attendee Anonymity</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Safe anonymous voting encourages candid executive feedback</td>
                <td className="p-4 sm:p-5 text-slate-500">Employees fear speaking up in front of leadership</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Post-Session Analytics</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Complete CSV voting breakdown and sentiment metrics</td>
                <td className="p-4 sm:p-5 text-slate-500">Zero quantifiable audience sentiment data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. GLOSSARY TERMS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Key Interactive Presentation Concepts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {glossaryTerms.map((term, i) => (
            <div key={i} className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <div className="font-semibold text-indigo-600 dark:text-indigo-400 text-sm">{term.term}</div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{term.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Everything you need to know about setting up interactive audience presentations.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div key={idx} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-indigo-600" : "text-slate-400"}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-100 dark:border-slate-800 px-4 sm:px-5 py-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-950 p-8 md:p-12 text-center text-white space-y-6 border border-indigo-500/20 shadow-xl">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Transform Your Next Presentation
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Engage every person in the room with live smartphone voting, real-time word clouds, and interactive AI Q&A.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/category/ai-presentation-makers"
            className="px-6 py-3 rounded-xl bg-white text-indigo-900 font-semibold text-sm hover:bg-slate-100 transition-all flex items-center gap-2 shadow-sm"
          >
            Explore AI Presentation Makers
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/category/productivity"
            className="px-6 py-3 rounded-xl bg-indigo-800/60 hover:bg-indigo-700/60 text-white font-semibold text-sm border border-indigo-400/30 transition-all"
          >
            View Productivity Category
          </Link>
        </div>
      </section>

    </div>
  );
}
