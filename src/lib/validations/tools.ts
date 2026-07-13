import * as z from 'zod';
import { AppRole } from '@/lib/auth/rbac';

export const toolStatusSchema = z.enum(['Draft', 'In Review', 'Published', 'Unpublished', 'Archived']);

export const toolSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  slug: z.string()
    .min(2, "Slug must be at least 2 characters")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
  company: z.string().optional(),
  tagline: z.string().min(10, "Tagline must be at least 10 characters").max(160),
  description: z.string().min(50, "Description should be detailed (at least 50 characters)"),
  category_id: z.string().min(1, "Category is required"),
  
  price_model: z.enum(['Free', 'Freemium', 'Paid', 'Enterprise']),
  price: z.string().optional(),
  
  rating: z.coerce.number().min(0).max(5).default(0),
  review_count: z.coerce.number().min(0).default(0),
  
  logo_url: z.string().url("Must be a valid URL"),
  image_url: z.string().url("Must be a valid URL"),
  screenshot_url: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  website_url: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  url: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  
  tags: z.array(z.string()).default([]),
  
  verified: z.boolean().default(false),
  featured: z.boolean().default(false),
  popularity: z.coerce.number().default(0),
  
  platform: z.string().optional(),
  api: z.boolean().default(false),
  mobile_app: z.boolean().default(false),
  open_source: z.boolean().default(false),
  free_trial: z.boolean().default(false),
  
  status: toolStatusSchema.default('Draft'),
});

export type ToolFormValues = z.infer<typeof toolSchema>;

// Utility to calculate SEO score
export function calculateSeoScore(tool: Partial<ToolFormValues>): number {
  let score = 0;
  if (tool.name && tool.name.length > 2) score += 20;
  if (tool.slug && tool.slug.length > 2) score += 20;
  if (tool.tagline && tool.tagline.length > 10 && tool.tagline.length <= 160) score += 30;
  if (tool.description && tool.description.length > 200) score += 30; // Encourage longer descriptions
  return score;
}

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}
