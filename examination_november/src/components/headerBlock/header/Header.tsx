import React from 'react';
import './Header.scss';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import Authorization from '../authorization/Authorization';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <Logo />
      <Navigation />
      <Authorization />
    </div>
  </header>
);

export default Header;
