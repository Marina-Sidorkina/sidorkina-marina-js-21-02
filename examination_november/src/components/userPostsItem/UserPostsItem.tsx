import React from 'react';
import './UserPostsItem.scss';

const UserPostsItem = () => (
  <li className="user-posts__item user-post-item">
    <img
      className="user-post-item__photo"
      src="https://i.ibb.co/cNbHTxL/photo-2021-11-21-00-19-15.jpg"
      alt="Фото"
    />
    <p className="user-post-item__text">
      Мой племяш прислал фото с отдыха. Люблю такие солнечные деньки.
    </p>
  </li>
);

export default UserPostsItem;
