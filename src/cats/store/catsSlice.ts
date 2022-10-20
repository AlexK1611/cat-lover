import { createSlice } from '@reduxjs/toolkit'
import { CatsState } from 'cats/helpers/catsTypes'
import { fetchCatImages } from './catsThunks'

const initialState: CatsState = {
    images: [],
    imageCount: 0
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
    }
})