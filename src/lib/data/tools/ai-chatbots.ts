import type { AITool } from "@/lib/types/tool";

export const aiChatbots: AITool[] = [
    {
        id: "chatgpt",

        name: "ChatGPT",

        slug: "chatgpt",

        company: "OpenAI",

        tagline: "The undisputed industry standard for generative AI",

        description:
            "ChatGPT is the flagship AI assistant from OpenAI. It remains our top overall pick for its unmatched versatility, serving as a reliable partner for everything from drafting complex Python scripts to summarizing dense market research.",

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

        promptExamples: [
            {
                name: "Write a blog post",
                prompt: "Write a short blog post about the benefits of AI in education.",
                response: "Artificial Intelligence is transforming education by offering personalized learning experiences, automating administrative tasks for teachers, and providing 24/7 tutoring. With AI-driven tools, students can learn at their own pace while educators focus on fostering critical thinking and creativity."
            },
            {
                name: "Write a Python script",
                prompt: "Write a Python script to fetch the current weather for a city using an API.",
                response: "```python\nimport requests\n\ndef get_weather(city, api_key):\n    url = f\"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric\"\n    response = requests.get(url)\n    if response.status_code == 200:\n        data = response.json()\n        print(f\"Weather in {city}: {data['weather'][0]['description']}, Temperature: {data['main']['temp']}°C\")\n    else:\n        print(\"City not found.\")\n```"
            }
        ],

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
        audiences: ["Marketers", "Writers"],
        editorial: {
            overview: "<p>ChatGPT remains the undisputed heavyweight champion of AI chatbots. While competitors have caught up in specific niches, ChatGPT's sheer breadth of capabilities—from running Python code locally to generating images to browsing the live web—makes it the most versatile tool on the market.</p><p><strong class='text-on-surface'>Where it stands out:</strong> Custom GPTs. The ability to upload your own knowledge base and instruct the AI to behave in a specific way allows you to create highly specialized workflows that you can save and reuse indefinitely.</p>",
            verdict: "<p>If you are only going to pay for one AI subscription, ChatGPT Plus is the safest and most comprehensive choice. It is the Swiss Army knife of generative AI.</p>",
            pricing: "<p>The free tier is perfectly adequate for casual queries. The $20/month Plus tier is arguably the best value software subscription in the world right now, granting access to the latest flagship models.</p>",
            comparison: "<p>Claude is widely considered a better, more natural writer, and Gemini integrates better with Google Docs, but ChatGPT's coding, reasoning, and Custom GPTs keep it in the top spot overall.</p>",
            useCaseFocus: "<p>Founders use ChatGPT to rapidly prototype code, summarize long PDF market reports, and draft foundational business documents all within a single chat interface.</p>"
        }
    },
    {
        id: "claude",
        name: "Claude",
        slug: "claude",
        company: "Anthropic",
        tagline: "The premier AI assistant for nuanced writing and complex coding",
        description: "Anthropic's flagship assistant has quietly dethroned ChatGPT for pure writing tasks. Claude shines in long-form content generation and complex coding challenges, offering an incredibly natural conversational tone that rarely feels machine-generated.",
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
        promptExamples: [
            {
                name: "Write a blog post",
                prompt: "Write a short blog post about the benefits of AI in education.",
                response: "The integration of AI in education marks a paradigm shift from a one-size-fits-all approach to highly tailored learning journeys. Intelligent tutoring systems adapt to individual student needs, identifying gaps in knowledge and providing targeted support. This not only improves student outcomes but empowers educators to dedicate more time to mentorship."
            },
            {
                name: "Write a Python script",
                prompt: "Write a Python script to fetch the current weather for a city using an API.",
                response: "```python\nimport requests\nimport sys\n\ndef fetch_weather(city_name, api_key):\n    base_url = \"http://api.openweathermap.org/data/2.5/weather\"\n    params = {\"q\": city_name, \"appid\": api_key, \"units\": \"metric\"}\n    \n    try:\n        response = requests.get(base_url, params=params)\n        response.raise_for_status()\n        data = response.json()\n        \n        temp = data[\"main\"][\"temp\"]\n        desc = data[\"weather\"][0][\"description\"]\n        print(f\"The weather in {city_name} is currently {desc} with a temperature of {temp}°C.\")\n        \n    except requests.exceptions.RequestException as e:\n        print(f\"Error fetching weather data: {e}\", file=sys.stderr)\n```"
            }
        ],
        socials: { website: "https://claude.ai" },
        stats: { launchYear: 2023 },
        lastUpdated: "2026-07-01",
        workflows: ["content-creator", "agency"],
        relatedTools: ["novelai", "quillbot", "tome-pro"],
        similarTools: ["novelai", "quillbot"],
        collections: ["Best AI Writing Tools", "Top Productivity Assistants"],
        recommendationTags: ["writer", "marketer", "business"],
        audiences: ["Marketers", "Writers"],
        editorial: {
            overview: "<p>Claude 3.5 Sonnet has quietly become the preferred tool for power users, developers, and professional writers. It lacks the bells and whistles of ChatGPT (like image generation) but makes up for it with vastly superior reasoning and a much more natural, less 'AI-sounding' writing style.</p><p><strong class='text-on-surface'>Where it stands out:</strong> Artifacts. Claude doesn't just output code or text in a chat bubble; it opens a side panel where you can instantly preview the website it just coded or the SVG graphic it just generated.</p>",
            verdict: "<p>For coding and nuanced writing, Claude is currently the best model available. It feels less like a chatbot and more like a highly competent, intelligent collaborator.</p>",
            pricing: "<p>The $20/month Pro tier is necessary if you use it daily, as the free tier imposes strict message limits very quickly on the Sonnet model.</p>",
            comparison: "<p>Compared to ChatGPT, Claude's writing requires far less editing to sound human. It is also significantly better at understanding and analyzing massive documents thanks to its huge context window.</p>",
            useCaseFocus: "<p>Senior software engineers use Claude 3.5 Sonnet to refactor complex legacy codebases and instantly prototype interactive web components using the Artifacts UI.</p>"
        }
    },
    {
        id: "gemini",
        name: "Gemini",
        slug: "gemini",
        company: "Google",
        tagline: "The most deeply integrated AI for Google Workspace power users",
        description: "Gemini is Google's massive, multimodal response to OpenAI. Built from the ground up to analyze text, video, and audio simultaneously, it excels at processing massive datasets and integrates flawlessly with Docs, Drive, and Gmail.",
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
        audiences: ["Marketers", "Writers"],
        editorial: {
            overview: "<p>Gemini is Google's massive, multimodal response to OpenAI. It is deeply integrated into the Google ecosystem, making it the default choice for anyone living inside Google Docs, Drive, and Gmail.</p><p><strong class='text-on-surface'>Where it stands out:</strong> The massive 1M+ token context window. You can upload entire books, hour-long video files, or massive code repositories, and Gemini will analyze the entire thing at once without losing context.</p>",
            verdict: "<p>If you are a heavy Google Workspace user or need to analyze extremely large datasets (like 50-page PDFs or hour-long videos), Gemini Advanced is incredibly powerful.</p>",
            pricing: "<p>The $20/month Advanced tier is bundled with 2TB of Google One cloud storage, making it the most cost-effective AI subscription if you already pay for Google Drive space.</p>",
            comparison: "<p>Its writing and coding capabilities occasionally fall slightly behind Claude and ChatGPT, but its native ability to watch and understand uploaded video files is entirely unique.</p>",
            useCaseFocus: "<p>Researchers and analysts use Gemini's massive context window to upload dozens of dense financial reports at once and ask comparative questions across all the documents simultaneously.</p>"
        }
    }
];