import {IDummyApiResponse, IDummyUserCard} from "../@types/interfaces/dummyApi";
import {METHOD_GET, API_ID, API_ID_FIELD} from "../constants/dummyApi";
import { BASE_URL, USER_URL, PAGE_FIELD, LIMIT_FIELD } from "../constants/dummyApi";

const doGetRequest = <T extends any>(
  path: string,
  callback: (resp: T) => void,
  errorCallback?: (response: any) => void,
  searchParams?: Record<string, any>,
) => {

  const url = new URL(path, BASE_URL);

  searchParams && Object.entries(searchParams).forEach((params) => {
    url.searchParams.append(params[0], params[1].toString());
  });

  fetch(url.toString(), {
    method: METHOD_GET,
    headers: new Headers({
      [API_ID_FIELD]: API_ID
    }),
  }).then((resp) => resp.json())
    .then(callback)
    .catch(errorCallback)
};

export const getUsersList = (
    page: number,
    limit: number,
    onSuccess: (response: IDummyApiResponse) => void,
    onError: (response: any) => void
  ) => {
  doGetRequest(USER_URL, onSuccess, onError, {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit,
  })
}

export const getUserCard = (
    id: string,
    onSuccess: (response: IDummyUserCard) => void,
    onError: (response: any) => void
  ) => {
  doGetRequest(`${USER_URL}/${id}`, onSuccess, onError);
}
