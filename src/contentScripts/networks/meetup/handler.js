import { createModel, getInitialVal } from '../../utils'

const name = 'meetup'

export const meetupUpdater = createModel(name)()

getInitialVal(name, meetupUpdater)
