import { IDummyPost } from '../../../../api/dummyApi/@types/dummyApi';

export interface IPostsListProps {
  isLoading: boolean;
  posts: IDummyPost[];
  loadPosts: Function;
  page: number;
  perPage: number;
  error: boolean;
}
