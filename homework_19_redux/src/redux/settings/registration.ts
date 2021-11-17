export const REGISTRATION_SETTINGS = {
  formItems: {
    firstName: {
      name: "firstName",
      label: "First Name",
      required: true,
      rules: [
        { required: true, message: "Please enter your first name" },
        { min: 2, message: "Minimum length is 2" },
        { max: 50, message: "Maximum length is 50" }
      ]
    },
    lastName: {
      name: "lastName",
      label: "Last Name",
      required: true,
      rules: [
        { required: true, message: "Please enter your last name" },
        { min: 2, message: "Minimum length is 2" },
        { max: 50, message: "Maximum length is 50" }
      ]
    },
    email: {
      name: "email",
      label: "Email",
      required: true,
      rules: [
        { required: true, message: "Please enter your email" },
        {
          pattern: /^[a-z0-9]+[a-z-_0-9]+[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
          message: "Format required: (letters and numbers separated by - or _)@(letters).(letters)"
        }
      ]
    },
    gender: {
      name: "gender",
      label: "Gender",
      required: false,
      rules: [
        {
          pattern: /^male|female|other$/,
          message: "Required values: male, female, other"
        }
      ]
    },
    title: {
      name: "title",
      label: "Title",
      required: false,
      rules: [
        {
          pattern: /^mr|ms|mrs|miss|dr$/,
          message: "Required values: mr, ms, mrs, miss, dr"
        }
      ]
    },
    dateOfBirth: {
      name: "dateOfBirth",
      label: "Birth Date",
      required: false,
      rules: [
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
      ]
    },
    phone: {
      name: "phone",
      label: "Phone",
      required: false,
      rules: [
        { min: 5, message: "Minimum length is 5" },
        { max: 20, message: "Maximum length is 20" }
      ]
    },
    country: {
      name: "country",
      label: "Country",
      required: false,
      rules: []
    },
    city: {
      name: "city",
      label: "City",
      required: false,
      rules: []
    },
    picture: {
      name: "picture",
      label: "Picture",
      required: false,
      rules: []
    },
  }
}
