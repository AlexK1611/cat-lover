import { createSlice } from '@reduxjs/toolkit'
import { FavouritesState } from 'favourites/helpers/favouritesTypes'
import { removeImageFromFavourites, fetchFavourites } from './favouritesThunks'

const initialState: FavouritesState = {
    favourites: [],
    favouriteCount: 0,
    loading: false
}

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(removeImageFromFavourites.fulfilled, (state, { payload }) => {
            state.favourites = state.favourites.filter(item => item.id !== payload)
        })
        builder.addCase(fetchFavourites.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchFavourites.fulfilled, (state, { payload }) => {
            state.loading = false
            state.favourites = payload.favourites
            state.favouriteCount = Number(payload.favouriteCount)
        })
    }
})