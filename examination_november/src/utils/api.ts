export const getUserPostsUrl = (id: string) => `user/${id}/post`;

export const createNewUser = (data: any) => ({
  firstName: data.registration__name.split(' ')[0],
  lastName: data.registration__name.split(' ')[1],
  gender: data.registration__gender === 'женский ' ? 'female' : 'male',
  dateOfBirth: data.registration__date,
  email: data.registration__email,
  phone: data.registration__tel,
});
