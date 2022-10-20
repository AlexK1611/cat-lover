import { configureStore } from '@reduxjs/toolkit'
import { catsSlice } from 'cats/store/catsSlice'
import { breedsSlice } from 'breeds/store/breedsSlice'
import { favouritesSlice } from 'favourites/store/favouritesSlice'

export const store = configureStore({
    reducer: {
        cats: catsSlice.reducer,
        breeds: breedsSlice.reducer,
        favourites: favouritesSlice.reducer
    }
})