import { createSlice } from '@reduxjs/toolkit'
import { CatsState } from 'cats/helpers/catsTypes'
import {
    fetchCatImages,
    removeImageFromFavourites,
    fetchFavourites
} from './catsThunks'

const initialState: CatsState = {
    images: [],
    favourites: []
}

export const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCatImages.fulfilled, (state, { payload }) => {
            state.images = [...state.images, ...payload]
        })
        builder.addCase(removeImageFromFavourites.fulfilled, (state, { payload }) => {
            state.favourites = state.favourites.filter(item => item.id !== payload)
        })
        builder.addCase(fetchFavourites.fulfilled, (state, { payload }) => {
            state.favourites = [...state.favourites, ...payload]
        })
    }
})