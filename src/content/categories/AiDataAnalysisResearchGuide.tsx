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
  BarChart3, 
  Table, 
  FileSpreadsheet, 
  Activity, 
  Check, 
  HelpCircle, 
  Layers, 
  Database,
  Search,
  Sigma,
  Target,
  TrendingUp,
  Brain
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ---- DATA ---- //

const faqData = [
  {
    question: "What is an AI data analysis research tool and how does it interpret empirical datasets?",
    answer: "An AI research data analysis tool combines natural language processing with automated statistical computing (Python, R, and SQL). Researchers can upload raw CSV, Excel, SPSS, or qualitative interview datasets and ask analytical questions in plain English. The AI automatically cleans missing values, selects appropriate statistical models (such as ANOVA, multiple regression, or clustering), executes the code in a sandboxed runtime, and generates publication-grade visualizations with statistical significance interpretations."
  },
  {
    question: "What are the best AI research data analysis tools in 2026?",
    answer: "Julius AI is the leading conversational computational engine for researchers, generating Python and R code on the fly to produce statistical models and Seaborn/Matplotlib graphs. Polymer turns raw multi-dimensional spreadsheets into interactive, shareable research dashboards with zero code. Akkio excels in predictive machine learning models for non-technical research teams. NVivo AI pioneers qualitative coding, thematic categorization, and sentiment synthesis across hundreds of interview transcripts."
  },
  {
    question: "Can AI research data tools perform complex statistical hypothesis testing (ANOVA, MANOVA, regression)?",
    answer: "Yes. Leading platforms like Julius AI and ChatGPT Data Analyst don't just calculate basic averages; they evaluate underlying data assumptions (normality, homoscedasticity, multicollinearity), select the appropriate parametric or non-parametric test, report exact p-values, F-statistics, and effect sizes (Cohen's d, R-squared), and provide APA-compliant statistical writeups ready for journal manuscripts."
  },
  {
    question: "How do AI data analysis tools protect sensitive patient or participant research data?",
    answer: "Enterprise and academic tiers provide SOC2 Type II compliance, HIPAA compliance, and strict zero-data retention agreements. Sandboxed execution ensures data files are processed in ephemeral containers and never used to train frontier public LLM models, fulfilling Institutional Review Board (IRB) privacy mandates."
  }
];

const useCases = [
  {
    title: "Empirical Survey Analysis & Multivariate Regression",
    badge: "Social Sciences",
    desc: "Analyze 5,000+ respondent survey datasets to detect non-linear correlations, cross-tabulations, and demographic predictors.",
    benefits: [
      "Performs automated factor analysis, Cronbach's alpha reliability, and multiple regressions",
      "Generates interactive correlation matrices and demographic heatmaps in seconds",
      "Drafts APA-formatted statistical results sections with p-values and confidence intervals"
    ],
    highlight: "Shortened survey data processing cycle from 3 weeks to under 4 hours"
  },
  {
    title: "Experimental Laboratory Data & Assay Benchmarking",
    badge: "Life Sciences",
    desc: "Process multi-plate reader outputs, pharmacokinetic curves, and biochemical assay metrics with automated outlier detection.",
    benefits: [
      "Runs two-way ANOVA with post-hoc Tukey tests across control and treatment groups",
      "Generates publication-quality scatter plots with standard error bars and curve fitting",
      "Executes reproducible Python statistical scripts that export directly to Jupyter notebooks"
    ],
    highlight: "Accelerated biochemical assay screening analysis across 40 parallel test batches"
  },
  {
    title: "Qualitative Interview Coding & Thematic Synthesis",
    badge: "Qualitative Research",
    desc: "Synthesize 60+ semi-structured interview transcripts into grounded theory thematic frameworks and codebooks.",
    benefits: [
      "Autonomously tags emergent qualitative themes, sentiment tones, and recurring patterns",
      "Cross-references thematic clusters against participant demographic cohorts",
      "Generates verbatim quotation matrices supporting each synthesized qualitative code"
    ],
    highlight: "Reduced qualitative coding time by 78% while maintaining inter-coder reliability"
  }
];

const glossaryTerms = [
  {
    term: "Code Execution Sandbox",
    definition: "An isolated cloud environment where AI generates and executes real Python or R code against user data without security vulnerabilities."
  },
  {
    term: "Parametric vs Non-Parametric Detection",
    definition: "Automated checks determining whether dataset distributions satisfy normality assumptions before applying t-tests or Mann-Whitney tests."
  },
  {
    term: "Effect Size Reporting",
    definition: "Computation of standardized metrics (such as Cohen's d or partial eta squared) alongside p-values to evaluate empirical significance."
  },
  {
    term: "Qualitative Grounded Coding",
    definition: "The inductive classification of textual transcript data into categorical codes, sub-themes, and overarching theoretical models."
  }
];

export default function AiDataAnalysisResearchGuide() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Calculator State
  const [datasetsPerMonth, setDatasetsPerMonth] = useState(6);
  const [analystHourlyRate, setAnalystHourlyRate] = useState(75);

  // Calculation formulas
  // Manual analysis: data cleaning, writing scripts, debugging packages ~ 12 hrs per dataset
  // AI analysis: prompt guidance, automated execution, export ~ 2 hrs per dataset
  const manualHours = datasetsPerMonth * 12;
  const aiHours = datasetsPerMonth * 2;
  const hoursSavedMonthly = Math.max(0, manualHours - aiHours);
  const annualDollarsSaved = Math.round(hoursSavedMonthly * analystHourlyRate * 12);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500/30 selection:text-purple-200">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 space-y-12 md:space-y-16">
        
        {/* HERO SECTION */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative text-center space-y-4 md:space-y-6 pt-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-medium">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>Empirical Intelligence &amp; Computational Analytics</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            AI Data Analysis for Research: <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              From Raw Data to Publication-Ready Insights
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
            Turn raw scientific spreadsheets, survey microdata, and qualitative transcripts into verified statistical regressions, publication-grade figures, and reproducible Python/R notebooks with conversational AI.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="#matrix"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/25 hover:shadow-purple-500/35"
            >
              Compare Data Platforms
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-sm transition-all"
            >
              <Calculator className="w-4 h-4 text-purple-400" />
              Calculate Research Savings
            </Link>
          </div>
        </motion.section>

        {/* 1. PARADIGM SHIFT BENTO GRID (01/02/03) */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">The Computational Paradigm Shift</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              How conversational statistical engines replace weeks of manual script debugging with instant empirical rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1 */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors" />
              <div className="text-4xl font-black text-purple-500/20 mb-3">01</div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Sigma className="w-5 h-5 text-purple-400" />
                Natural Language Statistics
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pose plain-language questions like &quot;Run a two-way ANOVA comparing control vs treatment with post-hoc Tukey tests&quot; and receive verified statistical output with executable Python code.
              </p>
            </div>

            {/* Bento Card 2 */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors" />
              <div className="text-4xl font-black text-indigo-500/20 mb-3">02</div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-indigo-400" />
                Publication-Ready Visualizations
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Generate high-DPI vector plots (Matplotlib, Seaborn, Plotly) with confidence bands, customized axis typography, and color schemes calibrated for scientific journal publication standards.
              </p>
            </div>

            {/* Bento Card 3 */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
              <div className="text-4xl font-black text-cyan-500/20 mb-3">03</div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-400" />
                Dual Quant &amp; Qual Synthesis
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Seamlessly bridge quantitative statistical testing and qualitative transcript coding. Upload transcripts and datasets side-by-side to cross-tabulate mixed-methods research findings.
              </p>
            </div>
          </div>
        </section>

        {/* 2. INTERACTIVE IMPACT / ROI CALCULATOR */}
        <section id="calculator" className="p-6 md:p-10 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-purple-500/20 shadow-xl space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              Computational Research ROI Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Quantify Your Empirical Lab Velocity</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Calculate how many hours of manual script writing, data cleaning, and chart formatting your lab eliminates each month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center text-sm font-medium text-slate-300 mb-2">
                  <span>Datasets / Experimental Runs Analyzed Monthly:</span>
                  <span className="text-purple-400 font-bold text-base">{datasetsPerMonth} datasets</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="25"
                  step="1"
                  value={datasetsPerMonth}
                  onChange={(e) => setDatasetsPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1 (Single Project)</span>
                  <span>10 (Active Lab)</span>
                  <span>25+ (Clinical Core)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-sm font-medium text-slate-300 mb-2">
                  <span>Hourly Value of Statistical &amp; Lab Fellow:</span>
                  <span className="text-purple-400 font-bold text-base">${analystHourlyRate}/hr</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="175"
                  step="5"
                  value={analystHourlyRate}
                  onChange={(e) => setAnalystHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>$30/hr (Grad Fellow)</span>
                  <span>$75/hr (Data Scientist)</span>
                  <span>$175/hr (Principal Biostatistician)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-6 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <Timer className="w-5 h-5 text-purple-400 mx-auto mb-1.5" />
                <div className="text-2xl sm:text-3xl font-black text-white">{hoursSavedMonthly} hrs</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Monthly Hours Reclaimed</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <DollarSign className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">${annualDollarsSaved.toLocaleString()}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Annual Lab Value Created</div>
              </div>
              <div className="col-span-2 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                <span className="font-semibold text-purple-200">Reproducibility Guarantee:</span> Every computation exports full, transparent Python scripts for inclusion in journal supplementary materials.
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE ARCHITECTURE (4 STEPS) */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">4-Step AI Data Analysis Pipeline</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              How conversational analytics platforms intake raw empirical files and output validated scientific proofs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 font-bold flex items-center justify-center text-sm border border-purple-500/20">
                1
              </div>
              <h3 className="font-semibold text-white text-base">Schema Ingestion</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Ingests CSV, SPSS (.sav), Excel, or SQL dumps; identifies data types, missing records, and variable distributions.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 font-bold flex items-center justify-center text-sm border border-indigo-500/20">
                2
              </div>
              <h3 className="font-semibold text-white text-base">Code Synthesis &amp; Exec</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Translates natural language questions into sandboxed Python (Pandas/Scipy/Statsmodels) or R scripts.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold flex items-center justify-center text-sm border border-cyan-500/20">
                3
              </div>
              <h3 className="font-semibold text-white text-base">Hypothesis Validation</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Executes formal hypothesis tests, checks model assumptions, and computes effect sizes and confidence intervals.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-500/20">
                4
              </div>
              <h3 className="font-semibold text-white text-base">Publishable Artifacts</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Exports vector SVG figures, LaTeX summary tables, and downloadable Jupyter notebooks for open science sharing.
              </p>
            </div>
          </div>
        </section>

        {/* 4. TOP 3 ALTERNATIVES MATRIX */}
        <section id="matrix" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Top 3 AI Research Data Platforms</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Comparing leading platforms for conversational computation, automated dashboards, and empirical research analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Julius AI */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/90 border-2 border-purple-500/40 relative space-y-4 shadow-xl shadow-purple-500/5">
              <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-bold tracking-wide flex items-center gap-1">
                <Crown className="w-3.5 h-3.5" />
                RESEARCH STATS LEADER
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Julius AI</h3>
                <p className="text-xs text-purple-400 font-medium mt-0.5">Conversational Python/R Engine</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                The most powerful AI statistical analyst for academics. Executes Python and R scripts in sandboxed environments, explaining findings and rendering publication plots.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Multivariate regressions, ANOVA, &amp; machine learning</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Exports clean Jupyter notebooks (.ipynb) and raw code</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Supports CSV, Excel, SPSS, and Google Sheets</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">Best for:</span> Academic researchers, doctoral candidates, and biostatisticians needing verified Python/R execution.
              </div>
            </div>

            {/* Polymer Search */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white">Polymer</h3>
                <p className="text-xs text-indigo-400 font-medium mt-0.5">Interactive No-Code Dashboards</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Transforms complex multi-column spreadsheets into interactive, visual research dashboards with zero coding required.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Auto-generates dimensional pivot tables and charts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Interactive public or private research dashboard links</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Instant multi-filter correlation discovery</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">Best for:</span> Non-technical research teams, public policy analysts, and data storytelling presentations.
              </div>
            </div>

            {/* Akkio */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white">Akkio</h3>
                <p className="text-xs text-cyan-400 font-medium mt-0.5">Predictive Modeling &amp; ML</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                No-code machine learning platform designed for building predictive models, feature importance rankings, and forecasting from historical data.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Automated feature importance and driver analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Predictive classification and numerical forecasting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Live data connectors to Snowflake, BigQuery, and Sheets</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">Best for:</span> Applied research labs, clinical outcome forecasting, and behavioral modeling.
              </div>
            </div>
          </div>
        </section>

        {/* 5. TABBED USE CASES */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Multidisciplinary Research Use Cases</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              How researchers across the sciences apply conversational data analysis to accelerate discovery.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 border-b border-slate-800 pb-3">
            {useCases.map((uc, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === index 
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/20" 
                    : "bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                {uc.badge}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-white">{useCases[activeTab].title}</h3>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold self-start sm:self-auto">
                {useCases[activeTab].badge}
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {useCases[activeTab].desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {useCases[activeTab].benefits.map((b, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-purple-300">
              <Zap className="w-4 h-4 text-purple-400 shrink-0" />
              <span>{useCases[activeTab].highlight}</span>
            </div>
          </div>
        </section>

        {/* 6. 4-STEP IMPLEMENTATION ROADMAP */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">4-Step Lab Adoption Roadmap</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              How to integrate AI computational engines into your lab workflow while maintaining open science compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative">
              <div className="text-3xl font-black text-purple-500/20">STEP 1</div>
              <h3 className="font-bold text-white text-base">Sanitize &amp; Anonymize</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Strip personally identifiable information (PII) and ensure datasets comply with IRB guidelines before upload.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative">
              <div className="text-3xl font-black text-indigo-500/20">STEP 2</div>
              <h3 className="font-bold text-white text-base">Conversational Modeling</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Ask targeted statistical questions, prompt for model assumption diagnostics, and refine regression specifications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative">
              <div className="text-3xl font-black text-cyan-500/20">STEP 3</div>
              <h3 className="font-bold text-white text-base">Inspect Underlying Code</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Always review generated Python/R code to verify package versions, formula equations, and degrees of freedom.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative">
              <div className="text-3xl font-black text-emerald-500/20">STEP 4</div>
              <h3 className="font-bold text-white text-base">Archive Reproducible Notebook</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Download the complete Jupyter notebook or script and publish it to OSF, GitHub, or Zenodo as supplementary materials.
              </p>
            </div>
          </div>
        </section>

        {/* 7. COMPARISON BRIDGE TABLE */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Feature Matrix: Manual Coding vs AI Statistical Engines</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              How conversational AI statistical platforms compare to traditional manual R/Python/SPSS scripting.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-300 font-semibold">
                  <th className="p-4 sm:p-5">Dimension</th>
                  <th className="p-4 sm:p-5 text-slate-400">Traditional Scripting (R/SPSS)</th>
                  <th className="p-4 sm:p-5 text-purple-400 font-bold">AI Data Engines (Julius)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Analysis Speed</td>
                  <td className="p-4 sm:p-5 text-slate-400">Hours writing boilerplate code and resolving package errors</td>
                  <td className="p-4 sm:p-5 text-purple-300 font-medium">Instant natural-language queries executed in seconds</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Visualization Customization</td>
                  <td className="p-4 sm:p-5 text-slate-400">Tedious ggplot2/matplotlib syntax adjustments</td>
                  <td className="p-4 sm:p-5 text-purple-300 font-medium">Conversational prompt styling (e.g. &quot;Change to Nature palette&quot;)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Assumption Diagnostics</td>
                  <td className="p-4 sm:p-5 text-slate-400">Frequently overlooked due to manual coding overhead</td>
                  <td className="p-4 sm:p-5 text-purple-300 font-medium">Automatic checks for normality, skewness, and outliers</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Academic Writeups</td>
                  <td className="p-4 sm:p-5 text-slate-400">Manual transcription into APA format tables</td>
                  <td className="p-4 sm:p-5 text-purple-300 font-medium">Generates complete APA text blocks with p-values &amp; effect sizes</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Open Science Reproducibility</td>
                  <td className="p-4 sm:p-5 text-slate-400">Requires manual script cleaning before sharing</td>
                  <td className="p-4 sm:p-5 text-purple-300 font-medium">1-click export of clean Jupyter notebooks (.ipynb)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 8. GLOSSARY (4 TERMS) */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Key Data Science &amp; Research Terms</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Essential concepts governing AI empirical analysis, statistics, and reproducible science.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {glossaryTerms.map((g, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <h3 className="text-base font-bold text-purple-300 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-purple-400 shrink-0" />
                  {g.term}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {g.definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. FAQ ACCORDION */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Everything you need to know about conducting scientific data analysis with conversational AI.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-800 bg-slate-900/70 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 text-white hover:text-purple-300 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-purple-400 shrink-0 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-800/60 bg-slate-950/40 p-4 sm:p-5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* 10. CONVERSION CTA */}
        <section className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-slate-900 border border-purple-500/30 text-center space-y-6 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Transform Your Research Data Workflow
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our curated leaderboard of AI data analysis tools. Accelerate your experimental computations, verify statistical power, and produce publication-ready figures today.
            </p>
            <div className="pt-2">
              <Link
                href="/category/ai-research-tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-purple-600/30 hover:scale-[1.02]"
              >
                Explore All AI Research Engines
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
