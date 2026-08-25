import * as z from 'zod';

export const toolStatusSchema = z.enum(['Draft', 'In Review', 'Published', 'Unpublished', 'Archived']).or(z.string());

export const toolSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name must be at least 1 character").max(100),
  slug: z.string().optional().or(z.literal('')),
  company: z.string().optional().default(''),
  tagline: z.string().optional().default(''),
  description: z.string().optional().default(''),
  category_id: z.string().optional().default('cat-other'),
  additionalCategories: z.array(z.string()).optional().default([]),
  
  price_model: z.enum(['Free', 'Freemium', 'Paid', 'Enterprise']).optional().default('Freemium'),
  price: z.string().optional().default(''),
  
  rating: z.coerce.number().min(0).max(5).optional().default(0),
  review_count: z.coerce.number().min(0).optional().default(0),
  
  logo_url: z.string().optional().default(''),
  image_url: z.string().optional().default(''),
  screenshot_url: z.string().optional().default(''),
  website_url: z.string().optional().default(''),
  url: z.string().optional().default(''),
  
  tags: z.array(z.string()).optional().default([]),
  
  verified: z.boolean().optional().default(false),
  featured: z.boolean().optional().default(false),
  isSponsored: z.boolean().optional().default(false),
  popularity: z.coerce.number().optional().default(0),
  
  platform: z.string().optional().default(''),
  api: z.boolean().optional().default(false),
  mobileApp: z.boolean().optional().default(false),
  openSource: z.boolean().optional().default(false),
  freeTrial: z.boolean().optional().default(false),
  
  features: z.array(z.any()).optional().default([]),
  pros: z.array(z.any()).optional().default([]),
  cons: z.array(z.any()).optional().default([]),
  useCases: z.array(z.any()).optional().default([]),
  pricingPlans: z.array(z.any()).optional().default([]),

  bestFor: z.array(z.string()).optional().default([]),
  goals: z.array(z.string()).optional().default([]),
  workflows: z.array(z.string()).optional().default([]),

  editorial: z.any().optional().default({ faqs: [] }),
  status: toolStatusSchema.optional().default('Draft'),
});

export type ToolFormValues = z.infer<typeof toolSchema>;

// Utility to calculate SEO score
export function calculateSeoScore(tool: Partial<ToolFormValues>): number {
  let score = 0;
  if (tool.name && tool.name.length > 2) score += 20;
  if (tool.slug && tool.slug.length > 2) score += 20;
  if (tool.tagline && tool.tagline.length > 10 && tool.tagline.length <= 160) score += 30;
  if (tool.description && tool.description.length > 200) score += 30;
  return score;
}

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}
