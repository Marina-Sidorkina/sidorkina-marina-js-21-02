import {
  UPDATE_CITY,
  UPDATE_COUNTRY,
  UPDATE_DATE_OF_BIRTH,
  UPDATE_EMAIL,
  UPDATE_FIRST_NAME,
  UPDATE_GENDER,
  UPDATE_LAST_NAME, UPDATE_PHONE, UPDATE_PICTURE,
  UPDATE_TITLE
} from "../constants/registration";

export const updateFirstNameAction = (value: string) => {
  return {
    type: UPDATE_FIRST_NAME,
    payload: value
  }
}

export const updateLastNameAction = (value: string) => {
  return {
    type: UPDATE_LAST_NAME,
    payload: value
  }
}

export const updateEmailAction = (value: string) => {
  return {
    type: UPDATE_EMAIL,
    payload: value
  }
}

export const updateGenderAction = (value: string) => {
  return {
    type: UPDATE_GENDER,
    payload: value
  }
}

export const updateTitleAction = (value: string) => {
  return {
    type: UPDATE_TITLE,
    payload: value
  }
}

export const updateDateOfBirthAction = (value: string) => {
  return {
    type: UPDATE_DATE_OF_BIRTH,
    payload: value
  }
}

export const updateCountryAction = (value: string) => {
  return {
    type: UPDATE_COUNTRY,
    payload: value
  }
}

export const updateCityAction = (value: string) => {
  return {
    type: UPDATE_CITY,
    payload: value
  }
}

export const updatePhoneAction = (value: string) => {
  return {
    type: UPDATE_PHONE,
    payload: value
  }
}

export const updatePictureAction = (value: string) => {
  return {
    type: UPDATE_PICTURE,
    payload: value
  }
}
