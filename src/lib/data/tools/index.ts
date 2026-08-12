import toolsJson from '../../../../data/tools.json';
import { CmsToolDocument } from "@/lib/types/cms";
import { AITool } from "@/lib/types/tool";

export const tools: AITool[] = (toolsJson as any[])
    .map(doc => {
        if (doc.status === "published" && doc.publishedData) {
            return { ...doc.publishedData, status: "Published" } as AITool;
        }
        if (doc.name && doc.slug) {
            // Support raw AITools like design.com
            const rawTool = doc as AITool;
            if (!rawTool.status) rawTool.status = "Published";
            return rawTool;
        }
        return null;
    })
    .filter(Boolean) as AITool[];