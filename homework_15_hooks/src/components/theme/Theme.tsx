import React from "react";
import "./Theme.scss";
import { ThemeContextConsumer } from "../../contexts/ThemeContext";
import { IThemeContextState } from "../../@types/interfaces/themeContext";
import { IThemeProps } from "../../@types/interfaces/components";

const Theme = (props: IThemeProps) => {
  return (
    <ThemeContextConsumer>
      {
        (context: Partial<IThemeContextState>) => {
          return (
            <form className={ `theme ${ props.className }`}>
              <label className="theme__label" htmlFor="theme">Тёмная тема</label>
              <input className="theme__input"
                     type="checkbox"
                     id="theme"
                     checked={ context.darkTheme }
                     onChange={ context.toggleTheme }/>
            </form>
          );
        }
      }
    </ThemeContextConsumer>
  );
}

export default Theme;
