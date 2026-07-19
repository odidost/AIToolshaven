import React from 'react';

type PatternType = 'aurora' | 'neural' | 'circuit' | 'dots' | 'workflow' | 'sparkles' | 'grid' | 'ambient';

interface BackgroundPatternProps {
  type: PatternType;
  className?: string;
  opacity?: number;
}

export function BackgroundPattern({ type, className = '', opacity = 0.03 }: BackgroundPatternProps) {
  const getPattern = () => {
    switch (type) {
      case 'ambient':
        return (
          <div className="absolute inset-0 overflow-hidden bg-transparent">
            <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none z-0"></div>
            <div className="absolute top-0 left-0 w-[80%] h-[80%] rounded-full bg-primary/10 blur-[160px] pointer-events-none z-0" />
            <div className="absolute top-[20%] right-0 w-[70%] h-[70%] rounded-full bg-primary/5 blur-[160px] pointer-events-none z-0" />
            <div className="absolute bottom-0 left-[20%] w-[60%] h-[60%] rounded-full bg-secondary/5 blur-[160px] pointer-events-none z-0" />
          </div>
        );
      case 'aurora':
        return (
          <div className="absolute inset-0 overflow-hidden">
            {/* Soft, premium aurora glow. Not a harsh gradient. Opacity is controlled by parent if needed, but keeping it subtle here */}
            <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[100px] animate-float-slow" />
            <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px] animate-float-medium" />
            <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[50%] rounded-full bg-secondary/10 blur-[100px] animate-float-fast" />
          </div>
        );
      case 'neural':
        return (
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor" />
                <circle cx="80" cy="60" r="3" fill="currentColor" />
                <circle cx="40" cy="80" r="2" fill="currentColor" />
                <path d="M20 20 L80 60 L40 80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-pattern)" />
          </svg>
        );
      case 'circuit':
        return (
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
             <defs>
              <pattern id="circuit-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M10 10 L40 10 L60 30 L60 80" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="60" cy="80" r="3" fill="currentColor" />
                <path d="M100 20 L80 20 L60 40" fill="none" stroke="currentColor" strokeWidth="1" />
                <rect x="98" y="18" width="4" height="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        );
      case 'dots':
        return (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,currentColor_1px,transparent_1px)] bg-[size:32px_32px]" />
        );
      case 'grid':
        return (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:48px_48px]" />
        );
      case 'workflow':
        return (
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
             <defs>
              <pattern id="workflow-pattern" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
                <rect x="20" y="20" width="30" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
                <rect x="90" y="60" width="40" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
                <rect x="30" y="100" width="30" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M50 30 L70 30 L70 72 L90 72" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M60 110 L80 110 L80 72 L90 72" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#workflow-pattern)" />
          </svg>
        );
      case 'sparkles':
        return (
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sparkles-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M20 10 Q20 20 10 20 Q20 20 20 30 Q20 20 30 20 Q20 20 20 10" fill="currentColor" />
                <path d="M60 50 Q60 55 55 55 Q60 55 60 60 Q60 55 65 55 Q60 55 60 50" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sparkles-pattern)" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`absolute inset-0 pointer-events-none text-primary overflow-hidden ${className}`}
      style={{ opacity: type === 'aurora' ? 1 : opacity }}
      aria-hidden="true"
    >
      {getPattern()}
    </div>
  );
}
