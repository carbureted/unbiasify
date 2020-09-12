import { createModel, getInitialVal } from '../../utils'
import { URLS } from '../../utils/urls'

export const TOGGLE_ANGELLIST_PHOTOS = 'toggleAlPhotos'
export const TOGGLE_ANGELLIST_NAMES = 'toggleAlNames'

export const angellistUpdater = createModel(
  'angelList',
  TOGGLE_ANGELLIST_PHOTOS,
  TOGGLE_ANGELLIST_NAMES
)()

getInitialVal(TOGGLE_ANGELLIST_PHOTOS, angellistUpdater, 'photos')
getInitialVal(TOGGLE_ANGELLIST_NAMES, angellistUpdater, 'names')
