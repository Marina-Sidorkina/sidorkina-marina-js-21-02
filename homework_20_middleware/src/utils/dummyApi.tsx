interface IUserFormData {
  title?: string;
  firstName: string;
  lastName: string;
  gender?: string;
  email: string;
  dateOfBirth?: string;
  phone?: string;
  picture?: string;
  city?: string;
  country?: string;
}

export const createNewUser = (data: IUserFormData) => ({
  firstName: data.firstName,
  lastName: data.lastName,
  email: data.email,
  dateOfBirth: data.dateOfBirth ? data.dateOfBirth : undefined,
  gender: data.gender ? data.gender : undefined,
  location: (data.city || data.country) ? {
    city: data.city ? data.city : undefined,
    country: data.country ? data.country : undefined,
  } : undefined,
  phone: data.phone ? data.phone : undefined,
  picture: data.picture ? data.picture : undefined,
  title: data.title ? data.title : undefined,
});
