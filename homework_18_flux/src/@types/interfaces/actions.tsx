import {IDummyUser} from "./dummyApi";
import {IDummyApiResponse} from "../../../../homework_17_antdesign/src/@types/interfaces/dummyApi";

export interface ActionType {
  type: string;
}

export interface loadUsersListActionType extends ActionType {
  payload: IDummyApiResponse;
}