import { redirect } from 'next/navigation';

export default async function NewWorkflowPage() {
    redirect(`/admin/cms/workflows/new`);
}

