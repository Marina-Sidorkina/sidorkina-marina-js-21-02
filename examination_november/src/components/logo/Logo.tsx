import React from 'react';
import './Logo.scss';
import logo from './img/logo.png';
import { LOGO_ALT_TEXT } from '../../constants/components/logo';

const Logo = () => (
  <div className="logo">
    <img className="logo__img" src={logo} alt={LOGO_ALT_TEXT} />
    <p className="logo__text">Delta World</p>
  </div>
);

export default Logo;
