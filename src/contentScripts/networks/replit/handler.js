import { createModel, getInitialVal } from '../../utils'

const name = 'replit'

export const replitUpdater = createModel(name)()

getInitialVal(name, replitUpdater)
