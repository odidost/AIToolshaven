import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { loadEnvConfig } from '@next/env';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in environment variables.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const categoriesPath = path.join(process.cwd(), 'data', 'categories.json');
const toolsPath = path.join(process.cwd(), 'data', 'tools.json');

async function main() {
  console.log("Syncing tools and categories to Supabase...");
  
  const categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));
  const tools = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

  // Sync Categories
  console.log(`Syncing ${categories.length} categories...`);
  for (const cat of categories) {
    const { error } = await supabase.from('categories').upsert({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      description: cat.description,
      count: cat.count
    }, { onConflict: 'id' });
    if (error) {
      console.error(`Error syncing category ${cat.slug}:`, error);
    }
  }

  // Sync Tools
  console.log(`Syncing ${tools.length} tools...`);
  for (const item of tools) {
    const t = item.draftData || item.publishedData || item;
    const { error: toolError } = await supabase.from('tools').upsert({
      id: item.id || t.id,
      name: t.name,
      slug: t.slug,
      tagline: t.tagline || "",
      description: t.description || "",
      category_id: t.category_id || t.category,
      website_url: t.website_url || t.websiteUrl,
      status: t.status || "Draft",
      price_model: t.price_model || t.priceModel || "Freemium",
      price: t.price || "",
      rating: t.rating || 0,
      review_count: t.review_count || t.reviewCount || 0,
      logo_url: t.logo_url || t.logoUrl || "",
      image_url: t.image_url || t.imageUrl || "",
      screenshot_url: t.screenshot_url || t.screenshotUrl || "",
      created_at: t.created_at || new Date().toISOString()
    }, { onConflict: 'id' });
    
    if (toolError) {
      console.error(`Error syncing tool ${t.slug}:`, toolError);
    }

    // Sync primary category relationship
    const catId = t.category_id || t.category;
    const toolId = item.id || t.id;
    if (catId) {
      const { error: relError } = await supabase.from('tool_categories').upsert({
        tool_id: toolId,
        category_id: catId
      }, { onConflict: 'tool_id,category_id' });
      
      if (relError && relError.code !== '23505') { // Ignore unique constraint violation
        console.error(`Error linking primary category for ${t.slug}:`, relError);
      }
    }

    // Sync additional categories
    if (t.additionalCategories && t.additionalCategories.length > 0) {
      for (const addCatId of t.additionalCategories) {
        const { error: addRelError } = await supabase.from('tool_categories').upsert({
          tool_id: toolId,
          category_id: addCatId
        }, { onConflict: 'tool_id,category_id' });
        
        if (addRelError && addRelError.code !== '23505') {
          console.error(`Error linking additional category for ${t.slug}:`, addRelError);
        }
      }
    }
  }

  console.log("Sync complete!");
}

main();
