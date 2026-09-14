"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface ColorItem {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  textDark?: boolean;
}

const BRAND_COLORS: ColorItem[] = [
  {
    name: "Cyan Energy",
    role: "A-Mark Gradient Start",
    hex: "#22D3EE",
    rgb: "34, 211, 238",
    textDark: true,
  },
  {
    name: "Electric Indigo",
    role: "A-Mark Gradient End",
    hex: "#6366F1",
    rgb: "99, 102, 241",
    textDark: false,
  },
  {
    name: "Vibrant Amber",
    role: "I-Mark Gradient Start",
    hex: "#F59E0B",
    rgb: "245, 158, 11",
    textDark: true,
  },
  {
    name: "Pulse Rose",
    role: "I-Mark Gradient End",
    hex: "#F43F5E",
    rgb: "244, 63, 94",
    textDark: false,
  },
  {
    name: "Midnight Slate",
    role: "Dark Canvas & Headings",
    hex: "#0F172A",
    rgb: "15, 23, 42",
    textDark: false,
  },
  {
    name: "Subtle Surface",
    role: "Light Ambient Canvas",
    hex: "#F8FAFC",
    rgb: "248, 250, 252",
    textDark: true,
  },
];

export function BrandColorPalette() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => {
      setCopiedHex(null);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {BRAND_COLORS.map((color) => {
        const isCopied = copiedHex === color.hex;

        return (
          <button
            key={color.hex}
            type="button"
            onClick={() => handleCopy(color.hex)}
            className="group text-left rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col focus:outline-none focus:ring-2 focus:ring-primary"
            title={`Click to copy ${color.hex}`}
          >
            {/* Color Swatch Block */}
            <div
              className="h-28 w-full p-3 flex flex-col justify-between relative transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundColor: color.hex }}
            >
              <div className="flex justify-end">
                <span
                  className={`inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full backdrop-blur-md shadow-xs transition-opacity ${
                    color.textDark
                      ? "bg-black/10 text-slate-900"
                      : "bg-white/20 text-white"
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                      <span>COPY</span>
                    </>
                  )}
                </span>
              </div>
            </div>

            {/* Color Meta */}
            <div className="p-3.5 flex-1 flex flex-col justify-between bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm tracking-tight truncate">
                  {color.name}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                  {color.role}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between font-mono text-[11px]">
                <span className="font-bold text-slate-700 dark:text-slate-300">
                  {color.hex}
                </span>
                <span className="text-slate-400 text-[10px]">
                  rgb({color.rgb})
                </span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
