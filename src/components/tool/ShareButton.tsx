"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export type SharePlatform = "x" | "linkedin" | "facebook" | "whatsapp" | "email" | "native";

interface ShareButtonProps {
  platform: SharePlatform;
  url: string;
  title: string;
  tagline?: string;
  className?: string;
}

export function ShareButton({
  platform,
  url,
  title,
  tagline = "",
  className,
}: ShareButtonProps) {
  const [isSupported, setIsSupported] = useState(true);

  const shareText = `Check out ${title} ${tagline ? `- ${tagline} ` : ""}on AIToolsHaven!`;
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(url);

  // Platform specific configurations
  const config = {
    x: {
      label: "Post on X",
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      bgColor: "bg-slate-100 text-slate-900 hover:bg-black hover:text-white hover:border-black",
      iconColor: "text-slate-800 group-hover:text-white",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    linkedin: {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      bgColor: "bg-blue-50 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
      iconColor: "text-[#0A66C2] group-hover:text-white",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    facebook: {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bgColor: "bg-indigo-50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
      iconColor: "text-[#1877F2] group-hover:text-white",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    whatsapp: {
      label: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`,
      bgColor: "bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
      iconColor: "text-[#25D366] group-hover:text-white",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.666.988 3.308 1.488 5.412 1.489 5.568 0 10.099-4.524 10.1-10.097.001-2.701-1.049-5.241-2.958-7.153C17.29 1.482 14.755.433 12.007.432c-5.568 0-10.099 4.524-10.101 10.098-.001 2.011.52 3.978 1.511 5.688l-1.011 3.692 3.791-.994c1.629.889 3.19 1.338 4.86 1.338zm11.233-7.531c-.301-.15-1.78-.879-2.056-.979-.275-.1-.476-.15-.677.15-.2.299-.777.979-.953 1.178-.176.2-.352.225-.653.075-.301-.15-1.272-.469-2.423-1.495-.895-.798-1.5-1.783-1.676-2.083-.176-.3-.019-.462.131-.611.135-.134.301-.35.452-.524.15-.175.2-.299.301-.499.1-.2.05-.375-.025-.524-.075-.15-.677-1.632-.927-2.233-.244-.587-.492-.507-.677-.517-.175-.009-.376-.01-.577-.01s-.527.075-.803.374c-.276.3-.1.15-1.353 1.447-1.253 1.297-.803 2.592.1 3.84 1.153 1.596 2.822 2.893 5.485 3.917 2.011.774 2.836.879 3.865.727.677-.1 2.057-.838 2.346-1.646.289-.808.289-1.503.201-1.646-.088-.15-.301-.25-.602-.4z"/>
        </svg>
      ),
    },
    email: {
      label: "Email",
      href: `mailto:?subject=${encodeURIComponent(`Check out ${title}`)}&body=${encodeURIComponent(`${shareText}\n\n${url}`)}`,
      bgColor: "bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white hover:border-rose-600",
      iconColor: "text-rose-600 group-hover:text-white",
      icon: <span className="material-symbols-outlined text-[20px]">mail</span>,
    },
    native: {
      label: "More Options",
      href: "#",
      bgColor: "bg-purple-50 text-primary hover:bg-primary hover:text-white hover:border-primary",
      iconColor: "text-primary group-hover:text-white",
      icon: <span className="material-symbols-outlined text-[20px]">share</span>,
    },
  };

  useEffect(() => {
    if (platform === "native") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsSupported(typeof navigator !== "undefined" && !!navigator.share);
    }
  }, [platform]);

  if (platform === "native" && !isSupported) {
    return null;
  }

  const activeConfig = config[platform];

  const handleShareClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (platform === "native") {
      e.preventDefault();
      if (navigator.share) {
        try {
          await navigator.share({
            title: `${title} | AIToolsHaven`,
            text: shareText,
            url: url,
          });
        } catch (err) {
          // User cancelled or share failed silently
          console.log("Native share result:", err);
        }
      }
    }
  };

  return (
    <a
      href={activeConfig.href}
      onClick={handleShareClick}
      target={platform === "native" || platform === "email" ? undefined : "_blank"}
      rel={platform === "native" || platform === "email" ? undefined : "noopener noreferrer"}
      className={cn(
        "group flex flex-col items-center justify-center gap-3 w-[100px] h-[100px] rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/45",
        activeConfig.bgColor,
        className
      )}
      aria-label={activeConfig.label}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 transform group-hover:scale-110">
        {activeConfig.icon}
      </div>
      <span className="text-[11px] font-bold tracking-wide uppercase text-on-surface-variant group-hover:text-current">
        {platform === "native" ? "Share" : platform === "x" ? "X Post" : platform}
      </span>
    </a>
  );
}
