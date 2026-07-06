export const workflows = [
    {
        slug: "faceless-youtube",
        title: "Faceless YouTube",
        description: "Create YouTube videos without showing your face.",
        icon: "smart_display",
        audience: "Content Creators",
        color: "red",
        tools: [
            "ChatGPT",
            "ElevenLabs",
            "CapCut",
            "TubeBuddy",
        ],
        meta: {
            outcome: "A fully finished, voice-guided YouTube video ready for upload.",
            time: "30-45 minutes",
            skill: "Beginner",
            cost: "Free (with paid upgrades)",
            steps: [
                { role: "Script & Concept Writer", desc: "Use ChatGPT to generate high-retention video scripts and outlines." },
                { role: "Voice Generator", desc: "Generate ultra-realistic human voices using ElevenLabs." },
                { role: "Video Editor", desc: "Compile voice clips, stock footage, and subtitles in CapCut." },
                { role: "SEO Optimizer", desc: "Perform keyword research and generate tags/descriptions with TubeBuddy." }
            ]
        }
    },
    {
        slug: "ai-influencer",
        title: "AI Influencer",
        description: "Create realistic AI influencers for social media.",
        icon: "photo_camera_front",
        audience: "Creators",
        color: "pink",
        tools: [
            "Midjourney",
            "ChatGPT",
            "Runway",
            "Canva",
        ],
        meta: {
            outcome: "High-quality, consistent images and videos of a custom digital persona.",
            time: "1-2 hours",
            skill: "Intermediate",
            cost: "$20 - $50 / month",
            steps: [
                { role: "Character Generator", desc: "Generate consistent, high-fidelity model images in Midjourney." },
                { role: "Persona Writer", desc: "Establish the influencer's backstory and write social posts with ChatGPT." },
                { role: "Animator", desc: "Animate character images into short video clips with Runway." },
                { role: "Layout Designer", desc: "Format final images and stories for Instagram/TikTok with Canva." }
            ]
        }
    },
    {
        slug: "vibe-coding",
        title: "Vibe Coding",
        description: "Build apps faster using AI coding assistants.",
        icon: "code",
        audience: "Developers",
        color: "cyan",
        tools: [
            "Claude",
            "Cursor",
            "GitHub Copilot",
            "Vercel",
        ],
        meta: {
            outcome: "A fully functional web application deployed live on a public URL.",
            time: "2-4 hours",
            skill: "Intermediate",
            cost: "Mostly Free",
            steps: [
                { role: "AI Assistant", desc: "Design application architecture and explore APIs using Claude." },
                { role: "Core Code Editor", desc: "Iterate and write code using chat/agent modes in Cursor." },
                { role: "Autocomplete", desc: "Accept inline code suggestions as you write with GitHub Copilot." },
                { role: "Hosting & Deployment", desc: "Deploy your code immediately to a production-ready cloud via Vercel." }
            ]
        }
    },
    {
        slug: "content-creator",
        title: "Content Creator",
        description: "Plan, design and publish content faster.",
        icon: "edit_note",
        audience: "Creators",
        color: "violet",
        tools: [
            "ChatGPT",
            "Canva",
            "Opus Clip",
            "Buffer",
        ],
        meta: {
            outcome: "A week's worth of optimized social media posts and clips scheduled.",
            time: "1 hour",
            skill: "Beginner",
            cost: "Free - $20 / month",
            steps: [
                { role: "Ideation & Copywriting", desc: "Brainstorm copy and captions for multiple platforms with ChatGPT." },
                { role: "Visual Graphics", desc: "Design premium posts, banners, and thumbnails with Canva." },
                { role: "Shorts Extractor", desc: "Convert long-form videos into viral short clips using Opus Clip." },
                { role: "Scheduling & Analytics", desc: "Automate delivery and posting queue using Buffer." }
            ]
        }
    },
    {
        slug: "agency",
        title: "Agency",
        description: "Run your client business with AI.",
        icon: "business_center",
        audience: "Agencies",
        color: "emerald",
        tools: [
            "Notion",
            "ChatGPT",
            "Zapier",
            "ClickUp",
        ],
        meta: {
            outcome: "Automated onboarding, tracking pipelines, and client project spaces.",
            time: "3-5 hours",
            skill: "Advanced",
            cost: "$30 - $80 / month",
            steps: [
                { role: "Central Hub", desc: "Create CRM templates, documentation, and task boards in Notion." },
                { role: "AI Coordinator", desc: "Generate proposals, drafts, and responses using ChatGPT." },
                { role: "Integration Pipeline", desc: "Bridge apps together and trigger actions automatically with Zapier." },
                { role: "Task Manager", desc: "Manage client sprint progress, milestones, and issues with ClickUp." }
            ]
        }
    },
    {
        slug: "solopreneur",
        title: "Solopreneur",
        description: "Launch and grow an online business with AI.",
        icon: "rocket_launch",
        audience: "Entrepreneurs",
        color: "amber",
        tools: [
            "Claude",
            "Canva",
            "Framer",
            "Stripe",
        ],
        meta: {
            outcome: "A professional landing page with live payment integration.",
            time: "2-3 hours",
            skill: "Intermediate",
            cost: "$29 - $99 / month",
            steps: [
                { role: "Strategist", desc: "Refine landing page structure and value props with Claude." },
                { role: "Brand & Ad Assets", desc: "Design marketing banners, logos, and post graphics in Canva." },
                { role: "Website Builder", desc: "Build a highly responsive, beautiful website in Framer." },
                { role: "Checkout & Payments", desc: "Configure secure online payment processing with Stripe." }
            ]
        }
    },
];