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

// 1. Add ai-medical-clinical-scribes subcategory
const subcatSlug = 'ai-medical-clinical-scribes';
const subcatId = 'ai-medical-clinical-scribes';

const subcatObj = {
  id: subcatId,
  name: 'AI Medical & Clinical Scribes',
  slug: subcatSlug,
  icon: 'medical_services',
  count: 10,
  description: 'HIPAA-compliant ambient clinical AI scribes that listen to patient encounters, generate structured SOAP notes, and integrate directly with EHR systems.',
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
    id: 'freed-ai',
    name: 'Freed AI',
    slug: 'freed-ai',
    tagline: 'Clinician-focused AI medical scribe that listens to patient visits and writes SOAP notes.',
    description: 'Freed AI is an ambient medical scribe that captures natural doctor-patient conversations and automatically drafts comprehensive SOAP notes in the clinician\'s preferred style.',
    websiteUrl: 'https://www.getfreed.ai',
    category_id: 'cat-transcription',
    categoryName: 'AI Transcription Tools',
    categorySlug: 'ai-transcription-tools',
    priceModel: 'Freemium',
    rating: 4.9,
    logoUrl: '/images/placeholders/logo-f.svg',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    additionalCategories: [subcatSlug],
    status: 'Published',
    verified: true
  },
  {
    id: 'deepscribe-ai',
    name: 'DeepScribe',
    slug: 'deepscribe-ai',
    tagline: 'Enterprise ambient AI clinical documentation and EHR integration.',
    description: 'DeepScribe transforms natural clinician-patient conversations into accurate, structured medical documentation with automated ICD-10 coding and direct EHR synchronization.',
    websiteUrl: 'https://www.deepscribe.ai',
    category_id: 'cat-transcription',
    categoryName: 'AI Transcription Tools',
    categorySlug: 'ai-transcription-tools',
    priceModel: 'Enterprise',
    rating: 4.8,
    logoUrl: '/images/placeholders/logo-d.svg',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    additionalCategories: [subcatSlug],
    status: 'Published',
    verified: true
  },
  {
    id: 'nabla-copilot',
    name: 'Nabla Copilot',
    slug: 'nabla-copilot',
    tagline: 'Ambient AI clinical assistant generating instant SOAP notes and clinical summaries.',
    description: 'Nabla Copilot acts as an ambient AI assistant for physicians in-person and over telehealth, generating clinical visit notes, referral letters, and patient instructions in seconds.',
    websiteUrl: 'https://www.nabla.com',
    category_id: 'cat-transcription',
    categoryName: 'AI Transcription Tools',
    categorySlug: 'ai-transcription-tools',
    priceModel: 'Freemium',
    rating: 4.8,
    logoUrl: '/images/placeholders/logo-n.svg',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    additionalCategories: [subcatSlug],
    status: 'Published',
    verified: true
  },
  {
    id: 'abridge-ai',
    name: 'Abridge',
    slug: 'abridge-ai',
    tagline: 'Generative AI platform converting clinical conversations into structured medical notes.',
    description: 'Abridge uses specialized medical speech models to convert complex clinical conversations into structured documentation mapped to billing and EHR systems.',
    websiteUrl: 'https://www.abridge.com',
    category_id: 'cat-transcription',
    categoryName: 'AI Transcription Tools',
    categorySlug: 'ai-transcription-tools',
    priceModel: 'Enterprise',
    rating: 4.8,
    logoUrl: '/images/placeholders/logo-a.svg',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
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

// 3. Tag existing medical transcription tools
const targetIdentifiers = [
  'tool-verbit-1786742992809',
  'tool-deepgram-1786742992809',
  '2a3eb3c5-a60f-44a9-a72b-bd282dbd50b6',
  '5e20a771-e5c4-4932-be1d-6d99f4193d2a',
  'tool-rev-ai-1786742992809',
  'tool-whisper-1786742992809',
  'freed-ai',
  'deepscribe-ai',
  'nabla-copilot',
  'abridge-ai'
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
      logo_url: t.logoUrl || '/images/placeholders/logo-m.svg',
      image_url: t.imageUrl || t.screenshotUrl || t.logoUrl || '/images/placeholders/logo-m.svg',
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
