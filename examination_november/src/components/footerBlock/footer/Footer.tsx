import React, { useContext } from 'react';
import './Footer.scss';
import Theme from '../theme/Theme';
import { ThemeContext } from '../../../contexts/ThemeContext';

const Footer = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <footer className={`${themeContext.darkTheme ? 'footer footer_dark' : 'footer'}`}>
      <div className="footer__container">
        <div className="footer__copyright">Delta World &copy; 1970-2077</div>
        <Theme />
      </div>
    </footer>
  );
};

export default Footer;
