import { Dispatch } from 'redux';
import { IDummyApiResponse } from '../../@types/dummyApi';
import { getPostsList } from '../../api/dummyApi';
import {
  UPDATE_POSTS_LIST, HIDE_POSTS_LIST_LOADING, LOAD_POSTS_LIST_ERROR, SHOW_POSTS_LIST_LOADING, UPDATE_POSTS_LIST_PAGE
} from '../constants/postsList';

export const updatePostsListAction = (response: IDummyApiResponse) => ({
  type: UPDATE_POSTS_LIST,
  payload: response,
});

const loadErrorAction = (error: string) => ({
  type: LOAD_POSTS_LIST_ERROR,
  error,
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

export const loadPostsList = (currentPage: number, perPageLimit: number) => (dispatch: Dispatch) => {
  dispatch(showLoadingAction());
  getPostsList(currentPage, perPageLimit)
    .then((response) => {
      dispatch(updatePostsListAction(response));
    })
    .catch((error) => dispatch(loadErrorAction(error)))
    .finally(() => {
      dispatch(hideLoadingAction());
    });
};
