import { UPDATE_LIMITS } from "../constants/limit";

export const updateLimitsAction = (value: number) => {
  return {
    type: UPDATE_LIMITS,
    payload: value
  }
}
