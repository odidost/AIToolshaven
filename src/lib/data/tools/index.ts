import toolsJson from '../../../../data/tools.json';
import { CmsToolDocument } from "@/lib/types/cms";
import { AITool } from "@/lib/types/tool";

export const tools: AITool[] = (toolsJson as any[])
    .map(doc => {
        if (doc.status === "published" && doc.publishedData) return doc.publishedData as AITool;
        if (doc.name && doc.slug) return doc as AITool; // Support raw AITools like design.com
        return null;
    })
    .filter(Boolean) as AITool[];