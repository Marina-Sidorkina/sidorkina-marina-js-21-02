import { LOAD_USER_CARD, TOGGLE_USER_CARD_LOADING } from "../constants/userCard";

export const updateUserCardAction = (response: any) => {
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
