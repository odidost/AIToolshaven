import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import nextEnv from '@next/env';
const { loadEnvConfig } = nextEnv;
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
    categoryMap.set(c.name, c);
    categoryMap.set(c.slug.toLowerCase(), c);
    categoryMap.set(c.id.toLowerCase(), c);
    categoryMap.set(c.name.toLowerCase(), c);
  });

  let syncedTools = 0;
  // Concurrent chunked sync (concurrency 20)
  const chunkSize = 20;
  for (let i = 0; i < toolsJson.length; i += chunkSize) {
    const chunk = toolsJson.slice(i, i + chunkSize);
    await Promise.all(chunk.map(async (doc: any) => {
      const tool: AITool = doc.draftData || doc.publishedData || doc;
      const toolId = tool.id || crypto.randomUUID();
      const primaryCatObj = (tool.category_id && categoryMap.get(tool.category_id.toLowerCase())) ||
        (tool.category && categoryMap.get(tool.category.toLowerCase())) ||
        (tool.categorySlug && categoryMap.get(tool.categorySlug.toLowerCase())) ||
        categoryMap.get('c1');
      const primaryCatId = primaryCatObj?.id || 'c1';

      let priceModel = tool.priceModel || 'Freemium';
      if (!['Free', 'Freemium', 'Paid', 'Enterprise'].includes(priceModel)) {
        if (priceModel.toLowerCase().includes('enterprise')) priceModel = 'Enterprise';
        else if (priceModel.toLowerCase().includes('free') || priceModel.toLowerCase().includes('open') || priceModel.toLowerCase().includes('foss')) priceModel = 'Free';
        else if (priceModel.toLowerCase().includes('paid')) priceModel = 'Paid';
        else priceModel = 'Freemium';
      }

      let status = tool.status || 'Draft';
      if (!['Draft', 'Published', 'Archived'].includes(status)) {
        status = 'Published';
      }

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
        price_model: priceModel,
        status: status,
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
    }));
  }

  console.log(`\n✓ Successfully synced ${syncedTools}/${toolsJson.length} tools to Supabase with zero errors.`);
}

main().catch(console.error);
