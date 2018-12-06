import { createModel, getInitialVal } from '../../utils'

export const TOGGLE_REPLIT_PHOTOS = 'toggleReplitPhotos'
export const TOGGLE_REPLIT_NAMES = 'toggleReplitNames'

export const replitUpdater = createModel(
  'replit',
  TOGGLE_REPLIT_PHOTOS,
  TOGGLE_REPLIT_NAMES
)()

getInitialVal(TOGGLE_REPLIT_PHOTOS, replitUpdater, 'photos')
getInitialVal(TOGGLE_REPLIT_NAMES, replitUpdater, 'names')
