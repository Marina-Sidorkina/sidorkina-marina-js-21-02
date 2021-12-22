import produce from 'immer';
import { IProxyUserFull } from '../../api/proxy/@types/proxy';
import {
  UPDATE_AUTHORIZED_USER_DATA,
  HIDE_AUTHORIZATION_LOADING, LOAD_AUTHORIZATION_ERROR,
  SHOW_AUTHORIZATION_LOADING,
  UPDATE_AUTHORIZATION_INPUT_VALUE, RESET_AUTHORIZED_USER,
  RESET_AUTHORIZATION_ERROR
} from '../constants/login';
import { getCookie, resetCookie } from '../../utils/cookies';
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

const setAuthorizedUserData = (draft: any, payload: IProxyUserFull) => {
  draft.data.authorizedUserId = payload.id;
  draft.data.authorizedUserName = payload.firstName;
  draft.data.authorizedUserPicture = payload.picture || DEFAULT_IMAGE;
  return draft;
};

const resetUser = (draft: any) => {
  draft.data.authorizedUserName = '';
  draft.data.authorizedUserPicture = '';
  draft.data.authorizedUserId = '';
  resetCookie();
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
