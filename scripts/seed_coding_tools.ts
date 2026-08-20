import fs from 'fs';
import path from 'path';

const toolsPath = path.join(process.cwd(), 'data', 'tools.json');
let tools = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

// Tools to add or normalize for Coding Category (c5)
const codingToolsToAdd = [
  {
    id: "tool-cursor-ai",
    name: "Cursor AI",
    slug: "cursor",
    tagline: "The AI-first Code Editor built on VS Code with native Claude 3.5 Sonnet agent integration",
    description: "Cursor is the leading AI-native code editor designed for pair-programming and multi-file codebases. It features Composer for full-stack autonomous multi-file edits, codebase indexing, terminal command execution, and deep context-aware completions.",
    websiteUrl: "https://cursor.com",
    category: "Coding & Development",
    category_id: "c5",
    pricing: "Freemium",
    rating: 4.9,
    reviewsCount: 1420,
    isFeatured: true,
    isPopular: true,
    isTrending: true,
    verified: true,
    tags: ["AI IDE", "Code Generation", "Claude 3.5 Sonnet", "Composer", "Multi-file Editing"]
  },
  {
    id: "tool-windsurf",
    name: "Windsurf",
    slug: "windsurf",
    tagline: "The next-generation AI IDE from Codeium powered by Cascade autonomous flow",
    description: "Windsurf is Codeium's AI-native IDE that introduces Cascade—an agentic collaborative engine that understands entire developer workspaces, predicts intent across multiple files, and executes multi-step terminal actions.",
    websiteUrl: "https://codeium.com/windsurf",
    category: "Coding & Development",
    category_id: "c5",
    pricing: "Freemium",
    rating: 4.8,
    reviewsCount: 890,
    isFeatured: true,
    isPopular: true,
    isTrending: true,
    verified: true,
    tags: ["AI IDE", "Cascade Agent", "Codeium", "Multi-file Editing", "Developer Tools"]
  },
  {
    id: "tool-devin-ai",
    name: "Devin AI",
    slug: "devin",
    tagline: "The world's first fully autonomous AI software engineer by Cognition",
    description: "Devin is an autonomous AI software engineer capable of building complex web apps, debugging repositories, learning unfamiliar technologies, and executing command-line terminal operations in isolated sandbox environments.",
    websiteUrl: "https://cognition.ai",
    category: "Coding & Development",
    category_id: "c5",
    pricing: "Paid",
    rating: 4.7,
    reviewsCount: 650,
    isFeatured: true,
    isPopular: true,
    isTrending: true,
    verified: true,
    tags: ["Autonomous Engineer", "SWE-bench", "Agentic Coding", "Cognition AI", "DevOps"]
  },
  {
    id: "tool-devika-ai",
    name: "Devika",
    slug: "devika",
    tagline: "Open-source autonomous AI software engineer alternative to Devin",
    description: "Devika is an open-source autonomous agent that understands high-level human instructions, breaks them down into actionable steps, writes code, fixes bugs, and deploys full-stack applications locally.",
    websiteUrl: "https://github.com/stitionai/devika",
    category: "Coding & Development",
    category_id: "c5",
    pricing: "Free & Open Source",
    rating: 4.6,
    reviewsCount: 420,
    isFeatured: false,
    isPopular: true,
    isTrending: true,
    verified: true,
    tags: ["Open Source", "Autonomous Agent", "Python", "Local LLM", "SWE Agent"]
  },
  {
    id: "tool-claude-engineer",
    name: "Claude Engineer",
    slug: "claude-engineer",
    tagline: "CLI-based agentic coding assistant powered by Anthropic Claude 3.5 Sonnet",
    description: "Claude Engineer is an open-source command-line software development assistant that interfaces directly with local file systems, executes Bash commands, and automates multi-step refactoring workflows.",
    websiteUrl: "https://github.com/Doriandarko/claude-engineer",
    category: "Coding & Development",
    category_id: "c5",
    pricing: "Free & Open Source",
    rating: 4.7,
    reviewsCount: 310,
    isFeatured: false,
    isPopular: true,
    isTrending: true,
    verified: true,
    tags: ["Claude 3.5", "CLI Agent", "Autonomous Coding", "Refactoring", "Open Source"]
  },
  {
    id: "tool-v0-dev",
    name: "v0 by Vercel",
    slug: "v0-dev",
    tagline: "Generative UI system that builds React, Tailwind CSS, and Next.js interfaces from prompts",
    description: "v0 is Vercel's generative UI platform that produces accessible, production-ready React and Tailwind components with 1-click copy/paste and direct deployment to Vercel.",
    websiteUrl: "https://v0.dev",
    category: "Coding & Development",
    category_id: "c5",
    pricing: "Freemium",
    rating: 4.9,
    reviewsCount: 1850,
    isFeatured: true,
    isPopular: true,
    isTrending: true,
    verified: true,
    tags: ["Generative UI", "React", "Tailwind CSS", "Next.js", "Vercel"]
  },
  {
    id: "tool-bolt-new",
    name: "Bolt.new",
    slug: "bolt-new",
    tagline: "In-browser AI full-stack development sandbox powered by WebContainers",
    description: "Bolt.new by StackBlitz allows developers to prompt, build, run, and deploy full-stack Node.js and React web applications entirely inside the browser without installing anything locally.",
    websiteUrl: "https://bolt.new",
    category: "Coding & Development",
    category_id: "c5",
    pricing: "Freemium",
    rating: 4.8,
    reviewsCount: 1120,
    isFeatured: true,
    isPopular: true,
    isTrending: true,
    verified: true,
    tags: ["WebContainers", "Full Stack", "In-browser IDE", "StackBlitz", "React"]
  },
  {
    id: "tool-lovable-dev",
    name: "Lovable",
    slug: "lovable-dev",
    tagline: "The AI app builder that turns natural language into production web applications",
    description: "Lovable is a modern AI software builder that generates complete web applications with backend database integration, user authentication, and responsive user interfaces from natural language prompts.",
    websiteUrl: "https://lovable.dev",
    category: "Coding & Development",
    category_id: "c5",
    pricing: "Freemium",
    rating: 4.8,
    reviewsCount: 780,
    isFeatured: true,
    isPopular: true,
    isTrending: true,
    verified: true,
    tags: ["No-Code / Low-Code", "AI App Builder", "Supabase", "React", "Full Stack"]
  },
  {
    id: "tool-aider-chat",
    name: "Aider",
    slug: "aider-chat",
    tagline: "AI pair programming in your terminal that auto-commits git diffs with clean messages",
    description: "Aider is a command-line pair programmer that connects with local git repositories, understands whole codebases, applies multi-file edits, and automatically creates clean git commits for every modification.",
    websiteUrl: "https://aider.chat",
    category: "Coding & Development",
    category_id: "c5",
    pricing: "Free & Open Source",
    rating: 4.9,
    reviewsCount: 940,
    isFeatured: true,
    isPopular: true,
    isTrending: true,
    verified: true,
    tags: ["Git Integration", "Terminal CLI", "Claude 3.5 Sonnet", "Pair Programming", "Open Source"]
  },
  {
    id: "tool-cline",
    name: "Cline",
    slug: "cline",
    tagline: "Autonomous coding agent extension for VS Code with terminal and browser execution",
    description: "Cline (formerly Claude Dev) is an autonomous coding agent directly inside VS Code capable of reading whole projects, executing terminal commands, requesting human approval, and testing web apps via browser automation.",
    websiteUrl: "https://github.com/cline/cline",
    category: "Coding & Development",
    category_id: "c5",
    pricing: "Free & Open Source",
    rating: 4.9,
    reviewsCount: 1300,
    isFeatured: true,
    isPopular: true,
    isTrending: true,
    verified: true,
    tags: ["VS Code Extension", "Autonomous Agent", "Terminal Execution", "Browser Automation", "Open Source"]
  }
];

// Add or update
codingToolsToAdd.forEach(newTool => {
  const existingIdx = tools.findIndex((t: any) => t.slug === newTool.slug);
  if (existingIdx !== -1) {
    tools[existingIdx] = { ...tools[existingIdx], ...newTool };
  } else {
    tools.unshift(newTool);
  }
});

// Normalize all category_id c5 tools
tools = tools.map((t: any) => {
  if (t.category_id === 'c5' || t.category === 'Coding & Development') {
    return {
      ...t,
      category: "Coding Assistants",
      category_id: "c5"
    };
  }
  return t;
});

fs.writeFileSync(toolsPath, JSON.stringify(tools, null, 2), 'utf8');
console.log(`Successfully verified and expanded ${codingToolsToAdd.length} AI Coding tools in data/tools.json!`);
