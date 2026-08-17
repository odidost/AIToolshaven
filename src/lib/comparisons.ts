export interface ComparisonTool {
    name: string;
    letter: string;
    color: string;
    logoUrl?: string;
}

export interface ComparisonData {
    title: string;
    slug: string;
    description: string;
    tool1: ComparisonTool;
    tool2: ComparisonTool;
}

export const comparisons: ComparisonData[] = [
    {
        title: "ChatGPT vs Claude",
        slug: "chatgpt-vs-claude",
        description: "Compare OpenAI's multimodal reasoning with Anthropic's long-context writing and coding intelligence.",
        tool1: { name: "ChatGPT", letter: "C", color: "from-emerald-400 to-emerald-600", logoUrl: "/logos/chatgpt.svg" },
        tool2: { name: "Claude", letter: "C", color: "from-orange-400 to-amber-600", logoUrl: "/logos/claude.svg" },
    },
    {
        title: "Cursor vs GitHub Copilot",
        slug: "cursor-vs-github-copilot",
        description: "AI-native VS Code fork with Composer multi-file editing vs GitHub's ecosystem-integrated assistant.",
        tool1: { name: "Cursor", letter: "C", color: "from-blue-600 to-indigo-700", logoUrl: "/logos/cursor.svg" },
        tool2: { name: "GitHub Copilot", letter: "G", color: "from-slate-700 to-slate-900", logoUrl: "/logos/github-copilot.svg" },
    },
    {
        title: "DALL-E 3 vs Midjourney",
        slug: "dall-e-3-vs-midjourney",
        description: "Exact prompt obedience and legible typography vs cinematic photorealism and artistic lighting.",
        tool1: { name: "DALL-E 3", letter: "D", color: "from-blue-400 to-cyan-500", logoUrl: "/logos/dall-e-3.svg" },
        tool2: { name: "Midjourney", letter: "M", color: "from-purple-500 to-indigo-600", logoUrl: "/logos/midjourney.svg" },
    },
    {
        title: "HeyGen vs Synthesia",
        slug: "heygen-vs-synthesia",
        description: "Studio-grade digital avatars and video translation vs enterprise training and compliance video production.",
        tool1: { name: "HeyGen", letter: "H", color: "from-purple-500 to-pink-500", logoUrl: "/logos/heygen.svg" },
        tool2: { name: "Synthesia", letter: "S", color: "from-blue-500 to-blue-700", logoUrl: "/logos/synthesia.svg" },
    },
    {
        title: "ElevenLabs vs Play.ht",
        slug: "elevenlabs-vs-play-ht",
        description: "Emotive voice cloning and audio storytelling vs 900+ multilingual voices and sub-300ms streaming APIs.",
        tool1: { name: "ElevenLabs", letter: "E", color: "from-violet-500 to-purple-600", logoUrl: "/logos/elevenlabs.svg" },
        tool2: { name: "Play.ht", letter: "P", color: "from-cyan-500 to-blue-600", logoUrl: "/logos/play-ht.svg" },
    },
    {
        title: "Jasper vs Writesonic",
        slug: "jasper-vs-writesonic",
        description: "Enterprise marketing brand voice workflows vs real-time Google search grounding and Article Writer 6.0.",
        tool1: { name: "Jasper", letter: "J", color: "from-purple-600 to-indigo-800", logoUrl: "/logos/jasper.svg" },
        tool2: { name: "Writesonic", letter: "W", color: "from-blue-500 to-indigo-600", logoUrl: "/logos/writesonic.svg" },
    },
    {
        title: "Apollo.io vs Instantly",
        slug: "apollo-vs-instantly",
        description: "275M+ verified B2B contact database with built-in dialer vs scaled cold email inbox rotation and warmup.",
        tool1: { name: "Apollo.io", letter: "A", color: "from-amber-500 to-orange-600", logoUrl: "/logos/apollo.svg" },
        tool2: { name: "Instantly", letter: "I", color: "from-blue-600 to-sky-600", logoUrl: "/logos/instantly.svg" },
    },
    {
        title: "Fathom vs tl;dv",
        slug: "fathom-video-vs-tldv",
        description: "Free unlimited meeting recording and instant CRM syncing vs multi-meeting repository search and coaching.",
        tool1: { name: "Fathom", letter: "F", color: "from-teal-500 to-emerald-600", logoUrl: "/logos/fathom.svg" },
        tool2: { name: "tl;dv", letter: "T", color: "from-rose-500 to-red-600", logoUrl: "/logos/tldv.svg" },
    },
    {
        title: "Codeium vs Cursor",
        slug: "codeium-vs-cursor",
        description: "Free fast code autocomplete across 40+ IDEs vs dedicated AI-first standalone IDE editor.",
        tool1: { name: "Codeium", letter: "C", color: "from-emerald-500 to-teal-600", logoUrl: "/logos/codeium.svg" },
        tool2: { name: "Cursor", letter: "C", color: "from-blue-600 to-indigo-700", logoUrl: "/logos/cursor.svg" },
    },
    {
        title: "Fliki vs Opus Clip",
        slug: "fliki-vs-opus-clip",
        description: "Text script-to-video scene generation vs AI automated vertical video clipping from long-form podcasts.",
        tool1: { name: "Fliki", letter: "F", color: "from-purple-500 to-pink-500", logoUrl: "/logos/fliki.svg" },
        tool2: { name: "Opus Clip", letter: "O", color: "from-amber-500 to-rose-600", logoUrl: "/logos/opus-clip.svg" },
    },
    {
        title: "Midjourney vs Flux.1",
        slug: "midjourney-vs-flux",
        description: "Artistic style coherence and photorealistic lighting vs open-weights diffusion architecture and precise text rendering.",
        tool1: { name: "Midjourney", letter: "M", color: "from-purple-500 to-indigo-600", logoUrl: "/logos/midjourney.svg" },
        tool2: { name: "Flux.1", letter: "F", color: "from-cyan-500 to-blue-600", logoUrl: "/logos/flux-1.svg" },
    },
    {
        title: "ElevenLabs vs Play.ht",
        slug: "elevenlabs-vs-playht",
        description: "Emotive voice cloning and audio storytelling vs 900+ multilingual voices and sub-300ms streaming APIs.",
        tool1: { name: "ElevenLabs", letter: "E", color: "from-violet-500 to-purple-600", logoUrl: "/logos/elevenlabs.svg" },
        tool2: { name: "Play.ht", letter: "P", color: "from-cyan-500 to-blue-600", logoUrl: "/logos/play-ht.svg" },
    },
];

export function getComparisonBySlug(slug: string): ComparisonData | undefined {
    return comparisons.find(c => c.slug === slug);
}