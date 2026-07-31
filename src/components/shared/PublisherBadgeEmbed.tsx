'use client';

import { useState } from 'react';

export function PublisherBadgeEmbed() {
  const [copied, setCopied] = useState(false);

  const embedCode = `<a href="https://aitoolshaven.com" target="_blank" rel="noopener noreferrer">
  <img src="https://aitoolshaven.com/badges/featured-on-aitoolshaven.svg" alt="Featured on AIToolsHaven" width="250" height="54" />
</a>`;

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
    <div className="bg-surface border border-outline rounded-2xl overflow-hidden shadow-sm my-6">
      <div className="p-5 border-b border-outline bg-black/5 flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
          <span className="material-symbols-outlined">link</span>
        </div>
        <div>
          <h3 className="font-bold text-lg text-on-surface mb-1">Add Your AIToolsHaven Badge</h3>
          <p className="text-sm text-on-surface-variant">
            Get listed for free by adding this badge to your website. The badge links directly back to AIToolsHaven.
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-3">Badge Preview</p>
          <div className="bg-surface-secondary border border-outline/50 rounded-xl p-8 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/badges/featured-on-aitoolshaven.svg" 
              alt="Featured on AIToolsHaven" 
              width={250} 
              height={54}
              className="drop-shadow-sm transition-transform hover:scale-105"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-2">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Embed Code</p>
          </div>
          
          <div className="relative group">
            <pre className="bg-[#0f172a] text-slate-300 p-4 rounded-xl text-sm overflow-x-auto border border-[#1e293b]">
              <code>{embedCode}</code>
            </pre>
            <button 
              onClick={copyToClipboard}
              type="button"
              className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors border border-white/10"
            >
              {copied ? (
                <>
                  <span className="material-symbols-outlined text-[14px]">check</span>
                  Copied!
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[14px]">content_copy</span>
                  Copy Code
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-on-surface-variant">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-green-500">check_circle</span>
            Links directly to AIToolsHaven
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-green-500">check_circle</span>
            Required for the free listing
          </div>
        </div>
      </div>
    </div>
  );
}
