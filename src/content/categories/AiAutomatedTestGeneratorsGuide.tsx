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
  CheckSquare, 
  Bug, 
  Terminal, 
  Activity, 
  ShieldCheck, 
  Layers, 
  RefreshCw, 
  Workflow, 
  Sparkle
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is the best AI automated test generator in 2026?",
    answer: "Qodo (formerly CodiumAI) and Keploy lead the automated software testing space. Qodo is the industry standard for IDE-based unit test and integration test generation across TypeScript, Python, and Go, discovering edge cases and boundary conditions developers overlook. Keploy dominates zero-code API and regression testing by converting real network traffic and database calls into automated test cases with zero manual mock creation."
  },
  {
    question: "Can AI automated test generators write meaningful tests or just trivial asserts?",
    answer: "Modern testing models perform deep symbolic execution and mutation testing analysis. Instead of asserting obvious 'happy paths', they construct pathological edge cases—such as integer overflows, database connection timeouts, malformed UTF-8 payloads, and null pointer exceptions—achieving true branch coverage rather than superficial line coverage."
  },
  {
    question: "How do AI tools solve brittle, flaky end-to-end (E2E) UI tests?",
    answer: "Legacy Selenium and Cypress tests frequently break when frontend developers change CSS class names or DOM hierarchies. AI E2E platforms (like Testim and Mabl) utilize 'self-healing locators'. The AI inspects dozens of visual, accessibility, and spatial element attributes simultaneously. If a class name changes, the engine automatically resolves the target button without failing the CI/CD pipeline."
  },
  {
    question: "Can AI test generators automatically mock third-party APIs and databases?",
    answer: "Yes. Open-source tools like Keploy use eBPF kernel network taps to record live HTTP requests, gRPC calls, and database read/writes in staging environments. The engine automatically synthesizes deterministic mock fixtures, allowing your test suite to run in parallel without requiring live external third-party API keys."
  }
];

const useCases = [
  {
    id: "backend-devs",
    label: "Backend Developers",
    badge: "95% Branch Coverage",
    title: "Generate Exhaustive Unit Tests and Edge-Case Suites in Seconds",
    description: "Developers generate robust Vitest, Jest, and PyTest suites directly inside VS Code and JetBrains IDEs. The AI identifies unhandled exceptions, constructs mock databases, and writes parameterized tests with a single shortcut.",
    highlight: "Saves 25% of developer sprint time previously lost to manual test writing",
    icon: Terminal
  },
  {
    id: "qa-engineers",
    label: "QA & SDET Teams",
    badge: "Zero Flakiness",
    title: "Deploy Self-Healing Playwright & Cypress E2E Suites",
    description: "Quality engineering teams eliminate maintenance churn from flaky UI tests. Self-healing algorithms adapt to dynamic frontend refactors, while automated exploratory bots discover broken checkout funnels across multiple browsers.",
    highlight: "85% reduction in false-positive test failure maintenance hours",
    icon: CheckSquare
  },
  {
    id: "devops-leads",
    label: "DevOps & CI/CD Teams",
    badge: "Release Velocity",
    title: "Accelerate Build Pipelines with Intelligent Test Impact Analysis",
    description: "Engineering teams cut continuous integration build times by running only the specific test suites affected by recent git commits, executing comprehensive regression testing without stalling release velocity.",
    highlight: "CI pipeline execution runtimes slashed from 45 minutes to 4 minutes",
    icon: Workflow
  },
  {
    id: "startups",
    label: "Fast-Paced Startups",
    badge: "Regression Shield",
    title: "Achieve Enterprise-Grade Test Coverage Without Hiring Dedicated QA",
    description: "High-velocity startups ship new user features daily without fear of breaking legacy billing or authentication flows, leveraging autonomous traffic-replay testing to catch regressions before users do.",
    highlight: "Zero dedicated QA headcount needed to maintain 90%+ regression safety",
    icon: ShieldCheck
  }
];

const topAlternatives = [
  { 
    name: "Qodo (CodiumAI)", 
    slug: "qodo-ai",
    score: "9.9", 
    price: "Free tier / From $19/mo", 
    bestFor: "Developer-first unit test synthesis & edge-case discovery in IDEs", 
    highlight: "The premier AI code integrity engine, generating context-aware unit tests, behavior analysis, and pull request regression guards." 
  },
  { 
    name: "Keploy", 
    slug: "keploy",
    score: "9.8", 
    price: "Free & Open Source", 
    bestFor: "Zero-code API testing & automated mock generation from live traffic", 
    highlight: "Revolutionary eBPF-powered engine that transforms live staging API requests and database queries into automated, deterministic test suites." 
  },
  { 
    name: "Diffblue Cover", 
    slug: "diffblue-cover",
    score: "9.6", 
    price: "Enterprise licensing", 
    bestFor: "Automated Java enterprise unit test generation via reinforcement learning", 
    highlight: "Reinforcement-learning system built by Oxford researchers that autonomously writes 100% human-readable Java unit test suites for enterprise monoliths." 
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

export default function AiAutomatedTestGeneratorsGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/40 via-orange-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-8 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-amber-400" /> 
            2026 Quality Engineering &amp; Verification Deep Dive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.08]"
          >
            The Ultimate Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300 drop-shadow-sm">
              AI Unit &amp; E2E Test Generators
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[18px] md:text-[20px] font-normal leading-[32.4px] text-slate-300 max-w-2xl mx-auto"
          >
            How deep symbolic execution, traffic-replay mock synthesizers, and self-healing UI locators transformed test automation from a tedious developer chore into an autonomous release shield.
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
          <div className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm tracking-widest uppercase">
            <CheckSquare className="w-4 h-4" /> The Autonomous Testing Shift
          </div>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            From Boilerplate Mock Drag to True Pathological Edge-Case Coverage
          </h3>
          <p className={figtreeBodyClass}>
            Traditionally, writing automated tests consumed over 30% of engineering bandwidth. Developers spent hours manually setting up database mocks, wiring dependency injection stubs, and maintaining brittle CSS selectors that broke on every minor frontend commit.
          </p>
          <p className={figtreeBodyClass}>
            In 2026, <strong>AI test generation engines</strong> combine symbolic AST execution with real-time network traffic capture. They analyze function execution graphs, synthesize deterministic mock data, and generate exhaustive Vitest, PyTest, and Playwright suites that actively hunt for race conditions and uncaught exceptions.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              <span className="inline-block w-10 h-10 rounded-full bg-amber-500/20 border-2 border-white dark:border-slate-800 text-amber-600 dark:text-amber-400 font-bold text-xs flex items-center justify-center">95%</span>
              <span className="inline-block w-10 h-10 rounded-full bg-orange-500/20 border-2 border-white dark:border-slate-800 text-orange-600 dark:text-orange-400 font-bold text-xs flex items-center justify-center">0 Mocks</span>
              <span className="inline-block w-10 h-10 rounded-full bg-yellow-500/20 border-2 border-white dark:border-slate-800 text-yellow-600 dark:text-yellow-400 font-bold text-xs flex items-center justify-center">&lt;15s</span>
            </div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Branch coverage, zero manual fixture boilerplate, and sub-15-second test synthesis.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="relative">
          <div className="rounded-[2.5rem] bg-gradient-to-tr from-amber-600 to-orange-600 p-1 shadow-2xl">
            <div className="rounded-[2.4rem] bg-slate-950 p-6 md:p-8 text-white relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> qodo-test-agent v4.8
                </div>
              </div>

              {/* Synthesizer Preview UI */}
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                  <div className="text-xs text-amber-400 font-bold mb-1 flex items-center justify-between">
                    <span>TARGET FUNCTION ANALYZED</span>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">AST: calculateDiscount()</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Detected 4 logical branches: Valid tiered coupon, expired voucher, boundary order value ($0.00), and negative quantity exception.
                  </p>
                </div>

                <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-800">
                    <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-amber-400" /> Generated Vitest Suite</span>
                    <span className="text-emerald-400 font-bold">Passing 4/4</span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded border border-slate-800/80 text-[11px] leading-relaxed text-slate-300 overflow-x-auto">
                    <span className="text-purple-400">describe</span>(&apos;calculateDiscount&apos;, () =&gt; &#123;<br />
                    &nbsp;&nbsp;<span className="text-cyan-400">it</span>(&apos;throws on negative order value&apos;, () =&gt; &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">expect</span>(() =&gt; calculateDiscount(-10)).<span className="text-emerald-400">toThrow</span>(&apos;Invalid amount&apos;);<br />
                    &nbsp;&nbsp;&#125;);<br />
                    &#125;);
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-950 to-orange-950 rounded-2xl p-4 border border-amber-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                      <RefreshCw className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-sans">Self-Healing Playwright E2E</div>
                      <div className="text-[11px] text-slate-400 font-mono">Selector auto-healed (data-testid fallback)</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-sans">
                    0 Flakes
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-900">
                <span>Branch Coverage: 98.2%</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> All Mutation Tests Survived
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* 2.5 Calculate QA Engineering ROI */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-950 p-6 md:p-10 border border-slate-800 text-white shadow-xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs tracking-widest uppercase mb-2">
              <Calculator className="w-4 h-4" /> Quality Assurance Economics
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Manual Test Writing vs. AI Automated Test Synthesis ROI
            </h3>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-400 mt-1">
              Compare developer sprint overhead, test maintenance hours, and automated regression protection.
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
              Manual QA &amp; Test Writing
            </button>
            <button
              onClick={() => setRoiMode("ai")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                roiMode === "ai" 
                  ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-500/20" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AI Test Generators
            </button>
          </div>
        </div>

        {/* Dynamic Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <Timer className="w-4 h-4 text-amber-400" /> Sprint Time Spent on Tests
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              {roiMode === "traditional" ? "25% to 35%" : "< 2%"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Writing verbose mocks, setting up test fixtures, debugging flaky Cypress scripts, and rewriting snapshots."
                : "Autonomous test generation in one click directly in your IDE or auto-captured from staging network traffic."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <DollarSign className="w-4 h-4 text-emerald-400" /> Testing Cost Per Sprint
            </div>
            <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-2">
              {roiMode === "traditional" ? "$4,500 – $9,000" : "$19 – $49/mo"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Senior software engineering hours diverted from product shipping to tedious mock wiring and test maintenance."
                : "Flat low-cost subscription with unlimited test suite synthesis, mutation testing, and CI pipeline checks."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <LineChart className="w-4 h-4 text-orange-400" /> Branch &amp; Edge Case Coverage
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              {roiMode === "traditional" ? "Superficial (60%)" : "Exhaustive (95%)"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Developers rush to meet deadlines, testing only the happy path and skipping complex failure scenarios."
                : "Symbolic execution algorithms systematically explore every possible execution branch and boundary condition."}
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-gradient-to-r from-amber-950 via-slate-900 to-orange-950 p-8 md:p-12 border border-amber-500/30 text-white shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <Crown className="w-3.5 h-3.5 text-amber-400" /> Editor&apos;s Benchmark Choice 2026
            </div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              Qodo &amp; Keploy: The Twin Engines of Software Verification
            </h3>
            <p className={figtreeDarkBodyClass}>
              <strong>Qodo (formerly CodiumAI)</strong> provides developers with unprecedented IDE-level unit test intelligence, analyzing AST boundaries and generating comprehensive test suites with zero hallucinated imports. <strong>Keploy</strong> redefines API testing by turning live network traffic into deterministic regression tests with zero manual mocks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Full AST boundary &amp; edge case exploration
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Zero-code API traffic capture &amp; mock generation
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Self-healing Playwright &amp; Cypress UI test locators
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Seamless GitHub Actions &amp; CI/CD pipeline integration
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link 
              href="/tool/qodo-ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-base shadow-lg shadow-amber-500/25 hover:opacity-95 transition-all hover:scale-[1.02]"
            >
              Explore Qodo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/tool/keploy"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all text-center"
            >
              View Keploy
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
            Top 3 AI Automated Test Generators Compared
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-600 dark:text-slate-400 mt-2">
            Selected by our quality engineering lab based on mutation score, mock fidelity, and CI integration.
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
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">
                    Score {alt.score}/10
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{alt.price}</span>
                </div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">{alt.name}</h4>
                <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-3">{alt.bestFor}</p>
                <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {alt.highlight}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link 
                  href={`/tool/${alt.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
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
              <Terminal className="w-5 h-5 text-amber-500" /> Developer-First Unit &amp; Integration Testing
            </h4>
            <p className={figtreeBodyClass}>
              For engineering teams focused on bulletproof code logic and preventing edge-case bugs inside VS Code or JetBrains, <em>Qodo</em> is superior. It operates directly at the syntax level, proposing unit tests and boundary assertions that reflect the developer&apos;s true intent.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-orange-500" /> Zero-Code API &amp; Microservice Regression
            </h4>
            <p className={figtreeBodyClass}>
              For distributed microservice architectures where mocking external databases and third-party APIs is painful, <em>Keploy</em> is a revelation. It listens to real user or staging traffic, automatically capturing exact request/response payloads as replayable test cases.
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
          <div className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs tracking-widest uppercase mb-2">
            <BookOpen className="w-4 h-4" /> Technical Evaluation Criteria
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            How to Evaluate an AI Automated Test Generator in 2026
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-600 dark:text-slate-400 mt-1">
            Four critical engineering benchmarks when selecting an automated test generation platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-amber-50 dark:group-hover:text-amber-900/10 transition-colors">
              01
            </span>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 group-hover:rotate-6 transition-transform">
              <Sparkle className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Mutation Testing Score &amp; True Fault Detection
            </h4>
            <p className={figtreeBodyClass}>
              High line coverage is meaningless if tests don&apos;t actually catch bugs. The gold standard for evaluating AI test generators is <strong>mutation testing score</strong>. When deliberate bugs (&quot;mutants&quot;) are injected into your source code, does the generated test suite fail as expected? Top-tier tools achieve over 88% mutation kill rates.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-amber-50 dark:group-hover:text-amber-900/10 transition-colors">
              02
            </span>
            <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 group-hover:rotate-6 transition-transform">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Automated Mock &amp; Fixture Generation
            </h4>
            <p className={figtreeBodyClass}>
              Evaluate how the platform handles external dependencies. The tool must automatically synthesize realistic mock database entities, HTTP stubs, and authorization tokens without requiring you to manually write hundreds of lines of boilerplate setup code.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-amber-50 dark:group-hover:text-amber-900/10 transition-colors">
              03
            </span>
            <div className="w-12 h-12 rounded-2xl bg-yellow-50 dark:bg-yellow-950/60 border border-yellow-200 dark:border-yellow-800 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-6 group-hover:rotate-6 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Self-Healing E2E Locators
            </h4>
            <p className={figtreeBodyClass}>
              For UI testing with Playwright or Cypress, ensure the platform uses multi-attribute self-healing locators. If a frontend engineer changes a button ID or CSS class, the AI should dynamically locate the element via accessibility roles and visual positioning.
            </p>
          </div>

          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-amber-50 dark:group-hover:text-amber-900/10 transition-colors">
              04
            </span>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:rotate-6 transition-transform">
              <Workflow className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Smart Test Impact Analysis in CI/CD
            </h4>
            <p className={figtreeBodyClass}>
              Running every single test on every pull request grinds CI pipelines to a halt. Premier testing tools map your codebase AST dependencies to run only the tests impacted by modified files, giving developers instant PR feedback in under 2 minutes while maintaining comprehensive nightly regression runs.
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
          <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs tracking-widest uppercase mb-2">
            <Zap className="w-4 h-4" /> Implementation Protocol
          </div>
          <h3 className="text-3xl font-black tracking-tight text-white">
            4-Step Production Pipeline: From Zero Tests to 95% Coverage
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-400 mt-2">
            The standard methodology for rolling out autonomous testing across active codebases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-sm border border-amber-500/30">
              1
            </div>
            <h4 className="text-lg font-bold text-white">Analyze Code AST &amp; Gaps</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Connect your GitHub repository or IDE plugin to generate a coverage gap report identifying high-risk functions lacking branch verification.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 font-bold flex items-center justify-center text-sm border border-orange-500/30">
              2
            </div>
            <h4 className="text-lg font-bold text-white">Capture Staging Traffic</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Run staging test runs with Keploy or eBPF agents to record real API payloads, generating exact deterministic mocks for third-party endpoints.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 font-bold flex items-center justify-center text-sm border border-yellow-500/30">
              3
            </div>
            <h4 className="text-lg font-bold text-white">Synthesize Unit &amp; E2E</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Generate native Vitest, Jest, and Playwright test files with descriptive test names, pathological edge cases, and self-healing UI assertions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-500/30">
              4
            </div>
            <h4 className="text-lg font-bold text-white">Automate CI Release Gates</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Add automated PR test generation to GitHub Actions, blocking pull requests that introduce regressions or decrease branch coverage.
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
          <div className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs tracking-widest uppercase mb-2">
            <CheckSquare className="w-4 h-4" /> Targeted Engineering Roles
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Who Gains the Most from AI Automated Testing Tools?
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
                      ? "bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-500/20 translate-x-2" 
                      : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-amber-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-amber-500"}`} />
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs font-bold">
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
          <div className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs tracking-widest uppercase mb-1">
            <BookOpen className="w-4 h-4" /> Technical Architecture
          </div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Key Architectural Concepts in AI Test Automation
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Symbolic Path Exploration</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              A formal method that parses code into mathematical constraints to discover input values that trigger deeply nested conditional branches (if/else chains, catch blocks, and boundary edge cases).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">eBPF Network Capture</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              Extended Berkeley Packet Filter technology running inside the Linux kernel to intercept network syscalls, capturing inbound HTTP requests and outbound database queries without application code modification.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Mutation Score Testing</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              A quality metric assessing test effectiveness by programmatically modifying operators (e.g. changing &gt; to &gt;=). If the test suite still passes, the mutant survived, indicating inadequate test assertions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Self-Healing DOM Tree Locators</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              Computer vision and multi-attribute scoring that dynamically re-identifies changed UI buttons and form fields based on surrounding text, ARIA roles, and visual coordinates when HTML selectors change.
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
            Frequently Asked Questions: AI Automated Test Generators
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] text-slate-600 dark:text-slate-400 mt-1">
            Expert answers regarding unit test quality, flaky E2E testing, and CI/CD pipelines.
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
