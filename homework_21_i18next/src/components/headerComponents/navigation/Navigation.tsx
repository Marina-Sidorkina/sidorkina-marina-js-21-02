import React, { useContext } from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/ThemeContext';
import NavigationPostsIcon from '../navigationPostsIcon/NavigationPostsIcon';
import NavigationUsersIcon from '../navigationUsersIcon/NavigationUsersIcon';
import '../../../locale/i18next';

const Navigation = () => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item navigation__item_users">
          <Link className="navigation__link" to="/users">
            <NavigationUsersIcon
              dark={themeContext.darkTheme}
            />
            <span className={`${themeContext.darkTheme
              ? 'navigation__text navigation__text_dark'
              : 'navigation__text'}`}
            >
              { t('navigation.users', {}) }
            </span>
          </Link>
        </li>
        <li className="navigation__item navigation__item_posts">
          <Link className="navigation__link" to="/posts">
            <NavigationPostsIcon
              dark={themeContext.darkTheme}
            />
            <span className={`${themeContext.darkTheme
              ? 'navigation__text navigation__text_dark'
              : 'navigation__text'}`}
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
