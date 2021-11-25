import { INewUserData } from '../@types/dummyApi';
import {
  METHOD_GET, API_ID, API_ID_FIELD, NEW_USER_POST_URL, METHOD_POST,
  BASE_URL, USER_URL, PAGE_FIELD, LIMIT_FIELD, CONTENT_TYPE_FIELD, CONTENT_TYPE, POST_URL
} from '../constants/dummyApi';
import { getUserPostsUrl } from '../utils/api';

const doGetRequest = (
  path: string,
  searchParams?: Record<string, any>,
) => {
  const url = new URL(path, BASE_URL);

  searchParams && Object.entries(searchParams).forEach((params) => {
    url.searchParams.append(params[0], params[1].toString());
  });

  return fetch(url.toString(), {
    method: METHOD_GET,
    headers: new Headers({
      [API_ID_FIELD]: API_ID
    }),
  }).then((resp) => {
    if (!resp.ok) {
      throw new Error('Could not fetch');
    }
    return resp.json();
  });
};

export const getUsersList = (
  page: number,
  limit: number,
) => doGetRequest(USER_URL, {
  [PAGE_FIELD]: page,
  [LIMIT_FIELD]: limit,
});

export const getPostsList = (
  page: number,
  limit: number,
) => doGetRequest(POST_URL, {
  [PAGE_FIELD]: page,
  [LIMIT_FIELD]: limit,
});

export const getUserInfo = (
  id: string
) => doGetRequest(`${USER_URL}/${id}`);

export const addAndShowNewUser = (newUserData: INewUserData) => {
  const url = new URL(NEW_USER_POST_URL, BASE_URL);
  return fetch(url.toString(), {
    method: METHOD_POST,
    body: JSON.stringify(newUserData),
    headers: new Headers({
      [API_ID_FIELD]: API_ID,
      [CONTENT_TYPE_FIELD]: CONTENT_TYPE
    })
  }).then((resp) => resp.json());
};

export const getUserPosts = (
  page: number,
  limit: number,
  id: string
) => doGetRequest(getUserPostsUrl(id), {
  [PAGE_FIELD]: page,
  [LIMIT_FIELD]: limit,
});

export const updateUser = (newUserData: Object, id: string) => {
  const url = new URL(`${USER_URL}/${id}`, BASE_URL);
  return fetch(url.toString(), {
    method: 'PUT',
    body: JSON.stringify(newUserData),
    headers: new Headers({
      [API_ID_FIELD]: API_ID,
      [CONTENT_TYPE_FIELD]: CONTENT_TYPE
    })
  }).then((resp) => resp.json());
};
