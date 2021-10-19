import { processImgArr } from "./services/local-storage.js";
import { onFormSubmit } from "./components/form.js";
import { updateFormInfo } from "./components/form-info.js";
import { addImg } from "./components/gallery-list.js";
import { startLoader } from "./components/loader.js";

const formElement = document.querySelector("form");
const inputElement = document.querySelector(".form__input");

processImgArr(addImg);

formElement.addEventListener("submit", (evt) => {
  startLoader();
  onFormSubmit(evt, inputElement.files[0]);
  inputElement.value = '';
});

inputElement.addEventListener("change", updateFormInfo);
