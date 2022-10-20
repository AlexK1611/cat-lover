import { createAsyncThunk } from '@reduxjs/toolkit'
import { FavouritesResponse } from 'favourites/helpers/favouritesTypes'
import { api } from 'config/api'

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
    async (page: number): Promise<FavouritesResponse> => {
        try {
            const response = await api.get('favourites', {
                params: {
                    limit: 10,
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