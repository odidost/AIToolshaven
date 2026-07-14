import { redirect } from 'next/navigation';

export default async function NewGoalPage() {
    redirect(`/admin/cms/goals/new`);
}

