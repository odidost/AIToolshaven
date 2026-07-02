import { categories } from "@/lib/data/categories";
import type { ToolCategory } from "@/lib/types/category";

export function getAllCategories(): ToolCategory[] {
    return categories;
}

export function getCategoryById(id: string): ToolCategory | undefined {
    return categories.find((category) => category.id === id);
}

export function getCategoryBySlug(slug: string): ToolCategory | undefined {
    return categories.find((category) => category.slug === slug);
}