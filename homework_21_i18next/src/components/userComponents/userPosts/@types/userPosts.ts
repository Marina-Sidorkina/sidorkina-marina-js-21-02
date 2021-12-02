import { IDummyPostPreview } from '../../../../api/dummyApi/@types/dummyApi';

export interface IUserPostsParams {
  id: string;
}

export interface IUserPostsProps {
  isLoading: boolean;
  posts: IDummyPostPreview[];
  loadPosts: Function;
  page: number;
  perPage: number;
  updatePage: Function;
  error: boolean;
}
