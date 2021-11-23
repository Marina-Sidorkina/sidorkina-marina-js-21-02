import React from 'react';
import './PostsListItem.scss';

interface IPostsListItem {
  name: string;
  date: string | null;
  text: string;
  image: string;
  avatar: string;
}

const PostsListItem = (props: IPostsListItem) => {
  const {
    name, date, text, image, avatar
  } = props;
  return (
    <li className="posts-list__item post-item">
      <div className="post-item__user-block">
        <img
          className="post-item__user-img"
          src={avatar}
          alt="Аватар пользователя"
        />
        <div className="post-item__user">
          <div className="post-item__name">{ name }</div>
          <div className="post-item__date">{ date }</div>
        </div>
      </div>
      <img
        className="post-item__post"
        src={image}
        alt="Пост пользователя"
      />
      <p className="post-item__text">{ text }</p>
    </li>
  );
};

export default PostsListItem;
