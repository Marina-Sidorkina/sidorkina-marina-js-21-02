import { swapi } from "./api/swapi.js";
import { URL_MAIN } from "./constants/constants.js";
import {resetList} from "./list/list.js";
import { changeListOnPage } from "./list/list.js";
import { sortByGender,  sortByName, sortByMass, sortByHeight } from "./sort/sort.js";

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

swapi(URL_MAIN, resetList);
