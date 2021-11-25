import produce from 'immer';
import { IDummyUserFull } from '../../api/dummyApi/@types/dummyApi';
import {
  UPDATE_AUTHORIZED_USER_DATA,
  HIDE_AUTHORIZATION_LOADING, LOAD_AUTHORIZATION_ERROR,
  SHOW_AUTHORIZATION_LOADING,
  UPDATE_AUTHORIZATION_INPUT_VALUE, RESET_AUTHORIZED_USER,
  RESET_AUTHORIZATION_ERROR
} from '../constants/login';
import { getCookie } from '../../utils/redux';
import { DEFAULT_IMAGE } from '../../constants/components';

export const initialState = {
  data: {
    authorizedUserId: getCookie('id') ? getCookie('id') : '',
    authorizedUserName: getCookie('name') ? getCookie('name') : '',
    authorizedUserPicture: getCookie('picture') ? getCookie('picture') : '',
    authorizationError: '',
    isLoading: false,
    error: false,
    inputValue: ''
  }
};

const showIsLoading = (draft: any) => {
  draft.data.isLoading = true;
  draft.data.error = false;
  return draft;
};

const hideIsLoading = (draft: any) => {
  draft.data.isLoading = false;
  return draft;
};

const loadError = (draft: any) => {
  draft.data.isLoading = false;
  draft.data.error = true;
  return draft;
};

const setAuthorizedUserData = (draft: any, payload: IDummyUserFull) => {
  draft.data.authorizedUserId = payload.id;
  draft.data.authorizedUserName = payload.firstName;
  draft.data.authorizedUserPicture = payload.picture || DEFAULT_IMAGE;
  return draft;
};

const resetUser = (draft: any) => {
  draft.data.authorizedUserData = {};
  draft.data.authorizedUserId = '';
  document.cookie = 'id=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.cookie = 'picture=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.cookie = 'name=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  return draft;
};

const resetError = (draft: any) => {
  draft.data.error = false;
  return draft;
};

const loginReducer = (state = initialState, action: any) => produce(state, (draft: any) => {
  switch (action.type) {
    case UPDATE_AUTHORIZED_USER_DATA:
      return setAuthorizedUserData(draft, action.payload);
    case UPDATE_AUTHORIZATION_INPUT_VALUE:
      draft.data.inputValue = action.payload;
      return draft;
    case SHOW_AUTHORIZATION_LOADING:
      return showIsLoading(draft);
    case HIDE_AUTHORIZATION_LOADING:
      return hideIsLoading(draft);
    case LOAD_AUTHORIZATION_ERROR:
      return loadError(draft);
    case RESET_AUTHORIZATION_ERROR:
      return resetError(draft);
    case RESET_AUTHORIZED_USER:
      return resetUser(draft);
    default:
      return state;
  }
});

export default loginReducer;
