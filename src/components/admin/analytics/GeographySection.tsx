"use client";

import { useState } from 'react';
import type { GeoCountryData } from '@/lib/data/analytics-data';

interface GeographySectionProps {
  geography: GeoCountryData[];
}

export function GeographySection({ geography }: GeographySectionProps) {
  const [selectedContinent, setSelectedContinent] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const continents = ['All', 'North America', 'Europe', 'Asia', 'Africa', 'Oceania', 'South America'];

  const filteredGeo = geography.filter((item) => {
    const matchContinent = selectedContinent === 'All' || item.continent === selectedContinent;
    const matchSearch =
      item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.topCity.toLowerCase().includes(searchQuery.toLowerCase());
    return matchContinent && matchSearch;
  });

  const totalGeoVisitors = geography.reduce((sum, g) => sum + g.visitors, 0);

  return (
    <section id="sec-geography" className="scroll-mt-24 mb-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">public</span>
              Visitor Geography & Global Reach
            </h2>
            <p className="text-xs text-slate-500">
              Country, city, region, and continent distribution of total site audience
            </p>
          </div>

          {/* Search & Continent Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search country or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-44"
              />
              <span className="material-symbols-outlined text-[16px] text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2">
                search
              </span>
            </div>

            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg overflow-x-auto">
              {continents.map((cont) => (
                <button
                  key={cont}
                  onClick={() => setSelectedContinent(cont)}
                  className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                    selectedContinent === cont
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cont}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Vector World Map Representation */}
        <div className="bg-slate-950 rounded-2xl p-6 mb-6 text-white relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Interactive Heatmap Projection
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Top Country: {geography[0]?.country} ({geography[0]?.percentage}%)
            </span>
          </div>

          {/* SVG World Map Outline with Dynamic Hotspot Pins */}
          <div className="relative w-full h-48 sm:h-64 flex items-center justify-center bg-slate-900/60 rounded-xl border border-slate-800 p-4">
            {/* World Vector Map Paths */}
            <svg viewBox="0 0 1000 500" className="w-full h-full text-slate-800 fill-current opacity-80">
              {/* North America */}
              <path d="M150,120 Q200,80 320,100 Q300,200 220,250 Q120,220 150,120 Z" />
              {/* South America */}
              <path d="M260,270 Q340,280 320,420 Q250,440 240,320 Z" />
              {/* Europe */}
              <path d="M460,100 Q560,90 580,180 Q480,200 460,100 Z" />
              {/* Africa */}
              <path d="M470,210 Q580,210 560,370 Q460,350 470,210 Z" />
              {/* Asia */}
              <path d="M600,100 Q820,90 850,240 Q680,280 600,100 Z" />
              {/* Oceania / Australia */}
              <path d="M780,320 Q880,310 860,420 Q760,410 780,320 Z" />
            </svg>

            {/* Hotspot Pins with Hover Effects */}
            <div className="absolute top-[28%] left-[25%] group cursor-pointer">
              <span className="w-4 h-4 rounded-full bg-emerald-500/80 animate-ping absolute" />
              <span className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-white block relative shadow-lg" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg border border-slate-700 whitespace-nowrap z-20 shadow-xl">
                🇺🇸 USA — 52,480 visitors (35.2%)
              </div>
            </div>

            <div className="absolute top-[22%] left-[48%] group cursor-pointer">
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 animate-ping absolute" />
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white block relative shadow-lg" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg border border-slate-700 whitespace-nowrap z-20 shadow-xl">
                🇬🇧 UK — 18,950 visitors (12.7%)
              </div>
            </div>

            <div className="absolute top-[35%] left-[70%] group cursor-pointer">
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 animate-ping absolute" />
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white block relative shadow-lg" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg border border-slate-700 whitespace-nowrap z-20 shadow-xl">
                🇮🇳 India — 16,820 visitors (11.3%)
              </div>
            </div>

            <div className="absolute top-[52%] left-[51%] group cursor-pointer">
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 animate-ping absolute" />
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white block relative shadow-lg" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg border border-slate-700 whitespace-nowrap z-20 shadow-xl">
                🇳🇬 Nigeria — 11,240 visitors (7.5%)
              </div>
            </div>

            <div className="absolute top-[18%] left-[22%] group cursor-pointer">
              <span className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white block shadow-lg" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg border border-slate-700 whitespace-nowrap z-20 shadow-xl">
                🇨🇦 Canada — 9,850 visitors (6.6%)
              </div>
            </div>
          </div>
        </div>

        {/* Country Breakdown Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-y border-slate-200">
              <tr>
                <th className="px-4 py-3">Country / Territory</th>
                <th className="px-4 py-3">Top Hub City</th>
                <th className="px-4 py-3">Continent</th>
                <th className="px-4 py-3 text-right">Visitors</th>
                <th className="px-4 py-3 text-right">Sessions</th>
                <th className="px-4 py-3">Share %</th>
                <th className="px-4 py-3 text-right">Traffic Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredGeo.map((item) => (
                <tr key={item.code} className="hover:bg-slate-50/80 transition-colors">
                  {/* Country Name */}
                  <td className="px-4 py-3 font-medium text-slate-900 flex items-center gap-2">
                    <span className="text-base">{item.flag}</span>
                    <span>{item.country}</span>
                    <span className="text-[10px] text-slate-400 font-mono">({item.code})</span>
                  </td>

                  {/* Top City */}
                  <td className="px-4 py-3 text-slate-600">{item.topCity}</td>

                  {/* Continent */}
                  <td className="px-4 py-3 text-slate-500">{item.continent}</td>

                  {/* Visitors */}
                  <td className="px-4 py-3 text-right font-bold text-slate-900">
                    {item.visitors.toLocaleString()}
                  </td>

                  {/* Sessions */}
                  <td className="px-4 py-3 text-right text-slate-600">
                    {item.sessions.toLocaleString()}
                  </td>

                  {/* Share % with Progress Bar */}
                  <td className="px-4 py-3 min-w-[140px]">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${Math.min(100, item.percentage * 2.5)}%` }}
                        />
                      </div>
                      <span className="font-semibold text-slate-700 text-[11px] shrink-0">
                        {item.percentage}%
                      </span>
                    </div>
                  </td>

                  {/* Trend Indicator */}
                  <td className="px-4 py-3 text-right">
                    <span className="inline-flex items-center gap-0.5 text-emerald-600 font-semibold text-[11px]">
                      <span className="material-symbols-outlined text-[14px]">trending_up</span>
                      +{(item.percentage * 0.4).toFixed(1)}%
                    </span>
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
