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

export interface BreedsState {
    breeds: CatBreed[],
    selectedBreed: CatBreed | null,
    loading: boolean
}