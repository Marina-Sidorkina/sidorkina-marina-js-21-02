import React from "react";
import { IThemeContextProps, IThemeContextState } from "../@types/interfaces/themeContext";

const { Provider, Consumer } = React.createContext<Partial<IThemeContextState>>({});

class ThemeContextProvider extends React.Component<IThemeContextProps, IThemeContextState> {
  constructor(props: IThemeContextProps) {
    super(props);

    this.state = {
      darkTheme: false,
      toggleTheme: this.toggleTheme.bind(this)
    }
  }

  toggleTheme() {
    this.setState(({ darkTheme}) => {
      return {
        darkTheme: !darkTheme
      }
    })
  }

  render() {
    return (
      <Provider value={{
        darkTheme: this.state.darkTheme,
        toggleTheme: this.state.toggleTheme}}>
        { this.props.children }
      </Provider>
    );
  }
}

export {
  ThemeContextProvider,
  Consumer as ThemeContextConsumer
};
