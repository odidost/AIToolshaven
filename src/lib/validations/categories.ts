import * as z from 'zod';
import { toolStatusSchema } from './tools';

export const categorySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, "Name must be at least 3 characters").max(100),
  slug: z.string()
    .min(2, "Slug must be at least 2 characters")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
  description: z.string().optional().or(z.literal('')),
  icon: z.string().default('category'),
  status: toolStatusSchema.default('Draft'),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;
