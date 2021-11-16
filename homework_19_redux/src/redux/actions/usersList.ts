import { TOGGLE_USERS_LIST_LOADING, UPDATE_USERS_LIST } from "../constants/usersList";

export const updateUsersListAction = (response: any) => {
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
