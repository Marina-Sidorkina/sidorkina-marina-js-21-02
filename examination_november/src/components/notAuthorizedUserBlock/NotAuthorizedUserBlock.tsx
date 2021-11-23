import React from 'react';
import './NotAuthorizedUserBlock.scss';
import { Link } from 'react-router-dom';

const NotAuthorizedUserBlock = () => (
  <div className="default-user-block">
    <div className="default-user-block__item">
      <Link className="default-user-block__link" to="/login">
        <span className="default-user-block__signIn">Вход</span>
      </Link>
    </div>
    <div className="default-user-block__item">
      <Link className="default-user-block__link" to="/registration">
        <span className="default-user-block__register">Регистрация</span>
      </Link>
    </div>
  </div>
);

export default NotAuthorizedUserBlock;
