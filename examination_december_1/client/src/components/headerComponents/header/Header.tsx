import React, { useContext } from 'react';
import styles from './Header.module.scss';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import Authorization from '../authorization/Authorization';
import { ThemeContext } from '../../../contexts/ThemeContext';

const Header = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <header className={themeContext.darkTheme
      ? `${styles.header} ${styles.header_dark}`
      : styles.header}
    >
      <div className={styles.container}>
        <Logo />
        <Navigation />
        <Authorization />
      </div>
    </header>
  );
};

export default Header;
