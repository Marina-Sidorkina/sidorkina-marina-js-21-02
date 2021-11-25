import produce from 'immer';
import { IDummyPost } from '../../api/dummyApi/@types/dummyApi';
import { IPostsActionType } from '../@types/actions';
import {
  UPDATE_POSTS_LIST, UPDATE_POSTS_LIST_PAGE, LOAD_POSTS_LIST_ERROR, SHOW_POSTS_LIST_LOADING, HIDE_POSTS_LIST_LOADING
} from '../constants/postsList';

const initialState = {
  data: {
    posts: [] as IDummyPost[],
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

const loadError = (draft: any, error?: any) => {
  draft.data.isLoading = false;
  draft.data.error = error;
  return draft;
};

const postsListReducer = (state = initialState, action: IPostsActionType) => produce(state, (draft: any) => {
  switch (action.type) {
    case UPDATE_POSTS_LIST:
      return updateData(draft, action.payload);
    case SHOW_POSTS_LIST_LOADING:
      return showIsLoading(draft);
    case HIDE_POSTS_LIST_LOADING:
      return hideIsLoading(draft);
    case LOAD_POSTS_LIST_ERROR:
      return loadError(draft, action.error);
    case UPDATE_POSTS_LIST_PAGE:
      draft.data.page = action.payload;
      return draft;
    default:
      return state;
  }
});

export default postsListReducer;
