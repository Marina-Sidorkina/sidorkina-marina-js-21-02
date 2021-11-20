import React from 'react';
import './PostsListItem.scss';

const PostsListItem = () => {
  const name = 'ms. Маша Михайлова';
  const date = '1 мая 04:20';
  return (
    <li className="posts-list__item post-item">
      <div className="post-item__user-block">
        <img
          className="post-item__user-img"
          src="http://placehold.it/40x40"
          alt="Аватар пользователя"
        />
        <div className="post-item__user-name">{ name }</div>
        <div className="post-item__date">{ date }</div>
      </div>
      <img
        className="post-item__post"
        src="https://i.ibb.co/cNbHTxL/photo-2021-11-21-00-19-15.jpg"
        alt="Пост пользователя"
      />
      <p className="post-item__text">
        Загруженное содержимое добавлено к альбому.
        Вы можете создать новый альбом.
      </p>
    </li>
  );
};

export default PostsListItem;
