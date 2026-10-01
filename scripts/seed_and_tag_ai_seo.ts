import fs from 'fs';
import path from 'path';

const toolsFilePath = path.join(process.cwd(), 'data', 'tools.json');
const tools = JSON.parse(fs.readFileSync(toolsFilePath, 'utf8'));

// 1. Mappings for existing tools
const mappings: Record<string, string[]> = {
  // Keyword Research & Topic Clustering
  'semrush-ai': ['ai-keyword-research-clustering'],
  'lowfruits': ['ai-keyword-research-clustering'],
  'rankiq': ['ai-keyword-research-clustering'],
  'se-ranking-copilot': ['ai-keyword-research-clustering'],
  'ahrefs-ai': ['ai-keyword-research-clustering'],

  // Content Optimization & SERP Analyzers
  'surfer': ['ai-seo-content-optimizers'],
  'neuronwriter': ['ai-seo-content-optimizers'],
  'clearscope': ['ai-seo-content-optimizers'],
  'frase': ['ai-seo-content-optimizers'],
  'marketmuse': ['ai-seo-content-optimizers'],
  'pageoptimizer-pro': ['ai-seo-content-optimizers'],

  // Technical SEO & Site Audit Bots
  'alli-ai': ['ai-technical-seo-auditors'],
  'morningscore-seo-platform': ['ai-technical-seo-auditors'],
  'scalenut': ['ai-technical-seo-auditors'],

  // Programmatic SEO Builders
  'letterdrop': ['ai-programmatic-seo-builders'],
  'outranking': ['ai-programmatic-seo-builders'],
  'seowind': ['ai-programmatic-seo-builders'],

  // Internal Linking & Semantic Graph Builders
  'inlinks': ['ai-internal-linking-optimizers'],
  'wordlift': ['ai-internal-linking-optimizers', 'ai-technical-seo-auditors'],
  'rankmath-ai': ['ai-internal-linking-optimizers', 'ai-technical-seo-auditors'],
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

// 2. Seed 4 Premier Tools for Programmatic SEO and Internal Linking
const newSeoTools = [
  {
    id: `tool-${Date.now()}-byword-ai`,
    name: 'Byword.ai',
    slug: 'byword-ai',
    company: 'Byword Systems',
    tagline: 'Generate high-quality, SEO-optimized programmatic content and mass articles at scale.',
    description: 'Byword is a specialized programmatic SEO platform that lets publishers and growth marketers generate thousands of research-backed, indexable articles from keyword lists, custom schemas, and programmatic data.',
    category: 'AI SEO Tools',
    category_id: 'ai-seo-tools',
    categoryName: 'AI SEO Tools',
    categorySlug: 'ai-seo-tools',
    additionalCategories: ['ai-programmatic-seo-builders'],
    priceModel: 'Paid',
    pricing: [{ plan: 'Starter', price: '$99', description: '50 articles' }, { plan: 'Scale', price: '$499', description: '300 articles' }],
    rating: 4.8,
    easeOfUse: 4.9,
    featureRating: 4.8,
    valueForMoney: 4.7,
    performance: 4.9,
    support: 4.7,
    reviewCount: 36,
    websiteUrl: 'https://byword.ai',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['Programmatic SEO', 'Mass Content', 'Long-Tail Articles', 'AI Writing'],
    features: [
      { title: 'Programmatic Batch Generation', description: 'Input a spreadsheet of 1,000+ keywords to auto-generate fully formatted articles.' },
      { title: 'Image & Internal Link Automation', description: 'Automatically inserts contextually relevant royalty-free images and internal cross-links.' },
      { title: 'CMS Sync', description: 'Direct 1-click publishing pipelines to WordPress, Webflow, Shopify, and Ghost.' }
    ],
    verified: true,
    popularity: 94,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  },
  {
    id: `tool-${Date.now()}-seomatic`,
    name: 'SEOmatic',
    slug: 'seomatic',
    company: 'SEOmatic',
    tagline: 'Automate programmatic SEO pages and mass content with data-driven templates.',
    description: 'SEOmatic allows marketers to build programmatic SEO sites using spreadsheet data and dynamic AI templates without writing code. Rank for thousands of long-tail location and comparison searches.',
    category: 'AI SEO Tools',
    category_id: 'ai-seo-tools',
    categoryName: 'AI SEO Tools',
    categorySlug: 'ai-seo-tools',
    additionalCategories: ['ai-programmatic-seo-builders'],
    priceModel: 'Paid',
    pricing: [{ plan: 'Starter', price: '$49/mo', description: '5,000 pages' }, { plan: 'Pro', price: '$99/mo', description: '20,000 pages' }],
    rating: 4.7,
    easeOfUse: 4.8,
    featureRating: 4.7,
    valueForMoney: 4.8,
    performance: 4.7,
    support: 4.5,
    reviewCount: 24,
    websiteUrl: 'https://seomatic.ai',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['Programmatic SEO', 'Page Generator', 'No-Code SEO', 'Data Templates'],
    features: [
      { title: 'Spreadsheet Driven', description: 'Connect CSV or Airtable datasets to spin up comprehensive category comparisons.' },
      { title: 'Custom AI Prompts', description: 'Generate unique spin variations per section to eliminate duplicate content issues.' },
      { title: 'Dynamic Metadata', description: 'Auto-computes OpenGraph titles, meta descriptions, and schema JSON-LD.' }
    ],
    verified: true,
    popularity: 91,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  },
  {
    id: `tool-${Date.now()}-link-whisper`,
    name: 'Link Whisper',
    slug: 'link-whisper',
    company: 'Link Whisper LLC',
    tagline: 'AI-powered smart internal linking suggestions and automated link distribution.',
    description: 'Link Whisper is an intelligent internal linking tool that analyzes site taxonomy and uses NLP algorithms to suggest contextual internal links as you write, while fixing broken links and orphan content.',
    category: 'AI SEO Tools',
    category_id: 'ai-seo-tools',
    categoryName: 'AI SEO Tools',
    categorySlug: 'ai-seo-tools',
    additionalCategories: ['ai-internal-linking-optimizers'],
    priceModel: 'Paid',
    pricing: [{ plan: 'Single Site', price: '$77/yr', description: 'Full feature license' }, { plan: '3 Sites', price: '$117/yr', description: 'Agency license' }],
    rating: 4.8,
    easeOfUse: 4.7,
    featureRating: 4.9,
    valueForMoney: 4.8,
    performance: 4.8,
    support: 4.7,
    reviewCount: 65,
    websiteUrl: 'https://linkwhisper.com',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['Internal Linking', 'Topic Silos', 'Orphan Pages', 'WordPress SEO'],
    features: [
      { title: 'Automated Link Suggestions', description: 'Real-time NLP engine suggests relevant internal links with targeted anchor text.' },
      { title: 'Orphan Page Audit', description: 'Quickly locates and builds incoming links to neglected pages with zero inbound links.' },
      { title: 'Auto-Linking by Keyword', description: 'Automatically links specific focus keywords across your entire post library.' }
    ],
    verified: true,
    popularity: 96,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  },
  {
    id: `tool-${Date.now()}-linkstorm`,
    name: 'LinkStorm',
    slug: 'linkstorm',
    company: 'LinkStorm AI',
    tagline: 'Audit internal links, discover high-equity anchor text, and optimize topic authority.',
    description: 'LinkStorm is a cloud-based internal linking platform for any CMS. It crawls your entire domain, models semantic content graphs, and pinpoints where adding a link will pass PageRank and drive search rankings.',
    category: 'AI SEO Tools',
    category_id: 'ai-seo-tools',
    categoryName: 'AI SEO Tools',
    categorySlug: 'ai-seo-tools',
    additionalCategories: ['ai-internal-linking-optimizers'],
    priceModel: 'Freemium',
    pricing: [{ plan: 'Free', price: '$0/mo', description: '100 link suggestions' }, { plan: 'Pro', price: '$39/mo', description: 'Unlimited link audits' }],
    rating: 4.7,
    easeOfUse: 4.8,
    featureRating: 4.7,
    valueForMoney: 4.8,
    performance: 4.8,
    support: 4.6,
    reviewCount: 29,
    websiteUrl: 'https://linkstorm.io',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['Internal Links', 'Semantic SEO', 'Anchor Text', 'Domain Equity'],
    features: [
      { title: 'Universal CMS Support', description: 'Works seamlessly across Next.js, Webflow, Shopify, custom static sites, and WordPress.' },
      { title: 'Topic Cluster Modeling', description: 'Groups related articles into thematic clusters to ensure clean silo architecture.' },
      { title: 'Anchor Text Diversity Analysis', description: 'Prevents over-optimization penalties by analyzing anchor distribution.' }
    ],
    verified: true,
    popularity: 92,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  }
];

for (const newTool of newSeoTools) {
  if (!tools.some((t: any) => t.slug === newTool.slug)) {
    tools.push(newTool);
  }
}

fs.writeFileSync(toolsFilePath, JSON.stringify(tools, null, 2), 'utf8');
console.log('Successfully updated tools.json with SEO tags and tools. Total tools:', tools.length);
