import React, { useState } from 'react';

export interface IThemeContextProps {
  children: React.ReactNode;
}

export interface IThemeContextState {
  darkTheme: boolean;
  toggleTheme: (value: boolean) => void;
}

const ThemeContext = React.createContext<Partial<IThemeContextState>>({});

const ThemeContextProvider = (props: IThemeContextProps) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = (value: boolean) => setDarkTheme(value);

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
