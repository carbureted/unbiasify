import { createModel, getInitialVal } from '../../utils'

export const TOGGLE_LINKED_IN_PHOTOS = 'togglePhotos'
export const TOGGLE_LINKED_IN_NAMES = 'toggleNames'

export const linkedinUpdater = createModel(
  'linkedIn',
  TOGGLE_LINKED_IN_PHOTOS,
  TOGGLE_LINKED_IN_NAMES
)()

getInitialVal(TOGGLE_LINKED_IN_PHOTOS, linkedinUpdater, 'photos')
getInitialVal(TOGGLE_LINKED_IN_NAMES, linkedinUpdater, 'names')
