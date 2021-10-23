import {isNumeric, sortByAlphabet} from "../utils/utils";
import {GENDER_INDEX, HEIGHT_INDEX, MASS_INDEX, NAME_INDEX} from "../constants/constants";
import { updateList, getList } from "../components/list/list";

let heightSorting: string = "up";
let massSorting: string = "up";

const sortByNumberValues = (index: number, sortingCategory: string): void => {
  let currentList: object[] = getList().slice();
  const numbers: object[] = currentList.filter((value: string[]) => isNumeric(value[index].replace(",","")));
  const unknown: object[] = currentList.filter((value: string[]) => !isNumeric(value[index].replace(",","")));
  if(sortingCategory === "up") {
    numbers.sort((a: string[], b: string[]) => parseInt(a[index].replace(",",""), 10) - parseInt(b[index].replace(",",""), 10));
  } else {
    numbers.sort((a: string[], b: string[]) => parseInt(b[index].replace(",",""), 10) - parseInt(a[index].replace(",",""), 10));
  }

  currentList = [...numbers, ...unknown]
  updateList(currentList);
}

export const sortByHeight = (): void => {
  sortByNumberValues(HEIGHT_INDEX, heightSorting);
  heightSorting = heightSorting === "up" ? "down" : "up";
}

export const sortByMass = (): void => {
  sortByNumberValues(MASS_INDEX, massSorting);
  massSorting = massSorting === "up" ? "down" : "up";
}

export const sortByName = (): void => {
  let currentList: object[] = getList().slice();
  currentList.sort((a: string[], b: string[]) => sortByAlphabet(a[NAME_INDEX], b[NAME_INDEX]));
  updateList(currentList);
}

export const sortByGender = (): void => {
  let currentList = getList().slice();
  const male: object[] = currentList.filter((item: string[]) => item[GENDER_INDEX] === "male");
  const female: object[] = currentList.filter((item: string[]) => item[GENDER_INDEX] === "female");
  const unknown: object[]  = currentList.filter((item: string[]) => item[GENDER_INDEX] === "n/a");
  const hermaphrodite: object[] = currentList.filter((item: string[]) => item[GENDER_INDEX] === "hermaphrodite");
  const none: object[] = currentList.filter((item: string[]) => item[GENDER_INDEX] === "none");

  currentList = [...male, ...female, ...unknown, ...hermaphrodite, ...none];
  updateList(currentList);
}
