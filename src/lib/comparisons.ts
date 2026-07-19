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
        description: "The ultimate battle for the best all-around AI assistant and reasoning engine.",
        tool1: { name: "ChatGPT", letter: "C", color: "from-emerald-400 to-emerald-600", logoUrl: "https://logo.clearbit.com/openai.com" },
        tool2: { name: "Claude", letter: "C", color: "from-orange-400 to-amber-600", logoUrl: "https://logo.clearbit.com/anthropic.com" },
    },
    {
        title: "Midjourney vs DALL-E 3",
        slug: "midjourney-vs-dall-e-3",
        description: "Which tool reigns supreme for high-end AI image generation?",
        tool1: { name: "Midjourney", letter: "M", color: "from-purple-500 to-indigo-600", logoUrl: "https://logo.clearbit.com/midjourney.com" },
        tool2: { name: "DALL-E 3", letter: "D", color: "from-blue-400 to-cyan-500", logoUrl: "https://logo.clearbit.com/openai.com" },
    },
    {
        title: "Runway vs Pika",
        slug: "runway-gen2-vs-pika",
        description: "Who dominates the AI video generation space for cinematic clips?",
        tool1: { name: "Runway", letter: "R", color: "from-violet-500 to-purple-700", logoUrl: "https://logo.clearbit.com/runwayml.com" },
        tool2: { name: "Pika", letter: "P", color: "from-orange-500 to-red-600", logoUrl: "https://logo.clearbit.com/pika.art" },
    },
    {
        title: "Synthesia vs HeyGen",
        slug: "synthesia-vs-heygen",
        description: "The top AI avatar generators go head-to-head for your marketing videos.",
        tool1: { name: "Synthesia", letter: "S", color: "from-blue-500 to-blue-700", logoUrl: "https://logo.clearbit.com/synthesia.io" },
        tool2: { name: "HeyGen", letter: "H", color: "from-purple-500 to-pink-500", logoUrl: "https://logo.clearbit.com/heygen.com" },
    },
    {
        title: "Notion AI vs Mem",
        slug: "notion-ai-vs-mem-ai",
        description: "Which AI-powered workspace is best for organizing your brain?",
        tool1: { name: "Notion AI", letter: "N", color: "from-slate-800 to-black", logoUrl: "https://logo.clearbit.com/notion.so" },
        tool2: { name: "Mem", letter: "M", color: "from-amber-400 to-orange-500", logoUrl: "https://logo.clearbit.com/mem.ai" },
    },
    {
        title: "Copy.ai vs Jasper",
        slug: "copy-ai-vs-jasper",
        description: "The two heaviest hitters in AI marketing copy face off.",
        tool1: { name: "Copy.ai", letter: "C", color: "from-slate-700 to-slate-900", logoUrl: "https://logo.clearbit.com/copy.ai" },
        tool2: { name: "Jasper", letter: "J", color: "from-purple-600 to-indigo-800", logoUrl: "https://logo.clearbit.com/jasper.ai" },
    },
];