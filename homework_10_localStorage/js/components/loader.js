const loaderElement = document.querySelector(".loader__box");

let loaderId;

function load() {
  let width = Number.parseInt(getComputedStyle(loaderElement).width);

  if (width < 190) {
    width++;
    loaderElement.style.width = width + "px";
    loaderId = requestAnimationFrame(load);
  } else {
    loaderElement.style.width = "0";
    loaderId = requestAnimationFrame(load);
  }
}

export const startLoader = () => {
  loaderId = requestAnimationFrame(load);
}

export const stopLoader = () => {
  loaderElement.style.width = "0";
  cancelAnimationFrame(loaderId);
}
