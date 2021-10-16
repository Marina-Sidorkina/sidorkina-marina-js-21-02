export const swapi = (url, resolve, reject) => {
  fetch(url)
    .then(response => response.json())
    .then(resolve)
    .catch(reject);
}
