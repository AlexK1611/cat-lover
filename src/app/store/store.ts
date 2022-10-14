import { configureStore } from '@reduxjs/toolkit'
import { catsSlice } from 'cats/store/catsSlice'

export const store = configureStore({
    reducer: {
        cats: catsSlice.reducer
    }
})