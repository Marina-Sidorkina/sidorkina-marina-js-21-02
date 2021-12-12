import produce from 'immer';
import { IProxyUser } from '../../api/proxy/@types/proxy';
import {
  SHOW_USERS_LIST_LOADING,
  HIDE_USERS_LIST_LOADING,
  UPDATE_USERS_LIST,
  UPDATE_USERS_LIST_PAGE, SHOW_USERS_LIST_ERROR, HIDE_USERS_LIST_ERROR
} from '../constants/usersList';
import { IUsersListActionType } from '../@types/actions';

const initialState = {
  data: {
    users: [] as IProxyUser[],
    total: 0,
    isLoading: false,
    error: '',
    page: 1,
    perPage: 6
  }
};

const updateData = (draft: any, response: any) => {
  draft.data.users = response.data;
  draft.data.total = response.total;
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

const usersListReducer = (state = initialState, action: IUsersListActionType) => produce(state, (draft: any) => {
  switch (action.type) {
    case UPDATE_USERS_LIST:
      return updateData(draft, action.payload);
    case SHOW_USERS_LIST_LOADING:
      return showIsLoading(draft);
    case HIDE_USERS_LIST_LOADING:
      return hideIsLoading(draft);
    case SHOW_USERS_LIST_ERROR:
      draft.data.error = true;
      return draft;
    case HIDE_USERS_LIST_ERROR:
      draft.data.error = false;
      return draft;
    case UPDATE_USERS_LIST_PAGE:
      draft.data.page = action.payload;
      return draft;
    default:
      return state;
  }
});

export default usersListReducer;
