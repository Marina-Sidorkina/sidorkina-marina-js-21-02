import React, { useState } from "react";
import { IThemeContextProps, IThemeContextState } from "../@types/interfaces/themeContext";

const ThemeContext = React.createContext<Partial<IThemeContextState>>({});

const ThemeContextProvider = (props: IThemeContextProps) => {
  const [ darkTheme, setDarkTheme ] = useState(false);
  const toggleTheme = (value: boolean) => setDarkTheme(value);

  return (
    <ThemeContext.Provider value={ { darkTheme, toggleTheme } }>
      { props.children }
    </ThemeContext.Provider>
  );
}

export {
  ThemeContextProvider,
  ThemeContext
};
