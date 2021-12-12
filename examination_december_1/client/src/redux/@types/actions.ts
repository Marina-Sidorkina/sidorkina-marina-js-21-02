import {
  IProxyApiResponse, IProxyUserFull, IProxyPostFull, IProxyComment
} from '../../api/proxy/@types/proxy';

export interface IAction {
  type: string
}

export interface ILoaderActionType extends IAction {
  payload: number;
}

export interface IRegistrationActionType extends IAction {
  payload: string;
}

export interface IUserInfoActionType extends IAction {
  payload?: IProxyUserFull;
  error?: any
}

export interface IUsersListActionType extends IAction {
  payload?: IProxyApiResponse;
  error?: any
}

export interface IUserPostsActionType extends IAction {
  payload?: IProxyApiResponse;
  error?: any
}

export interface IPostsActionType extends IAction {
  payload?: IProxyApiResponse;
  error?: any
}

export interface IPostModalPostActionType extends IAction {
  payload: IProxyPostFull;
  error?: any;
}

export interface IPostModalCommentsActionType extends IAction {
  payload: IProxyComment[],
  page: number,
  total: number
}

export interface IChangeLanguageActionType extends IAction {
  payload: string
}
