import { createAsyncThunk } from '@reduxjs/toolkit'
import { CatImagesRequest } from 'cats/helpers/catsTypes'
import { api } from 'config/api'

export const fetchCatImages = createAsyncThunk(
    'cats/fetchImages',
    async ({ limit, page, order }: CatImagesRequest) => {
        const response = await api.get('images/search', {
            params: { limit, page, order }
        })
        return response.data
    }
)