"use client";

import { useState } from "react";

export function BlogNewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");

    try {
      await fetch("/api/analytics/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventName: "newsletter_signup",
          email: email.trim(),
          url: typeof window !== "undefined" ? window.location.pathname : "/blog",
          title: "Blog Sidebar Newsletter",
        }),
      });

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-medium text-center">
        ✓ Subscribed! Check your inbox weekly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full h-12 px-4 rounded-xl border border-outline bg-surface text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        required
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full h-12 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <span>{status === "loading" ? "Subscribing..." : "Subscribe"}</span>
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </button>
    </form>
  );
}
