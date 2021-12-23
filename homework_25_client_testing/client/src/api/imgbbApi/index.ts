import axios from 'axios';
import { IMGBB_API_CONFIG } from './config';

export const getImgLink = (options: Object) => axios({
  [IMGBB_API_CONFIG.fields.method]: IMGBB_API_CONFIG.method,
  [IMGBB_API_CONFIG.fields.url]: IMGBB_API_CONFIG.url,
  [IMGBB_API_CONFIG.fields.data]: options,
  [IMGBB_API_CONFIG.fields.headers]: IMGBB_API_CONFIG.contentType
});
