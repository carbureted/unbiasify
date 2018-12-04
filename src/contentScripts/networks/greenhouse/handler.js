import { createModel, getInitialVal } from '../../utils'

const TOGGLE_GREENHOUSE_PHOTOS = 'toggleGreenhousePhotos'
const TOGGLE_GREENHOUSE_NAMES = 'toggleGreenhouseNames'

export const greenhouseUpdater = createModel(
  'greenhouse',
  TOGGLE_GREENHOUSE_PHOTOS,
  TOGGLE_GREENHOUSE_NAMES
)()

getInitialVal(TOGGLE_GREENHOUSE_PHOTOS, greenhouseUpdater, 'photos')
getInitialVal(TOGGLE_GREENHOUSE_NAMES, greenhouseUpdater, 'names')
