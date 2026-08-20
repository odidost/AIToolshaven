"use server";

import { createClient, createAdminClient } from "@/lib/supabase/server";
import { toolSchema, type ToolFormValues } from "@/lib/validations/tools";
import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import type { AITool } from "@/lib/types/tool";

export async function saveTool(data: ToolFormValues) {
  // Validate data on the server
  const parsedData = toolSchema.safeParse(data);
  if (!parsedData.success) {
    return { success: false, error: parsedData.error.issues[0].message };
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Unauthorized" };
  }

  // Use the admin client to bypass RLS for database writes in the CMS
  const adminSupabase = await createAdminClient();

  const toolData = parsedData.data;
  
  // Construct the database object mapping camelCase schema validations to Supabase snake_case columns
  const dbRecord = {
    name: toolData.name,
    slug: toolData.slug,
    company: toolData.company || null,
    tagline: toolData.tagline,
    description: toolData.description,
    category_id: toolData.category_id,
    price_model: toolData.price_model,
    price: toolData.price || null,
    rating: toolData.rating,
    review_count: toolData.review_count,
    logo_url: toolData.logo_url,
    image_url: toolData.image_url,
    screenshot_url: toolData.screenshot_url || null,
    website_url: toolData.website_url || null,
    url: toolData.url || null,
    tags: toolData.tags || [],
    features: toolData.features || [],
    pros: (toolData.pros || []).map(p => typeof p === 'object' ? JSON.stringify(p) : p),
    cons: (toolData.cons || []).map(c => typeof c === 'object' ? JSON.stringify(c) : c),
    use_cases: (toolData.useCases || []).map(u => typeof u === 'object' ? JSON.stringify(u) : u),
    pricing_plans: toolData.pricingPlans || [],
    best_for: toolData.bestFor || [],
    editorial: toolData.editorial || {},
    verified: toolData.verified,
    featured: toolData.featured,
    is_sponsored: toolData.isSponsored,
    popularity: toolData.popularity,
    platform: toolData.platform || null,
    api: toolData.api,
    mobile_app: toolData.mobileApp,
    open_source: toolData.openSource,
    free_trial: toolData.freeTrial,
    status: toolData.status,
    last_edited_by: user.id,
    updated_at: new Date().toISOString(),
  };

  let result;
  let toolId = toolData.id;
  let supabaseSuccess = false;

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
    console.warn("Supabase connection offline. Falling back to local filesystem storage. Detail:", err.message);
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
        doc.draftData?.slug === toolData.slug || 
        doc.publishedData?.slug === toolData.slug
      );

      const mappedTool: AITool = {
        id: toolId,
        name: toolData.name,
        slug: toolData.slug,
        company: toolData.company || undefined,
        tagline: toolData.tagline,
        description: toolData.description,
        category: toolData.category_id,
        additionalCategories: toolData.additionalCategories || [],
        priceModel: toolData.price_model as any,
        price: toolData.price || undefined,
        rating: toolData.rating,
        reviewCount: toolData.review_count,
        logoUrl: toolData.logo_url,
        imageUrl: toolData.image_url,
        screenshotUrl: toolData.screenshot_url || undefined,
        websiteUrl: toolData.website_url || undefined,
        url: toolData.url || undefined,
        tags: toolData.tags || [],
        features: (toolData.features || []).map(f => ({
          title: f.title,
          description: f.description,
          icon: f.icon || ""
        })),
        verified: toolData.verified,
        featured: toolData.featured,
        isSponsored: toolData.isSponsored,
        popularity: toolData.popularity,
        platform: toolData.platform || undefined,
        api: toolData.api,
        mobileApp: toolData.mobileApp,
        openSource: toolData.openSource,
        freeTrial: toolData.freeTrial,
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
      console.log(`Synced tool "${toolData.slug}" locally to tools.json.`);
    }
  } catch (jsonErr) {
    console.error("Failed to sync to tools.json:", jsonErr);
  }

  revalidatePath("/admin/cms/tools");
  revalidatePath(`/admin/cms/tools/${toolData.slug}`);
  revalidatePath(`/tool/${toolData.slug}`);
  // Clear the entire app cache since a tool update can affect categories, latest lists, etc.
  revalidatePath("/", "layout");

  return { success: true, slug: toolData.slug, id: toolId };
}
