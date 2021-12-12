import React from 'react';
import styles from './Logo.module.scss';
import logo from './img/logo.png';

const Logo = () => (
  <div className={styles.logo}>
    <img className={styles.img} src={logo} alt="Логотип" />
    <p className={styles.text}>Delta World</p>
  </div>
);

export default Logo;
