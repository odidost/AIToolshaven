import toolsJson from '../../../../data/tools.json';
import { CmsToolDocument } from "@/lib/types/cms";
import { AITool } from "@/lib/types/tool";

// The frontend directly consumes the published state of the CMS JSON data.
export const tools: AITool[] = (toolsJson as CmsToolDocument[])
    .filter(doc => doc.status === "published" && doc.publishedData)
    .map(doc => doc.publishedData as AITool);