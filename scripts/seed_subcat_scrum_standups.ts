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

// 1. Add ai-standup-scrum-assistants subcategory
const subcatSlug = 'ai-standup-scrum-assistants';
const subcatId = 'ai-standup-scrum-assistants';

const subcatObj = {
  id: subcatId,
  name: 'AI Daily Standup & Scrum Meeting Assistants',
  slug: subcatSlug,
  icon: 'groups',
  count: 10,
  description: 'Automate daily agile standups, track sprint blockers, summarize engineering check-ins, and synchronize meeting action items with Jira, Linear, Slack, and Microsoft Teams.',
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
    id: 'geekbot-ai',
    name: 'Geekbot',
    slug: 'geekbot-ai',
    tagline: 'Automated asynchronous daily standups and sprint check-ins for Slack and MS Teams.',
    description: 'Geekbot runs automated agile standups, retrospectives, and surveys directly inside Slack and Teams, generating actionable team summaries without synchronous meetings.',
    websiteUrl: 'https://geekbot.com',
    category_id: 'cat-meeting',
    categoryName: 'AI Meeting Assistants',
    categorySlug: 'ai-meeting-assistants',
    priceModel: 'Freemium',
    rating: 4.8,
    logoUrl: '/images/placeholders/logo-g.svg',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    additionalCategories: [subcatSlug],
    status: 'Published',
    verified: true
  },
  {
    id: 'standuply-ai',
    name: 'Standuply',
    slug: 'standuply-ai',
    tagline: 'Digital Scrum Master and automated team survey bot for agile engineering teams.',
    description: 'Standuply automates daily standups, backlog grooming, and sprint retrospective meetings via text, voice, and video messaging across Slack and Teams.',
    websiteUrl: 'https://standuply.com',
    category_id: 'cat-meeting',
    categoryName: 'AI Meeting Assistants',
    categorySlug: 'ai-meeting-assistants',
    priceModel: 'Freemium',
    rating: 4.8,
    logoUrl: '/images/placeholders/logo-s.svg',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    additionalCategories: [subcatSlug],
    status: 'Published',
    verified: true
  },
  {
    id: 'dailybot-ai',
    name: 'DailyBot',
    slug: 'dailybot-ai',
    tagline: 'AI-powered daily standups, sprint tracking, and team culture companion for Slack and Teams.',
    description: 'DailyBot collects asynchronous standup check-ins, tracks blockers, generates team mood insights, and coordinates sprint workflows across distributed teams.',
    websiteUrl: 'https://www.dailybot.com',
    category_id: 'cat-meeting',
    categoryName: 'AI Meeting Assistants',
    categorySlug: 'ai-meeting-assistants',
    priceModel: 'Freemium',
    rating: 4.8,
    logoUrl: '/images/placeholders/logo-d.svg',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
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

// 3. Tag existing standup and scrum tools
const targetIdentifiers = [
  'tool-spinach-io-1786742992809',
  'd459b7bf-a3fc-43ce-9452-b8d75375758a',
  'e871208f-d8c5-48a1-8697-d8c803d7c26b',
  'tool-nyota-1786742992809',
  'tool-fellow-1786742992809',
  'tool-tactiq-1786742992809',
  'tool-cogram-1786742992809',
  'geekbot-ai',
  'standuply-ai',
  'dailybot-ai'
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
