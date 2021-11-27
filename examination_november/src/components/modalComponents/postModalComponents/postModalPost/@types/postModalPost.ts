import { IDummyOwner, IDummyPostFull } from '../../../../../api/dummyApi/@types/dummyApi';

export interface IPostModalPostProps {
  postId: string;
  getNewPostModal: Function;
  post: IDummyPostFull;
  isLoading: boolean;
  owner: IDummyOwner;
  error: boolean;
}

export interface IPostModalPostNameProps {
  firstName: string;
  lastName: string;
}
