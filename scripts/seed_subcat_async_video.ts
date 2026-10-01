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

// 1. Add ai-async-video-meetings subcategory
const subcatSlug = 'ai-async-video-meetings';
const subcatId = 'ai-async-video-meetings';

const subcatObj = {
  id: subcatId,
  name: 'AI Asynchronous Video & Screen Meeting Recorders',
  slug: subcatSlug,
  icon: 'videocam',
  count: 10,
  description: 'Replace synchronous meetings with async screen recordings, automated AI chapters, filler-word trimming, instant transcripts, and viewer action summaries.',
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

// 2. Define new top tools if not existing
const newTools = [
  {
    id: 'loom-ai',
    name: 'Loom AI',
    slug: 'loom-ai',
    tagline: 'Leading async video messaging platform with automated AI chapters, titles, and instant summaries.',
    description: 'Loom AI transforms screen and webcam recordings into polished async meeting updates with automated video titles, structured summaries, smart chapters, and silence removal.',
    websiteUrl: 'https://www.loom.com',
    category_id: 'cat-meeting',
    categoryName: 'AI Meeting Assistants',
    categorySlug: 'ai-meeting-assistants',
    priceModel: 'Freemium',
    rating: 4.9,
    logoUrl: '/images/placeholders/logo-l.svg',
    imageUrl: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=900&q=80',
    additionalCategories: [subcatSlug],
    status: 'Published',
    verified: true
  },
  {
    id: 'vidyard-ai',
    name: 'Vidyard AI',
    slug: 'vidyard-ai',
    tagline: 'Enterprise async video messages, sales screen walk-throughs, and automated chapters.',
    description: 'Vidyard AI enables sales and distributed teams to record personalized async screen walks, automatically generating video summaries, transcriptions, and viewer engagement insights.',
    websiteUrl: 'https://www.vidyard.com',
    category_id: 'cat-meeting',
    categoryName: 'AI Meeting Assistants',
    categorySlug: 'ai-meeting-assistants',
    priceModel: 'Freemium',
    rating: 4.8,
    logoUrl: '/images/placeholders/logo-v.svg',
    imageUrl: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=900&q=80',
    additionalCategories: [subcatSlug],
    status: 'Published',
    verified: true
  },
  {
    id: 'tella-tv',
    name: 'Tella',
    slug: 'tella-tv',
    tagline: 'Creator-grade async screen and camera recorder with automated AI subtitles and multi-scene layouts.',
    description: 'Tella provides high-production async video recording for demos and team updates with automatic subtitles, customizable backgrounds, zoom effects, and instant web sharing.',
    websiteUrl: 'https://www.tella.tv',
    category_id: 'cat-meeting',
    categoryName: 'AI Meeting Assistants',
    categorySlug: 'ai-meeting-assistants',
    priceModel: 'Freemium',
    rating: 4.8,
    logoUrl: '/images/placeholders/logo-t.svg',
    imageUrl: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=900&q=80',
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

// 3. Tag existing async video tools
const targetIdentifiers = [
  'b1902125-a22a-4dca-999e-b087014c08f4', // Claap AI
  'tool-1786835635822-5ct4rn1',           // Rewatch Video Hub
  'fc9b18b1-3412-435d-a5f6-d378dd1df7b8', // Grain
  'tldv',                                 // tl;dv
  'fathom',                               // Fathom
  'tool-1786834368393-rdulq3p',           // Screen Studio AI
  'tool-vowel-1786742992809',             // Vowel
  'loom-ai',
  'vidyard-ai',
  'tella-tv'
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
