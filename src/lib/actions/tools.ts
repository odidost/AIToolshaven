"use server";

import { createClient, createAdminClient } from "@/lib/supabase/server";
import { toolSchema, generateSlug, type ToolFormValues } from "@/lib/validations/tools";
import { revalidatePath, revalidateTag } from "next/cache";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import type { AITool } from "@/lib/types/tool";
import { clearToolsMemo } from "@/lib/data/tools-service";
import { resolveCategory } from "@/lib/data/categories";
import { comparisons } from "@/lib/comparisons";

export async function saveTool(data: ToolFormValues) {
  // Validate data on the server with relaxed schema
  const parsedData = toolSchema.safeParse(data);
  if (!parsedData.success) {
    return { success: false, error: parsedData.error.issues[0]?.message || "Validation error" };
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Unauthorized" };
  }

  // Use the admin client to bypass RLS for database writes in the CMS
  const adminSupabase = await createAdminClient();

  const toolData = parsedData.data;
  const slug = toolData.slug || generateSlug(toolData.name);
  
  // Construct the database object mapping camelCase schema validations to Supabase snake_case columns
  const dbRecord = {
    name: toolData.name,
    slug: slug,
    company: toolData.company || null,
    tagline: toolData.tagline || "",
    description: toolData.description || "",
    category_id: toolData.category_id || "cat-other",
    price_model: toolData.price_model || "Freemium",
    price: toolData.price || null,
    rating: toolData.rating ?? 0,
    review_count: toolData.review_count ?? 0,
    logo_url: toolData.logo_url || "",
    image_url: toolData.image_url || toolData.logo_url || "",
    screenshot_url: toolData.screenshot_url || null,
    website_url: toolData.website_url || null,
    url: toolData.url || null,
    tags: toolData.tags || [],
    features: (toolData.features || []).map(f => typeof f === 'string' ? { title: f, description: '', icon: '' } : { title: f?.title || '', description: f?.description || '', icon: f?.icon || '' }),
    pros: (toolData.pros || []).map(p => typeof p === 'object' ? (p?.title || JSON.stringify(p)) : String(p)),
    cons: (toolData.cons || []).map(c => typeof c === 'object' ? (c?.title || JSON.stringify(c)) : String(c)),
    use_cases: (toolData.useCases || []).map(u => typeof u === 'object' ? (u?.title || JSON.stringify(u)) : String(u)),
    pricing_plans: toolData.pricingPlans || [],
    best_for: toolData.bestFor || [],
    editorial: toolData.editorial || {},
    verified: toolData.verified ?? false,
    featured: toolData.featured ?? false,
    popularity: toolData.popularity ?? 0,
    platform: toolData.platform || null,
    api: toolData.api ?? false,
    mobile_app: toolData.mobileApp ?? false,
    open_source: toolData.openSource ?? false,
    free_trial: toolData.freeTrial ?? false,
    status: toolData.status || "Draft",
    last_edited_by: user.id,
    updated_at: new Date().toISOString(),
  };

  let result;
  let toolId = toolData.id;
  let supabaseSuccess = false;
  let oldRecord: any = null;

  try {
    if (toolId) {
      const { data } = await adminSupabase.from("tools").select("*").eq("id", toolId).maybeSingle();
      if (data) oldRecord = data;
    } else if (slug) {
      const { data } = await adminSupabase.from("tools").select("*").eq("slug", slug).maybeSingle();
      if (data) oldRecord = data;
    }
  } catch {
    // Non-blocking pre-fetch
  }

  try {
    if (toolId) {
      // Update existing
      result = await adminSupabase
        .from("tools")
        .update({
          ...dbRecord,
          id: toolId,
        } as any)
        .eq("id", toolId);
      if (!result.error) supabaseSuccess = true;
    } else {
      // Insert new
      toolId = crypto.randomUUID();
      result = await adminSupabase
        .from("tools")
        .insert({
          ...dbRecord,
          id: toolId,
          created_by: user.id,
          created_at: new Date().toISOString(),
        } as any)
        .select("id")
        .single();
      
      if (!result.error && result.data) {
        toolId = result.data.id;
        supabaseSuccess = true;
      }
    }
    
    if (supabaseSuccess && toolId) {
      // Sync tool_categories
      await adminSupabase.from('tool_categories').delete().eq('tool_id', toolId);
      
      const categoryIds = new Set<string>();
      if (toolData.category_id) categoryIds.add(toolData.category_id);
      (toolData.additionalCategories || []).forEach(c => categoryIds.add(c));
      
      if (categoryIds.size > 0) {
        const relationships = Array.from(categoryIds).map(c => ({
          tool_id: toolId,
          category_id: c
        }));
        await adminSupabase.from('tool_categories').insert(relationships);
      }
    }
    
    if (result?.error) {
      console.warn("Supabase save operation completed with warning/error:", result.error.message);
      return { success: false, error: `Database error: ${result.error.message}` };
    }
  } catch (err: any) {
    console.warn("Supabase connection error:", err.message);
    return { success: false, error: `Server error: ${err.message}` };
  }

  // Generate local ID if we are offline and this is a new tool
  if (!toolId) {
    toolId = crypto.randomUUID();
  }

  // Update local JSON file tools.json so the page works locally and offline
  try {
    const toolsPath = path.join(process.cwd(), "data", "tools.json");
    if (fs.existsSync(toolsPath)) {
      const toolsJson = JSON.parse(fs.readFileSync(toolsPath, "utf8"));
      
      // Find existing document by slug or ID
      const existingIdx = toolsJson.findIndex((doc: any) => 
        doc.id === toolId || 
        doc.slug === slug ||
        doc.draftData?.slug === slug || 
        doc.publishedData?.slug === slug
      );

      const mappedTool: AITool = {
        id: toolId,
        name: toolData.name,
        slug: slug,
        company: toolData.company || undefined,
        tagline: toolData.tagline || "",
        description: toolData.description || "",
        category: toolData.category_id || "cat-other",
        additionalCategories: toolData.additionalCategories || [],
        priceModel: (toolData.price_model || "Freemium") as any,
        price: toolData.price || undefined,
        rating: toolData.rating ?? 0,
        reviewCount: toolData.review_count ?? 0,
        logoUrl: toolData.logo_url || "",
        imageUrl: toolData.image_url || toolData.logo_url || "",
        screenshotUrl: toolData.screenshot_url || undefined,
        websiteUrl: toolData.website_url || undefined,
        url: toolData.url || undefined,
        tags: toolData.tags || [],
        features: (toolData.features || []).map(f => typeof f === 'string' ? { title: f, description: '', icon: '' } : { title: f?.title || '', description: f?.description || '', icon: f?.icon || '' }),
        verified: toolData.verified ?? false,
        featured: toolData.featured ?? false,
        isSponsored: toolData.isSponsored ?? false,
        popularity: toolData.popularity ?? 0,
        platform: toolData.platform || undefined,
        api: toolData.api ?? false,
        mobileApp: toolData.mobileApp ?? false,
        openSource: toolData.openSource ?? false,
        freeTrial: toolData.freeTrial ?? false,
        pricingPlans: (toolData as any).pricingPlans || [],
        pricing: (toolData as any).pricing || [],
        pros: (toolData as any).pros || [],
        cons: (toolData as any).cons || [],
        bestFor: (toolData as any).bestFor || [],
        useCases: (toolData as any).useCases || [],
        goals: (toolData as any).goals || [],
        workflows: (toolData as any).workflows || [],
        socials: (toolData as any).socials || {},
        stats: (toolData as any).stats || {},
        editorial: (toolData as any).editorial || {},
        promptExamples: (toolData as any).promptExamples || [],
        lastUpdated: new Date().toISOString().split('T')[0]
      };

      const status = toolData.status === "Published" ? "published" : (toolData.status === "Draft" ? "draft" : "archived");

      if (existingIdx >= 0) {
        const existingDoc = toolsJson[existingIdx];
        existingDoc.status = status;
        existingDoc.lastAutosavedAt = new Date().toISOString();
        existingDoc.draftData = mappedTool;
        existingDoc.logoUrl = mappedTool.logoUrl;
        existingDoc.screenshotUrl = mappedTool.screenshotUrl;
        existingDoc.imageUrl = mappedTool.imageUrl;
        if (status === "published") {
          existingDoc.publishedAt = new Date().toISOString();
          existingDoc.publishedData = mappedTool;
        }
        toolsJson[existingIdx] = existingDoc;
      } else {
        const newDoc = {
          id: toolId,
          status: status,
          publishedAt: status === "published" ? new Date().toISOString() : null,
          lastAutosavedAt: new Date().toISOString(),
          draftData: mappedTool,
          publishedData: status === "published" ? mappedTool : null,
          versions: []
        };
        toolsJson.push(newDoc);
      }

      fs.writeFileSync(toolsPath, JSON.stringify(toolsJson, null, 2), "utf8");
      console.log(`Synced tool "${slug}" locally to tools.json.`);
    }
  } catch (jsonErr) {
    console.error("Failed to sync to tools.json:", jsonErr);
  }

  // Clear local indexes
  clearToolsMemo();

  const oldSlug = (oldRecord?.slug || '').toLowerCase();
  const newSlug = slug.toLowerCase();

  // Invalidate CMS admin routes
  revalidatePath("/admin/cms/tools");
  revalidatePath(`/admin/cms/tools/${newSlug}`);
  if (oldSlug && oldSlug !== newSlug) {
    revalidatePath(`/admin/cms/tools/${oldSlug}`);
  }

  // Invalidate public tool profile and alternatives for both old and new slugs
  revalidatePath(`/tool/${newSlug}`);
  revalidatePath(`/alternatives/${newSlug}`);
  revalidateTag(`tool:${newSlug}`, 'max');

  if (oldSlug && oldSlug !== newSlug) {
    revalidatePath(`/tool/${oldSlug}`);
    revalidatePath(`/alternatives/${oldSlug}`);
    revalidateTag(`tool:${oldSlug}`, 'max');
  }

  // Invalidate primary and additional categories using resolved real slugs
  const resolveCatSlug = (idOrSlug?: string | null): string | null => {
    if (!idOrSlug) return null;
    const res = resolveCategory(idOrSlug);
    return res?.slug || null;
  };

  const affectedCategories = new Set<string>();
  const oldCatSlug = resolveCatSlug(oldRecord?.category_id || oldRecord?.category);
  if (oldCatSlug) affectedCategories.add(oldCatSlug);

  const newCatSlug = resolveCatSlug(toolData.category_id);
  if (newCatSlug) affectedCategories.add(newCatSlug);

  const oldAdditionals = oldRecord?.additional_categories || oldRecord?.additionalCategories || [];
  if (Array.isArray(oldAdditionals)) {
    for (const ac of oldAdditionals) {
      const s = resolveCatSlug(ac);
      if (s) affectedCategories.add(s);
    }
  }

  const newAdditionals = toolData.additionalCategories || [];
  if (Array.isArray(newAdditionals)) {
    for (const ac of newAdditionals) {
      const s = resolveCatSlug(ac);
      if (s) affectedCategories.add(s);
    }
  }

  for (const catSlug of affectedCategories) {
    revalidatePath(`/category/${catSlug}`);
    revalidateTag(`category:${catSlug}`, 'max');
  }

  // Invalidate comparisons involving old or new slug
  for (const comp of comparisons) {
    if (comp.slug.includes(newSlug) || (oldSlug && comp.slug.includes(oldSlug))) {
      revalidatePath(`/compare-tools/${comp.slug}`);
    }
  }
  revalidatePath("/compare-tools");
  revalidateTag("tools-comparisons", 'max');

  // Invalidate listings & collections
  const oldStatus = (oldRecord?.status || 'published').toLowerCase();
  const newStatus = (toolData.status || 'Draft').toLowerCase();
  const wasPublished = oldStatus === 'published';
  const isPublished = newStatus === 'published';

  if (wasPublished || isPublished) {
    revalidatePath("/");
    revalidatePath("/categories");
    revalidatePath("/latest-ai-tools");
    revalidateTag("tools-latest", 'max');
  }

  const oldPrice = String(oldRecord?.price_model || oldRecord?.priceModel || '').toLowerCase();
  const newPrice = String(toolData.price_model || '').toLowerCase();
  if (oldPrice.includes('free') || newPrice.includes('free')) {
    revalidatePath("/freemium-ai-tools");
    revalidateTag("tools-freemium", 'max');
  }

  const oldFeatured = Boolean(oldRecord?.featured);
  const newFeatured = Boolean(toolData.featured);
  if (oldFeatured || newFeatured) {
    revalidatePath("/trending-ai-tools");
    revalidatePath("/popular-ai-tools");
    revalidateTag("tools-popular", 'max');
    revalidateTag("tools-trending", 'max');
    revalidateTag("tools-featured", 'max');
  }

  // Invalidate slugs tag only if tool slug, status, or identity changed
  if (!oldRecord || oldSlug !== newSlug || wasPublished !== isPublished) {
    revalidateTag("tools-slugs", 'max');
  }

  return { success: true, slug: slug, id: toolId };
}

export async function deleteTool(toolIdOrSlug: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { success: false, error: "Unauthorized" };

  const adminSupabase = await createAdminClient();

  // Find existing tool before deletion
  let existingTool: any = null;
  const { data: byId } = await adminSupabase.from("tools").select("*").eq("id", toolIdOrSlug).maybeSingle();
  if (byId) {
    existingTool = byId;
  } else {
    const { data: bySlug } = await adminSupabase.from("tools").select("*").eq("slug", toolIdOrSlug).maybeSingle();
    if (bySlug) existingTool = bySlug;
  }

  const toolSlug = (existingTool?.slug || toolIdOrSlug).toLowerCase();
  const toolId = existingTool?.id || toolIdOrSlug;

  // Delete from Supabase
  await adminSupabase.from("tool_categories").delete().eq("tool_id", toolId);
  const { error } = await adminSupabase.from("tools").delete().eq("id", toolId);
  if (error) {
    return { success: false, error: error.message };
  }

  // Sync delete from local tools.json
  try {
    const toolsPath = path.join(process.cwd(), "data", "tools.json");
    if (fs.existsSync(toolsPath)) {
      const toolsJson = JSON.parse(fs.readFileSync(toolsPath, "utf8"));
      const filtered = toolsJson.filter((d: any) => d.id !== toolId && d.slug !== toolSlug);
      fs.writeFileSync(toolsPath, JSON.stringify(filtered, null, 2), "utf8");
    }
  } catch (err) {
    console.warn("Failed to remove from local tools.json:", err);
  }

  clearToolsMemo();

  // Invalidate affected paths & tags
  revalidatePath("/admin/cms/tools");
  revalidatePath(`/admin/cms/tools/${toolSlug}`);
  revalidatePath(`/tool/${toolSlug}`);
  revalidatePath(`/alternatives/${toolSlug}`);
  revalidateTag(`tool:${toolSlug}`, 'max');

  const catIdentifier = existingTool?.category_id || existingTool?.category;
  if (catIdentifier) {
    const catSlug = resolveCategory(catIdentifier)?.slug;
    if (catSlug) {
      revalidatePath(`/category/${catSlug}`);
      revalidateTag(`category:${catSlug}`, 'max');
    }
  }

  for (const comp of comparisons) {
    if (comp.slug.includes(toolSlug)) {
      revalidatePath(`/compare-tools/${comp.slug}`);
    }
  }

  revalidatePath("/");
  revalidatePath("/categories");
  revalidatePath("/compare-tools");
  revalidatePath("/latest-ai-tools");
  revalidatePath("/popular-ai-tools");
  revalidatePath("/trending-ai-tools");
  revalidatePath("/freemium-ai-tools");

  revalidateTag("tools-slugs", 'max');
  revalidateTag("tools-comparisons", 'max');
  revalidateTag("tools-latest", 'max');
  revalidateTag("tools-freemium", 'max');
  revalidateTag("tools-popular", 'max');
  revalidateTag("tools-trending", 'max');
  revalidateTag("tools-featured", 'max');

  return { success: true };
}
