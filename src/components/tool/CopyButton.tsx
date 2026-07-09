"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

export function CopyButton({
  textToCopy,
  className,
  iconOnly = false,
  size = "md",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const buttonSizeClasses = {
    sm: "px-2.5 py-1 text-xs rounded-lg gap-1.5 h-7",
    md: "px-3.5 py-1.5 text-sm rounded-xl gap-2 h-9",
    lg: "px-5 py-2.5 text-base rounded-2xl gap-2.5 h-11",
  };

  const iconSizeClasses = {
    sm: "text-[16px]",
    md: "text-[18px]",
    lg: "text-[22px]",
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={cn(
        "inline-flex items-center justify-center font-semibold transition-all duration-300 active:scale-95 border",
        copied
          ? "bg-success border-success text-white shadow-sm"
          : "bg-surface-secondary/80 border-border text-on-surface-variant hover:text-on-surface hover:bg-border/30 hover:border-on-surface-variant/20 shadow-xs",
        iconOnly ? "p-0 aspect-square rounded-full flex-shrink-0" : buttonSizeClasses[size],
        className
      )}
      title={copied ? "Copied!" : "Copy to clipboard"}
      aria-label={copied ? "Copied!" : "Copy to clipboard"}
    >
      <span
        className={cn(
          "material-symbols-outlined transition-all duration-300",
          copied ? "scale-110 font-bold" : "",
          iconOnly ? iconSizeClasses[size] : ""
        )}
        style={{ fontSize: iconOnly ? undefined : size === "sm" ? "15px" : size === "md" ? "18px" : "20px" }}
      >
        {copied ? "check" : "content_copy"}
      </span>
      {!iconOnly && (
        <span className="transition-all duration-200">
          {copied ? "Copied!" : "Copy"}
        </span>
      )}
    </button>
  );
}
