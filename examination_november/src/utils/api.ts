import { imageChangeCheckValue } from '../constants/components';

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

export const getUserPostsUrl = (id: string) => `user/${id}/post`;

export const createNewUser = (data: any) => ({
  firstName: data.registration__name.split(' ')[0],
  lastName: data.registration__name.split(' ')[1],
  gender: data.registration__gender === 'женский ' ? 'female' : 'male',
  dateOfBirth: data.registration__date,
  email: data.registration__email,
  phone: data.registration__tel,
});

export const createUpdatedUserData = (data: any) => {
  const result = {} as IUpdatedUserData;
  if (data.image !== imageChangeCheckValue) result.picture = data.image;
  if (data.name) [result.firstName, result.lastName] = data.name.split(' ');
  if (data.gender) result.gender = data.gender === 'Женский' ? 'female' : 'male';
  if (data.birthDate) result.dateOfBirth = data.birthDate;
  if (data.registrationDate) result.registerDate = data.birthDate;
  if (data.email) result.email = data.email;
  if (data.tel) result.phone = data.tel;
  return result;
};
