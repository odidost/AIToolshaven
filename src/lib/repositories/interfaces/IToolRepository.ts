import { CmsToolDocument } from "@/lib/types/cms";
import { AITool } from "@/lib/types/tool";

export interface IToolRepository {
    // CMS specific methods
    findAllDocuments(): Promise<CmsToolDocument[]>;
    findDocumentById(id: string): Promise<CmsToolDocument | null>;
    saveDraft(id: string, data: AITool): Promise<CmsToolDocument>;
    publish(id: string, authorId: string): Promise<CmsToolDocument>;
    revertToVersion(id: string, versionId: string): Promise<CmsToolDocument>;
    
    // Public site specific methods
    findAllPublished(): Promise<AITool[]>;
    findPublishedBySlug(slug: string): Promise<AITool | null>;
}
