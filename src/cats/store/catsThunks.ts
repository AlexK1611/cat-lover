import { createAsyncThunk } from '@reduxjs/toolkit'
import { CatImagesRequest, CatImagesResponse } from 'cats/helpers/catsTypes'
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