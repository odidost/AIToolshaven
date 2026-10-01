import fs from 'fs';
import path from 'path';

const projectDir = process.cwd();
const toolsJsonPath = path.join(projectDir, 'data', 'tools.json');
const categoriesJsonPath = path.join(projectDir, 'data', 'categories.json');

const tools: any[] = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));
const categories: any[] = JSON.parse(fs.readFileSync(categoriesJsonPath, 'utf8'));

// Slug-based tags for existing tools
const tagMap: Record<string, string[]> = {
  'logo-generators': [
    'looka',
    'zarla',
    'myfreelogomaker',
    'logoai'
  ],
  'ai-image-upscalers': [
    'upscayl',
    'lets-enhance',
    'upscale-media-ai',
    'vanceai'
  ],
  'ai-product-photography': [
    'photoroom',
    'pixelcut-ai',
    'remove-bg'
  ],
  'ai-vector-svg-generators': [
    'vectorizer-ai'
  ],
  'ai-headshot-generators': [
    'artbreeder-studio'
  ]
};

// Tag existing tools by slug
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

  // Also auto-tag any existing image tool containing "logo" in name or tags
  if ((tool.category === 'AI Image Generators' || tool.category_id === 'c2') &&
      ((tool.name || '').toLowerCase().includes('logo') || (tool.tagline || '').toLowerCase().includes('logo'))) {
    tool.additionalCategories = tool.additionalCategories || [];
    if (!tool.additionalCategories.includes('logo-generators')) {
      tool.additionalCategories.push('logo-generators');
      taggedCount++;
      console.log(`Auto-tagged logo tool "${tool.name}" with "logo-generators"`);
    }
  }
}

// Seed tools to add
const seedTools = [
  // 1. AI E-Commerce Product Photography
  {
    name: 'Pebblely',
    slug: 'pebblely',
    tagline: 'AI product photography studio turning basic shots into professional marketing assets',
    description: 'Pebblely generates photorealistic backgrounds, studio lighting, and seasonal lifestyle scenes for e-commerce products in seconds, trusted by Shopify merchants worldwide.',
    websiteUrl: 'https://pebblely.com',
    category: 'AI Image Generators',
    category_id: 'c2',
    categoryName: 'AI Image Generators',
    categorySlug: 'ai-image-generators',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.8,
    isFeatured: true,
    isPopular: true,
    isTrending: true,
    verified: true,
    tags: ['Product Photography', 'E-Commerce AI', 'Background Generator', 'Shopify AI'],
    additionalCategories: ['ai-product-photography']
  },
  {
    name: 'Flair AI',
    slug: 'flair-ai',
    tagline: 'AI design tool for branded product photography and lifestyle composition',
    description: 'Flair AI provides an intuitive drag-and-drop canvas for composing commercial product photoshoots with custom props, reflections, and camera perspectives.',
    websiteUrl: 'https://flair.ai',
    category: 'AI Image Generators',
    category_id: 'c2',
    categoryName: 'AI Image Generators',
    categorySlug: 'ai-image-generators',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.7,
    verified: true,
    tags: ['Product Staging', 'Commercial Photography', 'Design Canvas'],
    additionalCategories: ['ai-product-photography']
  },
  {
    name: 'Mokker',
    slug: 'mokker-ai',
    tagline: 'Instant AI background replacement for professional product listings',
    description: 'Mokker automatically cuts out product subjects and generates high-resolution studio environments tailored for Amazon, Instagram, and web store catalogs.',
    websiteUrl: 'https://mokker.ai',
    category: 'AI Image Generators',
    category_id: 'c2',
    categoryName: 'AI Image Generators',
    categorySlug: 'ai-image-generators',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.6,
    verified: true,
    tags: ['Product Photos', 'Background Replacement', 'Amazon Listings'],
    additionalCategories: ['ai-product-photography']
  },

  // 2. AI Headshot & Portrait Makers
  {
    name: 'HeadshotPro',
    slug: 'headshotpro',
    tagline: 'Professional corporate headshots generated from casual everyday selfies',
    description: 'HeadshotPro generates hundreds of photorealistic corporate portraits with customizable backdrops, business attire, and lighting conditions for teams and remote workers.',
    websiteUrl: 'https://headshotpro.com',
    category: 'AI Image Generators',
    category_id: 'c2',
    categoryName: 'AI Image Generators',
    categorySlug: 'ai-image-generators',
    pricing: 'Paid',
    priceModel: 'Paid',
    rating: 4.9,
    isFeatured: true,
    isPopular: true,
    verified: true,
    tags: ['AI Headshots', 'Corporate Portraits', 'LinkedIn Photo', 'Team Photos'],
    additionalCategories: ['ai-headshot-generators']
  },
  {
    name: 'Aragon AI',
    slug: 'aragon-ai',
    tagline: 'High-definition AI headshots crafted for LinkedIn and resume profiles',
    description: 'Aragon AI transforms smartphone photos into polished executive portraits with realistic skin textures, modern styling, and rapid turnaround times.',
    websiteUrl: 'https://aragon.ai',
    category: 'AI Image Generators',
    category_id: 'c2',
    categoryName: 'AI Image Generators',
    categorySlug: 'ai-image-generators',
    pricing: 'Paid',
    priceModel: 'Paid',
    rating: 4.8,
    verified: true,
    tags: ['AI Headshots', 'Executive Portraits', 'Profile Pictures'],
    additionalCategories: ['ai-headshot-generators']
  },
  {
    name: 'ProfileBaker',
    slug: 'profilebaker',
    tagline: 'AI headshot generator for job seekers, recruiters, and corporate teams',
    description: 'ProfileBaker delivers studio-quality portrait packages complete with customizable business outfits, background blur, and CV-ready export formats.',
    websiteUrl: 'https://profilebaker.com',
    category: 'AI Image Generators',
    category_id: 'c2',
    categoryName: 'AI Image Generators',
    categorySlug: 'ai-image-generators',
    pricing: 'Paid',
    priceModel: 'Paid',
    rating: 4.7,
    verified: true,
    tags: ['Headshot Generator', 'Job Search', 'LinkedIn Optimization'],
    additionalCategories: ['ai-headshot-generators']
  },
  {
    name: 'Secta AI',
    slug: 'secta-ai',
    tagline: 'Generate hundreds of hyper-personalized headshots in diverse real-world locations',
    description: 'Secta AI produces over 300 photorealistic variations across outdoor, modern office, and studio settings with fine-tuned facial consistency.',
    websiteUrl: 'https://secta.ai',
    category: 'AI Image Generators',
    category_id: 'c2',
    categoryName: 'AI Image Generators',
    categorySlug: 'ai-image-generators',
    pricing: 'Paid',
    priceModel: 'Paid',
    rating: 4.7,
    verified: true,
    tags: ['Facial Consistency', 'Personal Branding', 'Headshots'],
    additionalCategories: ['ai-headshot-generators']
  },

  // 3. AI Vector & SVG Generators
  {
    name: 'Recraft.ai',
    slug: 'recraft-ai',
    tagline: 'End-to-end generative canvas for professional vector art, 3D icons, and brand graphics',
    description: 'Recraft is a foundation model and generative design studio specifically designed for creating editable vectors, icon sets, and illustrations in cohesive visual styles.',
    websiteUrl: 'https://recraft.ai',
    category: 'AI Image Generators',
    category_id: 'c2',
    categoryName: 'AI Image Generators',
    categorySlug: 'ai-image-generators',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.9,
    isFeatured: true,
    isPopular: true,
    verified: true,
    tags: ['Vector Graphics', 'SVG Generator', 'Icon Design', 'Brand Illustrations'],
    additionalCategories: ['ai-vector-svg-generators']
  },
  {
    name: 'Kittl AI',
    slug: 'kittl-ai',
    tagline: 'AI-powered vector illustration and graphic design platform for merch and web',
    description: 'Kittl combines prompt-driven SVG vector generation with professional typography, texture masks, and export-ready print-on-demand layouts.',
    websiteUrl: 'https://kittl.com',
    category: 'AI Image Generators',
    category_id: 'c2',
    categoryName: 'AI Image Generators',
    categorySlug: 'ai-image-generators',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.8,
    verified: true,
    tags: ['Vector Illustration', 'Merch Design', 'Typography', 'SVG Art'],
    additionalCategories: ['ai-vector-svg-generators']
  },
  {
    name: 'Illustroke',
    slug: 'illustroke',
    tagline: 'Text-to-SVG vector generator with distinct design aesthetics and styles',
    description: 'Illustroke turns text prompts into clean, scalable vector illustrations in styles ranging from minimalist doodle to flat tech art.',
    websiteUrl: 'https://illustroke.com',
    category: 'AI Image Generators',
    category_id: 'c2',
    categoryName: 'AI Image Generators',
    categorySlug: 'ai-image-generators',
    pricing: 'Freemium',
    priceModel: 'Freemium',
    rating: 4.6,
    verified: true,
    tags: ['Text to SVG', 'Vector Art', 'Web Illustration'],
    additionalCategories: ['ai-vector-svg-generators']
  },

  // 4. AI Image Upscalers & Enhancers
  {
    name: 'Magnific AI',
    slug: 'magnific-ai',
    tagline: 'The most advanced generative upscaler and image reimagining engine',
    description: 'Magnific AI hallucinates and restores photorealistic microscopic details, transforming low-resolution photos and digital art into cinematic 4K/8K masterpieces.',
    websiteUrl: 'https://magnific.ai',
    category: 'AI Image Generators',
    category_id: 'c2',
    categoryName: 'AI Image Generators',
    categorySlug: 'ai-image-generators',
    pricing: 'Paid',
    priceModel: 'Paid',
    rating: 4.9,
    isFeatured: true,
    isPopular: true,
    verified: true,
    tags: ['AI Upscaler', 'Generative Enhancement', '4K Resolution', 'Detail Restoration'],
    additionalCategories: ['ai-image-upscalers']
  },
  {
    name: 'Topaz Gigapixel AI',
    slug: 'topaz-gigapixel',
    tagline: 'Industry-standard desktop image upscaler powered by deep learning models',
    description: 'Topaz Gigapixel AI enlarges images up to 600% while recovering face details, eliminating noise artifacts, and sharpening blurry textures.',
    websiteUrl: 'https://topazlabs.com/gigapixel-ai',
    category: 'AI Image Generators',
    category_id: 'c2',
    categoryName: 'AI Image Generators',
    categorySlug: 'ai-image-generators',
    pricing: 'Paid',
    priceModel: 'Paid',
    rating: 4.8,
    verified: true,
    tags: ['Desktop Upscaler', 'Noise Reduction', 'Print Enlargement'],
    additionalCategories: ['ai-image-upscalers']
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
  'ai-product-photography',
  'ai-headshot-generators',
  'logo-generators',
  'ai-vector-svg-generators',
  'ai-image-upscalers'
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

console.log(`\n✓ Category 2 Seed completed! Tagged: ${taggedCount}, Added: ${addedCount} new tools.`);
