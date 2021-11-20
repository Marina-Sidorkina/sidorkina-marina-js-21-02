import React from 'react';
import './Header.scss';
import Logo from '../logo/Logo';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <Logo />
    </div>
  </header>
);

export default Header;
