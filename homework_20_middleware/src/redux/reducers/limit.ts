import produce from "immer";
import { UPDATE_LIMITS } from "../constants/limit";
import {ILimitActionType} from "../@types/actions";

const initialState = {
  limits: [
    [10, "elements"],
    [20, "elements"],
    [5, "elements"]
  ]
}

const updateLimits = (perPageLimit: number, draft: any) => {
  let startIndex = 0;

  draft.limits.forEach((item: any,index: any) => {
    if(item[0] === perPageLimit) {
      startIndex = index
    }
  });

  draft.limits = [draft.limits.splice(startIndex, 1)[0], ...draft.limits];

  return draft;
}

const limitReducer = (state = initialState, action: ILimitActionType) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case UPDATE_LIMITS:
        return updateLimits(action.payload, draft);
      default:
        return state;
  }
  });

export default limitReducer;
