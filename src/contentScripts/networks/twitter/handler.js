import { createModel, getInitialVal } from '../../utils'

const TOGGLE_TWITTER_PHOTOS = 'toggleTwitterPhotos'
const TOGGLE_TWITTER_NAMES = 'toggleTwitterNames'

export const twitterUpdater = createModel(
  'twitter',
  TOGGLE_TWITTER_PHOTOS,
  TOGGLE_TWITTER_NAMES
)()

getInitialVal(TOGGLE_TWITTER_PHOTOS, twitterUpdater, 'photos')
getInitialVal(TOGGLE_TWITTER_NAMES, twitterUpdater, 'names')
