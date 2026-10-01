import fs from 'fs';
import path from 'path';

const toolsFilePath = path.join(process.cwd(), 'data', 'tools.json');
const tools = JSON.parse(fs.readFileSync(toolsFilePath, 'utf8'));

// 1. Tag existing tools
const mappings: Record<string, string[]> = {
  // Twitter / X
  'tweethunter': ['ai-twitter-x-growth'],
  'typefully': ['ai-twitter-x-growth'],
  'postwise': ['ai-twitter-x-growth'],
  'tribescaler': ['ai-twitter-x-growth'],
  'tweetmonk': ['ai-twitter-x-growth'],

  // LinkedIn
  'taplio': ['ai-linkedin-post-generators'],
  'salesflow-linkedin-automation': ['ai-linkedin-post-generators'],

  // Schedulers
  'buffer': ['ai-social-media-schedulers'],
  'later-ai': ['ai-social-media-schedulers'],
  'publer': ['ai-social-media-schedulers'],
  'metricool': ['ai-social-media-schedulers'],
  'loomly-ai': ['ai-social-media-schedulers'],
  'planable': ['ai-social-media-schedulers'],

  // Captions & Hashtags
  'predis-ai': ['ai-instagram-tiktok-captions'],
  'flick': ['ai-instagram-tiktok-captions'],
  'ocoya': ['ai-instagram-tiktok-captions'],
  'flick-hashtags': ['ai-instagram-tiktok-captions'],
  'contentfries': ['ai-instagram-tiktok-captions'],

  // Social Listening & Sentiment
  'brand24-ai': ['ai-social-listening-analytics'],
  'hootsuite-analytics-ai': ['ai-social-listening-analytics'],
  'keyhole-social-suite': ['ai-social-listening-analytics'],
  'agorapulse-ai': ['ai-social-listening-analytics'],
  'napoleoncat-social-ai': ['ai-social-listening-analytics'],
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

// 2. Seed 3 Premier LinkedIn & Personal Branding Tools
const newSocialTools = [
  {
    id: `tool-${Date.now()}-authoredup`,
    name: 'AuthoredUp',
    slug: 'authoredup',
    company: 'AuthoredUp',
    tagline: 'The all-in-one content creation tool for LinkedIn professionals and creators.',
    description: 'AuthoredUp is an elite LinkedIn content creation suite that provides real-time post previews, rich text formatting, draft versioning, and comprehensive analytics to scale professional reach.',
    category: 'AI Social Media Tools',
    category_id: 'ai-social-media',
    categoryName: 'AI Social Media Tools',
    categorySlug: 'ai-social-media-tools',
    additionalCategories: ['ai-linkedin-post-generators'],
    priceModel: 'Paid',
    pricing: [{ plan: 'Individual', price: '$19.95/mo', description: 'Unlimited posts & live previews' }, { plan: 'Business', price: '$29.95/mo', description: 'Advanced analytics & team presets' }],
    rating: 4.9,
    easeOfUse: 4.9,
    featureRating: 4.8,
    valueForMoney: 4.8,
    performance: 4.9,
    support: 4.8,
    reviewCount: 45,
    websiteUrl: 'https://authoredup.com',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['LinkedIn Tool', 'Post Formatter', 'Personal Branding', 'Creator Analytics'],
    features: [
      { title: 'Live Device Previews', description: 'Preview exact line breaks and "see more" cutoff points on desktop, tablet, and mobile.' },
      { title: 'Snippet & Hook Library', description: 'Save winning openers, calls-to-action, and signatures for instant insertion.' },
      { title: 'Historical Performance Tracking', description: 'Compare post metrics side-by-side to understand what content drives client leads.' }
    ],
    verified: true,
    popularity: 96,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  },
  {
    id: `tool-${Date.now()}-supergrow`,
    name: 'Supergrow',
    slug: 'supergrow',
    company: 'Supergrow AI',
    tagline: 'Create high-converting LinkedIn carousels, posts, and schedule formatting.',
    description: 'Supergrow helps founders, executives, and marketing teams build their personal brand on LinkedIn. It generates carousels, questions, storytelling posts, and formats everything for maximum engagement.',
    category: 'AI Social Media Tools',
    category_id: 'ai-social-media',
    categoryName: 'AI Social Media Tools',
    categorySlug: 'ai-social-media-tools',
    additionalCategories: ['ai-linkedin-post-generators'],
    priceModel: 'Paid',
    pricing: [{ plan: 'Starter', price: '$19/mo', description: '30 AI posts/mo' }, { plan: 'Pro', price: '$39/mo', description: 'Unlimited AI posts & carousel generator' }],
    rating: 4.8,
    easeOfUse: 4.8,
    featureRating: 4.8,
    valueForMoney: 4.7,
    performance: 4.8,
    support: 4.6,
    reviewCount: 32,
    websiteUrl: 'https://supergrow.ai',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['LinkedIn Carousels', 'Personal Brand', 'Content Repurposing', 'Post Generator'],
    features: [
      { title: 'AI Carousel Maker', description: 'Turn long articles, podcasts, or notes into beautifully formatted PDF carousels.' },
      { title: 'Viral Post Templates', description: 'Tested frameworks for launch announcements, lessons learned, and case studies.' },
      { title: 'LinkedIn Direct Scheduling', description: 'Schedule text, image, and PDF carousel posts directly to LinkedIn.' }
    ],
    verified: true,
    popularity: 92,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  },
  {
    id: `tool-${Date.now()}-engage-ai`,
    name: 'Engage AI',
    slug: 'engage-ai',
    company: 'Engage AI',
    tagline: 'Second brain AI copilot to write insightful comments on LinkedIn.',
    description: 'Engage AI helps B2B professionals and SDRs build relationships on LinkedIn by generating thoughtful, relevant, and personalized comments on prospective client posts in seconds.',
    category: 'AI Social Media Tools',
    category_id: 'ai-social-media',
    categoryName: 'AI Social Media Tools',
    categorySlug: 'ai-social-media-tools',
    additionalCategories: ['ai-linkedin-post-generators'],
    priceModel: 'Freemium',
    pricing: [{ plan: 'Free', price: '$0/mo', description: '10 comments / day' }, { plan: 'Pro', price: '$30/mo', description: 'Unlimited AI comments & lead monitoring' }],
    rating: 4.7,
    easeOfUse: 4.9,
    featureRating: 4.7,
    valueForMoney: 4.8,
    performance: 4.7,
    support: 4.5,
    reviewCount: 39,
    websiteUrl: 'https://engage-ai.co',
    logoUrl: 'https://via.placeholder.com/200',
    tags: ['LinkedIn Engagement', 'AI Commenting', 'B2B Networking', 'Social Selling'],
    features: [
      { title: 'Context-Aware Responses', description: 'Generates insightful observations rather than generic "great post" spam.' },
      { title: 'Multiple Tone Presets', description: 'Switch between Friendly, Disagreeable, Congratulatory, and Thought-Provoking.' },
      { title: 'Prospect Monitoring', description: 'Create target account lists to comment immediately whenever key decision-makers publish.' }
    ],
    verified: true,
    popularity: 93,
    status: 'Published',
    editorialQualityScore: 'Tier A'
  }
];

for (const newTool of newSocialTools) {
  if (!tools.some((t: any) => t.slug === newTool.slug)) {
    tools.push(newTool);
  }
}

fs.writeFileSync(toolsFilePath, JSON.stringify(tools, null, 2), 'utf8');
console.log('Successfully updated tools.json with Social Media tags and tools. Total tools:', tools.length);
