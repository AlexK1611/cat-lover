import { createSlice } from '@reduxjs/toolkit'
import { BreedsState } from 'breeds/helpers/breedsTypes'
import { fetchBreeds, fetchSelectedBreed } from './breetsThunks'

const initialState: BreedsState = {
    breeds: [],
    selectedBreed: null,
    loading: false
}

export const breedsSlice = createSlice({
    name: 'breeds',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchBreeds.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchBreeds.fulfilled, (state, { payload }) => {
            state.loading = false
            state.breeds = payload
        })
        builder.addCase(fetchSelectedBreed.fulfilled, (state, { payload }) => {
            state.selectedBreed = payload
        })
    }
})