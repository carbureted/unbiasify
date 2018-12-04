import { URLS } from './urls'
import { STYLE_SHEETS } from './stylesheets'
import { toggleStyles } from './toggle-styles'

export const createModel = (
  styleIdentifier,
  photoIdentifier,
  nameIdentifier
) => {
  return function() {
    let toggle = {}
    let url = URLS[styleIdentifier]
    toggle['photos'] = [
      false,
      photoIdentifier,
      STYLE_SHEETS[styleIdentifier].photoId,
      STYLE_SHEETS[styleIdentifier].photos,
    ]
    toggle['names'] = [
      false,
      nameIdentifier,
      STYLE_SHEETS[styleIdentifier].nameId,
      STYLE_SHEETS[styleIdentifier].names,
    ]

    return function(type, isSet = false, val) {
      if (!toggle || !toggle[type] || !toggle[type].length) {
        return
      }
      if (val != undefined) {
        toggle[type][0] = val
      } else {
        toggle[type][0] = !toggle[type][0]
      }
      const id = toggle[type][2]
      const styles = toggle[type][3]
      const nextVal = toggle[type][0]
      toggleStyles(id, styles, nextVal, url)
      if (isSet) {
        chrome.storage.sync.set({ [toggle[type][1]]: nextVal })
      }
    }
  }
}

export default createModel
