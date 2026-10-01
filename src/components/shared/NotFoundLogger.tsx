"use client";

import { useEffect } from "react";
import { logNotFoundPath } from "@/lib/actions/redirects";

const BOT_PROBE_REGEX = /(\.(php|env|git|asp|aspx|jsp|xml|cgi|sh|sql|bak|yaml|yml|config|ini|log|zip|tar|gz|map|ico|png|jpg|jpeg|webp|svg|css|js|woff|woff2|ttf)$|wp-|cgi-bin|xmlrpc|phpmyadmin|autodiscover|actuator|\.well-known)/i;

export function NotFoundLogger() {
  useEffect(() => {
    try {
      const path = window.location.pathname;
      if (
        path &&
        path !== "/" &&
        !path.startsWith("/_next") &&
        !path.startsWith("/api") &&
        path.length <= 200 &&
        !BOT_PROBE_REGEX.test(path)
      ) {
        // Deduplicate in sessionStorage so repeated visits within a session don't spam writes
        const storageKey = `logged_404:${path}`;
        if (sessionStorage.getItem(storageKey)) return;
        sessionStorage.setItem(storageKey, "1");

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
