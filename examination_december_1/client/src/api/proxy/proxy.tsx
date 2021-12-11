import axios, { AxiosResponse } from 'axios';
import { INewUserData } from './@types/proxy';

const processResponse = (response: AxiosResponse<any, any>) => {
  if (response.status !== 200) throw new Error('Could not fetch');
  return response;
};

const proxy = axios.create({ baseURL: 'http://127.0.0.1:5000/proxy/' });

export const getPostInfo = (id: string) => proxy.get(`post/${id}`)
  .then(processResponse);

export const getUserInfo = (id: string) => proxy.get(`user/${id}`)
  .then(processResponse);

export const getPostsList = (
  page: number,
  limit: number,
) => proxy.get('post', { params: { page, limit } })
  .then(processResponse);

export const getUsersList = (
  page: number,
  limit: number
) => proxy.get('user', { params: { page, limit } })
  .then(processResponse);

export const getUserPosts = (
  page: number,
  limit: number,
  id: string
) => proxy.get(`user/${id}/post`, { params: { page, limit } })
  .then(processResponse);

export const getCommentsList = (
  page: number,
  limit: number,
  id: string
) => proxy.get(`post/${id}/comment`, { params: { page, limit } })
  .then(processResponse);

export const updateUser = (
  newUserData: Object,
  id: string
) => proxy.put(`/user/${id}`, newUserData)
  .then(processResponse);

export const addAndShowNewUser = (
  newUserData: INewUserData
) => proxy.post('user/create', newUserData);
