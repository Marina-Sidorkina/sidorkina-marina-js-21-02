import { Match } from "@testing-library/react";
import {History} from "history";

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
  currentMenuItem: string;
}

export interface IUsersListProps {
  perPageLimit: number;
  currentPage: number;
}

export interface IFooterProps {
  currentPage: number;
  showPaginator: boolean;
  itemsAmount: number;
  perPageLimit: number;
}

export interface IPaginatorProps {
  current: number;
  itemsAmount: number;
  perPageLimit: number;
}

export interface ILimitProps {
  onValueChange: (value: number) => void;
  perPageLimit: number;
}

export interface IUserCardParams {
  id: string;
}

export interface IRegistrationProps {
  match: Match;
  location: Location;
  history: History;
}

export interface IUserFormData {
  title?: string;
  firstName: string;
  lastName: string;
  gender?: string;
  email: string;
  dateOfBirth?: string;
  phone?: string;
  picture?: string;
  city?: string;
  country?: string;
}
