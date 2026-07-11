import React from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "primary" | "monochrome" | "white" | "black";
  layout?: "horizontal" | "stacked" | "icon";
  className?: string;
  size?: number; // scale multiplier
}

export function BrandLogo({ 
  variant = "primary", 
  layout = "horizontal", 
  className,
  size = 1 
}: BrandLogoProps) {
  
  // Calculate relative sizes based on the layout
  const iconWidth = 175;
  const iconHeight = 100;
  
  // Base scale factors
  const baseScale = size;

  const isMono = variant !== "primary";
  const monoColor = 
    variant === "white" ? "#FFFFFF" : 
    variant === "black" ? "#000000" : 
    variant === "monochrome" ? "currentColor" : undefined;

  const aFill = isMono ? monoColor : "url(#a-grad)";
  const iFill = isMono ? monoColor : "url(#i-grad)";
  const textFill = isMono ? monoColor : "currentColor";

  // The geometric paths for A and I
  const A_PATH = "M 10 90 L 45 15 L 65 15 L 100 90 L 75 90 L 66 70 L 34 70 L 25 90 Z M 41 55 L 59 55 L 50 37 Z";
  const I_STEM = "M 110 90 L 133.33 40 L 153.33 40 L 130 90 Z";
  const I_DOT = "M 138 30 L 145 15 L 165 15 L 158 30 Z";

  const renderIcon = () => (
    <svg 
      viewBox={`0 0 ${iconWidth} ${iconHeight}`} 
      className={cn("shrink-0", layout === "icon" && className)}
      style={layout === "icon" ? { width: `${175 * 0.2 * baseScale}px`, height: `${100 * 0.2 * baseScale}px` } : { height: "100%", width: "auto" }}
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <defs>
        <linearGradient id="a-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id="i-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#F43F5E" />
        </linearGradient>
      </defs>
      <path d={A_PATH} fill={aFill} />
      <path d={I_STEM} fill={iFill} />
      <path d={I_DOT} fill={iFill} />
    </svg>
  );

  if (layout === "icon") {
    return renderIcon();
  }

  if (layout === "stacked") {
    return (
      <div 
        className={cn("flex flex-col items-center justify-center gap-4", className)}
        style={{ transform: `scale(${baseScale})`, transformOrigin: 'center' }}
      >
        <div style={{ height: "64px" }}>
          {renderIcon()}
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold tracking-[0.2em] text-lg uppercase leading-tight" style={{ color: textFill }}>
            Tools<span className="font-light">Haven</span>
          </span>
        </div>
      </div>
    );
  }

  // Horizontal (Default)
  return (
    <div 
      className={cn("flex items-center gap-3 select-none", className)}
      style={{ 
        transform: `scale(${baseScale})`, 
        transformOrigin: className?.includes('origin-') ? undefined : 'left center' 
      }}
    >
      <div style={{ height: "32px", flexShrink: 0 }}>
        {renderIcon()}
      </div>
      <div className="flex items-baseline gap-1 mt-1">
        <span className="font-black tracking-[0.08em] text-xl uppercase leading-none" style={{ color: textFill }}>
          Tools
        </span>
        <span className="font-medium tracking-[0.08em] text-xl uppercase leading-none opacity-80" style={{ color: textFill }}>
          Haven
        </span>
      </div>
    </div>
  );
}
