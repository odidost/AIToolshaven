"use client";

import { useEffect } from "react";
import { logNotFoundPath } from "@/lib/actions/redirects";

export function NotFoundLogger() {
  useEffect(() => {
    try {
      const path = window.location.pathname;
      if (path && path !== "/" && !path.startsWith("/_next") && !path.startsWith("/api")) {
        logNotFoundPath(path).catch((e) => {
          console.error("Failed to log 404 path", e);
        });
      }
    } catch {
      // Ignore client logging failures
    }
  }, []);

  return null;
}
