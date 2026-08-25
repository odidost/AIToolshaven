"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { GA_MEASUREMENT_ID, trackPageView } from "@/lib/analytics/gtag";
import { env } from "@/lib/env";

/**
 * Tracks route changes and sends page views to GA4.
 * Wrapped in Suspense because useSearchParams() can suspend.
 */
function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    const url = searchParams?.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;

    // Track page view in GA4
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}

/**
 * Global analytics provider. Loads GA4 and Clarity scripts,
 * and automatically tracks route changes.
 *
 * Renders in the root layout — loads once, never duplicated.
 */
export function AnalyticsProvider() {
  const gaId = GA_MEASUREMENT_ID;
  const clarityId = env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <>
      {/* Google Analytics 4 */}
      {gaId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                  send_page_view: true,
                });
              `,
            }}
          />
        </>
      )}

      {/* Microsoft Clarity */}
      {clarityId && (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `,
          }}
        />
      )}

      {/* Route change tracking (GA4 + custom telemetry) */}
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
    </>
  );
}
