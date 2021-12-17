import React, { useContext } from 'react';
import styles from './Footer.module.scss';
import Theme from '../theme/Theme';
import { ThemeContext } from '../../../contexts/ThemeContext';
import LanguageSelect from '../languageSelect/LanguageSelect';

const Footer = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <footer className={themeContext.darkTheme
      ? `${styles.footer} ${styles.footer_dark}`
      : styles.footer}
    >
      <div className={styles.container}>
        <div className={styles.copyright}>Delta World &copy; 1970-2077</div>
        <LanguageSelect />
        <Theme />
      </div>
    </footer>
  );
};

export default Footer;
