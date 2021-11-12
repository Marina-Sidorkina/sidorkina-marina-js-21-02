import dispatcher from "../dispatcher";
import { LOAD_USER_CARD, LOAD_USER_CARD_SUCCESS } from "../constants/actions/userCard";
import { getUserCard } from "../api/dummyApi";
import {updateIsLoadingAction} from "./app";

export const loadUserCardAction = (id: string) => {
  dispatcher.dispatch({
    type: LOAD_USER_CARD,
  });

  updateIsLoadingAction(true);

  getUserCard(id)
    .then((response) => {
      updateIsLoadingAction(false);
      dispatcher.dispatch({
        type: LOAD_USER_CARD_SUCCESS,
        payload: response,
      })
    });
}
