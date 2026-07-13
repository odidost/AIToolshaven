import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

function formatStatus(status: string) {
  if (!status) return 'Published';
  const s = status.toLowerCase();
  if (s === 'draft') return 'Draft';
  if (s === 'published') return 'Published';
  if (s === 'archived') return 'Archived';
  return 'Published';
}

function deduplicateBySlug(items: any[]) {
  const seen = new Set();
  return items.filter(item => {
    if (!item.slug) return false;
    if (seen.has(item.slug)) return false;
    seen.add(item.slug);
    return true;
  });
}

export async function GET(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Supabase credentials missing' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const dataDir = path.join(process.cwd(), 'data');
    let results: Record<string, any> = {};

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

    // 1. Migrate Categories
    const categoriesPath = path.join(dataDir, 'categories.json');
    if (fs.existsSync(categoriesPath)) {
      const catsJson = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));
      const existing = await getExistingIds('categories');
      const formattedCats = catsJson.map((c: any) => {
        const item: any = {
          id: existing[c.slug] || c.id || crypto.randomUUID(),
          name: c.name,
          slug: c.slug,
          description: c.description,
          icon: c.icon,
          status: 'Published'
        };
        return item;
      });

      const deduplicatedCats = deduplicateBySlug(formattedCats);
      const { data, error } = await supabase.from('categories').upsert(deduplicatedCats, { onConflict: 'id' });
      results.categories = error ? error.message : `Successfully migrated ${deduplicatedCats.length} categories`;
    }

    // 2. Migrate Workflows
    const workflowsPath = path.join(dataDir, 'workflows.json');
    if (fs.existsSync(workflowsPath)) {
      const flowsJson = JSON.parse(fs.readFileSync(workflowsPath, 'utf8'));
      const existing = await getExistingIds('workflows');
      const formattedFlows = flowsJson.map((f: any) => {
        const pd = f.publishedData || f.draftData || {};
        const slug = pd.slug || `untitled-${Date.now()}-${Math.random()}`;
        const item: any = {
          id: existing[slug] || f.id || pd.id || crypto.randomUUID(),
          title: pd.title || "Untitled",
          slug: slug,
          icon: pd.icon || "build",
          description: pd.description || "",
          tools: pd.tools || [],
          status: formatStatus(f.status)
        };
        return item;
      });

      const deduplicatedFlows = deduplicateBySlug(formattedFlows);
      const { data, error } = await supabase.from('workflows').upsert(deduplicatedFlows, { onConflict: 'id' });
      results.workflows = error ? error.message : `Successfully migrated ${deduplicatedFlows.length} workflows`;
    }

    // 3. Migrate Goals
    const goalsPath = path.join(dataDir, 'goals.json');
    if (fs.existsSync(goalsPath)) {
      const goalsJson = JSON.parse(fs.readFileSync(goalsPath, 'utf8'));
      const existing = await getExistingIds('goals');
      const formattedGoals = goalsJson.map((g: any) => {
        const pd = g.publishedData || g.draftData || {};
        const slug = pd.slug || `untitled-${Date.now()}-${Math.random()}`;
        const item: any = {
          id: existing[slug] || g.id || pd.id || crypto.randomUUID(),
          title: pd.title || "Untitled",
          slug: slug,
          icon: pd.icon || "star",
          description: pd.description || "",
          status: formatStatus(g.status)
        };
        return item;
      });

      const deduplicatedGoals = deduplicateBySlug(formattedGoals);
      const { data, error } = await supabase.from('goals').upsert(deduplicatedGoals, { onConflict: 'id' });
      results.goals = error ? error.message : `Successfully migrated ${deduplicatedGoals.length} goals`;
    }

    // 4. Migrate Comparisons
    const comparisonsPath = path.join(dataDir, 'comparisons.json');
    if (fs.existsSync(comparisonsPath)) {
      const compsJson = JSON.parse(fs.readFileSync(comparisonsPath, 'utf8'));
      const existing = await getExistingIds('comparisons');
      const formattedComps = compsJson.map((c: any) => {
        const pd = c.publishedData || c.draftData || {};
        const slug = pd.slug || `untitled-${Date.now()}-${Math.random()}`;
        const item: any = {
          id: existing[slug] || c.id || pd.id || crypto.randomUUID(),
          title: pd.title || "Untitled",
          slug: slug,
          description: pd.description || "",
          tools: pd.tools || [],
          status: formatStatus(c.status)
        };
        return item;
      });

      const deduplicatedComps = deduplicateBySlug(formattedComps);
      const { data, error } = await supabase.from('comparisons').upsert(deduplicatedComps, { onConflict: 'id' });
      results.comparisons = error ? error.message : `Successfully migrated ${deduplicatedComps.length} comparisons`;
    }

    // 5. Migrate Tools
    const toolsPath = path.join(dataDir, 'tools.json');
    if (fs.existsSync(toolsPath)) {
      const toolsJson = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));
      const existing = await getExistingIds('tools');
      const existingCats = await getExistingIds('categories');
      
      const formattedTools = toolsJson.map((t: any) => {
        const pd = t.publishedData || t.draftData || {};
        const slug = pd.slug || `untitled-${crypto.randomUUID()}`;
        
        let category_id = pd.category || null;
        if (category_id && existingCats[category_id]) {
          category_id = existingCats[category_id];
        }
        
        const item: any = {
          id: existing[slug] || t.id || pd.id || crypto.randomUUID(),
          name: pd.name || "Untitled Tool",
          slug: slug,
          company: pd.company || null,
          tagline: pd.tagline || "",
          description: pd.description || "",
          category_id: category_id,
          price_model: pd.priceModel || 'Free',
          price: pd.price || null,
          rating: pd.rating || 0,
          review_count: pd.reviewCount || 0,
          logo_url: pd.logoUrl || "",
          image_url: pd.imageUrl || "",
          screenshot_url: pd.screenshotUrl || "",
          website_url: pd.websiteUrl || "",
          url: pd.url || "",
          tags: pd.tags || [],
          features: pd.features || [],
          pricing_plans: pd.pricingPlans || [],
          pricing: pd.pricing || [],
          verified: pd.verified || false,
          featured: pd.featured || false,
          popularity: pd.popularity || 0,
          pros: pd.pros || [],
          cons: pd.cons || [],
          best_for: pd.bestFor || [],
          use_cases: pd.useCases || [],
          platform: pd.platform || null,
          api: pd.api || false,
          mobile_app: pd.mobileApp || false,
          open_source: pd.openSource || false,
          free_trial: pd.freeTrial || false,
          socials: pd.socials || {},
          stats: pd.stats || {},
          editorial: pd.editorial || {},
          prompt_examples: pd.promptExamples || [],
          status: formatStatus(t.status)
        };
        // Some draft IDs in local JSON have 'draft-' prefix which is not a valid UUID for postgres
        if (typeof item.id === 'string' && item.id.startsWith('draft-')) {
          item.id = crypto.randomUUID();
        }
        return item;
      });

      const deduplicatedTools = deduplicateBySlug(formattedTools);
      const { data, error } = await supabase.from('tools').upsert(deduplicatedTools, { onConflict: 'slug' });
      results.tools = error ? error.message : `Successfully migrated ${deduplicatedTools.length} tools`;
    }

    return NextResponse.json({ success: true, results });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
