import { redirect } from 'next/navigation';

export default async function NewComparisonPage() {
    redirect(`/admin/cms/comparisons/new`);
}

