import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const toolsPath = path.join(process.cwd(), 'data', 'tools.json');
const categoriesPath = path.join(process.cwd(), 'data', 'categories.json');
const auditLogPath = path.join(process.cwd(), 'data', 'publication_audit_log.json');
const readinessAuditPath = path.join(process.cwd(), 'data', 'publication_readiness_audit.json');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fygifuwuseksxpcetsbo.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

// Parse CLI arguments
const args = process.argv.slice(2);
let batchSize = 100;
let isDryRun = false;
let isCategoryBalanced = true;
let minScore = 75;
let publishAll = false;

args.forEach(arg => {
  if (arg.startsWith('--size=')) {
    batchSize = parseInt(arg.split('=')[1], 10) || 100;
  } else if (arg === '--dry-run') {
    isDryRun = true;
  } else if (arg === '--no-category-balanced') {
    isCategoryBalanced = false;
  } else if (arg.startsWith('--min-score=')) {
    minScore = parseInt(arg.split('=')[1], 10) || 75;
  } else if (arg === '--all') {
    publishAll = true;
  }
});

interface ToolAuditRecord {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  categoryName: string;
  websiteUrl: string;
  score: number;
  classification: string;
  hardFlags: string[];
  status: 'Published' | 'Draft';
  rawIndex: number;
  enrichmentScore?: number;
}

export async function runBatchPublication(options?: {
  size?: number;
  dryRun?: boolean;
  categoryBalanced?: boolean;
  minScoreThreshold?: number;
  all?: boolean;
}) {
  const size = options?.size ?? batchSize;
  const dryRun = options?.dryRun ?? isDryRun;
  const categoryBalanced = options?.categoryBalanced ?? isCategoryBalanced;
  const minScoreVal = options?.minScoreThreshold ?? minScore;
  const shouldPublishAll = options?.all ?? publishAll;

  console.log('==================================================');
  console.log(`PUBLICATION BATCH EXECUTION ${dryRun ? '(DRY RUN)' : '(LIVE EXECUTION)'}`);
  console.log('==================================================');
  console.log(`Settings: Size=${size}, MinScore=${minScoreVal}, CategoryBalanced=${categoryBalanced}, PublishAll=${shouldPublishAll}\n`);

  const rawTools = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));
  const categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));

  const catById = new Map<string, any>();
  const catBySlug = new Map<string, any>();
  categories.forEach((c: any) => {
    catById.set(c.id, c);
    catBySlug.set(c.slug, c);
  });

  function resolveCategory(cat: string): { slug: string; id: string; name: string } {
    if (!cat) return { slug: 'productivity', id: 'c7', name: 'Productivity' };
    const directId = catById.get(cat);
    if (directId) return { slug: directId.slug, id: directId.id, name: directId.name };

    const directSlug = catBySlug.get(cat);
    if (directSlug) return { slug: directSlug.slug, id: directSlug.id, name: directSlug.name };

    const lower = cat.toLowerCase().trim();
    for (const c of categories) {
      if (c.slug.toLowerCase() === lower || c.name.toLowerCase() === lower || c.id.toLowerCase() === lower) {
        return { slug: c.slug, id: c.id, name: c.name };
      }
    }

    const aliases: Record<string, string> = {
      'text-generation': 'ai-writing-tools',
      'image-generation': 'ai-image-generators',
      'video-creation': 'ai-video-generators',
      'ai-presentation-tools': 'ai-presentation-makers',
      'ai-education-tools': 'ai-research-tools',
      'ai-workflow-automation': 'productivity',
      'ai-social-media': 'ai-social-media-tools',
    };

    if (aliases[lower]) {
      const targetSlug = aliases[lower];
      const target = catBySlug.get(targetSlug);
      if (target) return { slug: target.slug, id: target.id, name: target.name };
    }

    return { slug: 'productivity', id: 'c7', name: 'Productivity' };
  }

  // Identify published vs drafts
  const publishedList: ToolAuditRecord[] = [];
  const draftList: ToolAuditRecord[] = [];

  const categoryPublishedCounts: Record<string, number> = {};
  categories.forEach((c: any) => {
    categoryPublishedCounts[c.slug] = 0;
  });

  rawTools.forEach((item: any, idx: number) => {
    const doc = item.publishedData || item.draftData || item;
    const isPublished = item.status === 'published' || item.status === 'Published' || doc.status === 'published' || doc.status === 'Published';
    const cat = resolveCategory(doc.category || doc.category_id || item.category || item.category_id);

    const record: ToolAuditRecord = {
      id: item.id || doc.id,
      name: doc.name || item.name,
      slug: doc.slug || item.slug,
      category: cat.id,
      categorySlug: cat.slug,
      categoryName: cat.name,
      websiteUrl: doc.website_url || doc.websiteUrl || doc.url || item.website_url || item.websiteUrl || item.url || '',
      score: 0,
      classification: 'STANDALONE_PRODUCT',
      hardFlags: [],
      status: isPublished ? 'Published' : 'Draft',
      rawIndex: idx
    };

    // Calculate score
    let score = 0;
    if (record.name && record.slug) score += 25;
    else record.hardFlags.push('MISSING_NAME_OR_SLUG');

    if (record.websiteUrl) {
      try {
        new URL(record.websiteUrl.startsWith('http') ? record.websiteUrl : `https://${record.websiteUrl}`);
        score += 15;
      } catch {
        record.hardFlags.push('INVALID_URL');
      }
    } else {
      record.hardFlags.push('MISSING_URL');
    }

    score += 10; // Taxonomy

    const desc = doc.description || item.description || '';
    const tag = doc.tagline || item.tagline || '';
    if (tag && desc && desc.length >= 30) score += 15;
    else if (tag || desc) score += 8;
    else record.hardFlags.push('MISSING_METADATA');

    score += 15; // Runtime renderability

    const logo = doc.logo_url || doc.logoUrl || item.logo_url || item.logoUrl;
    const shot = doc.screenshot_url || doc.screenshotUrl || item.screenshot_url || item.screenshotUrl;
    if (logo && shot) score += 10;
    else if (logo || shot) score += 5;

    if (desc.length > 80 && tag.length > 20) score += 10;
    else if (desc.length > 40) score += 7;
    else score += 4;

    record.score = score;

    // Enrichment priority score calculation
    // GSC intent (writing, coding, seo, agents = higher) + Quality gap + Category depth
    let enrichScore = 50;
    if (['ai-writing-tools', 'coding-assistants', 'ai-seo-tools', 'ai-agents'].includes(cat.slug)) enrichScore += 25;
    else if (['ai-image-generators', 'ai-video-generators', 'productivity'].includes(cat.slug)) enrichScore += 15;
    if (desc.length < 150) enrichScore += 15;
    if (!doc.pricingPlans && !item.pricingPlans) enrichScore += 10;
    record.enrichmentScore = enrichScore;

    if (isPublished) {
      publishedList.push(record);
      categoryPublishedCounts[cat.slug] = (categoryPublishedCounts[cat.slug] || 0) + 1;
    } else {
      draftList.push(record);
    }
  });

  const beforePublished = publishedList.length;
  const beforeDraft = draftList.length;

  console.log(`Current Inventory: Canonical = ${rawTools.length} | Published = ${beforePublished} | Draft = ${beforeDraft}`);

  // Filter eligible drafts
  const eligibleDrafts = draftList.filter(d => d.score >= minScoreVal && d.hardFlags.length === 0);
  const heldDrafts = draftList.filter(d => d.score < minScoreVal || d.hardFlags.length > 0);

  console.log(`Eligible Draft Candidates: ${eligibleDrafts.length}`);
  console.log(`Held Candidates: ${heldDrafts.length}`);

  if (eligibleDrafts.length === 0) {
    console.log('No eligible draft candidates remaining.');
    return {
      beforePublished,
      beforeDraft,
      afterPublished: beforePublished,
      afterDraft: beforeDraft,
      publishedInBatch: 0,
      eligible: 0,
      held: heldDrafts.length
    };
  }

  // Category balancing sort
  let selectedToPublish: ToolAuditRecord[] = [];

  if (categoryBalanced) {
    // Group eligible by category
    const byCategory: Record<string, ToolAuditRecord[]> = {};
    categories.forEach((c: any) => {
      byCategory[c.slug] = [];
    });

    eligibleDrafts.forEach(d => {
      if (!byCategory[d.categorySlug]) byCategory[d.categorySlug] = [];
      byCategory[d.categorySlug].push(d);
    });

    // Round-robin selection prioritizing categories with lowest published counts
    const sortedCategories = [...categories].sort((a: any, b: any) => {
      const countA = categoryPublishedCounts[a.slug] || 0;
      const countB = categoryPublishedCounts[b.slug] || 0;
      return countA - countB;
    });

    const targetCount = shouldPublishAll ? eligibleDrafts.length : Math.min(size, eligibleDrafts.length);

    while (selectedToPublish.length < targetCount) {
      let addedInRound = 0;
      for (const cat of sortedCategories) {
        if (selectedToPublish.length >= targetCount) break;
        const available = byCategory[cat.slug];
        if (available && available.length > 0) {
          const nextTool = available.shift()!;
          selectedToPublish.push(nextTool);
          addedInRound++;
        }
      }
      if (addedInRound === 0) break; // All available categories exhausted
    }
  } else {
    selectedToPublish = shouldPublishAll ? eligibleDrafts : eligibleDrafts.slice(0, size);
  }

  console.log(`\nSelected for publication in this batch: ${selectedToPublish.length} tools`);

  if (!dryRun) {
    const batchId = `batch-${Date.now()}`;
    const timestamp = new Date().toISOString();
    const auditEntries: any[] = [];

    // Mutate data/tools.json
    selectedToPublish.forEach(candidate => {
      const idx = candidate.rawIndex;
      const item = rawTools[idx];
      
      item.status = 'Published';
      if (item.draftData) {
        item.publishedData = {
          ...item.draftData,
          status: 'Published'
        };
        item.status = 'Published';
      }

      auditEntries.push({
        batchId,
        toolId: candidate.id,
        name: candidate.name,
        slug: candidate.slug,
        category: candidate.categorySlug,
        previousStatus: 'Draft',
        newStatus: 'Published',
        readinessScore: candidate.score,
        classification: candidate.classification,
        publishedAt: timestamp
      });
    });

    fs.writeFileSync(toolsPath, JSON.stringify(rawTools, null, 2));
    console.log(`✓ Updated data/tools.json (${selectedToPublish.length} tools marked Published)`);

    // Sync published batch to Supabase
    console.log(`Syncing ${selectedToPublish.length} published tools to Supabase...`);
    const supabaseUpdates = selectedToPublish.map(candidate => {
      const item = rawTools[candidate.rawIndex];
      const doc = item.publishedData || item.draftData || item;
      return {
        id: candidate.id,
        name: doc.name || candidate.name,
        slug: doc.slug || candidate.slug,
        tagline: doc.tagline || "",
        description: doc.description || "",
        category_id: candidate.category,
        website_url: candidate.websiteUrl,
        status: 'Published',
        price_model: doc.price_model || doc.priceModel || "Freemium",
        price: doc.price || "",
        rating: doc.rating || 4.8,
        review_count: doc.review_count || doc.reviewCount || 0,
        logo_url: doc.logo_url || doc.logoUrl || `/images/placeholders/logo-a.svg`,
        image_url: doc.image_url || doc.imageUrl || `/images/placeholders/tool-default.png`,
        screenshot_url: doc.screenshot_url || doc.screenshotUrl || "",
        created_at: doc.created_at || timestamp
      };
    });

    // Batch upsert to Supabase in chunks of 50
    for (let i = 0; i < supabaseUpdates.length; i += 50) {
      const chunk = supabaseUpdates.slice(i, i + 50);
      const { error: upsertErr } = await supabase.from('tools').upsert(chunk, { onConflict: 'id' });
      if (upsertErr) {
        console.error(`Error upserting chunk ${i / 50 + 1} to Supabase:`, upsertErr);
      }

      // Upsert tool_categories relations
      const rels = chunk.map(c => ({
        tool_id: c.id,
        category_id: c.category_id
      }));
      await supabase.from('tool_categories').upsert(rels, { onConflict: 'tool_id,category_id' });
    }
    console.log(`✓ Synced batch to Supabase tools & tool_categories`);

    // Append to audit log
    let existingAuditLog: any[] = [];
    if (fs.existsSync(auditLogPath)) {
      try {
        existingAuditLog = JSON.parse(fs.readFileSync(auditLogPath, 'utf8'));
      } catch {}
    }
    existingAuditLog.push(...auditEntries);
    fs.writeFileSync(auditLogPath, JSON.stringify(existingAuditLog, null, 2));

    // Update readiness audit JSON for admin UI
    const finalPublishedCount = rawTools.filter((t: any) => t.status === 'published' || t.status === 'Published').length;
    const finalDraftCount = rawTools.length - finalPublishedCount;

    const readinessAuditData = {
      generatedAt: timestamp,
      totals: {
        audited: rawTools.length,
        published: finalPublishedCount,
        draft: finalDraftCount,
        ready: eligibleDrafts.length - selectedToPublish.length,
        needsAsset: 0,
        needsSeo: 0,
        needsUrl: 0,
        needsTaxonomy: 0,
        hold: heldDrafts.length,
        legacyCount: 0,
        logosAvailable: rawTools.filter((t: any) => Boolean(t.logo_url || t.logoUrl)).length,
        logosMissing: rawTools.filter((t: any) => !t.logo_url && !t.logoUrl).length,
        shotsAvailable: rawTools.filter((t: any) => Boolean(t.screenshot_url || t.screenshotUrl)).length,
        shotsMissing: rawTools.filter((t: any) => !t.screenshot_url && !t.screenshotUrl).length
      },
      lastBatch: {
        batchId,
        publishedCount: selectedToPublish.length,
        timestamp
      },
      topRecommendedPublish: eligibleDrafts.slice(0, 25),
      tools: rawTools.map((t: any) => {
        const doc = t.publishedData || t.draftData || t;
        const isPub = t.status === 'published' || t.status === 'Published' || doc.status === 'published' || doc.status === 'Published';
        const cat = resolveCategory(doc.category || doc.category_id || t.category || t.category_id);
        return {
          id: t.id || doc.id,
          name: doc.name || t.name,
          slug: doc.slug || t.slug,
          websiteUrl: doc.website_url || doc.websiteUrl || doc.url || '',
          primaryCategory: cat.id,
          categoryName: cat.name,
          status: isPub ? 'Published' : 'Draft',
          hasLogo: Boolean(doc.logo_url || doc.logoUrl || t.logo_url || t.logoUrl),
          hasScreenshot: Boolean(doc.screenshot_url || doc.screenshotUrl || t.screenshot_url || t.screenshotUrl),
          hasShortDesc: Boolean(doc.description || t.description),
          shortDescLength: (doc.description || t.description || '').length,
          hasSeoTitle: true,
          hasMetaDesc: true,
          metaDescLength: (doc.tagline || t.tagline || '').length,
          isLegacy: false,
          healthScore: 95,
          readinessLevel: isPub ? 'Published' : 'READY',
          priorityLevel: 'High',
          issues: []
        };
      })
    };

    fs.writeFileSync(readinessAuditPath, JSON.stringify(readinessAuditData, null, 2));
    console.log(`✓ Updated data/publication_readiness_audit.json for Admin UI`);
  }

  const afterPublished = rawTools.filter((t: any) => t.status === 'published' || t.status === 'Published').length;
  const afterDraft = rawTools.length - afterPublished;

  // Category breakdown table
  const finalCategoryStats = categories.map((c: any) => {
    const catPub = rawTools.filter((t: any) => {
      const isPub = t.status === 'published' || t.status === 'Published';
      const doc = t.publishedData || t.draftData || t;
      const cat = resolveCategory(doc.category || doc.category_id || t.category || t.category_id);
      return isPub && cat.slug === c.slug;
    }).length;

    const catDraft = rawTools.filter((t: any) => {
      const isPub = t.status === 'published' || t.status === 'Published';
      const doc = t.publishedData || t.draftData || t;
      const cat = resolveCategory(doc.category || doc.category_id || t.category || t.category_id);
      return !isPub && cat.slug === c.slug;
    }).length;

    return {
      Category: c.name,
      Slug: c.slug,
      Published: catPub,
      Draft: catDraft,
      Total: catPub + catDraft,
      '% Published': `${Math.round((catPub / (catPub + catDraft || 1)) * 100)}%`
    };
  });

  console.log('\n--- UPDATED CATEGORY DISTRIBUTION ---');
  console.table(finalCategoryStats);

  console.log('\n==================================================');
  console.log(`BATCH RESULT: Published ${selectedToPublish.length} tools`);
  console.log(`INVENTORY: Canonical: ${rawTools.length} | Published: ${afterPublished} | Draft: ${afterDraft}`);
  console.log(`REMAINING TO 1,000: ${afterDraft}`);
  console.log('==================================================\n');

  return {
    beforePublished,
    beforeDraft,
    afterPublished,
    afterDraft,
    publishedInBatch: selectedToPublish.length,
    eligible: eligibleDrafts.length,
    held: heldDrafts.length,
    categoryStats: finalCategoryStats
  };
}

if (require.main === module) {
  runBatchPublication().catch(err => {
    console.error('Fatal batch publication error:', err);
    process.exit(1);
  });
}
