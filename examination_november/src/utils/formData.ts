import { IMGBB_API_KEY } from '../constants/imgbbApi';

export const setFormData = (data: any) => {
  const formData = new FormData();
  formData.set('key', IMGBB_API_KEY);
  formData.set('image', data.result.replace(/^.*,/, ''));
  return formData;
};
