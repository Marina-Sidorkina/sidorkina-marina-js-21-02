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
  users: IUserProps[];
  isLoading: boolean;
}

export interface IHeaderProps {
  onLimitChange: (value: number) => void;
  isLoading: boolean;
}

export interface IUsersListProps {
  list: IUserProps[];
}

export interface IFooterProps {
  currentPage: number;
  onPageChange: (id: number) => void;
}

export interface IPaginatorProps {
  onCurrentChange: (current: number) => void;
  current: number;
}

export interface ILimitProps {
  onValueChange: (value: number) => void;
}
