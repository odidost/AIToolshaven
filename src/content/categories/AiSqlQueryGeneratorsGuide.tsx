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
  Database, 
  Table, 
  Search, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  BarChart3, 
  Server, 
  Sparkle
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is the best AI SQL query generator in 2026?",
    answer: "Text2SQL.ai and Vanna.ai dominate the text-to-SQL category. Text2SQL.ai is celebrated for lightning-fast ad-hoc query generation across 20+ SQL and NoSQL dialects (PostgreSQL, MySQL, Snowflake, BigQuery, MongoDB). Vanna.ai is the premier open-source Python framework that connects directly to your database metadata, using Retrieval-Augmented Generation (RAG) to generate 95%+ accurate enterprise queries on complex data warehouses."
  },
  {
    question: "How accurate are AI SQL generators on complex multi-table JOINs and window functions?",
    answer: "While basic chatbots struggle with table schema hallucinations, dedicated AI SQL engines ingest your database DDL (Data Definition Language) and foreign key relationships. On standardized benchmarks like Spider and BIRD, specialized models achieve over 92% execution accuracy on complex multi-table joins, subqueries, and window functions (such as PARTITION BY and ROW_NUMBER)."
  },
  {
    question: "Can AI SQL tools accidentally delete, drop, or alter production data?",
    answer: "No, provided standard security practices are followed. Enterprise tools like Outerbase and Defog.ai connect via read-only database credentials. Furthermore, their AI reasoning engines enforce strict DML/DDL guards that automatically reject any natural language prompt attempting to execute DROP, TRUNCATE, DELETE, or ALTER operations."
  },
  {
    question: "Can non-technical business users use AI to query databases without writing code?",
    answer: "Yes. Self-service analytics is one of the primary drivers of AI SQL adoption. Product managers, marketing leads, and financial analysts simply ask questions in plain English (e.g. 'Show monthly recurring revenue by customer tier for Q4 with churn percentage'). The AI generates the query, executes it, and renders interactive charts in seconds."
  }
];

const useCases = [
  {
    id: "business-analysts",
    label: "Business & Product Analysts",
    badge: "Self-Service Data",
    title: "Eliminate SQL Bottlenecks and Answer Custom Ad-Hoc Data Requests Instantly",
    description: "Business intelligence and product teams bypass 3-week data engineering backlogs. Non-technical stakeholders ask questions in plain English to pull churn cohorts, conversion funnels, and revenue metrics directly from company data lakes.",
    highlight: "Zero wait times for custom operational data and executive reports",
    icon: BarChart3
  },
  {
    id: "backend-engineers",
    label: "Backend Developers",
    badge: "Query Speed",
    title: "Draft Complex CTEs, Aggregations, and Window Functions in Seconds",
    description: "Software developers avoid wrestling with convoluted SQL syntax for nested subqueries and recursive CTEs. Simply describe the desired output schema and let the AI generate optimized, dialect-specific SQL ready for Prisma, Drizzle, or raw pg client queries.",
    highlight: "Saves 10–15 hours weekly on manual database query construction",
    icon: Terminal
  },
  {
    id: "dbas-data-eng",
    label: "DBAs & Data Engineers",
    badge: "Query Optimization",
    title: "Analyze EXPLAIN Plans and Optimize Slow-Running Database Queries",
    description: "Database administrators paste slow-running queries and execution plans into AI query optimizers like EverSQL. The AI identifies missing composite indexes, redundant table scans, and memory-hogging Cartesian joins, rewriting queries for 10x lower latency.",
    highlight: "Average query execution runtime reduced by 60% to 90%",
    icon: Database
  },
  {
    id: "finance-ops",
    label: "Finance & Operations",
    badge: "Audit & Reconciliation",
    title: "Reconcile Millions of Transaction Records Across Disparate SQL Warehouses",
    description: "Finance analysts generate complex cross-table joins reconciling Stripe payment logs, bank ACH settlement feeds, and internal billing ledger tables without risk of data alteration, maintaining strict read-only audit compliance.",
    highlight: "100% read-only data access with zero risk of database corruption",
    icon: Table
  }
];

const topAlternatives = [
  { 
    name: "Text2SQL.ai", 
    slug: "text2sql-ai",
    score: "9.9", 
    price: "Free tier / From $8/mo", 
    bestFor: "Fast ad-hoc query generation across 20+ database dialects", 
    highlight: "The most popular web-based SQL generator, trusted by over 200,000 professionals for instant query generation, formula conversions, and SQL explanation." 
  },
  { 
    name: "Vanna.ai", 
    slug: "vanna-ai",
    score: "9.8", 
    price: "Free & Open Source", 
    bestFor: "Enterprise metadata RAG & private self-hosted database query engines", 
    highlight: "Open-source Python framework that indexes database DDL and query history into vector storage, delivering unprecedented accuracy on complex warehouses." 
  },
  { 
    name: "Outerbase", 
    slug: "outerbase",
    score: "9.7", 
    price: "Free tier / Pro plans", 
    bestFor: "Modern AI-powered database UI, visualization & team collaboration", 
    highlight: "Next-generation database client that combines chat-to-query AI (EZQL), visual data exploration, and automated dashboard generation." 
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

export default function AiSqlQueryGeneratorsGuide() {
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-slate-900 overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-cyan-500/10 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/40 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay z-0" />
        
        <div className="relative z-10 px-6 py-10 md:py-14 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/90 text-sm font-semibold tracking-wide mb-8 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" /> 
            2026 Database Intelligence &amp; NL-to-SQL Deep Dive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.08]"
          >
            The Ultimate Guide to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 drop-shadow-sm">
              AI SQL &amp; Database Query Builders
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[18px] md:text-[20px] font-normal leading-[32.4px] text-slate-300 max-w-2xl mx-auto"
          >
            How schema-aware retrieval engines, automated index optimizers, and natural language interfaces turned complex multi-table SQL queries into instant conversational insights.
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
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm tracking-widest uppercase">
            <Database className="w-4 h-4" /> The NL-to-SQL Breakthrough
          </div>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            From Obscure Subquery Syntax to Conversational Data Democratization
          </h3>
          <p className={figtreeBodyClass}>
            For decades, unlocking enterprise database value required specialized SQL expertise. Business teams submitted Jira tickets to overworked data engineers, waiting days just to find out monthly cohort retention or customer churn numbers.
          </p>
          <p className={figtreeBodyClass}>
            In 2026, <strong>AI SQL engines</strong> ingest your entire database schema, table foreign keys, and column comments. When you ask a question in plain English, the AI reasons across normalized database relationships, generates syntactically flawless SQL with zero syntax errors, and validates query execution plans automatically.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              <span className="inline-block w-10 h-10 rounded-full bg-blue-500/20 border-2 border-white dark:border-slate-800 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center">95%+</span>
              <span className="inline-block w-10 h-10 rounded-full bg-cyan-500/20 border-2 border-white dark:border-slate-800 text-cyan-600 dark:text-cyan-400 font-bold text-xs flex items-center justify-center">20+</span>
              <span className="inline-block w-10 h-10 rounded-full bg-indigo-500/20 border-2 border-white dark:border-slate-800 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center justify-center">&lt;5s</span>
            </div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Query accuracy rating, multi-dialect support (Postgres, Snowflake, BigQuery), and sub-5-second execution.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="relative">
          <div className="rounded-[2.5rem] bg-gradient-to-tr from-blue-600 to-cyan-600 p-1 shadow-2xl">
            <div className="rounded-[2.4rem] bg-slate-950 p-6 md:p-8 text-white relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> sql-engine: pg-vector-v4
                </div>
              </div>

              {/* SQL Generator Mockup UI */}
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                  <div className="text-xs text-cyan-400 font-bold mb-1 flex items-center justify-between">
                    <span>NATURAL LANGUAGE PROMPT</span>
                    <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono">Dialect: PostgreSQL</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans italic">
                    &quot;Find the top 5 customers who spent over $5,000 in the last 90 days, grouped by country, along with their average order value.&quot;
                  </p>
                </div>

                <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-800">
                    <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-blue-400" /> Generated SQL Query</span>
                    <span className="text-emerald-400 font-bold">EXPLAIN Plan: Cost 12.4</span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded border border-slate-800/80 text-[11px] leading-relaxed text-slate-300 overflow-x-auto">
                    <span className="text-cyan-400">SELECT</span> u.country, u.name, <span className="text-amber-300">SUM</span>(o.total_amount) <span className="text-cyan-400">AS</span> total_spent,<br />
                    &nbsp;&nbsp;<span className="text-amber-300">AVG</span>(o.total_amount) <span className="text-cyan-400">AS</span> avg_order_val<br />
                    <span className="text-cyan-400">FROM</span> users u<br />
                    <span className="text-cyan-400">JOIN</span> orders o <span className="text-cyan-400">ON</span> u.id = o.user_id<br />
                    <span className="text-cyan-400">WHERE</span> o.created_at &gt;= <span className="text-emerald-400">NOW() - INTERVAL &apos;90 days&apos;</span><br />
                    <span className="text-cyan-400">GROUP BY</span> u.country, u.name<br />
                    <span className="text-cyan-400">HAVING</span> <span className="text-amber-300">SUM</span>(o.total_amount) &gt; <span className="text-purple-400">5000</span><br />
                    <span className="text-cyan-400">ORDER BY</span> total_spent <span className="text-cyan-400">DESC LIMIT</span> <span className="text-purple-400">5</span>;
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-950 to-cyan-950 rounded-2xl p-4 border border-cyan-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-sans">Read-Only Safety Guard</div>
                      <div className="text-[11px] text-slate-400 font-mono">0 Mutation statements detected (Safe)</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-sans">
                    Read Only
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-900">
                <span>Execution Time: 18ms</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 5 Rows Returned
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* 2.5 Calculate Data Operations ROI */}
      <motion.section 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-950 p-6 md:p-10 border border-slate-800 text-white shadow-xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-bold text-xs tracking-widest uppercase mb-2">
              <Calculator className="w-4 h-4" /> Analytics Economics
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Data Engineering Queue vs. AI SQL Generator ROI
            </h3>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-400 mt-1">
              Compare analyst ticket queues, turnaround times, and self-service AI SQL intelligence.
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
              Manual Analyst Ticket
            </button>
            <button
              onClick={() => setRoiMode("ai")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                roiMode === "ai" 
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/20" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AI SQL Generator
            </button>
          </div>
        </div>

        {/* Dynamic Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <Timer className="w-4 h-4 text-cyan-400" /> Ad-Hoc Report Turnaround
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              {roiMode === "traditional" ? "2 to 5 Days" : "< 10 Seconds"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Submitting a Jira ticket to the data team, waiting for sprint prioritization, and reviewing drafts."
                : "Type a conversational question into the interface and receive executable SQL and formatted data instantly."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <DollarSign className="w-4 h-4 text-emerald-400" /> Cost Per Custom Query
            </div>
            <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-2">
              {roiMode === "traditional" ? "$85 – $220" : "$0.02 – $0.10"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Senior data engineer hourly salary allocation, review meetings, and database server load."
                : "Flat low-cost subscription with unlimited AI query generations, schema searches, and optimization."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="flex items-center gap-3 text-slate-400 text-sm mb-2">
              <LineChart className="w-4 h-4 text-indigo-400" /> Syntax &amp; Join Accuracy
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">
              {roiMode === "traditional" ? "Prone to Typos" : "Flawless Dialect"}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              {roiMode === "traditional" 
                ? "Subtle Cartesian join errors and missing WHERE filter conditions can lead to misleading business data."
                : "Schema-grounded LLMs strictly respect foreign keys, composite indexes, and correct SQL dialect rules."}
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
        className="mb-8 md:mb-12 relative rounded-[2.5rem] bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 p-8 md:p-12 border border-blue-500/30 text-white shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
              <Crown className="w-3.5 h-3.5 text-cyan-400" /> Editor&apos;s Benchmark Choice 2026
            </div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              Text2SQL.ai &amp; Vanna.ai: The Query Intelligence Standard
            </h3>
            <p className={figtreeDarkBodyClass}>
              <strong>Text2SQL.ai</strong> is the world&apos;s most adopted web SQL generator for rapid, dialect-accurate queries. <strong>Vanna.ai</strong> is the open-source enterprise powerhouse that vector-indexes your company&apos;s proprietary DDL schemas to achieve 95%+ precision on production data lakes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Support for 20+ SQL &amp; NoSQL dialects
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Retrieval-Augmented Schema indexing (RAG)
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Automated query optimization &amp; index recommendations
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Enterprise-grade read-only security guards
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link 
              href="/tool/text2sql-ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:opacity-95 transition-all hover:scale-[1.02]"
            >
              Explore Text2SQL.ai <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/tool/vanna-ai"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all text-center"
            >
              View Vanna.ai
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
            Top 3 AI SQL Generators Compared
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-600 dark:text-slate-400 mt-2">
            Rigorously evaluated on dialect precision, complex joins, and query optimization capabilities.
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
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                    Score {alt.score}/10
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{alt.price}</span>
                </div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">{alt.name}</h4>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">{alt.bestFor}</p>
                <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {alt.highlight}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link 
                  href={`/tool/${alt.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
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
              <Search className="w-5 h-5 text-blue-500" /> Self-Service Analytics for Business Teams
            </h4>
            <p className={figtreeBodyClass}>
              For non-technical operations and marketing teams, <em>Text2SQL.ai</em> and <em>Outerbase</em> remove the friction of data requests. Users type intuitive questions and receive instant data tables without needing to master SQL keywords or relational algebra.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-500" /> Private Data Warehouses &amp; Python Frameworks
            </h4>
            <p className={figtreeBodyClass}>
              For engineering teams managing private Snowflake, Redshift, or on-prem Postgres servers, <em>Vanna.ai</em> offers complete code privacy. It runs locally in Python, sending only schema metadata rather than customer PII to LLMs.
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
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs tracking-widest uppercase mb-2">
            <BookOpen className="w-4 h-4" /> Technical Evaluation Criteria
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            How to Choose an AI SQL Query Builder in 2026
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-600 dark:text-slate-400 mt-1">
            Four non-negotiable architectural benchmarks when selecting an AI database tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-blue-50 dark:group-hover:text-blue-900/10 transition-colors">
              01
            </span>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:rotate-6 transition-transform">
              <Sparkle className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Schema Introspection &amp; Foreign Key Reasoning
            </h4>
            <p className={figtreeBodyClass}>
              Generic LLMs fail on SQL because they don&apos;t know your table column names. Superior tools ingest DDL schemas, primary/foreign key constraints, and enum types. When querying across 5 tables, the AI automatically inserts correct <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">ON</code> join predicates without hallucinating missing fields.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-blue-50 dark:group-hover:text-blue-900/10 transition-colors">
              02
            </span>
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:rotate-6 transition-transform">
              <Terminal className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Dialect-Specific Syntax Precision
            </h4>
            <p className={figtreeBodyClass}>
              SQL dialects diverge significantly: PostgreSQL uses <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">ILIKE</code>, BigQuery uses backticks, and Snowflake has unique date math functions. Ensure your tool explicitly supports your database engine&apos;s idiosyncratic functions.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-blue-50 dark:group-hover:text-blue-900/10 transition-colors">
              03
            </span>
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:rotate-6 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Read-Only Security &amp; Data Privacy
            </h4>
            <p className={figtreeBodyClass}>
              Verify that the platform never executes mutation queries (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">UPDATE</code>, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">DROP</code>, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono">DELETE</code>) and that database row contents are never transmitted to third-party model servers without encryption.
            </p>
          </div>

          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden group">
            <span className="text-7xl font-black text-slate-100 dark:text-slate-800/40 absolute -bottom-4 -right-2 select-none group-hover:text-blue-50 dark:group-hover:text-blue-900/10 transition-colors">
              04
            </span>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:rotate-6 transition-transform">
              <LineChart className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Automated Query Optimization &amp; Index Suggestions
            </h4>
            <p className={figtreeBodyClass}>
              Generating correct SQL is only half the battle; generating performant SQL is what prevents production database crashes. Advanced tools inspect query execution costs, recommend composite indexes, and rewrite nested subqueries into efficient Common Table Expressions (CTEs).
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
          <div className="inline-flex items-center gap-2 text-cyan-400 font-bold text-xs tracking-widest uppercase mb-2">
            <Zap className="w-4 h-4" /> Production Blueprint
          </div>
          <h3 className="text-3xl font-black tracking-tight text-white">
            4-Step Production Pipeline: From Plain English to Data Results
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[16px] text-slate-400 mt-2">
            The standard methodology for safely deploying AI SQL query builders across team workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center text-sm border border-blue-500/30">
              1
            </div>
            <h4 className="text-lg font-bold text-white">Ingest Database DDL</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Export your database schema (CREATE TABLE statements, foreign keys, and indexes) or connect via read-only connection credentials.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-sm border border-cyan-500/30">
              2
            </div>
            <h4 className="text-lg font-bold text-white">State Conversational Intent</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Ask your question specifying metrics, date ranges, and sorting preferences (e.g. &quot;Top 10 products by profit margin last quarter&quot;).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-sm border border-indigo-500/30">
              3
            </div>
            <h4 className="text-lg font-bold text-white">Inspect Query &amp; Cost</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Review the generated SQL syntax, verify table join logic, and confirm the execution cost before triggering large table scans.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-500/30">
              4
            </div>
            <h4 className="text-lg font-bold text-white">Export &amp; Visualize</h4>
            <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-xs leading-relaxed text-slate-400">
              Execute the query, view the results table, and export formatted CSV data or auto-generated charts into reports and dashboards.
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
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs tracking-widest uppercase mb-2">
            <Database className="w-4 h-4" /> Strategic Audiences
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Who Unlocks Maximum Value from AI SQL Query Builders?
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
                      ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 translate-x-2" 
                      : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-blue-500"}`} />
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold">
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
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs tracking-widest uppercase mb-1">
            <BookOpen className="w-4 h-4" /> Technical Architecture
          </div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Key Architectural Concepts in AI SQL Generation
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Schema RAG (Retrieval-Augmented Generation)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              In databases with hundreds of tables, passing the entire schema exceeds context limits. Schema RAG embeds table names, column descriptions, and historical queries into a vector database, retrieving only the relevant tables needed for a specific prompt.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Spider &amp; BIRD Benchmarks</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              The gold-standard academic benchmarks evaluating natural language to SQL translation accuracy across complex multi-database schemas with nested aggregations and real-world noisy data.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Cost-Based Query Optimization (CBO)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              Database algorithms that evaluate estimated CPU and I/O costs across different join algorithms (Hash Join, Merge Join, Nested Loop) to select the most computationally efficient query execution tree.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Common Table Expressions (CTEs)</h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif]">
              Temporary named result sets defined using the WITH clause. Modern AI SQL generators use CTEs to break massive multi-stage reporting queries into readable, debuggable logical units.
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
            Frequently Asked Questions: AI SQL Query Builders
          </h3>
          <p className="font-['Figtree',_'Figtree_Fallback',_system-ui,_sans-serif] text-[15px] text-slate-600 dark:text-slate-400 mt-1">
            Expert answers regarding NL-to-SQL accuracy, read-only security, and database dialects.
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
