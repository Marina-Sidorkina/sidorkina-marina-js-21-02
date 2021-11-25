import { IMGBB_API_URL } from '../constants/imgbbApi';

export const getImgLink = (options: Object) => fetch(IMGBB_API_URL, options)
  .then((response) => response.json());
