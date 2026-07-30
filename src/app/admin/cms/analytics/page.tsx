"use client";

import { useState, useEffect } from 'react';
import type { RealAnalyticsData, IntegrationStatus, ToolRecord } from '@/lib/services/analytics-service';
import { fetchRealAnalytics } from '@/lib/services/analytics-service';
import { exportToJSON, triggerPDFPrint } from '@/lib/data/analytics-data';

export default function AnalyticsPage() {
  const [data, setData] = useState<RealAnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPrivacyMasked, setIsPrivacyMasked] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchRealAnalytics()
      .then((result) => {
        if (!cancelled) {
          setData(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message || 'Failed to load analytics');
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto pb-12">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Analytics & Intelligence</h1>
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-slate-100 rounded-2xl h-24 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="max-w-7xl mx-auto pb-12 p-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Analytics & Intelligence</h1>
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 text-center">
          <span className="material-symbols-outlined text-3xl text-rose-500 mb-2 block">error</span>
          <p className="font-bold text-rose-900">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-12">
      {/* ─── Header ─── */}
      <div className="mb-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">Analytics & Intelligence</h1>
            <p className="text-sm text-slate-500">Real-time data from Supabase and verified telemetry only. No estimated or placeholder data.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setIsPrivacyMasked(!isPrivacyMasked)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${isPrivacyMasked ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}`}
            >
              <span className="material-symbols-outlined text-[16px]">{isPrivacyMasked ? 'visibility_off' : 'visibility'}</span>
              {isPrivacyMasked ? 'Privacy: ON' : 'Privacy: OFF'}
            </button>
            <div className="relative">
              <button onClick={() => setShowExportMenu(!showExportMenu)} className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[16px]">download</span>Export
              </button>
              {showExportMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 z-50">
                  <button onClick={() => { setShowExportMenu(false); if (data?.supabase) exportToJSON('analytics_supabase', data.supabase); }} className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50">
                    <span className="material-symbols-outlined text-[16px] text-amber-600">code</span>Export JSON
                  </button>
                  <button onClick={() => { setShowExportMenu(false); triggerPDFPrint(); }} className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50">
                    <span className="material-symbols-outlined text-[16px] text-purple-600">print</span>Print PDF
                  </button>
                </div>
              )}
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Last fetched: {data?.lastFetched ? new Date(data.lastFetched).toLocaleTimeString() : '—'}</span>
          </div>
        </div>
      </div>

      {/* ─── Integration Status ─── */}
      <IntegrationStatusSection integrations={data?.integrations || []} />

      {/* ─── Supabase Application Data ─── */}
      <SupabaseDataSection supabase={data?.supabase ?? null} error={data?.supabaseError ?? null} />

      {/* ─── Telemetry Events ─── */}
      <TelemetrySection telemetry={data?.telemetry ?? null} error={data?.telemetryError ?? null} />

      {/* ─── AI Tool Inventory (Real DB Data) ─── */}
      <ToolInventorySection tools={data?.supabase?.tools.items ?? []} />

      {/* ─── GA4 Traffic Analytics (Requires Integration) ─── */}
      <Ga4RequiredSection title="Visitor Traffic & Geography" icon="public" description="Real-time visitor counts, country distribution, city-level analytics, and session data." source="Google Analytics 4" connected={data?.integrations.find(i => i.name === 'Google Analytics 4')?.status === 'connected'} />

      <Ga4RequiredSection title="Traffic Sources & Acquisition" icon="traffic" description="Channel breakdown: Organic Search, Direct, Social, Referral, Email, Paid Search." source="Google Analytics 4" connected={data?.integrations.find(i => i.name === 'Google Analytics 4')?.status === 'connected'} />

      <Ga4RequiredSection title="Device & Browser Analytics" icon="devices" description="Desktop, Mobile, Tablet breakdown. OS distribution. Browser market share." source="Google Analytics 4" connected={data?.integrations.find(i => i.name === 'Google Analytics 4')?.status === 'connected'} />

      <Ga4RequiredSection title="Top Pages & Landing Pages" icon="article" description="Most visited pages, engagement time, bounce rates, and exit rates from real traffic." source="Google Analytics 4" connected={data?.integrations.find(i => i.name === 'Google Analytics 4')?.status === 'connected'} />

      <Ga4RequiredSection title="Live Active Visitors" icon="sensors" description="Real-time active users currently on the site, their pages, and locations." source="Google Analytics 4 Realtime API" connected={data?.integrations.find(i => i.name === 'Google Analytics 4')?.status === 'connected'} />

      {/* ─── Search Console (Requires Integration) ─── */}
      <Ga4RequiredSection title="SEO & Search Console Analytics" icon="manage_search" description="Organic search clicks, impressions, CTR, average position, and top keywords." source="Google Search Console API" connected={data?.integrations.find(i => i.name === 'Google Search Console')?.status === 'connected'} />

      {/* ─── Clarity (Requires Integration) ─── */}
      <Ga4RequiredSection title="User Behavior & Heatmaps" icon="view_in_ar" description="Session recordings, click heatmaps, scroll depth analysis, rage clicks, and dead clicks." source="Microsoft Clarity" connected={data?.integrations.find(i => i.name === 'Microsoft Clarity')?.status === 'connected'} />

      {/* ─── Core Web Vitals (Requires Integration) ─── */}
      <Ga4RequiredSection title="Core Web Vitals & Performance" icon="speed" description="LCP, CLS, INP, TTFB measurements from real user monitoring." source="Vercel Web Analytics or Google CrUX API" connected={data?.integrations.find(i => i.name === 'Vercel Web Analytics')?.status === 'connected'} />
    </div>
  );
}

// ─────────────────────────────────────────────
// Integration Status Section
// ─────────────────────────────────────────────

function IntegrationStatusSection({ integrations }: { integrations: IntegrationStatus[] }) {
  return (
    <section className="mb-6">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary text-[22px]">hub</span>
          Analytics Data Source Status
        </h2>
        <p className="text-xs text-slate-500 mb-4">Only connected integrations provide real data. Disconnected sources show empty states.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {integrations.map((item) => (
            <div key={item.name} className={`p-4 rounded-xl border ${item.status === 'connected' ? 'bg-emerald-50 border-emerald-200' : item.status === 'error' ? 'bg-rose-50 border-rose-200' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`w-2.5 h-2.5 rounded-full ${item.status === 'connected' ? 'bg-emerald-500' : item.status === 'error' ? 'bg-rose-500' : 'bg-slate-400'}`} />
                <span className={`text-[10px] font-bold uppercase tracking-wider ${item.status === 'connected' ? 'text-emerald-700' : item.status === 'error' ? 'text-rose-700' : 'text-slate-500'}`}>
                  {item.status === 'connected' ? '✅ Connected' : item.status === 'error' ? '❌ Error' : '⚠ Not Configured'}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-xs mb-1">{item.name}</h3>
              <span className="text-[10px] text-slate-400 font-mono block truncate">{item.id}</span>
              {item.errorMessage && item.status !== 'connected' && (
                <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">{item.errorMessage}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Supabase Application Data Section
// ─────────────────────────────────────────────

function SupabaseDataSection({ supabase, error }: { supabase: RealAnalyticsData['supabase']; error: string | null }) {
  if (error && !supabase) {
    return (
      <section className="mb-6">
        <div className="bg-rose-50 rounded-2xl border border-rose-200 p-6">
          <h2 className="text-base font-bold text-rose-900 flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-rose-600 text-[20px]">error</span>
            Supabase Connection Error
          </h2>
          <p className="text-xs text-rose-700">{error}</p>
        </div>
      </section>
    );
  }

  if (!supabase) return null;

  const metrics = [
    { label: 'Published AI Tools', value: supabase.tools.count, icon: 'smart_toy', color: 'bg-primary text-white' },
    { label: 'Categories', value: supabase.categories.count, icon: 'category', color: 'bg-indigo-600 text-white' },
    { label: 'Registered Users', value: supabase.registeredUsers.count, icon: 'group', color: 'bg-emerald-600 text-white' },
    { label: 'User Reviews', value: supabase.reviews.count, icon: 'rate_review', color: 'bg-amber-600 text-white' },
    { label: 'Workflows', value: supabase.workflows.count, icon: 'account_tree', color: 'bg-purple-600 text-white' },
    { label: 'Goals', value: supabase.goals.count, icon: 'flag', color: 'bg-rose-600 text-white' },
    { label: 'Comparisons', value: supabase.comparisons.count, icon: 'compare_arrows', color: 'bg-cyan-700 text-white' },
  ];

  return (
    <section className="mb-6">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">database</span>
              Application Data — Supabase
            </h2>
            <p className="text-xs text-slate-500">Live counts from the Supabase production database. Source: verified database queries.</p>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">Fetched: {new Date(supabase.lastFetched).toLocaleTimeString()}</span>
        </div>
        {error && (
          <div className="mb-4 p-2 bg-amber-50 border border-amber-200 rounded-lg text-[11px] text-amber-800">
            ⚠ Partial error: {error}
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {metrics.map((m) => (
            <div key={m.label} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <div className={`w-8 h-8 rounded-lg ${m.color} flex items-center justify-center mx-auto mb-2`}>
                <span className="material-symbols-outlined text-[18px]">{m.icon}</span>
              </div>
              <span className="text-xl font-black text-slate-900 block">{m.value.toLocaleString()}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mt-1">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Telemetry Events Section
// ─────────────────────────────────────────────

function TelemetrySection({ telemetry, error }: { telemetry: RealAnalyticsData['telemetry']; error: string | null }) {
  return (
    <section className="mb-6">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">sensors</span>
              Custom Telemetry Events — /api/analytics/track
            </h2>
            <p className="text-xs text-slate-500">Events captured by the built-in tracking endpoint since server start. Resets on deploy.</p>
          </div>
          {telemetry && <span className="text-[10px] text-slate-400 font-mono">Fetched: {new Date(telemetry.lastFetched).toLocaleTimeString()}</span>}
        </div>

        {error && !telemetry && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-center">
            <span className="material-symbols-outlined text-amber-600 text-xl mb-1 block">info</span>
            <p className="text-xs text-amber-800 font-medium">{error}</p>
          </div>
        )}

        {telemetry && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <TelemetryCard label="Page Views" value={telemetry.pageViews} icon="visibility" />
            <TelemetryCard label="Newsletter Signups" value={telemetry.newsletterSignups} icon="mail" />
            <TelemetryCard label="Affiliate Clicks" value={telemetry.affiliateClicks} icon="ads_click" />
            <TelemetryCard label="Total Events" value={telemetry.totalEvents} icon="analytics" />
          </div>
        )}

        {!telemetry && !error && (
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
            <p className="text-xs text-slate-500 font-medium">Waiting for data collection…</p>
          </div>
        )}
      </div>
    </section>
  );
}

function TelemetryCard({ label, value, icon }: { label: string; value: number; icon: string }) {
  return (
    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
      <span className="material-symbols-outlined text-slate-400 text-xl mb-1 block">{icon}</span>
      <span className="text-lg font-black text-slate-900 block">{value.toLocaleString()}</span>
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{label}</span>
    </div>
  );
}

// ─────────────────────────────────────────────
// Tool Inventory Section (Real DB records)
// ─────────────────────────────────────────────

function ToolInventorySection({ tools }: { tools: ToolRecord[] }) {
  if (!tools || tools.length === 0) {
    return (
      <section className="mb-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center">
          <span className="material-symbols-outlined text-3xl text-slate-300 mb-2 block">smart_toy</span>
          <p className="text-xs text-slate-500 font-medium">No AI tools found in the database.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-6">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">smart_toy</span>
              AI Tool Inventory — Supabase
            </h2>
            <p className="text-xs text-slate-500">Real tools from the database ordered by popularity. Ratings and review counts are database values.</p>
          </div>
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">{tools.length} tools loaded</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-y border-slate-200">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Tool Name</th>
                <th className="px-4 py-3">Slug</th>
                <th className="px-4 py-3">Category ID</th>
                <th className="px-4 py-3 text-right">Rating</th>
                <th className="px-4 py-3 text-right">Reviews</th>
                <th className="px-4 py-3 text-right">Popularity</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tools.map((tool, idx) => (
                <tr key={tool.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-4 py-3 text-slate-400 font-mono">{idx + 1}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{tool.name || '—'}</td>
                  <td className="px-4 py-3 font-mono text-slate-500 text-[11px]">{tool.slug || '—'}</td>
                  <td className="px-4 py-3 text-slate-600">{tool.categoryId || '—'}</td>
                  <td className="px-4 py-3 text-right font-bold text-amber-600">{tool.rating !== null ? `★ ${tool.rating}` : '—'}</td>
                  <td className="px-4 py-3 text-right text-slate-600">{tool.reviewCount ?? '—'}</td>
                  <td className="px-4 py-3 text-right text-slate-600">{tool.popularity ?? '—'}</td>
                  <td className="px-4 py-3">
                    {tool.status ? (
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${tool.status === 'Published' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                        {tool.status}
                      </span>
                    ) : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// GA4 / GSC / Clarity Required Section
// (Empty state when integration not connected)
// ─────────────────────────────────────────────

function Ga4RequiredSection({ title, icon, description, source, connected }: {
  title: string;
  icon: string;
  description: string;
  source: string;
  connected: boolean | undefined;
}) {
  return (
    <section className="mb-6">
      <div className={`rounded-2xl border shadow-sm p-6 ${connected ? 'bg-white border-slate-200' : 'bg-slate-50 border-slate-200'}`}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-400 text-[20px]">{icon}</span>
            {title}
          </h2>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${connected ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
            {connected ? 'Connected' : 'Integration Required'}
          </span>
        </div>

        {connected ? (
          <div className="p-8 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="material-symbols-outlined text-3xl text-slate-300 mb-2 block">hourglass_empty</span>
            <p className="text-sm text-slate-600 font-medium mb-1">Waiting for data collection</p>
            <p className="text-xs text-slate-400">Data will appear here once {source} starts reporting metrics.</p>
          </div>
        ) : (
          <div className="p-8 bg-white rounded-xl border border-amber-200 text-center">
            <span className="material-symbols-outlined text-3xl text-amber-400 mb-2 block">integration_instructions</span>
            <p className="text-sm text-slate-700 font-semibold mb-1">Analytics integration required</p>
            <p className="text-xs text-slate-500 max-w-md mx-auto mb-3">{description}</p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-800 rounded-lg text-[11px] font-semibold border border-amber-200">
              <span className="material-symbols-outlined text-[14px]">link</span>
              Data Source: {source}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
