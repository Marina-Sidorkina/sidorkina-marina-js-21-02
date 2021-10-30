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
