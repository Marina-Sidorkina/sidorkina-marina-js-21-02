import produce from 'immer';
import {
  CLOSE_USER_MODAL, OPEN_USER_MODAL, HIDE_USER_MODAL_ERROR, HIDE_USER_MODAL_LOADING,
  SHOW_USER_MODAL_ERROR, SHOW_USER_MODAL_LOADING, RESET_USER_MODAL_VALUES, UPDATE_USER_MODAL_DATE_OF_BIRTH,
  UPDATE_USER_MODAL_PHONE, UPDATE_USER_MODAL_GENDER, UPDATE_USER_MODAL_NAME,
  UPDATE_USER_MODAL_PICTURE
} from '../constants/userModalForm';

const initialState = {
  values: {
    name: '',
    gender: '',
    dateOfBirth: '',
    registrationDate: '',
    email: '',
    phone: '',
    picture: ''
  },
  error: false,
  isLoading: false,
  isOpened: false
};

const resetValues = (draft: any) => {
  draft.values.name = '';
  draft.values.gender = '';
  draft.values.dateOfBirth = '';
  draft.values.registrationDate = '';
  draft.values.email = '';
  draft.values.phone = '';
  draft.values.picture = '';

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

const userModalReducer = (state = initialState, action: any) => produce(state, (draft: any) => {
  switch (action.type) {
    case OPEN_USER_MODAL:
      draft.isOpened = true;
      return draft;
    case CLOSE_USER_MODAL:
      draft.isOpened = false;
      return draft;
    case UPDATE_USER_MODAL_NAME:
      draft.values.name = action.payload;
      return draft;
    case UPDATE_USER_MODAL_GENDER:
      draft.values.gender = action.payload;
      return draft;
    case UPDATE_USER_MODAL_DATE_OF_BIRTH:
      draft.values.dateOfBirth = action.payload;
      return draft;
    case UPDATE_USER_MODAL_PHONE:
      draft.values.phone = action.payload;
      return draft;
    case UPDATE_USER_MODAL_PICTURE:
      draft.values.picture = action.payload;
      return draft;
    case RESET_USER_MODAL_VALUES:
      return resetValues(draft);
    case SHOW_USER_MODAL_ERROR:
      draft.error = true;
      return draft;
    case HIDE_USER_MODAL_ERROR:
      draft.error = false;
      return draft;
    case SHOW_USER_MODAL_LOADING:
      return showIsLoading(draft);
    case HIDE_USER_MODAL_LOADING:
      return hideIsLoading(draft);
    default:
      return state;
  }
});

export default userModalReducer;
