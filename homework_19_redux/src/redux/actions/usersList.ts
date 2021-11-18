import { TOGGLE_USERS_LIST_LOADING, UPDATE_USERS_LIST } from "../constants/usersList";
import { IDummyApiResponse } from "../../@types/interfaces/dummyApi";

export const updateUsersListAction = (response: IDummyApiResponse) => {
  return {
    type: UPDATE_USERS_LIST,
      payload: response,
  }
}

export const toggleUsersListLoadingAction = () => {
  return {
    type: TOGGLE_USERS_LIST_LOADING
  }
}
