import { IDummyUserFull } from '../../../../../api/dummyApi/@types/dummyApi';

export interface IUserModalFormProps {
  user: IDummyUserFull;
  nameValue: string;
  genderValue: string;
  dateOfBirthValue: string;
  registrationDateValue: string;
  emailValue: string;
  phoneValue: string;
  updateNameValue: Function;
  updateGenderValue: Function;
  updateDateOfBirthValue: Function;
  updatePhoneValue: Function;
  updatePictureValue: Function;
  pictureValue: string;
  resetImage: Function;
  resetValues: Function;
  isOpened: boolean;
  updateUserInfo: Function;
  closeModal: Function;
  updateAuthorizedUserData: Function;
  showLoading: Function;
  hideLoading: Function;
  error: boolean;
  showUserModalError: Function;
  hideUserModalError: Function;
}

export interface IUserFormValues {
  name: string;
  gender: string;
  birthDate: string;
  registrationDate: string;
  email: string;
  tel: string;
}
