import { Dispatch } from 'redux';
import { getUserPosts } from '../../api/dummyApi/dummyApi';
import {
  HIDE_USER_POSTS_LOADING, SHOW_USER_POSTS_LOADING,
  UPDATE_USER_POSTS, LOAD_USER_POSTS_ERROR, UPDATE_USER_POSTS_PAGE
} from '../constants/userPosts';
import { IDummyApiResponse } from '../../api/dummyApi/@types/dummyApi';

export const updateUserPostsAction = (response: IDummyApiResponse) => ({
  type: UPDATE_USER_POSTS,
  payload: response,
});

const loadErrorAction = (error: string) => ({
  type: LOAD_USER_POSTS_ERROR,
  error,
});

const showLoadingAction = () => ({
  type: SHOW_USER_POSTS_LOADING,
});

const hideLoadingAction = () => ({
  type: HIDE_USER_POSTS_LOADING,
});

export const updateUserPostsPageAction = (value: number) => ({
  type: UPDATE_USER_POSTS_PAGE,
  payload: value
});

export const loadUserPosts = (currentPage: number, perPageLimit: number, id: string) => (dispatch: Dispatch) => {
  dispatch(showLoadingAction());
  getUserPosts(currentPage, perPageLimit, id)
    .then((response) => {
      dispatch(updateUserPostsAction(response));
    })
    .catch((error) => dispatch(loadErrorAction(error)))
    .finally(() => {
      dispatch(hideLoadingAction());
    });
};
