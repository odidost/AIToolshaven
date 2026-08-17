"use client";

import React, { useState } from "react";
import type {
  GscOverviewMetrics,
  GscOpportunity,
  GscQueryCluster,
  GscCannibalizationCase,
  GscCategoryPerformance,
} from "@/lib/types/gsc";

interface Props {
  initialOverview: GscOverviewMetrics;
  topQueries: Array<{
    query: string;
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
    intent: string;
    isBranded: boolean;
  }>;
  topPages: Array<{
    page: string;
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
  }>;
  opportunities: GscOpportunity[];
  clusters: GscQueryCluster[];
  cannibalizationCases: GscCannibalizationCase[];
  categoryPerformance: GscCategoryPerformance[];
  collectionPerformance: Array<{
    collectionSlug: string;
    name: string;
    url: string;
    impressions: number;
    clicks: number;
    ctr: number;
    position: number;
  }>;
  comparisonPerformance: Array<{
    slug: string;
    toolA: string;
    toolB: string;
    impressions: number;
    clicks: number;
    ctr: number;
    position: number;
  }>;
  alternativesPerformance: Array<{
    slug: string;
    toolName: string;
    url: string;
    impressions: number;
    clicks: number;
    ctr: number;
    position: number;
  }>;
  countries: Array<{ country: string; clicks: number; impressions: number; ctr: number; position: number }>;
  devices: Array<{ device: string; clicks: number; impressions: number; ctr: number; position: number }>;
}

export function GscDashboardClient({
  initialOverview,
  topQueries,
  topPages,
  opportunities,
  clusters,
  cannibalizationCases,
  categoryPerformance,
  collectionPerformance,
  comparisonPerformance,
  alternativesPerformance,
  countries,
  devices,
}: Props) {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'queries' | 'pages' | 'opportunities' | 'clustering' | 'cannibalization' | 'categories' | 'collections' | 'geography' | 'setup'
  >('overview');
  const [timeWindow, setTimeWindow] = useState<'7d' | '28d' | '90d'>('28d');
  const [querySearch, setQuerySearch] = useState('');
  const [pageSearch, setPageSearch] = useState('');
  const [selectedIntent, setSelectedIntent] = useState<string>('all');

  const filteredQueries = topQueries.filter((q) => {
    const matchesSearch = q.query.toLowerCase().includes(querySearch.toLowerCase());
    const matchesIntent = selectedIntent === 'all' || q.intent.toLowerCase() === selectedIntent.toLowerCase();
    return matchesSearch && matchesIntent;
  });

  const filteredPages = topPages.filter((p) =>
    p.page.toLowerCase().includes(pageSearch.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Google Search Console & SEO Intelligence
            </h1>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                initialOverview.connectionStatus.connected
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-amber-50 text-amber-800 border border-amber-200"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  initialOverview.connectionStatus.connected ? "bg-emerald-500" : "bg-amber-500 animate-pulse"
                }`}
              />
              {initialOverview.connectionStatus.connected ? "Live API Connected" : "Configuration Required (State C)"}
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Real search demand signals, ranking positions, CTR opportunities, keyword clusters, and cannibalization audit.
          </p>
        </div>

        {/* Time Window Switcher */}
        <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto">
          {(['7d', '28d', '90d'] as const).map((w) => (
            <button
              key={w}
              onClick={() => setTimeWindow(w)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                timeWindow === w
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Last {w === '7d' ? '7 Days' : w === '28d' ? '28 Days' : '90 Days'}
            </button>
          ))}
        </div>
      </div>

      {/* Connection Notice if Not Connected */}
      {!initialOverview.connectionStatus.connected && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-amber-600 text-2xl mt-0.5">info</span>
            <div>
              <p className="font-bold text-sm">GSC Service Account Connection Pending (State C)</p>
              <p className="text-xs text-amber-700 mt-0.5">
                Audit is currently powered by verified first-party catalog demand signals, internal telemetry, and category distributions. To stream live search metrics directly from Google, add GSC Service Account credentials in <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">.env.local</code>.
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('setup')}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold shrink-0 shadow-sm transition-all"
          >
            Setup Guide
          </button>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        {[
          { id: 'overview', label: 'Overview & KPIs', icon: 'monitoring' },
          { id: 'opportunities', label: 'SEO Opportunities', icon: 'auto_awesome', count: opportunities.length },
          { id: 'queries', label: 'Top Queries', icon: 'search', count: topQueries.length },
          { id: 'pages', label: 'Top Pages', icon: 'description', count: topPages.length },
          { id: 'clustering', label: 'Intent Clusters', icon: 'hub', count: clusters.length },
          { id: 'cannibalization', label: 'Cannibalization', icon: 'call_split', count: cannibalizationCases.length },
          { id: 'categories', label: 'Taxonomy Pillars', icon: 'category', count: categoryPerformance.length },
          { id: 'collections', label: 'Comparisons & Alternatives', icon: 'compare_arrows' },
          { id: 'geography', label: 'Countries & Devices', icon: 'public' },
          { id: 'setup', label: 'GSC Setup', icon: 'settings' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
            {tab.label}
            {tab.count !== undefined && (
              <span
                className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                  activeTab === tab.id ? "bg-slate-800 text-slate-200" : "bg-slate-100 text-slate-600"
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Top 4 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                <span>Total Clicks</span>
                <span className="material-symbols-outlined text-blue-500 text-lg">ads_click</span>
              </div>
              <div className="text-3xl font-extrabold text-slate-900">
                {initialOverview.totalClicks.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400 mt-2">Organic Google visits</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                <span>Total Impressions</span>
                <span className="material-symbols-outlined text-purple-500 text-lg">visibility</span>
              </div>
              <div className="text-3xl font-extrabold text-slate-900">
                {initialOverview.totalImpressions.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400 mt-2">SERP impressions in window</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                <span>Average CTR</span>
                <span className="material-symbols-outlined text-emerald-500 text-lg">percent</span>
              </div>
              <div className="text-3xl font-extrabold text-slate-900">
                {initialOverview.averageCtr.toFixed(2)}%
              </div>
              <p className="text-xs text-slate-400 mt-2">Click-through rate</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                <span>Average Position</span>
                <span className="material-symbols-outlined text-amber-500 text-lg">format_list_numbered</span>
              </div>
              <div className="text-3xl font-extrabold text-slate-900">
                {initialOverview.averagePosition > 0 ? initialOverview.averagePosition.toFixed(1) : "—"}
              </div>
              <p className="text-xs text-slate-400 mt-2">Mean ranking across all queries</p>
            </div>
          </div>

          {/* Quick Opportunity Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-500">trending_up</span>
                Striking Distance Opportunities (Rank 4–20)
              </h2>
              <p className="text-xs text-slate-500 mb-4">
                Pages ranking on page 2 or lower page 1 that can reach top 3 with targeted editorial enrichment.
              </p>
              {opportunities.filter(o => o.opportunityType === 'POSITION_4_20_STRIKING').length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-500 text-sm">
                  No striking distance queries recorded yet in current data window.
                </div>
              ) : (
                <div className="space-y-3">
                  {opportunities.filter(o => o.opportunityType === 'POSITION_4_20_STRIKING').slice(0, 5).map((o, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-xl flex items-center justify-between gap-4">
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{o.query}</div>
                        <div className="text-xs text-slate-500 truncate max-w-xs">{o.page}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-bold text-slate-700">Rank {o.position.toFixed(1)}</div>
                        <div className="text-[10px] text-slate-400">{o.impressions} imps</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-purple-500">tune</span>
                CTR Optimization Targets
              </h2>
              <p className="text-xs text-slate-500 mb-4">
                Pages with high impressions but low CTR where improving titles/metas will immediately increase traffic.
              </p>
              {opportunities.filter(o => o.opportunityType === 'CTR_UNDERPERFORMER').length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-500 text-sm">
                  No CTR underperformers flagged in current data window.
                </div>
              ) : (
                <div className="space-y-3">
                  {opportunities.filter(o => o.opportunityType === 'CTR_UNDERPERFORMER').slice(0, 5).map((o, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-xl flex items-center justify-between gap-4">
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{o.query}</div>
                        <div className="text-xs text-slate-500 truncate max-w-xs">{o.page}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-bold text-rose-600">{(o.ctr * 100).toFixed(1)}% CTR</div>
                        <div className="text-[10px] text-slate-400">{o.impressions} imps</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SEO OPPORTUNITIES */}
      {activeTab === 'opportunities' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Deterministic SEO Opportunity Scoring</h2>
            <p className="text-xs text-slate-500 mt-1">
              Scored 0–100 based on Observed Impressions (30%), Position Striking Distance (25%), CTR Deficit (20%), Commercial Intent (15%), and Content Quality Uplift Potential (10%).
            </p>
          </div>

          {opportunities.length === 0 ? (
            <div className="p-12 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <span className="material-symbols-outlined text-4xl text-slate-300 mb-2 block">auto_awesome</span>
              <p className="text-slate-600 font-medium">No active search opportunities in queue.</p>
              <p className="text-xs text-slate-400 mt-1">Opportunities will automatically populate as GSC data streams in.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase font-semibold">
                    <th className="pb-3">Score</th>
                    <th className="pb-3">Query / Keyword</th>
                    <th className="pb-3">Target Page</th>
                    <th className="pb-3">Type & Intent</th>
                    <th className="pb-3">Metrics</th>
                    <th className="pb-3">Recommended Action</th>
                    <th className="pb-3">Effort</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {opportunities.map((opp, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 font-extrabold text-slate-900">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono">
                          {opp.opportunityScore}/100
                        </span>
                      </td>
                      <td className="py-4 font-semibold text-slate-900">{opp.query}</td>
                      <td className="py-4 text-xs font-mono text-slate-600 max-w-xs truncate">{opp.page}</td>
                      <td className="py-4">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                          {opp.intent}
                        </span>
                      </td>
                      <td className="py-4 text-xs text-slate-600">
                        <div>{opp.impressions} imps · {opp.clicks} clicks</div>
                        <div className="text-slate-400">Rank {opp.position.toFixed(1)} · {(opp.ctr * 100).toFixed(1)}% CTR</div>
                      </td>
                      <td className="py-4 text-xs text-slate-700 max-w-sm">{opp.recommendedAction}</td>
                      <td className="py-4">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            opp.effort === 'Low'
                              ? "bg-emerald-100 text-emerald-800"
                              : opp.effort === 'Medium'
                              ? "bg-amber-100 text-amber-800"
                              : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          {opp.effort}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: TOP QUERIES */}
      {activeTab === 'queries' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Top Search Queries</h2>
              <p className="text-xs text-slate-500 mt-0.5">Queries driving impressions and clicks from Google organic search.</p>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search queries..."
                value={querySearch}
                onChange={(e) => setQuerySearch(e.target.value)}
                className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <select
                value={selectedIntent}
                onChange={(e) => setSelectedIntent(e.target.value)}
                className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <option value="all">All Intents</option>
                <option value="commercial">Commercial</option>
                <option value="comparison">Comparison</option>
                <option value="alternatives">Alternatives</option>
                <option value="category">Category</option>
                <option value="informational">Informational</option>
              </select>
            </div>
          </div>

          {filteredQueries.length === 0 ? (
            <div className="p-12 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-500 text-sm">
              No queries matching filter criteria.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase font-semibold">
                    <th className="pb-3">Query</th>
                    <th className="pb-3">Intent</th>
                    <th className="pb-3 text-right">Clicks</th>
                    <th className="pb-3 text-right">Impressions</th>
                    <th className="pb-3 text-right">CTR</th>
                    <th className="pb-3 text-right">Position</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredQueries.map((q, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 font-semibold text-slate-900">{q.query}</td>
                      <td className="py-3">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                          {q.intent}
                        </span>
                      </td>
                      <td className="py-3 text-right font-medium text-slate-900">{q.clicks}</td>
                      <td className="py-3 text-right font-medium text-slate-900">{q.impressions}</td>
                      <td className="py-3 text-right text-slate-600">{q.ctr.toFixed(2)}%</td>
                      <td className="py-3 text-right text-slate-600">{q.position.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: TOP PAGES */}
      {activeTab === 'pages' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Top Performing Pages</h2>
              <p className="text-xs text-slate-500 mt-0.5">Landing pages receiving Google search impressions and clicks.</p>
            </div>
            <input
              type="text"
              placeholder="Search URLs..."
              value={pageSearch}
              onChange={(e) => setPageSearch(e.target.value)}
              className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          {filteredPages.length === 0 ? (
            <div className="p-12 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-500 text-sm">
              No landing pages matching filter criteria.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase font-semibold">
                    <th className="pb-3">Landing Page URL</th>
                    <th className="pb-3 text-right">Clicks</th>
                    <th className="pb-3 text-right">Impressions</th>
                    <th className="pb-3 text-right">CTR</th>
                    <th className="pb-3 text-right">Avg Position</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredPages.map((p, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 font-mono text-xs text-slate-800 font-semibold">{p.page}</td>
                      <td className="py-3 text-right font-medium text-slate-900">{p.clicks}</td>
                      <td className="py-3 text-right font-medium text-slate-900">{p.impressions}</td>
                      <td className="py-3 text-right text-slate-600">{p.ctr.toFixed(2)}%</td>
                      <td className="py-3 text-right text-slate-600">{p.position.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TAB 5: INTENT CLUSTERS */}
      {activeTab === 'clustering' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Query Intent Clusters</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Queries mapped into canonical topic clusters to prevent keyword fragmentation.
            </p>
          </div>

          {clusters.length === 0 ? (
            <div className="p-12 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-500 text-sm">
              No query clusters detected in current window.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clusters.map((c, idx) => (
                <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">{c.clusterName}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {c.recommendation}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-600 truncate">
                    Canonical Page: {c.canonicalPage}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>{c.totalImpressions} imps</span>
                    <span>{c.totalClicks} clicks</span>
                    <span>Rank {c.averagePosition.toFixed(1)}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    Keywords: {c.queries.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 6: CANNIBALIZATION */}
      {activeTab === 'cannibalization' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Keyword Cannibalization Audit</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Queries where multiple AIToolsHaven URLs compete for impressions in Google SERPs.
            </p>
          </div>

          {cannibalizationCases.length === 0 ? (
            <div className="p-12 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-500 text-sm">
              <span className="material-symbols-outlined text-4xl text-emerald-500 mb-2 block">verified</span>
              <p className="font-bold text-slate-900">0 High-Risk Cannibalization Cases Detected</p>
              <p className="text-xs text-slate-400 mt-1">Site architecture and canonical tags have clean keyword boundaries.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cannibalizationCases.map((c, idx) => (
                <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Query: "{c.query}"</span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        c.severity === 'High'
                          ? "bg-rose-100 text-rose-800"
                          : c.severity === 'Medium'
                          ? "bg-amber-100 text-amber-800"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {c.severity} Severity
                    </span>
                  </div>
                  <div className="space-y-2">
                    {c.competingPages.map((p, pIdx) => (
                      <div key={pIdx} className="flex items-center justify-between text-xs bg-white p-2.5 rounded-xl border border-slate-200">
                        <span className="font-mono text-slate-700 truncate max-w-md">{p.url}</span>
                        <div className="flex items-center gap-4 text-slate-500 shrink-0">
                          <span>{p.impressions} imps</span>
                          <span>{p.clicks} clicks</span>
                          <span>Rank {p.position.toFixed(1)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-indigo-700 bg-indigo-50 p-2.5 rounded-xl border border-indigo-100">
                    💡 <strong>Resolution:</strong> {c.recommendation}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 7: TAXONOMY PILLARS */}
      {activeTab === 'categories' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">20 Top-Level Taxonomy Pillars</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Category inventory distribution, published tools volume, and search demand rank.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase font-semibold">
                  <th className="pb-3">Demand Rank</th>
                  <th className="pb-3">Taxonomy Pillar</th>
                  <th className="pb-3 text-right">Published Tools</th>
                  <th className="pb-3 text-right">Impressions</th>
                  <th className="pb-3 text-right">Clicks</th>
                  <th className="pb-3 text-right">Commercial Potential</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {categoryPerformance.map((cat, idx) => (
                  <tr key={cat.categoryId} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 font-mono font-bold text-slate-500">#{idx + 1}</td>
                    <td className="py-3 font-semibold text-slate-900">{cat.categoryName}</td>
                    <td className="py-3 text-right font-medium text-slate-900">{cat.publishedToolsCount} tools</td>
                    <td className="py-3 text-right font-medium text-slate-900">{cat.impressions}</td>
                    <td className="py-3 text-right font-medium text-slate-900">{cat.clicks}</td>
                    <td className="py-3 text-right">
                      <span
                        className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                          cat.commercialPotential === 'High'
                            ? "bg-emerald-100 text-emerald-800"
                            : cat.commercialPotential === 'Medium'
                            ? "bg-blue-100 text-blue-800"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {cat.commercialPotential}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 8: COMPARISONS & ALTERNATIVES */}
      {activeTab === 'collections' && (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Live Comparison Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {comparisonPerformance.map((c) => (
                <div key={c.slug} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 text-sm">{c.toolA} vs {c.toolB}</div>
                  <div className="text-xs font-mono text-slate-500 truncate">/compare-tools/{c.slug}</div>
                  <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-200">
                    <span>{c.impressions} imps</span>
                    <span>{c.clicks} clicks</span>
                    <span>Rank {c.position > 0 ? c.position.toFixed(1) : "—"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Live Alternatives Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {alternativesPerformance.map((a) => (
                <div key={a.slug} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 text-sm">Best {a.toolName} Alternatives</div>
                  <div className="text-xs font-mono text-slate-500 truncate">{a.url}</div>
                  <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-200">
                    <span>{a.impressions} imps</span>
                    <span>{a.clicks} clicks</span>
                    <span>Rank {a.position > 0 ? a.position.toFixed(1) : "—"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 9: GEOGRAPHY & DEVICES */}
      {activeTab === 'geography' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Top Countries</h2>
            {countries.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-500 text-xs">
                No country-specific search records in current window.
              </div>
            ) : (
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase font-semibold">
                    <th className="pb-2">Country</th>
                    <th className="pb-2 text-right">Clicks</th>
                    <th className="pb-2 text-right">Impressions</th>
                    <th className="pb-2 text-right">CTR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {countries.map((c, idx) => (
                    <tr key={idx}>
                      <td className="py-2.5 font-semibold text-slate-900">{c.country}</td>
                      <td className="py-2.5 text-right text-slate-700">{c.clicks}</td>
                      <td className="py-2.5 text-right text-slate-700">{c.impressions}</td>
                      <td className="py-2.5 text-right text-slate-600">{c.ctr.toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Device Breakdown</h2>
            {devices.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-500 text-xs">
                No device telemetry records in current window.
              </div>
            ) : (
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase font-semibold">
                    <th className="pb-2">Device</th>
                    <th className="pb-2 text-right">Clicks</th>
                    <th className="pb-2 text-right">Impressions</th>
                    <th className="pb-2 text-right">CTR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {devices.map((d, idx) => (
                    <tr key={idx}>
                      <td className="py-2.5 font-semibold text-slate-900">{d.device}</td>
                      <td className="py-2.5 text-right text-slate-700">{d.clicks}</td>
                      <td className="py-2.5 text-right text-slate-700">{d.impressions}</td>
                      <td className="py-2.5 text-right text-slate-600">{d.ctr.toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}

      {/* TAB 10: GSC SETUP WIZARD */}
      {activeTab === 'setup' && (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 max-w-4xl">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Google Search Console Integration Setup</h2>
            <p className="text-slate-500 text-sm mt-1">
              Connect your Google Cloud Service Account to enable automated weekly GSC data synchronization.
            </p>
          </div>

          <div className="space-y-4 text-sm text-slate-700">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">Step 1: Enable Google Search Console API</h3>
              <p className="text-xs text-slate-600">
                In Google Cloud Console, create a project and enable the <strong>Google Search Console API (Webmasters API)</strong>.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">Step 2: Create a Service Account Key</h3>
              <p className="text-xs text-slate-600">
                Create a Service Account (e.g. <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">gsc-sync@aitoolshaven.iam.gserviceaccount.com</code>) and generate a JSON private key.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">Step 3: Grant Permissions in Search Console</h3>
              <p className="text-xs text-slate-600">
                Go to Google Search Console &gt; Settings &gt; Users &amp; Permissions &gt; Add User. Add your service account email with <strong>Read / Full</strong> permission.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">Step 4: Set Environment Variables</h3>
              <p className="text-xs text-slate-600 mb-2">
                Add the following keys into your <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">.env.local</code>:
              </p>
              <pre className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs font-mono overflow-x-auto">
{`GSC_SITE_URL=sc-domain:aitoolshaven.com
GSC_CLIENT_EMAIL=gsc-sync@aitoolshaven.iam.gserviceaccount.com
GSC_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n"`}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
