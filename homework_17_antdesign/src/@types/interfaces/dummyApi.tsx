export interface IDummyUser {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  index: number;
}

export interface IDummyApiResponse {
  data: IDummyUser[];
  limit: number;
  page: number;
  total: number;
}

export interface IDummyUserCard {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
  };
}

export interface INewUserData {
  dateOfBirth?: string;
  email: string;
  firstName: string;
  gender?: string;
  lastName: string;
  location?: {
    city?: string;
    country?: string;
  };
  phone?: string;
  picture?: string;
  title?: string;
}
