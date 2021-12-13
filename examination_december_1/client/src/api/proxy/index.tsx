import axios, { AxiosResponse } from 'axios';
import { INewUserData } from './@types/proxy';
import { PROXY_API_CONFIG } from './config';

const processResponse = (response: AxiosResponse<any, any>) => {
  if (response.status !== PROXY_API_CONFIG.statusOk) throw new Error('Could not fetch');
  return response;
};

const proxy = axios.create({ baseURL: PROXY_API_CONFIG.baseUrl });

export const getPostInfo = (id: string) => proxy.get(`${PROXY_API_CONFIG.paths.post}/${id}`)
  .then(processResponse);

export const getUserInfo = (id: string) => proxy.get(`${PROXY_API_CONFIG.paths.user}/${id}`)
  .then(processResponse);

export const getPostsList = (
  page: number,
  limit: number,
) => proxy.get(PROXY_API_CONFIG.paths.post, { params: { page, limit } })
  .then(processResponse);

export const getUsersList = (
  page: number,
  limit: number
) => proxy.get(PROXY_API_CONFIG.paths.user, { params: { page, limit } })
  .then(processResponse);

export const getUserPosts = (
  page: number,
  limit: number,
  id: string
) => proxy.get(`${PROXY_API_CONFIG.paths.user}/${id}/${PROXY_API_CONFIG.paths.post}`, { params: { page, limit } })
  .then(processResponse);

export const getCommentsList = (
  page: number,
  limit: number,
  id: string
) => proxy.get(
  `${PROXY_API_CONFIG.paths.post}/${id}/${PROXY_API_CONFIG.paths.comment}`,
  { params: { page, limit } }
).then(processResponse);

export const updateUser = (
  newUserData: Object,
  id: string
) => proxy.put(`/${PROXY_API_CONFIG.paths.user}/${id}`,
  JSON.stringify(newUserData), PROXY_API_CONFIG.configuration)
  .then(processResponse);

export const addAndShowNewUser = (
  newUserData: INewUserData
) => proxy.post(
  `${PROXY_API_CONFIG.paths.user}/${PROXY_API_CONFIG.paths.create}`,
  JSON.stringify(newUserData), PROXY_API_CONFIG.configuration
).then(processResponse);
