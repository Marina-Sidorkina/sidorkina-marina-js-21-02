import React from 'react';
import './Header.scss';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <Logo />
      <Navigation />
    </div>
  </header>
);

export default Header;
