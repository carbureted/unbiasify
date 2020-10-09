export const getInitialVal = (property, updaterFunction) => {
  chrome.storage.sync.get(property, function(data) {
    const val = data[property] || false
    updaterFunction(val)
  })
}
