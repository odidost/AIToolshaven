import { redirect } from 'next/navigation';
import { GoalRepository } from '@/lib/repositories';

export default async function NewGoalPage() {
    const newId = `persona-${Date.now()}`;
    
    const emptyGoal = {
        id: newId,
        name: "New Persona",
        items: []
    };
    
    await GoalRepository.save(newId, emptyGoal);
    
    redirect(`/admin/cms/goals/${newId}`);
}
