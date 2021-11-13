import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { IDummyUserCard } from "../@types/interfaces/dummyApi";
import { loadUserCardActionType } from "../@types/interfaces/actions";
import { LOAD_USER_CARD, LOAD_USER_CARD_SUCCESS } from "../constants/actions/userCard";

class UserCardStore extends EventEmitter {
  private user;
  private isLoading;

  constructor() {
    super();
    this.isLoading = true;
    this.user = {} as IDummyUserCard;
    this.getUser = this.getUser.bind(this);
    this.getIsLoading = this.getIsLoading.bind(this);
    this.onUserCardLoadSuccess = this.onUserCardLoadSuccess.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  getUser() {
    return this.user;
  }

  getIsLoading() {
    return this.isLoading;
  }

  onUserCardLoadSuccess(data: IDummyUserCard) {
    this.user = {...data};
    this.isLoading = false;

    this.emit("change");
  }

  handleAction(action: loadUserCardActionType) {
    switch (action.type) {
      case LOAD_USER_CARD:
        this.isLoading = true;
        this.emit("change");
        break;
      case LOAD_USER_CARD_SUCCESS:
        this.onUserCardLoadSuccess(action.payload);
        break;
    }
  }
}

const userCardStore = new UserCardStore();

dispatcher.register(userCardStore.handleAction as (payload: unknown) => void);

export default userCardStore;
