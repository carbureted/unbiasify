import { createModel, getInitialVal } from '../../utils'

const name = 'angelList'

export const angellistUpdater = createModel(name)()

getInitialVal(name, angellistUpdater)
