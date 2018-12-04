export const getInitialVal = (property, updaterFunction, type) => {
  chrome.storage.sync.get(property, function(data) {
    const val = data[property] || false
    updaterFunction(type, false, val)
  })
}
