export const clearTabTitle = (property, url) => {
  if (window.location.href.indexOf(url) == -1) {
    return
  }

  chrome.storage.sync.get(property, function(data) {
    const val = data[property] || false
    if (val && document.title.length) {
      document.title = ''
    }
  })
}
