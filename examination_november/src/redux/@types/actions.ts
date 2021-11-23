import { IDummyApiResponse, IDummyUserFull } from '../../@types/dummyApi';

export interface IAction {
  type: string
}

export interface IAppActionType extends IAction{
  payload: string | number | boolean;
}

export interface ILoaderActionType extends IAction{
  payload: number;
}

export interface IRegistrationActionType extends IAction{
  payload: string;
}

export interface IUserInfoActionType extends IAction{
  payload?: IDummyUserFull;
  error?: any
}

export interface IUsersListActionType extends IAction{
  payload?: IDummyApiResponse;
  error?: any
}

export interface IUserPostsActionType extends IAction{
  payload?: IDummyApiResponse;
  error?: any
}

export interface IPostsActionType extends IAction{
  payload?: IDummyApiResponse;
  error?: any
}

export interface ILoginActionType extends IAction{
  payload?: IDummyUserFull | string;
  error?: any
}
