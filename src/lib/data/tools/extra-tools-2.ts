import type { AITool } from "@/lib/types/tool";

export const extraTools2: AITool[] = [
  {
    id: "perplexity-pro", name: "Perplexity Pro", slug: "perplexity-pro", tagline: "The ultimate research tool.",
    description: "Perplexity Pro gives you unlimited Copilot queries, upgraded AI models like GPT-4 and Claude 3, and unlimited file uploads.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=200",
    category: "c1", priceModel: "Paid", pricing: [{ planName: "Pro", price: 20, period: "monthly" }],
    url: "https://perplexity.ai/pro", tags: ["Research", "Search Engine"], features: ["GPT-4 Access", "Claude 3 Opus", "API Credits"],
    useCases: ["Research Topics", "Market Research"], rating: 4.9, reviewCount: 14000, featured: true, verified: true, popularity: 93,
    goals: ["Find Inspiration"], bestFor: ["Researcher", "Student"], stats: { launchYear: 2023 }
  },
  {
    id: "tome-pro", name: "Tome Pro", slug: "tome-pro", tagline: "Unlimited AI storytelling.",
    description: "Tome Pro offers unlimited AI credits, custom branding, and advanced export options for your presentations.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=200",
    category: "c7", priceModel: "Paid", pricing: [{ planName: "Pro", price: 16, period: "monthly" }],
    url: "https://tome.app", tags: ["Presentations", "Enterprise"], features: ["Custom Fonts", "PDF Export", "Unlimited AI"],
    useCases: ["Draft Pitch Decks"], rating: 4.7, reviewCount: 5000, featured: false, verified: true, popularity: 85,
    goals: ["Pitch Deck Prep"], bestFor: ["Founder", "Marketer"], stats: { launchYear: 2023 }
  },
  {
    id: "runway-gen1", name: "Runway Gen-1", slug: "runway-gen1", tagline: "Video to video generation.",
    description: "Gen-1 is a video-to-video model that can synthesize new videos by applying the composition and style of an image or text prompt to the structure of your source video.",
    imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=200",
    category: "c3", priceModel: "Freemium", pricing: [{ planName: "Standard", price: 15, period: "monthly" }],
    url: "https://runwayml.com", tags: ["VFX", "Video Editing"], features: ["Stylization", "Storyboard", "Masking"],
    useCases: ["Create Ad Assets"], rating: 4.8, reviewCount: 6000, featured: false, verified: true, popularity: 87,
    goals: ["Create Ad Assets"], bestFor: ["Creator", "Designer"], stats: { launchYear: 2022 }
  },
  {
    id: "kaiber", name: "Kaiber", slug: "kaiber", tagline: "Create videos with AI.",
    description: "Kaiber is an AI creative lab made by artists, for artists. It lets you generate stunning music videos and animations from images or audio.",
    imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=200",
    category: "c3", priceModel: "Freemium", pricing: [{ planName: "Pro", price: 15, period: "monthly" }],
    url: "https://kaiber.ai", tags: ["Music Video", "Animation"], features: ["Audio Reactivity", "Storyboard", "Camera Movements"],
    useCases: ["Find Inspiration"], rating: 4.6, reviewCount: 8000, featured: false, verified: true, popularity: 83,
    goals: ["Find Inspiration"], bestFor: ["Creator"], stats: { launchYear: 2023 }
  },
  {
    id: "krea-pro", name: "Krea Pro", slug: "krea-pro", tagline: "Professional real-time AI.",
    description: "Krea Pro gives you commercial rights, private generations, and unlimited high-res upscaling.",
    imageUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=200",
    category: "c2", priceModel: "Paid", pricing: [{ planName: "Pro", price: 30, period: "monthly" }],
    url: "https://krea.ai", tags: ["Design", "Pro"], features: ["Commercial Rights", "Private Mode", "Priority Queue"],
    useCases: ["Generate UI Assets"], rating: 4.8, reviewCount: 2000, featured: false, verified: true, popularity: 81,
    goals: ["Generate UI Assets"], bestFor: ["Designer"], stats: { launchYear: 2023 }
  },
  {
    id: "remove-bg", name: "Remove.bg", slug: "remove-bg", tagline: "Remove Image Background Automatically.",
    description: "Remove.bg uses AI to automatically remove the background from any image in 5 seconds with zero clicks.",
    imageUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=200",
    category: "c2", priceModel: "Freemium", pricing: [{ planName: "Subscription", price: 9, period: "monthly" }],
    url: "https://remove.bg", tags: ["Photo Editing", "Utility"], features: ["API", "Photoshop Extension", "Bulk Processing"],
    useCases: ["Edit Photos Faster"], rating: 4.9, reviewCount: 150000, featured: true, verified: true, popularity: 99,
    goals: ["Edit Photos Faster"], bestFor: ["Marketer", "Creator", "Designer"], stats: { launchYear: 2018 }
  },
  {
    id: "lovo", name: "Lovo", slug: "lovo", tagline: "AI Voice Generator & Text to Speech.",
    description: "Lovo is a next-generation AI voice generator and text-to-speech platform with over 500 voices in 100 languages.",
    imageUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=200",
    category: "c4", priceModel: "Freemium", pricing: [{ planName: "Basic", price: 19, period: "monthly" }],
    url: "https://lovo.ai", tags: ["TTS", "Voice"], features: ["Emotion Control", "Video Editor", "Pronunciation"],
    useCases: ["Create Ad Assets"], rating: 4.6, reviewCount: 4200, featured: false, verified: true, popularity: 83,
    goals: ["Create Ad Assets"], bestFor: ["Creator", "Marketer"], stats: { launchYear: 2019 }
  },
  {
    id: "replica-studios", name: "Replica Studios", slug: "replica-studios", tagline: "AI Voice Actors for Games and Film.",
    description: "Replica provides AI voice actors for game developers, animators, and filmmakers.",
    imageUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=200",
    category: "c4", priceModel: "Paid", pricing: [{ planName: "Pay As You Go", price: 24, period: "monthly" }],
    url: "https://replicastudios.com", tags: ["Gaming", "Voice Acting"], features: ["Unreal Engine Plugin", "Emotion Pitch", "Script Export"],
    useCases: ["Create 3D Models"], rating: 4.7, reviewCount: 1800, featured: false, verified: true, popularity: 75,
    goals: ["Find Inspiration"], bestFor: ["Developer", "Creator"], stats: { launchYear: 2018 }
  },
  {
    id: "resemble-ai", name: "Resemble AI", slug: "resemble-ai", tagline: "Generative Voice AI for Enterprise.",
    description: "Resemble AI creates custom voices for TTS and Speech-to-Speech applications with deepfake detection.",
    imageUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=200",
    category: "c4", priceModel: "Enterprise", pricing: [{ planName: "Custom", price: 0, period: "monthly" }],
    url: "https://resemble.ai", tags: ["Enterprise", "Voice Cloning"], features: ["Deepfake Detector", "API", "Local Deployment"],
    useCases: ["Automate Ops"], rating: 4.5, reviewCount: 1100, featured: false, verified: true, popularity: 72,
    goals: ["Automate Tasks"], bestFor: ["Developer", "Founder"], stats: { launchYear: 2019 }
  },
  {
    id: "cody-ai", name: "Cody AI", slug: "cody-ai", tagline: "The magic AI business assistant.",
    description: "Cody is an intelligent AI assistant like ChatGPT, but specifically trained on your business, your team, your processes, and your clients.",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=200",
    category: "c7", priceModel: "Paid", pricing: [{ planName: "Basic", price: 29, period: "monthly" }],
    url: "https://getcody.ai", tags: ["Business", "Chatbot"], features: ["Custom Knowledge Base", "API", "Slack Integration"],
    useCases: ["Automate Ops", "Analyze Data"], rating: 4.7, reviewCount: 2200, featured: false, verified: true, popularity: 78,
    goals: ["Automate Ops"], bestFor: ["Founder", "Sales"], stats: { launchYear: 2023 }
  },
  {
    id: "mutable-ai", name: "Mutable AI", slug: "mutable-ai", tagline: "Accelerate software development.",
    description: "Mutable AI generates code from instructions, refactors existing code, and provides AI-powered documentation.",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=200",
    category: "c5", priceModel: "Freemium", pricing: [{ planName: "Pro", price: 15, period: "monthly" }],
    url: "https://mutable.ai", tags: ["Coding", "Documentation"], features: ["Auto-Document", "Refactor", "Test Generation"],
    useCases: ["Write Better Code", "Deploy Faster"], rating: 4.6, reviewCount: 1400, featured: false, verified: true, popularity: 74,
    goals: ["Write Better Code"], bestFor: ["Developer"], stats: { launchYear: 2022 }
  },
  {
    id: "blackbox-ai", name: "Blackbox AI", slug: "blackbox-ai", tagline: "Code faster than ever.",
    description: "Blackbox is your AI coding assistant. It can answer coding questions and help you extract code from any video.",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=200",
    category: "c5", priceModel: "Freemium", pricing: [{ planName: "Pro", price: 9.99, period: "monthly" }],
    url: "https://blackbox.ai", tags: ["Coding", "Search"], features: ["Code Extraction", "Chat", "IDE Extension"],
    useCases: ["Write Better Code", "Fix Bugs"], rating: 4.5, reviewCount: 8900, featured: false, verified: true, popularity: 82,
    goals: ["Write Better Code"], bestFor: ["Developer", "Student"], stats: { launchYear: 2021 }
  },
  {
    id: "codium-ai", name: "CodiumAI", slug: "codium-ai", tagline: "Meaningful tests for busy devs.",
    description: "CodiumAI analyzes your code and generates meaningful test suites to help you catch bugs before you ship.",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=200",
    category: "c5", priceModel: "Freemium", pricing: [{ planName: "Teams", price: 19, period: "monthly" }],
    url: "https://codium.ai", tags: ["Testing", "Quality"], features: ["Test Generation", "Code Review", "PR Agent"],
    useCases: ["Fix Bugs", "Deploy Faster"], rating: 4.8, reviewCount: 3400, featured: true, verified: true, popularity: 86,
    goals: ["Fix Bugs"], bestFor: ["Developer", "Agency"], stats: { launchYear: 2022 }
  },
  {
    id: "reply-io", name: "Reply.io", slug: "reply-io", tagline: "AI Sales Engagement Platform.",
    description: "Reply.io is an AI-powered sales engagement platform that helps you automate multichannel outreach and generate responses.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200",
    category: "c6", priceModel: "Paid", pricing: [{ planName: "Sales Engagement", price: 60, period: "monthly" }],
    url: "https://reply.io", tags: ["Sales", "Email Outreach"], features: ["Jason AI", "Multichannel Sequences", "Meeting Booking"],
    useCases: ["Automate Ops", "Run Ad Campaigns"], rating: 4.7, reviewCount: 5200, featured: false, verified: true, popularity: 80,
    goals: ["Automate Tasks"], bestFor: ["Sales", "Founder"], stats: { launchYear: 2014 }
  },
  {
    id: "smartwriter", name: "Smartwriter", slug: "smartwriter", tagline: "Personalize cold emails at scale.",
    description: "Smartwriter uses AI to create highly personalized cold emails or LinkedIn messages that get you more replies.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200",
    category: "c6", priceModel: "Paid", pricing: [{ planName: "Basic", price: 49, period: "monthly" }],
    url: "https://smartwriter.ai", tags: ["Email", "Personalization"], features: ["Icebreaker Generation", "LinkedIn Scraping", "Backlink Outreach"],
    useCases: ["Run Ad Campaigns"], rating: 4.6, reviewCount: 1800, featured: false, verified: true, popularity: 76,
    goals: ["Automate Tasks"], bestFor: ["Marketer", "Sales"], stats: { launchYear: 2021 }
  },
  {
    id: "outbound", name: "Outbound", slug: "outbound", tagline: "The outbound sales OS.",
    description: "Outbound AI automates your B2B sales pipeline, generating personalized outreach and managing replies.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200",
    category: "c6", priceModel: "Paid", pricing: [{ planName: "Starter", price: 99, period: "monthly" }],
    url: "https://outbound.ai", tags: ["Sales", "B2B", "Outreach"], features: ["AI SDR", "Intent Data", "CRM Sync"],
    useCases: ["Automate Ops"], rating: 4.5, reviewCount: 950, featured: false, verified: true, popularity: 71,
    goals: ["Automate Tasks"], bestFor: ["Founder", "Sales"], stats: { launchYear: 2022 }
  },
  {
    id: "sanebox", name: "SaneBox", slug: "sanebox", tagline: "Take back control of your inbox.",
    description: "SaneBox identifies important messages, hides distractions, has Do Not Disturb, banishes annoying senders, and reminds you to followup.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=200",
    category: "c7", priceModel: "Paid", pricing: [{ planName: "Snack", price: 7, period: "monthly" }],
    url: "https://sanebox.com", tags: ["Email", "Productivity"], features: ["SaneLater", "SaneBlackHole", "SaneReminders"],
    useCases: ["Automate Ops"], rating: 4.8, reviewCount: 12000, featured: false, verified: true, popularity: 84,
    goals: ["Automate Tasks"], bestFor: ["Founder", "Marketer", "Sales"], stats: { launchYear: 2010 }
  },
  {
    id: "read-ai", name: "Read AI", slug: "read-ai", tagline: "AI generated meeting notes & summaries.",
    description: "Read AI generates summaries, transcripts, playback, and highlights for your meetings on Zoom, Google Meet, and Teams.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200",
    category: "c7", priceModel: "Freemium", pricing: [{ planName: "Pro", price: 15, period: "monthly" }],
    url: "https://read.ai", tags: ["Meetings", "Analytics"], features: ["Engagement Scores", "Meeting Summaries", "Action Items"],
    useCases: ["Automate Ops"], rating: 4.7, reviewCount: 8100, featured: false, verified: true, popularity: 82,
    goals: ["Automate Tasks"], bestFor: ["Founder", "Sales", "Agency"], stats: { launchYear: 2021 }
  },
  {
    id: "magicstudio", name: "Magic Studio", slug: "magicstudio", tagline: "The AI design tool for everyone.",
    description: "Magic Studio lets you create amazing product photos, remove backgrounds, and erase objects effortlessly.",
    imageUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=200",
    category: "c2", priceModel: "Freemium", pricing: [{ planName: "Pro", price: 9.99, period: "monthly" }],
    url: "https://magicstudio.com", tags: ["Design", "Photo Editing"], features: ["Magic Eraser", "Background Creator", "Profile Picture Generator"],
    useCases: ["Create Ad Assets", "Edit Photos Faster"], rating: 4.6, reviewCount: 6500, featured: false, verified: true, popularity: 79,
    goals: ["Edit Photos Faster"], bestFor: ["Marketer", "Creator"], stats: { launchYear: 2021 }
  },
  {
    id: "elevenlabs-dubbing", name: "ElevenLabs Dubbing", slug: "elevenlabs-dubbing", tagline: "Localize your videos automatically.",
    description: "Translate your videos into 29 languages while preserving the original voice, tone, and pacing with ElevenLabs Dubbing.",
    imageUrl: "https://images.unsplash.com/photo-1581368129680-e8369527ecb2?auto=format&fit=crop&q=80&w=800",
    logoUrl: "https://images.unsplash.com/photo-1581368129680-e8369527ecb2?auto=format&fit=crop&q=80&w=200",
    category: "c4", priceModel: "Paid", pricing: [{ planName: "Creator", price: 22, period: "monthly" }],
    url: "https://elevenlabs.io/dubbing", tags: ["Translation", "Video", "Audio"], features: ["Voice Preservation", "Multi-speaker Support", "SRT Export"],
    useCases: ["Run Ad Campaigns", "Create Ad Assets"], rating: 4.9, reviewCount: 5200, featured: true, verified: true, popularity: 89,
    goals: ["Automate Socials"], bestFor: ["Creator", "Marketer", "Agency"], stats: { launchYear: 2023 }
  }
];
