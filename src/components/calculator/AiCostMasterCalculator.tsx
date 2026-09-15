"use client";

import React, { useState, useCallback } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { LlmPricingCalculator } from './LlmPricingCalculator';
import { Check, Building2, Ticket, MessageSquare, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';

function SubCalculatorSkeleton({ title }: { title: string }) {
  return (
    <div className="w-full p-6 sm:p-8 rounded-3xl bg-surface border border-border animate-pulse space-y-4">
      <div className="h-5 w-44 bg-surface-elevated rounded-lg" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="h-20 bg-surface-elevated rounded-2xl" />
        <div className="h-20 bg-surface-elevated rounded-2xl" />
        <div className="h-20 bg-surface-elevated rounded-2xl" />
      </div>
      <div className="h-28 bg-surface-elevated rounded-2xl" />
    </div>
  );
}

const ImageApiCalculator = dynamic(
  () => import('./ImageApiCalculator').then(m => ({ default: m.ImageApiCalculator })),
  { loading: () => <SubCalculatorSkeleton title="Image API" /> }
);

const VideoApiCalculator = dynamic(
  () => import('./VideoApiCalculator').then(m => ({ default: m.VideoApiCalculator })),
  { loading: () => <SubCalculatorSkeleton title="Video API" /> }
);

const ImageCreditCalculator = dynamic(
  () => import('./ImageCreditCalculator').then(m => ({ default: m.ImageCreditCalculator })),
  { loading: () => <SubCalculatorSkeleton title="Image Credits" /> }
);

const VideoCreditCalculator = dynamic(
  () => import('./VideoCreditCalculator').then(m => ({ default: m.VideoCreditCalculator })),
  { loading: () => <SubCalculatorSkeleton title="Video Credits" /> }
);

export type AudienceType = 'build' | 'use';
export type BuildModality = 'text' | 'image_api' | 'video_api';
export type UseModality = 'image_credits' | 'video_credits';

export function AiCostMasterCalculator() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Primary Audience state: build (default) | use
  const rawAudience = searchParams.get('audience') || 'build';
  const initialAudience: AudienceType = rawAudience === 'use' ? 'use' : 'build';
  const [audience, setAudience] = useState<AudienceType>(initialAudience);

  // Modality state
  const rawMode = searchParams.get('mode');
  const [buildMode, setBuildMode] = useState<BuildModality>(
    (rawMode === 'image_api' || rawMode === 'video_api') ? rawMode : 'text'
  );
  const [useMode, setUseMode] = useState<UseModality>(
    rawMode === 'image_credits' ? 'image_credits' : 'video_credits'
  );

  // URL Sync
  const updateUrlParams = useCallback((newParams: Record<string, string>) => {
    if (typeof window === 'undefined') return;
    const sp = new URLSearchParams(window.location.search);
    Object.entries(newParams).forEach(([k, v]) => {
      sp.set(k, v);
    });
    const newUrl = `${pathname}?${sp.toString()}`;
    window.history.replaceState(null, '', newUrl);
  }, [pathname]);

  const handleAudienceChange = (newAudience: AudienceType) => {
    setAudience(newAudience);
    if (newAudience === 'build') {
      updateUrlParams({ audience: 'build', mode: buildMode });
    } else {
      updateUrlParams({ audience: 'use', mode: useMode });
    }
  };

  const handleBuildModeChange = (mode: BuildModality) => {
    setBuildMode(mode);
    updateUrlParams({ audience: 'build', mode });
  };

  const handleUseModeChange = (mode: UseModality) => {
    setUseMode(mode);
    updateUrlParams({ audience: 'use', mode });
  };

  return (
    <div className="w-full space-y-8">
      {/* ============================================================= */}
      {/* 1. PRIMARY AUDIENCE CHOICE (TACTILE STUDIO CONTROL)          */}
      {/* ============================================================= */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-widest text-on-surface-variant flex items-center space-x-1.5">
            <span>CHOOSE YOUR WORKFLOW</span>
          </span>
          <span className="text-[11px] font-medium text-on-surface-variant hidden sm:inline-block">
            Tailored calculations for API unit economics or consumer subscription credits
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 1: Build with AI */}
          <button
            type="button"
            onClick={() => handleAudienceChange('build')}
            className={`group relative p-5 sm:p-6 rounded-3xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden ${
              audience === 'build'
                ? 'bg-gradient-to-b from-surface via-surface to-surface-elevated border-primary/60 ring-2 ring-primary/20 shadow-lg shadow-primary/5'
                : 'bg-surface/80 hover:bg-surface border-border hover:border-primary/30 hover:shadow-xs'
            }`}
          >
            {audience === 'build' && (
              <div 
                className="absolute -top-12 -right-12 w-28 h-28 bg-primary/10 blur-2xl rounded-full pointer-events-none" 
                aria-hidden="true" 
              />
            )}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2.5 rounded-2xl border transition-colors ${
                  audience === 'build' 
                    ? 'bg-primary/15 border-primary/30 text-primary' 
                    : 'bg-surface-elevated border-border text-on-surface-variant group-hover:text-foreground'
                }`}>
                  <Building2 className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border transition-all ${
                  audience === 'build'
                    ? 'bg-primary/10 border-primary/30 text-primary font-bold'
                    : 'bg-surface-secondary border-border text-on-surface-variant'
                }`}>
                  FOR FOUNDERS &amp; DEVS
                </span>
              </div>

              <h3 className="text-lg font-black text-foreground tracking-tight flex items-center space-x-2">
                <span>Build with AI</span>
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                Estimate API generation costs, unit economics, cost-per-user, and gross margins for your AI application.
              </p>
            </div>

            <div className="pt-4 mt-2 border-t border-border/60 flex items-center justify-between text-xs">
              <span className="text-[11px] font-semibold text-on-surface-variant">
                Text/LLM, Image &amp; Video APIs
              </span>
              {audience === 'build' ? (
                <span className="inline-flex items-center text-[11px] font-bold text-primary">
                  Active Mode <Check className="w-3.5 h-3.5 ml-1" />
                </span>
              ) : (
                <span className="text-[11px] text-on-surface-variant group-hover:text-foreground transition-colors">
                  Select &rarr;
                </span>
              )}
            </div>
          </button>

          {/* Card 2: Use AI */}
          <button
            type="button"
            onClick={() => handleAudienceChange('use')}
            className={`group relative p-5 sm:p-6 rounded-3xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden ${
              audience === 'use'
                ? 'bg-gradient-to-b from-surface via-surface to-surface-elevated border-primary/60 ring-2 ring-primary/20 shadow-lg shadow-primary/5'
                : 'bg-surface/80 hover:bg-surface border-border hover:border-primary/30 hover:shadow-xs'
            }`}
          >
            {audience === 'use' && (
              <div 
                className="absolute -top-12 -right-12 w-28 h-28 bg-accent/10 blur-2xl rounded-full pointer-events-none" 
                aria-hidden="true" 
              />
            )}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2.5 rounded-2xl border transition-colors ${
                  audience === 'use' 
                    ? 'bg-accent/15 border-accent/30 text-accent' 
                    : 'bg-surface-elevated border-border text-on-surface-variant group-hover:text-foreground'
                }`}>
                  <Ticket className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border transition-all ${
                  audience === 'use'
                    ? 'bg-accent/10 border-accent/30 text-accent font-bold'
                    : 'bg-surface-secondary border-border text-on-surface-variant'
                }`}>
                  FOR CREATORS &amp; USERS
                </span>
              </div>

              <h3 className="text-lg font-black text-foreground tracking-tight flex items-center space-x-2">
                <span>Use AI</span>
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                Calculate how many images and videos your subscription credits can produce, and find the right plan for your goal.
              </p>
            </div>

            <div className="pt-4 mt-2 border-t border-border/60 flex items-center justify-between text-xs">
              <span className="text-[11px] font-semibold text-on-surface-variant">
                Midjourney, Kling, Runway, Flow &amp; More
              </span>
              {audience === 'use' ? (
                <span className="inline-flex items-center text-[11px] font-bold text-accent">
                  Active Mode <Check className="w-3.5 h-3.5 ml-1" />
                </span>
              ) : (
                <span className="text-[11px] text-on-surface-variant group-hover:text-foreground transition-colors">
                  Select &rarr;
                </span>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* ============================================================= */}
      {/* 2. SUB-MODALITY NAVIGATION TABS (REFINED STUDIO PILLS)         */}
      {/* ============================================================= */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            Modality:
          </span>
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-surface-elevated/90 border border-border shadow-2xs backdrop-blur-md">
            {audience === 'build' ? (
              <>
                <button
                  type="button"
                  onClick={() => handleBuildModeChange('text')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                    buildMode === 'text'
                      ? 'bg-surface text-foreground shadow-xs border border-border font-bold'
                      : 'text-on-surface-variant hover:text-foreground'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5 text-primary" />
                  <span>Text / LLM API</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-surface-secondary border border-border text-on-surface-variant">
                    14 Models
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleBuildModeChange('image_api')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                    buildMode === 'image_api'
                      ? 'bg-surface text-foreground shadow-xs border border-border font-bold'
                      : 'text-on-surface-variant hover:text-foreground'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5 text-accent" />
                  <span>Image API</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-surface-secondary border border-border text-on-surface-variant">
                    9 Models
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleBuildModeChange('video_api')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                    buildMode === 'video_api'
                      ? 'bg-surface text-foreground shadow-xs border border-border font-bold'
                      : 'text-on-surface-variant hover:text-foreground'
                  }`}
                >
                  <VideoIcon className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Video API</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-surface-secondary border border-border text-on-surface-variant">
                    17 Models
                  </span>
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => handleUseModeChange('video_credits')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                    useMode === 'video_credits'
                      ? 'bg-surface text-foreground shadow-xs border border-border font-bold'
                      : 'text-on-surface-variant hover:text-foreground'
                  }`}
                >
                  <VideoIcon className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Video Credits</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-surface-secondary border border-border text-on-surface-variant">
                    17 Platforms
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleUseModeChange('image_credits')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                    useMode === 'image_credits'
                      ? 'bg-surface text-foreground shadow-xs border border-border font-bold'
                      : 'text-on-surface-variant hover:text-foreground'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5 text-accent" />
                  <span>Image Credits</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-surface-secondary border border-border text-on-surface-variant">
                    9 Platforms
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ============================================================= */}
      {/* 3. ACTIVE CALCULATOR RENDER                                   */}
      {/* ============================================================= */}
      <div className="w-full">
        {audience === 'build' && buildMode === 'text' && (
          <LlmPricingCalculator />
        )}

        {audience === 'build' && buildMode === 'image_api' && (
          <ImageApiCalculator />
        )}

        {audience === 'build' && buildMode === 'video_api' && (
          <VideoApiCalculator />
        )}

        {audience === 'use' && useMode === 'video_credits' && (
          <VideoCreditCalculator />
        )}

        {audience === 'use' && useMode === 'image_credits' && (
          <ImageCreditCalculator />
        )}
      </div>
    </div>
  );
}
