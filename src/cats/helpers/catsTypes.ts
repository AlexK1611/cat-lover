export interface CatImage {
    breeds: [],
    height: number,
    id: string,
    url: string,
    width: number
}

export interface FavouriteImage {
    created_at: string,
    id: number,
    image: {
        id: string,
        url: string
    },
    image_id: string,
    sub_id: string | null,
    user_id: string
}

export interface CatsState {
    images: CatImage[],
    favourites: FavouriteImage[]
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

export interface FavouritesRequest {
    limit: number,
    page: number
}