import { redirect } from 'next/navigation';

export default async function NewToolPage() {
    redirect(`/admin/cms/tools/new`);
}

