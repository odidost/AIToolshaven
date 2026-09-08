"use client";

import React, { useEffect, useState } from "react";

interface WorkflowStep {
  name: string;
  source: string;
  status: string;
  category: "INPUT" | "REASONING" | "DECISION" | "INTEGRATION" | "ACTION" | "OUTPUT";
  icon: string;
}

const steps: WorkflowStep[] = [
  {
    name: "LEAD INGESTION",
    source: "Website / Form",
    status: "RECEIVED",
    category: "INPUT",
    icon: "mail",
  },
  {
    name: "AI AGENT",
    source: "GPT / Claude",
    status: "PROCESSING",
    category: "REASONING",
    icon: "psychology",
  },
  {
    name: "QUALIFICATION",
    source: "Intent + Fit",
    status: "QUALIFIED",
    category: "DECISION",
    icon: "rule",
  },
  {
    name: "CRM SYNC",
    source: "HubSpot / Supabase",
    status: "SYNCED",
    category: "INTEGRATION",
    icon: "sync_alt",
  },
  {
    name: "FOLLOW-UP",
    source: "Email / SMS",
    status: "SENT",
    category: "ACTION",
    icon: "send",
  },
  {
    name: "MEETING",
    source: "Cal.com",
    status: "BOOKED",
    category: "OUTPUT",
    icon: "calendar_today",
  },
];

export function AgencyHeroWorkflow() {
  // Controlled sequential pulse animation
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 md:mt-12 p-4 sm:p-6 lg:p-7 rounded-3xl bg-white/80 border border-slate-200/90 shadow-[0_12px_44px_-16px_rgba(15,23,42,0.08)] backdrop-blur-md">
      {/* 5. Subtle Technical Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-5 px-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] sm:text-xs font-semibold text-slate-800 tracking-wider uppercase">
            AI SYSTEM / LEAD OPERATIONS
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px] sm:text-xs">
          <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-600">
            <span className="relative flex h-2 w-2">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            LIVE
          </span>
          <span className="text-slate-300">|</span>
          <span className="font-semibold text-slate-500 uppercase tracking-wide">
            6 STEPS AUTOMATED
          </span>
        </div>
      </div>

      {/* Desktop / Laptop / Tablet Pipeline */}
      <div className="hidden md:block relative py-2">
        {/* Subtle connector rails */}
        <div className="absolute left-6 right-6 top-[38px] h-[1.5px] bg-slate-200/80 -z-0" />
        
        {/* Active connector laser pulse */}
        <div
          className="absolute top-[38px] h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-700 ease-out -z-0"
          style={{
            left: `${(activeStep / (steps.length - 1)) * 82 + 5}%`,
            width: "12%",
            opacity: 0.9,
          }}
        />

        {/* 6 Grid Nodes */}
        <div className="grid grid-cols-6 gap-2.5 lg:gap-3 relative z-10">
          {steps.map((step, index) => {
            const isPulseActive = activeStep === index;
            return (
              <div
                key={step.name}
                className="flex flex-col items-center group cursor-default"
              >
                {/* Node Box */}
                <div
                  className={`w-full rounded-2xl p-3 flex flex-col items-center justify-between text-center transition-all duration-300 min-h-[114px] ${
                    isPulseActive
                      ? "bg-white border-primary/50 shadow-md ring-1 ring-primary/20 -translate-y-1"
                      : "bg-white/95 border border-slate-200/80 hover:border-slate-300 shadow-xs"
                  }`}
                >
                  {/* Category icon */}
                  <div
                    className={`h-7 w-7 rounded-xl flex items-center justify-center mb-1.5 transition-colors ${
                      isPulseActive
                        ? "bg-primary text-white"
                        : "bg-slate-100 text-slate-600 group-hover:text-slate-900"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {step.icon}
                    </span>
                  </div>

                  {/* Primary Node Name */}
                  <div className="text-[11px] lg:text-xs font-black tracking-tight text-slate-900 leading-tight">
                    {step.name}
                  </div>

                  {/* Context: Website / Form, GPT / Claude, etc. */}
                  <div className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5 truncate w-full">
                    {step.source}
                  </div>

                  {/* Subtle Status Pill */}
                  <div className="mt-2 pt-1.5 border-t border-slate-100 w-full flex items-center justify-center">
                    <span
                      className={`font-mono text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded ${
                        isPulseActive
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200/70"
                          : "bg-slate-50 text-slate-400 border border-slate-100"
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>
                </div>

                {/* Node Stage Category Tag */}
                <span className="mt-2 font-mono text-[9px] font-semibold text-slate-400 uppercase tracking-wider">
                  {step.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Stacked Pipeline (320px - 767px) */}
      <div className="md:hidden flex flex-col gap-2">
        {steps.map((step, index) => {
          const isPulseActive = activeStep === index;
          return (
            <React.Fragment key={step.name}>
              <div
                className={`flex items-center justify-between p-3 rounded-2xl bg-white border transition-all duration-200 ${
                  isPulseActive
                    ? "border-primary/50 shadow-sm ring-1 ring-primary/20"
                    : "border-slate-200/80 shadow-xs"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`h-8 w-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isPulseActive
                        ? "bg-primary text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[17px]">
                      {step.icon}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                      <span>{step.name}</span>
                      <span className="font-mono text-[9px] text-slate-400 font-normal">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium truncate">
                      {step.source}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end flex-shrink-0 pl-2">
                  <span
                    className={`font-mono text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
                      isPulseActive
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {step.status}
                  </span>
                  <span className="font-mono text-[8px] text-slate-400 uppercase mt-0.5">
                    {step.category}
                  </span>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="flex justify-center -my-1 text-slate-300">
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_downward
                  </span>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Bottom Summary Callout */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-slate-500 gap-2">
        <span className="text-center sm:text-left">
          Synchronizes website inputs, AI intelligence, CRM records, and automated booking in real time.
        </span>
        <span className="font-mono text-slate-700 font-semibold flex-shrink-0">
          EXECUTION: &lt; 4.0s
        </span>
      </div>
    </div>
  );
}
