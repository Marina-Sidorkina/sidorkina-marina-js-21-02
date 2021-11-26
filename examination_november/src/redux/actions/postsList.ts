import { Dispatch } from 'redux';
import { IDummyApiResponse } from '../../api/dummyApi/@types/dummyApi';
import { getPostsList } from '../../api/dummyApi/dummyApi';
import {
  UPDATE_POSTS_LIST, HIDE_POSTS_LIST_LOADING, SHOW_POSTS_LIST_LOADING,
  HIDE_POSTS_LIST_ERROR, SHOW_POSTS_LIST_ERROR, UPDATE_POSTS_LIST_PAGE
} from '../constants/postsList';

export const updatePostsListAction = (response: IDummyApiResponse) => ({
  type: UPDATE_POSTS_LIST,
  payload: response,
});

const showLoadingAction = () => ({
  type: SHOW_POSTS_LIST_LOADING,
});

const hideLoadingAction = () => ({
  type: HIDE_POSTS_LIST_LOADING,
});

export const updatePostsListPageAction = (value: number) => ({
  type: UPDATE_POSTS_LIST_PAGE,
  payload: value
});

export const showPostsListErrorAction = () => ({
  type: SHOW_POSTS_LIST_ERROR
});

export const hidePostsErrorAction = () => ({
  type: HIDE_POSTS_LIST_ERROR
});

export const loadPostsList = (currentPage: number, perPageLimit: number) => (dispatch: Dispatch) => {
  dispatch(showLoadingAction());
  getPostsList(currentPage, perPageLimit)
    .then((response) => {
      dispatch(updatePostsListAction(response));
      dispatch(hideLoadingAction());
      dispatch(hidePostsErrorAction());
    })
    .catch(() => {
      dispatch(showPostsListErrorAction());
      dispatch(hideLoadingAction());
    });
};
