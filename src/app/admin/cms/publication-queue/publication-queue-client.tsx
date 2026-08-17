'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

interface ToolRecord {
  id: string;
  name: string;
  slug: string;
  websiteUrl: string;
  primaryCategory: string;
  status: 'Published' | 'Draft';
  hasLogo: boolean;
  hasScreenshot: boolean;
  hasShortDesc: boolean;
  shortDescLength: number;
  hasSeoTitle: boolean;
  hasMetaDesc: boolean;
  metaDescLength: number;
  healthScore: number;
  readinessLevel: string;
  priorityLevel: string;
  issues: string[];
}

interface CategoryDist {
  id: string;
  name: string;
  slug: string;
  published: number;
  draft: number;
  total: number;
  percentage: string;
}

interface QueueData {
  generatedAt: string;
  totals: {
    canonical: number;
    published: number;
    draft: number;
    eligibleForPublication: number;
    held: number;
    identityConflicts: number;
    invalidUrls: number;
    missingMetadata: number;
    missingAssets: number;
    averageReadinessScore: number;
  };
  categoryDistribution: CategoryDist[];
  lastBatch: {
    batchId: string;
    publishedCount: number;
    timestamp: string;
  } | null;
  nextBatch: {
    suggestedSize: number;
    eligibleCount: number;
    previewTools: {
      id: string;
      name: string;
      slug: string;
      category: string;
      websiteUrl: string;
    }[];
  };
  tools: ToolRecord[];
}

export function PublicationQueueClient() {
  const [data, setData] = useState<QueueData | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'ALL' | 'DRAFT' | 'PUBLISHED'>('ALL');
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [batchSize, setBatchSize] = useState(100);
  const [publishing, setPublishing] = useState(false);
  const [publishMessage, setPublishMessage] = useState<string | null>(null);

  const fetchQueueData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/publication-queue');
      const json = await res.json();
      setData(json);
    } catch (e) {
      console.error('Failed to load publication queue data', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueueData();
  }, []);

  const handlePublishBatch = async (dryRun: boolean = false) => {
    setPublishing(true);
    setPublishMessage(null);
    try {
      const res = await fetch('/api/admin/publication-queue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ size: batchSize, dryRun })
      });
      const result = await res.json();
      if (result.success) {
        setPublishMessage(
          dryRun
            ? `Dry run complete: ${result.result.publishedInBatch} tools eligible.`
            : `Success! Published ${result.result.publishedInBatch} tools. Current Published: ${result.result.afterPublished} / ${result.result.afterPublished + result.result.afterDraft}.`
        );
        await fetchQueueData();
      } else {
        setPublishMessage(`Error: ${result.error || 'Batch publication failed'}`);
      }
    } catch (e: any) {
      setPublishMessage(`Error: ${e.message || 'Network request failed'}`);
    } finally {
      setPublishing(false);
    }
  };

  const filteredTools = useMemo(() => {
    if (!data) return [];
    return data.tools.filter(t => {
      if (filter === 'DRAFT' && t.status !== 'Draft') return false;
      if (filter === 'PUBLISHED' && t.status !== 'Published') return false;
      if (categoryFilter !== 'all' && t.primaryCategory !== categoryFilter) return false;
      if (search) {
        const query = search.toLowerCase();
        return t.name.toLowerCase().includes(query) || t.slug.toLowerCase().includes(query);
      }
      return true;
    });
  }, [data, filter, search, categoryFilter]);

  if (loading && !data) {
    return (
      <div className="max-w-7xl mx-auto text-center py-20">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
        <p className="text-gray-500 font-medium">Loading Publication Queue & Inventory...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="max-w-7xl mx-auto text-center py-20">
        <p className="text-red-500 font-semibold">Failed to load publication queue data.</p>
        <button onClick={fetchQueueData} className="mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
          Retry
        </button>
      </div>
    );
  }

  const { totals, categoryDistribution, nextBatch, lastBatch } = data;
  const progressPercent = Math.round((totals.published / (totals.canonical || 1)) * 100);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Canonical Total</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{totals.canonical}</p>
        </div>
        <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 shadow-sm">
          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Published</p>
          <p className="text-2xl font-bold text-emerald-900 mt-1">{totals.published}</p>
        </div>
        <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200 shadow-sm">
          <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Remaining Drafts</p>
          <p className="text-2xl font-bold text-amber-900 mt-1">{totals.draft}</p>
        </div>
        <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-200 shadow-sm">
          <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Gate Eligible</p>
          <p className="text-2xl font-bold text-blue-900 mt-1">{totals.eligibleForPublication}</p>
        </div>
        <div className="bg-purple-50/70 p-4 rounded-xl border border-purple-200 shadow-sm">
          <p className="text-xs font-semibold text-purple-700 uppercase tracking-wider">Readiness Score</p>
          <p className="text-2xl font-bold text-purple-900 mt-1">{totals.averageReadinessScore}/100</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Publication %</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{progressPercent}%</p>
        </div>
      </div>

      {/* Publication Progress Bar */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
        <div className="flex justify-between items-center text-sm font-semibold">
          <span className="text-gray-700">1,000 Published Tools Acceleration Goal</span>
          <span className="text-emerald-700">{totals.published} / {totals.canonical} Published ({progressPercent}%)</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3.5 overflow-hidden">
          <div
            className="bg-emerald-500 h-3.5 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Batch Control Station */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Batch Publication Action</h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Execute deterministic gate validation, category balancing, and synchronized Supabase updates.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <label className="text-xs font-semibold text-gray-600">Batch Size:</label>
            <select
              value={batchSize}
              onChange={e => setBatchSize(Number(e.target.value))}
              disabled={publishing || totals.draft === 0}
              className="text-sm font-medium border border-gray-300 rounded-lg px-3 py-1.5 bg-white text-gray-800 focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value={50}>50 tools</option>
              <option value={100}>100 tools</option>
              <option value={150}>150 tools</option>
              <option value={totals.draft}>All remaining ({totals.draft})</option>
            </select>
            <button
              onClick={() => handlePublishBatch(true)}
              disabled={publishing || totals.draft === 0}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors border border-gray-200"
            >
              Dry Run
            </button>
            <button
              onClick={() => handlePublishBatch(false)}
              disabled={publishing || totals.draft === 0}
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-2"
            >
              {publishing && <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>}
              Publish Next Batch
            </button>
          </div>
        </div>

        {publishMessage && (
          <div className={`mt-4 p-3 rounded-lg text-sm font-medium ${publishMessage.startsWith('Error') ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-800 border border-emerald-200'}`}>
            {publishMessage}
          </div>
        )}

        {lastBatch && (
          <div className="mt-4 flex items-center justify-between text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
            <span><strong>Last Executed Batch:</strong> {lastBatch.batchId} ({lastBatch.publishedCount} tools published)</span>
            <span>{new Date(lastBatch.timestamp).toLocaleString()}</span>
          </div>
        )}

        {nextBatch.previewTools && nextBatch.previewTools.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Next Batch Preview (First 10)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2">
              {nextBatch.previewTools.map(t => (
                <div key={t.id} className="p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs">
                  <p className="font-semibold text-gray-900 truncate">{t.name}</p>
                  <p className="text-gray-500 truncate">{t.slug}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Category Depth & Balancing Grid */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Category Distribution & Depth</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-200">
              <tr>
                <th className="px-4 py-3">Category Name</th>
                <th className="px-4 py-3">Slug</th>
                <th className="px-4 py-3 text-center">Published</th>
                <th className="px-4 py-3 text-center">Draft</th>
                <th className="px-4 py-3 text-center">Total</th>
                <th className="px-4 py-3">Progress</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {categoryDistribution.map(cat => {
                const pct = Math.round((cat.published / (cat.total || 1)) * 100);
                return (
                  <tr key={cat.id} className="hover:bg-gray-50/50">
                    <td className="px-4 py-2.5 font-medium text-gray-900">{cat.name}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-500 font-mono">{cat.slug}</td>
                    <td className="px-4 py-2.5 text-center font-semibold text-emerald-600">{cat.published}</td>
                    <td className="px-4 py-2.5 text-center text-amber-600">{cat.draft}</td>
                    <td className="px-4 py-2.5 text-center font-medium">{cat.total}</td>
                    <td className="px-4 py-2.5 w-48">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-emerald-500 h-2 rounded-full"
                            style={{ width: `${pct}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium w-10 text-right">{pct}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Search & Tool Inventory Table */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${filter === 'ALL' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              All ({data.tools.length})
            </button>
            <button
              onClick={() => setFilter('DRAFT')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${filter === 'DRAFT' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-800 hover:bg-amber-100'}`}
            >
              Drafts ({totals.draft})
            </button>
            <button
              onClick={() => setFilter('PUBLISHED')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${filter === 'PUBLISHED' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'}`}
            >
              Published ({totals.published})
            </button>
          </div>
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search tools by name or slug..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto border border-gray-100 rounded-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-200">
              <tr>
                <th className="px-4 py-3">Tool Name</th>
                <th className="px-4 py-3">Slug</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Website URL</th>
                <th className="px-4 py-3 text-center">Score</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {filteredTools.slice(0, 50).map(t => (
                <tr key={t.id} className="hover:bg-gray-50/50">
                  <td className="px-4 py-2.5 font-medium text-gray-900">{t.name}</td>
                  <td className="px-4 py-2.5 text-xs text-gray-500 font-mono">{t.slug}</td>
                  <td className="px-4 py-2.5">
                    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${t.status === 'Published' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-xs text-blue-600 truncate max-w-xs">
                    {t.websiteUrl ? (
                      <a href={t.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {t.websiteUrl}
                      </a>
                    ) : (
                      <span className="text-gray-400">None</span>
                    )}
                  </td>
                  <td className="px-4 py-2.5 text-center font-semibold text-emerald-700">{t.healthScore}</td>
                  <td className="px-4 py-2.5 text-right text-xs">
                    {t.status === 'Published' ? (
                      <Link href={`/tool/${t.slug}`} target="_blank" className="text-primary hover:underline font-medium">
                        View Live ↗
                      </Link>
                    ) : (
                      <span className="text-gray-400">Draft</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredTools.length > 50 && (
          <p className="text-xs text-gray-500 text-center pt-2">
            Showing top 50 of {filteredTools.length} tools. Use search to filter.
          </p>
        )}
      </div>
    </div>
  );
}
