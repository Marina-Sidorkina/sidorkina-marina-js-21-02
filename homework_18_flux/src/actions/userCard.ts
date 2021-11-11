import dispatcher from "../dispatcher";
import { LOAD_USER_CARD, LOAD_USER_CARD_SUCCESS } from "../constants/actions/userCard";
import { getUserCard } from "../api/dummyApi";

export const loadUserCardAction = (id: string) => {
  dispatcher.dispatch({
    type: LOAD_USER_CARD,
  });

  getUserCard(id)
    .then((response) => {
      dispatcher.dispatch({
        type: LOAD_USER_CARD_SUCCESS,
        payload: response,
      })
    });
}
