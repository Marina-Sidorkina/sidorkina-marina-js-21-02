import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import {
  HIDE_POST_MODAL_POST_LOADING, SHOW_POST_MODAL_POST_LOADING, HIDE_POST_MODAL_POST_ERROR,
  SHOW_POST_MODAL_POST_ERROR, UPDATE_POST_MODAL_POST
} from '../constants/postModalPost';
import { getPostInfo } from '../../api/proxy';

export const showPostModalPostLoading = () => ({
  type: SHOW_POST_MODAL_POST_LOADING
});

export const hidePostModalPostLoading = () => ({
  type: HIDE_POST_MODAL_POST_LOADING
});

export const showPostModalPostError = () => ({
  type: SHOW_POST_MODAL_POST_ERROR
});

export const hidePostModalPostError = () => ({
  type: HIDE_POST_MODAL_POST_ERROR
});

export const updatePostModalPost = (post: AxiosResponse<any, any>) => ({
  type: UPDATE_POST_MODAL_POST,
  payload: post
});

export const getNewPostModalPost = (id: string) => (dispatch: Dispatch) => {
  dispatch(hidePostModalPostError());
  dispatch(showPostModalPostLoading());
  getPostInfo(id)
    .then((response) => {
      dispatch(hidePostModalPostLoading());
      dispatch(updatePostModalPost(response.data.data));
      dispatch(hidePostModalPostError());
    })
    .catch(() => {
      dispatch(hidePostModalPostLoading());
      dispatch(showPostModalPostError());
    });
};
