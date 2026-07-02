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
    },
];