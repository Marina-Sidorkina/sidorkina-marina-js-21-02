import { createFetch } from "../utils/create-fetch.js";
import { API_URL } from "../constants/imgbb.js";
import {updateImgArr, updateLocalStorage} from "../services/local-storage.js";
import {addImg} from "../components/gallery-list.js";
import {clearFormInfo} from "../components/form-info.js";
import { stopLoader } from "../components/loader.js";

export const imgbb = {
  getImageUrl: createFetch(API_URL),
  onSuccess: (response) => {
    updateImgArr(response.data.display_url);
    updateLocalStorage();
    addImg(response.data.display_url);
    clearFormInfo();
    stopLoader();
  },
  onError: (error) => {
    console.log(error);
    stopLoader();
  }
}
