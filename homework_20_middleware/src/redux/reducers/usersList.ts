import produce from 'immer';
import { IDummyUser } from '../../@types/interfaces/dummyApi';
import { TOGGLE_USERS_LIST_LOADING, UPDATE_USERS_LIST } from '../constants/usersList';
import { IUsersListActionType } from '../@types/actions';

const initialState = {
  data: {
    users: [] as IDummyUser[],
    total: 0,
    isLoading: false
  }
};

const updateData = (draft: any, response: any) => {
  draft.data.users = response.data;
  draft.data.total = response.total;
  draft.data.isLoading = false;
  return draft;
};

const toggleIsLoading = (draft: any) => {
  draft.data.isLoading = true;
  return draft;
};

const usersListReducer = (state = initialState, action: IUsersListActionType) => produce(state, (draft: any) => {
  switch (action.type) {
    case UPDATE_USERS_LIST:
      return updateData(draft, action.payload);
    case TOGGLE_USERS_LIST_LOADING:
      return toggleIsLoading(draft);
    default:
      return state;
  }
});

export default usersListReducer;
