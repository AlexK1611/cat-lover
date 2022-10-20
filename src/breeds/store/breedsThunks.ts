import { createAsyncThunk } from '@reduxjs/toolkit'
import { CatBreed } from 'breeds/helpers/breedsTypes'
import { api } from 'config/api'

export const fetchBreeds = createAsyncThunk(
    'cats/fetchBreeds',
    async (): Promise<CatBreed[]> => {
        try {
            const response = await api.get('breeds')
            return response.data
        } catch (error) {
            throw error
        }
    }
)

export const fetchSelectedBreed = createAsyncThunk(
    'cats/fetchSelectedBreed',
    async (breedId: string): Promise<CatBreed> => {
        try {
            const response = await api.get('breeds/search', {
                params: { q: breedId }
            })
            return response.data[0]
        } catch (error) {
            throw error
        }
    }
)