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

// 1. Add ai-legal-court-transcription subcategory
const subcatSlug = 'ai-legal-court-transcription';
const subcatId = 'ai-legal-court-transcription';

const subcatObj = {
  id: subcatId,
  name: 'AI Legal & Court Transcription',
  slug: subcatSlug,
  icon: 'gavel',
  count: 10,
  description: 'Specialized speech-to-text platforms designed for legal depositions, court hearings, law firm dictation, and certified evidentiary transcripts.',
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
    id: 'viq-solutions',
    name: 'VIQ Solutions',
    slug: 'viq-solutions',
    tagline: 'AI-driven digital court reporting, deposition transcription, and legal courtroom capture.',
    description: 'VIQ Solutions provides secure AI digital recording and automated court reporting transcription software engineered for law firms, courts, and law enforcement agencies.',
    websiteUrl: 'https://viqsolutions.com',
    category_id: 'cat-transcription',
    categoryName: 'AI Transcription Tools',
    categorySlug: 'ai-transcription-tools',
    priceModel: 'Enterprise',
    rating: 4.8,
    logoUrl: '/images/placeholders/logo-v.svg',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80',
    tags: ['ai-legal-court-transcription', 'cat-transcription', 'legal', 'court-reporting', 'depositions'],
    isFeatured: true,
    isVerified: true
  },
  {
    id: 'speak-ai',
    name: 'Speak AI',
    slug: 'speak-ai',
    tagline: 'Automated transcription and qualitative research analytics for legal and investigative interviews.',
    description: 'Speak AI enables legal researchers and litigators to convert audio, video, and text into actionable insights with automated speaker diarization and semantic search.',
    websiteUrl: 'https://speakai.co',
    category_id: 'cat-transcription',
    categoryName: 'AI Transcription Tools',
    categorySlug: 'ai-transcription-tools',
    priceModel: 'Freemium',
    rating: 4.7,
    logoUrl: '/images/placeholders/logo-s.svg',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80',
    tags: ['ai-legal-court-transcription', 'cat-transcription', 'legal', 'investigative', 'analytics'],
    isFeatured: true,
    isVerified: true
  }
];

// Add new tools to tools.json if not present
for (const nt of newTools) {
  const idx = tools.findIndex((t: any) => t.id === nt.id || t.slug === nt.slug);
  if (idx >= 0) {
    tools[idx] = { ...tools[idx], ...nt };
  } else {
    tools.push(nt);
  }
}

// 3. Tag 10 authentic top tools for ai-legal-court-transcription
const targetSlugs = [
  'viq-solutions',
  'speak-ai',
  'verbit',
  'rev-ai',
  'turboscribe',
  'sonix',
  'trint',
  'speechmatics-ai',
  'deepgram',
  'happyscribe'
];

let taggedCount = 0;
for (const t of tools) {
  if (targetSlugs.includes(t.slug) || targetSlugs.includes(t.id)) {
    if (!t.tags) t.tags = [];
    if (!t.tags.includes(subcatSlug)) {
      t.tags.push(subcatSlug);
    }
    if (!t.tags.includes('cat-transcription')) {
      t.tags.push('cat-transcription');
    }
    taggedCount++;
  }
}

fs.writeFileSync(toolsJsonPath, JSON.stringify(tools, null, 2), 'utf8');
console.log(`✓ Tagged ${taggedCount} tools with ${subcatSlug} in tools.json`);

async function syncToSupabase() {
  console.log('\nSyncing subcategory to Supabase...');
  const { error: catError } = await supabase.from('categories').upsert({
    id: subcatId,
    name: subcatObj.name,
    slug: subcatObj.slug,
    description: subcatObj.description,
    icon: subcatObj.icon,
    parent_id: subcatObj.parentId,
    item_count: taggedCount
  }, { onConflict: 'slug' });

  if (catError) {
    console.error('Error syncing subcategory to Supabase:', catError);
  } else {
    console.log(`✓ Synced category "${subcatObj.name}" to Supabase`);
  }

  console.log('\nSyncing tagged tools to Supabase...');
  for (const slugOrId of targetSlugs) {
    const t = tools.find((x: any) => x.slug === slugOrId || x.id === slugOrId);
    if (!t) {
      console.warn(`Tool not found: ${slugOrId}`);
      continue;
    }

    const { error: toolError } = await supabase.from('tools').upsert({
      id: t.id,
      name: t.name,
      slug: t.slug,
      tagline: t.tagline || t.description?.substring(0, 100),
      description: t.description,
      website_url: t.websiteUrl || t.website_url,
      category_id: t.category_id || 'cat-transcription',
      price_model: (['Free', 'Freemium', 'Paid', 'Enterprise'].includes(t.priceModel) ? t.priceModel : 'Freemium'),
      rating: t.rating || 4.8,
      logo_url: t.logoUrl || t.logo_url || '/images/placeholders/logo-t.svg',
      image_url: t.imageUrl || t.image_url || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80',
      is_featured: !!t.isFeatured,
      is_verified: !!t.isVerified
    }, { onConflict: 'slug' });

    if (toolError) {
      console.error(`Error syncing tool ${t.name}:`, toolError);
    } else {
      console.log(`✓ Synced tool: ${t.name} (${t.slug})`);
    }

    // Upsert tool_categories relation
    await supabase.from('tool_categories').upsert({
      tool_id: t.id,
      category_id: subcatId
    }, { onConflict: 'tool_id,category_id' });
  }

  console.log('\nSeeding and synchronization complete!');
}

syncToSupabase().catch(err => {
  console.error('Fatal error during sync:', err);
  process.exit(1);
});
