import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { loadEnvConfig } from '@next/env';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

const categoriesJsonPath = path.join(projectDir, 'data', 'categories.json');
const toolsJsonPath = path.join(projectDir, 'data', 'tools.json');

const categories = JSON.parse(fs.readFileSync(categoriesJsonPath, 'utf8'));
const tools = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));

// 1. Add ai-multilingual-subtitles-captions subcategory
const subcatSlug = 'ai-multilingual-subtitles-captions';
const subcatId = 'ai-multilingual-subtitles-captions';

const subcatObj = {
  id: subcatId,
  name: 'AI Multilingual Subtitles & Video Caption Generators',
  slug: subcatSlug,
  icon: 'closed_caption',
  count: 10,
  description: 'Generate automated video subtitles, animated burned-in captions, and translated multi-language SRT and VTT files for TikTok, YouTube, Reels, and international film distribution.',
  type: 'subcategory',
  parentId: 'cat-transcription',
  indexable: true,
  status: 'Published'
};

const existingCatIndex = categories.findIndex((c: any) => c.slug === subcatSlug || c.id === subcatId);
if (existingCatIndex >= 0) {
  categories[existingCatIndex] = { ...categories[existingCatIndex], ...subcatObj };
} else {
  categories.push(subcatObj);
}
fs.writeFileSync(categoriesJsonPath, JSON.stringify(categories, null, 2), 'utf8');
console.log(`✓ Updated categories.json with ${subcatSlug}`);

// 2. Define new top tools if not existing
const newTools = [
  {
    id: 'zubtitle-ai',
    name: 'Zubtitle',
    slug: 'zubtitle-ai',
    tagline: 'Automated video captions, headline bars, and social video resizing.',
    description: 'Zubtitle automatically transcribes spoken video audio into styled, animated captions with custom brand colors, progress bars, and social aspect ratios.',
    websiteUrl: 'https://zubtitle.com',
    category_id: 'cat-transcription',
    categoryName: 'AI Transcription Tools',
    categorySlug: 'ai-transcription-tools',
    priceModel: 'Freemium',
    rating: 4.8,
    logoUrl: '/images/placeholders/logo-z.svg',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80',
    additionalCategories: [subcatSlug],
    status: 'Published',
    verified: true
  }
];

for (const nt of newTools) {
  const existingIdx = tools.findIndex((t: any) => t.slug === nt.slug || t.id === nt.id);
  if (existingIdx >= 0) {
    tools[existingIdx].additionalCategories = Array.from(new Set([...(tools[existingIdx].additionalCategories || []), subcatSlug]));
  } else {
    tools.push(nt);
  }
}

// 3. Tag existing subtitle tools
const targetIdentifiers = [
  '966d6269-a4c1-40d5-9b81-4f4bd388b4fa', // Submagic
  '5570a8fc-62f5-40ae-9df4-c3856df36310', // Captions
  'ece183c9-8e0c-4226-83cc-a3d03f10e036', // Veed.io
  'd55aa186-2fac-48d9-a16d-e267e6f99020', // Kapwing AI Studio
  'tool-happy-scribe-1786742992809',       // Happy Scribe
  'descript',                             // Descript
  'tool-1786835722883-jr8s8be',           // Simon Says AI Transcribe
  'tool-amberscript-1786742992809',       // Amberscript
  'tool-sonix-1786742992809',             // Sonix
  'zubtitle-ai'
];

let taggedCount = 0;
const taggedToolsToSync: any[] = [];

for (const t of tools) {
  if (targetIdentifiers.includes(t.slug) || targetIdentifiers.includes(t.id)) {
    t.additionalCategories = Array.from(new Set([...(t.additionalCategories || []), subcatSlug]));
    if (t.publishedData) {
      t.publishedData.additionalCategories = Array.from(new Set([...(t.publishedData.additionalCategories || []), subcatSlug]));
    }
    if (t.draftData) {
      t.draftData.additionalCategories = Array.from(new Set([...(t.draftData.additionalCategories || []), subcatSlug]));
    }
    taggedCount++;
    taggedToolsToSync.push(t);
  }
}

fs.writeFileSync(toolsJsonPath, JSON.stringify(tools, null, 2), 'utf8');
console.log(`✓ Tagged ${taggedCount} tools with ${subcatSlug} in tools.json`);

// 4. Sync to Supabase
async function syncSupabase() {
  console.log('\nSyncing subcategory to Supabase...');
  const { error: catError } = await supabase.from('categories').upsert({
    id: subcatObj.id,
    name: subcatObj.name,
    slug: subcatObj.slug,
    icon: subcatObj.icon,
    count: taggedCount,
    description: subcatObj.description,
    status: subcatObj.status,
    updated_at: new Date().toISOString()
  });

  if (catError) {
    console.error('Category upsert error:', catError.message);
  } else {
    console.log(`✓ Synced category "${subcatObj.name}" to Supabase`);
  }

  console.log('\nSyncing tagged tools to Supabase...');
  for (const t of taggedToolsToSync) {
    const rawPrice = t.priceModel || 'Freemium';
    const validPrice = ['Free', 'Freemium', 'Paid', 'Enterprise'].includes(rawPrice) ? rawPrice : 'Paid';

    const { error: toolError } = await supabase.from('tools').upsert({
      id: t.id,
      name: t.name,
      slug: t.slug,
      tagline: t.tagline || t.description?.slice(0, 100) || '',
      description: t.description || '',
      website_url: t.websiteUrl || t.url || null,
      category_id: t.category_id || 'cat-transcription',
      logo_url: t.logoUrl || '/images/placeholders/logo-z.svg',
      image_url: t.imageUrl || t.screenshotUrl || t.logoUrl || '/images/placeholders/logo-z.svg',
      screenshot_url: t.screenshotUrl || null,
      price_model: validPrice,
      rating: t.rating || 4.8,
      status: 'Published',
      verified: true,
      updated_at: new Date().toISOString()
    });

    if (toolError) {
      console.warn(`Tool upsert warning for ${t.name} (${t.slug}):`, toolError.message);
    } else {
      console.log(`✓ Synced tool: ${t.name} (${t.slug})`);
      await supabase.from('tool_categories').upsert([
        { tool_id: t.id, category_id: subcatSlug }
      ]);
    }
  }
}

syncSupabase().then(() => {
  console.log('\nSeeding and synchronization complete!');
  process.exit(0);
}).catch(err => {
  console.error('Error during synchronization:', err);
  process.exit(1);
});
