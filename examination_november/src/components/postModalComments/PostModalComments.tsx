import React from 'react';
import './PostModalCommetns.scss';

interface IPostModalCpmmentsItemProps {
  name: string;
  date: string;
  text: string;
}

const PostModalCpmmentsItem = ({ name, date, text }: IPostModalCpmmentsItemProps) => (
  <li className="post-modal-comments__item">
    <img
      className="post-modal-comments__img"
      src="https://i.ibb.co/0r1Jdjt/photo-2021-11-21-02-16-16.jpg"
      alt="Аватар пользователя"
    />
    <div className="post-modal-comments__name">{ name }</div>
    <div className="post-modal-comments__date">{ date }</div>
    <p className="post-modal-comments__text">{ text }</p>
  </li>
);

const PostModalComments = () => {
  const name = 'ms. Маша Михайлова';
  const date = '1 мая 04:20';
  const text = 'Загруженное содержимое добавлено к альбому. Вы можете создать новый альбом.';
  return (
    <ul className="post-modal-comments">
      <PostModalCpmmentsItem name={name} date={date} text={text} />
      <PostModalCpmmentsItem name={name} date={date} text={text} />
    </ul>
  );
};

export default PostModalComments;
