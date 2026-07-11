import { AITool } from "./tool";

export type CmsDocumentStatus = "draft" | "published" | "archived";

export interface CmsVersionSnapshot {
    id: string;
    createdAt: string; // ISO Date
    createdBy: string;
    data: Record<string, unknown>; // Snapshot of the data
}

export interface CmsToolDocument {
    id: string;
    status: CmsDocumentStatus;
    publishedAt: string | null;
    lastAutosavedAt: string | null;
    draftData: AITool;
    publishedData: AITool | null;
    versions: CmsVersionSnapshot[];
}
