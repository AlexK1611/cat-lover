import { createAsyncThunk } from '@reduxjs/toolkit'
import { CatImagesResponse } from 'cats/helpers/catsTypes'
import { api } from 'config/api'

export const fetchCatImages = createAsyncThunk(
    'cats/fetchImages',
    async (page: number): Promise<CatImagesResponse> => {
        try {
            const response = await api.get('images/search', {
                params: {
                    limit: 10,
                    page: page - 1,
                    order: 'desc'
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