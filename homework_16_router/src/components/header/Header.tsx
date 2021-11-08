import React, { useContext } from "react";
import "./Header.scss";
import { IHeaderProps } from "../../@types/interfaces/components";
import Limit from "../limit/Limit";
import Loader from "../loader/Loader";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = (props: IHeaderProps) => {
  const themeContext = useContext(ThemeContext);
  const { isLoading, showLimit, perPageLimit } = props;


  return (
    <header className={`header app__header ${ themeContext.darkTheme ? "header_dark" : "" }`}>
      <h1 className="header__title">Пользователи</h1>
      { isLoading ? <Loader/> : null }
      { !showLimit ? null :
        <Limit onValueChange={ props.onLimitChange }
               perPageLimit={ perPageLimit }/>
      }
    </header>
  );
}

export default Header;
