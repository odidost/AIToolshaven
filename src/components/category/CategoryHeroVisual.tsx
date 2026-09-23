"use client";

import React from "react";
import { 
  Image as ImageIcon, 
  Film, 
  Mic2, 
  Code2, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Heart,
  Layers,
  PenTool,
  Play
} from "lucide-react";

interface CategoryHeroVisualProps {
  slug: string;
  categoryName: string;
}

export function CategoryHeroVisual({ slug, categoryName }: CategoryHeroVisualProps) {
  const s = slug.toLowerCase();

  // 1. Writing & Content Creation Tools
  if (s.includes("writing") || s.includes("text") || s.includes("copy")) {
    return (
      <div className="w-full rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-amber-950/40 border border-amber-500/25 p-4 shadow-2xl space-y-3 text-slate-200 relative overflow-hidden backdrop-blur-xl">
        {/* Subtle decorative warm glow */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
            <div className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
              <PenTool className="w-3.5 h-3.5 text-amber-300" />
            </div>
            <span>Editorial Workspace Preview</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-semibold flex items-center gap-1 border border-emerald-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Human-Sounding
          </span>
        </div>

        {/* Real editorial document excerpt */}
        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-300">
            <span className="font-semibold text-white">Draft: Scaling Creative Output Without Burnout</span>
            <span className="text-amber-300/90 text-[10px]">Tone: Conversational</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans line-clamp-3">
            &ldquo;The best writing platforms don&apos;t replace your unique voice—they eliminate writer&apos;s block, structure your arguments, and polish prose so you publish 3x faster.&rdquo;
          </p>
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-200 font-medium">
              Readability: Grade 8 (Clear)
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 font-medium">
              Zero Generic Clichés
            </span>
          </div>
        </div>

        {/* Human outcome metrics */}
        <div className="grid grid-cols-2 gap-2 text-[10px] pt-0.5">
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <div>
              <div className="text-white font-bold">4.5 hrs saved</div>
              <div className="text-slate-400 text-[9px]">per long-form article</div>
            </div>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 text-rose-300 shrink-0" />
            <div>
              <div className="text-white font-bold">Authentic Tone</div>
              <div className="text-slate-400 text-[9px]">vetted on real blogs</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px] text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Tested with 15+ real creator drafts
          </span>
          <span className="text-amber-300 font-medium">Editor Score: 4.9★</span>
        </div>
      </div>
    );
  }

  // 2. Image Generation & Visual Design Tools
  if (s.includes("image") || s.includes("design") || s.includes("art") || s.includes("photo")) {
    return (
      <div className="w-full rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-rose-950/40 border border-rose-500/25 p-4 shadow-2xl space-y-3 text-slate-200 relative overflow-hidden backdrop-blur-xl">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-rose-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2 text-rose-300 font-bold text-xs">
            <div className="w-6 h-6 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
              <ImageIcon className="w-3.5 h-3.5 text-rose-300" />
            </div>
            <span>Creative Studio Showcase</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-200 text-[10px] font-semibold border border-rose-500/25">
            Commercial Ready
          </span>
        </div>

        {/* Visual asset style chips */}
        <div className="grid grid-cols-2 gap-2">
          <div className="h-16 rounded-xl bg-gradient-to-br from-rose-500/30 via-purple-600/30 to-amber-500/20 border border-rose-500/30 p-2.5 flex flex-col justify-between">
            <span className="text-[10px] font-bold text-white">Editorial Portrait</span>
            <span className="text-[9px] text-rose-200">Natural studio lighting</span>
          </div>
          <div className="h-16 rounded-xl bg-gradient-to-br from-indigo-500/30 via-cyan-600/30 to-emerald-500/20 border border-indigo-500/30 p-2.5 flex flex-col justify-between">
            <span className="text-[10px] font-bold text-white">Brand Product Render</span>
            <span className="text-[9px] text-cyan-200">Clean commercial mockup</span>
          </div>
        </div>

        {/* Human designer takeaway */}
        <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-[10px]">
          <div>
            <div className="text-white font-bold">Concept to final render</div>
            <div className="text-slate-400 text-[9px]">Export at print-ready 4K resolution</div>
          </div>
          <span className="px-2 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 font-bold text-[10px] border border-emerald-500/25">
            Saved 8+ hrs
          </span>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px] text-slate-400">
          <span className="flex items-center gap-1 text-slate-300">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Tested on marketing campaigns
          </span>
          <span className="text-rose-300 font-medium">Commercial Rights: Verified</span>
        </div>
      </div>
    );
  }

  // 3. Video Creation & Motion Tools
  if (s.includes("video") || s.includes("animation") || s.includes("motion")) {
    return (
      <div className="w-full rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-purple-950/40 border border-purple-500/25 p-4 shadow-2xl space-y-3 text-slate-200 relative overflow-hidden backdrop-blur-xl">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2 text-purple-300 font-bold text-xs">
            <div className="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
              <Film className="w-3.5 h-3.5 text-purple-300" />
            </div>
            <span>Creator Video Suite</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-200 text-[10px] font-semibold border border-purple-500/25">
            Social &amp; Commercial
          </span>
        </div>

        {/* Video Production Timeline */}
        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <Play className="w-3 h-3 text-purple-300 fill-purple-300" />
              Promo Reel (0:45s)
            </span>
            <span className="text-purple-300 font-medium text-[10px]">4K 60fps Ready</span>
          </div>

          <div className="space-y-1">
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex gap-1 p-0.5">
              <div className="h-full bg-purple-400 rounded-full w-1/3" title="Hook & Intro" />
              <div className="h-full bg-indigo-400 rounded-full w-1/3" title="Product Showcase" />
              <div className="h-full bg-pink-400 rounded-full w-1/3" title="Call to Action" />
            </div>
            <div className="flex justify-between text-[9px] text-slate-400">
              <span>0:00 Hook</span>
              <span>0:20 Product</span>
              <span>0:45 CTA</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="text-white font-bold">Multi-Format</div>
            <div className="text-slate-400 text-[9px]">Reels, TikTok &amp; YouTube</div>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="text-white font-bold">10 min Turnaround</div>
            <div className="text-slate-400 text-[9px]">from script to render</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px] text-slate-400">
          <span className="flex items-center gap-1 text-slate-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Studio quality without a camera crew
          </span>
          <span className="text-purple-300 font-medium">Tested for 2026</span>
        </div>
      </div>
    );
  }

  // 4. Audio & Voice Tools
  if (s.includes("audio") || s.includes("voice") || s.includes("podcast") || s.includes("music")) {
    return (
      <div className="w-full rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-cyan-950/40 border border-cyan-500/25 p-4 shadow-2xl space-y-3 text-slate-200 relative overflow-hidden backdrop-blur-xl">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs">
            <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
              <Mic2 className="w-3.5 h-3.5 text-cyan-300" />
            </div>
            <span>Voice &amp; Audio Studio</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-200 text-[10px] font-semibold border border-cyan-500/25">
            Broadcast Quality
          </span>
        </div>

        {/* Audio Soundstage Card */}
        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
          <div className="flex justify-between items-center text-[11px]">
            <span className="font-semibold text-white">Voiceover: Warm Narrative</span>
            <span className="text-cyan-300 text-[10px]">28+ Languages</span>
          </div>

          <div className="flex items-center gap-1 h-7 px-1">
            {[40, 75, 50, 90, 85, 100, 65, 80, 45, 90, 70, 85, 100, 60, 75, 95, 50, 70, 85, 60].map((h, idx) => (
              <div 
                key={idx} 
                className="flex-1 bg-gradient-to-t from-cyan-500 to-teal-300 rounded-full" 
                style={{ height: `${h}%` }} 
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="text-white font-bold">Natural Intonation</div>
            <div className="text-slate-400 text-[9px]">Zero robotic cadence</div>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="text-white font-bold">One-Click Cleanup</div>
            <div className="text-slate-400 text-[9px]">Background noise removed</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px] text-slate-400">
          <span className="flex items-center gap-1 text-slate-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Tested on podcasts &amp; video voiceovers
          </span>
          <span className="text-cyan-300 font-medium">Natural Rating: 99%</span>
        </div>
      </div>
    );
  }

  // 5. Coding & Developer Tools
  if (s.includes("code") || s.includes("coding") || s.includes("dev")) {
    return (
      <div className="w-full rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-indigo-950/40 border border-indigo-500/25 p-4 shadow-2xl space-y-3 text-slate-200 relative overflow-hidden backdrop-blur-xl">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs">
            <div className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-indigo-300" />
            </div>
            <span>Developer Productivity Suite</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-semibold border border-emerald-500/25">
            Ship Faster
          </span>
        </div>

        {/* Real developer workflow: Shipped product */}
        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-white">Full-Stack Feature Shipped</span>
            <span className="text-emerald-400 text-[10px] font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> PR Approved
            </span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            AI handles boilerplate code, unit test generation, and complex refactors so engineers can focus on product architecture and real user value.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="text-white font-bold">2.4x Velocity</div>
            <div className="text-slate-400 text-[9px]">faster release cycles</div>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="text-white font-bold">Tested in IDEs</div>
            <div className="text-slate-400 text-[9px]">VS Code, JetBrains &amp; Cursor</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px] text-slate-400">
          <span className="flex items-center gap-1 text-slate-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Tested on real production codebases
          </span>
          <span className="text-indigo-300 font-medium">Dev Score: 4.9★</span>
        </div>
      </div>
    );
  }

  // 6. Marketing, SEO & Sales Tools
  if (s.includes("marketing") || s.includes("sales") || s.includes("seo") || s.includes("social")) {
    return (
      <div className="w-full rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-emerald-950/40 border border-emerald-500/25 p-4 shadow-2xl space-y-3 text-slate-200 relative overflow-hidden backdrop-blur-xl">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs">
            <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-300" />
            </div>
            <span>Growth &amp; Revenue Suite</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-semibold border border-emerald-500/25">
            High ROI
          </span>
        </div>

        {/* Commercial campaign results card */}
        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-white">Multi-Channel Growth Campaign</span>
            <span className="text-emerald-400 font-bold text-[11px]">+38% CTR</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            Automate personalized outreach, SEO content clusters, and ad copy variants that convert high-intent buyers without scaling headcount.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="text-white font-bold">12 Ad Variants</div>
            <div className="text-slate-400 text-[9px]">tested in 1 click</div>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="text-white font-bold">Top Google Ranks</div>
            <div className="text-slate-400 text-[9px]">editorial SEO workflows</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px] text-slate-400">
          <span className="flex items-center gap-1 text-slate-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Verified on actual client campaigns
          </span>
          <span className="text-emerald-300 font-medium">ROI Verified</span>
        </div>
      </div>
    );
  }

  // 7. Productivity, Workflow & Everyday Automation Tools (Default fallback)
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-indigo-950/40 border border-indigo-500/25 p-4 shadow-2xl space-y-3 text-slate-200 relative overflow-hidden backdrop-blur-xl">
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs">
          <div className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
            <Layers className="w-3.5 h-3.5 text-indigo-300" />
          </div>
          <span>{categoryName} Workspace Showcase</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-200 text-[10px] font-semibold border border-indigo-500/25">
          Curated for 2026
        </span>
      </div>

      {/* Real daily workflow impact */}
      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
        <div className="text-[11px] font-semibold text-white">
          Real Impact for Real Teams:
        </div>
        <div className="space-y-1.5 text-[11px] text-slate-300 font-sans">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Automates repetitive daily busywork</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Eliminates tool fatigue with clear comparisons</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Zero paid placements — 100% independent testing</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
          <div className="text-white font-bold">5+ Hours Saved</div>
          <div className="text-slate-400 text-[9px]">weekly per team member</div>
        </div>
        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
          <div className="text-white font-bold">Free Tiers Tested</div>
          <div className="text-slate-400 text-[9px]">no credit card traps</div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px] text-slate-400">
        <span className="flex items-center gap-1 text-slate-300">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          Hand-vetted by our testing panel
        </span>
        <span className="text-indigo-300 font-medium">Independent Review</span>
      </div>
    </div>
  );
}
