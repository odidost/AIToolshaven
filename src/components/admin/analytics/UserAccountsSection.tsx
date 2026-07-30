"use client";

import { useState } from 'react';
import type { UserAccountItem } from '@/lib/data/analytics-data';

interface UserAccountsSectionProps {
  userAccounts: UserAccountItem[];
  userStats: {
    totalRegistered: number;
    newUsers: number;
    activeUsers: number;
    inactiveUsers: number;
    avgBookmarksPerUser: number;
    avgSavedComparisons: number;
    totalSavedWorkflows: number;
  };
  isPrivacyMasked: boolean;
}

export function UserAccountsSection({
  userAccounts,
  userStats,
  isPrivacyMasked,
}: UserAccountsSectionProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [countryFilter, setCountryFilter] = useState<string>('All');

  const filteredUsers = userAccounts.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || user.status === statusFilter;
    const matchesCountry = countryFilter === 'All' || user.country === countryFilter;

    return matchesSearch && matchesStatus && matchesCountry;
  });

  const maskEmail = (email: string) => {
    if (!isPrivacyMasked) return email;
    const [name, domain] = email.split('@');
    return `${name.substring(0, 2)}***@${domain}`;
  };

  return (
    <section id="sec-user-accounts" className="scroll-mt-24 mb-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">group</span>
              Registered User Accounts Intelligence
            </h2>
            <p className="text-xs text-slate-500">
              Account status, activity logs, bookmark counts, saved tool comparisons, and member locations
            </p>
          </div>
        </div>

        {/* Account Overview KPI Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Total Registered</span>
            <span className="text-base font-black text-slate-900">{userStats.totalRegistered.toLocaleString()}</span>
          </div>

          <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">Active Users</span>
            <span className="text-base font-black text-emerald-900">{userStats.activeUsers.toLocaleString()}</span>
          </div>

          <div className="bg-blue-50 p-3 rounded-xl border border-blue-200 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">New This Month</span>
            <span className="text-base font-black text-blue-900">{userStats.newUsers.toLocaleString()}</span>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Inactive Ratio</span>
            <span className="text-base font-black text-slate-700">{userStats.inactiveUsers.toLocaleString()}</span>
          </div>

          <div className="bg-purple-50 p-3 rounded-xl border border-purple-200 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 block">Avg Bookmarks</span>
            <span className="text-base font-black text-purple-900">{userStats.avgBookmarksPerUser}</span>
          </div>

          <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">Avg Comparisons</span>
            <span className="text-base font-black text-amber-900">{userStats.avgSavedComparisons}</span>
          </div>

          <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-200 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 block">Saved Workflows</span>
            <span className="text-base font-black text-indigo-900">{userStats.totalSavedWorkflows.toLocaleString()}</span>
          </div>
        </div>

        {/* User Search & Filters Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search by name, email, country, or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <span className="material-symbols-outlined text-[18px] text-slate-400 absolute left-3 top-1/2 -translate-y-1/2">
              search
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold focus:outline-none"
            >
              <option value="All">Status: All</option>
              <option value="Active">Status: Active</option>
              <option value="New">Status: New</option>
              <option value="Inactive">Status: Inactive</option>
            </select>

            {/* Country Filter */}
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold focus:outline-none"
            >
              <option value="All">Country: All</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Germany">Germany</option>
              <option value="India">India</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
          </div>
        </div>

        {/* User Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-y border-slate-200">
              <tr>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Email Address</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Device / Browser</th>
                <th className="px-4 py-3 text-right">Last Active</th>
                <th className="px-4 py-3 text-right">Bookmarks</th>
                <th className="px-4 py-3 text-right">Comparisons</th>
                <th className="px-4 py-3">Joined Date</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/80 transition-colors">
                  {/* Name & Avatar */}
                  <td className="px-4 py-3 font-bold text-slate-900 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-primary/10 text-primary font-black text-[10px] flex items-center justify-center shrink-0">
                      {user.avatarInitials}
                    </div>
                    <span>{user.name}</span>
                  </td>

                  {/* Email */}
                  <td className="px-4 py-3 font-mono text-slate-600">
                    {maskEmail(user.email)}
                  </td>

                  {/* Location */}
                  <td className="px-4 py-3 text-slate-700">
                    {user.city}, {user.country}
                  </td>

                  {/* Device / Browser */}
                  <td className="px-4 py-3 text-slate-500">
                    {user.device} • {user.browser}
                  </td>

                  {/* Last Active */}
                  <td className="px-4 py-3 text-right text-slate-600 font-medium">
                    {user.lastActive}
                  </td>

                  {/* Bookmarks */}
                  <td className="px-4 py-3 text-right font-bold text-purple-700">
                    {user.bookmarksCount}
                  </td>

                  {/* Comparisons */}
                  <td className="px-4 py-3 text-right font-bold text-amber-700">
                    {user.comparisonsCount}
                  </td>

                  {/* Joined Date */}
                  <td className="px-4 py-3 text-slate-500 font-mono text-[11px]">
                    {user.joinedDate}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        user.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700'
                          : user.status === 'New'
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {user.status}
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
