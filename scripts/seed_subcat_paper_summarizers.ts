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

async function sync() {
  const subcatSlug = 'ai-paper-pdf-summarizers';
  const subcatId = 'ai-paper-pdf-summarizers';

  // 1. Update categories.json
  const subcatObj = {
    id: subcatId,
    name: 'AI Paper & PDF Summarizers',
    slug: subcatSlug,
    icon: 'summarize',
    count: 10,
    description: 'Interactive research PDF summarizers and document assistants that extract methodologies, synthesize findings, and answer technical questions across academic whitepapers.',
    type: 'subcategory',
    parentId: 'cat-research',
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

  // 2. Supabase categories upsert
  const { error: catError } = await supabase.from('categories').upsert({
    id: subcatId,
    name: subcatObj.name,
    slug: subcatObj.slug,
    icon: subcatObj.icon,
    count: 10,
    description: subcatObj.description,
    status: subcatObj.status,
    updated_at: new Date().toISOString()
  });

  if (catError) {
    console.error('Category upsert error:', catError.message);
  } else {
    console.log(`✓ Synced category "${subcatObj.name}" to Supabase`);
  }

  // 3. 10 authentic top tools for PDF summarization
  const targetToolIds = [
    'tool-chatpdf-1786742992809',
    'scholarcy',
    'tool-scispace-1786742992809',
    'tool-humata-1786742992809',
    '2b5ce40d-7f57-4c38-a0c4-4098418baf15',
    '251f4c25-a61f-4716-aa3f-dbd819c0eeba',
    '8bb8e3c7-96b0-4a3d-866c-eb4811bdebdc',
    'tool-genei-1786742992810',
    'tool-paperpal-1786742992810',
    'tool-consensus-1786742992809'
  ];

  // 4. Update data/tools.json
  let taggedCount = 0;
  for (const t of tools) {
    if (targetToolIds.includes(t.id) || ['chatpdf', 'scholarcy', 'scispace', 'humata', 'explainpaper', 'paperdigest-ai', 'scisummary-ai', 'genei-io', 'paperpal', 'consensus'].includes(t.slug)) {
      if (!t.tags) t.tags = [];
      if (!t.tags.includes(subcatSlug)) t.tags.push(subcatSlug);
      if (!t.tags.includes('cat-research')) t.tags.push('cat-research');
      if (t.publishedData) {
        t.publishedData.additionalCategories = Array.from(new Set([...(t.publishedData.additionalCategories || []), subcatSlug, subcatId]));
      }
      taggedCount++;
    }
  }
  fs.writeFileSync(toolsJsonPath, JSON.stringify(tools, null, 2), 'utf8');
  console.log(`✓ Updated tools.json with ${taggedCount} tagged tools`);

  // 5. Update Supabase tools tags
  console.log('\nUpdating tools in Supabase...');
  for (const toolId of targetToolIds) {
    const { data: current } = await supabase.from('tools').select('tags, name, slug').eq('id', toolId).single();
    if (!current) continue;
    const existingTags = Array.isArray(current.tags) ? current.tags : [];
    const mergedTags = Array.from(new Set([...existingTags, subcatSlug, 'cat-research']));

    const { error: toolErr } = await supabase
      .from('tools')
      .update({
        tags: mergedTags,
        updated_at: new Date().toISOString()
      })
      .eq('id', toolId);

    if (toolErr) {
      console.warn(`Error updating Supabase tool ${current.name}:`, toolErr.message);
    } else {
      console.log(`✓ Updated tags in Supabase for: ${current.name} (${current.slug})`);
    }
  }

  console.log('\nSync finished successfully!');
}

sync().catch(console.error);
