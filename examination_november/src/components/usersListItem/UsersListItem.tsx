import React from 'react';
import './UsersListItem.scss';

const UsersListItem = () => (
  <li className="users-list__item user-item">
    <img
      className="user-item__img"
      src="http://placehold.it/200x200"
      alt="Аватар пользователя"
    />
    <div className="user-item__avatar">ms. Маша Михайлова</div>
  </li>
);

export default UsersListItem;
