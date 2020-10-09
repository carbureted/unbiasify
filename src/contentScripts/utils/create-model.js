import { URLS } from './urls'
import { STYLE_SHEETS } from './stylesheets'
import { toggleStyles } from './toggle-styles'

export const createModel = name => {
  return function() {
    let url = URLS[name]
    let active = false

    return function(isActive) {
      if (isActive != undefined) {
        active = isActive
      } else {
        active = !active
      }

      const styles = [...STYLE_SHEETS[name].names, ...STYLE_SHEETS[name].photos]

      toggleStyles(STYLE_SHEETS[name].styleSheetID, styles, active, url)

      chrome.storage.sync.set({ [name]: active })
    }
  }
}

export default createModel
