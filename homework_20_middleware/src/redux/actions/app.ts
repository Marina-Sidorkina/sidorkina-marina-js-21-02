import {
  UPDATE_IS_LOADING, UPDATE_ITEMS_AMOUNT, UPDATE_SHOW_NAV_ITEMS,
  UPDATE_PER_PAGE_LIMIT, UPDATE_CURRENT_PAGE, UPDATE_CURRENT_MENU_ITEM
} from '../constants/app';

export const updateIsLoadingAction = (value: boolean) => ({
  type: UPDATE_IS_LOADING,
  payload: value
});

export const updateItemsAmountAction = (value: number) => ({
  type: UPDATE_ITEMS_AMOUNT,
  payload: value
});

export const updateShowNavItemsAction = (value: boolean) => ({
  type: UPDATE_SHOW_NAV_ITEMS,
  payload: value
});

export const updateCurrentMenuItemAction = (value: string) => ({
  type: UPDATE_CURRENT_MENU_ITEM,
  payload: value
});

export const updateCurrentPageAction = (value: number) => ({
  type: UPDATE_CURRENT_PAGE,
  payload: value
});

export const updatePerPageLimitAction = (value: number) => ({
  type: UPDATE_PER_PAGE_LIMIT,
  payload: value
});
