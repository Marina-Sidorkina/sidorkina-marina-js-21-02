import { Dispatch } from 'redux';
import {
  UPDATE_AUTHORIZED_USER_DATA,
  LOAD_AUTHORIZATION_ERROR,
  SHOW_AUTHORIZATION_LOADING,
  HIDE_AUTHORIZATION_LOADING,
  UPDATE_AUTHORIZATION_INPUT_VALUE,
  RESET_AUTHORIZED_USER, RESET_AUTHORIZATION_ERROR
} from '../constants/login';
import { getUserInfo } from '../../api/dummyApi';
import { IDummyUserFull } from '../../@types/dummyApi';
import { getExpirationDate } from '../../utils/redux';

export const updateAuthorizedUserDataAction = (response: IDummyUserFull) => ({
  type: UPDATE_AUTHORIZED_USER_DATA,
  payload: response,
});

export const updateAuthorizationInputValue = (value: string) => ({
  type: UPDATE_AUTHORIZATION_INPUT_VALUE,
  payload: value
});

const loadErrorAction = () => ({
  type: LOAD_AUTHORIZATION_ERROR,
});

const showLoadingAction = () => ({
  type: SHOW_AUTHORIZATION_LOADING,
});

export const hideLoadingAction = () => ({
  type: HIDE_AUTHORIZATION_LOADING,
});

export const resetAuthorizedUserAction = () => ({
  type: RESET_AUTHORIZED_USER
});

export const resetAuthorizationErrorAction = () => ({
  type: RESET_AUTHORIZATION_ERROR
});

export const authorizeUser = (id: string, history: any) => (dispatch: Dispatch) => {
  dispatch(showLoadingAction());
  getUserInfo(id)
    .then((response) => {
      dispatch(updateAuthorizedUserDataAction(response));
      document.cookie = `id=${response.id}; path=/; expires=${getExpirationDate()}`;
      document.cookie = `picture=${response.picture}; path=/; expires=${getExpirationDate()}`;
      document.cookie = `name=${response.firstName}; path=/; expires=${getExpirationDate()}`;
      if (response.id) dispatch(history.push(`profile/${response.id}`));
      dispatch(hideLoadingAction());
    })
    .catch(() => {
      dispatch(loadErrorAction());
    });
};
