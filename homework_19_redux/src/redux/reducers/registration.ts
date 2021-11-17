import produce from "immer";
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
import {IRegistrationActionType} from "../@types/actions";

const initialState = {
  values: {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    title: "",
    dateOfBirth: "",
    country: "",
    city: "",
    phone: "",
    picture: ""
  }
};

const registrationReducer = (state = initialState, action: IRegistrationActionType) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case UPDATE_FIRST_NAME:
        draft.values.firstName = action.payload;
        return draft;
      case UPDATE_LAST_NAME:
        draft.values.lastName = action.payload;
        return draft;
      case UPDATE_EMAIL:
        draft.values.email = action.payload;
        return draft;
      case UPDATE_GENDER:
        draft.values.gender = action.payload;
        return draft;
      case UPDATE_TITLE:
        draft.values.title = action.payload;
        return draft;
      case UPDATE_DATE_OF_BIRTH:
        draft.values.dateOfBirth = action.payload;
        return draft;
      case UPDATE_COUNTRY:
        draft.values.country = action.payload;
        return draft;
      case UPDATE_CITY:
        draft.values.city = action.payload;
        return draft;
      case UPDATE_PHONE:
        draft.values.phone = action.payload;
        return draft;
      case UPDATE_PICTURE:
        draft.values.picture = action.payload;
        return draft;
      default:
        return state;
    }
});

export default registrationReducer;
