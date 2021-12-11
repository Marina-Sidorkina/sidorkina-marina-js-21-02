import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import {
  UPDATE_AUTHORIZED_USER_DATA,
  LOAD_AUTHORIZATION_ERROR,
  SHOW_AUTHORIZATION_LOADING,
  HIDE_AUTHORIZATION_LOADING,
  UPDATE_AUTHORIZATION_INPUT_VALUE,
  RESET_AUTHORIZED_USER, RESET_AUTHORIZATION_ERROR
} from '../constants/login';
import { getUserInfo } from '../../api/proxy/proxy';
import { getExpirationDate } from '../../utils/redux';
import { DEFAULT_IMAGE } from '../../constants/components';
import { IDummyUserFull } from '../../api/proxy/@types/proxy';

export const updateAuthorizedUserDataAction = (response: AxiosResponse<any, any> | IDummyUserFull) => ({
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
      dispatch(updateAuthorizedUserDataAction(response.data.data));
      document.cookie = `id=${response.data.data.id}; path=/; expires=${getExpirationDate()}`;
      document.cookie = `picture=${response.data.data.picture
      || DEFAULT_IMAGE}; path=/; expires=${getExpirationDate()}`;
      document.cookie = `name=${response.data.data.firstName}; path=/; expires=${getExpirationDate()}`;
      if (response.data.data.id) dispatch(history.push(`profile/${response.data.data.id}`));
      dispatch(hideLoadingAction());
    })
    .catch(() => {
      dispatch(loadErrorAction());
    });
};
