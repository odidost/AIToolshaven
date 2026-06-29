'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: 'Alex Engineer',
    email: 'alex@example.com',
    bio: 'AI enthusiast & product builder. Exploring the latest tools to level up my workflow.',
  });

  const [notifications, setNotifications] = useState({
    newTools: true,
    weeklyDigest: true,
    reviewReplies: false,
    promotions: false,
  });

  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-on-surface mb-1 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">settings</span>
          Settings
        </h1>
        <p className="text-on-surface-variant text-sm">
          Manage your profile and notification preferences.
        </p>
      </div>

      {/* Success Toast */}
      {saved && (
        <div className="mb-6 flex items-center gap-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-xl px-4 py-3 text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-300">
          <span className="material-symbols-outlined text-lg">check_circle</span>
          Settings saved successfully!
        </div>
      )}

      {/* Profile Section */}
      <section className="bg-surface-container rounded-2xl border border-outline p-6 mb-6 shadow-sm">
        <h2 className="text-lg font-bold text-on-surface mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-on-surface-variant">person</span>
          Profile Information
        </h2>

        <div className="space-y-5">
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
              AE
            </div>
            <div>
              <button className="text-sm text-primary font-semibold hover:underline">Change avatar</button>
              <p className="text-xs text-on-surface-variant mt-0.5">JPG, PNG. Max 2MB.</p>
            </div>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="settings-name" className="block text-sm font-semibold text-on-surface mb-2">
              Display Name
            </label>
            <input
              id="settings-name"
              type="text"
              value={profile.name}
              onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
              className="w-full h-11 px-4 rounded-xl border border-outline bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="settings-email" className="block text-sm font-semibold text-on-surface mb-2">
              Email
            </label>
            <input
              id="settings-email"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
              className="w-full h-11 px-4 rounded-xl border border-outline bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            />
          </div>

          {/* Bio */}
          <div>
            <label htmlFor="settings-bio" className="block text-sm font-semibold text-on-surface mb-2">
              Bio
            </label>
            <textarea
              id="settings-bio"
              rows={3}
              value={profile.bio}
              onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-outline bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm resize-none"
            />
          </div>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="bg-surface-container rounded-2xl border border-outline p-6 mb-6 shadow-sm">
        <h2 className="text-lg font-bold text-on-surface mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          Notifications
        </h2>

        <div className="space-y-4">
          {([
            { key: 'newTools' as const, label: 'New tools in your categories', desc: 'Get notified when new tools are added to your favorite categories.' },
            { key: 'weeklyDigest' as const, label: 'Weekly digest', desc: 'A curated summary of trending AI tools every week.' },
            { key: 'reviewReplies' as const, label: 'Review replies', desc: 'Get notified when someone replies to your reviews.' },
            { key: 'promotions' as const, label: 'Promotions & offers', desc: 'Receive offers from tool creators and AETHER promotions.' },
          ]).map(item => (
            <div key={item.key} className="flex items-start justify-between gap-4 py-3 border-b border-outline last:border-0">
              <div>
                <p className="text-sm font-semibold text-on-surface">{item.label}</p>
                <p className="text-xs text-on-surface-variant mt-0.5">{item.desc}</p>
              </div>
              <button
                onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none ${
                  notifications[item.key] ? 'bg-primary' : 'bg-outline'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 shadow-sm ${
                    notifications[item.key] ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Danger Zone */}
      <section className="bg-surface-container rounded-2xl border border-red-200 p-6 mb-8 shadow-sm">
        <h2 className="text-lg font-bold text-on-surface mb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-red-500">warning</span>
          Danger Zone
        </h2>
        <p className="text-sm text-on-surface-variant mb-4">
          Irreversible actions related to your account.
        </p>
        <button className="text-sm text-red-500 font-semibold border border-red-200 px-4 py-2 rounded-xl hover:bg-red-50 transition-colors">
          Delete Account
        </button>
      </section>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-md shadow-primary/20 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">save</span>
          Save Changes
        </button>
      </div>
    </div>
  );
}
