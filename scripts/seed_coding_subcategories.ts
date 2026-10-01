import fs from 'fs';
import path from 'path';

const projectDir = process.cwd();
const toolsJsonPath = path.join(projectDir, 'data', 'tools.json');
const categoriesJsonPath = path.join(projectDir, 'data', 'categories.json');

const tools: any[] = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));
const categories: any[] = JSON.parse(fs.readFileSync(categoriesJsonPath, 'utf8'));

// Strict slug-based tags for existing tools (NO loose substring matching!)
const tagMap: Record<string, string[]> = {
  'ai-app-builders-vibe-coding': [
    'lovable-dev',
    'bolt-new',
    'v0-dev',
    'replit-agent'
  ],
  'ai-code-review-security': [
    'coderabbit',
    'qodo-ai',
    'sourcery',
    'greptile-ai'
  ],
  'ai-figma-to-code': [
    'v0-dev'
  ],
  'ai-sql-query-generators': [
    'askcodi'
  ],
  'ai-automated-test-generators': [
    'qodo-ai'
  ]
};

// Apply tags to existing tools
let taggedCount = 0;
for (const tool of tools) {
  const slug = (tool.slug || '').toLowerCase();
  for (const [subcatSlug, slugsToMatch] of Object.entries(tagMap)) {
    if (slugsToMatch.includes(slug)) {
      tool.additionalCategories = tool.additionalCategories || [];
      if (!tool.additionalCategories.includes(subcatSlug)) {
        tool.additionalCategories.push(subcatSlug);
        taggedCount++;
        console.log(`Strictly tagged existing tool "${tool.name}" with "${subcatSlug}"`);
      }
    }
  }
}

// Seed tools to add
const seedTools = [
  // 1. AI Full-Stack App Builders ("Vibe Coding")
  {
    name: 'Marblism',
    slug: 'marblism',
    tagline: 'Generate complete full-stack React and Node.js SaaS applications from prompts',
    description: 'Marblism creates production-ready web apps with backend APIs, database schemas, authentication, and Stripe payments fully integrated from natural language specifications.',
    websiteUrl: 'https://marblism.com',
    category: 'Coding Assistants',
    category_id: 'c5',
    categoryName: 'Coding Assistants',
    categorySlug: 'coding-assistants',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.8,
    isFeatured: true,
    isPopular: true,
    isTrending: true,
    verified: true,
    tags: ['Full Stack App', 'Vibe Coding', 'Next.js App', 'SaaS Generator'],
    additionalCategories: ['ai-app-builders-vibe-coding']
  },

  // 2. AI Code Review & Security Bots
  {
    name: 'Snyk Code',
    slug: 'snyk-code',
    tagline: 'Developer-first AI security and vulnerability scanner for GitHub and GitLab',
    description: 'Snyk Code scans source code in real time using specialized semantic AI models to detect vulnerabilities, secrets leaks, and compliance flaws before merging.',
    websiteUrl: 'https://snyk.io',
    category: 'Coding Assistants',
    category_id: 'c5',
    categoryName: 'Coding Assistants',
    categorySlug: 'coding-assistants',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.8,
    verified: true,
    tags: ['Code Security', 'Vulnerability Scanner', 'Static Analysis'],
    additionalCategories: ['ai-code-review-security']
  },

  // 3. AI Figma-to-Code & UI Generators
  {
    name: 'Locofy.ai',
    slug: 'locofy-ai',
    tagline: 'Convert Figma and Adobe XD designs into production-ready frontend code',
    description: 'Locofy turns design files into modular, clean React, React Native, Vue, and Tailwind CSS components with responsive breakpoints and live animations.',
    websiteUrl: 'https://locofy.ai',
    category: 'Coding Assistants',
    category_id: 'c5',
    categoryName: 'Coding Assistants',
    categorySlug: 'coding-assistants',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.8,
    isFeatured: true,
    isPopular: true,
    verified: true,
    tags: ['Figma to Code', 'React Generator', 'Frontend Code', 'Design Systems'],
    additionalCategories: ['ai-figma-to-code']
  },
  {
    name: 'Anima',
    slug: 'anima-ai',
    tagline: 'Turn Figma design prototypes into clean React and HTML code with zero manual slicing',
    description: 'Anima translates Figma frames into accessible, interactive components and clean CSS code for software teams and design agencies.',
    websiteUrl: 'https://animaapp.com',
    category: 'Coding Assistants',
    category_id: 'c5',
    categoryName: 'Coding Assistants',
    categorySlug: 'coding-assistants',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.7,
    verified: true,
    tags: ['Figma Plugin', 'HTML Export', 'Component Generator'],
    additionalCategories: ['ai-figma-to-code']
  },
  {
    name: 'TeleportHQ',
    slug: 'teleporthq',
    tagline: 'AI visual website builder and Figma code export studio with real-time editing',
    description: 'TeleportHQ enables developers to import Figma designs and instantly publish responsive websites or export clean Next.js and Vue packages.',
    websiteUrl: 'https://teleporthq.io',
    category: 'Coding Assistants',
    category_id: 'c5',
    categoryName: 'Coding Assistants',
    categorySlug: 'coding-assistants',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.6,
    verified: true,
    tags: ['Visual Builder', 'Figma Import', 'Next.js Export'],
    additionalCategories: ['ai-figma-to-code']
  },
  {
    name: 'Bifrost',
    slug: 'bifrost',
    tagline: 'Automated Figma design to clean React component code generator',
    description: 'Bifrost converts Figma visual components into clean, idiomatic React code that adheres to your engineering team’s exact formatting guidelines.',
    websiteUrl: 'https://bifrost.so',
    category: 'Coding Assistants',
    category_id: 'c5',
    categoryName: 'Coding Assistants',
    categorySlug: 'coding-assistants',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.6,
    verified: true,
    tags: ['Design to Code', 'React Components', 'UI Engineering'],
    additionalCategories: ['ai-figma-to-code']
  },

  // 4. AI SQL & Database Query Builders
  {
    name: 'Text2SQL.ai',
    slug: 'text2sql-ai',
    tagline: 'Generate complex SQL queries, optimize indexes, and explain schemas with AI',
    description: 'Text2SQL.ai translates natural language queries into optimized SQL statements across PostgreSQL, MySQL, Snowflake, and BigQuery.',
    websiteUrl: 'https://text2sql.ai',
    category: 'Coding Assistants',
    category_id: 'c5',
    categoryName: 'Coding Assistants',
    categorySlug: 'coding-assistants',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.8,
    isFeatured: true,
    isPopular: true,
    verified: true,
    tags: ['SQL Generator', 'Database Queries', 'PostgreSQL', 'BigQuery'],
    additionalCategories: ['ai-sql-query-generators']
  },
  {
    name: 'AI2sql',
    slug: 'ai2sql',
    tagline: 'Natural language to SQL query generator supporting PostgreSQL, MySQL, and BigQuery',
    description: 'AI2sql enables non-technical founders, analysts, and developers to query databases and generate complex analytical SQL with natural language prompts.',
    websiteUrl: 'https://ai2sql.io',
    category: 'Coding Assistants',
    category_id: 'c5',
    categoryName: 'Coding Assistants',
    categorySlug: 'coding-assistants',
    pricing: 'Paid',
    priceModel: 'Paid',
    rating: 4.7,
    verified: true,
    tags: ['Database AI', 'Query Builder', 'Data Analytics'],
    additionalCategories: ['ai-sql-query-generators']
  },
  {
    name: 'Vanna.ai',
    slug: 'vanna-ai',
    tagline: 'Open-source Python RAG framework for SQL generation from natural language',
    description: 'Vanna is an open-source Python framework that uses retrieval-augmented generation to train on your database metadata and generate hyper-accurate SQL.',
    websiteUrl: 'https://vanna.ai',
    category: 'Coding Assistants',
    category_id: 'c5',
    categoryName: 'Coding Assistants',
    categorySlug: 'coding-assistants',
    pricing: 'Free & Open Source',
    priceModel: 'Free & Open Source',
    rating: 4.9,
    verified: true,
    tags: ['Open Source', 'RAG Framework', 'Python SQL'],
    additionalCategories: ['ai-sql-query-generators']
  },
  {
    name: 'Outerbase',
    slug: 'outerbase',
    tagline: 'AI-powered database interface and query workspace for Postgres, MySQL, and SQLite',
    description: 'Outerbase acts as an intelligent visual layer on top of databases, featuring an AI query copilot, real-time dashboards, and collaborative data exploration.',
    websiteUrl: 'https://outerbase.com',
    category: 'Coding Assistants',
    category_id: 'c5',
    categoryName: 'Coding Assistants',
    categorySlug: 'coding-assistants',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.7,
    verified: true,
    tags: ['Database Studio', 'AI Query Copilot', 'Data Workspace'],
    additionalCategories: ['ai-sql-query-generators']
  },

  // 5. AI Unit & E2E Test Generators
  {
    name: 'Keploy',
    slug: 'keploy',
    tagline: 'Open source zero-code unit and integration testing platform using AI',
    description: 'Keploy automatically generates realistic unit test suites and API mocks by capturing real network traffic and converting it into test fixtures.',
    websiteUrl: 'https://keploy.io',
    category: 'Coding Assistants',
    category_id: 'c5',
    categoryName: 'Coding Assistants',
    categorySlug: 'coding-assistants',
    pricing: 'Free & Open Source',
    priceModel: 'Free & Open Source',
    rating: 4.9,
    isFeatured: true,
    isPopular: true,
    verified: true,
    tags: ['Unit Testing', 'API Mocks', 'Integration Tests', 'Open Source'],
    additionalCategories: ['ai-automated-test-generators']
  },
  {
    name: 'OctoMind',
    slug: 'octomind',
    tagline: 'Auto-generated end-to-end Playwright tests that maintain themselves with AI',
    description: 'OctoMind uses AI agents to discover, generate, and auto-fix Playwright end-to-end web tests directly in CI/CD pipelines without brittle test scripts.',
    websiteUrl: 'https://octomind.dev',
    category: 'Coding Assistants',
    category_id: 'c5',
    categoryName: 'Coding Assistants',
    categorySlug: 'coding-assistants',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.7,
    verified: true,
    tags: ['Playwright Tests', 'E2E Testing', 'Self Healing Tests'],
    additionalCategories: ['ai-automated-test-generators']
  },
  {
    name: 'Diffblue Cover',
    slug: 'diffblue-cover',
    tagline: 'Autonomous Java unit test writing engine for enterprise applications',
    description: 'Diffblue Cover completely automates unit test writing for Java codebases, increasing test coverage and catching regressions with zero developer intervention.',
    websiteUrl: 'https://diffblue.com',
    category: 'Coding Assistants',
    category_id: 'c5',
    categoryName: 'Coding Assistants',
    categorySlug: 'coding-assistants',
    pricing: 'Paid',
    priceModel: 'Paid',
    rating: 4.7,
    verified: true,
    tags: ['Java Testing', 'Automated Coverage', 'Enterprise Code'],
    additionalCategories: ['ai-automated-test-generators']
  },
  {
    name: 'Testim AI',
    slug: 'testim-ai',
    tagline: 'AI-powered automated UI and end-to-end regression testing studio',
    description: 'Testim uses machine learning to stabilize web application test cases, identifying dynamic element changes and eliminating flaky CI builds.',
    websiteUrl: 'https://testim.io',
    category: 'Coding Assistants',
    category_id: 'c5',
    categoryName: 'Coding Assistants',
    categorySlug: 'coding-assistants',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.7,
    verified: true,
    tags: ['UI Testing', 'Flaky Test Fix', 'Regression Tests'],
    additionalCategories: ['ai-automated-test-generators']
  }
];

// Append new seed tools if not already present
let addedCount = 0;
const existingSlugs = new Set(tools.map(t => (t.slug || '').toLowerCase()));

for (const seed of seedTools) {
  if (!existingSlugs.has(seed.slug.toLowerCase())) {
    tools.push({
      ...seed,
      id: `tool-${seed.slug}`,
      status: 'Published'
    });
    existingSlugs.add(seed.slug.toLowerCase());
    addedCount++;
    console.log(`Added seed tool "${seed.name}" (${seed.slug})`);
  } else {
    const found = tools.find(t => (t.slug || '').toLowerCase() === seed.slug.toLowerCase());
    if (found) {
      found.additionalCategories = found.additionalCategories || [];
      seed.additionalCategories.forEach(ac => {
        if (!found.additionalCategories.includes(ac)) {
          found.additionalCategories.push(ac);
          console.log(`Enriched existing tool "${found.name}" with "${ac}"`);
        }
      });
    }
  }
}

// Calculate subcategory tool counts
const subcatSlugs = [
  'ai-app-builders-vibe-coding',
  'ai-code-review-security',
  'ai-figma-to-code',
  'ai-sql-query-generators',
  'ai-automated-test-generators'
];

const subcatCounts: Record<string, number> = {};
for (const subcat of subcatSlugs) {
  const matchCount = tools.filter(t => 
    (t.additionalCategories && t.additionalCategories.includes(subcat)) ||
    (t.category_id === subcat || t.slug === subcat)
  ).length;
  subcatCounts[subcat] = matchCount;
  console.log(`Subcategory ${subcat}: ${matchCount} tools mapped.`);
}

// Update counts in categories.json
for (const cat of categories) {
  if (subcatCounts[cat.slug] !== undefined) {
    cat.count = subcatCounts[cat.slug];
  }
}

// Write back data files
fs.writeFileSync(toolsJsonPath, JSON.stringify(tools, null, 2), 'utf8');
fs.writeFileSync(categoriesJsonPath, JSON.stringify(categories, null, 2), 'utf8');

console.log(`\n✓ Category 4 Seed completed! Tagged: ${taggedCount}, Added: ${addedCount} new tools.`);
