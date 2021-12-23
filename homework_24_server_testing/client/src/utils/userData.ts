import { IMAGE_CHANGE_CHECK_VALUE } from '../constants/components';

interface IUpdatedUserData {
  picture?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  dateOfBirth?: string;
  registerDate?: string;
  email?: string;
  phone?: string;
}

const SETTING = {
  test: 'женский ',
  testCreate: 'Женский',
  female: 'female',
  male: 'male',
  firstNameIndex: 0,
  lastNameIndex: 1
};

export const createNewUserData = (data: any) => ({
  firstName: data.registration__name.split(' ')[SETTING.firstNameIndex],
  lastName: data.registration__name.split(' ')[SETTING.lastNameIndex],
  gender: data.registration__gender === SETTING.test ? SETTING.female : SETTING.male,
  dateOfBirth: data.registration__date,
  email: data.registration__email,
  phone: data.registration__tel,
});

export const createUpdatedUserData = (data: any) => {
  const result = {} as IUpdatedUserData;
  if (data.image !== IMAGE_CHANGE_CHECK_VALUE) result.picture = data.image;
  if (data.name) [result.firstName, result.lastName] = data.name.split(' ');
  if (data.gender) result.gender = data.gender === SETTING.testCreate ? SETTING.female : SETTING.male;
  if (data.birthDate) result.dateOfBirth = data.birthDate;
  if (data.registrationDate) result.registerDate = data.registrationDate;
  if (data.email) result.email = data.email;
  if (data.tel) result.phone = data.tel;
  return result;
};
