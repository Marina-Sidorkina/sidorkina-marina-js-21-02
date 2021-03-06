import { Dispatch } from 'redux';
import {
  HIDE_USERS_LIST_LOADING,
  SHOW_USERS_LIST_LOADING,
  UPDATE_USERS_LIST, UPDATE_USERS_LIST_PAGE,
  HIDE_USERS_LIST_ERROR, SHOW_USERS_LIST_ERROR
} from '../constants/usersList';
import { IDummyApiResponse } from '../../api/dummyApi/@types/dummyApi';
import { getUsersList } from '../../api/dummyApi/dummyApi';

export const updateUsersListAction = (response: IDummyApiResponse) => ({
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
      dispatch(updateUsersListAction(response));
      dispatch(hideUsersListErrorAction());
    })
    .catch(() => {
      dispatch(showUsersListErrorAction());
      dispatch(hideLoadingAction());
    });
};
