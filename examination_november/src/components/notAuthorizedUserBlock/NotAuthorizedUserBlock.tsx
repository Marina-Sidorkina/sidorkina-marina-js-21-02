import React from 'react';
import './NotAuthorizedUserBlock.scss';

const NotAuthorizedUserBlock = () => (
  <div className="default-user-block">
    <div className="default-user-block__item">
      <span className="default-user-block__signIn">Вход</span>
    </div>
    <div className="default-user-block__item">
      <span className="default-user-block__register">Регистрация</span>
    </div>
  </div>
);

export default NotAuthorizedUserBlock;
