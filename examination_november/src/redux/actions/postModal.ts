import { OPEN_POST_MODAL, CLOSE_POST_MODAL, SET_POST_MODAL_CURRENT_ID } from '../constants/postModal';

export const openPostModalAction = () => ({
  type: OPEN_POST_MODAL
});

export const closePostModalAction = () => ({
  type: CLOSE_POST_MODAL
});

export const setPostModalCurrenIdAction = (id: string) => ({
  type: SET_POST_MODAL_CURRENT_ID,
  payload: id
});
