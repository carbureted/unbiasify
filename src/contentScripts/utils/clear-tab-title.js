export const clearTabTitle = (property, url) => {
  if (window.location.href.indexOf(url) == -1) {
    return
  }

  try {
    chrome.storage.sync.get(property, function(data) {
      const val = data[property] || false
      if (val && !document.title.includes('Unbiasified')) {
        document.title = 'Unbiasified'
      }
    })
  } catch (e) {
    console.log(e)
  }
}
