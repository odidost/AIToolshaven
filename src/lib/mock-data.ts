export type ToolCategory = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  count: number;
};

export type AITool = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: string; // corresponds to ToolCategory.id
  priceModel: "Free" | "Freemium" | "Paid" | "Enterprise";
  price?: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  websiteUrl: string;
  tags: string[];
  features: string[];
  verified: boolean;
  featured?: boolean;
};

export type Review = {
  id: string;
  toolId: string;
  author: string;
  avatarUrl: string;
  rating: number;
  date: string;
  text: string;
};

export const categories: ToolCategory[] = [
  { id: "c1", name: "Text Generation", slug: "text-generation", icon: "edit_document", count: 124 },
  { id: "c2", name: "Image Generation", slug: "image-generation", icon: "image", count: 86 },
  { id: "c3", name: "Video Creation", slug: "video-creation", icon: "movie", count: 42 },
  { id: "c4", name: "Audio & Voice", slug: "audio-voice", icon: "graphic_eq", count: 35 },
  { id: "c5", name: "Coding Assistants", slug: "coding-assistants", icon: "code", count: 58 },
  { id: "c6", name: "Marketing & Sales", slug: "marketing-sales", icon: "campaign", count: 91 },
  { id: "c7", name: "Productivity", slug: "productivity", icon: "task_alt", count: 112 },
];

export const tools: AITool[] = [
  {
    id: "t1",
    name: "AetherWriter",
    slug: "aetherwriter",
    tagline: "The ultimate AI co-writer for creators",
    description: "AetherWriter is a next-generation AI writing assistant that adapts to your voice and helps you create high-quality content 10x faster.",
    category: "c1",
    priceModel: "Freemium",
    price: "$15/mo",
    rating: 4.8,
    reviewCount: 342,
    imageUrl: "https://placehold.co/600x400/4F46E5/FFFFFF?text=AetherWriter",
    websiteUrl: "https://example.com/aetherwriter",
    tags: ["Copywriting", "Blog", "Social Media"],
    features: ["Tone adaptation", "Plagiarism checker", "SEO optimization", "Multi-language support", "Brand voice training"],
    verified: true,
    featured: true,
  },
  {
    id: "t2",
    name: "LuminaVision",
    slug: "luminavision",
    tagline: "Transform text into photorealistic images",
    description: "State-of-the-art image generation model capable of creating stunning visuals from simple text prompts.",
    category: "c2",
    priceModel: "Paid",
    price: "$20/mo",
    rating: 4.9,
    reviewCount: 856,
    imageUrl: "https://placehold.co/600x400/10B981/FFFFFF?text=LuminaVision",
    websiteUrl: "https://example.com/luminavision",
    tags: ["Design", "Art", "Marketing"],
    features: ["4K Resolution", "Inpainting", "Style transfer", "Batch generation", "API access"],
    verified: true,
    featured: true,
  },
  {
    id: "t3",
    name: "CodeWeaver",
    slug: "codeweaver",
    tagline: "Your pair programming partner",
    description: "CodeWeaver integrates directly into your IDE to provide intelligent code completions, refactoring suggestions, and bug detection.",
    category: "c5",
    priceModel: "Free",
    rating: 4.7,
    reviewCount: 215,
    imageUrl: "https://placehold.co/600x400/111827/FFFFFF?text=CodeWeaver",
    websiteUrl: "https://example.com/codeweaver",
    tags: ["Developer Tools", "IDE", "Testing"],
    features: ["Multi-language support", "Security scanning", "Auto-documentation", "Git integration", "Code review"],
    verified: true,
    featured: false,
  },
  {
    id: "t4",
    name: "VocalizeAI",
    slug: "vocalizeai",
    tagline: "Ultra-realistic voice cloning and synthesis",
    description: "Create lifelike voiceovers for your videos, podcasts, and presentations with just a few clicks.",
    category: "c4",
    priceModel: "Freemium",
    price: "$12/mo",
    rating: 4.5,
    reviewCount: 189,
    imageUrl: "https://placehold.co/600x400/F59E0B/FFFFFF?text=VocalizeAI",
    websiteUrl: "https://example.com/vocalizeai",
    tags: ["Voiceover", "Podcast", "Accessibility"],
    features: ["100+ Voices", "Emotion control", "Voice cloning", "Real-time synthesis", "Audio editing"],
    verified: false,
    featured: false,
  },
  {
    id: "t5",
    name: "FlowMotion",
    slug: "flowmotion",
    tagline: "AI-powered video editing for everyone",
    description: "Edit videos automatically by simply editing text. FlowMotion transcribes, cuts, and adds effects instantly.",
    category: "c3",
    priceModel: "Paid",
    price: "$30/mo",
    rating: 4.6,
    reviewCount: 423,
    imageUrl: "https://placehold.co/600x400/E5E7EB/111827?text=FlowMotion",
    websiteUrl: "https://example.com/flowmotion",
    tags: ["Video Editing", "Social Media", "Content Creation"],
    features: ["Auto-captions", "Silence removal", "B-roll generation", "Multi-track editing", "Export presets"],
    verified: true,
    featured: true,
  },
  {
    id: "t6",
    name: "ProseForge",
    slug: "proseforge",
    tagline: "AI writing that sounds human",
    description: "ProseForge specializes in long-form content creation with natural-sounding prose that bypasses AI detection.",
    category: "c1",
    priceModel: "Paid",
    price: "$25/mo",
    rating: 4.4,
    reviewCount: 178,
    imageUrl: "https://placehold.co/600x400/7C3AED/FFFFFF?text=ProseForge",
    websiteUrl: "https://example.com/proseforge",
    tags: ["Long-form", "Articles", "Research"],
    features: ["Human-like output", "Citation generation", "Outline builder", "Fact-checking", "Readability scoring"],
    verified: true,
    featured: false,
  },
  {
    id: "t7",
    name: "PixelMuse",
    slug: "pixelmuse",
    tagline: "Creative AI art for designers",
    description: "PixelMuse helps professional designers create concept art, illustrations, and brand visuals with AI-assisted workflows.",
    category: "c2",
    priceModel: "Freemium",
    price: "$18/mo",
    rating: 4.6,
    reviewCount: 534,
    imageUrl: "https://placehold.co/600x400/EC4899/FFFFFF?text=PixelMuse",
    websiteUrl: "https://example.com/pixelmuse",
    tags: ["Illustration", "Concept Art", "Branding"],
    features: ["ControlNet support", "Layer editing", "Custom model training", "Vector export", "Color palette generation"],
    verified: true,
    featured: false,
  },
  {
    id: "t8",
    name: "DevPilot",
    slug: "devpilot",
    tagline: "Ship code faster with AI",
    description: "DevPilot provides whole-file code generation, automated testing, and intelligent debugging directly in your workflow.",
    category: "c5",
    priceModel: "Freemium",
    price: "$10/mo",
    rating: 4.8,
    reviewCount: 612,
    imageUrl: "https://placehold.co/600x400/0EA5E9/FFFFFF?text=DevPilot",
    websiteUrl: "https://example.com/devpilot",
    tags: ["Code Generation", "Testing", "Debugging"],
    features: ["Whole-file generation", "Auto-testing", "Debugging assistant", "Terminal commands", "Deployment automation"],
    verified: true,
    featured: true,
  },
  {
    id: "t9",
    name: "AdGenius",
    slug: "adgenius",
    tagline: "AI-powered ad creative generation",
    description: "Generate high-converting ad copy and creatives for any platform in seconds. A/B test with confidence.",
    category: "c6",
    priceModel: "Paid",
    price: "$35/mo",
    rating: 4.3,
    reviewCount: 245,
    imageUrl: "https://placehold.co/600x400/F97316/FFFFFF?text=AdGenius",
    websiteUrl: "https://example.com/adgenius",
    tags: ["Advertising", "Copywriting", "A/B Testing"],
    features: ["Multi-platform ads", "A/B testing", "Audience targeting", "Performance analytics", "Template library"],
    verified: false,
    featured: false,
  },
  {
    id: "t10",
    name: "TaskFlow",
    slug: "taskflow",
    tagline: "AI-driven project management",
    description: "TaskFlow uses AI to prioritize tasks, estimate deadlines, and automate routine project management workflows.",
    category: "c7",
    priceModel: "Freemium",
    price: "$8/mo",
    rating: 4.5,
    reviewCount: 367,
    imageUrl: "https://placehold.co/600x400/6366F1/FFFFFF?text=TaskFlow",
    websiteUrl: "https://example.com/taskflow",
    tags: ["Project Management", "Automation", "Teams"],
    features: ["Smart scheduling", "Auto-prioritization", "Team analytics", "Slack integration", "Custom workflows"],
    verified: true,
    featured: false,
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    toolId: "t1",
    author: "Sarah Chen",
    avatarUrl: "https://placehold.co/80x80/4F46E5/FFFFFF?text=SC",
    rating: 5,
    date: "2026-06-15",
    text: "AetherWriter has completely transformed my content workflow. The tone adaptation feature is incredibly accurate.",
  },
  {
    id: "r2",
    toolId: "t1",
    author: "James Wilson",
    avatarUrl: "https://placehold.co/80x80/10B981/FFFFFF?text=JW",
    rating: 4,
    date: "2026-06-10",
    text: "Great tool for blog writing. The SEO suggestions are spot-on, though the UI could be more intuitive.",
  },
  {
    id: "r3",
    toolId: "t2",
    author: "Mia Rodriguez",
    avatarUrl: "https://placehold.co/80x80/EC4899/FFFFFF?text=MR",
    rating: 5,
    date: "2026-06-18",
    text: "The image quality is absolutely stunning. Best AI image gen tool I've used by far.",
  },
  {
    id: "r4",
    toolId: "t3",
    author: "Dev Kumar",
    avatarUrl: "https://placehold.co/80x80/111827/FFFFFF?text=DK",
    rating: 5,
    date: "2026-06-12",
    text: "As a senior developer, I'm impressed. The multi-language support and security scanning features are top-notch.",
  },
  {
    id: "r5",
    toolId: "t5",
    author: "Alex Thompson",
    avatarUrl: "https://placehold.co/80x80/F59E0B/FFFFFF?text=AT",
    rating: 4,
    date: "2026-06-20",
    text: "FlowMotion saves me hours of editing time. The auto-captions feature alone is worth the subscription.",
  },
];

// User's saved/bookmarked tools (mock)
export const userLibraryToolIds: string[] = ["t1", "t2", "t5", "t8"];

export const getFeaturedTools = () => tools.filter(t => t.featured);
export const getToolsByCategory = (categoryId: string) => tools.filter(t => t.category === categoryId);
export const getToolBySlug = (slug: string) => tools.find(t => t.slug === slug);
export const getCategoryBySlug = (slug: string) => categories.find(c => c.slug === slug);
export const getReviewsByToolId = (toolId: string) => reviews.filter(r => r.toolId === toolId);
export const getUserLibraryTools = () => tools.filter(t => userLibraryToolIds.includes(t.id));
export const getCategoryById = (id: string) => categories.find(c => c.id === id);
