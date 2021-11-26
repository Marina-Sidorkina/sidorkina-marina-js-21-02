import { Dispatch } from 'redux';
import {
  CLOSE_USER_MODAL, OPEN_USER_MODAL, HIDE_USER_MODAL_ERROR, HIDE_USER_MODAL_LOADING,
  SHOW_USER_MODAL_ERROR, SHOW_USER_MODAL_LOADING, RESET_USER_MODAL_VALUES, UPDATE_USER_MODAL_DATE_OF_BIRTH,
  UPDATE_USER_MODAL_PHONE, UPDATE_USER_MODAL_GENDER, UPDATE_USER_MODAL_NAME,
  UPDATE_USER_MODAL_PICTURE
} from '../constants/userModalForm';
import { setFormData } from '../../utils/formData';
import { getImgLink } from '../../api/imgbbApi/imgbbApi';
import { IMGBB_API_METHOD } from '../../api/imgbbApi/constants/imgbbApi';

export const showUserModalErrorAction = () => ({
  type: SHOW_USER_MODAL_ERROR
});

export const hideUserModalErrorAction = () => ({
  type: HIDE_USER_MODAL_ERROR
});

export const showLoadingAction = () => ({
  type: SHOW_USER_MODAL_LOADING,
});

export const hideLoadingAction = () => ({
  type: HIDE_USER_MODAL_LOADING,
});

export const updateUserModalNameAction = (value: string) => ({
  type: UPDATE_USER_MODAL_NAME,
  payload: value
});

export const updateUserModalGenderAction = (value: string) => ({
  type: UPDATE_USER_MODAL_GENDER,
  payload: value
});

export const updateUserModalDateOfBirthAction = (value: string) => ({
  type: UPDATE_USER_MODAL_DATE_OF_BIRTH,
  payload: value
});

export const updateUserModalPhoneAction = (value: string) => ({
  type: UPDATE_USER_MODAL_PHONE,
  payload: value
});

export const updateUserModalPictureAction = (value: string) => ({
  type: UPDATE_USER_MODAL_PICTURE,
  payload: value
});

export const resetValuesAction = () => ({
  type: RESET_USER_MODAL_VALUES
});

export const openUserModalAction = () => ({
  type: OPEN_USER_MODAL
});

export const closeUserModalAction = () => ({
  type: CLOSE_USER_MODAL
});

export const processUserModalPicture = (value: any) => (dispatch: Dispatch) => {
  dispatch(showLoadingAction());
  const reader = new FileReader();
  reader.readAsDataURL(value);
  reader.onload = () => {
    const formData = setFormData(reader);
    dispatch(hideUserModalErrorAction());
    getImgLink({ method: IMGBB_API_METHOD, body: formData })
      .then((response) => {
        dispatch(updateUserModalPictureAction(response.data.display_url));
        dispatch(hideLoadingAction());
      })
      .catch(() => {
        dispatch(showUserModalErrorAction());
        dispatch(hideLoadingAction());
      });
  };
};
