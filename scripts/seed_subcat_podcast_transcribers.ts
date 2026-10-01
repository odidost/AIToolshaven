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

// 1. Add ai-podcast-interview-transcribers subcategory
const subcatSlug = 'ai-podcast-interview-transcribers';
const subcatId = 'ai-podcast-interview-transcribers';

const subcatObj = {
  id: subcatId,
  name: 'AI Podcast & Interview Transcribers',
  slug: subcatSlug,
  icon: 'podcasts',
  count: 10,
  description: 'Transform recorded podcast episodes and media interviews into accurate timestamped transcripts, structured show notes, chapter markers, and quote roundups.',
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

// 2. Tag target podcast transcriber tools
const targetIdentifiers = [
  'abf40673-9093-4311-92f4-6f3c775e76d6', // Castmagic
  '63ea8900-b082-4be5-ab20-5609a818164d', // Podsqueeze
  '3200fce3-cd43-4f22-9049-6fdb61ed0a6f', // Deciphr AI
  'tool-1786835722883-jr8s8be',           // Simon Says AI Transcribe
  'tool-riverside-fm-1790627507674',       // Riverside.fm AI
  'descript',                             // Descript
  'tool-trint-1786742992809',             // Trint
  '8fc15c61-6d56-4297-a30f-6bde212c50bf', // Cockatoo AI
  'tool-notta-1786742992809',             // Notta
  'tool-sonix-1786742992809'              // Sonix
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

// 3. Sync to Supabase
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
      logo_url: t.logoUrl || '/images/placeholders/logo-r.svg',
      image_url: t.imageUrl || t.screenshotUrl || t.logoUrl || '/images/placeholders/logo-r.svg',
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
