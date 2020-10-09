import { createModel, getInitialVal } from '../../utils'

const name = 'greenhouse'

export const greenhouseUpdater = createModel(name)()

getInitialVal(name, greenhouseUpdater)
