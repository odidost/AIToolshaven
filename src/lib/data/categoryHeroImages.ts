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
  "ai-humanizers-bypass": {
    imageSrc: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    alt: "Author hand-editing text to transform robotic phrasing into natural, fluent human prose",
    creatorTagline: "Humanizing AI Text & Bypassing Detectors"
  },
  "ai-youtube-video-scripts": {
    imageSrc: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=900&q=80",
    alt: "Video creator and YouTuber planning retention hooks and video scripts in production studio",
    creatorTagline: "YouTube Video Scriptwriting & Viral Hooks"
  },
  "ai-grant-proposal-writers": {
    imageSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",
    alt: "Grant consultant and proposal manager evaluating funding criteria and project scope",
    creatorTagline: "Grant Writing & Funding Proposals"
  },
  "ai-novel-fiction-writers": {
    imageSrc: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80",
    alt: "Fiction novelist crafting story arcs, dialogue drafts, and character worldbuilding",
    creatorTagline: "Novel Plotting & Creative Fiction"
  },
  "ai-academic-essay-polishers": {
    imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
    alt: "University student and academic researcher refining scholarly thesis citations and essays",
    creatorTagline: "Academic Essay Polishing & Citations"
  },

  // 2. AI Image & Visual Generators
  "ai-image-generators": {
    imageSrc: "/images/categories/image-design-creator.jpg",
    alt: "Digital artist and visual designer sketching creative concepts on tablet",
    creatorTagline: "Visual Art & Design in Action"
  },
  "ai-product-photography": {
    imageSrc: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    alt: "Commercial product photographer staging luxury goods with studio lighting and pedestal shadows",
    creatorTagline: "Commercial Product Staging & E-Commerce Photos"
  },
  "ai-headshot-generators": {
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    alt: "Studio portrait photographer capturing crisp professional corporate executive headshots",
    creatorTagline: "Executive Headshots & Studio Portraiture"
  },
  "logo-generators": {
    imageSrc: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    alt: "Brand identity designer drafting custom logos and graphic marks",
    creatorTagline: "Brand Identity & Logo Design"
  },
  "ai-vector-svg-generators": {
    imageSrc: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
    alt: "Digital illustrator manipulating bezier curves and vector anchor points on graphic workstation",
    creatorTagline: "Vector SVG Graphics & Scalable Illustration"
  },
  "ai-image-upscalers": {
    imageSrc: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
    alt: "High-resolution camera optics enhancing fine textures, sharp edges, and super-resolution details",
    creatorTagline: "Super-Resolution Upscaling & Photo Clarity"
  },

  // 3. AI Video Generators
  "ai-video-generators": {
    imageSrc: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    alt: "Film director and video editor producing cinematic footage in editing suite",
    creatorTagline: "Cinematic Video Production"
  },
  "ai-shorts-repurposing": {
    imageSrc: "https://images.unsplash.com/photo-1540655037529-dec987208707?auto=format&fit=crop&w=900&q=80",
    alt: "Video editor repurposing long-form footage into viral short-form clips on multi-monitor workstation",
    creatorTagline: "Viral Shorts & Reels Video Repurposing"
  },
  "ai-faceless-video-makers": {
    imageSrc: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
    alt: "Cinematic b-roll footage and archival film frames assembled for automated documentary storytelling",
    creatorTagline: "Automated Faceless Video & Storytelling"
  },
  "ai-talking-avatars": {
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    alt: "Photorealistic digital human presenter delivering broadcast announcements with natural gestures",
    creatorTagline: "Photorealistic AI Talking Avatars"
  },
  "ai-video-lip-sync-dubbing": {
    imageSrc: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80",
    alt: "Sound engineer and voice actor synchronizing multilingual vocal dubbing to video lip movements",
    creatorTagline: "Multilingual Video Dubbing & Lip-Sync"
  },
  "ai-ugc-video-ads": {
    imageSrc: "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=900&q=80",
    alt: "Direct-response creator filming high-converting UGC smartphone video ads with studio ring light",
    creatorTagline: "Direct-Response UGC Video Ads"
  },

  // 4. Audio & Voice
  "audio-voice": {
    imageSrc: "/images/categories/audio-voice-creator.jpg",
    alt: "Audio creator enjoying music and voiceover with studio headphones",
    creatorTagline: "Vocal & Sound Production"
  },
  "ai-voice-cloning": {
    imageSrc: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80",
    alt: "Audio engineer analyzing vocal waveform frequencies and training custom voice clones in studio",
    creatorTagline: "Voice Cloning & Custom Speech Models"
  },
  "ai-podcast-editors": {
    imageSrc: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=900&q=80",
    alt: "Podcast producer broadcasting with studio cardioid condenser microphone and acoustic isolation",
    creatorTagline: "Podcast Audio Mastering & Cleaning"
  },
  "ai-music-song-generators": {
    imageSrc: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
    alt: "Electronic music producer composing melodies, beats, and instrumental stems on studio equipment",
    creatorTagline: "AI Music Composition & Beat Production"
  },
  "ai-text-to-speech-readers": {
    imageSrc: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=80",
    alt: "Listener enjoying ultra-realistic text-to-speech audiobook narration with premium studio headphones",
    creatorTagline: "Natural Text-to-Speech & Audiobooks"
  },
  "ai-audio-noise-removers": {
    imageSrc: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
    alt: "Sound technician eliminating ambient background hiss and isolating clean dialogue tracks",
    creatorTagline: "Noise Removal & Vocal Stem Isolation"
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
  "ai-app-builders-vibe-coding": {
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    alt: "Full-stack developer rapid-prototyping web application with clean syntax code in IDE",
    creatorTagline: "Full-Stack Vibe Coding & App Builders"
  },
  "ai-code-review-security": {
    imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    alt: "Security engineer auditing source code vulnerabilities and automated pull request analysis",
    creatorTagline: "AI Code Review & Security Auditing"
  },
  "ai-figma-to-code": {
    imageSrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80",
    alt: "Product designer and frontend developer translating Figma UI mockups into production components",
    creatorTagline: "Figma-to-Code & UI Component Generation"
  },
  "ai-sql-query-generators": {
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    alt: "Database engineer analyzing relational data tables and complex SQL query performance",
    creatorTagline: "SQL Generation & Database Optimization"
  },
  "ai-automated-test-generators": {
    imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80",
    alt: "QA automation engineer designing comprehensive unit test suites and end-to-end workflows",
    creatorTagline: "Automated Unit & E2E Test Suites"
  },

  // 6. Marketing, Sales & Growth
  "marketing-sales": {
    imageSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    alt: "Marketing director and growth team planning high-converting campaigns",
    creatorTagline: "Growth & Customer Acquisition"
  },
  "ai-cold-email-outreach": {
    imageSrc: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=900&q=80",
    alt: "Growth marketer analyzing B2B cold email deliverability metrics and personalized outreach sequences",
    creatorTagline: "B2B Cold Email & Deliverability Scaling"
  },
  "ai-autonomous-sdrs": {
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    alt: "Autonomous revenue operations team supervising AI SDR agents and automated sales pipeline discovery",
    creatorTagline: "Autonomous AI SDRs & Inbound Prospecting"
  },
  "ai-ad-creative-generators": {
    imageSrc: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=900&q=80",
    alt: "Performance advertising team evaluating multivariate ad creative variations and CTR performance",
    creatorTagline: "Multivariate Ad Creatives & Social Ads"
  },
  "ai-landing-page-builders": {
    imageSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
    alt: "Web designer and CRO specialist building high-converting landing pages and sales funnels",
    creatorTagline: "High-Converting Funnels & Landing Pages"
  },
  "ai-brand-voice-governance": {
    imageSrc: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80",
    alt: "Brand governance director maintaining unified corporate style guides and editorial voice consistency",
    creatorTagline: "Enterprise Brand Voice & Governance"
  },
  "ai-sales-tools": {
    imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    alt: "Account executive closing enterprise partnership deal",
    creatorTagline: "Pipeline & Deal Closing"
  },
  "ai-sales-call-intelligence": {
    imageSrc: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=900&q=80",
    alt: "Sales executive conducting client discovery call with real-time conversation intelligence analysis",
    creatorTagline: "Call Intelligence & Conversation Analytics"
  },
  "ai-b2b-lead-enrichment": {
    imageSrc: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80",
    alt: "B2B sales development representative enriching prospect contact accounts and intent data",
    creatorTagline: "B2B Lead Enrichment & Intent Data"
  },
  "ai-crm-auto-updating": {
    imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    alt: "Sales manager maintaining CRM pipeline stages, deal velocity, and automated activity logging",
    creatorTagline: "CRM Pipeline Automation & Auto-Updating"
  },
  "ai-sales-objection-coaches": {
    imageSrc: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    alt: "Sales team roleplaying enterprise objection handling and negotiation tactics in coaching session",
    creatorTagline: "Sales Objection Handling & Pitch Coaching"
  },
  "ai-cpq-proposal-generators": {
    imageSrc: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    alt: "Enterprise executives reviewing and finalizing digital CPQ price quote and service contract proposal",
    creatorTagline: "CPQ Quotes & Deal Proposal Generation"
  },
  "ai-seo-tools": {
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    alt: "Search optimization analyst studying keyword traffic growth curves",
    creatorTagline: "Organic Search Dominance"
  },
  "ai-keyword-research-clustering": {
    imageSrc: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=900&q=80",
    alt: "SEO specialist analyzing search keyword volume charts and topical cluster hierarchy on monitor",
    creatorTagline: "Keyword Research & Topic Clustering"
  },
  "ai-seo-content-optimizers": {
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=80",
    alt: "Content marketer optimizing editorial blog article against top-ranking SERP competitors",
    creatorTagline: "SERP Optimization & Content Scoring"
  },
  "ai-technical-seo-auditors": {
    imageSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
    alt: "Technical SEO engineer auditing website crawl errors, indexability, and Core Web Vitals performance",
    creatorTagline: "Site Audits & Technical SEO Automation"
  },
  "ai-programmatic-seo-builders": {
    imageSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    alt: "Growth marketing team designing automated templates for programmatic SEO mass page generation",
    creatorTagline: "Programmatic SEO & Scaled Page Generation"
  },
  "ai-internal-linking-optimizers": {
    imageSrc: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80",
    alt: "Visual semantic network graph representing optimized internal link architecture and page authority flow",
    creatorTagline: "Internal Linking & Semantic Graph Topology"
  },
  "ai-social-media-tools": {
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    alt: "Social media content creator planning viral multi-channel schedule",
    creatorTagline: "Social Reach & Engagement"
  },
  "ai-twitter-x-growth": {
    imageSrc: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=900&q=80",
    alt: "Content creator drafting viral Twitter threads and analyzing micro-blogging follower engagement on phone",
    creatorTagline: "X/Twitter Growth & Thread Crafting"
  },
  "ai-linkedin-post-generators": {
    imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    alt: "Corporate executive polishing thought-leadership story posts for LinkedIn personal branding",
    creatorTagline: "LinkedIn Personal Branding & Thought Leadership"
  },
  "ai-social-media-schedulers": {
    imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80",
    alt: "Social media manager scheduling multi-channel publishing calendar across social networks",
    creatorTagline: "Omnichannel Social Scheduling & Publishing"
  },
  "ai-instagram-tiktok-captions": {
    imageSrc: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=900&q=80",
    alt: "Creator generating catchy viral captions, hooks, and hashtags for Instagram and TikTok videos",
    creatorTagline: "Viral Captions, Hooks & Hashtags"
  },
  "ai-social-listening-analytics": {
    imageSrc: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=900&q=80",
    alt: "Brand strategist monitoring live social media listening streams, brand sentiment, and competitor mentions",
    creatorTagline: "Social Listening & Sentiment Intelligence"
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
  "ai-document-readers-summarizers": {
    imageSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=900&q=80",
    alt: "Legal and research analyst reviewing multi-page document summaries, contracts, and PDF citations",
    creatorTagline: "Document Intelligence & PDF Chat Summaries"
  },

  // 8. Conversational & Agents
  "ai-chatbots": {
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    alt: "Customer support specialist providing empathetic real-time answers",
    creatorTagline: "Conversational Intelligence"
  },
  "ai-customer-support-bots": {
    imageSrc: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=900&q=80",
    alt: "Support representative using automated AI customer helpdesk software to resolve client inquiries in real time",
    creatorTagline: "24/7 AI Customer Support & Ticketing"
  },
  "ai-internal-knowledge-bots": {
    imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    alt: "Enterprise team searching internal company knowledge base and querying indexed documentation",
    creatorTagline: "Enterprise Docs & Internal Knowledge Retrieval"
  },
  "ai-whatsapp-omnichannel-bots": {
    imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    alt: "Mobile user interacting with automated omnichannel messaging bot on smartphone",
    creatorTagline: "WhatsApp & Omnichannel Conversational Automation"
  },
  "ai-character-roleplay-chat": {
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    alt: "Stylized digital companion persona with futuristic ambient lighting for conversational roleplay",
    creatorTagline: "AI Persona & Character Roleplay"
  },
  "ai-voice-receptionists": {
    imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
    alt: "Corporate receptionist with headset managing inbound business phone calls and automated appointment scheduling",
    creatorTagline: "Autonomous Phone Agents & Inbound Receptionists"
  },
  "ai-agents": {
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    alt: "Technology team overseeing autonomous multi-agent task workflows",
    creatorTagline: "Autonomous Agent Execution"
  },
  "ai-autonomous-task-agents": {
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    alt: "High-performance microchip processor circuits representing autonomous AI reasoning and task execution",
    creatorTagline: "Autonomous Goal Execution & Task Runners"
  },
  "ai-multi-agent-frameworks": {
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    alt: "Global digital network with glowing interconnected nodes symbolizing multi-agent orchestration and swarm intelligence",
    creatorTagline: "Multi-Agent Orchestration & Swarm Systems"
  },
  "ai-browser-automation-agents": {
    imageSrc: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=900&q=80",
    alt: "Digital product designer mapping automated web browser workflows and automated UI navigation",
    creatorTagline: "Browser Automation & Computer-Use Agents"
  },
  "ai-data-extraction-agents": {
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    alt: "High-speed data center server racks handling web crawling, data pipelines, and automated extraction",
    creatorTagline: "Intelligent Web Scraping & Data Extraction"
  },
  "ai-workflow-automation-agents": {
    imageSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    alt: "Modern collaborative workspace with system flowcharts and node graphs for agentic workflow building",
    creatorTagline: "Agentic Workflow & RPA Builders"
  },

  // 9. Career & Presentations
  "ai-presentation-makers": {
    imageSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
    alt: "Keynote speaker delivering visually stunning slide presentation",
    creatorTagline: "High-Impact Pitch Decks"
  },
  "ai-pitch-deck-generators": {
    imageSrc: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80",
    alt: "Startup founder presenting investor pitch deck slides to venture capital team in conference room",
    creatorTagline: "Investor Pitch Decks & Startup Fundraising"
  },
  "ai-sales-presentation-makers": {
    imageSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
    alt: "Account executive delivering interactive B2B sales presentation to corporate buyers in conference room",
    creatorTagline: "B2B Sales Decks & Interactive Proposals"
  },
  "ai-powerpoint-google-slides-copilots": {
    imageSrc: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
    alt: "Professional designer structuring digital presentation slides on modern laptop workstation",
    creatorTagline: "PowerPoint & Google Slides AI Copilots"
  },
  "ai-interactive-audience-presentations": {
    imageSrc: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    alt: "Conference speaker engaging a large auditorium audience with live interactive presentation slides and real-time polling",
    creatorTagline: "Live Polling & Interactive Presentations"
  },
  "ai-educational-lecture-slides": {
    imageSrc: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
    alt: "University professor presenting lecture slides and engaging students in modern classroom",
    creatorTagline: "Classroom Lessons & Academic Lecture Slides"
  },
  "ai-resume-builders": {
    imageSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    alt: "Ambitious professional reviewing tailored resume and portfolio",
    creatorTagline: "Career Growth & Standout Resumes"
  },
  "ai-ats-resume-checkers": {
    imageSrc: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=80",
    alt: "Curriculum vitae and hiring review documents arranged on desk with glasses for ATS evaluation",
    creatorTagline: "ATS Keyword Scanning & Resume Scoring"
  },
  "ai-executive-modern-resumes": {
    imageSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    alt: "Senior executive professional reviewing modern leadership resume and career accomplishments",
    creatorTagline: "Executive Resumes & Modern Visual CVs"
  },
  "ai-resume-bullet-optimizers": {
    imageSrc: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    alt: "Career specialist carefully editing and refining resume bullet points with action verbs and quantifiable accomplishments",
    creatorTagline: "Resume Bullet Rewriting & Action Verbs"
  },
  "ai-cover-letter-generators": {
    imageSrc: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=900&q=80",
    alt: "Candidate tailoring personalized cover letter and job application documents at organized desk",
    creatorTagline: "Tailored AI Cover Letters & Job Inquiries"
  },
  "ai-job-application-copilots": {
    imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80",
    alt: "Job candidate managing multi-stage job application pipeline and automated application tracking",
    creatorTagline: "Job Search Copilots & Auto-Apply Pipelines"
  },
  "ai-meeting-assistants": {
    imageSrc: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=900&q=80",
    alt: "Professional participating in engaging high-definition video conference",
    creatorTagline: "Meeting Minutes & AI Summaries"
  },
  "ai-meeting-note-takers": {
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    alt: "Business team collaborating around conference table with laptops taking meeting notes and action items",
    creatorTagline: "Automated Meeting Minutes & Summaries"
  },
  "ai-sales-meeting-recorders": {
    imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
    alt: "Sales professional on client video conference conducting discovery call with real-time intelligence",
    creatorTagline: "Sales Discovery Calls & CRM Intelligence"
  },
  "ai-async-video-meetings": {
    imageSrc: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=900&q=80",
    alt: "Remote professional recording asynchronous video screen update with camera and microphone",
    creatorTagline: "Async Video Updates & Screen Recorders"
  },
  "ai-standup-scrum-assistants": {
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    alt: "Cross-functional engineering and product team conducting daily agile standup around sprint board",
    creatorTagline: "Agile Standups & Sprint Blockers"
  },
  "ai-1-on-1-meeting-coaches": {
    imageSrc: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=900&q=80",
    alt: "Manager and team member having an engaging 1-on-1 coaching and performance feedback discussion",
    creatorTagline: "1-on-1 Feedback & Meeting Coaching"
  },
  "ai-speech-to-text-transcription": {
    imageSrc: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80",
    alt: "Audio workstation with studio headphones and waveform audio track being transcribed into text",
    creatorTagline: "Automated Speech-to-Text & Diarization"
  },
  "ai-podcast-interview-transcribers": {
    imageSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80",
    alt: "Studio condenser microphone and podcast recording equipment for audio interviews and transcription",
    creatorTagline: "Podcast Show Notes & Interview Transcripts"
  },
  "ai-multilingual-subtitles-captions": {
    imageSrc: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    alt: "Video editor synchronizing animated subtitles and multilingual closed captions on digital editing timeline",
    creatorTagline: "Automated Subtitles & Multilingual Captions"
  },
  "ai-medical-clinical-scribes": {
    imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    alt: "Physician reviewing AI-generated ambient clinical documentation and patient consultation notes on tablet",
    creatorTagline: "Ambient Clinical Scribes & SOAP Notes"
  },
  "ai-research-tools": {
    imageSrc: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
    alt: "Academic researcher analyzing scholarly literature in modern study hall",
    creatorTagline: "Accelerated Academic Research"
  },
  "ai-academic-literature-review": {
    imageSrc: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80",
    alt: "Academic researcher analyzing scholarly literature and peer-reviewed journal papers in modern university library",
    creatorTagline: "Scholarly Literature Review & Citation Discovery"
  },
  "ai-paper-pdf-summarizers": {
    imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    alt: "Researcher analyzing synthesized AI summaries and methodology outlines from academic PDF documents",
    creatorTagline: "Paper Summarization & Study Outlines"
  },
  "ai-citation-reference-managers": {
    imageSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=900&q=80",
    alt: "Open academic reference book and journal with structured citations, footnotes, and bibliography notes",
    creatorTagline: "Citation Verification & Reference Formatting"
  },
  "ai-data-analysis-research": {
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    alt: "Research analyst examining interactive AI data dashboards, scientific charts, and empirical findings",
    creatorTagline: "Research Intelligence & Empirical Data Insights"
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
  if (cleanSlug.includes("transcrib") || cleanSlug.includes("speech") || cleanSlug.includes("scribe") || cleanSlug.includes("caption")) {
    return CATEGORY_HERO_MEDIA_MAP["ai-transcription-tools"];
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
