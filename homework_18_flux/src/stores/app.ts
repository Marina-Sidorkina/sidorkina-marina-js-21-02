import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import {
  UPDATE_IS_LOADING,
  UPDATE_ITEMS_AMOUNT,
  UPDATE_SHOW_NAV_ITEMS,
  UPDATE_CURRENT_MENU_ITEM,
  UPDATE_CURRENT_PAGE,
  UPDATE_PER_PAGE_LIMIT } from "../constants/actions/app";

class AppStore extends EventEmitter {
  private settings;

  constructor() {
    super();
    this.settings = {
      currentPage: 1,
      perPageLimit: 10,
      isLoading: true,
      showNavItems: true,
      itemsAmount: 0,
      currentMenuItem: "main"
    }
    this.getSettings = this.getSettings.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  getSettings() {
    return this.settings;
  }

  handleAction(action: any) {
    switch (action.type) {
      case UPDATE_IS_LOADING:
        this.settings = { ...this.settings, isLoading: action.payload };
        this.emit("change");
        break;
      case UPDATE_ITEMS_AMOUNT:
        this.settings = { ...this.settings, itemsAmount: action.payload };
        this.emit("change");
        break;
      case UPDATE_SHOW_NAV_ITEMS:
        this.settings = { ...this.settings, showNavItems: action.payload };
        this.emit("change");
        break;
      case UPDATE_CURRENT_MENU_ITEM:
        this.settings = { ...this.settings, currentMenuItem: action.payload };
        this.emit("change");
        break;
      case UPDATE_CURRENT_PAGE:
        this.settings = { ...this.settings, currentPage: action.payload };
        this.emit("change");
        break;
      case UPDATE_PER_PAGE_LIMIT:
        this.settings = { ...this.settings, perPageLimit: action.payload };
        this.emit("change");
        break;
    }
  }
}

const appStore = new AppStore();

dispatcher.register(appStore.handleAction as (payload: unknown) => void);

export default appStore;
