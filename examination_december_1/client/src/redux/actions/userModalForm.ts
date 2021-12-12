import { Dispatch } from 'redux';
import {
  CLOSE_USER_MODAL, OPEN_USER_MODAL, HIDE_USER_MODAL_ERROR, HIDE_USER_MODAL_LOADING,
  SHOW_USER_MODAL_ERROR, SHOW_USER_MODAL_LOADING, RESET_USER_MODAL_VALUES, UPDATE_USER_MODAL_DATE_OF_BIRTH,
  UPDATE_USER_MODAL_PHONE, UPDATE_USER_MODAL_GENDER, UPDATE_USER_MODAL_NAME,
  UPDATE_USER_MODAL_PICTURE
} from '../constants/userModalForm';
import { setFormData } from '../../utils/formData';
import { getImgLink } from '../../api/imgbbApi';
import { IUserFormValues }
  from '../../components/modalComponents/userModalComponents/userModalForm/@types/userModalForm';
import { createUpdatedUserData } from '../../utils/api';
import { DEFAULT_IMAGE, IMAGE_CHANGE_CHECK_VALUE } from '../../constants/components';
import { isEmptyObject } from '../../utils/components';
import { updateUser } from '../../api/proxy';
import { updateUserCardAction } from './userInfo';
import { updateAuthorizedUserDataAction } from './login';
import { getExpirationDate } from '../../utils/redux';

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
    getImgLink(formData)
      .then((response) => {
        dispatch(updateUserModalPictureAction(response.data.data.display_url));
        dispatch(hideLoadingAction());
      })
      .catch(() => {
        dispatch(showUserModalErrorAction());
        dispatch(hideLoadingAction());
      });
  };
};

export const processUserModalFormAction = (
  values: IUserFormValues,
  userModalPicture: string,
  userInfoPicture: string,
  userInfoId: string,
  form: any
) => (dispatch: Dispatch) => {
  const updatedData = createUpdatedUserData({
    ...values,
    image: userModalPicture === userInfoPicture
      ? IMAGE_CHANGE_CHECK_VALUE
      : userModalPicture
  });
  if (!isEmptyObject(updatedData)) {
    dispatch(showLoadingAction());
    updateUser(updatedData, userInfoId)
      .then((response) => {
        dispatch(updateUserCardAction(response.data.data));
        dispatch(updateAuthorizedUserDataAction(response.data.data));
        dispatch(closeUserModalAction());
        dispatch(hideLoadingAction());
        dispatch(hideUserModalErrorAction());
        document.cookie = `picture=${response.data.data.picture
        || DEFAULT_IMAGE}; path=/; expires=${getExpirationDate()}`;
        document.cookie = `name=${response.data.data.firstName}; path=/; expires=${getExpirationDate()}`;
      })
      .catch(() => {
        dispatch(hideLoadingAction());
        dispatch(showUserModalErrorAction());
      });
  }
  form.resetFields();
};
