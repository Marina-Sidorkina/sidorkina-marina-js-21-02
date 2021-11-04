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
  showLimit: boolean;
  perPageLimit: number;
}

export interface IUsersListProps {
  setShowNavItems: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  perPageLimit: number;
  currentPage: number;
}

export interface IFooterProps {
  currentPage: number;
  onPageChange: (id: number) => void;
  showPaginator: boolean;
}

export interface IPaginatorProps {
  onCurrentChange: (current: number) => void;
  current: number;
}

export interface ILimitProps {
  onValueChange: (value: number) => void;
  perPageLimit: number;
}

export interface IUserCardProps {
  setShowNavItems: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
}

export interface IUserCardParams {
  id: string;
}
