import fs from "fs/promises";
import path from "path";
import { ICategoryRepository } from "../interfaces/ICategoryRepository";
import { ToolCategory } from "@/lib/types/category";

export class JsonCategoryRepository implements ICategoryRepository {
    private filePath: string;

    constructor() {
        this.filePath = path.join(process.cwd(), "data", "categories.json");
    }

    private async readData(): Promise<ToolCategory[]> {
        try {
            const data = await fs.readFile(this.filePath, "utf-8");
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }

    private async writeData(data: ToolCategory[]): Promise<void> {
        const dir = path.dirname(this.filePath);
        await fs.mkdir(dir, { recursive: true });
        await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), "utf-8");
    }

    async findAll(): Promise<ToolCategory[]> {
        return this.readData();
    }

    async findById(id: string): Promise<ToolCategory | null> {
        const docs = await this.readData();
        return docs.find(d => d.id === id) || null;
    }

    async save(id: string, data: ToolCategory): Promise<ToolCategory> {
        const docs = await this.readData();
        const index = docs.findIndex(d => d.id === id);
        
        if (index === -1) {
            docs.push(data);
        } else {
            docs[index] = data;
        }

        await this.writeData(docs);
        return data;
    }
}
