import {createNewListItem} from "../../utils/utils";
import {
  GENDER_FIELD, GENDER_INDEX, HEIGHT_FIELD, HEIGHT_INDEX, MASS_FIELD,
  MASS_INDEX, NAME_FIELD, NAME_INDEX, NEXT_PAGE_FIELD, PREV_PAGE_FIELD
} from "../../constants/constants";
import {swapi} from "../../api/swapi";
import { hideErrorElement } from "../error/error";
import { IPages, IPerson, IResponse } from "../../interfaces/interfaces";

const listBodyElement: HTMLElement = document.querySelector(".list__body");

let currentList: object[] = [];
let next: string | null;
let prev: string | null;

const updateNextAndPrev = (response: IPages): void => {
  next = response[NEXT_PAGE_FIELD];
  prev = response[PREV_PAGE_FIELD];
}

const clearListBodyElement = (): void => {
  listBodyElement.innerHTML = "";
}

export const updateList = (list: object[]): void => {
  clearListBodyElement();
  list.forEach((item: string[]) => createNewListItem(item[NAME_INDEX], item[GENDER_INDEX], item[MASS_INDEX], item[HEIGHT_INDEX], listBodyElement));
}

export const resetList = (response: IResponse): void => {
  currentList = [];
  const pages: IPages = {
    previous: response.previous,
    next: response.next
  }
  response.results.forEach((item: IPerson) => {
    createNewListItem(item[NAME_FIELD], item[GENDER_FIELD], item[MASS_FIELD], item[HEIGHT_FIELD], listBodyElement);
    currentList.push([item[NAME_FIELD], item[GENDER_FIELD], item[MASS_FIELD], item[HEIGHT_FIELD]]);
  });
  updateNextAndPrev(pages);
  hideErrorElement();
}

export const changeListOnPage = (evt: Event): void => {
  if((evt.target as HTMLElement).classList.contains("controls__button_prev") && prev) {
    clearListBodyElement();
    swapi(prev, resetList, console.error);
  }
  if((evt.target as HTMLElement).classList.contains("controls__button_next") && next) {
    clearListBodyElement();
    swapi(next, resetList, console.error);
  }
}

export const getList = (): object[] => {
  return currentList;
}
