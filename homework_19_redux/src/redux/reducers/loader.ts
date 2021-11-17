import produce from "immer";
import { CHANGE_LOADER_WIDTH } from "../constants/loader";
import {ILoaderActionType} from "../@types/actions";

const initialState = {
  width: 0
}

const loaderReducer = (state = initialState, action: ILoaderActionType) =>
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
