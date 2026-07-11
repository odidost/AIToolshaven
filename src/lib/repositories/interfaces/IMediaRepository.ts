export interface MediaAsset {
    id: string;
    url: string;
    type: "image" | "video";
    sizeBytes: number;
    filename: string;
    createdAt: string;
}

export interface IMediaRepository {
    upload(file: File): Promise<MediaAsset>;
    listAssets(): Promise<MediaAsset[]>;
    deleteAsset(id: string): Promise<void>;
}
