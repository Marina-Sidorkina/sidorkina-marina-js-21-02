import React, { useContext } from "react";
import "./Header.scss";
import { IHeaderProps } from "../../@types/interfaces/components";
import Limit from "../limit/Limit";
import Loader from "../loader/Loader";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = (props: IHeaderProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <header className={`header app__header ${ themeContext.darkTheme ? "header_dark" : "" }`}>
      <h1 className="header__title">Пользователи</h1>
      { props.isLoading ? <Loader/> : null }
      { !props.showLimit ? null :
        <Limit onValueChange={ props.onLimitChange }/>
      }
    </header>
  );
}

export default Header;
