import dispatcher from "../dispatcher";
import {
  UPDATE_IS_LOADING,
  UPDATE_ITEMS_AMOUNT,
  UPDATE_SHOW_NAV_ITEMS,
  UPDATE_CURRENT_MENU_ITEM,
  UPDATE_CURRENT_PAGE,
  UPDATE_PER_PAGE_LIMIT } from "../constants/actions/app";

export const updateIsLoadingAction = (value: boolean) => {
  dispatcher.dispatch({
    type: UPDATE_IS_LOADING,
    payload: value
  });
}

export const updateItemsAmountAction = (value: number) => {
  dispatcher.dispatch({
    type: UPDATE_ITEMS_AMOUNT,
    payload: value
  });
}

export const updateShowNavItemsAction = (value: boolean) => {
  dispatcher.dispatch({
    type: UPDATE_SHOW_NAV_ITEMS,
    payload: value
  });
}

export const updateCurrentMenuItemAction = (value: string) => {
  dispatcher.dispatch({
    type: UPDATE_CURRENT_MENU_ITEM,
    payload: value
  });
}

export const updateCurrentPageAction = (value: number) => {
  dispatcher.dispatch({
    type: UPDATE_CURRENT_PAGE,
    payload: value
  });
}

export const updatePerPageLimitAction = (value: number) => {
  dispatcher.dispatch({
    type: UPDATE_PER_PAGE_LIMIT,
    payload: value
  });
}
