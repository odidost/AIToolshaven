import type { AITool } from "@/lib/types/tool";

export const extraTools: AITool[] = [
  // Video
  {
    id: "synthesia", name: "Synthesia", slug: "synthesia", tagline: "AI video creation for business.",
    description: "Create professional videos with AI avatars and voiceovers in 120+ languages.",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=200",
    category: "c3", priceModel: "Paid", pricing: [{ planName: "Starter", price: 22, period: "monthly" }],
    url: "https://synthesia.io", tags: ["Avatars", "Video", "Enterprise"],
    features: ["140+ Avatars", "Custom Avatars", "Video Templates"], useCases: ["Create Ad Assets", "Automate Ops"],
    rating: 4.8, reviewCount: 12500, featured: true, verified: true, popularity: 88,
    goals: ["Create Ad Assets"], bestFor: ["Marketer", "Founder", "Agency"], stats: { launchYear: 2017 }
  },
  {
    id: "invideo", name: "InVideo AI", slug: "invideo", tagline: "Create videos with text instantly.",
    description: "InVideo simplifies video creation with ready-made templates that you can customize using text prompts.",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=200",
    category: "c3", priceModel: "Freemium", pricing: [{ planName: "Plus", price: 20, period: "monthly" }],
    url: "https://invideo.io", tags: ["Video Editing", "Social Media"], features: ["AI Script Generator", "Voiceover", "Stock Media"],
    useCases: ["Create Ad Assets"], rating: 4.6, reviewCount: 9400, featured: false, verified: true, popularity: 80,
    goals: ["Automate Socials"], bestFor: ["Creator", "Marketer"], stats: { launchYear: 2017 }
  },
  {
    id: "pika", name: "Pika", slug: "pika", tagline: "The idea-to-video platform.",
    description: "Pika is an AI video generation tool that can animate images and create 3D animation styles from text.",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=200",
    category: "c3", priceModel: "Freemium", pricing: [{ planName: "Standard", price: 10, period: "monthly" }],
    url: "https://pika.art", tags: ["Animation", "Generative Video"], features: ["Image to Video", "Lip Sync", "Expand Canvas"],
    useCases: ["Find Inspiration", "Create Ad Assets"], rating: 4.7, reviewCount: 4100, featured: false, verified: true, popularity: 85,
    goals: ["Find Inspiration"], bestFor: ["Designer", "Creator"], stats: { launchYear: 2023 }
  },
  
  // Audio
  {
    id: "play-ht", name: "Play.ht", slug: "play-ht", tagline: "AI Voice Generator.",
    description: "Create ultra-realistic text to speech voiceovers with AI. Features instant voice cloning.",
    imageUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=200",
    category: "c4", priceModel: "Freemium", pricing: [{ planName: "Creator", price: 39, period: "monthly" }],
    url: "https://play.ht", tags: ["TTS", "Voice Cloning"], features: ["900+ Voices", "Custom Pronunciations", "Audio Widgets"],
    useCases: ["Create Ad Assets"], rating: 4.6, reviewCount: 3800, featured: false, verified: true, popularity: 82,
    goals: ["Create Ad Assets"], bestFor: ["Creator", "Marketer"], stats: { launchYear: 2016 }
  },
  {
    id: "fliki", name: "Fliki", slug: "fliki", tagline: "Turn text into videos with AI voices.",
    description: "Fliki helps you create audio and video content using AI voices in just minutes.",
    imageUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=200",
    category: "c4", priceModel: "Freemium", pricing: [{ planName: "Standard", price: 28, period: "monthly" }],
    url: "https://fliki.ai", tags: ["TTS", "Video Generation"], features: ["Blog to Video", "Tweet to Video", "2000+ Voices"],
    useCases: ["Automate Socials"], rating: 4.7, reviewCount: 5100, featured: false, verified: true, popularity: 84,
    goals: ["Automate Socials"], bestFor: ["Creator", "Marketer"], stats: { launchYear: 2021 }
  },

  // Coding
  {
    id: "codeium", name: "Codeium", slug: "codeium", tagline: "Free AI code acceleration.",
    description: "Codeium is the modern coding superpower, providing free autocomplete and chat for developers.",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=200",
    category: "c5", priceModel: "Free", pricing: [{ planName: "Individual", price: 0, period: "monthly" }],
    url: "https://codeium.com", tags: ["IDE Extension", "Autocomplete"], features: ["In-Editor Chat", "Unlimited Usage", "70+ Languages"],
    useCases: ["Write Better Code", "Deploy Faster"], rating: 4.9, reviewCount: 22000, featured: true, verified: true, popularity: 93,
    goals: ["Write Better Code"], bestFor: ["Developer", "Student"], stats: { launchYear: 2022 }
  },
  {
    id: "phind", name: "Phind", slug: "phind", tagline: "The AI search engine for developers.",
    description: "Phind is an intelligent search engine designed for developers to answer technical questions with code examples.",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=200",
    category: "c5", priceModel: "Freemium", pricing: [{ planName: "Pro", price: 20, period: "monthly" }],
    url: "https://phind.com", tags: ["Search", "Coding Assistant"], features: ["Technical Search", "Code Execution", "VS Code Extension"],
    useCases: ["Fix Bugs", "Write Better Code"], rating: 4.8, reviewCount: 8900, featured: false, verified: true, popularity: 86,
    goals: ["Fix Bugs"], bestFor: ["Developer"], stats: { launchYear: 2022 }
  },
  {
    id: "sourcegraph-cody", name: "Cody by Sourcegraph", slug: "sourcegraph-cody", tagline: "AI that knows your entire codebase.",
    description: "Cody is an AI coding assistant that uses the context of your codebase to help you write and understand code.",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=200",
    category: "c5", priceModel: "Freemium", pricing: [{ planName: "Pro", price: 9, period: "monthly" }],
    url: "https://sourcegraph.com/cody", tags: ["Enterprise", "Code Search"], features: ["Context-Aware Chat", "Unit Test Generation", "Code Explanation"],
    useCases: ["Write Better Code", "Fix Bugs"], rating: 4.7, reviewCount: 6500, featured: false, verified: true, popularity: 81,
    goals: ["Write Better Code"], bestFor: ["Developer", "Agency"], stats: { launchYear: 2023 }
  },

  // Marketing & Productivity
  {
    id: "fireflies", name: "Fireflies.ai", slug: "fireflies", tagline: "Automate your meeting notes.",
    description: "Fireflies helps your team record, transcribe, search, and analyze voice conversations.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200",
    category: "c7", priceModel: "Freemium", pricing: [{ planName: "Pro", price: 18, period: "monthly" }],
    url: "https://fireflies.ai", tags: ["Meetings", "Transcription"], features: ["AI Search", "CRM Integration", "Conversation Intelligence"],
    useCases: ["Automate Ops", "Analyze Data"], rating: 4.7, reviewCount: 16000, featured: false, verified: true, popularity: 90,
    goals: ["Automate Tasks"], bestFor: ["Founder", "Sales"], stats: { launchYear: 2016 }
  },
  {
    id: "gamma", name: "Gamma", slug: "gamma", tagline: "A new medium for presenting ideas.",
    description: "Gamma generates beautiful, engaging presentations, documents, and webpages in seconds.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=200",
    category: "c7", priceModel: "Freemium", pricing: [{ planName: "Plus", price: 8, period: "monthly" }],
    url: "https://gamma.app", tags: ["Presentations", "Design"], features: ["One-Click Themes", "Interactive Content", "Analytics"],
    useCases: ["Draft Pitch Decks"], rating: 4.8, reviewCount: 28000, featured: true, verified: true, popularity: 95,
    goals: ["Pitch Deck Prep"], bestFor: ["Founder", "Marketer", "Student"], stats: { launchYear: 2020 }
  },
  {
    id: "tome", name: "Tome", slug: "tome", tagline: "The AI-powered storytelling format.",
    description: "Tome combines AI with a highly interactive canvas to help you build compelling narratives and presentations.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=200",
    category: "c7", priceModel: "Freemium", pricing: [{ planName: "Pro", price: 16, period: "monthly" }],
    url: "https://tome.app", tags: ["Presentations", "Storytelling"], features: ["AI Layouts", "DALL-E Integration", "Analytics"],
    useCases: ["Draft Pitch Decks", "Find Inspiration"], rating: 4.6, reviewCount: 15000, featured: false, verified: true, popularity: 88,
    goals: ["Pitch Deck Prep"], bestFor: ["Founder", "Marketer", "Designer"], stats: { launchYear: 2022 }
  },

  // Image Generation Expansion
  {
    id: "krea", name: "Krea AI", slug: "krea", tagline: "Real-time AI generation.",
    description: "Krea provides instant image generation and upscaling, allowing you to control the creative process in real time.",
    imageUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=200",
    category: "c2", priceModel: "Freemium", pricing: [{ planName: "Pro", price: 30, period: "monthly" }],
    url: "https://krea.ai", tags: ["Real-time", "Upscaling", "Image Generation"], features: ["Live Canvas", "Enhance", "Video AI"],
    useCases: ["Generate UI Assets", "Edit Photos Faster"], rating: 4.8, reviewCount: 5200, featured: false, verified: true, popularity: 87,
    goals: ["Generate UI Assets"], bestFor: ["Designer", "Creator"], stats: { launchYear: 2023 }
  },
  {
    id: "photoroom", name: "Photoroom", slug: "photoroom", tagline: "Create product and portrait pictures.",
    description: "Photoroom lets you edit backgrounds, remove objects, and generate studio-quality images in seconds.",
    imageUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=200",
    category: "c2", priceModel: "Freemium", pricing: [{ planName: "Pro", price: 9.99, period: "monthly" }],
    url: "https://photoroom.com", tags: ["Photo Editing", "E-commerce", "Background Removal"], features: ["Batch Editor", "AI Backgrounds", "Retouch"],
    useCases: ["Edit Photos Faster", "Create Ad Assets"], rating: 4.9, reviewCount: 85000, featured: true, verified: true, popularity: 94,
    goals: ["Create Ad Assets", "Edit Photos Faster"], bestFor: ["Marketer", "Founder"], stats: { launchYear: 2019 }
  },
  {
    id: "magnific", name: "Magnific AI", slug: "magnific", tagline: "The most advanced AI upscaler.",
    description: "Magnific AI magically upscales and enhances your images by adding high-resolution details.",
    imageUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=200",
    category: "c2", priceModel: "Paid", pricing: [{ planName: "Pro", price: 39, period: "monthly" }],
    url: "https://magnific.ai", tags: ["Upscaling", "Enhancement"], features: ["Creativity Control", "HDR", "Style Transfer"],
    useCases: ["Edit Photos Faster"], rating: 4.7, reviewCount: 2300, featured: false, verified: true, popularity: 82,
    goals: ["Edit Photos Faster"], bestFor: ["Designer", "Creator"], stats: { launchYear: 2023 }
  },

  // Extra text generation & general
  {
    id: "beautiful-ai", name: "Beautiful.ai", slug: "beautiful-ai", tagline: "Presentation software that designs for you.",
    description: "Beautiful.ai applies the rules of great design in real-time, helping you build stunning presentations quickly.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=200",
    category: "c7", priceModel: "Paid", pricing: [{ planName: "Pro", price: 12, period: "monthly" }],
    url: "https://beautiful.ai", tags: ["Presentations", "Design"], features: ["Smart Templates", "Brand Controls", "Analytics"],
    useCases: ["Draft Pitch Decks"], rating: 4.6, reviewCount: 7800, featured: false, verified: true, popularity: 83,
    goals: ["Pitch Deck Prep"], bestFor: ["Founder", "Marketer", "Sales"], stats: { launchYear: 2018 }
  },
  {
    id: "fathom", name: "Fathom", slug: "fathom", tagline: "The free AI meeting assistant.",
    description: "Fathom records, transcribes, highlights, and summarizes your meetings so you can focus on the conversation.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200",
    category: "c7", priceModel: "Free", pricing: [{ planName: "Free", price: 0, period: "monthly" }],
    url: "https://fathom.video", tags: ["Meetings", "Productivity"], features: ["Instant Summary", "CRM Sync", "Unlimited Recording"],
    useCases: ["Automate Tasks"], rating: 4.8, reviewCount: 14000, featured: false, verified: true, popularity: 86,
    goals: ["Automate Tasks"], bestFor: ["Founder", "Sales", "Agency"], stats: { launchYear: 2020 }
  },
  {
    id: "anyword", name: "Anyword", slug: "anyword", tagline: "Data-driven AI copywriting.",
    description: "Anyword generates predictive marketing copy. It scores variations to tell you which ones will perform best.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200",
    category: "c6", priceModel: "Paid", pricing: [{ planName: "Starter", price: 39, period: "monthly" }],
    url: "https://anyword.com", tags: ["Copywriting", "Ads", "Marketing"], features: ["Predictive Performance Score", "Custom Personas", "Blog Wizard"],
    useCases: ["Write SEO Content", "Run Ad Campaigns"], rating: 4.7, reviewCount: 3100, featured: false, verified: true, popularity: 79,
    goals: ["Write SEO Content"], bestFor: ["Marketer", "Agency"], stats: { launchYear: 2013 }
  },
  {
    id: "taskade", name: "Taskade", slug: "taskade", tagline: "Build a second brain for your team.",
    description: "Taskade combines tasks, notes, and video chat into an AI-powered unified workspace.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=200",
    category: "c7", priceModel: "Freemium", pricing: [{ planName: "Pro", price: 19, period: "monthly" }],
    url: "https://taskade.com", tags: ["Workspace", "Tasks", "Collaboration"], features: ["AI Workflow Generator", "Mind Maps", "Chat"],
    useCases: ["Organize Notes", "Automate Tasks"], rating: 4.7, reviewCount: 6500, featured: false, verified: true, popularity: 81,
    goals: ["Organize Notes"], bestFor: ["Founder", "Agency", "Student"], stats: { launchYear: 2017 }
  },
  {
    id: "grok", name: "Grok", slug: "grok", tagline: "An AI modeled after the Hitchhiker's Guide.",
    description: "Grok is an AI developed by xAI that has real-time knowledge of the world via the X platform.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=200",
    category: "c1", priceModel: "Paid", pricing: [{ planName: "X Premium", price: 8, period: "monthly" }],
    url: "https://x.ai", tags: ["Chatbot", "Twitter", "Real-time"], features: ["Real-time Twitter Access", "Fun Mode", "Coding"],
    useCases: ["Research Topics", "Automate Socials"], rating: 4.4, reviewCount: 15000, featured: false, verified: true, popularity: 91,
    goals: ["Find Inspiration"], bestFor: ["Marketer", "Creator", "Founder"], stats: { launchYear: 2023 }
  },
  {
    id: "superhuman", name: "Superhuman AI", slug: "superhuman", tagline: "The fastest email experience ever made.",
    description: "Superhuman uses AI to help you read, reply, and process your inbox faster than ever before.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=200",
    category: "c7", priceModel: "Paid", pricing: [{ planName: "Pro", price: 30, period: "monthly" }],
    url: "https://superhuman.com", tags: ["Email", "Productivity", "Inbox"], features: ["Auto-Drafts", "Summary", "Split Inbox"],
    useCases: ["Automate Ops"], rating: 4.8, reviewCount: 4200, featured: true, verified: true, popularity: 89,
    goals: ["Automate Tasks"], bestFor: ["Founder", "Sales", "Agency"], stats: { launchYear: 2017 }
  }
];
