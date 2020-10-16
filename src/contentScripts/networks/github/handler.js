import { createModel, getInitialVal } from '../../utils'

const name = 'github'

export const githubUpdater = createModel(name)()

getInitialVal(name, githubUpdater)
