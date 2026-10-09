'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AITool } from '@/lib/types/tool';
import { PageContainer } from '@/components/layout/PageContainer';
import { ToolImage } from '@/components/shared/ToolImage';

interface AiHostingHubProps {
  tools: AITool[];
}

export function AiHostingHub({ tools }: AiHostingHubProps) {
  const router = useRouter();

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedWorkload, setSelectedWorkload] = useState<string>('all');
  const [selectedFreeTier, setSelectedFreeTier] = useState<string>('all');
  const [selectedManagement, setSelectedManagement] = useState<string>('all');

  // Comparison Selector Modal state
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [toolA, setToolA] = useState<string>('vercel');
  const [toolB, setToolB] = useState<string>('railway');

  // Open modal with preselected tool
  const openCompareWith = (toolSlug: string) => {
    setToolA(toolSlug);
    // suggest comparable tool
    if (toolSlug === 'vercel') setToolB('railway');
    else if (toolSlug === 'coolify') setToolB('dokploy');
    else if (toolSlug === 'railway') setToolB('render');
    else if (toolSlug === 'hetzner') setToolB('digitalocean');
    else setToolB('vercel');
    setIsCompareModalOpen(true);
  };

  // Filtered tools
  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const hd = tool.hostingDetails;
      const q = searchQuery.toLowerCase().trim();

      // Search match
      if (q) {
        const matchesName = tool.name.toLowerCase().includes(q);
        const matchesTagline = tool.tagline?.toLowerCase().includes(q);
        const matchesTags = tool.tags?.some((t) => t.toLowerCase().includes(q));
        const matchesWorkload = hd?.supportedWorkloads?.some((w) => w.toLowerCase().includes(q));
        if (!matchesName && !matchesTagline && !matchesTags && !matchesWorkload) {
          return false;
        }
      }

      // Group filter
      if (selectedGroup !== 'all' && hd?.productGroup !== selectedGroup) {
        return false;
      }

      // Workload filter
      if (selectedWorkload !== 'all') {
        if (selectedWorkload === 'nextjs' && !hd?.supportedWorkloads?.some((w) => w.toLowerCase().includes('next.js'))) {
          return false;
        }
        if (selectedWorkload === 'agents' && !hd?.supportedWorkloads?.some((w) => w.toLowerCase().includes('agent') || w.toLowerCase().includes('worker') || w.toLowerCase().includes('python'))) {
          return false;
        }
        if (selectedWorkload === 'n8n' && !hd?.supportedWorkloads?.some((w) => w.toLowerCase().includes('n8n'))) {
          return false;
        }
        if (selectedWorkload === 'edge' && !hd?.supportedWorkloads?.some((w) => w.toLowerCase().includes('edge') || w.toLowerCase().includes('static'))) {
          return false;
        }
      }

      // Free tier filter
      if (selectedFreeTier !== 'all') {
        if (selectedFreeTier === 'free' && !hd?.freeTierStatus.toLowerCase().includes('free')) {
          return false;
        }
        if (selectedFreeTier === 'open-source' && !hd?.freeTierStatus.toLowerCase().includes('open source')) {
          return false;
        }
        if (selectedFreeTier === 'paid' && !hd?.freeTierStatus.toLowerCase().includes('no free tier')) {
          return false;
        }
      }

      // Management filter
      if (selectedManagement !== 'all') {
        if (hd?.managementResponsibility !== selectedManagement) {
          return false;
        }
      }

      return true;
    });
  }, [tools, searchQuery, selectedGroup, selectedWorkload, selectedFreeTier, selectedManagement]);

  // Navigate to shareable comparison
  const handleLaunchComparison = () => {
    if (!toolA || !toolB || toolA === toolB) return;
    const sortedSlug = [toolA, toolB].sort().join('-vs-');
    // If it matches an established curated slug, direct accordingly
    let target = sortedSlug;
    if ((toolA === 'vercel' && toolB === 'railway') || (toolA === 'railway' && toolB === 'vercel')) target = 'vercel-vs-railway';
    if ((toolA === 'vercel' && toolB === 'render') || (toolA === 'render' && toolB === 'vercel')) target = 'vercel-vs-render';
    if ((toolA === 'coolify' && toolB === 'vercel') || (toolA === 'vercel' && toolB === 'coolify')) target = 'coolify-vs-vercel';
    if ((toolA === 'coolify' && toolB === 'dokploy') || (toolA === 'dokploy' && toolB === 'coolify')) target = 'coolify-vs-dokploy';

    setIsCompareModalOpen(false);
    router.push(`/compare-tools/${target}`);
  };

  const selectedToolAObj = tools.find((t) => t.slug === toolA);
  const selectedToolBObj = tools.find((t) => t.slug === toolB);
  const isDifferentArchitecture = selectedToolAObj?.hostingDetails?.productGroup !== selectedToolBObj?.hostingDetails?.productGroup;

  return (
    <div className="min-h-screen bg-white text-[#111827]">
      {/* 1. HERO SECTION */}
      <section className="border-b border-[#E5E7EB] bg-gradient-to-b from-[#F9FAFB] to-white py-12 md:py-16">
        <PageContainer>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#E0E7FF] text-[#4338CA] text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="material-symbols-outlined text-[16px]">cloud</span>
              Verified Cloud & VPS Infrastructure
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-4">
              Compare Hosting Platforms for AI Apps
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-8 max-w-3xl mx-auto">
              Find the right cloud platform, VPS, or self-hosted setup for your AI app, agent, or automation. Compare pricing, features, and deployment options.
            </p>

            {/* Hero Actions & Search */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
              <button
                type="button"
                onClick={() => setIsCompareModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#E11D48] hover:bg-[#BE123C] text-white font-semibold text-sm transition-colors shadow-xs"
              >
                <span className="material-symbols-outlined text-[18px]">compare_arrows</span>
                Compare Platforms
              </button>

              <a
                href="#hosting-by-goal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-[#F9FAFB] text-[#374151] border border-[#D1D5DB] font-semibold text-sm transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">flag</span>
                Find Hosting by Goal
              </a>
            </div>

            {/* Hero Quick Search */}
            <div className="max-w-xl mx-auto relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-[20px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search hosting platforms and deployment tools…"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#D1D5DB] bg-white text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E11D48]/20 focus:border-[#E11D48] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6B7280] hover:text-[#111827]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 2. DISTINCT HOSTING TYPES & ARCHITECTURAL GUIDANCE */}
      <section className="py-8 bg-white border-b border-[#E5E7EB]">
        <PageContainer>
          <div className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-8">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#2563EB] text-[22px] shrink-0 mt-0.5">
                info
              </span>
              <div className="text-xs sm:text-sm text-[#334155] space-y-1.5 leading-relaxed">
                <p>
                  <strong className="text-[#0F172A] font-semibold">AI App Hosting vs. Model Inference:</strong> Hosting an application that calls an AI API (Next.js, Python FastAPI, n8n invoking OpenAI or Anthropic) requires standard web CPU/RAM and can run cost-effectively on Vercel, Railway, or a $4/mo VPS. Hosting the model weights themselves (e.g. running Llama 3 via vLLM or Ollama) requires dedicated GPU VRAM. Not every AI app needs a GPU.
                </p>
                <p>
                  <strong className="text-[#0F172A] font-semibold">Deployment Software vs. Server Costs:</strong> Coolify and Dokploy are free open-source management software ($0). Their software fee must be distinguished from the underlying server infrastructure (e.g. $4–$10/mo from Hetzner or DigitalOcean).
                </p>
              </div>
            </div>
          </div>

          {/* Hosting Type Tabs */}
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
            <h2 className="text-base font-bold text-[#111827]">Browse by Infrastructure Model</h2>
            <span className="text-xs text-[#6B7280]">Showing {filteredTools.length} of {tools.length} verified platforms</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              type="button"
              onClick={() => setSelectedGroup('all')}
              className={`p-3.5 rounded-lg border text-left transition-all ${
                selectedGroup === 'all'
                  ? 'border-[#E11D48] bg-[#FFF1F2]/50 ring-1 ring-[#E11D48]'
                  : 'border-[#E5E7EB] bg-white hover:border-[#D1D5DB]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-[#111827]">All Hosting Types</span>
                <span className="text-[11px] font-mono px-1.5 py-0.2 rounded bg-[#F3F4F6] text-[#4B5563]">{tools.length}</span>
              </div>
              <p className="text-[11px] text-[#6B7280] leading-snug">All verified cloud platforms, container PaaS, and self-hosted tools.</p>
            </button>

            <button
              type="button"
              onClick={() => setSelectedGroup('Managed app deployment platforms')}
              className={`p-3.5 rounded-lg border text-left transition-all ${
                selectedGroup === 'Managed app deployment platforms'
                  ? 'border-[#E11D48] bg-[#FFF1F2]/50 ring-1 ring-[#E11D48]'
                  : 'border-[#E5E7EB] bg-white hover:border-[#D1D5DB]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-[#111827]">Managed App Platforms</span>
                <span className="text-[11px] font-mono px-1.5 py-0.2 rounded bg-[#F3F4F6] text-[#4B5563]">5</span>
              </div>
              <p className="text-[11px] text-[#6B7280] leading-snug">Vercel, Railway, Render, Netlify, Cloudflare. Zero server OS maintenance.</p>
            </button>

            <button
              type="button"
              onClick={() => setSelectedGroup('VPS and cloud infrastructure providers')}
              className={`p-3.5 rounded-lg border text-left transition-all ${
                selectedGroup === 'VPS and cloud infrastructure providers'
                  ? 'border-[#E11D48] bg-[#FFF1F2]/50 ring-1 ring-[#E11D48]'
                  : 'border-[#E5E7EB] bg-white hover:border-[#D1D5DB]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-[#111827]">VPS & Cloud Infrastructure</span>
                <span className="text-[11px] font-mono px-1.5 py-0.2 rounded bg-[#F3F4F6] text-[#4B5563]">3</span>
              </div>
              <p className="text-[11px] text-[#6B7280] leading-snug">Hetzner, DigitalOcean, Hostinger. Dedicated CPU/RAM with root SSH control.</p>
            </button>

            <button
              type="button"
              onClick={() => setSelectedGroup('Self-hosted deployment software')}
              className={`p-3.5 rounded-lg border text-left transition-all ${
                selectedGroup === 'Self-hosted deployment software'
                  ? 'border-[#E11D48] bg-[#FFF1F2]/50 ring-1 ring-[#E11D48]'
                  : 'border-[#E5E7EB] bg-white hover:border-[#D1D5DB]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-[#111827]">Self-Hosted Deployment Software</span>
                <span className="text-[11px] font-mono px-1.5 py-0.2 rounded bg-[#F3F4F6] text-[#4B5563]">2</span>
              </div>
              <p className="text-[11px] text-[#6B7280] leading-snug">Coolify, Dokploy. 100% free open-source PaaS control planes on your VPS.</p>
            </button>
          </div>
        </PageContainer>
      </section>

      {/* 3. FILTERABLE PLATFORM LISTINGS (GetDeploying-inspired compact table) */}
      <section className="py-10 bg-white">
        <PageContainer>
          {/* Filter Bar */}
          <div className="p-4 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] mb-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#374151] mr-1">
              <span className="material-symbols-outlined text-[16px] text-[#E11D48]">tune</span>
              Filters:
            </div>

            {/* Workload filter */}
            <select
              value={selectedWorkload}
              onChange={(e) => setSelectedWorkload(e.target.value)}
              className="text-xs px-2.5 py-1.5 rounded-md border border-[#D1D5DB] bg-white text-[#374151] focus:outline-none focus:border-[#E11D48]"
            >
              <option value="all">All Workloads</option>
              <option value="nextjs">Next.js Frontends</option>
              <option value="agents">AI Agents & 24/7 Workers</option>
              <option value="n8n">n8n Automation</option>
              <option value="edge">Edge APIs & Static</option>
            </select>

            {/* Free tier filter */}
            <select
              value={selectedFreeTier}
              onChange={(e) => setSelectedFreeTier(e.target.value)}
              className="text-xs px-2.5 py-1.5 rounded-md border border-[#D1D5DB] bg-white text-[#374151] focus:outline-none focus:border-[#E11D48]"
            >
              <option value="all">Free Tier: Any</option>
              <option value="free">Free / Trial Available</option>
              <option value="open-source">100% Free & Open Source</option>
              <option value="paid">Paid Infrastructure Only</option>
            </select>

            {/* Management Responsibility filter */}
            <select
              value={selectedManagement}
              onChange={(e) => setSelectedManagement(e.target.value)}
              className="text-xs px-2.5 py-1.5 rounded-md border border-[#D1D5DB] bg-white text-[#374151] focus:outline-none focus:border-[#E11D48]"
            >
              <option value="all">Management Model: Any</option>
              <option value="Fully managed">Fully Managed</option>
              <option value="Managed PaaS">Managed PaaS</option>
              <option value="Self-managed infrastructure">Self-Managed (Software on VPS)</option>
              <option value="Unmanaged IaaS">Unmanaged Linux VPS</option>
            </select>

            {(selectedGroup !== 'all' || selectedWorkload !== 'all' || selectedFreeTier !== 'all' || selectedManagement !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedGroup('all');
                  setSelectedWorkload('all');
                  setSelectedFreeTier('all');
                  setSelectedManagement('all');
                  setSearchQuery('');
                }}
                className="text-xs text-[#E11D48] hover:underline font-medium ml-auto"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto rounded-xl border border-[#E5E7EB] shadow-2xs">
            <table className="w-full text-left text-xs text-[#111827]">
              <thead className="bg-[#F9FAFB] text-[#4B5563] uppercase tracking-wider text-[11px] border-b border-[#E5E7EB]">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Platform</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Product Type</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Main Use Case</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Starting Price & Basis</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Free Tier Status</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Key Limitation</th>
                  <th scope="col" className="px-4 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] bg-white">
                {filteredTools.map((tool) => {
                  const hd = tool.hostingDetails;
                  return (
                    <tr key={tool.id} className="hover:bg-[#F9FAFB] transition-colors">
                      {/* Name & Logo */}
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <ToolImage
                            tool={tool}
                            type="logo"
                            className="w-8 h-8 rounded-md border border-[#E5E7EB] bg-white object-contain p-1 shrink-0"
                          />
                          <div>
                            <Link href={`/tool/${tool.slug}`} className="font-bold text-sm text-[#111827] hover:text-[#E11D48] transition-colors">
                              {tool.name}
                            </Link>
                            <div className="text-[11px] text-[#6B7280]">
                              Checked: {hd?.lastCheckedDate || 'Oct 2026'}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Product Type */}
                      <td className="px-4 py-3.5">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-medium bg-[#F3F4F6] text-[#374151]">
                          {hd?.productTypeLabel || tool.category}
                        </span>
                        <div className="text-[11px] text-[#6B7280] mt-0.5">
                          {hd?.managementResponsibility}
                        </div>
                      </td>

                      {/* Main Use Case */}
                      <td className="px-4 py-3.5 max-w-xs">
                        <div className="font-medium text-[#111827] text-xs">
                          {tool.bestFor?.[0] || tool.tagline}
                        </div>
                        <div className="text-[11px] text-[#6B7280] truncate mt-0.5">
                          {hd?.supportedWorkloads?.slice(0, 2).join(', ')}
                        </div>
                      </td>

                      {/* Starting Price & Billing Basis */}
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <div className="font-bold text-sm text-[#111827]">
                          {hd?.startingPrice || tool.price || 'Not published'}
                        </div>
                        <div className="text-[11px] text-[#6B7280] max-w-[170px] truncate" title={hd?.billingBasis}>
                          {hd?.billingBasis || 'Usage basis'}
                        </div>
                      </td>

                      {/* Free Tier Status */}
                      <td className="px-4 py-3.5 max-w-[180px]">
                        <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${
                          hd?.freeTierStatus?.toLowerCase().includes('open source')
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : hd?.freeTierStatus?.toLowerCase().includes('free')
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {hd?.freeTierStatus || 'Not verified'}
                        </span>
                      </td>

                      {/* Key Limitation */}
                      <td className="px-4 py-3.5 max-w-xs text-[11px] text-[#6B7280] leading-snug">
                        {hd?.keyLimitations?.[0] || 'See full profile.'}
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-3.5 whitespace-nowrap text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => openCompareWith(tool.slug)}
                            className="px-2.5 py-1.5 rounded-md border border-[#D1D5DB] bg-white hover:bg-[#F9FAFB] text-[#374151] font-medium text-xs transition-colors"
                          >
                            Compare
                          </button>
                          <Link
                            href={`/tool/${tool.slug}`}
                            className="px-2.5 py-1.5 rounded-md bg-[#111827] hover:bg-[#1F2937] text-white font-medium text-xs transition-colors"
                          >
                            Details
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile & Tablet Card View */}
          <div className="lg:hidden space-y-4">
            {filteredTools.map((tool) => {
              const hd = tool.hostingDetails;
              return (
                <div key={tool.id} className="p-5 rounded-xl border border-[#E5E7EB] bg-white shadow-2xs space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <ToolImage
                        tool={tool}
                        type="logo"
                        className="w-10 h-10 rounded-md border border-[#E5E7EB] bg-white object-contain p-1 shrink-0"
                      />
                      <div>
                        <Link href={`/tool/${tool.slug}`} className="font-bold text-base text-[#111827] hover:text-[#E11D48]">
                          {tool.name}
                        </Link>
                        <div className="text-xs text-[#6B7280]">{hd?.productTypeLabel || tool.category}</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-extrabold text-[#111827]">{hd?.startingPrice || tool.price}</div>
                      <div className="text-[11px] text-[#6B7280]">{hd?.managementResponsibility}</div>
                    </div>
                  </div>

                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {tool.tagline}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-[#F3F4F6]">
                    <div>
                      <span className="text-[#9CA3AF] block text-[10px] uppercase font-semibold">Free Tier</span>
                      <span className="font-medium text-[#111827]">{hd?.freeTierStatus}</span>
                    </div>
                    <div>
                      <span className="text-[#9CA3AF] block text-[10px] uppercase font-semibold">Key Constraint</span>
                      <span className="text-[#6B7280] text-[11px] line-clamp-1">{hd?.keyLimitations?.[0]}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => openCompareWith(tool.slug)}
                      className="flex-1 py-2 rounded-lg border border-[#D1D5DB] text-center font-medium text-xs text-[#374151] hover:bg-[#F9FAFB]"
                    >
                      Compare
                    </button>
                    <Link
                      href={`/tool/${tool.slug}`}
                      className="flex-1 py-2 rounded-lg bg-[#111827] text-center font-medium text-xs text-white hover:bg-[#1F2937]"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12 border border-dashed border-[#D1D5DB] rounded-xl p-6">
              <span className="material-symbols-outlined text-4xl text-[#9CA3AF] mb-2">dns</span>
              <h3 className="text-base font-bold text-[#111827] mb-1">No hosting platforms match your criteria</h3>
              <p className="text-xs text-[#6B7280] mb-4">Try clearing one or more filters to view verified infrastructure providers.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedGroup('all');
                  setSelectedWorkload('all');
                  setSelectedFreeTier('all');
                  setSelectedManagement('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-md bg-[#111827] text-white text-xs font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </PageContainer>
      </section>

      {/* 4. FEATURED COMPARISONS */}
      <section className="py-12 bg-[#F9FAFB] border-t border-b border-[#E5E7EB]">
        <PageContainer>
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E0E7FF] text-[#4338CA] text-xs font-semibold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[14px]">balance</span>
              Curated Matchups
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-2">
              Featured Comparisons
            </h2>
            <p className="text-sm text-[#4B5563]">
              Side-by-side technical breakdowns evaluating deployment workflows, persistent background processes, and actual running costs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Vercel vs Railway */}
            <Link
              href="/compare-tools/vercel-vs-railway"
              className="p-5 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#E11D48] transition-all hover:shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-2xs">V</div>
                    <div className="w-8 h-8 rounded-full bg-[#F43F5E] text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-2xs">R</div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#E11D48] group-hover:translate-x-0.5 transition-transform">Compare →</span>
                </div>
                <h3 className="font-bold text-sm text-[#111827] mb-1">Vercel vs Railway</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Next.js edge streaming vs 24/7 continuous containers, Python workers, and persistent disk volumes.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F3F4F6] text-[11px] text-[#4B5563] font-medium">
                Serverless vs Container PaaS
              </div>
            </Link>

            {/* Vercel vs Render */}
            <Link
              href="/compare-tools/vercel-vs-render"
              className="p-5 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#E11D48] transition-all hover:shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-2xs">V</div>
                    <div className="w-8 h-8 rounded-full bg-[#46E3B7] text-black flex items-center justify-center font-bold text-xs border-2 border-white shadow-2xs">R</div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#E11D48] group-hover:translate-x-0.5 transition-transform">Compare →</span>
                </div>
                <h3 className="font-bold text-sm text-[#111827] mb-1">Vercel vs Render</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Global serverless frontend deployment vs flat-rate instance tiers ($7/mo) with dedicated background workers.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F3F4F6] text-[11px] text-[#4B5563] font-medium">
                Edge Serverless vs Unified Cloud
              </div>
            </Link>

            {/* Coolify vs Vercel */}
            <Link
              href="/compare-tools/coolify-vs-vercel"
              className="p-5 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#E11D48] transition-all hover:shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#6B11FF] text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-2xs">C</div>
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-2xs">V</div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#E11D48] group-hover:translate-x-0.5 transition-transform">Compare →</span>
                </div>
                <h3 className="font-bold text-sm text-[#111827] mb-1">Coolify vs Vercel</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Free self-hosted PaaS on budget VPS (€3.79/mo) vs fully managed serverless cloud with per-seat billing.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F3F4F6] text-[11px] text-[#4B5563] font-medium">
                Self-Hosted VPS vs Managed Cloud
              </div>
            </Link>

            {/* Coolify vs Dokploy */}
            <Link
              href="/compare-tools/coolify-vs-dokploy"
              className="p-5 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#E11D48] transition-all hover:shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#6B11FF] text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-2xs">C</div>
                    <div className="w-8 h-8 rounded-full bg-[#090A0F] text-[#3B82F6] flex items-center justify-center font-bold text-xs border-2 border-white shadow-2xs">D</div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#E11D48] group-hover:translate-x-0.5 transition-transform">Compare →</span>
                </div>
                <h3 className="font-bold text-sm text-[#111827] mb-1">Coolify vs Dokploy</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Feature-rich open-source PaaS with 200+ app templates vs lightweight minimalist Docker control plane.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F3F4F6] text-[11px] text-[#4B5563] font-medium">
                Open-Source PaaS Shootout
              </div>
            </Link>
          </div>
        </PageContainer>
      </section>

      {/* 5. HOSTING BY GOAL */}
      <section id="hosting-by-goal" className="py-12 bg-white scroll-mt-20">
        <PageContainer>
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#15803D] text-xs font-semibold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[14px]">flag</span>
              Objective-Driven Roadmaps
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-2">
              Hosting by Goal
            </h2>
            <p className="text-sm text-[#4B5563]">
              Step-by-step architecture blueprints explaining workload requirements, server sizing, pricing, and operational maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hosting for Next.js */}
            <div className="p-6 rounded-2xl border border-[#E5E7EB] bg-white flex flex-col justify-between hover:border-[#2563EB] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">web</span>
                </div>
                <h3 className="font-bold text-base text-[#111827] mb-2">Hosting for Next.js Apps</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                  Compare Next.js App Router architectures: Vercel serverless edge vs standalone container deployment on Railway or Coolify VPS.
                </p>
                <div className="space-y-1 text-xs text-[#6B7280]">
                  <div>• Estimated Cost: $0 - $20/month</div>
                  <div>• Suitable Platforms: Vercel, Railway, Coolify, Netlify</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F3F4F6]">
                <Link
                  href="/goals/hosting-nextjs-apps"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:underline"
                >
                  Read Next.js Deployment Roadmap →
                </Link>
              </div>
            </div>

            {/* VPS Hosting for n8n */}
            <div className="p-6 rounded-2xl border border-[#E5E7EB] bg-white flex flex-col justify-between hover:border-[#059669] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">account_tree</span>
                </div>
                <h3 className="font-bold text-base text-[#111827] mb-2">VPS Hosting for n8n</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                  Run self-hosted n8n workflows with unlimited executions on budget Linux VPS. Includes PostgreSQL setup, volume backups, and SSL.
                </p>
                <div className="space-y-1 text-xs text-[#6B7280]">
                  <div>• Estimated Cost: $4 - $10/month (VPS fee only)</div>
                  <div>• Suitable VPS: Hetzner Cloud, DigitalOcean Droplets</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F3F4F6]">
                <Link
                  href="/goals/vps-hosting-n8n"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#059669] hover:underline"
                >
                  Read n8n VPS Guide →
                </Link>
              </div>
            </div>

            {/* VPS Hosting for Coolify */}
            <div className="p-6 rounded-2xl border border-[#E5E7EB] bg-white flex flex-col justify-between hover:border-[#7C3AED] transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">dns</span>
                </div>
                <h3 className="font-bold text-base text-[#111827] mb-2">VPS Hosting for Coolify</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                  Transform any clean Linux VPS into a private self-hosted PaaS. Automates Traefik reverse proxy, SSL certificates, and 1-click apps.
                </p>
                <div className="space-y-1 text-xs text-[#6B7280]">
                  <div>• Estimated Cost: €3.79 - $6/month (VPS fee only)</div>
                  <div>• Sizing: 2 vCPU, 4 GB RAM recommended</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F3F4F6]">
                <Link
                  href="/goals/vps-hosting-coolify"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#7C3AED] hover:underline"
                >
                  Read Coolify Setup Guide →
                </Link>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 6. VERCEL ALTERNATIVES PREVIEW */}
      <section className="py-12 bg-[#F9FAFB] border-t border-b border-[#E5E7EB]">
        <PageContainer>
          <div className="p-8 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FFF1F2] text-[#E11D48] text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
                Comprehensive Alternatives Guide
              </span>
              <h2 className="text-2xl font-bold text-[#111827] mb-2">
                Looking for Vercel Alternatives for AI Apps?
              </h2>
              <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                Explore when and why developers switch from Vercel to Railway, Render, Coolify, or Cloudflare. Includes detailed analysis of serverless function execution limits, bandwidth egress fees, and Next.js standalone container deployment.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-[#374151]">
                <span className="px-2.5 py-1 rounded-md bg-[#F3F4F6]">Free Vercel Alternatives</span>
                <span className="px-2.5 py-1 rounded-md bg-[#F3F4F6]">Self-Hosted Next.js</span>
                <span className="px-2.5 py-1 rounded-md bg-[#F3F4F6]">24/7 Background Workers</span>
              </div>
            </div>

            <Link
              href="/alternatives/vercel"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#E11D48] hover:bg-[#BE123C] text-white font-semibold text-sm transition-colors shrink-0 shadow-xs"
            >
              Read Vercel Alternatives Guide →
            </Link>
          </div>
        </PageContainer>
      </section>

      {/* 7. CONCISE EXPLANATION OF HOSTING COSTS */}
      <section className="py-12 bg-white">
        <PageContainer>
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-2">
              Understanding AI Hosting Costs & Overages
            </h2>
            <p className="text-sm text-[#4B5563]">
              Don&apos;t get surprised by unexpected cloud invoices. Here is how hosting bills differ across architectures:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-5 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB]">
              <div className="font-bold text-sm text-[#111827] mb-1.5 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#2563EB]">schedule</span>
                Execution Timeouts
              </div>
              <p className="text-[#4B5563] leading-relaxed">
                Serverless platforms (Vercel) terminate functions after 60s (Hobby) or 300s (Pro). Long-running AI agents or scraping workflows must use container PaaS (Railway) or a persistent VPS.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB]">
              <div className="font-bold text-sm text-[#111827] mb-1.5 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#D97706]">receipt</span>
                Data Egress Charges
              </div>
              <p className="text-[#4B5563] leading-relaxed">
                Vercel charges $0.15/GB beyond plan allowances. Hetzner includes 20 TB monthly traffic, and Cloudflare R2 charges $0 in egress fees for storing generated images and media.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB]">
              <div className="font-bold text-sm text-[#111827] mb-1.5 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#059669]">paid</span>
                Software vs Hardware
              </div>
              <p className="text-[#4B5563] leading-relaxed">
                Coolify and Dokploy software is completely free ($0). You pay only the underlying VPS host (e.g. ~€3.79/mo on Hetzner), eliminating per-seat developer subscription fees.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB]">
              <div className="font-bold text-sm text-[#111827] mb-1.5 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#7C3AED]">neurology</span>
                Model Tokens vs Server
              </div>
              <p className="text-[#4B5563] leading-relaxed">
                Hosting your app (Next.js server) is distinct from LLM token fees paid to OpenAI/Anthropic. Optimize hosting fixed costs so your budget goes towards model intelligence.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 8. SHORT FAQ & RESEARCH METHODOLOGY */}
      <section className="py-12 bg-[#F9FAFB] border-t border-[#E5E7EB]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <span className="text-xs font-bold text-[#E11D48] uppercase tracking-wider mb-2 block">
                Transparency & Sources
              </span>
              <h2 className="text-2xl font-bold text-[#111827] mb-3">
                Research Methodology
              </h2>
              <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                Every specification, price point, free tier restriction, and deployment capability listed in this directory is sourced directly from official provider documentation and pricing calculators.
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#E5E7EB] text-xs text-[#6B7280] space-y-1.5">
                <div>• Source Audit Date: October 2026</div>
                <div>• Benchmark Integrity: No simulated customer counts</div>
                <div>• Pricing Rule: Missing data marked &ldquo;Not verified&rdquo;</div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <div className="p-5 rounded-xl bg-white border border-[#E5E7EB]">
                <h3 className="font-bold text-sm text-[#111827] mb-1.5">
                  “I built an app with AI. Where should I host it, what will it cost, and how do I deploy it?”
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  If it&apos;s a standard Next.js frontend or prompt wrapper, start on Vercel or Netlify (Free/Pro $20/mo) via Git push. If your app requires background Python workers, Celery queues, or continuous agent loops, deploy on Railway ($5/mo baseline) or Render ($7/mo). If you want full data privacy, zero seat fees, and minimal bills, deploy Coolify on a Hetzner Cloud VPS (~€3.79/mo) and push via Git webhooks.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E5E7EB]">
                <h3 className="font-bold text-sm text-[#111827] mb-1.5">
                  Do I need a GPU to host my AI application?
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  No. 95% of AI web applications do not run model weights locally; they call external hosted model APIs (like OpenAI GPT-4o, Anthropic Claude 3.5, or Groq) over HTTPS. A standard, affordable CPU VPS or managed platform handles your web interface, database, and API routing with zero need for expensive GPU rentals.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E5E7EB]">
                <h3 className="font-bold text-sm text-[#111827] mb-1.5">
                  How does Coolify differ from a VPS provider like Hetzner or DigitalOcean?
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Hetzner and DigitalOcean supply the raw virtual machine hardware and IP address. Coolify is deployment control software installed on that server. Coolify gives you a web interface to deploy applications, issue SSL certificates, and configure databases with the ease of Heroku, without paying commercial PaaS markups.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 9. WORKING COMPARISON SELECTOR MODAL */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 border border-[#E5E7EB] shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F3F4F6]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E11D48] text-[20px]">compare_arrows</span>
                <h3 className="font-bold text-base text-[#111827]">Compare Hosting Platforms</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCompareModalOpen(false)}
                className="text-[#9CA3AF] hover:text-[#111827] p-1 rounded-md"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <p className="text-xs text-[#4B5563] mb-5">
              Select any two platforms to view a side-by-side technical matrix of pricing, execution limits, and deployment workflows.
            </p>

            <div className="space-y-4 mb-5">
              {/* Platform A */}
              <div>
                <label className="block text-xs font-semibold text-[#374151] mb-1.5">
                  Platform 1 (Primary)
                </label>
                <select
                  value={toolA}
                  onChange={(e) => setToolA(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-[#D1D5DB] bg-white text-[#111827] focus:outline-none focus:border-[#E11D48]"
                >
                  {tools.map((t) => (
                    <option key={t.slug} value={t.slug} disabled={t.slug === toolB}>
                      {t.name} ({t.hostingDetails?.productTypeLabel || t.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Platform B */}
              <div>
                <label className="block text-xs font-semibold text-[#374151] mb-1.5">
                  Platform 2 (Compare Against)
                </label>
                <select
                  value={toolB}
                  onChange={(e) => setToolB(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-[#D1D5DB] bg-white text-[#111827] focus:outline-none focus:border-[#E11D48]"
                >
                  {tools.map((t) => (
                    <option key={t.slug} value={t.slug} disabled={t.slug === toolA}>
                      {t.name} ({t.hostingDetails?.productTypeLabel || t.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Architectural difference explanation */}
              {isDifferentArchitecture && (
                <div className="p-3 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-xs text-[#1E40AF]">
                  <strong className="font-semibold block mb-0.5">Architecture Notice:</strong>
                  You are comparing a {selectedToolAObj?.hostingDetails?.productGroup} with a {selectedToolBObj?.hostingDetails?.productGroup}. Operating responsibilities and server management differ between these platforms.
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-[#F3F4F6]">
              <button
                type="button"
                onClick={() => setIsCompareModalOpen(false)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-[#4B5563] hover:bg-[#F3F4F6]"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={toolA === toolB}
                onClick={handleLaunchComparison}
                className="px-5 py-2 rounded-lg bg-[#E11D48] hover:bg-[#BE123C] text-white font-semibold text-xs shadow-xs disabled:opacity-50"
              >
                Open Side-by-Side Comparison →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
