import { createSelector } from 'reselect'
import { RootState } from 'app/helpers/appTypes'

const selectBreeds = (state:RootState) => state.breeds

export const selectCatBreeds = createSelector(selectBreeds, items => items.breeds)
export const selectSelectedBreed = createSelector(selectBreeds, items => items.selectedBreed)
export const selectBreedsLoading = createSelector(selectBreeds, items => items.loading)