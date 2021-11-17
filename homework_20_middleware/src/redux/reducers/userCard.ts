import produce from 'immer';
import { LOAD_USER_CARD, TOGGLE_USER_CARD_LOADING } from '../constants/userCard';
import { IUserCardActionType } from '../@types/actions';

const initialState = {
  data: {
    user: {},
    isLoading: false
  }
};

const updateData = (draft: any, response: any) => {
  draft.data.user = { ...response };
  draft.data.isLoading = false;
  return draft;
};

const toggleIsLoading = (draft: any) => {
  draft.data.isLoading = true;
  return draft;
};

const userCardReducer = (state = initialState, action: IUserCardActionType) => produce(state, (draft: any) => {
  switch (action.type) {
    case LOAD_USER_CARD:
      return updateData(draft, action.payload);
    case TOGGLE_USER_CARD_LOADING:
      return toggleIsLoading(draft);
    default:
      return state;
  }
});

export default userCardReducer;
