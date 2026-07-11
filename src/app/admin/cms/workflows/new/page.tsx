import { redirect } from 'next/navigation';
import { WorkflowRepository } from '@/lib/repositories';

export default async function NewWorkflowPage() {
    const newId = `workflow-${Date.now()}`;
    
    const emptyWorkflow = {
        id: newId,
        title: "Untitled Workflow",
        slug: newId,
        description: "",
        category: "general",
        difficulty: "Beginner",
        timeToComplete: "10 mins",
        cost: "Free",
        author: {
            name: "AIToolsHaven Editorial Team",
            role: "AI Workflow Specialist",
            avatar: "/avatars/editorial.webp"
        },
        tools: [],
        steps: []
    };
    
    await WorkflowRepository.save(newId, emptyWorkflow);
    
    redirect(`/admin/cms/workflows/${newId}`);
}
