"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    // Send real page view telemetry
    fetch("/api/analytics/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: "page_view",
        url: pathname,
        title: typeof document !== "undefined" ? document.title : pathname,
        referrer: typeof document !== "undefined" ? document.referrer : "",
      }),
    }).catch(() => {
      // Ignore network errors silently for non-blocking telemetry
    });
  }, [pathname]);

  return null;
}
