import dispatcher from "../dispatcher";
import {
  UPDATE_DATE_OF_BIRTH,
  UPDATE_EMAIL,
  UPDATE_FIRST_NAME,
  UPDATE_GENDER,
  UPDATE_LAST_NAME,
  UPDATE_TITLE,
  UPDATE_CITY,
  UPDATE_COUNTRY,
  UPDATE_PHONE,
  UPDATE_PICTURE
} from "../constants/actions/registration";

export const updateFirstNameAction = (value: string) => {
  dispatcher.dispatch({
    type: UPDATE_FIRST_NAME,
    payload: value
  });
}

export const updateLastNameAction = (value: string) => {
  dispatcher.dispatch({
    type: UPDATE_LAST_NAME,
    payload: value
  });
}

export const updateEmailAction = (value: string) => {
  dispatcher.dispatch({
    type: UPDATE_EMAIL,
    payload: value
  });
}

export const updateGenderAction = (value: string) => {
  dispatcher.dispatch({
    type: UPDATE_GENDER,
    payload: value
  });
}

export const updateTitleAction = (value: string) => {
  dispatcher.dispatch({
    type: UPDATE_TITLE,
    payload: value
  });
}

export const updateDateOfBirthAction = (value: string) => {
  dispatcher.dispatch({
    type: UPDATE_DATE_OF_BIRTH,
    payload: value
  });
}

export const updateCountryAction = (value: string) => {
  dispatcher.dispatch({
    type: UPDATE_COUNTRY,
    payload: value
  });
}

export const updateCityAction = (value: string) => {
  dispatcher.dispatch({
    type: UPDATE_CITY,
    payload: value
  });
}

export const updatePhoneAction = (value: string) => {
  dispatcher.dispatch({
    type: UPDATE_PHONE,
    payload: value
  });
}

export const updatePictureAction = (value: string) => {
  dispatcher.dispatch({
    type: UPDATE_PICTURE,
    payload: value
  });
}