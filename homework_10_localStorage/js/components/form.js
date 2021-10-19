import { processFile } from "../services/file-reader.js";
import { setFormData } from "../services/form-data.js";
import { imgbb } from "../api/imgbb.js";
import { API_METHOD } from "../constants/imgbb.js";

const upload = (file) => {
  const formData = setFormData(file);
  imgbb.getImageUrl(imgbb.onSuccess, imgbb.onError, {method: API_METHOD, body: formData});
}

const processForm = (file) => {
  processFile(file, upload);
}

export const onFormSubmit = (evt, file) => {
  evt.preventDefault();
  if(file) {
    processForm(file);
  }
}
