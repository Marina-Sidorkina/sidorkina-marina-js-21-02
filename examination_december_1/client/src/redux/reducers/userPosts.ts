import produce from 'immer';
import { IProxyPostPreview } from '../../api/proxy/@types/proxy';
import {
  HIDE_USER_POSTS_LOADING, HIDE_USER_POSTS_ERROR, SHOW_USER_POSTS_ERROR,
  SHOW_USER_POSTS_LOADING, UPDATE_USER_POSTS, UPDATE_USER_POSTS_PAGE
} from '../constants/userPosts';
import { IUserPostsActionType } from '../@types/actions';

const initialState = {
  data: {
    posts: [] as IProxyPostPreview[],
    total: 0,
    isLoading: false,
    error: '',
    page: 1,
    perPage: 6
  }
};

const updateData = (draft: any, response: any) => {
  draft.data.posts = response.data;
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

const userPostsReducer = (state = initialState, action: IUserPostsActionType) => produce(state, (draft: any) => {
  switch (action.type) {
    case UPDATE_USER_POSTS:
      return updateData(draft, action.payload);
    case SHOW_USER_POSTS_LOADING:
      return showIsLoading(draft);
    case HIDE_USER_POSTS_LOADING:
      return hideIsLoading(draft);
    case SHOW_USER_POSTS_ERROR:
      draft.data.error = true;
      return draft;
    case HIDE_USER_POSTS_ERROR:
      draft.data.error = false;
      return draft;
    case UPDATE_USER_POSTS_PAGE:
      draft.data.page = action.payload;
      return draft;
    default:
      return state;
  }
});

export default userPostsReducer;
