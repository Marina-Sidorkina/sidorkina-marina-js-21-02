import {IDummyUser} from "./dummyApi";

export interface IUserProps {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  index: number;
  className: string;
}

export interface IAppState {
  currentPage: number;
  perPageLimit: number;
  users: IDummyUser[];
}

export interface IHeaderProps {
  className: string;
}

export interface IUsersListProps {
  list: IDummyUser[];
  userClassName: string;
}

export interface IFooterProps {
  currentPage: number;
  onPageChange: (id: number) => void;
  themeClassName: string;
  paginatorClassName: string;
}

export interface IPaginatorProps {
  onCurrentChange: (current: number) => void;
  current: number;
  className: string;
}

export interface IThemeProps {
  className: string;
}
