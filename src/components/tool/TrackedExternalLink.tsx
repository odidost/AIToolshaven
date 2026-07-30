"use client";

import { trackVisitWebsite, trackAffiliateClick } from "@/lib/analytics/gtag";

interface TrackedExternalLinkProps {
  href: string;
  toolName: string;
  toolSlug: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Client-side wrapper for external "Visit Website" links.
 * Fires GA4 events before navigating.
 */
export function TrackedExternalLink({ href, toolName, toolSlug, className, children }: TrackedExternalLinkProps) {
  const handleClick = () => {
    trackVisitWebsite(toolName, toolSlug, href);
    trackAffiliateClick(toolName, toolSlug, href);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
