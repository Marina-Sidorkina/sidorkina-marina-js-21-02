import React, { useContext } from 'react';
import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './Theme.module.scss';
import { ThemeContext } from '../../../contexts/ThemeContext';
import '../../../locale/i18next';

const Theme = () => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={styles.theme}>
      <span className={styles.text}>
        { t('theme', {}) }
      </span>
      <Switch
        className="theme__toggle"
        onChange={(switched: boolean) => (
          themeContext.toggleTheme && themeContext.toggleTheme(switched)
        )}
        checked={themeContext.darkTheme}
      />
    </div>
  );
};

export default Theme;
