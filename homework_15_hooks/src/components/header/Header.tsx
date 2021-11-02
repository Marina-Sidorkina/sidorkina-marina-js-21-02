import React from "react";
import "./Header.scss";
import { IHeaderProps } from "../../@types/interfaces/components";
import Limit from "../limit/Limit";
import Loader from "../loader/Loader";

const Header = (props: IHeaderProps) => {
  return (
    <header className={`header app__header ${ props.className }`}>
      <h1 className="header__title">Пользователи</h1>
      { props.isLoading ? <Loader/> : null }
      <Limit onValueChange={ props.onLimitChange }/>
    </header>
  );
}

export default Header;
