import React from 'react';
import './PostModalPost.scss';

const PostModalPost = () => {
  const name = 'ms. Маша Михайлова';
  const date = '1 сентября 04:20';
  const text = 'Загруженное содержимое добавлено к альбому. Вы можете создать новый альбом.'
    + 'Загруженное содержимое добавлено к альбому. Вы можете создать новый альбом.'
    + 'Загруженное содержимое добавлено к альбому. Вы можете создать новый альбом.';
  return (
    <div className="post-modal-post__post">
      <div className="post-modal-post__user-info">
        <div className="post-modal-post__user">
          <img
            className="post-modal-post__user-img"
            src="https://i.ibb.co/0r1Jdjt/photo-2021-11-21-02-16-16.jpg"
            alt="Аватар пользователя"
          />
          <div className="post-modal-post__user-name">{ name }</div>
        </div>
        <div className="post-modal-post__post-date">{ date }</div>
      </div>
      <img
        className="post-modal-post__img"
        src="https://i.ibb.co/cNbHTxL/photo-2021-11-21-00-19-15.jpg"
        alt="Пост пользователя"
      />
      <p className="post-modal-post__text">{ text }</p>
    </div>
  );
};

export default PostModalPost;
