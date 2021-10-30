import React from "react";
import "./Header.css";
import { IHeaderProps } from "../../@types/interfaces/components";
import Limit from "../limit/Limit";

class Header extends React.Component<IHeaderProps> {
  render() {
    return (
      <header className={`header app__header ${ this.props.className }`}>
        <h1 className="header__title">Пользователи</h1>
        <Limit className={'some'} onValueChange={ this.props.onLimitChange }/>
      </header>
    );
  }
}

export default Header;
