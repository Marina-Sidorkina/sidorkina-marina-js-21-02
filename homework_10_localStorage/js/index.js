import { processImgArr } from "./services/local-storage.js";
import { onFormSubmit } from "./components/form.js";
import { updateFormInfo } from "./components/form-info.js";
import { addImg } from "./components/gallery-list.js";

const formElement = document.querySelector("form");
const inputElement = document.querySelector(".form__input");

processImgArr(addImg);

formElement.addEventListener("submit", (evt) => {
  onFormSubmit(evt, inputElement.files[0]);
});

inputElement.addEventListener("change", updateFormInfo);
