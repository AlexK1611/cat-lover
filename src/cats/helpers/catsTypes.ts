export interface CatImage {
    breeds: [],
    height: number,
    id: string,
    url: string,
    width: number
}

export interface CatsState {
    images: CatImage[],
    imageCount: number,
    loading: boolean
}

export interface CatImagesResponse {
    images: CatImage[],
    imageCount?: string
}