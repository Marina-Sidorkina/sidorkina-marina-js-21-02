import React from 'react';
import './Footer.scss';
import Theme from '../theme/Theme';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__copyright">Delta World &copy; 1970-2077</div>
      <Theme />
    </div>
  </footer>
);

export default Footer;
