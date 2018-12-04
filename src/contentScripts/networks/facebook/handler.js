import { createModel, getInitialVal } from '../../utils'

const TOGGLE_FACEBOOK_PHOTOS = 'toggleFacebookPhotos'
const TOGGLE_FACEBOOK_NAMES = 'toggleFacebookNames'

export const facebookUpdater = createModel(
  'facebook',
  TOGGLE_FACEBOOK_PHOTOS,
  TOGGLE_FACEBOOK_NAMES
)()

getInitialVal(TOGGLE_FACEBOOK_PHOTOS, facebookUpdater, 'photos')
getInitialVal(TOGGLE_FACEBOOK_NAMES, facebookUpdater, 'names')
