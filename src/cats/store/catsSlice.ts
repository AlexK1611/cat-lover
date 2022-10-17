import { createSlice } from '@reduxjs/toolkit'
import { CatsState } from 'cats/helpers/catsTypes'
import {
    fetchCatImages,
    removeImageFromFavourites,
    fetchFavourites
} from './catsThunks'

const initialState: CatsState = {
    images: [],
    imageCount: 0,
    favourites: [],
    favouriteCount: 0
}

export const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCatImages.fulfilled, (state, { payload }) => {
            state.images = payload.images
            state.imageCount = Number(payload.imageCount)
        })
        builder.addCase(removeImageFromFavourites.fulfilled, (state, { payload }) => {
            state.favourites = state.favourites.filter(item => item.id !== payload)
        })
        builder.addCase(fetchFavourites.fulfilled, (state, { payload }) => {
            state.favourites = payload.favourites
            state.favouriteCount = Number(payload.favouriteCount)
        })
    }
})