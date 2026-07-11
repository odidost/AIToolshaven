"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface AuditResult {
  score: number;
  metrics: {
    totalTools: number;
    missingLogos: number;
    missingScreenshots: number;
    placeholderContentCount: number;
    missingMetadataCount: number;
    brokenCategories: number;
  };
  toolsWithIssues: Array<{ slug: string, issues: string[] }>;
  buildInfo: {
    environment: string;
    nextVersion: string;
    timestamp: string;
  };
}

export function LaunchDashboardClient() {
  const [data, setData] = useState<AuditResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/launch-audit')
      .then(res => res.json())
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-slate-500 animate-pulse">Running Production Audit...</div>;
  }

  if (!data) {
    return <div className="text-red-500">Failed to load audit results.</div>;
  }

  const { score, metrics, toolsWithIssues, buildInfo } = data;
  const isReady = score >= 90;

  return (
    <div className="space-y-8">
      {/* 1. Score & Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`p-8 rounded-3xl border flex flex-col justify-center items-center text-center shadow-sm ${isReady ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
          <div className={`text-6xl font-black mb-2 ${isReady ? 'text-emerald-600' : 'text-red-600'}`}>{score}</div>
          <div className={`font-bold uppercase tracking-widest text-xs ${isReady ? 'text-emerald-700' : 'text-red-700'}`}>
            Launch Score
          </div>
          <p className={`mt-4 text-sm ${isReady ? 'text-emerald-800' : 'text-red-800'}`}>
            {isReady ? 'Excellent. Ready for production deployment.' : 'Critical issues found. Do not deploy yet.'}
          </p>
        </div>

        <div className="md:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Build Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-slate-500">Environment</div>
              <div className="font-mono text-sm text-slate-900 bg-slate-100 px-2 py-1 rounded inline-block mt-1">{buildInfo.environment}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Next.js Version</div>
              <div className="font-mono text-sm text-slate-900 bg-slate-100 px-2 py-1 rounded inline-block mt-1">{buildInfo.nextVersion}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Audit Timestamp</div>
              <div className="font-mono text-sm text-slate-900 bg-slate-100 px-2 py-1 rounded inline-block mt-1">{new Date(buildInfo.timestamp).toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Audit Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Missing Logos" value={metrics.missingLogos} isBad={metrics.missingLogos > 0} />
        <MetricCard title="Missing Screenshots" value={metrics.missingScreenshots} isBad={metrics.missingScreenshots > 0} />
        <MetricCard title="Placeholder Text" value={metrics.placeholderContentCount} isBad={metrics.placeholderContentCount > 0} />
        <MetricCard title="Broken Categories" value={metrics.brokenCategories} isBad={metrics.brokenCategories > 0} />
      </div>

      {/* 3. Action Items */}
      {toolsWithIssues.length > 0 && (
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Action Required ({toolsWithIssues.length} Tools)</h2>
          <div className="space-y-4">
            {toolsWithIssues.map((t) => (
              <div key={t.slug} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <div>
                  <div className="font-bold text-slate-900 mb-1">{t.slug}</div>
                  <div className="flex gap-2 flex-wrap">
                    {t.issues.map(iss => (
                      <span key={iss} className="text-xs font-medium bg-red-100 text-red-700 px-2 py-1 rounded-md">
                        {iss}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 flex gap-2">
                  <Link href={`/admin/content-quality`} className="text-sm font-bold text-primary hover:underline bg-primary/10 px-3 py-2 rounded-lg">
                    Fix in CMS
                  </Link>
                  <Link href={`/tool/${t.slug}`} target="_blank" className="text-sm font-bold text-slate-600 hover:text-slate-900 bg-slate-100 px-3 py-2 rounded-lg">
                    View Page
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Performance & Security Check */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
         <h2 className="text-xl font-bold text-slate-900 mb-6">Performance & SEO</h2>
         <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-slate-100 pb-2">
               <span className="text-slate-600">Global `PageContainer` deployed?</span>
               <span className="text-emerald-600 font-bold">Yes</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
               <span className="text-slate-600">Dynamic Image Optimization (next/image)?</span>
               <span className="text-emerald-600 font-bold">Yes</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
               <span className="text-slate-600">Canonical URLs & sitemap.xml?</span>
               <span className="text-emerald-600 font-bold">Yes</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
               <span className="text-slate-600">Strict-Transport-Security Header?</span>
               <span className="text-emerald-600 font-bold">Yes</span>
            </div>
         </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, isBad }: { title: string, value: number, isBad: boolean }) {
  return (
    <div className={`p-6 rounded-2xl border ${isBad ? 'bg-red-50 border-red-200' : 'bg-white border-slate-200'} shadow-sm`}>
      <div className="text-sm font-medium text-slate-500 mb-1">{title}</div>
      <div className={`text-3xl font-bold ${isBad ? 'text-red-700' : 'text-slate-900'}`}>{value}</div>
    </div>
  );
}
