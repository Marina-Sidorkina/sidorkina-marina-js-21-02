import produce from 'immer';
import { IUserInfoActionType } from '../@types/actions';
import {
  LOAD_USER_INFO, HIDE_USER_INFO_LOADING, SHOW_USER_INFO_LOADING,
  HIDE_USER_INFO_ERROR, SHOW_USER_INFO_ERROR
} from '../constants/userInfo';
import { IDummyUserFull } from '../../api/dummyApi/@types/dummyApi';

const initialState = {
  data: {
    user: {} as IDummyUserFull,
    isLoading: false,
    error: ''
  }
};

const updateData = (draft: any, response: any) => {
  draft.data.user = { ...response };
  draft.data.isLoading = false;
  draft.data.error = '';
  return draft;
};

const showIsLoading = (draft: any) => {
  draft.data.isLoading = true;
  return draft;
};

const hideIsLoading = (draft: any) => {
  draft.data.isLoading = false;
  return draft;
};

const userInfoReducer = (state = initialState, action: IUserInfoActionType) => produce(state, (draft: any) => {
  switch (action.type) {
    case LOAD_USER_INFO:
      return updateData(draft, action.payload);
    case SHOW_USER_INFO_LOADING:
      return showIsLoading(draft);
    case HIDE_USER_INFO_LOADING:
      return hideIsLoading(draft);
    case SHOW_USER_INFO_ERROR:
      draft.data.error = true;
      return draft;
    case HIDE_USER_INFO_ERROR:
      draft.data.error = false;
      return draft;
    default:
      return state;
  }
});

export default userInfoReducer;
