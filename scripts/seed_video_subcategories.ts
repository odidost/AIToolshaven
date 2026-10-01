import fs from 'fs';
import path from 'path';

const projectDir = process.cwd();
const toolsJsonPath = path.join(projectDir, 'data', 'tools.json');
const categoriesJsonPath = path.join(projectDir, 'data', 'categories.json');

const tools: any[] = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));
const categories: any[] = JSON.parse(fs.readFileSync(categoriesJsonPath, 'utf8'));

// Strict slug-based tags for existing tools (NO loose substring matching!)
const tagMap: Record<string, string[]> = {
  'ai-shorts-repurposing': [
    'opus-clip',
    'klap-ai',
    'submagic',
    'vizard-ai',
    'flexclip-ai-video'
  ],
  'ai-faceless-video-makers': [
    'invideo-ai',
    'raw-shorts-ai'
  ],
  'ai-talking-avatars': [
    'heygen',
    'synthesia',
    'deepbrain-ai',
    'hour-one',
    'colossyan-creator'
  ],
  'ai-video-lip-sync-dubbing': [
    'rask-ai-localization',
    'captions'
  ],
  'ai-ugc-video-ads': [
    'vizard-ai'
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
  // 1. AI Faceless Video Generators
  {
    name: 'Crayo AI',
    slug: 'crayo-ai',
    tagline: 'Fastest way to create viral faceless TikTok, Reels, and Shorts videos',
    description: 'Crayo AI automates the creation of viral faceless videos by generating engaging scripts, voiceovers, dynamic background gameplay or footage, and stylized captions in minutes.',
    websiteUrl: 'https://crayo.ai',
    category: 'AI Video Generators',
    category_id: 'c3',
    categoryName: 'AI Video Generators',
    categorySlug: 'ai-video-generators',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.8,
    isFeatured: true,
    isPopular: true,
    isTrending: true,
    verified: true,
    tags: ['Faceless Video', 'TikTok Shorts', 'Automated Video', 'Viral Clips'],
    additionalCategories: ['ai-faceless-video-makers']
  },
  {
    name: 'AutoShorts.ai',
    slug: 'autoshorts-ai',
    tagline: 'Automated YouTube Shorts and TikTok channel management on complete autopilot',
    description: 'AutoShorts.ai generates, renders, and schedules niche faceless videos for daily upload to YouTube Shorts and TikTok without manual intervention.',
    websiteUrl: 'https://autoshorts.ai',
    category: 'AI Video Generators',
    category_id: 'c3',
    categoryName: 'AI Video Generators',
    categorySlug: 'ai-video-generators',
    pricing: 'Paid',
    priceModel: 'Paid',
    rating: 4.7,
    verified: true,
    tags: ['Automated Channel', 'YouTube Shorts', 'Faceless Content'],
    additionalCategories: ['ai-faceless-video-makers']
  },
  {
    name: 'Fliki',
    slug: 'fliki',
    tagline: 'Transform blog articles and text scripts into videos with lifelike AI voiceovers',
    description: 'Fliki converts written scripts, tweets, and blog posts into high-definition videos with rich media assets and over 2,000 realistic voices in 75+ languages.',
    websiteUrl: 'https://fliki.ai',
    category: 'AI Video Generators',
    category_id: 'c3',
    categoryName: 'AI Video Generators',
    categorySlug: 'ai-video-generators',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.8,
    verified: true,
    tags: ['Text to Video', 'Voiceover Video', 'Article to Video'],
    additionalCategories: ['ai-faceless-video-makers']
  },

  // 2. AI Video Translation & Lip-Sync Dubbers
  {
    name: 'LipDub AI',
    slug: 'lipdub-ai',
    tagline: 'AI video dubbing and translation with synchronized photorealistic lip movements',
    description: 'LipDub AI translates speech into dozens of languages while modifying mouth movements to match the translated audio naturally.',
    websiteUrl: 'https://lipdub.ai',
    category: 'AI Video Generators',
    category_id: 'c3',
    categoryName: 'AI Video Generators',
    categorySlug: 'ai-video-generators',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.8,
    isFeatured: true,
    isPopular: true,
    verified: true,
    tags: ['Lip Sync', 'Video Dubbing', 'Speech Translation'],
    additionalCategories: ['ai-video-lip-sync-dubbing']
  },
  {
    name: 'Dubverse.ai',
    slug: 'dubverse-ai',
    tagline: 'Generative video dubbing and automated subtitling in 30+ global languages',
    description: 'Dubverse uses self-learning AI engines to dub videos into multiple languages with precise emotional cadence and accurate subtitle syncing.',
    websiteUrl: 'https://dubverse.ai',
    category: 'AI Video Generators',
    category_id: 'c3',
    categoryName: 'AI Video Generators',
    categorySlug: 'ai-video-generators',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.7,
    verified: true,
    tags: ['Video Localization', 'Subtitles', 'Multilingual Dubbing'],
    additionalCategories: ['ai-video-lip-sync-dubbing']
  },
  {
    name: 'ElevenLabs Video Dubber',
    slug: 'elevenlabs-video-dubbing',
    tagline: 'Automated video translation preserving speaker tone, emotion, and vocal nuance',
    description: 'ElevenLabs Video Dubber automatically translates audio in videos into 29+ languages while cloning the original speaker’s tone and timing.',
    websiteUrl: 'https://elevenlabs.io/dubbing',
    category: 'AI Video Generators',
    category_id: 'c3',
    categoryName: 'AI Video Generators',
    categorySlug: 'ai-video-generators',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.9,
    verified: true,
    tags: ['ElevenLabs', 'Voice Cloning', 'Video Translation'],
    additionalCategories: ['ai-video-lip-sync-dubbing']
  },

  // 3. AI Video Ad & UGC Generators
  {
    name: 'Creatify AI',
    slug: 'creatify-ai',
    tagline: 'Generate high-converting video ads and UGC commercial creatives from product URLs',
    description: 'Creatify analyzes any product link to generate engaging video scripts, synthetic UGC actors, and conversion-optimized TikTok and Meta ad formats in minutes.',
    websiteUrl: 'https://creatify.ai',
    category: 'AI Video Generators',
    category_id: 'c3',
    categoryName: 'AI Video Generators',
    categorySlug: 'ai-video-generators',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.9,
    isFeatured: true,
    isPopular: true,
    verified: true,
    tags: ['UGC Ads', 'Video Ad Generator', 'TikTok Ads', 'Meta Creatives'],
    additionalCategories: ['ai-ugc-video-ads']
  },
  {
    name: 'Arcads AI',
    slug: 'arcads-ai',
    tagline: 'Create photorealistic AI UGC actors for commercial TikTok and Meta video ads',
    description: 'Arcads lets advertisers type scripts to have lifelike AI actors deliver testimonial and review videos tailored for social performance marketing.',
    websiteUrl: 'https://arcads.ai',
    category: 'AI Video Generators',
    category_id: 'c3',
    categoryName: 'AI Video Generators',
    categorySlug: 'ai-video-generators',
    pricing: 'Paid',
    priceModel: 'Paid',
    rating: 4.8,
    verified: true,
    tags: ['AI Actors', 'UGC Video', 'Performance Marketing'],
    additionalCategories: ['ai-ugc-video-ads']
  },
  {
    name: 'Tagshop AI',
    slug: 'tagshop-ai',
    tagline: 'Shoppable video ads and UGC creator generation for modern e-commerce brands',
    description: 'Tagshop combines UGC video generation with shoppable product tags to accelerate checkout rates across social commerce platforms.',
    websiteUrl: 'https://tagshop.ai',
    category: 'AI Video Generators',
    category_id: 'c3',
    categoryName: 'AI Video Generators',
    categorySlug: 'ai-video-generators',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.7,
    verified: true,
    tags: ['Shoppable Video', 'E-Commerce Video', 'UGC Ads'],
    additionalCategories: ['ai-ugc-video-ads']
  },
  {
    name: 'Munch AI',
    slug: 'munch-ai',
    tagline: 'AI video repurposing platform extracting contextual clips with trend analysis',
    description: 'Munch automatically extracts the most engaging segments from long videos with trending keywords, automated subtitles, and multi-platform aspect ratio formatting.',
    websiteUrl: 'https://getmunch.com',
    category: 'AI Video Generators',
    category_id: 'c3',
    categoryName: 'AI Video Generators',
    categorySlug: 'ai-video-generators',
    pricing: 'Paid',
    priceModel: 'Paid',
    rating: 4.8,
    verified: true,
    tags: ['Video Repurposing', 'Shorts', 'Trend Analysis'],
    additionalCategories: ['ai-shorts-repurposing']
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
  'ai-shorts-repurposing',
  'ai-faceless-video-makers',
  'ai-talking-avatars',
  'ai-video-lip-sync-dubbing',
  'ai-ugc-video-ads'
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

console.log(`\n✓ Category 3 Seed completed! Tagged: ${taggedCount}, Added: ${addedCount} new tools.`);
