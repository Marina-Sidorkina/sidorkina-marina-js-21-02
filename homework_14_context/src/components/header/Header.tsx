import React from "react";
import "./Header.css";
import { IHeaderProps } from "../../@types/interfaces/components";
import Limit from "../limit/Limit";
import Loader from "../loader/Loader";

class Header extends React.Component<IHeaderProps> {
  render() {
    return (
      <header className={`header app__header ${ this.props.className }`}>
        <h1 className="header__title">Пользователи</h1>
        { this.props.isLoading ? <Loader/> : null }
        <Limit onValueChange={ this.props.onLimitChange }/>
      </header>
    );
  }
}

export default Header;
