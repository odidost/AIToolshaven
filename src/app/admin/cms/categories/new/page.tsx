import { redirect } from 'next/navigation';

export default async function NewCategoryPage() {
    redirect(`/admin/cms/categories/new`);
}

