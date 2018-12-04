export const toggleStyles = (styleId, obfuscate, toggleBoolVar, url) => {
  if (window.location.href.indexOf(url) == -1) {
    return
  }
  var prevStyle = document.getElementById(styleId)
  if (!toggleBoolVar && prevStyle) {
    prevStyle.parentNode.removeChild(prevStyle)
  } else if (!prevStyle && toggleBoolVar) {
    const style = document.createElement('style')
    style.id = styleId

    document.body.appendChild(style)

    obfuscate.forEach((r, i) => style.sheet.insertRule(r, i))
  }
}
