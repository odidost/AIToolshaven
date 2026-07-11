import type { ToolCategory } from "@/lib/types/category";

import categoriesJson from '../../../data/categories.json';

// The frontend directly consumes the CMS JSON data.
export const categories: ToolCategory[] = categoriesJson as ToolCategory[];