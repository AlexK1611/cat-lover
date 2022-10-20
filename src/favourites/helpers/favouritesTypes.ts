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

export interface FavouritesState {
    favourites: FavouriteImage[],
    favouriteCount: number,
    loading: boolean
}

export interface FavouritesResponse {
    favourites: FavouriteImage[],
    favouriteCount?: string
}