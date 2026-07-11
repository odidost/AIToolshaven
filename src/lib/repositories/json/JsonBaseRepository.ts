import fs from "fs/promises";
import path from "path";

export interface IBaseRepository<T> {
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T | null>;
    save(id: string, data: T): Promise<T>;
    delete(id: string): Promise<boolean>;
}

export class JsonBaseRepository<T extends { id: string }> implements IBaseRepository<T> {
    private filePath: string;

    constructor(filename: string) {
        this.filePath = path.join(process.cwd(), "data", filename);
    }

    protected async readData(): Promise<T[]> {
        try {
            const data = await fs.readFile(this.filePath, "utf-8");
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }

    protected async writeData(data: T[]): Promise<void> {
        const dir = path.dirname(this.filePath);
        await fs.mkdir(dir, { recursive: true });
        await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), "utf-8");
    }

    async findAll(): Promise<T[]> {
        return this.readData();
    }

    async findById(id: string): Promise<T | null> {
        const docs = await this.readData();
        return docs.find(d => d.id === id) || null;
    }

    async save(id: string, data: T): Promise<T> {
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

    async delete(id: string): Promise<boolean> {
        const docs = await this.readData();
        const filtered = docs.filter(d => d.id !== id);
        if (filtered.length !== docs.length) {
            await this.writeData(filtered);
            return true;
        }
        return false;
    }
}
