import React, {useContext} from "react";
import "./Theme.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

const Theme = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <form className={ `theme ${ themeContext.darkTheme ? "theme_dark" : "" }`}>
      <label className="theme__label" htmlFor="theme">Тёмная тема</label>
      <input className="theme__input"
             type="checkbox"
             id="theme"
             checked={ themeContext.darkTheme }
             onChange={ (evt) =>
               themeContext.toggleTheme && themeContext.toggleTheme(evt.target.checked) }/>
    </form>
  );
}

export default Theme;
