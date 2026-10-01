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
  Search, 
  Database, 
  Filter, 
  Award, 
  Target, 
  TrendingUp, 
  Users,
  Compass,
  Layers
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is AI B2B lead enrichment and how does waterfall enrichment work?",
    answer: "AI B2B lead enrichment takes raw, incomplete contact records (like a person's name and domain name) and uses generative AI and real-time scrapers to discover verified business email addresses, direct dial mobile numbers, LinkedIn profiles, tech stacks, and recent hiring announcements. 'Waterfall enrichment' sequentially queries multiple data vendors (e.g. Apollo, Hunter, Dropcontact, Cognism) until an email is 99% verified, yielding match rates above 85% compared to single-vendor lookups."
  },
  {
    question: "What are the best AI lead enrichment tools in 2026?",
    answer: "Clay is the gold standard for GTM teams orchestrating custom waterfall enrichment, web scraping, and automated AI research columns. Apollo.io offers the largest unified database of 275M+ verified buyer contacts with built-in sequencing. ZoomInfo Copilot delivers enterprise account hierarchies, intent data, and organizational buying signals. Clearbit (HubSpot Breeze Intelligence) provides seamless real-time inbound form shortening and CRM data hygiene."
  },
  {
    question: "How does AI enrich company firmographic and technographic data?",
    answer: "AI enrichment tools scan public job postings, DNS records, GitHub commits, and website codebases to identify what software tools a prospect is running (e.g. AWS vs Azure, Stripe vs Adyen, Hubspot vs Marketo). Large language models also read companies' recent press releases and 10-K filings to surface strategic priorities, new product launches, and executive promotions."
  },
  {
    question: "Are enriched emails GDPR and CAN-SPAM compliant?",
    answer: "Top-tier enrichment platforms adhere strictly to global data protection privacy regulations. They rely on legitimate interest provisions under GDPR, collect business contact information from publicly accessible corporate registries, continuously scrub do-not-call registries, and ensure real-time email ping verification without storing unauthorized personal consumer data."
  }
];

const useCases = [
  {
    title: "1-Click Inbound Form Shortening",
    badge: "Inbound Conversion",
    desc: "Shorten demo request forms to a single 'Work Email' field. AI instantly fills Company Name, Employee Count, Annual Revenue, and Country in the CRM.",
    benefits: [
      "Boosts website demo form completion rates by up to 48%",
      "Instantly routes enterprise inbound leads to senior account executives",
      "Eliminates friction of asking prospects 8 tedious dropdown questions"
    ],
    highlight: "Increased inbound demo request volume by 52% while enriching 14 hidden firmographic fields"
  },
  {
    title: "Automated Intent Signal & Job Change Triggering",
    badge: "Outbound Trigger",
    desc: "Automatically flag when previous customer champions change jobs to new accounts or when target accounts post job requisitions for complementary technologies.",
    benefits: [
      "Generates hyper-relevant outreach within 72 hours of an executive job transition",
      "Monitors hiring surges indicating allocated budget for new tech stacks",
      "Feeds pre-enriched lead lists straight into automated outbound sequences"
    ],
    highlight: "Generated 3.8x higher response rates compared to cold, non-intent prospecting lists"
  },
  {
    title: "Multi-Provider Waterfall Enrichment Orchestration",
    badge: "Data Accuracy",
    desc: "Chain 5+ verified data providers in series. If provider A has a bounce rate risk, provider B tests MX records, and provider C verifies direct mobile numbers.",
    benefits: [
      "Skyrockets valid contact data find-rates from 45% to over 86%",
      "Protects Google and Outlook domain sender reputation by keeping bounces under 1.5%",
      "Eliminates expensive single-source enterprise contracts with redundant vendors"
    ],
    highlight: "Cut lead data provider costs by 40% while doubling contact match accuracy"
  }
];

const glossaryTerms = [
  {
    term: "Waterfall Enrichment",
    definition: "A method that sequentially queries multiple data providers (e.g. Vendor A &rarr; Vendor B &rarr; Vendor C) until a valid, verified contact attribute is found."
  },
  {
    term: "Technographic Data",
    definition: "Information describing the hardware and software systems an organization uses, such as their cloud provider, CRM, analytics tool, or payment gateway."
  },
  {
    term: "Intent Signals",
    definition: "Digital breadcrumbs indicating a company is actively researching a solution, including visits to review sites, surge search queries, and job openings."
  },
  {
    term: "Catch-All Verification",
    definition: "Specialized algorithmic verification designed to test whether mail servers that accept all emails actually deliver to an active recipient inbox."
  }
];

// ---- ANIMATION VARIANTS ---- //
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AiB2bLeadEnrichmentGuide() {
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
            B2B Data Intelligence & Waterfall Enrichment 2026
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Best AI B2B Lead Enrichment Tools: <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">Turn Incomplete Domains into High-Converting Pipeline</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Stop letting stale contact data sabotage outbound email deliverability and sales rep productivity. Discover how AI waterfall enrichment discovers verified emails, mobile phones, tech stacks, and buyer intent automatically.
          </p>
        </div>
      </section>

      {/* 2. PARADIGM SHIFT: BENTO GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            The Lead Enrichment Paradigm Shift
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From static CSV spreadsheet exports to multi-provider real-time intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Static Single-Vendor Lists</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Buying static CSVs from a single database provider results in 30%+ bounce rates, obsolete job titles, disconnected phone numbers, and damaged email sender reputation.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Manual LinkedIn Copy-Pasting</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              BDRs waste 15 to 20 hours a week cross-referencing LinkedIn Sales Navigator, Google News, and company blogs to gather 5 basic contact facts before sending one message.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">AI Waterfall Orchestration</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Clay and AI agents query multiple verified databases sequentially, read prospect websites via live scrapers, and synthesize tailored outreach hooks autonomously.
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
              SDR Capacity & Enrichment Cost Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Compare Outbound Data Enrichment (2,500 Accounts/Mo)</h2>
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
              Manual SDR Web Prospecting
            </button>
            <button 
              onClick={() => setCalculatorMode("ai")}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                calculatorMode === "ai" 
                  ? "bg-indigo-600 text-white shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI Waterfall Enrichment (Clay/Apollo)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Timer className="w-4 h-4 text-indigo-500" />
              Time to Research 100 Accounts
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "25 Hours" : "4 Minutes"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Manually checking LinkedIn profiles, websites, and email permutation tools" 
                : "Automated table enrichment querying 10+ providers via background jobs"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              Cost Per Verified Lead Profile
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "$12.50" : "$0.14"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Based on $30/hour SDR salary spent hunting contact details" 
                : "Blended per-credit API waterfall lookup costs across top providers"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <LineChart className="w-4 h-4 text-purple-500" />
              Verified Email Delivery Rate
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {calculatorMode === "traditional" ? "68.2%" : "98.7%"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {calculatorMode === "traditional" 
                ? "Frequent hard bounces triggering spam filtering across corporate domains" 
                : "Real-time MX server and catch-all validation before message dispatch"}
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
            The Anatomy of AI Waterfall Lead Enrichment
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl">
            How modern data engines combine raw identity fragments into verified, actionable executive intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Seed Identity Matching</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Ingests basic inputs (e.g. domain name, first/last name, or LinkedIn profile URL) and resolves canonical corporate identity entities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Waterfall Cascade</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Sequentially queries Hunter &rarr; Apollo &rarr; Dropcontact &rarr; Cognism, only spending credits on subsequent vendors if the previous provider fails.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">AI Web Scrape Extraction</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Dispatches headless crawlers to read company case studies, pricing structures, and recent job descriptions, generating personalized outreach hooks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">CRM Continuous Refresh</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Silently monitors key accounts in Salesforce or HubSpot, updating phone numbers and triggering notifications when contacts change employers.
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
            Top 3 AI Lead Enrichment Platforms
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed head-to-head comparison of modern B2B data intelligence suites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Clay */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/40 relative shadow-lg space-y-5">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              GTM Gold Standard
            </div>
            <div>
              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Waterfall Orchestration</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Clay.com</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The flexible spreadsheet-based GTM platform allowing teams to build custom multi-provider waterfalls, run web scrapers, and prompt LLMs over 75+ data sources.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>75+ connected data providers in one interface</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>AI web scraping & personalized prompt columns</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Pay-only-for-successful waterfall lookup pricing</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Sophisticated outbound GTM teams and growth engineers.
            </div>
          </div>

          {/* Apollo.io */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">All-in-One Sales Engine</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Apollo.io</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Massive proprietary database of 275M+ verified B2B contacts combined with built-in email sequencing, dialer, and AI email generation.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>275M+ global verified business contacts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Built-in dialer and multi-channel email cadences</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Extremely accessible entry pricing for startups</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Early to mid-stage companies wanting data + sequencing in one tool.
            </div>
          </div>

          {/* ZoomInfo Copilot */}
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Enterprise Depth</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">ZoomInfo Copilot</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The premier enterprise database for deep org charts, phone-verified direct mobile lines, buyer intent spikes, and CRM account deduplication.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>95%+ accurate enterprise direct phone numbers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Real-time enterprise intent signal surges</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Complex parent/subsidiary hierarchy mapping</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <strong>Best For:</strong> Large enterprise sales forces with substantial data budgets.
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
            High-Impact Lead Enrichment Deployments
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            How forward-thinking GTM teams supercharge pipeline generation with data enrichment.
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
            Deployment Playbook
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            4 Steps to Building an AI Enrichment Engine
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From raw domain ingestion to automated, personalized outbound pipeline generation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 1</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">ICP Criteria Definition</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Define target company size, revenue, tech stack requirements, and title levels (e.g. VP of RevOps in Series B+ SaaS companies).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 2</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Configure Waterfall logic</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Connect API keys for Clay, Apollo, and Hunter. Set verification thresholds to automatically drop unverified catch-all emails.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 3</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">AI Web Scrape Columns</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Instruct LLMs to parse prospect company homepages for value propositions, hiring posts, and customer logos to form customized 1-to-1 hooks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step 4</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Sequencer & CRM Sync</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Push enriched records directly to Smartlead, Instantly, or HubSpot, populating custom fields ready for automated sequence launch.
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
            Waterfall AI Enrichment vs Single Database Vendors
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Why multi-provider orchestration delivers superior coverage and lower bounce rates.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-indigo-600 dark:text-indigo-400">AI Waterfall Orchestration (Clay)</th>
                <th className="p-4 sm:p-5">Traditional Static Database Vendor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Email Find Rate</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">82% - 94% (cascading across 5+ providers)</td>
                <td className="p-4 sm:p-5 text-slate-500">45% - 60% (limited to 1 proprietary dataset)</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Live AI Web Research</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Headless crawlers extract real-time page content & job posts</td>
                <td className="p-4 sm:p-5 text-slate-500">None (relies on quarterly database crawls)</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Credit Spending Waste</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Pay only on successful verified match</td>
                <td className="p-4 sm:p-5 text-slate-500">Credits charged regardless of email deliverability</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Workflow Flexibility</td>
                <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium">Custom formulas, webhooks, and generative prompt columns</td>
                <td className="p-4 sm:p-5 text-slate-500">Rigid pre-built CSV export columns</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. GLOSSARY TERMS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Key B2B Data Concepts</h2>
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
            Common questions about deploying AI-driven B2B lead enrichment pipelines.
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
            Stop Wasting Time on Bounced Leads
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Equip your outbound engine with automated waterfall enrichment and reach decision-makers with confidence.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/category/ai-sales-tools"
            className="px-6 py-3 rounded-xl bg-white text-indigo-900 font-semibold text-sm hover:bg-slate-100 transition-all flex items-center gap-2 shadow-sm"
          >
            Explore AI Sales Tools
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/category/marketing-sales"
            className="px-6 py-3 rounded-xl bg-indigo-800/60 hover:bg-indigo-700/60 text-white font-semibold text-sm border border-indigo-400/30 transition-all"
          >
            View Marketing & Sales Category
          </Link>
        </div>
      </section>

    </div>
  );
}
