import { API_KEY } from "../constants/imgbb.js";

export const setFormData = (data) => {
  const formData = new FormData();
  formData.set("key", API_KEY);
  formData.set("image", data.result.replace(/^.*,/, ""));
  return formData;
}
