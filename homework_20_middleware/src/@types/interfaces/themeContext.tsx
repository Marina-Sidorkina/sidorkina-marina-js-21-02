import React from 'react';

export interface IThemeContextProps {
  children: React.ReactNode;
}

export interface IThemeContextState {
  darkTheme: boolean;
  toggleTheme: (value: boolean) => void;
}
