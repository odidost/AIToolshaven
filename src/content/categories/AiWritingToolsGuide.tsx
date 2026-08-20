"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  Crown, 
  Briefcase, 
  CheckCircle2, 
  ChevronDown,
  PenTool,
  FileType,
  ArrowRight,
  Zap,
  MonitorSmartphone,
  Calculator,
  Timer,
  DollarSign,
  LineChart,
  BookOpen,
  ExternalLink,
  Type,
  FileText,
  Workflow
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "Does Google penalize AI-generated content?",
    answer: "Google's official stance focuses on the quality of content, not how it was produced. If your AI content is helpful, authoritative, and demonstrates E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), it will rank. Pure AI spam without human editing, however, is heavily penalized."
  },
  {
    question: "How do I make the AI sound like my specific brand?",
    answer: "Modern enterprise writing tools include a 'Brand Voice' feature. You upload previous articles, tone guidelines, and company documentation. The AI analyzes your syntax, vocabulary, and pacing, ensuring all future generations sound indistinguishable from your top writers."
  },
  {
    question: "Is AI-generated text considered plagiarism?",
    answer: "No. Large Language Models (LLMs) generate novel text by predicting the next logical word based on their training data; they do not copy and paste from existing articles. However, it's always best practice to run a quick Copyscape check before publishing."
  }
];

const useCases = [
  {
    id: "marketers",
    title: "Content Marketers",
    icon: <FileText className="w-5 h-5" />,
    content: "Content teams face relentless pressure to scale output across blogs, social, and email. AI writing tools break writer's block instantly, allowing marketers to transition from 'blank page drafters' into 'content editors'. A 2,000-word SEO pillar post can be outlined, drafted, and edited in hours instead of days."
  },
  {
    id: "founders",
    title: "Bootstrapped Founders",
    icon: <Zap className="w-5 h-5" />,
    content: "Solo founders cannot afford to hire dedicated copywriters for every landing page variant or cold email sequence. AI writers serve as a fractional Chief Marketing Officer, generating high-converting, psychologically-optimized sales copy at a fraction of a human's retainer."
  },
  {
    id: "agencies",
    title: "SEO & Growth Agencies",
    icon: <MonitorSmartphone className="w-5 h-5" />,
    content: "Agencies managing 20+ client accounts must produce hundreds of localized landing pages and blog posts monthly. Utilizing AI writing APIs allows agencies to programmatically generate highly structured, keyword-rich content at massive scale, radically expanding their profit margins."
  }
];

const glossaryTerms = [
  { term: "LLM (Large Language Model)", def: "The foundational neural network (like GPT-4 or Claude 3) trained on massive amounts of text data, enabling it to understand and generate human-like language." },
  { term: "Zero-Shot Prompting", def: "Asking the AI to perform a task without providing any prior examples of the desired output. It relies purely on the AI's general understanding of your instructions." },
  { term: "Brand Voice Memory", def: "A feature in premium tools that stores your specific stylistic preferences, ensuring the AI consistently mimics your company's unique tone across all generated assets." },
  { term: "Hallucination", def: "When an AI confidently generates factually incorrect or nonsensical information. Always require human oversight when publishing data-heavy AI content." }
];

const alternatives = [
  { name: "Copy.ai", score: "9.1", price: "From $36", bestFor: "Sales Teams", highlight: "Incredible automated sales workflows." },
  { name: "Writesonic", score: "8.8", price: "$20/mo", bestFor: "SEO Writers", highlight: "Built-in real-time Google search data." },
  { name: "Claude (Anthropic)", score: "9.5", price: "$20/mo", bestFor: "Power Users", highlight: "The absolute best raw reasoning and natural tone." }
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

export default function AiWritingToolsGuide() {
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
            2026 Industry Deep Dive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.05]"
          >
            The Ultimate Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 drop-shadow-sm">
              AI Writing Tools
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${figtreeDarkBodyClass} max-w-2xl mx-auto`}
          >
            A comprehensive breakdown of how large language models are fundamentally rewriting the economics of content creation, marketing copy, and SEO.
          </motion.p>
        </div>
      </motion.section>

      {/* 2. Definitive Overview - Two Alternating Blocks */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="my-32 md:my-48 max-w-5xl mx-auto">
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <h3 className="text-sm font-extrabold text-rose-500 uppercase tracking-[0.25em] mb-4">The Paradigm Shift</h3>
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">From Word Processors to Thought Partners</h4>
        </motion.div>

        <div className="space-y-24">
          {/* Block 1 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-amber-500/20 border border-rose-500/20 flex items-center justify-center text-rose-500 mb-8 shadow-sm">
                <Type className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">The End of the Blank Page</h5>
              <p className={figtreeBodyClass}>
                Historically, writing was constrained by the physical speed of human thought and typing. Today, advanced AI writing tools act as infinite-bandwidth thought partners. By structuring semantic prompts, creators can instantly generate highly researched outlines, draft 2,000-word pillar posts, and automatically optimize for search intent.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-rose-50/50 to-amber-50/50 dark:from-rose-950/20 dark:to-amber-900/20 border border-rose-200/50 dark:border-rose-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-48 h-48 bg-gradient-to-tr from-rose-500 to-amber-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 absolute" />
               <div className="w-full max-w-sm space-y-4 relative z-10 transition-transform duration-700 group-hover:scale-105">
                 <div className="h-6 w-1/3 bg-rose-400/80 rounded-md shadow-md" />
                 <div className="h-4 w-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-md shadow-sm" />
                 <div className="h-4 w-5/6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-md shadow-sm" />
                 <div className="h-4 w-4/6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-md shadow-sm" />
                 <div className="pt-4" />
                 <div className="h-6 w-1/2 bg-orange-400/80 rounded-md shadow-md" />
                 <div className="h-4 w-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-md shadow-sm" />
                 <div className="h-4 w-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-md shadow-sm" />
               </div>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div variants={fadeUpVariant} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-900/20 border border-orange-200/50 dark:border-orange-800/50 rounded-[2.5rem] aspect-square p-8 relative overflow-hidden flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-full max-w-sm space-y-5 relative z-10 transition-transform duration-700 group-hover:scale-105">
                 <div className="h-10 w-3/4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-md" />
                 <div className="h-28 w-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-md" />
                 <div className="flex gap-4">
                   <div className="h-12 w-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg" />
                   <div className="h-12 w-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full shadow-lg" />
                   <div className="h-12 w-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg" />
                 </div>
               </div>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-8 shadow-sm">
                <Workflow className="w-7 h-7" />
              </div>
              <h5 className="text-3xl font-extrabold text-on-surface tracking-tight">Autonomous Multi-Channel Execution</h5>
              <p className={figtreeBodyClass}>
                Modern generative AI has moved far past isolated text prompts. Today&apos;s writing ecosystems connect directly to your CMS, analyzing real-time search trends and automatically generating paired email sequences, blog posts, and social snippets simultaneously without breaking voice consistency.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2.5: Interactive ROI Calculator */}
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
            <h3 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">Calculate Content ROI</h3>
            <p className={figtreeBodyClass + " max-w-xl"}>
              See the exact time and capital you save by augmenting your workflow with AI writing software.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full flex gap-2">
              <button 
                onClick={() => setRoiMode("traditional")}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${roiMode === "traditional" ? "bg-white dark:bg-slate-700 shadow-md text-on-surface" : "text-slate-400 hover:text-on-surface"}`}
              >
                Human Freelancer
              </button>
              <button 
                onClick={() => setRoiMode("ai")}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${roiMode === "ai" ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "text-slate-400 hover:text-on-surface"}`}
              >
                AI Co-Pilot
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-3xl">
              <Timer className={`w-8 h-8 mx-auto mb-4 ${roiMode === "ai" ? "text-success" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-2">Time to Draft (2k words)</div>
              <div className="text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "15 Mins" : "8 Hours"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-3xl">
              <DollarSign className={`w-8 h-8 mx-auto mb-4 ${roiMode === "ai" ? "text-success" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-2">Cost per Article</div>
              <div className="text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "$0.15" : "$300+"}
              </div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-3xl">
              <LineChart className={`w-8 h-8 mx-auto mb-4 ${roiMode === "ai" ? "text-primary" : "text-slate-400"}`} />
              <div className="text-slate-500 font-semibold mb-2">Scalability</div>
              <div className="text-4xl font-black text-on-surface tracking-tight">
                {roiMode === "ai" ? "Infinite" : "Capped"}
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
                  Scale your content operations securely with <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400">Jasper AI</span>
                </h3>
                
                <p className={figtreeDarkBodyClass}>
                  Generic AI writers sound like robots. Jasper is the enterprise standard because it rigorously learns your specific brand voice. You upload your style guides and past content, and Jasper generates multi-channel campaigns that sound unmistakably like your team.
                </p>

                <a href="https://www.jasper.ai" target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-rose-50 hover:scale-105 hover:shadow-xl transition-all duration-300">
                  Try Jasper AI Free
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                </a>
              </div>

              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="bg-slate-800/40 border border-white/5 rounded-[2rem] p-10 space-y-8 shadow-2xl backdrop-blur-sm">
                  <h4 className="text-white font-extrabold text-2xl tracking-tight">The Jasper Advantage</h4>
                  {[
                    { title: "Brand Voice Memory", desc: "Never sound generic. Jasper writes exactly like you." },
                    { title: "Enterprise Security", desc: "Your proprietary data is never used to train global models." },
                    { title: "Multi-Channel Campaigns", desc: "Turn one brief into an email, blog, and tweet instantly." },
                    { title: "Team Collaboration", desc: "Built-in project management for content teams." }
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
          <h4 className="text-3xl font-black text-on-surface tracking-tighter">Top Alternatives</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {alternatives.map((alt, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <h5 className="text-2xl font-black text-on-surface">{alt.name}</h5>
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
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-primary hover:text-white transition-colors">
                View Details <ExternalLink className="w-4 h-4" />
              </button>
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
          <h4 className="text-3xl md:text-5xl font-black text-on-surface tracking-tighter">What to Demand from Pro Tools</h4>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Big Card 1 */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-red-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center border border-red-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <PenTool className="w-8 h-8" />
                </div>
                <span className="text-7xl font-black text-slate-100 dark:text-slate-800 group-hover:text-red-500/10 transition-colors duration-500">01</span>
              </div>
              <h4 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">Live Search Data Integration</h4>
              <p className={figtreeBodyClass}>
                Standard LLMs are trained on historical data. If you write SEO content, your AI must have real-time internet access to analyze current SERPs (Search Engine Results Pages) and pull in factual, up-to-date information to avoid hallucinating fake statistics.
              </p>
            </div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div variants={fadeUpVariant} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-amber-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-8 border border-amber-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Briefcase className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-extrabold text-on-surface mb-4 tracking-tight">Enterprise Security Controls</h4>
              <p className={figtreeBodyClass}>
                Ensure the platform explicitly states that your proprietary prompts and data will NOT be used to train their global models.
              </p>
            </div>
          </motion.div>

          {/* Small Card 3 */}
          <motion.div variants={fadeUpVariant} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-orange-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mb-8 border border-orange-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <FileType className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-extrabold text-on-surface mb-4 tracking-tight">API Extensibility</h4>
              <p className={figtreeBodyClass}>
                For maximum ROI, you should be able to connect the writing tool directly to your CMS (like WordPress) or CRM via API for automated publishing.
              </p>
            </div>
          </motion.div>

          {/* Big Card 4 */}
          <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-rose-500/30 hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl group-hover:bg-rose-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-rose-500/10 text-rose-500 rounded-2xl flex items-center justify-center border border-rose-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <FileText className="w-8 h-8" />
                </div>
                <span className="text-7xl font-black text-slate-100 dark:text-slate-800 group-hover:text-rose-500/10 transition-colors duration-500">04</span>
              </div>
              <h4 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">Built-in SEO Optimization</h4>
              <p className={figtreeBodyClass}>
                Generating text is easy; generating text that ranks on Google is hard. A pro-tier AI writer should analyze NLP (Natural Language Processing) entities, LSI keywords, and competitor keyword density to construct heavily optimized semantic HTML output natively.
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
          <h4 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-16">How to Generate SEO Copy in 4 Steps</h4>
          
          <div className="space-y-12">
            {[
              { title: "Define the Core Intent", text: "Before generating, dictate the specific search intent. Tell the AI: 'Write an informational pillar post targeting the keyword X, designed for beginners.' This anchors the LLM." },
              { title: "Generate the Outline First", text: "Never ask the AI to write a full article in one prompt. Ask it to generate an H2/H3 outline first. Review the structure, edit it manually, and ensure logical flow." },
              { title: "Draft Section by Section", text: "Feed the approved outline back to the AI and prompt it to expand on ONE header at a time. This prevents the model from hallucinating or losing its train of thought." },
              { title: "The Human Polish (Crucial)", text: "AI content lacks personal anecdotes. Spend your saved time injecting personal experiences, original statistics, and fixing repetitive sentence structures before publishing." }
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
