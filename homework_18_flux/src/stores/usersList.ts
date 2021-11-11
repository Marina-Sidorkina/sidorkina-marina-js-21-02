import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import { IUsersListStoreState } from "../@types/interfaces/stores";
import { IDummyUser } from "../@types/interfaces/dummyApi";
import { loadUsersListActionType } from "../@types/interfaces/actions";
import { LOAD_USERS_LIST, LOAD_USERS_LIST_SUCCESS } from "../constants/stores/usersList";
import {IDummyApiResponse} from "../../../homework_17_antdesign/src/@types/interfaces/dummyApi";

class UsersListStore extends EventEmitter {
  private state;

  constructor() {
    super();
    this.state = {
      users: [] as IDummyUser[],
      total: 0,
      isLoading: false
    };
    this.getState = this.getState.bind(this);
    this.onUsersListLoadSuccess = this.onUsersListLoadSuccess.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getIsLoading = this.getIsLoading.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }

  getState() {
    return this.state;
  };

  getUsers() {
    return this.state.users;
  };

  getTotal() {
    return this.state.total;
  }

  getIsLoading() {
    return this.state.isLoading;
  };

  onUsersListLoadSuccess(data: IDummyApiResponse) {
    this.state = {
      users: data.data,
      isLoading: false,
      total: data.total
    }

    this.emit("change");
  }

  handleAction(action: loadUsersListActionType) {
    switch (action.type) {
      case LOAD_USERS_LIST:
        this.state = { ...this.state, isLoading: true};
        this.emit("change");
        break;
      case LOAD_USERS_LIST_SUCCESS:
        this.onUsersListLoadSuccess(action.payload);
        break;
    }
  }
}

const usersListStore = new UsersListStore();

dispatcher.register(usersListStore.handleAction as (payload: unknown) => void);

export default usersListStore;
