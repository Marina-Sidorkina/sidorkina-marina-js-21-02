import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import {
  HIDE_USERS_LIST_LOADING,
  SHOW_USERS_LIST_LOADING,
  UPDATE_USERS_LIST, UPDATE_USERS_LIST_PAGE,
  HIDE_USERS_LIST_ERROR, SHOW_USERS_LIST_ERROR
} from '../constants/usersList';
import { getUsersList } from '../../api/proxy';

export const updateUsersListAction = (response: AxiosResponse<any, any>) => ({
  type: UPDATE_USERS_LIST,
  payload: response,
});

const showLoadingAction = () => ({
  type: SHOW_USERS_LIST_LOADING,
});

const hideLoadingAction = () => ({
  type: HIDE_USERS_LIST_LOADING,
});

export const updateUsersListPageAction = (value: number) => ({
  type: UPDATE_USERS_LIST_PAGE,
  payload: value
});

export const showUsersListErrorAction = () => ({
  type: SHOW_USERS_LIST_ERROR
});

export const hideUsersListErrorAction = () => ({
  type: HIDE_USERS_LIST_ERROR
});

export const loadUsersList = (currentPage: number, perPageLimit: number) => (dispatch: Dispatch) => {
  dispatch(showLoadingAction());
  getUsersList(currentPage, perPageLimit)
    .then((response) => {
      dispatch(updateUsersListAction(response.data.data));
      dispatch(hideUsersListErrorAction());
    })
    .catch(() => {
      dispatch(showUsersListErrorAction());
      dispatch(hideLoadingAction());
    });
};
