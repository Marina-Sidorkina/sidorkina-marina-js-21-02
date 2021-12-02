import { Dispatch } from 'redux';
import { getUserPosts } from '../../api/dummyApi/dummyApi';
import {
  HIDE_USER_POSTS_LOADING, SHOW_USER_POSTS_LOADING,
  UPDATE_USER_POSTS, UPDATE_USER_POSTS_PAGE,
  HIDE_USER_POSTS_ERROR, SHOW_USER_POSTS_ERROR
} from '../constants/userPosts';
import { IDummyApiResponse } from '../../api/dummyApi/@types/dummyApi';

export const updateUserPostsAction = (response: IDummyApiResponse) => ({
  type: UPDATE_USER_POSTS,
  payload: response,
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

export const showUserPostsErrorAction = () => ({
  type: SHOW_USER_POSTS_ERROR
});

export const hideUserPostsErrorAction = () => ({
  type: HIDE_USER_POSTS_ERROR
});

export const loadUserPosts = (currentPage: number, perPageLimit: number, id: string) => (dispatch: Dispatch) => {
  dispatch(showLoadingAction());
  getUserPosts(currentPage, perPageLimit, id)
    .then((response) => {
      dispatch(updateUserPostsAction(response));
      dispatch(hideUserPostsErrorAction());
      dispatch(hideLoadingAction());
    })
    .catch(() => {
      dispatch(showUserPostsErrorAction());
      dispatch(hideLoadingAction());
    });
};
