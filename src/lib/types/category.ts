export interface ToolCategory {
    id: string;
    name: string;
    slug: string;
    description?: string;
    icon: string;
    count: number;
    parentId?: string;
    type?: 'category' | 'subcategory' | 'collection';
    indexable?: boolean;
    status?: string;
}