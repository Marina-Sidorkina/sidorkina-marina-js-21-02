import produce from 'immer';
import {
  UPDATE_REGISTRATION_NAME, UPDATE_REGISTRATION_EMAIL, UPDATE_REGISTRATION_GENDER,
  UPDATE_REGISTRATION_DATE_OF_BIRTH, UPDATE_REGISTRATION_PHONE, RESET_REGISTRATION_VALUES,
  SHOW_REGISTRATION_ERROR, HIDE_REGISTRATION_ERROR, SHOW_REGISTRATION_LOADING,
  HIDE_REGISTRATION_LOADING
} from '../constants/registrationForm';

const initialState = {
  values: {
    name: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    phone: '',
  },
  error: false,
  isLoading: false
};

const resetValues = (draft: any) => {
  draft.values = {
    name: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    phone: '',
  };
  return draft;
};

const showIsLoading = (draft: any) => {
  draft.isLoading = true;
  draft.error = false;
  return draft;
};

const hideIsLoading = (draft: any) => {
  draft.isLoading = false;
  return draft;
};

const registrationFormReducer = (state = initialState, action: any) => produce(state, (draft: any) => {
  switch (action.type) {
    case UPDATE_REGISTRATION_NAME:
      draft.values.name = action.payload;
      return draft;
    case UPDATE_REGISTRATION_EMAIL:
      draft.values.email = action.payload;
      return draft;
    case UPDATE_REGISTRATION_GENDER:
      draft.values.gender = action.payload;
      return draft;
    case UPDATE_REGISTRATION_DATE_OF_BIRTH:
      draft.values.dateOfBirth = action.payload;
      return draft;
    case RESET_REGISTRATION_VALUES:
      return resetValues(draft);
    case UPDATE_REGISTRATION_PHONE:
      draft.values.phone = action.payload;
      return draft;
    case SHOW_REGISTRATION_ERROR:
      draft.error = true;
      return draft;
    case HIDE_REGISTRATION_ERROR:
      draft.error = false;
      return draft;
    case SHOW_REGISTRATION_LOADING:
      return showIsLoading(draft);
    case HIDE_REGISTRATION_LOADING:
      return hideIsLoading(draft);
    default:
      return state;
  }
});

export default registrationFormReducer;
