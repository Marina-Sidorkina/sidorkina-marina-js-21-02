import dispatcher from "../dispatcher";
import { UPDATE_LIMITS } from "../constants/actions/limit";

export const updateLimitsAction = (value: number) => {
  dispatcher.dispatch({
    type: UPDATE_LIMITS,
    payload: value
  });
}
