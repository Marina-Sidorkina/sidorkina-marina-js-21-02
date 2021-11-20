import React from 'react';
import './AuthorizedUserBloc.scss';

const AuthorizedUserBlock = () => {
  const name = 'Анжелика';
  const src = 'http://placehold.it/30x30';

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
