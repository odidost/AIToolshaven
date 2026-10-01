import fs from 'fs';
import path from 'path';

const toolsFilePath = path.join(process.cwd(), 'data', 'tools.json');
const tools = JSON.parse(fs.readFileSync(toolsFilePath, 'utf8'));

// 1. Tagging existing tools
const mappings: Record<string, string[]> = {
  // Autonomous Task Agents
  'multion': ['ai-autonomous-task-agents'],
  'adept': ['ai-autonomous-task-agents'],
  'autogpt': ['ai-autonomous-task-agents'],
  'agentgpt': ['ai-autonomous-task-agents'],
  'superagi': ['ai-autonomous-task-agents'],
  'babyagi': ['ai-autonomous-task-agents'],

  // Multi-Agent Frameworks
  'crewai': ['ai-multi-agent-frameworks'],
  'autogen': ['ai-multi-agent-frameworks'],
  'langgraph': ['ai-multi-agent-frameworks'],
  'metagpt': ['ai-multi-agent-frameworks'],
  'chatdev': ['ai-multi-agent-frameworks'],
  'magentic-multiagent': ['ai-multi-agent-frameworks'],

  // Browser Automation Agents
  'browserbase': ['ai-browser-automation-agents'],
  'skyvern': ['ai-browser-automation-agents'],
  'hyperwrite-assistant': ['ai-browser-automation-agents'],
  'axiom-ai-automation': ['ai-browser-automation-agents'],
  'bardeen-ai-automator': ['ai-browser-automation-agents'],
  'agentql': ['ai-browser-automation-agents'],

  // Workflow Automation & RPA Builders
  'relevance-ai': ['ai-workflow-automation-agents'],
  'gumloop': ['ai-workflow-automation-agents'],
  'mindstudio-ai': ['ai-workflow-automation-agents'],
  'dify-ai': ['ai-workflow-automation-agents'],
  'langflow': ['ai-workflow-automation-agents'],
  'flowise': ['ai-workflow-automation-agents'],
};

for (const tool of tools) {
  const targetSubcats = mappings[tool.slug] || mappings[tool.id];
  if (targetSubcats) {
    tool.additionalCategories = Array.from(new Set([...(tool.additionalCategories || []), ...targetSubcats]));
    if (tool.publishedData) {
      tool.publishedData.additionalCategories = Array.from(new Set([...(tool.publishedData.additionalCategories || []), ...targetSubcats]));
    }
    if (tool.draftData) {
      tool.draftData.additionalCategories = Array.from(new Set([...(tool.draftData.additionalCategories || []), ...targetSubcats]));
    }
  }
}

// 2. Seed 5 Data Extraction Agents
const newExtractionTools = [
  {
    id: `tool-${Date.now()}-firecrawl`,
    name: 'Firecrawl',
    slug: 'firecrawl',
    company: 'Mendable',
    tagline: 'Turn any website into LLM-ready markdown or structured data with a single API call.',
    description: 'Firecrawl is an intelligent web crawling and scraping API built specifically for LLM applications and AI agents. It handles JavaScript rendering, dynamic content, proxies, rate limits, and returns clean, structured markdown.',
    category: 'AI Agents',
    category_id: 'ai-agents',
    categoryName: 'AI Agents',
    categorySlug: 'ai-agents',
    additionalCategories: ['ai-data-extraction-agents'],
    priceModel: 'Freemium',
    pricing: [{ plan: 'Free', price: '$0/mo', description: '500 scrape credits / mo' }, { plan: 'Hobby', price: '$16/mo', description: '3,000 credits/mo' }],
    rating: 4.9,
    easeOfUse: 4.8,
    featureRating: 4.9,
    valueForMoney: 4.8,
    performance: 4.9,
    support: 4.8,
    reviewCount: 32,
    websiteUrl: 'https://firecrawl.dev',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['Web Scraping', 'Crawl', 'LLM Markdown', 'Data Extraction'],
    features: [
      { title: 'Markdown Conversion', description: 'Automatically cleans HTML and outputs pristine markdown for agent context windows.' },
      { title: 'Dynamic JS Rendering', description: 'Executes SPAs and complex client-rendered web applications flawlessly.' },
      { title: 'Anti-Bot & Proxy Bypass', description: 'Built-in residential proxies and CAPTCHA solving for uninterrupted data collection.' }
    ],
    verified: true,
    popularity: 96,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  },
  {
    id: `tool-${Date.now()}-crawl4ai`,
    name: 'Crawl4AI',
    slug: 'crawl4ai',
    company: 'Unclecode Open Source',
    tagline: 'Open-source, lightning-fast LLM-friendly web crawler & scraper.',
    description: 'Crawl4AI is an open-source, ultra-fast asynchronous web scraping framework designed to extract structured information, clean HTML, and markdown for AI agents and RAG pipelines.',
    category: 'AI Agents',
    category_id: 'ai-agents',
    categoryName: 'AI Agents',
    categorySlug: 'ai-agents',
    additionalCategories: ['ai-data-extraction-agents'],
    priceModel: 'Free & Open Source',
    pricing: [{ plan: 'Open Source', price: 'Free', description: '100% free and self-hosted' }],
    rating: 4.8,
    easeOfUse: 4.6,
    featureRating: 4.9,
    valueForMoney: 5.0,
    performance: 4.9,
    support: 4.5,
    reviewCount: 28,
    websiteUrl: 'https://github.com/unclecode/crawl4ai',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['Open Source', 'Web Crawler', 'RAG', 'Agent Scraping'],
    features: [
      { title: 'Asynchronous Architecture', description: 'High-concurrency scraping delivering up to 6x faster throughput than traditional frameworks.' },
      { title: 'Semantic Chunking', description: 'Splits extracted content into semantically rich chunks ready for vector embeddings.' },
      { title: 'Heuristic Filtering', description: 'Automatically filters noise, navigation bars, and cookie banners.' }
    ],
    verified: true,
    popularity: 94,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  },
  {
    id: `tool-${Date.now()}-scrapegraphai`,
    name: 'ScrapeGraphAI',
    slug: 'scrapegraphai',
    company: 'ScrapeGraphAI Team',
    tagline: 'Python library that uses LLMs and direct graph logic to create scraping pipelines for any website.',
    description: 'ScrapeGraphAI is a Python scraping library that leverages Large Language Models and direct graph logic to automatically create scraping pipelines for websites, documents, and XML/JSON endpoints without manual XPath writing.',
    category: 'AI Agents',
    category_id: 'ai-agents',
    categoryName: 'AI Agents',
    categorySlug: 'ai-agents',
    additionalCategories: ['ai-data-extraction-agents'],
    priceModel: 'Free & Open Source',
    pricing: [{ plan: 'Open Source', price: 'Free', description: 'MIT Licensed' }],
    rating: 4.7,
    easeOfUse: 4.5,
    featureRating: 4.8,
    valueForMoney: 5.0,
    performance: 4.7,
    support: 4.4,
    reviewCount: 19,
    websiteUrl: 'https://github.com/ScrapeGraphAI/Scrapegraph-ai',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['Graph Scraper', 'Python', 'LLM Extraction', 'Open Source'],
    features: [
      { title: 'Prompt-Based Scraping', description: 'Simply state what you want in plain natural language; the LLM agent discovers the data nodes.' },
      { title: 'Graph-Driven Execution', description: 'Modular nodes for fetching, parsing, and formatting structured outputs.' },
      { title: 'Multi-LLM Support', description: 'Compatible with OpenAI, Anthropic Claude, Groq, Ollama, and local models.' }
    ],
    verified: true,
    popularity: 92,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  },
  {
    id: `tool-${Date.now()}-spider-cloud-ai`,
    name: 'Spider Cloud AI',
    slug: 'spider-cloud-ai',
    company: 'Spider Open Source',
    tagline: 'Fastest open-source web crawler and scraper API tailored for AI agent context gathering.',
    description: 'Spider Cloud AI is an enterprise-grade web crawler and scraper delivering high-speed data extraction, LLM-ready markdown, and headless browser emulation at unmatched concurrency and speed.',
    category: 'AI Agents',
    category_id: 'ai-agents',
    categoryName: 'AI Agents',
    categorySlug: 'ai-agents',
    additionalCategories: ['ai-data-extraction-agents'],
    priceModel: 'Freemium',
    pricing: [{ plan: 'Free', price: '$0/mo', description: 'Free credits on signup' }, { plan: 'Scale', price: '$49/mo', description: 'High throughput crawling' }],
    rating: 4.8,
    easeOfUse: 4.7,
    featureRating: 4.9,
    valueForMoney: 4.8,
    performance: 5.0,
    support: 4.6,
    reviewCount: 22,
    websiteUrl: 'https://spider.cloud',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['Web Crawler', 'Fast API', 'AI Agents', 'Headless Browser'],
    features: [
      { title: 'Sub-Second Page Scraping', description: 'Built with Rust for ultra-low latency crawling and page downloads.' },
      { title: 'Autonomous Link Traversal', description: 'Crawls thousands of subdomains and pages adhering to custom depth constraints.' },
      { title: 'LLM Optimized Output', description: 'Outputs sanitized markdown ready for immediate RAG indexing.' }
    ],
    verified: true,
    popularity: 91,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  },
  {
    id: `tool-${Date.now()}-browse-ai`,
    name: 'Browse AI',
    slug: 'browse-ai',
    company: 'Browse AI Inc.',
    tagline: 'Train a web robot in 2 minutes to extract and monitor structured data from any website without code.',
    description: 'Browse AI allows users and teams to build autonomous web data extraction robots in minutes. Simply click what you want extracted; Browse AI learns the pattern, monitors changes, and pipes data to Google Sheets or webhooks.',
    category: 'AI Agents',
    category_id: 'ai-agents',
    categoryName: 'AI Agents',
    categorySlug: 'ai-agents',
    additionalCategories: ['ai-data-extraction-agents'],
    priceModel: 'Freemium',
    pricing: [{ plan: 'Free', price: '$0/mo', description: '50 credits/mo' }, { plan: 'Starter', price: '$39/mo', description: '2,000 credits/mo' }],
    rating: 4.7,
    easeOfUse: 4.9,
    featureRating: 4.7,
    valueForMoney: 4.6,
    performance: 4.7,
    support: 4.6,
    reviewCount: 45,
    websiteUrl: 'https://browse.ai',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['No-Code Scraper', 'Data Extraction', 'Change Monitoring', 'Web Automation'],
    features: [
      { title: 'Zero-Code Robot Training', description: 'Point-and-click interface records user interactions and builds extraction flows automatically.' },
      { title: 'Scheduled Monitoring', description: 'Run robots on recurring cron intervals to alert on pricing or inventory changes.' },
      { title: 'Turnkey Integration', description: 'Sync directly to Zapier, Make, Google Sheets, Airtable, and custom webhooks.' }
    ],
    verified: true,
    popularity: 95,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  }
];

// Check if already seeded
for (const newTool of newExtractionTools) {
  if (!tools.some((t: any) => t.slug === newTool.slug)) {
    tools.push(newTool);
  }
}

fs.writeFileSync(toolsFilePath, JSON.stringify(tools, null, 2), 'utf8');
console.log('Successfully updated tools.json. Total tools:', tools.length);
