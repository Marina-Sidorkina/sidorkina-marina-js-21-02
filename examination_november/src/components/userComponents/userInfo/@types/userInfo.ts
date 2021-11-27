import { IDummyUserFull } from '../../../../api/dummyApi/@types/dummyApi';

export interface IUserInfoParams {
  id: string;
}

export interface IUserInfoProps {
  isLoading: boolean;
  user: IDummyUserFull;
  loadUser: Function;
  authorizedUserId: string;
  openModal: Function;
  resetFormImage: Function;
  error: boolean;
}
