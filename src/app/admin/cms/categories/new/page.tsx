import { redirect } from 'next/navigation';
import { CategoryRepository } from '@/lib/repositories';
import { ToolCategory } from '@/lib/types/category';

export default async function NewCategoryPage() {
    // 1. Generate a unique ID for the new category
    const newId = `category-${Date.now()}`;
    
    // 2. Create the baseline empty category
    const emptyCategory: ToolCategory = {
        id: newId,
        name: "Untitled Category",
        slug: newId,
        icon: "category",
        count: 0
    };
    
    // 3. Persist the new category
    await CategoryRepository.save(newId, emptyCategory);
    
    // 4. Redirect to the editor
    redirect(`/admin/cms/categories/${newId}`);
}
