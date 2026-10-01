import fs from 'fs';
import path from 'path';

const projectDir = process.cwd();
const toolsJsonPath = path.join(projectDir, 'data', 'tools.json');
const categoriesJsonPath = path.join(projectDir, 'data', 'categories.json');

const tools: any[] = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));
const categories: any[] = JSON.parse(fs.readFileSync(categoriesJsonPath, 'utf8'));

// Tools to tag into subcategories
const tagMap: Record<string, string[]> = {
  'ai-novel-fiction-writers': [
    'novelcrafter-studio',
    'dabble-writer-ai',
    'laika-writing-assistant',
    'plottr-ai-studio',
    'campfire-writing-studio',
    'ai-dungeon'
  ],
  'ai-youtube-video-scripts': [
    'copyshark-ai',
    'copymaker-ai',
    'contentforge'
  ],
  'ai-academic-essay-polishers': [
    'jenni-ai-assistant',
    'writesmith',
    'moonbeam'
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
        console.log(`Tagged existing tool "${tool.name}" with "${subcatSlug}"`);
      }
    }
  }
}

// Seed tools to add
const seedTools = [
  // 1. AI Humanizers & Detector Bypass
  {
    name: 'Undetectable AI',
    slug: 'undetectable-ai',
    tagline: 'Transforms AI-generated text into completely undetectable, human-grade writing',
    description: 'Undetectable AI is an industry-leading content humanizer that rewrites machine-generated drafts to bypass Turnitin, Originality.ai, GPTZero, and Copyleaks with natural sentence cadence and human phrasing.',
    websiteUrl: 'https://undetectable.ai',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.8,
    isFeatured: true,
    isPopular: true,
    isTrending: true,
    verified: true,
    tags: ['AI Humanizer', 'Detector Bypass', 'Undetectable AI', 'Writing Assistant'],
    additionalCategories: ['ai-humanizers-bypass']
  },
  {
    name: 'StealthGPT',
    slug: 'stealthgpt',
    tagline: 'Undetectable AI engine engineered to bypass Turnitin and major AI content detectors',
    description: 'StealthGPT specializes in creating stealthy, naturally flowing content that resists detection across all academic and enterprise AI detection engines.',
    websiteUrl: 'https://stealthgpt.ai',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Paid',
    priceModel: 'Paid',
    rating: 4.7,
    verified: true,
    tags: ['AI Humanizer', 'Turnitin Bypass', 'Stealth Writing'],
    additionalCategories: ['ai-humanizers-bypass']
  },
  {
    name: 'HideMyAI',
    slug: 'hidemyai',
    tagline: 'Humanizes AI text to evade detection while preserving original context and meaning',
    description: 'HideMyAI converts machine-written text into natural human prose without altering key terminology, making it ideal for blogs, essays, and commercial copy.',
    websiteUrl: 'https://hidemyai.com',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.6,
    verified: true,
    tags: ['AI Humanizer', 'Content Paraphrasing', 'Bypass AI'],
    additionalCategories: ['ai-humanizers-bypass']
  },
  {
    name: 'HIX Bypass',
    slug: 'hix-bypass',
    tagline: 'Advanced AI text humanizer bypassing Originality.ai, GPTZero, and Turnitin',
    description: 'HIX Bypass uses custom natural language models to humanize drafts with 100% human score assurance across multiple AI detection systems.',
    websiteUrl: 'https://hix.ai/bypass',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.7,
    verified: true,
    tags: ['AI Humanizer', 'HIX AI', 'Detector Bypass'],
    additionalCategories: ['ai-humanizers-bypass']
  },
  {
    name: 'BypassGPT',
    slug: 'bypassgpt',
    tagline: 'One-click AI humanizer for transforming ChatGPT drafts into undetectable prose',
    description: 'BypassGPT removes robotic patterns and repetitive sentence structures to deliver clean, undetectable copy that passes enterprise verification.',
    websiteUrl: 'https://bypassgpt.co',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Free Trial',
    priceModel: 'Free Trial',
    rating: 4.6,
    verified: true,
    tags: ['Bypass AI', 'ChatGPT Humanizer', 'Writing'],
    additionalCategories: ['ai-humanizers-bypass']
  },

  // 2. AI YouTube & Video Script Generators
  {
    name: 'Syllaby',
    slug: 'syllaby',
    tagline: 'AI video script generator creating viral outlines and hooks for YouTube and TikTok',
    description: 'Syllaby maps out viral video topic ideas, retention-driven video outlines, and full scripts tailored for YouTube, TikTok, and Instagram Reels.',
    websiteUrl: 'https://syllaby.io',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Paid',
    priceModel: 'Paid',
    rating: 4.8,
    isFeatured: true,
    isPopular: true,
    verified: true,
    tags: ['YouTube Scripts', 'Video Outline', 'Content Creator', 'Viral Hooks'],
    additionalCategories: ['ai-youtube-video-scripts']
  },
  {
    name: 'ScriptMonkey',
    slug: 'scriptmonkey',
    tagline: 'AI-assisted YouTube script writing and retention pacing engine',
    description: 'ScriptMonkey structures long-form YouTube essays, tutorials, and video podcasts with structured pacing, visual cues, and engagement checkpoints.',
    websiteUrl: 'https://scriptmonkey.ai',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.6,
    verified: true,
    tags: ['YouTube Scripts', 'Video Scriptwriting', 'Creator Tools'],
    additionalCategories: ['ai-youtube-video-scripts']
  },
  {
    name: 'TubeSpanner',
    slug: 'tubespanner',
    tagline: 'End-to-end AI script writer and content planning studio for YouTube creators',
    description: 'TubeSpanner combines AI video ideation, teleprompter-ready script drafts, and title generation in a unified creator dashboard.',
    websiteUrl: 'https://tubespanner.com',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.7,
    verified: true,
    tags: ['YouTube Studio', 'Script Generator', 'Teleprompter'],
    additionalCategories: ['ai-youtube-video-scripts']
  },

  // 3. AI Grant & Proposal Writers
  {
    name: 'Grantable',
    slug: 'grantable',
    tagline: 'AI grant proposal assistant helping nonprofits draft and win funding faster',
    description: 'Grantable is an intelligent grant writing platform that indexes an organization’s historical proposals to draft compliant, persuasive grant narratives in minutes.',
    websiteUrl: 'https://grantable.com',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.9,
    isFeatured: true,
    isPopular: true,
    verified: true,
    tags: ['Grant Writing', 'Nonprofit AI', 'Proposal Writer', 'Fundraising'],
    additionalCategories: ['ai-grant-proposal-writers']
  },
  {
    name: 'AutoRFP.ai',
    slug: 'autorfp-ai',
    tagline: 'Generative AI response engine for automated RFPs, RFIs, and security questionnaires',
    description: 'AutoRFP.ai automates complex corporate bids, security questionnaires, and RFPs by retrieving verified technical documentation and organizational answers.',
    websiteUrl: 'https://autorfp.ai',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Paid',
    priceModel: 'Paid',
    rating: 4.8,
    verified: true,
    tags: ['RFP Automation', 'Proposal Software', 'Enterprise Bids'],
    additionalCategories: ['ai-grant-proposal-writers']
  },
  {
    name: 'Loopio AI',
    slug: 'loopio',
    tagline: 'Intelligent RFP response software automating complex sales and vendor bids',
    description: 'Loopio accelerates proposal workflows with enterprise-grade knowledge management and AI-assisted answer generation for global sales teams.',
    websiteUrl: 'https://loopio.com',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Enterprise',
    priceModel: 'Enterprise',
    rating: 4.7,
    verified: true,
    tags: ['RFP Management', 'Sales Proposals', 'Bid Automation'],
    additionalCategories: ['ai-grant-proposal-writers']
  },
  {
    name: 'Grantboost',
    slug: 'grantboost',
    tagline: 'AI grant writing assistant tailored for schools, small nonprofits, and charities',
    description: 'Grantboost provides accessible AI proposal drafting tools to help community nonprofits and educational organizations write winning grant applications.',
    websiteUrl: 'https://grantboost.io',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.6,
    verified: true,
    tags: ['Grant Writing', 'Charity AI', 'Nonprofit Tools'],
    additionalCategories: ['ai-grant-proposal-writers']
  },
  {
    name: 'OpenGrants AI',
    slug: 'opengrants',
    tagline: 'Modern grant discovery and proposal drafting engine for startups and research labs',
    description: 'OpenGrants pairs government grant discovery databases with AI drafting assistants to help innovative businesses secure public capital.',
    websiteUrl: 'https://opengrants.io',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.7,
    verified: true,
    tags: ['Grant Discovery', 'Research Grants', 'Startup Capital'],
    additionalCategories: ['ai-grant-proposal-writers']
  },

  // 4. AI Novel & Fiction Outliners
  {
    name: 'Sudowrite',
    slug: 'sudowrite',
    tagline: 'The AI creative writing copilot built for novelists, authors, and fiction storytellers',
    description: 'Sudowrite is the premier generative writing platform for fiction, offering story engines, character generators, twist recommendations, and sensory descriptive expansion.',
    websiteUrl: 'https://sudowrite.com',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.9,
    isFeatured: true,
    isPopular: true,
    verified: true,
    tags: ['Novel Writing', 'Fiction Author', 'Creative Writing', 'Story Generator'],
    additionalCategories: ['ai-novel-fiction-writers']
  },
  {
    name: 'NovelAI',
    slug: 'novelai',
    tagline: 'GPT-powered AI storytelling companion and interactive world-building sandbox',
    description: 'NovelAI offers uncensored, privacy-focused fiction generation with custom lorebooks, character memory modules, and style emulation for fantasy and sci-fi authors.',
    websiteUrl: 'https://novelai.net',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.8,
    verified: true,
    tags: ['Storytelling', 'World Building', 'Lorebooks', 'Fiction AI'],
    additionalCategories: ['ai-novel-fiction-writers']
  },

  // 5. AI Academic Paper & Essay Polishers
  {
    name: 'Paperpal',
    slug: 'paperpal',
    tagline: 'Real-time AI academic writing and language editing tool for researchers and academics',
    description: 'Paperpal offers journal-readiness checks, academic grammar corrections, and citation-safe phrasing designed specifically for scientific papers and peer-reviewed journals.',
    websiteUrl: 'https://paperpal.com',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.9,
    isFeatured: true,
    isPopular: true,
    verified: true,
    tags: ['Academic Writing', 'Research Papers', 'Journal Editing', 'Grammar'],
    additionalCategories: ['ai-academic-essay-polishers']
  },
  {
    name: 'SciSpace Copilot',
    slug: 'scispace',
    tagline: 'AI research paper reader and academic writing assistant with citation intelligence',
    description: 'SciSpace helps researchers decode academic papers, extract findings, and draft literature reviews with reliable, verifiable citations.',
    websiteUrl: 'https://scispace.com',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.8,
    verified: true,
    tags: ['Research Copilot', 'Academic Citations', 'Literature Review'],
    additionalCategories: ['ai-academic-essay-polishers']
  },
  {
    name: 'Trinka AI',
    slug: 'trinka-ai',
    tagline: 'AI grammar and academic language enhancement software designed for publication-ready papers',
    description: 'Trinka is an AI grammar and style editor built for technical, scientific, and medical writing with over 3,000 journal-specific style guides.',
    websiteUrl: 'https://trinka.ai',
    category: 'AI Writing Tools',
    category_id: 'c1',
    categoryName: 'AI Writing Tools',
    categorySlug: 'ai-writing-tools',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.7,
    verified: true,
    tags: ['Academic Grammar', 'Medical Writing', 'Publication Ready'],
    additionalCategories: ['ai-academic-essay-polishers']
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
    // If tool exists, ensure it has the subcategory tag
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
const subcatCounts: Record<string, number> = {};
for (const subcat of [
  'ai-humanizers-bypass',
  'ai-youtube-video-scripts',
  'ai-grant-proposal-writers',
  'ai-novel-fiction-writers',
  'ai-academic-essay-polishers'
]) {
  const matchCount = tools.filter(t => 
    t.additionalCategories && t.additionalCategories.includes(subcat)
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

console.log(`\n✓ Seed completed! Tagged: ${taggedCount}, Added: ${addedCount} new tools.`);
