'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'aitoolshaven_cookie_consent_v1';

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!saved) {
        // Small delay to prevent initial layout shift on page load
        const timer = setTimeout(() => setIsOpen(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore localStorage errors (e.g. strict privacy mode)
    }
  }, []);

  const handleConsent = (choice: 'all' | 'essential') => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    } catch {
      // Ignore localStorage errors
    }
    setIsOpen(false);
  };

  if (!mounted || !isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-2xl border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-100">
        <div className="flex items-start gap-3.5 mb-3.5">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0 pr-2">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-tight">
              We Value Your Privacy
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              We use cookies to maintain your session, analyze directory traffic, and support secure checkout. You can read more in our{' '}
              <Link
                href="/cookie-policy"
                className="text-primary hover:underline font-semibold"
              >
                Cookie Policy
              </Link>.
            </p>
          </div>
          <button
            onClick={() => handleConsent('essential')}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2.5 pt-1">
          <button
            onClick={() => handleConsent('all')}
            className="flex-1 bg-primary hover:bg-rose-600 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-colors shadow-sm shadow-primary/20 text-center"
          >
            Accept All
          </button>
          <button
            onClick={() => handleConsent('essential')}
            className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs py-2.5 px-3 rounded-xl transition-colors border border-slate-200 dark:border-slate-700 text-center"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
