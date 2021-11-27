import React, { useContext } from 'react';
import './Theme.scss';
import { Switch } from 'antd';
import { ThemeContext } from '../../../contexts/ThemeContext';

const Theme = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="theme">
      <span className="theme__text">Тёмная тема</span>
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
