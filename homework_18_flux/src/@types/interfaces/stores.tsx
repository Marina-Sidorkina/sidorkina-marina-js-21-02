import { IDummyUser } from "./dummyApi";

export interface IUsersListStoreState {
  users: IDummyUser[];
  isLoading: boolean;
}
