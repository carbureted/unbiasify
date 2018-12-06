import { createModel, getInitialVal } from '../../utils'

export const TOGGLE_MEETUP_NAMES = 'toggleMeetupNames'
export const TOGGLE_MEETUP_PHOTOS = 'toggleMeetupPhotos'

export const meetupUpdater = createModel(
  'meetup',
  TOGGLE_MEETUP_NAMES,
  TOGGLE_MEETUP_PHOTOS
)()

getInitialVal(TOGGLE_MEETUP_NAMES, meetupUpdater, 'photos')
getInitialVal(TOGGLE_MEETUP_PHOTOS, meetupUpdater, 'names')
