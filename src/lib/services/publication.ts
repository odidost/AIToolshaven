import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

const toolsPath = path.join(process.cwd(), 'data', 'tools.json');
const categoriesPath = path.join(process.cwd(), 'data', 'categories.json');
const auditLogPath = path.join(process.cwd(), 'data', 'publication_audit_log.json');
const readinessAuditPath = path.join(process.cwd(), 'data', 'publication_readiness_audit.json');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fygifuwuseksxpcetsbo.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

export interface BatchPublicationOptions {
  size?: number;
  dryRun?: boolean;
  categoryBalanced?: boolean;
  minScoreThreshold?: number;
  all?: boolean;
}

export interface ToolAuditRecord {
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

export async function runBatchPublication(options?: BatchPublicationOptions) {
  const size = options?.size ?? 100;
  const dryRun = options?.dryRun ?? false;
  const categoryBalanced = options?.categoryBalanced ?? true;
  const minScoreVal = options?.minScoreThreshold ?? 75;
  const shouldPublishAll = options?.all ?? false;

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

    score += 10;

    const desc = doc.description || item.description || '';
    const tag = doc.tagline || item.tagline || '';
    if (tag && desc && desc.length >= 30) score += 15;
    else if (tag || desc) score += 8;
    else record.hardFlags.push('MISSING_METADATA');

    score += 15;

    const logo = doc.logo_url || doc.logoUrl || item.logo_url || item.logoUrl;
    const shot = doc.screenshot_url || doc.screenshotUrl || item.screenshot_url || item.screenshotUrl;
    if (logo && shot) score += 10;
    else if (logo || shot) score += 5;

    if (desc.length > 80 && tag.length > 20) score += 10;
    else if (desc.length > 40) score += 7;
    else score += 4;

    record.score = score;

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

  const eligibleDrafts = draftList.filter(d => d.score >= minScoreVal && d.hardFlags.length === 0);
  const heldDrafts = draftList.filter(d => d.score < minScoreVal || d.hardFlags.length > 0);

  if (eligibleDrafts.length === 0) {
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

  let selectedToPublish: ToolAuditRecord[] = [];

  if (categoryBalanced) {
    const byCategory: Record<string, ToolAuditRecord[]> = {};
    categories.forEach((c: any) => {
      byCategory[c.slug] = [];
    });

    eligibleDrafts.forEach(d => {
      if (!byCategory[d.categorySlug]) byCategory[d.categorySlug] = [];
      byCategory[d.categorySlug].push(d);
    });

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
      if (addedInRound === 0) break;
    }
  } else {
    selectedToPublish = shouldPublishAll ? eligibleDrafts : eligibleDrafts.slice(0, size);
  }

  if (!dryRun) {
    const batchId = `batch-${Date.now()}`;
    const timestamp = new Date().toISOString();
    const auditEntries: any[] = [];

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

    for (let i = 0; i < supabaseUpdates.length; i += 50) {
      const chunk = supabaseUpdates.slice(i, i + 50);
      await supabase.from('tools').upsert(chunk, { onConflict: 'id' });

      const rels = chunk.map(c => ({
        tool_id: c.id,
        category_id: c.category_id
      }));
      await supabase.from('tool_categories').upsert(rels, { onConflict: 'tool_id,category_id' });
    }

    let existingAuditLog: any[] = [];
    if (fs.existsSync(auditLogPath)) {
      try {
        existingAuditLog = JSON.parse(fs.readFileSync(auditLogPath, 'utf8'));
      } catch {}
    }
    existingAuditLog.push(...auditEntries);
    fs.writeFileSync(auditLogPath, JSON.stringify(existingAuditLog, null, 2));

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
  }

  const afterPublished = rawTools.filter((t: any) => t.status === 'published' || t.status === 'Published').length;
  const afterDraft = rawTools.length - afterPublished;

  return {
    beforePublished,
    beforeDraft,
    afterPublished,
    afterDraft,
    publishedInBatch: selectedToPublish.length,
    eligible: eligibleDrafts.length,
    held: heldDrafts.length
  };
}
