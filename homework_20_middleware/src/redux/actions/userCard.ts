import { Dispatch } from 'redux';
import {
  LOAD_USER_CARD_ERROR, HIDE_USER_CARD_LOADING, SHOW_USER_CARD_LOADING, LOAD_USER_CARD
} from '../constants/userCard';
import { IDummyUserCard } from '../../@types/interfaces/dummyApi';
import { getUserCard } from '../../api/dummyApi';
import { updateIsLoadingAction } from './app';

export const updateUserCardAction = (response: IDummyUserCard) => ({
  type: LOAD_USER_CARD,
  payload: response,
});

const loadErrorAction = (error: string) => ({
  type: LOAD_USER_CARD_ERROR,
  error,
});

const showLoadingAction = () => ({
  type: SHOW_USER_CARD_LOADING,
});

const hideLoadingAction = () => ({
  type: HIDE_USER_CARD_LOADING,
});

export const loadUserCard = (paramsId: string) => (dispatch: Dispatch) => {
  dispatch(showLoadingAction());
  dispatch(updateIsLoadingAction(true));
  getUserCard(paramsId)
    .then((response) => dispatch(updateUserCardAction(response)))
    .catch((error) => dispatch(loadErrorAction(error)))
    .finally(() => {
      dispatch(updateIsLoadingAction(false));
      dispatch(hideLoadingAction());
    });
};
