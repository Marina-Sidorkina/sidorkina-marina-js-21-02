import React from 'react';
import './UsersListItem.scss';

const UsersListItem = () => (
  <li className="users-list__item user-item">
    <img
      className="user-item__img"
      src="https://i.ibb.co/0r1Jdjt/photo-2021-11-21-02-16-16.jpg"
      alt="Аватар пользователя"
    />
    <div className="user-item__avatar">ms. Маша Михайлова</div>
  </li>
);

export default UsersListItem;
