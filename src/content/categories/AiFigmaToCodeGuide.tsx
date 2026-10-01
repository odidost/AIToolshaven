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
  Code2, 
  Palette, 
  Layers, 
  Component, 
  MonitorSmartphone, 
  Layout, 
  GitBranch, 
  Sparkle
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is the best AI Figma-to-Code generator in 2026?",
    answer: "Locofy.ai and Visual Copilot by Builder.io lead the design-to-code category. Locofy.ai excels at converting full Figma design systems into production-ready modular React, Next.js, Vue, and React Native components with clean props and responsive flexbox layouts. Visual Copilot by Builder.io stands out for transforming Figma frames directly into headless CMS components with visual dragging and multi-framework export."
  },
  {
    question: "Does AI Figma-to-code software produce clean code or bloated 'div soup'?",
    answer: "Early converters generated absolute-positioned, unmaintainable 'spaghetti HTML'. In 2026, AI engines map Figma Auto-Layout hierarchies into semantic HTML5, modern Tailwind CSS utility classes, and typed React components. The AI detects buttons, inputs, modals, and navbars, extracting reusable atomic components with zero hardcoded pixel coordinates."
  },
  {
    question: "Do my Figma files need to be perfectly organized with Auto-Layout?",
    answer: "While clean Auto-Layout frames yield the highest code fidelity, modern AI converters (like Locofy Lightning and Builder.io) include automated 'Auto-Layout Fixers'. The AI analyzes visual spatial bounding boxes and automatically fixes missing parent containers, padding imbalances, and responsive constraints before generating code."
  },
  {
    question: "Can I export design tokens (colors, typography, spacing) directly into Tailwind CSS?",
    answer: "Yes. Professional tools synchronize your Figma Local Variables and Color/Typography Styles directly into your tailwind.config.ts or CSS variables file. When designers update hex codes or border radii in Figma, the changes propagate to the frontend codebase with a single git sync."
  }
];

const useCases = [
  {
    id: "frontend-devs",
    label: "Frontend Developers",
    badge: "80% Time Saved",
    title: "Eliminate Manual UI Slicing and Focus on Core Business Logic",
    description: "Frontend engineers stop spending hours writing boilerplate CSS, translating pixel padding, and slicing vector icons. AI converts complex Figma files into semantic Tailwind JSX, leaving developers free to wire state, write tRPC queries, and build API integrations.",
    highlight: "Saves 15–25 hours per sprint on manual frontend CSS implementation",
    icon: Code2
  },
  {
    id: "uiux-designers",
    label: "UI/UX Designers",
    badge: "Design Parity",
    title: "Ship Live Interactive Prototypes with 100% Design System Parity",
    description: "Designers bridge the handoff chasm by generating functional, responsive web prototypes directly from their Figma canvas. Test responsive tablet and mobile breakpoints live in the browser without waiting weeks for engineering bandwidth.",
    highlight: "Zero pixel drift between approved Figma designs and production code",
    icon: Palette
  },
  {
    id: "design-agencies",
    label: "Design Studios & Agencies",
    badge: "Higher Margins",
    title: "Deliver Fully Coded Web Apps Alongside Figma Client Deliverables",
    description: "Creative agencies expand their service offerings from static Figma mockups to full production Next.js frontend codebases, dramatically increasing client contract values while shortening delivery timelines.",
    highlight: "Double project revenue by delivering full-stack frontend code bundles",
    icon: Layout
  },
  {
    id: "mobile-teams",
    label: "Cross-Platform Teams",
    badge: "Web & Mobile",
    title: "Generate React Native & Flutter Mobile Apps from Unified Canvas",
    description: "Mobile teams convert desktop web layouts into adaptive iOS and Android codebases using responsive component libraries like NativeWind and Flutter widgets with shared design token architectures.",
    highlight: "Simultaneous React, React Native, and Flutter code generation",
    icon: MonitorSmartphone
  }
];

const topAlternatives = [
  { 
    name: "Locofy.ai", 
    slug: "locofy-ai",
    score: "9.9", 
    price: "Free tier / From $19/mo", 
    bestFor: "Enterprise React, Next.js, and React Native frontend codebases", 
    highlight: "The industry benchmark for design-to-code, featuring Locofy Lightning for 1-click Auto-Layout fixes and clean componentized TypeScript." 
  },
  { 
    name: "Visual Copilot (Builder.io)", 
    slug: "visual-copilot",
    score: "9.8", 
    price: "Free tier / Pro plans", 
    bestFor: "Figma to Headless CMS, React, Vue, Svelte, and Angular", 
    highlight: "Converts Figma frames directly into clean components with support for over 15 frontend frameworks and integrated visual page-building." 
  },
  { 
    name: "Anima", 
    slug: "anima-ai",
    score: "9.6", 
    price: "Free tier / From $15/mo", 
    bestFor: "Interactive high-fidelity prototypes and Storybook design systems", 
    highlight: "Seamless integration with Storybook, allowing teams to translate Figma components into living design system code with interactive state." 
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

export default function AiFigmaToCodeGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-indigo-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-8 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-purple-400" /> 
            2026 UI Engineering &amp; Design Handoff Deep Dive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.08]"
          >
            The Ultimate Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-300 drop-shadow-sm">
              AI Figma-to-Code &amp; UI Generators
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[18px] md:text-[20px] font-normal leading-[32.4px] text-slate-300 max-w-2xl mx-auto"
          >
            How deep visual AST transformers, automated Auto-Layout normalization, and design token synchronization transformed static vector mockups into production-ready React components.
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
          <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm tracking-widest uppercase">
            <Layers className="w-4 h-4" /> The Modern Handoff Revolution
          </div>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            From Fragile Absolute Pixels to Idiomatic Responsive Components
          </h3>
          <p className={figtreeBodyClass}>
            Historically, exporting Figma to code produced horrific spaghetti markup. Everything was hardcoded with absolute coordinates, nested under dozens of meaningless wrapper tags, and impossible to maintain or hook into dynamic database state.
          </p>
          <p className={figtreeBodyClass}>
            In 2026, <strong>AI UI generators</strong> understand visual design semantics. They recognize navigation headers, cards, carousels, and input fields. They map auto-layout constraints to fluid flexbox and grid layouts, extracting CSS variables, reusable sub-components, and typed TypeScript props automatically.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              <span className="inline-block w-10 h-10 rounded-full bg-purple-500/20 border-2 border-white dark:border-slate-800 text-purple-600 dark:text-purple-400 font-bold text-xs flex items-center justify-center">100%</span>
              <span className="inline-block w-10 h-10 rounded-full bg-indigo-500/20 border-2 border-white dark:border-slate-800 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center justify-center">Tailwind</span>
              <span className="inline-block w-10 h-10 rounded-full bg-pink-500/20 border-2 border-white dark:border-slate-800 text-pink-600 dark:text-pink-400 font-bold text-xs flex items-center justify-center">Next.js</span>
            </div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Zero layout drift, complete design token synchronization, and modular React architectures.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="relative">
          <div className="rounded-[2.5rem] bg-gradient-to-tr from-purple-600 to-indigo-600 p-1 shadow-2xl">
            <div className="rounded-[2.4rem] bg-slate-950 p-6 md:p-8 text-white relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 flex items-center gap-1.5">
                  <Component className="w-3.5 h-3.5 text-purple-400 animate-pulse" /> figma-to-react-v5.2
                </div>
              </div>

              {/* Code Generator Visualizer */}
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                  <div className="text-xs text-purple-400 font-bold mb-1 flex items-center justify-between">
                    <span>DETECTED FIGMA NODE</span>
                    <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-mono">Auto-Layout: Row</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Frame 824: <span className="text-pink-300 font-mono">&quot;PricingCard&quot;</span> | Responsive Breakpoint: Mobile, Tablet, Desktop
                  </p>
                </div>

                <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-800">
                    <span className="flex items-center gap-1.5"><Code2 className="w-3.5 h-3.5 text-purple-400" /> Generated TypeScript JSX</span>
                    <span className="text-emerald-400 font-bold">Clean Tailwind Classes</span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded border border-slate-800/80 text-[11px] leading-relaxed text-slate-300 overflow-x-auto">
                    <span className="text-purple-400">export function</span> <span className="text-amber-300">PricingCard</span>(&#123; plan, price, features &#125;) &#123;<br />
                    &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-cyan-400">div</span> <span className="text-emerald-400">className</span>=&quot;flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 shadow-md hover:shadow-xl transition-all&quot;&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-cyan-400">h3</span> <span className="text-emerald-400">className</span>=&quot;text-xl font-bold text-slate-900 dark:text-white&quot;&gt;&#123;plan&#125;&lt;/<span className="text-cyan-400">h3</span>&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-cyan-400">div</span>&gt;<br />
                    &nbsp;&nbsp;);<br />
                    &#125;
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-950 to-indigo-950 rounded-2xl p-4 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                      <Palette className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-sans">Design Tokens Linked</div>
                      <div className="text-[11px] text-slate-400 font-mono">theme.colors.brand-primary synchronized</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-sans">
                    Synced
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-900">
                <span>Components: 8 Extracted</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% W3C Valid JSX
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* 2.5 Calculate Frontend Slicing ROI */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-950 p-6 md:p-10 border border-slate-800 text-white shadow-xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-purple-400 font-bold text-xs tracking-widest uppercase mb-2">
              <Calculator className="w-4 h-4" /> Handoff Economics
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Manual Frontend Slicing vs. AI Figma-to-Code ROI
            </h3>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-400 mt-1">
              Compare human frontend development hours, design drift rework, and automated AI code generation.
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
              Manual Frontend Slicing
            </button>
            <button
              onClick={() => setRoiMode("ai")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                roiMode === "ai" 
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AI Design-to-Code
            </button>
          </div>
        </div>

        {/* Dynamic Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <Timer className="w-4 h-4 text-purple-400" /> Screen Conversion Time
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              {roiMode === "traditional" ? "8 to 16 Hours" : "< 15 Minutes"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Writing HTML boilerplate, copying hex codes, measuring pixel margins, and debugging mobile breakpoints."
                : "Select your Figma frame, click generate, and receive fully responsive, typed Tailwind components instantly."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <DollarSign className="w-4 h-4 text-emerald-400" /> Cost Per Complex UI Screen
            </div>
            <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-2">
              {roiMode === "traditional" ? "$650 – $1,400" : "$0.20 – $2.00"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Frontend engineer hourly contractor rates or senior developer in-house salary allocations."
                : "Included in standard flat monthly software plans with unlimited Figma exports and team collaboration."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <LineChart className="w-4 h-4 text-pink-400" /> Design-to-Code Parity
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              {roiMode === "traditional" ? "Inconsistent (82%)" : "Pixel-Perfect (99%)"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Designers and engineers battle in endless review cycles over slight margin offsets and mismatched fonts."
                : "Mathematical 1:1 translation of Figma vector vectors, local variables, typography tokens, and spacing scales."}
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 p-8 md:p-12 border border-purple-500/30 text-white shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-500/30">
              <Crown className="w-3.5 h-3.5 text-purple-400" /> Editor&apos;s Benchmark Choice 2026
            </div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              Locofy.ai: The Gold Standard for Frontend Code Quality
            </h3>
            <p className={figtreeDarkBodyClass}>
              Locofy.ai bridges the design-engineering gap like no other tool. Its Locofy Lightning AI engine automatically optimizes Figma Auto-Layout, resolves missing constraints, and outputs production-grade modular Next.js, React, and React Native components that senior developers proudly commit.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Automated Auto-Layout healing &amp; fixing
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Semantic Tailwind CSS &amp; CSS Modules export
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Direct GitHub two-way synchronization
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> React Native &amp; Flutter cross-platform support
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link 
              href="/tool/locofy-ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-base shadow-lg shadow-purple-500/25 hover:opacity-95 transition-all hover:scale-[1.02]"
            >
              Explore Locofy.ai <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/tool/visual-copilot"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all text-center"
            >
              View Visual Copilot
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
            Top 3 Figma-to-Code Platforms Compared
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-600 dark:text-slate-400 mt-2">
            Selected based on component reusability, responsive constraint handling, and design token integration.
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
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">
                    Score {alt.score}/10
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{alt.price}</span>
                </div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">{alt.name}</h4>
                <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-3">{alt.bestFor}</p>
                <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {alt.highlight}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link 
                  href={`/tool/${alt.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
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
              <Component className="w-5 h-5 text-purple-500" /> Modular Engineering &amp; Next.js Codebases
            </h4>
            <p className={figtreeBodyClass}>
              For engineering teams building complex SaaS web apps, <em>Locofy.ai</em> is unmatched. It outputs clean, idiomatic TypeScript files separated into pages, reusable UI components, and icons, dropping seamlessly into standard Next.js App Router repositories.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Layout className="w-5 h-5 text-indigo-500" /> Headless CMS &amp; Marketing Page Velocity
            </h4>
            <p className={figtreeBodyClass}>
              For marketing and growth teams running hundreds of landing page experiments, <em>Visual Copilot (Builder.io)</em> shines. It allows designers to publish Figma frames directly into a visual drag-and-drop CMS without submitting engineering pull requests.
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
          <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs tracking-widest uppercase mb-2">
            <BookOpen className="w-4 h-4" /> Technical Evaluation Criteria
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            How to Choose an AI Figma-to-Code Platform in 2026
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-600 dark:text-slate-400 mt-1">
            Four essential technical benchmarks to verify before adopting a design-to-code tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-purple-50 dark:group-hover:text-purple-900/10 transition-colors">
              01
            </span>
            <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:rotate-6 transition-transform">
              <Sparkle className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Automated Auto-Layout Correction &amp; Flexbox Conversion
            </h4>
            <p className={figtreeBodyClass}>
              Human designers frequently forget to wrap elements in nested Auto-Layout frames. A premier AI tool must automatically analyze visual bounding boxes and infer correct flexbox directions (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">flex-row</code>, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">flex-col</code>), space-between justifications, and responsive stretch behaviors without manual canvas restructuring.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-purple-50 dark:group-hover:text-purple-900/10 transition-colors">
              02
            </span>
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:rotate-6 transition-transform">
              <Palette className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Design Token Synchronization
            </h4>
            <p className={figtreeBodyClass}>
              The converter must extract Figma Local Variables and color styles into a clean <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">tailwind.config.js</code> or CSS variable manifest, ensuring site-wide theming and dark modes stay in lockstep with the design team.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-purple-50 dark:group-hover:text-purple-900/10 transition-colors">
              03
            </span>
            <div className="w-12 h-12 rounded-2xl bg-pink-50 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-6 group-hover:rotate-6 transition-transform">
              <GitBranch className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Two-Way GitHub Synchronization
            </h4>
            <p className={figtreeBodyClass}>
              Avoid one-way dead-end code generators. Look for platforms that support two-way git sync or branch PR creation, allowing developers to add custom business logic without having their manual code overwritten on the next Figma export.
            </p>
          </div>

          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-purple-50 dark:group-hover:text-purple-900/10 transition-colors">
              04
            </span>
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:rotate-6 transition-transform">
              <MonitorSmartphone className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Cross-Platform Framework Flexibility
            </h4>
            <p className={figtreeBodyClass}>
              Modern product teams don&apos;t just build for desktop web. Choose a generator that can export unified Figma screens into <strong>React, Next.js, Vue, Svelte, React Native, and Flutter</strong>, ensuring your mobile and web applications share a unified design architecture with minimal maintenance overhead.
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
          <div className="inline-flex items-center gap-2 text-purple-400 font-bold text-xs tracking-widest uppercase mb-2">
            <Zap className="w-4 h-4" /> Production Workflow
          </div>
          <h3 className="text-3xl font-black tracking-tight text-white">
            4-Step Production Pipeline: From Canvas to Merged Pull Request
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-400 mt-2">
            The standard studio methodology for turning Figma prototypes into production code.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center text-sm border border-purple-500/30">
              1
            </div>
            <h4 className="text-lg font-bold text-white">Audit Auto-Layout</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Run the AI plugin&apos;s automated Auto-Layout scanner to resolve loose floating layers and assign proper responsive constraints across desktop and mobile.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-sm border border-indigo-500/30">
              2
            </div>
            <h4 className="text-lg font-bold text-white">Tag UI Semantics</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Tag interactive components (buttons, text inputs, dropdowns, sticky headers) so the engine generates accessible HTML5 tags instead of generic divs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 font-bold flex items-center justify-center text-sm border border-pink-500/30">
              3
            </div>
            <h4 className="text-lg font-bold text-white">Configure Tailwind &amp; Props</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Map Figma color styles to project Tailwind tokens and define component props for dynamic data injection (e.g. user avatars, prices, titles).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-500/30">
              4
            </div>
            <h4 className="text-lg font-bold text-white">Sync GitHub Branch</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Push the modular Next.js components directly to a new Git branch, preview in Vercel staging, and merge with zero design regressions.
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
          <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs tracking-widest uppercase mb-2">
            <Layers className="w-4 h-4" /> Core Stakeholders
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Who Gains the Most from AI Figma-to-Code Tools?
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
                      ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20 translate-x-2" 
                      : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-purple-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-purple-500"}`} />
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-bold">
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
          <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs tracking-widest uppercase mb-1">
            <BookOpen className="w-4 h-4" /> Technical Architecture
          </div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Key Architectural Concepts in Figma-to-Code Engineering
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Figma REST API Node Graph Traversal</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              The programmatic extraction of Figma vector nodes, layer bounding boxes, font weights, and blend modes into a structured JSON hierarchy that the AI uses as its primary structural representation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Auto-Layout Constraint Mapping</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              The mathematical translation of Figma layout modes (Hug Contents, Fill Container, Fixed Width) into standard CSS layout primitives (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">w-full</code>, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">flex-1</code>, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">w-auto</code>).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">W3C Design Tokens Standard</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              The universal JSON schema format representing design decisions (spacing units, colors, shadows, typography) shared seamlessly between Figma variables and frontend CSS frameworks.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Headless UI Separation of Concerns</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              The architectural decoupling of pure visual styling from interactive state and keyboard accessibility, allowing teams to pair generated visual components with libraries like Radix UI or Headless UI.
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
            Frequently Asked Questions: AI Figma-to-Code Generators
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] text-slate-600 dark:text-slate-400 mt-1">
            Expert answers regarding Auto-Layout, Tailwind CSS exports, and design token integration.
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
