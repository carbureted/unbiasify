import { createModel, getInitialVal } from '../../utils'

const name = 'lever'

export const leverUpdater = createModel(name)()

getInitialVal(name, leverUpdater)
