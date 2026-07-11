import { IToolRepository } from "./interfaces/IToolRepository";
import { ICategoryRepository } from "./interfaces/ICategoryRepository";
import { JsonToolRepository } from "./json/JsonToolRepository";
import { JsonCategoryRepository } from "./json/JsonCategoryRepository";
import { JsonBaseRepository } from "./json/JsonBaseRepository";

// Export the concrete implementations bound to the interfaces
export const ToolRepository: IToolRepository = new JsonToolRepository();
export const CategoryRepository: ICategoryRepository = new JsonCategoryRepository();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WorkflowRepository = new JsonBaseRepository<any>("workflows.json");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GoalRepository = new JsonBaseRepository<any>("goals.json");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ComparisonRepository = new JsonBaseRepository<any>("comparisons.json");

// Mock MediaRepository for the UI placeholder
export const MediaRepository = {
    list: async () => []
};
