import React, { useState } from 'react';
import { DARK_THEME, LOCAL_STORAGE_THEME_KEY } from '../constants/components';
import { IThemeContextProps, IThemeContextState } from './@types/themeContext';

const ThemeContext = React.createContext<Partial<IThemeContextState>>({});

const ThemeContextProvider = (props: IThemeContextProps) => {
  const [darkTheme, setDarkTheme] = useState(localStorage
    .getItem(LOCAL_STORAGE_THEME_KEY) === DARK_THEME);
  const toggleTheme = (value: boolean) => {
    setDarkTheme(value);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, value.toString());
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      { props.children }
    </ThemeContext.Provider>
  );
};

export {
  ThemeContextProvider,
  ThemeContext
};
