import React from 'react';
import './Logo.scss';
import logo from './img/logo.png';

const Logo = () => (
  <div className="logo">
    <img className="logo__img" src={logo} alt="Логотип" />
    <p className="logo__text">Delta World</p>
  </div>
);

export default Logo;
