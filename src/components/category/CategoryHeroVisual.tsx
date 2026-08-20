"use client";

import React from "react";
import { 
  Terminal, 
  Film, 
  Image as ImageIcon, 
  Mic2, 
  FileText, 
  Search, 
  Bot, 
  Cpu, 
  Mail, 
  Kanban, 
  GitBranch,
  Check
} from "lucide-react";

interface CategoryHeroVisualProps {
  slug: string;
  categoryName: string;
}

export function CategoryHeroVisual({ slug, categoryName }: CategoryHeroVisualProps) {
  const s = slug.toLowerCase();

  // 1. Coding Assistants
  if (s.includes("code") || s.includes("coding")) {
    return (
      <div className="w-full rounded-2xl bg-slate-950/90 border border-indigo-500/30 p-3.5 shadow-xl space-y-2 font-mono text-[11px] text-slate-300 relative overflow-hidden backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-[11px]">
            <Terminal className="w-3.5 h-3.5" />
            <span>agent_flow.ts</span>
          </div>
          <div className="flex items-center gap-1 text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/20">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            AST Refactor
          </div>
        </div>

        <div className="space-y-1 py-0.5 text-[10px]">
          <div><span className="text-pink-400">const</span> <span className="text-cyan-300">optimizer</span> = <span className="text-pink-400">new</span> <span className="text-amber-300">NeuralEngine</span>();</div>
          <div><span className="text-pink-400">await</span> optimizer.<span className="text-cyan-300">optimizeAST</span>(code);</div>
          <div className="px-2 py-1 rounded bg-indigo-950/50 border border-indigo-500/30 text-[9px] text-indigo-200">
            <span className="text-emerald-400 font-bold">✓ 14 tests passing • 42ms latency</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[9px] text-slate-400">
          <span className="flex items-center gap-1"><GitBranch className="w-3 h-3 text-indigo-400" /> main ➔ pr-84</span>
          <span className="text-indigo-400 font-bold">Auto-Merged</span>
        </div>
      </div>
    );
  }

  // 2. Video Generators
  if (s.includes("video")) {
    return (
      <div className="w-full rounded-2xl bg-slate-950/90 border border-purple-500/30 p-3.5 shadow-xl space-y-2 text-[11px] text-slate-300 relative overflow-hidden backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <div className="flex items-center gap-1.5 text-purple-400 font-bold text-[11px]">
            <Film className="w-3.5 h-3.5" />
            <span>Timeline Synthesizer</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[9px] font-bold">4K 60FPS</span>
        </div>

        <div className="h-12 rounded-lg bg-gradient-to-r from-purple-900/60 via-indigo-900/60 to-pink-900/60 border border-purple-500/30 p-1.5 flex flex-col justify-between">
          <div className="flex justify-between text-[9px] text-purple-200 font-mono">
            <span>Scene 01: Cyberpunk</span>
            <span className="text-emerald-400">Motion: 1.4x</span>
          </div>
          <div className="flex items-center gap-0.5 h-2">
            {[40, 80, 60, 100, 70, 90, 50, 80, 100, 60, 40, 70, 90, 60, 80, 50].map((h, idx) => (
              <div key={idx} className="flex-1 bg-purple-400/60 rounded-full" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[9px] text-slate-400 font-mono">
          <span>Camera: <strong>Orbital Dolly</strong></span>
          <span className="text-purple-400 font-bold">Gen-3 Alpha</span>
        </div>
      </div>
    );
  }

  // 3. Image Generators
  if (s.includes("image")) {
    return (
      <div className="w-full rounded-2xl bg-slate-950/90 border border-rose-500/30 p-3.5 shadow-xl space-y-2 text-[11px] text-slate-300 relative overflow-hidden backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <div className="flex items-center gap-1.5 text-rose-400 font-bold text-[11px]">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Latent Canvas Engine</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono text-[9px] font-bold">50 Steps (1.2s)</span>
        </div>

        <div className="grid grid-cols-2 gap-1.5 py-0.5">
          <div className="h-10 rounded-lg bg-gradient-to-br from-rose-600/40 via-amber-600/30 to-purple-700/40 border border-rose-500/30 flex items-center justify-center text-[9px] font-mono text-white text-center">
            HDR Cinema
          </div>
          <div className="h-10 rounded-lg bg-gradient-to-br from-indigo-600/40 via-cyan-600/30 to-rose-700/40 border border-rose-500/30 flex items-center justify-center text-[9px] font-mono text-white text-center">
            Cyber Neon
          </div>
        </div>

        <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[9px] text-slate-400 font-mono">
          <span>Aspect: <strong>16:9</strong></span>
          <span className="text-rose-400 font-bold">Diffusion V6</span>
        </div>
      </div>
    );
  }

  // 4. Audio & Voice
  if (s.includes("audio") || s.includes("voice")) {
    return (
      <div className="w-full rounded-2xl bg-slate-950/90 border border-cyan-500/30 p-3.5 shadow-xl space-y-2 text-[11px] text-slate-300 relative overflow-hidden backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-[11px]">
            <Mic2 className="w-3.5 h-3.5" />
            <span>Voice Synthesizer</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[9px] font-bold">48kHz HD</span>
        </div>

        <div className="p-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 space-y-1">
          <div className="flex justify-between text-[10px]">
            <span className="text-slate-300">Narrative Clone</span>
            <span className="text-cyan-400 font-bold">99.8% Match</span>
          </div>
          <div className="flex items-center gap-1 h-5">
            {[30, 70, 45, 95, 80, 100, 60, 85, 40, 75, 90, 60, 100, 50, 70, 85, 40, 65].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500 to-indigo-400 rounded-full" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[9px] text-slate-400 font-mono">
          <span>Latency: <strong>68ms</strong></span>
          <span className="text-cyan-400 font-bold">Lossless Stream</span>
        </div>
      </div>
    );
  }

  // 5. Writing Tools
  if (s.includes("writing") || s.includes("text")) {
    return (
      <div className="w-full rounded-2xl bg-slate-950/90 border border-amber-500/30 p-3.5 shadow-xl space-y-2 text-[11px] text-slate-300 relative overflow-hidden backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[11px]">
            <FileText className="w-3.5 h-3.5" />
            <span>Tone &amp; Draft Synthesizer</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[9px] font-bold">Grade 9.2</span>
        </div>

        <div className="p-2 rounded-xl bg-amber-950/30 border border-amber-500/25 space-y-1 font-['Figtree',sans-serif]">
          <p className="text-[10px] text-slate-200 leading-tight italic line-clamp-2">
            &quot;Autonomous workflows eliminate manual sprint bottlenecks across high-growth engineering teams...&quot;
          </p>
        </div>

        <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[9px] text-slate-400 font-mono">
          <span>Velocity: <strong>140 wpm</strong></span>
          <span className="text-amber-400 font-bold">0% Plagiarism</span>
        </div>
      </div>
    );
  }

  // 6. AI Email Productivity
  if (s.includes("email")) {
    return (
      <div className="w-full rounded-2xl bg-slate-950/90 border border-rose-500/30 p-3.5 shadow-xl space-y-2 text-[11px] text-slate-300 relative overflow-hidden backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <div className="flex items-center gap-1.5 text-rose-400 font-bold text-[11px]">
            <Mail className="w-3.5 h-3.5" />
            <span>Inbox Zero Triage</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[9px] font-bold">Inbox: 0</span>
        </div>

        <div className="space-y-1 py-0.5">
          <div className="p-1.5 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-between text-[10px]">
            <span className="font-semibold text-slate-200">Partnership Terms Agree</span>
            <span className="text-rose-400 font-mono font-bold">Drafted (0.8s)</span>
          </div>
          <div className="p-1.5 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-between text-[10px]">
            <span className="text-slate-400">Filtered Newsletters</span>
            <span className="text-emerald-400 font-mono">Auto-Sorted</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[9px] text-slate-400 font-mono">
          <span>Triage: <strong>85ms</strong></span>
          <span className="text-rose-400 font-bold">Voice Matched</span>
        </div>
      </div>
    );
  }

  // 7. AI Project Management
  if (s.includes("project") || s.includes("pm")) {
    return (
      <div className="w-full rounded-2xl bg-slate-950/90 border border-indigo-500/30 p-3.5 shadow-xl space-y-2 text-[11px] text-slate-300 relative overflow-hidden backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-[11px]">
            <Kanban className="w-3.5 h-3.5" />
            <span>Sprint Forecaster</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[9px] font-bold">94% On-Time</span>
        </div>

        <div className="p-2 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-1.5">
          <div className="flex justify-between text-[10px] font-bold">
            <span className="text-slate-300">Subtask Breakdown</span>
            <span className="text-cyan-400 font-mono">4 Stories (14 SP)</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full w-[78%]" />
          </div>
        </div>

        <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[9px] text-slate-400 font-mono">
          <span>Blockers: <strong>0</strong></span>
          <span className="text-indigo-400 font-bold">CI/CD Synced</span>
        </div>
      </div>
    );
  }

  // 8. AI Agents
  if (s.includes("agent")) {
    return (
      <div className="w-full rounded-2xl bg-slate-950/90 border border-emerald-500/30 p-3.5 shadow-xl space-y-2 text-[11px] text-slate-300 relative overflow-hidden backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
            <Bot className="w-3.5 h-3.5" />
            <span>Autonomous Loop</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[9px] font-bold">Executing</span>
        </div>

        <div className="space-y-1 py-0.5 text-[10px] font-mono">
          <div className="p-1.5 rounded bg-slate-900 border border-white/10 flex items-center justify-between">
            <span className="text-slate-300">1. Parse Objective</span>
            <span className="text-emerald-400 font-bold">Done</span>
          </div>
          <div className="p-1.5 rounded bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
            <span className="text-emerald-300 font-bold">2. Run Browser &amp; Form Fill</span>
            <span className="text-cyan-400 font-bold animate-pulse">Active</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[9px] text-slate-400 font-mono">
          <span>Self-Correction: <strong>Active</strong></span>
          <span className="text-emerald-400 font-bold">Autonomous</span>
        </div>
      </div>
    );
  }

  // 9. AI SEO Tools
  if (s.includes("seo")) {
    return (
      <div className="w-full rounded-2xl bg-slate-950/90 border border-cyan-500/30 p-3.5 shadow-xl space-y-2 text-[11px] text-slate-300 relative overflow-hidden backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-[11px]">
            <Search className="w-3.5 h-3.5" />
            <span>SERP Radar</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[9px] font-bold">Rank #1 Google</span>
        </div>

        <div className="p-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 space-y-1 font-mono text-[10px]">
          <div className="flex justify-between">
            <span className="text-slate-300">Volume:</span>
            <span className="text-white font-bold">92.4K / mo</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-300">KD Score:</span>
            <span className="text-emerald-400 font-bold">Easy (28/100)</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[9px] text-slate-400 font-mono">
          <span>Clusters: <strong>18</strong></span>
          <span className="text-cyan-400 font-bold">Top Authority</span>
        </div>
      </div>
    );
  }

  // 10. Default / Universal Benchmark Hub
  return (
    <div className="w-full rounded-2xl bg-slate-950/90 border border-[#FF5F6D]/30 p-3.5 shadow-xl space-y-2 text-[11px] text-slate-300 relative overflow-hidden backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
        <div className="flex items-center gap-1.5 text-[#FF8C69] font-bold text-[11px]">
          <Cpu className="w-3.5 h-3.5" />
          <span>{categoryName} Benchmark Hub</span>
        </div>
        <span className="px-1.5 py-0.5 rounded-full bg-[#FF5F6D]/20 text-[#FFC371] font-mono text-[9px] font-bold">
          Verified 2026
        </span>
      </div>

      <div className="p-2 rounded-xl bg-slate-900 border border-white/10 space-y-1 font-['Figtree',sans-serif]">
        <div className="flex justify-between items-center text-[10px]">
          <span className="text-slate-300 font-medium">Domain Coverage</span>
          <span className="text-emerald-400 font-bold font-mono">100% Tested</span>
        </div>
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#FF5F6D] via-[#FF8C69] to-[#FFC371] rounded-full w-[88%]" />
        </div>
      </div>

      <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[9px] text-slate-400 font-mono">
        <span>Security: <strong>SOC2 &amp; TLS</strong></span>
        <span className="text-[#FFC371] font-bold">Curated Daily</span>
      </div>
    </div>
  );
}
