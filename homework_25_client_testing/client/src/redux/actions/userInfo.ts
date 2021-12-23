import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { getUserInfo } from '../../api/proxy';
import {
  LOAD_USER_INFO, SHOW_USER_INFO_LOADING, HIDE_USER_INFO_LOADING,
  HIDE_USER_INFO_ERROR, SHOW_USER_INFO_ERROR
} from '../constants/userInfo';

export const updateUserCardAction = (response: AxiosResponse<any, any>) => ({
  type: LOAD_USER_INFO,
  payload: response,
});

const showLoadingAction = () => ({
  type: SHOW_USER_INFO_LOADING,
});

const hideLoadingAction = () => ({
  type: HIDE_USER_INFO_LOADING,
});

export const showUserInfoErrorAction = () => ({
  type: SHOW_USER_INFO_ERROR
});

export const hideUserInfoErrorAction = () => ({
  type: HIDE_USER_INFO_ERROR
});

export const loadUserInfo = (paramsId: string) => (dispatch: Dispatch) => {
  dispatch(hideUserInfoErrorAction());
  dispatch(showLoadingAction());
  getUserInfo(paramsId)
    .then((response) => {
      dispatch(updateUserCardAction(response.data.data));
      dispatch(hideLoadingAction());
      dispatch(hideUserInfoErrorAction());
    })
    .catch(() => {
      dispatch(showUserInfoErrorAction());
      dispatch(hideLoadingAction());
    });
};
