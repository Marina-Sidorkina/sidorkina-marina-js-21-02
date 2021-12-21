import { IProxyOwner, IProxyPostFull } from '../../../../../api/proxy/@types/proxy';

export interface IPostModalPostProps {
  postId: string;
  getNewPostModal: Function;
  post: IProxyPostFull;
  isLoading: boolean;
  owner: IProxyOwner;
  error: boolean;
}

export interface IPostModalPostNameProps {
  firstName: string;
  lastName: string;
}
