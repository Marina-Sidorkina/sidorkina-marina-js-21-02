import React, { useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '../constants/components';
import { getDarkThemeValue } from '../utils/components';
import { IThemeContextProps, IThemeContextState } from './@types/themeContext';

const ThemeContext = React.createContext<Partial<IThemeContextState>>({});

const ThemeContextProvider = (props: IThemeContextProps) => {
  const [darkTheme, setDarkTheme] = useState(getDarkThemeValue());
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
