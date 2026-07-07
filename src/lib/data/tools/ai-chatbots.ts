import type { AITool } from "@/lib/types/tool";

export const aiChatbots: AITool[] = [
    {
        id: "chatgpt",

        name: "ChatGPT",

        slug: "chatgpt",

        company: "OpenAI",

        tagline: "The world's leading AI assistant",

        description:
            "ChatGPT is a conversational AI assistant from OpenAI that helps users write, code, research, brainstorm ideas, analyze files, generate images, and automate everyday work.",

        category: "c1",

        priceModel: "Freemium",

        price: "From $0",

        rating: 4.9,

        reviewCount: 18542,

        easeOfUse: 4.9,

        featureRating: 5.0,

        valueForMoney: 4.8,

        performance: 4.9,

        support: 4.7,

        logoUrl: "/logos/chatgpt.svg",

        screenshotUrl: "/screenshots/chatgpt.webp",

        imageUrl: "/screenshots/chatgpt.webp",

        websiteUrl: "https://chatgpt.com",

        tags: [
            "AI Assistant",
            "Writing",
            "Coding",
            "Research",
            "Productivity",
        ],

        features: [
            {
                title: "GPT-5.5",
                description: "Latest flagship language model.",
                icon: "smart_toy",
            },
            {
                title: "Image Generation",
                description: "Create and edit images using AI.",
                icon: "image",
            },
            {
                title: "Deep Research",
                description: "Multi-step research with cited sources.",
                icon: "travel_explore",
            },
            {
                title: "Voice Mode",
                description: "Talk naturally with ChatGPT.",
                icon: "mic",
            },
            {
                title: "Projects",
                description: "Organize chats into reusable workspaces.",
                icon: "folder",
            },
        ],

        pricingPlans: [
            {
                name: "Free",
                price: "$0",
                description: "Great for everyday use.",
                features: [
                    "AI chat",
                    "Image generation",
                    "Web search",
                ],
            },

            {
                name: "Plus",
                price: "$20/month",
                description: "Best for individuals.",
                recommended: true,
                features: [
                    "Higher limits",
                    "Advanced models",
                    "Projects",
                    "Voice mode",
                ],
            },

            {
                name: "Pro",
                price: "$200/month",
                description: "Maximum performance and limits.",
                features: [
                    "Highest usage limits",
                    "Premium models",
                    "Advanced research",
                ],
            },
        ],

        verified: true,

        featured: true,

        popularity: 100,

        compareWith: [
            "claude",
            "gemini",
            "perplexity",
            "copy-ai"
        ],

        goals: [
            "ai-workflows",
            "business-growth",
            "vibe-coding",
            "make-money-online",
        ],

        pros: [
            "Excellent writing quality",
            "Outstanding coding assistant",
            "Strong image generation",
            "Easy to use",
            "Large ecosystem",
        ],

        cons: [
            "Free plan has usage limits",
            "Some premium features require a subscription",
        ],

        bestFor: [
            "Students",
            "Developers",
            "Content creators",
            "Businesses",
        ],

        useCases: [
            "Writing",
            "Coding",
            "Research",
            "Learning",
            "Brainstorming",
            "Image generation",
        ],

        platform: "Web, Windows, macOS, iOS, Android",

        api: true,

        mobileApp: true,

        openSource: false,

        freeTrial: true,

        socials: {
            website: "https://chatgpt.com",
        },

        stats: {
            launchYear: 2022,
        },

        lastUpdated: "2026-07-02",
        workflows: ["content-creator", "agency"],
        relatedTools: ["copy-ai", "perplexity", "capcut"],
        similarTools: ["copy-ai", "perplexity"],
        collections: ["Best AI Writing Tools", "Top Productivity Assistants"],
        recommendationTags: ["writer", "marketer", "business"],
        audiences: ["Marketers", "Writers"]
    },
    {
        id: "claude",
        name: "Claude",
        slug: "claude",
        company: "Anthropic",
        tagline: "Constitutional AI designed to be helpful, harmless, and honest",
        description: "Claude is a next-generation AI assistant built by Anthropic. Known for its advanced reasoning, coding capabilities, and large context window, Claude helps with writing, analysis, coding, and mathematical reasoning.",
        category: "c1",
        priceModel: "Freemium",
        price: "From $0",
        rating: 4.8,
        reviewCount: 14210,
        easeOfUse: 4.8,
        featureRating: 4.9,
        valueForMoney: 4.7,
        performance: 4.9,
        support: 4.6,
        logoUrl: "/logos/claude.svg",
        screenshotUrl: "/screenshots/claude.webp",
        imageUrl: "/screenshots/claude.webp",
        websiteUrl: "https://claude.ai",
        tags: ["AI Assistant", "Writing", "Coding", "Research", "Analysis"],
        features: [
            {
                title: "Claude 3.5 Sonnet",
                description: "State-of-the-art reasoning and coding.",
                icon: "smart_toy",
            },
            {
                title: "Artifacts",
                description: "View and edit generated content in real-time.",
                icon: "preview",
            },
            {
                title: "Projects",
                description: "Collaborate with Claude on files and code.",
                icon: "folder",
            },
        ],
        pricingPlans: [
            {
                name: "Free",
                price: "$0",
                description: "Access to Claude on web and mobile.",
                features: ["Basic chat", "Claude 3.5 Sonnet access"],
            },
            {
                name: "Pro",
                price: "$20/month",
                description: "For heavy users.",
                recommended: true,
                features: ["5x more usage", "Priority access", "Create projects"],
            },
        ],
        verified: true,
        featured: true,
        popularity: 95,
        compareWith: ["chatgpt", "gemini", "novelai", "quillbot"],
        goals: ["vibe-coding", "business-growth", "ai-workflows"],
        pros: ["Superior coding intelligence", "Excellent writing tone", "Large 200k context window"],
        cons: ["No built-in image generator", "Message limits on free plan can be reached quickly"],
        bestFor: ["Developers", "Writers", "Researchers"],
        useCases: ["Coding", "Technical Writing", "Data Analysis", "Research"],
        platform: "Web, iOS, Android, macOS",
        api: true,
        mobileApp: true,
        openSource: false,
        freeTrial: true,
        socials: { website: "https://claude.ai" },
        stats: { launchYear: 2023 },
        lastUpdated: "2026-07-01",
        workflows: ["content-creator", "agency"],
        relatedTools: ["novelai", "quillbot", "tome-pro"],
        similarTools: ["novelai", "quillbot"],
        collections: ["Best AI Writing Tools", "Top Productivity Assistants"],
        recommendationTags: ["writer", "marketer", "business"],
        audiences: ["Marketers", "Writers"]
    },
    {
        id: "gemini",
        name: "Gemini",
        slug: "gemini",
        company: "Google",
        tagline: "Google's most capable AI model family",
        description: "Gemini is Google's multimodal AI assistant. Built from the ground up to be multimodal, it can seamlessly generalize and understand, operate across, and combine different kinds of information including text, code, images, audio, and video.",
        category: "c1",
        priceModel: "Freemium",
        price: "From $0",
        rating: 4.7,
        reviewCount: 9850,
        easeOfUse: 4.7,
        featureRating: 4.7,
        valueForMoney: 4.8,
        performance: 4.8,
        support: 4.5,
        logoUrl: "/logos/gemini.svg",
        screenshotUrl: "/screenshots/gemini.webp",
        imageUrl: "/screenshots/gemini.webp",
        websiteUrl: "https://gemini.google.com",
        tags: ["AI Assistant", "Multimodal", "Google Workspace", "Productivity"],
        features: [
            {
                title: "Gemini 1.5 Pro",
                description: "1M+ token context window.",
                icon: "smart_toy",
            },
            {
                title: "Google Workspace Integration",
                description: "Access Gemini directly in Docs, Gmail, and Drive.",
                icon: "grid_view",
            },
        ],
        pricingPlans: [
            {
                name: "Free",
                price: "$0",
                description: "Access to standard Gemini.",
                features: ["Multimodal chat", "Google app integrations"],
            },
            {
                name: "Advanced",
                price: "$20/month",
                description: "For premium performance.",
                recommended: true,
                features: ["Gemini 1.5 Pro", "2TB Google One storage", "Integration in Workspace"],
            },
        ],
        verified: true,
        featured: false,
        popularity: 90,
        compareWith: ["chatgpt", "claude", "grok"],
        goals: ["business-growth", "make-money-online", "ai-workflows"],
        pros: ["Huge context window (up to 2M tokens)", "Great integration with Google ecosystem", "Handles video inputs natively"],
        cons: ["Coding and reasoning sometimes lags behind Claude", "Interface can occasionally feel cluttered"],
        bestFor: ["Google power users", "Students", "Researchers looking at long documents"],
        useCases: ["Long Document Analysis", "Workspace Productivity", "General Chat"],
        platform: "Web, Android, iOS",
        api: true,
        mobileApp: true,
        openSource: false,
        freeTrial: true,
        socials: { website: "https://gemini.google.com" },
        stats: { launchYear: 2023 },
        lastUpdated: "2026-07-03",
        workflows: ["content-creator", "agency"],
        relatedTools: ["grok", "chatgpt", "codium-ai"],
        similarTools: ["grok", "chatgpt"],
        collections: ["Best AI Writing Tools", "Top Productivity Assistants"],
        recommendationTags: ["writer", "marketer", "business"],
        audiences: ["Marketers", "Writers"]
    }
];