export interface IToDo {
    id?: string;
    name: string;
    category: string;
    categoryText: string;
    content: string;
    created: string;
    isArchived: boolean;
    dates?: [string];
}