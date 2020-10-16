import { createModel, getInitialVal } from '../../utils'
import { URLS } from '../../utils/urls'

const name = 'angellist'

export const angellistUpdater = createModel(name)()

getInitialVal(name, angellistUpdater)
