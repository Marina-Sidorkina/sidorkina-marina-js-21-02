const formInfoElement = document.querySelector(".form__info");

export const clearFormInfo = () => {
  formInfoElement.innerText = "0 images selected";
}

export const updateFormInfo = () => {
  formInfoElement.innerText = "1 image selected";
}
