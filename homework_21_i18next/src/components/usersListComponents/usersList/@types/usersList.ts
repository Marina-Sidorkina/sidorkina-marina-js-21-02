export interface IUserListItem {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface IUserListProps {
  isLoading: boolean;
  users: IUserListItem[];
  loadUsers: Function;
  page: number;
  perPage: number;
  error: boolean;
}
