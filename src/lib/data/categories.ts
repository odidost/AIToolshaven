import type { ToolCategory } from "@/lib/types/category";
import categoriesData from "../../../data/categories.json";

const rawCategories = categoriesData as ToolCategory[];

export const getLocalCategories = (): ToolCategory[] => {
  return rawCategories;
};

export const categories: ToolCategory[] = rawCategories;