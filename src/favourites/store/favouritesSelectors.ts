import { createSelector } from 'reselect'
import { RootState } from 'app/helpers/appTypes'

const selectFavourites = (state: RootState) => state.favourites

export const selectFavouriteCats = createSelector(selectFavourites, items => items.favourites)
export const selectFavouriteCount = createSelector(selectFavourites, items => items.favouriteCount)
export const selectFavouritesLoading = createSelector(selectFavourites, items => items.loading)