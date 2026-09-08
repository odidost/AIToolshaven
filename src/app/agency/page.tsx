import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { FadeIn } from "@/components/animations/FadeIn";
import { AgencyHeroWorkflow } from "@/components/agency/AgencyHeroWorkflow";
import { ExampleSystemDiagram } from "@/components/agency/ExampleSystemDiagram";
import { AgencyProjectIntake } from "@/components/agency/AgencyProjectIntake";
import { AgencyFAQ } from "@/components/agency/AgencyFAQ";

export const metadata: Metadata = {
  title: "AI Automation & AI Development Agency | AI Tools Haven",
  description:
    "AI Tools Haven builds AI agents, automations, integrations, and AI-powered systems that help businesses reduce repetitive work and operate more efficiently.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/agency`,
  },
  openGraph: {
    title: "AI Automation & AI Development Agency | AI Tools Haven",
    description:
      "AI Tools Haven builds AI agents, automations, integrations, and AI-powered systems that help businesses reduce repetitive work and operate more efficiently.",
    url: `${siteConfig.baseUrl}/agency`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AI Tools Haven — AI Implementation Studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation & AI Development Agency | AI Tools Haven",
    description:
      "AI Tools Haven builds AI agents, automations, integrations, and AI-powered systems that help businesses reduce repetitive work.",
    images: [siteConfig.ogImage],
  },
};

export default function AgencyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AI Tools Haven — AI Implementation Studio",
    description:
      "AI Tools Haven builds AI agents, automations, integrations, and AI-powered systems that help businesses reduce repetitive work and operate more efficiently.",
    url: `${siteConfig.baseUrl}/agency`,
    email: "aitoolshaven@gmail.com",
    serviceType: [
      "AI Automation",
      "AI Agent Development",
      "AI Workflow Integration",
      "AI-Powered Web Applications",
    ],
  };

  const useCases = [
    { title: "Lead qualification", icon: "filter_alt" },
    { title: "Customer support", icon: "support_agent" },
    { title: "Appointment booking", icon: "event_available" },
    { title: "Internal knowledge", icon: "library_books" },
    { title: "Reporting & analytics", icon: "monitoring" },
    { title: "Data collection", icon: "dataset" },
    { title: "Content workflows", icon: "auto_stories" },
    { title: "Market research", icon: "travel_explore" },
    { title: "Email processing", icon: "mail" },
    { title: "Document processing", icon: "description" },
    { title: "CRM updates", icon: "sync" },
    { title: "Business intelligence", icon: "insights" },
  ];

  const targetTeams = [
    "Startups",
    "Agencies",
    "Professional services",
    "E-commerce",
    "SaaS",
    "Local businesses",
    "Consultancies",
    "Operations teams",
  ];

  return (
    <div className="relative overflow-hidden bg-background text-foreground pb-16">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Subtle Ambient Background Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[10%] left-[15%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[140px]" />
        <div className="absolute top-[40%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-secondary/5 blur-[140px]" />
      </div>

      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative pt-16 sm:pt-20 md:pt-24 pb-16 overflow-hidden border-b border-black/5">
        <PageContainer className="relative z-10 flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            AI AUTOMATION &amp; IMPLEMENTATION
          </div>

          {/* H1 */}
          <h1 className="text-fluid-h1 font-black tracking-tight text-slate-900 max-w-4xl leading-tight">
            Turn AI Tools Into AI Systems.
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
            We design, build, and deploy custom AI agents, automated integrations, and intelligent business workflows that eliminate repetitive operations and connect directly into your existing tools.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#start-project"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2"
            >
              Tell Us What You Want to Automate
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>
            <a
              href="#what-we-build"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white text-slate-700 font-bold text-sm border border-slate-200 hover:bg-slate-50 transition-all duration-200 flex items-center justify-center gap-2"
            >
              See What We Build
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* Small Trust / Positioning Line */}
          <p className="mt-6 text-xs sm:text-sm font-medium text-slate-500">
            From AI agents and automations to intelligent websites and business workflows.
          </p>

          {/* Restrained System Diagram Visual */}
          <AgencyHeroWorkflow />
        </PageContainer>
      </section>

      {/* ============================================================ */}
      {/* 2. THE PROBLEM */}
      {/* ============================================================ */}
      <SectionContainer className="py-20 sm:py-24 border-b border-black/5 bg-slate-50/50">
        <PageContainer>
          {/* Section Header */}
          <div className="max-w-3xl mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] font-mono font-semibold tracking-wider uppercase mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              WHY AI PROJECTS FAIL
            </div>
            <h2 className="text-fluid-h2 font-black tracking-tight text-slate-900 leading-tight">
              Most businesses don&apos;t need more AI tools.
              <span className="block text-slate-700 font-bold">They need the right system.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Finding an AI tool is easy. The difficult part is connecting it to your existing processes, giving it the right context, and making sure it reliably does useful work.
            </p>
          </div>

          {/* 3 Engineering Diagnosis Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 01 */}
            <div className="group rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    01
                  </span>
                  <span className="font-mono text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100/80">
                    TOOL SELECTION
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  Too Many Tools
                </h3>
                <p className="text-sm font-semibold text-slate-800 mb-2 leading-snug">
                  The problem isn&apos;t access. It&apos;s selection.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thousands of AI tools exist, but choosing the right combination for your business can quickly become overwhelming.
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="group rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    02
                  </span>
                  <span className="font-mono text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100/80">
                    SYSTEM DESIGN
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  Disconnected Workflows
                </h3>
                <p className="text-sm font-semibold text-slate-800 mb-2 leading-snug">
                  Your tools don&apos;t work in isolation.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  AI becomes valuable when it connects with your website, CRM, email, databases, internal tools, and existing workflows.
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="group rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    03
                  </span>
                  <span className="font-mono text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100/80">
                    IMPLEMENTATION
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  No Clear Implementation
                </h3>
                <p className="text-sm font-semibold text-slate-800 mb-2 leading-snug">
                  A tool isn&apos;t a solution until it does the work.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We turn AI capabilities into practical systems that automate repetitive tasks and move work forward.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Bottom Transition into Section 3: "What We Build" */}
          <div className="mt-16 sm:mt-20 pt-12 sm:pt-14 border-t border-slate-200/80 flex flex-col items-center text-center">
            <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2.5">
              THE AI TOOLS AREN&apos;T THE HARD PART.
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-6">
              We design the system around them.
            </h3>

            {/* Subtle Connected Logic Pipeline */}
            <div className="w-full max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              {/* Top Layer: Core Logic */}
              <div className="flex items-center justify-between gap-1 sm:gap-2">
                {["INPUT", "AI", "DECISION", "ACTION", "RESULT"].map((stage, idx) => (
                  <React.Fragment key={stage}>
                    <div className="flex-1 text-center py-2 px-1 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-800 tracking-wider">
                        {stage}
                      </span>
                    </div>
                    {idx < 4 && (
                      <span className="material-symbols-outlined text-[14px] sm:text-[16px] text-slate-300 flex-shrink-0">
                        arrow_forward
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Bottom Layer: Concrete Application Mapping */}
              <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-1 sm:gap-2 text-[10px] sm:text-[11px] font-medium text-slate-500">
                <span className="flex-1 text-center truncate">Lead</span>
                <span className="text-slate-300">&rarr;</span>
                <span className="flex-1 text-center truncate">Qualification</span>
                <span className="text-slate-300">&rarr;</span>
                <span className="flex-1 text-center truncate">CRM</span>
                <span className="text-slate-300">&rarr;</span>
                <span className="flex-1 text-center truncate">Follow-up</span>
                <span className="text-slate-300">&rarr;</span>
                <span className="flex-1 text-center truncate font-semibold text-slate-700">Meeting</span>
              </div>
            </div>
          </div>
        </PageContainer>
      </SectionContainer>

      {/* ============================================================ */}
      {/* 3. WHAT WE BUILD */}
      {/* ============================================================ */}
      <SectionContainer id="what-we-build" className="py-20 sm:py-24 border-b border-black/5">
        <PageContainer>
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
              Capabilities &amp; Services
            </span>
            <h2 className="text-fluid-h2 font-black tracking-tight text-slate-900">
              We build the systems behind the AI.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-slate-400">01</span>
                <span className="material-symbols-outlined text-primary text-2xl">
                  schema
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                AI Automation
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Connect the tools you already use and automate repetitive workflows.
              </p>
              <div className="border-t border-slate-100 pt-4">
                <div className="text-xs font-mono font-semibold text-slate-400 uppercase mb-3">
                  Examples
                </div>
                <ul className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Lead routing
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Email workflows
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> CRM automation
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Data processing
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Automated reporting
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Internal workflows
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-slate-400">02</span>
                <span className="material-symbols-outlined text-primary text-2xl">
                  smart_toy
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                AI Agents
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Build AI agents that can reason, retrieve information, take actions, and complete specific business tasks.
              </p>
              <div className="border-t border-slate-100 pt-4">
                <div className="text-xs font-mono font-semibold text-slate-400 uppercase mb-3">
                  Examples
                </div>
                <ul className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> AI sales agents
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Customer support agents
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Research agents
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Internal assistants
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Lead qualification agents
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Decision audit pipelines
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-slate-400">03</span>
                <span className="material-symbols-outlined text-primary text-2xl">
                  integration_instructions
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                AI Implementation
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Turn the AI tools you discover into working systems inside your business.
              </p>
              <div className="border-t border-slate-100 pt-4">
                <div className="text-xs font-mono font-semibold text-slate-400 uppercase mb-3">
                  Integrated Stacks
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["OpenAI", "Claude", "Gemini", "n8n", "Make", "Zapier", "Custom REST APIs", "CRMs"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 font-mono text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-slate-400">04</span>
                <span className="material-symbols-outlined text-primary text-2xl">
                  web
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                AI-Powered Websites
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Build websites that do more than display information.
              </p>
              <div className="border-t border-slate-100 pt-4">
                <div className="text-xs font-mono font-semibold text-slate-400 uppercase mb-3">
                  Examples
                </div>
                <ul className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Semantic AI search
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> AI recommendations
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Intelligent chat
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Lead qualification
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Personalized experiences
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Knowledge assistants
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </PageContainer>
      </SectionContainer>

      {/* ============================================================ */}
      {/* 4. HOW IT WORKS */}
      {/* ============================================================ */}
      <SectionContainer className="py-20 sm:py-24 border-b border-black/5 bg-slate-50/50">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
              Implementation Process
            </span>
            <h2 className="text-fluid-h2 font-black tracking-tight text-slate-900">
              From idea to working system.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 relative">
              <span className="font-mono text-2xl font-black text-slate-300 block mb-3">
                01
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Discover</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We understand the workflow, bottleneck, or opportunity inside your current operations.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 relative">
              <span className="font-mono text-2xl font-black text-slate-300 block mb-3">
                02
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Design</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We map the AI tools, integrations, data structures, and automation logic required.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 relative">
              <span className="font-mono text-2xl font-black text-slate-300 block mb-3">
                03
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Build</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We implement the system, verify edge cases, and connect it to your existing workflow.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 relative">
              <span className="font-mono text-2xl font-black text-slate-300 block mb-3">
                04
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Optimize</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We monitor accuracy, improve latency, and expand the system as your needs evolve.
              </p>
            </div>
          </div>
        </PageContainer>
      </SectionContainer>

      {/* ============================================================ */}
      {/* 5. EXAMPLE SYSTEM */}
      {/* ============================================================ */}
      <SectionContainer className="py-20 sm:py-24 border-b border-black/5">
        <PageContainer>
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
              System Demonstration
            </span>
            <h2 className="text-fluid-h2 font-black tracking-tight text-slate-900">
              Imagine your business running this workflow automatically.
            </h2>
          </div>

          <ExampleSystemDiagram />
        </PageContainer>
      </SectionContainer>

      {/* ============================================================ */}
      {/* 6. AI TOOLS HAVEN DIFFERENTIATOR */}
      {/* ============================================================ */}
      <SectionContainer className="py-20 sm:py-24 border-b border-black/5 bg-slate-50/50">
        <PageContainer>
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
              The AI Tools Haven Advantage
            </span>
            <h2 className="text-fluid-h2 font-black tracking-tight text-slate-900 mb-6">
              We&apos;ve already done the research.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10">
              AI Tools Haven exists because choosing the right AI tools shouldn&apos;t require hours of research. We&apos;ve built a growing database of AI products, capabilities, pricing, and use cases. Now we&apos;re taking that knowledge one step further.
            </p>

            {/* Progression Flow */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 shadow-xs mb-8">
              {["Discover", "Compare", "Choose", "Build", "Automate"].map((stage, idx) => (
                <div key={stage} className="flex items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold bg-slate-100 text-slate-800">
                    {stage}
                  </span>
                  {idx < 4 && (
                    <span className="material-symbols-outlined text-[16px] text-slate-400">
                      arrow_forward
                    </span>
                  )}
                </div>
              ))}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Discover the tools. Then let us build the system.
            </h3>
          </div>
        </PageContainer>
      </SectionContainer>

      {/* ============================================================ */}
      {/* 7. USE CASES */}
      {/* ============================================================ */}
      <SectionContainer className="py-20 sm:py-24 border-b border-black/5">
        <PageContainer>
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
              Areas of Application
            </span>
            <h2 className="text-fluid-h2 font-black tracking-tight text-slate-900">
              What could we automate for you?
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 bg-white hover:border-slate-300 transition-all duration-200 flex items-center gap-3 group shadow-xs hover:shadow-sm"
              >
                <div className="h-9 w-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 flex-shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    {uc.icon}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                  {uc.title}
                </span>
              </div>
            ))}
          </div>
        </PageContainer>
      </SectionContainer>

      {/* ============================================================ */}
      {/* 8. WHO WE HELP */}
      {/* ============================================================ */}
      <SectionContainer className="py-16 sm:py-20 border-b border-black/5 bg-slate-50/50">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-fluid-h2 font-black tracking-tight text-slate-900">
              Built for teams that want AI to do actual work.
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {targetTeams.map((team) => (
              <div
                key={team}
                className="px-4 py-2.5 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs"
              >
                {team}
              </div>
            ))}
          </div>
        </PageContainer>
      </SectionContainer>

      {/* ============================================================ */}
      {/* 9. CUSTOM AI SYSTEM CTA (Intake Component) */}
      {/* ============================================================ */}
      <SectionContainer className="py-20 sm:py-24 border-b border-black/5">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
              Start an AI Project
            </span>
            <h2 className="text-fluid-h2 font-black tracking-tight text-slate-900 mb-4">
              Tell us what you want AI to do.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              You don&apos;t need to know which tools to use. Tell us what currently takes too much time, and we&apos;ll help map out what could be automated.
            </p>
          </div>

          <AgencyProjectIntake />
        </PageContainer>
      </SectionContainer>

      {/* ============================================================ */}
      {/* 10. FAQ */}
      {/* ============================================================ */}
      <SectionContainer className="py-20 sm:py-24 border-b border-black/5 bg-slate-50/50">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
              Clarity &amp; Transparency
            </span>
            <h2 className="text-fluid-h2 font-black tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <AgencyFAQ />
        </PageContainer>
      </SectionContainer>

      {/* ============================================================ */}
      {/* FINAL MINIMALIST CTA */}
      {/* ============================================================ */}
      <SectionContainer className="py-20 sm:py-24">
        <PageContainer className="text-center max-w-2xl mx-auto">
          <h2 className="text-fluid-h2 font-black tracking-tight text-slate-900 mb-6">
            Your next AI system could start with one conversation.
          </h2>
          <a
            href="#start-project"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
          >
            Start Your AI Project
            <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
          </a>
        </PageContainer>
      </SectionContainer>
    </div>
  );
}
