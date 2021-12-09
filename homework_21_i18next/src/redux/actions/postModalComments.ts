import { Dispatch } from 'redux';
import { IDummyComment } from '../../api/dummyApi/@types/dummyApi';
import {
  UPDATE_POST_MODAL_COMMENTS,
  SHOW_POST_MODAL_COMMENTS_ERROR,
  HIDE_POST_MODAL_COMMENTS_LOADING,
  UPDATE_POST_MODAL_COMMENTS_PAGE,
  HIDE_POST_MODAL_COMMENTS_ERROR,
  SHOW_POST_MODAL_COMMENTS_LOADING,
  UPDATE_POST_MODAL_TOTAL_COMMENTS
} from '../constants/postModalComments';
import { getCommentsList } from '../../api/dummyApi/dummyApi';

export const showPostModalCommentsLoadingAction = () => ({
  type: SHOW_POST_MODAL_COMMENTS_LOADING
});

export const hidePostModalCommentsLoadingAction = () => ({
  type: HIDE_POST_MODAL_COMMENTS_LOADING
});

export const showPostModalCommentsErrorAction = () => ({
  type: SHOW_POST_MODAL_COMMENTS_ERROR
});

export const hidePostModalCommentsErrorAction = () => ({
  type: HIDE_POST_MODAL_COMMENTS_ERROR
});

export const updatePostModalCommentsAction = (comments: IDummyComment[]) => ({
  type: UPDATE_POST_MODAL_COMMENTS,
  payload: comments
});

export const updatePostModalCommentsPageAction = (page: number) => ({
  type: UPDATE_POST_MODAL_COMMENTS_PAGE,
  page
});

export const updatePostModalCommentsTotalAction = (total: number) => ({
  type: UPDATE_POST_MODAL_TOTAL_COMMENTS,
  total
});

export const getPostModalCommentsListAction = (page: number,
  limit: number,
  id: string) => (dispatch: Dispatch) => {
  dispatch(showPostModalCommentsLoadingAction());
  getCommentsList(page, limit, id)
    .then((response) => {
      dispatch(hidePostModalCommentsLoadingAction());
      dispatch(updatePostModalCommentsAction(response.data));
      dispatch(hidePostModalCommentsErrorAction());
      dispatch(updatePostModalCommentsTotalAction(response.total));
    })
    .catch(() => {
      dispatch(showPostModalCommentsErrorAction());
      dispatch(hidePostModalCommentsLoadingAction());
    });
};
