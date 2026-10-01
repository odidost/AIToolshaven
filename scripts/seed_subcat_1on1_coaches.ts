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

// 1. Add ai-1-on-1-meeting-coaches subcategory
const subcatSlug = 'ai-1-on-1-meeting-coaches';
const subcatId = 'ai-1-on-1-meeting-coaches';

const subcatObj = {
  id: subcatId,
  name: 'AI 1-on-1 & Meeting Coaching Assistants',
  slug: subcatSlug,
  icon: 'psychology',
  count: 10,
  description: 'Coach managers and team members during 1-on-1s and collaborative meetings with talk-to-listen ratio tracking, feedback suggestions, and communication insights.',
  type: 'subcategory',
  parentId: 'cat-meeting',
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

// 2. Tag target 1-on-1 and meeting coaching tools
const targetIdentifiers = [
  'tool-fellow-1786742992809',
  'tool-nyota-1786742992809',
  'tool-1790631317391-yoodli-ai',
  '9f1ce7a4-92f5-4ff9-af2c-febd8a6697e8',
  'read-ai',
  'tool-supernormal-1786742992809',
  '5895f80a-3a09-409a-8d71-8f2b98a57573',
  'tool-1790631317391-second-nature',
  'fathom',
  'tool-1790631317391-hyperbound'
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
      category_id: t.category_id || 'cat-meeting',
      logo_url: t.logoUrl || '',
      image_url: t.imageUrl || t.screenshotUrl || t.logoUrl || '',
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
