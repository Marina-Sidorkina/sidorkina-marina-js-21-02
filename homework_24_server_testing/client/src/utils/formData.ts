import { IMGBB_API_CONFIG } from '../api/imgbbApi/config';

const KEY_FILED = 'key';
const IMAGE_FIELD = 'image';

export const setFormData = (data: any) => {
  const formData = new FormData();
  formData.set(KEY_FILED, IMGBB_API_CONFIG.key);
  formData.set(IMAGE_FIELD, data.result.replace(/^.*,/, ''));
  return formData;
};
