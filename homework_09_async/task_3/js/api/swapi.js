export const swapi = (url, resolve) => {
  fetch(url)
    .then(response => response.json())
    .then(resolve)
}
