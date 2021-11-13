import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

import {
  UPDATE_DATE_OF_BIRTH,
  UPDATE_EMAIL,
  UPDATE_FIRST_NAME,
  UPDATE_GENDER,
  UPDATE_LAST_NAME,
  UPDATE_TITLE,
  UPDATE_PHONE,
  UPDATE_CITY,
  UPDATE_COUNTRY,
  UPDATE_PICTURE, SEND_FORM_AND_SHOW_USER
} from "../constants/actions/registration";

import {
  updateCityAction,
  updateCountryAction,
  updateDateOfBirthAction,
  updateEmailAction,
  updateFirstNameAction,
  updateGenderAction,
  updateLastNameAction, updatePhoneAction, updatePictureAction, updateTitleAction
} from "../actions/registration";

class RegistrationStore extends EventEmitter {
  private rules;
  private readonly settings: any;
  private values: any;

  constructor() {
    super();
    this.values = {
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
    this.rules = {
      firstName: [
        { required: true, message: "Please enter your first name" },
        { min: 2, message: "Minimum length is 2" },
        { max: 50, message: "Maximum length is 50" }
      ],
      lastName: [
        { required: true, message: "Please enter your last name" },
        { min: 2, message: "Minimum length is 2" },
        { max: 50, message: "Maximum length is 50" }
      ],
      email: [
        { required: true, message: "Please enter your email" },
        {
          pattern: /^[a-z0-9]+[a-z-_0-9]+[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
          message: "Format required: (letters and numbers separated by - or _)@(letters).(letters)"
        }
      ],
      gender: [
        {
          pattern: /^male|female|other$/,
          message: "Required values: male, female, other"
        }
      ],
      title: [
        {
          pattern: /^mr|ms|mrs|miss|dr$/,
          message: "Required values: mr, ms, mrs, miss, dr"
        }
      ],
      dateOfBirth: [
        {
          pattern: /^(0[1-9]|1[012])[.](0[1-9]|[12][0-9]|3[01])[.](19|20)\d\d$/,
          message: "Format required: mm.dd.yyyy"
        },
        {
          validator(rule: any, value: any) {
            const today = new Date();
            const dateArray = value ? value.split(".").map((item: string) => parseInt(item, 10)) : null;
            const check = value ? new Date(dateArray[2], dateArray[0] - 1, dateArray[1]) : null;
            if(check && check > today) {
              return Promise.reject("Invalid date")
            }
            return Promise.resolve();
          }
        }
      ],
      phone: [
        { min: 5, message: "Minimum length is 5" },
        { max: 20, message: "Maximum length is 20" }
      ]
    };
    this.settings = {
      firstName: {
        name: "firstName",
        action: updateFirstNameAction,
        label: "First Name",
        required: true,
        rules: this.rules.firstName
      },
      lastName: {
        name: "lastName",
        action: updateLastNameAction,
        label: "Last Name",
        required: true,
        rules: this.rules.firstName
      },
      email: {
        name: "email",
        action: updateEmailAction,
        label: "Email",
        required: true,
        rules: this.rules.email
      },
      gender: {
        name: "gender",
        action: updateGenderAction,
        label: "Gender",
        required: false,
        rules: this.rules.gender
      },
      title: {
        name: "title",
        action: updateTitleAction,
        label: "Title",
        required: false,
        rules: this.rules.title
      },
      dateOfBirth: {
        name: "dateOfBirth",
        action: updateDateOfBirthAction,
        label: "Birth Date",
        required: false,
        rules: this.rules.dateOfBirth
      },
      phone: {
        name: "phone",
        action: updatePhoneAction,
        label: "Phone",
        required: false,
        rules: this.rules.phone
      },
      country: {
        name: "country",
        action: updateCountryAction,
        label: "Country",
        required: false,
        rules: []
      },
      city: {
        name: "city",
        action: updateCityAction,
        label: "City",
        required: false,
        rules: []
      },
      picture: {
        name: "picture",
        action: updatePictureAction,
        label: "Picture",
        required: false,
        rules: []
      },
    };
    this.getSettings = this.getSettings.bind(this);
    this.getValues = this.getValues.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.onFormSend = this.onFormSend.bind(this);
  }

  getSettings() {
    return this.settings;
  }

  getValues() {
    return this.values;
  }

  onFormSend(id: any, history: any) {
    if(id) {
      history.push(`/user/${ id }`);
    }
  }

  handleAction(action: any) {
    switch (action.type) {
      case UPDATE_FIRST_NAME:
        this.values = { ...this.values, firstName: action.payload };
        this.emit("change");
        break;
      case UPDATE_LAST_NAME:
        this.values = { ...this.values, lastName: action.payload };
        this.emit("change");
        break;
      case UPDATE_EMAIL:
        this.values = { ...this.values, email: action.payload };
        this.emit("change");
        break;
      case UPDATE_GENDER:
        this.values = { ...this.values, gender: action.payload };
        this.emit("change");
        break;
      case UPDATE_TITLE:
        this.values = { ...this.values, title: action.payload };
        this.emit("change");
        break;
      case UPDATE_DATE_OF_BIRTH:
        this.values = { ...this.values, dateOfBirth: action.payload };
        this.emit("change");
        break;
      case UPDATE_COUNTRY:
        this.values = { ...this.values, country: action.payload };
        this.emit("change");
        break;
      case UPDATE_CITY:
        this.values = { ...this.values, city: action.payload };
        this.emit("change");
        break;
      case UPDATE_PHONE:
        this.values = { ...this.values, phone: action.payload };
        this.emit("change");
        break;
      case UPDATE_PICTURE:
        this.values = { ...this.values, picture: action.payload };
        this.emit("change");
        break;
      case SEND_FORM_AND_SHOW_USER:
        this.onFormSend(action.payload.id, action.payload.history);
        this.emit("change");
        break;
    }
  }
}

const registrationStore = new RegistrationStore();

dispatcher.register(registrationStore.handleAction as (payload: unknown) => void);

export default registrationStore;
