import { UPDATE_LIMITS } from '../constants/limit';

export const updateLimitsAction = (value: number) => ({
  type: UPDATE_LIMITS,
  payload: value
});
