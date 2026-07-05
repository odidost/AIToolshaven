"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to your error tracking service here (e.g. Sentry)
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="relative mb-8">
        <div className="h-24 w-24 rounded-full bg-red-100 flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-5xl text-red-500">
            error
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-40 w-40 rounded-full bg-red-400/10 blur-3xl" />
        </div>
      </div>

      <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-4">
        Something went wrong.
      </h1>
      <p className="text-slate-500 text-lg max-w-md mb-2">
        An unexpected error occurred. Our team has been notified.
      </p>
      {error?.digest && (
        <p className="text-xs font-mono text-slate-400 mb-8">
          Error ID: {error.digest}
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <span className="material-symbols-outlined text-[18px]">refresh</span>
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <span className="material-symbols-outlined text-[18px]">home</span>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
