import { Dispatch } from 'redux';
import { IProxyComment } from '../../api/proxy/@types/proxy';
import {
  UPDATE_POST_MODAL_COMMENTS,
  SHOW_POST_MODAL_COMMENTS_ERROR,
  HIDE_POST_MODAL_COMMENTS_LOADING,
  UPDATE_POST_MODAL_COMMENTS_PAGE,
  HIDE_POST_MODAL_COMMENTS_ERROR,
  SHOW_POST_MODAL_COMMENTS_LOADING,
  UPDATE_POST_MODAL_TOTAL_COMMENTS
} from '../constants/postModalComments';
import { getCommentsList } from '../../api/proxy';

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

export const updatePostModalCommentsAction = (comments: IProxyComment[]) => ({
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
      dispatch(updatePostModalCommentsAction(response.data.data.data));
      dispatch(hidePostModalCommentsErrorAction());
      dispatch(updatePostModalCommentsTotalAction(response.data.data.total));
    })
    .catch(() => {
      dispatch(showPostModalCommentsErrorAction());
      dispatch(hidePostModalCommentsLoadingAction());
    });
};
