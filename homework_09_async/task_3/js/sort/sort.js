import {isNumeric, sortByAlphabet} from "../utils/utils.js";
import {GENDER_INDEX, HEIGHT_INDEX, MASS_INDEX, NAME_INDEX} from "../constants/constants.js";
import { updateList, getList } from "../components/list/list.js";

let heightSorting = "up";
let massSorting = "up";

const sortByNumberValues = (index, sortingCategory) => {
  let currentList = getList().slice();
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

export const sortByHeight = () => {
  let currentList = getList().slice();
  sortByNumberValues(HEIGHT_INDEX, heightSorting, currentList);
  heightSorting = heightSorting === "up" ? "down" : "up";
}

export const sortByMass = () => {
  let currentList = getList().slice();
  sortByNumberValues(MASS_INDEX, massSorting, currentList);
  massSorting = massSorting === "up" ? "down" : "up";
}

export const sortByName = () => {
  let currentList = getList().slice();
  currentList.sort((a, b) => sortByAlphabet(a[NAME_INDEX], b[NAME_INDEX]));
  updateList(currentList);
}

export const sortByGender = () => {
  let currentList = getList().slice();
  const male = currentList.filter((item) => item[GENDER_INDEX] === "male");
  const female = currentList.filter((item) => item[GENDER_INDEX] === "female");
  const unknown  = currentList.filter((item) => item[GENDER_INDEX] === "n/a");
  const hermaphrodite = currentList.filter((item) => item[GENDER_INDEX] === "hermaphrodite");
  const none = currentList.filter((item) => item[GENDER_INDEX] === "none");

  currentList = [...male, ...female, ...unknown, ...hermaphrodite, ...none];
  updateList(currentList);
}
