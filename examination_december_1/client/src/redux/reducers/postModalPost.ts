import produce from 'immer';
import { IProxyOwner, IProxyPostFull } from '../../api/proxy/@types/proxy';
import { IPostModalPostActionType } from '../@types/actions';
import {
  HIDE_POST_MODAL_POST_ERROR,
  HIDE_POST_MODAL_POST_LOADING, SHOW_POST_MODAL_POST_ERROR,
  SHOW_POST_MODAL_POST_LOADING,
  UPDATE_POST_MODAL_POST
} from '../constants/postModalPost';

const initialState = {
  post: {} as IProxyPostFull,
  owner: {} as IProxyOwner,
  error: false,
  isLoading: false
};

const updatePost = (draft: any, payload: IProxyPostFull) => {
  draft.post = payload;
  draft.owner = payload.owner;
  return draft;
};

const postModalPostReducer = (state = initialState,
  action: IPostModalPostActionType) => produce(state,
  (draft: any) => {
    switch (action.type) {
      case UPDATE_POST_MODAL_POST:
        return updatePost(draft, action.payload);
      case SHOW_POST_MODAL_POST_LOADING:
        draft.isLoading = true;
        return draft;
      case HIDE_POST_MODAL_POST_LOADING:
        draft.isLoading = false;
        return draft;
      case SHOW_POST_MODAL_POST_ERROR:
        draft.error = true;
        return draft;
      case HIDE_POST_MODAL_POST_ERROR:
        draft.error = false;
        return draft;
      default:
        return state;
    }
  });

export default postModalPostReducer;
