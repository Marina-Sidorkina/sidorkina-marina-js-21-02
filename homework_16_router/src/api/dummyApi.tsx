import {IDummyApiResponse, IDummyUserCard} from "../@types/interfaces/dummyApi";
import {METHOD_GET, API_ID, API_ID_FIELD} from "../constants/dummyApi";
import { getUsersListUrl, getUserCardUrl } from "../utils/dummuApi";

export const getUsersList = (
  page: number,
  limit: number,
  onSuccess: (response: IDummyApiResponse) => void,
  onError: (response: any) => void
) => fetch(getUsersListUrl(page, limit), {
  method: METHOD_GET,
  headers: new Headers({
    [API_ID_FIELD]: API_ID
  }),
}).then((response) => response.json())
  .then(onSuccess)
  .catch(onError);

export const getUserCard = (
  id: string,
  onSuccess: (response: IDummyUserCard) => void,
  onError: (response: any) => void,
  finalCallback?: () => void,
) => fetch(getUserCardUrl(id), {
  method: METHOD_GET,
  headers: new Headers({
    [API_ID_FIELD]: API_ID
  }),
}).then((response) => response.json())
  .then(onSuccess)
  .catch(onError)
  .finally(finalCallback);

