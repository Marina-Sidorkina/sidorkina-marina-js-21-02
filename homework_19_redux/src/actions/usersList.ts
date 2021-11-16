import dispatcher from "../dispatcher";
import { LOAD_USERS_LIST, LOAD_USERS_LIST_SUCCESS } from "../constants/actions/usersList";
import { getUsersList } from "../api/dummyApi";
import { updateIsLoadingAction, updateItemsAmountAction } from "./app";

export const loadUsersListAction = (page: number, pageSize: number) => {
  dispatcher.dispatch({
    type: LOAD_USERS_LIST,
  });

  updateIsLoadingAction(true);

  getUsersList(page, pageSize)
    .then((response) => {
      updateIsLoadingAction(false);
      updateItemsAmountAction(response.total);
      dispatcher.dispatch({
        type: LOAD_USERS_LIST_SUCCESS,
        payload: response,
      })
    });
}
