import { LOAD_USER_CARD, TOGGLE_USER_CARD_LOADING } from "../constants/userCard";
import { IDummyUserCard } from "../../@types/interfaces/dummyApi";

export const updateUserCardAction = (response: IDummyUserCard) => {
  return {
    type: LOAD_USER_CARD,
    payload: response,
  }
}

export const toggleUserCardLoadingAction = () => {
  return {
    type: TOGGLE_USER_CARD_LOADING
  }
}
