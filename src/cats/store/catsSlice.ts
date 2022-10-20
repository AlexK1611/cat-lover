import { createSlice } from '@reduxjs/toolkit'
import { CatsState } from 'cats/helpers/catsTypes'
import { fetchCatImages } from './catsThunks'

const initialState: CatsState = {
    images: [],
    imageCount: 0,
    loading: false
}

export const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCatImages.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchCatImages.fulfilled, (state, { payload }) => {
            state.loading = false
            state.images = payload.images
            state.imageCount = Number(payload.imageCount)
        })
    }
})