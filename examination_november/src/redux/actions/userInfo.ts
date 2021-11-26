import { Dispatch } from 'redux';
import { IDummyUserFull } from '../../api/dummyApi/@types/dummyApi';
import { getUserInfo } from '../../api/dummyApi/dummyApi';
import {
  LOAD_USER_INFO, SHOW_USER_INFO_LOADING, HIDE_USER_INFO_LOADING,
  HIDE_USER_INFO_ERROR, SHOW_USER_INFO_ERROR
} from '../constants/userInfo';

export const updateUserCardAction = (response: IDummyUserFull) => ({
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
  dispatch(showLoadingAction());
  getUserInfo(paramsId)
    .then((response) => {
      dispatch(updateUserCardAction(response));
      dispatch(hideLoadingAction());
    })
    .catch(() => {
      dispatch(showUserInfoErrorAction());
      dispatch(hideLoadingAction());
    });
};
