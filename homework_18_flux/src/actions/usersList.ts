import dispatcher from "../dispatcher";
import {LOAD_USERS_LIST, LOAD_USERS_LIST_SUCCESS} from "../constants/stores/usersList";
import {getUsersList} from "../api/dummyApi";

export const loadUsersListAction = (page: number, pageSize: number) => {
  dispatcher.dispatch({
    type: LOAD_USERS_LIST,
  });

  getUsersList(page, pageSize)
    .then((response) => {
      console.log(response);
      dispatcher.dispatch({
        type: LOAD_USERS_LIST_SUCCESS,
        payload: response.data,
      })
    });
}
