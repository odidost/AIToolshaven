import { redirect } from 'next/navigation';
import { ComparisonRepository } from '@/lib/repositories';

export default async function NewComparisonPage() {
    const newId = `vs-${Date.now()}`;
    
    const emptyComparison = {
        id: newId,
        toolA: "",
        toolB: "",
        verdict: "TBD",
        prosA: [],
        prosB: [],
        consA: [],
        consB: []
    };
    
    await ComparisonRepository.save(newId, emptyComparison);
    
    redirect(`/admin/cms/comparisons/${newId}`);
}
