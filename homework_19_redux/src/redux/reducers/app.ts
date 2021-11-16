import produce from "immer";
import { UPDATE_IS_LOADING, UPDATE_ITEMS_AMOUNT, UPDATE_SHOW_NAV_ITEMS,
  UPDATE_PER_PAGE_LIMIT, UPDATE_CURRENT_PAGE, UPDATE_CURRENT_MENU_ITEM } from "../constants/app";

const initialState = {
  settings: {
    currentPage: 1,
    perPageLimit: 10,
    isLoading: true,
    showNavItems: true,
    itemsAmount: 0,
    currentMenuItem: "main"
  }
};

const appReducer = (state = initialState, action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case UPDATE_IS_LOADING:
        draft.settings.isLoading =  action.payload;
        return draft;
      case UPDATE_ITEMS_AMOUNT:
        draft.settings.itemsAmount = action.payload;
        return draft;
      case UPDATE_SHOW_NAV_ITEMS:
        draft.settings.showNavItems = action.payload;
        return draft;
      case UPDATE_CURRENT_MENU_ITEM:
        draft.settings.currentMenuItem = action.payload;
        return draft;
      case UPDATE_CURRENT_PAGE:
        draft.settings.currentPage = action.payload;
        return draft;
      case UPDATE_PER_PAGE_LIMIT:
        draft.settings.perPageLimit = action.payload;
        return draft;
      default:
        return state;
    }
  });

export default appReducer;
