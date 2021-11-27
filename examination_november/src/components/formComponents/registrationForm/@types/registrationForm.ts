export interface IRegistrationFormProps {
  authorize: Function;
  resetValues: Function;
  updateDateOfBirth: Function;
  updateEmail: Function;
  updateGender: Function;
  updateName: Function;
  updatePhone: Function;
  name: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  phone: string;
  hideRegistrationError: Function;
  showRegistrationError: Function;
  error: string;
  isLoading: boolean;
  hideLoading: Function;
  showLoading: Function;
}
