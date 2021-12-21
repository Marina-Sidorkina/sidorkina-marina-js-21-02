export interface IPostsListItem {
  firstName: string;
  lastName: string;
  title: string;
  date: string | null;
  text: string;
  image: string;
  avatar: string;
  id: string;
  userId: string;
}

export interface IPostsListItemNameProps {
  title: string;
  firstName: string;
  lastName: string;
}
