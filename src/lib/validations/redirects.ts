import * as z from "zod";

export const redirectSchema = z.object({
  id: z.string().uuid().optional(),
  old_path: z.string()
    .min(1, "Old URL is required")
    .startsWith("/", "Old URL must start with '/'"),
  new_path: z.string()
    .min(1, "New URL is required")
    .startsWith("/", "New URL must start with '/'"),
  status_code: z.coerce.number().default(301),
  active: z.boolean().default(true),
}).refine(data => data.old_path !== data.new_path, {
  message: "Old URL and New URL cannot be the same",
  path: ["new_path"],
});

export type RedirectFormValues = z.infer<typeof redirectSchema>;

export type RedirectRecord = {
  id: string;
  old_path: string;
  new_path: string;
  status_code: number;
  active: boolean;
  created_at: string;
};

export type NotFoundLogRecord = {
  id: string;
  requested_path: string;
  hit_count: number;
  last_seen: string;
  resolved: boolean;
  created_at: string;
};
