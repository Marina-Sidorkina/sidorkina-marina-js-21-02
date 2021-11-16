import { IDummyUserCard } from "./dummyApi";
import {IDummyApiResponse} from "../../../../homework_17_antdesign/src/@types/interfaces/dummyApi";
import React from "react";

export interface ActionType {
  type: string;
}

export interface loadUsersListActionType extends ActionType {
  payload: IDummyApiResponse;
}

export interface loadUserCardActionType extends ActionType {
  payload: IDummyUserCard;
}

export interface processLoaderAnimationActionType extends ActionType {
  payload: boolean;
}

export interface updateLimitsActionType extends ActionType {
  payload: number;
}
