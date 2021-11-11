import {IDummyUser} from "./dummyApi";

export interface ActionType {
  type: string;
}

export interface loadUsersListActionType extends ActionType {
  payload: IDummyUser[];
}
