import {ChangeEvent} from "react";

export const RULES = {
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
      pattern: /^[a-z0-9]+[a-z-_0-9]+[a-z0-9]+@[a-z]+\.[a-z]{3}$/,
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
}

export const REGISTRATION_FORM_SETTINGS: any = {
  firstName: {
    name: "firstName",
    setter: "setFirstName",
    label: "First Name",
    required: true,
    rules: RULES.firstName
  },
  lastName: {
    name: "lastName",
    setter: "setLastName",
    label: "Last Name",
    required: true,
    rules: RULES.firstName
  },
  email: {
    name: "email",
    setter: "setEmail",
    label: "Email",
    required: true,
    rules: RULES.email
  },
  gender: {
    name: "gender",
    setter: "setGender",
    label: "Gender",
    required: false,
    rules: RULES.gender
  },
  title: {
    name: "title",
    setter: "setTitle",
    label: "Title",
    required: false,
    rules: RULES.title
  },
  dateOfBirth: {
    name: "dateOfBirth",
    setter: "setDateOfBirth",
    label: "Birth Date",
    required: false,
    rules: RULES.dateOfBirth
  },
  phone: {
    name: "phone",
    setter: "setPhone",
    label: "Phone",
    required: false,
    rules: RULES.phone
  },
  country: {
    name: "country",
    setter: "setCountry",
    label: "Country",
    required: false,
    rules: []
  },
  city: {
    name: "city",
    setter: "setCity",
    label: "City",
    required: false,
    rules: []
  },
  picture: {
    name: "picture",
    setter: "setPicture",
    label: "Picture",
    required: false,
    rules: []
  },
}
