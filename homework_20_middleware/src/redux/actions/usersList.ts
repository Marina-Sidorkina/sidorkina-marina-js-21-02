import { Dispatch } from 'redux';
import {
  HIDE_USERS_LIST_LOADING, LOAD_USERS_LIST_ERROR,
  SHOW_USERS_LIST_LOADING,
  UPDATE_USERS_LIST
} from '../constants/usersList';
import { IDummyApiResponse } from '../../@types/interfaces/dummyApi';
import { getUsersList } from '../../api/dummyApi';
import { updateIsLoadingAction, updateItemsAmountAction } from './app';

export const updateUsersListAction = (response: IDummyApiResponse) => ({
  type: UPDATE_USERS_LIST,
  payload: response,
});

const loadErrorAction = (error: string) => ({
  type: LOAD_USERS_LIST_ERROR,
  error,
});

const showLoadingAction = () => ({
  type: SHOW_USERS_LIST_LOADING,
});

const hideLoadingAction = () => ({
  type: HIDE_USERS_LIST_LOADING,
});

export const loadUsersList = (currentPage: number, perPageLimit: number) => (dispatch: Dispatch) => {
  dispatch(showLoadingAction());
  dispatch(updateIsLoadingAction(true));
  getUsersList(currentPage, perPageLimit)
    .then((response) => {
      dispatch(updateUsersListAction(response));
      dispatch(updateItemsAmountAction(response.total));
    })
    .catch((error) => dispatch(loadErrorAction(error)))
    .finally(() => {
      dispatch(updateIsLoadingAction(false));
      dispatch(hideLoadingAction());
    });
};
