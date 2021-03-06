export const swapi = (url: string,
                      resolve: (a: object) => void,
                      reject: (a: object) => void): void => {
  fetch(url)
    .then(response => response.json())
    .then(resolve)
    .catch(reject);
}
