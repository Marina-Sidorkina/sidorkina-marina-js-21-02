import { URL_MAIN, HEIGHT_INDEX,
          MASS_INDEX, NAME_INDEX, GENDER_INDEX, NAME_FIELD,
          GENDER_FIELD, MASS_FIELD, HEIGHT_FIELD,
          NEXT_PAGE_FIELD, PREV_PAGE_FIELD } from "./constants/constants.js";
import { isNumeric, sortByAlphabet, createNewListItem } from "./utils/utils.js";

const listBodyElement = document.querySelector(".list__body");
const controlElement = document.querySelector(".controls");
const sortButtonHeightElement = document.querySelector(".sort__button_height");
const sortButtonMassElement = document.querySelector(".sort__button_mass");
const sortButtonNameElement = document.querySelector(".sort__button_name");
const sortButtonGenderElement = document.querySelector(".sort__button_gender");

let next;
let prev;
let currentList = [];
let heightSorting = "up";
let massSorting = "up";


const clearListBodyElement = () => {
  listBodyElement.innerHTML = "";
}
const updateList = (list) => {
  clearListBodyElement();
  list.forEach((item) => createNewListItem(item[NAME_INDEX], item[GENDER_INDEX], item[MASS_INDEX], item[HEIGHT_INDEX], listBodyElement));
}

const resetList = (response) => {
  currentList = [];
  response.results.forEach((item) => {
    createNewListItem(item[NAME_FIELD], item[GENDER_FIELD], item[MASS_FIELD], item[HEIGHT_FIELD], listBodyElement);
    currentList.push([item[NAME_FIELD], item[GENDER_FIELD], item[MASS_FIELD], item[HEIGHT_FIELD]]);
  });
}

const sortByNumberValues = (index, sortingCategory) => {
  const numbers = currentList.filter((value) => isNumeric(value[index].replace(",","")));
  const unknown = currentList.filter((value) => !isNumeric(value[index].replace(",","")));
  if(sortingCategory === "up") {
    numbers.sort((a, b) => parseInt(a[index].replace(",",""), 10) - parseInt(b[index].replace(",",""), 10));
  } else {
    numbers.sort((a, b) => parseInt(b[index].replace(",",""), 10) - parseInt(a[index].replace(",",""), 10));
  }

  currentList = [...numbers, ...unknown]
  updateList(currentList);
}

const sortByHeight = () => {
  sortByNumberValues(HEIGHT_INDEX, heightSorting);
  heightSorting = heightSorting === "up" ? "down" : "up";
}

const sortByMass = () => {
  sortByNumberValues(MASS_INDEX, massSorting);
  massSorting = massSorting === "up" ? "down" : "up";
}

const sortByName = () => {
  currentList.sort((a, b) => sortByAlphabet(a[NAME_INDEX], b[NAME_INDEX]));
  updateList(currentList);
}

const sortByGender = () => {
  const male = currentList.filter((item) => item[GENDER_INDEX] === "male");
  const female = currentList.filter((item) => item[GENDER_INDEX] === "female");
  const unknown  = currentList.filter((item) => item[GENDER_INDEX] === "n/a");
  const hermaphrodite = currentList.filter((item) => item[GENDER_INDEX] === "hermaphrodite");
  const none = currentList.filter((item) => item[GENDER_INDEX] === "none");

  currentList = [...male, ...female, ...unknown, ...hermaphrodite, ...none];
  updateList(currentList);
}

const changePage = (evt) => {
  if(evt.target.classList.contains("controls__button_prev") && prev) {
    clearListBodyElement();
    swapi(prev);
  }
  if(evt.target.classList.contains("controls__button_next") && next) {
    clearListBodyElement();
    swapi(next);
  }
}

const serveResponse = (response) => {
  resetList(response)
  next = response[NEXT_PAGE_FIELD];
  prev = response[PREV_PAGE_FIELD];
}

const swapi = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(serveResponse)
}

swapi(URL_MAIN);

controlElement.addEventListener("click", changePage);

sortButtonHeightElement.addEventListener("click", sortByHeight);
sortButtonMassElement.addEventListener("click", sortByMass);
sortButtonNameElement.addEventListener("click", sortByName);
sortButtonGenderElement.addEventListener("click", sortByGender);
