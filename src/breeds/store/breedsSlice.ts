import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BreedsState } from 'breeds/helpers/breedsTypes'
import { fetchBreeds, fetchSelectedBreed } from './breedsThunks'

const initialState: BreedsState = {
    breeds: [],
    selectedBreed: null,
    loading: false,
    breedId: ''
}

export const breedsSlice = createSlice({
    name: 'breeds',
    initialState,
    reducers: {
        setBreedId: (state, action: PayloadAction<string>) => {
            state.breedId = action.payload
        }
    },
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

export const { setBreedId } = breedsSlice.actions