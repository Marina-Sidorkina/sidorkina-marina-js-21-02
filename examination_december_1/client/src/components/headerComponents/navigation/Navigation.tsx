import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Navigation.module.scss';
import { ThemeContext } from '../../../contexts/ThemeContext';
import NavigationPostsIcon from '../navigationPostsIcon/NavigationPostsIcon';
import NavigationUsersIcon from '../navigationUsersIcon/NavigationUsersIcon';
import '../../../locale/i18next';

const Navigation = () => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} to="/users">
            <NavigationUsersIcon
              dark={themeContext.darkTheme}
            />
            <span className={themeContext.darkTheme
              ? `${styles.text} ${styles.text_dark}`
              : styles.text}
            >
              { t('navigation.users', {}) }
            </span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to="/posts">
            <NavigationPostsIcon
              dark={themeContext.darkTheme}
            />
            <span className={themeContext.darkTheme
              ? `${styles.text} ${styles.text_dark}`
              : styles.text}
            >
              { t('navigation.posts') }
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
