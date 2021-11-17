import { CHANGE_LOADER_WIDTH } from '../constants/loader';

export const changeLoaderWidthAction = (value: number) => ({
  type: CHANGE_LOADER_WIDTH,
  payload: value
});
