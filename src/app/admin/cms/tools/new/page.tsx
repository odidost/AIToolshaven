import { redirect } from 'next/navigation';
import { ToolRepository } from '@/lib/repositories';
import { AITool } from '@/lib/types/tool';

export default async function NewToolPage() {
    // 1. Generate a unique ID for the new draft
    const newId = `draft-${Date.now()}`;
    
    // 2. Create the baseline empty tool
    const emptyTool: Partial<AITool> = {
        id: newId,
        name: "Untitled AI Tool",
        slug: newId,
        tagline: "",
        description: "",
        category: "productivity", // default category
        pricing: [],
        features: [],
        useCases: [],
        editorial: {
            overview: "",
            verdict: "",
            pricing: ""
        }
    };
    
    // 3. Persist the draft to the database/JSON
    await ToolRepository.saveDraft(newId, emptyTool as AITool);
    
    // 4. Redirect to the editor for this new tool
    redirect(`/admin/cms/tools/${newId}`);
}
