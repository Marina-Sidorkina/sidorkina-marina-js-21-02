import dispatcher from "../dispatcher";
import { PROCESS_LOADER_ANIMATION } from "../constants/actions/loader";

export const processLoaderAnimationAction = (value: boolean) => {
  dispatcher.dispatch({
    type: PROCESS_LOADER_ANIMATION,
    payload: value
  });
}
