import { IDummyUserCard } from "./dummyApi";
import {IDummyApiResponse} from "../../../../homework_17_antdesign/src/@types/interfaces/dummyApi";

export interface ActionType {
  type: string;
}

export interface loadUsersListActionType extends ActionType {
  payload: IDummyApiResponse;
}

export interface loadUserCardActionType extends ActionType {
  payload: IDummyUserCard;
}

export interface updateInputValue extends ActionType {
  payload: string
}
