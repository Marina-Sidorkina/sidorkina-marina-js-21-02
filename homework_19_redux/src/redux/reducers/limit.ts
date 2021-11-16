import produce from "immer";
import { UPDATE_LIMITS } from "../constants/limit";

const initialState = {
  limits: [
    [10, "elements"],
    [20, "elements"],
    [5, "elements"]
  ]
}

const updateLimits = (perPageLimit: number, limits: any[]) => {
  let startIndex = 0;

  limits.forEach((item,index) => {
    if(item[0] === perPageLimit) {
      startIndex = index
    }
  });

  limits = [limits.splice(startIndex, 1)[0], ...limits];

  return limits;
}

const limitReducer = (state = initialState, action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case UPDATE_LIMITS:
        return updateLimits(action.payload, draft);
      default:
        return state;
  }
  });

export default limitReducer;
