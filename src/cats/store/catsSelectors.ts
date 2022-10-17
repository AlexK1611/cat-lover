import { createSelector } from 'reselect'
import { RootState } from 'app/helpers/appTypes'

const selectCats = (state: RootState) => state.cats

export const selectCatImages = createSelector(selectCats, items => items.images)
export const selectCatImageCount = createSelector(selectCats, items => items.imageCount)
export const selectFavourites = createSelector(selectCats, items => items.favourites)
export const selectFavouriteCount = createSelector(selectCats, items => items.favouriteCount)