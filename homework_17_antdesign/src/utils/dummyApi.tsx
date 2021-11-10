import { IUserFormData } from "../@types/interfaces/components";

export const createNewUser = (data: IUserFormData) => {
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    dateOfBirth: data.dateOfBirth ? data.dateOfBirth : undefined,
    gender: data.gender ? data.gender : undefined,
    location: (data.gender || data.country) ? {
      city: data.city ? data.city : undefined,
      country: data.country ? data.country : undefined,
    } : undefined,
    phone: data.phone ? data.phone : undefined,
    picture: data.picture ? data.picture : undefined,
    title: data.title ? data.title : undefined,
  };
}