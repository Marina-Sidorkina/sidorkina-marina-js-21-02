export const createFetch = (url) => (callback, errorCallback, options) => {
  fetch(url, options)
    .then(response => response.json())
    .then(callback)
    .catch(errorCallback)
}
