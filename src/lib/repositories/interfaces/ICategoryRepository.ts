import { ToolCategory } from "@/lib/types/category";

export interface ICategoryRepository {
    findAll(): Promise<ToolCategory[]>;
    findById(id: string): Promise<ToolCategory | null>;
    save(id: string, data: ToolCategory): Promise<ToolCategory>;
}
