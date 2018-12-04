import { createModel, getInitialVal } from '../../utils'

const TOGGLE_GITHUB_PHOTOS = 'toggleGithubPhotos'
const TOGGLE_GITHUB_NAMES = 'toggleGithubNames'

export const githubUpdater = createModel(
  'github',
  TOGGLE_GITHUB_PHOTOS,
  TOGGLE_GITHUB_NAMES
)()

getInitialVal(TOGGLE_GITHUB_PHOTOS, githubUpdater, 'photos')
getInitialVal(TOGGLE_GITHUB_NAMES, githubUpdater, 'names')
