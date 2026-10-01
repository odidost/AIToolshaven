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
  const subcatSlug = 'ai-citation-reference-managers';
  const subcatId = 'ai-citation-reference-managers';

  // 1. Update categories.json
  const subcatObj = {
    id: subcatId,
    name: 'AI Citation & Reference Managers',
    slug: subcatSlug,
    icon: 'format_quote',
    count: 10,
    description: 'Intelligent citation generators, bibliography managers, and reference validation copilots that automate APA, MLA, Chicago, and IEEE formatting with contextual citation checking.',
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

  // 3. 10 authentic top tools for citation & reference management
  const targetSlugs = [
    'scite-ai',
    'wordvice-ai',
    'sourcely-ai',
    'trinka',
    'scispace',
    'paperpal',
    'scholarcy',
    'researchrabbit',
    'connected-papers',
    'semantic-scholar'
  ];

  // 4. Update data/tools.json
  let taggedCount = 0;
  for (const t of tools) {
    const match = targetSlugs.includes(t.slug) || (t.publishedData && targetSlugs.includes(t.publishedData.slug));
    if (match) {
      t.status = 'Published';
      t.additionalCategories = Array.from(new Set([...(t.additionalCategories || []), subcatSlug, subcatId]));
      if (!t.tags) t.tags = [];
      if (!t.tags.includes(subcatSlug)) t.tags.push(subcatSlug);
      if (!t.tags.includes('cat-research')) t.tags.push('cat-research');

      if (t.publishedData) {
        t.publishedData.status = 'Published';
        t.publishedData.additionalCategories = Array.from(new Set([...(t.publishedData.additionalCategories || []), subcatSlug, subcatId]));
        if (!t.publishedData.tags) t.publishedData.tags = [];
        if (!t.publishedData.tags.includes(subcatSlug)) t.publishedData.tags.push(subcatSlug);
      }
      taggedCount++;
      console.log(`✓ Tagged: ${t.name || t.publishedData?.name} (${t.slug})`);
    }
  }
  fs.writeFileSync(toolsJsonPath, JSON.stringify(tools, null, 2), 'utf8');
  console.log(`✓ Updated tools.json with ${taggedCount} tagged tools`);

  // 5. Update Supabase tools tags
  console.log('\nUpdating tools in Supabase...');
  for (const slug of targetSlugs) {
    const { data: current } = await supabase.from('tools').select('id, tags, name, slug').eq('slug', slug).single();
    if (!current) continue;
    const existingTags = Array.isArray(current.tags) ? current.tags : [];
    const mergedTags = Array.from(new Set([...existingTags, subcatSlug, 'cat-research']));

    const { error: toolErr } = await supabase
      .from('tools')
      .update({
        tags: mergedTags,
        updated_at: new Date().toISOString()
      })
      .eq('id', current.id);

    if (toolErr) {
      console.warn(`Error updating Supabase tool ${current.name}:`, toolErr.message);
    } else {
      console.log(`✓ Updated tags in Supabase for: ${current.name} (${current.slug})`);
    }
  }

  console.log('\nSync finished successfully!');
}

sync().catch(console.error);
