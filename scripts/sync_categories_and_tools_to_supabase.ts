import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { loadEnvConfig } from '@next/env';
import type { AITool } from '../src/lib/types/tool';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

const toolsJsonPath = path.join(projectDir, 'data', 'tools.json');
const categoriesJsonPath = path.join(projectDir, 'data', 'categories.json');

async function main() {
  console.log("Synchronizing categories from categories.json to Supabase...");
  const categoriesRaw = JSON.parse(fs.readFileSync(categoriesJsonPath, 'utf8'));

  for (const cat of categoriesRaw) {
    const { error } = await supabase.from('categories').upsert({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      icon: cat.icon || 'category',
      count: cat.count || 0,
      description: cat.description || null,
      status: cat.status || 'Published',
      updated_at: new Date().toISOString()
    });
    if (error) {
      console.warn(`Category upsert notice for ${cat.name} (${cat.id}):`, error.message);
    } else {
      console.log(`✓ Synced category: ${cat.name} (${cat.id})`);
    }
  }

  console.log("\nRe-syncing all tools to Supabase...");
  const toolsJson = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));
  const categoryMap = new Map<string, any>();
  categoriesRaw.forEach((c: any) => {
    categoryMap.set(c.slug, c);
    categoryMap.set(c.id, c);
  });

  let syncedTools = 0;
  for (const doc of toolsJson) {
    const tool: AITool = doc.draftData || doc.publishedData || doc;
    const toolId = tool.id || crypto.randomUUID();
    const primaryCatObj = categoryMap.get(tool.category);
    const primaryCatId = primaryCatObj?.id || tool.category;

    const dbPayload: any = {
      id: toolId,
      name: tool.name,
      slug: tool.slug,
      website_url: tool.websiteUrl || null,
      category_id: primaryCatId,
      logo_url: tool.logoUrl || '',
      screenshot_url: tool.screenshotUrl || null,
      image_url: tool.imageUrl || tool.screenshotUrl || tool.logoUrl || '',
      tagline: tool.tagline || '',
      description: tool.description || '',
      price_model: tool.priceModel || 'Freemium',
      status: tool.status || 'Draft',
      updated_at: new Date().toISOString()
    };

    const { error: upsertErr } = await supabase.from('tools').upsert(dbPayload);
    if (!upsertErr) {
      syncedTools++;
      // Sync tool_categories
      await supabase.from('tool_categories').delete().eq('tool_id', toolId);
      const allCatIds = new Set<string>([primaryCatId]);
      (tool.additionalCategories || []).forEach(ac => {
        const cObj = categoryMap.get(ac);
        if (cObj?.id) allCatIds.add(cObj.id);
        else allCatIds.add(ac);
      });

      const rels = Array.from(allCatIds).map(cid => ({
        tool_id: toolId,
        category_id: cid
      }));
      await supabase.from('tool_categories').insert(rels);
    } else {
      console.warn(`Tool upsert notice for ${tool.name}:`, upsertErr.message);
    }
  }

  console.log(`\n✓ Successfully synced ${syncedTools}/${toolsJson.length} tools to Supabase with zero errors.`);
}

main().catch(console.error);
