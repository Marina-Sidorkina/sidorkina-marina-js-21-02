export interface IProxyUser {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  index: number;
}

export interface IProxyApiResponse {
  data: IProxyUser[];
  limit: number;
  page: number;
  total: number;
}

export interface IProxyUserFull {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: {
    enDate: string;
    ruDate: string
    enDateAndTime: string;
    ruDateAndTime: string;
  };
  registerDate: {
    enDate: string;
    ruDate: string
    enDateAndTime: string;
    ruDateAndTime: string;
  };
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

export interface IProxyPostPreview {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: string[];
  publishDate: {
    enDate: string;
    ruDate: string
    enDateAndTime: string;
    ruDateAndTime: string;
  };
  owner: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
}

export interface IProxyPost {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: string[];
  publishDate: {
    enDate: string;
    ruDate: string
    enDateAndTime: string;
    ruDateAndTime: string;
  };
  owner: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
}

export interface IProxyPostFull {
  id: string;
  text: string;
  image: string;
  likes: number;
  link: string;
  tags: string[];
  publishDate: {
    enDate: string;
    ruDate: string
    enDateAndTime: string;
    ruDateAndTime: string;
  };
  owner: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
}

export interface IProxyComment {
  id: string;
  message: string;
  owner: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
  post: string;
  publishDate: {
    enDate: string;
    ruDate: string
    enDateAndTime: string;
    ruDateAndTime: string;
  };
}

export interface IProxyOwner {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}
