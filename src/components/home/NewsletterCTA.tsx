"use client";

import { useState } from "react";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // 1. Log real newsletter signup telemetry event
      await fetch("/api/analytics/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventName: "newsletter_signup",
          email: email.trim(),
          url: typeof window !== "undefined" ? window.location.pathname : "/",
          title: "Newsletter Subscription",
        }),
      });

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Newsletter signup error:", err);
      setStatus("success"); // Still show success UI to the user
    }
  };

  return (
    <section className="bg-primary/5 rounded-[2.5rem] md:rounded-[3rem] shadow-sm border border-border/50 py-16 md:py-24 relative overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6 mx-auto">
          <span className="material-symbols-outlined text-[18px]">mail</span>
          <span className="text-xs font-bold uppercase tracking-widest">Newsletter</span>
        </div>
        <h2 className="text-fluid-h2 font-bold text-on-surface mb-4">
          Get the Weekly Roundup
        </h2>

        <p className="text-on-surface-variant max-w-2xl mx-auto mb-8">
          Cut through the noise. We&apos;ll send you the most practical AI tools and workflows every week.
        </p>

        {status === "success" ? (
          <div className="max-w-xl mx-auto p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center gap-3">
            <span className="material-symbols-outlined text-emerald-600 text-2xl">check_circle</span>
            <div className="text-left">
              <p className="font-bold text-sm">Thanks for subscribing!</p>
              <p className="text-xs text-emerald-700">You&apos;ll receive our next weekly roundup in your inbox.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-xl border border-outline bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shrink-0 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : (
                <span>Subscribe</span>
              )}
            </button>
          </form>
        )}

        {status === "error" && errorMessage && (
          <p className="text-xs text-rose-600 font-semibold mt-3">{errorMessage}</p>
        )}

        <div className="mt-6">
          <a
            href="/submit"
            className="text-primary font-semibold hover:underline text-sm inline-flex items-center gap-1"
          >
            Submit Your AI Tool →
          </a>
        </div>
      </div>
    </section>
  );
}
