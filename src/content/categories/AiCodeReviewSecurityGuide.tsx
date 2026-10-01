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
  ShieldCheck, 
  ShieldAlert, 
  AlertTriangle, 
  GitPullRequest, 
  GitCommit, 
  Lock, 
  Bug, 
  Code2, 
  Sparkle
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is the best AI code review and security bot in 2026?",
    answer: "CodeRabbit and Snyk Code lead the automated code intelligence sector. CodeRabbit is the gold standard for conversational pull request reviews, providing line-by-line logic critiques, sequence diagram generation, and AST-level bug detection directly on GitHub and GitLab. Snyk Code dominates enterprise application security (AppSec) with real-time SAST scanning, dependency vulnerability triaging, and automated fix PR generation."
  },
  {
    question: "How do AI code review bots reduce developer fatigue and pull request backlogs?",
    answer: "Traditional code reviews often take 24 to 72 hours while senior engineers manually look for logic flaws, edge cases, and stylistic oversights. AI review bots analyze entire PR diffs in under 60 seconds, catching security vulnerabilities, memory leaks, unhandled exceptions, and missing test coverage before human teammates even open the PR."
  },
  {
    question: "Can AI security scanners detect zero-day vulnerabilities and leaked API keys?",
    answer: "Yes. Advanced tools like GitGuardian and Semgrep AI utilize semantic pattern recognition and entropy analysis. They catch hardcoded secrets (AWS keys, OpenAI tokens, database connection strings) in pre-commit git hooks before code ever reaches remote repositories, preventing catastrophic credential exposure."
  },
  {
    question: "Do AI review bots generate false positives that annoy engineering teams?",
    answer: "Legacy static analysis linters (like ESLint or SonarQube v1) suffered from high false-positive rates because they lacked holistic architectural context. 2026 AI review agents evaluate adjacent files, call hierarchies, and project documentation to contextualize code patterns, filtering out false positives with over 94% precision."
  }
];

const useCases = [
  {
    id: "eng-leaders",
    label: "Engineering Managers",
    badge: "PR Cycle Velocity",
    title: "Cut Pull Request Idle Time from 3 Days to Under 20 Minutes",
    description: "VPs of Engineering and tech leads eliminate review bottlenecks by deploying autonomous review bots that inspect incoming PRs instantly, leaving human reviewers free to focus purely on high-level architecture decisions.",
    highlight: "78% reduction in pull request review cycle turnaround times",
    icon: GitPullRequest
  },
  {
    id: "appsec-teams",
    label: "AppSec & Compliance",
    badge: "Shift-Left Security",
    title: "Enforce OWASP Top 10 & SOC2 Security Standards Automatically",
    description: "Security teams catch SQL injections, cross-site scripting (XSS), insecure deserialization, and CORS misconfigurations directly in developer git branches long before staging deployment or compliance audits.",
    highlight: "Zero critical CVE vulnerabilities reaching production master branches",
    icon: ShieldCheck
  },
  {
    id: "startup-devs",
    label: "Startup Teams",
    badge: "Senior Review Coverage",
    title: "Provide Junior Developers with Instant 24/7 Senior Mentorship",
    description: "Lean engineering startups without dedicated senior staff leverage AI bots to mentor junior developers. The bot explains why a specific data structure causes O(n²) bottlenecks and provides 1-click refactoring diffs.",
    highlight: "Accelerates junior developer onboarding and code quality by 3x",
    icon: Code2
  },
  {
    id: "oss-maintainers",
    label: "Open Source Maintainers",
    badge: "Community Triaging",
    title: "Triage Hundreds of Community Contributions Without Burnout",
    description: "Maintainers of high-traffic open-source repositories automate contributor validation, test verification, breaking change detection, and release note drafting on incoming pull requests without manual effort.",
    highlight: "Automates 90% of boilerplate contributor triage and sanity checks",
    icon: Bug
  }
];

const topAlternatives = [
  { 
    name: "CodeRabbit", 
    slug: "coderabbit",
    score: "9.9", 
    price: "Free tier / From $15/seat", 
    bestFor: "Conversational pull request reviews & AST logic debugging", 
    highlight: "The most widely adopted AI code review bot, offering line-by-line feedback, sequence diagrams, and context-aware issue detection on GitHub/GitLab." 
  },
  { 
    name: "Snyk Code", 
    slug: "snyk-code",
    score: "9.8", 
    price: "Free tier / Enterprise", 
    bestFor: "Enterprise SAST, dependency vulnerability scanning & automated 1-click fixes", 
    highlight: "Industry-leading security engine that tracks taint flows across whole codebases and automatically generates pull requests to patch CVE flaws." 
  },
  { 
    name: "Qodo (CodiumAI)", 
    slug: "qodo-ai",
    score: "9.6", 
    price: "Free tier / Pro plans", 
    bestFor: "Test generation, code integrity & PR contract verification", 
    highlight: "Comprehensive code integrity platform that validates PR behavior against intent, discovers edge cases, and generates regression test suites." 
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

export default function AiCodeReviewSecurityGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-rose-500/20 shadow-2xl shadow-rose-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/40 via-red-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-8 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-rose-400" /> 
            2026 AppSec &amp; Code Quality Deep Dive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.08]"
          >
            The Ultimate Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-300 to-amber-300 drop-shadow-sm">
              AI Code Review &amp; Security Bots
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[18px] md:text-[20px] font-normal leading-[32.4px] text-slate-300 max-w-2xl mx-auto"
          >
            How semantic taint analysis, autonomous pull request agents, and real-time CVE triage transformed software reviews from a multi-day bottleneck into a 60-second automated shield.
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
          <div className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4" /> The Shift-Left Code Intelligence Leap
          </div>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            From Superficial Linters to Deep Architectural Reasoning
          </h3>
          <p className={figtreeBodyClass}>
            For years, automated code analysis meant rigid regex linters complaining about trailing commas and missing semicolons. Meanwhile, critical SQL injections, race conditions, memory leaks, and broken authorization checks slipped directly through to production.
          </p>
          <p className={figtreeBodyClass}>
            In 2026, <strong>AI code review bots</strong> reason like Principal Engineers. They trace data flow from API controllers down to the database tier, identify logical flaws across multiple microservices, and leave courteous, actionable GitHub review comments complete with copy-paste refactoring suggestions.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              <span className="inline-block w-10 h-10 rounded-full bg-rose-500/20 border-2 border-white dark:border-slate-800 text-rose-600 dark:text-rose-400 font-bold text-xs flex items-center justify-center">60s</span>
              <span className="inline-block w-10 h-10 rounded-full bg-red-500/20 border-2 border-white dark:border-slate-800 text-red-600 dark:text-red-400 font-bold text-xs flex items-center justify-center">0 CVE</span>
              <span className="inline-block w-10 h-10 rounded-full bg-amber-500/20 border-2 border-white dark:border-slate-800 text-amber-600 dark:text-amber-400 font-bold text-xs flex items-center justify-center">94%</span>
            </div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Audit velocity, zero undetected vulnerabilities, and high precision with low false positives.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="relative">
          <div className="rounded-[2.5rem] bg-gradient-to-tr from-rose-600 to-amber-600 p-1 shadow-2xl">
            <div className="rounded-[2.4rem] bg-slate-950 p-6 md:p-8 text-white relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-400 animate-pulse" /> coderabbit: pr-audit-v4.1
                </div>
              </div>

              {/* Bot Review Mockup UI */}
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                  <div className="text-xs text-rose-400 font-bold mb-1 flex items-center justify-between">
                    <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5" /> SECURITY ALERT: CWE-89</span>
                    <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-mono">Severity: Critical</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Unsanitized user input from <code className="text-amber-300">req.query.userId</code> is concatenated directly into raw SQL query without parameterized binding.
                  </p>
                </div>

                <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-800">
                    <span className="flex items-center gap-1.5"><GitCommit className="w-3.5 h-3.5 text-rose-400" /> Suggested 1-Click Patch</span>
                    <span className="text-emerald-400 font-bold">Safe Parameterized Query</span>
                  </div>
                  <div className="bg-rose-950/40 text-rose-300 p-2 rounded border border-rose-500/30 font-mono text-xs">
                    {'- const query = `SELECT * FROM users WHERE id = \'${userId}\'`;'}
                  </div>
                  <div className="bg-emerald-950/40 text-emerald-300 p-2 rounded border border-emerald-500/30 font-mono text-xs">
                    {'+ const user = await prisma.user.findUnique({ where: { id: userId } });'}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-rose-950 to-slate-900 rounded-2xl p-4 border border-rose-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-sans">Secret Scanner Intercept</div>
                      <div className="text-[11px] text-slate-400 font-mono">0 Leaked API Keys Detected</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-sans">
                    Passed
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-900">
                <span>AST Path: /api/v1/auth/session.ts</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> All 24 Security Checks Passed
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* 2.5 Calculate Code Review ROI */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-950 p-6 md:p-10 border border-slate-800 text-white shadow-xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-rose-400 font-bold text-xs tracking-widest uppercase mb-2">
              <Calculator className="w-4 h-4" /> Engineering Velocity ROI
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Manual Senior Review vs. AI Automated Security Bot ROI
            </h3>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-400 mt-1">
              Compare senior engineer hourly review drag, PR idle time, and vulnerability escape costs.
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
              Manual Human PR Review
            </button>
            <button
              onClick={() => setRoiMode("ai")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                roiMode === "ai" 
                  ? "bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md shadow-rose-500/20" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AI Security Bot
            </button>
          </div>
        </div>

        {/* Dynamic Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <Timer className="w-4 h-4 text-rose-400" /> Pull Request Idle Time
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              {roiMode === "traditional" ? "24 to 72 Hours" : "< 60 Seconds"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Developers wait days for senior teammates to find time between meetings to review open PRs."
                : "Instant line-by-line automated review posted the exact second a developer opens or updates a pull request."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <DollarSign className="w-4 h-4 text-emerald-400" /> Review Cost Per Sprint
            </div>
            <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-2">
              {roiMode === "traditional" ? "$3,200 – $7,500" : "$15 – $30/mo"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Senior and staff engineer salaries consumed by manual syntax checks and routine edge case verification."
                : "Low flat monthly seat license with unlimited PR reviews, dependency scans, and secret detections."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <LineChart className="w-4 h-4 text-amber-400" /> Critical Bug Escape Rate
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              {roiMode === "traditional" ? "12% to 18%" : "< 0.8%"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Human reviewers suffer from cognitive fatigue on large diffs, frequently missing subtle boundary conditions."
                : "Continuous exhaustive symbolic execution and AST traversal catches logic flaws regardless of PR line count."}
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-gradient-to-r from-rose-950 via-slate-900 to-red-950 p-8 md:p-12 border border-rose-500/30 text-white shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30">
              <Crown className="w-3.5 h-3.5 text-rose-400" /> Editor&apos;s Benchmark Choice 2026
            </div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              CodeRabbit &amp; Snyk Code: The Ultimate Code Defense Duo
            </h3>
            <p className={figtreeDarkBodyClass}>
              <strong>CodeRabbit</strong> delivers conversational, human-grade pull request reviews that developers actually love reading, complete with interactive architecture sequence diagrams. <strong>Snyk Code</strong> provides military-grade static analysis that shifts security left into developer branch workflows.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" /> Contextual multi-file PR diff reviews
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" /> 1-Click committable code suggestions
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" /> OWASP Top 10 &amp; CWE taint tracking
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" /> Real-time secret and API token leak prevention
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link 
              href="/tool/coderabbit"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 text-white font-bold text-base shadow-lg shadow-rose-500/25 hover:opacity-95 transition-all hover:scale-[1.02]"
            >
              Explore CodeRabbit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/tool/snyk-code"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all text-center"
            >
              View Snyk Code
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
            Top 3 Code Review &amp; Security Tools Compared
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-600 dark:text-slate-400 mt-2">
            Benchmarked across complex multi-file pull requests, security compliance, and precision rates.
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
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300">
                    Score {alt.score}/10
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{alt.price}</span>
                </div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">{alt.name}</h4>
                <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 mb-3">{alt.bestFor}</p>
                <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {alt.highlight}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link 
                  href={`/tool/${alt.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
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
              <GitPullRequest className="w-5 h-5 text-rose-500" /> Pull Request Triage &amp; Architectural Review
            </h4>
            <p className={figtreeBodyClass}>
              For fast-moving product teams looking to eliminate developer wait times, <em>CodeRabbit</em> is supreme. It integrates seamlessly into GitHub/GitLab PRs, summarizing diffs, detecting regressions, and engaging in multi-turn discussions right in PR comments.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-500" /> Deep SAST &amp; Dependency Vulnerability Governance
            </h4>
            <p className={figtreeBodyClass}>
              For regulated industries (fintech, healthcare, enterprise defense), <em>Snyk Code</em> and <em>GitGuardian</em> provide indispensable security gates. They scan deep dependency trees for known zero-day CVEs and intercept secrets before they hit git history.
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
          <div className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-xs tracking-widest uppercase mb-2">
            <BookOpen className="w-4 h-4" /> Technical Evaluation Criteria
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            How to Evaluate an AI Code Review &amp; Security Bot
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-600 dark:text-slate-400 mt-1">
            Four non-negotiable benchmarks when selecting automated code review software in 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-rose-50 dark:group-hover:text-rose-900/10 transition-colors">
              01
            </span>
            <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 flex items-center justify-center text-rose-600 dark:text-rose-400 mb-6 group-hover:rotate-6 transition-transform">
              <Sparkle className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Context-Aware False-Positive Suppression
            </h4>
            <p className={figtreeBodyClass}>
              The number one failure mode of code review bots is noise. If an automated tool leaves 20 trivial comments on every PR, developers will simply ignore or disable it. Premier bots cross-reference existing utility functions and project linters to keep false-positive rates below 6%.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-rose-50 dark:group-hover:text-rose-900/10 transition-colors">
              02
            </span>
            <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 flex items-center justify-center text-red-600 dark:text-red-400 mb-6 group-hover:rotate-6 transition-transform">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              OWASP Top 10 &amp; Semantic Taint Tracking
            </h4>
            <p className={figtreeBodyClass}>
              Ensure the tool conducts deep dataflow analysis. It must follow user inputs from HTTP route handlers through middleware functions down to database calls to flag injection risks and access control vulnerabilities before code merges.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-rose-50 dark:group-hover:text-rose-900/10 transition-colors">
              03
            </span>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 group-hover:rotate-6 transition-transform">
              <Lock className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              SOC2 &amp; Zero Code Retention Privacy
            </h4>
            <p className={figtreeBodyClass}>
              Verify that the vendor complies with enterprise privacy standards. Models must guarantee that your proprietary codebase is never stored on external disks or used to train public foundation models without explicit corporate authorization.
            </p>
          </div>

          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-rose-50 dark:group-hover:text-rose-900/10 transition-colors">
              04
            </span>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:rotate-6 transition-transform">
              <GitCommit className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              One-Click Committable GitHub Diff Suggestions
            </h4>
            <p className={figtreeBodyClass}>
              Rather than merely describing an issue conceptually, top-tier review agents provide formatted GitHub suggestion blocks. A developer can click &quot;Commit suggestion&quot; directly in the GitHub UI to apply the fix without context-switching back to their local terminal.
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
          <div className="inline-flex items-center gap-2 text-rose-400 font-bold text-xs tracking-widest uppercase mb-2">
            <Zap className="w-4 h-4" /> Deployment Protocol
          </div>
          <h3 className="text-3xl font-black tracking-tight text-white">
            4-Step Rollout: Integrating AI Review Bots into Your CI/CD
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-400 mt-2">
            How engineering organizations configure autonomous code review guards in under 15 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-sm border border-rose-500/30">
              1
            </div>
            <h4 className="text-lg font-bold text-white">Install GitHub App</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Authorize the AI bot via the GitHub/GitLab marketplace to monitor pull request events with granular repository read permissions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 font-bold flex items-center justify-center text-sm border border-red-500/30">
              2
            </div>
            <h4 className="text-lg font-bold text-white">Define Team Rules</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Commit a project configuration file (e.g. <code className="text-xs bg-slate-800 px-1 py-0.5 rounded">.coderabbit.yaml</code>) defining custom coding standards, tone guidelines, and sensitive paths.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-sm border border-amber-500/30">
              3
            </div>
            <h4 className="text-lg font-bold text-white">Autonomous PR Triage</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              On every push, the bot generates a high-level summary, sequence diagram, and line-by-line comments for security vulnerabilities and logic bugs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-500/30">
              4
            </div>
            <h4 className="text-lg font-bold text-white">Merge with Confidence</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Developers apply committable patches, verify automated test checks, and merge pull requests with verified zero-regression security gates.
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
          <div className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-xs tracking-widest uppercase mb-2">
            <ShieldCheck className="w-4 h-4" /> Targeted Organizations
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Who Unlocks Maximum Value from AI Code Review Bots?
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
                      ? "bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-500/20 translate-x-2" 
                      : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-rose-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-rose-500"}`} />
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 text-xs font-bold">
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
          <div className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-xs tracking-widest uppercase mb-1">
            <BookOpen className="w-4 h-4" /> Technical Lexicon
          </div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Key Architectural Concepts in AI Code Security
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Static Application Security Testing (SAST)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              A white-box security testing methodology that scans source code before compilation to detect security vulnerabilities, insecure coding patterns, and compliance violations without executing the application.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Inter-Procedural Taint Analysis</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              The tracking of unvalidated user input (&quot;tainted sources&quot;) across multiple function calls, modules, and API boundaries until it reaches sensitive execution points (&quot;sinks&quot;) such as SQL queries, file writes, or shell commands.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Software Bill of Materials (SBOM)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              A complete, machine-readable inventory of all open-source libraries, packages, and transitive dependencies used within a codebase, cross-referenced against the National Vulnerability Database (NVD) for active CVE disclosures.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Symbolic Execution &amp; SAT Solvers</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              Mathematical evaluation of code execution paths where variables are represented as algebraic symbols rather than concrete values, allowing the engine to formally prove whether a crash or buffer overflow is mathematically reachable.
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
            Frequently Asked Questions: AI Code Review &amp; Security Bots
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] text-slate-600 dark:text-slate-400 mt-1">
            Expert answers regarding pull request bots, false positives, compliance, and AppSec automation.
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
