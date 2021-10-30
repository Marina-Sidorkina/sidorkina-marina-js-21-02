import { BASE_URL } from "../constants/dummyApi";

export const getUsersListUrl = (page: number, limit: number) => {
  return `${ BASE_URL }user?page=${ page }&limit=${ limit }`
}