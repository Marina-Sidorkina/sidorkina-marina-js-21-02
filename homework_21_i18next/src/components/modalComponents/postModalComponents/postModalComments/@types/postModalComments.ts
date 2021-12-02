import { IDummyComment, IDummyOwner } from '../../../../../api/dummyApi/@types/dummyApi';

export interface IPostModalCommentsItemProps {
  date: string | null;
  text: string;
  img: string;
  id: string;
  firstName: string;
  lastName: string;
}

export interface IPostModalCommentsProps {
  comments: IDummyComment[];
  owners: IDummyOwner[];
  isLoading: boolean;
  error: boolean;
  getPostModalCommentsList: Function;
  currentPostId: string;
  limit: number;
  page: number;
}

export interface IPostModalCommentsItemNameProps {
  firstName: string;
  lastName: string;
}
