import { IMGBB_API_CONFIG } from '../api/imgbbApi/config';

export const setFormData = (data: any) => {
  const formData = new FormData();
  formData.set('key', IMGBB_API_CONFIG.key);
  formData.set('image', data.result.replace(/^.*,/, ''));
  return formData;
};
