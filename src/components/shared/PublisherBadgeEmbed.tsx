'use client';

import { useState } from 'react';
import { ShieldCheck, Check, Copy, CheckCircle2, Zap } from 'lucide-react';

export function PublisherBadgeEmbed() {
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [format, setFormat] = useState<'html' | 'markdown'>('html');

  const badgeFile = theme === 'light' 
    ? 'featured-on-aitoolshaven.svg' 
    : 'featured-on-aitoolshaven-dark.svg';

  const embedCode = format === 'html'
    ? `<a href="https://aitoolshaven.com" target="_blank" rel="noopener" title="Featured on AIToolsHaven">
  <img src="https://aitoolshaven.com/badges/${badgeFile}" alt="Featured on AIToolsHaven" width="250" height="54" />
</a>`
    : `[![Featured on AIToolsHaven](https://aitoolshaven.com/badges/${badgeFile})](https://aitoolshaven.com "Featured on AIToolsHaven")`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-surface border border-outline rounded-3xl overflow-hidden shadow-sm my-6 transition-all">
      <div className="p-6 border-b border-outline bg-gradient-to-r from-primary/5 via-transparent to-transparent flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 shadow-xs">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[11px] font-bold uppercase tracking-wider mb-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Free Listing Requirement
          </div>
          <h3 className="font-black text-xl text-on-surface mb-1">
            Embed the Official Verification Badge
          </h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Gain verified social proof for your landing page or GitHub repo while completing your free submission review.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Controls: Theme & Format */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-border/40">
          {/* Theme Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Badge Style:</span>
            <div className="inline-flex rounded-xl bg-surface-secondary p-1 border border-border/50">
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  theme === 'light'
                    ? 'bg-surface text-primary shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Light
              </button>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Dark
              </button>
            </div>
          </div>

          {/* Format Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Format:</span>
            <div className="inline-flex rounded-xl bg-surface-secondary p-1 border border-border/50">
              <button
                type="button"
                onClick={() => setFormat('html')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  format === 'html'
                    ? 'bg-surface text-primary shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                HTML
              </button>
              <button
                type="button"
                onClick={() => setFormat('markdown')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  format === 'markdown'
                    ? 'bg-surface text-primary shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Markdown
              </button>
            </div>
          </div>
        </div>

        {/* Live Preview Box */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            Live Preview
          </label>
          <div className={`p-8 rounded-2xl flex items-center justify-center border transition-all ${
            theme === 'light' 
              ? 'bg-slate-50 border-slate-200' 
              : 'bg-slate-950 border-slate-800'
          }`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={`https://aitoolshaven.com/badges/${badgeFile}`}
              alt="Featured on AIToolsHaven"
              className="h-14 w-auto shadow-sm hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Code Snippet Box */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Embed Snippet
            </label>
            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
              DoFollow Link Equity Included
            </span>
          </div>
          
          <div className="relative group">
            <pre className="bg-[#0f172a] text-slate-300 p-4 sm:p-5 rounded-2xl text-xs sm:text-sm overflow-x-auto border border-[#1e293b] font-mono leading-relaxed">
              <code>{embedCode}</code>
            </pre>
            <button 
              onClick={copyToClipboard}
              type="button"
              className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border border-white/10 shadow-sm active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Feature Checkmarks */}
        <div className="pt-2 flex flex-wrap gap-4 sm:gap-6 text-xs font-medium text-on-surface-variant">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Official DoFollow Backlink</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Required for Free Directory Verification</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-emerald-500" />
            <span>Instant Review Priority</span>
          </div>
        </div>
      </div>
    </div>
  );
}
