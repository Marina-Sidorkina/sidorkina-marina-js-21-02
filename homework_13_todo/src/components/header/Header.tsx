import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header app__header">
        <h1 className="header__title">TodoList</h1>
      </header>
    );
  }
}

export default Header;
