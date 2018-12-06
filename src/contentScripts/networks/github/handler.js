import { createModel, getInitialVal } from '../../utils'

export const TOGGLE_GITHUB_PHOTOS = 'toggleGithubPhotos'
export const TOGGLE_GITHUB_NAMES = 'toggleGithubNames'

export const githubUpdater = createModel(
  'github',
  TOGGLE_GITHUB_PHOTOS,
  TOGGLE_GITHUB_NAMES
)()

getInitialVal(TOGGLE_GITHUB_PHOTOS, githubUpdater, 'photos')
getInitialVal(TOGGLE_GITHUB_NAMES, githubUpdater, 'names')
