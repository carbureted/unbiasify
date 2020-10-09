import { createModel, getInitialVal } from '../../utils'

const name = 'linkedIn'

export const linkedinUpdater = createModel(name)()

getInitialVal(name, linkedinUpdater)
