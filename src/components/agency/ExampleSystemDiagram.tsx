"use client";

import React, { useState } from "react";

interface WorkflowNode {
  id: string;
  step: string;
  category: "INPUT" | "REASONING" | "DECISION" | "INTEGRATION" | "ACTION" | "OUTPUT";
  title: string;
  tool: string;
  description: string;
  status: "Completed" | "Processing" | "Standing by";
  icon: string;
}

const exampleNodes: WorkflowNode[] = [
  {
    id: "node-1",
    step: "01",
    category: "INPUT",
    title: "Website Inquiry Received",
    tool: "Next.js Form / Typeform",
    description: "Prospective customer submits project specs and contact information via company portal.",
    status: "Completed",
    icon: "assignment",
  },
  {
    id: "node-2",
    step: "02",
    category: "REASONING",
    title: "AI Analysis & Extraction",
    tool: "Claude 3.5 / GPT-4o Agent",
    description: "Parses business model, budget intent, technology stack, and priority timeline.",
    status: "Completed",
    icon: "psychology",
  },
  {
    id: "node-3",
    step: "03",
    category: "DECISION",
    title: "Lead Qualification Engine",
    tool: "Custom Scoring Logic",
    description: "Evaluates ICP fit (Ideal Customer Profile) and flags enterprise versus standard inbound routing.",
    status: "Completed",
    icon: "rule",
  },
  {
    id: "node-4",
    step: "04",
    category: "INTEGRATION",
    title: "CRM Profile Updated",
    tool: "HubSpot / Salesforce / Supabase",
    description: "Populates contact record, enriches firmographic data, and assigns account owner.",
    status: "Completed",
    icon: "database",
  },
  {
    id: "node-5",
    step: "05",
    category: "ACTION",
    title: "Personalized Outreach Sent",
    tool: "Resend / Smartlead",
    description: "Sends customized scope breakdown referencing the client's specific questions and goals.",
    status: "Completed",
    icon: "mark_email_read",
  },
  {
    id: "node-6",
    step: "06",
    category: "INTEGRATION",
    title: "Internal Team Briefed",
    tool: "Slack / Linear",
    description: "Dispatches summary card with AI-generated research brief into sales channel.",
    status: "Completed",
    icon: "chat_bubble",
  },
  {
    id: "node-7",
    step: "07",
    category: "OUTPUT",
    title: "Discovery Call Confirmed",
    tool: "Cal.com / Google Calendar",
    description: "Client selects slot; calendar invite, Zoom link, and prep notes issued automatically.",
    status: "Completed",
    icon: "event_available",
  },
];

export function ExampleSystemDiagram() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(1);
  const activeNode = exampleNodes[activeNodeIndex];

  return (
    <div className="w-full rounded-3xl bg-slate-900 text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            LIVE PIPELINE ARCHITECTURE
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Inbound Lead &rarr; Qualification &rarr; Automated Booking
          </h3>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700/60">
            7 Sequential Nodes
          </span>
          <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700/60 text-emerald-400">
            Zero Human Bottlenecks
          </span>
        </div>
      </div>

      {/* Main Grid: Interactive Stage List + Inspector Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Left Column: Stages Sequence */}
        <div className="lg:col-span-7 flex flex-col gap-2.5">
          {exampleNodes.map((node, index) => {
            const isSelected = activeNodeIndex === index;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveNodeIndex(index)}
                className={`text-left w-full p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                  isSelected
                    ? "bg-slate-800/90 border-primary/50 shadow-md ring-1 ring-primary/20"
                    : "bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div
                    className={`h-9 w-9 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${
                      isSelected
                        ? "bg-primary text-white"
                        : "bg-slate-800 text-slate-300 group-hover:bg-slate-700"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {node.icon}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-slate-400 font-semibold">
                        {node.step}
                      </span>
                      <span className="font-bold text-sm text-slate-100 truncate">
                        {node.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">{node.tool}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pl-2 flex-shrink-0">
                  <span
                    className={`font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isSelected
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "bg-slate-800/60 text-slate-400 border border-slate-700/40"
                    }`}
                  >
                    {node.category}
                  </span>
                  <span className="material-symbols-outlined text-slate-500 text-[16px] group-hover:translate-x-0.5 transition-transform hidden sm:inline-block">
                    chevron_right
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Node Inspector & Concrete Logic Explanation */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="h-full rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-primary font-bold">
                    NODE DETAILS: {activeNode.step}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {activeNode.status}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                  {activeNode.category}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mb-2">
                {activeNode.title}
              </h4>

              <div className="mb-4">
                <span className="text-xs font-mono text-slate-400">Integrated Component:</span>
                <p className="text-sm font-semibold text-slate-200 mt-0.5">
                  {activeNode.tool}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400">Technical Function:</span>
                <p className="text-sm text-slate-300 leading-relaxed mt-1">
                  {activeNode.description}
                </p>
              </div>
            </div>

            {/* Micro Callout */}
            <div className="mt-8 pt-4 border-t border-slate-800/80">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <span className="font-semibold text-white block mb-1">
                  Human Time Saved: ~20 mins / lead
                </span>
                Replaces manual inbox monitoring, manual CRM data entry, manual drafting, and calendar back-and-forth.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom explanation */}
      <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
          Instead of manually moving information between tools, the system handles the repetitive steps automatically.
        </p>
        <a
          href="#start-project"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-all duration-200 hover:-translate-y-0.5 shadow-lg flex-shrink-0 w-full sm:w-auto"
        >
          Build Something Like This
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}
