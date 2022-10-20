import { configureStore } from '@reduxjs/toolkit'
import { catsSlice } from 'cats/store/catsSlice'
import { breedsSlice } from 'breeds/store/breedsSlice'

export const store = configureStore({
    reducer: {
        cats: catsSlice.reducer,
        breeds: breedsSlice.reducer
    }
})