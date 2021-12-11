import produce from 'immer';
import { IDummyComment, IDummyOwner } from '../../api/proxy/@types/proxy';
import { IPostModalCommentsActionType } from '../@types/actions';
import {
  UPDATE_POST_MODAL_COMMENTS_PAGE,
  HIDE_POST_MODAL_COMMENTS_ERROR,
  HIDE_POST_MODAL_COMMENTS_LOADING,
  UPDATE_POST_MODAL_COMMENTS,
  SHOW_POST_MODAL_COMMENTS_ERROR,
  SHOW_POST_MODAL_COMMENTS_LOADING,
  UPDATE_POST_MODAL_TOTAL_COMMENTS
} from '../constants/postModalComments';

interface IPostModalDraft {
  error: boolean;
  isLoading: boolean;
  comments: IDummyComment[];
  owners: IDummyOwner[];
  page: number;
  limit: number;
  totalComments: number;
}

const initialState = {
  error: false,
  isLoading: false,
  comments: [] as IDummyComment[],
  owners: [] as IDummyOwner[],
  page: 1,
  limit: 6,
  totalComments: 0
};

const updateComments = (draft: IPostModalDraft, payload: IDummyComment[]) => {
  if (payload.length) {
    draft.comments = payload;
    payload.forEach((comment) => {
      draft.owners.push(comment.owner);
    });
  } else {
    draft.comments = [];
    draft.owners = [];
  }
  return draft;
};

const postModalCommentsReducer = (state = initialState,
  action: IPostModalCommentsActionType) => produce(state,
  (draft: IPostModalDraft) => {
    switch (action.type) {
      case UPDATE_POST_MODAL_COMMENTS:
        return updateComments(draft, action.payload);
      case SHOW_POST_MODAL_COMMENTS_LOADING:
        draft.isLoading = true;
        return draft;
      case HIDE_POST_MODAL_COMMENTS_LOADING:
        draft.isLoading = false;
        return draft;
      case SHOW_POST_MODAL_COMMENTS_ERROR:
        draft.error = true;
        return draft;
      case HIDE_POST_MODAL_COMMENTS_ERROR:
        draft.error = false;
        return draft;
      case UPDATE_POST_MODAL_COMMENTS_PAGE:
        draft.page = action.page;
        return draft;
      case UPDATE_POST_MODAL_TOTAL_COMMENTS:
        draft.totalComments = action.total;
        return draft;
      default:
        return state;
    }
  });

export default postModalCommentsReducer;
