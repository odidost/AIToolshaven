"use client";

import { useState, useEffect } from "react";

type SocialShareBarProps = {
  toolName: string;
  urlPath: string;
};

export function SocialShareBar({ toolName, urlPath }: SocialShareBarProps) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUrl(`${window.location.origin}${urlPath}`);
  }, [urlPath]);

  const shareText = `Check out ${toolName} on AIToolsHaven - The AI Tools Discovery Hub!`;

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${toolName} | AIToolsHaven`,
          text: shareText,
          url: url,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`,
  };

  return (
    <div className="flex gap-2">
      {/* Native Share / Copy Link */}
      <button
        onClick={handleNativeShare}
        className="h-11 w-11 rounded-xl border border-outline flex items-center justify-center hover:bg-surface-container hover:text-primary transition-colors sm:hidden"
        title="Share"
      >
        <span className="material-symbols-outlined">ios_share</span>
      </button>

      <button
        onClick={copyToClipboard}
        className="h-11 w-11 rounded-xl border border-outline flex items-center justify-center hover:bg-surface-container hover:text-primary transition-colors hidden sm:flex"
        title="Copy Link"
      >
        <span className="material-symbols-outlined">
          {copied ? "check" : "link"}
        </span>
      </button>

      {/* X / Twitter */}
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="h-11 w-11 rounded-xl border border-outline flex items-center justify-center hover:bg-surface-container hover:text-primary transition-colors hidden sm:flex font-bold"
        title="Share on X"
      >
        𝕏
      </a>

      {/* LinkedIn */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="h-11 w-11 rounded-xl border border-outline flex items-center justify-center hover:bg-surface-container hover:text-primary transition-colors hidden sm:flex font-bold font-serif"
        title="Share on LinkedIn"
      >
        in
      </a>
    </div>
  );
}
