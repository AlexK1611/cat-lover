import { createSlice } from '@reduxjs/toolkit'
import { CatsState } from 'cats/helpers/catsTypes'
import { fetchCatImages } from './catsThunks'

const initialState: CatsState = {
    images: []
}

export const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCatImages.fulfilled, (state, { payload }) => {
            state.images = payload
        })
    }
})