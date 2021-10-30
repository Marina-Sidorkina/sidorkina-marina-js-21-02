import {IDummyUser} from "./dummyApi";

export interface IUserProps {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  index: number;
}

export interface IAppState {
  currentPage: number;
  perPageLimit: number;
  users: IDummyUser[];
}

export interface IUsersListProps {
  list: IDummyUser[];
}

export interface IFooterProps {
  currentPage: number;
  onPageChange: (id: number) => void;
}

export interface IPaginatorProps {
  onCurrentChange: (current: number) => void;
  current: number;
}
