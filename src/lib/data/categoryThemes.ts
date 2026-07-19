import { ReactNode } from "react";

export type CategoryTheme = {
  slug: string;
  accentColors: {
    heroGradient: string;
    iconBg: string;
    iconText: string;
    textAccent: string;
    borderAccent: string;
    cssVar: string; // The hex color to use for the --category-accent variable
  };
  heroHeadline: string;
  heroDescription: string;
  statsLabels: {
    listed: string;
    popular: string;
  };
  emptyState: {
    message: string;
    subMessage: string;
  };
  faq: { question: string; answer: string }[];
  guide: { title: string; content: string }[];
  internalLinks: { title: string; href: string }[];
};

export const categoryThemes: Record<string, CategoryTheme> = {
  "text-generation": {
    slug: "text-generation",
    accentColors: {
      heroGradient: "from-purple-500/10 to-purple-500/5",
      iconBg: "bg-purple-500/20",
      iconText: "text-purple-500",
      textAccent: "text-purple-500",
      borderAccent: "border-purple-500/30",
      cssVar: "168, 85, 247", // rgb for purple-500
    },
    heroHeadline: "Write faster with intelligent AI writing assistants.",
    heroDescription: "Write articles, emails, books and marketing copy with intelligent AI writing assistants that enhance your workflow and creativity.",
    statsLabels: {
      listed: "Writing Assistants",
      popular: "Languages Supported",
    },
    emptyState: {
      message: "No AI Writing tools found.",
      subMessage: "Try adjusting your filters to find writing assistants.",
    },
    faq: [
      {
        question: "What are AI writing generators?",
        answer: "AI writing generators use natural language processing models, like GPT-4, to generate human-like text based on prompts you provide."
      },
      {
        question: "Can AI write a full book?",
        answer: "Yes, many AI writing tools are specifically designed for long-form content, helping authors outline, draft, and edit entire books."
      },
      {
        question: "Is AI-generated text plagiarism-free?",
        answer: "Generally, yes. AI models generate unique text rather than copying existing content. However, it's always best practice to run outputs through a plagiarism checker."
      }
    ],
    guide: [
      {
        title: "Understanding AI Writing Assistants",
        content: "AI writing tools have revolutionized the way we create content. From drafting quick emails to writing comprehensive blog posts and novels, these intelligent assistants leverage large language models to understand context and generate relevant, engaging text."
      },
      {
        title: "Best Use Cases for Text Generation",
        content: "Marketers use them for ad copy and SEO articles; developers for documentation; authors for brainstorming and character development. The versatility of these tools makes them invaluable across almost every industry."
      },
      {
        title: "How to Choose the Right Tool",
        content: "Consider your primary need: do you need short-form marketing copy, long-form blog posts, or creative storytelling? Tools like Jasper excel at marketing, while NovelCrafter is tailored for authors. Look for features like brand voice customization, SEO integration, and team collaboration."
      }
    ],
    internalLinks: [
      { title: "Best AI Copywriting Tools", href: "/category/marketing-sales" },
      { title: "ChatGPT vs Jasper", href: "/compare-tools/chatgpt-vs-jasper" },
      { title: "Automate Blog Writing", href: "/workflows/blog-automation" },
    ]
  },
  "image-generation": {
    slug: "image-generation",
    accentColors: {
      heroGradient: "from-pink-500/10 to-fuchsia-500/5",
      iconBg: "bg-pink-500/20",
      iconText: "text-pink-500",
      textAccent: "text-pink-500",
      borderAccent: "border-pink-500/30",
      cssVar: "236, 72, 153", // rgb for pink-500
    },
    heroHeadline: "Create stunning AI-generated images in seconds.",
    heroDescription: "Discover AI tools that turn your ideas into stunning artwork, illustrations and professional images.",
    statsLabels: {
      listed: "Image Generators",
      popular: "Most Popular Generator",
    },
    emptyState: {
      message: "No AI Image tools found.",
      subMessage: "Try adjusting your filters to find creative tools.",
    },
    faq: [
      {
        question: "What are AI image generators?",
        answer: "AI image generators use deep learning models to create original images from text descriptions (prompts) provided by the user."
      },
      {
        question: "Are AI-generated images copyright free?",
        answer: "The legal landscape is evolving, but generally, images generated entirely by AI cannot be copyrighted by the user. However, terms of service vary by platform regarding commercial use."
      },
      {
        question: "Can I use AI images commercially?",
        answer: "Most premium AI image generators like Midjourney or DALL-E 3 grant you commercial rights to the images you generate, provided you adhere to their terms of service."
      }
    ],
    guide: [
      {
        title: "The Rise of AI Image Generation",
        content: "AI image generation has transformed digital art, graphic design, and marketing. By simply describing an image, users can instantly produce high-quality, complex visuals that previously required hours of professional design work."
      },
      {
        title: "Key Technologies Behind the Tools",
        content: "Most modern tools rely on diffusion models. These models learn to generate images by reversing a process of adding noise to existing images, resulting in highly detailed and accurate generations based on text prompts."
      },
      {
        title: "Getting the Best Results",
        content: "Prompt engineering is crucial. Be specific about subject, lighting, style, medium (e.g., 'oil painting', '3d render'), and mood. Tools often provide negative prompts to specify what you don't want in the image."
      }
    ],
    internalLinks: [
      { title: "Midjourney Review", href: "/tool/midjourney" },
      { title: "Best Tools for Video Creation", href: "/category/video-creation" },
      { title: "AI Art Prompt Guide", href: "/workflows/ai-art-prompts" },
    ]
  },
  "video-creation": {
    slug: "video-creation",
    accentColors: {
      heroGradient: "from-rose-500/10 to-red-500/5",
      iconBg: "bg-rose-500/20",
      iconText: "text-rose-500",
      textAccent: "text-rose-500",
      borderAccent: "border-rose-500/30",
      cssVar: "244, 63, 94", // rgb for rose-500
    },
    heroHeadline: "Generate professional videos with AI.",
    heroDescription: "Create, edit, and enhance videos automatically using powerful AI video generation tools.",
    statsLabels: {
      listed: "Video Generators",
      popular: "Export Formats",
    },
    emptyState: {
      message: "No AI Video tools found.",
      subMessage: "Try adjusting your filters to find video editors.",
    },
    faq: [
      {
        question: "Can AI make a video from text?",
        answer: "Yes, Text-to-Video models like Sora or Runway Gen-2 can generate short video clips entirely from a text description."
      },
      {
        question: "What about AI avatars?",
        answer: "Many platforms like HeyGen or Synthesia allow you to create videos using photorealistic AI avatars that lip-sync to a script you provide."
      }
    ],
    guide: [
      {
        title: "Transforming Video Production",
        content: "AI video tools are drastically reducing the time and cost associated with video production. From generating b-roll to fully synthesized avatar presentations, these tools make professional video accessible to everyone."
      },
      {
        title: "Types of AI Video Tools",
        content: "There are text-to-video generators, AI avatars, automated video editors (which cut out silences and add captions), and tools that transform long-form content into short clips for social media."
      }
    ],
    internalLinks: [
      { title: "Best AI Audio Tools", href: "/category/audio-voice" },
      { title: "HeyGen vs Synthesia", href: "/compare-tools/heygen-vs-synthesia" },
    ]
  },
  "audio-voice": {
    slug: "audio-voice",
    accentColors: {
      heroGradient: "from-indigo-500/10 to-blue-500/5",
      iconBg: "bg-indigo-500/20",
      iconText: "text-indigo-500",
      textAccent: "text-indigo-500",
      borderAccent: "border-indigo-500/30",
      cssVar: "99, 102, 241", // rgb for indigo-500
    },
    heroHeadline: "Create lifelike voices and music with AI.",
    heroDescription: "Generate ultra-realistic voiceovers, clone voices, and compose original music tracks instantly.",
    statsLabels: {
      listed: "Audio Tools",
      popular: "Voices Available",
    },
    emptyState: {
      message: "No AI Audio tools found.",
      subMessage: "Try adjusting your filters to find voice generators.",
    },
    faq: [
      {
        question: "How realistic are AI voices?",
        answer: "Modern AI voice generators like ElevenLabs are nearly indistinguishable from human voices, capable of capturing emotion, pacing, and intonation accurately."
      },
      {
        question: "Is voice cloning legal?",
        answer: "Voice cloning is legal if you have permission from the person whose voice you are cloning. Most reputable platforms require you to verify your identity before cloning your own voice."
      }
    ],
    guide: [
      {
        title: "The Sound of AI",
        content: "AI audio tools have moved past robotic text-to-speech. Today's tools offer emotive, highly realistic voiceovers suitable for audiobooks, podcasts, and video games."
      },
      {
        title: "Music Generation",
        content: "Beyond voice, AI can now generate royalty-free music tailored to specific moods, genres, and lengths, providing an endless supply of background tracks for content creators."
      }
    ],
    internalLinks: [
      { title: "ElevenLabs Review", href: "/tool/elevenlabs" },
      { title: "AI Tools for Podcasters", href: "/workflows/podcast-creation" },
    ]
  },
  "coding-assistants": {
    slug: "coding-assistants",
    accentColors: {
      heroGradient: "from-blue-500/10 to-cyan-500/5",
      iconBg: "bg-blue-500/20",
      iconText: "text-blue-500",
      textAccent: "text-blue-500",
      borderAccent: "border-blue-500/30",
      cssVar: "59, 130, 246", // rgb for blue-500
    },
    heroHeadline: "Build software faster with AI coding tools.",
    heroDescription: "Write software faster using AI coding assistants, code generators, and automated debugging tools.",
    statsLabels: {
      listed: "Coding Assistants",
      popular: "Open Source Tools",
    },
    emptyState: {
      message: "No AI Coding tools found.",
      subMessage: "Try adjusting your filters to find IDE plugins.",
    },
    faq: [
      {
        question: "Will AI replace programmers?",
        answer: "Currently, AI acts as a powerful assistant that significantly speeds up development by handling boilerplate code and suggesting solutions, but it still requires human oversight for architecture and complex logic."
      },
      {
        question: "Are AI coding tools secure?",
        answer: "Enterprise-grade AI coding assistants offer privacy guarantees that they will not train their models on your proprietary code. Always check the privacy policy of the tool you are using."
      }
    ],
    guide: [
      {
        title: "Supercharging Development",
        content: "AI coding assistants like GitHub Copilot and Cursor integrate directly into your IDE, offering autocomplete suggestions that range from single lines to entire functions based on the context of your codebase."
      },
      {
        title: "Automating the Mundane",
        content: "Beyond writing new code, AI tools excel at writing unit tests, documenting code, explaining complex legacy systems, and identifying potential bugs before they go to production."
      }
    ],
    internalLinks: [
      { title: "GitHub Copilot vs Cursor", href: "/compare-tools/github-copilot-vs-cursor" },
      { title: "Best AI for Web Dev", href: "/workflows/web-development" },
    ]
  },
  "marketing-sales": {
    slug: "marketing-sales",
    accentColors: {
      heroGradient: "from-orange-500/10 to-amber-500/5",
      iconBg: "bg-orange-500/20",
      iconText: "text-orange-500",
      textAccent: "text-orange-500",
      borderAccent: "border-orange-500/30",
      cssVar: "249, 115, 22", // rgb for orange-500
    },
    heroHeadline: "Scale your growth with AI marketing tools.",
    heroDescription: "Automate campaigns, improve SEO and grow your business using intelligent AI marketing platforms.",
    statsLabels: {
      listed: "Marketing Tools",
      popular: "Integrations",
    },
    emptyState: {
      message: "No AI Marketing tools found.",
      subMessage: "Try adjusting your filters to find marketing automation.",
    },
    faq: [
      {
        question: "How can AI help with SEO?",
        answer: "AI tools can analyze search intent, generate optimized outlines, suggest keywords, and even draft entire articles that are tailored to rank well on search engines."
      },
      {
        question: "Can AI manage social media?",
        answer: "Yes, many tools can generate social media posts from blog links, schedule them at optimal times, and analyze engagement metrics."
      }
    ],
    guide: [
      {
        title: "The New Era of Marketing",
        content: "AI is transforming marketing from guesswork to data-driven precision. Tools can now personalize outreach at scale, predict customer behavior, and generate high-converting copy in seconds."
      },
      {
        title: "Sales Automation",
        content: "In sales, AI assistants can draft personalized cold emails based on a prospect's LinkedIn profile, summarize sales calls, and automatically update CRMs, freeing up reps to actually sell."
      }
    ],
    internalLinks: [
      { title: "Best Text Generators", href: "/category/text-generation" },
      { title: "Automate Cold Outreach", href: "/workflows/sales-automation" },
    ]
  },
  "productivity": {
    slug: "productivity",
    accentColors: {
      heroGradient: "from-emerald-500/10 to-teal-500/5",
      iconBg: "bg-emerald-500/20",
      iconText: "text-emerald-500",
      textAccent: "text-emerald-500",
      borderAccent: "border-emerald-500/30",
      cssVar: "16, 185, 129", // rgb for emerald-500
    },
    heroHeadline: "Organize your workflow with AI productivity apps.",
    heroDescription: "Streamline your daily tasks, manage projects smartly, and get more done in less time with AI.",
    statsLabels: {
      listed: "Productivity Apps",
      popular: "Time Saved",
    },
    emptyState: {
      message: "No AI Productivity tools found.",
      subMessage: "Try adjusting your filters to find workflow tools.",
    },
    faq: [
      {
        question: "What is an AI meeting assistant?",
        answer: "AI meeting assistants join your video calls, transcribe the conversation in real-time, and generate actionable summaries and to-do lists automatically."
      },
      {
        question: "Can AI manage my calendar?",
        answer: "Yes, tools like Motion use AI to analyze your tasks and automatically schedule them into your calendar based on priority and deadlines."
      }
    ],
    guide: [
      {
        title: "Reclaiming Your Time",
        content: "The modern worker spends hours on administrative tasks. AI productivity tools aim to eliminate this 'work about work' by automating scheduling, summarizing long documents, and organizing files."
      },
      {
        title: "Smart Project Management",
        content: "Next-generation project management tools use AI to predict project delays, assign tasks to the right team members based on workload, and provide status updates automatically."
      }
    ],
    internalLinks: [
      { title: "Best AI Meeting Tools", href: "/category/productivity" },
      { title: "Notion AI Review", href: "/tool/notion-ai" },
    ]
  },
  "ai-chatbots": {
    slug: "ai-chatbots",
    accentColors: {
      heroGradient: "from-sky-500/10 to-blue-500/5",
      iconBg: "bg-sky-500/20",
      iconText: "text-sky-500",
      textAccent: "text-sky-500",
      borderAccent: "border-sky-500/30",
      cssVar: "14, 165, 233", // rgb for sky-500
    },
    heroHeadline: "Engage with the world's most advanced AI chatbots.",
    heroDescription: "Discover conversational AI agents, LLM assistants, and virtual companions that can answer questions, write code, and brainstorm ideas.",
    statsLabels: {
      listed: "Chatbots Listed",
      popular: "Total Conversations",
    },
    emptyState: {
      message: "No AI Chatbots found.",
      subMessage: "Try adjusting your filters to find conversational agents.",
    },
    faq: [
      {
        question: "What is an AI Chatbot?",
        answer: "An AI chatbot is a software application designed to simulate human conversation, typically using advanced Large Language Models (LLMs) to understand context and provide helpful answers."
      },
      {
        question: "Which AI Chatbot is the smartest?",
        answer: "The 'smartest' chatbot depends on your needs. Models like GPT-4 (ChatGPT) and Claude 3.5 Sonnet are currently considered state-of-the-art for complex reasoning and coding."
      }
    ],
    guide: [
      {
        title: "The Conversational AI Revolution",
        content: "AI chatbots have evolved from simple scripted bots to highly capable assistants that can write essays, debug code, and analyze data in real-time."
      },
      {
        title: "Choosing the Right Chatbot",
        content: "For coding and logic, consider Claude or ChatGPT. For search and research, Perplexity is excellent. For open-source, try Llama 3 or HuggingChat."
      }
    ],
    internalLinks: [
      { title: "ChatGPT vs Claude", href: "/compare-tools/chatgpt-vs-claude" },
      { title: "Best AI Coding Assistants", href: "/category/coding-assistants" },
    ]
  }
};

export function getCategoryTheme(slug: string): CategoryTheme {
  // Return the theme if it exists, otherwise provide a fallback generic theme
  return categoryThemes[slug] || {
    slug,
    accentColors: {
      heroGradient: "from-primary/10 to-primary/5",
      iconBg: "bg-primary/20",
      iconText: "text-primary",
      textAccent: "text-primary",
      borderAccent: "border-primary/30",
      cssVar: "124, 58, 237", // Default purple
    },
    heroHeadline: `Discover the best ${slug.replace("-", " ")} tools.`,
    heroDescription: `Explore top-rated AI solutions in the ${slug.replace("-", " ")} category to enhance your workflow.`,
    statsLabels: { listed: "Tools Listed", popular: "Most Popular" },
    emptyState: { message: "No tools found.", subMessage: "Try adjusting your filters." },
    faq: [],
    guide: [],
    internalLinks: []
  };
}
