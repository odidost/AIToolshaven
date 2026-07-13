import * as z from 'zod';
import { toolStatusSchema } from './tools';

export const workflowSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(5, "Title must be at least 5 characters").max(100),
  slug: z.string()
    .min(2, "Slug must be at least 2 characters")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
  description: z.string().min(10, "Description must be at least 10 characters").optional().or(z.literal('')),
  icon: z.string().default('account_tree'),
  status: toolStatusSchema.default('Draft'),
});

export type WorkflowFormValues = z.infer<typeof workflowSchema>;
