import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    CatImagesRequest,
    CatImagesResponse,
    FavouritesRequest,
    FavouritesResponse
} from 'cats/helpers/catsTypes'
import { api } from 'config/api'

export const fetchCatImages = createAsyncThunk(
    'cats/fetchImages',
    async ({ limit, page, order }: CatImagesRequest): Promise<CatImagesResponse> => {
        try {
            const response = await api.get('images/search', {
                params: {
                    limit,
                    page: page - 1,
                    order
                }
            })
            return {
                images: response.data,
                imageCount: response.headers['pagination-count']
            }
        } catch (error) {
            throw error
        }
    }
)

export const saveImageAsFavourite = createAsyncThunk(
    'cats/saveAsFavourite',
    async (imageId: string): Promise<void> => {
        try {
            await api.post('favourites', {
                image_id: imageId,
                sub_id: process.env.REACT_APP_USER_ID
            })
        } catch (error) {
            throw error
        }
    }
)

export const removeImageFromFavourites = createAsyncThunk(
    'cats/removeFromFavourites',
    async (imageId: number): Promise<number> => {
        try {
            await api.delete(`favourites/${imageId}`)
            return imageId
        } catch (error) {
            throw error
        }
    }
)

export const fetchFavourites = createAsyncThunk(
    'cats/fetchFavourites',
    async ({ limit, page }: FavouritesRequest): Promise<FavouritesResponse> => {
        try {
            const response = await api.get('favourites', {
                params: {
                    limit,
                    page: page - 1,
                    sub_id: process.env.REACT_APP_USER_ID
                }
            })
            return {
                favourites: response.data,
                favouriteCount: response.headers['pagination-count']
            }
        } catch (error) {
            throw error
        }
    }
)