import { CHANGE_LOADER_WIDTH } from "../constants/loader";

export const changeLoaderWidthAction = (value: number) => {
  return {
    type: CHANGE_LOADER_WIDTH,
    payload: value
  }
}
