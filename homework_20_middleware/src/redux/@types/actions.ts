import { IDummyApiResponse, IDummyUserCard } from '../../@types/interfaces/dummyApi';

export interface IAction {
  type: string
}

export interface IAppActionType extends IAction{
  payload: string | number | boolean;
}

export interface ILimitActionType extends IAction{
  payload: number;
}

export interface ILoaderActionType extends IAction{
  payload: number;
}

export interface IRegistrationActionType extends IAction{
  payload: string;
}

export interface IUserCardActionType extends IAction{
  payload?: IDummyUserCard;
}

export interface IUsersListActionType extends IAction{
  payload?: IDummyApiResponse;
  error?: any
}
