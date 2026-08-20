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
  Cpu,
  Search,
  MessageSquare,
  Eye,
  Code2,
  ShieldCheck,
  Layers,
  Terminal,
  Database,
  Briefcase,
  Users,
  Laptop
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "Which AI chatbot is best: Claude, ChatGPT, or Perplexity?",
    answer: "Each frontier model specializes in a distinct cognitive strength. Claude 3.5 Sonnet is the undisputed leader for complex coding, nuanced analytical writing, and interactive UI prototyping via Artifacts. ChatGPT (GPT-4o / o1) excels at multimodal voice conversations, image understanding, and general task automation. Perplexity Pro is the premier choice for real-time web research, fact verification, and cited academic literature reviews."
  },
  {
    question: "What is an LLM context window and why does it matter?",
    answer: "The context window represents the active working memory of an AI during a session. A 200,000-token context window (standard in Claude) allows you to upload entire codebases, 500-page financial reports, or multiple technical books at once. The AI can reason across all pages simultaneously without forgetting instructions or hallucinating missing details."
  },
  {
    question: "Are enterprise conversations with AI chatbots private and secure?",
    answer: "On paid enterprise and team subscriptions with major providers (Anthropic Claude Team, OpenAI ChatGPT Enterprise/Team, Perplexity Enterprise), data is protected by strict Zero Data Retention (ZDR) agreements. Your proprietary code, uploaded files, and internal discussions are never used to train public foundation models."
  }
];

const useCases = [
  {
    id: "engineers",
    title: "Software Engineers & Architects",
    icon: <Code2 className="w-5 h-5" />,
    content: "Compress multi-day debugging marathons into minutes. Engineers use Claude 3.5 Sonnet and ChatGPT to refactor complex legacy codebases, design distributed system architectures, write comprehensive unit test suites, and generate interactive frontend prototypes using side-by-side code Artifacts."
  },
  {
    id: "analysts",
    title: "Researchers & Financial Analysts",
    icon: <Search className="w-5 h-5" />,
    content: "Synthesize hundreds of pages of raw data instantly. Analysts upload complex quarterly 10-K filings, scientific papers, and legal contracts into Perplexity and Claude, extracting hidden risk factors, verifying mathematical models, and summarizing key findings with verified citations."
  },
  {
    id: "marketers",
    title: "Content Strategists & Writers",
    icon: <Zap className="w-5 h-5" />,
    content: "Eliminate generic corporate fluff. Creators and growth marketers use frontier LLMs to brainstorm contrarian angles, draft deeply nuanced whitepapers, and iterate on tone dynamically, producing publication-ready editorial copy in a fraction of traditional drafting time."
  }
];

const glossaryTerms = [
  { term: "Context Window (Tokens)", def: "The active working memory capacity of an LLM. 200k tokens equals approximately 150,000 words or 500 pages of text processed simultaneously." },
  { term: "Chain-of-Thought (CoT) Reasoning", def: "A prompting methodology that instructs the model to break complex problems into sequential logical steps before outputting a conclusion." },
  { term: "Interactive Artifacts / Canvas", def: "A dedicated side-by-side workspace window that renders code, interactive React widgets, SVG graphics, and markdown documents separate from the chat stream." },
  { term: "Multi-Modal Embeddings", def: "A unified neural architecture capable of ingesting and understanding text, voice waveforms, high-resolution images, and video frames within a single reasoning session." }
];

const alternatives = [
  { 
    name: "Claude", 
    slug: "claude",
    score: "9.8", 
    price: "Freemium / $20/mo", 
    bestFor: "Coding Reasoning & Artifacts", 
    highlight: "Anthropic's flagship model with unmatched coding intelligence, 200k context, and side-by-side Artifacts." 
  },
  { 
    name: "ChatGPT", 
    slug: "chatgpt",
    score: "9.7", 
    price: "Freemium / $20/mo", 
    bestFor: "Voice Mode & Multimodal AI", 
    highlight: "OpenAI's benchmark conversational ecosystem with advanced voice mode, GPT Store, and Canvas." 
  },
  { 
    name: "Perplexity", 
    slug: "perplexity",
    score: "9.5", 
    price: "Freemium / $20/mo", 
    bestFor: "Real-Time Sourced Web Search", 
    highlight: "The premier AI answer engine combining multi-model LLMs with real-time citation-backed web exploration." 
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

export default function AiChatbotsGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const [roiMode, setRoiMode] = useState<"traditional" | "ai">("ai");

  return (
    <article className="w-full max-w-6xl mx-auto py-24 font-sans overflow-hidden">
      
      {/* 1. Hero Header */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-32 md:my-48 relative rounded-[3rem] bg-slate-900 overflow-hidden border border-rose-500/20 shadow-2xl shadow-rose-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/40 via-amber-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-8 py-20 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-8 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-orange-400" /> 
            2026 Frontier LLMs &amp; Conversational AI Deep Dive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.05]"
          >
            The Ultimate Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 drop-shadow-sm">
              AI Chatbots &amp; LLM Assistants
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${figtreeDarkBodyClass} max-w-2xl mx-auto`}
          >
            From multi-modal reasoning and live web research to interactive code execution canvases and 200k+ context windows: how frontier models are redefining modern knowledge work.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Definitive Overview - Two Alternating Blocks */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="my-32 md:my-48 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <h3 className="text-sm font-extrabold text-rose-500 uppercase tracking-[0.25em] mb-4">The Paradigm Shift</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">From Generic Text Predictors to True Reasoning Engines</h4>
        </motion.div>

        <div className="space-y-24">
          {/* Block 1 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-amber-500/20 border border-rose-500/20 flex items-center justify-center text-rose-500 mb-8 shadow-sm">
                <Cpu className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">The Leap to Multi-Step Reasoning &amp; Logic</h5>
              <p className={figtreeBodyClass}>
                Early conversational AI produced plausible-sounding but frequently incorrect answers. Today&apos;s frontier models—led by <Link href="/tool/claude" className="font-bold underline decoration-primary/40 underline-offset-4 hover:text-primary transition-colors">Claude 3.5 Sonnet</Link> and <Link href="/tool/chatgpt" className="font-bold underline decoration-primary/40 underline-offset-4 hover:text-primary transition-colors">ChatGPT</Link>—employ deep chain-of-thought verification. They autonomously test hypotheses, critique their own intermediate math steps, and debug complex multi-file software architectures before returning an output.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-rose-50/50 to-amber-50/50 dark:from-rose-950/20 dark:to-amber-900/20 border border-rose-200/50 dark:border-rose-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-48 h-48 bg-gradient-to-tr from-rose-500 to-amber-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 absolute" />
               <div className="w-full max-w-xs aspect-square rounded-3xl bg-slate-900/95 border border-white/20 p-5 flex flex-col justify-between relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-105 font-mono text-xs">
                 <div className="flex items-center justify-between border-b border-white/10 pb-3">
                   <div className="flex items-center gap-2 text-rose-400 font-bold">
                     <Terminal className="w-4 h-4" /> Reasoning Chain
                   </div>
                   <div className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold font-sans">Verified</div>
                 </div>
                 
                 <div className="space-y-2 text-slate-300 py-2">
                   <div className="text-slate-400 font-sans italic">&quot;Analyze this PostgreSQL query latency...&quot;</div>
                   <div className="bg-slate-800 p-2.5 rounded-xl border border-white/10 text-[11px] text-slate-200 font-sans">
                     <span className="text-emerald-400 font-bold">Claude 3.5: </span>
                     Identified unindexed foreign key in line 42 • Rewriting with CTE.
                   </div>
                 </div>

                 <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-white/10 pt-2 font-mono">
                   <span>Context: <strong>200k Tokens</strong></span>
                   <span className="text-success font-bold">0 Latency</span>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-900/20 border border-orange-200/50 dark:border-orange-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-full max-w-sm space-y-4 relative z-10 transition-transform duration-700 group-hover:scale-105">
                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold">
                       <Code2 className="w-5 h-5" />
                     </div>
                     <div>
                       <div className="text-xs font-bold text-on-surface">Interactive Artifacts</div>
                       <div className="text-[10px] text-slate-400">Live React &amp; Tailwind Sandbox</div>
                     </div>
                   </div>
                   <span className="text-xs font-bold text-success px-2 py-0.5 bg-success/10 rounded-full">Interactive</span>
                 </div>

                 <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-md space-y-2">
                   <div className="flex justify-between items-center text-xs font-bold">
                     <span className="text-slate-500">Real-Time Web Citations</span>
                     <span className="text-orange-500 font-mono">Perplexity Pro</span>
                   </div>
                   <div className="h-14 bg-gradient-to-r from-orange-400/20 to-rose-400/20 rounded-xl border border-dashed border-rose-400/40 flex items-center justify-center text-xs font-bold text-rose-500">
                     [1] arXiv:2403.05530 • [2] GitHub Docs
                   </div>
                 </div>
               </div>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-8 shadow-sm">
                <Laptop className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">Interactive Canvases &amp; Real-Time Web Grounding</h5>
              <p className={figtreeBodyClass}>
                Chatbots have evolved beyond simple linear text streams into full cognitive workspaces. Tools like Claude Artifacts and ChatGPT Canvas allow developers and writers to edit code side-by-side with live previews, while engines like <Link href="/tool/perplexity" className="font-bold underline decoration-primary/40 underline-offset-4 hover:text-primary transition-colors">Perplexity</Link> ground every insight with direct links to primary academic and web sources.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2.5: Interactive ROI / Knowledge Work Calculator */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="my-32 md:my-48 max-w-5xl mx-auto"
      >
        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex flex-col items-center text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Calculator className="w-8 h-8" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">Calculate Knowledge Work ROI</h3>
            <p className={figtreeBodyClass + " max-w-xl"}>
              See the exact research, drafting, and problem-solving hours reclaimed every week by utilizing frontier LLM assistants.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full flex gap-2">
              <button 
                onClick={() => setRoiMode("traditional")}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${roiMode === "traditional" ? "bg-white dark:bg-slate-700 shadow-md text-on-surface" : "text-slate-400 hover:text-on-surface"}`}
              >
                Manual Synthesis &amp; Drafting
              </button>
              <button 
                onClick={() => setRoiMode("ai")}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${roiMode === "ai" ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "text-slate-400 hover:text-on-surface"}`}
              >
                Frontier LLM Assistant Stack
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-3xl">
              <Timer className={`w-8 h-8 mx-auto mb-4 ${roiMode === "ai" ? "text-success" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-2">Deep Research Turnaround</div>
              <div className="text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "45 Seconds" : "8–12 Hours"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-3xl">
              <DollarSign className={`w-8 h-8 mx-auto mb-4 ${roiMode === "ai" ? "text-success" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-2">Monthly Tool Cost</div>
              <div className="text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "$20.00" : "$0 (Lost Time)"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-3xl">
              <LineChart className={`w-8 h-8 mx-auto mb-4 ${roiMode === "ai" ? "text-primary" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-2">Weekly Reclaimed Hours</div>
              <div className="text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "15+ Hours" : "0 Hours"}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. Sponsor Spotlight - High-End Dark Card */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-32 md:my-48 max-w-5xl mx-auto"
      >
        <div className="relative rounded-[3rem] bg-slate-900 overflow-hidden shadow-2xl p-[2px] group">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 opacity-50 blur-md group-hover:opacity-100 transition-opacity duration-700 z-0" />
          
          <div className="relative bg-slate-900/95 backdrop-blur-2xl rounded-[2.85rem] p-10 md:p-16 z-10 border border-white/10">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-bold uppercase tracking-widest border border-amber-500/20 shadow-inner">
                  <Crown className="w-4 h-4" /> Editor&apos;s Choice 2026
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                  Supercharge your engineering &amp; reasoning with <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400">Claude 3.5 Sonnet</span>
                </h3>
                
                <p className={figtreeDarkBodyClass}>
                  <Link href="/tool/claude" className="text-white underline font-bold hover:text-amber-300 transition-colors">Claude 3.5 Sonnet</Link> by Anthropic sets the industry standard for coding benchmarks, nuanced long-form writing, and multi-modal analysis. With interactive Artifacts and a 200,000-token context window, it operates as a full-time senior technical partner.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/tool/claude" className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-rose-50 hover:scale-105 hover:shadow-xl transition-all duration-300">
                    Read Our Claude Review
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="bg-slate-800/40 border border-white/5 rounded-[2rem] p-10 space-y-8 shadow-2xl backdrop-blur-sm">
                  <h4 className="text-white font-extrabold text-2xl tracking-tight">The Claude Advantage</h4>
                  {[
                    { title: "200k Token Context Window", desc: "Upload and analyze entire codebases and 500-page reports." },
                    { title: "Interactive Artifacts Canvas", desc: "View and test React UI, diagrams, and code side-by-side in real time." },
                    { title: "State-of-the-Art Coding Logic", desc: "Consistently outperforms competitor models on SWE-bench tests." },
                    { title: "Nuanced Human Tone", desc: "Produces natural, concise, and non-repetitive prose without robotisms." }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-5 group/feature">
                      <div className="mt-1 bg-rose-500/10 p-2 rounded-xl h-fit border border-rose-500/20 group-hover/feature:bg-rose-500/30 group-hover/feature:scale-110 transition-all duration-300">
                        <CheckCircle2 className="w-5 h-5 text-rose-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg tracking-tight">{feature.title}</div>
                        <div className="text-slate-400 font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] font-normal mt-1 leading-relaxed">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3.5: Top 3 Alternatives Matrix */}
      <motion.section 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="my-32 md:my-48 max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h3 className="text-sm font-extrabold text-slate-500 uppercase tracking-[0.25em] mb-4">Market Landscape</h3>
          <h4 className="text-3xl font-black text-on-surface tracking-tighter">Top Frontier LLM Assistants</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {alternatives.map((alt, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <Link href={`/tool/${alt.slug}`} className="text-2xl font-black text-on-surface group-hover:text-primary transition-colors">
                    {alt.name}
                  </Link>
                  <div className="bg-success/10 text-success font-bold px-3 py-1 rounded-full text-sm">{alt.score}/10</div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <span className="text-slate-500">Starting Price</span>
                    <span className="font-bold text-on-surface">{alt.price}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <span className="text-slate-500">Best For</span>
                    <span className="font-bold text-on-surface">{alt.bestFor}</span>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pt-2">
                    <span className="font-bold text-on-surface">Highlight: </span>{alt.highlight}
                  </div>
                </div>
              </div>
              <Link 
                href={`/tool/${alt.slug}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-primary hover:text-white transition-colors"
              >
                View {alt.name} Profile <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 4. Buyer's Guide - Bento Box Layout */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="my-32 md:my-48 max-w-6xl mx-auto"
      >
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <h3 className="text-sm font-extrabold text-orange-500 uppercase tracking-[0.25em] mb-4">Evaluation Criteria</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">What to Demand from Frontier AI</h4>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Big Card 1 */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-red-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center border border-red-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Database className="w-8 h-8" />
                </div>
                <span className="text-7xl font-black text-slate-100 dark:text-slate-800 group-hover:text-red-500/10 transition-colors duration-500">01</span>
              </div>
              <h4 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">Needle-in-a-Haystack Context Retrieval</h4>
              <p className={figtreeBodyClass}>
                A massive context window is useless if the model forgets facts in the middle. Demand 99.5%+ retrieval accuracy across 100k+ token prompts so you can upload full code repositories, customer support transcripts, and legal filings without information loss.
              </p>
            </div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div variants={fadeUpVariant} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-amber-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-8 border border-amber-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Eye className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-extrabold text-on-surface mb-4 tracking-tight">Multimodal Vision &amp; Voice</h4>
              <p className={figtreeBodyClass}>
                Ensure the platform supports high-resolution image OCR, diagram interpretation, and real-time voice latency.
              </p>
            </div>
          </motion.div>

          {/* Small Card 3 */}
          <motion.div variants={fadeUpVariant} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-orange-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mb-8 border border-orange-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <Terminal className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-extrabold text-on-surface mb-4 tracking-tight">Interactive Code Artifacts</h4>
              <p className={figtreeBodyClass}>
                Look for side-by-side execution environments (like <Link href="/tool/claude" className="font-bold underline hover:text-primary">Claude Artifacts</Link>) that render live interactive widgets.
              </p>
            </div>
          </motion.div>

          {/* Big Card 4 */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-rose-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl group-hover:bg-rose-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-rose-500/10 text-rose-500 rounded-2xl flex items-center justify-center border border-rose-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <span className="text-7xl font-black text-slate-100 dark:text-slate-800 group-hover:text-rose-500/10 transition-colors duration-500">04</span>
              </div>
              <h4 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">Zero Data Retention (ZDR) Privacy</h4>
              <p className={figtreeBodyClass}>
                Never input proprietary IP into public consumer LLMs that train on user chats. Demand enterprise-tier contracts guaranteeing that your prompts, uploaded documents, and custom instructions are never stored permanently or used for foundation model training.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 4.5: Step-by-Step "How-To" Walkthrough */}
      <motion.section 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="my-32 md:my-48 max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-white"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
        <div className="relative z-10">
          <h3 className="text-sm font-extrabold text-amber-400 uppercase tracking-[0.25em] mb-4">Implementation Guide</h3>
          <h4 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-16">How to Get 10x Better Outputs in 4 Steps</h4>
          
          <div className="space-y-12">
            {[
              { title: "Define Role & Negative Constraints First", text: "Anchor the model before asking your query: 'You are a Principal Software Architect. Provide exact TypeScript code with zero placeholder comments. Do not explain basics.'" },
              { title: "Ground the Model with Raw Documentation", text: "Upload the specific PDF, API documentation, or schema file you are working with to eliminate hallucination and force strict factual adherence." },
              { title: "Force Chain-of-Thought Verification", text: "Instruct the AI: 'Think through edge cases, potential race conditions, and performance bottlenecks step-by-step before outputting the final code.'" },
              { title: "Iterate Surgically in Side-by-Side Canvases", text: "Use interactive Artifacts or Canvas to highlight and edit specific functions or paragraphs directly without re-generating the entire response." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="flex gap-6 md:gap-10">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl font-black text-amber-400">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h5 className="text-2xl font-bold text-white mb-3">{step.title}</h5>
                  <p className={figtreeDarkBodyClass}>{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. Use Cases - Interactive Tabs */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="my-32 md:my-48 max-w-5xl mx-auto bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[3rem] p-8 md:p-16 shadow-xl"
      >
        <h3 className="text-4xl md:text-5xl font-black text-on-surface mb-16 text-center tracking-tighter">Who Benefits Most?</h3>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Tab Navigation */}
          <div className="md:w-1/3 space-y-4">
            {useCases.map((uc) => {
              const isActive = activeTab === uc.id;
              return (
                <button
                  key={uc.id}
                  onClick={() => setActiveTab(uc.id)}
                  className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-500 font-bold text-left border ${
                    isActive 
                      ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/20 translate-x-2 border-primary' 
                      : 'bg-white dark:bg-slate-800 text-on-surface-variant hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-on-surface border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className={`${isActive ? 'text-primary-foreground' : 'text-slate-400'} transition-colors duration-500`}>
                    {uc.icon}
                  </div>
                  {uc.title}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="md:w-2/3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden flex items-center shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="w-16 h-1.5 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full mb-8" />
                <h4 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">
                  {useCases.find(u => u.id === activeTab)?.title}
                </h4>
                <p className={figtreeBodyClass}>
                  {useCases.find(u => u.id === activeTab)?.content}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-rose-500/5 rounded-full blur-[80px] pointer-events-none" />
          </div>
        </div>
      </motion.section>

      {/* 5.5: Topical Glossary */}
      <motion.section 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="my-32 md:my-48 max-w-5xl mx-auto"
      >
        <div className="text-center mb-16">
          <h3 className="text-sm font-extrabold text-primary uppercase tracking-[0.25em] mb-4">Technical Foundation</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">Core Terminology</h4>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {glossaryTerms.map((item, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="bg-surface border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
                <h5 className="text-xl font-bold text-on-surface">{item.term}</h5>
              </div>
              <p className={figtreeBodyClass}>{item.def}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 6. SEO FAQ */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="my-32 md:my-48 max-w-3xl mx-auto"
      >
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black text-on-surface mb-4 tracking-tighter">Frequently Asked Questions</h3>
        </div>
        <div className="space-y-6">
          {faqData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-[2rem] overflow-hidden transition-all duration-500 ${isOpen ? 'bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border-rose-500/30 shadow-xl shadow-rose-500/5 scale-[1.02]' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-rose-500/20 hover:shadow-md'}`}
              >
                <button 
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className="font-extrabold text-on-surface text-xl tracking-tight pr-8">{faq.question}</span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-primary text-primary-foreground shadow-md rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className={`px-8 pb-8 ${figtreeBodyClass}`}>
                        {faq.answer}
                      </div>
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
