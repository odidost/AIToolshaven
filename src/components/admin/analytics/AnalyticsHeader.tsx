"use client";

import { useState } from 'react';
import type { DateRangeOption, AnalyticsDataset } from '@/lib/data/analytics-data';
import { exportToCSV, exportToJSON, triggerPDFPrint } from '@/lib/data/analytics-data';

interface AnalyticsHeaderProps {
  dateRange: DateRangeOption;
  setDateRange: (range: DateRangeOption) => void;
  isLiveSync: boolean;
  setIsLiveSync: (val: boolean) => void;
  isPrivacyMasked: boolean;
  setIsPrivacyMasked: (val: boolean) => void;
  data: AnalyticsDataset;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

const navSections = [
  { id: 'sec-overview', label: 'Overview' },
  { id: 'sec-live', label: 'Live Visitors' },
  { id: 'sec-geography', label: 'Geography' },
  { id: 'sec-traffic', label: 'Traffic Sources' },
  { id: 'sec-devices', label: 'Devices & Browsers' },
  { id: 'sec-top-pages', label: 'Top Pages' },
  { id: 'sec-tools', label: 'AI Tools' },
  { id: 'sec-search', label: 'Search Analytics' },
  { id: 'sec-journey', label: 'User Journey' },
  { id: 'sec-conversions', label: 'Conversions' },
  { id: 'sec-user-accounts', label: 'User Accounts' },
  { id: 'sec-audience', label: 'Audience Insights' },
  { id: 'sec-referrals', label: 'Referrals' },
  { id: 'sec-seo', label: 'SEO & Search Console' },
  { id: 'sec-performance', label: 'Core Web Vitals' },
  { id: 'sec-integrations', label: 'Integrations Hub' },
];

export function AnalyticsHeader({
  dateRange,
  setDateRange,
  isLiveSync,
  setIsLiveSync,
  isPrivacyMasked,
  setIsPrivacyMasked,
  data,
  activeSection,
  setActiveSection,
}: AnalyticsHeaderProps) {
  const [showExportMenu, setShowExportMenu] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExportCSV = () => {
    setShowExportMenu(false);
    exportToCSV(`AIToolsHaven_KPIs_${dateRange}`, data.kpis);
    exportToCSV(`AIToolsHaven_TopPages_${dateRange}`, data.topPages);
    exportToCSV(`AIToolsHaven_UserAccounts_${dateRange}`, data.userAccounts);
  };

  const handleExportJSON = () => {
    setShowExportMenu(false);
    exportToJSON(`AIToolsHaven_FullAnalytics_${dateRange}`, data);
  };

  return (
    <div className="mb-6 space-y-4">
      {/* Top Title & Controls Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Analytics & Intelligence</h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className={`w-2 h-2 rounded-full bg-emerald-500 ${isLiveSync ? 'animate-ping' : ''}`} />
              Real-time Active
            </span>
          </div>
          <p className="text-sm text-slate-500">
            Comprehensive business intelligence, real-time user behavior, affiliate tracking, and audience insights.
          </p>
        </div>

        {/* Right Action Toolbar */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Privacy Toggle */}
          <button
            onClick={() => setIsPrivacyMasked(!isPrivacyMasked)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
              isPrivacyMasked
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
            title={isPrivacyMasked ? 'PII Masking Active (GDPR Mode)' : 'Show Full User Details'}
          >
            <span className="material-symbols-outlined text-[16px]">
              {isPrivacyMasked ? 'visibility_off' : 'visibility'}
            </span>
            {isPrivacyMasked ? 'Privacy: ON' : 'Privacy: OFF'}
          </button>

          {/* Live Sync Toggle */}
          <button
            onClick={() => setIsLiveSync(!isLiveSync)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
              isLiveSync
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">sync</span>
            {isLiveSync ? 'Live Sync: ON' : 'Live Sync: PAUSED'}
          </button>

          {/* Date Range Dropdown */}
          <div className="relative">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value as DateRangeOption)}
              className="appearance-none bg-white text-slate-800 text-xs font-semibold px-3 py-2 pr-8 rounded-lg border border-slate-300 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer shadow-sm"
            >
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
              <option value="year">This Year (2026)</option>
              <option value="custom">Custom Range</option>
            </select>
            <span className="material-symbols-outlined text-[16px] text-slate-400 pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2">
              expand_more
            </span>
          </div>

          {/* Export Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowExportMenu(!showExportMenu)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              Export
              <span className="material-symbols-outlined text-[14px]">expand_more</span>
            </button>

            {showExportMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95">
                <button
                  onClick={handleExportCSV}
                  className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px] text-emerald-600">table_chart</span>
                  Export as CSV
                </button>
                <button
                  onClick={handleExportCSV}
                  className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px] text-blue-600">grid_on</span>
                  Export as Excel (TSV)
                </button>
                <button
                  onClick={handleExportJSON}
                  className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px] text-amber-600">code</span>
                  Export Raw JSON
                </button>
                <div className="my-1 border-t border-slate-100" />
                <button
                  onClick={() => {
                    setShowExportMenu(false);
                    triggerPDFPrint();
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px] text-purple-600">print</span>
                  Print PDF Report
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Quick Jump Bar */}
      <div className="bg-slate-900 text-slate-300 p-2 rounded-xl overflow-x-auto flex items-center gap-1.5 scrollbar-none shadow-md">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 shrink-0 flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px] text-primary">readiness_score</span>
          Jump To:
        </span>
        {navSections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
                isActive
                  ? 'bg-primary text-white font-semibold shadow-sm'
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              {sec.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
