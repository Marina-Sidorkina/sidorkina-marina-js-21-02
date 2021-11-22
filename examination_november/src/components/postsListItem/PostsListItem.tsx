import React from 'react';
import './PostsListItem.scss';

const PostsListItem = () => {
  const name = 'ms. Маша Михайлова';
  const date = '1 мая 04:20';
  const text = 'Загруженное содержимое добавлено к альбому. Вы можете создать новый альбом.';
  return (
    <li className="posts-list__item post-item">
      <div className="post-item__user-block">
        <img
          className="post-item__user-img"
          src="https://i.ibb.co/0r1Jdjt/photo-2021-11-21-02-16-16.jpg"
          alt="Аватар пользователя"
        />
        <div className="post-item__user">
          <div className="post-item__name">{ name }</div>
          <div className="post-item__date">{ date }</div>
        </div>
      </div>
      <img
        className="post-item__post"
        src="https://i.ibb.co/cNbHTxL/photo-2021-11-21-00-19-15.jpg"
        alt="Пост пользователя"
      />
      <p className="post-item__text">{ text }</p>
    </li>
  );
};

export default PostsListItem;
