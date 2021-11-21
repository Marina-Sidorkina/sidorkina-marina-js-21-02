import React from 'react';
import './AuthorizedUserBlock.scss';

const AuthorizedUserBlock = () => {
  const name = 'Анжелика';
  const src = 'https://i.ibb.co/0r1Jdjt/photo-2021-11-21-02-16-16.jpg';

  return (
    <div className="authorized-user-block">
      <div className="authorized-user-block__item">
        <img
          className="authorized-user-block__user-photo"
          src={src}
          alt="Фото пользователя"
        />
        <span className="authorized-user-block__user-name">{ name }</span>
      </div>
      <div className="authorized-user-block__item">
        <span className="authorized-user-block__logout">выход</span>
      </div>
    </div>
  );
};

export default AuthorizedUserBlock;
