import { createModel, getInitialVal } from '../../utils'

export const TOGGLE_TWITTER_PHOTOS = 'toggleTwitterPhotos'
export const TOGGLE_TWITTER_NAMES = 'toggleTwitterNames'

export const twitterUpdater = createModel(
  'twitter',
  TOGGLE_TWITTER_PHOTOS,
  TOGGLE_TWITTER_NAMES
)()

getInitialVal(TOGGLE_TWITTER_PHOTOS, twitterUpdater, 'photos')
getInitialVal(TOGGLE_TWITTER_NAMES, twitterUpdater, 'names')
