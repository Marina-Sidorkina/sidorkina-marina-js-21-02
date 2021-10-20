import { swapi } from "./api/swapi";
import { URL_MAIN } from "./constants/constants";
import { resetList, changeListOnPage } from "./components/list/list";
import { sortByGender,  sortByName, sortByMass, sortByHeight } from "./sort/sort";
import { showErrorElement } from "./components/error/error";

const controlElement = document.querySelector(".controls");
const sortButtonHeightElement = document.querySelector(".sort__button_height");
const sortButtonMassElement = document.querySelector(".sort__button_mass");
const sortButtonNameElement = document.querySelector(".sort__button_name");
const sortButtonGenderElement = document.querySelector(".sort__button_gender");

controlElement.addEventListener("click", changeListOnPage);
sortButtonHeightElement.addEventListener("click", sortByHeight);
sortButtonMassElement.addEventListener("click", sortByMass);
sortButtonNameElement.addEventListener("click", sortByName);
sortButtonGenderElement.addEventListener("click", sortByGender);

swapi(URL_MAIN, resetList, showErrorElement);
