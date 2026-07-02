export interface Review {
    id: string;
    toolId: string;

    author: string;

    avatarUrl: string;

    rating: number;

    date: string;

    text: string;
}