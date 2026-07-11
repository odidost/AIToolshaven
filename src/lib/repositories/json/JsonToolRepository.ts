import fs from "fs/promises";
import path from "path";
import { IToolRepository } from "../interfaces/IToolRepository";
import { CmsToolDocument, CmsVersionSnapshot } from "@/lib/types/cms";
import { AITool } from "@/lib/types/tool";

export class JsonToolRepository implements IToolRepository {
    private filePath: string;

    constructor() {
        this.filePath = path.join(process.cwd(), "data", "tools.json");
    }

    private async readData(): Promise<CmsToolDocument[]> {
        try {
            const data = await fs.readFile(this.filePath, "utf-8");
            return JSON.parse(data);
        } catch (error) {
            // If file doesn't exist, return empty array
            return [];
        }
    }

    private async writeData(data: CmsToolDocument[]): Promise<void> {
        // Ensure directory exists
        const dir = path.dirname(this.filePath);
        await fs.mkdir(dir, { recursive: true });
        await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), "utf-8");
    }

    async findAllDocuments(): Promise<CmsToolDocument[]> {
        return this.readData();
    }

    async findDocumentById(id: string): Promise<CmsToolDocument | null> {
        const docs = await this.readData();
        return docs.find(d => d.id === id) || null;
    }

    async saveDraft(id: string, data: AITool): Promise<CmsToolDocument> {
        const docs = await this.readData();
        const index = docs.findIndex(d => d.id === id);
        
        const now = new Date().toISOString();

        if (index === -1) {
            const newDoc: CmsToolDocument = {
                id,
                status: "draft",
                publishedAt: null,
                lastAutosavedAt: now,
                draftData: data,
                publishedData: null,
                versions: []
            };
            docs.push(newDoc);
            await this.writeData(docs);
            return newDoc;
        }

        const doc = docs[index];
        doc.draftData = data;
        doc.lastAutosavedAt = now;
        if (doc.status === "published") {
            // Maintain published status but indicate it has unsaved drafts later if needed
        }
        await this.writeData(docs);
        return doc;
    }

    async publish(id: string, authorId: string): Promise<CmsToolDocument> {
        const docs = await this.readData();
        const index = docs.findIndex(d => d.id === id);
        if (index === -1) throw new Error("Document not found");

        const doc = docs[index];
        const now = new Date().toISOString();

        // Create version snapshot
        const version: CmsVersionSnapshot = {
            id: `v_${Date.now()}`,
            createdAt: now,
            createdBy: authorId,
            data: doc.draftData // Snapshot what we are publishing
        };
        doc.versions.push(version);

        doc.publishedData = { ...doc.draftData };
        doc.status = "published";
        doc.publishedAt = now;

        await this.writeData(docs);
        return doc;
    }

    async revertToVersion(id: string, versionId: string): Promise<CmsToolDocument> {
        const docs = await this.readData();
        const index = docs.findIndex(d => d.id === id);
        if (index === -1) throw new Error("Document not found");

        const doc = docs[index];
        const version = doc.versions.find(v => v.id === versionId);
        if (!version) throw new Error("Version not found");

        doc.draftData = { ...version.data };
        doc.lastAutosavedAt = new Date().toISOString();
        // If it was published, reverting creates a draft of that old version
        await this.writeData(docs);
        return doc;
    }

    async findAllPublished(): Promise<AITool[]> {
        const docs = await this.readData();
        return docs
            .filter(d => d.status === "published" && d.publishedData)
            .map(d => d.publishedData as AITool);
    }

    async findPublishedBySlug(slug: string): Promise<AITool | null> {
        const docs = await this.readData();
        const doc = docs.find(d => d.status === "published" && d.publishedData?.slug === slug);
        return doc?.publishedData || null;
    }
}
