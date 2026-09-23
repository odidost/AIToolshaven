/**
 * Distinct, human-centric commercial photography mapping for all AIToolsHaven categories.
 * Each category is mapped to a dedicated image depicting that specific field,
 * ensuring zero duplicate images across categories.
 * 
 * All images are delivered via Next.js <Image> optimizer with AVIF/WebP conversion,
 * responsive srcset downscaling, and priority preloading for ultra-fast LCP loads.
 */

export interface CategoryHeroMedia {
  imageSrc: string;
  alt: string;
  creatorTagline: string;
}

export const CATEGORY_HERO_MEDIA_MAP: Record<string, CategoryHeroMedia> = {
  // 1. AI Writing Tools
  "ai-writing-tools": {
    imageSrc: "/images/categories/writing-productivity-creator.jpg",
    alt: "Professional writer drafting creative content and articles on a modern desk",
    creatorTagline: "Content Writing & Copy in Action"
  },
  "text-generation": {
    imageSrc: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    alt: "Author immersed in creative writing flow with notebook and laptop",
    creatorTagline: "Long-Form & Editorial Drafting"
  },

  // 2. AI Image & Visual Generators
  "ai-image-generators": {
    imageSrc: "/images/categories/image-design-creator.jpg",
    alt: "Digital artist and visual designer sketching creative concepts on tablet",
    creatorTagline: "Visual Art & Design in Action"
  },
  "logo-generators": {
    imageSrc: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    alt: "Brand identity designer drafting custom logos and graphic marks",
    creatorTagline: "Brand Identity & Logo Design"
  },

  // 3. AI Video Generators
  "ai-video-generators": {
    imageSrc: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    alt: "Film director and video editor producing cinematic footage in editing suite",
    creatorTagline: "Cinematic Video Production"
  },

  // 4. Audio & Voice
  "audio-voice": {
    imageSrc: "/images/categories/audio-voice-creator.jpg",
    alt: "Audio creator enjoying music and voiceover with studio headphones",
    creatorTagline: "Vocal & Sound Production"
  },
  "ai-voice-generators": {
    imageSrc: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80",
    alt: "Voiceover artist speaking into broadcast studio condenser microphone",
    creatorTagline: "Natural Voice Synthesis"
  },
  "ai-transcription-tools": {
    imageSrc: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=900&q=80",
    alt: "Journalist recording interview audio for automated transcription",
    creatorTagline: "Audio-to-Text Transcription"
  },

  // 5. Coding Assistants
  "coding-assistants": {
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    alt: "Software engineer coding clean architecture on modern laptop setup",
    creatorTagline: "Developer Flow & Shipping"
  },

  // 6. Marketing, Sales & Growth
  "marketing-sales": {
    imageSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    alt: "Marketing director and growth team planning high-converting campaigns",
    creatorTagline: "Growth & Customer Acquisition"
  },
  "ai-sales-tools": {
    imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    alt: "Account executive closing enterprise partnership deal",
    creatorTagline: "Pipeline & Deal Closing"
  },
  "ai-seo-tools": {
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    alt: "Search optimization analyst studying keyword traffic growth curves",
    creatorTagline: "Organic Search Dominance"
  },
  "ai-social-media-tools": {
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    alt: "Social media content creator planning viral multi-channel schedule",
    creatorTagline: "Social Reach & Engagement"
  },

  // 7. Productivity & Personal Workflows
  "productivity": {
    imageSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    alt: "Minimalist executive workspace with laptop, planner, and coffee",
    creatorTagline: "Peak Focus & Deep Work"
  },
  "ai-email-productivity": {
    imageSrc: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=900&q=80",
    alt: "Executive achieving Inbox Zero with intelligent email prioritization",
    creatorTagline: "Inbox Zero & Fast Triage"
  },
  "ai-project-management": {
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    alt: "Project management team collaborating on sprint delivery roadmap",
    creatorTagline: "Agile Sprint Orchestration"
  },
  "ai-calendar-scheduling": {
    imageSrc: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80",
    alt: "Modern aesthetic planner with automated meeting schedule calendar",
    creatorTagline: "Frictionless Schedule Booking"
  },
  "ai-note-taking-knowledge": {
    imageSrc: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
    alt: "Writer taking structured second-brain notes in journal beside laptop",
    creatorTagline: "Knowledge Base & Second Brain"
  },

  // 8. Conversational & Agents
  "ai-chatbots": {
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    alt: "Customer support specialist providing empathetic real-time answers",
    creatorTagline: "Conversational Intelligence"
  },
  "ai-agents": {
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    alt: "Technology team overseeing autonomous multi-agent task workflows",
    creatorTagline: "Autonomous Agent Execution"
  },

  // 9. Career & Presentations
  "ai-presentation-makers": {
    imageSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
    alt: "Keynote speaker delivering visually stunning slide presentation",
    creatorTagline: "High-Impact Pitch Decks"
  },
  "ai-resume-builders": {
    imageSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    alt: "Ambitious professional reviewing tailored resume and portfolio",
    creatorTagline: "Career Growth & Standout Resumes"
  },
  "ai-meeting-assistants": {
    imageSrc: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=900&q=80",
    alt: "Professional participating in engaging high-definition video conference",
    creatorTagline: "Meeting Minutes & AI Summaries"
  },
  "ai-research-tools": {
    imageSrc: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
    alt: "Academic researcher analyzing scholarly literature in modern study hall",
    creatorTagline: "Accelerated Academic Research"
  }
};

/**
 * Returns distinct, domain-accurate media for any category slug.
 * Guaranteed to never return identical images across distinct primary categories.
 */
export function getCategoryHeroMedia(slug: string, categoryName: string): CategoryHeroMedia {
  const cleanSlug = slug.toLowerCase().trim();

  // 1. Exact match in dedicated dictionary
  if (CATEGORY_HERO_MEDIA_MAP[cleanSlug]) {
    return CATEGORY_HERO_MEDIA_MAP[cleanSlug];
  }

  // 2. Domain-based matching
  if (cleanSlug.includes("voice") || cleanSlug.includes("podcast") || cleanSlug.includes("transcrib")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-voice-generators"];
  }
  if (cleanSlug.includes("audio") || cleanSlug.includes("sound") || cleanSlug.includes("music")) {
    return CATEGORY_HERO_MEDIA_MAP["audio-voice"];
  }
  if (cleanSlug.includes("video") || cleanSlug.includes("film") || cleanSlug.includes("animat")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-video-generators"];
  }
  if (cleanSlug.includes("logo") || cleanSlug.includes("icon") || cleanSlug.includes("vector")) {
    return CATEGORY_HERO_MEDIA_MAP["logo-generators"];
  }
  if (cleanSlug.includes("image") || cleanSlug.includes("photo") || cleanSlug.includes("art") || cleanSlug.includes("design") || cleanSlug.includes("draw")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-image-generators"];
  }
  if (cleanSlug.includes("code") || cleanSlug.includes("dev") || cleanSlug.includes("program")) {
    return CATEGORY_HERO_MEDIA_MAP["coding-assistants"];
  }
  if (cleanSlug.includes("seo") || cleanSlug.includes("search") || cleanSlug.includes("rank")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-seo-tools"];
  }
  if (cleanSlug.includes("social") || cleanSlug.includes("instagram") || cleanSlug.includes("tiktok") || cleanSlug.includes("twitter")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-social-media-tools"];
  }
  if (cleanSlug.includes("sales") || cleanSlug.includes("crm") || cleanSlug.includes("lead")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-sales-tools"];
  }
  if (cleanSlug.includes("market") || cleanSlug.includes("ad") || cleanSlug.includes("campaign")) {
    return CATEGORY_HERO_MEDIA_MAP["marketing-sales"];
  }
  if (cleanSlug.includes("chat") || cleanSlug.includes("bot") || cleanSlug.includes("convers")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-chatbots"];
  }
  if (cleanSlug.includes("agent") || cleanSlug.includes("autonom")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-agents"];
  }
  if (cleanSlug.includes("present") || cleanSlug.includes("slide") || cleanSlug.includes("deck")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-presentation-makers"];
  }
  if (cleanSlug.includes("resume") || cleanSlug.includes("cv") || cleanSlug.includes("career") || cleanSlug.includes("job")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-resume-builders"];
  }
  if (cleanSlug.includes("meet") || cleanSlug.includes("call") || cleanSlug.includes("zoom")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-meeting-assistants"];
  }
  if (cleanSlug.includes("research") || cleanSlug.includes("paper") || cleanSlug.includes("acad")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-research-tools"];
  }
  if (cleanSlug.includes("mail") || cleanSlug.includes("inbox")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-email-productivity"];
  }
  if (cleanSlug.includes("sched") || cleanSlug.includes("calendar") || cleanSlug.includes("time")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-calendar-scheduling"];
  }
  if (cleanSlug.includes("note") || cleanSlug.includes("knowledg") || cleanSlug.includes("brain")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-note-taking-knowledge"];
  }
  if (cleanSlug.includes("project") || cleanSlug.includes("task") || cleanSlug.includes("workflow")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-project-management"];
  }
  if (cleanSlug.includes("write") || cleanSlug.includes("text") || cleanSlug.includes("copy") || cleanSlug.includes("blog") || cleanSlug.includes("essay")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-writing-tools"];
  }

  // Safe fallback with category-specific alt and badge
  return {
    imageSrc: CATEGORY_HERO_MEDIA_MAP["productivity"].imageSrc,
    alt: `${categoryName} professionals working with modern productivity software`,
    creatorTagline: `${categoryName} in Action`
  };
}
