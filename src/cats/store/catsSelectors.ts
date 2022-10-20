import { createSelector } from 'reselect'
import { RootState } from 'app/helpers/appTypes'

const selectCats = (state: RootState) => state.cats

export const selectCatImages = createSelector(selectCats, items => items.images)
export const selectCatImageCount = createSelector(selectCats, items => items.imageCount)