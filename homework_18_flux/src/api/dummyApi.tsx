import { IDummyUserCard, INewUserData } from "../@types/interfaces/dummyApi";
import {
  METHOD_GET, API_ID, API_ID_FIELD, NEW_USER_POST_URL, METHOD_POST,
  BASE_URL, USER_URL, PAGE_FIELD, LIMIT_FIELD, CONTENT_TYPE_FIELD, CONTENT_TYPE
} from "../constants/api/dummyApi";

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
  }).then((resp) => resp.json())

};

export const getUsersList = (
    page: number,
    limit: number,
  ) => {
  return doGetRequest(USER_URL, {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit,
  })
}

export const getUserCard = (
    id: string
  ) => {
  return doGetRequest(`${USER_URL}/${id}`);
}

export const addAndShowNewUser = (newUserData: INewUserData, callback: Function) => {
  const url = new URL(NEW_USER_POST_URL, BASE_URL);
  fetch(url.toString(), {
    method: METHOD_POST,
    body: JSON.stringify(newUserData),
    headers: new Headers({
      [API_ID_FIELD]: API_ID,
      [CONTENT_TYPE_FIELD]: CONTENT_TYPE
    })
  }).then((resp) => resp.json())
    .then((resp) => {
      callback(resp.id);
    }).catch(console.error);
}
