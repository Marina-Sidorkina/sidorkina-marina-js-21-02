import React from "react";
import "./Header.css";
import { IHeaderProps } from "../../@types/interfaces/components";

class Header extends React.Component<IHeaderProps> {
  render() {
    return (
      <header className={`header app__header ${ this.props.className }`}>
        <h1 className="header__title">Пользователи</h1>
      </header>
    );
  }
}

export default Header;
