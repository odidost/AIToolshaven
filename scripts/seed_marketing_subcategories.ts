import * as fs from 'fs';

const toolsFilePath = 'data/tools.json';
const tools = JSON.parse(fs.readFileSync(toolsFilePath, 'utf8'));

// Helper to add additionalCategories without duplicates
function addCategoryToTool(toolMatchFn: (t: any) => boolean, categorySlug: string) {
  let count = 0;
  for (const t of tools) {
    if (toolMatchFn(t)) {
      t.additionalCategories = t.additionalCategories || [];
      if (!t.additionalCategories.includes(categorySlug)) {
        t.additionalCategories.push(categorySlug);
        console.log(`Tagged existing tool "${t.name}" (${t.slug}) with ${categorySlug}`);
      }
      count++;
    }
  }
  return count;
}

// 1. Tag ai-cold-email-outreach
addCategoryToTool(t => t.id === 'instantly' || t.slug === 'instantly', 'ai-cold-email-outreach');
addCategoryToTool(t => t.slug === 'smartlead-ai' || t.id === '3eacab44-7e12-4177-bd29-ad1dd4a6b90e', 'ai-cold-email-outreach');
addCategoryToTool(t => t.id === 'clay' || t.slug === 'clay-ai', 'ai-cold-email-outreach');
addCategoryToTool(t => t.slug === 'mailforge' || t.id === 'tool-mailforge-1787015028599', 'ai-cold-email-outreach');
addCategoryToTool(t => t.slug === 'lemlist' || t.id === '037f38d3-4184-4025-8aa4-68a24f4d8261', 'ai-cold-email-outreach');
addCategoryToTool(t => t.id === 'smartwriter' || t.slug === 'smartwriter', 'ai-cold-email-outreach');

// 2. Tag ai-autonomous-sdrs
addCategoryToTool(t => t.slug === 'artisan-ai-ava' || t.id === 'eafee430-e263-4f04-849b-5904ee2e7963', 'ai-autonomous-sdrs');
addCategoryToTool(t => t.slug === '11x-ai-alice' || t.id === 'tool-11x-ai-alice-1787015028594', 'ai-autonomous-sdrs');
addCategoryToTool(t => t.slug === 'regie-ai' || t.id === '037af109-7f0d-4e7f-8880-46d964d0685d', 'ai-autonomous-sdrs');

// 3. Tag ai-ad-creative-generators
addCategoryToTool(t => t.id === 'anyword' || t.slug === 'anyword', 'ai-ad-creative-generators');

// 4. Tag ai-landing-page-builders
addCategoryToTool(t => t.id === 'framer' || t.slug === 'framer', 'ai-landing-page-builders');

// 5. Tag ai-brand-voice-governance
addCategoryToTool(t => t.id === 'anyword' || t.slug === 'anyword', 'ai-brand-voice-governance');
addCategoryToTool(t => t.id === 'jasper' || t.slug === 'jasper-ai', 'ai-brand-voice-governance');
addCategoryToTool(t => t.slug === 'writer-com' || t.id === '87231dd9-f649-462f-ad8e-cb781f5432b9', 'ai-brand-voice-governance');
addCategoryToTool(t => t.slug === 'copysmith' || t.id === '8dce303e-b3cb-4da4-9beb-14e71a5ac80c', 'ai-brand-voice-governance');
addCategoryToTool(t => t.slug === 'typeface-ai' || t.id === 'b50d43be-fab6-45da-837f-1570a10a8237', 'ai-brand-voice-governance');

// Define new tools to seed
const newToolsToSeed = [
  // Autonomous SDRs
  {
    id: `tool-qualified-ai-${Date.now()}`,
    name: 'Qualified AI Piper',
    slug: 'qualified-ai',
    tagline: 'The premier AI Sales Rep for inbound pipeline generation and live conversational meeting booking.',
    description: 'Qualified AI Piper acts as an always-on autonomous inbound sales rep, instantly engaging target account visitors, answering complex technical questions, and qualifying buyers straight into account exec calendars.',
    websiteUrl: 'https://qualified.com',
    priceModel: 'Paid',
    category_id: 'c6',
    additionalCategories: ['ai-autonomous-sdrs', 'marketing-sales'],
    tags: ['Sales Rep', 'Autonomous SDR', 'B2B Sales', 'Lead Qualification'],
    status: 'Published',
    featured: true,
    views: 890,
    rating: 4.8
  },
  {
    id: `tool-aisdr-${Date.now() + 1}`,
    name: 'AiSDR',
    slug: 'aisdr',
    tagline: 'Autonomous AI sales development representative that drafts tailored email sequences and books sales calls.',
    description: 'AiSDR automatically scores leads from inbound campaigns or ZoomInfo lists, personalizes hyper-targeted cold emails based on buyer triggers, handles objections, and schedules discovery calls automatically.',
    websiteUrl: 'https://aisdr.com',
    priceModel: 'Paid',
    category_id: 'c6',
    additionalCategories: ['ai-autonomous-sdrs', 'marketing-sales', 'ai-cold-email-outreach'],
    tags: ['Autonomous SDR', 'Cold Outreach', 'Email Automation', 'Sales Tech'],
    status: 'Published',
    featured: true,
    views: 740,
    rating: 4.7
  },

  // Ad Creative Generators
  {
    id: `tool-adcreative-ai-${Date.now() + 2}`,
    name: 'AdCreative.ai',
    slug: 'adcreative-ai',
    tagline: 'Generate conversion-focused ad creatives and banners in seconds using artificial intelligence.',
    description: 'AdCreative.ai leverages trained marketing machine learning models to generate high-converting banner designs, social media visual creatives, and persuasive ad texts tailored to maximize CTR and ROAS.',
    websiteUrl: 'https://adcreative.ai',
    priceModel: 'Freemium',
    category_id: 'c6',
    additionalCategories: ['ai-ad-creative-generators', 'marketing-sales'],
    tags: ['Ad Creative', 'Banner Generator', 'ROAS', 'Paid Ads'],
    status: 'Published',
    featured: true,
    views: 2450,
    rating: 4.9
  },
  {
    id: `tool-madgicx-${Date.now() + 3}`,
    name: 'Madgicx',
    slug: 'madgicx',
    tagline: 'All-in-one AI advertising platform with creative intelligence, autonomous ad bidding, and copy generation.',
    description: 'Madgicx offers omni-channel autonomous ad management, creative intelligence auditing, AI ad copywriting, and automated budget allocation for Meta, Google, and TikTok ad accounts.',
    websiteUrl: 'https://madgicx.com',
    priceModel: 'Paid',
    category_id: 'c6',
    additionalCategories: ['ai-ad-creative-generators', 'marketing-sales'],
    tags: ['Ad Optimization', 'Meta Ads', 'Ad Copy', 'Creative Intelligence'],
    status: 'Published',
    featured: false,
    views: 1180,
    rating: 4.7
  },
  {
    id: `tool-pencil-ai-${Date.now() + 4}`,
    name: 'Pencil AI',
    slug: 'pencil-ai',
    tagline: 'Machine learning platform that generates scalable video and static ad creatives predictively scored for performance.',
    description: 'Pencil uses generative AI trained on over $1B in ad spend to generate video and static ad creatives 10x faster with predictive performance ratings before launching.',
    websiteUrl: 'https://trypencil.com',
    priceModel: 'Paid',
    category_id: 'c6',
    additionalCategories: ['ai-ad-creative-generators', 'marketing-sales'],
    tags: ['Video Ads', 'Ad Performance', 'Predictive AI', 'Creative Automation'],
    status: 'Published',
    featured: false,
    views: 920,
    rating: 4.6
  },
  {
    id: `tool-quickads-ai-${Date.now() + 5}`,
    name: 'QuickAds AI',
    slug: 'quickads-ai',
    tagline: 'Effortlessly create on-brand ad variations across 30+ formats with AI copywriting and visual layouts.',
    description: 'QuickAds AI is a versatile ad generator that creates targeted ad designs and multi-language copy across Facebook, Google Display, Instagram, and LinkedIn in seconds.',
    websiteUrl: 'https://quickads.ai',
    priceModel: 'Freemium',
    category_id: 'c6',
    additionalCategories: ['ai-ad-creative-generators', 'marketing-sales'],
    tags: ['Ad Variations', 'Multi-Platform Ads', 'Visual Copy', 'E-commerce Ads'],
    status: 'Published',
    featured: false,
    views: 810,
    rating: 4.6
  },

  // Landing Page Builders
  {
    id: `tool-relume-${Date.now() + 6}`,
    name: 'Relume',
    slug: 'relume',
    tagline: 'Build websites in minutes with AI-assisted wireframing, sitemaps, and Figma/Webflow export components.',
    description: 'Relume generates comprehensive website sitemaps and wireframe page structures with copy in minutes, ready to export directly into Figma and Webflow libraries.',
    websiteUrl: 'https://relume.io',
    priceModel: 'Freemium',
    category_id: 'c6',
    additionalCategories: ['ai-landing-page-builders', 'marketing-sales'],
    tags: ['Landing Pages', 'Wireframing', 'Sitemaps', 'Webflow', 'Figma'],
    status: 'Published',
    featured: true,
    views: 1840,
    rating: 4.9
  },
  {
    id: `tool-unbounce-smart-builder-${Date.now() + 7}`,
    name: 'Unbounce Smart Builder',
    slug: 'unbounce-smart-builder',
    tagline: 'AI-powered landing page builder with pre-optimized layouts, dynamic copy, and conversion intelligence.',
    description: 'Unbounce Smart Builder utilizes machine learning insights from 1.5 billion conversions to automatically assemble high-converting landing page layouts and contextual copy.',
    websiteUrl: 'https://unbounce.com',
    priceModel: 'Paid',
    category_id: 'c6',
    additionalCategories: ['ai-landing-page-builders', 'marketing-sales'],
    tags: ['Conversion Optimization', 'Landing Pages', 'Smart Traffic', 'A/B Testing'],
    status: 'Published',
    featured: false,
    views: 1320,
    rating: 4.7
  },
  {
    id: `tool-durable-co-${Date.now() + 8}`,
    name: 'Durable AI',
    slug: 'durable-co',
    tagline: 'Generate complete, functional websites with copy, images, and lead capture forms in 30 seconds.',
    description: 'Durable is the lightning-fast AI website builder for small businesses, solopreneurs, and agencies, automatically generating complete sites with integrated CRM, invoicing, and SEO.',
    websiteUrl: 'https://durable.co',
    priceModel: 'Freemium',
    category_id: 'c6',
    additionalCategories: ['ai-landing-page-builders', 'marketing-sales'],
    tags: ['Website Builder', 'Small Business', 'Instant Landing Pages', 'Lead Gen'],
    status: 'Published',
    featured: false,
    views: 1670,
    rating: 4.7
  },
  {
    id: `tool-mixo-io-${Date.now() + 9}`,
    name: 'Mixo',
    slug: 'mixo-io',
    tagline: 'Launch your startup idea in seconds with AI-generated landing pages and built-in email subscriber collection.',
    description: 'Mixo helps founders validate ideas immediately by turning a single text prompt into a sleek, mobile-ready startup landing page complete with waitlist email capture.',
    websiteUrl: 'https://mixo.io',
    priceModel: 'Freemium',
    category_id: 'c6',
    additionalCategories: ['ai-landing-page-builders', 'marketing-sales'],
    tags: ['Startup Validation', 'Landing Pages', 'Waitlists', 'Idea Launch'],
    status: 'Published',
    featured: false,
    views: 1420,
    rating: 4.8
  }
];

// Append new tools only if their slug doesn't exist
for (const nt of newToolsToSeed) {
  if (!tools.some((t: any) => t.slug === nt.slug)) {
    tools.push(nt);
    console.log(`Seeded new tool "${nt.name}" (${nt.slug})`);
  } else {
    // If slug exists, ensure it has the subcategory
    const existing = tools.find((t: any) => t.slug === nt.slug);
    existing.additionalCategories = existing.additionalCategories || [];
    nt.additionalCategories.forEach(c => {
      if (!existing.additionalCategories.includes(c)) existing.additionalCategories.push(c);
    });
    console.log(`Updated existing tool "${existing.name}" (${existing.slug})`);
  }
}

fs.writeFileSync(toolsFilePath, JSON.stringify(tools, null, 2), 'utf8');
console.log(`\nSuccessfully updated ${toolsFilePath}. Total tools count: ${tools.length}`);
