import {
  UPDATE_REGISTRATION_NAME, UPDATE_REGISTRATION_EMAIL, UPDATE_REGISTRATION_GENDER,
  UPDATE_REGISTRATION_DATE_OF_BIRTH, UPDATE_REGISTRATION_PHONE, RESET_REGISTRATION_VALUES,
  SHOW_REGISTRATION_ERROR, HIDE_REGISTRATION_ERROR, SHOW_REGISTRATION_LOADING,
  HIDE_REGISTRATION_LOADING
} from '../constants/registrationForm';

export const showRegistrationErrorAction = () => ({
  type: SHOW_REGISTRATION_ERROR
});

export const hideRegistrationErrorAction = () => ({
  type: HIDE_REGISTRATION_ERROR
});

export const updateNameAction = (value: string) => ({
  type: UPDATE_REGISTRATION_NAME,
  payload: value
});

export const updateEmailAction = (value: string) => ({
  type: UPDATE_REGISTRATION_EMAIL,
  payload: value
});

export const updateGenderAction = (value: string) => ({
  type: UPDATE_REGISTRATION_GENDER,
  payload: value
});

export const updateDateOfBirthAction = (value: string) => ({
  type: UPDATE_REGISTRATION_DATE_OF_BIRTH,
  payload: value
});

export const updatePhoneAction = (value: string) => ({
  type: UPDATE_REGISTRATION_PHONE,
  payload: value
});

export const resetValuesAction = () => ({
  type: RESET_REGISTRATION_VALUES
});

export const showLoadingAction = () => ({
  type: SHOW_REGISTRATION_LOADING,
});

export const hideLoadingAction = () => ({
  type: HIDE_REGISTRATION_LOADING,
});
