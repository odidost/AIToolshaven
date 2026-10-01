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
  Mail, 
  Send, 
  Inbox, 
  ShieldCheck, 
  Flame, 
  Users, 
  Target, 
  Sparkle,
  Workflow
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is the best AI cold email outreach tool in 2026?",
    answer: "Instantly and Smartlead dominate the outbound sales sector. Instantly is renowned for unlimited inbox accounts, automated email warm-up networks, and an integrated verified B2B lead finder. Smartlead excels in enterprise API infrastructure, multi-channel outreach, and dynamic multi-inbox sender rotation that protects primary domain deliverability."
  },
  {
    question: "How do modern AI cold email tools bypass Google and Yahoo 2026 spam filters?",
    answer: "Top cold email platforms use distributed domain rotation, automated DNS records (SPF, DKIM, DMARC, Custom Tracking Domains), and semantic spintax. Instead of blasting 500 emails from a single address, the system distributes sending across 25 secondary domains sending 20 emails each, varying the sentence structure and vocabulary using generative AI so no two emails are identical."
  },
  {
    question: "What is waterfall enrichment in cold email campaigns?",
    answer: "Waterfall enrichment (popularized by platforms like Clay) queries multiple data providers sequentially (e.g. Apollo -> Hunter -> Prospeo -> Dropcontact) until a valid, verified corporate email is found. This cuts bounce rates below 1.5% and enriches leads with recent funding news, LinkedIn posts, and hiring signals."
  },
  {
    question: "Can AI handle replies and book meetings automatically?",
    answer: "Yes. Inbound AI reply agents categorize incoming responses (positive, objection, out-of-office, unsubscribe). When a prospect expresses interest, the AI answers specific product questions using your company knowledge base and shares calendar scheduling links, booking calls 24/7 without human delay."
  }
];

const useCases = [
  {
    id: "leadgen-agencies",
    label: "Lead Gen Agencies",
    badge: "Multi-Client Scale",
    title: "Scale Hundreds of Client Inboxes with Automated Deliverability Warmup",
    description: "Outbound agencies manage dozens of client workspaces from a unified portal. Automated inbox warmup and smart sender rotation allow teams to send 50,000+ personalized emails weekly while maintaining 60%+ open rates.",
    highlight: "Manage 50+ client outbound engines with zero deliverability burnout",
    icon: Mail
  },
  {
    id: "b2b-saas",
    label: "B2B SaaS Founders",
    badge: "Pipeline Growth",
    title: "Fill the Sales Pipeline with Qualified Demos at Low Customer Acquisition Cost",
    description: "Startup founders and early sales teams prospect high-intent ICP accounts, automating personalized multi-touch sequences that combine email, LinkedIn profile visits, and tailored video intros.",
    highlight: "Generate 15–30 qualified sales calls per month on autopilot",
    icon: Target
  },
  {
    id: "enterprise-sdrs",
    label: "Enterprise SDR Teams",
    badge: "Signal-Based Selling",
    title: "Trigger Personalized Cold Pitches Based on Live Intent Signals",
    description: "Enterprise sales reps monitor job postings, executive promotions, and tech-stack changes. When a target enterprise installs a competitor or hires a new VP, the AI auto-drafts a hyper-relevant pitch referencing that exact trigger event.",
    highlight: "Triple cold email reply rates compared to generic template blasts",
    icon: Workflow
  },
  {
    id: "recruiters",
    label: "Executive Recruiters",
    badge: "Talent Sourcing",
    title: "Engage Passive Engineering and Executive Talent with High Personalization",
    description: "Technical recruiters craft customized outreach referencing candidate GitHub contributions, patents, and recent blog posts, achieving double-digit response rates from high-demand talent.",
    highlight: "Achieve 35%+ positive response rates from senior passive candidates",
    icon: Users
  }
];

const topAlternatives = [
  { 
    name: "Instantly", 
    slug: "instantly",
    score: "9.9", 
    price: "From $37/mo", 
    bestFor: "Unlimited inbox accounts, automated warmup & built-in B2B lead database", 
    highlight: "The market leader in high-volume outbound, featuring unlimited warmup inboxes, email verification, and intuitive CRM pipeline tracking." 
  },
  { 
    name: "Smartlead", 
    slug: "smartlead-ai",
    score: "9.8", 
    price: "From $39/mo", 
    bestFor: "Enterprise multi-channel infrastructure & intelligent sender rotation", 
    highlight: "Unmatched email infrastructure with dynamic mailbox rotation, automated multi-channel sequences, and white-label agency client portals." 
  },
  { 
    name: "Clay", 
    slug: "clay-ai",
    score: "9.7", 
    price: "Free tier / From $149/mo", 
    bestFor: "Deep waterfall data enrichment & hyper-personalized AI writing prompts", 
    highlight: "The holy grail for sales ops, connecting 50+ data providers into a spreadsheet UI that crafts custom 1-to-1 personalized email copy." 
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

export default function AiColdEmailOutreachGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const [roiMode, setRoiMode] = useState<"traditional" | "ai">("ai");

  return (
    <article className="w-full max-w-6xl mx-auto py-6 md:py-10 font-sans overflow-hidden">
      
      {/* 1. Hero Header */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-indigo-500/20 shadow-2xl shadow-indigo-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-blue-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-8 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" /> 
            2026 Outbound Deliverability &amp; Pipeline Deep Dive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.08]"
          >
            The Ultimate Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-300 to-sky-300 drop-shadow-sm">
              AI Cold Email &amp; Sales Outreach
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[18px] md:text-[20px] font-normal leading-[32.4px] text-slate-300 max-w-2xl mx-auto"
          >
            How waterfall data enrichment, multi-inbox sender rotation, and context-aware generative personalization turned cold outreach into a reliable, high-converting revenue pipeline.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. The Paradigm Shift (Interactive Bento Blocks) */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8 md:mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <motion.div variants={fadeUpVariant} className="flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm tracking-widest uppercase">
            <Mail className="w-4 h-4" /> The Outbound Revolution
          </div>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            From Generic Spam Blasts to Hyper-Personalized Signal Selling
          </h3>
          <p className={figtreeBodyClass}>
            In the past, cold outreach was a race to the bottom: scrape a contact list, blast a static template with a clumsy <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">&#123;&#123;firstName&#125;&#125;</code> tag, and burn your corporate domain into Google and Outlook spam filters within two weeks.
          </p>
          <p className={figtreeBodyClass}>
            In 2026, <strong>AI cold outreach engines</strong> operate like elite sales development teams. They scrape real-time company hiring trends, extract podcast soundbites, and synthesize bespoke opening icebreakers. By distributing sending across dozens of warmed-up secondary domains, they consistently hit the primary inbox with sub-1% bounce rates.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              <span className="inline-block w-10 h-10 rounded-full bg-indigo-500/20 border-2 border-white dark:border-slate-800 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center justify-center">65%+</span>
              <span className="inline-block w-10 h-10 rounded-full bg-blue-500/20 border-2 border-white dark:border-slate-800 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center">&lt;1%</span>
              <span className="inline-block w-10 h-10 rounded-full bg-sky-500/20 border-2 border-white dark:border-slate-800 text-sky-600 dark:text-sky-400 font-bold text-xs flex items-center justify-center">10x</span>
            </div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Average open rate, low bounce rate protection, and 10x higher positive meeting bookings.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="relative">
          <div className="rounded-[2.5rem] bg-gradient-to-tr from-indigo-600 to-sky-600 p-1 shadow-2xl">
            <div className="rounded-[2.4rem] bg-slate-950 p-6 md:p-8 text-white relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 flex items-center gap-1.5">
                  <Send className="w-3.5 h-3.5 text-indigo-400 animate-pulse" /> campaign: outbound-alpha-v3
                </div>
              </div>

              {/* Outreach Monitor Mockup */}
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                  <div className="text-xs text-indigo-400 font-bold mb-1 flex items-center justify-between">
                    <span>PROSPECT INTENT SIGNAL</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">Signal: Series B Funding</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans italic">
                    &quot;Noticed you just closed $18M Series B and are scaling SDR headcount from 4 to 15 this quarter...&quot;
                  </p>
                </div>

                <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80 space-y-2.5 font-sans">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5"><Flame className="w-3.5 h-3.5 text-amber-400" /> Multi-Inbox Pool Health</span>
                    <span className="text-emerald-400 font-bold">99.2% Deliverability</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                      <span className="text-slate-300 font-mono">sarah@trycompany.io</span>
                      <span className="text-emerald-400 font-semibold">18/25 sent (Warm)</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                      <span className="text-slate-300 font-mono">sarah@getcompany.net</span>
                      <span className="text-emerald-400 font-semibold">16/25 sent (Warm)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-950 to-slate-900 rounded-2xl p-4 border border-indigo-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-sans">Spam Guard &amp; Spintax</div>
                      <div className="text-[11px] text-slate-400 font-mono">100% Unique Email Variations</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-sans">
                    Active
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-900">
                <span>Active Sequences: 1,420 Leads</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 14 Demos Booked This Week
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* 2.5 Calculate Outreach ROI */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-950 p-6 md:p-10 border border-slate-800 text-white shadow-xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-400 font-bold text-xs tracking-widest uppercase mb-2">
              <Calculator className="w-4 h-4" /> Outbound Economics
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Manual SDR Prospecting vs. AI Cold Outreach ROI
            </h3>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-400 mt-1">
              Compare sales development headcount, manual email drafting drag, and scalable AI infrastructure.
            </p>
          </div>
          
          {/* Interactive Toggle */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 self-start md:self-auto">
            <button
              onClick={() => setRoiMode("traditional")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                roiMode === "traditional" 
                  ? "bg-slate-700 text-white shadow-md" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Manual Human SDR
            </button>
            <button
              onClick={() => setRoiMode("ai")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                roiMode === "ai" 
                  ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-500/20" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AI Cold Outreach
            </button>
          </div>
        </div>

        {/* Dynamic Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <Timer className="w-4 h-4 text-indigo-400" /> Daily Personalized Emails
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              {roiMode === "traditional" ? "30 – 50 Emails" : "2,500+ Emails"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "A human SDR spends 15 minutes researching a single prospect on LinkedIn and writing custom copy."
                : "Automated waterfall enrichment crafts bespoke icebreakers for thousands of verified leads in minutes."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <DollarSign className="w-4 h-4 text-emerald-400" /> Monthly Operational Cost
            </div>
            <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-2">
              {roiMode === "traditional" ? "$6,500 – $9,000" : "$37 – $97/mo"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "SDR base salary, commissions, healthcare, paid seat licenses, and management overhead."
                : "Flat subscription with unlimited warmup inboxes, email verification, and integrated sequence automation."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <LineChart className="w-4 h-4 text-sky-400" /> Qualified Demos Booked
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              {roiMode === "traditional" ? "8 to 14 / mo" : "35 to 65 / mo"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Constrained by human fatigue, manual tracking errors, and inconsistent follow-up cadence."
                : "Continuous multi-touch sequences ensure zero leads fall through the cracks with automated reply triage."}
            </p>
          </div>
        </div>
      </motion.section>

      {/* 3.0 Sponsor / Editor's Choice Spotlight */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-gradient-to-r from-indigo-950 via-slate-900 to-blue-950 p-8 md:p-12 border border-indigo-500/30 text-white shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
              <Crown className="w-3.5 h-3.5 text-indigo-400" /> Editor&apos;s Benchmark Choice 2026
            </div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              Instantly &amp; Smartlead: The Twin Titans of Outbound Scale
            </h3>
            <p className={figtreeDarkBodyClass}>
              <strong>Instantly</strong> revolutionized outbound with unlimited email warm-up and an integrated 350M+ verified B2B lead directory. <strong>Smartlead</strong> is the gold standard for enterprise lead generation agencies, offering dynamic inbox rotation, multi-channel sequences, and API-first white-label architecture.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Unlimited warmed-up email sending accounts
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Automated secondary domain sender rotation
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Built-in verification with sub-1% bounce rates
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Autonomous AI reply categorization &amp; meeting booking
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link 
              href="/tool/instantly"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold text-base shadow-lg shadow-indigo-500/25 hover:opacity-95 transition-all hover:scale-[1.02]"
            >
              Explore Instantly <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/tool/smartlead-ai"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all text-center"
            >
              View Smartlead
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 3.5 Top 3 Alternatives Matrix + Comparison Bridges */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 space-y-6"
      >
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Top 3 AI Cold Outreach Platforms Compared
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-600 dark:text-slate-400 mt-2">
            Selected by our sales engineering lab based on deliverability algorithms, enrichment speed, and ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topAlternatives.map((alt) => (
            <div 
              key={alt.slug}
              className="rounded-3xl bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
                    Score {alt.score}/10
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{alt.price}</span>
                </div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">{alt.name}</h4>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">{alt.bestFor}</p>
                <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {alt.highlight}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link 
                  href={`/tool/${alt.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  View Tool Profile <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Bridge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Flame className="w-5 h-5 text-indigo-500" /> Scaled Sending &amp; Unlimited Warmup
            </h4>
            <p className={figtreeBodyClass}>
              For teams executing high-volume outbound campaigns, <em>Instantly</em> and <em>Smartlead</em> are mandatory. They automate the complex infrastructure of connecting 50+ inboxes, auto-ramping sending limits, and interacting with peer warmup networks to maintain high sender reputation scores.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-500" /> Deep Signal Sourcing &amp; Waterfall Enrichment
            </h4>
            <p className={figtreeBodyClass}>
              For teams targeting top-tier enterprise accounts where every email must read like an intimate bespoke note, <em>Clay</em> is unmatched. It scours 50+ data sources to find specific podcast interviews, hiring notices, and tech stack signals to craft compelling 1-to-1 hooks.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 4.0 Buyer's Guide & Evaluation Criteria (Asymmetric Bento) */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 space-y-6"
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs tracking-widest uppercase mb-2">
            <BookOpen className="w-4 h-4" /> Technical Evaluation Criteria
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            How to Evaluate an AI Cold Email Platform in 2026
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-600 dark:text-slate-400 mt-1">
            Four mandatory architectural benchmarks when selecting cold outreach software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-indigo-50 dark:group-hover:text-indigo-900/10 transition-colors">
              01
            </span>
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:rotate-6 transition-transform">
              <Sparkle className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Automated Deliverability &amp; Multi-Inbox Rotation
            </h4>
            <p className={figtreeBodyClass}>
              The primary constraint on outbound success is deliverability. Ensure your platform allows connecting unlimited secondary Google Workspace and Microsoft 365 inboxes. The software must automatically rotate senders, enforce strict daily sending caps (e.g. 25–35 emails/inbox/day), and monitor SPF, DKIM, and DMARC health in real time.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-indigo-50 dark:group-hover:text-indigo-900/10 transition-colors">
              02
            </span>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:rotate-6 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Waterfall Verification &amp; Bounce Protection
            </h4>
            <p className={figtreeBodyClass}>
              Bouncing over 2% of emails alerts spam filters immediately. Prioritize tools that verify every lead against real MX records and catch-all servers right before dispatch, guaranteeing bounce rates remain safely below 1.5%.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-indigo-50 dark:group-hover:text-indigo-900/10 transition-colors">
              03
            </span>
            <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-6 group-hover:rotate-6 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Dynamic Semantic Spintax
            </h4>
            <p className={figtreeBodyClass}>
              Sending identical text to thousands of prospects triggers Bayesian spam filters. Look for native AI spintax that automatically synthesizes multiple variations of subject lines, greetings, value propositions, and calls to action across every batch.
            </p>
          </div>

          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-indigo-50 dark:group-hover:text-indigo-900/10 transition-colors">
              04
            </span>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:rotate-6 transition-transform">
              <Inbox className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Unified Master Inbox &amp; AI Reply Intent Triaging
            </h4>
            <p className={figtreeBodyClass}>
              Managing replies across 50 separate secondary email accounts manually is impossible. The platform must aggregate all incoming prospect responses into a single master inbox, categorize sentiment (interested, objection, meeting scheduled, unsubscribe), and auto-pause follow-ups on active opportunities.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 4.5 4-Step Implementation Guide */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-950 p-8 md:p-12 text-white border border-slate-800"
      >
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-indigo-400 font-bold text-xs tracking-widest uppercase mb-2">
            <Zap className="w-4 h-4" /> Outbound Protocol
          </div>
          <h3 className="text-3xl font-black tracking-tight text-white">
            4-Step Production Pipeline: From Scratch to Full Pipeline
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-400 mt-2">
            The proven technical playbook for building an outbound sales engine in 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-sm border border-indigo-500/30">
              1
            </div>
            <h4 className="text-lg font-bold text-white">Setup Secondary Domains</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Purchase 3–5 variations of your brand domain, configure SPF, DKIM, DMARC, and custom tracking domains, redirecting root traffic to your main website.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center text-sm border border-blue-500/30">
              2
            </div>
            <h4 className="text-lg font-bold text-white">Warm Up for 14 Days</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Connect accounts to automated peer warmup pools, gradually scaling daily sending volume from 2 emails to 25 emails with high inbox engagement.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-sm border border-sky-500/30">
              3
            </div>
            <h4 className="text-lg font-bold text-white">Enrich ICP Data &amp; Triggers</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Build prospect lists based on specific buying signals (funding, tech stack, new hires), verifying emails and drafting dynamic 1-to-1 hooks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-500/30">
              4
            </div>
            <h4 className="text-lg font-bold text-white">Launch &amp; Triage Inbound</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Deploy multi-step sequences across your inbox pool, letting the AI reply bot handle meeting links and routing positive leads to sales reps.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 5.0 Who Benefits Most? (Dynamic Showcase) */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 space-y-6"
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs tracking-widest uppercase mb-2">
            <Users className="w-4 h-4" /> Targeted Roles
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Who Wins with AI Cold Email Outreach Platforms?
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Vertical Buttons */}
          <div className="space-y-2">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              const isActive = activeTab === uc.id;
              return (
                <button
                  key={uc.id}
                  onClick={() => setActiveTab(uc.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all flex items-center justify-between border ${
                    isActive 
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20 translate-x-2" 
                      : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-indigo-500"}`} />
                    <span className="font-bold text-sm">{uc.label}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${isActive ? "opacity-100" : "opacity-0"}`} />
                </button>
              );
            })}
          </div>

          {/* Active Card Showcase */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {useCases.map((uc) => {
                if (uc.id !== activeTab) return null;
                return (
                  <motion.div
                    key={uc.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                      {uc.badge}
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                      {uc.title}
                    </h4>
                    <p className={figtreeBodyClass}>
                      {uc.description}
                    </p>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0" /> {uc.highlight}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* 5.5 Technical Foundation & Glossary */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
      >
        <div className="max-w-2xl mb-6">
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs tracking-widest uppercase mb-1">
            <BookOpen className="w-4 h-4" /> Technical Lexicon
          </div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Key Architectural Concepts in Modern Cold Email
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Waterfall Enrichment</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              A cascading data query architecture that searches multiple contact databases in real time, moving down the chain until a verified, deliverable email address is validated against SMTP servers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">SPF, DKIM &amp; DMARC Authentication</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              Mandatory cryptographic email authentication protocols. SPF verifies authorized sender IPs, DKIM digitally signs messages, and DMARC dictates how receivers handle unauthenticated emails to prevent spoofing.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Peer Warmup Networks</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              A distributed network of thousands of real email inboxes that exchange realistic conversational emails with your new domains, automatically marking them as important to build sender reputation with Google and Microsoft algorithms.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Dynamic Spintax Architecture</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              An algorithmic templating system where phrases are randomly selected from curated synonymous options (e.g. &apos;Hey&apos; | &apos;Hi&apos; | &apos;Hello&apos;), creating millions of unique email fingerprints to evade pattern-based spam filters.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 6.0 SEO FAQ Accordion */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions: AI Cold Email Outreach
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] text-slate-600 dark:text-slate-400 mt-1">
            Expert answers regarding email warm-up, deliverability, spam filters, and reply rates.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 dark:text-white flex items-center justify-between gap-4"
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-sm md:text-base text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3"
                    >
                      <p className={figtreeBodyClass}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>

    </article>
  );
}
