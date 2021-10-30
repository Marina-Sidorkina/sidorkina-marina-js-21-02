export interface IAppState {
  currentPage: number;
}

export interface IUserProps {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
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
