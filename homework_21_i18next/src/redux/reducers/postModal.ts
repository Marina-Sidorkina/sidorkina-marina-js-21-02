import produce from 'immer';
import { CLOSE_POST_MODAL, OPEN_POST_MODAL, SET_POST_MODAL_CURRENT_ID } from '../constants/postModal';

export const initialState = {
  isOpened: false,
  currentPostId: ''
};

const postModalReducer = (state = initialState, action: any) => produce(state, (draft: any) => {
  switch (action.type) {
    case OPEN_POST_MODAL:
      draft.isOpened = true;
      return draft;
    case CLOSE_POST_MODAL:
      draft.isOpened = false;
      return draft;
    case SET_POST_MODAL_CURRENT_ID:
      draft.currentPostId = action.payload;
      return draft;
    default:
      return state;
  }
});

export default postModalReducer;
