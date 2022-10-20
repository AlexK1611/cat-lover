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

type FiveStarRating = 1 | 2 | 3 | 4 | 5

export interface CatBreed {
    adaptability: FiveStarRating,
    affection_level: FiveStarRating,
    alt_names: string,
    cfa_url: string,
    child_friendly: FiveStarRating,
    country_code: string,
    country_codes: string,
    description: string,
    dog_friendly: FiveStarRating,
    energy_level: FiveStarRating,
    grooming: FiveStarRating,
    health_issues: FiveStarRating,
    id: string,
    intelligence: FiveStarRating,
    life_span: string,
    name: string,
    origin: string,
    reference_image_id: string,
    shedding_level: FiveStarRating,
    social_needs: FiveStarRating,
    stranger_friendly: FiveStarRating,
    temperament: string,
    vcahospitals_url: string,
    vetstreet_url: string,
    vocalisation: FiveStarRating,
    weight: {
        imperial: string,
        metric: string
    },
    wikipedia_url: string
}

export interface CatsState {
    images: CatImage[],
    imageCount: number,
    favourites: FavouriteImage[],
    favouriteCount: number,
    breeds: CatBreed[],
    selectedBreed: CatBreed | null
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

export interface FavouritesRequest {
    limit: number,
    page: number
}

export interface FavouritesResponse {
    favourites: FavouriteImage[],
    favouriteCount?: string
}