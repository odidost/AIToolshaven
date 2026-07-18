import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// We dynamically import the data from the data JSON files
import categories from '../data/categories.json';
import { goals } from '../src/lib/goals';
import { comparisons } from '../src/lib/comparisons';
import tools from '../data/tools.json';

// Helper to get existing mapping of slug -> id
async function getExistingIds(table: string) {
  const { data } = await supabase.from(table).select('id, slug');
  const map: Record<string, string> = {};
  if (data) {
    data.forEach((row: any) => {
      if (row.slug) map[row.slug] = row.id;
    });
  }
  return map;
}

async function migrate() {
  console.log("Starting Supabase Migration...");

  try {
    const existingCats = await getExistingIds('categories');
    const existingTools = await getExistingIds('tools');
    const existingGoals = await getExistingIds('goals');
    const existingComps = await getExistingIds('comparisons');

    // 1. Migrate Categories
    console.log(`Migrating ${categories.length} categories...`);
    const { error: catError } = await supabase.from('categories').upsert(
      categories.map((c: any) => ({
        id: existingCats[c.slug] || c.id,
        name: c.name,
        slug: c.slug,
        icon: c.icon,
        count: c.count,
        description: c.description || null
      }))
    );
    if (catError) throw catError;

    // Refresh category ids in case new ones were inserted
    const updatedCats = await getExistingIds('categories');

    // 2. Migrate Goals
    console.log(`Migrating ${goals.length} goals...`);
    const { error: goalError } = await supabase.from('goals').upsert(
      goals.map((g, i) => ({
        id: existingGoals[g.slug] || `g${i + 1}`,
        title: g.title,
        slug: g.slug,
        icon: g.icon,
        count: g.count,
        description: g.description || null
      }))
    );
    if (goalError) throw goalError;

    // 3. Migrate Comparisons
    console.log(`Migrating ${comparisons.length} comparisons...`);
    const { error: compError } = await supabase.from('comparisons').upsert(
      comparisons.map((c, i) => ({
        id: existingComps[c.slug] || `comp${i + 1}`,
        title: c.title,
        slug: c.slug,
        description: null
      }))
    );
    if (compError) throw compError;

    // 4. Migrate Tools
    console.log(`Migrating ${tools.length} tools...`);
    const { error: toolError } = await supabase.from('tools').upsert(
      tools.map((doc: any) => {
        const t = doc.publishedData || doc.draftData || doc; // Handle both CmsToolDocument and flat AITool
        
        let categoryId = t.category || null;
        if (categoryId) {
          // Find the category in categories.json
          const categoryObj = categories.find((c: any) => c.id === categoryId || c.slug === categoryId);
          if (categoryObj && updatedCats[categoryObj.slug]) {
            categoryId = updatedCats[categoryObj.slug];
          } else if (updatedCats[categoryId]) {
            categoryId = updatedCats[categoryId];
          }
        }

        return {
          id: existingTools[t.slug] || t.id,
          name: t.name,
          slug: t.slug,
          company: t.company || null,
          tagline: t.tagline || '',
          description: t.description || '',
          category_id: categoryId,
          price_model: t.priceModel || 'Free',
          price: t.price || null,
          rating: t.rating || 0,
          review_count: t.reviewCount || 0,
          logo_url: t.logoUrl || 'https://via.placeholder.com/200',
          image_url: t.imageUrl || 'https://via.placeholder.com/800',
          screenshot_url: t.screenshotUrl || null,
          website_url: t.websiteUrl || null,
          url: t.url || null,
          tags: t.tags || [],
          features: t.features || [],
          pricing_plans: t.pricingPlans || [],
          pricing: t.pricing || [],
          verified: t.verified || false,
          featured: t.featured || false,
          popularity: t.popularity || 0,
          pros: t.pros || [],
          cons: t.cons || [],
          best_for: t.bestFor || [],
          use_cases: t.useCases || [],
          platform: t.platform || null,
          api: t.api || false,
          mobile_app: t.mobileApp || false,
          open_source: t.openSource || false,
          free_trial: t.freeTrial || false,
          socials: t.socials || {},
          stats: t.stats || {},
          editorial: t.editorial || {},
          prompt_examples: t.promptExamples || []
        };
      })
    );
    if (toolError) throw toolError;

    console.log("Migration Complete! 🎉");

  } catch (err) {
    console.error("Migration failed:", err);
  }
}

migrate();
