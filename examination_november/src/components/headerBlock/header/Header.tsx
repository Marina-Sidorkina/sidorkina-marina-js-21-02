import React, { useContext } from 'react';
import './Header.scss';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import Authorization from '../authorization/Authorization';
import { ThemeContext } from '../../../contexts/ThemeContext';

const Header = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <header className={`${themeContext.darkTheme ? 'header header_dark' : 'header'}`}>
      <div className="header__container">
        <Logo />
        <Navigation />
        <Authorization />
      </div>
    </header>
  );
};

export default Header;
