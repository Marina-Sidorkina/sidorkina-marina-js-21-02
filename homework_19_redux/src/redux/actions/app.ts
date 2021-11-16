//import { processLoaderAnimationAction } from "../../actions/loader";
import { UPDATE_IS_LOADING, UPDATE_ITEMS_AMOUNT, UPDATE_SHOW_NAV_ITEMS,
UPDATE_PER_PAGE_LIMIT, UPDATE_CURRENT_PAGE, UPDATE_CURRENT_MENU_ITEM } from "../constants/app";

export const updateIsLoadingAction = (value: boolean, callback: (value: boolean) => void) => {
  //processLoaderAnimationAction(value);
  return {
    type: UPDATE_IS_LOADING,
    payload: {
      value,
      callback
    }
  }
}

export const updateItemsAmountAction = (value: number) => {
  return {
    type: UPDATE_ITEMS_AMOUNT,
    payload: value
  }
}

export const updateShowNavItemsAction = (value: boolean) => {
  return {
    type: UPDATE_SHOW_NAV_ITEMS,
      payload: value
  }
}

export const updateCurrentMenuItemAction = (value: string) => {
  return {
    type: UPDATE_CURRENT_MENU_ITEM,
    payload: value
  }
}

export const updateCurrentPageAction = (value: number) => {
  return {
    type: UPDATE_CURRENT_PAGE,
    payload: value
  }
}

export const updatePerPageLimitAction = (value: number) => {
  return {
    type: UPDATE_PER_PAGE_LIMIT,
    payload: value
  }
}
