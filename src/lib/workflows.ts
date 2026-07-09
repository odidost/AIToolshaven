export type WorkflowStep = {
    role: string;
    desc: string;
    tool: string; // the primary tool
    goal: string;
    whyNow: string;
    expectedOutput: string;
    estimatedTime: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    expertTip?: string;
    commonMistake?: string;
    alternatives: string[]; // slugs or names of alternative tools
};

export type Workflow = {
    slug: string;
    title: string;
    description: string;
    icon: string;
    audience: string;
    color: string;
    tools: string[]; // kept for backward compatibility (used in WorkflowCard)
    meta: {
        outcome: string;
        time: string;
        skill: string;
        cost: string;
        toolsCount?: number;
        deliverables?: string[];
        bestFor?: { audience: string; reason: string }[];
        steps: WorkflowStep[];
    };
    whyThisOrder?: {
        explanation: string;
        impact: string;
    };
    budgetMode?: {
        tools: string[];
        description: string;
    };
    premiumMode?: {
        tools: string[];
        description: string;
    };
    faqs?: { question: string; answer: string }[];
};

export const workflows: Workflow[] = [
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
            toolsCount: 4,
            deliverables: [
                "Engaging YouTube script",
                "Studio-quality AI voiceover",
                "Edited video with captions & B-roll",
                "SEO-optimized title, description & tags"
            ],
            bestFor: [
                { audience: "Introverted Creators", reason: "Create high-quality content without being on camera." },
                { audience: "Agencies", reason: "Scale video production across multiple channels quickly." },
            ],
            steps: [
                { 
                    role: "Script & Concept Writer", 
                    desc: "Use ChatGPT to generate high-retention video scripts and outlines.",
                    tool: "ChatGPT",
                    goal: "Create a compelling narrative hook and a structured video script.",
                    whyNow: "Without a strong script, voice generation and video editing have no foundation.",
                    expectedOutput: "A formatted script with dialogue and visual cues.",
                    estimatedTime: "10 minutes",
                    difficulty: "Beginner",
                    expertTip: "Prompt ChatGPT to include 'Hook', 'Intro', 'Body', and 'Call to Action' sections clearly marked.",
                    commonMistake: "Generating a script that is too robotic. Always rewrite the intro in your own voice.",
                    alternatives: ["Claude", "Gemini"]
                },
                { 
                    role: "Voice Generator", 
                    desc: "Generate ultra-realistic human voices using ElevenLabs.",
                    tool: "ElevenLabs",
                    goal: "Turn the written script into natural-sounding audio.",
                    whyNow: "Audio sets the pacing for the video edit. You must have the voiceover before adding B-roll.",
                    expectedOutput: "An MP3 or WAV file of the spoken script.",
                    estimatedTime: "5 minutes",
                    difficulty: "Beginner",
                    expertTip: "Use the 'Stability' slider to add more emotion to the voice (lower stability = more expressive).",
                    commonMistake: "Not listening for mispronunciations. Use phonetic spelling for complex words.",
                    alternatives: ["Murf AI", "PlayHT"]
                },
                { 
                    role: "Video Editor", 
                    desc: "Compile voice clips, stock footage, and subtitles in CapCut.",
                    tool: "CapCut",
                    goal: "Assemble the final video with engaging visuals and captions.",
                    whyNow: "Now that you have the pacing (audio) and the story (script), you can visualize it.",
                    expectedOutput: "A rendered 1080p or 4K MP4 video file.",
                    estimatedTime: "20 minutes",
                    difficulty: "Intermediate",
                    expertTip: "Use CapCut's 'Auto Captions' feature and highlight keywords in different colors to boost retention.",
                    commonMistake: "Adding too many visual effects that distract from the core message.",
                    alternatives: ["Premiere Pro", "DaVinci Resolve"]
                },
                { 
                    role: "SEO Optimizer", 
                    desc: "Perform keyword research and generate tags/descriptions with TubeBuddy.",
                    tool: "TubeBuddy",
                    goal: "Ensure the video ranks well in YouTube search.",
                    whyNow: "The video is ready. Now you need the metadata to actually get views.",
                    expectedOutput: "Optimized title, description, and a list of high-ranking tags.",
                    estimatedTime: "10 minutes",
                    difficulty: "Intermediate",
                    expertTip: "Look for keywords with 'Fair' or 'Good' overall scores where search volume is high but competition is manageable.",
                    commonMistake: "Publishing the video without researching if people are actually searching for the topic.",
                    alternatives: ["VidIQ"]
                }
            ]
        },
        whyThisOrder: {
            explanation: "This workflow follows the logical progression of video production: Pre-production (Script) → Production (Audio) → Post-production (Video Edit) → Distribution (SEO).",
            impact: "Skipping straight to video editing without a solid script or voiceover will result in a disjointed video and double the editing time. Always establish the narrative foundation first."
        },
        budgetMode: {
            tools: ["ChatGPT (Free)", "TTSMaker (Free)", "CapCut Desktop (Free)", "YouTube Auto-Suggest"],
            description: "A completely free pipeline for beginners just starting their channel."
        },
        premiumMode: {
            tools: ["Claude 3.5 Sonnet", "ElevenLabs (Creator Plan)", "Premiere Pro", "VidIQ Pro"],
            description: "The professional stack for maximum retention and channel growth."
        },
        faqs: [
            {
                question: "Do I need a paid ElevenLabs account?",
                answer: "For commercial use (monetizing on YouTube), yes. However, you can test the workflow on the free tier."
            },
            {
                question: "Can I use AI generated images for B-roll?",
                answer: "Absolutely. Tools like Midjourney or Leonardo AI can generate custom visuals to use in CapCut."
            }
        ]
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
            "Runway Gen-2",
            "Canva",
        ],
        meta: {
            outcome: "High-quality, consistent images and videos of a custom digital persona.",
            time: "1-2 hours",
            skill: "Intermediate",
            cost: "$20 - $50 / month",
            toolsCount: 4,
            deliverables: [
                "Consistent AI character model",
                "Engaging social media backstory",
                "Short-form animated videos",
                "Formatted IG/TikTok posts"
            ],
            bestFor: [
                { audience: "Digital Marketers", reason: "Create brand ambassadors without hiring talent." },
                { audience: "Social Media Managers", reason: "Maintain high posting volume with a consistent face." },
            ],
            steps: [
                { 
                    role: "Character Generator", 
                    desc: "Generate consistent, high-fidelity model images in Midjourney using seed values.", 
                    tool: "Midjourney", 
                    goal: "Create a consistent and recognizable character base.", 
                    whyNow: "Visual identity must be established before you can create content or write a persona.", 
                    expectedOutput: "A master sheet of images with identical facial features.", 
                    estimatedTime: "30 minutes", 
                    difficulty: "Intermediate", 
                    expertTip: "Use the '--cref' and '--cw' parameters in Midjourney v6 to maintain character consistency.",
                    commonMistake: "Changing the prompt too much between shots, resulting in a character that looks like different people.",
                    alternatives: ["Leonardo.ai", "Stable Diffusion"] 
                },
                { 
                    role: "Persona Writer", 
                    desc: "Establish the influencer's backstory, voice, and write social posts with ChatGPT.", 
                    tool: "ChatGPT", 
                    goal: "Give the AI influencer a compelling, relatable personality.", 
                    whyNow: "Once the visual is set, you need the voice to match the aesthetic before creating final posts.", 
                    expectedOutput: "A brand guidelines document and 10 ready-to-post captions.", 
                    estimatedTime: "15 minutes", 
                    difficulty: "Beginner",
                    expertTip: "Create a custom GPT with the influencer's backstory to generate consistent captions instantly.",
                    commonMistake: "Making the personality too generic or perfect. Add flaws to make them relatable.",
                    alternatives: ["Claude 3"] 
                },
                { 
                    role: "Animator", 
                    desc: "Animate static character images into short video clips with Runway Gen-2.", 
                    tool: "Runway Gen-2", 
                    goal: "Bring the static character to life for Reels and TikTok.", 
                    whyNow: "Video content drives higher engagement, built off the static visuals you've already perfected.", 
                    expectedOutput: "3-5 second highly realistic looping videos.", 
                    estimatedTime: "30 minutes", 
                    difficulty: "Intermediate",
                    expertTip: "Use the 'Motion Brush' tool to only animate specific parts of the image, like hair or clothing.",
                    commonMistake: "Pushing the motion slider too high, causing the face to distort or 'melt'.",
                    alternatives: ["Luma AI", "Pika"] 
                },
                { 
                    role: "Layout Designer", 
                    desc: "Format final images and stories for Instagram/TikTok with Canva.", 
                    tool: "Canva", 
                    goal: "Create polished, native-looking social media assets.", 
                    whyNow: "The raw assets need to be combined with typography and branding before publishing.", 
                    expectedOutput: "A week's worth of scheduled visual content.", 
                    estimatedTime: "15 minutes", 
                    difficulty: "Beginner",
                    expertTip: "Use Canva's Bulk Create feature with a CSV of your ChatGPT captions to generate 30 posts in 5 minutes.",
                    commonMistake: "Using mismatched fonts and colors across different posts.",
                    alternatives: ["Figma"] 
                }
            ]
        },
        whyThisOrder: {
            explanation: "Visual consistency (Midjourney) is the hardest part and dictates the persona (ChatGPT). Movement (Runway) and formatting (Canva) rely entirely on those foundational assets.",
            impact: "Writing captions before finalizing the character's look often results in a mismatch between tone and aesthetic."
        },
        budgetMode: {
            tools: ["Leonardo.ai (Free)", "ChatGPT (Free)", "Luma AI (Free tier)", "Canva (Free)"],
            description: "A zero-cost setup utilizing daily free credits to build the persona slowly."
        },
        premiumMode: {
            tools: ["Midjourney Pro", "Claude 3.5 Sonnet", "Runway Unlimited", "Canva Pro"],
            description: "Uncapped generation capabilities for running multiple influencer accounts."
        },
        faqs: [
            {
                question: "Do I have to disclose it's an AI influencer?",
                answer: "Yes, many platforms (like TikTok and Meta) now require AI-generated content labels to prevent user deception."
            },
            {
                question: "How hard is it to keep the face consistent?",
                answer: "Much easier now than a year ago! Midjourney's Character Reference (--cref) parameter makes it extremely reliable."
            }
        ]
    },
    {
        slug: "vibe-coding",
        title: "Vibe Coding",
        description: "Build apps faster using AI coding assistants.",
        icon: "code",
        audience: "Developers",
        color: "cyan",
        tools: [
            "Claude 3",
            "Cursor",
            "GitHub Copilot",
            "v0 by Vercel",
        ],
        meta: {
            outcome: "A fully functional web application deployed live on a public URL.",
            time: "2-4 hours",
            skill: "Intermediate",
            cost: "Mostly Free",
            toolsCount: 4,
            deliverables: [
                "Application architecture plan",
                "Fully functioning source code",
                "Modern UI/UX components",
                "Live production URL"
            ],
            bestFor: [
                { audience: "Indie Hackers", reason: "Build and launch MVPs in days instead of months." },
                { audience: "Product Managers", reason: "Prototype functional features without waiting on engineering." },
            ],
            steps: [
                { 
                    role: "AI Assistant", 
                    desc: "Design application architecture and define data models using Claude 3.", 
                    tool: "Claude 3", 
                    goal: "Establish a clear, step-by-step technical plan before writing code.", 
                    whyNow: "Jumping into code without an architecture plan leads to spaghetti code when using AI.", 
                    expectedOutput: "A comprehensive markdown file outlining the stack, schema, and API routes.", 
                    estimatedTime: "30 minutes", 
                    difficulty: "Intermediate",
                    expertTip: "Paste your existing package.json or schema into Claude and ask it to write the spec based on your current constraints.",
                    commonMistake: "Skipping the planning phase and asking the IDE to 'build the whole app' at once.",
                    alternatives: ["ChatGPT", "Perplexity AI"] 
                },
                { 
                    role: "UI Generator", 
                    desc: "Generate beautiful, responsive React components instantly with v0 by Vercel.", 
                    tool: "v0 by Vercel", 
                    goal: "Rapidly build the frontend layout and design system.", 
                    whyNow: "Having the visual structure in place makes wiring up the logic much easier.", 
                    expectedOutput: "Copy-pasteable React/Tailwind code blocks.", 
                    estimatedTime: "30 minutes", 
                    difficulty: "Beginner",
                    expertTip: "Upload a screenshot of an interface you like; v0 can recreate it with near-perfect accuracy.",
                    commonMistake: "Trying to generate complex business logic in v0 instead of sticking to UI.",
                    alternatives: ["Bolt.new", "Lovable"] 
                },
                { 
                    role: "Core Code Editor", 
                    desc: "Iterate, wire up logic, and debug using chat/agent modes in Cursor.", 
                    tool: "Cursor", 
                    goal: "Connect the frontend to the backend and resolve complex logic issues.", 
                    whyNow: "Once the plan and UI exist, Cursor is the best environment to execute the heavy lifting.", 
                    expectedOutput: "A working, bug-free codebase on your local machine.", 
                    estimatedTime: "2 hours", 
                    difficulty: "Advanced",
                    expertTip: "Use the '@Codebase' feature in Cursor to give the AI context of your entire project directory.",
                    commonMistake: "Not committing to Git frequently. AI can make sweeping changes you might want to revert.",
                    alternatives: ["Windsurf", "Codeium"] 
                },
                { 
                    role: "Autocomplete", 
                    desc: "Accept inline code suggestions as you tweak details with GitHub Copilot.", 
                    tool: "GitHub Copilot", 
                    goal: "Speed up manual typing and boilerplate generation.", 
                    whyNow: "Used concurrently with Cursor for micro-edits while Cursor handles macro-edits.", 
                    expectedOutput: "Faster typing and fewer syntax errors.", 
                    estimatedTime: "Ongoing", 
                    difficulty: "Beginner",
                    expertTip: "Write a descriptive comment (e.g., '// function to parse JWT token') and wait a second for Copilot to write it for you.",
                    commonMistake: "Blindly hitting 'Tab' without reading the suggested code.",
                    alternatives: ["Supermaven", "Tabnine"] 
                }
            ]
        },
        whyThisOrder: {
            explanation: "Planning (Claude) → Scaffolding (v0) → Execution (Cursor) → Refinement (Copilot).",
            impact: "Executing without a plan wastes token context windows and results in AI hallucinations."
        },
        budgetMode: {
            tools: ["Claude 3 (Sonnet free tier)", "Cursor (Free)", "v0 by Vercel (Free)"],
            description: "A highly capable setup that leverages the free tiers of the best tools."
        },
        premiumMode: {
            tools: ["Claude 3.5 Sonnet (Pro)", "Cursor Pro", "GitHub Copilot", "v0 Premium"],
            description: "The ultimate 10x developer stack with maximum context windows and speed."
        },
        faqs: [
            {
                question: "Do I need to know how to code?",
                answer: "You need a basic understanding of logic, terminal commands, and how web apps work, but you don't need to memorize syntax anymore."
            },
            {
                question: "Why use Cursor instead of VS Code?",
                answer: "Cursor is a fork of VS Code built specifically for AI, offering features like multi-file edits and codebase-wide context that standard extensions can't match."
            }
        ]
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
            outcome: "A week's worth of optimized social media posts and short-form video clips scheduled.",
            time: "1 hour",
            skill: "Beginner",
            cost: "Free - $20 / month",
            toolsCount: 4,
            deliverables: [
                "Content calendar & scripts",
                "High-converting thumbnail graphics",
                "10+ viral short-form clips",
                "Automated posting schedule"
            ],
            bestFor: [
                { audience: "YouTubers", reason: "Repurpose long-form videos into dozens of Shorts/Reels." },
                { audience: "Small Businesses", reason: "Maintain an active social presence with minimal weekly effort." },
            ],
            steps: [
                { 
                    role: "Ideation & Copywriting", 
                    desc: "Brainstorm copy, hooks, and captions for multiple platforms with ChatGPT.", 
                    tool: "ChatGPT", 
                    goal: "Generate a week of engaging text content rapidly.", 
                    whyNow: "Content needs a message. Starting with copy ensures all visuals align with the core idea.", 
                    expectedOutput: "A document with 7 distinct post ideas and accompanying captions.", 
                    estimatedTime: "15 minutes", 
                    difficulty: "Beginner",
                    expertTip: "Feed ChatGPT your top performing past posts and ask it to extract the framework to write new ones.",
                    commonMistake: "Using overly formal, AI-sounding language. Prompt it to use 'conversational, punchy language'.",
                    alternatives: ["Claude 3", "Jasper"] 
                },
                { 
                    role: "Visual Graphics", 
                    desc: "Design premium posts, carousels, banners, and thumbnails with Canva.", 
                    tool: "Canva", 
                    goal: "Create eye-catching visuals to stop the scroll.", 
                    whyNow: "Visuals are required to accompany the copy you just generated.", 
                    expectedOutput: "Exported PNG/JPG graphics sized for specific platforms.", 
                    estimatedTime: "30 minutes", 
                    difficulty: "Beginner",
                    expertTip: "Use the 'Magic Switch' tool to instantly resize an Instagram square post into a Pinterest Pin or Story.",
                    commonMistake: "Cluttering the design. Keep text on images under 20% of the total area.",
                    alternatives: ["Figma"] 
                },
                { 
                    role: "Shorts Extractor", 
                    desc: "Convert long-form podcasts or videos into viral short clips using Opus Clip.", 
                    tool: "Opus Clip", 
                    goal: "Maximize the ROI of existing video content.", 
                    whyNow: "Short-form video is currently the highest-reach format across all platforms.", 
                    expectedOutput: "Multiple vertical videos with burned-in dynamic captions.", 
                    estimatedTime: "10 minutes", 
                    difficulty: "Beginner",
                    expertTip: "Review the AI-selected hooks; you can manually edit the start/stop times if the AI missed the punchline.",
                    commonMistake: "Publishing clips without checking if the auto-captions spelled names correctly.",
                    alternatives: ["Munch", "Submagic"] 
                },
                { 
                    role: "Scheduling & Analytics", 
                    desc: "Automate delivery and organize your posting queue using Buffer.", 
                    tool: "Buffer", 
                    goal: "Ensure consistent posting without daily manual effort.", 
                    whyNow: "The final step: distributing the assets you've created.", 
                    expectedOutput: "A fully populated content calendar set to auto-publish.", 
                    estimatedTime: "5 minutes", 
                    difficulty: "Beginner",
                    expertTip: "Schedule your posts for when your specific audience is most active, not just general 'best times'.",
                    commonMistake: "Forgetting to tag relevant accounts or include a link in bio.",
                    alternatives: ["Hootsuite", "Later"] 
                }
            ]
        },
        whyThisOrder: {
            explanation: "Text/Strategy (ChatGPT) → Static Visuals (Canva) → Dynamic Assets (Opus Clip) → Distribution (Buffer).",
            impact: "Trying to design visuals before writing copy leads to endless revisions because the text never fits the layout."
        },
        budgetMode: {
            tools: ["ChatGPT (Free)", "Canva (Free)", "Opus Clip (Free Trial)", "Buffer (Free Tier)"],
            description: "Perfect for new creators managing 3 or fewer social channels."
        },
        premiumMode: {
            tools: ["ChatGPT Plus", "Canva Pro", "Opus Clip Pro", "Buffer Essentials"],
            description: "Unlocks brand kits, premium templates, and advanced analytics."
        },
        faqs: [
            {
                question: "Can I use this for a Faceless channel?",
                answer: "Yes, you can swap Opus Clip for a text-to-video generator if you don't have existing long-form content."
            },
            {
                question: "Does scheduling hurt reach?",
                answer: "No, platforms officially support scheduling via API. Content quality matters far more than how it was published."
            }
        ]
    },
    {
        slug: "agency",
        title: "Agency",
        description: "Run your client business with AI.",
        icon: "business_center",
        audience: "Agencies",
        color: "emerald",
        tools: [
            "Notion AI",
            "ChatGPT",
            "Zapier Central",
            "ClickUp",
        ],
        meta: {
            outcome: "Automated onboarding, tracking pipelines, and highly organized client project spaces.",
            time: "3-5 hours",
            skill: "Advanced",
            cost: "$30 - $80 / month",
            toolsCount: 4,
            deliverables: [
                "Automated client onboarding flow",
                "AI-powered proposal generator",
                "Centralized CRM and knowledge base",
                "Integrated task management"
            ],
            bestFor: [
                { audience: "Creative Agencies", reason: "Streamline operations to focus more on billable creative work." },
                { audience: "Consultants", reason: "Provide a highly professional, white-glove client experience automatically." },
            ],
            steps: [
                { 
                    role: "Central Hub", 
                    desc: "Create CRM templates, SOP documentation, and client portals in Notion AI.", 
                    tool: "Notion AI", 
                    goal: "Establish a single source of truth for your business operations.", 
                    whyNow: "You need a foundational database before you can automate anything.", 
                    expectedOutput: "A structured workspace with linked databases for clients, projects, and tasks.", 
                    estimatedTime: "1.5 hours", 
                    difficulty: "Intermediate",
                    expertTip: "Use Notion AI to automatically summarize meeting notes and extract action items directly into your CRM.",
                    commonMistake: "Overcomplicating the databases early on. Start simple and add properties as needed.",
                    alternatives: ["Coda", "Airtable"] 
                },
                { 
                    role: "AI Coordinator", 
                    desc: "Generate proposals, draft emails, and handle client communication using ChatGPT.", 
                    tool: "ChatGPT", 
                    goal: "Reduce the time spent on administrative writing and repetitive client comms.", 
                    whyNow: "Once the CRM is set, you need the intelligence to process the data and communicate.", 
                    expectedOutput: "Templates and drafted documents ready for review.", 
                    estimatedTime: "30 minutes", 
                    difficulty: "Beginner",
                    expertTip: "Create a 'Custom Instruction' detailing your agency's tone, services, and pricing so ChatGPT always has context.",
                    commonMistake: "Sending AI-generated emails without proofreading—clients can tell when it lacks a human touch.",
                    alternatives: ["Claude 3", "Jasper"] 
                },
                { 
                    role: "Integration Pipeline", 
                    desc: "Bridge apps together and trigger actions automatically with Zapier Central.", 
                    tool: "Zapier Central", 
                    goal: "Eliminate manual data entry across different platforms.", 
                    whyNow: "Automation acts as the glue connecting your CRM, comms, and task manager.", 
                    expectedOutput: "Active Zaps (e.g., 'When Typeform submitted, create Notion page & alert Slack').", 
                    estimatedTime: "2 hours", 
                    difficulty: "Advanced",
                    expertTip: "Use Zapier's built-in AI formatter to clean up messy client data before pushing it into your CRM.",
                    commonMistake: "Creating infinite loops by having two Zaps trigger each other.",
                    alternatives: ["Make"] 
                },
                { 
                    role: "Task Manager", 
                    desc: "Manage client sprint progress, milestones, and daily issues with ClickUp.", 
                    tool: "ClickUp", 
                    goal: "Execute the actual project work efficiently.", 
                    whyNow: "The final step is where the work gets done, fed automatically by your integrations.", 
                    expectedOutput: "A customized project hierarchy with automated status updates.", 
                    estimatedTime: "1 hour", 
                    difficulty: "Intermediate",
                    expertTip: "ClickUp has built-in AI (ClickUp Brain) that can instantly answer questions about project status without needing to ask the team.",
                    commonMistake: "Creating too many sub-tasks, making the system overwhelming for the team to use.",
                    alternatives: ["Asana", "Monday.com"] 
                }
            ]
        },
        whyThisOrder: {
            explanation: "Foundation (Notion) → Intelligence (ChatGPT) → Connection (Zapier) → Execution (ClickUp).",
            impact: "Building automations before establishing your core CRM schema will result in broken workflows."
        },
        budgetMode: {
            tools: ["Notion (Free)", "ChatGPT (Free)", "Make (Free tier)", "ClickUp (Free tier)"],
            description: "Robust enough to handle your first 5-10 clients at near-zero cost."
        },
        premiumMode: {
            tools: ["Notion Plus + AI", "ChatGPT Plus", "Zapier Professional", "ClickUp Business"],
            description: "Enterprise-grade automation with unlimited logic paths and custom branding."
        },
        faqs: [
            {
                question: "Should I use Make instead of Zapier?",
                answer: "Make is significantly cheaper and more visual, but Zapier integrates with more obscure tools out-of-the-box."
            },
            {
                question: "Is client data secure in these AI tools?",
                answer: "Always review Enterprise agreements. For high-security clients, ensure you opt-out of data training in ChatGPT and Notion."
            }
        ]
    },
    {
        slug: "solopreneur",
        title: "Solopreneur",
        description: "Launch and grow an online business with AI.",
        icon: "rocket_launch",
        audience: "Entrepreneurs",
        color: "amber",
        tools: [
            "Claude 3",
            "Canva",
            "Framer",
            "Stripe",
        ],
        meta: {
            outcome: "A professional landing page with live payment integration, ready to accept customers.",
            time: "2-3 hours",
            skill: "Intermediate",
            cost: "$29 - $99 / month",
            toolsCount: 4,
            deliverables: [
                "Persuasive copywriting and value props",
                "Custom logos and brand assets",
                "High-converting landing page",
                "Secure checkout flow"
            ],
            bestFor: [
                { audience: "Course Creators", reason: "Quickly spin up sales pages for new info-products." },
                { audience: "SaaS Founders", reason: "Validate an idea and collect pre-orders before building the product." },
            ],
            steps: [
                { 
                    role: "Strategist", 
                    desc: "Refine landing page structure, value props, and copywriting with Claude 3.", 
                    tool: "Claude 3", 
                    goal: "Craft a compelling narrative that converts visitors into buyers.", 
                    whyNow: "Design should follow copy. Writing the text first ensures the design accommodates the message.", 
                    expectedOutput: "A complete wireframe document with H1s, sub-headlines, and CTA text.", 
                    estimatedTime: "30 minutes", 
                    difficulty: "Intermediate",
                    expertTip: "Claude 3 is exceptional at nuanced tone. Ask it to write using the 'Problem-Agitation-Solution' (PAS) framework.",
                    commonMistake: "Focusing on features instead of benefits in the hero section.",
                    alternatives: ["ChatGPT", "Copy.ai"] 
                },
                { 
                    role: "Brand & Ad Assets", 
                    desc: "Design marketing banners, logos, and product mockups in Canva.", 
                    tool: "Canva", 
                    goal: "Give the business a polished, trustworthy visual identity.", 
                    whyNow: "You need visual assets ready to drop into the website builder.", 
                    expectedOutput: "A logo, color palette, and 3-4 supporting graphics.", 
                    estimatedTime: "45 minutes", 
                    difficulty: "Beginner",
                    expertTip: "Use Canva's Brand Hub to store your colors and fonts so you can instantly apply them to any template.",
                    commonMistake: "Spending hours perfecting a logo for an unvalidated business idea.",
                    alternatives: ["Figma", "Midjourney"] 
                },
                { 
                    role: "Website Builder", 
                    desc: "Build a highly responsive, beautiful website in Framer.", 
                    tool: "Framer", 
                    goal: "Publish a lightning-fast landing page without writing code.", 
                    whyNow: "Combines the copy and visuals into the final public-facing product.", 
                    expectedOutput: "A live website on a custom domain.", 
                    estimatedTime: "1 hour", 
                    difficulty: "Intermediate",
                    expertTip: "Framer has an AI generation tool—type in a prompt and it will generate a baseline layout you can then tweak.",
                    commonMistake: "Forgetting to optimize the mobile layout. Over 60% of traffic will likely be mobile.",
                    alternatives: ["Webflow", "v0 by Vercel"] 
                },
                { 
                    role: "Checkout & Payments", 
                    desc: "Configure secure online payment processing and subscriptions with Stripe.", 
                    tool: "Stripe", 
                    goal: "Monetize the traffic and handle transactions seamlessly.", 
                    whyNow: "The final step to actually turn the project into a business.", 
                    expectedOutput: "Payment links or a checkout portal integrated into Framer buttons.", 
                    estimatedTime: "15 minutes", 
                    difficulty: "Beginner",
                    expertTip: "Use Stripe Payment Links. You don't need a complex integration; just link a Framer button to the Stripe URL.",
                    commonMistake: "Not setting up proper tax collection settings before launching.",
                    alternatives: ["Lemon Squeezy", "Gumroad"] 
                }
            ]
        },
        whyThisOrder: {
            explanation: "Copywriting (Claude) → Branding (Canva) → Web Design (Framer) → Monetization (Stripe).",
            impact: "Designing a site before writing the copy results in broken layouts and awkward text wrapping."
        },
        budgetMode: {
            tools: ["Claude 3 (Free)", "Canva (Free)", "Framer (Free tier domain)", "Stripe (Pay per transaction)"],
            description: "Launch an MVP for absolutely $0 upfront cost."
        },
        premiumMode: {
            tools: ["Claude 3.5 Sonnet", "Canva Pro", "Framer Mini/Basic Plan", "Custom Domain"],
            description: "The professional standard to build trust and scale effectively."
        },
        faqs: [
            {
                question: "Do I need an LLC to use Stripe?",
                answer: "No, you can start as a Sole Proprietor in most countries, though forming an LLC is recommended later for liability protection."
            },
            {
                question: "Is Framer better than Webflow?",
                answer: "Framer is generally faster to learn for designers (similar to Figma) and excellent for landing pages, while Webflow is better for complex CMS sites."
            }
        ]
    },
];