export interface IPostsListItem {
  firstName: string;
  lastName: string;
  title: string;
  date: string | null;
  text: string;
  image: string;
  avatar: string;
  openModal: Function;
  id: string;
  userId: string;
  setPostModalCurrenId: Function;
}

export interface IPostsListItemNameProps {
  title: string;
  firstName: string;
  lastName: string;
}
