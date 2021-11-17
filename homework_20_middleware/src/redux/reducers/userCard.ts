import produce from 'immer';
import {
  HIDE_USER_CARD_LOADING,
  LOAD_USER_CARD,
  LOAD_USER_CARD_ERROR,
  SHOW_USER_CARD_LOADING
} from '../constants/userCard';
import { IUserCardActionType } from '../@types/actions';

const initialState = {
  data: {
    user: {},
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

const loadError = (draft: any, error?: any) => {
  draft.data.isLoading = false;
  draft.data.error = error;
  return draft;
};

const userCardReducer = (state = initialState, action: IUserCardActionType) => produce(state, (draft: any) => {
  switch (action.type) {
    case LOAD_USER_CARD:
      return updateData(draft, action.payload);
    case SHOW_USER_CARD_LOADING:
      return showIsLoading(draft);
    case HIDE_USER_CARD_LOADING:
      return hideIsLoading(draft);
    case LOAD_USER_CARD_ERROR:
      return loadError(draft, action.error);
    default:
      return state;
  }
});

export default userCardReducer;
