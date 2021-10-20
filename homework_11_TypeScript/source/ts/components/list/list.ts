import {createNewListItem} from "../../utils/utils";
import {
  GENDER_FIELD, GENDER_INDEX, HEIGHT_FIELD, HEIGHT_INDEX, MASS_FIELD,
  MASS_INDEX, NAME_FIELD, NAME_INDEX, NEXT_PAGE_FIELD, PREV_PAGE_FIELD
} from "../../constants/constants";
import {swapi} from "../../api/swapi";
import { hideErrorElement } from "../error/error";

const listBodyElement = document.querySelector(".list__body");
let currentList = [];
let next;
let prev;

const updateNextAndPrev = (response) => {
  next = response[NEXT_PAGE_FIELD];
  prev = response[PREV_PAGE_FIELD];
}

const clearListBodyElement = () => {
  listBodyElement.innerHTML = "";
}

export const updateList = (list) => {
  clearListBodyElement();
  list.forEach((item) => createNewListItem(item[NAME_INDEX], item[GENDER_INDEX], item[MASS_INDEX], item[HEIGHT_INDEX], listBodyElement));
}

export const resetList = (response) => {
  currentList = [];
  response.results.forEach((item) => {
    createNewListItem(item[NAME_FIELD], item[GENDER_FIELD], item[MASS_FIELD], item[HEIGHT_FIELD], listBodyElement);
    currentList.push([item[NAME_FIELD], item[GENDER_FIELD], item[MASS_FIELD], item[HEIGHT_FIELD]]);
  });
  updateNextAndPrev(response);
  hideErrorElement();
}

export const changeListOnPage = (evt) => {
  if(evt.target.classList.contains("controls__button_prev") && prev) {
    clearListBodyElement();
    swapi(prev, resetList, console.error);
  }
  if(evt.target.classList.contains("controls__button_next") && next) {
    clearListBodyElement();
    swapi(next, resetList, console.error);
  }
}

export const getList = () => {
  return currentList;
}
