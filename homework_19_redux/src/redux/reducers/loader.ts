import produce from "immer";
import { CHANGE_LOADER_WIDTH } from "../constants/loader";

const initialState = {
  width: 0
}

const loaderReducer = (state = initialState, action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case CHANGE_LOADER_WIDTH:
        draft.width = action.payload;
        return draft;
      default:
        return state;
    }
  });

export default loaderReducer;
