export interface CatImage {
    breeds: [],
    height: number,
    id: string,
    url: string,
    width: number
}

export interface CatsState {
    images: CatImage[],
    imageCount: number
}

export enum SortingOrder {
    Asc = "asc",
    Desc = "desc"
}

export interface CatImagesRequest {
    limit: number,
    page: number,
    order: SortingOrder
}

export interface CatImagesResponse {
    images: CatImage[],
    imageCount?: string
}