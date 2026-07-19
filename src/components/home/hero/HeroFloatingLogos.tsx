"use client";

import { useEffect, useState } from "react";

// Using material symbols as placeholder logos
const logos = [
  { icon: "auto_awesome", color: "text-primary", size: "text-6xl", top: "10%", left: "15%", delay: "0s", duration: "15s" },
  { icon: "code", color: "text-secondary", size: "text-5xl", top: "20%", left: "80%", delay: "2s", duration: "18s" },
  { icon: "brush", color: "text-blue-500", size: "text-7xl", top: "60%", left: "10%", delay: "5s", duration: "20s" },
  { icon: "smart_toy", color: "text-emerald-500", size: "text-5xl", top: "70%", left: "85%", delay: "1s", duration: "16s" },
  { icon: "mic", color: "text-rose-500", size: "text-4xl", top: "30%", left: "60%", delay: "4s", duration: "14s" },
];

export function HeroFloatingLogos() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {logos.map((logo, i) => (
        <div
          key={i}
          className={`absolute ${logo.color} opacity-20 blur-[2px]`}
          style={{
            top: logo.top,
            left: logo.left,
            animation: `float-random ${logo.duration} ease-in-out infinite alternate ${logo.delay}`,
          }}
        >
          <span className={`material-symbols-outlined ${logo.size}`} style={{ fontVariationSettings: "'FILL' 1" }}>
            {logo.icon}
          </span>
        </div>
      ))}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-random {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -50px) rotate(10deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
          100% { transform: translate(40px, 40px) rotate(15deg); }
        }
      `}} />
    </div>
  );
}
