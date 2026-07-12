"use client";

import { useEffect, useState } from "react";

export function FloatingTooltip() {
  const [tooltip, setTooltip] = useState<{ title: string; desc: string; x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tooltipElement = target.closest('[data-tooltip-desc]');
      
      if (tooltipElement) {
        const title = tooltipElement.getAttribute('data-tooltip-title') || "";
        const desc = tooltipElement.getAttribute('data-tooltip-desc') || "";
        
        // Prevent tooltip from going off the right or bottom edge
        const padding = 20;
        const xOffset = 15;
        const yOffset = 15;
        
        // Approximate width/height of the tooltip (can't easily measure before render, so we guess)
        const tooltipWidth = 280; 
        const tooltipHeight = 100;

        let x = e.clientX + xOffset;
        let y = e.clientY + yOffset;

        if (x + tooltipWidth > window.innerWidth - padding) {
          x = e.clientX - tooltipWidth - xOffset;
        }
        if (y + tooltipHeight > window.innerHeight - padding) {
          y = e.clientY - tooltipHeight - yOffset;
        }

        setTooltip({ title, desc, x, y });
      } else {
        setTooltip(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!tooltip) return null;

  return (
    <div 
      className="fixed z-[100] pointer-events-none w-[280px] bg-surface/95 backdrop-blur-md border border-border/80 shadow-2xl p-4 rounded-2xl flex flex-col gap-1.5 transition-opacity duration-150 animate-in fade-in"
      style={{
        left: tooltip.x,
        top: tooltip.y,
      }}
    >
      {tooltip.title && (
        <h4 className="font-bold text-[14px] text-on-surface flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[14px] text-primary">info</span>
          {tooltip.title}
        </h4>
      )}
      <p className="text-[13px] text-on-surface-variant/90 leading-relaxed line-clamp-3">
        {tooltip.desc}
      </p>
    </div>
  );
}
